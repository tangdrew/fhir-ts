/**
 * Period Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Time range defined by start and end date/time
 */
export interface Period {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Starting time with inclusive boundary */
  start?: t.TypeOf<primitives.R4.DateTimeType>;
  /** End time with inclusive boundary, if not ongoing */
  end?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface PeriodOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Starting time with inclusive boundary */
  start?: t.OutputOf<primitives.R4.DateTimeType>;
  /** End time with inclusive boundary, if not ongoing */
  end?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const Period: t.RecursiveType<
  t.Type<Period, PeriodOutputType>,
  Period,
  PeriodOutputType
> = t.recursion<Period, PeriodOutputType>("Period", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** End time with inclusive boundary, if not ongoing */
        end: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Starting time with inclusive boundary */
        start: primitives.R4.dateTime
      })
    ],
    "Period"
  )
);
