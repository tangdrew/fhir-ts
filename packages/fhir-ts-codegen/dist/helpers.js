"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Path = require("path");
/**
 * Helper methods
 */
const capitalize = (str) => str.length > 0 ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : "";
exports.stringsToPascalCase = (strs) => {
    return strs.reduce((accum, curr) => {
        return `${accum}${capitalize(curr)}`;
    }, "");
};
exports.stringsToCamelCase = (strs) => {
    return strs.reduce((accum, curr, index) => {
        return index > 0
            ? `${accum}${capitalize(curr)}`
            : `${accum}${curr.toLowerCase()}`;
    }, "");
};
exports.convertToPascalCase = (s) => {
    return s
        .split(".")
        .reduce((prev, cur) => `${prev}${cur.charAt(0).toUpperCase() + cur.slice(1)}`, "");
};
exports.convertToCamelCase = (s) => {
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
/**
 * Formats ElementDefinition path to camel case
 */
exports.pathToCamelCase = (path) => exports.stringsToCamelCase(path.split("."));
/**
 * Formats ElementDefinition path to pascal case
 */
exports.pathToPascalCase = (path) => exports.stringsToPascalCase(path.split("."));
exports.loadFromFile = (pathString) => JSON.parse(fs_1.readFileSync(Path.join(__dirname, "..", pathString)));
/**
 * Parses the parent element name from the ElementDefinition path
 */
exports.parentName = ({ path }) => exports.stringsToPascalCase(path.split(".").slice(0, -1));
/**
 * Parses the element name from the ElementDefinition path and a given type
 */
exports.elementName = (elementDefinition, type) => {
    const { path } = elementDefinition;
    if (path.split(".").length === 1) {
        return "";
    }
    const [elName] = path.split(".").slice(-1);
    return exports.isChoiceType(elementDefinition)
        ? exports.stringsToCamelCase([elName.substring(0, elName.length - 3), type.code])
        : elName;
};
/**
 * Whether an Element Definition is defining a BackboneElement
 */
exports.isBackboneElement = ({ type }) => !!type && type.some(t => t.code === "BackboneElement");
/**
 * Whether an Element Definition is defining a Choice Type
 * https://www.hl7.org/fhir/formats.html#choice
 */
exports.isChoiceType = ({ path }) => !!path && path.substr(-3) === "[x]";
/**
 * Whether an Element Definition is required
 */
exports.isRequired = ({ min }) => min > 0;
/**
 * Whether an Element Definition is a list
 */
const isArray = ({ max }) => max === "*" || (!isNaN(parseInt(max, 10)) && parseInt(max, 10) > 1);
/**
 * Format a TS property type name from an Element Definition
 */
exports.propertyTypeName = elementDefinition => {
    const { contentReference, path, type } = elementDefinition;
    return (!contentReference
        ? type.map(t => `${t.code === "BackboneElement" ? exports.pathToPascalCase(path) : t.code}`)
        : [exports.stringsToPascalCase(contentReference.slice(1).split("."))])
        .map(name => `${name}${isArray(elementDefinition) ? "[]" : ""}`)
        .join(" | ");
};
/**
 * Removes all line breaks from string
 */
exports.formatComment = (comment) => comment.replace(/\r?\n|\r/g, "");
//# sourceMappingURL=helpers.js.map