/**
 * StructureDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import {
  ElementDefinition,
  ElementDefinitionOutputType
} from "./ElementDefinition";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Snapshot view of the structure
 */
export interface StructureDefinitionSnapshot {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Definition of elements in the resource (if no StructureDefinition) */
  element: ElementDefinition[];
}

export interface StructureDefinitionSnapshotOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Definition of elements in the resource (if no StructureDefinition) */
  element: ElementDefinitionOutputType[];
}

export const StructureDefinitionSnapshot: t.RecursiveType<
  t.Type<StructureDefinitionSnapshot, StructureDefinitionSnapshotOutputType>,
  StructureDefinitionSnapshot,
  StructureDefinitionSnapshotOutputType
> = t.recursion<
  StructureDefinitionSnapshot,
  StructureDefinitionSnapshotOutputType
>("StructureDefinitionSnapshot", () =>
  t.intersection(
    [
      t.type({
        /** Definition of elements in the resource (if no StructureDefinition) */
        element: t.array(ElementDefinition)
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
    "StructureDefinitionSnapshot"
  )
);

/**
 * External specification that the content is mapped to
 */
export interface StructureDefinitionMapping {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Internal id when this mapping is used */
  identity: t.TypeOf<primitives.R4.IDType>;
  /** Identifies what this mapping refers to */
  uri?: t.TypeOf<primitives.R4.URIType>;
  /** Names what this mapping refers to */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Versions, Issues, Scope limitations etc. */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface StructureDefinitionMappingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Internal id when this mapping is used */
  identity: t.OutputOf<primitives.R4.IDType>;
  /** Identifies what this mapping refers to */
  uri?: t.OutputOf<primitives.R4.URIType>;
  /** Names what this mapping refers to */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Versions, Issues, Scope limitations etc. */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const StructureDefinitionMapping: t.RecursiveType<
  t.Type<StructureDefinitionMapping, StructureDefinitionMappingOutputType>,
  StructureDefinitionMapping,
  StructureDefinitionMappingOutputType
> = t.recursion<
  StructureDefinitionMapping,
  StructureDefinitionMappingOutputType
>("StructureDefinitionMapping", () =>
  t.intersection(
    [
      t.type({
        /** Internal id when this mapping is used */
        identity: primitives.R4.id
      }),
      t.partial({
        /** Versions, Issues, Scope limitations etc. */
        comment: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Names what this mapping refers to */
        name: primitives.R4.string,
        /** Identifies what this mapping refers to */
        uri: primitives.R4.uri
      })
    ],
    "StructureDefinitionMapping"
  )
);

/**
 * Differential view of the structure
 */
export interface StructureDefinitionDifferential {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Definition of elements in the resource (if no StructureDefinition) */
  element: ElementDefinition[];
}

export interface StructureDefinitionDifferentialOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Definition of elements in the resource (if no StructureDefinition) */
  element: ElementDefinitionOutputType[];
}

export const StructureDefinitionDifferential: t.RecursiveType<
  t.Type<
    StructureDefinitionDifferential,
    StructureDefinitionDifferentialOutputType
  >,
  StructureDefinitionDifferential,
  StructureDefinitionDifferentialOutputType
> = t.recursion<
  StructureDefinitionDifferential,
  StructureDefinitionDifferentialOutputType
>("StructureDefinitionDifferential", () =>
  t.intersection(
    [
      t.type({
        /** Definition of elements in the resource (if no StructureDefinition) */
        element: t.array(ElementDefinition)
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
    "StructureDefinitionDifferential"
  )
);

/**
 * If an extension, where it can be used in instances
 */
export interface StructureDefinitionContext {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** fhirpath | element | extension */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Where the extension can be used in instances */
  expression: t.TypeOf<primitives.R4.StringType>;
}

export interface StructureDefinitionContextOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** fhirpath | element | extension */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Where the extension can be used in instances */
  expression: t.OutputOf<primitives.R4.StringType>;
}

export const StructureDefinitionContext: t.RecursiveType<
  t.Type<StructureDefinitionContext, StructureDefinitionContextOutputType>,
  StructureDefinitionContext,
  StructureDefinitionContextOutputType
> = t.recursion<
  StructureDefinitionContext,
  StructureDefinitionContextOutputType
>("StructureDefinitionContext", () =>
  t.intersection(
    [
      t.type({
        /** Where the extension can be used in instances */
        expression: primitives.R4.string,
        /** fhirpath | element | extension */
        type: primitives.R4.code
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
    "StructureDefinitionContext"
  )
);

/**
 * Structural Definition
 */
export interface StructureDefinition {
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
  /** Canonical identifier for this structure definition, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the structure definition */
  identifier?: Identifier[];
  /** Business version of the structure definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this structure definition (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Name for this structure definition (human friendly) */
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
  /** Natural language description of the structure definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for structure definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this structure definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Assist with indexing and finding */
  keyword?: Coding[];
  /** FHIR Version this StructureDefinition targets */
  fhirVersion?: t.TypeOf<primitives.R4.CodeType>;
  /** External specification that the content is mapped to */
  mapping?: StructureDefinitionMapping[];
  /** primitive-type | complex-type | resource | logical */
  kind: t.TypeOf<primitives.R4.CodeType>;
  /** Whether the structure is abstract */
  abstract: t.TypeOf<primitives.R4.BooleanType>;
  /** If an extension, where it can be used in instances */
  context?: StructureDefinitionContext[];
  /** FHIRPath invariants - when the extension can be used */
  contextInvariant?: t.TypeOf<primitives.R4.StringType>[];
  /** Type defined or constrained by this structure */
  type: t.TypeOf<primitives.R4.URIType>;
  /** Definition that this type is constrained/specialized from */
  baseDefinition?: t.TypeOf<primitives.R4.CanonicalType>;
  /** specialization | constraint - How relates to base definition */
  derivation?: t.TypeOf<primitives.R4.CodeType>;
  /** Snapshot view of the structure */
  snapshot?: StructureDefinitionSnapshot;
  /** Differential view of the structure */
  differential?: StructureDefinitionDifferential;
}

export interface StructureDefinitionOutputType {
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
  /** Canonical identifier for this structure definition, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the structure definition */
  identifier?: IdentifierOutputType[];
  /** Business version of the structure definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this structure definition (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Name for this structure definition (human friendly) */
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
  /** Natural language description of the structure definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for structure definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this structure definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Assist with indexing and finding */
  keyword?: CodingOutputType[];
  /** FHIR Version this StructureDefinition targets */
  fhirVersion?: t.OutputOf<primitives.R4.CodeType>;
  /** External specification that the content is mapped to */
  mapping?: StructureDefinitionMappingOutputType[];
  /** primitive-type | complex-type | resource | logical */
  kind: t.OutputOf<primitives.R4.CodeType>;
  /** Whether the structure is abstract */
  abstract: t.OutputOf<primitives.R4.BooleanType>;
  /** If an extension, where it can be used in instances */
  context?: StructureDefinitionContextOutputType[];
  /** FHIRPath invariants - when the extension can be used */
  contextInvariant?: t.OutputOf<primitives.R4.StringType>[];
  /** Type defined or constrained by this structure */
  type: t.OutputOf<primitives.R4.URIType>;
  /** Definition that this type is constrained/specialized from */
  baseDefinition?: t.OutputOf<primitives.R4.CanonicalType>;
  /** specialization | constraint - How relates to base definition */
  derivation?: t.OutputOf<primitives.R4.CodeType>;
  /** Snapshot view of the structure */
  snapshot?: StructureDefinitionSnapshotOutputType;
  /** Differential view of the structure */
  differential?: StructureDefinitionDifferentialOutputType;
}

export const StructureDefinition: t.RecursiveType<
  t.Type<StructureDefinition, StructureDefinitionOutputType>,
  StructureDefinition,
  StructureDefinitionOutputType
> = t.recursion<StructureDefinition, StructureDefinitionOutputType>(
  "StructureDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Whether the structure is abstract */
          abstract: primitives.R4.boolean,
          /** primitive-type | complex-type | resource | logical */
          kind: primitives.R4.code,
          /** Name for this structure definition (computer friendly) */
          name: primitives.R4.string,
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** Type defined or constrained by this structure */
          type: primitives.R4.uri,
          /** Canonical identifier for this structure definition, represented as a URI (globally unique) */
          url: primitives.R4.uri
        }),
        t.partial({
          /** Definition that this type is constrained/specialized from */
          baseDefinition: primitives.R4.canonical,
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** If an extension, where it can be used in instances */
          context: t.array(StructureDefinitionContext),
          /** FHIRPath invariants - when the extension can be used */
          contextInvariant: t.array(primitives.R4.string),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** specialization | constraint - How relates to base definition */
          derivation: primitives.R4.code,
          /** Natural language description of the structure definition */
          description: primitives.R4.markdown,
          /** Differential view of the structure */
          differential: StructureDefinitionDifferential,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** FHIR Version this StructureDefinition targets */
          fhirVersion: primitives.R4.code,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the structure definition */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for structure definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Assist with indexing and finding */
          keyword: t.array(Coding),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** External specification that the content is mapped to */
          mapping: t.array(StructureDefinitionMapping),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this structure definition is defined */
          purpose: primitives.R4.markdown,
          /** Snapshot view of the structure */
          snapshot: StructureDefinitionSnapshot,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this structure definition (human friendly) */
          title: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the structure definition */
          version: primitives.R4.string
        })
      ],
      "StructureDefinition"
    )
);
