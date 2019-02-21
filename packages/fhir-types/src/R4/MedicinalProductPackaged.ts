/**
 * MedicinalProductPackaged Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { MarketingStatus, MarketingStatusOutputType } from "./MarketingStatus";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import {
  ProdCharacteristic,
  ProdCharacteristicOutputType
} from "./ProdCharacteristic";
import {
  ProductShelfLife,
  ProductShelfLifeOutputType
} from "./ProductShelfLife";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within
 */
export interface MedicinalProductPackagedPackageItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface MedicinalProductPackagedPackageItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Including possibly Data Carrier Identifier */
  identifier?: IdentifierOutputType[];
  /** The physical type of the container of the medicine */
  type: CodeableConceptOutputType;
  /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 */
  quantity: QuantityOutputType;
  /** Material type of the package item */
  material?: CodeableConceptOutputType[];
  /** A possible alternate material for the packaging */
  alternateMaterial?: CodeableConceptOutputType[];
  /** A device accompanying a medicinal product */
  device?: ReferenceOutputType[];
  /** The manufactured item as contained in the packaged medicinal product */
  manufacturedItem?: ReferenceOutputType[];
  /** Allows containers within containers */
  packageItem?: MedicinalProductPackagedPackageItemOutputType[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristicOutputType;
  /** Other codeable characteristics */
  otherCharacteristics?: CodeableConceptOutputType[];
  /** Shelf Life and storage information */
  shelfLifeStorage?: ProductShelfLifeOutputType[];
  /** Manufacturer of this Package Item */
  manufacturer?: ReferenceOutputType[];
}

export const MedicinalProductPackagedPackageItem: t.RecursiveType<
  t.Type<
    MedicinalProductPackagedPackageItem,
    MedicinalProductPackagedPackageItemOutputType
  >,
  MedicinalProductPackagedPackageItem,
  MedicinalProductPackagedPackageItemOutputType
> = t.recursion<
  MedicinalProductPackagedPackageItem,
  MedicinalProductPackagedPackageItemOutputType
>("MedicinalProductPackagedPackageItem", () =>
  t.intersection(
    [
      t.type({
        /** The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1 */
        quantity: Quantity,
        /** The physical type of the container of the medicine */
        type: CodeableConcept
      }),
      t.partial({
        /** A possible alternate material for the packaging */
        alternateMaterial: t.array(CodeableConcept),
        /** A device accompanying a medicinal product */
        device: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Including possibly Data Carrier Identifier */
        identifier: t.array(Identifier),
        /** The manufactured item as contained in the packaged medicinal product */
        manufacturedItem: t.array(Reference),
        /** Manufacturer of this Package Item */
        manufacturer: t.array(Reference),
        /** Material type of the package item */
        material: t.array(CodeableConcept),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Other codeable characteristics */
        otherCharacteristics: t.array(CodeableConcept),
        /** Allows containers within containers */
        packageItem: t.array(MedicinalProductPackagedPackageItem),
        /** Dimensions, color etc. */
        physicalCharacteristics: ProdCharacteristic,
        /** Shelf Life and storage information */
        shelfLifeStorage: t.array(ProductShelfLife)
      })
    ],
    "MedicinalProductPackagedPackageItem"
  )
);

/**
 * Batch numbering
 */
export interface MedicinalProductPackagedBatchIdentifier {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A number appearing on the outer packaging of a specific batch */
  outerPackaging: Identifier;
  /** A number appearing on the immediate packaging (and not the outer packaging) */
  immediatePackaging?: Identifier;
}

export interface MedicinalProductPackagedBatchIdentifierOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A number appearing on the outer packaging of a specific batch */
  outerPackaging: IdentifierOutputType;
  /** A number appearing on the immediate packaging (and not the outer packaging) */
  immediatePackaging?: IdentifierOutputType;
}

export const MedicinalProductPackagedBatchIdentifier: t.RecursiveType<
  t.Type<
    MedicinalProductPackagedBatchIdentifier,
    MedicinalProductPackagedBatchIdentifierOutputType
  >,
  MedicinalProductPackagedBatchIdentifier,
  MedicinalProductPackagedBatchIdentifierOutputType
> = t.recursion<
  MedicinalProductPackagedBatchIdentifier,
  MedicinalProductPackagedBatchIdentifierOutputType
>("MedicinalProductPackagedBatchIdentifier", () =>
  t.intersection(
    [
      t.type({
        /** A number appearing on the outer packaging of a specific batch */
        outerPackaging: Identifier
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** A number appearing on the immediate packaging (and not the outer packaging) */
        immediatePackaging: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicinalProductPackagedBatchIdentifier"
  )
);

/**
 * A medicinal product in a container or package
 */
export interface MedicinalProductPackaged {
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
  /** Unique identifier */
  identifier?: Identifier[];
  /** The product with this is a pack for */
  subject?: Reference[];
  /** Textual description */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: CodeableConcept;
  /** Marketing information */
  marketingStatus?: MarketingStatus[];
  /** Manufacturer of this Package Item */
  marketingAuthorization?: Reference;
  /** Manufacturer of this Package Item */
  manufacturer?: Reference[];
  /** Batch numbering */
  batchIdentifier?: MedicinalProductPackagedBatchIdentifier[];
  /** A packaging item, as a contained for medicine, possibly with other packaging items within */
  packageItem: MedicinalProductPackagedPackageItem[];
}

export interface MedicinalProductPackagedOutputType {
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
  /** Unique identifier */
  identifier?: IdentifierOutputType[];
  /** The product with this is a pack for */
  subject?: ReferenceOutputType[];
  /** Textual description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: CodeableConceptOutputType;
  /** Marketing information */
  marketingStatus?: MarketingStatusOutputType[];
  /** Manufacturer of this Package Item */
  marketingAuthorization?: ReferenceOutputType;
  /** Manufacturer of this Package Item */
  manufacturer?: ReferenceOutputType[];
  /** Batch numbering */
  batchIdentifier?: MedicinalProductPackagedBatchIdentifierOutputType[];
  /** A packaging item, as a contained for medicine, possibly with other packaging items within */
  packageItem: MedicinalProductPackagedPackageItemOutputType[];
}

export const MedicinalProductPackaged: t.RecursiveType<
  t.Type<MedicinalProductPackaged, MedicinalProductPackagedOutputType>,
  MedicinalProductPackaged,
  MedicinalProductPackagedOutputType
> = t.recursion<MedicinalProductPackaged, MedicinalProductPackagedOutputType>(
  "MedicinalProductPackaged",
  () =>
    t.intersection(
      [
        t.type({
          /** A packaging item, as a contained for medicine, possibly with other packaging items within */
          packageItem: t.array(MedicinalProductPackagedPackageItem)
        }),
        t.partial({
          /** Batch numbering */
          batchIdentifier: t.array(MedicinalProductPackagedBatchIdentifier),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Textual description */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Unique identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** The legal status of supply of the medicinal product as classified by the regulator */
          legalStatusOfSupply: CodeableConcept,
          /** Manufacturer of this Package Item */
          manufacturer: t.array(Reference),
          /** Manufacturer of this Package Item */
          marketingAuthorization: Reference,
          /** Marketing information */
          marketingStatus: t.array(MarketingStatus),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** The product with this is a pack for */
          subject: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "MedicinalProductPackaged"
    )
);
