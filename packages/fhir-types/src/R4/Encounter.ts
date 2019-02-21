/**
 * Encounter Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * List of past encounter statuses
 */
export interface EncounterStatusHistory {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** The time that the episode was in the specified status */
  period: Period;
}

export interface EncounterStatusHistoryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** The time that the episode was in the specified status */
  period: PeriodOutputType;
}

export const EncounterStatusHistory: t.RecursiveType<
  t.Type<EncounterStatusHistory, EncounterStatusHistoryOutputType>,
  EncounterStatusHistory,
  EncounterStatusHistoryOutputType
> = t.recursion<EncounterStatusHistory, EncounterStatusHistoryOutputType>(
  "EncounterStatusHistory",
  () =>
    t.intersection(
      [
        t.type({
          /** The time that the episode was in the specified status */
          period: Period,
          /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
          status: primitives.R4.code
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
      "EncounterStatusHistory"
    )
);

/**
 * List of participants involved in the encounter
 */
export interface EncounterParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Role of participant in encounter */
  type?: CodeableConcept[];
  /** Period of time during the encounter that the participant participated */
  period?: Period;
  /** Persons involved in the encounter other than the patient */
  individual?: Reference;
}

export interface EncounterParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Role of participant in encounter */
  type?: CodeableConceptOutputType[];
  /** Period of time during the encounter that the participant participated */
  period?: PeriodOutputType;
  /** Persons involved in the encounter other than the patient */
  individual?: ReferenceOutputType;
}

export const EncounterParticipant: t.RecursiveType<
  t.Type<EncounterParticipant, EncounterParticipantOutputType>,
  EncounterParticipant,
  EncounterParticipantOutputType
> = t.recursion<EncounterParticipant, EncounterParticipantOutputType>(
  "EncounterParticipant",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Persons involved in the encounter other than the patient */
          individual: Reference,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Period of time during the encounter that the participant participated */
          period: Period,
          /** Role of participant in encounter */
          type: t.array(CodeableConcept)
        })
      ],
      "EncounterParticipant"
    )
);

/**
 * List of locations where the patient has been
 */
export interface EncounterLocation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location the encounter takes place */
  location: Reference;
  /** planned | active | reserved | completed */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
  physicalType?: CodeableConcept;
  /** Time period during which the patient was present at the location */
  period?: Period;
}

export interface EncounterLocationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Location the encounter takes place */
  location: ReferenceOutputType;
  /** planned | active | reserved | completed */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
  physicalType?: CodeableConceptOutputType;
  /** Time period during which the patient was present at the location */
  period?: PeriodOutputType;
}

export const EncounterLocation: t.RecursiveType<
  t.Type<EncounterLocation, EncounterLocationOutputType>,
  EncounterLocation,
  EncounterLocationOutputType
> = t.recursion<EncounterLocation, EncounterLocationOutputType>(
  "EncounterLocation",
  () =>
    t.intersection(
      [
        t.type({
          /** Location the encounter takes place */
          location: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Time period during which the patient was present at the location */
          period: Period,
          /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
          physicalType: CodeableConcept,
          /** planned | active | reserved | completed */
          status: primitives.R4.code
        })
      ],
      "EncounterLocation"
    )
);

/**
 * Details about the admission to a healthcare service
 */
export interface EncounterHospitalization {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Pre-admission identifier */
  preAdmissionIdentifier?: Identifier;
  /** The location/organization from which the patient came before admission */
  origin?: Reference;
  /** From where patient was admitted (physician referral, transfer) */
  admitSource?: CodeableConcept;
  /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission */
  reAdmission?: CodeableConcept;
  /** Diet preferences reported by the patient */
  dietPreference?: CodeableConcept[];
  /** Special courtesies (VIP, board member) */
  specialCourtesy?: CodeableConcept[];
  /** Wheelchair, translator, stretcher, etc. */
  specialArrangement?: CodeableConcept[];
  /** Location/organization to which the patient is discharged */
  destination?: Reference;
  /** Category or kind of location after discharge */
  dischargeDisposition?: CodeableConcept;
}

export interface EncounterHospitalizationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Pre-admission identifier */
  preAdmissionIdentifier?: IdentifierOutputType;
  /** The location/organization from which the patient came before admission */
  origin?: ReferenceOutputType;
  /** From where patient was admitted (physician referral, transfer) */
  admitSource?: CodeableConceptOutputType;
  /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission */
  reAdmission?: CodeableConceptOutputType;
  /** Diet preferences reported by the patient */
  dietPreference?: CodeableConceptOutputType[];
  /** Special courtesies (VIP, board member) */
  specialCourtesy?: CodeableConceptOutputType[];
  /** Wheelchair, translator, stretcher, etc. */
  specialArrangement?: CodeableConceptOutputType[];
  /** Location/organization to which the patient is discharged */
  destination?: ReferenceOutputType;
  /** Category or kind of location after discharge */
  dischargeDisposition?: CodeableConceptOutputType;
}

export const EncounterHospitalization: t.RecursiveType<
  t.Type<EncounterHospitalization, EncounterHospitalizationOutputType>,
  EncounterHospitalization,
  EncounterHospitalizationOutputType
> = t.recursion<EncounterHospitalization, EncounterHospitalizationOutputType>(
  "EncounterHospitalization",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** From where patient was admitted (physician referral, transfer) */
          admitSource: CodeableConcept,
          /** Location/organization to which the patient is discharged */
          destination: Reference,
          /** Diet preferences reported by the patient */
          dietPreference: t.array(CodeableConcept),
          /** Category or kind of location after discharge */
          dischargeDisposition: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The location/organization from which the patient came before admission */
          origin: Reference,
          /** Pre-admission identifier */
          preAdmissionIdentifier: Identifier,
          /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission */
          reAdmission: CodeableConcept,
          /** Wheelchair, translator, stretcher, etc. */
          specialArrangement: t.array(CodeableConcept),
          /** Special courtesies (VIP, board member) */
          specialCourtesy: t.array(CodeableConcept)
        })
      ],
      "EncounterHospitalization"
    )
);

/**
 * The list of diagnosis relevant to this encounter
 */
export interface EncounterDiagnosis {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The diagnosis or procedure relevant to the encounter */
  condition: Reference;
  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
  use?: CodeableConcept;
  /** Ranking of the diagnosis (for each role type) */
  rank?: t.TypeOf<primitives.R4.PositiveIntegerType>;
}

export interface EncounterDiagnosisOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The diagnosis or procedure relevant to the encounter */
  condition: ReferenceOutputType;
  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
  use?: CodeableConceptOutputType;
  /** Ranking of the diagnosis (for each role type) */
  rank?: t.OutputOf<primitives.R4.PositiveIntegerType>;
}

export const EncounterDiagnosis: t.RecursiveType<
  t.Type<EncounterDiagnosis, EncounterDiagnosisOutputType>,
  EncounterDiagnosis,
  EncounterDiagnosisOutputType
> = t.recursion<EncounterDiagnosis, EncounterDiagnosisOutputType>(
  "EncounterDiagnosis",
  () =>
    t.intersection(
      [
        t.type({
          /** The diagnosis or procedure relevant to the encounter */
          condition: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Ranking of the diagnosis (for each role type) */
          rank: primitives.R4.positiveInt,
          /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
          use: CodeableConcept
        })
      ],
      "EncounterDiagnosis"
    )
);

/**
 * List of past encounter classes
 */
export interface EncounterClassHistory {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** inpatient | outpatient | ambulatory | emergency + */
  class: Coding;
  /** The time that the episode was in the specified class */
  period: Period;
}

export interface EncounterClassHistoryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** inpatient | outpatient | ambulatory | emergency + */
  class: CodingOutputType;
  /** The time that the episode was in the specified class */
  period: PeriodOutputType;
}

export const EncounterClassHistory: t.RecursiveType<
  t.Type<EncounterClassHistory, EncounterClassHistoryOutputType>,
  EncounterClassHistory,
  EncounterClassHistoryOutputType
> = t.recursion<EncounterClassHistory, EncounterClassHistoryOutputType>(
  "EncounterClassHistory",
  () =>
    t.intersection(
      [
        t.type({
          /** inpatient | outpatient | ambulatory | emergency + */
          class: Coding,
          /** The time that the episode was in the specified class */
          period: Period
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
      "EncounterClassHistory"
    )
);

/**
 * An interaction during which services are provided to the patient
 */
export interface Encounter {
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
  /** Identifier(s) by which this encounter is known */
  identifier?: Identifier[];
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** List of past encounter statuses */
  statusHistory?: EncounterStatusHistory[];
  /** Classification of patient encounter */
  class: Coding;
  /** List of past encounter classes */
  classHistory?: EncounterClassHistory[];
  /** Specific type of encounter */
  type?: CodeableConcept[];
  /** Specific type of service */
  serviceType?: CodeableConcept;
  /** Indicates the urgency of the encounter */
  priority?: CodeableConcept;
  /** The patient or group present at the encounter */
  subject?: Reference;
  /** Episode(s) of care that this encounter should be recorded against */
  episodeOfCare?: Reference[];
  /** The ServiceRequest that initiated this encounter */
  basedOn?: Reference[];
  /** List of participants involved in the encounter */
  participant?: EncounterParticipant[];
  /** The appointment that scheduled this encounter */
  appointment?: Reference[];
  /** The start and end time of the encounter */
  period?: Period;
  /** Quantity of time the encounter lasted (less time absent) */
  length?: Duration;
  /** Coded reason the encounter takes place */
  reasonCode?: CodeableConcept[];
  /** Reason the encounter takes place (reference) */
  reasonReference?: Reference[];
  /** The list of diagnosis relevant to this encounter */
  diagnosis?: EncounterDiagnosis[];
  /** The set of accounts that may be used for billing for this Encounter */
  account?: Reference[];
  /** Details about the admission to a healthcare service */
  hospitalization?: EncounterHospitalization;
  /** List of locations where the patient has been */
  location?: EncounterLocation[];
  /** The organization (facility) responsible for this encounter */
  serviceProvider?: Reference;
  /** Another Encounter this encounter is part of */
  partOf?: Reference;
}

export interface EncounterOutputType {
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
  /** Identifier(s) by which this encounter is known */
  identifier?: IdentifierOutputType[];
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** List of past encounter statuses */
  statusHistory?: EncounterStatusHistoryOutputType[];
  /** Classification of patient encounter */
  class: CodingOutputType;
  /** List of past encounter classes */
  classHistory?: EncounterClassHistoryOutputType[];
  /** Specific type of encounter */
  type?: CodeableConceptOutputType[];
  /** Specific type of service */
  serviceType?: CodeableConceptOutputType;
  /** Indicates the urgency of the encounter */
  priority?: CodeableConceptOutputType;
  /** The patient or group present at the encounter */
  subject?: ReferenceOutputType;
  /** Episode(s) of care that this encounter should be recorded against */
  episodeOfCare?: ReferenceOutputType[];
  /** The ServiceRequest that initiated this encounter */
  basedOn?: ReferenceOutputType[];
  /** List of participants involved in the encounter */
  participant?: EncounterParticipantOutputType[];
  /** The appointment that scheduled this encounter */
  appointment?: ReferenceOutputType[];
  /** The start and end time of the encounter */
  period?: PeriodOutputType;
  /** Quantity of time the encounter lasted (less time absent) */
  length?: DurationOutputType;
  /** Coded reason the encounter takes place */
  reasonCode?: CodeableConceptOutputType[];
  /** Reason the encounter takes place (reference) */
  reasonReference?: ReferenceOutputType[];
  /** The list of diagnosis relevant to this encounter */
  diagnosis?: EncounterDiagnosisOutputType[];
  /** The set of accounts that may be used for billing for this Encounter */
  account?: ReferenceOutputType[];
  /** Details about the admission to a healthcare service */
  hospitalization?: EncounterHospitalizationOutputType;
  /** List of locations where the patient has been */
  location?: EncounterLocationOutputType[];
  /** The organization (facility) responsible for this encounter */
  serviceProvider?: ReferenceOutputType;
  /** Another Encounter this encounter is part of */
  partOf?: ReferenceOutputType;
}

export const Encounter: t.RecursiveType<
  t.Type<Encounter, EncounterOutputType>,
  Encounter,
  EncounterOutputType
> = t.recursion<Encounter, EncounterOutputType>("Encounter", () =>
  t.intersection(
    [
      t.type({
        /** Classification of patient encounter */
        class: Coding,
        /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
        status: primitives.R4.code
      }),
      t.partial({
        /** The set of accounts that may be used for billing for this Encounter */
        account: t.array(Reference),
        /** The appointment that scheduled this encounter */
        appointment: t.array(Reference),
        /** The ServiceRequest that initiated this encounter */
        basedOn: t.array(Reference),
        /** List of past encounter classes */
        classHistory: t.array(EncounterClassHistory),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The list of diagnosis relevant to this encounter */
        diagnosis: t.array(EncounterDiagnosis),
        /** Episode(s) of care that this encounter should be recorded against */
        episodeOfCare: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Details about the admission to a healthcare service */
        hospitalization: EncounterHospitalization,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifier(s) by which this encounter is known */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Quantity of time the encounter lasted (less time absent) */
        length: Duration,
        /** List of locations where the patient has been */
        location: t.array(EncounterLocation),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Another Encounter this encounter is part of */
        partOf: Reference,
        /** List of participants involved in the encounter */
        participant: t.array(EncounterParticipant),
        /** The start and end time of the encounter */
        period: Period,
        /** Indicates the urgency of the encounter */
        priority: CodeableConcept,
        /** Coded reason the encounter takes place */
        reasonCode: t.array(CodeableConcept),
        /** Reason the encounter takes place (reference) */
        reasonReference: t.array(Reference),
        /** The organization (facility) responsible for this encounter */
        serviceProvider: Reference,
        /** Specific type of service */
        serviceType: CodeableConcept,
        /** List of past encounter statuses */
        statusHistory: t.array(EncounterStatusHistory),
        /** The patient or group present at the encounter */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Specific type of encounter */
        type: t.array(CodeableConcept)
      })
    ],
    "Encounter"
  )
);
