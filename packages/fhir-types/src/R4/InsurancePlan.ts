/**
 * InsurancePlan Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { HumanName, HumanNameOutputType } from "./HumanName";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * List of the costs
 */
export interface InsurancePlanPlanSpecificCostBenefitCost {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface InsurancePlanPlanSpecificCostBenefitCostOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of cost */
  type: CodeableConceptOutputType;
  /** in-network | out-of-network | other */
  applicability?: CodeableConceptOutputType;
  /** Additional information about the cost */
  qualifiers?: CodeableConceptOutputType[];
  /** The actual cost value */
  value?: QuantityOutputType;
}

export const InsurancePlanPlanSpecificCostBenefitCost: t.RecursiveType<
  t.Type<
    InsurancePlanPlanSpecificCostBenefitCost,
    InsurancePlanPlanSpecificCostBenefitCostOutputType
  >,
  InsurancePlanPlanSpecificCostBenefitCost,
  InsurancePlanPlanSpecificCostBenefitCostOutputType
> = t.recursion<
  InsurancePlanPlanSpecificCostBenefitCost,
  InsurancePlanPlanSpecificCostBenefitCostOutputType
>("InsurancePlanPlanSpecificCostBenefitCost", () =>
  t.intersection(
    [
      t.type({
        /** Type of cost */
        type: CodeableConcept
      }),
      t.partial({
        /** in-network | out-of-network | other */
        applicability: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Additional information about the cost */
        qualifiers: t.array(CodeableConcept),
        /** The actual cost value */
        value: Quantity
      })
    ],
    "InsurancePlanPlanSpecificCostBenefitCost"
  )
);

/**
 * Benefits list
 */
export interface InsurancePlanPlanSpecificCostBenefit {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of specific benefit */
  type: CodeableConcept;
  /** List of the costs */
  cost?: InsurancePlanPlanSpecificCostBenefitCost[];
}

export interface InsurancePlanPlanSpecificCostBenefitOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of specific benefit */
  type: CodeableConceptOutputType;
  /** List of the costs */
  cost?: InsurancePlanPlanSpecificCostBenefitCostOutputType[];
}

export const InsurancePlanPlanSpecificCostBenefit: t.RecursiveType<
  t.Type<
    InsurancePlanPlanSpecificCostBenefit,
    InsurancePlanPlanSpecificCostBenefitOutputType
  >,
  InsurancePlanPlanSpecificCostBenefit,
  InsurancePlanPlanSpecificCostBenefitOutputType
> = t.recursion<
  InsurancePlanPlanSpecificCostBenefit,
  InsurancePlanPlanSpecificCostBenefitOutputType
>("InsurancePlanPlanSpecificCostBenefit", () =>
  t.intersection(
    [
      t.type({
        /** Type of specific benefit */
        type: CodeableConcept
      }),
      t.partial({
        /** List of the costs */
        cost: t.array(InsurancePlanPlanSpecificCostBenefitCost),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "InsurancePlanPlanSpecificCostBenefit"
  )
);

/**
 * Specific costs
 */
export interface InsurancePlanPlanSpecificCost {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** General category of benefit */
  category: CodeableConcept;
  /** Benefits list */
  benefit?: InsurancePlanPlanSpecificCostBenefit[];
}

export interface InsurancePlanPlanSpecificCostOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** General category of benefit */
  category: CodeableConceptOutputType;
  /** Benefits list */
  benefit?: InsurancePlanPlanSpecificCostBenefitOutputType[];
}

export const InsurancePlanPlanSpecificCost: t.RecursiveType<
  t.Type<
    InsurancePlanPlanSpecificCost,
    InsurancePlanPlanSpecificCostOutputType
  >,
  InsurancePlanPlanSpecificCost,
  InsurancePlanPlanSpecificCostOutputType
> = t.recursion<
  InsurancePlanPlanSpecificCost,
  InsurancePlanPlanSpecificCostOutputType
>("InsurancePlanPlanSpecificCost", () =>
  t.intersection(
    [
      t.type({
        /** General category of benefit */
        category: CodeableConcept
      }),
      t.partial({
        /** Benefits list */
        benefit: t.array(InsurancePlanPlanSpecificCostBenefit),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "InsurancePlanPlanSpecificCost"
  )
);

/**
 * Overall costs
 */
export interface InsurancePlanPlanGeneralCost {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of cost */
  type?: CodeableConcept;
  /** Number of enrollees */
  groupSize?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Cost value */
  cost?: Money;
  /** Additional cost information */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface InsurancePlanPlanGeneralCostOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of cost */
  type?: CodeableConceptOutputType;
  /** Number of enrollees */
  groupSize?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Cost value */
  cost?: MoneyOutputType;
  /** Additional cost information */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const InsurancePlanPlanGeneralCost: t.RecursiveType<
  t.Type<InsurancePlanPlanGeneralCost, InsurancePlanPlanGeneralCostOutputType>,
  InsurancePlanPlanGeneralCost,
  InsurancePlanPlanGeneralCostOutputType
> = t.recursion<
  InsurancePlanPlanGeneralCost,
  InsurancePlanPlanGeneralCostOutputType
>("InsurancePlanPlanGeneralCost", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional cost information */
        comment: primitives.R4.string,
        /** Cost value */
        cost: Money,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Number of enrollees */
        groupSize: primitives.R4.positiveInt,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Type of cost */
        type: CodeableConcept
      })
    ],
    "InsurancePlanPlanGeneralCost"
  )
);

/**
 * Plan details
 */
export interface InsurancePlanPlan {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  /** Overall costs */
  generalCost?: InsurancePlanPlanGeneralCost[];
  /** Specific costs */
  specificCost?: InsurancePlanPlanSpecificCost[];
}

export interface InsurancePlanPlanOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Business Identifier for Product */
  identifier?: IdentifierOutputType[];
  /** Type of plan */
  type?: CodeableConceptOutputType;
  /** Where product applies */
  coverageArea?: ReferenceOutputType[];
  /** What networks provide coverage */
  network?: ReferenceOutputType[];
  /** Overall costs */
  generalCost?: InsurancePlanPlanGeneralCostOutputType[];
  /** Specific costs */
  specificCost?: InsurancePlanPlanSpecificCostOutputType[];
}

export const InsurancePlanPlan: t.RecursiveType<
  t.Type<InsurancePlanPlan, InsurancePlanPlanOutputType>,
  InsurancePlanPlan,
  InsurancePlanPlanOutputType
> = t.recursion<InsurancePlanPlan, InsurancePlanPlanOutputType>(
  "InsurancePlanPlan",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Where product applies */
          coverageArea: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Overall costs */
          generalCost: t.array(InsurancePlanPlanGeneralCost),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Business Identifier for Product */
          identifier: t.array(Identifier),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** What networks provide coverage */
          network: t.array(Reference),
          /** Specific costs */
          specificCost: t.array(InsurancePlanPlanSpecificCost),
          /** Type of plan */
          type: CodeableConcept
        })
      ],
      "InsurancePlanPlan"
    )
);

/**
 * Benefit limits
 */
export interface InsurancePlanCoverageBenefitLimit {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Maximum value allowed */
  value?: Quantity;
  /** Benefit limit details */
  code?: CodeableConcept;
}

export interface InsurancePlanCoverageBenefitLimitOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Maximum value allowed */
  value?: QuantityOutputType;
  /** Benefit limit details */
  code?: CodeableConceptOutputType;
}

export const InsurancePlanCoverageBenefitLimit: t.RecursiveType<
  t.Type<
    InsurancePlanCoverageBenefitLimit,
    InsurancePlanCoverageBenefitLimitOutputType
  >,
  InsurancePlanCoverageBenefitLimit,
  InsurancePlanCoverageBenefitLimitOutputType
> = t.recursion<
  InsurancePlanCoverageBenefitLimit,
  InsurancePlanCoverageBenefitLimitOutputType
>("InsurancePlanCoverageBenefitLimit", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Benefit limit details */
        code: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Maximum value allowed */
        value: Quantity
      })
    ],
    "InsurancePlanCoverageBenefitLimit"
  )
);

/**
 * List of benefits
 */
export interface InsurancePlanCoverageBenefit {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of benefit */
  type: CodeableConcept;
  /** Referral requirements */
  requirement?: t.TypeOf<primitives.R4.StringType>;
  /** Benefit limits */
  limit?: InsurancePlanCoverageBenefitLimit[];
}

export interface InsurancePlanCoverageBenefitOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of benefit */
  type: CodeableConceptOutputType;
  /** Referral requirements */
  requirement?: t.OutputOf<primitives.R4.StringType>;
  /** Benefit limits */
  limit?: InsurancePlanCoverageBenefitLimitOutputType[];
}

export const InsurancePlanCoverageBenefit: t.RecursiveType<
  t.Type<InsurancePlanCoverageBenefit, InsurancePlanCoverageBenefitOutputType>,
  InsurancePlanCoverageBenefit,
  InsurancePlanCoverageBenefitOutputType
> = t.recursion<
  InsurancePlanCoverageBenefit,
  InsurancePlanCoverageBenefitOutputType
>("InsurancePlanCoverageBenefit", () =>
  t.intersection(
    [
      t.type({
        /** Type of benefit */
        type: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Benefit limits */
        limit: t.array(InsurancePlanCoverageBenefitLimit),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Referral requirements */
        requirement: primitives.R4.string
      })
    ],
    "InsurancePlanCoverageBenefit"
  )
);

/**
 * Coverage details
 */
export interface InsurancePlanCoverage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of coverage */
  type: CodeableConcept;
  /** What networks provide coverage */
  network?: Reference[];
  /** List of benefits */
  benefit: InsurancePlanCoverageBenefit[];
}

export interface InsurancePlanCoverageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of coverage */
  type: CodeableConceptOutputType;
  /** What networks provide coverage */
  network?: ReferenceOutputType[];
  /** List of benefits */
  benefit: InsurancePlanCoverageBenefitOutputType[];
}

export const InsurancePlanCoverage: t.RecursiveType<
  t.Type<InsurancePlanCoverage, InsurancePlanCoverageOutputType>,
  InsurancePlanCoverage,
  InsurancePlanCoverageOutputType
> = t.recursion<InsurancePlanCoverage, InsurancePlanCoverageOutputType>(
  "InsurancePlanCoverage",
  () =>
    t.intersection(
      [
        t.type({
          /** List of benefits */
          benefit: t.array(InsurancePlanCoverageBenefit),
          /** Type of coverage */
          type: CodeableConcept
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** What networks provide coverage */
          network: t.array(Reference)
        })
      ],
      "InsurancePlanCoverage"
    )
);

/**
 * Contact for the product
 */
export interface InsurancePlanContact {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface InsurancePlanContactOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of contact */
  purpose?: CodeableConceptOutputType;
  /** A name associated with the contact */
  name?: HumanNameOutputType;
  /** Contact details (telephone, email, etc.)  for a contact */
  telecom?: ContactPointOutputType[];
  /** Visiting or postal addresses for the contact */
  address?: AddressOutputType;
}

export const InsurancePlanContact: t.RecursiveType<
  t.Type<InsurancePlanContact, InsurancePlanContactOutputType>,
  InsurancePlanContact,
  InsurancePlanContactOutputType
> = t.recursion<InsurancePlanContact, InsurancePlanContactOutputType>(
  "InsurancePlanContact",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Visiting or postal addresses for the contact */
          address: Address,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** A name associated with the contact */
          name: HumanName,
          /** The type of contact */
          purpose: CodeableConcept,
          /** Contact details (telephone, email, etc.)  for a contact */
          telecom: t.array(ContactPoint)
        })
      ],
      "InsurancePlanContact"
    )
);

/**
 * Details of a Health Insurance product/plan provided by an organization
 */
export interface InsurancePlan {
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
  /** Business Identifier for Product */
  identifier?: Identifier[];
  /** draft | active | retired | unknown */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Kind of product */
  type?: CodeableConcept[];
  /** Official name */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Alternate names */
  alias?: t.TypeOf<primitives.R4.StringType>[];
  /** When the product is available */
  period?: Period;
  /** Plan issuer */
  ownedBy?: Reference;
  /** Product administrator */
  administeredBy?: Reference;
  /** Where product applies */
  coverageArea?: Reference[];
  /** Contact for the product */
  contact?: InsurancePlanContact[];
  /** Technical endpoint */
  endpoint?: Reference[];
  /** What networks are Included */
  network?: Reference[];
  /** Coverage details */
  coverage?: InsurancePlanCoverage[];
  /** Plan details */
  plan?: InsurancePlanPlan[];
}

export interface InsurancePlanOutputType {
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
  /** Business Identifier for Product */
  identifier?: IdentifierOutputType[];
  /** draft | active | retired | unknown */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Kind of product */
  type?: CodeableConceptOutputType[];
  /** Official name */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Alternate names */
  alias?: t.OutputOf<primitives.R4.StringType>[];
  /** When the product is available */
  period?: PeriodOutputType;
  /** Plan issuer */
  ownedBy?: ReferenceOutputType;
  /** Product administrator */
  administeredBy?: ReferenceOutputType;
  /** Where product applies */
  coverageArea?: ReferenceOutputType[];
  /** Contact for the product */
  contact?: InsurancePlanContactOutputType[];
  /** Technical endpoint */
  endpoint?: ReferenceOutputType[];
  /** What networks are Included */
  network?: ReferenceOutputType[];
  /** Coverage details */
  coverage?: InsurancePlanCoverageOutputType[];
  /** Plan details */
  plan?: InsurancePlanPlanOutputType[];
}

export const InsurancePlan: t.RecursiveType<
  t.Type<InsurancePlan, InsurancePlanOutputType>,
  InsurancePlan,
  InsurancePlanOutputType
> = t.recursion<InsurancePlan, InsurancePlanOutputType>("InsurancePlan", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Product administrator */
        administeredBy: Reference,
        /** Alternate names */
        alias: t.array(primitives.R4.string),
        /** Contact for the product */
        contact: t.array(InsurancePlanContact),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Coverage details */
        coverage: t.array(InsurancePlanCoverage),
        /** Where product applies */
        coverageArea: t.array(Reference),
        /** Technical endpoint */
        endpoint: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for Product */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Official name */
        name: primitives.R4.string,
        /** What networks are Included */
        network: t.array(Reference),
        /** Plan issuer */
        ownedBy: Reference,
        /** When the product is available */
        period: Period,
        /** Plan details */
        plan: t.array(InsurancePlanPlan),
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Kind of product */
        type: t.array(CodeableConcept)
      })
    ],
    "InsurancePlan"
  )
);
