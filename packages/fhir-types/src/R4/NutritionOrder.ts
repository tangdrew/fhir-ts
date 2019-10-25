/**
 * NutritionOrder Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Diet, formula or nutritional supplement request
 */
export interface NutritionOrder {
  /** The type of resource */
  resourceType?: "NutritionOrder";
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
  /** Identifiers assigned to this order */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** Instantiates protocol or definition */
  instantiates?: primitives.R4.uri[];
  /** Extension of instantiates element */
  _instantiates?: Element[];
  /** proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** proposal | plan | order */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** The person who requires the diet, formula or nutritional supplement */
  patient: Reference;
  /** The encounter associated with this nutrition order */
  encounter?: Reference;
  /** Date and time the nutrition order was requested */
  dateTime: primitives.R4.dateTime;
  /** Extension of dateTime element */
  _dateTime?: Element;
  /** Who ordered the diet, formula or nutritional supplement */
  orderer?: Reference;
  /** List of the patient's food and nutrition-related allergies and intolerances */
  allergyIntolerance?: Reference[];
  /** Order-specific modifier about the type of food that should be given */
  foodPreferenceModifier?: CodeableConcept[];
  /** Order-specific modifier about the type of food that should not be given */
  excludeFoodModifier?: CodeableConcept[];
  /** Comments */
  note?: Annotation[];
}
/**
 * Diet, formula or nutritional supplement request
 */
export const NutritionOrder: t.Type<NutritionOrder> = t.recursion<
  NutritionOrder
>("NutritionOrder", () =>
  t.intersection([
    t.type({
      /** proposed | draft | planned | requested | active | on-hold | completed | cancelled | entered-in-error */
      status: primitives.R4.code,
      /** proposal | plan | order */
      intent: primitives.R4.code,
      /** The person who requires the diet, formula or nutritional supplement */
      patient: Reference,
      /** Date and time the nutrition order was requested */
      dateTime: primitives.R4.dateTime
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("NutritionOrder"),
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
      /** Identifiers assigned to this order */
      identifier: t.array(Identifier),
      /** Instantiates FHIR protocol or definition */
      instantiatesCanonical: t.array(primitives.R4.canonical),
      /** Extension of instantiatesCanonical element */
      _instantiatesCanonical: t.array(Element),
      /** Instantiates external protocol or definition */
      instantiatesUri: t.array(primitives.R4.uri),
      /** Extension of instantiatesUri element */
      _instantiatesUri: t.array(Element),
      /** Instantiates protocol or definition */
      instantiates: t.array(primitives.R4.uri),
      /** Extension of instantiates element */
      _instantiates: t.array(Element),
      /** Extension of status element */
      _status: Element,
      /** Extension of intent element */
      _intent: Element,
      /** The encounter associated with this nutrition order */
      encounter: Reference,
      /** Extension of dateTime element */
      _dateTime: Element,
      /** Who ordered the diet, formula or nutritional supplement */
      orderer: Reference,
      /** List of the patient's food and nutrition-related allergies and intolerances */
      allergyIntolerance: t.array(Reference),
      /** Order-specific modifier about the type of food that should be given */
      foodPreferenceModifier: t.array(CodeableConcept),
      /** Order-specific modifier about the type of food that should not be given */
      excludeFoodModifier: t.array(CodeableConcept),
      /** Comments */
      note: t.array(Annotation)
    })
  ])
);

/**
 * Oral diet components
 */
export interface NutritionOrderOralDiet {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of oral diet or diet restrictions that describe what can be consumed orally */
  type?: CodeableConcept[];
  /** Scheduled frequency of diet */
  schedule?: Timing[];
  /** The required consistency of fluids and liquids provided to the patient */
  fluidConsistencyType?: CodeableConcept[];
  /** Instructions or additional information about the oral diet */
  instruction?: string;
  /** Extension of instruction element */
  _instruction?: Element;
}
/**
 * Oral diet components
 */
export const NutritionOrderOralDiet: t.Type<
  NutritionOrderOralDiet
> = t.recursion<NutritionOrderOralDiet>("NutritionOrderOralDiet", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Type of oral diet or diet restrictions that describe what can be consumed orally */
      type: t.array(CodeableConcept),
      /** Scheduled frequency of diet */
      schedule: t.array(Timing),
      /** The required consistency of fluids and liquids provided to the patient */
      fluidConsistencyType: t.array(CodeableConcept),
      /** Instructions or additional information about the oral diet */
      instruction: primitives.R4.string,
      /** Extension of instruction element */
      _instruction: Element
    })
  ])
);

/**
 * Required  nutrient modifications
 */
export interface NutritionOrderOralDietNutrient {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of nutrient that is being modified */
  modifier?: CodeableConcept;
  /** Quantity of the specified nutrient */
  amount?: Quantity;
}
/**
 * Required  nutrient modifications
 */
export const NutritionOrderOralDietNutrient: t.Type<
  NutritionOrderOralDietNutrient
> = t.recursion<NutritionOrderOralDietNutrient>(
  "NutritionOrderOralDietNutrient",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Type of nutrient that is being modified */
        modifier: CodeableConcept,
        /** Quantity of the specified nutrient */
        amount: Quantity
      })
    ])
);

/**
 * Required  texture modifications
 */
export interface NutritionOrderOralDietTexture {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code to indicate how to alter the texture of the foods, e.g. pureed */
  modifier?: CodeableConcept;
  /** Concepts that are used to identify an entity that is ingested for nutritional purposes */
  foodType?: CodeableConcept;
}
/**
 * Required  texture modifications
 */
export const NutritionOrderOralDietTexture: t.Type<
  NutritionOrderOralDietTexture
> = t.recursion<NutritionOrderOralDietTexture>(
  "NutritionOrderOralDietTexture",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Code to indicate how to alter the texture of the foods, e.g. pureed */
        modifier: CodeableConcept,
        /** Concepts that are used to identify an entity that is ingested for nutritional purposes */
        foodType: CodeableConcept
      })
    ])
);

/**
 * Supplement components
 */
export interface NutritionOrderSupplement {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of supplement product requested */
  type?: CodeableConcept;
  /** Product or brand name of the nutritional supplement */
  productName?: string;
  /** Extension of productName element */
  _productName?: Element;
  /** Scheduled frequency of supplement */
  schedule?: Timing[];
  /** Amount of the nutritional supplement */
  quantity?: Quantity;
  /** Instructions or additional information about the oral supplement */
  instruction?: string;
  /** Extension of instruction element */
  _instruction?: Element;
}
/**
 * Supplement components
 */
export const NutritionOrderSupplement: t.Type<
  NutritionOrderSupplement
> = t.recursion<NutritionOrderSupplement>("NutritionOrderSupplement", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Type of supplement product requested */
      type: CodeableConcept,
      /** Product or brand name of the nutritional supplement */
      productName: primitives.R4.string,
      /** Extension of productName element */
      _productName: Element,
      /** Scheduled frequency of supplement */
      schedule: t.array(Timing),
      /** Amount of the nutritional supplement */
      quantity: Quantity,
      /** Instructions or additional information about the oral supplement */
      instruction: primitives.R4.string,
      /** Extension of instruction element */
      _instruction: Element
    })
  ])
);

/**
 * Enteral formula components
 */
export interface NutritionOrderEnteralFormula {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of enteral or infant formula */
  baseFormulaType?: CodeableConcept;
  /** Product or brand name of the enteral or infant formula */
  baseFormulaProductName?: string;
  /** Extension of baseFormulaProductName element */
  _baseFormulaProductName?: Element;
  /** Type of modular component to add to the feeding */
  additiveType?: CodeableConcept;
  /** Product or brand name of the modular additive */
  additiveProductName?: string;
  /** Extension of additiveProductName element */
  _additiveProductName?: Element;
  /** Amount of energy per specified volume that is required */
  caloricDensity?: Quantity;
  /** How the formula should enter the patient's gastrointestinal tract */
  routeofAdministration?: CodeableConcept;
  /** Upper limit on formula volume per unit of time */
  maxVolumeToDeliver?: Quantity;
  /** Formula feeding instructions expressed as text */
  administrationInstruction?: string;
  /** Extension of administrationInstruction element */
  _administrationInstruction?: Element;
}
/**
 * Enteral formula components
 */
export const NutritionOrderEnteralFormula: t.Type<
  NutritionOrderEnteralFormula
> = t.recursion<NutritionOrderEnteralFormula>(
  "NutritionOrderEnteralFormula",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Type of enteral or infant formula */
        baseFormulaType: CodeableConcept,
        /** Product or brand name of the enteral or infant formula */
        baseFormulaProductName: primitives.R4.string,
        /** Extension of baseFormulaProductName element */
        _baseFormulaProductName: Element,
        /** Type of modular component to add to the feeding */
        additiveType: CodeableConcept,
        /** Product or brand name of the modular additive */
        additiveProductName: primitives.R4.string,
        /** Extension of additiveProductName element */
        _additiveProductName: Element,
        /** Amount of energy per specified volume that is required */
        caloricDensity: Quantity,
        /** How the formula should enter the patient's gastrointestinal tract */
        routeofAdministration: CodeableConcept,
        /** Upper limit on formula volume per unit of time */
        maxVolumeToDeliver: Quantity,
        /** Formula feeding instructions expressed as text */
        administrationInstruction: primitives.R4.string,
        /** Extension of administrationInstruction element */
        _administrationInstruction: Element
      })
    ])
);

/**
 * Formula feeding instruction as structured data
 */
export interface NutritionOrderEnteralFormulaAdministration {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Scheduled frequency of enteral feeding */
  schedule?: Timing;
  /** The volume of formula to provide */
  quantity?: Quantity;
  /** Speed with which the formula is provided per period of time */
  rateQuantity?: Quantity;
  /** Speed with which the formula is provided per period of time */
  rateRatio?: Ratio;
}
/**
 * Formula feeding instruction as structured data
 */
export const NutritionOrderEnteralFormulaAdministration: t.Type<
  NutritionOrderEnteralFormulaAdministration
> = t.recursion<NutritionOrderEnteralFormulaAdministration>(
  "NutritionOrderEnteralFormulaAdministration",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Scheduled frequency of enteral feeding */
        schedule: Timing,
        /** The volume of formula to provide */
        quantity: Quantity,
        /** Speed with which the formula is provided per period of time */
        rateQuantity: Quantity,
        /** Speed with which the formula is provided per period of time */
        rateRatio: Ratio
      })
    ])
);
