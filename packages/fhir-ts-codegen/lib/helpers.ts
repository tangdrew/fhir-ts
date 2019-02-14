/**
 * Helper Functions
 */

import { writeFile } from "fs";
import { promisify } from "util";

import { ElementDefinition, FHIRPrimitives } from "./conformance";

export const writeFileAsync = promisify(writeFile);

/**
 * Groups list of ElementDefinitions by BackboneElements
 */
export const getBackboneElementDefinitions = (
  resourceName: string,
  elementDefinitions: ElementDefinition[]
): { [key: string]: ElementDefinition[] } => {
  const backboneElements = elementDefinitions
    .filter(isBackboneDefinition)
    .map(e => pathToPascalCase(e.path));

  return elementDefinitions.reduce<{ [key: string]: ElementDefinition[] }>(
    (accum, curr) => {
      const { path } = curr;
      const parentName = pathToPascalCase(
        path
          .split(".")
          .slice(0, -1)
          .join(".")
      );

      const isBackboneChild = backboneElements.includes(parentName);

      if (isBackboneChild) {
        return {
          ...accum,
          [parentName]: [...(accum[parentName] || []), curr]
        };
      }
      return {
        ...accum,
        [resourceName]: [...(accum[resourceName] || []), curr]
      };
    },
    {}
  );
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
              !Object.values(FHIRPrimitives).includes(code) &&
              code !== "BackboneElement"
          )
          .map(({ code }) => code);
        return [...accum, ...nonPrimitiveTypes];
      }, [])
    )
  ).sort();
};

/**
 * Given an array of types, returns io-ts type declaration string
 */
export const typeDeclaration = (elementDefinition: ElementDefinition) => {
  const { contentReference, path, type } = elementDefinition;

  // TODO: Why is Element type only an extension?
  if (path === "Element.id" || path === "Extension.url") {
    return "primitives.R4.string";
  }

  if (!!contentReference) {
    return pathToPascalCase(contentReference.slice(1));
  }

  if (isBackboneDefinition(elementDefinition)) {
    return pathToPascalCase(path);
  }

  const declarations = (type || []).map(({ code }) =>
    Object.values(FHIRPrimitives).includes(code)
      ? `primitives.R4.${code}`
      : code
  );
  if (declarations.length === 1) {
    return declarations[0];
  }
  return `t.union([${declarations.join(", ")}])`;
};

export const elementName = (elementDefinition: ElementDefinition) => {
  const { path, type } = elementDefinition;
  if (path.split(".").length === 1) {
    return "";
  }
  const [elName] = path.split(".").slice(-1);
  return isChoiceType(elementDefinition)
    ? stringsToCamelCase([
        elName.substring(0, elName.length - 3),
        ...type!.map(({ code }) => code)
      ])
    : elName;
};

/**
 * Determines if ElementDefinition is root declaration of BackboneElement
 */
export const isBackboneDefinition = (e: ElementDefinition) =>
  (e.type || []).some(({ code }) => code === "BackboneElement");

/**
 * Whether an Element Definition is defining a Choice Type
 * https://www.hl7.org/fhir/formats.html#choice
 */
export const isChoiceType = ({ path }: ElementDefinition) =>
  !!path && path.substr(-3) === "[x]";

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
