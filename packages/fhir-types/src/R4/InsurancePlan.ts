/**
 * InsurancePlan Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Details of a Health Insurance product/plan provided by an organization
 */
export interface InsurancePlan {
  /** The type of resource */
  resourceType?: "InsurancePlan";
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
  /** Business Identifier for Product */
  identifier?: Identifier[];
  /** draft | active | retired | unknown */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Kind of product */
  type?: CodeableConcept[];
  /** Official name */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Alternate names */
  alias?: string[];
  /** Extension of alias element */
  _alias?: Element[];
  /** When the product is available */
  period?: Period;
  /** Plan issuer */
  ownedBy?: Reference;
  /** Product administrator */
  administeredBy?: Reference;
  /** Where product applies */
  coverageArea?: Reference[];
  /** Technical endpoint */
  endpoint?: Reference[];
  /** What networks are Included */
  network?: Reference[];
}
/**
 * Details of a Health Insurance product/plan provided by an organization
 */
export const InsurancePlan: t.Type<InsurancePlan> = t.recursion<InsurancePlan>(
  "InsurancePlan",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("InsurancePlan"),
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
        /** Business Identifier for Product */
        identifier: t.array(Identifier),
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** Kind of product */
        type: t.array(CodeableConcept),
        /** Official name */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Alternate names */
        alias: t.array(primitives.R4.string),
        /** Extension of alias element */
        _alias: t.array(Element),
        /** When the product is available */
        period: Period,
        /** Plan issuer */
        ownedBy: Reference,
        /** Product administrator */
        administeredBy: Reference,
        /** Where product applies */
        coverageArea: t.array(Reference),
        /** Technical endpoint */
        endpoint: t.array(Reference),
        /** What networks are Included */
        network: t.array(Reference)
      })
    ])
);

/**
 * Contact for the product
 */
export interface InsurancePlanContact {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of contact */
  purpose?: CodeableConcept;
  /** A name associated with the contact */
  name?: HumanName;
  /** Contact details (telephone, email, etc.)  for a contact */
  telecom?: ContactPoint[];
  /** Visiting or postal addresses for the contact */
  address?: Address;
}
/**
 * Contact for the product
 */
export const InsurancePlanContact: t.Type<InsurancePlanContact> = t.recursion<
  InsurancePlanContact
>("InsurancePlanContact", () =>
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
      /** The type of contact */
      purpose: CodeableConcept,
      /** A name associated with the contact */
      name: HumanName,
      /** Contact details (telephone, email, etc.)  for a contact */
      telecom: t.array(ContactPoint),
      /** Visiting or postal addresses for the contact */
      address: Address
    })
  ])
);

/**
 * Coverage details
 */
export interface InsurancePlanCoverage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of coverage */
  type: CodeableConcept;
  /** What networks provide coverage */
  network?: Reference[];
}
/**
 * Coverage details
 */
export const InsurancePlanCoverage: t.Type<InsurancePlanCoverage> = t.recursion<
  InsurancePlanCoverage
>("InsurancePlanCoverage", () =>
  t.intersection([
    t.type({
      /** Type of coverage */
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
      /** What networks provide coverage */
      network: t.array(Reference)
    })
  ])
);

/**
 * List of benefits
 */
export interface InsurancePlanCoverageBenefit {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of benefit */
  type: CodeableConcept;
  /** Referral requirements */
  requirement?: string;
  /** Extension of requirement element */
  _requirement?: Element;
}
/**
 * List of benefits
 */
export const InsurancePlanCoverageBenefit: t.Type<
  InsurancePlanCoverageBenefit
> = t.recursion<InsurancePlanCoverageBenefit>(
  "InsurancePlanCoverageBenefit",
  () =>
    t.intersection([
      t.type({
        /** Type of benefit */
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
        /** Referral requirements */
        requirement: primitives.R4.string,
        /** Extension of requirement element */
        _requirement: Element
      })
    ])
);

/**
 * Benefit limits
 */
export interface InsurancePlanCoverageBenefitLimit {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Maximum value allowed */
  value?: Quantity;
  /** Benefit limit details */
  code?: CodeableConcept;
}
/**
 * Benefit limits
 */
export const InsurancePlanCoverageBenefitLimit: t.Type<
  InsurancePlanCoverageBenefitLimit
> = t.recursion<InsurancePlanCoverageBenefitLimit>(
  "InsurancePlanCoverageBenefitLimit",
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
        /** Maximum value allowed */
        value: Quantity,
        /** Benefit limit details */
        code: CodeableConcept
      })
    ])
);

/**
 * Plan details
 */
export interface InsurancePlanPlan {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Business Identifier for Product */
  identifier?: Identifier[];
  /** Type of plan */
  type?: CodeableConcept;
  /** Where product applies */
  coverageArea?: Reference[];
  /** What networks provide coverage */
  network?: Reference[];
}
/**
 * Plan details
 */
export const InsurancePlanPlan: t.Type<InsurancePlanPlan> = t.recursion<
  InsurancePlanPlan
>("InsurancePlanPlan", () =>
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
      /** Business Identifier for Product */
      identifier: t.array(Identifier),
      /** Type of plan */
      type: CodeableConcept,
      /** Where product applies */
      coverageArea: t.array(Reference),
      /** What networks provide coverage */
      network: t.array(Reference)
    })
  ])
);

/**
 * Overall costs
 */
export interface InsurancePlanPlanGeneralCost {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of cost */
  type?: CodeableConcept;
  /** Number of enrollees */
  groupSize?: primitives.R4.positiveInt;
  /** Extension of groupSize element */
  _groupSize?: Element;
  /** Cost value */
  cost?: Money;
  /** Additional cost information */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * Overall costs
 */
export const InsurancePlanPlanGeneralCost: t.Type<
  InsurancePlanPlanGeneralCost
> = t.recursion<InsurancePlanPlanGeneralCost>(
  "InsurancePlanPlanGeneralCost",
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
        /** Type of cost */
        type: CodeableConcept,
        /** Number of enrollees */
        groupSize: primitives.R4.positiveInt,
        /** Extension of groupSize element */
        _groupSize: Element,
        /** Cost value */
        cost: Money,
        /** Additional cost information */
        comment: primitives.R4.string,
        /** Extension of comment element */
        _comment: Element
      })
    ])
);

/**
 * Specific costs
 */
export interface InsurancePlanPlanSpecificCost {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** General category of benefit */
  category: CodeableConcept;
}
/**
 * Specific costs
 */
export const InsurancePlanPlanSpecificCost: t.Type<
  InsurancePlanPlanSpecificCost
> = t.recursion<InsurancePlanPlanSpecificCost>(
  "InsurancePlanPlanSpecificCost",
  () =>
    t.intersection([
      t.type({
        /** General category of benefit */
        category: CodeableConcept
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

/**
 * Benefits list
 */
export interface InsurancePlanPlanSpecificCostBenefit {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of specific benefit */
  type: CodeableConcept;
}
/**
 * Benefits list
 */
export const InsurancePlanPlanSpecificCostBenefit: t.Type<
  InsurancePlanPlanSpecificCostBenefit
> = t.recursion<InsurancePlanPlanSpecificCostBenefit>(
  "InsurancePlanPlanSpecificCostBenefit",
  () =>
    t.intersection([
      t.type({
        /** Type of specific benefit */
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
        modifierExtension: t.array(Extension)
      })
    ])
);

/**
 * List of the costs
 */
export interface InsurancePlanPlanSpecificCostBenefitCost {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of cost */
  type: CodeableConcept;
  /** in-network | out-of-network | other */
  applicability?: CodeableConcept;
  /** Additional information about the cost */
  qualifiers?: CodeableConcept[];
  /** The actual cost value */
  value?: Quantity;
}
/**
 * List of the costs
 */
export const InsurancePlanPlanSpecificCostBenefitCost: t.Type<
  InsurancePlanPlanSpecificCostBenefitCost
> = t.recursion<InsurancePlanPlanSpecificCostBenefitCost>(
  "InsurancePlanPlanSpecificCostBenefitCost",
  () =>
    t.intersection([
      t.type({
        /** Type of cost */
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
        /** in-network | out-of-network | other */
        applicability: CodeableConcept,
        /** Additional information about the cost */
        qualifiers: t.array(CodeableConcept),
        /** The actual cost value */
        value: Quantity
      })
    ])
);
