/**
 * ClaimResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Adjudication totals
 */
export interface ClaimResponseTotal {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of adjudication information */
  category: CodeableConcept;
  /** Financial total for the category */
  amount: Money;
}

export interface ClaimResponseTotalOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of adjudication information */
  category: CodeableConceptOutputType;
  /** Financial total for the category */
  amount: MoneyOutputType;
}

export const ClaimResponseTotal: t.RecursiveType<
  t.Type<ClaimResponseTotal, ClaimResponseTotalOutputType>,
  ClaimResponseTotal,
  ClaimResponseTotalOutputType
> = t.recursion<ClaimResponseTotal, ClaimResponseTotalOutputType>(
  "ClaimResponseTotal",
  () =>
    t.intersection(
      [
        t.type({
          /** Financial total for the category */
          amount: Money,
          /** Type of adjudication information */
          category: CodeableConcept
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
      "ClaimResponseTotal"
    )
);

/**
 * Note concerning adjudication
 */
export interface ClaimResponseProcessNote {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Note instance identifier */
  number?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** display | print | printoper */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** Note explanatory text */
  text: t.TypeOf<primitives.R4.StringType>;
  /** Language of the text */
  language?: CodeableConcept;
}

export interface ClaimResponseProcessNoteOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Note instance identifier */
  number?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** display | print | printoper */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** Note explanatory text */
  text: t.OutputOf<primitives.R4.StringType>;
  /** Language of the text */
  language?: CodeableConceptOutputType;
}

export const ClaimResponseProcessNote: t.RecursiveType<
  t.Type<ClaimResponseProcessNote, ClaimResponseProcessNoteOutputType>,
  ClaimResponseProcessNote,
  ClaimResponseProcessNoteOutputType
> = t.recursion<ClaimResponseProcessNote, ClaimResponseProcessNoteOutputType>(
  "ClaimResponseProcessNote",
  () =>
    t.intersection(
      [
        t.type({
          /** Note explanatory text */
          text: primitives.R4.string
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Language of the text */
          language: CodeableConcept,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Note instance identifier */
          number: primitives.R4.positiveInt,
          /** display | print | printoper */
          type: primitives.R4.code
        })
      ],
      "ClaimResponseProcessNote"
    )
);

/**
 * Payment Details
 */
export interface ClaimResponsePayment {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Partial or complete payment */
  type: CodeableConcept;
  /** Payment adjustment for non-claim issues */
  adjustment?: Money;
  /** Explanation for the adjustment */
  adjustmentReason?: CodeableConcept;
  /** Expected date of payment */
  date?: t.TypeOf<primitives.R4.DateType>;
  /** Payable amount after adjustment */
  amount: Money;
  /** Business identifier for the payment */
  identifier?: Identifier;
}

export interface ClaimResponsePaymentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Partial or complete payment */
  type: CodeableConceptOutputType;
  /** Payment adjustment for non-claim issues */
  adjustment?: MoneyOutputType;
  /** Explanation for the adjustment */
  adjustmentReason?: CodeableConceptOutputType;
  /** Expected date of payment */
  date?: t.OutputOf<primitives.R4.DateType>;
  /** Payable amount after adjustment */
  amount: MoneyOutputType;
  /** Business identifier for the payment */
  identifier?: IdentifierOutputType;
}

export const ClaimResponsePayment: t.RecursiveType<
  t.Type<ClaimResponsePayment, ClaimResponsePaymentOutputType>,
  ClaimResponsePayment,
  ClaimResponsePaymentOutputType
> = t.recursion<ClaimResponsePayment, ClaimResponsePaymentOutputType>(
  "ClaimResponsePayment",
  () =>
    t.intersection(
      [
        t.type({
          /** Payable amount after adjustment */
          amount: Money,
          /** Partial or complete payment */
          type: CodeableConcept
        }),
        t.partial({
          /** Payment adjustment for non-claim issues */
          adjustment: Money,
          /** Explanation for the adjustment */
          adjustmentReason: CodeableConcept,
          /** Expected date of payment */
          date: primitives.R4.date,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Business identifier for the payment */
          identifier: Identifier,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ClaimResponsePayment"
    )
);

/**
 * Adjudication for claim sub-details
 */
export interface ClaimResponseItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Claim sub-detail instance identifier */
  subDetailSequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Subdetail level adjudication details */
  adjudication?: ClaimResponseItemAdjudication[];
}

export interface ClaimResponseItemDetailSubDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Claim sub-detail instance identifier */
  subDetailSequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Subdetail level adjudication details */
  adjudication?: ClaimResponseItemAdjudicationOutputType[];
}

export const ClaimResponseItemDetailSubDetail: t.RecursiveType<
  t.Type<
    ClaimResponseItemDetailSubDetail,
    ClaimResponseItemDetailSubDetailOutputType
  >,
  ClaimResponseItemDetailSubDetail,
  ClaimResponseItemDetailSubDetailOutputType
> = t.recursion<
  ClaimResponseItemDetailSubDetail,
  ClaimResponseItemDetailSubDetailOutputType
>("ClaimResponseItemDetailSubDetail", () =>
  t.intersection(
    [
      t.type({
        /** Claim sub-detail instance identifier */
        subDetailSequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Subdetail level adjudication details */
        adjudication: t.array(ClaimResponseItemAdjudication),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt)
      })
    ],
    "ClaimResponseItemDetailSubDetail"
  )
);

/**
 * Adjudication for claim details
 */
export interface ClaimResponseItemDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Claim detail instance identifier */
  detailSequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Detail level adjudication details */
  adjudication: ClaimResponseItemAdjudication[];
  /** Adjudication for claim sub-details */
  subDetail?: ClaimResponseItemDetailSubDetail[];
}

export interface ClaimResponseItemDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Claim detail instance identifier */
  detailSequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Detail level adjudication details */
  adjudication: ClaimResponseItemAdjudicationOutputType[];
  /** Adjudication for claim sub-details */
  subDetail?: ClaimResponseItemDetailSubDetailOutputType[];
}

export const ClaimResponseItemDetail: t.RecursiveType<
  t.Type<ClaimResponseItemDetail, ClaimResponseItemDetailOutputType>,
  ClaimResponseItemDetail,
  ClaimResponseItemDetailOutputType
> = t.recursion<ClaimResponseItemDetail, ClaimResponseItemDetailOutputType>(
  "ClaimResponseItemDetail",
  () =>
    t.intersection(
      [
        t.type({
          /** Detail level adjudication details */
          adjudication: t.array(ClaimResponseItemAdjudication),
          /** Claim detail instance identifier */
          detailSequence: primitives.R4.positiveInt
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Applicable note numbers */
          noteNumber: t.array(primitives.R4.positiveInt),
          /** Adjudication for claim sub-details */
          subDetail: t.array(ClaimResponseItemDetailSubDetail)
        })
      ],
      "ClaimResponseItemDetail"
    )
);

/**
 * Adjudication details
 */
export interface ClaimResponseItemAdjudication {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of adjudication information */
  category: CodeableConcept;
  /** Explanation of adjudication outcome */
  reason?: CodeableConcept;
  /** Monetary amount */
  amount?: Money;
  /** Non-monetary value */
  value?: t.TypeOf<primitives.R4.DecimalType>;
}

export interface ClaimResponseItemAdjudicationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of adjudication information */
  category: CodeableConceptOutputType;
  /** Explanation of adjudication outcome */
  reason?: CodeableConceptOutputType;
  /** Monetary amount */
  amount?: MoneyOutputType;
  /** Non-monetary value */
  value?: t.OutputOf<primitives.R4.DecimalType>;
}

export const ClaimResponseItemAdjudication: t.RecursiveType<
  t.Type<
    ClaimResponseItemAdjudication,
    ClaimResponseItemAdjudicationOutputType
  >,
  ClaimResponseItemAdjudication,
  ClaimResponseItemAdjudicationOutputType
> = t.recursion<
  ClaimResponseItemAdjudication,
  ClaimResponseItemAdjudicationOutputType
>("ClaimResponseItemAdjudication", () =>
  t.intersection(
    [
      t.type({
        /** Type of adjudication information */
        category: CodeableConcept
      }),
      t.partial({
        /** Monetary amount */
        amount: Money,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Explanation of adjudication outcome */
        reason: CodeableConcept,
        /** Non-monetary value */
        value: primitives.R4.decimal
      })
    ],
    "ClaimResponseItemAdjudication"
  )
);

/**
 * Adjudication for claim line items
 */
export interface ClaimResponseItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Claim item instance identifier */
  itemSequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Adjudication details */
  adjudication: ClaimResponseItemAdjudication[];
  /** Adjudication for claim details */
  detail?: ClaimResponseItemDetail[];
}

export interface ClaimResponseItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Claim item instance identifier */
  itemSequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Adjudication details */
  adjudication: ClaimResponseItemAdjudicationOutputType[];
  /** Adjudication for claim details */
  detail?: ClaimResponseItemDetailOutputType[];
}

export const ClaimResponseItem: t.RecursiveType<
  t.Type<ClaimResponseItem, ClaimResponseItemOutputType>,
  ClaimResponseItem,
  ClaimResponseItemOutputType
> = t.recursion<ClaimResponseItem, ClaimResponseItemOutputType>(
  "ClaimResponseItem",
  () =>
    t.intersection(
      [
        t.type({
          /** Adjudication details */
          adjudication: t.array(ClaimResponseItemAdjudication),
          /** Claim item instance identifier */
          itemSequence: primitives.R4.positiveInt
        }),
        t.partial({
          /** Adjudication for claim details */
          detail: t.array(ClaimResponseItemDetail),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Applicable note numbers */
          noteNumber: t.array(primitives.R4.positiveInt)
        })
      ],
      "ClaimResponseItem"
    )
);

/**
 * Patient insurance information
 */
export interface ClaimResponseInsurance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Insurance instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Coverage to be used for adjudication */
  focal: t.TypeOf<primitives.R4.BooleanType>;
  /** Insurance information */
  coverage: Reference;
  /** Additional provider contract number */
  businessArrangement?: t.TypeOf<primitives.R4.StringType>;
  /** Adjudication results */
  claimResponse?: Reference;
}

export interface ClaimResponseInsuranceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Insurance instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Coverage to be used for adjudication */
  focal: t.OutputOf<primitives.R4.BooleanType>;
  /** Insurance information */
  coverage: ReferenceOutputType;
  /** Additional provider contract number */
  businessArrangement?: t.OutputOf<primitives.R4.StringType>;
  /** Adjudication results */
  claimResponse?: ReferenceOutputType;
}

export const ClaimResponseInsurance: t.RecursiveType<
  t.Type<ClaimResponseInsurance, ClaimResponseInsuranceOutputType>,
  ClaimResponseInsurance,
  ClaimResponseInsuranceOutputType
> = t.recursion<ClaimResponseInsurance, ClaimResponseInsuranceOutputType>(
  "ClaimResponseInsurance",
  () =>
    t.intersection(
      [
        t.type({
          /** Insurance information */
          coverage: Reference,
          /** Coverage to be used for adjudication */
          focal: primitives.R4.boolean,
          /** Insurance instance identifier */
          sequence: primitives.R4.positiveInt
        }),
        t.partial({
          /** Additional provider contract number */
          businessArrangement: primitives.R4.string,
          /** Adjudication results */
          claimResponse: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ClaimResponseInsurance"
    )
);

/**
 * Processing errors
 */
export interface ClaimResponseError {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item sequence number */
  itemSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Detail sequence number */
  detailSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Subdetail sequence number */
  subDetailSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Error code detailing processing issues */
  code: CodeableConcept;
}

export interface ClaimResponseErrorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item sequence number */
  itemSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Detail sequence number */
  detailSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Subdetail sequence number */
  subDetailSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Error code detailing processing issues */
  code: CodeableConceptOutputType;
}

export const ClaimResponseError: t.RecursiveType<
  t.Type<ClaimResponseError, ClaimResponseErrorOutputType>,
  ClaimResponseError,
  ClaimResponseErrorOutputType
> = t.recursion<ClaimResponseError, ClaimResponseErrorOutputType>(
  "ClaimResponseError",
  () =>
    t.intersection(
      [
        t.type({
          /** Error code detailing processing issues */
          code: CodeableConcept
        }),
        t.partial({
          /** Detail sequence number */
          detailSequence: primitives.R4.positiveInt,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Item sequence number */
          itemSequence: primitives.R4.positiveInt,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Subdetail sequence number */
          subDetailSequence: primitives.R4.positiveInt
        })
      ],
      "ClaimResponseError"
    )
);

/**
 * Insurer added line items
 */
export interface ClaimResponseAddItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: Money;
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Added items detail adjudication */
  adjudication: ClaimResponseItemAdjudication[];
}

export interface ClaimResponseAddItemDetailSubDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConceptOutputType;
  /** Service/Product billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Count of products or services */
  quantity?: QuantityOutputType;
  /** Fee, charge or cost per item */
  unitPrice?: MoneyOutputType;
  /** Price scaling factor */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: MoneyOutputType;
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Added items detail adjudication */
  adjudication: ClaimResponseItemAdjudicationOutputType[];
}

export const ClaimResponseAddItemDetailSubDetail: t.RecursiveType<
  t.Type<
    ClaimResponseAddItemDetailSubDetail,
    ClaimResponseAddItemDetailSubDetailOutputType
  >,
  ClaimResponseAddItemDetailSubDetail,
  ClaimResponseAddItemDetailSubDetailOutputType
> = t.recursion<
  ClaimResponseAddItemDetailSubDetail,
  ClaimResponseAddItemDetailSubDetailOutputType
>("ClaimResponseAddItemDetailSubDetail", () =>
  t.intersection(
    [
      t.type({
        /** Added items detail adjudication */
        adjudication: t.array(ClaimResponseItemAdjudication),
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Price scaling factor */
        factor: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Service/Product billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Total item cost */
        net: Money,
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt),
        /** Count of products or services */
        quantity: Quantity,
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "ClaimResponseAddItemDetailSubDetail"
  )
);

/**
 * Insurer added line details
 */
export interface ClaimResponseAddItemDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: Money;
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Added items detail adjudication */
  adjudication: ClaimResponseItemAdjudication[];
  /** Insurer added line items */
  subDetail?: ClaimResponseAddItemDetailSubDetail[];
}

export interface ClaimResponseAddItemDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConceptOutputType;
  /** Service/Product billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Count of products or services */
  quantity?: QuantityOutputType;
  /** Fee, charge or cost per item */
  unitPrice?: MoneyOutputType;
  /** Price scaling factor */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: MoneyOutputType;
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Added items detail adjudication */
  adjudication: ClaimResponseItemAdjudicationOutputType[];
  /** Insurer added line items */
  subDetail?: ClaimResponseAddItemDetailSubDetailOutputType[];
}

export const ClaimResponseAddItemDetail: t.RecursiveType<
  t.Type<ClaimResponseAddItemDetail, ClaimResponseAddItemDetailOutputType>,
  ClaimResponseAddItemDetail,
  ClaimResponseAddItemDetailOutputType
> = t.recursion<
  ClaimResponseAddItemDetail,
  ClaimResponseAddItemDetailOutputType
>("ClaimResponseAddItemDetail", () =>
  t.intersection(
    [
      t.type({
        /** Added items detail adjudication */
        adjudication: t.array(ClaimResponseItemAdjudication),
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Price scaling factor */
        factor: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Service/Product billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Total item cost */
        net: Money,
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt),
        /** Count of products or services */
        quantity: Quantity,
        /** Insurer added line items */
        subDetail: t.array(ClaimResponseAddItemDetailSubDetail),
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "ClaimResponseAddItemDetail"
  )
);

/**
 * Insurer added line items
 */
export interface ClaimResponseAddItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item sequence number */
  itemSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Detail sequence number */
  detailSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Subdetail sequence number */
  subdetailSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Authorized providers */
  provider?: Reference[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Program the product or service is provided under */
  programCode?: CodeableConcept[];
  /** Date or dates of service or product delivery */
  serviced?: t.TypeOf<primitives.R4.DateType> | Period;
  /** Place of service or where product was supplied */
  location?: CodeableConcept | Address | Reference;
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: Money;
  /** Anatomical location */
  bodySite?: CodeableConcept;
  /** Anatomical sub-location */
  subSite?: CodeableConcept[];
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Added items adjudication */
  adjudication: ClaimResponseItemAdjudication[];
  /** Insurer added line details */
  detail?: ClaimResponseAddItemDetail[];
}

export interface ClaimResponseAddItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item sequence number */
  itemSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Detail sequence number */
  detailSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Subdetail sequence number */
  subdetailSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Authorized providers */
  provider?: ReferenceOutputType[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConceptOutputType;
  /** Service/Product billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Program the product or service is provided under */
  programCode?: CodeableConceptOutputType[];
  /** Date or dates of service or product delivery */
  serviced?: t.OutputOf<primitives.R4.DateType> | PeriodOutputType;
  /** Place of service or where product was supplied */
  location?:
    | CodeableConceptOutputType
    | AddressOutputType
    | ReferenceOutputType;
  /** Count of products or services */
  quantity?: QuantityOutputType;
  /** Fee, charge or cost per item */
  unitPrice?: MoneyOutputType;
  /** Price scaling factor */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: MoneyOutputType;
  /** Anatomical location */
  bodySite?: CodeableConceptOutputType;
  /** Anatomical sub-location */
  subSite?: CodeableConceptOutputType[];
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Added items adjudication */
  adjudication: ClaimResponseItemAdjudicationOutputType[];
  /** Insurer added line details */
  detail?: ClaimResponseAddItemDetailOutputType[];
}

export const ClaimResponseAddItem: t.RecursiveType<
  t.Type<ClaimResponseAddItem, ClaimResponseAddItemOutputType>,
  ClaimResponseAddItem,
  ClaimResponseAddItemOutputType
> = t.recursion<ClaimResponseAddItem, ClaimResponseAddItemOutputType>(
  "ClaimResponseAddItem",
  () =>
    t.intersection(
      [
        t.type({
          /** Added items adjudication */
          adjudication: t.array(ClaimResponseItemAdjudication),
          /** Billing, service, product, or drug code */
          productOrService: CodeableConcept
        }),
        t.partial({
          /** Anatomical location */
          bodySite: CodeableConcept,
          /** Insurer added line details */
          detail: t.array(ClaimResponseAddItemDetail),
          /** Detail sequence number */
          detailSequence: t.array(primitives.R4.positiveInt),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Price scaling factor */
          factor: primitives.R4.decimal,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Item sequence number */
          itemSequence: t.array(primitives.R4.positiveInt),
          /** Place of service or where product was supplied */
          location: t.union([CodeableConcept, Address, Reference]),
          /** Service/Product billing modifiers */
          modifier: t.array(CodeableConcept),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Total item cost */
          net: Money,
          /** Applicable note numbers */
          noteNumber: t.array(primitives.R4.positiveInt),
          /** Program the product or service is provided under */
          programCode: t.array(CodeableConcept),
          /** Authorized providers */
          provider: t.array(Reference),
          /** Count of products or services */
          quantity: Quantity,
          /** Date or dates of service or product delivery */
          serviced: t.union([primitives.R4.date, Period]),
          /** Anatomical sub-location */
          subSite: t.array(CodeableConcept),
          /** Subdetail sequence number */
          subdetailSequence: t.array(primitives.R4.positiveInt),
          /** Fee, charge or cost per item */
          unitPrice: Money
        })
      ],
      "ClaimResponseAddItem"
    )
);

/**
 * Response to a claim predetermination or preauthorization
 */
export interface ClaimResponse {
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
  /** Business Identifier for a claim response */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** More granular claim type */
  type: CodeableConcept;
  /** More granular claim type */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination */
  use: t.TypeOf<primitives.R4.CodeType>;
  /** The recipient of the products and services */
  patient: Reference;
  /** Response creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Party responsible for reimbursement */
  insurer: Reference;
  /** Party responsible for the claim */
  requestor?: Reference;
  /** Id of resource triggering adjudication */
  request?: Reference;
  /** queued | complete | error | partial */
  outcome: t.TypeOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.TypeOf<primitives.R4.StringType>;
  /** Preauthorization reference */
  preAuthRef?: t.TypeOf<primitives.R4.StringType>;
  /** Preauthorization reference effective period */
  preAuthPeriod?: Period;
  /** Party to be paid any benefits payable */
  payeeType?: CodeableConcept;
  /** Adjudication for claim line items */
  item?: ClaimResponseItem[];
  /** Insurer added line items */
  addItem?: ClaimResponseAddItem[];
  /** Header-level adjudication */
  adjudication?: ClaimResponseItemAdjudication[];
  /** Adjudication totals */
  total?: ClaimResponseTotal[];
  /** Payment Details */
  payment?: ClaimResponsePayment;
  /** Funds reserved status */
  fundsReserve?: CodeableConcept;
  /** Printed form identifier */
  formCode?: CodeableConcept;
  /** Printed reference or actual form */
  form?: Attachment;
  /** Note concerning adjudication */
  processNote?: ClaimResponseProcessNote[];
  /** Request for additional information */
  communicationRequest?: Reference[];
  /** Patient insurance information */
  insurance?: ClaimResponseInsurance[];
  /** Processing errors */
  error?: ClaimResponseError[];
}

export interface ClaimResponseOutputType {
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
  /** Business Identifier for a claim response */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** More granular claim type */
  type: CodeableConceptOutputType;
  /** More granular claim type */
  subType?: CodeableConceptOutputType;
  /** claim | preauthorization | predetermination */
  use: t.OutputOf<primitives.R4.CodeType>;
  /** The recipient of the products and services */
  patient: ReferenceOutputType;
  /** Response creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Party responsible for reimbursement */
  insurer: ReferenceOutputType;
  /** Party responsible for the claim */
  requestor?: ReferenceOutputType;
  /** Id of resource triggering adjudication */
  request?: ReferenceOutputType;
  /** queued | complete | error | partial */
  outcome: t.OutputOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.OutputOf<primitives.R4.StringType>;
  /** Preauthorization reference */
  preAuthRef?: t.OutputOf<primitives.R4.StringType>;
  /** Preauthorization reference effective period */
  preAuthPeriod?: PeriodOutputType;
  /** Party to be paid any benefits payable */
  payeeType?: CodeableConceptOutputType;
  /** Adjudication for claim line items */
  item?: ClaimResponseItemOutputType[];
  /** Insurer added line items */
  addItem?: ClaimResponseAddItemOutputType[];
  /** Header-level adjudication */
  adjudication?: ClaimResponseItemAdjudicationOutputType[];
  /** Adjudication totals */
  total?: ClaimResponseTotalOutputType[];
  /** Payment Details */
  payment?: ClaimResponsePaymentOutputType;
  /** Funds reserved status */
  fundsReserve?: CodeableConceptOutputType;
  /** Printed form identifier */
  formCode?: CodeableConceptOutputType;
  /** Printed reference or actual form */
  form?: AttachmentOutputType;
  /** Note concerning adjudication */
  processNote?: ClaimResponseProcessNoteOutputType[];
  /** Request for additional information */
  communicationRequest?: ReferenceOutputType[];
  /** Patient insurance information */
  insurance?: ClaimResponseInsuranceOutputType[];
  /** Processing errors */
  error?: ClaimResponseErrorOutputType[];
}

export const ClaimResponse: t.RecursiveType<
  t.Type<ClaimResponse, ClaimResponseOutputType>,
  ClaimResponse,
  ClaimResponseOutputType
> = t.recursion<ClaimResponse, ClaimResponseOutputType>("ClaimResponse", () =>
  t.intersection(
    [
      t.type({
        /** Response creation date */
        created: primitives.R4.dateTime,
        /** Party responsible for reimbursement */
        insurer: Reference,
        /** queued | complete | error | partial */
        outcome: primitives.R4.code,
        /** The recipient of the products and services */
        patient: Reference,
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code,
        /** More granular claim type */
        type: CodeableConcept,
        /** claim | preauthorization | predetermination */
        use: primitives.R4.code
      }),
      t.partial({
        /** Insurer added line items */
        addItem: t.array(ClaimResponseAddItem),
        /** Header-level adjudication */
        adjudication: t.array(ClaimResponseItemAdjudication),
        /** Request for additional information */
        communicationRequest: t.array(Reference),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Disposition Message */
        disposition: primitives.R4.string,
        /** Processing errors */
        error: t.array(ClaimResponseError),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Printed reference or actual form */
        form: Attachment,
        /** Printed form identifier */
        formCode: CodeableConcept,
        /** Funds reserved status */
        fundsReserve: CodeableConcept,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for a claim response */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Patient insurance information */
        insurance: t.array(ClaimResponseInsurance),
        /** Adjudication for claim line items */
        item: t.array(ClaimResponseItem),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Party to be paid any benefits payable */
        payeeType: CodeableConcept,
        /** Payment Details */
        payment: ClaimResponsePayment,
        /** Preauthorization reference effective period */
        preAuthPeriod: Period,
        /** Preauthorization reference */
        preAuthRef: primitives.R4.string,
        /** Note concerning adjudication */
        processNote: t.array(ClaimResponseProcessNote),
        /** Id of resource triggering adjudication */
        request: Reference,
        /** Party responsible for the claim */
        requestor: Reference,
        /** More granular claim type */
        subType: CodeableConcept,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Adjudication totals */
        total: t.array(ClaimResponseTotal)
      })
    ],
    "ClaimResponse"
  )
);
