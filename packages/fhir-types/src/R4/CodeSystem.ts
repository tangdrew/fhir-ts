/**
 * CodeSystem Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Additional information supplied about each concept
 */
export interface CodeSystemProperty {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifies the property on the concepts, and when referred to in operations */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Formal identifier for the property */
  uri?: t.TypeOf<primitives.R4.URIType>;
  /** Why the property is defined, and/or what it conveys */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** code | Coding | string | integer | boolean | dateTime | decimal */
  type: t.TypeOf<primitives.R4.CodeType>;
}

export interface CodeSystemPropertyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifies the property on the concepts, and when referred to in operations */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Formal identifier for the property */
  uri?: t.OutputOf<primitives.R4.URIType>;
  /** Why the property is defined, and/or what it conveys */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** code | Coding | string | integer | boolean | dateTime | decimal */
  type: t.OutputOf<primitives.R4.CodeType>;
}

export const CodeSystemProperty: t.RecursiveType<
  t.Type<CodeSystemProperty, CodeSystemPropertyOutputType>,
  CodeSystemProperty,
  CodeSystemPropertyOutputType
> = t.recursion<CodeSystemProperty, CodeSystemPropertyOutputType>(
  "CodeSystemProperty",
  () =>
    t.intersection(
      [
        t.type({
          /** Identifies the property on the concepts, and when referred to in operations */
          code: primitives.R4.code,
          /** code | Coding | string | integer | boolean | dateTime | decimal */
          type: primitives.R4.code
        }),
        t.partial({
          /** Why the property is defined, and/or what it conveys */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Formal identifier for the property */
          uri: primitives.R4.uri
        })
      ],
      "CodeSystemProperty"
    )
);

/**
 * Filter that can be used in a value set
 */
export interface CodeSystemFilter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that identifies the filter */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** How or why the filter is used */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Operators that can be used with filter */
  operator: t.TypeOf<primitives.R4.CodeType>[];
  /** What to use for the value */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface CodeSystemFilterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code that identifies the filter */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** How or why the filter is used */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Operators that can be used with filter */
  operator: t.OutputOf<primitives.R4.CodeType>[];
  /** What to use for the value */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const CodeSystemFilter: t.RecursiveType<
  t.Type<CodeSystemFilter, CodeSystemFilterOutputType>,
  CodeSystemFilter,
  CodeSystemFilterOutputType
> = t.recursion<CodeSystemFilter, CodeSystemFilterOutputType>(
  "CodeSystemFilter",
  () =>
    t.intersection(
      [
        t.type({
          /** Code that identifies the filter */
          code: primitives.R4.code,
          /** Operators that can be used with filter */
          operator: t.array(primitives.R4.code),
          /** What to use for the value */
          value: primitives.R4.string
        }),
        t.partial({
          /** How or why the filter is used */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "CodeSystemFilter"
    )
);

/**
 * Property value for the concept
 */
export interface CodeSystemConceptProperty {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to CodeSystem.property.code */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Value of the property for this concept */
  value:
    | t.TypeOf<primitives.R4.CodeType>
    | Coding
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.DecimalType>;
}

export interface CodeSystemConceptPropertyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to CodeSystem.property.code */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Value of the property for this concept */
  value:
    | t.OutputOf<primitives.R4.CodeType>
    | CodingOutputType
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.DecimalType>;
}

export const CodeSystemConceptProperty: t.RecursiveType<
  t.Type<CodeSystemConceptProperty, CodeSystemConceptPropertyOutputType>,
  CodeSystemConceptProperty,
  CodeSystemConceptPropertyOutputType
> = t.recursion<CodeSystemConceptProperty, CodeSystemConceptPropertyOutputType>(
  "CodeSystemConceptProperty",
  () =>
    t.intersection(
      [
        t.type({
          /** Reference to CodeSystem.property.code */
          code: primitives.R4.code,
          /** Value of the property for this concept */
          value: t.union([
            primitives.R4.code,
            Coding,
            primitives.R4.string,
            primitives.R4.integer,
            primitives.R4.boolean,
            primitives.R4.dateTime,
            primitives.R4.decimal
          ])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "CodeSystemConceptProperty"
    )
);

/**
 * Additional representations for the concept
 */
export interface CodeSystemConceptDesignation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Human language of the designation */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Details how this designation would be used */
  use?: Coding;
  /** The text value for this designation */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface CodeSystemConceptDesignationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Human language of the designation */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Details how this designation would be used */
  use?: CodingOutputType;
  /** The text value for this designation */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const CodeSystemConceptDesignation: t.RecursiveType<
  t.Type<CodeSystemConceptDesignation, CodeSystemConceptDesignationOutputType>,
  CodeSystemConceptDesignation,
  CodeSystemConceptDesignationOutputType
> = t.recursion<
  CodeSystemConceptDesignation,
  CodeSystemConceptDesignationOutputType
>("CodeSystemConceptDesignation", () =>
  t.intersection(
    [
      t.type({
        /** The text value for this designation */
        value: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Human language of the designation */
        language: primitives.R4.code,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Details how this designation would be used */
        use: Coding
      })
    ],
    "CodeSystemConceptDesignation"
  )
);

/**
 * Concepts in the code system
 */
export interface CodeSystemConcept {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that identifies concept */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Text to display to the user */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** Formal definition */
  definition?: t.TypeOf<primitives.R4.StringType>;
  /** Additional representations for the concept */
  designation?: CodeSystemConceptDesignation[];
  /** Property value for the concept */
  property?: CodeSystemConceptProperty[];
  /** Child Concepts (is-a/contains/categorizes) */
  concept?: CodeSystemConcept[];
}

export interface CodeSystemConceptOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code that identifies concept */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Text to display to the user */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** Formal definition */
  definition?: t.OutputOf<primitives.R4.StringType>;
  /** Additional representations for the concept */
  designation?: CodeSystemConceptDesignationOutputType[];
  /** Property value for the concept */
  property?: CodeSystemConceptPropertyOutputType[];
  /** Child Concepts (is-a/contains/categorizes) */
  concept?: CodeSystemConceptOutputType[];
}

export const CodeSystemConcept: t.RecursiveType<
  t.Type<CodeSystemConcept, CodeSystemConceptOutputType>,
  CodeSystemConcept,
  CodeSystemConceptOutputType
> = t.recursion<CodeSystemConcept, CodeSystemConceptOutputType>(
  "CodeSystemConcept",
  () =>
    t.intersection(
      [
        t.type({
          /** Code that identifies concept */
          code: primitives.R4.code
        }),
        t.partial({
          /** Child Concepts (is-a/contains/categorizes) */
          concept: t.array(CodeSystemConcept),
          /** Formal definition */
          definition: primitives.R4.string,
          /** Additional representations for the concept */
          designation: t.array(CodeSystemConceptDesignation),
          /** Text to display to the user */
          display: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Property value for the concept */
          property: t.array(CodeSystemConceptProperty)
        })
      ],
      "CodeSystemConcept"
    )
);

/**
 * Declares the existence of and describes a code system or code system supplement
 */
export interface CodeSystem {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the code system (business identifier) */
  identifier?: Identifier[];
  /** Business version of the code system (Coding.version) */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this code system (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this code system (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the code system */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for code system (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this code system is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** If code comparison is case sensitive */
  caseSensitive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Canonical reference to the value set with entire code system */
  valueSet?: t.TypeOf<primitives.R4.CanonicalType>;
  /** grouped-by | is-a | part-of | classified-with */
  hierarchyMeaning?: t.TypeOf<primitives.R4.CodeType>;
  /** If code system defines a compositional grammar */
  compositional?: t.TypeOf<primitives.R4.BooleanType>;
  /** If definitions are not stable */
  versionNeeded?: t.TypeOf<primitives.R4.BooleanType>;
  /** not-present | example | fragment | complete | supplement */
  content: t.TypeOf<primitives.R4.CodeType>;
  /** Canonical URL of Code System this adds designations and properties to */
  supplements?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Total concepts in the code system */
  count?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Filter that can be used in a value set */
  filter?: CodeSystemFilter[];
  /** Additional information supplied about each concept */
  property?: CodeSystemProperty[];
  /** Concepts in the code system */
  concept?: CodeSystemConcept[];
}

export interface CodeSystemOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: NarrativeOutputType;
  /** Contained, inline Resources */
  contained?: ResourceOutputType[];
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored */
  modifierExtension?: ExtensionOutputType[];
  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the code system (business identifier) */
  identifier?: IdentifierOutputType[];
  /** Business version of the code system (Coding.version) */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this code system (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this code system (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the code system */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for code system (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this code system is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** If code comparison is case sensitive */
  caseSensitive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Canonical reference to the value set with entire code system */
  valueSet?: t.OutputOf<primitives.R4.CanonicalType>;
  /** grouped-by | is-a | part-of | classified-with */
  hierarchyMeaning?: t.OutputOf<primitives.R4.CodeType>;
  /** If code system defines a compositional grammar */
  compositional?: t.OutputOf<primitives.R4.BooleanType>;
  /** If definitions are not stable */
  versionNeeded?: t.OutputOf<primitives.R4.BooleanType>;
  /** not-present | example | fragment | complete | supplement */
  content: t.OutputOf<primitives.R4.CodeType>;
  /** Canonical URL of Code System this adds designations and properties to */
  supplements?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Total concepts in the code system */
  count?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Filter that can be used in a value set */
  filter?: CodeSystemFilterOutputType[];
  /** Additional information supplied about each concept */
  property?: CodeSystemPropertyOutputType[];
  /** Concepts in the code system */
  concept?: CodeSystemConceptOutputType[];
}

export const CodeSystem: t.RecursiveType<
  t.Type<CodeSystem, CodeSystemOutputType>,
  CodeSystem,
  CodeSystemOutputType
> = t.recursion<CodeSystem, CodeSystemOutputType>("CodeSystem", () =>
  t.intersection(
    [
      t.type({
        /** not-present | example | fragment | complete | supplement */
        content: primitives.R4.code,
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** If code comparison is case sensitive */
        caseSensitive: primitives.R4.boolean,
        /** If code system defines a compositional grammar */
        compositional: primitives.R4.boolean,
        /** Concepts in the code system */
        concept: t.array(CodeSystemConcept),
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Total concepts in the code system */
        count: primitives.R4.unsignedInt,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Natural language description of the code system */
        description: primitives.R4.markdown,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Filter that can be used in a value set */
        filter: t.array(CodeSystemFilter),
        /** grouped-by | is-a | part-of | classified-with */
        hierarchyMeaning: primitives.R4.code,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the code system (business identifier) */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for code system (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this code system (computer friendly) */
        name: primitives.R4.string,
        /** Additional information supplied about each concept */
        property: t.array(CodeSystemProperty),
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this code system is defined */
        purpose: primitives.R4.markdown,
        /** Canonical URL of Code System this adds designations and properties to */
        supplements: primitives.R4.canonical,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this code system (human friendly) */
        title: primitives.R4.string,
        /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) */
        url: primitives.R4.uri,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Canonical reference to the value set with entire code system */
        valueSet: primitives.R4.canonical,
        /** Business version of the code system (Coding.version) */
        version: primitives.R4.string,
        /** If definitions are not stable */
        versionNeeded: primitives.R4.boolean
      })
    ],
    "CodeSystem"
  )
);
