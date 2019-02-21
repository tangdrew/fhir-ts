/**
 * Range Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";

/**
 * Set of values bounded by low and high
 */
export interface Range {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Low limit */
  low?: Quantity;
  /** High limit */
  high?: Quantity;
}

export interface RangeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Low limit */
  low?: QuantityOutputType;
  /** High limit */
  high?: QuantityOutputType;
}

export const Range: t.RecursiveType<
  t.Type<Range, RangeOutputType>,
  Range,
  RangeOutputType
> = t.recursion<Range, RangeOutputType>("Range", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** High limit */
        high: Quantity,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Low limit */
        low: Quantity
      })
    ],
    "Range"
  )
);
