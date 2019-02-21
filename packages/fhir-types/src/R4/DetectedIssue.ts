/**
 * DetectedIssue Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Step taken to address
 */
export interface DetectedIssueMitigation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What mitigation? */
  action: CodeableConcept;
  /** Date committed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who is committing? */
  author?: Reference;
}

export interface DetectedIssueMitigationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What mitigation? */
  action: CodeableConceptOutputType;
  /** Date committed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is committing? */
  author?: ReferenceOutputType;
}

export const DetectedIssueMitigation: t.RecursiveType<
  t.Type<DetectedIssueMitigation, DetectedIssueMitigationOutputType>,
  DetectedIssueMitigation,
  DetectedIssueMitigationOutputType
> = t.recursion<DetectedIssueMitigation, DetectedIssueMitigationOutputType>(
  "DetectedIssueMitigation",
  () =>
    t.intersection(
      [
        t.type({
          /** What mitigation? */
          action: CodeableConcept
        }),
        t.partial({
          /** Who is committing? */
          author: Reference,
          /** Date committed */
          date: primitives.R4.dateTime,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DetectedIssueMitigation"
    )
);

/**
 * Supporting evidence
 */
export interface DetectedIssueEvidence {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Manifestation */
  code?: CodeableConcept[];
  /** Supporting information */
  detail?: Reference[];
}

export interface DetectedIssueEvidenceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Manifestation */
  code?: CodeableConceptOutputType[];
  /** Supporting information */
  detail?: ReferenceOutputType[];
}

export const DetectedIssueEvidence: t.RecursiveType<
  t.Type<DetectedIssueEvidence, DetectedIssueEvidenceOutputType>,
  DetectedIssueEvidence,
  DetectedIssueEvidenceOutputType
> = t.recursion<DetectedIssueEvidence, DetectedIssueEvidenceOutputType>(
  "DetectedIssueEvidence",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Manifestation */
          code: t.array(CodeableConcept),
          /** Supporting information */
          detail: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DetectedIssueEvidence"
    )
);

/**
 * Clinical issue with action
 */
export interface DetectedIssue {
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
  /** Unique id for the detected issue */
  identifier?: Identifier[];
  /** registered | preliminary | final | amended + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Issue Category, e.g. drug-drug, duplicate therapy, etc. */
  code?: CodeableConcept;
  /** high | moderate | low */
  severity?: t.TypeOf<primitives.R4.CodeType>;
  /** Associated patient */
  patient?: Reference;
  /** When identified */
  identified?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** The provider or device that identified the issue */
  author?: Reference;
  /** Problem resource */
  implicated?: Reference[];
  /** Supporting evidence */
  evidence?: DetectedIssueEvidence[];
  /** Description and context */
  detail?: t.TypeOf<primitives.R4.StringType>;
  /** Authority for issue */
  reference?: t.TypeOf<primitives.R4.URIType>;
  /** Step taken to address */
  mitigation?: DetectedIssueMitigation[];
}

export interface DetectedIssueOutputType {
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
  /** Unique id for the detected issue */
  identifier?: IdentifierOutputType[];
  /** registered | preliminary | final | amended + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Issue Category, e.g. drug-drug, duplicate therapy, etc. */
  code?: CodeableConceptOutputType;
  /** high | moderate | low */
  severity?: t.OutputOf<primitives.R4.CodeType>;
  /** Associated patient */
  patient?: ReferenceOutputType;
  /** When identified */
  identified?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** The provider or device that identified the issue */
  author?: ReferenceOutputType;
  /** Problem resource */
  implicated?: ReferenceOutputType[];
  /** Supporting evidence */
  evidence?: DetectedIssueEvidenceOutputType[];
  /** Description and context */
  detail?: t.OutputOf<primitives.R4.StringType>;
  /** Authority for issue */
  reference?: t.OutputOf<primitives.R4.URIType>;
  /** Step taken to address */
  mitigation?: DetectedIssueMitigationOutputType[];
}

export const DetectedIssue: t.RecursiveType<
  t.Type<DetectedIssue, DetectedIssueOutputType>,
  DetectedIssue,
  DetectedIssueOutputType
> = t.recursion<DetectedIssue, DetectedIssueOutputType>("DetectedIssue", () =>
  t.intersection(
    [
      t.type({
        /** registered | preliminary | final | amended + */
        status: primitives.R4.code
      }),
      t.partial({
        /** The provider or device that identified the issue */
        author: Reference,
        /** Issue Category, e.g. drug-drug, duplicate therapy, etc. */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Description and context */
        detail: primitives.R4.string,
        /** Supporting evidence */
        evidence: t.array(DetectedIssueEvidence),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** When identified */
        identified: t.union([primitives.R4.dateTime, Period]),
        /** Unique id for the detected issue */
        identifier: t.array(Identifier),
        /** Problem resource */
        implicated: t.array(Reference),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Step taken to address */
        mitigation: t.array(DetectedIssueMitigation),
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Associated patient */
        patient: Reference,
        /** Authority for issue */
        reference: primitives.R4.uri,
        /** high | moderate | low */
        severity: primitives.R4.code,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "DetectedIssue"
  )
);
