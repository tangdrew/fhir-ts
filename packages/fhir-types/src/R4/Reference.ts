/**
 * Reference Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";

/**
 * A reference from one resource to another
 */
export interface Reference {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Literal reference, Relative, internal or absolute URL */
  reference?: t.TypeOf<primitives.R4.StringType>;
  /** Type the reference refers to (e.g. "Patient") */
  type?: t.TypeOf<primitives.R4.URIType>;
  /** Logical reference, when literal reference is not known */
  identifier?: Identifier;
  /** Text alternative for the resource */
  display?: t.TypeOf<primitives.R4.StringType>;
}

export interface ReferenceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Literal reference, Relative, internal or absolute URL */
  reference?: t.OutputOf<primitives.R4.StringType>;
  /** Type the reference refers to (e.g. "Patient") */
  type?: t.OutputOf<primitives.R4.URIType>;
  /** Logical reference, when literal reference is not known */
  identifier?: IdentifierOutputType;
  /** Text alternative for the resource */
  display?: t.OutputOf<primitives.R4.StringType>;
}

export const Reference: t.RecursiveType<
  t.Type<Reference, ReferenceOutputType>,
  Reference,
  ReferenceOutputType
> = t.recursion<Reference, ReferenceOutputType>("Reference", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Text alternative for the resource */
        display: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Logical reference, when literal reference is not known */
        identifier: Identifier,
        /** Literal reference, Relative, internal or absolute URL */
        reference: primitives.R4.string,
        /** Type the reference refers to (e.g. "Patient") */
        type: primitives.R4.uri
      })
    ],
    "Reference"
  )
);
