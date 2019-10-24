/**
 * Appointment Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s)
 */
export interface Appointment {
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
  /** External Ids for this item */
  identifier?: Identifier[];
  /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
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
  priority?: primitives.R4.unsignedInt;
  /** Extension of priority element */
  _priority?: Element;
  /** Shown on a subject line in a meeting request, or appointment list */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Additional information to support the appointment */
  supportingInformation?: Reference[];
  /** When appointment is to take place */
  start?: primitives.R4.instant;
  /** Extension of start element */
  _start?: Element;
  /** When appointment is to conclude */
  end?: primitives.R4.instant;
  /** Extension of end element */
  _end?: Element;
  /** Can be less than start/end (e.g. estimate) */
  minutesDuration?: primitives.R4.positiveInt;
  /** Extension of minutesDuration element */
  _minutesDuration?: Element;
  /** The slots that this appointment is filling */
  slot?: Reference[];
  /** The date that this appointment was initially created */
  created?: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Additional comments */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** Detailed information and instructions for the patient */
  patientInstruction?: string;
  /** Extension of patientInstruction element */
  _patientInstruction?: Element;
  /** The service request this appointment is allocated to assess */
  basedOn?: Reference[];
  /** Potential date/time interval(s) requested to allocate the appointment within */
  requestedPeriod?: Period[];
}
/**
 * A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s)
 */
export const Appointment: t.Type<Appointment> = t.recursion<Appointment>(
  "Appointment",
  () =>
    t.intersection([
      t.type({
        /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
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
        /** External Ids for this item */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** The coded reason for the appointment being cancelled */
        cancelationReason: CodeableConcept,
        /** A broad categorization of the service that is to be performed during this appointment */
        serviceCategory: t.array(CodeableConcept),
        /** The specific service that is to be performed during this appointment */
        serviceType: t.array(CodeableConcept),
        /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
        specialty: t.array(CodeableConcept),
        /** The style of appointment or patient that has been booked in the slot (not service type) */
        appointmentType: CodeableConcept,
        /** Coded reason this appointment is scheduled */
        reasonCode: t.array(CodeableConcept),
        /** Reason the appointment is to take place (resource) */
        reasonReference: t.array(Reference),
        /** Used to make informed decisions if needing to re-prioritize */
        priority: primitives.R4.unsignedInt,
        /** Extension of priority element */
        _priority: Element,
        /** Shown on a subject line in a meeting request, or appointment list */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Additional information to support the appointment */
        supportingInformation: t.array(Reference),
        /** When appointment is to take place */
        start: primitives.R4.instant,
        /** Extension of start element */
        _start: Element,
        /** When appointment is to conclude */
        end: primitives.R4.instant,
        /** Extension of end element */
        _end: Element,
        /** Can be less than start/end (e.g. estimate) */
        minutesDuration: primitives.R4.positiveInt,
        /** Extension of minutesDuration element */
        _minutesDuration: Element,
        /** The slots that this appointment is filling */
        slot: t.array(Reference),
        /** The date that this appointment was initially created */
        created: primitives.R4.dateTime,
        /** Extension of created element */
        _created: Element,
        /** Additional comments */
        comment: primitives.R4.string,
        /** Extension of comment element */
        _comment: Element,
        /** Detailed information and instructions for the patient */
        patientInstruction: primitives.R4.string,
        /** Extension of patientInstruction element */
        _patientInstruction: Element,
        /** The service request this appointment is allocated to assess */
        basedOn: t.array(Reference),
        /** Potential date/time interval(s) requested to allocate the appointment within */
        requestedPeriod: t.array(Period)
      })
    ])
);

/**
 * Participants involved in appointment
 */
export interface AppointmentParticipant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Role of participant in the appointment */
  type?: CodeableConcept[];
  /** Person, Location/HealthcareService or Device */
  actor?: Reference;
  /** required | optional | information-only */
  required?: primitives.R4.code;
  /** Extension of required element */
  _required?: Element;
  /** accepted | declined | tentative | needs-action */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Participation period of the actor */
  period?: Period;
}
/**
 * Participants involved in appointment
 */
export const AppointmentParticipant: t.Type<
  AppointmentParticipant
> = t.recursion<AppointmentParticipant>("AppointmentParticipant", () =>
  t.intersection([
    t.type({
      /** accepted | declined | tentative | needs-action */
      status: primitives.R4.code
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
      /** Role of participant in the appointment */
      type: t.array(CodeableConcept),
      /** Person, Location/HealthcareService or Device */
      actor: Reference,
      /** required | optional | information-only */
      required: primitives.R4.code,
      /** Extension of required element */
      _required: Element,
      /** Extension of status element */
      _status: Element,
      /** Participation period of the actor */
      period: Period
    })
  ])
);
