/**
 * PractitionerRole Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Roles/organizations the practitioner is associated with
 */
export interface PractitionerRole {
  /** The type of resource */
  resourceType?: "PractitionerRole";
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
  /** Business Identifiers that are specific to a role/location */
  identifier?: Identifier[];
  /** Whether this practitioner role record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** The period during which the practitioner is authorized to perform in these role(s) */
  period?: Period;
  /** Practitioner that is able to provide the defined services for the organization */
  practitioner?: Reference;
  /** Organization where the roles are available */
  organization?: Reference;
  /** Roles which this practitioner may perform */
  code?: CodeableConcept[];
  /** Specific specialty of the practitioner */
  specialty?: CodeableConcept[];
  /** The location(s) at which this practitioner provides care */
  location?: Reference[];
  /** The list of healthcare services that this worker provides for this role's Organization/Location(s) */
  healthcareService?: Reference[];
  /** Contact details that are specific to the role/location/service */
  telecom?: ContactPoint[];
  /** Description of availability exceptions */
  availabilityExceptions?: string;
  /** Extension of availabilityExceptions element */
  _availabilityExceptions?: Element;
  /** Technical endpoints providing access to services operated for the practitioner with this role */
  endpoint?: Reference[];
}
/**
 * Roles/organizations the practitioner is associated with
 */
export const PractitionerRole: t.Type<PractitionerRole> = t.recursion<
  PractitionerRole
>("PractitionerRole", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("PractitionerRole"),
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
      /** Business Identifiers that are specific to a role/location */
      identifier: t.array(Identifier),
      /** Whether this practitioner role record is in active use */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element,
      /** The period during which the practitioner is authorized to perform in these role(s) */
      period: Period,
      /** Practitioner that is able to provide the defined services for the organization */
      practitioner: Reference,
      /** Organization where the roles are available */
      organization: Reference,
      /** Roles which this practitioner may perform */
      code: t.array(CodeableConcept),
      /** Specific specialty of the practitioner */
      specialty: t.array(CodeableConcept),
      /** The location(s) at which this practitioner provides care */
      location: t.array(Reference),
      /** The list of healthcare services that this worker provides for this role's Organization/Location(s) */
      healthcareService: t.array(Reference),
      /** Contact details that are specific to the role/location/service */
      telecom: t.array(ContactPoint),
      /** Description of availability exceptions */
      availabilityExceptions: primitives.R4.string,
      /** Extension of availabilityExceptions element */
      _availabilityExceptions: Element,
      /** Technical endpoints providing access to services operated for the practitioner with this role */
      endpoint: t.array(Reference)
    })
  ])
);

/**
 * Times the Service Site is available
 */
export interface PractitionerRoleAvailableTime {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: primitives.R4.code[];
  /** Extension of daysOfWeek element */
  _daysOfWeek?: Element[];
  /** Always available? e.g. 24 hour service */
  allDay?: boolean;
  /** Extension of allDay element */
  _allDay?: Element;
  /** Opening time of day (ignored if allDay = true) */
  availableStartTime?: primitives.R4.time;
  /** Extension of availableStartTime element */
  _availableStartTime?: Element;
  /** Closing time of day (ignored if allDay = true) */
  availableEndTime?: primitives.R4.time;
  /** Extension of availableEndTime element */
  _availableEndTime?: Element;
}
/**
 * Times the Service Site is available
 */
export const PractitionerRoleAvailableTime: t.Type<
  PractitionerRoleAvailableTime
> = t.recursion<PractitionerRoleAvailableTime>(
  "PractitionerRoleAvailableTime",
  () =>
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
        /** mon | tue | wed | thu | fri | sat | sun */
        daysOfWeek: t.array(primitives.R4.code),
        /** Extension of daysOfWeek element */
        _daysOfWeek: t.array(Element),
        /** Always available? e.g. 24 hour service */
        allDay: primitives.R4.boolean,
        /** Extension of allDay element */
        _allDay: Element,
        /** Opening time of day (ignored if allDay = true) */
        availableStartTime: primitives.R4.time,
        /** Extension of availableStartTime element */
        _availableStartTime: Element,
        /** Closing time of day (ignored if allDay = true) */
        availableEndTime: primitives.R4.time,
        /** Extension of availableEndTime element */
        _availableEndTime: Element
      })
    ])
);

/**
 * Not available during this time due to provided reason
 */
export interface PractitionerRoleNotAvailable {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reason presented to the user explaining why time not available */
  description: string;
  /** Extension of description element */
  _description?: Element;
  /** Service not available from this date */
  during?: Period;
}
/**
 * Not available during this time due to provided reason
 */
export const PractitionerRoleNotAvailable: t.Type<
  PractitionerRoleNotAvailable
> = t.recursion<PractitionerRoleNotAvailable>(
  "PractitionerRoleNotAvailable",
  () =>
    t.intersection([
      t.type({
        /** Reason presented to the user explaining why time not available */
        description: primitives.R4.string
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
        /** Extension of description element */
        _description: Element,
        /** Service not available from this date */
        during: Period
      })
    ])
);
