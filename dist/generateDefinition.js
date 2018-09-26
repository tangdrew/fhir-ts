"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob = require("glob");
// tslint:disable-next-line:no-duplicate-imports
const ts_simple_ast_1 = require("ts-simple-ast");
const helpers_1 = require("./helpers");
/**
 * Module for generating Typescript type declarations from a FHIR structure definition
 */
exports.generateDefinitions = (pattern, outputPath, version = "3.0.1") => {
    const files = glob.sync(pattern);
    const structureDefinitions = files.map(fileName => helpers_1.loadFromFile(fileName));
    // Only define declarations for base resource and complex-type structure definitions
    const interfaceDeclarations = structureDefinitions
        .filter(({ baseDefinition, kind, id, type }) => kind === "complex-type" ||
        (kind === "resource" &&
            baseDefinition ===
                "http://hl7.org/fhir/StructureDefinition/DomainResource") ||
        type === "Resource")
        .reduce((prev, curr) => {
        const newInterfaceDeclarations = createInterfaceDeclarationsFromStructureDefinition(curr);
        return [...prev, ...newInterfaceDeclarations];
    }, []);
    const project = new ts_simple_ast_1.default({
        compilerOptions: { declaration: true, outDir: outputPath }
    });
    project.createSourceFile(`${outputPath}/fhir.ts`, {
        interfaces: interfaceDeclarations,
        typeAliases: [
            { name: "integer", type: "number", isExported: true },
            { name: "decimal", type: "number", isExported: true },
            { name: "uri", type: "string", isExported: true },
            { name: "base64Binary", type: "string", isExported: true },
            { name: "instant", type: "string", isExported: true },
            { name: "date", type: "string", isExported: true },
            { name: "dateTime", type: "string", isExported: true },
            { name: "time", type: "string", isExported: true },
            { name: "code", type: "string", isExported: true },
            { name: "oid", type: "string", isExported: true },
            { name: "id", type: "string", isExported: true },
            { name: "markdown", type: "string", isExported: true },
            { name: "unsignedInt", type: "number", isExported: true },
            { name: "positiveInt", type: "number", isExported: true },
            { name: "xhtml", type: "string", isExported: true } // For Narrative.div
        ]
    }, { overwrite: true });
    project.emit({ emitOnlyDtsFiles: true });
    return files;
};
const createInterfaceDeclarationsFromStructureDefinition = (structureDefinition) => {
    const { differential, snapshot } = structureDefinition;
    const interfaces = interfacesFromSnapshot(snapshot);
    return Object.keys(interfaces).map(interfaceName => {
        const { docs, elementDefinitions } = interfaces[interfaceName];
        return {
            docs: (docs || []).map(doc => helpers_1.formatComment(doc)),
            isExported: true,
            name: interfaceName,
            properties: Object.keys(elementDefinitions).map(elementKey => {
                const elementDefinition = elementDefinitions[elementKey];
                const { definition } = elementDefinition;
                return {
                    docs: [helpers_1.formatComment(definition)],
                    hasQuestionToken: !helpers_1.isRequired(elementDefinition),
                    name: elementKey,
                    type: helpers_1.propertyTypeName(elementDefinition)
                };
            })
        };
    });
};
const interfacesFromSnapshot = snapshot => snapshot.element.reduce((interfaceDefinitions, curr, index) => {
    const { contentReference, definition, path, type } = curr;
    const isBaseElement = index === 0; // The first element in the snapshot array is the base element definition
    if (isBaseElement) {
        return {
            [path]: {
                docs: [helpers_1.formatComment(definition)]
            }
        };
    }
    // If contentReference inherit type from referenced
    const types = !contentReference
        ? type
        : [helpers_1.stringsToPascalCase(contentReference.slice(1).split("."))];
    const normalizedElementDefinitions = types.reduce((accumPropDef, currType) => {
        return Object.assign({}, accumPropDef, { [helpers_1.elementName(curr, currType)]: Object.assign({}, curr, { type: [currType] }) });
    }, {});
    let updatedInterfaceDefinitions = Object.assign({}, interfaceDefinitions, { [helpers_1.parentName(curr)]: Object.assign({}, interfaceDefinitions[helpers_1.parentName(curr)], { elementDefinitions: Object.assign({}, (interfaceDefinitions[helpers_1.parentName(curr)] || {}).elementDefinitions, normalizedElementDefinitions) }) });
    if (helpers_1.isBackboneElement(curr)) {
        const backboneElementName = helpers_1.pathToPascalCase(path);
        updatedInterfaceDefinitions = Object.assign({}, updatedInterfaceDefinitions, { [backboneElementName]: Object.assign({}, updatedInterfaceDefinitions[backboneElementName], { docs: [helpers_1.formatComment(definition)] }) });
    }
    return updatedInterfaceDefinitions;
}, {});
//# sourceMappingURL=generateDefinition.js.map