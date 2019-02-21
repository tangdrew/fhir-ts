/**
 * MedicinalProductIngredient Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The ingredient substance
 */
export interface MedicinalProductIngredientSubstance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The ingredient substance */
  code: CodeableConcept;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}

export interface MedicinalProductIngredientSubstanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The ingredient substance */
  code: CodeableConceptOutputType;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrengthOutputType[];
}

export const MedicinalProductIngredientSubstance: t.RecursiveType<
  t.Type<
    MedicinalProductIngredientSubstance,
    MedicinalProductIngredientSubstanceOutputType
  >,
  MedicinalProductIngredientSubstance,
  MedicinalProductIngredientSubstanceOutputType
> = t.recursion<
  MedicinalProductIngredientSubstance,
  MedicinalProductIngredientSubstanceOutputType
>("MedicinalProductIngredientSubstance", () =>
  t.intersection(
    [
      t.type({
        /** The ingredient substance */
        code: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
        strength: t.array(MedicinalProductIngredientSpecifiedSubstanceStrength)
      })
    ],
    "MedicinalProductIngredientSubstance"
  )
);

/**
 * Strength expressed in terms of a reference substance
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  measurementPoint?: t.TypeOf<primitives.R4.StringType>;
  /** The country or countries for which the strength range applies */
  country?: CodeableConcept[];
}

export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Relevant reference substance */
  substance?: CodeableConceptOutputType;
  /** Strength expressed in terms of a reference substance */
  strength: RatioOutputType;
  /** Strength expressed in terms of a reference substance */
  strengthLowLimit?: RatioOutputType;
  /** For when strength is measured at a particular point or distance */
  measurementPoint?: t.OutputOf<primitives.R4.StringType>;
  /** The country or countries for which the strength range applies */
  country?: CodeableConceptOutputType[];
}

export const MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength: t.RecursiveType<
  t.Type<
    MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
    MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthOutputType
  >,
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthOutputType
> = t.recursion<
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength,
  MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthOutputType
>("MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength", () =>
  t.intersection(
    [
      t.type({
        /** Strength expressed in terms of a reference substance */
        strength: Ratio
      }),
      t.partial({
        /** The country or countries for which the strength range applies */
        country: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** For when strength is measured at a particular point or distance */
        measurementPoint: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Strength expressed in terms of a reference substance */
        strengthLowLimit: Ratio,
        /** Relevant reference substance */
        substance: CodeableConcept
      })
    ],
    "MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength"
  )
);

/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrength {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  measurementPoint?: t.TypeOf<primitives.R4.StringType>;
  /** The country or countries for which the strength range applies */
  country?: CodeableConcept[];
  /** Strength expressed in terms of a reference substance */
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];
}

export interface MedicinalProductIngredientSpecifiedSubstanceStrengthOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item */
  presentation: RatioOutputType;
  /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit */
  presentationLowLimit?: RatioOutputType;
  /** The strength per unitary volume (or mass) */
  concentration?: RatioOutputType;
  /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit */
  concentrationLowLimit?: RatioOutputType;
  /** For when strength is measured at a particular point or distance */
  measurementPoint?: t.OutputOf<primitives.R4.StringType>;
  /** The country or countries for which the strength range applies */
  country?: CodeableConceptOutputType[];
  /** Strength expressed in terms of a reference substance */
  referenceStrength?: MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthOutputType[];
}

export const MedicinalProductIngredientSpecifiedSubstanceStrength: t.RecursiveType<
  t.Type<
    MedicinalProductIngredientSpecifiedSubstanceStrength,
    MedicinalProductIngredientSpecifiedSubstanceStrengthOutputType
  >,
  MedicinalProductIngredientSpecifiedSubstanceStrength,
  MedicinalProductIngredientSpecifiedSubstanceStrengthOutputType
> = t.recursion<
  MedicinalProductIngredientSpecifiedSubstanceStrength,
  MedicinalProductIngredientSpecifiedSubstanceStrengthOutputType
>("MedicinalProductIngredientSpecifiedSubstanceStrength", () =>
  t.intersection(
    [
      t.type({
        /** The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item */
        presentation: Ratio
      }),
      t.partial({
        /** The strength per unitary volume (or mass) */
        concentration: Ratio,
        /** A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit */
        concentrationLowLimit: Ratio,
        /** The country or countries for which the strength range applies */
        country: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** For when strength is measured at a particular point or distance */
        measurementPoint: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit */
        presentationLowLimit: Ratio,
        /** Strength expressed in terms of a reference substance */
        referenceStrength: t.array(
          MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength
        )
      })
    ],
    "MedicinalProductIngredientSpecifiedSubstanceStrength"
  )
);

/**
 * A specified substance that comprises this ingredient
 */
export interface MedicinalProductIngredientSpecifiedSubstance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrength[];
}

export interface MedicinalProductIngredientSpecifiedSubstanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The specified substance */
  code: CodeableConceptOutputType;
  /** The group of specified substance, e.g. group 1 to 4 */
  group: CodeableConceptOutputType;
  /** Confidentiality level of the specified substance as the ingredient */
  confidentiality?: CodeableConceptOutputType;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
  strength?: MedicinalProductIngredientSpecifiedSubstanceStrengthOutputType[];
}

export const MedicinalProductIngredientSpecifiedSubstance: t.RecursiveType<
  t.Type<
    MedicinalProductIngredientSpecifiedSubstance,
    MedicinalProductIngredientSpecifiedSubstanceOutputType
  >,
  MedicinalProductIngredientSpecifiedSubstance,
  MedicinalProductIngredientSpecifiedSubstanceOutputType
> = t.recursion<
  MedicinalProductIngredientSpecifiedSubstance,
  MedicinalProductIngredientSpecifiedSubstanceOutputType
>("MedicinalProductIngredientSpecifiedSubstance", () =>
  t.intersection(
    [
      t.type({
        /** The specified substance */
        code: CodeableConcept,
        /** The group of specified substance, e.g. group 1 to 4 */
        group: CodeableConcept
      }),
      t.partial({
        /** Confidentiality level of the specified substance as the ingredient */
        confidentiality: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product */
        strength: t.array(MedicinalProductIngredientSpecifiedSubstanceStrength)
      })
    ],
    "MedicinalProductIngredientSpecifiedSubstance"
  )
);

/**
 * An ingredient of a manufactured item or pharmaceutical product
 */
export interface MedicinalProductIngredient {
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
  /** Identifier for the ingredient */
  identifier?: Identifier;
  /** Ingredient role e.g. Active ingredient, excipient */
  role: CodeableConcept;
  /** If the ingredient is a known or suspected allergen */
  allergenicIndicator?: t.TypeOf<primitives.R4.BooleanType>;
  /** Manufacturer of this Ingredient */
  manufacturer?: Reference[];
  /** A specified substance that comprises this ingredient */
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstance[];
  /** The ingredient substance */
  substance?: MedicinalProductIngredientSubstance;
}

export interface MedicinalProductIngredientOutputType {
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
  /** Identifier for the ingredient */
  identifier?: IdentifierOutputType;
  /** Ingredient role e.g. Active ingredient, excipient */
  role: CodeableConceptOutputType;
  /** If the ingredient is a known or suspected allergen */
  allergenicIndicator?: t.OutputOf<primitives.R4.BooleanType>;
  /** Manufacturer of this Ingredient */
  manufacturer?: ReferenceOutputType[];
  /** A specified substance that comprises this ingredient */
  specifiedSubstance?: MedicinalProductIngredientSpecifiedSubstanceOutputType[];
  /** The ingredient substance */
  substance?: MedicinalProductIngredientSubstanceOutputType;
}

export const MedicinalProductIngredient: t.RecursiveType<
  t.Type<MedicinalProductIngredient, MedicinalProductIngredientOutputType>,
  MedicinalProductIngredient,
  MedicinalProductIngredientOutputType
> = t.recursion<
  MedicinalProductIngredient,
  MedicinalProductIngredientOutputType
>("MedicinalProductIngredient", () =>
  t.intersection(
    [
      t.type({
        /** Ingredient role e.g. Active ingredient, excipient */
        role: CodeableConcept
      }),
      t.partial({
        /** If the ingredient is a known or suspected allergen */
        allergenicIndicator: primitives.R4.boolean,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifier for the ingredient */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Manufacturer of this Ingredient */
        manufacturer: t.array(Reference),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** A specified substance that comprises this ingredient */
        specifiedSubstance: t.array(
          MedicinalProductIngredientSpecifiedSubstance
        ),
        /** The ingredient substance */
        substance: MedicinalProductIngredientSubstance,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "MedicinalProductIngredient"
  )
);
