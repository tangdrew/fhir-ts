/**
 * Narrative Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Human-readable summary of the resource (essential clinical and business information)
 */
export interface Narrative {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** generated | extensions | additional | empty */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Limited xhtml content */
  div: t.TypeOf<primitives.R4.XHTMLType>;
}

export interface NarrativeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** generated | extensions | additional | empty */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Limited xhtml content */
  div: t.OutputOf<primitives.R4.XHTMLType>;
}

export const Narrative: t.RecursiveType<
  t.Type<Narrative, NarrativeOutputType>,
  Narrative,
  NarrativeOutputType
> = t.recursion<Narrative, NarrativeOutputType>("Narrative", () =>
  t.intersection(
    [
      t.type({
        /** Limited xhtml content */
        div: primitives.R4.xhtml,
        /** generated | extensions | additional | empty */
        status: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string
      })
    ],
    "Narrative"
  )
);
