/**
 * HumanName Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Period, PeriodOutputType } from "./Period";

/**
 * Name of a human - parts and usage
 */
export interface HumanName {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** usual | official | temp | nickname | anonymous | old | maiden */
  use?: t.TypeOf<primitives.R4.CodeType>;
  /** Text representation of the full name */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Family name (often called 'Surname') */
  family?: t.TypeOf<primitives.R4.StringType>;
  /** Given names (not always 'first'). Includes middle names */
  given?: t.TypeOf<primitives.R4.StringType>[];
  /** Parts that come before the name */
  prefix?: t.TypeOf<primitives.R4.StringType>[];
  /** Parts that come after the name */
  suffix?: t.TypeOf<primitives.R4.StringType>[];
  /** Time period when name was/is in use */
  period?: Period;
}

export interface HumanNameOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** usual | official | temp | nickname | anonymous | old | maiden */
  use?: t.OutputOf<primitives.R4.CodeType>;
  /** Text representation of the full name */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Family name (often called 'Surname') */
  family?: t.OutputOf<primitives.R4.StringType>;
  /** Given names (not always 'first'). Includes middle names */
  given?: t.OutputOf<primitives.R4.StringType>[];
  /** Parts that come before the name */
  prefix?: t.OutputOf<primitives.R4.StringType>[];
  /** Parts that come after the name */
  suffix?: t.OutputOf<primitives.R4.StringType>[];
  /** Time period when name was/is in use */
  period?: PeriodOutputType;
}

export const HumanName: t.RecursiveType<
  t.Type<HumanName, HumanNameOutputType>,
  HumanName,
  HumanNameOutputType
> = t.recursion<HumanName, HumanNameOutputType>("HumanName", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Family name (often called 'Surname') */
        family: primitives.R4.string,
        /** Given names (not always 'first'). Includes middle names */
        given: t.array(primitives.R4.string),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Time period when name was/is in use */
        period: Period,
        /** Parts that come before the name */
        prefix: t.array(primitives.R4.string),
        /** Parts that come after the name */
        suffix: t.array(primitives.R4.string),
        /** Text representation of the full name */
        text: primitives.R4.string,
        /** usual | official | temp | nickname | anonymous | old | maiden */
        use: primitives.R4.code
      })
    ],
    "HumanName"
  )
);
