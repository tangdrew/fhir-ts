/**
 * Account Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The parties ultimately responsible for balancing the Account
 */
export interface AccountGuarantor {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Responsible entity */
  party: Reference;
  /** Credit or other hold applied */
  onHold?: t.TypeOf<primitives.R4.BooleanType>;
  /** Guarantee account during */
  period?: Period;
}

export interface AccountGuarantorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Responsible entity */
  party: ReferenceOutputType;
  /** Credit or other hold applied */
  onHold?: t.OutputOf<primitives.R4.BooleanType>;
  /** Guarantee account during */
  period?: PeriodOutputType;
}

export const AccountGuarantor: t.RecursiveType<
  t.Type<AccountGuarantor, AccountGuarantorOutputType>,
  AccountGuarantor,
  AccountGuarantorOutputType
> = t.recursion<AccountGuarantor, AccountGuarantorOutputType>(
  "AccountGuarantor",
  () =>
    t.intersection(
      [
        t.type({
          /** Responsible entity */
          party: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Credit or other hold applied */
          onHold: primitives.R4.boolean,
          /** Guarantee account during */
          period: Period
        })
      ],
      "AccountGuarantor"
    )
);

/**
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 */
export interface AccountCoverage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The party(s), such as insurances, that may contribute to the payment of this account */
  coverage: Reference;
  /** The priority of the coverage in the context of this account */
  priority?: t.TypeOf<primitives.R4.PositiveIntegerType>;
}

export interface AccountCoverageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The party(s), such as insurances, that may contribute to the payment of this account */
  coverage: ReferenceOutputType;
  /** The priority of the coverage in the context of this account */
  priority?: t.OutputOf<primitives.R4.PositiveIntegerType>;
}

export const AccountCoverage: t.RecursiveType<
  t.Type<AccountCoverage, AccountCoverageOutputType>,
  AccountCoverage,
  AccountCoverageOutputType
> = t.recursion<AccountCoverage, AccountCoverageOutputType>(
  "AccountCoverage",
  () =>
    t.intersection(
      [
        t.type({
          /** The party(s), such as insurances, that may contribute to the payment of this account */
          coverage: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The priority of the coverage in the context of this account */
          priority: primitives.R4.positiveInt
        })
      ],
      "AccountCoverage"
    )
);

/**
 * Tracks balance, charges, for patient or cost center
 */
export interface Account {
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
  /** Account number */
  identifier?: Identifier[];
  /** active | inactive | entered-in-error | on-hold | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** E.g. patient, expense, depreciation */
  type?: CodeableConcept;
  /** Human-readable label */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** The entity that caused the expenses */
  subject?: Reference[];
  /** Transaction window */
  servicePeriod?: Period;
  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account */
  coverage?: AccountCoverage[];
  /** Entity managing the Account */
  owner?: Reference;
  /** Explanation of purpose/use */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** The parties ultimately responsible for balancing the Account */
  guarantor?: AccountGuarantor[];
  /** Reference to a parent Account */
  partOf?: Reference;
}

export interface AccountOutputType {
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
  /** Account number */
  identifier?: IdentifierOutputType[];
  /** active | inactive | entered-in-error | on-hold | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** E.g. patient, expense, depreciation */
  type?: CodeableConceptOutputType;
  /** Human-readable label */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** The entity that caused the expenses */
  subject?: ReferenceOutputType[];
  /** Transaction window */
  servicePeriod?: PeriodOutputType;
  /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account */
  coverage?: AccountCoverageOutputType[];
  /** Entity managing the Account */
  owner?: ReferenceOutputType;
  /** Explanation of purpose/use */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** The parties ultimately responsible for balancing the Account */
  guarantor?: AccountGuarantorOutputType[];
  /** Reference to a parent Account */
  partOf?: ReferenceOutputType;
}

export const Account: t.RecursiveType<
  t.Type<Account, AccountOutputType>,
  Account,
  AccountOutputType
> = t.recursion<Account, AccountOutputType>("Account", () =>
  t.intersection(
    [
      t.type({
        /** active | inactive | entered-in-error | on-hold | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account */
        coverage: t.array(AccountCoverage),
        /** Explanation of purpose/use */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The parties ultimately responsible for balancing the Account */
        guarantor: t.array(AccountGuarantor),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Account number */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Human-readable label */
        name: primitives.R4.string,
        /** Entity managing the Account */
        owner: Reference,
        /** Reference to a parent Account */
        partOf: Reference,
        /** Transaction window */
        servicePeriod: Period,
        /** The entity that caused the expenses */
        subject: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** E.g. patient, expense, depreciation */
        type: CodeableConcept
      })
    ],
    "Account"
  )
);
