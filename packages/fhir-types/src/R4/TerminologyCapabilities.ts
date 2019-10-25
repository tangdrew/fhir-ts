/**
 * TerminologyCapabilities Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A statement of system capabilities
 */
export interface TerminologyCapabilities {
  /** The type of resource */
  resourceType?: "TerminologyCapabilities";
  /** Logical id of this artifact */
  id?: primitives.R4.id;
  /** Extension of id element */
  _id?: Element;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: primitives.R4.uri;
  /** Extension of implicitRules element */
  _implicitRules?: Element;
  /** Language of the resource content */
  language?: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
  /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the terminology capabilities */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this terminology capabilities (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this terminology capabilities (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Date last changed */
  date: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the terminology capabilities */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for terminology capabilities (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this terminology capabilities is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** instance | capability | requirements */
  kind: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
  /** Whether lockedDate is supported */
  lockedDate?: boolean;
  /** Extension of lockedDate element */
  _lockedDate?: Element;
  /** explicit | all */
  codeSearch?: primitives.R4.code;
  /** Extension of codeSearch element */
  _codeSearch?: Element;
}
/**
 * A statement of system capabilities
 */
export const TerminologyCapabilities: t.Type<
  TerminologyCapabilities
> = t.recursion<TerminologyCapabilities>("TerminologyCapabilities", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** instance | capability | requirements */
      kind: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("TerminologyCapabilities"),
      /** Logical id of this artifact */
      id: primitives.R4.id,
      /** Extension of id element */
      _id: Element,
      /** Metadata about the resource */
      meta: Meta,
      /** A set of rules under which this content was created */
      implicitRules: primitives.R4.uri,
      /** Extension of implicitRules element */
      _implicitRules: Element,
      /** Language of the resource content */
      language: primitives.R4.code,
      /** Extension of language element */
      _language: Element,
      /** Text summary of the resource, for human interpretation */
      text: Narrative,
      /** Contained, inline Resources */
      contained: t.array(Resource),
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored */
      modifierExtension: t.array(Extension),
      /** Canonical identifier for this terminology capabilities, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Business version of the terminology capabilities */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this terminology capabilities (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this terminology capabilities (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the terminology capabilities */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for terminology capabilities (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this terminology capabilities is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** Extension of kind element */
      _kind: Element,
      /** Whether lockedDate is supported */
      lockedDate: primitives.R4.boolean,
      /** Extension of lockedDate element */
      _lockedDate: Element,
      /** explicit | all */
      codeSearch: primitives.R4.code,
      /** Extension of codeSearch element */
      _codeSearch: Element
    })
  ])
);

/**
 * Software that is covered by this terminology capability statement
 */
export interface TerminologyCapabilitiesSoftware {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A name the software is known by */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Version covered by this statement */
  version?: string;
  /** Extension of version element */
  _version?: Element;
}
/**
 * Software that is covered by this terminology capability statement
 */
export const TerminologyCapabilitiesSoftware: t.Type<
  TerminologyCapabilitiesSoftware
> = t.recursion<TerminologyCapabilitiesSoftware>(
  "TerminologyCapabilitiesSoftware",
  () =>
    t.intersection([
      t.type({
        /** A name the software is known by */
        name: primitives.R4.string
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of name element */
        _name: Element,
        /** Version covered by this statement */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element
      })
    ])
);

/**
 * If this describes a specific instance
 */
export interface TerminologyCapabilitiesImplementation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Describes this specific instance */
  description: string;
  /** Extension of description element */
  _description?: Element;
  /** Base URL for the implementation */
  url?: primitives.R4.url;
  /** Extension of url element */
  _url?: Element;
}
/**
 * If this describes a specific instance
 */
export const TerminologyCapabilitiesImplementation: t.Type<
  TerminologyCapabilitiesImplementation
> = t.recursion<TerminologyCapabilitiesImplementation>(
  "TerminologyCapabilitiesImplementation",
  () =>
    t.intersection([
      t.type({
        /** Describes this specific instance */
        description: primitives.R4.string
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of description element */
        _description: Element,
        /** Base URL for the implementation */
        url: primitives.R4.url,
        /** Extension of url element */
        _url: Element
      })
    ])
);

/**
 * A code system supported by the server
 */
export interface TerminologyCapabilitiesCodeSystem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** URI for the Code System */
  uri?: primitives.R4.canonical;
  /** Extension of uri element */
  _uri?: Element;
  /** Whether subsumption is supported */
  subsumption?: boolean;
  /** Extension of subsumption element */
  _subsumption?: Element;
}
/**
 * A code system supported by the server
 */
export const TerminologyCapabilitiesCodeSystem: t.Type<
  TerminologyCapabilitiesCodeSystem
> = t.recursion<TerminologyCapabilitiesCodeSystem>(
  "TerminologyCapabilitiesCodeSystem",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** URI for the Code System */
        uri: primitives.R4.canonical,
        /** Extension of uri element */
        _uri: Element,
        /** Whether subsumption is supported */
        subsumption: primitives.R4.boolean,
        /** Extension of subsumption element */
        _subsumption: Element
      })
    ])
);

/**
 * Version of Code System supported
 */
export interface TerminologyCapabilitiesCodeSystemVersion {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Version identifier for this version */
  code?: string;
  /** Extension of code element */
  _code?: Element;
  /** If this is the default version for this code system */
  isDefault?: boolean;
  /** Extension of isDefault element */
  _isDefault?: Element;
  /** If compositional grammar is supported */
  compositional?: boolean;
  /** Extension of compositional element */
  _compositional?: Element;
  /** Language Displays supported */
  language?: primitives.R4.code[];
  /** Extension of language element */
  _language?: Element[];
  /** Properties supported for $lookup */
  property?: primitives.R4.code[];
  /** Extension of property element */
  _property?: Element[];
}
/**
 * Version of Code System supported
 */
export const TerminologyCapabilitiesCodeSystemVersion: t.Type<
  TerminologyCapabilitiesCodeSystemVersion
> = t.recursion<TerminologyCapabilitiesCodeSystemVersion>(
  "TerminologyCapabilitiesCodeSystemVersion",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Version identifier for this version */
        code: primitives.R4.string,
        /** Extension of code element */
        _code: Element,
        /** If this is the default version for this code system */
        isDefault: primitives.R4.boolean,
        /** Extension of isDefault element */
        _isDefault: Element,
        /** If compositional grammar is supported */
        compositional: primitives.R4.boolean,
        /** Extension of compositional element */
        _compositional: Element,
        /** Language Displays supported */
        language: t.array(primitives.R4.code),
        /** Extension of language element */
        _language: t.array(Element),
        /** Properties supported for $lookup */
        property: t.array(primitives.R4.code),
        /** Extension of property element */
        _property: t.array(Element)
      })
    ])
);

/**
 * Filter Properties supported
 */
export interface TerminologyCapabilitiesCodeSystemVersionFilter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code of the property supported */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Operations supported for the property */
  op: primitives.R4.code[];
  /** Extension of op element */
  _op?: Element[];
}
/**
 * Filter Properties supported
 */
export const TerminologyCapabilitiesCodeSystemVersionFilter: t.Type<
  TerminologyCapabilitiesCodeSystemVersionFilter
> = t.recursion<TerminologyCapabilitiesCodeSystemVersionFilter>(
  "TerminologyCapabilitiesCodeSystemVersionFilter",
  () =>
    t.intersection([
      t.type({
        /** Code of the property supported */
        code: primitives.R4.code,
        /** Operations supported for the property */
        op: t.array(primitives.R4.code)
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of code element */
        _code: Element,
        /** Extension of op element */
        _op: t.array(Element)
      })
    ])
);

/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 */
export interface TerminologyCapabilitiesExpansion {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether the server can return nested value sets */
  hierarchical?: boolean;
  /** Extension of hierarchical element */
  _hierarchical?: Element;
  /** Whether the server supports paging on expansion */
  paging?: boolean;
  /** Extension of paging element */
  _paging?: Element;
  /** Allow request for incomplete expansions? */
  incomplete?: boolean;
  /** Extension of incomplete element */
  _incomplete?: Element;
  /** Documentation about text searching works */
  textFilter?: primitives.R4.markdown;
  /** Extension of textFilter element */
  _textFilter?: Element;
}
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation
 */
export const TerminologyCapabilitiesExpansion: t.Type<
  TerminologyCapabilitiesExpansion
> = t.recursion<TerminologyCapabilitiesExpansion>(
  "TerminologyCapabilitiesExpansion",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Whether the server can return nested value sets */
        hierarchical: primitives.R4.boolean,
        /** Extension of hierarchical element */
        _hierarchical: Element,
        /** Whether the server supports paging on expansion */
        paging: primitives.R4.boolean,
        /** Extension of paging element */
        _paging: Element,
        /** Allow request for incomplete expansions? */
        incomplete: primitives.R4.boolean,
        /** Extension of incomplete element */
        _incomplete: Element,
        /** Documentation about text searching works */
        textFilter: primitives.R4.markdown,
        /** Extension of textFilter element */
        _textFilter: Element
      })
    ])
);

/**
 * Supported expansion parameter
 */
export interface TerminologyCapabilitiesExpansionParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Expansion Parameter name */
  name: primitives.R4.code;
  /** Extension of name element */
  _name?: Element;
  /** Description of support for parameter */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Supported expansion parameter
 */
export const TerminologyCapabilitiesExpansionParameter: t.Type<
  TerminologyCapabilitiesExpansionParameter
> = t.recursion<TerminologyCapabilitiesExpansionParameter>(
  "TerminologyCapabilitiesExpansionParameter",
  () =>
    t.intersection([
      t.type({
        /** Expansion Parameter name */
        name: primitives.R4.code
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of name element */
        _name: Element,
        /** Description of support for parameter */
        documentation: primitives.R4.string,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);

/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 */
export interface TerminologyCapabilitiesValidateCode {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether translations are validated */
  translations: boolean;
  /** Extension of translations element */
  _translations?: Element;
}
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation
 */
export const TerminologyCapabilitiesValidateCode: t.Type<
  TerminologyCapabilitiesValidateCode
> = t.recursion<TerminologyCapabilitiesValidateCode>(
  "TerminologyCapabilitiesValidateCode",
  () =>
    t.intersection([
      t.type({
        /** Whether translations are validated */
        translations: primitives.R4.boolean
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of translations element */
        _translations: Element
      })
    ])
);

/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 */
export interface TerminologyCapabilitiesTranslation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether the client must identify the map */
  needsMap: boolean;
  /** Extension of needsMap element */
  _needsMap?: Element;
}
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation
 */
export const TerminologyCapabilitiesTranslation: t.Type<
  TerminologyCapabilitiesTranslation
> = t.recursion<TerminologyCapabilitiesTranslation>(
  "TerminologyCapabilitiesTranslation",
  () =>
    t.intersection([
      t.type({
        /** Whether the client must identify the map */
        needsMap: primitives.R4.boolean
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of needsMap element */
        _needsMap: Element
      })
    ])
);

/**
 * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 */
export interface TerminologyCapabilitiesClosure {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** If cross-system closure is supported */
  translation?: boolean;
  /** Extension of translation element */
  _translation?: Element;
}
/**
 * Information about the [ConceptMap/$closure](conceptmap-operation-closure.html) operation
 */
export const TerminologyCapabilitiesClosure: t.Type<
  TerminologyCapabilitiesClosure
> = t.recursion<TerminologyCapabilitiesClosure>(
  "TerminologyCapabilitiesClosure",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** If cross-system closure is supported */
        translation: primitives.R4.boolean,
        /** Extension of translation element */
        _translation: Element
      })
    ])
);
