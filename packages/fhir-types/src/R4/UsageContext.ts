/**
 * UsageContext Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";

/**
 * Describes the context of use for a conformance or knowledge resource
 */
export interface UsageContext {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Type of context being specified */
  code: Coding;
  /** Value that defines the context */
  valueCodeableConcept: CodeableConcept;
  /** Value that defines the context */
  valueQuantity: Quantity;
  /** Value that defines the context */
  valueRange: Range;
  /** Value that defines the context */
  valueReference: Reference;
}
/**
 * Describes the context of use for a conformance or knowledge resource
 */
export const UsageContext: t.Type<UsageContext> = t.recursion<UsageContext>(
  "UsageContext",
  () =>
    t.intersection([
      t.type({
        /** Type of context being specified */
        code: Coding,
        /** Value that defines the context */
        valueCodeableConcept: CodeableConcept,
        /** Value that defines the context */
        valueQuantity: Quantity,
        /** Value that defines the context */
        valueRange: Range,
        /** Value that defines the context */
        valueReference: Reference
      }),
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
