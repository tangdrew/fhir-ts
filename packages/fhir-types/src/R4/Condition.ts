/**
 * Condition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age, AgeOutputType } from "./Age";
import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Stage/grade, usually assessed formally
 */
export interface ConditionStage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Simple summary (disease specific) */
  summary?: CodeableConcept;
  /** Formal record of assessment */
  assessment?: Reference[];
  /** Kind of staging */
  type?: CodeableConcept;
}

export interface ConditionStageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Simple summary (disease specific) */
  summary?: CodeableConceptOutputType;
  /** Formal record of assessment */
  assessment?: ReferenceOutputType[];
  /** Kind of staging */
  type?: CodeableConceptOutputType;
}

export const ConditionStage: t.RecursiveType<
  t.Type<ConditionStage, ConditionStageOutputType>,
  ConditionStage,
  ConditionStageOutputType
> = t.recursion<ConditionStage, ConditionStageOutputType>(
  "ConditionStage",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Formal record of assessment */
          assessment: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Simple summary (disease specific) */
          summary: CodeableConcept,
          /** Kind of staging */
          type: CodeableConcept
        })
      ],
      "ConditionStage"
    )
);

/**
 * Supporting evidence
 */
export interface ConditionEvidence {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Manifestation/symptom */
  code?: CodeableConcept[];
  /** Supporting information found elsewhere */
  detail?: Reference[];
}

export interface ConditionEvidenceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Manifestation/symptom */
  code?: CodeableConceptOutputType[];
  /** Supporting information found elsewhere */
  detail?: ReferenceOutputType[];
}

export const ConditionEvidence: t.RecursiveType<
  t.Type<ConditionEvidence, ConditionEvidenceOutputType>,
  ConditionEvidence,
  ConditionEvidenceOutputType
> = t.recursion<ConditionEvidence, ConditionEvidenceOutputType>(
  "ConditionEvidence",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Manifestation/symptom */
          code: t.array(CodeableConcept),
          /** Supporting information found elsewhere */
          detail: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ConditionEvidence"
    )
);

/**
 * Detailed information about conditions, problems or diagnoses
 */
export interface Condition {
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
  /** External Ids for this condition */
  identifier?: Identifier[];
  /** active | recurrence | relapse | inactive | remission | resolved */
  clinicalStatus?: CodeableConcept;
  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConcept;
  /** problem-list-item | encounter-diagnosis */
  category?: CodeableConcept[];
  /** Subjective severity of condition */
  severity?: CodeableConcept;
  /** Identification of the condition, problem or diagnosis */
  code?: CodeableConcept;
  /** Anatomical location, if relevant */
  bodySite?: CodeableConcept[];
  /** Who has the condition? */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Estimated or actual date,  date-time, or age */
  onset?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Age
    | Period
    | Range
    | t.TypeOf<primitives.R4.StringType>;
  /** When in resolution/remission */
  abatement?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Age
    | Period
    | Range
    | t.TypeOf<primitives.R4.StringType>;
  /** Date record was first recorded */
  recordedDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who recorded the condition */
  recorder?: Reference;
  /** Person who asserts this condition */
  asserter?: Reference;
  /** Stage/grade, usually assessed formally */
  stage?: ConditionStage[];
  /** Supporting evidence */
  evidence?: ConditionEvidence[];
  /** Additional information about the Condition */
  note?: Annotation[];
}

export interface ConditionOutputType {
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
  /** External Ids for this condition */
  identifier?: IdentifierOutputType[];
  /** active | recurrence | relapse | inactive | remission | resolved */
  clinicalStatus?: CodeableConceptOutputType;
  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConceptOutputType;
  /** problem-list-item | encounter-diagnosis */
  category?: CodeableConceptOutputType[];
  /** Subjective severity of condition */
  severity?: CodeableConceptOutputType;
  /** Identification of the condition, problem or diagnosis */
  code?: CodeableConceptOutputType;
  /** Anatomical location, if relevant */
  bodySite?: CodeableConceptOutputType[];
  /** Who has the condition? */
  subject: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** Estimated or actual date,  date-time, or age */
  onset?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | AgeOutputType
    | PeriodOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** When in resolution/remission */
  abatement?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | AgeOutputType
    | PeriodOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** Date record was first recorded */
  recordedDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who recorded the condition */
  recorder?: ReferenceOutputType;
  /** Person who asserts this condition */
  asserter?: ReferenceOutputType;
  /** Stage/grade, usually assessed formally */
  stage?: ConditionStageOutputType[];
  /** Supporting evidence */
  evidence?: ConditionEvidenceOutputType[];
  /** Additional information about the Condition */
  note?: AnnotationOutputType[];
}

export const Condition: t.RecursiveType<
  t.Type<Condition, ConditionOutputType>,
  Condition,
  ConditionOutputType
> = t.recursion<Condition, ConditionOutputType>("Condition", () =>
  t.intersection(
    [
      t.type({
        /** Who has the condition? */
        subject: Reference
      }),
      t.partial({
        /** When in resolution/remission */
        abatement: t.union([
          primitives.R4.dateTime,
          Age,
          Period,
          Range,
          primitives.R4.string
        ]),
        /** Person who asserts this condition */
        asserter: Reference,
        /** Anatomical location, if relevant */
        bodySite: t.array(CodeableConcept),
        /** problem-list-item | encounter-diagnosis */
        category: t.array(CodeableConcept),
        /** active | recurrence | relapse | inactive | remission | resolved */
        clinicalStatus: CodeableConcept,
        /** Identification of the condition, problem or diagnosis */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Encounter created as part of */
        encounter: Reference,
        /** Supporting evidence */
        evidence: t.array(ConditionEvidence),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Ids for this condition */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Additional information about the Condition */
        note: t.array(Annotation),
        /** Estimated or actual date,  date-time, or age */
        onset: t.union([
          primitives.R4.dateTime,
          Age,
          Period,
          Range,
          primitives.R4.string
        ]),
        /** Date record was first recorded */
        recordedDate: primitives.R4.dateTime,
        /** Who recorded the condition */
        recorder: Reference,
        /** Subjective severity of condition */
        severity: CodeableConcept,
        /** Stage/grade, usually assessed formally */
        stage: t.array(ConditionStage),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
        verificationStatus: CodeableConcept
      })
    ],
    "Condition"
  )
);
