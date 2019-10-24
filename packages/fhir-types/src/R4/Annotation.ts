/**
 * Annotation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";

/**
 * Text node with attribution
 */
export interface Annotation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Individual responsible for the annotation */
  authorReference?: Reference;
  /** Individual responsible for the annotation */
  authorString?: string;
  /** Extension of authorString element */
  _authorString?: Element;
  /** When the annotation was made */
  time?: primitives.R4.dateTime;
  /** Extension of time element */
  _time?: Element;
  /** The annotation  - text content (as markdown) */
  text: primitives.R4.markdown;
  /** Extension of text element */
  _text?: Element;
}
/**
 * Text node with attribution
 */
export const Annotation: t.Type<Annotation> = t.recursion<Annotation>(
  "Annotation",
  () =>
    t.intersection([
      t.type({
        /** The annotation  - text content (as markdown) */
        text: primitives.R4.markdown
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Individual responsible for the annotation */
        authorReference: Reference,
        /** Individual responsible for the annotation */
        authorString: primitives.R4.string,
        /** Extension of authorString element */
        _authorString: Element,
        /** When the annotation was made */
        time: primitives.R4.dateTime,
        /** Extension of time element */
        _time: Element,
        /** Extension of text element */
        _text: Element
      })
    ])
);
