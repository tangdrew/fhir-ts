/**
 * EpisodeOfCare Module
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
 * An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
 */
export interface EpisodeOfCare {
  /** The type of resource */
  resourceType?: "EpisodeOfCare";
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
  /** Business Identifier(s) relevant for this EpisodeOfCare */
  identifier?: Identifier[];
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Type/class  - e.g. specialist referral, disease management */
  type?: CodeableConcept[];
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
/**
 * An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility
 */
export const EpisodeOfCare: t.Type<EpisodeOfCare> = t.recursion<EpisodeOfCare>(
  "EpisodeOfCare",
  () =>
    t.intersection([
      t.type({
        /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
        status: primitives.R4.code,
        /** The patient who is the focus of this episode of care */
        patient: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("EpisodeOfCare"),
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
        /** Business Identifier(s) relevant for this EpisodeOfCare */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Type/class  - e.g. specialist referral, disease management */
        type: t.array(CodeableConcept),
        /** Organization that assumes care */
        managingOrganization: Reference,
        /** Interval during responsibility is assumed */
        period: Period,
        /** Originating Referral Request(s) */
        referralRequest: t.array(Reference),
        /** Care manager/care coordinator for the patient */
        careManager: Reference,
        /** Other practitioners facilitating this episode of care */
        team: t.array(Reference),
        /** The set of accounts that may be used for billing for this EpisodeOfCare */
        account: t.array(Reference)
      })
    ])
);

/**
 * Past list of status codes (the current status may be included to cover the start date of the status)
 */
export interface EpisodeOfCareStatusHistory {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Duration the EpisodeOfCare was in the specified status */
  period: Period;
}
/**
 * Past list of status codes (the current status may be included to cover the start date of the status)
 */
export const EpisodeOfCareStatusHistory: t.Type<
  EpisodeOfCareStatusHistory
> = t.recursion<EpisodeOfCareStatusHistory>("EpisodeOfCareStatusHistory", () =>
  t.intersection([
    t.type({
      /** planned | waitlist | active | onhold | finished | cancelled | entered-in-error */
      status: primitives.R4.code,
      /** Duration the EpisodeOfCare was in the specified status */
      period: Period
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
      /** Extension of status element */
      _status: Element
    })
  ])
);

/**
 * The list of diagnosis relevant to this episode of care
 */
export interface EpisodeOfCareDiagnosis {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Conditions/problems/diagnoses this episode of care is for */
  condition: Reference;
  /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
  role?: CodeableConcept;
  /** Ranking of the diagnosis (for each role type) */
  rank?: primitives.R4.positiveInt;
  /** Extension of rank element */
  _rank?: Element;
}
/**
 * The list of diagnosis relevant to this episode of care
 */
export const EpisodeOfCareDiagnosis: t.Type<
  EpisodeOfCareDiagnosis
> = t.recursion<EpisodeOfCareDiagnosis>("EpisodeOfCareDiagnosis", () =>
  t.intersection([
    t.type({
      /** Conditions/problems/diagnoses this episode of care is for */
      condition: Reference
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
      /** Role that this diagnosis has within the episode of care (e.g. admission, billing, discharge …) */
      role: CodeableConcept,
      /** Ranking of the diagnosis (for each role type) */
      rank: primitives.R4.positiveInt,
      /** Extension of rank element */
      _rank: Element
    })
  ])
);
