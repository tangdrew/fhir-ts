export declare const stringsToPascalCase: (strs: string[]) => string;
export declare const stringsToCamelCase: (strs: string[]) => string;
export declare const convertToPascalCase: (s: string) => string;
export declare const convertToCamelCase: (s: string) => string;
/**
 * Formats ElementDefinition path to camel case
 */
export declare const pathToCamelCase: (path: string) => string;
/**
 * Formats ElementDefinition path to pascal case
 */
export declare const pathToPascalCase: (path: string) => string;
export declare const loadFromFile: (pathString: string) => any;
/**
 * Parses the parent element name from the ElementDefinition path
 */
export declare const parentName: ({ path }: {
    path: any;
}) => string;
/**
 * Parses the element name from the ElementDefinition path and a given type
 */
export declare const elementName: (elementDefinition: any, type: any) => any;
/**
 * Whether an Element Definition is defining a BackboneElement
 */
export declare const isBackboneElement: ({ type }: any) => any;
/**
 * Whether an Element Definition is defining a Choice Type
 * https://www.hl7.org/fhir/formats.html#choice
 */
export declare const isChoiceType: ({ path }: {
    path: any;
}) => boolean;
/**
 * Whether an Element Definition is required
 */
export declare const isRequired: ({ min }: {
    min: any;
}) => boolean;
/**
 * Format a TS property type name from an Element Definition
 */
export declare const propertyTypeName: (elementDefinition: any) => any;
/**
 * Removes all line breaks from string
 */
export declare const formatComment: (comment: string) => string;
