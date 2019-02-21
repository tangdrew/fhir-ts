/**
 * Address Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Period, PeriodOutputType } from "./Period";

/**
 * An address expressed using postal conventions (as opposed to GPS or other location definition formats)
 */
export interface Address {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** home | work | temp | old | billing - purpose of this address */
  use?: t.TypeOf<primitives.R4.CodeType>;
  /** postal | physical | both */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** Text representation of the address */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Street name, number, direction & P.O. Box etc. */
  line?: t.TypeOf<primitives.R4.StringType>[];
  /** Name of city, town etc. */
  city?: t.TypeOf<primitives.R4.StringType>;
  /** District name (aka county) */
  district?: t.TypeOf<primitives.R4.StringType>;
  /** Sub-unit of country (abbreviations ok) */
  state?: t.TypeOf<primitives.R4.StringType>;
  /** Postal code for area */
  postalCode?: t.TypeOf<primitives.R4.StringType>;
  /** Country (e.g. can be ISO 3166 2 or 3 letter code) */
  country?: t.TypeOf<primitives.R4.StringType>;
  /** Time period when address was/is in use */
  period?: Period;
}

export interface AddressOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** home | work | temp | old | billing - purpose of this address */
  use?: t.OutputOf<primitives.R4.CodeType>;
  /** postal | physical | both */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** Text representation of the address */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Street name, number, direction & P.O. Box etc. */
  line?: t.OutputOf<primitives.R4.StringType>[];
  /** Name of city, town etc. */
  city?: t.OutputOf<primitives.R4.StringType>;
  /** District name (aka county) */
  district?: t.OutputOf<primitives.R4.StringType>;
  /** Sub-unit of country (abbreviations ok) */
  state?: t.OutputOf<primitives.R4.StringType>;
  /** Postal code for area */
  postalCode?: t.OutputOf<primitives.R4.StringType>;
  /** Country (e.g. can be ISO 3166 2 or 3 letter code) */
  country?: t.OutputOf<primitives.R4.StringType>;
  /** Time period when address was/is in use */
  period?: PeriodOutputType;
}

export const Address: t.RecursiveType<
  t.Type<Address, AddressOutputType>,
  Address,
  AddressOutputType
> = t.recursion<Address, AddressOutputType>("Address", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Name of city, town etc. */
        city: primitives.R4.string,
        /** Country (e.g. can be ISO 3166 2 or 3 letter code) */
        country: primitives.R4.string,
        /** District name (aka county) */
        district: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Street name, number, direction & P.O. Box etc. */
        line: t.array(primitives.R4.string),
        /** Time period when address was/is in use */
        period: Period,
        /** Postal code for area */
        postalCode: primitives.R4.string,
        /** Sub-unit of country (abbreviations ok) */
        state: primitives.R4.string,
        /** Text representation of the address */
        text: primitives.R4.string,
        /** postal | physical | both */
        type: primitives.R4.code,
        /** home | work | temp | old | billing - purpose of this address */
        use: primitives.R4.code
      })
    ],
    "Address"
  )
);
