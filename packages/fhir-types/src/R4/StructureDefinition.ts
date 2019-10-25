/**
 * StructureDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { ElementDefinition } from "./ElementDefinition";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Structural Definition
 */
export interface StructureDefinition {
  /** The type of resource */
  resourceType?: "StructureDefinition";
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
  /** Canonical identifier for this structure definition, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the structure definition */
  identifier?: Identifier[];
  /** Business version of the structure definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this structure definition (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this structure definition (human friendly) */
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
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the structure definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for structure definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this structure definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** Assist with indexing and finding */
  keyword?: Coding[];
  /** FHIR Version this StructureDefinition targets */
  fhirVersion?: primitives.R4.code;
  /** Extension of fhirVersion element */
  _fhirVersion?: Element;
  /** primitive-type | complex-type | resource | logical */
  kind: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
  /** Whether the structure is abstract */
  abstract: boolean;
  /** Extension of abstract element */
  _abstract?: Element;
  /** FHIRPath invariants - when the extension can be used */
  contextInvariant?: string[];
  /** Extension of contextInvariant element */
  _contextInvariant?: Element[];
  /** Type defined or constrained by this structure */
  type: primitives.R4.uri;
  /** Extension of type element */
  _type?: Element;
  /** Definition that this type is constrained/specialized from */
  baseDefinition?: primitives.R4.canonical;
  /** Extension of baseDefinition element */
  _baseDefinition?: Element;
  /** specialization | constraint - How relates to base definition */
  derivation?: primitives.R4.code;
  /** Extension of derivation element */
  _derivation?: Element;
}
/**
 * Structural Definition
 */
export const StructureDefinition: t.Type<StructureDefinition> = t.recursion<
  StructureDefinition
>("StructureDefinition", () =>
  t.intersection([
    t.type({
      /** Canonical identifier for this structure definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Name for this structure definition (computer friendly) */
      name: primitives.R4.string,
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** primitive-type | complex-type | resource | logical */
      kind: primitives.R4.code,
      /** Whether the structure is abstract */
      abstract: primitives.R4.boolean,
      /** Type defined or constrained by this structure */
      type: primitives.R4.uri
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("StructureDefinition"),
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
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the structure definition */
      identifier: t.array(Identifier),
      /** Business version of the structure definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Extension of name element */
      _name: Element,
      /** Name for this structure definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the structure definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for structure definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this structure definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** Assist with indexing and finding */
      keyword: t.array(Coding),
      /** FHIR Version this StructureDefinition targets */
      fhirVersion: primitives.R4.code,
      /** Extension of fhirVersion element */
      _fhirVersion: Element,
      /** Extension of kind element */
      _kind: Element,
      /** Extension of abstract element */
      _abstract: Element,
      /** FHIRPath invariants - when the extension can be used */
      contextInvariant: t.array(primitives.R4.string),
      /** Extension of contextInvariant element */
      _contextInvariant: t.array(Element),
      /** Extension of type element */
      _type: Element,
      /** Definition that this type is constrained/specialized from */
      baseDefinition: primitives.R4.canonical,
      /** Extension of baseDefinition element */
      _baseDefinition: Element,
      /** specialization | constraint - How relates to base definition */
      derivation: primitives.R4.code,
      /** Extension of derivation element */
      _derivation: Element
    })
  ])
);

/**
 * External specification that the content is mapped to
 */
export interface StructureDefinitionMapping {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Internal id when this mapping is used */
  identity: primitives.R4.id;
  /** Extension of identity element */
  _identity?: Element;
  /** Identifies what this mapping refers to */
  uri?: primitives.R4.uri;
  /** Extension of uri element */
  _uri?: Element;
  /** Names what this mapping refers to */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Versions, Issues, Scope limitations etc. */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * External specification that the content is mapped to
 */
export const StructureDefinitionMapping: t.Type<
  StructureDefinitionMapping
> = t.recursion<StructureDefinitionMapping>("StructureDefinitionMapping", () =>
  t.intersection([
    t.type({
      /** Internal id when this mapping is used */
      identity: primitives.R4.id
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
      /** Extension of identity element */
      _identity: Element,
      /** Identifies what this mapping refers to */
      uri: primitives.R4.uri,
      /** Extension of uri element */
      _uri: Element,
      /** Names what this mapping refers to */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Versions, Issues, Scope limitations etc. */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element
    })
  ])
);

/**
 * If an extension, where it can be used in instances
 */
export interface StructureDefinitionContext {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** fhirpath | element | extension */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Where the extension can be used in instances */
  expression: string;
  /** Extension of expression element */
  _expression?: Element;
}
/**
 * If an extension, where it can be used in instances
 */
export const StructureDefinitionContext: t.Type<
  StructureDefinitionContext
> = t.recursion<StructureDefinitionContext>("StructureDefinitionContext", () =>
  t.intersection([
    t.type({
      /** fhirpath | element | extension */
      type: primitives.R4.code,
      /** Where the extension can be used in instances */
      expression: primitives.R4.string
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
      /** Extension of type element */
      _type: Element,
      /** Extension of expression element */
      _expression: Element
    })
  ])
);

/**
 * Snapshot view of the structure
 */
export interface StructureDefinitionSnapshot {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Definition of elements in the resource (if no StructureDefinition) */
  element: ElementDefinition[];
}
/**
 * Snapshot view of the structure
 */
export const StructureDefinitionSnapshot: t.Type<
  StructureDefinitionSnapshot
> = t.recursion<StructureDefinitionSnapshot>(
  "StructureDefinitionSnapshot",
  () =>
    t.intersection([
      t.type({
        /** Definition of elements in the resource (if no StructureDefinition) */
        element: t.array(ElementDefinition)
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ])
);

/**
 * Differential view of the structure
 */
export interface StructureDefinitionDifferential {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Definition of elements in the resource (if no StructureDefinition) */
  element: ElementDefinition[];
}
/**
 * Differential view of the structure
 */
export const StructureDefinitionDifferential: t.Type<
  StructureDefinitionDifferential
> = t.recursion<StructureDefinitionDifferential>(
  "StructureDefinitionDifferential",
  () =>
    t.intersection([
      t.type({
        /** Definition of elements in the resource (if no StructureDefinition) */
        element: t.array(ElementDefinition)
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ])
);
