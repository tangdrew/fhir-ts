/**
 * Annotation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Reference, ReferenceOutputType } from "./Reference";

/**
 * Text node with attribution
 */
export interface Annotation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Individual responsible for the annotation */
  author?: Reference | t.TypeOf<primitives.R4.StringType>;
  /** When the annotation was made */
  time?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The annotation  - text content (as markdown) */
  text: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface AnnotationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Individual responsible for the annotation */
  author?: ReferenceOutputType | t.OutputOf<primitives.R4.StringType>;
  /** When the annotation was made */
  time?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The annotation  - text content (as markdown) */
  text: t.OutputOf<primitives.R4.MarkdownType>;
}

export const Annotation: t.RecursiveType<
  t.Type<Annotation, AnnotationOutputType>,
  Annotation,
  AnnotationOutputType
> = t.recursion<Annotation, AnnotationOutputType>("Annotation", () =>
  t.intersection(
    [
      t.type({
        /** The annotation  - text content (as markdown) */
        text: primitives.R4.markdown
      }),
      t.partial({
        /** Individual responsible for the annotation */
        author: t.union([Reference, primitives.R4.string]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** When the annotation was made */
        time: primitives.R4.dateTime
      })
    ],
    "Annotation"
  )
);
