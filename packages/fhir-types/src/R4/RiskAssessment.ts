/**
 * RiskAssessment Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Outcome predicted
 */
export interface RiskAssessmentPrediction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Possible outcome for the subject */
  outcome?: CodeableConcept;
  /** Likelihood of specified outcome */
  probability?: t.TypeOf<primitives.R4.DecimalType> | Range;
  /** Likelihood of specified outcome as a qualitative value */
  qualitativeRisk?: CodeableConcept;
  /** Relative likelihood */
  relativeRisk?: t.TypeOf<primitives.R4.DecimalType>;
  /** Timeframe or age range */
  when?: Period | Range;
  /** Explanation of prediction */
  rationale?: t.TypeOf<primitives.R4.StringType>;
}

export interface RiskAssessmentPredictionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Possible outcome for the subject */
  outcome?: CodeableConceptOutputType;
  /** Likelihood of specified outcome */
  probability?: t.OutputOf<primitives.R4.DecimalType> | RangeOutputType;
  /** Likelihood of specified outcome as a qualitative value */
  qualitativeRisk?: CodeableConceptOutputType;
  /** Relative likelihood */
  relativeRisk?: t.OutputOf<primitives.R4.DecimalType>;
  /** Timeframe or age range */
  when?: PeriodOutputType | RangeOutputType;
  /** Explanation of prediction */
  rationale?: t.OutputOf<primitives.R4.StringType>;
}

export const RiskAssessmentPrediction: t.RecursiveType<
  t.Type<RiskAssessmentPrediction, RiskAssessmentPredictionOutputType>,
  RiskAssessmentPrediction,
  RiskAssessmentPredictionOutputType
> = t.recursion<RiskAssessmentPrediction, RiskAssessmentPredictionOutputType>(
  "RiskAssessmentPrediction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Possible outcome for the subject */
          outcome: CodeableConcept,
          /** Likelihood of specified outcome */
          probability: t.union([primitives.R4.decimal, Range]),
          /** Likelihood of specified outcome as a qualitative value */
          qualitativeRisk: CodeableConcept,
          /** Explanation of prediction */
          rationale: primitives.R4.string,
          /** Relative likelihood */
          relativeRisk: primitives.R4.decimal,
          /** Timeframe or age range */
          when: t.union([Period, Range])
        })
      ],
      "RiskAssessmentPrediction"
    )
);

/**
 * Potential outcomes for a subject with likelihood
 */
export interface RiskAssessment {
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
  /** Unique identifier for the assessment */
  identifier?: Identifier[];
  /** Request fulfilled by this assessment */
  basedOn?: Reference;
  /** Part of this occurrence */
  parent?: Reference;
  /** registered | preliminary | final | amended + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Evaluation mechanism */
  method?: CodeableConcept;
  /** Type of assessment */
  code?: CodeableConcept;
  /** Who/what does assessment apply to? */
  subject: Reference;
  /** Where was assessment performed? */
  encounter?: Reference;
  /** When was assessment made? */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period;
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
  /** Outcome predicted */
  prediction?: RiskAssessmentPrediction[];
  /** How to reduce risk */
  mitigation?: t.TypeOf<primitives.R4.StringType>;
  /** Comments on the risk assessment */
  note?: Annotation[];
}

export interface RiskAssessmentOutputType {
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
  /** Unique identifier for the assessment */
  identifier?: IdentifierOutputType[];
  /** Request fulfilled by this assessment */
  basedOn?: ReferenceOutputType;
  /** Part of this occurrence */
  parent?: ReferenceOutputType;
  /** registered | preliminary | final | amended + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Evaluation mechanism */
  method?: CodeableConceptOutputType;
  /** Type of assessment */
  code?: CodeableConceptOutputType;
  /** Who/what does assessment apply to? */
  subject: ReferenceOutputType;
  /** Where was assessment performed? */
  encounter?: ReferenceOutputType;
  /** When was assessment made? */
  occurrence?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** Condition assessed */
  condition?: ReferenceOutputType;
  /** Who did assessment? */
  performer?: ReferenceOutputType;
  /** Why the assessment was necessary? */
  reasonCode?: CodeableConceptOutputType[];
  /** Why the assessment was necessary? */
  reasonReference?: ReferenceOutputType[];
  /** Information used in assessment */
  basis?: ReferenceOutputType[];
  /** Outcome predicted */
  prediction?: RiskAssessmentPredictionOutputType[];
  /** How to reduce risk */
  mitigation?: t.OutputOf<primitives.R4.StringType>;
  /** Comments on the risk assessment */
  note?: AnnotationOutputType[];
}

export const RiskAssessment: t.RecursiveType<
  t.Type<RiskAssessment, RiskAssessmentOutputType>,
  RiskAssessment,
  RiskAssessmentOutputType
> = t.recursion<RiskAssessment, RiskAssessmentOutputType>(
  "RiskAssessment",
  () =>
    t.intersection(
      [
        t.type({
          /** registered | preliminary | final | amended + */
          status: primitives.R4.code,
          /** Who/what does assessment apply to? */
          subject: Reference
        }),
        t.partial({
          /** Request fulfilled by this assessment */
          basedOn: Reference,
          /** Information used in assessment */
          basis: t.array(Reference),
          /** Type of assessment */
          code: CodeableConcept,
          /** Condition assessed */
          condition: Reference,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Where was assessment performed? */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Unique identifier for the assessment */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Evaluation mechanism */
          method: CodeableConcept,
          /** How to reduce risk */
          mitigation: primitives.R4.string,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Comments on the risk assessment */
          note: t.array(Annotation),
          /** When was assessment made? */
          occurrence: t.union([primitives.R4.dateTime, Period]),
          /** Part of this occurrence */
          parent: Reference,
          /** Who did assessment? */
          performer: Reference,
          /** Outcome predicted */
          prediction: t.array(RiskAssessmentPrediction),
          /** Why the assessment was necessary? */
          reasonCode: t.array(CodeableConcept),
          /** Why the assessment was necessary? */
          reasonReference: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "RiskAssessment"
    )
);
