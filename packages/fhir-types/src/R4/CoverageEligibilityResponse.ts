/**
 * CoverageEligibilityResponse Module
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
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Benefit Summary
 */
export interface CoverageEligibilityResponseInsuranceItemBenefit {
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
  used?:
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | t.TypeOf<primitives.R4.StringType>
    | Money;
}

export interface CoverageEligibilityResponseInsuranceItemBenefitOutputType {
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
  used?:
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | t.OutputOf<primitives.R4.StringType>
    | MoneyOutputType;
}

export const CoverageEligibilityResponseInsuranceItemBenefit: t.RecursiveType<
  t.Type<
    CoverageEligibilityResponseInsuranceItemBenefit,
    CoverageEligibilityResponseInsuranceItemBenefitOutputType
  >,
  CoverageEligibilityResponseInsuranceItemBenefit,
  CoverageEligibilityResponseInsuranceItemBenefitOutputType
> = t.recursion<
  CoverageEligibilityResponseInsuranceItemBenefit,
  CoverageEligibilityResponseInsuranceItemBenefitOutputType
>("CoverageEligibilityResponseInsuranceItemBenefit", () =>
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
        used: t.union([primitives.R4.unsignedInt, primitives.R4.string, Money])
      })
    ],
    "CoverageEligibilityResponseInsuranceItemBenefit"
  )
);

/**
 * Benefits and authorization details
 */
export interface CoverageEligibilityResponseInsuranceItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService?: CodeableConcept;
  /** Product or service billing modifiers */
  modifier?: CodeableConcept[];
  /** Performing practitioner */
  provider?: Reference;
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
  benefit?: CoverageEligibilityResponseInsuranceItemBenefit[];
  /** Authorization required flag */
  authorizationRequired?: t.TypeOf<primitives.R4.BooleanType>;
  /** Type of required supporting materials */
  authorizationSupporting?: CodeableConcept[];
  /** Preauthorization requirements endpoint */
  authorizationUrl?: t.TypeOf<primitives.R4.URIType>;
}

export interface CoverageEligibilityResponseInsuranceItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Benefit classification */
  category?: CodeableConceptOutputType;
  /** Billing, service, product, or drug code */
  productOrService?: CodeableConceptOutputType;
  /** Product or service billing modifiers */
  modifier?: CodeableConceptOutputType[];
  /** Performing practitioner */
  provider?: ReferenceOutputType;
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
  benefit?: CoverageEligibilityResponseInsuranceItemBenefitOutputType[];
  /** Authorization required flag */
  authorizationRequired?: t.OutputOf<primitives.R4.BooleanType>;
  /** Type of required supporting materials */
  authorizationSupporting?: CodeableConceptOutputType[];
  /** Preauthorization requirements endpoint */
  authorizationUrl?: t.OutputOf<primitives.R4.URIType>;
}

export const CoverageEligibilityResponseInsuranceItem: t.RecursiveType<
  t.Type<
    CoverageEligibilityResponseInsuranceItem,
    CoverageEligibilityResponseInsuranceItemOutputType
  >,
  CoverageEligibilityResponseInsuranceItem,
  CoverageEligibilityResponseInsuranceItemOutputType
> = t.recursion<
  CoverageEligibilityResponseInsuranceItem,
  CoverageEligibilityResponseInsuranceItemOutputType
>("CoverageEligibilityResponseInsuranceItem", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Authorization required flag */
        authorizationRequired: primitives.R4.boolean,
        /** Type of required supporting materials */
        authorizationSupporting: t.array(CodeableConcept),
        /** Preauthorization requirements endpoint */
        authorizationUrl: primitives.R4.uri,
        /** Benefit Summary */
        benefit: t.array(CoverageEligibilityResponseInsuranceItemBenefit),
        /** Benefit classification */
        category: CodeableConcept,
        /** Description of the benefit or services covered */
        description: primitives.R4.string,
        /** Excluded from the plan */
        excluded: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Product or service billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Short name for the benefit */
        name: primitives.R4.string,
        /** In or out of network */
        network: CodeableConcept,
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Performing practitioner */
        provider: Reference,
        /** Annual or lifetime */
        term: CodeableConcept,
        /** Individual or family */
        unit: CodeableConcept
      })
    ],
    "CoverageEligibilityResponseInsuranceItem"
  )
);

/**
 * Patient insurance information
 */
export interface CoverageEligibilityResponseInsurance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Insurance information */
  coverage: Reference;
  /** Coverage inforce indicator */
  inforce?: t.TypeOf<primitives.R4.BooleanType>;
  /** When the benefits are applicable */
  benefitPeriod?: Period;
  /** Benefits and authorization details */
  item?: CoverageEligibilityResponseInsuranceItem[];
}

export interface CoverageEligibilityResponseInsuranceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Insurance information */
  coverage: ReferenceOutputType;
  /** Coverage inforce indicator */
  inforce?: t.OutputOf<primitives.R4.BooleanType>;
  /** When the benefits are applicable */
  benefitPeriod?: PeriodOutputType;
  /** Benefits and authorization details */
  item?: CoverageEligibilityResponseInsuranceItemOutputType[];
}

export const CoverageEligibilityResponseInsurance: t.RecursiveType<
  t.Type<
    CoverageEligibilityResponseInsurance,
    CoverageEligibilityResponseInsuranceOutputType
  >,
  CoverageEligibilityResponseInsurance,
  CoverageEligibilityResponseInsuranceOutputType
> = t.recursion<
  CoverageEligibilityResponseInsurance,
  CoverageEligibilityResponseInsuranceOutputType
>("CoverageEligibilityResponseInsurance", () =>
  t.intersection(
    [
      t.type({
        /** Insurance information */
        coverage: Reference
      }),
      t.partial({
        /** When the benefits are applicable */
        benefitPeriod: Period,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Coverage inforce indicator */
        inforce: primitives.R4.boolean,
        /** Benefits and authorization details */
        item: t.array(CoverageEligibilityResponseInsuranceItem),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CoverageEligibilityResponseInsurance"
  )
);

/**
 * Processing errors
 */
export interface CoverageEligibilityResponseError {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Error code detailing processing issues */
  code: CodeableConcept;
}

export interface CoverageEligibilityResponseErrorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Error code detailing processing issues */
  code: CodeableConceptOutputType;
}

export const CoverageEligibilityResponseError: t.RecursiveType<
  t.Type<
    CoverageEligibilityResponseError,
    CoverageEligibilityResponseErrorOutputType
  >,
  CoverageEligibilityResponseError,
  CoverageEligibilityResponseErrorOutputType
> = t.recursion<
  CoverageEligibilityResponseError,
  CoverageEligibilityResponseErrorOutputType
>("CoverageEligibilityResponseError", () =>
  t.intersection(
    [
      t.type({
        /** Error code detailing processing issues */
        code: CodeableConcept
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
    "CoverageEligibilityResponseError"
  )
);

/**
 * CoverageEligibilityResponse resource
 */
export interface CoverageEligibilityResponse {
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
  /** auth-requirements | benefits | discovery | validation */
  purpose: t.TypeOf<primitives.R4.CodeType>[];
  /** Intended recipient of products and services */
  patient: Reference;
  /** Estimated date or dates of service */
  serviced?: t.TypeOf<primitives.R4.DateType> | Period;
  /** Response creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Party responsible for the request */
  requestor?: Reference;
  /** Eligibility request reference */
  request: Reference;
  /** queued | complete | error | partial */
  outcome: t.TypeOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.TypeOf<primitives.R4.StringType>;
  /** Coverage issuer */
  insurer: Reference;
  /** Patient insurance information */
  insurance?: CoverageEligibilityResponseInsurance[];
  /** Preauthorization reference */
  preAuthRef?: t.TypeOf<primitives.R4.StringType>;
  /** Printed form identifier */
  form?: CodeableConcept;
  /** Processing errors */
  error?: CoverageEligibilityResponseError[];
}

export interface CoverageEligibilityResponseOutputType {
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
  /** auth-requirements | benefits | discovery | validation */
  purpose: t.OutputOf<primitives.R4.CodeType>[];
  /** Intended recipient of products and services */
  patient: ReferenceOutputType;
  /** Estimated date or dates of service */
  serviced?: t.OutputOf<primitives.R4.DateType> | PeriodOutputType;
  /** Response creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Party responsible for the request */
  requestor?: ReferenceOutputType;
  /** Eligibility request reference */
  request: ReferenceOutputType;
  /** queued | complete | error | partial */
  outcome: t.OutputOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.OutputOf<primitives.R4.StringType>;
  /** Coverage issuer */
  insurer: ReferenceOutputType;
  /** Patient insurance information */
  insurance?: CoverageEligibilityResponseInsuranceOutputType[];
  /** Preauthorization reference */
  preAuthRef?: t.OutputOf<primitives.R4.StringType>;
  /** Printed form identifier */
  form?: CodeableConceptOutputType;
  /** Processing errors */
  error?: CoverageEligibilityResponseErrorOutputType[];
}

export const CoverageEligibilityResponse: t.RecursiveType<
  t.Type<CoverageEligibilityResponse, CoverageEligibilityResponseOutputType>,
  CoverageEligibilityResponse,
  CoverageEligibilityResponseOutputType
> = t.recursion<
  CoverageEligibilityResponse,
  CoverageEligibilityResponseOutputType
>("CoverageEligibilityResponse", () =>
  t.intersection(
    [
      t.type({
        /** Response creation date */
        created: primitives.R4.dateTime,
        /** Coverage issuer */
        insurer: Reference,
        /** queued | complete | error | partial */
        outcome: primitives.R4.code,
        /** Intended recipient of products and services */
        patient: Reference,
        /** auth-requirements | benefits | discovery | validation */
        purpose: t.array(primitives.R4.code),
        /** Eligibility request reference */
        request: Reference,
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Disposition Message */
        disposition: primitives.R4.string,
        /** Processing errors */
        error: t.array(CoverageEligibilityResponseError),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Printed form identifier */
        form: CodeableConcept,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for coverage eligiblity request */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Patient insurance information */
        insurance: t.array(CoverageEligibilityResponseInsurance),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Preauthorization reference */
        preAuthRef: primitives.R4.string,
        /** Party responsible for the request */
        requestor: Reference,
        /** Estimated date or dates of service */
        serviced: t.union([primitives.R4.date, Period]),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "CoverageEligibilityResponse"
  )
);
