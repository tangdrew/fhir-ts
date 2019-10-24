/**
 * Account Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Tracks balance, charges, for patient or cost center
 */
export interface Account {
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
  /** Account number */
  identifier?: Identifier[];
  /** active | inactive | entered-in-error | on-hold | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** E.g. patient, expense, depreciation */
  type?: CodeableConcept;
  /** Human-readable label */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** The entity that caused the expenses */
  subject?: Reference[];
  /** Transaction window */
  servicePeriod?: Period;
  /** Entity managing the Account */
  owner?: Reference;
  /** Explanation of purpose/use */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Reference to a parent Account */
  partOf?: Reference;
}
/**
 * Tracks balance, charges, for patient or cost center
 */
export const Account: t.Type<Account> = t.recursion<Account>("Account", () =>
  t.intersection([
    t.type({
      /** active | inactive | entered-in-error | on-hold | unknown */
      status: primitives.R4.code
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
      /** Account number */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** E.g. patient, expense, depreciation */
      type: CodeableConcept,
      /** Human-readable label */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** The entity that caused the expenses */
      subject: t.array(Reference),
      /** Transaction window */
      servicePeriod: Period,
      /** Entity managing the Account */
      owner: Reference,
      /** Explanation of purpose/use */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Reference to a parent Account */
      partOf: Reference
    })
  ])
);

/**
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 */
export interface AccountCoverage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The party(s), such as insurances, that may contribute to the payment of this account */
  coverage: Reference;
  /** The priority of the coverage in the context of this account */
  priority?: primitives.R4.positiveInt;
  /** Extension of priority element */
  _priority?: Element;
}
/**
 * The party(s) that are responsible for covering the payment of this account, and what order should they be applied to the account
 */
export const AccountCoverage: t.Type<AccountCoverage> = t.recursion<
  AccountCoverage
>("AccountCoverage", () =>
  t.intersection([
    t.type({
      /** The party(s), such as insurances, that may contribute to the payment of this account */
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
      /** The priority of the coverage in the context of this account */
      priority: primitives.R4.positiveInt,
      /** Extension of priority element */
      _priority: Element
    })
  ])
);

/**
 * The parties ultimately responsible for balancing the Account
 */
export interface AccountGuarantor {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Responsible entity */
  party: Reference;
  /** Credit or other hold applied */
  onHold?: boolean;
  /** Extension of onHold element */
  _onHold?: Element;
  /** Guarantee account during */
  period?: Period;
}
/**
 * The parties ultimately responsible for balancing the Account
 */
export const AccountGuarantor: t.Type<AccountGuarantor> = t.recursion<
  AccountGuarantor
>("AccountGuarantor", () =>
  t.intersection([
    t.type({
      /** Responsible entity */
      party: Reference
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
      /** Credit or other hold applied */
      onHold: primitives.R4.boolean,
      /** Extension of onHold element */
      _onHold: Element,
      /** Guarantee account during */
      period: Period
    })
  ])
);
