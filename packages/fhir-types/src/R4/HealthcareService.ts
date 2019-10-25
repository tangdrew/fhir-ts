/**
 * HealthcareService Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
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
 * The details of a healthcare service available at a location
 */
export interface HealthcareService {
  /** The type of resource */
  resourceType?: "HealthcareService";
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
  /** External identifiers for this item */
  identifier?: Identifier[];
  /** Whether this HealthcareService record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** Organization that provides this service */
  providedBy?: Reference;
  /** Broad category of service being performed or delivered */
  category?: CodeableConcept[];
  /** Type of service that may be delivered or performed */
  type?: CodeableConcept[];
  /** Specialties handled by the HealthcareService */
  specialty?: CodeableConcept[];
  /** Location(s) where service may be provided */
  location?: Reference[];
  /** Description of service as presented to a consumer while searching */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Additional description and/or any specific issues not covered elsewhere */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** Extra details about the service that can't be placed in the other fields */
  extraDetails?: primitives.R4.markdown;
  /** Extension of extraDetails element */
  _extraDetails?: Element;
  /** Facilitates quick identification of the service */
  photo?: Attachment;
  /** Contacts related to the healthcare service */
  telecom?: ContactPoint[];
  /** Location(s) service is intended for/available to */
  coverageArea?: Reference[];
  /** Conditions under which service is available/offered */
  serviceProvisionCode?: CodeableConcept[];
  /** Programs that this service is applicable to */
  program?: CodeableConcept[];
  /** Collection of characteristics (attributes) */
  characteristic?: CodeableConcept[];
  /** The language that this service is offered in */
  communication?: CodeableConcept[];
  /** Ways that the service accepts referrals */
  referralMethod?: CodeableConcept[];
  /** If an appointment is required for access to this service */
  appointmentRequired?: boolean;
  /** Extension of appointmentRequired element */
  _appointmentRequired?: Element;
  /** Description of availability exceptions */
  availabilityExceptions?: string;
  /** Extension of availabilityExceptions element */
  _availabilityExceptions?: Element;
  /** Technical endpoints providing access to electronic services operated for the healthcare service */
  endpoint?: Reference[];
}
/**
 * The details of a healthcare service available at a location
 */
export const HealthcareService: t.Type<HealthcareService> = t.recursion<
  HealthcareService
>("HealthcareService", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("HealthcareService"),
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
      /** External identifiers for this item */
      identifier: t.array(Identifier),
      /** Whether this HealthcareService record is in active use */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element,
      /** Organization that provides this service */
      providedBy: Reference,
      /** Broad category of service being performed or delivered */
      category: t.array(CodeableConcept),
      /** Type of service that may be delivered or performed */
      type: t.array(CodeableConcept),
      /** Specialties handled by the HealthcareService */
      specialty: t.array(CodeableConcept),
      /** Location(s) where service may be provided */
      location: t.array(Reference),
      /** Description of service as presented to a consumer while searching */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Additional description and/or any specific issues not covered elsewhere */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element,
      /** Extra details about the service that can't be placed in the other fields */
      extraDetails: primitives.R4.markdown,
      /** Extension of extraDetails element */
      _extraDetails: Element,
      /** Facilitates quick identification of the service */
      photo: Attachment,
      /** Contacts related to the healthcare service */
      telecom: t.array(ContactPoint),
      /** Location(s) service is intended for/available to */
      coverageArea: t.array(Reference),
      /** Conditions under which service is available/offered */
      serviceProvisionCode: t.array(CodeableConcept),
      /** Programs that this service is applicable to */
      program: t.array(CodeableConcept),
      /** Collection of characteristics (attributes) */
      characteristic: t.array(CodeableConcept),
      /** The language that this service is offered in */
      communication: t.array(CodeableConcept),
      /** Ways that the service accepts referrals */
      referralMethod: t.array(CodeableConcept),
      /** If an appointment is required for access to this service */
      appointmentRequired: primitives.R4.boolean,
      /** Extension of appointmentRequired element */
      _appointmentRequired: Element,
      /** Description of availability exceptions */
      availabilityExceptions: primitives.R4.string,
      /** Extension of availabilityExceptions element */
      _availabilityExceptions: Element,
      /** Technical endpoints providing access to electronic services operated for the healthcare service */
      endpoint: t.array(Reference)
    })
  ])
);

/**
 * Specific eligibility requirements required to use the service
 */
export interface HealthcareServiceEligibility {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded value for the eligibility */
  code?: CodeableConcept;
  /** Describes the eligibility conditions for the service */
  comment?: primitives.R4.markdown;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * Specific eligibility requirements required to use the service
 */
export const HealthcareServiceEligibility: t.Type<
  HealthcareServiceEligibility
> = t.recursion<HealthcareServiceEligibility>(
  "HealthcareServiceEligibility",
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
        /** Coded value for the eligibility */
        code: CodeableConcept,
        /** Describes the eligibility conditions for the service */
        comment: primitives.R4.markdown,
        /** Extension of comment element */
        _comment: Element
      })
    ])
);

/**
 * Times the Service Site is available
 */
export interface HealthcareServiceAvailableTime {
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
export const HealthcareServiceAvailableTime: t.Type<
  HealthcareServiceAvailableTime
> = t.recursion<HealthcareServiceAvailableTime>(
  "HealthcareServiceAvailableTime",
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
export interface HealthcareServiceNotAvailable {
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
export const HealthcareServiceNotAvailable: t.Type<
  HealthcareServiceNotAvailable
> = t.recursion<HealthcareServiceNotAvailable>(
  "HealthcareServiceNotAvailable",
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
