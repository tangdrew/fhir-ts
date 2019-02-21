/**
 * PractitionerRole Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
export interface PractitionerRoleNotAvailable {
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

export interface PractitionerRoleNotAvailableOutputType {
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

export const PractitionerRoleNotAvailable: t.RecursiveType<
  t.Type<PractitionerRoleNotAvailable, PractitionerRoleNotAvailableOutputType>,
  PractitionerRoleNotAvailable,
  PractitionerRoleNotAvailableOutputType
> = t.recursion<
  PractitionerRoleNotAvailable,
  PractitionerRoleNotAvailableOutputType
>("PractitionerRoleNotAvailable", () =>
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
    "PractitionerRoleNotAvailable"
  )
);

/**
 * Times the Service Site is available
 */
export interface PractitionerRoleAvailableTime {
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

export interface PractitionerRoleAvailableTimeOutputType {
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

export const PractitionerRoleAvailableTime: t.RecursiveType<
  t.Type<
    PractitionerRoleAvailableTime,
    PractitionerRoleAvailableTimeOutputType
  >,
  PractitionerRoleAvailableTime,
  PractitionerRoleAvailableTimeOutputType
> = t.recursion<
  PractitionerRoleAvailableTime,
  PractitionerRoleAvailableTimeOutputType
>("PractitionerRoleAvailableTime", () =>
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
    "PractitionerRoleAvailableTime"
  )
);

/**
 * Roles/organizations the practitioner is associated with
 */
export interface PractitionerRole {
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
  /** Business Identifiers that are specific to a role/location */
  identifier?: Identifier[];
  /** Whether this practitioner role record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
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
  /** Times the Service Site is available */
  availableTime?: PractitionerRoleAvailableTime[];
  /** Not available during this time due to provided reason */
  notAvailable?: PractitionerRoleNotAvailable[];
  /** Description of availability exceptions */
  availabilityExceptions?: t.TypeOf<primitives.R4.StringType>;
  /** Technical endpoints providing access to services operated for the practitioner with this role */
  endpoint?: Reference[];
}

export interface PractitionerRoleOutputType {
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
  /** Business Identifiers that are specific to a role/location */
  identifier?: IdentifierOutputType[];
  /** Whether this practitioner role record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** The period during which the practitioner is authorized to perform in these role(s) */
  period?: PeriodOutputType;
  /** Practitioner that is able to provide the defined services for the organization */
  practitioner?: ReferenceOutputType;
  /** Organization where the roles are available */
  organization?: ReferenceOutputType;
  /** Roles which this practitioner may perform */
  code?: CodeableConceptOutputType[];
  /** Specific specialty of the practitioner */
  specialty?: CodeableConceptOutputType[];
  /** The location(s) at which this practitioner provides care */
  location?: ReferenceOutputType[];
  /** The list of healthcare services that this worker provides for this role's Organization/Location(s) */
  healthcareService?: ReferenceOutputType[];
  /** Contact details that are specific to the role/location/service */
  telecom?: ContactPointOutputType[];
  /** Times the Service Site is available */
  availableTime?: PractitionerRoleAvailableTimeOutputType[];
  /** Not available during this time due to provided reason */
  notAvailable?: PractitionerRoleNotAvailableOutputType[];
  /** Description of availability exceptions */
  availabilityExceptions?: t.OutputOf<primitives.R4.StringType>;
  /** Technical endpoints providing access to services operated for the practitioner with this role */
  endpoint?: ReferenceOutputType[];
}

export const PractitionerRole: t.RecursiveType<
  t.Type<PractitionerRole, PractitionerRoleOutputType>,
  PractitionerRole,
  PractitionerRoleOutputType
> = t.recursion<PractitionerRole, PractitionerRoleOutputType>(
  "PractitionerRole",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Whether this practitioner role record is in active use */
          active: primitives.R4.boolean,
          /** Description of availability exceptions */
          availabilityExceptions: primitives.R4.string,
          /** Times the Service Site is available */
          availableTime: t.array(PractitionerRoleAvailableTime),
          /** Roles which this practitioner may perform */
          code: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Technical endpoints providing access to services operated for the practitioner with this role */
          endpoint: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** The list of healthcare services that this worker provides for this role's Organization/Location(s) */
          healthcareService: t.array(Reference),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifiers that are specific to a role/location */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** The location(s) at which this practitioner provides care */
          location: t.array(Reference),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Not available during this time due to provided reason */
          notAvailable: t.array(PractitionerRoleNotAvailable),
          /** Organization where the roles are available */
          organization: Reference,
          /** The period during which the practitioner is authorized to perform in these role(s) */
          period: Period,
          /** Practitioner that is able to provide the defined services for the organization */
          practitioner: Reference,
          /** Specific specialty of the practitioner */
          specialty: t.array(CodeableConcept),
          /** Contact details that are specific to the role/location/service */
          telecom: t.array(ContactPoint),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "PractitionerRole"
    )
);
