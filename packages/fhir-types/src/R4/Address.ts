/**
 * Address Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats)
 */
export interface Address {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** home | work | temp | old | billing - purpose of this address */
  use?: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** postal | physical | both */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Text representation of the address */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Street name, number, direction & P.O. Box etc. */
  line?: string[];
  /** Extension of line element */
  _line?: Element[];
  /** Name of city, town etc. */
  city?: string;
  /** Extension of city element */
  _city?: Element;
  /** District name (aka county) */
  district?: string;
  /** Extension of district element */
  _district?: Element;
  /** Sub-unit of country (abbreviations ok) */
  state?: string;
  /** Extension of state element */
  _state?: Element;
  /** Postal code for area */
  postalCode?: string;
  /** Extension of postalCode element */
  _postalCode?: Element;
  /** Country (e.g. can be ISO 3166 2 or 3 letter code) */
  country?: string;
  /** Extension of country element */
  _country?: Element;
  /** Time period when address was/is in use */
  period?: Period;
}
/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats)
 */
export const Address: t.Type<Address> = t.recursion<Address>("Address", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** home | work | temp | old | billing - purpose of this address */
      use: primitives.R4.code,
      /** Extension of use element */
      _use: Element,
      /** postal | physical | both */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element,
      /** Text representation of the address */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element,
      /** Street name, number, direction & P.O. Box etc. */
      line: t.array(primitives.R4.string),
      /** Extension of line element */
      _line: t.array(Element),
      /** Name of city, town etc. */
      city: primitives.R4.string,
      /** Extension of city element */
      _city: Element,
      /** District name (aka county) */
      district: primitives.R4.string,
      /** Extension of district element */
      _district: Element,
      /** Sub-unit of country (abbreviations ok) */
      state: primitives.R4.string,
      /** Extension of state element */
      _state: Element,
      /** Postal code for area */
      postalCode: primitives.R4.string,
      /** Extension of postalCode element */
      _postalCode: Element,
      /** Country (e.g. can be ISO 3166 2 or 3 letter code) */
      country: primitives.R4.string,
      /** Extension of country element */
      _country: Element,
      /** Time period when address was/is in use */
      period: Period
    })
  ])
);
