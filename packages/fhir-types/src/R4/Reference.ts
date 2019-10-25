/**
 * Reference Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";

/**
 * A reference from one resource to another
 */
export interface Reference {
  /** The type of resource */
  resourceType?: "Reference";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Literal reference, Relative, internal or absolute URL */
  reference?: string;
  /** Extension of reference element */
  _reference?: Element;
  /** Type the reference refers to (e.g. "Patient") */
  type?: primitives.R4.uri;
  /** Extension of type element */
  _type?: Element;
  /** Logical reference, when literal reference is not known */
  identifier?: Identifier;
  /** Text alternative for the resource */
  display?: string;
  /** Extension of display element */
  _display?: Element;
}
/**
 * A reference from one resource to another
 */
export const Reference: t.Type<Reference> = t.recursion<Reference>(
  "Reference",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Reference"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Literal reference, Relative, internal or absolute URL */
        reference: primitives.R4.string,
        /** Extension of reference element */
        _reference: Element,
        /** Type the reference refers to (e.g. "Patient") */
        type: primitives.R4.uri,
        /** Extension of type element */
        _type: Element,
        /** Logical reference, when literal reference is not known */
        identifier: Identifier,
        /** Text alternative for the resource */
        display: primitives.R4.string,
        /** Extension of display element */
        _display: Element
      })
    ])
);
