/**
 * Linkage Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Links records for 'same' item
 */
export interface Linkage {
  /** The type of resource */
  resourceType?: "Linkage";
  /** Logical id of this artifact */
  id?: primitives.R4.id;
  /** Extension of id element */
  _id?: Element;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: primitives.R4.uri;
  /** Extension of implicitRules element */
  _implicitRules?: Element;
  /** Language of the resource content */
  language?: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
  /** Whether this linkage assertion is active or not */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** Who is responsible for linkages */
  author?: Reference;
}
/**
 * Links records for 'same' item
 */
export const Linkage: t.Type<Linkage> = t.recursion<Linkage>("Linkage", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Linkage"),
      /** Logical id of this artifact */
      id: primitives.R4.id,
      /** Extension of id element */
      _id: Element,
      /** Metadata about the resource */
      meta: Meta,
      /** A set of rules under which this content was created */
      implicitRules: primitives.R4.uri,
      /** Extension of implicitRules element */
      _implicitRules: Element,
      /** Language of the resource content */
      language: primitives.R4.code,
      /** Extension of language element */
      _language: Element,
      /** Text summary of the resource, for human interpretation */
      text: Narrative,
      /** Contained, inline Resources */
      contained: t.array(Resource),
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored */
      modifierExtension: t.array(Extension),
      /** Whether this linkage assertion is active or not */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element,
      /** Who is responsible for linkages */
      author: Reference
    })
  ])
);

/**
 * Item to be linked
 */
export interface LinkageItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** source | alternate | historical */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Resource being linked */
  resource: Reference;
}
/**
 * Item to be linked
 */
export const LinkageItem: t.Type<LinkageItem> = t.recursion<LinkageItem>(
  "LinkageItem",
  () =>
    t.intersection([
      t.type({
        /** source | alternate | historical */
        type: primitives.R4.code,
        /** Resource being linked */
        resource: Reference
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of type element */
        _type: Element
      })
    ])
);
