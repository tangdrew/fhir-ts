/**
 * BackboneElement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Base for elements defined inside a resource
 */
export interface BackboneElement {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
}
/**
 * Base for elements defined inside a resource
 */
export const BackboneElement: t.Type<BackboneElement> = t.recursion<
  BackboneElement
>("BackboneElement", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension)
    })
  ])
);
