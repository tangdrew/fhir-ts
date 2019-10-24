/**
 * CoverageEligibilityResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * CoverageEligibilityResponse resource
 */
export interface CoverageEligibilityResponse {
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
  /** Business Identifier for coverage eligiblity request */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** auth-requirements | benefits | discovery | validation */
  purpose: primitives.R4.code[];
  /** Extension of purpose element */
  _purpose?: Element[];
  /** Intended recipient of products and services */
  patient: Reference;
  /** Estimated date or dates of service */
  servicedDate?: primitives.R4.date;
  /** Extension of servicedDate element */
  _servicedDate?: Element;
  /** Estimated date or dates of service */
  servicedPeriod?: Period;
  /** Response creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Party responsible for the request */
  requestor?: Reference;
  /** Eligibility request reference */
  request: Reference;
  /** queued | complete | error | partial */
  outcome: primitives.R4.code;
  /** Extension of outcome element */
  _outcome?: Element;
  /** Disposition Message */
  disposition?: string;
  /** Extension of disposition element */
  _disposition?: Element;
  /** Coverage issuer */
  insurer: Reference;
  /** Preauthorization reference */
  preAuthRef?: string;
  /** Extension of preAuthRef element */
  _preAuthRef?: Element;
  /** Printed form identifier */
  form?: CodeableConcept;
}
/**
 * CoverageEligibilityResponse resource
 */
export const CoverageEligibilityResponse: t.Type<
  CoverageEligibilityResponse
> = t.recursion<CoverageEligibilityResponse>(
  "CoverageEligibilityResponse",
  () =>
    t.intersection([
      t.type({
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code,
        /** auth-requirements | benefits | discovery | validation */
        purpose: t.array(primitives.R4.code),
        /** Intended recipient of products and services */
        patient: Reference,
        /** Response creation date */
        created: primitives.R4.dateTime,
        /** Eligibility request reference */
        request: Reference,
        /** queued | complete | error | partial */
        outcome: primitives.R4.code,
        /** Coverage issuer */
        insurer: Reference
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
        /** Business Identifier for coverage eligiblity request */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Extension of purpose element */
        _purpose: t.array(Element),
        /** Estimated date or dates of service */
        servicedDate: primitives.R4.date,
        /** Extension of servicedDate element */
        _servicedDate: Element,
        /** Estimated date or dates of service */
        servicedPeriod: Period,
        /** Extension of created element */
        _created: Element,
        /** Party responsible for the request */
        requestor: Reference,
        /** Extension of outcome element */
        _outcome: Element,
        /** Disposition Message */
        disposition: primitives.R4.string,
        /** Extension of disposition element */
        _disposition: Element,
        /** Preauthorization reference */
        preAuthRef: primitives.R4.string,
        /** Extension of preAuthRef element */
        _preAuthRef: Element,
        /** Printed form identifier */
        form: CodeableConcept
      })
    ])
);

/**
 * Patient insurance information
 */
export interface CoverageEligibilityResponseInsurance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Insurance information */
  coverage: Reference;
  /** Coverage inforce indicator */
  inforce?: boolean;
  /** Extension of inforce element */
  _inforce?: Element;
  /** When the benefits are applicable */
  benefitPeriod?: Period;
}
/**
 * Patient insurance information
 */
export const CoverageEligibilityResponseInsurance: t.Type<
  CoverageEligibilityResponseInsurance
> = t.recursion<CoverageEligibilityResponseInsurance>(
  "CoverageEligibilityResponseInsurance",
  () =>
    t.intersection([
      t.type({
        /** Insurance information */
        coverage: Reference
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
        /** Coverage inforce indicator */
        inforce: primitives.R4.boolean,
        /** Extension of inforce element */
        _inforce: Element,
        /** When the benefits are applicable */
        benefitPeriod: Period
      })
    ])
);

/**
 * Benefits and authorization details
 */
export interface CoverageEligibilityResponseInsuranceItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
  excluded?: boolean;
  /** Extension of excluded element */
  _excluded?: Element;
  /** Short name for the benefit */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Description of the benefit or services covered */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** In or out of network */
  network?: CodeableConcept;
  /** Individual or family */
  unit?: CodeableConcept;
  /** Annual or lifetime */
  term?: CodeableConcept;
  /** Authorization required flag */
  authorizationRequired?: boolean;
  /** Extension of authorizationRequired element */
  _authorizationRequired?: Element;
  /** Type of required supporting materials */
  authorizationSupporting?: CodeableConcept[];
  /** Preauthorization requirements endpoint */
  authorizationUrl?: primitives.R4.uri;
  /** Extension of authorizationUrl element */
  _authorizationUrl?: Element;
}
/**
 * Benefits and authorization details
 */
export const CoverageEligibilityResponseInsuranceItem: t.Type<
  CoverageEligibilityResponseInsuranceItem
> = t.recursion<CoverageEligibilityResponseInsuranceItem>(
  "CoverageEligibilityResponseInsuranceItem",
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
        /** Benefit classification */
        category: CodeableConcept,
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Product or service billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Performing practitioner */
        provider: Reference,
        /** Excluded from the plan */
        excluded: primitives.R4.boolean,
        /** Extension of excluded element */
        _excluded: Element,
        /** Short name for the benefit */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Description of the benefit or services covered */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** In or out of network */
        network: CodeableConcept,
        /** Individual or family */
        unit: CodeableConcept,
        /** Annual or lifetime */
        term: CodeableConcept,
        /** Authorization required flag */
        authorizationRequired: primitives.R4.boolean,
        /** Extension of authorizationRequired element */
        _authorizationRequired: Element,
        /** Type of required supporting materials */
        authorizationSupporting: t.array(CodeableConcept),
        /** Preauthorization requirements endpoint */
        authorizationUrl: primitives.R4.uri,
        /** Extension of authorizationUrl element */
        _authorizationUrl: Element
      })
    ])
);

/**
 * Benefit Summary
 */
export interface CoverageEligibilityResponseInsuranceItemBenefit {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Benefit classification */
  type: CodeableConcept;
  /** Benefits allowed */
  allowedUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of allowedUnsignedInt element */
  _allowedUnsignedInt?: Element;
  /** Benefits allowed */
  allowedString?: string;
  /** Extension of allowedString element */
  _allowedString?: Element;
  /** Benefits allowed */
  allowedMoney?: Money;
  /** Benefits used */
  usedUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of usedUnsignedInt element */
  _usedUnsignedInt?: Element;
  /** Benefits used */
  usedString?: string;
  /** Extension of usedString element */
  _usedString?: Element;
  /** Benefits used */
  usedMoney?: Money;
}
/**
 * Benefit Summary
 */
export const CoverageEligibilityResponseInsuranceItemBenefit: t.Type<
  CoverageEligibilityResponseInsuranceItemBenefit
> = t.recursion<CoverageEligibilityResponseInsuranceItemBenefit>(
  "CoverageEligibilityResponseInsuranceItemBenefit",
  () =>
    t.intersection([
      t.type({
        /** Benefit classification */
        type: CodeableConcept
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
        /** Benefits allowed */
        allowedUnsignedInt: primitives.R4.unsignedInt,
        /** Extension of allowedUnsignedInt element */
        _allowedUnsignedInt: Element,
        /** Benefits allowed */
        allowedString: primitives.R4.string,
        /** Extension of allowedString element */
        _allowedString: Element,
        /** Benefits allowed */
        allowedMoney: Money,
        /** Benefits used */
        usedUnsignedInt: primitives.R4.unsignedInt,
        /** Extension of usedUnsignedInt element */
        _usedUnsignedInt: Element,
        /** Benefits used */
        usedString: primitives.R4.string,
        /** Extension of usedString element */
        _usedString: Element,
        /** Benefits used */
        usedMoney: Money
      })
    ])
);

/**
 * Processing errors
 */
export interface CoverageEligibilityResponseError {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Error code detailing processing issues */
  code: CodeableConcept;
}
/**
 * Processing errors
 */
export const CoverageEligibilityResponseError: t.Type<
  CoverageEligibilityResponseError
> = t.recursion<CoverageEligibilityResponseError>(
  "CoverageEligibilityResponseError",
  () =>
    t.intersection([
      t.type({
        /** Error code detailing processing issues */
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
        modifierExtension: t.array(Extension)
      })
    ])
);
