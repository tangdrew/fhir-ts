/**
 * MedicinalProductManufactured Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import {
  ProdCharacteristic,
  ProdCharacteristicOutputType
} from "./ProdCharacteristic";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The manufactured item as contained in the packaged medicinal product
 */
export interface MedicinalProductManufactured {
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
  /** Dose form as manufactured and before any transformation into the pharmaceutical product */
  manufacturedDoseForm: CodeableConcept;
  /** The “real world” units in which the quantity of the manufactured item is described */
  unitOfPresentation?: CodeableConcept;
  /** The quantity or "count number" of the manufactured item */
  quantity: Quantity;
  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
  manufacturer?: Reference[];
  /** Ingredient */
  ingredient?: Reference[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristic;
  /** Other codeable characteristics */
  otherCharacteristics?: CodeableConcept[];
}

export interface MedicinalProductManufacturedOutputType {
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
  /** Dose form as manufactured and before any transformation into the pharmaceutical product */
  manufacturedDoseForm: CodeableConceptOutputType;
  /** The “real world” units in which the quantity of the manufactured item is described */
  unitOfPresentation?: CodeableConceptOutputType;
  /** The quantity or "count number" of the manufactured item */
  quantity: QuantityOutputType;
  /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
  manufacturer?: ReferenceOutputType[];
  /** Ingredient */
  ingredient?: ReferenceOutputType[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristicOutputType;
  /** Other codeable characteristics */
  otherCharacteristics?: CodeableConceptOutputType[];
}

export const MedicinalProductManufactured: t.RecursiveType<
  t.Type<MedicinalProductManufactured, MedicinalProductManufacturedOutputType>,
  MedicinalProductManufactured,
  MedicinalProductManufacturedOutputType
> = t.recursion<
  MedicinalProductManufactured,
  MedicinalProductManufacturedOutputType
>("MedicinalProductManufactured", () =>
  t.intersection(
    [
      t.type({
        /** Dose form as manufactured and before any transformation into the pharmaceutical product */
        manufacturedDoseForm: CodeableConcept,
        /** The quantity or "count number" of the manufactured item */
        quantity: Quantity
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Ingredient */
        ingredient: t.array(Reference),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
        manufacturer: t.array(Reference),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Other codeable characteristics */
        otherCharacteristics: t.array(CodeableConcept),
        /** Dimensions, color etc. */
        physicalCharacteristics: ProdCharacteristic,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** The “real world” units in which the quantity of the manufactured item is described */
        unitOfPresentation: CodeableConcept
      })
    ],
    "MedicinalProductManufactured"
  )
);
