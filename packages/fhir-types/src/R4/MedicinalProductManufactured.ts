/**
 * MedicinalProductManufactured Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { ProdCharacteristic } from "./ProdCharacteristic";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * The manufactured item as contained in the packaged medicinal product
 */
export interface MedicinalProductManufactured {
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
/**
 * The manufactured item as contained in the packaged medicinal product
 */
export const MedicinalProductManufactured: t.Type<
  MedicinalProductManufactured
> = t.recursion<MedicinalProductManufactured>(
  "MedicinalProductManufactured",
  () =>
    t.intersection([
      t.type({
        /** Dose form as manufactured and before any transformation into the pharmaceutical product */
        manufacturedDoseForm: CodeableConcept,
        /** The quantity or "count number" of the manufactured item */
        quantity: Quantity
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
        /** The “real world” units in which the quantity of the manufactured item is described */
        unitOfPresentation: CodeableConcept,
        /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
        manufacturer: t.array(Reference),
        /** Ingredient */
        ingredient: t.array(Reference),
        /** Dimensions, color etc. */
        physicalCharacteristics: ProdCharacteristic,
        /** Other codeable characteristics */
        otherCharacteristics: t.array(CodeableConcept)
      })
    ])
);
