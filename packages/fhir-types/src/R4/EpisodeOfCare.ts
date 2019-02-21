/**
 * EpisodeOfCare Module
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
 * Past list of status codes (the current status may be included to cover the start date of the status)
 */
export interface EpisodeOfCareStatusHistory {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Duration the EpisodeOfCare was in the specified status */
  period: Period;
}

export interface EpisodeOfCareStatusHistoryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Duration the EpisodeOfCare was in the specified status */
  period: PeriodOutputType;
}

export const EpisodeOfCareStatusHistory: t.RecursiveType<
  t.Type<EpisodeOfCareStatusHistory, EpisodeOfCareStatusHistoryOutputType>,
  EpisodeOfCareStatusHistory,
  EpisodeOfCareStatusHistoryOutputType
> = t.recursion<
  EpisodeOfCareStatusHistory,
  EpisodeOfCareStatusHistoryOutputType
>("EpisodeOfCareStatusHistory", () =>
  t.intersection(
    [
      t.type({
        /** Duration the EpisodeOfCare was in the specified status */
        period: Period,
        /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
        status: primitives.R4.code
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
    "EpisodeOfCareStatusHistory"
  )
);

/**
 * The list of diagnosis relevant to this episode of care
 */
export interface EpisodeOfCareDiagnosis {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Conditions/problems/diagnoses this episode of care is for */
  condition: Reference;
  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
  role?: CodeableConcept;
  /** Ranking of the diagnosis (for each role type) */
  rank?: t.TypeOf<primitives.R4.PositiveIntegerType>;
}

export interface EpisodeOfCareDiagnosisOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Conditions/problems/diagnoses this episode of care is for */
  condition: ReferenceOutputType;
  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
  role?: CodeableConceptOutputType;
  /** Ranking of the diagnosis (for each role type) */
  rank?: t.OutputOf<primitives.R4.PositiveIntegerType>;
}

export const EpisodeOfCareDiagnosis: t.RecursiveType<
  t.Type<EpisodeOfCareDiagnosis, EpisodeOfCareDiagnosisOutputType>,
  EpisodeOfCareDiagnosis,
  EpisodeOfCareDiagnosisOutputType
> = t.recursion<EpisodeOfCareDiagnosis, EpisodeOfCareDiagnosisOutputType>(
  "EpisodeOfCareDiagnosis",
  () =>
    t.intersection(
      [
        t.type({
          /** Conditions/problems/diagnoses this episode of care is for */
          condition: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Ranking of the diagnosis (for each role type) */
          rank: primitives.R4.positiveInt,
          /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
          role: CodeableConcept
        })
      ],
      "EpisodeOfCareDiagnosis"
    )
);

/**
 * An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
 */
export interface EpisodeOfCare {
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
  /** Business Identifier(s) relevant for this EpisodeOfCare */
  identifier?: Identifier[];
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Past list of status codes (the current status may be included to cover the start date of the status) */
  statusHistory?: EpisodeOfCareStatusHistory[];
  /** Type/class  - e.g. specialist referral, disease management */
  type?: CodeableConcept[];
  /** The list of diagnosis relevant to this episode of care */
  diagnosis?: EpisodeOfCareDiagnosis[];
  /** The patient who is the focus of this episode of care */
  patient: Reference;
  /** Organization that assumes care */
  managingOrganization?: Reference;
  /** Interval during responsibility is assumed */
  period?: Period;
  /** Originating Referral Request(s) */
  referralRequest?: Reference[];
  /** Care manager/care coordinator for the patient */
  careManager?: Reference;
  /** Other practitioners facilitating this episode of care */
  team?: Reference[];
  /** The set of accounts that may be used for billing for this EpisodeOfCare */
  account?: Reference[];
}

export interface EpisodeOfCareOutputType {
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
  /** Business Identifier(s) relevant for this EpisodeOfCare */
  identifier?: IdentifierOutputType[];
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Past list of status codes (the current status may be included to cover the start date of the status) */
  statusHistory?: EpisodeOfCareStatusHistoryOutputType[];
  /** Type/class  - e.g. specialist referral, disease management */
  type?: CodeableConceptOutputType[];
  /** The list of diagnosis relevant to this episode of care */
  diagnosis?: EpisodeOfCareDiagnosisOutputType[];
  /** The patient who is the focus of this episode of care */
  patient: ReferenceOutputType;
  /** Organization that assumes care */
  managingOrganization?: ReferenceOutputType;
  /** Interval during responsibility is assumed */
  period?: PeriodOutputType;
  /** Originating Referral Request(s) */
  referralRequest?: ReferenceOutputType[];
  /** Care manager/care coordinator for the patient */
  careManager?: ReferenceOutputType;
  /** Other practitioners facilitating this episode of care */
  team?: ReferenceOutputType[];
  /** The set of accounts that may be used for billing for this EpisodeOfCare */
  account?: ReferenceOutputType[];
}

export const EpisodeOfCare: t.RecursiveType<
  t.Type<EpisodeOfCare, EpisodeOfCareOutputType>,
  EpisodeOfCare,
  EpisodeOfCareOutputType
> = t.recursion<EpisodeOfCare, EpisodeOfCareOutputType>("EpisodeOfCare", () =>
  t.intersection(
    [
      t.type({
        /** The patient who is the focus of this episode of care */
        patient: Reference,
        /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** The set of accounts that may be used for billing for this EpisodeOfCare */
        account: t.array(Reference),
        /** Care manager/care coordinator for the patient */
        careManager: Reference,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The list of diagnosis relevant to this episode of care */
        diagnosis: t.array(EpisodeOfCareDiagnosis),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier(s) relevant for this EpisodeOfCare */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Organization that assumes care */
        managingOrganization: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Interval during responsibility is assumed */
        period: Period,
        /** Originating Referral Request(s) */
        referralRequest: t.array(Reference),
        /** Past list of status codes (the current status may be included to cover the start date of the status) */
        statusHistory: t.array(EpisodeOfCareStatusHistory),
        /** Other practitioners facilitating this episode of care */
        team: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Type/class  - e.g. specialist referral, disease management */
        type: t.array(CodeableConcept)
      })
    ],
    "EpisodeOfCare"
  )
);
