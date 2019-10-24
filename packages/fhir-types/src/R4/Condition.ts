/**
 * Condition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Detailed information about conditions, problems or diagnoses
 */
export interface Condition {
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
  onsetDateTime?: primitives.R4.dateTime;
  /** Extension of onsetDateTime element */
  _onsetDateTime?: Element;
  /** Estimated or actual date,  date-time, or age */
  onsetAge?: Age;
  /** Estimated or actual date,  date-time, or age */
  onsetPeriod?: Period;
  /** Estimated or actual date,  date-time, or age */
  onsetRange?: Range;
  /** Estimated or actual date,  date-time, or age */
  onsetString?: string;
  /** Extension of onsetString element */
  _onsetString?: Element;
  /** When in resolution/remission */
  abatementDateTime?: primitives.R4.dateTime;
  /** Extension of abatementDateTime element */
  _abatementDateTime?: Element;
  /** When in resolution/remission */
  abatementAge?: Age;
  /** When in resolution/remission */
  abatementPeriod?: Period;
  /** When in resolution/remission */
  abatementRange?: Range;
  /** When in resolution/remission */
  abatementString?: string;
  /** Extension of abatementString element */
  _abatementString?: Element;
  /** Date record was first recorded */
  recordedDate?: primitives.R4.dateTime;
  /** Extension of recordedDate element */
  _recordedDate?: Element;
  /** Who recorded the condition */
  recorder?: Reference;
  /** Person who asserts this condition */
  asserter?: Reference;
  /** Additional information about the Condition */
  note?: Annotation[];
}
/**
 * Detailed information about conditions, problems or diagnoses
 */
export const Condition: t.Type<Condition> = t.recursion<Condition>(
  "Condition",
  () =>
    t.intersection([
      t.type({
        /** Who has the condition? */
        subject: Reference
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
        /** External Ids for this condition */
        identifier: t.array(Identifier),
        /** active | recurrence | relapse | inactive | remission | resolved */
        clinicalStatus: CodeableConcept,
        /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
        verificationStatus: CodeableConcept,
        /** problem-list-item | encounter-diagnosis */
        category: t.array(CodeableConcept),
        /** Subjective severity of condition */
        severity: CodeableConcept,
        /** Identification of the condition, problem or diagnosis */
        code: CodeableConcept,
        /** Anatomical location, if relevant */
        bodySite: t.array(CodeableConcept),
        /** Encounter created as part of */
        encounter: Reference,
        /** Estimated or actual date,  date-time, or age */
        onsetDateTime: primitives.R4.dateTime,
        /** Extension of onsetDateTime element */
        _onsetDateTime: Element,
        /** Estimated or actual date,  date-time, or age */
        onsetAge: Age,
        /** Estimated or actual date,  date-time, or age */
        onsetPeriod: Period,
        /** Estimated or actual date,  date-time, or age */
        onsetRange: Range,
        /** Estimated or actual date,  date-time, or age */
        onsetString: primitives.R4.string,
        /** Extension of onsetString element */
        _onsetString: Element,
        /** When in resolution/remission */
        abatementDateTime: primitives.R4.dateTime,
        /** Extension of abatementDateTime element */
        _abatementDateTime: Element,
        /** When in resolution/remission */
        abatementAge: Age,
        /** When in resolution/remission */
        abatementPeriod: Period,
        /** When in resolution/remission */
        abatementRange: Range,
        /** When in resolution/remission */
        abatementString: primitives.R4.string,
        /** Extension of abatementString element */
        _abatementString: Element,
        /** Date record was first recorded */
        recordedDate: primitives.R4.dateTime,
        /** Extension of recordedDate element */
        _recordedDate: Element,
        /** Who recorded the condition */
        recorder: Reference,
        /** Person who asserts this condition */
        asserter: Reference,
        /** Additional information about the Condition */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Stage/grade, usually assessed formally
 */
export interface ConditionStage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Stage/grade, usually assessed formally
 */
export const ConditionStage: t.Type<ConditionStage> = t.recursion<
  ConditionStage
>("ConditionStage", () =>
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
      /** Simple summary (disease specific) */
      summary: CodeableConcept,
      /** Formal record of assessment */
      assessment: t.array(Reference),
      /** Kind of staging */
      type: CodeableConcept
    })
  ])
);

/**
 * Supporting evidence
 */
export interface ConditionEvidence {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Manifestation/symptom */
  code?: CodeableConcept[];
  /** Supporting information found elsewhere */
  detail?: Reference[];
}
/**
 * Supporting evidence
 */
export const ConditionEvidence: t.Type<ConditionEvidence> = t.recursion<
  ConditionEvidence
>("ConditionEvidence", () =>
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
      /** Manifestation/symptom */
      code: t.array(CodeableConcept),
      /** Supporting information found elsewhere */
      detail: t.array(Reference)
    })
  ])
);
