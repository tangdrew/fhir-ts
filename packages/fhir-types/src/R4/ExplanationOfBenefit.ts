/**
 * ExplanationOfBenefit Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
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
export interface ExplanationOfBenefitTotal {
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

export interface ExplanationOfBenefitTotalOutputType {
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

export const ExplanationOfBenefitTotal: t.RecursiveType<
  t.Type<ExplanationOfBenefitTotal, ExplanationOfBenefitTotalOutputType>,
  ExplanationOfBenefitTotal,
  ExplanationOfBenefitTotalOutputType
> = t.recursion<ExplanationOfBenefitTotal, ExplanationOfBenefitTotalOutputType>(
  "ExplanationOfBenefitTotal",
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
      "ExplanationOfBenefitTotal"
    )
);

/**
 * Supporting information
 */
export interface ExplanationOfBenefitSupportingInfo {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Information instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Classification of the supplied information */
  category: CodeableConcept;
  /** Type of information */
  code?: CodeableConcept;
  /** When it occurred */
  timing?: t.TypeOf<primitives.R4.DateType> | Period;
  /** Data to be provided */
  value?:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.StringType>
    | Quantity
    | Attachment
    | Reference;
  /** Explanation for the information */
  reason?: Coding;
}

export interface ExplanationOfBenefitSupportingInfoOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Information instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Classification of the supplied information */
  category: CodeableConceptOutputType;
  /** Type of information */
  code?: CodeableConceptOutputType;
  /** When it occurred */
  timing?: t.OutputOf<primitives.R4.DateType> | PeriodOutputType;
  /** Data to be provided */
  value?:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.StringType>
    | QuantityOutputType
    | AttachmentOutputType
    | ReferenceOutputType;
  /** Explanation for the information */
  reason?: CodingOutputType;
}

export const ExplanationOfBenefitSupportingInfo: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitSupportingInfo,
    ExplanationOfBenefitSupportingInfoOutputType
  >,
  ExplanationOfBenefitSupportingInfo,
  ExplanationOfBenefitSupportingInfoOutputType
> = t.recursion<
  ExplanationOfBenefitSupportingInfo,
  ExplanationOfBenefitSupportingInfoOutputType
>("ExplanationOfBenefitSupportingInfo", () =>
  t.intersection(
    [
      t.type({
        /** Classification of the supplied information */
        category: CodeableConcept,
        /** Information instance identifier */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Type of information */
        code: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Explanation for the information */
        reason: Coding,
        /** When it occurred */
        timing: t.union([primitives.R4.date, Period]),
        /** Data to be provided */
        value: t.union([
          primitives.R4.boolean,
          primitives.R4.string,
          Quantity,
          Attachment,
          Reference
        ])
      })
    ],
    "ExplanationOfBenefitSupportingInfo"
  )
);

/**
 * Prior or corollary claims
 */
export interface ExplanationOfBenefitRelated {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the related claim */
  claim?: Reference;
  /** How the reference claim is related */
  relationship?: CodeableConcept;
  /** File or case reference */
  reference?: Identifier;
}

export interface ExplanationOfBenefitRelatedOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to the related claim */
  claim?: ReferenceOutputType;
  /** How the reference claim is related */
  relationship?: CodeableConceptOutputType;
  /** File or case reference */
  reference?: IdentifierOutputType;
}

export const ExplanationOfBenefitRelated: t.RecursiveType<
  t.Type<ExplanationOfBenefitRelated, ExplanationOfBenefitRelatedOutputType>,
  ExplanationOfBenefitRelated,
  ExplanationOfBenefitRelatedOutputType
> = t.recursion<
  ExplanationOfBenefitRelated,
  ExplanationOfBenefitRelatedOutputType
>("ExplanationOfBenefitRelated", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Reference to the related claim */
        claim: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** File or case reference */
        reference: Identifier,
        /** How the reference claim is related */
        relationship: CodeableConcept
      })
    ],
    "ExplanationOfBenefitRelated"
  )
);

/**
 * Note concerning adjudication
 */
export interface ExplanationOfBenefitProcessNote {
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
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Language of the text */
  language?: CodeableConcept;
}

export interface ExplanationOfBenefitProcessNoteOutputType {
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
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Language of the text */
  language?: CodeableConceptOutputType;
}

export const ExplanationOfBenefitProcessNote: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitProcessNote,
    ExplanationOfBenefitProcessNoteOutputType
  >,
  ExplanationOfBenefitProcessNote,
  ExplanationOfBenefitProcessNoteOutputType
> = t.recursion<
  ExplanationOfBenefitProcessNote,
  ExplanationOfBenefitProcessNoteOutputType
>("ExplanationOfBenefitProcessNote", () =>
  t.intersection(
    [
      t.type({}),
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
        /** Note explanatory text */
        text: primitives.R4.string,
        /** display | print | printoper */
        type: primitives.R4.code
      })
    ],
    "ExplanationOfBenefitProcessNote"
  )
);

/**
 * Clinical procedures performed
 */
export interface ExplanationOfBenefitProcedure {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Procedure instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Category of Procedure */
  type?: CodeableConcept[];
  /** When the procedure was performed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Specific clinical procedure */
  procedure: CodeableConcept | Reference;
  /** Unique device identifier */
  udi?: Reference[];
}

export interface ExplanationOfBenefitProcedureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Procedure instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Category of Procedure */
  type?: CodeableConceptOutputType[];
  /** When the procedure was performed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Specific clinical procedure */
  procedure: CodeableConceptOutputType | ReferenceOutputType;
  /** Unique device identifier */
  udi?: ReferenceOutputType[];
}

export const ExplanationOfBenefitProcedure: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitProcedure,
    ExplanationOfBenefitProcedureOutputType
  >,
  ExplanationOfBenefitProcedure,
  ExplanationOfBenefitProcedureOutputType
> = t.recursion<
  ExplanationOfBenefitProcedure,
  ExplanationOfBenefitProcedureOutputType
>("ExplanationOfBenefitProcedure", () =>
  t.intersection(
    [
      t.type({
        /** Specific clinical procedure */
        procedure: t.union([CodeableConcept, Reference]),
        /** Procedure instance identifier */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** When the procedure was performed */
        date: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Category of Procedure */
        type: t.array(CodeableConcept),
        /** Unique device identifier */
        udi: t.array(Reference)
      })
    ],
    "ExplanationOfBenefitProcedure"
  )
);

/**
 * Payment Details
 */
export interface ExplanationOfBenefitPayment {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Partial or complete payment */
  type?: CodeableConcept;
  /** Payment adjustment for non-claim issues */
  adjustment?: Money;
  /** Explanation for the variance */
  adjustmentReason?: CodeableConcept;
  /** Expected date of payment */
  date?: t.TypeOf<primitives.R4.DateType>;
  /** Payable amount after adjustment */
  amount?: Money;
  /** Business identifier for the payment */
  identifier?: Identifier;
}

export interface ExplanationOfBenefitPaymentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Partial or complete payment */
  type?: CodeableConceptOutputType;
  /** Payment adjustment for non-claim issues */
  adjustment?: MoneyOutputType;
  /** Explanation for the variance */
  adjustmentReason?: CodeableConceptOutputType;
  /** Expected date of payment */
  date?: t.OutputOf<primitives.R4.DateType>;
  /** Payable amount after adjustment */
  amount?: MoneyOutputType;
  /** Business identifier for the payment */
  identifier?: IdentifierOutputType;
}

export const ExplanationOfBenefitPayment: t.RecursiveType<
  t.Type<ExplanationOfBenefitPayment, ExplanationOfBenefitPaymentOutputType>,
  ExplanationOfBenefitPayment,
  ExplanationOfBenefitPaymentOutputType
> = t.recursion<
  ExplanationOfBenefitPayment,
  ExplanationOfBenefitPaymentOutputType
>("ExplanationOfBenefitPayment", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Payment adjustment for non-claim issues */
        adjustment: Money,
        /** Explanation for the variance */
        adjustmentReason: CodeableConcept,
        /** Payable amount after adjustment */
        amount: Money,
        /** Expected date of payment */
        date: primitives.R4.date,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Business identifier for the payment */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Partial or complete payment */
        type: CodeableConcept
      })
    ],
    "ExplanationOfBenefitPayment"
  )
);

/**
 * Recipient of benefits payable
 */
export interface ExplanationOfBenefitPayee {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Category of recipient */
  type?: CodeableConcept;
  /** Recipient reference */
  party?: Reference;
}

export interface ExplanationOfBenefitPayeeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Category of recipient */
  type?: CodeableConceptOutputType;
  /** Recipient reference */
  party?: ReferenceOutputType;
}

export const ExplanationOfBenefitPayee: t.RecursiveType<
  t.Type<ExplanationOfBenefitPayee, ExplanationOfBenefitPayeeOutputType>,
  ExplanationOfBenefitPayee,
  ExplanationOfBenefitPayeeOutputType
> = t.recursion<ExplanationOfBenefitPayee, ExplanationOfBenefitPayeeOutputType>(
  "ExplanationOfBenefitPayee",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Recipient reference */
          party: Reference,
          /** Category of recipient */
          type: CodeableConcept
        })
      ],
      "ExplanationOfBenefitPayee"
    )
);

/**
 * Additional items
 */
export interface ExplanationOfBenefitItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Product or service provided */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Revenue or cost center code */
  revenue?: CodeableConcept;
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Program the product or service is provided under */
  programCode?: CodeableConcept[];
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: Money;
  /** Unique device identifier */
  udi?: Reference[];
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Subdetail level adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}

export interface ExplanationOfBenefitItemDetailSubDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Product or service provided */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Revenue or cost center code */
  revenue?: CodeableConceptOutputType;
  /** Benefit classification */
  category?: CodeableConceptOutputType;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConceptOutputType;
  /** Service/Product billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Program the product or service is provided under */
  programCode?: CodeableConceptOutputType[];
  /** Count of products or services */
  quantity?: QuantityOutputType;
  /** Fee, charge or cost per item */
  unitPrice?: MoneyOutputType;
  /** Price scaling factor */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: MoneyOutputType;
  /** Unique device identifier */
  udi?: ReferenceOutputType[];
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Subdetail level adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
}

export const ExplanationOfBenefitItemDetailSubDetail: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitItemDetailSubDetail,
    ExplanationOfBenefitItemDetailSubDetailOutputType
  >,
  ExplanationOfBenefitItemDetailSubDetail,
  ExplanationOfBenefitItemDetailSubDetailOutputType
> = t.recursion<
  ExplanationOfBenefitItemDetailSubDetail,
  ExplanationOfBenefitItemDetailSubDetailOutputType
>("ExplanationOfBenefitItemDetailSubDetail", () =>
  t.intersection(
    [
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Product or service provided */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Subdetail level adjudication details */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication),
        /** Benefit classification */
        category: CodeableConcept,
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
        /** Program the product or service is provided under */
        programCode: t.array(CodeableConcept),
        /** Count of products or services */
        quantity: Quantity,
        /** Revenue or cost center code */
        revenue: CodeableConcept,
        /** Unique device identifier */
        udi: t.array(Reference),
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "ExplanationOfBenefitItemDetailSubDetail"
  )
);

/**
 * Additional items
 */
export interface ExplanationOfBenefitItemDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Product or service provided */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Revenue or cost center code */
  revenue?: CodeableConcept;
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Program the product or service is provided under */
  programCode?: CodeableConcept[];
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: Money;
  /** Unique device identifier */
  udi?: Reference[];
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Detail level adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
  /** Additional items */
  subDetail?: ExplanationOfBenefitItemDetailSubDetail[];
}

export interface ExplanationOfBenefitItemDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Product or service provided */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Revenue or cost center code */
  revenue?: CodeableConceptOutputType;
  /** Benefit classification */
  category?: CodeableConceptOutputType;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConceptOutputType;
  /** Service/Product billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Program the product or service is provided under */
  programCode?: CodeableConceptOutputType[];
  /** Count of products or services */
  quantity?: QuantityOutputType;
  /** Fee, charge or cost per item */
  unitPrice?: MoneyOutputType;
  /** Price scaling factor */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Total item cost */
  net?: MoneyOutputType;
  /** Unique device identifier */
  udi?: ReferenceOutputType[];
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Detail level adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
  /** Additional items */
  subDetail?: ExplanationOfBenefitItemDetailSubDetailOutputType[];
}

export const ExplanationOfBenefitItemDetail: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitItemDetail,
    ExplanationOfBenefitItemDetailOutputType
  >,
  ExplanationOfBenefitItemDetail,
  ExplanationOfBenefitItemDetailOutputType
> = t.recursion<
  ExplanationOfBenefitItemDetail,
  ExplanationOfBenefitItemDetailOutputType
>("ExplanationOfBenefitItemDetail", () =>
  t.intersection(
    [
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Product or service provided */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Detail level adjudication details */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication),
        /** Benefit classification */
        category: CodeableConcept,
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
        /** Program the product or service is provided under */
        programCode: t.array(CodeableConcept),
        /** Count of products or services */
        quantity: Quantity,
        /** Revenue or cost center code */
        revenue: CodeableConcept,
        /** Additional items */
        subDetail: t.array(ExplanationOfBenefitItemDetailSubDetail),
        /** Unique device identifier */
        udi: t.array(Reference),
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "ExplanationOfBenefitItemDetail"
  )
);

/**
 * Adjudication details
 */
export interface ExplanationOfBenefitItemAdjudication {
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
  /** Non-monitary value */
  value?: t.TypeOf<primitives.R4.DecimalType>;
}

export interface ExplanationOfBenefitItemAdjudicationOutputType {
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
  /** Non-monitary value */
  value?: t.OutputOf<primitives.R4.DecimalType>;
}

export const ExplanationOfBenefitItemAdjudication: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitItemAdjudication,
    ExplanationOfBenefitItemAdjudicationOutputType
  >,
  ExplanationOfBenefitItemAdjudication,
  ExplanationOfBenefitItemAdjudicationOutputType
> = t.recursion<
  ExplanationOfBenefitItemAdjudication,
  ExplanationOfBenefitItemAdjudicationOutputType
>("ExplanationOfBenefitItemAdjudication", () =>
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
        /** Non-monitary value */
        value: primitives.R4.decimal
      })
    ],
    "ExplanationOfBenefitItemAdjudication"
  )
);

/**
 * Product or service provided
 */
export interface ExplanationOfBenefitItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Applicable care team members */
  careTeamSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Applicable diagnoses */
  diagnosisSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Applicable procedures */
  procedureSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Applicable exception and supporting information */
  informationSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Revenue or cost center code */
  revenue?: CodeableConcept;
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Product or service billing modifiers */
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
  /** Unique device identifier */
  udi?: Reference[];
  /** Anatomical location */
  bodySite?: CodeableConcept;
  /** Anatomical sub-location */
  subSite?: CodeableConcept[];
  /** Encounters related to this billed item */
  encounter?: Reference[];
  /** Applicable note numbers */
  noteNumber?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
  /** Additional items */
  detail?: ExplanationOfBenefitItemDetail[];
}

export interface ExplanationOfBenefitItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Applicable care team members */
  careTeamSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Applicable diagnoses */
  diagnosisSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Applicable procedures */
  procedureSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Applicable exception and supporting information */
  informationSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Revenue or cost center code */
  revenue?: CodeableConceptOutputType;
  /** Benefit classification */
  category?: CodeableConceptOutputType;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConceptOutputType;
  /** Product or service billing modifiers */
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
  /** Unique device identifier */
  udi?: ReferenceOutputType[];
  /** Anatomical location */
  bodySite?: CodeableConceptOutputType;
  /** Anatomical sub-location */
  subSite?: CodeableConceptOutputType[];
  /** Encounters related to this billed item */
  encounter?: ReferenceOutputType[];
  /** Applicable note numbers */
  noteNumber?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
  /** Additional items */
  detail?: ExplanationOfBenefitItemDetailOutputType[];
}

export const ExplanationOfBenefitItem: t.RecursiveType<
  t.Type<ExplanationOfBenefitItem, ExplanationOfBenefitItemOutputType>,
  ExplanationOfBenefitItem,
  ExplanationOfBenefitItemOutputType
> = t.recursion<ExplanationOfBenefitItem, ExplanationOfBenefitItemOutputType>(
  "ExplanationOfBenefitItem",
  () =>
    t.intersection(
      [
        t.type({
          /** Billing, service, product, or drug code */
          productOrService: CodeableConcept,
          /** Item instance identifier */
          sequence: primitives.R4.positiveInt
        }),
        t.partial({
          /** Adjudication details */
          adjudication: t.array(ExplanationOfBenefitItemAdjudication),
          /** Anatomical location */
          bodySite: CodeableConcept,
          /** Applicable care team members */
          careTeamSequence: t.array(primitives.R4.positiveInt),
          /** Benefit classification */
          category: CodeableConcept,
          /** Additional items */
          detail: t.array(ExplanationOfBenefitItemDetail),
          /** Applicable diagnoses */
          diagnosisSequence: t.array(primitives.R4.positiveInt),
          /** Encounters related to this billed item */
          encounter: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Price scaling factor */
          factor: primitives.R4.decimal,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Applicable exception and supporting information */
          informationSequence: t.array(primitives.R4.positiveInt),
          /** Place of service or where product was supplied */
          location: t.union([CodeableConcept, Address, Reference]),
          /** Product or service billing modifiers */
          modifier: t.array(CodeableConcept),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Total item cost */
          net: Money,
          /** Applicable note numbers */
          noteNumber: t.array(primitives.R4.positiveInt),
          /** Applicable procedures */
          procedureSequence: t.array(primitives.R4.positiveInt),
          /** Program the product or service is provided under */
          programCode: t.array(CodeableConcept),
          /** Count of products or services */
          quantity: Quantity,
          /** Revenue or cost center code */
          revenue: CodeableConcept,
          /** Date or dates of service or product delivery */
          serviced: t.union([primitives.R4.date, Period]),
          /** Anatomical sub-location */
          subSite: t.array(CodeableConcept),
          /** Unique device identifier */
          udi: t.array(Reference),
          /** Fee, charge or cost per item */
          unitPrice: Money
        })
      ],
      "ExplanationOfBenefitItem"
    )
);

/**
 * Patient insurance information
 */
export interface ExplanationOfBenefitInsurance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coverage to be used for adjudication */
  focal: t.TypeOf<primitives.R4.BooleanType>;
  /** Insurance information */
  coverage: Reference;
  /** Prior authorization reference number */
  preAuthRef?: t.TypeOf<primitives.R4.StringType>[];
}

export interface ExplanationOfBenefitInsuranceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Coverage to be used for adjudication */
  focal: t.OutputOf<primitives.R4.BooleanType>;
  /** Insurance information */
  coverage: ReferenceOutputType;
  /** Prior authorization reference number */
  preAuthRef?: t.OutputOf<primitives.R4.StringType>[];
}

export const ExplanationOfBenefitInsurance: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitInsurance,
    ExplanationOfBenefitInsuranceOutputType
  >,
  ExplanationOfBenefitInsurance,
  ExplanationOfBenefitInsuranceOutputType
> = t.recursion<
  ExplanationOfBenefitInsurance,
  ExplanationOfBenefitInsuranceOutputType
>("ExplanationOfBenefitInsurance", () =>
  t.intersection(
    [
      t.type({
        /** Insurance information */
        coverage: Reference,
        /** Coverage to be used for adjudication */
        focal: primitives.R4.boolean
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Prior authorization reference number */
        preAuthRef: t.array(primitives.R4.string)
      })
    ],
    "ExplanationOfBenefitInsurance"
  )
);

/**
 * Pertinent diagnosis information
 */
export interface ExplanationOfBenefitDiagnosis {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Diagnosis instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Nature of illness or problem */
  diagnosis: CodeableConcept | Reference;
  /** Timing or nature of the diagnosis */
  type?: CodeableConcept[];
  /** Present on admission */
  onAdmission?: CodeableConcept;
  /** Package billing code */
  packageCode?: CodeableConcept;
}

export interface ExplanationOfBenefitDiagnosisOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Diagnosis instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Nature of illness or problem */
  diagnosis: CodeableConceptOutputType | ReferenceOutputType;
  /** Timing or nature of the diagnosis */
  type?: CodeableConceptOutputType[];
  /** Present on admission */
  onAdmission?: CodeableConceptOutputType;
  /** Package billing code */
  packageCode?: CodeableConceptOutputType;
}

export const ExplanationOfBenefitDiagnosis: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitDiagnosis,
    ExplanationOfBenefitDiagnosisOutputType
  >,
  ExplanationOfBenefitDiagnosis,
  ExplanationOfBenefitDiagnosisOutputType
> = t.recursion<
  ExplanationOfBenefitDiagnosis,
  ExplanationOfBenefitDiagnosisOutputType
>("ExplanationOfBenefitDiagnosis", () =>
  t.intersection(
    [
      t.type({
        /** Nature of illness or problem */
        diagnosis: t.union([CodeableConcept, Reference]),
        /** Diagnosis instance identifier */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Present on admission */
        onAdmission: CodeableConcept,
        /** Package billing code */
        packageCode: CodeableConcept,
        /** Timing or nature of the diagnosis */
        type: t.array(CodeableConcept)
      })
    ],
    "ExplanationOfBenefitDiagnosis"
  )
);

/**
 * Care Team members
 */
export interface ExplanationOfBenefitCareTeam {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Order of care team */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Practitioner or organization */
  provider: Reference;
  /** Indicator of the lead practitioner */
  responsible?: t.TypeOf<primitives.R4.BooleanType>;
  /** Function within the team */
  role?: CodeableConcept;
  /** Practitioner credential or specialization */
  qualification?: CodeableConcept;
}

export interface ExplanationOfBenefitCareTeamOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Order of care team */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Practitioner or organization */
  provider: ReferenceOutputType;
  /** Indicator of the lead practitioner */
  responsible?: t.OutputOf<primitives.R4.BooleanType>;
  /** Function within the team */
  role?: CodeableConceptOutputType;
  /** Practitioner credential or specialization */
  qualification?: CodeableConceptOutputType;
}

export const ExplanationOfBenefitCareTeam: t.RecursiveType<
  t.Type<ExplanationOfBenefitCareTeam, ExplanationOfBenefitCareTeamOutputType>,
  ExplanationOfBenefitCareTeam,
  ExplanationOfBenefitCareTeamOutputType
> = t.recursion<
  ExplanationOfBenefitCareTeam,
  ExplanationOfBenefitCareTeamOutputType
>("ExplanationOfBenefitCareTeam", () =>
  t.intersection(
    [
      t.type({
        /** Practitioner or organization */
        provider: Reference,
        /** Order of care team */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Practitioner credential or specialization */
        qualification: CodeableConcept,
        /** Indicator of the lead practitioner */
        responsible: primitives.R4.boolean,
        /** Function within the team */
        role: CodeableConcept
      })
    ],
    "ExplanationOfBenefitCareTeam"
  )
);

/**
 * Benefit Summary
 */
export interface ExplanationOfBenefitBenefitBalanceFinancial {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Benefit classification */
  type: CodeableConcept;
  /** Benefits allowed */
  allowed?:
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | t.TypeOf<primitives.R4.StringType>
    | Money;
  /** Benefits used */
  used?: t.TypeOf<primitives.R4.UnsignedIntegerType> | Money;
}

export interface ExplanationOfBenefitBenefitBalanceFinancialOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Benefit classification */
  type: CodeableConceptOutputType;
  /** Benefits allowed */
  allowed?:
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | t.OutputOf<primitives.R4.StringType>
    | MoneyOutputType;
  /** Benefits used */
  used?: t.OutputOf<primitives.R4.UnsignedIntegerType> | MoneyOutputType;
}

export const ExplanationOfBenefitBenefitBalanceFinancial: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitBenefitBalanceFinancial,
    ExplanationOfBenefitBenefitBalanceFinancialOutputType
  >,
  ExplanationOfBenefitBenefitBalanceFinancial,
  ExplanationOfBenefitBenefitBalanceFinancialOutputType
> = t.recursion<
  ExplanationOfBenefitBenefitBalanceFinancial,
  ExplanationOfBenefitBenefitBalanceFinancialOutputType
>("ExplanationOfBenefitBenefitBalanceFinancial", () =>
  t.intersection(
    [
      t.type({
        /** Benefit classification */
        type: CodeableConcept
      }),
      t.partial({
        /** Benefits allowed */
        allowed: t.union([
          primitives.R4.unsignedInt,
          primitives.R4.string,
          Money
        ]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Benefits used */
        used: t.union([primitives.R4.unsignedInt, Money])
      })
    ],
    "ExplanationOfBenefitBenefitBalanceFinancial"
  )
);

/**
 * Balance by Benefit Category
 */
export interface ExplanationOfBenefitBenefitBalance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Benefit classification */
  category: CodeableConcept;
  /** Excluded from the plan */
  excluded?: t.TypeOf<primitives.R4.BooleanType>;
  /** Short name for the benefit */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Description of the benefit or services covered */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** In or out of network */
  network?: CodeableConcept;
  /** Individual or family */
  unit?: CodeableConcept;
  /** Annual or lifetime */
  term?: CodeableConcept;
  /** Benefit Summary */
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[];
}

export interface ExplanationOfBenefitBenefitBalanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Benefit classification */
  category: CodeableConceptOutputType;
  /** Excluded from the plan */
  excluded?: t.OutputOf<primitives.R4.BooleanType>;
  /** Short name for the benefit */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Description of the benefit or services covered */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** In or out of network */
  network?: CodeableConceptOutputType;
  /** Individual or family */
  unit?: CodeableConceptOutputType;
  /** Annual or lifetime */
  term?: CodeableConceptOutputType;
  /** Benefit Summary */
  financial?: ExplanationOfBenefitBenefitBalanceFinancialOutputType[];
}

export const ExplanationOfBenefitBenefitBalance: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitBenefitBalance,
    ExplanationOfBenefitBenefitBalanceOutputType
  >,
  ExplanationOfBenefitBenefitBalance,
  ExplanationOfBenefitBenefitBalanceOutputType
> = t.recursion<
  ExplanationOfBenefitBenefitBalance,
  ExplanationOfBenefitBenefitBalanceOutputType
>("ExplanationOfBenefitBenefitBalance", () =>
  t.intersection(
    [
      t.type({
        /** Benefit classification */
        category: CodeableConcept
      }),
      t.partial({
        /** Description of the benefit or services covered */
        description: primitives.R4.string,
        /** Excluded from the plan */
        excluded: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Benefit Summary */
        financial: t.array(ExplanationOfBenefitBenefitBalanceFinancial),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Short name for the benefit */
        name: primitives.R4.string,
        /** In or out of network */
        network: CodeableConcept,
        /** Annual or lifetime */
        term: CodeableConcept,
        /** Individual or family */
        unit: CodeableConcept
      })
    ],
    "ExplanationOfBenefitBenefitBalance"
  )
);

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItemDetailSubDetail {
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
  /** Added items adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}

export interface ExplanationOfBenefitAddItemDetailSubDetailOutputType {
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
  /** Added items adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
}

export const ExplanationOfBenefitAddItemDetailSubDetail: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitAddItemDetailSubDetail,
    ExplanationOfBenefitAddItemDetailSubDetailOutputType
  >,
  ExplanationOfBenefitAddItemDetailSubDetail,
  ExplanationOfBenefitAddItemDetailSubDetailOutputType
> = t.recursion<
  ExplanationOfBenefitAddItemDetailSubDetail,
  ExplanationOfBenefitAddItemDetailSubDetailOutputType
>("ExplanationOfBenefitAddItemDetailSubDetail", () =>
  t.intersection(
    [
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept
      }),
      t.partial({
        /** Added items adjudication */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication),
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
    "ExplanationOfBenefitAddItemDetailSubDetail"
  )
);

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItemDetail {
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
  /** Added items adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
  /** Insurer added line items */
  subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[];
}

export interface ExplanationOfBenefitAddItemDetailOutputType {
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
  /** Added items adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
  /** Insurer added line items */
  subDetail?: ExplanationOfBenefitAddItemDetailSubDetailOutputType[];
}

export const ExplanationOfBenefitAddItemDetail: t.RecursiveType<
  t.Type<
    ExplanationOfBenefitAddItemDetail,
    ExplanationOfBenefitAddItemDetailOutputType
  >,
  ExplanationOfBenefitAddItemDetail,
  ExplanationOfBenefitAddItemDetailOutputType
> = t.recursion<
  ExplanationOfBenefitAddItemDetail,
  ExplanationOfBenefitAddItemDetailOutputType
>("ExplanationOfBenefitAddItemDetail", () =>
  t.intersection(
    [
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept
      }),
      t.partial({
        /** Added items adjudication */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication),
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
        subDetail: t.array(ExplanationOfBenefitAddItemDetailSubDetail),
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "ExplanationOfBenefitAddItemDetail"
  )
);

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItem {
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
  subDetailSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
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
  adjudication?: ExplanationOfBenefitItemAdjudication[];
  /** Insurer added line items */
  detail?: ExplanationOfBenefitAddItemDetail[];
}

export interface ExplanationOfBenefitAddItemOutputType {
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
  subDetailSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
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
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
  /** Insurer added line items */
  detail?: ExplanationOfBenefitAddItemDetailOutputType[];
}

export const ExplanationOfBenefitAddItem: t.RecursiveType<
  t.Type<ExplanationOfBenefitAddItem, ExplanationOfBenefitAddItemOutputType>,
  ExplanationOfBenefitAddItem,
  ExplanationOfBenefitAddItemOutputType
> = t.recursion<
  ExplanationOfBenefitAddItem,
  ExplanationOfBenefitAddItemOutputType
>("ExplanationOfBenefitAddItem", () =>
  t.intersection(
    [
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept
      }),
      t.partial({
        /** Added items adjudication */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication),
        /** Anatomical location */
        bodySite: CodeableConcept,
        /** Insurer added line items */
        detail: t.array(ExplanationOfBenefitAddItemDetail),
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
        /** Subdetail sequence number */
        subDetailSequence: t.array(primitives.R4.positiveInt),
        /** Anatomical sub-location */
        subSite: t.array(CodeableConcept),
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "ExplanationOfBenefitAddItem"
  )
);

/**
 * Details of the event
 */
export interface ExplanationOfBenefitAccident {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When the incident occurred */
  date?: t.TypeOf<primitives.R4.DateType>;
  /** The nature of the accident */
  type?: CodeableConcept;
  /** Where the event occurred */
  location?: Address | Reference;
}

export interface ExplanationOfBenefitAccidentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** When the incident occurred */
  date?: t.OutputOf<primitives.R4.DateType>;
  /** The nature of the accident */
  type?: CodeableConceptOutputType;
  /** Where the event occurred */
  location?: AddressOutputType | ReferenceOutputType;
}

export const ExplanationOfBenefitAccident: t.RecursiveType<
  t.Type<ExplanationOfBenefitAccident, ExplanationOfBenefitAccidentOutputType>,
  ExplanationOfBenefitAccident,
  ExplanationOfBenefitAccidentOutputType
> = t.recursion<
  ExplanationOfBenefitAccident,
  ExplanationOfBenefitAccidentOutputType
>("ExplanationOfBenefitAccident", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** When the incident occurred */
        date: primitives.R4.date,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Where the event occurred */
        location: t.union([Address, Reference]),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The nature of the accident */
        type: CodeableConcept
      })
    ],
    "ExplanationOfBenefitAccident"
  )
);

/**
 * Explanation of Benefit resource
 */
export interface ExplanationOfBenefit {
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
  /** Business Identifier for the resource */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Category or discipline */
  type: CodeableConcept;
  /** More granular claim type */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination */
  use: t.TypeOf<primitives.R4.CodeType>;
  /** The recipient of the products and services */
  patient: Reference;
  /** Relevant time frame for the claim */
  billablePeriod?: Period;
  /** Response creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Author of the claim */
  enterer?: Reference;
  /** Party responsible for reimbursement */
  insurer: Reference;
  /** Party responsible for the claim */
  provider: Reference;
  /** Desired processing urgency */
  priority?: CodeableConcept;
  /** For whom to reserve funds */
  fundsReserveRequested?: CodeableConcept;
  /** Funds reserved status */
  fundsReserve?: CodeableConcept;
  /** Prior or corollary claims */
  related?: ExplanationOfBenefitRelated[];
  /** Prescription authorizing services or products */
  prescription?: Reference;
  /** Original prescription if superceded by fulfiller */
  originalPrescription?: Reference;
  /** Recipient of benefits payable */
  payee?: ExplanationOfBenefitPayee;
  /** Treatment Referral */
  referral?: Reference;
  /** Servicing Facility */
  facility?: Reference;
  /** Claim reference */
  claim?: Reference;
  /** Claim response reference */
  claimResponse?: Reference;
  /** queued | complete | error | partial */
  outcome: t.TypeOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.TypeOf<primitives.R4.StringType>;
  /** Preauthorization reference */
  preAuthRef?: t.TypeOf<primitives.R4.StringType>[];
  /** Preauthorization in-effect period */
  preAuthRefPeriod?: Period[];
  /** Care Team members */
  careTeam?: ExplanationOfBenefitCareTeam[];
  /** Supporting information */
  supportingInfo?: ExplanationOfBenefitSupportingInfo[];
  /** Pertinent diagnosis information */
  diagnosis?: ExplanationOfBenefitDiagnosis[];
  /** Clinical procedures performed */
  procedure?: ExplanationOfBenefitProcedure[];
  /** Precedence (primary, secondary, etc.) */
  precedence?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Patient insurance information */
  insurance: ExplanationOfBenefitInsurance[];
  /** Details of the event */
  accident?: ExplanationOfBenefitAccident;
  /** Product or service provided */
  item?: ExplanationOfBenefitItem[];
  /** Insurer added line items */
  addItem?: ExplanationOfBenefitAddItem[];
  /** Header-level adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
  /** Adjudication totals */
  total?: ExplanationOfBenefitTotal[];
  /** Payment Details */
  payment?: ExplanationOfBenefitPayment;
  /** Printed form identifier */
  formCode?: CodeableConcept;
  /** Printed reference or actual form */
  form?: Attachment;
  /** Note concerning adjudication */
  processNote?: ExplanationOfBenefitProcessNote[];
  /** When the benefits are applicable */
  benefitPeriod?: Period;
  /** Balance by Benefit Category */
  benefitBalance?: ExplanationOfBenefitBenefitBalance[];
}

export interface ExplanationOfBenefitOutputType {
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
  /** Business Identifier for the resource */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Category or discipline */
  type: CodeableConceptOutputType;
  /** More granular claim type */
  subType?: CodeableConceptOutputType;
  /** claim | preauthorization | predetermination */
  use: t.OutputOf<primitives.R4.CodeType>;
  /** The recipient of the products and services */
  patient: ReferenceOutputType;
  /** Relevant time frame for the claim */
  billablePeriod?: PeriodOutputType;
  /** Response creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Author of the claim */
  enterer?: ReferenceOutputType;
  /** Party responsible for reimbursement */
  insurer: ReferenceOutputType;
  /** Party responsible for the claim */
  provider: ReferenceOutputType;
  /** Desired processing urgency */
  priority?: CodeableConceptOutputType;
  /** For whom to reserve funds */
  fundsReserveRequested?: CodeableConceptOutputType;
  /** Funds reserved status */
  fundsReserve?: CodeableConceptOutputType;
  /** Prior or corollary claims */
  related?: ExplanationOfBenefitRelatedOutputType[];
  /** Prescription authorizing services or products */
  prescription?: ReferenceOutputType;
  /** Original prescription if superceded by fulfiller */
  originalPrescription?: ReferenceOutputType;
  /** Recipient of benefits payable */
  payee?: ExplanationOfBenefitPayeeOutputType;
  /** Treatment Referral */
  referral?: ReferenceOutputType;
  /** Servicing Facility */
  facility?: ReferenceOutputType;
  /** Claim reference */
  claim?: ReferenceOutputType;
  /** Claim response reference */
  claimResponse?: ReferenceOutputType;
  /** queued | complete | error | partial */
  outcome: t.OutputOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.OutputOf<primitives.R4.StringType>;
  /** Preauthorization reference */
  preAuthRef?: t.OutputOf<primitives.R4.StringType>[];
  /** Preauthorization in-effect period */
  preAuthRefPeriod?: PeriodOutputType[];
  /** Care Team members */
  careTeam?: ExplanationOfBenefitCareTeamOutputType[];
  /** Supporting information */
  supportingInfo?: ExplanationOfBenefitSupportingInfoOutputType[];
  /** Pertinent diagnosis information */
  diagnosis?: ExplanationOfBenefitDiagnosisOutputType[];
  /** Clinical procedures performed */
  procedure?: ExplanationOfBenefitProcedureOutputType[];
  /** Precedence (primary, secondary, etc.) */
  precedence?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Patient insurance information */
  insurance: ExplanationOfBenefitInsuranceOutputType[];
  /** Details of the event */
  accident?: ExplanationOfBenefitAccidentOutputType;
  /** Product or service provided */
  item?: ExplanationOfBenefitItemOutputType[];
  /** Insurer added line items */
  addItem?: ExplanationOfBenefitAddItemOutputType[];
  /** Header-level adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudicationOutputType[];
  /** Adjudication totals */
  total?: ExplanationOfBenefitTotalOutputType[];
  /** Payment Details */
  payment?: ExplanationOfBenefitPaymentOutputType;
  /** Printed form identifier */
  formCode?: CodeableConceptOutputType;
  /** Printed reference or actual form */
  form?: AttachmentOutputType;
  /** Note concerning adjudication */
  processNote?: ExplanationOfBenefitProcessNoteOutputType[];
  /** When the benefits are applicable */
  benefitPeriod?: PeriodOutputType;
  /** Balance by Benefit Category */
  benefitBalance?: ExplanationOfBenefitBenefitBalanceOutputType[];
}

export const ExplanationOfBenefit: t.RecursiveType<
  t.Type<ExplanationOfBenefit, ExplanationOfBenefitOutputType>,
  ExplanationOfBenefit,
  ExplanationOfBenefitOutputType
> = t.recursion<ExplanationOfBenefit, ExplanationOfBenefitOutputType>(
  "ExplanationOfBenefit",
  () =>
    t.intersection(
      [
        t.type({
          /** Response creation date */
          created: primitives.R4.dateTime,
          /** Patient insurance information */
          insurance: t.array(ExplanationOfBenefitInsurance),
          /** Party responsible for reimbursement */
          insurer: Reference,
          /** queued | complete | error | partial */
          outcome: primitives.R4.code,
          /** The recipient of the products and services */
          patient: Reference,
          /** Party responsible for the claim */
          provider: Reference,
          /** active | cancelled | draft | entered-in-error */
          status: primitives.R4.code,
          /** Category or discipline */
          type: CodeableConcept,
          /** claim | preauthorization | predetermination */
          use: primitives.R4.code
        }),
        t.partial({
          /** Details of the event */
          accident: ExplanationOfBenefitAccident,
          /** Insurer added line items */
          addItem: t.array(ExplanationOfBenefitAddItem),
          /** Header-level adjudication */
          adjudication: t.array(ExplanationOfBenefitItemAdjudication),
          /** Balance by Benefit Category */
          benefitBalance: t.array(ExplanationOfBenefitBenefitBalance),
          /** When the benefits are applicable */
          benefitPeriod: Period,
          /** Relevant time frame for the claim */
          billablePeriod: Period,
          /** Care Team members */
          careTeam: t.array(ExplanationOfBenefitCareTeam),
          /** Claim reference */
          claim: Reference,
          /** Claim response reference */
          claimResponse: Reference,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Pertinent diagnosis information */
          diagnosis: t.array(ExplanationOfBenefitDiagnosis),
          /** Disposition Message */
          disposition: primitives.R4.string,
          /** Author of the claim */
          enterer: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Servicing Facility */
          facility: Reference,
          /** Printed reference or actual form */
          form: Attachment,
          /** Printed form identifier */
          formCode: CodeableConcept,
          /** Funds reserved status */
          fundsReserve: CodeableConcept,
          /** For whom to reserve funds */
          fundsReserveRequested: CodeableConcept,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifier for the resource */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Product or service provided */
          item: t.array(ExplanationOfBenefitItem),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Original prescription if superceded by fulfiller */
          originalPrescription: Reference,
          /** Recipient of benefits payable */
          payee: ExplanationOfBenefitPayee,
          /** Payment Details */
          payment: ExplanationOfBenefitPayment,
          /** Preauthorization reference */
          preAuthRef: t.array(primitives.R4.string),
          /** Preauthorization in-effect period */
          preAuthRefPeriod: t.array(Period),
          /** Precedence (primary, secondary, etc.) */
          precedence: primitives.R4.positiveInt,
          /** Prescription authorizing services or products */
          prescription: Reference,
          /** Desired processing urgency */
          priority: CodeableConcept,
          /** Clinical procedures performed */
          procedure: t.array(ExplanationOfBenefitProcedure),
          /** Note concerning adjudication */
          processNote: t.array(ExplanationOfBenefitProcessNote),
          /** Treatment Referral */
          referral: Reference,
          /** Prior or corollary claims */
          related: t.array(ExplanationOfBenefitRelated),
          /** More granular claim type */
          subType: CodeableConcept,
          /** Supporting information */
          supportingInfo: t.array(ExplanationOfBenefitSupportingInfo),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Adjudication totals */
          total: t.array(ExplanationOfBenefitTotal)
        })
      ],
      "ExplanationOfBenefit"
    )
);
