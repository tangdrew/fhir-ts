/**
 * Ratio Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";

/**
 * A ratio of two Quantity values - a numerator and a denominator
 */
export interface Ratio {
  /** The type of resource */
  resourceType?: "Ratio";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Numerator value */
  numerator?: Quantity;
  /** Denominator value */
  denominator?: Quantity;
}
/**
 * A ratio of two Quantity values - a numerator and a denominator
 */
export const Ratio: t.Type<Ratio> = t.recursion<Ratio>("Ratio", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Ratio"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Numerator value */
      numerator: Quantity,
      /** Denominator value */
      denominator: Quantity
    })
  ])
);
