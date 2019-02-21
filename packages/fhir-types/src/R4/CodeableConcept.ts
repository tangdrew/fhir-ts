/**
 * CodeableConcept Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Concept - reference to a terminology or just  text
 */
export interface CodeableConcept {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Code defined by a terminology system */
  coding?: Coding[];
  /** Plain text representation of the concept */
  text?: t.TypeOf<primitives.R4.StringType>;
}

export interface CodeableConceptOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Code defined by a terminology system */
  coding?: CodingOutputType[];
  /** Plain text representation of the concept */
  text?: t.OutputOf<primitives.R4.StringType>;
}

export const CodeableConcept: t.RecursiveType<
  t.Type<CodeableConcept, CodeableConceptOutputType>,
  CodeableConcept,
  CodeableConceptOutputType
> = t.recursion<CodeableConcept, CodeableConceptOutputType>(
  "CodeableConcept",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Code defined by a terminology system */
          coding: t.array(Coding),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Plain text representation of the concept */
          text: primitives.R4.string
        })
      ],
      "CodeableConcept"
    )
);
