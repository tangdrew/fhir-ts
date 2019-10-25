/**
 * Narrative Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Human-readable summary of the resource (essential clinical and business information)
 */
export interface Narrative {
  /** The type of resource */
  resourceType?: "Narrative";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** generated | extensions | additional | empty */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Limited xhtml content */
  div: primitives.R4.xhtml;
  /** Extension of div element */
  _div?: Element;
}
/**
 * Human-readable summary of the resource (essential clinical and business information)
 */
export const Narrative: t.Type<Narrative> = t.recursion<Narrative>(
  "Narrative",
  () =>
    t.intersection([
      t.type({
        /** generated | extensions | additional | empty */
        status: primitives.R4.code,
        /** Limited xhtml content */
        div: primitives.R4.xhtml
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Narrative"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of status element */
        _status: Element,
        /** Extension of div element */
        _div: Element
      })
    ])
);
