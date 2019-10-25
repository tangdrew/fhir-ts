/**
 * ContactPoint Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

/**
 * Details of a Technology mediated contact point (phone, fax, email, etc.)
 */
export interface ContactPoint {
  /** The type of resource */
  resourceType?: "ContactPoint";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** phone | fax | email | pager | url | sms | other */
  system?: primitives.R4.code;
  /** Extension of system element */
  _system?: Element;
  /** The actual contact point details */
  value?: string;
  /** Extension of value element */
  _value?: Element;
  /** home | work | temp | old | mobile - purpose of this contact point */
  use?: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** Specify preferred order of use (1 = highest) */
  rank?: primitives.R4.positiveInt;
  /** Extension of rank element */
  _rank?: Element;
  /** Time period when the contact point was/is in use */
  period?: Period;
}
/**
 * Details of a Technology mediated contact point (phone, fax, email, etc.)
 */
export const ContactPoint: t.Type<ContactPoint> = t.recursion<ContactPoint>(
  "ContactPoint",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("ContactPoint"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** phone | fax | email | pager | url | sms | other */
        system: primitives.R4.code,
        /** Extension of system element */
        _system: Element,
        /** The actual contact point details */
        value: primitives.R4.string,
        /** Extension of value element */
        _value: Element,
        /** home | work | temp | old | mobile - purpose of this contact point */
        use: primitives.R4.code,
        /** Extension of use element */
        _use: Element,
        /** Specify preferred order of use (1 = highest) */
        rank: primitives.R4.positiveInt,
        /** Extension of rank element */
        _rank: Element,
        /** Time period when the contact point was/is in use */
        period: Period
      })
    ])
);
