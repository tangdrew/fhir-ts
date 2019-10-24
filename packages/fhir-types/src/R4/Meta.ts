/**
 * Meta Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Metadata about a resource
 */
export interface Meta {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Version specific identifier */
  versionId?: primitives.R4.id;
  /** Extension of versionId element */
  _versionId?: Element;
  /** When the resource version last changed */
  lastUpdated?: primitives.R4.instant;
  /** Extension of lastUpdated element */
  _lastUpdated?: Element;
  /** Identifies where the resource comes from */
  source?: primitives.R4.uri;
  /** Extension of source element */
  _source?: Element;
  /** Profiles this resource claims to conform to */
  profile?: primitives.R4.canonical[];
  /** Extension of profile element */
  _profile?: Element[];
  /** Security Labels applied to this resource */
  security?: Coding[];
  /** Tags applied to this resource */
  tag?: Coding[];
}
/**
 * Metadata about a resource
 */
export const Meta: t.Type<Meta> = t.recursion<Meta>("Meta", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Version specific identifier */
      versionId: primitives.R4.id,
      /** Extension of versionId element */
      _versionId: Element,
      /** When the resource version last changed */
      lastUpdated: primitives.R4.instant,
      /** Extension of lastUpdated element */
      _lastUpdated: Element,
      /** Identifies where the resource comes from */
      source: primitives.R4.uri,
      /** Extension of source element */
      _source: Element,
      /** Profiles this resource claims to conform to */
      profile: t.array(primitives.R4.canonical),
      /** Extension of profile element */
      _profile: t.array(Element),
      /** Security Labels applied to this resource */
      security: t.array(Coding),
      /** Tags applied to this resource */
      tag: t.array(Coding)
    })
  ])
);
