/**
 * Coverage Module
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
 * Insurance or medical plan or a payment agreement
 */
export interface Coverage {
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
  /** Business Identifier for the coverage */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Coverage category such as medical or accident */
  type?: CodeableConcept;
  /** Owner of the policy */
  policyHolder?: Reference;
  /** Subscriber to the policy */
  subscriber?: Reference;
  /** ID assigned to the subscriber */
  subscriberId?: string;
  /** Extension of subscriberId element */
  _subscriberId?: Element;
  /** Plan beneficiary */
  beneficiary: Reference;
  /** Dependent number */
  dependent?: string;
  /** Extension of dependent element */
  _dependent?: Element;
  /** Beneficiary relationship to the subscriber */
  relationship?: CodeableConcept;
  /** Coverage start and end dates */
  period?: Period;
  /** Issuer of the policy */
  payor: Reference[];
  /** Relative order of the coverage */
  order?: primitives.R4.positiveInt;
  /** Extension of order element */
  _order?: Element;
  /** Insurer network */
  network?: string;
  /** Extension of network element */
  _network?: Element;
  /** Reimbursement to insurer */
  subrogation?: boolean;
  /** Extension of subrogation element */
  _subrogation?: Element;
  /** Contract details */
  contract?: Reference[];
}
/**
 * Insurance or medical plan or a payment agreement
 */
export const Coverage: t.Type<Coverage> = t.recursion<Coverage>(
  "Coverage",
  () =>
    t.intersection([
      t.type({
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code,
        /** Plan beneficiary */
        beneficiary: Reference,
        /** Issuer of the policy */
        payor: t.array(Reference)
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
        /** Business Identifier for the coverage */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Coverage category such as medical or accident */
        type: CodeableConcept,
        /** Owner of the policy */
        policyHolder: Reference,
        /** Subscriber to the policy */
        subscriber: Reference,
        /** ID assigned to the subscriber */
        subscriberId: primitives.R4.string,
        /** Extension of subscriberId element */
        _subscriberId: Element,
        /** Dependent number */
        dependent: primitives.R4.string,
        /** Extension of dependent element */
        _dependent: Element,
        /** Beneficiary relationship to the subscriber */
        relationship: CodeableConcept,
        /** Coverage start and end dates */
        period: Period,
        /** Relative order of the coverage */
        order: primitives.R4.positiveInt,
        /** Extension of order element */
        _order: Element,
        /** Insurer network */
        network: primitives.R4.string,
        /** Extension of network element */
        _network: Element,
        /** Reimbursement to insurer */
        subrogation: primitives.R4.boolean,
        /** Extension of subrogation element */
        _subrogation: Element,
        /** Contract details */
        contract: t.array(Reference)
      })
    ])
);

/**
 * Additional coverage classifications
 */
export interface CoverageClass {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of class such as 'group' or 'plan' */
  type: CodeableConcept;
  /** Value associated with the type */
  value: string;
  /** Extension of value element */
  _value?: Element;
  /** Human readable description of the type and value */
  name?: string;
  /** Extension of name element */
  _name?: Element;
}
/**
 * Additional coverage classifications
 */
export const CoverageClass: t.Type<CoverageClass> = t.recursion<CoverageClass>(
  "CoverageClass",
  () =>
    t.intersection([
      t.type({
        /** Type of class such as 'group' or 'plan' */
        type: CodeableConcept,
        /** Value associated with the type */
        value: primitives.R4.string
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
        /** Extension of value element */
        _value: Element,
        /** Human readable description of the type and value */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element
      })
    ])
);

/**
 * Patient payments for services/products
 */
export interface CoverageCostToBeneficiary {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Cost category */
  type?: CodeableConcept;
  /** The amount or percentage due from the beneficiary */
  valueQuantity: Quantity;
  /** The amount or percentage due from the beneficiary */
  valueMoney: Money;
}
/**
 * Patient payments for services/products
 */
export const CoverageCostToBeneficiary: t.Type<
  CoverageCostToBeneficiary
> = t.recursion<CoverageCostToBeneficiary>("CoverageCostToBeneficiary", () =>
  t.intersection([
    t.type({
      /** The amount or percentage due from the beneficiary */
      valueQuantity: Quantity,
      /** The amount or percentage due from the beneficiary */
      valueMoney: Money
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
      /** Cost category */
      type: CodeableConcept
    })
  ])
);

/**
 * Exceptions for patient payments
 */
export interface CoverageCostToBeneficiaryException {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Exception category */
  type: CodeableConcept;
  /** The effective period of the exception */
  period?: Period;
}
/**
 * Exceptions for patient payments
 */
export const CoverageCostToBeneficiaryException: t.Type<
  CoverageCostToBeneficiaryException
> = t.recursion<CoverageCostToBeneficiaryException>(
  "CoverageCostToBeneficiaryException",
  () =>
    t.intersection([
      t.type({
        /** Exception category */
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
        /** The effective period of the exception */
        period: Period
      })
    ])
);
