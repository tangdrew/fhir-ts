/**
 * Ratio Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";

/**
 * A ratio of two Quantity values - a numerator and a denominator
 */
export interface Ratio {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Numerator value */
  numerator?: Quantity;
  /** Denominator value */
  denominator?: Quantity;
}

export interface RatioOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Numerator value */
  numerator?: QuantityOutputType;
  /** Denominator value */
  denominator?: QuantityOutputType;
}

export const Ratio: t.RecursiveType<
  t.Type<Ratio, RatioOutputType>,
  Ratio,
  RatioOutputType
> = t.recursion<Ratio, RatioOutputType>("Ratio", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Denominator value */
        denominator: Quantity,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Numerator value */
        numerator: Quantity
      })
    ],
    "Ratio"
  )
);
