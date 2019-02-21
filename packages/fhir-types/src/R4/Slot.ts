/**
 * Slot Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A slot of time on a schedule that may be available for booking appointments
 */
export interface Slot {
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
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Date/Time that the slot is to begin */
  start: t.TypeOf<primitives.R4.InstantType>;
  /** Date/Time that the slot is to conclude */
  end: t.TypeOf<primitives.R4.InstantType>;
  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time */
  overbooked?: t.TypeOf<primitives.R4.BooleanType>;
  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface SlotOutputType {
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
  /** A broad categorization of the service that is to be performed during this appointment */
  serviceCategory?: CodeableConceptOutputType[];
  /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource */
  serviceType?: CodeableConceptOutputType[];
  /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
  specialty?: CodeableConceptOutputType[];
  /** The style of appointment or patient that may be booked in the slot (not service type) */
  appointmentType?: CodeableConceptOutputType;
  /** The schedule resource that this slot defines an interval of status information */
  schedule: ReferenceOutputType;
  /** busy | free | busy-unavailable | busy-tentative | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Date/Time that the slot is to begin */
  start: t.OutputOf<primitives.R4.InstantType>;
  /** Date/Time that the slot is to conclude */
  end: t.OutputOf<primitives.R4.InstantType>;
  /** This slot has already been overbooked, appointments are unlikely to be accepted for this time */
  overbooked?: t.OutputOf<primitives.R4.BooleanType>;
  /** Comments on the slot to describe any extended information. Such as custom constraints on the slot */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const Slot: t.RecursiveType<
  t.Type<Slot, SlotOutputType>,
  Slot,
  SlotOutputType
> = t.recursion<Slot, SlotOutputType>("Slot", () =>
  t.intersection(
    [
      t.type({
        /** Date/Time that the slot is to conclude */
        end: primitives.R4.instant,
        /** The schedule resource that this slot defines an interval of status information */
        schedule: Reference,
        /** Date/Time that the slot is to begin */
        start: primitives.R4.instant,
        /** busy | free | busy-unavailable | busy-tentative | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** The style of appointment or patient that may be booked in the slot (not service type) */
        appointmentType: CodeableConcept,
        /** Comments on the slot to describe any extended information. Such as custom constraints on the slot */
        comment: primitives.R4.string,
        /** Contained, inline Resources */
        contained: t.array(Resource),
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
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** This slot has already been overbooked, appointments are unlikely to be accepted for this time */
        overbooked: primitives.R4.boolean,
        /** A broad categorization of the service that is to be performed during this appointment */
        serviceCategory: t.array(CodeableConcept),
        /** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource */
        serviceType: t.array(CodeableConcept),
        /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
        specialty: t.array(CodeableConcept),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Slot"
  )
);
