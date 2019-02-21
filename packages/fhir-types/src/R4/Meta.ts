/**
 * Meta Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Metadata about a resource
 */
export interface Meta {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Version specific identifier */
  versionId?: t.TypeOf<primitives.R4.IDType>;
  /** When the resource version last changed */
  lastUpdated?: t.TypeOf<primitives.R4.InstantType>;
  /** Identifies where the resource comes from */
  source?: t.TypeOf<primitives.R4.URIType>;
  /** Profiles this resource claims to conform to */
  profile?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Security Labels applied to this resource */
  security?: Coding[];
  /** Tags applied to this resource */
  tag?: Coding[];
}

export interface MetaOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Version specific identifier */
  versionId?: t.OutputOf<primitives.R4.IDType>;
  /** When the resource version last changed */
  lastUpdated?: t.OutputOf<primitives.R4.InstantType>;
  /** Identifies where the resource comes from */
  source?: t.OutputOf<primitives.R4.URIType>;
  /** Profiles this resource claims to conform to */
  profile?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Security Labels applied to this resource */
  security?: CodingOutputType[];
  /** Tags applied to this resource */
  tag?: CodingOutputType[];
}

export const Meta: t.RecursiveType<
  t.Type<Meta, MetaOutputType>,
  Meta,
  MetaOutputType
> = t.recursion<Meta, MetaOutputType>("Meta", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** When the resource version last changed */
        lastUpdated: primitives.R4.instant,
        /** Profiles this resource claims to conform to */
        profile: t.array(primitives.R4.canonical),
        /** Security Labels applied to this resource */
        security: t.array(Coding),
        /** Identifies where the resource comes from */
        source: primitives.R4.uri,
        /** Tags applied to this resource */
        tag: t.array(Coding),
        /** Version specific identifier */
        versionId: primitives.R4.id
      })
    ],
    "Meta"
  )
);
