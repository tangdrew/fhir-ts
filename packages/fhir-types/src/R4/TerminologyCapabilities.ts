/**
 * TerminologyCapabilities Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 */
export interface TerminologyCapabilitiesValidateCode {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether translations are validated */
  translations: t.TypeOf<primitives.R4.BooleanType>;
}

export interface TerminologyCapabilitiesValidateCodeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Whether translations are validated */
  translations: t.OutputOf<primitives.R4.BooleanType>;
}

export const TerminologyCapabilitiesValidateCode: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesValidateCode,
    TerminologyCapabilitiesValidateCodeOutputType
  >,
  TerminologyCapabilitiesValidateCode,
  TerminologyCapabilitiesValidateCodeOutputType
> = t.recursion<
  TerminologyCapabilitiesValidateCode,
  TerminologyCapabilitiesValidateCodeOutputType
>("TerminologyCapabilitiesValidateCode", () =>
  t.intersection(
    [
      t.type({
        /** Whether translations are validated */
        translations: primitives.R4.boolean
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
    "TerminologyCapabilitiesValidateCode"
  )
);

/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 */
export interface TerminologyCapabilitiesTranslation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether the client must identify the map */
  needsMap: t.TypeOf<primitives.R4.BooleanType>;
}

export interface TerminologyCapabilitiesTranslationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Whether the client must identify the map */
  needsMap: t.OutputOf<primitives.R4.BooleanType>;
}

export const TerminologyCapabilitiesTranslation: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesTranslation,
    TerminologyCapabilitiesTranslationOutputType
  >,
  TerminologyCapabilitiesTranslation,
  TerminologyCapabilitiesTranslationOutputType
> = t.recursion<
  TerminologyCapabilitiesTranslation,
  TerminologyCapabilitiesTranslationOutputType
>("TerminologyCapabilitiesTranslation", () =>
  t.intersection(
    [
      t.type({
        /** Whether the client must identify the map */
        needsMap: primitives.R4.boolean
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
    "TerminologyCapabilitiesTranslation"
  )
);

/**
 * Software that is covered by this terminology capability statement
 */
export interface TerminologyCapabilitiesSoftware {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A name the software is known by */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Version covered by this statement */
  version?: t.TypeOf<primitives.R4.StringType>;
}

export interface TerminologyCapabilitiesSoftwareOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A name the software is known by */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Version covered by this statement */
  version?: t.OutputOf<primitives.R4.StringType>;
}

export const TerminologyCapabilitiesSoftware: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesSoftware,
    TerminologyCapabilitiesSoftwareOutputType
  >,
  TerminologyCapabilitiesSoftware,
  TerminologyCapabilitiesSoftwareOutputType
> = t.recursion<
  TerminologyCapabilitiesSoftware,
  TerminologyCapabilitiesSoftwareOutputType
>("TerminologyCapabilitiesSoftware", () =>
  t.intersection(
    [
      t.type({
        /** A name the software is known by */
        name: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Version covered by this statement */
        version: primitives.R4.string
      })
    ],
    "TerminologyCapabilitiesSoftware"
  )
);

/**
 * If this describes a specific instance
 */
export interface TerminologyCapabilitiesImplementation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Describes this specific instance */
  description: t.TypeOf<primitives.R4.StringType>;
  /** Base URL for the implementation */
  url?: t.TypeOf<primitives.R4.URLType>;
}

export interface TerminologyCapabilitiesImplementationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Describes this specific instance */
  description: t.OutputOf<primitives.R4.StringType>;
  /** Base URL for the implementation */
  url?: t.OutputOf<primitives.R4.URLType>;
}

export const TerminologyCapabilitiesImplementation: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesImplementation,
    TerminologyCapabilitiesImplementationOutputType
  >,
  TerminologyCapabilitiesImplementation,
  TerminologyCapabilitiesImplementationOutputType
> = t.recursion<
  TerminologyCapabilitiesImplementation,
  TerminologyCapabilitiesImplementationOutputType
>("TerminologyCapabilitiesImplementation", () =>
  t.intersection(
    [
      t.type({
        /** Describes this specific instance */
        description: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Base URL for the implementation */
        url: primitives.R4.url
      })
    ],
    "TerminologyCapabilitiesImplementation"
  )
);

/**
 * Supported expansion parameter
 */
export interface TerminologyCapabilitiesExpansionParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Expansion Parameter name */
  name: t.TypeOf<primitives.R4.CodeType>;
  /** Description of support for parameter */
  documentation?: t.TypeOf<primitives.R4.StringType>;
}

export interface TerminologyCapabilitiesExpansionParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Expansion Parameter name */
  name: t.OutputOf<primitives.R4.CodeType>;
  /** Description of support for parameter */
  documentation?: t.OutputOf<primitives.R4.StringType>;
}

export const TerminologyCapabilitiesExpansionParameter: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesExpansionParameter,
    TerminologyCapabilitiesExpansionParameterOutputType
  >,
  TerminologyCapabilitiesExpansionParameter,
  TerminologyCapabilitiesExpansionParameterOutputType
> = t.recursion<
  TerminologyCapabilitiesExpansionParameter,
  TerminologyCapabilitiesExpansionParameterOutputType
>("TerminologyCapabilitiesExpansionParameter", () =>
  t.intersection(
    [
      t.type({
        /** Expansion Parameter name */
        name: primitives.R4.code
      }),
      t.partial({
        /** Description of support for parameter */
        documentation: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "TerminologyCapabilitiesExpansionParameter"
  )
);

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 */
export interface TerminologyCapabilitiesExpansion {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether the server can return nested value sets */
  hierarchical?: t.TypeOf<primitives.R4.BooleanType>;
  /** Whether the server supports paging on expansion */
  paging?: t.TypeOf<primitives.R4.BooleanType>;
  /** Allow request for incomplete expansions? */
  incomplete?: t.TypeOf<primitives.R4.BooleanType>;
  /** Supported expansion parameter */
  parameter?: TerminologyCapabilitiesExpansionParameter[];
  /** Documentation about text searching works */
  textFilter?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface TerminologyCapabilitiesExpansionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Whether the server can return nested value sets */
  hierarchical?: t.OutputOf<primitives.R4.BooleanType>;
  /** Whether the server supports paging on expansion */
  paging?: t.OutputOf<primitives.R4.BooleanType>;
  /** Allow request for incomplete expansions? */
  incomplete?: t.OutputOf<primitives.R4.BooleanType>;
  /** Supported expansion parameter */
  parameter?: TerminologyCapabilitiesExpansionParameterOutputType[];
  /** Documentation about text searching works */
  textFilter?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const TerminologyCapabilitiesExpansion: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesExpansion,
    TerminologyCapabilitiesExpansionOutputType
  >,
  TerminologyCapabilitiesExpansion,
  TerminologyCapabilitiesExpansionOutputType
> = t.recursion<
  TerminologyCapabilitiesExpansion,
  TerminologyCapabilitiesExpansionOutputType
>("TerminologyCapabilitiesExpansion", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Whether the server can return nested value sets */
        hierarchical: primitives.R4.boolean,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Allow request for incomplete expansions? */
        incomplete: primitives.R4.boolean,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Whether the server supports paging on expansion */
        paging: primitives.R4.boolean,
        /** Supported expansion parameter */
        parameter: t.array(TerminologyCapabilitiesExpansionParameter),
        /** Documentation about text searching works */
        textFilter: primitives.R4.markdown
      })
    ],
    "TerminologyCapabilitiesExpansion"
  )
);

/**
 * Filter Properties supported
 */
export interface TerminologyCapabilitiesCodeSystemVersionFilter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code of the property supported */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Operations supported for the property */
  op: t.TypeOf<primitives.R4.CodeType>[];
}

export interface TerminologyCapabilitiesCodeSystemVersionFilterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code of the property supported */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Operations supported for the property */
  op: t.OutputOf<primitives.R4.CodeType>[];
}

export const TerminologyCapabilitiesCodeSystemVersionFilter: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesCodeSystemVersionFilter,
    TerminologyCapabilitiesCodeSystemVersionFilterOutputType
  >,
  TerminologyCapabilitiesCodeSystemVersionFilter,
  TerminologyCapabilitiesCodeSystemVersionFilterOutputType
> = t.recursion<
  TerminologyCapabilitiesCodeSystemVersionFilter,
  TerminologyCapabilitiesCodeSystemVersionFilterOutputType
>("TerminologyCapabilitiesCodeSystemVersionFilter", () =>
  t.intersection(
    [
      t.type({
        /** Code of the property supported */
        code: primitives.R4.code,
        /** Operations supported for the property */
        op: t.array(primitives.R4.code)
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
    "TerminologyCapabilitiesCodeSystemVersionFilter"
  )
);

/**
 * Version of Code System supported
 */
export interface TerminologyCapabilitiesCodeSystemVersion {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Version identifier for this version */
  code?: t.TypeOf<primitives.R4.StringType>;
  /** If this is the default version for this code system */
  isDefault?: t.TypeOf<primitives.R4.BooleanType>;
  /** If compositional grammar is supported */
  compositional?: t.TypeOf<primitives.R4.BooleanType>;
  /** Language Displays supported */
  language?: t.TypeOf<primitives.R4.CodeType>[];
  /** Filter Properties supported */
  filter?: TerminologyCapabilitiesCodeSystemVersionFilter[];
  /** Properties supported for $lookup */
  property?: t.TypeOf<primitives.R4.CodeType>[];
}

export interface TerminologyCapabilitiesCodeSystemVersionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Version identifier for this version */
  code?: t.OutputOf<primitives.R4.StringType>;
  /** If this is the default version for this code system */
  isDefault?: t.OutputOf<primitives.R4.BooleanType>;
  /** If compositional grammar is supported */
  compositional?: t.OutputOf<primitives.R4.BooleanType>;
  /** Language Displays supported */
  language?: t.OutputOf<primitives.R4.CodeType>[];
  /** Filter Properties supported */
  filter?: TerminologyCapabilitiesCodeSystemVersionFilterOutputType[];
  /** Properties supported for $lookup */
  property?: t.OutputOf<primitives.R4.CodeType>[];
}

export const TerminologyCapabilitiesCodeSystemVersion: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesCodeSystemVersion,
    TerminologyCapabilitiesCodeSystemVersionOutputType
  >,
  TerminologyCapabilitiesCodeSystemVersion,
  TerminologyCapabilitiesCodeSystemVersionOutputType
> = t.recursion<
  TerminologyCapabilitiesCodeSystemVersion,
  TerminologyCapabilitiesCodeSystemVersionOutputType
>("TerminologyCapabilitiesCodeSystemVersion", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Version identifier for this version */
        code: primitives.R4.string,
        /** If compositional grammar is supported */
        compositional: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Filter Properties supported */
        filter: t.array(TerminologyCapabilitiesCodeSystemVersionFilter),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** If this is the default version for this code system */
        isDefault: primitives.R4.boolean,
        /** Language Displays supported */
        language: t.array(primitives.R4.code),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Properties supported for $lookup */
        property: t.array(primitives.R4.code)
      })
    ],
    "TerminologyCapabilitiesCodeSystemVersion"
  )
);

/**
 * A code system supported by the server
 */
export interface TerminologyCapabilitiesCodeSystem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** URI for the Code System */
  uri?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Version of Code System supported */
  version?: TerminologyCapabilitiesCodeSystemVersion[];
  /** Whether subsumption is supported */
  subsumption?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface TerminologyCapabilitiesCodeSystemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** URI for the Code System */
  uri?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Version of Code System supported */
  version?: TerminologyCapabilitiesCodeSystemVersionOutputType[];
  /** Whether subsumption is supported */
  subsumption?: t.OutputOf<primitives.R4.BooleanType>;
}

export const TerminologyCapabilitiesCodeSystem: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesCodeSystem,
    TerminologyCapabilitiesCodeSystemOutputType
  >,
  TerminologyCapabilitiesCodeSystem,
  TerminologyCapabilitiesCodeSystemOutputType
> = t.recursion<
  TerminologyCapabilitiesCodeSystem,
  TerminologyCapabilitiesCodeSystemOutputType
>("TerminologyCapabilitiesCodeSystem", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Whether subsumption is supported */
        subsumption: primitives.R4.boolean,
        /** URI for the Code System */
        uri: primitives.R4.canonical,
        /** Version of Code System supported */
        version: t.array(TerminologyCapabilitiesCodeSystemVersion)
      })
    ],
    "TerminologyCapabilitiesCodeSystem"
  )
);

/**
 * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 */
export interface TerminologyCapabilitiesClosure {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** If cross-system closure is supported */
  translation?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface TerminologyCapabilitiesClosureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** If cross-system closure is supported */
  translation?: t.OutputOf<primitives.R4.BooleanType>;
}

export const TerminologyCapabilitiesClosure: t.RecursiveType<
  t.Type<
    TerminologyCapabilitiesClosure,
    TerminologyCapabilitiesClosureOutputType
  >,
  TerminologyCapabilitiesClosure,
  TerminologyCapabilitiesClosureOutputType
> = t.recursion<
  TerminologyCapabilitiesClosure,
  TerminologyCapabilitiesClosureOutputType
>("TerminologyCapabilitiesClosure", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** If cross-system closure is supported */
        translation: primitives.R4.boolean
      })
    ],
    "TerminologyCapabilitiesClosure"
  )
);

/**
 * A statement of system capabilities
 */
export interface TerminologyCapabilities {
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
  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the terminology capabilities */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this terminology capabilities (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this terminology capabilities (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the terminology capabilities */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for terminology capabilities (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this terminology capabilities is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** instance | capability | requirements */
  kind: t.TypeOf<primitives.R4.CodeType>;
  /** Software that is covered by this terminology capability statement */
  software?: TerminologyCapabilitiesSoftware;
  /** If this describes a specific instance */
  implementation?: TerminologyCapabilitiesImplementation;
  /** Whether lockedDate is supported */
  lockedDate?: t.TypeOf<primitives.R4.BooleanType>;
  /** A code system supported by the server */
  codeSystem?: TerminologyCapabilitiesCodeSystem[];
  /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation */
  expansion?: TerminologyCapabilitiesExpansion;
  /** explicit | all */
  codeSearch?: t.TypeOf<primitives.R4.CodeType>;
  /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation */
  validateCode?: TerminologyCapabilitiesValidateCode;
  /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation */
  translation?: TerminologyCapabilitiesTranslation;
  /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation */
  closure?: TerminologyCapabilitiesClosure;
}

export interface TerminologyCapabilitiesOutputType {
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
  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the terminology capabilities */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this terminology capabilities (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this terminology capabilities (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the terminology capabilities */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for terminology capabilities (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this terminology capabilities is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** instance | capability | requirements */
  kind: t.OutputOf<primitives.R4.CodeType>;
  /** Software that is covered by this terminology capability statement */
  software?: TerminologyCapabilitiesSoftwareOutputType;
  /** If this describes a specific instance */
  implementation?: TerminologyCapabilitiesImplementationOutputType;
  /** Whether lockedDate is supported */
  lockedDate?: t.OutputOf<primitives.R4.BooleanType>;
  /** A code system supported by the server */
  codeSystem?: TerminologyCapabilitiesCodeSystemOutputType[];
  /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation */
  expansion?: TerminologyCapabilitiesExpansionOutputType;
  /** explicit | all */
  codeSearch?: t.OutputOf<primitives.R4.CodeType>;
  /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation */
  validateCode?: TerminologyCapabilitiesValidateCodeOutputType;
  /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation */
  translation?: TerminologyCapabilitiesTranslationOutputType;
  /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation */
  closure?: TerminologyCapabilitiesClosureOutputType;
}

export const TerminologyCapabilities: t.RecursiveType<
  t.Type<TerminologyCapabilities, TerminologyCapabilitiesOutputType>,
  TerminologyCapabilities,
  TerminologyCapabilitiesOutputType
> = t.recursion<TerminologyCapabilities, TerminologyCapabilitiesOutputType>(
  "TerminologyCapabilities",
  () =>
    t.intersection(
      [
        t.type({
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** instance | capability | requirements */
          kind: primitives.R4.code,
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation */
          closure: TerminologyCapabilitiesClosure,
          /** explicit | all */
          codeSearch: primitives.R4.code,
          /** A code system supported by the server */
          codeSystem: t.array(TerminologyCapabilitiesCodeSystem),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Natural language description of the terminology capabilities */
          description: primitives.R4.markdown,
          /** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation */
          expansion: TerminologyCapabilitiesExpansion,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** If this describes a specific instance */
          implementation: TerminologyCapabilitiesImplementation,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for terminology capabilities (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Whether lockedDate is supported */
          lockedDate: primitives.R4.boolean,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this terminology capabilities (computer friendly) */
          name: primitives.R4.string,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this terminology capabilities is defined */
          purpose: primitives.R4.markdown,
          /** Software that is covered by this terminology capability statement */
          software: TerminologyCapabilitiesSoftware,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this terminology capabilities (human friendly) */
          title: primitives.R4.string,
          /** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation */
          translation: TerminologyCapabilitiesTranslation,
          /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation */
          validateCode: TerminologyCapabilitiesValidateCode,
          /** Business version of the terminology capabilities */
          version: primitives.R4.string
        })
      ],
      "TerminologyCapabilities"
    )
);
