/**
 * AppointmentResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection
 */
export interface AppointmentResponse {
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
  /** Appointment this response relates to */
  appointment: Reference;
  /** Time from appointment, or requested new start time */
  start?: primitives.R4.instant;
  /** Extension of start element */
  _start?: Element;
  /** Time from appointment, or requested new end time */
  end?: primitives.R4.instant;
  /** Extension of end element */
  _end?: Element;
  /** Role of participant in the appointment */
  participantType?: CodeableConcept[];
  /** Person, Location, HealthcareService, or Device */
  actor?: Reference;
  /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error */
  participantStatus: primitives.R4.code;
  /** Extension of participantStatus element */
  _participantStatus?: Element;
  /** Additional comments */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection
 */
export const AppointmentResponse: t.Type<AppointmentResponse> = t.recursion<
  AppointmentResponse
>("AppointmentResponse", () =>
  t.intersection([
    t.type({
      /** Appointment this response relates to */
      appointment: Reference,
      /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error */
      participantStatus: primitives.R4.code
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
      /** Time from appointment, or requested new start time */
      start: primitives.R4.instant,
      /** Extension of start element */
      _start: Element,
      /** Time from appointment, or requested new end time */
      end: primitives.R4.instant,
      /** Extension of end element */
      _end: Element,
      /** Role of participant in the appointment */
      participantType: t.array(CodeableConcept),
      /** Person, Location, HealthcareService, or Device */
      actor: Reference,
      /** Extension of participantStatus element */
      _participantStatus: Element,
      /** Additional comments */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element
    })
  ])
);
