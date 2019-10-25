/**
 * HumanName Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

/**
 * Name of a human - parts and usage
 */
export interface HumanName {
  /** The type of resource */
  resourceType?: "HumanName";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** usual | official | temp | nickname | anonymous | old | maiden */
  use?: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** Text representation of the full name */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Family name (often called 'Surname') */
  family?: string;
  /** Extension of family element */
  _family?: Element;
  /** Given names (not always 'first'). Includes middle names */
  given?: string[];
  /** Extension of given element */
  _given?: Element[];
  /** Parts that come before the name */
  prefix?: string[];
  /** Extension of prefix element */
  _prefix?: Element[];
  /** Parts that come after the name */
  suffix?: string[];
  /** Extension of suffix element */
  _suffix?: Element[];
  /** Time period when name was/is in use */
  period?: Period;
}
/**
 * Name of a human - parts and usage
 */
export const HumanName: t.Type<HumanName> = t.recursion<HumanName>(
  "HumanName",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("HumanName"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** usual | official | temp | nickname | anonymous | old | maiden */
        use: primitives.R4.code,
        /** Extension of use element */
        _use: Element,
        /** Text representation of the full name */
        text: primitives.R4.string,
        /** Extension of text element */
        _text: Element,
        /** Family name (often called 'Surname') */
        family: primitives.R4.string,
        /** Extension of family element */
        _family: Element,
        /** Given names (not always 'first'). Includes middle names */
        given: t.array(primitives.R4.string),
        /** Extension of given element */
        _given: t.array(Element),
        /** Parts that come before the name */
        prefix: t.array(primitives.R4.string),
        /** Extension of prefix element */
        _prefix: t.array(Element),
        /** Parts that come after the name */
        suffix: t.array(primitives.R4.string),
        /** Extension of suffix element */
        _suffix: t.array(Element),
        /** Time period when name was/is in use */
        period: Period
      })
    ])
);
