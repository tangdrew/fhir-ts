/**
 * Consent Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A healthcare consumer's  choices to permit or deny recipients or roles to perform actions for specific purposes and periods of time
 */
export interface Consent {
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
  /** Identifier for this record (external references) */
  identifier?: Identifier[];
  /** draft | proposed | active | rejected | inactive | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Which of the four areas this resource covers (extensible) */
  scope: CodeableConcept;
  /** Classification of the consent statement - for indexing/retrieval */
  category: CodeableConcept[];
  /** Who the consent applies to */
  patient?: Reference;
  /** When this Consent was created or indexed */
  dateTime?: primitives.R4.dateTime;
  /** Extension of dateTime element */
  _dateTime?: Element;
  /** Who is agreeing to the policy and rules */
  performer?: Reference[];
  /** Custodian of the consent */
  organization?: Reference[];
  /** Source from which this consent is taken */
  sourceAttachment?: Attachment;
  /** Source from which this consent is taken */
  sourceReference?: Reference;
  /** Regulation that this consents to */
  policyRule?: CodeableConcept;
}
/**
 * A healthcare consumer's  choices to permit or deny recipients or roles to perform actions for specific purposes and periods of time
 */
export const Consent: t.Type<Consent> = t.recursion<Consent>("Consent", () =>
  t.intersection([
    t.type({
      /** draft | proposed | active | rejected | inactive | entered-in-error */
      status: primitives.R4.code,
      /** Which of the four areas this resource covers (extensible) */
      scope: CodeableConcept,
      /** Classification of the consent statement - for indexing/retrieval */
      category: t.array(CodeableConcept)
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
      /** Identifier for this record (external references) */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Who the consent applies to */
      patient: Reference,
      /** When this Consent was created or indexed */
      dateTime: primitives.R4.dateTime,
      /** Extension of dateTime element */
      _dateTime: Element,
      /** Who is agreeing to the policy and rules */
      performer: t.array(Reference),
      /** Custodian of the consent */
      organization: t.array(Reference),
      /** Source from which this consent is taken */
      sourceAttachment: Attachment,
      /** Source from which this consent is taken */
      sourceReference: Reference,
      /** Regulation that this consents to */
      policyRule: CodeableConcept
    })
  ])
);

/**
 * Policies covered by this consent
 */
export interface ConsentPolicy {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Enforcement source for policy */
  authority?: primitives.R4.uri;
  /** Extension of authority element */
  _authority?: Element;
  /** Specific policy covered by this consent */
  uri?: primitives.R4.uri;
  /** Extension of uri element */
  _uri?: Element;
}
/**
 * Policies covered by this consent
 */
export const ConsentPolicy: t.Type<ConsentPolicy> = t.recursion<ConsentPolicy>(
  "ConsentPolicy",
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
        /** Enforcement source for policy */
        authority: primitives.R4.uri,
        /** Extension of authority element */
        _authority: Element,
        /** Specific policy covered by this consent */
        uri: primitives.R4.uri,
        /** Extension of uri element */
        _uri: Element
      })
    ])
);

/**
 * Consent Verified by patient or family
 */
export interface ConsentVerification {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Has been verified */
  verified: boolean;
  /** Extension of verified element */
  _verified?: Element;
  /** Person who verified */
  verifiedWith?: Reference;
  /** When consent verified */
  verificationDate?: primitives.R4.dateTime;
  /** Extension of verificationDate element */
  _verificationDate?: Element;
}
/**
 * Consent Verified by patient or family
 */
export const ConsentVerification: t.Type<ConsentVerification> = t.recursion<
  ConsentVerification
>("ConsentVerification", () =>
  t.intersection([
    t.type({
      /** Has been verified */
      verified: primitives.R4.boolean
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
      /** Extension of verified element */
      _verified: Element,
      /** Person who verified */
      verifiedWith: Reference,
      /** When consent verified */
      verificationDate: primitives.R4.dateTime,
      /** Extension of verificationDate element */
      _verificationDate: Element
    })
  ])
);

/**
 * Constraints to the base Consent.policyRule
 */
export interface ConsentProvision {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** deny | permit */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Timeframe for this rule */
  period?: Period;
  /** Actions controlled by this rule */
  action?: CodeableConcept[];
  /** Security Labels that define affected resources */
  securityLabel?: Coding[];
  /** Context of activities covered by this rule */
  purpose?: Coding[];
  /** e.g. Resource Type, Profile, CDA, etc. */
  class?: Coding[];
  /** e.g. LOINC or SNOMED CT code, etc. in the content */
  code?: CodeableConcept[];
  /** Timeframe for data controlled by this rule */
  dataPeriod?: Period;
  /** Nested Exception Rules */
  provision?: ConsentProvision[];
}
/**
 * Constraints to the base Consent.policyRule
 */
export const ConsentProvision: t.Type<ConsentProvision> = t.recursion<
  ConsentProvision
>("ConsentProvision", () =>
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
      /** deny | permit */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element,
      /** Timeframe for this rule */
      period: Period,
      /** Actions controlled by this rule */
      action: t.array(CodeableConcept),
      /** Security Labels that define affected resources */
      securityLabel: t.array(Coding),
      /** Context of activities covered by this rule */
      purpose: t.array(Coding),
      /** e.g. Resource Type, Profile, CDA, etc. */
      class: t.array(Coding),
      /** e.g. LOINC or SNOMED CT code, etc. in the content */
      code: t.array(CodeableConcept),
      /** Timeframe for data controlled by this rule */
      dataPeriod: Period,
      /** Nested Exception Rules */
      provision: t.array(ConsentProvision)
    })
  ])
);

/**
 * Who|what controlled by this rule (or group, by role)
 */
export interface ConsentProvisionActor {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** How the actor is involved */
  role: CodeableConcept;
  /** Resource for the actor (or group, by role) */
  reference: Reference;
}
/**
 * Who|what controlled by this rule (or group, by role)
 */
export const ConsentProvisionActor: t.Type<ConsentProvisionActor> = t.recursion<
  ConsentProvisionActor
>("ConsentProvisionActor", () =>
  t.intersection([
    t.type({
      /** How the actor is involved */
      role: CodeableConcept,
      /** Resource for the actor (or group, by role) */
      reference: Reference
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
 * Data controlled by this rule
 */
export interface ConsentProvisionData {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** instance | related | dependents | authoredby */
  meaning: primitives.R4.code;
  /** Extension of meaning element */
  _meaning?: Element;
  /** The actual data reference */
  reference: Reference;
}
/**
 * Data controlled by this rule
 */
export const ConsentProvisionData: t.Type<ConsentProvisionData> = t.recursion<
  ConsentProvisionData
>("ConsentProvisionData", () =>
  t.intersection([
    t.type({
      /** instance | related | dependents | authoredby */
      meaning: primitives.R4.code,
      /** The actual data reference */
      reference: Reference
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
      /** Extension of meaning element */
      _meaning: Element
    })
  ])
);
