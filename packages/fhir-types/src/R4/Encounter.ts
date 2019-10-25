/**
 * Encounter Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * An interaction during which services are provided to the patient
 */
export interface Encounter {
  /** The type of resource */
  resourceType?: "Encounter";
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
  /** Identifier(s) by which this encounter is known */
  identifier?: Identifier[];
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Classification of patient encounter */
  class: Coding;
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
  /** The set of accounts that may be used for billing for this Encounter */
  account?: Reference[];
  /** The organization (facility) responsible for this encounter */
  serviceProvider?: Reference;
  /** Another Encounter this encounter is part of */
  partOf?: Reference;
}
/**
 * An interaction during which services are provided to the patient
 */
export const Encounter: t.Type<Encounter> = t.recursion<Encounter>(
  "Encounter",
  () =>
    t.intersection([
      t.type({
        /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
        status: primitives.R4.code,
        /** Classification of patient encounter */
        class: Coding
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Encounter"),
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
        /** Identifier(s) by which this encounter is known */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Specific type of encounter */
        type: t.array(CodeableConcept),
        /** Specific type of service */
        serviceType: CodeableConcept,
        /** Indicates the urgency of the encounter */
        priority: CodeableConcept,
        /** The patient or group present at the encounter */
        subject: Reference,
        /** Episode(s) of care that this encounter should be recorded against */
        episodeOfCare: t.array(Reference),
        /** The ServiceRequest that initiated this encounter */
        basedOn: t.array(Reference),
        /** The appointment that scheduled this encounter */
        appointment: t.array(Reference),
        /** The start and end time of the encounter */
        period: Period,
        /** Quantity of time the encounter lasted (less time absent) */
        length: Duration,
        /** Coded reason the encounter takes place */
        reasonCode: t.array(CodeableConcept),
        /** Reason the encounter takes place (reference) */
        reasonReference: t.array(Reference),
        /** The set of accounts that may be used for billing for this Encounter */
        account: t.array(Reference),
        /** The organization (facility) responsible for this encounter */
        serviceProvider: Reference,
        /** Another Encounter this encounter is part of */
        partOf: Reference
      })
    ])
);

/**
 * List of past encounter statuses
 */
export interface EncounterStatusHistory {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** The time that the episode was in the specified status */
  period: Period;
}
/**
 * List of past encounter statuses
 */
export const EncounterStatusHistory: t.Type<
  EncounterStatusHistory
> = t.recursion<EncounterStatusHistory>("EncounterStatusHistory", () =>
  t.intersection([
    t.type({
      /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
      status: primitives.R4.code,
      /** The time that the episode was in the specified status */
      period: Period
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
      /** Extension of status element */
      _status: Element
    })
  ])
);

/**
 * List of past encounter classes
 */
export interface EncounterClassHistory {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** inpatient | outpatient | ambulatory | emergency + */
  class: Coding;
  /** The time that the episode was in the specified class */
  period: Period;
}
/**
 * List of past encounter classes
 */
export const EncounterClassHistory: t.Type<EncounterClassHistory> = t.recursion<
  EncounterClassHistory
>("EncounterClassHistory", () =>
  t.intersection([
    t.type({
      /** inpatient | outpatient | ambulatory | emergency + */
      class: Coding,
      /** The time that the episode was in the specified class */
      period: Period
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * List of participants involved in the encounter
 */
export interface EncounterParticipant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * List of participants involved in the encounter
 */
export const EncounterParticipant: t.Type<EncounterParticipant> = t.recursion<
  EncounterParticipant
>("EncounterParticipant", () =>
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
      /** Role of participant in encounter */
      type: t.array(CodeableConcept),
      /** Period of time during the encounter that the participant participated */
      period: Period,
      /** Persons involved in the encounter other than the patient */
      individual: Reference
    })
  ])
);

/**
 * The list of diagnosis relevant to this encounter
 */
export interface EncounterDiagnosis {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The diagnosis or procedure relevant to the encounter */
  condition: Reference;
  /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
  use?: CodeableConcept;
  /** Ranking of the diagnosis (for each role type) */
  rank?: primitives.R4.positiveInt;
  /** Extension of rank element */
  _rank?: Element;
}
/**
 * The list of diagnosis relevant to this encounter
 */
export const EncounterDiagnosis: t.Type<EncounterDiagnosis> = t.recursion<
  EncounterDiagnosis
>("EncounterDiagnosis", () =>
  t.intersection([
    t.type({
      /** The diagnosis or procedure relevant to the encounter */
      condition: Reference
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
      /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
      use: CodeableConcept,
      /** Ranking of the diagnosis (for each role type) */
      rank: primitives.R4.positiveInt,
      /** Extension of rank element */
      _rank: Element
    })
  ])
);

/**
 * Details about the admission to a healthcare service
 */
export interface EncounterHospitalization {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Details about the admission to a healthcare service
 */
export const EncounterHospitalization: t.Type<
  EncounterHospitalization
> = t.recursion<EncounterHospitalization>("EncounterHospitalization", () =>
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
      /** Pre-admission identifier */
      preAdmissionIdentifier: Identifier,
      /** The location/organization from which the patient came before admission */
      origin: Reference,
      /** From where patient was admitted (physician referral, transfer) */
      admitSource: CodeableConcept,
      /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission */
      reAdmission: CodeableConcept,
      /** Diet preferences reported by the patient */
      dietPreference: t.array(CodeableConcept),
      /** Special courtesies (VIP, board member) */
      specialCourtesy: t.array(CodeableConcept),
      /** Wheelchair, translator, stretcher, etc. */
      specialArrangement: t.array(CodeableConcept),
      /** Location/organization to which the patient is discharged */
      destination: Reference,
      /** Category or kind of location after discharge */
      dischargeDisposition: CodeableConcept
    })
  ])
);

/**
 * List of locations where the patient has been
 */
export interface EncounterLocation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location the encounter takes place */
  location: Reference;
  /** planned | active | reserved | completed */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
  physicalType?: CodeableConcept;
  /** Time period during which the patient was present at the location */
  period?: Period;
}
/**
 * List of locations where the patient has been
 */
export const EncounterLocation: t.Type<EncounterLocation> = t.recursion<
  EncounterLocation
>("EncounterLocation", () =>
  t.intersection([
    t.type({
      /** Location the encounter takes place */
      location: Reference
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
      /** planned | active | reserved | completed */
      status: primitives.R4.code,
      /** Extension of status element */
      _status: Element,
      /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
      physicalType: CodeableConcept,
      /** Time period during which the patient was present at the location */
      period: Period
    })
  ])
);
