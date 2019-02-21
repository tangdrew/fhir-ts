/**
 * HealthcareService Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Not available during this time due to provided reason
 */
export interface HealthcareServiceNotAvailable {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reason presented to the user explaining why time not available */
  description: t.TypeOf<primitives.R4.StringType>;
  /** Service not available from this date */
  during?: Period;
}

export interface HealthcareServiceNotAvailableOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reason presented to the user explaining why time not available */
  description: t.OutputOf<primitives.R4.StringType>;
  /** Service not available from this date */
  during?: PeriodOutputType;
}

export const HealthcareServiceNotAvailable: t.RecursiveType<
  t.Type<
    HealthcareServiceNotAvailable,
    HealthcareServiceNotAvailableOutputType
  >,
  HealthcareServiceNotAvailable,
  HealthcareServiceNotAvailableOutputType
> = t.recursion<
  HealthcareServiceNotAvailable,
  HealthcareServiceNotAvailableOutputType
>("HealthcareServiceNotAvailable", () =>
  t.intersection(
    [
      t.type({
        /** Reason presented to the user explaining why time not available */
        description: primitives.R4.string
      }),
      t.partial({
        /** Service not available from this date */
        during: Period,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "HealthcareServiceNotAvailable"
  )
);

/**
 * Specific eligibility requirements required to use the service
 */
export interface HealthcareServiceEligibility {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded value for the eligibility */
  code?: CodeableConcept;
  /** Describes the eligibility conditions for the service */
  comment?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface HealthcareServiceEligibilityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Coded value for the eligibility */
  code?: CodeableConceptOutputType;
  /** Describes the eligibility conditions for the service */
  comment?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const HealthcareServiceEligibility: t.RecursiveType<
  t.Type<HealthcareServiceEligibility, HealthcareServiceEligibilityOutputType>,
  HealthcareServiceEligibility,
  HealthcareServiceEligibilityOutputType
> = t.recursion<
  HealthcareServiceEligibility,
  HealthcareServiceEligibilityOutputType
>("HealthcareServiceEligibility", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Coded value for the eligibility */
        code: CodeableConcept,
        /** Describes the eligibility conditions for the service */
        comment: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "HealthcareServiceEligibility"
  )
);

/**
 * Times the Service Site is available
 */
export interface HealthcareServiceAvailableTime {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: t.TypeOf<primitives.R4.CodeType>[];
  /** Always available? e.g. 24 hour service */
  allDay?: t.TypeOf<primitives.R4.BooleanType>;
  /** Opening time of day (ignored if allDay = true) */
  availableStartTime?: t.TypeOf<primitives.R4.TimeType>;
  /** Closing time of day (ignored if allDay = true) */
  availableEndTime?: t.TypeOf<primitives.R4.TimeType>;
}

export interface HealthcareServiceAvailableTimeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: t.OutputOf<primitives.R4.CodeType>[];
  /** Always available? e.g. 24 hour service */
  allDay?: t.OutputOf<primitives.R4.BooleanType>;
  /** Opening time of day (ignored if allDay = true) */
  availableStartTime?: t.OutputOf<primitives.R4.TimeType>;
  /** Closing time of day (ignored if allDay = true) */
  availableEndTime?: t.OutputOf<primitives.R4.TimeType>;
}

export const HealthcareServiceAvailableTime: t.RecursiveType<
  t.Type<
    HealthcareServiceAvailableTime,
    HealthcareServiceAvailableTimeOutputType
  >,
  HealthcareServiceAvailableTime,
  HealthcareServiceAvailableTimeOutputType
> = t.recursion<
  HealthcareServiceAvailableTime,
  HealthcareServiceAvailableTimeOutputType
>("HealthcareServiceAvailableTime", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Always available? e.g. 24 hour service */
        allDay: primitives.R4.boolean,
        /** Closing time of day (ignored if allDay = true) */
        availableEndTime: primitives.R4.time,
        /** Opening time of day (ignored if allDay = true) */
        availableStartTime: primitives.R4.time,
        /** mon | tue | wed | thu | fri | sat | sun */
        daysOfWeek: t.array(primitives.R4.code),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "HealthcareServiceAvailableTime"
  )
);

/**
 * The details of a healthcare service available at a location
 */
export interface HealthcareService {
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
  /** External identifiers for this item */
  identifier?: Identifier[];
  /** Whether this HealthcareService record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
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
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Additional description and/or any specific issues not covered elsewhere */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Extra details about the service that can't be placed in the other fields */
  extraDetails?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Facilitates quick identification of the service */
  photo?: Attachment;
  /** Contacts related to the healthcare service */
  telecom?: ContactPoint[];
  /** Location(s) service is intended for/available to */
  coverageArea?: Reference[];
  /** Conditions under which service is available/offered */
  serviceProvisionCode?: CodeableConcept[];
  /** Specific eligibility requirements required to use the service */
  eligibility?: HealthcareServiceEligibility[];
  /** Programs that this service is applicable to */
  program?: CodeableConcept[];
  /** Collection of characteristics (attributes) */
  characteristic?: CodeableConcept[];
  /** The language that this service is offered in */
  communication?: CodeableConcept[];
  /** Ways that the service accepts referrals */
  referralMethod?: CodeableConcept[];
  /** If an appointment is required for access to this service */
  appointmentRequired?: t.TypeOf<primitives.R4.BooleanType>;
  /** Times the Service Site is available */
  availableTime?: HealthcareServiceAvailableTime[];
  /** Not available during this time due to provided reason */
  notAvailable?: HealthcareServiceNotAvailable[];
  /** Description of availability exceptions */
  availabilityExceptions?: t.TypeOf<primitives.R4.StringType>;
  /** Technical endpoints providing access to electronic services operated for the healthcare service */
  endpoint?: Reference[];
}

export interface HealthcareServiceOutputType {
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
  /** External identifiers for this item */
  identifier?: IdentifierOutputType[];
  /** Whether this HealthcareService record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** Organization that provides this service */
  providedBy?: ReferenceOutputType;
  /** Broad category of service being performed or delivered */
  category?: CodeableConceptOutputType[];
  /** Type of service that may be delivered or performed */
  type?: CodeableConceptOutputType[];
  /** Specialties handled by the HealthcareService */
  specialty?: CodeableConceptOutputType[];
  /** Location(s) where service may be provided */
  location?: ReferenceOutputType[];
  /** Description of service as presented to a consumer while searching */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Additional description and/or any specific issues not covered elsewhere */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Extra details about the service that can't be placed in the other fields */
  extraDetails?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Facilitates quick identification of the service */
  photo?: AttachmentOutputType;
  /** Contacts related to the healthcare service */
  telecom?: ContactPointOutputType[];
  /** Location(s) service is intended for/available to */
  coverageArea?: ReferenceOutputType[];
  /** Conditions under which service is available/offered */
  serviceProvisionCode?: CodeableConceptOutputType[];
  /** Specific eligibility requirements required to use the service */
  eligibility?: HealthcareServiceEligibilityOutputType[];
  /** Programs that this service is applicable to */
  program?: CodeableConceptOutputType[];
  /** Collection of characteristics (attributes) */
  characteristic?: CodeableConceptOutputType[];
  /** The language that this service is offered in */
  communication?: CodeableConceptOutputType[];
  /** Ways that the service accepts referrals */
  referralMethod?: CodeableConceptOutputType[];
  /** If an appointment is required for access to this service */
  appointmentRequired?: t.OutputOf<primitives.R4.BooleanType>;
  /** Times the Service Site is available */
  availableTime?: HealthcareServiceAvailableTimeOutputType[];
  /** Not available during this time due to provided reason */
  notAvailable?: HealthcareServiceNotAvailableOutputType[];
  /** Description of availability exceptions */
  availabilityExceptions?: t.OutputOf<primitives.R4.StringType>;
  /** Technical endpoints providing access to electronic services operated for the healthcare service */
  endpoint?: ReferenceOutputType[];
}

export const HealthcareService: t.RecursiveType<
  t.Type<HealthcareService, HealthcareServiceOutputType>,
  HealthcareService,
  HealthcareServiceOutputType
> = t.recursion<HealthcareService, HealthcareServiceOutputType>(
  "HealthcareService",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Whether this HealthcareService record is in active use */
          active: primitives.R4.boolean,
          /** If an appointment is required for access to this service */
          appointmentRequired: primitives.R4.boolean,
          /** Description of availability exceptions */
          availabilityExceptions: primitives.R4.string,
          /** Times the Service Site is available */
          availableTime: t.array(HealthcareServiceAvailableTime),
          /** Broad category of service being performed or delivered */
          category: t.array(CodeableConcept),
          /** Collection of characteristics (attributes) */
          characteristic: t.array(CodeableConcept),
          /** Additional description and/or any specific issues not covered elsewhere */
          comment: primitives.R4.string,
          /** The language that this service is offered in */
          communication: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Location(s) service is intended for/available to */
          coverageArea: t.array(Reference),
          /** Specific eligibility requirements required to use the service */
          eligibility: t.array(HealthcareServiceEligibility),
          /** Technical endpoints providing access to electronic services operated for the healthcare service */
          endpoint: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Extra details about the service that can't be placed in the other fields */
          extraDetails: primitives.R4.markdown,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External identifiers for this item */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Location(s) where service may be provided */
          location: t.array(Reference),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Description of service as presented to a consumer while searching */
          name: primitives.R4.string,
          /** Not available during this time due to provided reason */
          notAvailable: t.array(HealthcareServiceNotAvailable),
          /** Facilitates quick identification of the service */
          photo: Attachment,
          /** Programs that this service is applicable to */
          program: t.array(CodeableConcept),
          /** Organization that provides this service */
          providedBy: Reference,
          /** Ways that the service accepts referrals */
          referralMethod: t.array(CodeableConcept),
          /** Conditions under which service is available/offered */
          serviceProvisionCode: t.array(CodeableConcept),
          /** Specialties handled by the HealthcareService */
          specialty: t.array(CodeableConcept),
          /** Contacts related to the healthcare service */
          telecom: t.array(ContactPoint),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Type of service that may be delivered or performed */
          type: t.array(CodeableConcept)
        })
      ],
      "HealthcareService"
    )
);
