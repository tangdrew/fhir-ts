/**
 * Coding Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * A reference to a code defined by a terminology system
 */
export interface Coding {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Identity of the terminology system */
  system?: t.TypeOf<primitives.R4.URIType>;
  /** Version of the system - if relevant */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Symbol in syntax defined by the system */
  code?: t.TypeOf<primitives.R4.CodeType>;
  /** Representation defined by the system */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** If this coding was chosen directly by the user */
  userSelected?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface CodingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Identity of the terminology system */
  system?: t.OutputOf<primitives.R4.URIType>;
  /** Version of the system - if relevant */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Symbol in syntax defined by the system */
  code?: t.OutputOf<primitives.R4.CodeType>;
  /** Representation defined by the system */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** If this coding was chosen directly by the user */
  userSelected?: t.OutputOf<primitives.R4.BooleanType>;
}

export const Coding: t.RecursiveType<
  t.Type<Coding, CodingOutputType>,
  Coding,
  CodingOutputType
> = t.recursion<Coding, CodingOutputType>("Coding", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Symbol in syntax defined by the system */
        code: primitives.R4.code,
        /** Representation defined by the system */
        display: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Identity of the terminology system */
        system: primitives.R4.uri,
        /** If this coding was chosen directly by the user */
        userSelected: primitives.R4.boolean,
        /** Version of the system - if relevant */
        version: primitives.R4.string
      })
    ],
    "Coding"
  )
);
