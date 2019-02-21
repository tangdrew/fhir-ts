/**
 * CatalogEntry Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * An item that this catalog entry is related to
 */
export interface CatalogEntryRelatedEntry {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** triggers | is-replaced-by */
  relationtype: t.TypeOf<primitives.R4.CodeType>;
  /** The reference to the related item */
  item: Reference;
}

export interface CatalogEntryRelatedEntryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** triggers | is-replaced-by */
  relationtype: t.OutputOf<primitives.R4.CodeType>;
  /** The reference to the related item */
  item: ReferenceOutputType;
}

export const CatalogEntryRelatedEntry: t.RecursiveType<
  t.Type<CatalogEntryRelatedEntry, CatalogEntryRelatedEntryOutputType>,
  CatalogEntryRelatedEntry,
  CatalogEntryRelatedEntryOutputType
> = t.recursion<CatalogEntryRelatedEntry, CatalogEntryRelatedEntryOutputType>(
  "CatalogEntryRelatedEntry",
  () =>
    t.intersection(
      [
        t.type({
          /** The reference to the related item */
          item: Reference,
          /** triggers | is-replaced-by */
          relationtype: primitives.R4.code
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
      "CatalogEntryRelatedEntry"
    )
);

/**
 * An entry in a catalog
 */
export interface CatalogEntry {
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
  /** Unique identifier of the catalog item */
  identifier?: Identifier[];
  /** The type of item - medication, device, service, protocol or other */
  type?: CodeableConcept;
  /** Whether the entry represents an orderable item */
  orderable: t.TypeOf<primitives.R4.BooleanType>;
  /** The item that is being defined */
  referencedItem: Reference;
  /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
  additionalIdentifier?: Identifier[];
  /** Classification (category or class) of the item entry */
  classification?: CodeableConcept[];
  /** draft | active | retired | unknown */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** The time period in which this catalog entry is expected to be active */
  validityPeriod?: Period;
  /** The date until which this catalog entry is expected to be active */
  validTo?: t.TypeOf<primitives.R4.DateTimeType>;
  /** When was this catalog last updated */
  lastUpdated?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Additional characteristics of the catalog entry */
  additionalCharacteristic?: CodeableConcept[];
  /** Additional classification of the catalog entry */
  additionalClassification?: CodeableConcept[];
  /** An item that this catalog entry is related to */
  relatedEntry?: CatalogEntryRelatedEntry[];
}

export interface CatalogEntryOutputType {
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
  /** Unique identifier of the catalog item */
  identifier?: IdentifierOutputType[];
  /** The type of item - medication, device, service, protocol or other */
  type?: CodeableConceptOutputType;
  /** Whether the entry represents an orderable item */
  orderable: t.OutputOf<primitives.R4.BooleanType>;
  /** The item that is being defined */
  referencedItem: ReferenceOutputType;
  /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
  additionalIdentifier?: IdentifierOutputType[];
  /** Classification (category or class) of the item entry */
  classification?: CodeableConceptOutputType[];
  /** draft | active | retired | unknown */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** The time period in which this catalog entry is expected to be active */
  validityPeriod?: PeriodOutputType;
  /** The date until which this catalog entry is expected to be active */
  validTo?: t.OutputOf<primitives.R4.DateTimeType>;
  /** When was this catalog last updated */
  lastUpdated?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Additional characteristics of the catalog entry */
  additionalCharacteristic?: CodeableConceptOutputType[];
  /** Additional classification of the catalog entry */
  additionalClassification?: CodeableConceptOutputType[];
  /** An item that this catalog entry is related to */
  relatedEntry?: CatalogEntryRelatedEntryOutputType[];
}

export const CatalogEntry: t.RecursiveType<
  t.Type<CatalogEntry, CatalogEntryOutputType>,
  CatalogEntry,
  CatalogEntryOutputType
> = t.recursion<CatalogEntry, CatalogEntryOutputType>("CatalogEntry", () =>
  t.intersection(
    [
      t.type({
        /** Whether the entry represents an orderable item */
        orderable: primitives.R4.boolean,
        /** The item that is being defined */
        referencedItem: Reference
      }),
      t.partial({
        /** Additional characteristics of the catalog entry */
        additionalCharacteristic: t.array(CodeableConcept),
        /** Additional classification of the catalog entry */
        additionalClassification: t.array(CodeableConcept),
        /** Any additional identifier(s) for the catalog item, in the same granularity or concept */
        additionalIdentifier: t.array(Identifier),
        /** Classification (category or class) of the item entry */
        classification: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Unique identifier of the catalog item */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** When was this catalog last updated */
        lastUpdated: primitives.R4.dateTime,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** An item that this catalog entry is related to */
        relatedEntry: t.array(CatalogEntryRelatedEntry),
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** The type of item - medication, device, service, protocol or other */
        type: CodeableConcept,
        /** The date until which this catalog entry is expected to be active */
        validTo: primitives.R4.dateTime,
        /** The time period in which this catalog entry is expected to be active */
        validityPeriod: Period
      })
    ],
    "CatalogEntry"
  )
);
