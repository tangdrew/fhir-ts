/**
 * ValueSet Module
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
 * Parameter that controlled the expansion process
 */
export interface ValueSetExpansionParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name as assigned by the client or server */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Value of the named parameter */
  value?:
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.CodeType>
    | t.TypeOf<primitives.R4.DateTimeType>;
}

export interface ValueSetExpansionParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name as assigned by the client or server */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Value of the named parameter */
  value?:
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.CodeType>
    | t.OutputOf<primitives.R4.DateTimeType>;
}

export const ValueSetExpansionParameter: t.RecursiveType<
  t.Type<ValueSetExpansionParameter, ValueSetExpansionParameterOutputType>,
  ValueSetExpansionParameter,
  ValueSetExpansionParameterOutputType
> = t.recursion<
  ValueSetExpansionParameter,
  ValueSetExpansionParameterOutputType
>("ValueSetExpansionParameter", () =>
  t.intersection(
    [
      t.type({
        /** Name as assigned by the client or server */
        name: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Value of the named parameter */
        value: t.union([
          primitives.R4.string,
          primitives.R4.boolean,
          primitives.R4.integer,
          primitives.R4.decimal,
          primitives.R4.uri,
          primitives.R4.code,
          primitives.R4.dateTime
        ])
      })
    ],
    "ValueSetExpansionParameter"
  )
);

/**
 * Codes in the value set
 */
export interface ValueSetExpansionContains {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** System value for the code */
  system?: t.TypeOf<primitives.R4.URIType>;
  /** If user cannot select this entry */
  abstract?: t.TypeOf<primitives.R4.BooleanType>;
  /** If concept is inactive in the code system */
  inactive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Version in which this code/display is defined */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Code - if blank, this is not a selectable code */
  code?: t.TypeOf<primitives.R4.CodeType>;
  /** User display for the concept */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** Additional representations for this item */
  designation?: ValueSetComposeIncludeConceptDesignation[];
  /** Codes contained under this entry */
  contains?: ValueSetExpansionContains[];
}

export interface ValueSetExpansionContainsOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** System value for the code */
  system?: t.OutputOf<primitives.R4.URIType>;
  /** If user cannot select this entry */
  abstract?: t.OutputOf<primitives.R4.BooleanType>;
  /** If concept is inactive in the code system */
  inactive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Version in which this code/display is defined */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Code - if blank, this is not a selectable code */
  code?: t.OutputOf<primitives.R4.CodeType>;
  /** User display for the concept */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** Additional representations for this item */
  designation?: ValueSetComposeIncludeConceptDesignationOutputType[];
  /** Codes contained under this entry */
  contains?: ValueSetExpansionContainsOutputType[];
}

export const ValueSetExpansionContains: t.RecursiveType<
  t.Type<ValueSetExpansionContains, ValueSetExpansionContainsOutputType>,
  ValueSetExpansionContains,
  ValueSetExpansionContainsOutputType
> = t.recursion<ValueSetExpansionContains, ValueSetExpansionContainsOutputType>(
  "ValueSetExpansionContains",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** If user cannot select this entry */
          abstract: primitives.R4.boolean,
          /** Code - if blank, this is not a selectable code */
          code: primitives.R4.code,
          /** Codes contained under this entry */
          contains: t.array(ValueSetExpansionContains),
          /** Additional representations for this item */
          designation: t.array(ValueSetComposeIncludeConceptDesignation),
          /** User display for the concept */
          display: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** If concept is inactive in the code system */
          inactive: primitives.R4.boolean,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** System value for the code */
          system: primitives.R4.uri,
          /** Version in which this code/display is defined */
          version: primitives.R4.string
        })
      ],
      "ValueSetExpansionContains"
    )
);

/**
 * Used when the value set is "expanded"
 */
export interface ValueSetExpansion {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifies the value set expansion (business identifier) */
  identifier?: t.TypeOf<primitives.R4.URIType>;
  /** Time ValueSet expansion happened */
  timestamp: t.TypeOf<primitives.R4.DateTimeType>;
  /** Total number of codes in the expansion */
  total?: t.TypeOf<primitives.R4.IntegerType>;
  /** Offset at which this resource starts */
  offset?: t.TypeOf<primitives.R4.IntegerType>;
  /** Parameter that controlled the expansion process */
  parameter?: ValueSetExpansionParameter[];
  /** Codes in the value set */
  contains?: ValueSetExpansionContains[];
}

export interface ValueSetExpansionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifies the value set expansion (business identifier) */
  identifier?: t.OutputOf<primitives.R4.URIType>;
  /** Time ValueSet expansion happened */
  timestamp: t.OutputOf<primitives.R4.DateTimeType>;
  /** Total number of codes in the expansion */
  total?: t.OutputOf<primitives.R4.IntegerType>;
  /** Offset at which this resource starts */
  offset?: t.OutputOf<primitives.R4.IntegerType>;
  /** Parameter that controlled the expansion process */
  parameter?: ValueSetExpansionParameterOutputType[];
  /** Codes in the value set */
  contains?: ValueSetExpansionContainsOutputType[];
}

export const ValueSetExpansion: t.RecursiveType<
  t.Type<ValueSetExpansion, ValueSetExpansionOutputType>,
  ValueSetExpansion,
  ValueSetExpansionOutputType
> = t.recursion<ValueSetExpansion, ValueSetExpansionOutputType>(
  "ValueSetExpansion",
  () =>
    t.intersection(
      [
        t.type({
          /** Time ValueSet expansion happened */
          timestamp: primitives.R4.dateTime
        }),
        t.partial({
          /** Codes in the value set */
          contains: t.array(ValueSetExpansionContains),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Identifies the value set expansion (business identifier) */
          identifier: primitives.R4.uri,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Offset at which this resource starts */
          offset: primitives.R4.integer,
          /** Parameter that controlled the expansion process */
          parameter: t.array(ValueSetExpansionParameter),
          /** Total number of codes in the expansion */
          total: primitives.R4.integer
        })
      ],
      "ValueSetExpansion"
    )
);

/**
 * Select codes/concepts by their properties (including relationships)
 */
export interface ValueSetComposeIncludeFilter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A property/filter defined by the code system */
  property: t.TypeOf<primitives.R4.CodeType>;
  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
  op: t.TypeOf<primitives.R4.CodeType>;
  /** Code from the system, or regex criteria, or boolean value for exists */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface ValueSetComposeIncludeFilterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A property/filter defined by the code system */
  property: t.OutputOf<primitives.R4.CodeType>;
  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
  op: t.OutputOf<primitives.R4.CodeType>;
  /** Code from the system, or regex criteria, or boolean value for exists */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const ValueSetComposeIncludeFilter: t.RecursiveType<
  t.Type<ValueSetComposeIncludeFilter, ValueSetComposeIncludeFilterOutputType>,
  ValueSetComposeIncludeFilter,
  ValueSetComposeIncludeFilterOutputType
> = t.recursion<
  ValueSetComposeIncludeFilter,
  ValueSetComposeIncludeFilterOutputType
>("ValueSetComposeIncludeFilter", () =>
  t.intersection(
    [
      t.type({
        /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
        op: primitives.R4.code,
        /** A property/filter defined by the code system */
        property: primitives.R4.code,
        /** Code from the system, or regex criteria, or boolean value for exists */
        value: primitives.R4.string
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
    "ValueSetComposeIncludeFilter"
  )
);

/**
 * Additional representations for this concept
 */
export interface ValueSetComposeIncludeConceptDesignation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Human language of the designation */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Types of uses of designations */
  use?: Coding;
  /** The text value for this designation */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface ValueSetComposeIncludeConceptDesignationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Human language of the designation */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Types of uses of designations */
  use?: CodingOutputType;
  /** The text value for this designation */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const ValueSetComposeIncludeConceptDesignation: t.RecursiveType<
  t.Type<
    ValueSetComposeIncludeConceptDesignation,
    ValueSetComposeIncludeConceptDesignationOutputType
  >,
  ValueSetComposeIncludeConceptDesignation,
  ValueSetComposeIncludeConceptDesignationOutputType
> = t.recursion<
  ValueSetComposeIncludeConceptDesignation,
  ValueSetComposeIncludeConceptDesignationOutputType
>("ValueSetComposeIncludeConceptDesignation", () =>
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
        /** Types of uses of designations */
        use: Coding
      })
    ],
    "ValueSetComposeIncludeConceptDesignation"
  )
);

/**
 * A concept defined in the system
 */
export interface ValueSetComposeIncludeConcept {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code or expression from system */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Text to display for this code for this value set in this valueset */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** Additional representations for this concept */
  designation?: ValueSetComposeIncludeConceptDesignation[];
}

export interface ValueSetComposeIncludeConceptOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code or expression from system */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Text to display for this code for this value set in this valueset */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** Additional representations for this concept */
  designation?: ValueSetComposeIncludeConceptDesignationOutputType[];
}

export const ValueSetComposeIncludeConcept: t.RecursiveType<
  t.Type<
    ValueSetComposeIncludeConcept,
    ValueSetComposeIncludeConceptOutputType
  >,
  ValueSetComposeIncludeConcept,
  ValueSetComposeIncludeConceptOutputType
> = t.recursion<
  ValueSetComposeIncludeConcept,
  ValueSetComposeIncludeConceptOutputType
>("ValueSetComposeIncludeConcept", () =>
  t.intersection(
    [
      t.type({
        /** Code or expression from system */
        code: primitives.R4.code
      }),
      t.partial({
        /** Additional representations for this concept */
        designation: t.array(ValueSetComposeIncludeConceptDesignation),
        /** Text to display for this code for this value set in this valueset */
        display: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ValueSetComposeIncludeConcept"
  )
);

/**
 * Include one or more codes from a code system or other value set(s)
 */
export interface ValueSetComposeInclude {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The system the codes come from */
  system?: t.TypeOf<primitives.R4.URIType>;
  /** Specific version of the code system referred to */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** A concept defined in the system */
  concept?: ValueSetComposeIncludeConcept[];
  /** Select codes/concepts by their properties (including relationships) */
  filter?: ValueSetComposeIncludeFilter[];
  /** Select the contents included in this value set */
  valueSet?: t.TypeOf<primitives.R4.CanonicalType>[];
}

export interface ValueSetComposeIncludeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The system the codes come from */
  system?: t.OutputOf<primitives.R4.URIType>;
  /** Specific version of the code system referred to */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** A concept defined in the system */
  concept?: ValueSetComposeIncludeConceptOutputType[];
  /** Select codes/concepts by their properties (including relationships) */
  filter?: ValueSetComposeIncludeFilterOutputType[];
  /** Select the contents included in this value set */
  valueSet?: t.OutputOf<primitives.R4.CanonicalType>[];
}

export const ValueSetComposeInclude: t.RecursiveType<
  t.Type<ValueSetComposeInclude, ValueSetComposeIncludeOutputType>,
  ValueSetComposeInclude,
  ValueSetComposeIncludeOutputType
> = t.recursion<ValueSetComposeInclude, ValueSetComposeIncludeOutputType>(
  "ValueSetComposeInclude",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** A concept defined in the system */
          concept: t.array(ValueSetComposeIncludeConcept),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Select codes/concepts by their properties (including relationships) */
          filter: t.array(ValueSetComposeIncludeFilter),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The system the codes come from */
          system: primitives.R4.uri,
          /** Select the contents included in this value set */
          valueSet: t.array(primitives.R4.canonical),
          /** Specific version of the code system referred to */
          version: primitives.R4.string
        })
      ],
      "ValueSetComposeInclude"
    )
);

/**
 * Content logical definition of the value set (CLD)
 */
export interface ValueSetCompose {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Fixed date for references with no specified version (transitive) */
  lockedDate?: t.TypeOf<primitives.R4.DateType>;
  /** Whether inactive codes are in the value set */
  inactive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Include one or more codes from a code system or other value set(s) */
  include: ValueSetComposeInclude[];
  /** Explicitly exclude codes from a code system or other value sets */
  exclude?: ValueSetComposeInclude[];
}

export interface ValueSetComposeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Fixed date for references with no specified version (transitive) */
  lockedDate?: t.OutputOf<primitives.R4.DateType>;
  /** Whether inactive codes are in the value set */
  inactive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Include one or more codes from a code system or other value set(s) */
  include: ValueSetComposeIncludeOutputType[];
  /** Explicitly exclude codes from a code system or other value sets */
  exclude?: ValueSetComposeIncludeOutputType[];
}

export const ValueSetCompose: t.RecursiveType<
  t.Type<ValueSetCompose, ValueSetComposeOutputType>,
  ValueSetCompose,
  ValueSetComposeOutputType
> = t.recursion<ValueSetCompose, ValueSetComposeOutputType>(
  "ValueSetCompose",
  () =>
    t.intersection(
      [
        t.type({
          /** Include one or more codes from a code system or other value set(s) */
          include: t.array(ValueSetComposeInclude)
        }),
        t.partial({
          /** Explicitly exclude codes from a code system or other value sets */
          exclude: t.array(ValueSetComposeInclude),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Whether inactive codes are in the value set */
          inactive: primitives.R4.boolean,
          /** Fixed date for references with no specified version (transitive) */
          lockedDate: primitives.R4.date,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ValueSetCompose"
    )
);

/**
 * A set of codes drawn from one or more code systems
 */
export interface ValueSet {
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
  /** Canonical identifier for this value set, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the value set (business identifier) */
  identifier?: Identifier[];
  /** Business version of the value set */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this value set (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this value set (human friendly) */
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
  /** Natural language description of the value set */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for value set (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Indicates whether or not any change to the content logical definition may occur */
  immutable?: t.TypeOf<primitives.R4.BooleanType>;
  /** Why this value set is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Content logical definition of the value set (CLD) */
  compose?: ValueSetCompose;
  /** Used when the value set is "expanded" */
  expansion?: ValueSetExpansion;
}

export interface ValueSetOutputType {
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
  /** Canonical identifier for this value set, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the value set (business identifier) */
  identifier?: IdentifierOutputType[];
  /** Business version of the value set */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this value set (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this value set (human friendly) */
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
  /** Natural language description of the value set */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for value set (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Indicates whether or not any change to the content logical definition may occur */
  immutable?: t.OutputOf<primitives.R4.BooleanType>;
  /** Why this value set is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Content logical definition of the value set (CLD) */
  compose?: ValueSetComposeOutputType;
  /** Used when the value set is "expanded" */
  expansion?: ValueSetExpansionOutputType;
}

export const ValueSet: t.RecursiveType<
  t.Type<ValueSet, ValueSetOutputType>,
  ValueSet,
  ValueSetOutputType
> = t.recursion<ValueSet, ValueSetOutputType>("ValueSet", () =>
  t.intersection(
    [
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** Content logical definition of the value set (CLD) */
        compose: ValueSetCompose,
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Natural language description of the value set */
        description: primitives.R4.markdown,
        /** Used when the value set is "expanded" */
        expansion: ValueSetExpansion,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the value set (business identifier) */
        identifier: t.array(Identifier),
        /** Indicates whether or not any change to the content logical definition may occur */
        immutable: primitives.R4.boolean,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for value set (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this value set (computer friendly) */
        name: primitives.R4.string,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this value set is defined */
        purpose: primitives.R4.markdown,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this value set (human friendly) */
        title: primitives.R4.string,
        /** Canonical identifier for this value set, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the value set */
        version: primitives.R4.string
      })
    ],
    "ValueSet"
  )
);
