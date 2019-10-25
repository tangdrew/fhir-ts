/**
 * SubstanceAmount Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";
import { Range } from "./Range";

/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID
 */
export interface SubstanceAmount {
  /** The type of resource */
  resourceType?: "SubstanceAmount";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amountQuantity?: Quantity;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amountRange?: Range;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amountString?: string;
  /** Extension of amountString element */
  _amountString?: Element;
  /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
  amountType?: CodeableConcept;
  /** A textual comment on a numeric value */
  amountText?: string;
  /** Extension of amountText element */
  _amountText?: Element;
  /** Reference range of possible or expected values */
  referenceRange?: Element;
}
/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID
 */
export const SubstanceAmount: t.Type<SubstanceAmount> = t.recursion<
  SubstanceAmount
>("SubstanceAmount", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("SubstanceAmount"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
      amountQuantity: Quantity,
      /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
      amountRange: Range,
      /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
      amountString: primitives.R4.string,
      /** Extension of amountString element */
      _amountString: Element,
      /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
      amountType: CodeableConcept,
      /** A textual comment on a numeric value */
      amountText: primitives.R4.string,
      /** Extension of amountText element */
      _amountText: Element,
      /** Reference range of possible or expected values */
      referenceRange: Element
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface SubstanceAmountReferenceRange {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Lower limit possible or expected */
  lowLimit?: Quantity;
  /** Upper limit possible or expected */
  highLimit?: Quantity;
}
/**
 * Unique id for inter-element referencing
 */
export const SubstanceAmountReferenceRange: t.Type<
  SubstanceAmountReferenceRange
> = t.recursion<SubstanceAmountReferenceRange>(
  "SubstanceAmountReferenceRange",
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
        /** Lower limit possible or expected */
        lowLimit: Quantity,
        /** Upper limit possible or expected */
        highLimit: Quantity
      })
    ])
);
