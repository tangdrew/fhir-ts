/**
 * Linkage Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Item to be linked
 */
export interface LinkageItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** source | alternate | historical */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Resource being linked */
  resource: Reference;
}

export interface LinkageItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** source | alternate | historical */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Resource being linked */
  resource: ReferenceOutputType;
}

export const LinkageItem: t.RecursiveType<
  t.Type<LinkageItem, LinkageItemOutputType>,
  LinkageItem,
  LinkageItemOutputType
> = t.recursion<LinkageItem, LinkageItemOutputType>("LinkageItem", () =>
  t.intersection(
    [
      t.type({
        /** Resource being linked */
        resource: Reference,
        /** source | alternate | historical */
        type: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "LinkageItem"
  )
);

/**
 * Links records for 'same' item
 */
export interface Linkage {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
  /** Whether this linkage assertion is active or not */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** Who is responsible for linkages */
  author?: Reference;
  /** Item to be linked */
  item: LinkageItem[];
}

export interface LinkageOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: NarrativeOutputType;
  /** Contained, inline Resources */
  contained?: ResourceOutputType[];
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored */
  modifierExtension?: ExtensionOutputType[];
  /** Whether this linkage assertion is active or not */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** Who is responsible for linkages */
  author?: ReferenceOutputType;
  /** Item to be linked */
  item: LinkageItemOutputType[];
}

export const Linkage: t.RecursiveType<
  t.Type<Linkage, LinkageOutputType>,
  Linkage,
  LinkageOutputType
> = t.recursion<Linkage, LinkageOutputType>("Linkage", () =>
  t.intersection(
    [
      t.type({
        /** Item to be linked */
        item: t.array(LinkageItem)
      }),
      t.partial({
        /** Whether this linkage assertion is active or not */
        active: primitives.R4.boolean,
        /** Who is responsible for linkages */
        author: Reference,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Linkage"
  )
);
