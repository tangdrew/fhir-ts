/**
 * CatalogEntry Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * An entry in a catalog
 */
export interface CatalogEntry {
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
  /** Unique identifier of the catalog item */
  identifier?: Identifier[];
  /** The type of item - medication, device, service, protocol or other */
  type?: CodeableConcept;
  /** Whether the entry represents an orderable item */
  orderable: boolean;
  /** Extension of orderable element */
  _orderable?: Element;
  /** The item that is being defined */
  referencedItem: Reference;
  /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
  additionalIdentifier?: Identifier[];
  /** Classification (category or class) of the item entry */
  classification?: CodeableConcept[];
  /** draft | active | retired | unknown */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** The time period in which this catalog entry is expected to be active */
  validityPeriod?: Period;
  /** The date until which this catalog entry is expected to be active */
  validTo?: primitives.R4.dateTime;
  /** Extension of validTo element */
  _validTo?: Element;
  /** When was this catalog last updated */
  lastUpdated?: primitives.R4.dateTime;
  /** Extension of lastUpdated element */
  _lastUpdated?: Element;
  /** Additional characteristics of the catalog entry */
  additionalCharacteristic?: CodeableConcept[];
  /** Additional classification of the catalog entry */
  additionalClassification?: CodeableConcept[];
}
/**
 * An entry in a catalog
 */
export const CatalogEntry: t.Type<CatalogEntry> = t.recursion<CatalogEntry>(
  "CatalogEntry",
  () =>
    t.intersection([
      t.type({
        /** Whether the entry represents an orderable item */
        orderable: primitives.R4.boolean,
        /** The item that is being defined */
        referencedItem: Reference
      }),
      t.partial({
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
        /** Unique identifier of the catalog item */
        identifier: t.array(Identifier),
        /** The type of item - medication, device, service, protocol or other */
        type: CodeableConcept,
        /** Extension of orderable element */
        _orderable: Element,
        /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
        additionalIdentifier: t.array(Identifier),
        /** Classification (category or class) of the item entry */
        classification: t.array(CodeableConcept),
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** The time period in which this catalog entry is expected to be active */
        validityPeriod: Period,
        /** The date until which this catalog entry is expected to be active */
        validTo: primitives.R4.dateTime,
        /** Extension of validTo element */
        _validTo: Element,
        /** When was this catalog last updated */
        lastUpdated: primitives.R4.dateTime,
        /** Extension of lastUpdated element */
        _lastUpdated: Element,
        /** Additional characteristics of the catalog entry */
        additionalCharacteristic: t.array(CodeableConcept),
        /** Additional classification of the catalog entry */
        additionalClassification: t.array(CodeableConcept)
      })
    ])
);

/**
 * An item that this catalog entry is related to
 */
export interface CatalogEntryRelatedEntry {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** triggers | is-replaced-by */
  relationtype: primitives.R4.code;
  /** Extension of relationtype element */
  _relationtype?: Element;
  /** The reference to the related item */
  item: Reference;
}
/**
 * An item that this catalog entry is related to
 */
export const CatalogEntryRelatedEntry: t.Type<
  CatalogEntryRelatedEntry
> = t.recursion<CatalogEntryRelatedEntry>("CatalogEntryRelatedEntry", () =>
  t.intersection([
    t.type({
      /** triggers | is-replaced-by */
      relationtype: primitives.R4.code,
      /** The reference to the related item */
      item: Reference
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
      /** Extension of relationtype element */
      _relationtype: Element
    })
  ])
);
