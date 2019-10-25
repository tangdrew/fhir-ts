/**
 * Slot Module
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
 * A slot of time on a schedule that may be available for booking appointments
 */
export interface Slot {
  /** The type of resource */
  resourceType?: "Slot";
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
  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: CodeableConcept[];
  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource */
  serviceType?: CodeableConcept[];
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: CodeableConcept[];
  /** The style of appointment or patient that may be booked in the slot (not service type) */
  appointmentType?: CodeableConcept;
  /** The schedule resource that this slot defines an interval of status information */
  schedule: Reference;
  /** busy | free | busy-unavailable | busy-tentative | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Date/Time that the slot is to begin */
  start: primitives.R4.instant;
  /** Extension of start element */
  _start?: Element;
  /** Date/Time that the slot is to conclude */
  end: primitives.R4.instant;
  /** Extension of end element */
  _end?: Element;
  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time */
  overbooked?: boolean;
  /** Extension of overbooked element */
  _overbooked?: Element;
  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * A slot of time on a schedule that may be available for booking appointments
 */
export const Slot: t.Type<Slot> = t.recursion<Slot>("Slot", () =>
  t.intersection([
    t.type({
      /** The schedule resource that this slot defines an interval of status information */
      schedule: Reference,
      /** busy | free | busy-unavailable | busy-tentative | entered-in-error */
      status: primitives.R4.code,
      /** Date/Time that the slot is to begin */
      start: primitives.R4.instant,
      /** Date/Time that the slot is to conclude */
      end: primitives.R4.instant
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Slot"),
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
      /** A broad categorization of the service that is to be performed during this appointment */
      serviceCategory: t.array(CodeableConcept),
      /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource */
      serviceType: t.array(CodeableConcept),
      /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
      specialty: t.array(CodeableConcept),
      /** The style of appointment or patient that may be booked in the slot (not service type) */
      appointmentType: CodeableConcept,
      /** Extension of status element */
      _status: Element,
      /** Extension of start element */
      _start: Element,
      /** Extension of end element */
      _end: Element,
      /** This slot has already been overbooked, appointments are unlikely to be accepted for this time */
      overbooked: primitives.R4.boolean,
      /** Extension of overbooked element */
      _overbooked: Element,
      /** Comments on the slot to describe any extended information. Such as custom constraints on the slot */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element
    })
  ])
);
