/**
 * SampledData Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";

/**
 * A series of measurements taken by a device
 */
export interface SampledData {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Zero value and units */
  origin: Quantity;
  /** Number of milliseconds between samples */
  period: primitives.R4.decimal;
  /** Extension of period element */
  _period?: Element;
  /** Multiply data by this before adding to origin */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Lower limit of detection */
  lowerLimit?: primitives.R4.decimal;
  /** Extension of lowerLimit element */
  _lowerLimit?: Element;
  /** Upper limit of detection */
  upperLimit?: primitives.R4.decimal;
  /** Extension of upperLimit element */
  _upperLimit?: Element;
  /** Number of sample points at each time point */
  dimensions: primitives.R4.positiveInt;
  /** Extension of dimensions element */
  _dimensions?: Element;
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data?: string;
  /** Extension of data element */
  _data?: Element;
}
/**
 * A series of measurements taken by a device
 */
export const SampledData: t.Type<SampledData> = t.recursion<SampledData>(
  "SampledData",
  () =>
    t.intersection([
      t.type({
        /** Zero value and units */
        origin: Quantity,
        /** Number of milliseconds between samples */
        period: primitives.R4.decimal,
        /** Number of sample points at each time point */
        dimensions: primitives.R4.positiveInt
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of period element */
        _period: Element,
        /** Multiply data by this before adding to origin */
        factor: primitives.R4.decimal,
        /** Extension of factor element */
        _factor: Element,
        /** Lower limit of detection */
        lowerLimit: primitives.R4.decimal,
        /** Extension of lowerLimit element */
        _lowerLimit: Element,
        /** Upper limit of detection */
        upperLimit: primitives.R4.decimal,
        /** Extension of upperLimit element */
        _upperLimit: Element,
        /** Extension of dimensions element */
        _dimensions: Element,
        /** Decimal values with spaces, or "E" | "U" | "L" */
        data: primitives.R4.string,
        /** Extension of data element */
        _data: Element
      })
    ])
);
