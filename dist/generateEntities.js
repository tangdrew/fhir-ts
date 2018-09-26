"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line
const ts_simple_ast_1 = require("ts-simple-ast");
/**
 * Module for generating TypeORM entitities from a FHIR structure definition
 */
exports.generateEntities = structureDefinition => {
    const project = new ts_simple_ast_1.default();
    project.addExistingSourceFiles("generated/entities/*.ts");
    const patientFile = project.createSourceFile("generated/entities/patient.ts", {
        enums: createEnumDeclarationsFromStructureDefinition(structureDefinition),
        interfaces: createEnumDeclarationsFromStructureDefinition(structureDefinition)
    }, { overwrite: true });
    project.save();
};
const createClassDeclarationsFromStructureDefinition = (structureDefinition) => {
    const { differential } = structureDefinition;
    const createClassPropertyDeclarations = (className, childrenElements) => {
        return childrenElements.map(el => {
            const [name] = el.id.split(".").slice(-1);
            const isArray = el.max === "*" || (!isNaN(parseInt(el.max)) && parseInt(el.max) > 1);
            const isRequired = el.min > 0;
            const isBackboneElement = el.type.some(elType => elType.code === "BackboneElement");
            const typeString = isBackboneElement
                ? `${structureDefinition.name}${convertToPascalCase(name)}${isArray ? "[]" : ""}`
                : el.type
                    .map(elType => `${convertToPascalCase(elType.code)}${isArray ? "[]" : ""}`)
                    .join(" | ");
            return {
                name,
                type: typeString,
                hasQuestionToken: !isRequired,
                docs: [el.definition]
            };
        });
    };
    /**
     * Get element definitions that are:
     * The base DomainResource: id is just the Resource name
     * OR a BackboneElement
     */
    const classElements = differential.element.filter(el => el.id === structureDefinition.type ||
        el.type.some(t => t.code === "BackboneElement"));
    return classElements.map(el => {
        const [className] = el.id.split(".").slice(-1);
        const isBaseResource = className === structureDefinition.name;
        const isBackboneElement = !isBaseResource;
        // Get elements that are child elements of the class element
        const childrenElements = differential.element.filter(elem => {
            const [parentName] = elem.id.split(".").slice(-2);
            return parentName === className && elem.id !== className;
        });
        return {
            name: `${isBackboneElement ? structureDefinition.name : ""}${convertToPascalCase(className)}`,
            docs: [el.definition],
            decorators: isBaseResource
                ? [
                    {
                        name: "Entity",
                        arguments: ['{schema: "stu3"}']
                    }
                ]
                : [],
            properties: createClassPropertyDeclarations(el.id, childrenElements)
        };
    });
};
const createInterfaceDeclarationsFromStructureDefinition = (structureDefinition) => {
    const { differential } = structureDefinition;
    return [];
};
const createEnumDeclarationsFromStructureDefinition = (structureDefinition) => {
    const { differential } = structureDefinition;
    // Get element definitions that contain a value set binding
    // TODO: only get elements whose value set is defined in the short for now
    const codedElements = differential.element.filter(el => el.binding && el.short.split("|").length > 1);
    return codedElements.map(el => {
        const valueSetReference = el.binding.valueSetReference.reference;
        return {
            name: `${convertToPascalCase(el.id)}Types`,
            docs: [el.definition],
            members: el.short.split("|").map(code => ({
                name: convertToCamelCase(code.trim()),
                value: code.trim()
            }))
        };
    });
};
const convertToPascalCase = (s) => {
    return s
        .split(".")
        .reduce((prev, cur) => `${prev}${cur.charAt(0).toUpperCase() + cur.slice(1)}`, "");
};
const convertToCamelCase = (s) => {
    // If all caps just return the same string
    if (s === s.toUpperCase()) {
        return s;
    }
    s = s
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (ltr, idx) => (idx === 0 ? ltr.toLowerCase() : ltr.toUpperCase()))
        .replace(/\s+/g, "");
    s = s.replace(/_/g, "");
    s = s.replace(/-/g, "");
    return s;
};
//# sourceMappingURL=generateEntities.js.map