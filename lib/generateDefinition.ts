import { readFileSync } from "fs";
import * as glob from "glob";
import * as Path from "path";
import {
  EnumDeclarationStructure,
  InterfaceDeclarationStructure
} from "ts-simple-ast";
// tslint:disable-next-line:no-duplicate-imports
import Project from "ts-simple-ast";

/**
 * Module for generating TypeORM entitities from a FHIR structure definition
 */

export const generateDefinitions = (
  pattern: string,
  outputPath: string,
  version: string = "3.0.1"
) => {
  const files = glob.sync(pattern);
  const structureDefinitions = files.map(fileName => loadFromFile(fileName));
  const enumDeclarations = structureDefinitions.reduce((prev, curr) => {
    const newEnumDeclarations = createEnumDeclarationsFromStructureDefinition(
      curr
    );
    return [...prev, ...newEnumDeclarations];
  }, []);

  const interfaceDeclarations = structureDefinitions.reduce((prev, curr) => {
    const newInterfaceDeclarations = createInterfaceDeclarationsFromStructureDefinition(
      curr
    );
    return [...prev, ...newInterfaceDeclarations];
  }, []);

  const project = new Project();
  project.addExistingSourceFiles(`${outputPath}/*.ts`);
  project.createSourceFile(
    `${outputPath}/declarations.ts`,
    {
      enums: enumDeclarations,
      interfaces: interfaceDeclarations
    },
    { overwrite: true }
  );
  project.save();
  return files;
};

const createInterfaceDeclarationsFromStructureDefinition = (
  structureDefinition
): InterfaceDeclarationStructure[] => {
  const { differential, snapshot } = structureDefinition;
  const interfaces = snapshot.element.reduce(
    (interfaceDefinitions, curr, index) => {
      const { definition, path, type } = curr;
      // The first element in the snapshot array is the base element definition
      const isBaseElement = index === 0;
      if (isBaseElement) {
        return {
          [path]: {
            docs: [definition]
          }
        };
      }
      const pathArray = path.split(".");
      const isBackboneElement =
        !isBaseElement && type.some(t => t.code === "BackboneElement");
      const isChoiceType = path.substr(-3) === "[x]";
      const parentName = convertToPascalCase(pathArray.slice(0, -1).join("."));
      const propertyName = convertToCamelCase(
        isChoiceType
          ? pathArray
              .slice(-1)
              .join("")
              .substring(0, pathArray.slice(-1).join("").length - 3)
          : pathArray.slice(-1).join("")
      );
      const propertyDefinition = isChoiceType
        ? type.reduce((accumPropDef, currType) => {
            return {
              ...accumPropDef,
              [`${propertyName}${convertToPascalCase(currType.code)}`]: {
                ...curr,
                type: [{ code: currType.code }] // Set choice type to only the current type
              }
            };
          }, {})
        : { [propertyName]: curr };
      const elementName = convertToPascalCase(path);
      let updatedInterfaceDefinitions = {
        ...interfaceDefinitions,
        [parentName]: {
          ...interfaceDefinitions[parentName],
          properties: {
            ...(interfaceDefinitions[parentName] || {}).properties,
            ...propertyDefinition
          }
        }
      };
      if (isBackboneElement) {
        updatedInterfaceDefinitions = {
          ...updatedInterfaceDefinitions,
          [elementName]: {
            ...updatedInterfaceDefinitions[elementName],
            docs: [definition]
          }
        };
      }
      return updatedInterfaceDefinitions;
    },
    {}
  );

  return Object.keys(interfaces).map(interfaceName => {
    const { docs, properties } = interfaces[interfaceName];
    return {
      docs,
      name: interfaceName,
      properties: Object.keys(properties).map(propertyName => {
        const {
          contentReference,
          definition,
          max,
          min,
          path,
          type
        } = properties[propertyName];
        const isRequired = min > 0;
        const isArray =
          max === "*" || (!isNaN(parseInt(max, 10)) && parseInt(max, 10) > 1);
        const typeName = !!contentReference
          ? `${convertToCamelCase(
              contentReference
                .slice(1)
                .split(".")
                .join("")
            )}${isArray ? "[]" : ""}`
          : type
              .map(
                t =>
                  `${
                    t.code === "BackboneElement"
                      ? convertToPascalCase(path)
                      : t.code
                  }${isArray ? "[]" : ""}`
              )
              .join(" | ");
        return {
          docs: [definition],
          hasQuestionToken: !isRequired,
          name: propertyName,
          type: typeName
        };
      })
    };
  });
};

const createEnumDeclarationsFromStructureDefinition = (
  structureDefinition
): EnumDeclarationStructure[] => {
  const { differential } = structureDefinition;

  // Get element definitions that contain a value set binding
  // TODO: only get elements whose value set is defined in the short for now
  const codedElements = differential.element.filter(
    el => el.binding && el.short && el.short.split("|").length > 1
  );

  return codedElements.map(el => {
    return {
      docs: [el.definition],
      members: el.short.split("|").map(code => ({
        name: convertToCamelCase(code.trim()),
        value: code.trim()
      })),
      name: `${convertToPascalCase(el.id)}Types`
    };
  });
};

const convertToPascalCase = (s: string) => {
  return s
    .split(".")
    .reduce(
      (prev, cur) => `${prev}${cur.charAt(0).toUpperCase() + cur.slice(1)}`,
      ""
    );
};

const convertToCamelCase = (s: string) => {
  // If all caps just return the same string
  if (s === s.toUpperCase()) {
    return s;
  }

  s = s
    .replace(
      /(?:^\w|[A-Z]|\b\w)/g,
      (ltr, idx) => (idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase())
    )
    .replace(/\s+/g, "");
  s = s.replace(/_/g, "");
  s = s.replace(/-/g, "");
  return s;
};

const loadFromFile = (pathString: string): any =>
  JSON.parse((readFileSync(
    Path.join(__dirname, "..", pathString)
  ) as any) as string);
