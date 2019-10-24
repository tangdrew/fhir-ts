/**
 * Range Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";

/**
 * Set of values bounded by low and high
 */
export interface Range {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Low limit */
  low?: Quantity;
  /** High limit */
  high?: Quantity;
}
/**
 * Set of values bounded by low and high
 */
export const Range: t.Type<Range> = t.recursion<Range>("Range", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Low limit */
      low: Quantity,
      /** High limit */
      high: Quantity
    })
  ])
);
