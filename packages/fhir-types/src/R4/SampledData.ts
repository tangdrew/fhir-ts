/**
 * SampledData Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";

/**
 * A series of measurements taken by a device
 */
export interface SampledData {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Zero value and units */
  origin: Quantity;
  /** Number of milliseconds between samples */
  period: t.TypeOf<primitives.R4.DecimalType>;
  /** Multiply data by this before adding to origin */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Lower limit of detection */
  lowerLimit?: t.TypeOf<primitives.R4.DecimalType>;
  /** Upper limit of detection */
  upperLimit?: t.TypeOf<primitives.R4.DecimalType>;
  /** Number of sample points at each time point */
  dimensions: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data?: t.TypeOf<primitives.R4.StringType>;
}

export interface SampledDataOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Zero value and units */
  origin: QuantityOutputType;
  /** Number of milliseconds between samples */
  period: t.OutputOf<primitives.R4.DecimalType>;
  /** Multiply data by this before adding to origin */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Lower limit of detection */
  lowerLimit?: t.OutputOf<primitives.R4.DecimalType>;
  /** Upper limit of detection */
  upperLimit?: t.OutputOf<primitives.R4.DecimalType>;
  /** Number of sample points at each time point */
  dimensions: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data?: t.OutputOf<primitives.R4.StringType>;
}

export const SampledData: t.RecursiveType<
  t.Type<SampledData, SampledDataOutputType>,
  SampledData,
  SampledDataOutputType
> = t.recursion<SampledData, SampledDataOutputType>("SampledData", () =>
  t.intersection(
    [
      t.type({
        /** Number of sample points at each time point */
        dimensions: primitives.R4.positiveInt,
        /** Zero value and units */
        origin: Quantity,
        /** Number of milliseconds between samples */
        period: primitives.R4.decimal
      }),
      t.partial({
        /** Decimal values with spaces, or "E" | "U" | "L" */
        data: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Multiply data by this before adding to origin */
        factor: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Lower limit of detection */
        lowerLimit: primitives.R4.decimal,
        /** Upper limit of detection */
        upperLimit: primitives.R4.decimal
      })
    ],
    "SampledData"
  )
);
