/**
 * Money Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * An amount of economic utility in some recognized currency
 */
export interface Money {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Numerical value (with implicit precision) */
  value?: t.TypeOf<primitives.R4.DecimalType>;
  /** ISO 4217 Currency Code */
  currency?: t.TypeOf<primitives.R4.CodeType>;
}

export interface MoneyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Numerical value (with implicit precision) */
  value?: t.OutputOf<primitives.R4.DecimalType>;
  /** ISO 4217 Currency Code */
  currency?: t.OutputOf<primitives.R4.CodeType>;
}

export const Money: t.RecursiveType<
  t.Type<Money, MoneyOutputType>,
  Money,
  MoneyOutputType
> = t.recursion<Money, MoneyOutputType>("Money", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** ISO 4217 Currency Code */
        currency: primitives.R4.code,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Numerical value (with implicit precision) */
        value: primitives.R4.decimal
      })
    ],
    "Money"
  )
);
