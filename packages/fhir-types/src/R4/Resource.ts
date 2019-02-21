/**
 * Resource Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Meta, MetaOutputType } from "./Meta";

/**
 * Base Resource
 */
export interface Resource {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
}

export interface ResourceOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
}

export const Resource: t.RecursiveType<
  t.Type<Resource, ResourceOutputType>,
  Resource,
  ResourceOutputType
> = t.recursion<Resource, ResourceOutputType>("Resource", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta
      })
    ],
    "Resource"
  )
);
