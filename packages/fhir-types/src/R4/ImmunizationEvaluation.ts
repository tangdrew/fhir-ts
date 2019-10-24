/**
 * ImmunizationEvaluation Module
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
 * Immunization evaluation information
 */
export interface ImmunizationEvaluation {
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
  /** completed | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Who this evaluation is for */
  patient: Reference;
  /** Date evaluation was performed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Who is responsible for publishing the recommendations */
  authority?: Reference;
  /** Evaluation target disease */
  targetDisease: CodeableConcept;
  /** Immunization being evaluated */
  immunizationEvent: Reference;
  /** Status of the dose relative to published recommendations */
  doseStatus: CodeableConcept;
  /** Reason for the dose status */
  doseStatusReason?: CodeableConcept[];
  /** Evaluation notes */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Name of vaccine series */
  series?: string;
  /** Extension of series element */
  _series?: Element;
  /** Dose number within series */
  dosenumberPositiveInt?: primitives.R4.positiveInt;
  /** Extension of dosenumberPositiveInt element */
  _dosenumberPositiveInt?: Element;
  /** Dose number within series */
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
}
/**
 * Immunization evaluation information
 */
export const ImmunizationEvaluation: t.Type<
  ImmunizationEvaluation
> = t.recursion<ImmunizationEvaluation>("ImmunizationEvaluation", () =>
  t.intersection([
    t.type({
      /** completed | entered-in-error */
      status: primitives.R4.code,
      /** Who this evaluation is for */
      patient: Reference,
      /** Evaluation target disease */
      targetDisease: CodeableConcept,
      /** Immunization being evaluated */
      immunizationEvent: Reference,
      /** Status of the dose relative to published recommendations */
      doseStatus: CodeableConcept
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
      /** Extension of status element */
      _status: Element,
      /** Date evaluation was performed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Who is responsible for publishing the recommendations */
      authority: Reference,
      /** Reason for the dose status */
      doseStatusReason: t.array(CodeableConcept),
      /** Evaluation notes */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Name of vaccine series */
      series: primitives.R4.string,
      /** Extension of series element */
      _series: Element,
      /** Dose number within series */
      dosenumberPositiveInt: primitives.R4.positiveInt,
      /** Extension of dosenumberPositiveInt element */
      _dosenumberPositiveInt: Element,
      /** Dose number within series */
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
      _seriesdosesString: Element
    })
  ])
);
