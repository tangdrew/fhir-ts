/**
 * CoverageEligibilityRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
export interface CoverageEligibilityRequestSupportingInfo {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Information instance identifier */
  sequence: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Data to be provided */
  information: Reference;
  /** Applies to all items */
  appliesToAll?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface CoverageEligibilityRequestSupportingInfoOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Information instance identifier */
  sequence: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Data to be provided */
  information: ReferenceOutputType;
  /** Applies to all items */
  appliesToAll?: t.OutputOf<primitives.R4.BooleanType>;
}

export const CoverageEligibilityRequestSupportingInfo: t.RecursiveType<
  t.Type<
    CoverageEligibilityRequestSupportingInfo,
    CoverageEligibilityRequestSupportingInfoOutputType
  >,
  CoverageEligibilityRequestSupportingInfo,
  CoverageEligibilityRequestSupportingInfoOutputType
> = t.recursion<
  CoverageEligibilityRequestSupportingInfo,
  CoverageEligibilityRequestSupportingInfoOutputType
>("CoverageEligibilityRequestSupportingInfo", () =>
  t.intersection(
    [
      t.type({
        /** Data to be provided */
        information: Reference,
        /** Information instance identifier */
        sequence: primitives.R4.positiveInt
      }),
      t.partial({
        /** Applies to all items */
        appliesToAll: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CoverageEligibilityRequestSupportingInfo"
  )
);

/**
 * Applicable diagnosis
 */
export interface CoverageEligibilityRequestItemDiagnosis {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Nature of illness or problem */
  diagnosis?: CodeableConcept | Reference;
}

export interface CoverageEligibilityRequestItemDiagnosisOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Nature of illness or problem */
  diagnosis?: CodeableConceptOutputType | ReferenceOutputType;
}

export const CoverageEligibilityRequestItemDiagnosis: t.RecursiveType<
  t.Type<
    CoverageEligibilityRequestItemDiagnosis,
    CoverageEligibilityRequestItemDiagnosisOutputType
  >,
  CoverageEligibilityRequestItemDiagnosis,
  CoverageEligibilityRequestItemDiagnosisOutputType
> = t.recursion<
  CoverageEligibilityRequestItemDiagnosis,
  CoverageEligibilityRequestItemDiagnosisOutputType
>("CoverageEligibilityRequestItemDiagnosis", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Nature of illness or problem */
        diagnosis: t.union([CodeableConcept, Reference]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CoverageEligibilityRequestItemDiagnosis"
  )
);

/**
 * Item to be evaluated for eligibiity
 */
export interface CoverageEligibilityRequestItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Applicable exception or supporting information */
  supportingInfoSequence?: t.TypeOf<primitives.R4.PositiveIntegerType>[];
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService?: CodeableConcept;
  /** Product or service billing modifiers */
  modifier?: CodeableConcept[];
  /** Perfoming practitioner */
  provider?: Reference;
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Servicing facility */
  facility?: Reference;
  /** Applicable diagnosis */
  diagnosis?: CoverageEligibilityRequestItemDiagnosis[];
  /** Product or service details */
  detail?: Reference[];
}

export interface CoverageEligibilityRequestItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Applicable exception or supporting information */
  supportingInfoSequence?: t.OutputOf<primitives.R4.PositiveIntegerType>[];
  /** Benefit classification */
  category?: CodeableConceptOutputType;
  /** Billing, service, product, or drug code */
  productOrService?: CodeableConceptOutputType;
  /** Product or service billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Perfoming practitioner */
  provider?: ReferenceOutputType;
  /** Count of products or services */
  quantity?: QuantityOutputType;
  /** Fee, charge or cost per item */
  unitPrice?: MoneyOutputType;
  /** Servicing facility */
  facility?: ReferenceOutputType;
  /** Applicable diagnosis */
  diagnosis?: CoverageEligibilityRequestItemDiagnosisOutputType[];
  /** Product or service details */
  detail?: ReferenceOutputType[];
}

export const CoverageEligibilityRequestItem: t.RecursiveType<
  t.Type<
    CoverageEligibilityRequestItem,
    CoverageEligibilityRequestItemOutputType
  >,
  CoverageEligibilityRequestItem,
  CoverageEligibilityRequestItemOutputType
> = t.recursion<
  CoverageEligibilityRequestItem,
  CoverageEligibilityRequestItemOutputType
>("CoverageEligibilityRequestItem", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Benefit classification */
        category: CodeableConcept,
        /** Product or service details */
        detail: t.array(Reference),
        /** Applicable diagnosis */
        diagnosis: t.array(CoverageEligibilityRequestItemDiagnosis),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Servicing facility */
        facility: Reference,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Product or service billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Perfoming practitioner */
        provider: Reference,
        /** Count of products or services */
        quantity: Quantity,
        /** Applicable exception or supporting information */
        supportingInfoSequence: t.array(primitives.R4.positiveInt),
        /** Fee, charge or cost per item */
        unitPrice: Money
      })
    ],
    "CoverageEligibilityRequestItem"
  )
);

/**
 * Patient insurance information
 */
export interface CoverageEligibilityRequestInsurance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Applicable coverage */
  focal?: t.TypeOf<primitives.R4.BooleanType>;
  /** Insurance information */
  coverage: Reference;
  /** Additional provider contract number */
  businessArrangement?: t.TypeOf<primitives.R4.StringType>;
}

export interface CoverageEligibilityRequestInsuranceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Applicable coverage */
  focal?: t.OutputOf<primitives.R4.BooleanType>;
  /** Insurance information */
  coverage: ReferenceOutputType;
  /** Additional provider contract number */
  businessArrangement?: t.OutputOf<primitives.R4.StringType>;
}

export const CoverageEligibilityRequestInsurance: t.RecursiveType<
  t.Type<
    CoverageEligibilityRequestInsurance,
    CoverageEligibilityRequestInsuranceOutputType
  >,
  CoverageEligibilityRequestInsurance,
  CoverageEligibilityRequestInsuranceOutputType
> = t.recursion<
  CoverageEligibilityRequestInsurance,
  CoverageEligibilityRequestInsuranceOutputType
>("CoverageEligibilityRequestInsurance", () =>
  t.intersection(
    [
      t.type({
        /** Insurance information */
        coverage: Reference
      }),
      t.partial({
        /** Additional provider contract number */
        businessArrangement: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Applicable coverage */
        focal: primitives.R4.boolean,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CoverageEligibilityRequestInsurance"
  )
);

/**
 * CoverageEligibilityRequest resource
 */
export interface CoverageEligibilityRequest {
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
  /** Business Identifier for coverage eligiblity request */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Desired processing priority */
  priority?: CodeableConcept;
  /** auth-requirements | benefits | discovery | validation */
  purpose: t.TypeOf<primitives.R4.CodeType>[];
  /** Intended recipient of products and services */
  patient: Reference;
  /** Estimated date or dates of service */
  serviced?: t.TypeOf<primitives.R4.DateType> | Period;
  /** Creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Author */
  enterer?: Reference;
  /** Party responsible for the request */
  provider?: Reference;
  /** Coverage issuer */
  insurer: Reference;
  /** Servicing facility */
  facility?: Reference;
  /** Supporting information */
  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];
  /** Patient insurance information */
  insurance?: CoverageEligibilityRequestInsurance[];
  /** Item to be evaluated for eligibiity */
  item?: CoverageEligibilityRequestItem[];
}

export interface CoverageEligibilityRequestOutputType {
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
  /** Business Identifier for coverage eligiblity request */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Desired processing priority */
  priority?: CodeableConceptOutputType;
  /** auth-requirements | benefits | discovery | validation */
  purpose: t.OutputOf<primitives.R4.CodeType>[];
  /** Intended recipient of products and services */
  patient: ReferenceOutputType;
  /** Estimated date or dates of service */
  serviced?: t.OutputOf<primitives.R4.DateType> | PeriodOutputType;
  /** Creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Author */
  enterer?: ReferenceOutputType;
  /** Party responsible for the request */
  provider?: ReferenceOutputType;
  /** Coverage issuer */
  insurer: ReferenceOutputType;
  /** Servicing facility */
  facility?: ReferenceOutputType;
  /** Supporting information */
  supportingInfo?: CoverageEligibilityRequestSupportingInfoOutputType[];
  /** Patient insurance information */
  insurance?: CoverageEligibilityRequestInsuranceOutputType[];
  /** Item to be evaluated for eligibiity */
  item?: CoverageEligibilityRequestItemOutputType[];
}

export const CoverageEligibilityRequest: t.RecursiveType<
  t.Type<CoverageEligibilityRequest, CoverageEligibilityRequestOutputType>,
  CoverageEligibilityRequest,
  CoverageEligibilityRequestOutputType
> = t.recursion<
  CoverageEligibilityRequest,
  CoverageEligibilityRequestOutputType
>("CoverageEligibilityRequest", () =>
  t.intersection(
    [
      t.type({
        /** Creation date */
        created: primitives.R4.dateTime,
        /** Coverage issuer */
        insurer: Reference,
        /** Intended recipient of products and services */
        patient: Reference,
        /** auth-requirements | benefits | discovery | validation */
        purpose: t.array(primitives.R4.code),
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Author */
        enterer: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Servicing facility */
        facility: Reference,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for coverage eligiblity request */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Patient insurance information */
        insurance: t.array(CoverageEligibilityRequestInsurance),
        /** Item to be evaluated for eligibiity */
        item: t.array(CoverageEligibilityRequestItem),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Desired processing priority */
        priority: CodeableConcept,
        /** Party responsible for the request */
        provider: Reference,
        /** Estimated date or dates of service */
        serviced: t.union([primitives.R4.date, Period]),
        /** Supporting information */
        supportingInfo: t.array(CoverageEligibilityRequestSupportingInfo),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "CoverageEligibilityRequest"
  )
);
