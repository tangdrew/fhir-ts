/**
 * MedicinalProductIngredient Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * An ingredient of a manufactured item or pharmaceutical product
 */
export interface MedicinalProductIngredient {
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
  /** Identifier for the ingredient */
  identifier?: Identifier;
  /** Ingredient role e.g. Active ingredient, excipient */
  role: CodeableConcept;
  /** If the ingredient is a known or suspected allergen */
  allergenicIndicator?: boolean;
  /** Extension of allergenicIndicator element */
  _allergenicIndicator?: Element;
  /** Manufacturer of this Ingredient */
  manufacturer?: Reference[];
}
/**
 * An ingredient of a manufactured item or pharmaceutical product
 */
export const MedicinalProductIngredient: t.Type<
  MedicinalProductIngredient
> = t.recursion<MedicinalProductIngredient>("MedicinalProductIngredient", () =>
  t.intersection([
    t.type({
      /** Ingredient role e.g. Active ingredient, excipient */
      role: CodeableConcept
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
      /** Identifier for the ingredient */
      identifier: Identifier,
      /** If the ingredient is a known or suspected allergen */
      allergenicIndicator: primitives.R4.boolean,
      /** Extension of allergenicIndicator element */
      _allergenicIndicator: Element,
      /** Manufacturer of this Ingredient */
      manufacturer: t.array(Reference)
    })
  ])
);

/**
 * A specified substance that comprises this ingredient
 */
export interface MedicinalProductIngredientSpecifiedSubstance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The specified substance */
  code: CodeableConcept;
  /** The group of specified substance, e.g. group 1 to 4 */
  group: CodeableConcept;
  /** Confidentiality level of the specified substance as the ingredient */
  confidentiality?: CodeableConcept;
}
/**
 * A specified substance that comprises this ingredient
 */
export const MedicinalProductIngredientSpecifiedSubstance: t.Type<
  MedicinalProductIngredientSpecifiedSubstance
> = t.recursion<MedicinalProductIngredientSpecifiedSubstance>(
  "MedicinalProductIngredientSpecifiedSubstance",
  () =>
    t.intersection([
      t.type({
        /** The specified substance */
        code: CodeableConcept,
        /** The group of specified substance, e.g. group 1 to 4 */
        group: CodeableConcept
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
        /** Confidentiality level of the specified substance as the ingredient */
        confidentiality: CodeableConcept
      })
    ])
);

/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrength {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item */
  presentation: Ratio;
  /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit */
  presentationLowLimit?: Ratio;
  /** The strength per unitary volume (or mass) */
  concentration?: Ratio;
  /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit */
  concentrationLowLimit?: Ratio;
  /** For when strength is measured at a particular point or distance */
  measurementPoint?: string;
  /** Extension of measurementPoint element */
  _measurementPoint?: Element;
  /** The country or countries for which the strength range applies */
  country?: CodeableConcept[];
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 */
export const MedicinalProductIngredientSpecifiedSubstanceStrength: t.Type<
  MedicinalProductIngredientSpecifiedSubstanceStrength
> = t.recursion<MedicinalProductIngredientSpecifiedSubstanceStrength>(
  "MedicinalProductIngredientSpecifiedSubstanceStrength",
  () =>
    t.intersection([
      t.type({
        /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item */
        presentation: Ratio
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
        /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit */
        presentationLowLimit: Ratio,
        /** The strength per unitary volume (or mass) */
        concentration: Ratio,
        /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit */
        concentrationLowLimit: Ratio,
        /** For when strength is measured at a particular point or distance */
        measurementPoint: primitives.R4.string,
        /** Extension of measurementPoint element */
        _measurementPoint: Element,
        /** The country or countries for which the strength range applies */
        country: t.array(CodeableConcept)
      })
    ])
);

/**
 * Strength expressed in terms of a reference substance
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Relevant reference substance */
  substance?: CodeableConcept;
  /** Strength expressed in terms of a reference substance */
  strength: Ratio;
  /** Strength expressed in terms of a reference substance */
  strengthLowLimit?: Ratio;
  /** For when strength is measured at a particular point or distance */
  measurementPoint?: string;
  /** Extension of measurementPoint element */
  _measurementPoint?: Element;
  /** The country or countries for which the strength range applies */
  country?: CodeableConcept[];
}
/**
 * Strength expressed in terms of a reference substance
 */
export const MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength: t.Type<
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
> = t.recursion<
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
>("MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength", () =>
  t.intersection([
    t.type({
      /** Strength expressed in terms of a reference substance */
      strength: Ratio
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
      /** Relevant reference substance */
      substance: CodeableConcept,
      /** Strength expressed in terms of a reference substance */
      strengthLowLimit: Ratio,
      /** For when strength is measured at a particular point or distance */
      measurementPoint: primitives.R4.string,
      /** Extension of measurementPoint element */
      _measurementPoint: Element,
      /** The country or countries for which the strength range applies */
      country: t.array(CodeableConcept)
    })
  ])
);

/**
 * The ingredient substance
 */
export interface MedicinalProductIngredientSubstance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The ingredient substance */
  code: CodeableConcept;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}
/**
 * The ingredient substance
 */
export const MedicinalProductIngredientSubstance: t.Type<
  MedicinalProductIngredientSubstance
> = t.recursion<MedicinalProductIngredientSubstance>(
  "MedicinalProductIngredientSubstance",
  () =>
    t.intersection([
      t.type({
        /** The ingredient substance */
        code: CodeableConcept
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
        /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
        strength: t.array(MedicinalProductIngredientSpecifiedSubstanceStrength)
      })
    ])
);
