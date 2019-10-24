/**
 * MedicinalProductPackaged Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { MarketingStatus } from "./MarketingStatus";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { ProdCharacteristic } from "./ProdCharacteristic";
import { ProductShelfLife } from "./ProductShelfLife";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A medicinal product in a container or package
 */
export interface MedicinalProductPackaged {
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
  /** Unique identifier */
  identifier?: Identifier[];
  /** The product with this is a pack for */
  subject?: Reference[];
  /** Textual description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: CodeableConcept;
  /** Marketing information */
  marketingStatus?: MarketingStatus[];
  /** Manufacturer of this Package Item */
  marketingAuthorization?: Reference;
  /** Manufacturer of this Package Item */
  manufacturer?: Reference[];
}
/**
 * A medicinal product in a container or package
 */
export const MedicinalProductPackaged: t.Type<
  MedicinalProductPackaged
> = t.recursion<MedicinalProductPackaged>("MedicinalProductPackaged", () =>
  t.intersection([
    t.type({}),
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
      /** Unique identifier */
      identifier: t.array(Identifier),
      /** The product with this is a pack for */
      subject: t.array(Reference),
      /** Textual description */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** The legal status of supply of the medicinal product as classified by the regulator */
      legalStatusOfSupply: CodeableConcept,
      /** Marketing information */
      marketingStatus: t.array(MarketingStatus),
      /** Manufacturer of this Package Item */
      marketingAuthorization: Reference,
      /** Manufacturer of this Package Item */
      manufacturer: t.array(Reference)
    })
  ])
);

/**
 * Batch numbering
 */
export interface MedicinalProductPackagedBatchIdentifier {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A number appearing on the outer packaging of a specific batch */
  outerPackaging: Identifier;
  /** A number appearing on the immediate packaging (and not the outer packaging) */
  immediatePackaging?: Identifier;
}
/**
 * Batch numbering
 */
export const MedicinalProductPackagedBatchIdentifier: t.Type<
  MedicinalProductPackagedBatchIdentifier
> = t.recursion<MedicinalProductPackagedBatchIdentifier>(
  "MedicinalProductPackagedBatchIdentifier",
  () =>
    t.intersection([
      t.type({
        /** A number appearing on the outer packaging of a specific batch */
        outerPackaging: Identifier
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
        /** A number appearing on the immediate packaging (and not the outer packaging) */
        immediatePackaging: Identifier
      })
    ])
);

/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within
 */
export interface MedicinalProductPackagedPackageItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Including possibly Data Carrier Identifier */
  identifier?: Identifier[];
  /** The physical type of the container of the medicine */
  type: CodeableConcept;
  /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 */
  quantity: Quantity;
  /** Material type of the package item */
  material?: CodeableConcept[];
  /** A possible alternate material for the packaging */
  alternateMaterial?: CodeableConcept[];
  /** A device accompanying a medicinal product */
  device?: Reference[];
  /** The manufactured item as contained in the packaged medicinal product */
  manufacturedItem?: Reference[];
  /** Allows containers within containers */
  packageItem?: MedicinalProductPackagedPackageItem[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristic;
  /** Other codeable characteristics */
  otherCharacteristics?: CodeableConcept[];
  /** Shelf Life and storage information */
  shelfLifeStorage?: ProductShelfLife[];
  /** Manufacturer of this Package Item */
  manufacturer?: Reference[];
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within
 */
export const MedicinalProductPackagedPackageItem: t.Type<
  MedicinalProductPackagedPackageItem
> = t.recursion<MedicinalProductPackagedPackageItem>(
  "MedicinalProductPackagedPackageItem",
  () =>
    t.intersection([
      t.type({
        /** The physical type of the container of the medicine */
        type: CodeableConcept,
        /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 */
        quantity: Quantity
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
        /** Including possibly Data Carrier Identifier */
        identifier: t.array(Identifier),
        /** Material type of the package item */
        material: t.array(CodeableConcept),
        /** A possible alternate material for the packaging */
        alternateMaterial: t.array(CodeableConcept),
        /** A device accompanying a medicinal product */
        device: t.array(Reference),
        /** The manufactured item as contained in the packaged medicinal product */
        manufacturedItem: t.array(Reference),
        /** Allows containers within containers */
        packageItem: t.array(MedicinalProductPackagedPackageItem),
        /** Dimensions, color etc. */
        physicalCharacteristics: ProdCharacteristic,
        /** Other codeable characteristics */
        otherCharacteristics: t.array(CodeableConcept),
        /** Shelf Life and storage information */
        shelfLifeStorage: t.array(ProductShelfLife),
        /** Manufacturer of this Package Item */
        manufacturer: t.array(Reference)
      })
    ])
);
