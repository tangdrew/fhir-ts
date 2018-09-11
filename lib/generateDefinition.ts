import * as glob from "glob";
import {
  EnumDeclarationStructure,
  InterfaceDeclarationStructure
} from "ts-simple-ast";
// tslint:disable-next-line:no-duplicate-imports
import Project from "ts-simple-ast";
import {
  elementName,
  isBackboneElement,
  isRequired,
  loadFromFile,
  parentName,
  pathToPascalCase,
  propertyTypeName,
  stringsToCamelCase
} from "./helpers";

/**
 * Module for generating Typescript type declarations from a FHIR structure definition
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

  // Only define declarations for resource and complex-type structure definitions
  const interfaceDeclarations = structureDefinitions
    .filter(structureDefinition =>
      ["resource", "complex-type"].includes(structureDefinition.kind)
    )
    .reduce((prev, curr) => {
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
  const interfaces = interfacesFromSnapshot(snapshot);

  return Object.keys(interfaces).map(interfaceName => {
    const { docs, elementDefinitions } = interfaces[interfaceName];
    return {
      docs,
      name: interfaceName,
      properties: Object.keys(elementDefinitions).map(elementKey => {
        const elementDefinition = elementDefinitions[elementKey];
        const { definition } = elementDefinition;
        return {
          docs: [definition],
          hasQuestionToken: !isRequired(elementDefinition),
          name: elementKey,
          type: propertyTypeName(elementDefinition)
        };
      })
    };
  });
};

const createEnumDeclarationsFromStructureDefinition = (
  structureDefinition
): EnumDeclarationStructure[] => {
  // const { differential } = structureDefinition;

  // // Get element definitions that contain a value set binding
  // // TODO: only get elements whose value set is defined in the short for now
  // const codedElements = differential.element.filter(
  //   el => el.binding && el.short && el.short.split("|").length > 1
  // );

  // return codedElements.map(elementDefinition => {
  //   const { definition, path, short } = elementDefinition;
  //   return {
  //     docs: [definition],
  //     members: short.split("|").map(code => ({
  //       name: stringsToCamelCase(code.trim().split("-")),
  //       value: code.trim()
  //     })),
  //     name: `${pathToPascalCase(path)}Types`
  //   };
  // });
  return [];
};

const interfacesFromSnapshot = snapshot =>
  snapshot.element.reduce((interfaceDefinitions, curr, index) => {
    const { definition, path, type } = curr;
    const isBaseElement = index === 0; // The first element in the snapshot array is the base element definition
    if (isBaseElement) {
      return {
        [path]: {
          docs: [definition]
        }
      };
    }
    const normalizedElementDefinitions = type.reduce(
      (accumPropDef, currType) => {
        return {
          ...accumPropDef,
          [elementName(curr, currType)]: { ...curr, type: [currType] }
        };
      },
      {}
    );
    let updatedInterfaceDefinitions = {
      ...interfaceDefinitions,
      [parentName(curr)]: {
        ...interfaceDefinitions[parentName(curr)],
        elementDefinitions: {
          ...(interfaceDefinitions[parentName(curr)] || {}).elementDefinitions,
          ...normalizedElementDefinitions
        }
      }
    };
    if (isBackboneElement(curr)) {
      const backboneElementName = pathToPascalCase(path);
      updatedInterfaceDefinitions = {
        ...updatedInterfaceDefinitions,
        [backboneElementName]: {
          ...updatedInterfaceDefinitions[backboneElementName],
          docs: [definition]
        }
      };
    }
    return updatedInterfaceDefinitions;
  }, {});
