/**
 * UsageContext Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";

/**
 * Describes the context of use for a conformance or knowledge resource
 */
export interface UsageContext {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Type of context being specified */
  code: Coding;
  /** Value that defines the context */
  value: CodeableConcept | Quantity | Range | Reference;
}

export interface UsageContextOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Type of context being specified */
  code: CodingOutputType;
  /** Value that defines the context */
  value:
    | CodeableConceptOutputType
    | QuantityOutputType
    | RangeOutputType
    | ReferenceOutputType;
}

export const UsageContext: t.RecursiveType<
  t.Type<UsageContext, UsageContextOutputType>,
  UsageContext,
  UsageContextOutputType
> = t.recursion<UsageContext, UsageContextOutputType>("UsageContext", () =>
  t.intersection(
    [
      t.type({
        /** Type of context being specified */
        code: Coding,
        /** Value that defines the context */
        value: t.union([CodeableConcept, Quantity, Range, Reference])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string
      })
    ],
    "UsageContext"
  )
);
