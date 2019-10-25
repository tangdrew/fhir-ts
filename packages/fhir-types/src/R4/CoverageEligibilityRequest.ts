/**
 * CoverageEligibilityRequest Module
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
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * CoverageEligibilityRequest resource
 */
export interface CoverageEligibilityRequest {
  /** The type of resource */
  resourceType?: "CoverageEligibilityRequest";
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
  /** Desired processing priority */
  priority?: CodeableConcept;
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
  /** Creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Author */
  enterer?: Reference;
  /** Party responsible for the request */
  provider?: Reference;
  /** Coverage issuer */
  insurer: Reference;
  /** Servicing facility */
  facility?: Reference;
}
/**
 * CoverageEligibilityRequest resource
 */
export const CoverageEligibilityRequest: t.Type<
  CoverageEligibilityRequest
> = t.recursion<CoverageEligibilityRequest>("CoverageEligibilityRequest", () =>
  t.intersection([
    t.type({
      /** active | cancelled | draft | entered-in-error */
      status: primitives.R4.code,
      /** auth-requirements | benefits | discovery | validation */
      purpose: t.array(primitives.R4.code),
      /** Intended recipient of products and services */
      patient: Reference,
      /** Creation date */
      created: primitives.R4.dateTime,
      /** Coverage issuer */
      insurer: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("CoverageEligibilityRequest"),
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
      /** Desired processing priority */
      priority: CodeableConcept,
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
      /** Author */
      enterer: Reference,
      /** Party responsible for the request */
      provider: Reference,
      /** Servicing facility */
      facility: Reference
    })
  ])
);

/**
 * Supporting information
 */
export interface CoverageEligibilityRequestSupportingInfo {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Information instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Data to be provided */
  information: Reference;
  /** Applies to all items */
  appliesToAll?: boolean;
  /** Extension of appliesToAll element */
  _appliesToAll?: Element;
}
/**
 * Supporting information
 */
export const CoverageEligibilityRequestSupportingInfo: t.Type<
  CoverageEligibilityRequestSupportingInfo
> = t.recursion<CoverageEligibilityRequestSupportingInfo>(
  "CoverageEligibilityRequestSupportingInfo",
  () =>
    t.intersection([
      t.type({
        /** Information instance identifier */
        sequence: primitives.R4.positiveInt,
        /** Data to be provided */
        information: Reference
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
        /** Extension of sequence element */
        _sequence: Element,
        /** Applies to all items */
        appliesToAll: primitives.R4.boolean,
        /** Extension of appliesToAll element */
        _appliesToAll: Element
      })
    ])
);

/**
 * Patient insurance information
 */
export interface CoverageEligibilityRequestInsurance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Applicable coverage */
  focal?: boolean;
  /** Extension of focal element */
  _focal?: Element;
  /** Insurance information */
  coverage: Reference;
  /** Additional provider contract number */
  businessArrangement?: string;
  /** Extension of businessArrangement element */
  _businessArrangement?: Element;
}
/**
 * Patient insurance information
 */
export const CoverageEligibilityRequestInsurance: t.Type<
  CoverageEligibilityRequestInsurance
> = t.recursion<CoverageEligibilityRequestInsurance>(
  "CoverageEligibilityRequestInsurance",
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
        /** Applicable coverage */
        focal: primitives.R4.boolean,
        /** Extension of focal element */
        _focal: Element,
        /** Additional provider contract number */
        businessArrangement: primitives.R4.string,
        /** Extension of businessArrangement element */
        _businessArrangement: Element
      })
    ])
);

/**
 * Item to be evaluated for eligibiity
 */
export interface CoverageEligibilityRequestItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Applicable exception or supporting information */
  supportingInfoSequence?: primitives.R4.positiveInt[];
  /** Extension of supportingInfoSequence element */
  _supportingInfoSequence?: Element[];
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
  /** Product or service details */
  detail?: Reference[];
}
/**
 * Item to be evaluated for eligibiity
 */
export const CoverageEligibilityRequestItem: t.Type<
  CoverageEligibilityRequestItem
> = t.recursion<CoverageEligibilityRequestItem>(
  "CoverageEligibilityRequestItem",
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
        /** Applicable exception or supporting information */
        supportingInfoSequence: t.array(primitives.R4.positiveInt),
        /** Extension of supportingInfoSequence element */
        _supportingInfoSequence: t.array(Element),
        /** Benefit classification */
        category: CodeableConcept,
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Product or service billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Perfoming practitioner */
        provider: Reference,
        /** Count of products or services */
        quantity: Quantity,
        /** Fee, charge or cost per item */
        unitPrice: Money,
        /** Servicing facility */
        facility: Reference,
        /** Product or service details */
        detail: t.array(Reference)
      })
    ])
);

/**
 * Applicable diagnosis
 */
export interface CoverageEligibilityRequestItemDiagnosis {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Nature of illness or problem */
  diagnosisCodeableConcept?: CodeableConcept;
  /** Nature of illness or problem */
  diagnosisReference?: Reference;
}
/**
 * Applicable diagnosis
 */
export const CoverageEligibilityRequestItemDiagnosis: t.Type<
  CoverageEligibilityRequestItemDiagnosis
> = t.recursion<CoverageEligibilityRequestItemDiagnosis>(
  "CoverageEligibilityRequestItemDiagnosis",
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
        /** Nature of illness or problem */
        diagnosisCodeableConcept: CodeableConcept,
        /** Nature of illness or problem */
        diagnosisReference: Reference
      })
    ])
);
