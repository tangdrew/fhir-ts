/**
 * Money Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * An amount of economic utility in some recognized currency
 */
export interface Money {
  /** The type of resource */
  resourceType?: "Money";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Numerical value (with implicit precision) */
  value?: primitives.R4.decimal;
  /** Extension of value element */
  _value?: Element;
  /** ISO 4217 Currency Code */
  currency?: primitives.R4.code;
  /** Extension of currency element */
  _currency?: Element;
}
/**
 * An amount of economic utility in some recognized currency
 */
export const Money: t.Type<Money> = t.recursion<Money>("Money", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Money"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Numerical value (with implicit precision) */
      value: primitives.R4.decimal,
      /** Extension of value element */
      _value: Element,
      /** ISO 4217 Currency Code */
      currency: primitives.R4.code,
      /** Extension of currency element */
      _currency: Element
    })
  ])
);
