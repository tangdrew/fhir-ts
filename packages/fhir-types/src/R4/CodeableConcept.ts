/**
 * CodeableConcept Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Concept - reference to a terminology or just  text
 */
export interface CodeableConcept {
  /** The type of resource */
  resourceType?: "CodeableConcept";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Code defined by a terminology system */
  coding?: Coding[];
  /** Plain text representation of the concept */
  text?: string;
  /** Extension of text element */
  _text?: Element;
}
/**
 * Concept - reference to a terminology or just  text
 */
export const CodeableConcept: t.Type<CodeableConcept> = t.recursion<
  CodeableConcept
>("CodeableConcept", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("CodeableConcept"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Code defined by a terminology system */
      coding: t.array(Coding),
      /** Plain text representation of the concept */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element
    })
  ])
);
