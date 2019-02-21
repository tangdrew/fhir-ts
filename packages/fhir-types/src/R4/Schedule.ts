/**
 * Schedule Module
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
 * A container for slots of time that may be available for booking appointments
 */
export interface Schedule {
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
  /** Whether this schedule is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** High-level category */
  serviceCategory?: CodeableConcept[];
  /** Specific service */
  serviceType?: CodeableConcept[];
  /** Type of specialty needed */
  specialty?: CodeableConcept[];
  /** Resource(s) that availability information is being provided for */
  actor: Reference[];
  /** Period of time covered by schedule */
  planningHorizon?: Period;
  /** Comments on availability */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface ScheduleOutputType {
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
  /** Whether this schedule is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** High-level category */
  serviceCategory?: CodeableConceptOutputType[];
  /** Specific service */
  serviceType?: CodeableConceptOutputType[];
  /** Type of specialty needed */
  specialty?: CodeableConceptOutputType[];
  /** Resource(s) that availability information is being provided for */
  actor: ReferenceOutputType[];
  /** Period of time covered by schedule */
  planningHorizon?: PeriodOutputType;
  /** Comments on availability */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const Schedule: t.RecursiveType<
  t.Type<Schedule, ScheduleOutputType>,
  Schedule,
  ScheduleOutputType
> = t.recursion<Schedule, ScheduleOutputType>("Schedule", () =>
  t.intersection(
    [
      t.type({
        /** Resource(s) that availability information is being provided for */
        actor: t.array(Reference)
      }),
      t.partial({
        /** Whether this schedule is in active use */
        active: primitives.R4.boolean,
        /** Comments on availability */
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
        /** Period of time covered by schedule */
        planningHorizon: Period,
        /** High-level category */
        serviceCategory: t.array(CodeableConcept),
        /** Specific service */
        serviceType: t.array(CodeableConcept),
        /** Type of specialty needed */
        specialty: t.array(CodeableConcept),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Schedule"
  )
);
