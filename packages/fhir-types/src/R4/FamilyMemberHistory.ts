/**
 * FamilyMemberHistory Module
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
 * Condition that the related person had
 */
export interface FamilyMemberHistoryCondition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Condition suffered by relation */
  code: CodeableConcept;
  /** deceased | permanent disability | etc. */
  outcome?: CodeableConcept;
  /** Whether the condition contributed to the cause of death */
  contributedToDeath?: t.TypeOf<primitives.R4.BooleanType>;
  /** When condition first manifested */
  onset?: Age | Range | Period | t.TypeOf<primitives.R4.StringType>;
  /** Extra information about condition */
  note?: Annotation[];
}

export interface FamilyMemberHistoryConditionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Condition suffered by relation */
  code: CodeableConceptOutputType;
  /** deceased | permanent disability | etc. */
  outcome?: CodeableConceptOutputType;
  /** Whether the condition contributed to the cause of death */
  contributedToDeath?: t.OutputOf<primitives.R4.BooleanType>;
  /** When condition first manifested */
  onset?:
    | AgeOutputType
    | RangeOutputType
    | PeriodOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** Extra information about condition */
  note?: AnnotationOutputType[];
}

export const FamilyMemberHistoryCondition: t.RecursiveType<
  t.Type<FamilyMemberHistoryCondition, FamilyMemberHistoryConditionOutputType>,
  FamilyMemberHistoryCondition,
  FamilyMemberHistoryConditionOutputType
> = t.recursion<
  FamilyMemberHistoryCondition,
  FamilyMemberHistoryConditionOutputType
>("FamilyMemberHistoryCondition", () =>
  t.intersection(
    [
      t.type({
        /** Condition suffered by relation */
        code: CodeableConcept
      }),
      t.partial({
        /** Whether the condition contributed to the cause of death */
        contributedToDeath: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extra information about condition */
        note: t.array(Annotation),
        /** When condition first manifested */
        onset: t.union([Age, Range, Period, primitives.R4.string]),
        /** deceased | permanent disability | etc. */
        outcome: CodeableConcept
      })
    ],
    "FamilyMemberHistoryCondition"
  )
);

/**
 * Information about patient's relatives, relevant for patient
 */
export interface FamilyMemberHistory {
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
  /** External Id(s) for this record */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** partial | completed | entered-in-error | health-unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** subject-unknown | withheld | unable-to-obtain | deferred */
  dataAbsentReason?: CodeableConcept;
  /** Patient history is about */
  patient: Reference;
  /** When history was recorded or last updated */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The family member described */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Relationship to the subject */
  relationship: CodeableConcept;
  /** male | female | other | unknown */
  sex?: CodeableConcept;
  /** (approximate) date of birth */
  born?:
    | Period
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.StringType>;
  /** (approximate) age */
  age?: Age | Range | t.TypeOf<primitives.R4.StringType>;
  /** Age is estimated? */
  estimatedAge?: t.TypeOf<primitives.R4.BooleanType>;
  /** Dead? How old/when? */
  deceased?:
    | t.TypeOf<primitives.R4.BooleanType>
    | Age
    | Range
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.StringType>;
  /** Why was family member history performed? */
  reasonCode?: CodeableConcept[];
  /** Why was family member history performed? */
  reasonReference?: Reference[];
  /** General note about related person */
  note?: Annotation[];
  /** Condition that the related person had */
  condition?: FamilyMemberHistoryCondition[];
}

export interface FamilyMemberHistoryOutputType {
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
  /** External Id(s) for this record */
  identifier?: IdentifierOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** partial | completed | entered-in-error | health-unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** subject-unknown | withheld | unable-to-obtain | deferred */
  dataAbsentReason?: CodeableConceptOutputType;
  /** Patient history is about */
  patient: ReferenceOutputType;
  /** When history was recorded or last updated */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The family member described */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Relationship to the subject */
  relationship: CodeableConceptOutputType;
  /** male | female | other | unknown */
  sex?: CodeableConceptOutputType;
  /** (approximate) date of birth */
  born?:
    | PeriodOutputType
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.StringType>;
  /** (approximate) age */
  age?: AgeOutputType | RangeOutputType | t.OutputOf<primitives.R4.StringType>;
  /** Age is estimated? */
  estimatedAge?: t.OutputOf<primitives.R4.BooleanType>;
  /** Dead? How old/when? */
  deceased?:
    | t.OutputOf<primitives.R4.BooleanType>
    | AgeOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.StringType>;
  /** Why was family member history performed? */
  reasonCode?: CodeableConceptOutputType[];
  /** Why was family member history performed? */
  reasonReference?: ReferenceOutputType[];
  /** General note about related person */
  note?: AnnotationOutputType[];
  /** Condition that the related person had */
  condition?: FamilyMemberHistoryConditionOutputType[];
}

export const FamilyMemberHistory: t.RecursiveType<
  t.Type<FamilyMemberHistory, FamilyMemberHistoryOutputType>,
  FamilyMemberHistory,
  FamilyMemberHistoryOutputType
> = t.recursion<FamilyMemberHistory, FamilyMemberHistoryOutputType>(
  "FamilyMemberHistory",
  () =>
    t.intersection(
      [
        t.type({
          /** Patient history is about */
          patient: Reference,
          /** Relationship to the subject */
          relationship: CodeableConcept,
          /** partial | completed | entered-in-error | health-unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** (approximate) age */
          age: t.union([Age, Range, primitives.R4.string]),
          /** (approximate) date of birth */
          born: t.union([Period, primitives.R4.date, primitives.R4.string]),
          /** Condition that the related person had */
          condition: t.array(FamilyMemberHistoryCondition),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** subject-unknown | withheld | unable-to-obtain | deferred */
          dataAbsentReason: CodeableConcept,
          /** When history was recorded or last updated */
          date: primitives.R4.dateTime,
          /** Dead? How old/when? */
          deceased: t.union([
            primitives.R4.boolean,
            Age,
            Range,
            primitives.R4.date,
            primitives.R4.string
          ]),
          /** Age is estimated? */
          estimatedAge: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External Id(s) for this record */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Instantiates FHIR protocol or definition */
          instantiatesCanonical: t.array(primitives.R4.canonical),
          /** Instantiates external protocol or definition */
          instantiatesUri: t.array(primitives.R4.uri),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** The family member described */
          name: primitives.R4.string,
          /** General note about related person */
          note: t.array(Annotation),
          /** Why was family member history performed? */
          reasonCode: t.array(CodeableConcept),
          /** Why was family member history performed? */
          reasonReference: t.array(Reference),
          /** male | female | other | unknown */
          sex: CodeableConcept,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "FamilyMemberHistory"
    )
);
