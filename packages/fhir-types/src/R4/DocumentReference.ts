/**
 * DocumentReference Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A reference to a document
 */
export interface DocumentReference {
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
  /** Master Version Specific Identifier */
  masterIdentifier?: Identifier;
  /** Other identifiers for the document */
  identifier?: Identifier[];
  /** current | superseded | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** preliminary | final | appended | amended | entered-in-error */
  docStatus?: primitives.R4.code;
  /** Extension of docStatus element */
  _docStatus?: Element;
  /** Kind of document (LOINC if possible) */
  type?: CodeableConcept;
  /** Categorization of document */
  category?: CodeableConcept[];
  /** Who/what is the subject of the document */
  subject?: Reference;
  /** When this document reference was created */
  date?: primitives.R4.instant;
  /** Extension of date element */
  _date?: Element;
  /** Who and/or what authored the document */
  author?: Reference[];
  /** Who/what authenticated the document */
  authenticator?: Reference;
  /** Organization which maintains the document */
  custodian?: Reference;
  /** Human-readable description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Document security-tags */
  securityLabel?: CodeableConcept[];
}
/**
 * A reference to a document
 */
export const DocumentReference: t.Type<DocumentReference> = t.recursion<
  DocumentReference
>("DocumentReference", () =>
  t.intersection([
    t.type({
      /** current | superseded | entered-in-error */
      status: primitives.R4.code
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
      /** Master Version Specific Identifier */
      masterIdentifier: Identifier,
      /** Other identifiers for the document */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** preliminary | final | appended | amended | entered-in-error */
      docStatus: primitives.R4.code,
      /** Extension of docStatus element */
      _docStatus: Element,
      /** Kind of document (LOINC if possible) */
      type: CodeableConcept,
      /** Categorization of document */
      category: t.array(CodeableConcept),
      /** Who/what is the subject of the document */
      subject: Reference,
      /** When this document reference was created */
      date: primitives.R4.instant,
      /** Extension of date element */
      _date: Element,
      /** Who and/or what authored the document */
      author: t.array(Reference),
      /** Who/what authenticated the document */
      authenticator: Reference,
      /** Organization which maintains the document */
      custodian: Reference,
      /** Human-readable description */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Document security-tags */
      securityLabel: t.array(CodeableConcept)
    })
  ])
);

/**
 * Relationships to other documents
 */
export interface DocumentReferenceRelatesTo {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** replaces | transforms | signs | appends */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Target of the relationship */
  target: Reference;
}
/**
 * Relationships to other documents
 */
export const DocumentReferenceRelatesTo: t.Type<
  DocumentReferenceRelatesTo
> = t.recursion<DocumentReferenceRelatesTo>("DocumentReferenceRelatesTo", () =>
  t.intersection([
    t.type({
      /** replaces | transforms | signs | appends */
      code: primitives.R4.code,
      /** Target of the relationship */
      target: Reference
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
      _code: Element
    })
  ])
);

/**
 * Document referenced
 */
export interface DocumentReferenceContent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Where to access the document */
  attachment: Attachment;
  /** Format/content rules for the document */
  format?: Coding;
}
/**
 * Document referenced
 */
export const DocumentReferenceContent: t.Type<
  DocumentReferenceContent
> = t.recursion<DocumentReferenceContent>("DocumentReferenceContent", () =>
  t.intersection([
    t.type({
      /** Where to access the document */
      attachment: Attachment
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
      /** Format/content rules for the document */
      format: Coding
    })
  ])
);

/**
 * Clinical context of document
 */
export interface DocumentReferenceContext {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Context of the document  content */
  encounter?: Reference[];
  /** Main clinical acts documented */
  event?: CodeableConcept[];
  /** Time of service that is being documented */
  period?: Period;
  /** Kind of facility where patient was seen */
  facilityType?: CodeableConcept;
  /** Additional details about where the content was created (e.g. clinical specialty) */
  practiceSetting?: CodeableConcept;
  /** Patient demographics from source */
  sourcePatientInfo?: Reference;
  /** Related identifiers or resources */
  related?: Reference[];
}
/**
 * Clinical context of document
 */
export const DocumentReferenceContext: t.Type<
  DocumentReferenceContext
> = t.recursion<DocumentReferenceContext>("DocumentReferenceContext", () =>
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
      /** Context of the document  content */
      encounter: t.array(Reference),
      /** Main clinical acts documented */
      event: t.array(CodeableConcept),
      /** Time of service that is being documented */
      period: Period,
      /** Kind of facility where patient was seen */
      facilityType: CodeableConcept,
      /** Additional details about where the content was created (e.g. clinical specialty) */
      practiceSetting: CodeableConcept,
      /** Patient demographics from source */
      sourcePatientInfo: Reference,
      /** Related identifiers or resources */
      related: t.array(Reference)
    })
  ])
);
