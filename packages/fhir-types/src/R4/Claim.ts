/**
 * Claim Module
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
 * Supporting information
 */
export interface ClaimSupportingInfo {
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
  reason?: CodeableConcept;
}

export interface ClaimSupportingInfoOutputType {
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
  reason?: CodeableConceptOutputType;
}

export const ClaimSupportingInfo: t.RecursiveType<
  t.Type<ClaimSupportingInfo, ClaimSupportingInfoOutputType>,
  ClaimSupportingInfo,
  ClaimSupportingInfoOutputType
> = t.recursion<ClaimSupportingInfo, ClaimSupportingInfoOutputType>(
  "ClaimSupportingInfo",
  () =>
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
          reason: CodeableConcept,
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
      "ClaimSupportingInfo"
    )
);

/**
 * Prior or corollary claims
 */
export interface ClaimRelated {
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

export interface ClaimRelatedOutputType {
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

export const ClaimRelated: t.RecursiveType<
  t.Type<ClaimRelated, ClaimRelatedOutputType>,
  ClaimRelated,
  ClaimRelatedOutputType
> = t.recursion<ClaimRelated, ClaimRelatedOutputType>("ClaimRelated", () =>
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
    "ClaimRelated"
  )
);

/**
 * Clinical procedures performed
 */
export interface ClaimProcedure {
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

export interface ClaimProcedureOutputType {
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

export const ClaimProcedure: t.RecursiveType<
  t.Type<ClaimProcedure, ClaimProcedureOutputType>,
  ClaimProcedure,
  ClaimProcedureOutputType
> = t.recursion<ClaimProcedure, ClaimProcedureOutputType>(
  "ClaimProcedure",
  () =>
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
      "ClaimProcedure"
    )
);

/**
 * Recipient of benefits payable
 */
export interface ClaimPayee {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Category of recipient */
  type: CodeableConcept;
  /** Recipient reference */
  party?: Reference;
}

export interface ClaimPayeeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Category of recipient */
  type: CodeableConceptOutputType;
  /** Recipient reference */
  party?: ReferenceOutputType;
}

export const ClaimPayee: t.RecursiveType<
  t.Type<ClaimPayee, ClaimPayeeOutputType>,
  ClaimPayee,
  ClaimPayeeOutputType
> = t.recursion<ClaimPayee, ClaimPayeeOutputType>("ClaimPayee", () =>
  t.intersection(
    [
      t.type({
        /** Category of recipient */
        type: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Recipient reference */
        party: Reference
      })
    ],
    "ClaimPayee"
  )
);

/**
 * Product or service provided
 */
export interface ClaimItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
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
}

export interface ClaimItemDetailSubDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item instance identifier */
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
}

export const ClaimItemDetailSubDetail: t.RecursiveType<
  t.Type<ClaimItemDetailSubDetail, ClaimItemDetailSubDetailOutputType>,
  ClaimItemDetailSubDetail,
  ClaimItemDetailSubDetailOutputType
> = t.recursion<ClaimItemDetailSubDetail, ClaimItemDetailSubDetailOutputType>(
  "ClaimItemDetailSubDetail",
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
      "ClaimItemDetailSubDetail"
    )
);

/**
 * Product or service provided
 */
export interface ClaimItemDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
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
  /** Product or service provided */
  subDetail?: ClaimItemDetailSubDetail[];
}

export interface ClaimItemDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item instance identifier */
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
  /** Product or service provided */
  subDetail?: ClaimItemDetailSubDetailOutputType[];
}

export const ClaimItemDetail: t.RecursiveType<
  t.Type<ClaimItemDetail, ClaimItemDetailOutputType>,
  ClaimItemDetail,
  ClaimItemDetailOutputType
> = t.recursion<ClaimItemDetail, ClaimItemDetailOutputType>(
  "ClaimItemDetail",
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
          /** Program the product or service is provided under */
          programCode: t.array(CodeableConcept),
          /** Count of products or services */
          quantity: Quantity,
          /** Revenue or cost center code */
          revenue: CodeableConcept,
          /** Product or service provided */
          subDetail: t.array(ClaimItemDetailSubDetail),
          /** Unique device identifier */
          udi: t.array(Reference),
          /** Fee, charge or cost per item */
          unitPrice: Money
        })
      ],
      "ClaimItemDetail"
    )
);

/**
 * Product or service provided
 */
export interface ClaimItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Applicable careTeam members */
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
  /** Product or service provided */
  detail?: ClaimItemDetail[];
}

export interface ClaimItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Applicable careTeam members */
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
  /** Product or service provided */
  detail?: ClaimItemDetailOutputType[];
}

export const ClaimItem: t.RecursiveType<
  t.Type<ClaimItem, ClaimItemOutputType>,
  ClaimItem,
  ClaimItemOutputType
> = t.recursion<ClaimItem, ClaimItemOutputType>("ClaimItem", () =>
  t.intersection(
    [
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Item instance identifier */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Anatomical location */
        bodySite: CodeableConcept,
        /** Applicable careTeam members */
        careTeamSequence: t.array(primitives.R4.positiveInt),
        /** Benefit classification */
        category: CodeableConcept,
        /** Product or service provided */
        detail: t.array(ClaimItemDetail),
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
    "ClaimItem"
  )
);

/**
 * Patient insurance information
 */
export interface ClaimInsurance {
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
  /** Pre-assigned Claim number */
  identifier?: Identifier;
  /** Insurance information */
  coverage: Reference;
  /** Additional provider contract number */
  businessArrangement?: t.TypeOf<primitives.R4.StringType>;
  /** Prior authorization reference number */
  preAuthRef?: t.TypeOf<primitives.R4.StringType>[];
  /** Adjudication results */
  claimResponse?: Reference;
}

export interface ClaimInsuranceOutputType {
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
  /** Pre-assigned Claim number */
  identifier?: IdentifierOutputType;
  /** Insurance information */
  coverage: ReferenceOutputType;
  /** Additional provider contract number */
  businessArrangement?: t.OutputOf<primitives.R4.StringType>;
  /** Prior authorization reference number */
  preAuthRef?: t.OutputOf<primitives.R4.StringType>[];
  /** Adjudication results */
  claimResponse?: ReferenceOutputType;
}

export const ClaimInsurance: t.RecursiveType<
  t.Type<ClaimInsurance, ClaimInsuranceOutputType>,
  ClaimInsurance,
  ClaimInsuranceOutputType
> = t.recursion<ClaimInsurance, ClaimInsuranceOutputType>(
  "ClaimInsurance",
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
          /** Pre-assigned Claim number */
          identifier: Identifier,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Prior authorization reference number */
          preAuthRef: t.array(primitives.R4.string)
        })
      ],
      "ClaimInsurance"
    )
);

/**
 * Pertinent diagnosis information
 */
export interface ClaimDiagnosis {
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

export interface ClaimDiagnosisOutputType {
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

export const ClaimDiagnosis: t.RecursiveType<
  t.Type<ClaimDiagnosis, ClaimDiagnosisOutputType>,
  ClaimDiagnosis,
  ClaimDiagnosisOutputType
> = t.recursion<ClaimDiagnosis, ClaimDiagnosisOutputType>(
  "ClaimDiagnosis",
  () =>
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
      "ClaimDiagnosis"
    )
);

/**
 * Members of the care team
 */
export interface ClaimCareTeam {
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

export interface ClaimCareTeamOutputType {
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

export const ClaimCareTeam: t.RecursiveType<
  t.Type<ClaimCareTeam, ClaimCareTeamOutputType>,
  ClaimCareTeam,
  ClaimCareTeamOutputType
> = t.recursion<ClaimCareTeam, ClaimCareTeamOutputType>("ClaimCareTeam", () =>
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
    "ClaimCareTeam"
  )
);

/**
 * Details of the event
 */
export interface ClaimAccident {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When the incident occurred */
  date: t.TypeOf<primitives.R4.DateType>;
  /** The nature of the accident */
  type?: CodeableConcept;
  /** Where the event occurred */
  location?: Address | Reference;
}

export interface ClaimAccidentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** When the incident occurred */
  date: t.OutputOf<primitives.R4.DateType>;
  /** The nature of the accident */
  type?: CodeableConceptOutputType;
  /** Where the event occurred */
  location?: AddressOutputType | ReferenceOutputType;
}

export const ClaimAccident: t.RecursiveType<
  t.Type<ClaimAccident, ClaimAccidentOutputType>,
  ClaimAccident,
  ClaimAccidentOutputType
> = t.recursion<ClaimAccident, ClaimAccidentOutputType>("ClaimAccident", () =>
  t.intersection(
    [
      t.type({
        /** When the incident occurred */
        date: primitives.R4.date
      }),
      t.partial({
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
    "ClaimAccident"
  )
);

/**
 * Claim, Pre-determination or Pre-authorization
 */
export interface Claim {
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
  /** Business Identifier for claim */
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
  /** Resource creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Author of the claim */
  enterer?: Reference;
  /** Target */
  insurer?: Reference;
  /** Party responsible for the claim */
  provider: Reference;
  /** Desired processing ugency */
  priority: CodeableConcept;
  /** For whom to reserve funds */
  fundsReserve?: CodeableConcept;
  /** Prior or corollary claims */
  related?: ClaimRelated[];
  /** Prescription authorizing services and products */
  prescription?: Reference;
  /** Original prescription if superseded by fulfiller */
  originalPrescription?: Reference;
  /** Recipient of benefits payable */
  payee?: ClaimPayee;
  /** Treatment referral */
  referral?: Reference;
  /** Servicing facility */
  facility?: Reference;
  /** Members of the care team */
  careTeam?: ClaimCareTeam[];
  /** Supporting information */
  supportingInfo?: ClaimSupportingInfo[];
  /** Pertinent diagnosis information */
  diagnosis?: ClaimDiagnosis[];
  /** Clinical procedures performed */
  procedure?: ClaimProcedure[];
  /** Patient insurance information */
  insurance: ClaimInsurance[];
  /** Details of the event */
  accident?: ClaimAccident;
  /** Product or service provided */
  item?: ClaimItem[];
  /** Total claim cost */
  total?: Money;
}

export interface ClaimOutputType {
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
  /** Business Identifier for claim */
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
  /** Resource creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Author of the claim */
  enterer?: ReferenceOutputType;
  /** Target */
  insurer?: ReferenceOutputType;
  /** Party responsible for the claim */
  provider: ReferenceOutputType;
  /** Desired processing ugency */
  priority: CodeableConceptOutputType;
  /** For whom to reserve funds */
  fundsReserve?: CodeableConceptOutputType;
  /** Prior or corollary claims */
  related?: ClaimRelatedOutputType[];
  /** Prescription authorizing services and products */
  prescription?: ReferenceOutputType;
  /** Original prescription if superseded by fulfiller */
  originalPrescription?: ReferenceOutputType;
  /** Recipient of benefits payable */
  payee?: ClaimPayeeOutputType;
  /** Treatment referral */
  referral?: ReferenceOutputType;
  /** Servicing facility */
  facility?: ReferenceOutputType;
  /** Members of the care team */
  careTeam?: ClaimCareTeamOutputType[];
  /** Supporting information */
  supportingInfo?: ClaimSupportingInfoOutputType[];
  /** Pertinent diagnosis information */
  diagnosis?: ClaimDiagnosisOutputType[];
  /** Clinical procedures performed */
  procedure?: ClaimProcedureOutputType[];
  /** Patient insurance information */
  insurance: ClaimInsuranceOutputType[];
  /** Details of the event */
  accident?: ClaimAccidentOutputType;
  /** Product or service provided */
  item?: ClaimItemOutputType[];
  /** Total claim cost */
  total?: MoneyOutputType;
}

export const Claim: t.RecursiveType<
  t.Type<Claim, ClaimOutputType>,
  Claim,
  ClaimOutputType
> = t.recursion<Claim, ClaimOutputType>("Claim", () =>
  t.intersection(
    [
      t.type({
        /** Resource creation date */
        created: primitives.R4.dateTime,
        /** Patient insurance information */
        insurance: t.array(ClaimInsurance),
        /** The recipient of the products and services */
        patient: Reference,
        /** Desired processing ugency */
        priority: CodeableConcept,
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
        accident: ClaimAccident,
        /** Relevant time frame for the claim */
        billablePeriod: Period,
        /** Members of the care team */
        careTeam: t.array(ClaimCareTeam),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Pertinent diagnosis information */
        diagnosis: t.array(ClaimDiagnosis),
        /** Author of the claim */
        enterer: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Servicing facility */
        facility: Reference,
        /** For whom to reserve funds */
        fundsReserve: CodeableConcept,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for claim */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Target */
        insurer: Reference,
        /** Product or service provided */
        item: t.array(ClaimItem),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Original prescription if superseded by fulfiller */
        originalPrescription: Reference,
        /** Recipient of benefits payable */
        payee: ClaimPayee,
        /** Prescription authorizing services and products */
        prescription: Reference,
        /** Clinical procedures performed */
        procedure: t.array(ClaimProcedure),
        /** Treatment referral */
        referral: Reference,
        /** Prior or corollary claims */
        related: t.array(ClaimRelated),
        /** More granular claim type */
        subType: CodeableConcept,
        /** Supporting information */
        supportingInfo: t.array(ClaimSupportingInfo),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Total claim cost */
        total: Money
      })
    ],
    "Claim"
  )
);
