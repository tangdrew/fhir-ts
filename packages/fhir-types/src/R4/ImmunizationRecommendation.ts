/**
 * ImmunizationRecommendation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Guidance or advice relating to an immunization
 */
export interface ImmunizationRecommendation {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** Who this profile is for */
  patient: Reference;
  /** Date recommendation(s) created */
  date: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Who is responsible for protocol */
  authority?: Reference;
}
/**
 * Guidance or advice relating to an immunization
 */
export const ImmunizationRecommendation: t.Type<
  ImmunizationRecommendation
> = t.recursion<ImmunizationRecommendation>("ImmunizationRecommendation", () =>
  t.intersection([
    t.type({
      /** Who this profile is for */
      patient: Reference,
      /** Date recommendation(s) created */
      date: primitives.R4.dateTime
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
      /** Business identifier */
      identifier: t.array(Identifier),
      /** Extension of date element */
      _date: Element,
      /** Who is responsible for protocol */
      authority: Reference
    })
  ])
);

/**
 * Vaccine administration recommendations
 */
export interface ImmunizationRecommendationRecommendation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Vaccine  or vaccine group recommendation applies to */
  vaccineCode?: CodeableConcept[];
  /** Disease to be immunized against */
  targetDisease?: CodeableConcept;
  /** Vaccine which is contraindicated to fulfill the recommendation */
  contraindicatedVaccineCode?: CodeableConcept[];
  /** Vaccine recommendation status */
  forecastStatus: CodeableConcept;
  /** Vaccine administration status reason */
  forecastReason?: CodeableConcept[];
  /** Protocol details */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Name of vaccination series */
  series?: string;
  /** Extension of series element */
  _series?: Element;
  /** Recommended dose number within series */
  dosenumberPositiveInt?: primitives.R4.positiveInt;
  /** Extension of dosenumberPositiveInt element */
  _dosenumberPositiveInt?: Element;
  /** Recommended dose number within series */
  dosenumberString?: string;
  /** Extension of dosenumberString element */
  _dosenumberString?: Element;
  /** Recommended number of doses for immunity */
  seriesdosesPositiveInt?: primitives.R4.positiveInt;
  /** Extension of seriesdosesPositiveInt element */
  _seriesdosesPositiveInt?: Element;
  /** Recommended number of doses for immunity */
  seriesdosesString?: string;
  /** Extension of seriesdosesString element */
  _seriesdosesString?: Element;
  /** Past immunizations supporting recommendation */
  supportingImmunization?: Reference[];
  /** Patient observations supporting recommendation */
  supportingPatientInformation?: Reference[];
}
/**
 * Vaccine administration recommendations
 */
export const ImmunizationRecommendationRecommendation: t.Type<
  ImmunizationRecommendationRecommendation
> = t.recursion<ImmunizationRecommendationRecommendation>(
  "ImmunizationRecommendationRecommendation",
  () =>
    t.intersection([
      t.type({
        /** Vaccine recommendation status */
        forecastStatus: CodeableConcept
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
        /** Vaccine  or vaccine group recommendation applies to */
        vaccineCode: t.array(CodeableConcept),
        /** Disease to be immunized against */
        targetDisease: CodeableConcept,
        /** Vaccine which is contraindicated to fulfill the recommendation */
        contraindicatedVaccineCode: t.array(CodeableConcept),
        /** Vaccine administration status reason */
        forecastReason: t.array(CodeableConcept),
        /** Protocol details */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Name of vaccination series */
        series: primitives.R4.string,
        /** Extension of series element */
        _series: Element,
        /** Recommended dose number within series */
        dosenumberPositiveInt: primitives.R4.positiveInt,
        /** Extension of dosenumberPositiveInt element */
        _dosenumberPositiveInt: Element,
        /** Recommended dose number within series */
        dosenumberString: primitives.R4.string,
        /** Extension of dosenumberString element */
        _dosenumberString: Element,
        /** Recommended number of doses for immunity */
        seriesdosesPositiveInt: primitives.R4.positiveInt,
        /** Extension of seriesdosesPositiveInt element */
        _seriesdosesPositiveInt: Element,
        /** Recommended number of doses for immunity */
        seriesdosesString: primitives.R4.string,
        /** Extension of seriesdosesString element */
        _seriesdosesString: Element,
        /** Past immunizations supporting recommendation */
        supportingImmunization: t.array(Reference),
        /** Patient observations supporting recommendation */
        supportingPatientInformation: t.array(Reference)
      })
    ])
);

/**
 * Dates governing proposed immunization
 */
export interface ImmunizationRecommendationRecommendationDateCriterion {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of date */
  code: CodeableConcept;
  /** Recommended date */
  value: primitives.R4.dateTime;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Dates governing proposed immunization
 */
export const ImmunizationRecommendationRecommendationDateCriterion: t.Type<
  ImmunizationRecommendationRecommendationDateCriterion
> = t.recursion<ImmunizationRecommendationRecommendationDateCriterion>(
  "ImmunizationRecommendationRecommendationDateCriterion",
  () =>
    t.intersection([
      t.type({
        /** Type of date */
        code: CodeableConcept,
        /** Recommended date */
        value: primitives.R4.dateTime
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
        _value: Element
      })
    ])
);
