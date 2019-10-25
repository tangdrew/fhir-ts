/**
 * Schedule Module
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
 * A container for slots of time that may be available for booking appointments
 */
export interface Schedule {
  /** The type of resource */
  resourceType?: "Schedule";
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
  /** Whether this schedule is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
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
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * A container for slots of time that may be available for booking appointments
 */
export const Schedule: t.Type<Schedule> = t.recursion<Schedule>(
  "Schedule",
  () =>
    t.intersection([
      t.type({
        /** Resource(s) that availability information is being provided for */
        actor: t.array(Reference)
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Schedule"),
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
        /** Whether this schedule is in active use */
        active: primitives.R4.boolean,
        /** Extension of active element */
        _active: Element,
        /** High-level category */
        serviceCategory: t.array(CodeableConcept),
        /** Specific service */
        serviceType: t.array(CodeableConcept),
        /** Type of specialty needed */
        specialty: t.array(CodeableConcept),
        /** Period of time covered by schedule */
        planningHorizon: Period,
        /** Comments on availability */
        comment: primitives.R4.string,
        /** Extension of comment element */
        _comment: Element
      })
    ])
);
