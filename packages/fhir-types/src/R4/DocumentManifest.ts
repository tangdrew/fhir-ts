/**
 * DocumentManifest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A list that defines a set of documents
 */
export interface DocumentManifest {
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
  /** Unique Identifier for the set of documents */
  masterIdentifier?: Identifier;
  /** Other identifiers for the manifest */
  identifier?: Identifier[];
  /** current | superseded | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Kind of document set */
  type?: CodeableConcept;
  /** The subject of the set of documents */
  subject?: Reference;
  /** When this document manifest created */
  created?: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Who and/or what authored the DocumentManifest */
  author?: Reference[];
  /** Intended to get notified about this set of documents */
  recipient?: Reference[];
  /** The source system/application/software */
  source?: primitives.R4.uri;
  /** Extension of source element */
  _source?: Element;
  /** Human-readable description (title) */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Items in manifest */
  content: Reference[];
}
/**
 * A list that defines a set of documents
 */
export const DocumentManifest: t.Type<DocumentManifest> = t.recursion<
  DocumentManifest
>("DocumentManifest", () =>
  t.intersection([
    t.type({
      /** current | superseded | entered-in-error */
      status: primitives.R4.code,
      /** Items in manifest */
      content: t.array(Reference)
    }),
    t.partial({
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
      /** Unique Identifier for the set of documents */
      masterIdentifier: Identifier,
      /** Other identifiers for the manifest */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Kind of document set */
      type: CodeableConcept,
      /** The subject of the set of documents */
      subject: Reference,
      /** When this document manifest created */
      created: primitives.R4.dateTime,
      /** Extension of created element */
      _created: Element,
      /** Who and/or what authored the DocumentManifest */
      author: t.array(Reference),
      /** Intended to get notified about this set of documents */
      recipient: t.array(Reference),
      /** The source system/application/software */
      source: primitives.R4.uri,
      /** Extension of source element */
      _source: Element,
      /** Human-readable description (title) */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * Related things
 */
export interface DocumentManifestRelated {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifiers of things that are related */
  identifier?: Identifier;
  /** Related Resource */
  ref?: Reference;
}
/**
 * Related things
 */
export const DocumentManifestRelated: t.Type<
  DocumentManifestRelated
> = t.recursion<DocumentManifestRelated>("DocumentManifestRelated", () =>
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
      /** Identifiers of things that are related */
      identifier: Identifier,
      /** Related Resource */
      ref: Reference
    })
  ])
);
