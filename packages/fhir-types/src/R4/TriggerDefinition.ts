/**
 * TriggerDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { DataRequirement } from "./DataRequirement";
import { Element } from "./Element";
import { Expression } from "./Expression";
import { Extension } from "./Extension";
import { Reference } from "./Reference";
import { Timing } from "./Timing";

/**
 * Defines an expected trigger for a module
 */
export interface TriggerDefinition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Name or URI that identifies the event */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Timing of the event */
  timingTiming?: Timing;
  /** Timing of the event */
  timingReference?: Reference;
  /** Timing of the event */
  timingDate?: primitives.R4.date;
  /** Extension of timingDate element */
  _timingDate?: Element;
  /** Timing of the event */
  timingDateTime?: primitives.R4.dateTime;
  /** Extension of timingDateTime element */
  _timingDateTime?: Element;
  /** Triggering data of the event (multiple = 'and') */
  data?: DataRequirement[];
  /** Whether the event triggers (boolean expression) */
  condition?: Expression;
}
/**
 * Defines an expected trigger for a module
 */
export const TriggerDefinition: t.Type<TriggerDefinition> = t.recursion<
  TriggerDefinition
>("TriggerDefinition", () =>
  t.intersection([
    t.type({
      /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
      type: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of type element */
      _type: Element,
      /** Name or URI that identifies the event */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Timing of the event */
      timingTiming: Timing,
      /** Timing of the event */
      timingReference: Reference,
      /** Timing of the event */
      timingDate: primitives.R4.date,
      /** Extension of timingDate element */
      _timingDate: Element,
      /** Timing of the event */
      timingDateTime: primitives.R4.dateTime,
      /** Extension of timingDateTime element */
      _timingDateTime: Element,
      /** Triggering data of the event (multiple = 'and') */
      data: t.array(DataRequirement),
      /** Whether the event triggers (boolean expression) */
      condition: Expression
    })
  ])
);
