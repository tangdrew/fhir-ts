/**
 * DocumentReference Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Relationships to other documents
 */
export interface DocumentReferenceRelatesTo {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** replaces | transforms | signs | appends */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Target of the relationship */
  target: Reference;
}

export interface DocumentReferenceRelatesToOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** replaces | transforms | signs | appends */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Target of the relationship */
  target: ReferenceOutputType;
}

export const DocumentReferenceRelatesTo: t.RecursiveType<
  t.Type<DocumentReferenceRelatesTo, DocumentReferenceRelatesToOutputType>,
  DocumentReferenceRelatesTo,
  DocumentReferenceRelatesToOutputType
> = t.recursion<
  DocumentReferenceRelatesTo,
  DocumentReferenceRelatesToOutputType
>("DocumentReferenceRelatesTo", () =>
  t.intersection(
    [
      t.type({
        /** replaces | transforms | signs | appends */
        code: primitives.R4.code,
        /** Target of the relationship */
        target: Reference
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
    "DocumentReferenceRelatesTo"
  )
);

/**
 * Clinical context of document
 */
export interface DocumentReferenceContext {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface DocumentReferenceContextOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Context of the document  content */
  encounter?: ReferenceOutputType[];
  /** Main clinical acts documented */
  event?: CodeableConceptOutputType[];
  /** Time of service that is being documented */
  period?: PeriodOutputType;
  /** Kind of facility where patient was seen */
  facilityType?: CodeableConceptOutputType;
  /** Additional details about where the content was created (e.g. clinical specialty) */
  practiceSetting?: CodeableConceptOutputType;
  /** Patient demographics from source */
  sourcePatientInfo?: ReferenceOutputType;
  /** Related identifiers or resources */
  related?: ReferenceOutputType[];
}

export const DocumentReferenceContext: t.RecursiveType<
  t.Type<DocumentReferenceContext, DocumentReferenceContextOutputType>,
  DocumentReferenceContext,
  DocumentReferenceContextOutputType
> = t.recursion<DocumentReferenceContext, DocumentReferenceContextOutputType>(
  "DocumentReferenceContext",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Context of the document  content */
          encounter: t.array(Reference),
          /** Main clinical acts documented */
          event: t.array(CodeableConcept),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Kind of facility where patient was seen */
          facilityType: CodeableConcept,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Time of service that is being documented */
          period: Period,
          /** Additional details about where the content was created (e.g. clinical specialty) */
          practiceSetting: CodeableConcept,
          /** Related identifiers or resources */
          related: t.array(Reference),
          /** Patient demographics from source */
          sourcePatientInfo: Reference
        })
      ],
      "DocumentReferenceContext"
    )
);

/**
 * Document referenced
 */
export interface DocumentReferenceContent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Where to access the document */
  attachment: Attachment;
  /** Format/content rules for the document */
  format?: Coding;
}

export interface DocumentReferenceContentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Where to access the document */
  attachment: AttachmentOutputType;
  /** Format/content rules for the document */
  format?: CodingOutputType;
}

export const DocumentReferenceContent: t.RecursiveType<
  t.Type<DocumentReferenceContent, DocumentReferenceContentOutputType>,
  DocumentReferenceContent,
  DocumentReferenceContentOutputType
> = t.recursion<DocumentReferenceContent, DocumentReferenceContentOutputType>(
  "DocumentReferenceContent",
  () =>
    t.intersection(
      [
        t.type({
          /** Where to access the document */
          attachment: Attachment
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Format/content rules for the document */
          format: Coding,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DocumentReferenceContent"
    )
);

/**
 * A reference to a document
 */
export interface DocumentReference {
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
  /** Master Version Specific Identifier */
  masterIdentifier?: Identifier;
  /** Other identifiers for the document */
  identifier?: Identifier[];
  /** current | superseded | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** preliminary | final | appended | amended | entered-in-error */
  docStatus?: t.TypeOf<primitives.R4.CodeType>;
  /** Kind of document (LOINC if possible) */
  type?: CodeableConcept;
  /** Categorization of document */
  category?: CodeableConcept[];
  /** Who/what is the subject of the document */
  subject?: Reference;
  /** When this document reference was created */
  date?: t.TypeOf<primitives.R4.InstantType>;
  /** Who and/or what authored the document */
  author?: Reference[];
  /** Who/what authenticated the document */
  authenticator?: Reference;
  /** Organization which maintains the document */
  custodian?: Reference;
  /** Relationships to other documents */
  relatesTo?: DocumentReferenceRelatesTo[];
  /** Human-readable description */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Document security-tags */
  securityLabel?: CodeableConcept[];
  /** Document referenced */
  content: DocumentReferenceContent[];
  /** Clinical context of document */
  context?: DocumentReferenceContext;
}

export interface DocumentReferenceOutputType {
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
  /** Master Version Specific Identifier */
  masterIdentifier?: IdentifierOutputType;
  /** Other identifiers for the document */
  identifier?: IdentifierOutputType[];
  /** current | superseded | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** preliminary | final | appended | amended | entered-in-error */
  docStatus?: t.OutputOf<primitives.R4.CodeType>;
  /** Kind of document (LOINC if possible) */
  type?: CodeableConceptOutputType;
  /** Categorization of document */
  category?: CodeableConceptOutputType[];
  /** Who/what is the subject of the document */
  subject?: ReferenceOutputType;
  /** When this document reference was created */
  date?: t.OutputOf<primitives.R4.InstantType>;
  /** Who and/or what authored the document */
  author?: ReferenceOutputType[];
  /** Who/what authenticated the document */
  authenticator?: ReferenceOutputType;
  /** Organization which maintains the document */
  custodian?: ReferenceOutputType;
  /** Relationships to other documents */
  relatesTo?: DocumentReferenceRelatesToOutputType[];
  /** Human-readable description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Document security-tags */
  securityLabel?: CodeableConceptOutputType[];
  /** Document referenced */
  content: DocumentReferenceContentOutputType[];
  /** Clinical context of document */
  context?: DocumentReferenceContextOutputType;
}

export const DocumentReference: t.RecursiveType<
  t.Type<DocumentReference, DocumentReferenceOutputType>,
  DocumentReference,
  DocumentReferenceOutputType
> = t.recursion<DocumentReference, DocumentReferenceOutputType>(
  "DocumentReference",
  () =>
    t.intersection(
      [
        t.type({
          /** Document referenced */
          content: t.array(DocumentReferenceContent),
          /** current | superseded | entered-in-error */
          status: primitives.R4.code
        }),
        t.partial({
          /** Who/what authenticated the document */
          authenticator: Reference,
          /** Who and/or what authored the document */
          author: t.array(Reference),
          /** Categorization of document */
          category: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Clinical context of document */
          context: DocumentReferenceContext,
          /** Organization which maintains the document */
          custodian: Reference,
          /** When this document reference was created */
          date: primitives.R4.instant,
          /** Human-readable description */
          description: primitives.R4.string,
          /** preliminary | final | appended | amended | entered-in-error */
          docStatus: primitives.R4.code,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Other identifiers for the document */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Master Version Specific Identifier */
          masterIdentifier: Identifier,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Relationships to other documents */
          relatesTo: t.array(DocumentReferenceRelatesTo),
          /** Document security-tags */
          securityLabel: t.array(CodeableConcept),
          /** Who/what is the subject of the document */
          subject: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Kind of document (LOINC if possible) */
          type: CodeableConcept
        })
      ],
      "DocumentReference"
    )
);
