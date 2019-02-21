/**
 * Appointment Module
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
 * Participants involved in appointment
 */
export interface AppointmentParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Role of participant in the appointment */
  type?: CodeableConcept[];
  /** Person, Location/HealthcareService or Device */
  actor?: Reference;
  /** required | optional | information-only */
  required?: t.TypeOf<primitives.R4.CodeType>;
  /** accepted | declined | tentative | needs-action */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Participation period of the actor */
  period?: Period;
}

export interface AppointmentParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Role of participant in the appointment */
  type?: CodeableConceptOutputType[];
  /** Person, Location/HealthcareService or Device */
  actor?: ReferenceOutputType;
  /** required | optional | information-only */
  required?: t.OutputOf<primitives.R4.CodeType>;
  /** accepted | declined | tentative | needs-action */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Participation period of the actor */
  period?: PeriodOutputType;
}

export const AppointmentParticipant: t.RecursiveType<
  t.Type<AppointmentParticipant, AppointmentParticipantOutputType>,
  AppointmentParticipant,
  AppointmentParticipantOutputType
> = t.recursion<AppointmentParticipant, AppointmentParticipantOutputType>(
  "AppointmentParticipant",
  () =>
    t.intersection(
      [
        t.type({
          /** accepted | declined | tentative | needs-action */
          status: primitives.R4.code
        }),
        t.partial({
          /** Person, Location/HealthcareService or Device */
          actor: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Participation period of the actor */
          period: Period,
          /** required | optional | information-only */
          required: primitives.R4.code,
          /** Role of participant in the appointment */
          type: t.array(CodeableConcept)
        })
      ],
      "AppointmentParticipant"
    )
);

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s)
 */
export interface Appointment {
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
  /** External Ids for this item */
  identifier?: Identifier[];
  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** The coded reason for the appointment being cancelled */
  cancelationReason?: CodeableConcept;
  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: CodeableConcept[];
  /** The specific service that is to be performed during this appointment */
  serviceType?: CodeableConcept[];
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: CodeableConcept[];
  /** The style of appointment or patient that has been booked in the slot (not service type) */
  appointmentType?: CodeableConcept;
  /** Coded reason this appointment is scheduled */
  reasonCode?: CodeableConcept[];
  /** Reason the appointment is to take place (resource) */
  reasonReference?: Reference[];
  /** Used to make informed decisions if needing to re-prioritize */
  priority?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Shown on a subject line in a meeting request, or appointment list */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Additional information to support the appointment */
  supportingInformation?: Reference[];
  /** When appointment is to take place */
  start?: t.TypeOf<primitives.R4.InstantType>;
  /** When appointment is to conclude */
  end?: t.TypeOf<primitives.R4.InstantType>;
  /** Can be less than start/end (e.g. estimate) */
  minutesDuration?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** The slots that this appointment is filling */
  slot?: Reference[];
  /** The date that this appointment was initially created */
  created?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Additional comments */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Detailed information and instructions for the patient */
  patientInstruction?: t.TypeOf<primitives.R4.StringType>;
  /** The service request this appointment is allocated to assess */
  basedOn?: Reference[];
  /** Participants involved in appointment */
  participant: AppointmentParticipant[];
  /** Potential date/time interval(s) requested to allocate the appointment within */
  requestedPeriod?: Period[];
}

export interface AppointmentOutputType {
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
  /** External Ids for this item */
  identifier?: IdentifierOutputType[];
  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** The coded reason for the appointment being cancelled */
  cancelationReason?: CodeableConceptOutputType;
  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: CodeableConceptOutputType[];
  /** The specific service that is to be performed during this appointment */
  serviceType?: CodeableConceptOutputType[];
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: CodeableConceptOutputType[];
  /** The style of appointment or patient that has been booked in the slot (not service type) */
  appointmentType?: CodeableConceptOutputType;
  /** Coded reason this appointment is scheduled */
  reasonCode?: CodeableConceptOutputType[];
  /** Reason the appointment is to take place (resource) */
  reasonReference?: ReferenceOutputType[];
  /** Used to make informed decisions if needing to re-prioritize */
  priority?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Shown on a subject line in a meeting request, or appointment list */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Additional information to support the appointment */
  supportingInformation?: ReferenceOutputType[];
  /** When appointment is to take place */
  start?: t.OutputOf<primitives.R4.InstantType>;
  /** When appointment is to conclude */
  end?: t.OutputOf<primitives.R4.InstantType>;
  /** Can be less than start/end (e.g. estimate) */
  minutesDuration?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** The slots that this appointment is filling */
  slot?: ReferenceOutputType[];
  /** The date that this appointment was initially created */
  created?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Additional comments */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Detailed information and instructions for the patient */
  patientInstruction?: t.OutputOf<primitives.R4.StringType>;
  /** The service request this appointment is allocated to assess */
  basedOn?: ReferenceOutputType[];
  /** Participants involved in appointment */
  participant: AppointmentParticipantOutputType[];
  /** Potential date/time interval(s) requested to allocate the appointment within */
  requestedPeriod?: PeriodOutputType[];
}

export const Appointment: t.RecursiveType<
  t.Type<Appointment, AppointmentOutputType>,
  Appointment,
  AppointmentOutputType
> = t.recursion<Appointment, AppointmentOutputType>("Appointment", () =>
  t.intersection(
    [
      t.type({
        /** Participants involved in appointment */
        participant: t.array(AppointmentParticipant),
        /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
        status: primitives.R4.code
      }),
      t.partial({
        /** The style of appointment or patient that has been booked in the slot (not service type) */
        appointmentType: CodeableConcept,
        /** The service request this appointment is allocated to assess */
        basedOn: t.array(Reference),
        /** The coded reason for the appointment being cancelled */
        cancelationReason: CodeableConcept,
        /** Additional comments */
        comment: primitives.R4.string,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The date that this appointment was initially created */
        created: primitives.R4.dateTime,
        /** Shown on a subject line in a meeting request, or appointment list */
        description: primitives.R4.string,
        /** When appointment is to conclude */
        end: primitives.R4.instant,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Ids for this item */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Can be less than start/end (e.g. estimate) */
        minutesDuration: primitives.R4.positiveInt,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Detailed information and instructions for the patient */
        patientInstruction: primitives.R4.string,
        /** Used to make informed decisions if needing to re-prioritize */
        priority: primitives.R4.unsignedInt,
        /** Coded reason this appointment is scheduled */
        reasonCode: t.array(CodeableConcept),
        /** Reason the appointment is to take place (resource) */
        reasonReference: t.array(Reference),
        /** Potential date/time interval(s) requested to allocate the appointment within */
        requestedPeriod: t.array(Period),
        /** A broad categorization of the service that is to be performed during this appointment */
        serviceCategory: t.array(CodeableConcept),
        /** The specific service that is to be performed during this appointment */
        serviceType: t.array(CodeableConcept),
        /** The slots that this appointment is filling */
        slot: t.array(Reference),
        /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
        specialty: t.array(CodeableConcept),
        /** When appointment is to take place */
        start: primitives.R4.instant,
        /** Additional information to support the appointment */
        supportingInformation: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Appointment"
  )
);
