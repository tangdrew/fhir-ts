/**
 * ContactPoint Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Period, PeriodOutputType } from "./Period";

/**
 * Details of a Technology mediated contact point (phone, fax, email, etc.)
 */
export interface ContactPoint {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** phone | fax | email | pager | url | sms | other */
  system?: t.TypeOf<primitives.R4.CodeType>;
  /** The actual contact point details */
  value?: t.TypeOf<primitives.R4.StringType>;
  /** home | work | temp | old | mobile - purpose of this contact point */
  use?: t.TypeOf<primitives.R4.CodeType>;
  /** Specify preferred order of use (1 = highest) */
  rank?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Time period when the contact point was/is in use */
  period?: Period;
}

export interface ContactPointOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** phone | fax | email | pager | url | sms | other */
  system?: t.OutputOf<primitives.R4.CodeType>;
  /** The actual contact point details */
  value?: t.OutputOf<primitives.R4.StringType>;
  /** home | work | temp | old | mobile - purpose of this contact point */
  use?: t.OutputOf<primitives.R4.CodeType>;
  /** Specify preferred order of use (1 = highest) */
  rank?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Time period when the contact point was/is in use */
  period?: PeriodOutputType;
}

export const ContactPoint: t.RecursiveType<
  t.Type<ContactPoint, ContactPointOutputType>,
  ContactPoint,
  ContactPointOutputType
> = t.recursion<ContactPoint, ContactPointOutputType>("ContactPoint", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Time period when the contact point was/is in use */
        period: Period,
        /** Specify preferred order of use (1 = highest) */
        rank: primitives.R4.positiveInt,
        /** phone | fax | email | pager | url | sms | other */
        system: primitives.R4.code,
        /** home | work | temp | old | mobile - purpose of this contact point */
        use: primitives.R4.code,
        /** The actual contact point details */
        value: primitives.R4.string
      })
    ],
    "ContactPoint"
  )
);
