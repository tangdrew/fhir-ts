/**
 * Element Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension } from "./Extension";

/**
 * Base for all elements
 */
export interface Element {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
}
/**
 * Base for all elements
 */
export const Element: t.Type<Element> = t.recursion<Element>("Element", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension)
    })
  ])
);
