/**
 * Helper Functions
 */

import { writeFile } from "fs";
import { promisify } from "util";

import {
  ElementDefinition,
  ElementGroup,
  FHIRPrimitives,
  FHIRPrimitivesTypes
} from "./conformance";

export const writeFileAsync = promisify(writeFile);

/**
 * Groups list of ElementDefinitions into related elements
 * e.g. the root resource and the embedded backbone elements.
 * Root resource is grouped using the type name, but assigned
 * the StructureDefinition name. For example, for MoneyQuantity,
 * the root resource type is Quantity, but the name of the type
 * will be MoneyQuantity.
 */
export const getElementGroups = (
  resourceName: string,
  resourceTypeName: string,
  elementDefinitions: ElementDefinition[]
): ElementGroup[] => {
  /**
   * If the target and comparison string are the same, return
   * the alternative string else return the target.
   * Useful for renaming profile ElementDefinition paths from
   * the base type to the name of the profile e.g. Quantity -> MoneyQuantity
   */
  const replaceIfMatch = (
    target: string,
    comparison: string,
    alternative: string
  ) => (target === comparison ? alternative : target);

  const groupNames = elementDefinitions
    .filter(
      el =>
        isBackboneDefinition(el) ||
        isElementDefinition(el) ||
        isResourceDefinition(resourceTypeName, el)
    )
    .map(e =>
      replaceIfMatch(pathToPascalCase(e.path), resourceTypeName, resourceName)
    );

  const groups = elementDefinitions.reduce<{ [key: string]: ElementGroup }>(
    (accum, curr) => {
      const { path } = curr;
      const parentName = replaceIfMatch(
        isResourceDefinition(resourceTypeName, curr)
          ? ""
          : pathToPascalCase(
              path
                .split(".")
                .slice(0, -1)
                .join(".")
            ),
        resourceTypeName,
        resourceName
      );

      const name = replaceIfMatch(
        pathToPascalCase(path),
        resourceTypeName,
        resourceName
      );
      const isGroupRoot = groupNames.includes(name);
      const group = accum[name] || {};
      const isGroupChild = groupNames.includes(parentName);
      const parentGroup = accum[parentName] || {};

      return {
        ...accum,
        ...(isGroupRoot && {
          [name]: {
            ...group,
            comment: curr.short || "",
            definitions: [],
            name
          }
        }),
        ...(isGroupChild && {
          [parentName]: {
            ...parentGroup,
            definitions: [...(parentGroup.definitions || []), curr]
          }
        })
      };
    },
    {}
  );

  // Sorts list reverse alphabetically so deeper nested groups are defined first
  return Object.keys(groups)
    .sort()
    .reverse()
    .map(key => groups[key]);
};

/**
 * Generates sorted import statements for non-primitive types
 */
export const getImports = (
  elementDefinitions: ElementDefinition[]
): string[] => {
  return Array.from(
    new Set(
      elementDefinitions.reduce<string[]>((accum, curr) => {
        const { type } = curr;
        const nonPrimitiveTypes = (type || [])
          .filter(
            ({ code }) =>
              code &&
              !Object.values(FHIRPrimitives).includes(code) &&
              code !== "BackboneElement" &&
              code !== "Element"
          )
          .map(({ code }) => code);
        return [...accum, ...nonPrimitiveTypes];
      }, [])
    )
  ).sort();
};

/**
 * Wrap io-ts RuntimeType declaration in recursive type boilerplate
 * to provide TypeScript static type hint
 */
export const wrapRecursive = (name: string, runType: string) => {
  return `export const ${name}: t.RecursiveType<t.Type<I${name}>> = t.recursion('${name}', () =>
    ${runType}
  )`;
};

interface TypeInfo {
  display: string[];
  array: boolean;
}

/**
 * Parses ElementDefinition into info needed to display types
 * Encodes special cases like content references
 */
export const parseType = (elementDefinition: ElementDefinition): TypeInfo => {
  const { contentReference, path, type } = elementDefinition;
  const array = isArray(elementDefinition);

  // TODO: Why is Element type only an extension?
  if (path === "Element.id" || path === "Extension.url") {
    return {
      array,
      display: ["string"]
    };
  }

  // If contentReference, type is reference name
  if (!!contentReference) {
    return {
      array,
      display: [pathToPascalCase(contentReference.slice(1))]
    };
  }

  // If backbone or element definition, type is element name
  if (
    isBackboneDefinition(elementDefinition) ||
    isElementDefinition(elementDefinition)
  ) {
    return {
      array,
      display: [pathToPascalCase(path)]
    };
  }

  return {
    array,
    display: (type || []).map(({ code }) => code)
  };
};

/**
 * Given an array of types, returns io-ts type declaration string
 */
export const typeDeclaration = (elementDefinition: ElementDefinition) => {
  const { array, display } = parseType(elementDefinition);

  const declarations = display.map(type =>
    Object.values(FHIRPrimitives).includes(type)
      ? `primitives.R4.${type}`
      : type
  );
  const declaration =
    declarations.length === 1
      ? declarations[0]
      : `t.union([${declarations.join(", ")}])`;
  return array ? `t.array(${declaration})` : declaration;
};

/**
 * Generates TypeScript interface from list of ElementDefinitions
 */
export const generateInterface = ({ name, definitions }: ElementGroup) => {
  return `interface I${name} {
    ${definitions
      .map(element => {
        const { min, path } = element;
        const propertyName = elementName(element);
        const { array, display } = parseType(element);
        const isRequired = min! > 0;
        const typeName = display
          .map(type =>
            Object.values(FHIRPrimitives).includes(type)
              ? `t.TypeOf<primitives.R4.${FHIRPrimitivesTypes[type]}>`
              : type
          )
          .join(" | ");

        if (!typeName) {
          throw new Error(`Expected a type for element ${path}.`);
        }

        return `${propertyName}${isRequired ? "" : "?"}: ${typeName}${
          array ? "[]" : ""
        };`;
      })
      .join("\n")}
  }`;
};

export const elementName = (elementDefinition: ElementDefinition) => {
  const { path } = elementDefinition;
  if (path.split(".").length === 1) {
    return "";
  }
  const [elName] = path.split(".").slice(-1);
  return isChoiceType(elementDefinition)
    ? stringsToCamelCase([elName.substring(0, elName.length - 3)])
    : elName;
};

/**
 * Determines if ElementDefinition is root declaration of Resource
 */
export const isResourceDefinition = (
  resourceTypeName: string,
  e: ElementDefinition
) => e.path === resourceTypeName;

/**
 * Determines if ElementDefinition is root declaration of BackboneElement on a Resource
 */
export const isBackboneDefinition = (e: ElementDefinition) =>
  (e.type || []).some(({ code }) => code === "BackboneElement");

/**
 * Determines if ElementDefinition is root declaration of Element on a complex type
 */
export const isElementDefinition = (e: ElementDefinition) =>
  (e.type || []).some(({ code }) => code === "Element");

/**
 * Whether an Element Definition is defining a Choice Type
 * https://www.hl7.org/fhir/formats.html#choice
 */
export const isChoiceType = ({ path }: ElementDefinition) =>
  !!path && path.substr(-3) === "[x]";

/**
 * Whether an Element Definition is a list
 */
const isArray = ({ max }: ElementDefinition) =>
  !!(
    max &&
    (max === "*" || (!isNaN(parseInt(max, 10)) && parseInt(max, 10) > 1))
  );

/**
 * Formats ElementDefinition path to pascal case
 */
export const pathToPascalCase = (path: string) =>
  stringsToPascalCase(path.split("."));

export const capitalize = (str: string) =>
  str.length > 0 ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";

export const stringsToPascalCase = (strs: string[]) => {
  return strs.reduce((accum, curr) => {
    return `${accum}${capitalize(curr)}`;
  }, "");
};

export const stringsToCamelCase = (strs: string[]) => {
  return strs.reduce((accum, curr, index) => {
    return index > 0
      ? `${accum}${capitalize(curr)}`
      : `${accum}${curr.toLowerCase()}`;
  }, "");
};
