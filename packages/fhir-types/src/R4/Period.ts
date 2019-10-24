/**
 * Period Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Time range defined by start and end date/time
 */
export interface Period {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Starting time with inclusive boundary */
  start?: primitives.R4.dateTime;
  /** Extension of start element */
  _start?: Element;
  /** End time with inclusive boundary, if not ongoing */
  end?: primitives.R4.dateTime;
  /** Extension of end element */
  _end?: Element;
}
/**
 * Time range defined by start and end date/time
 */
export const Period: t.Type<Period> = t.recursion<Period>("Period", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Starting time with inclusive boundary */
      start: primitives.R4.dateTime,
      /** Extension of start element */
      _start: Element,
      /** End time with inclusive boundary, if not ongoing */
      end: primitives.R4.dateTime,
      /** Extension of end element */
      _end: Element
    })
  ])
);
