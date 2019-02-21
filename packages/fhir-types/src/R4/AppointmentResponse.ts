/**
 * AppointmentResponse Module
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
 * A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection
 */
export interface AppointmentResponse {
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
  /** Appointment this response relates to */
  appointment: Reference;
  /** Time from appointment, or requested new start time */
  start?: t.TypeOf<primitives.R4.InstantType>;
  /** Time from appointment, or requested new end time */
  end?: t.TypeOf<primitives.R4.InstantType>;
  /** Role of participant in the appointment */
  participantType?: CodeableConcept[];
  /** Person, Location, HealthcareService, or Device */
  actor?: Reference;
  /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error */
  participantStatus: t.TypeOf<primitives.R4.CodeType>;
  /** Additional comments */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface AppointmentResponseOutputType {
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
  /** Appointment this response relates to */
  appointment: ReferenceOutputType;
  /** Time from appointment, or requested new start time */
  start?: t.OutputOf<primitives.R4.InstantType>;
  /** Time from appointment, or requested new end time */
  end?: t.OutputOf<primitives.R4.InstantType>;
  /** Role of participant in the appointment */
  participantType?: CodeableConceptOutputType[];
  /** Person, Location, HealthcareService, or Device */
  actor?: ReferenceOutputType;
  /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error */
  participantStatus: t.OutputOf<primitives.R4.CodeType>;
  /** Additional comments */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const AppointmentResponse: t.RecursiveType<
  t.Type<AppointmentResponse, AppointmentResponseOutputType>,
  AppointmentResponse,
  AppointmentResponseOutputType
> = t.recursion<AppointmentResponse, AppointmentResponseOutputType>(
  "AppointmentResponse",
  () =>
    t.intersection(
      [
        t.type({
          /** Appointment this response relates to */
          appointment: Reference,
          /** accepted | declined | tentative | in-process | completed | needs-action | entered-in-error */
          participantStatus: primitives.R4.code
        }),
        t.partial({
          /** Person, Location, HealthcareService, or Device */
          actor: Reference,
          /** Additional comments */
          comment: primitives.R4.string,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Time from appointment, or requested new end time */
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
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Role of participant in the appointment */
          participantType: t.array(CodeableConcept),
          /** Time from appointment, or requested new start time */
          start: primitives.R4.instant,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "AppointmentResponse"
    )
);
