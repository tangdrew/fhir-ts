/**
 * RiskAssessment Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Potential outcomes for a subject with likelihood
 */
export interface RiskAssessment {
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
  /** Unique identifier for the assessment */
  identifier?: Identifier[];
  /** Request fulfilled by this assessment */
  basedOn?: Reference;
  /** Part of this occurrence */
  parent?: Reference;
  /** registered | preliminary | final | amended + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Evaluation mechanism */
  method?: CodeableConcept;
  /** Type of assessment */
  code?: CodeableConcept;
  /** Who/what does assessment apply to? */
  subject: Reference;
  /** Where was assessment performed? */
  encounter?: Reference;
  /** When was assessment made? */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When was assessment made? */
  occurrencePeriod?: Period;
  /** Condition assessed */
  condition?: Reference;
  /** Who did assessment? */
  performer?: Reference;
  /** Why the assessment was necessary? */
  reasonCode?: CodeableConcept[];
  /** Why the assessment was necessary? */
  reasonReference?: Reference[];
  /** Information used in assessment */
  basis?: Reference[];
  /** How to reduce risk */
  mitigation?: string;
  /** Extension of mitigation element */
  _mitigation?: Element;
  /** Comments on the risk assessment */
  note?: Annotation[];
}
/**
 * Potential outcomes for a subject with likelihood
 */
export const RiskAssessment: t.Type<RiskAssessment> = t.recursion<
  RiskAssessment
>("RiskAssessment", () =>
  t.intersection([
    t.type({
      /** registered | preliminary | final | amended + */
      status: primitives.R4.code,
      /** Who/what does assessment apply to? */
      subject: Reference
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
      /** Unique identifier for the assessment */
      identifier: t.array(Identifier),
      /** Request fulfilled by this assessment */
      basedOn: Reference,
      /** Part of this occurrence */
      parent: Reference,
      /** Extension of status element */
      _status: Element,
      /** Evaluation mechanism */
      method: CodeableConcept,
      /** Type of assessment */
      code: CodeableConcept,
      /** Where was assessment performed? */
      encounter: Reference,
      /** When was assessment made? */
      occurrenceDateTime: primitives.R4.dateTime,
      /** Extension of occurrenceDateTime element */
      _occurrenceDateTime: Element,
      /** When was assessment made? */
      occurrencePeriod: Period,
      /** Condition assessed */
      condition: Reference,
      /** Who did assessment? */
      performer: Reference,
      /** Why the assessment was necessary? */
      reasonCode: t.array(CodeableConcept),
      /** Why the assessment was necessary? */
      reasonReference: t.array(Reference),
      /** Information used in assessment */
      basis: t.array(Reference),
      /** How to reduce risk */
      mitigation: primitives.R4.string,
      /** Extension of mitigation element */
      _mitigation: Element,
      /** Comments on the risk assessment */
      note: t.array(Annotation)
    })
  ])
);

/**
 * Outcome predicted
 */
export interface RiskAssessmentPrediction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Possible outcome for the subject */
  outcome?: CodeableConcept;
  /** Likelihood of specified outcome */
  probabilityDecimal?: primitives.R4.decimal;
  /** Extension of probabilityDecimal element */
  _probabilityDecimal?: Element;
  /** Likelihood of specified outcome */
  probabilityRange?: Range;
  /** Likelihood of specified outcome as a qualitative value */
  qualitativeRisk?: CodeableConcept;
  /** Relative likelihood */
  relativeRisk?: primitives.R4.decimal;
  /** Extension of relativeRisk element */
  _relativeRisk?: Element;
  /** Timeframe or age range */
  whenPeriod?: Period;
  /** Timeframe or age range */
  whenRange?: Range;
  /** Explanation of prediction */
  rationale?: string;
  /** Extension of rationale element */
  _rationale?: Element;
}
/**
 * Outcome predicted
 */
export const RiskAssessmentPrediction: t.Type<
  RiskAssessmentPrediction
> = t.recursion<RiskAssessmentPrediction>("RiskAssessmentPrediction", () =>
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
      /** Possible outcome for the subject */
      outcome: CodeableConcept,
      /** Likelihood of specified outcome */
      probabilityDecimal: primitives.R4.decimal,
      /** Extension of probabilityDecimal element */
      _probabilityDecimal: Element,
      /** Likelihood of specified outcome */
      probabilityRange: Range,
      /** Likelihood of specified outcome as a qualitative value */
      qualitativeRisk: CodeableConcept,
      /** Relative likelihood */
      relativeRisk: primitives.R4.decimal,
      /** Extension of relativeRisk element */
      _relativeRisk: Element,
      /** Timeframe or age range */
      whenPeriod: Period,
      /** Timeframe or age range */
      whenRange: Range,
      /** Explanation of prediction */
      rationale: primitives.R4.string,
      /** Extension of rationale element */
      _rationale: Element
    })
  ])
);
