/**
 * AllergyIntolerance Module
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
 * Adverse Reaction Events linked to exposure to substance
 */
export interface AllergyIntoleranceReaction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specific substance or pharmaceutical product considered to be responsible for event */
  substance?: CodeableConcept;
  /** Clinical symptoms/signs associated with the Event */
  manifestation: CodeableConcept[];
  /** Description of the event as a whole */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Date(/time) when manifestations showed */
  onset?: t.TypeOf<primitives.R4.DateTimeType>;
  /** mild | moderate | severe (of event as a whole) */
  severity?: t.TypeOf<primitives.R4.CodeType>;
  /** How the subject was exposed to the substance */
  exposureRoute?: CodeableConcept;
  /** Text about event not captured in other fields */
  note?: Annotation[];
}

export interface AllergyIntoleranceReactionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Specific substance or pharmaceutical product considered to be responsible for event */
  substance?: CodeableConceptOutputType;
  /** Clinical symptoms/signs associated with the Event */
  manifestation: CodeableConceptOutputType[];
  /** Description of the event as a whole */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Date(/time) when manifestations showed */
  onset?: t.OutputOf<primitives.R4.DateTimeType>;
  /** mild | moderate | severe (of event as a whole) */
  severity?: t.OutputOf<primitives.R4.CodeType>;
  /** How the subject was exposed to the substance */
  exposureRoute?: CodeableConceptOutputType;
  /** Text about event not captured in other fields */
  note?: AnnotationOutputType[];
}

export const AllergyIntoleranceReaction: t.RecursiveType<
  t.Type<AllergyIntoleranceReaction, AllergyIntoleranceReactionOutputType>,
  AllergyIntoleranceReaction,
  AllergyIntoleranceReactionOutputType
> = t.recursion<
  AllergyIntoleranceReaction,
  AllergyIntoleranceReactionOutputType
>("AllergyIntoleranceReaction", () =>
  t.intersection(
    [
      t.type({
        /** Clinical symptoms/signs associated with the Event */
        manifestation: t.array(CodeableConcept)
      }),
      t.partial({
        /** Description of the event as a whole */
        description: primitives.R4.string,
        /** How the subject was exposed to the substance */
        exposureRoute: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Text about event not captured in other fields */
        note: t.array(Annotation),
        /** Date(/time) when manifestations showed */
        onset: primitives.R4.dateTime,
        /** mild | moderate | severe (of event as a whole) */
        severity: primitives.R4.code,
        /** Specific substance or pharmaceutical product considered to be responsible for event */
        substance: CodeableConcept
      })
    ],
    "AllergyIntoleranceReaction"
  )
);

/**
 * Allergy or Intolerance (generally: Risk of adverse reaction to a substance)
 */
export interface AllergyIntolerance {
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
  /** External ids for this item */
  identifier?: Identifier[];
  /** active | inactive | resolved */
  clinicalStatus?: CodeableConcept;
  /** unconfirmed | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConcept;
  /** allergy | intolerance - Underlying mechanism (if known) */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** food | medication | environment | biologic */
  category?: t.TypeOf<primitives.R4.CodeType>[];
  /** low | high | unable-to-assess */
  criticality?: t.TypeOf<primitives.R4.CodeType>;
  /** Code that identifies the allergy or intolerance */
  code?: CodeableConcept;
  /** Who the sensitivity is for */
  patient: Reference;
  /** Encounter when the allergy or intolerance was asserted */
  encounter?: Reference;
  /** When allergy or intolerance was identified */
  onset?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Age
    | Period
    | Range
    | t.TypeOf<primitives.R4.StringType>;
  /** Date first version of the resource instance was recorded */
  recordedDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who recorded the sensitivity */
  recorder?: Reference;
  /** Source of the information about the allergy */
  asserter?: Reference;
  /** Date(/time) of last known occurrence of a reaction */
  lastOccurrence?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Additional text not captured in other fields */
  note?: Annotation[];
  /** Adverse Reaction Events linked to exposure to substance */
  reaction?: AllergyIntoleranceReaction[];
}

export interface AllergyIntoleranceOutputType {
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
  /** External ids for this item */
  identifier?: IdentifierOutputType[];
  /** active | inactive | resolved */
  clinicalStatus?: CodeableConceptOutputType;
  /** unconfirmed | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConceptOutputType;
  /** allergy | intolerance - Underlying mechanism (if known) */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** food | medication | environment | biologic */
  category?: t.OutputOf<primitives.R4.CodeType>[];
  /** low | high | unable-to-assess */
  criticality?: t.OutputOf<primitives.R4.CodeType>;
  /** Code that identifies the allergy or intolerance */
  code?: CodeableConceptOutputType;
  /** Who the sensitivity is for */
  patient: ReferenceOutputType;
  /** Encounter when the allergy or intolerance was asserted */
  encounter?: ReferenceOutputType;
  /** When allergy or intolerance was identified */
  onset?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | AgeOutputType
    | PeriodOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** Date first version of the resource instance was recorded */
  recordedDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who recorded the sensitivity */
  recorder?: ReferenceOutputType;
  /** Source of the information about the allergy */
  asserter?: ReferenceOutputType;
  /** Date(/time) of last known occurrence of a reaction */
  lastOccurrence?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Additional text not captured in other fields */
  note?: AnnotationOutputType[];
  /** Adverse Reaction Events linked to exposure to substance */
  reaction?: AllergyIntoleranceReactionOutputType[];
}

export const AllergyIntolerance: t.RecursiveType<
  t.Type<AllergyIntolerance, AllergyIntoleranceOutputType>,
  AllergyIntolerance,
  AllergyIntoleranceOutputType
> = t.recursion<AllergyIntolerance, AllergyIntoleranceOutputType>(
  "AllergyIntolerance",
  () =>
    t.intersection(
      [
        t.type({
          /** Who the sensitivity is for */
          patient: Reference
        }),
        t.partial({
          /** Source of the information about the allergy */
          asserter: Reference,
          /** food | medication | environment | biologic */
          category: t.array(primitives.R4.code),
          /** active | inactive | resolved */
          clinicalStatus: CodeableConcept,
          /** Code that identifies the allergy or intolerance */
          code: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** low | high | unable-to-assess */
          criticality: primitives.R4.code,
          /** Encounter when the allergy or intolerance was asserted */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External ids for this item */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Date(/time) of last known occurrence of a reaction */
          lastOccurrence: primitives.R4.dateTime,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Additional text not captured in other fields */
          note: t.array(Annotation),
          /** When allergy or intolerance was identified */
          onset: t.union([
            primitives.R4.dateTime,
            Age,
            Period,
            Range,
            primitives.R4.string
          ]),
          /** Adverse Reaction Events linked to exposure to substance */
          reaction: t.array(AllergyIntoleranceReaction),
          /** Date first version of the resource instance was recorded */
          recordedDate: primitives.R4.dateTime,
          /** Who recorded the sensitivity */
          recorder: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** allergy | intolerance - Underlying mechanism (if known) */
          type: primitives.R4.code,
          /** unconfirmed | confirmed | refuted | entered-in-error */
          verificationStatus: CodeableConcept
        })
      ],
      "AllergyIntolerance"
    )
);
