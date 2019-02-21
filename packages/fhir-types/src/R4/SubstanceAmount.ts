/**
 * SubstanceAmount Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";

/**
 * Reference range of possible or expected values
 */
export interface SubstanceAmountReferenceRange {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Lower limit possible or expected */
  lowLimit?: Quantity;
  /** Upper limit possible or expected */
  highLimit?: Quantity;
}

export interface SubstanceAmountReferenceRangeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Lower limit possible or expected */
  lowLimit?: QuantityOutputType;
  /** Upper limit possible or expected */
  highLimit?: QuantityOutputType;
}

export const SubstanceAmountReferenceRange: t.RecursiveType<
  t.Type<
    SubstanceAmountReferenceRange,
    SubstanceAmountReferenceRangeOutputType
  >,
  SubstanceAmountReferenceRange,
  SubstanceAmountReferenceRangeOutputType
> = t.recursion<
  SubstanceAmountReferenceRange,
  SubstanceAmountReferenceRangeOutputType
>("SubstanceAmountReferenceRange", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Upper limit possible or expected */
        highLimit: Quantity,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Lower limit possible or expected */
        lowLimit: Quantity
      })
    ],
    "SubstanceAmountReferenceRange"
  )
);

/**
 * Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID
 */
export interface SubstanceAmount {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amount?: Quantity | Range | t.TypeOf<primitives.R4.StringType>;
  /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
  amountType?: CodeableConcept;
  /** A textual comment on a numeric value */
  amountText?: t.TypeOf<primitives.R4.StringType>;
  /** Reference range of possible or expected values */
  referenceRange?: SubstanceAmountReferenceRange;
}

export interface SubstanceAmountOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amount?:
    | QuantityOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
  amountType?: CodeableConceptOutputType;
  /** A textual comment on a numeric value */
  amountText?: t.OutputOf<primitives.R4.StringType>;
  /** Reference range of possible or expected values */
  referenceRange?: SubstanceAmountReferenceRangeOutputType;
}

export const SubstanceAmount: t.RecursiveType<
  t.Type<SubstanceAmount, SubstanceAmountOutputType>,
  SubstanceAmount,
  SubstanceAmountOutputType
> = t.recursion<SubstanceAmount, SubstanceAmountOutputType>(
  "SubstanceAmount",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
          amount: t.union([Quantity, Range, primitives.R4.string]),
          /** A textual comment on a numeric value */
          amountText: primitives.R4.string,
          /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
          amountType: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Reference range of possible or expected values */
          referenceRange: SubstanceAmountReferenceRange
        })
      ],
      "SubstanceAmount"
    )
);
