/**
 * Consent Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Consent Verified by patient or family
 */
export interface ConsentVerification {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Has been verified */
  verified: t.TypeOf<primitives.R4.BooleanType>;
  /** Person who verified */
  verifiedWith?: Reference;
  /** When consent verified */
  verificationDate?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface ConsentVerificationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Has been verified */
  verified: t.OutputOf<primitives.R4.BooleanType>;
  /** Person who verified */
  verifiedWith?: ReferenceOutputType;
  /** When consent verified */
  verificationDate?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const ConsentVerification: t.RecursiveType<
  t.Type<ConsentVerification, ConsentVerificationOutputType>,
  ConsentVerification,
  ConsentVerificationOutputType
> = t.recursion<ConsentVerification, ConsentVerificationOutputType>(
  "ConsentVerification",
  () =>
    t.intersection(
      [
        t.type({
          /** Has been verified */
          verified: primitives.R4.boolean
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** When consent verified */
          verificationDate: primitives.R4.dateTime,
          /** Person who verified */
          verifiedWith: Reference
        })
      ],
      "ConsentVerification"
    )
);

/**
 * Data controlled by this rule
 */
export interface ConsentProvisionData {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** instance | related | dependents | authoredby */
  meaning: t.TypeOf<primitives.R4.CodeType>;
  /** The actual data reference */
  reference: Reference;
}

export interface ConsentProvisionDataOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** instance | related | dependents | authoredby */
  meaning: t.OutputOf<primitives.R4.CodeType>;
  /** The actual data reference */
  reference: ReferenceOutputType;
}

export const ConsentProvisionData: t.RecursiveType<
  t.Type<ConsentProvisionData, ConsentProvisionDataOutputType>,
  ConsentProvisionData,
  ConsentProvisionDataOutputType
> = t.recursion<ConsentProvisionData, ConsentProvisionDataOutputType>(
  "ConsentProvisionData",
  () =>
    t.intersection(
      [
        t.type({
          /** instance | related | dependents | authoredby */
          meaning: primitives.R4.code,
          /** The actual data reference */
          reference: Reference
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
      "ConsentProvisionData"
    )
);

/**
 * Who|what controlled by this rule (or group, by role)
 */
export interface ConsentProvisionActor {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** How the actor is involved */
  role: CodeableConcept;
  /** Resource for the actor (or group, by role) */
  reference: Reference;
}

export interface ConsentProvisionActorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** How the actor is involved */
  role: CodeableConceptOutputType;
  /** Resource for the actor (or group, by role) */
  reference: ReferenceOutputType;
}

export const ConsentProvisionActor: t.RecursiveType<
  t.Type<ConsentProvisionActor, ConsentProvisionActorOutputType>,
  ConsentProvisionActor,
  ConsentProvisionActorOutputType
> = t.recursion<ConsentProvisionActor, ConsentProvisionActorOutputType>(
  "ConsentProvisionActor",
  () =>
    t.intersection(
      [
        t.type({
          /** Resource for the actor (or group, by role) */
          reference: Reference,
          /** How the actor is involved */
          role: CodeableConcept
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
      "ConsentProvisionActor"
    )
);

/**
 * Constraints to the base Consent.policyRule
 */
export interface ConsentProvision {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** deny | permit */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** Timeframe for this rule */
  period?: Period;
  /** Who|what controlled by this rule (or group, by role) */
  actor?: ConsentProvisionActor[];
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
  /** Data controlled by this rule */
  data?: ConsentProvisionData[];
  /** Nested Exception Rules */
  provision?: ConsentProvision[];
}

export interface ConsentProvisionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** deny | permit */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** Timeframe for this rule */
  period?: PeriodOutputType;
  /** Who|what controlled by this rule (or group, by role) */
  actor?: ConsentProvisionActorOutputType[];
  /** Actions controlled by this rule */
  action?: CodeableConceptOutputType[];
  /** Security Labels that define affected resources */
  securityLabel?: CodingOutputType[];
  /** Context of activities covered by this rule */
  purpose?: CodingOutputType[];
  /** e.g. Resource Type, Profile, CDA, etc. */
  class?: CodingOutputType[];
  /** e.g. LOINC or SNOMED CT code, etc. in the content */
  code?: CodeableConceptOutputType[];
  /** Timeframe for data controlled by this rule */
  dataPeriod?: PeriodOutputType;
  /** Data controlled by this rule */
  data?: ConsentProvisionDataOutputType[];
  /** Nested Exception Rules */
  provision?: ConsentProvisionOutputType[];
}

export const ConsentProvision: t.RecursiveType<
  t.Type<ConsentProvision, ConsentProvisionOutputType>,
  ConsentProvision,
  ConsentProvisionOutputType
> = t.recursion<ConsentProvision, ConsentProvisionOutputType>(
  "ConsentProvision",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Actions controlled by this rule */
          action: t.array(CodeableConcept),
          /** Who|what controlled by this rule (or group, by role) */
          actor: t.array(ConsentProvisionActor),
          /** e.g. Resource Type, Profile, CDA, etc. */
          class: t.array(Coding),
          /** e.g. LOINC or SNOMED CT code, etc. in the content */
          code: t.array(CodeableConcept),
          /** Data controlled by this rule */
          data: t.array(ConsentProvisionData),
          /** Timeframe for data controlled by this rule */
          dataPeriod: Period,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Timeframe for this rule */
          period: Period,
          /** Nested Exception Rules */
          provision: t.array(ConsentProvision),
          /** Context of activities covered by this rule */
          purpose: t.array(Coding),
          /** Security Labels that define affected resources */
          securityLabel: t.array(Coding),
          /** deny | permit */
          type: primitives.R4.code
        })
      ],
      "ConsentProvision"
    )
);

/**
 * Policies covered by this consent
 */
export interface ConsentPolicy {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Enforcement source for policy */
  authority?: t.TypeOf<primitives.R4.URIType>;
  /** Specific policy covered by this consent */
  uri?: t.TypeOf<primitives.R4.URIType>;
}

export interface ConsentPolicyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Enforcement source for policy */
  authority?: t.OutputOf<primitives.R4.URIType>;
  /** Specific policy covered by this consent */
  uri?: t.OutputOf<primitives.R4.URIType>;
}

export const ConsentPolicy: t.RecursiveType<
  t.Type<ConsentPolicy, ConsentPolicyOutputType>,
  ConsentPolicy,
  ConsentPolicyOutputType
> = t.recursion<ConsentPolicy, ConsentPolicyOutputType>("ConsentPolicy", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Enforcement source for policy */
        authority: primitives.R4.uri,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Specific policy covered by this consent */
        uri: primitives.R4.uri
      })
    ],
    "ConsentPolicy"
  )
);

/**
 * A healthcare consumer's  choices to permit or deny recipients or roles to perform actions for specific purposes and periods of time
 */
export interface Consent {
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
  /** Identifier for this record (external references) */
  identifier?: Identifier[];
  /** draft | proposed | active | rejected | inactive | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Which of the four areas this resource covers (extensible) */
  scope: CodeableConcept;
  /** Classification of the consent statement - for indexing/retrieval */
  category: CodeableConcept[];
  /** Who the consent applies to */
  patient?: Reference;
  /** When this Consent was created or indexed */
  dateTime?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who is agreeing to the policy and rules */
  performer?: Reference[];
  /** Custodian of the consent */
  organization?: Reference[];
  /** Source from which this consent is taken */
  source?: Attachment | Reference;
  /** Policies covered by this consent */
  policy?: ConsentPolicy[];
  /** Regulation that this consents to */
  policyRule?: CodeableConcept;
  /** Consent Verified by patient or family */
  verification?: ConsentVerification[];
  /** Constraints to the base Consent.policyRule */
  provision?: ConsentProvision;
}

export interface ConsentOutputType {
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
  /** Identifier for this record (external references) */
  identifier?: IdentifierOutputType[];
  /** draft | proposed | active | rejected | inactive | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Which of the four areas this resource covers (extensible) */
  scope: CodeableConceptOutputType;
  /** Classification of the consent statement - for indexing/retrieval */
  category: CodeableConceptOutputType[];
  /** Who the consent applies to */
  patient?: ReferenceOutputType;
  /** When this Consent was created or indexed */
  dateTime?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is agreeing to the policy and rules */
  performer?: ReferenceOutputType[];
  /** Custodian of the consent */
  organization?: ReferenceOutputType[];
  /** Source from which this consent is taken */
  source?: AttachmentOutputType | ReferenceOutputType;
  /** Policies covered by this consent */
  policy?: ConsentPolicyOutputType[];
  /** Regulation that this consents to */
  policyRule?: CodeableConceptOutputType;
  /** Consent Verified by patient or family */
  verification?: ConsentVerificationOutputType[];
  /** Constraints to the base Consent.policyRule */
  provision?: ConsentProvisionOutputType;
}

export const Consent: t.RecursiveType<
  t.Type<Consent, ConsentOutputType>,
  Consent,
  ConsentOutputType
> = t.recursion<Consent, ConsentOutputType>("Consent", () =>
  t.intersection(
    [
      t.type({
        /** Classification of the consent statement - for indexing/retrieval */
        category: t.array(CodeableConcept),
        /** Which of the four areas this resource covers (extensible) */
        scope: CodeableConcept,
        /** draft | proposed | active | rejected | inactive | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** When this Consent was created or indexed */
        dateTime: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifier for this record (external references) */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Custodian of the consent */
        organization: t.array(Reference),
        /** Who the consent applies to */
        patient: Reference,
        /** Who is agreeing to the policy and rules */
        performer: t.array(Reference),
        /** Policies covered by this consent */
        policy: t.array(ConsentPolicy),
        /** Regulation that this consents to */
        policyRule: CodeableConcept,
        /** Constraints to the base Consent.policyRule */
        provision: ConsentProvision,
        /** Source from which this consent is taken */
        source: t.union([Attachment, Reference]),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Consent Verified by patient or family */
        verification: t.array(ConsentVerification)
      })
    ],
    "Consent"
  )
);
