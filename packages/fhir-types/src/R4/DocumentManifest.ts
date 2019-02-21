/**
 * DocumentManifest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Related things
 */
export interface DocumentManifestRelated {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifiers of things that are related */
  identifier?: Identifier;
  /** Related Resource */
  ref?: Reference;
}

export interface DocumentManifestRelatedOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifiers of things that are related */
  identifier?: IdentifierOutputType;
  /** Related Resource */
  ref?: ReferenceOutputType;
}

export const DocumentManifestRelated: t.RecursiveType<
  t.Type<DocumentManifestRelated, DocumentManifestRelatedOutputType>,
  DocumentManifestRelated,
  DocumentManifestRelatedOutputType
> = t.recursion<DocumentManifestRelated, DocumentManifestRelatedOutputType>(
  "DocumentManifestRelated",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Identifiers of things that are related */
          identifier: Identifier,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Related Resource */
          ref: Reference
        })
      ],
      "DocumentManifestRelated"
    )
);

/**
 * A list that defines a set of documents
 */
export interface DocumentManifest {
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
  /** Unique Identifier for the set of documents */
  masterIdentifier?: Identifier;
  /** Other identifiers for the manifest */
  identifier?: Identifier[];
  /** current | superseded | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Kind of document set */
  type?: CodeableConcept;
  /** The subject of the set of documents */
  subject?: Reference;
  /** When this document manifest created */
  created?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who and/or what authored the DocumentManifest */
  author?: Reference[];
  /** Intended to get notified about this set of documents */
  recipient?: Reference[];
  /** The source system/application/software */
  source?: t.TypeOf<primitives.R4.URIType>;
  /** Human-readable description (title) */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Items in manifest */
  content: Reference[];
  /** Related things */
  related?: DocumentManifestRelated[];
}

export interface DocumentManifestOutputType {
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
  /** Unique Identifier for the set of documents */
  masterIdentifier?: IdentifierOutputType;
  /** Other identifiers for the manifest */
  identifier?: IdentifierOutputType[];
  /** current | superseded | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Kind of document set */
  type?: CodeableConceptOutputType;
  /** The subject of the set of documents */
  subject?: ReferenceOutputType;
  /** When this document manifest created */
  created?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who and/or what authored the DocumentManifest */
  author?: ReferenceOutputType[];
  /** Intended to get notified about this set of documents */
  recipient?: ReferenceOutputType[];
  /** The source system/application/software */
  source?: t.OutputOf<primitives.R4.URIType>;
  /** Human-readable description (title) */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Items in manifest */
  content: ReferenceOutputType[];
  /** Related things */
  related?: DocumentManifestRelatedOutputType[];
}

export const DocumentManifest: t.RecursiveType<
  t.Type<DocumentManifest, DocumentManifestOutputType>,
  DocumentManifest,
  DocumentManifestOutputType
> = t.recursion<DocumentManifest, DocumentManifestOutputType>(
  "DocumentManifest",
  () =>
    t.intersection(
      [
        t.type({
          /** Items in manifest */
          content: t.array(Reference),
          /** current | superseded | entered-in-error */
          status: primitives.R4.code
        }),
        t.partial({
          /** Who and/or what authored the DocumentManifest */
          author: t.array(Reference),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** When this document manifest created */
          created: primitives.R4.dateTime,
          /** Human-readable description (title) */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Other identifiers for the manifest */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Unique Identifier for the set of documents */
          masterIdentifier: Identifier,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Intended to get notified about this set of documents */
          recipient: t.array(Reference),
          /** Related things */
          related: t.array(DocumentManifestRelated),
          /** The source system/application/software */
          source: primitives.R4.uri,
          /** The subject of the set of documents */
          subject: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Kind of document set */
          type: CodeableConcept
        })
      ],
      "DocumentManifest"
    )
);
