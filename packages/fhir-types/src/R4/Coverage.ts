/**
 * Coverage Module
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
 * Exceptions for patient payments
 */
export interface CoverageCostToBeneficiaryException {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Exception category */
  type: CodeableConcept;
  /** The effective period of the exception */
  period?: Period;
}

export interface CoverageCostToBeneficiaryExceptionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Exception category */
  type: CodeableConceptOutputType;
  /** The effective period of the exception */
  period?: PeriodOutputType;
}

export const CoverageCostToBeneficiaryException: t.RecursiveType<
  t.Type<
    CoverageCostToBeneficiaryException,
    CoverageCostToBeneficiaryExceptionOutputType
  >,
  CoverageCostToBeneficiaryException,
  CoverageCostToBeneficiaryExceptionOutputType
> = t.recursion<
  CoverageCostToBeneficiaryException,
  CoverageCostToBeneficiaryExceptionOutputType
>("CoverageCostToBeneficiaryException", () =>
  t.intersection(
    [
      t.type({
        /** Exception category */
        type: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The effective period of the exception */
        period: Period
      })
    ],
    "CoverageCostToBeneficiaryException"
  )
);

/**
 * Patient payments for services/products
 */
export interface CoverageCostToBeneficiary {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Cost category */
  type?: CodeableConcept;
  /** The amount or percentage due from the beneficiary */
  value: Quantity | Money;
  /** Exceptions for patient payments */
  exception?: CoverageCostToBeneficiaryException[];
}

export interface CoverageCostToBeneficiaryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Cost category */
  type?: CodeableConceptOutputType;
  /** The amount or percentage due from the beneficiary */
  value: QuantityOutputType | MoneyOutputType;
  /** Exceptions for patient payments */
  exception?: CoverageCostToBeneficiaryExceptionOutputType[];
}

export const CoverageCostToBeneficiary: t.RecursiveType<
  t.Type<CoverageCostToBeneficiary, CoverageCostToBeneficiaryOutputType>,
  CoverageCostToBeneficiary,
  CoverageCostToBeneficiaryOutputType
> = t.recursion<CoverageCostToBeneficiary, CoverageCostToBeneficiaryOutputType>(
  "CoverageCostToBeneficiary",
  () =>
    t.intersection(
      [
        t.type({
          /** The amount or percentage due from the beneficiary */
          value: t.union([Quantity, Money])
        }),
        t.partial({
          /** Exceptions for patient payments */
          exception: t.array(CoverageCostToBeneficiaryException),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Cost category */
          type: CodeableConcept
        })
      ],
      "CoverageCostToBeneficiary"
    )
);

/**
 * Additional coverage classifications
 */
export interface CoverageClass {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of class such as 'group' or 'plan' */
  type: CodeableConcept;
  /** Value associated with the type */
  value: t.TypeOf<primitives.R4.StringType>;
  /** Human readable description of the type and value */
  name?: t.TypeOf<primitives.R4.StringType>;
}

export interface CoverageClassOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of class such as 'group' or 'plan' */
  type: CodeableConceptOutputType;
  /** Value associated with the type */
  value: t.OutputOf<primitives.R4.StringType>;
  /** Human readable description of the type and value */
  name?: t.OutputOf<primitives.R4.StringType>;
}

export const CoverageClass: t.RecursiveType<
  t.Type<CoverageClass, CoverageClassOutputType>,
  CoverageClass,
  CoverageClassOutputType
> = t.recursion<CoverageClass, CoverageClassOutputType>("CoverageClass", () =>
  t.intersection(
    [
      t.type({
        /** Type of class such as 'group' or 'plan' */
        type: CodeableConcept,
        /** Value associated with the type */
        value: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Human readable description of the type and value */
        name: primitives.R4.string
      })
    ],
    "CoverageClass"
  )
);

/**
 * Insurance or medical plan or a payment agreement
 */
export interface Coverage {
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
  /** Business Identifier for the coverage */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Coverage category such as medical or accident */
  type?: CodeableConcept;
  /** Owner of the policy */
  policyHolder?: Reference;
  /** Subscriber to the policy */
  subscriber?: Reference;
  /** ID assigned to the subscriber */
  subscriberId?: t.TypeOf<primitives.R4.StringType>;
  /** Plan beneficiary */
  beneficiary: Reference;
  /** Dependent number */
  dependent?: t.TypeOf<primitives.R4.StringType>;
  /** Beneficiary relationship to the subscriber */
  relationship?: CodeableConcept;
  /** Coverage start and end dates */
  period?: Period;
  /** Issuer of the policy */
  payor: Reference[];
  /** Additional coverage classifications */
  class?: CoverageClass[];
  /** Relative order of the coverage */
  order?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Insurer network */
  network?: t.TypeOf<primitives.R4.StringType>;
  /** Patient payments for services/products */
  costToBeneficiary?: CoverageCostToBeneficiary[];
  /** Reimbursement to insurer */
  subrogation?: t.TypeOf<primitives.R4.BooleanType>;
  /** Contract details */
  contract?: Reference[];
}

export interface CoverageOutputType {
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
  /** Business Identifier for the coverage */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Coverage category such as medical or accident */
  type?: CodeableConceptOutputType;
  /** Owner of the policy */
  policyHolder?: ReferenceOutputType;
  /** Subscriber to the policy */
  subscriber?: ReferenceOutputType;
  /** ID assigned to the subscriber */
  subscriberId?: t.OutputOf<primitives.R4.StringType>;
  /** Plan beneficiary */
  beneficiary: ReferenceOutputType;
  /** Dependent number */
  dependent?: t.OutputOf<primitives.R4.StringType>;
  /** Beneficiary relationship to the subscriber */
  relationship?: CodeableConceptOutputType;
  /** Coverage start and end dates */
  period?: PeriodOutputType;
  /** Issuer of the policy */
  payor: ReferenceOutputType[];
  /** Additional coverage classifications */
  class?: CoverageClassOutputType[];
  /** Relative order of the coverage */
  order?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Insurer network */
  network?: t.OutputOf<primitives.R4.StringType>;
  /** Patient payments for services/products */
  costToBeneficiary?: CoverageCostToBeneficiaryOutputType[];
  /** Reimbursement to insurer */
  subrogation?: t.OutputOf<primitives.R4.BooleanType>;
  /** Contract details */
  contract?: ReferenceOutputType[];
}

export const Coverage: t.RecursiveType<
  t.Type<Coverage, CoverageOutputType>,
  Coverage,
  CoverageOutputType
> = t.recursion<Coverage, CoverageOutputType>("Coverage", () =>
  t.intersection(
    [
      t.type({
        /** Plan beneficiary */
        beneficiary: Reference,
        /** Issuer of the policy */
        payor: t.array(Reference),
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Additional coverage classifications */
        class: t.array(CoverageClass),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Contract details */
        contract: t.array(Reference),
        /** Patient payments for services/products */
        costToBeneficiary: t.array(CoverageCostToBeneficiary),
        /** Dependent number */
        dependent: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for the coverage */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Insurer network */
        network: primitives.R4.string,
        /** Relative order of the coverage */
        order: primitives.R4.positiveInt,
        /** Coverage start and end dates */
        period: Period,
        /** Owner of the policy */
        policyHolder: Reference,
        /** Beneficiary relationship to the subscriber */
        relationship: CodeableConcept,
        /** Reimbursement to insurer */
        subrogation: primitives.R4.boolean,
        /** Subscriber to the policy */
        subscriber: Reference,
        /** ID assigned to the subscriber */
        subscriberId: primitives.R4.string,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Coverage category such as medical or accident */
        type: CodeableConcept
      })
    ],
    "Coverage"
  )
);
