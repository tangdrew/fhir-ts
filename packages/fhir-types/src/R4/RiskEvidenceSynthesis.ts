/**
 * RiskEvidenceSynthesis Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * What sample size was involved?
 */
export interface RiskEvidenceSynthesisSampleSize {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of sample size */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** How many studies? */
  numberOfStudies?: t.TypeOf<primitives.R4.IntegerType>;
  /** How many participants? */
  numberOfParticipants?: t.TypeOf<primitives.R4.IntegerType>;
}

export interface RiskEvidenceSynthesisSampleSizeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of sample size */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** How many studies? */
  numberOfStudies?: t.OutputOf<primitives.R4.IntegerType>;
  /** How many participants? */
  numberOfParticipants?: t.OutputOf<primitives.R4.IntegerType>;
}

export const RiskEvidenceSynthesisSampleSize: t.RecursiveType<
  t.Type<
    RiskEvidenceSynthesisSampleSize,
    RiskEvidenceSynthesisSampleSizeOutputType
  >,
  RiskEvidenceSynthesisSampleSize,
  RiskEvidenceSynthesisSampleSizeOutputType
> = t.recursion<
  RiskEvidenceSynthesisSampleSize,
  RiskEvidenceSynthesisSampleSizeOutputType
>("RiskEvidenceSynthesisSampleSize", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Description of sample size */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** How many participants? */
        numberOfParticipants: primitives.R4.integer,
        /** How many studies? */
        numberOfStudies: primitives.R4.integer
      })
    ],
    "RiskEvidenceSynthesisSampleSize"
  )
);

/**
 * How precise the estimate is
 */
export interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of precision estimate */
  type?: CodeableConcept;
  /** Level of confidence interval */
  level?: t.TypeOf<primitives.R4.DecimalType>;
  /** Lower bound */
  from?: t.TypeOf<primitives.R4.DecimalType>;
  /** Upper bound */
  to?: t.TypeOf<primitives.R4.DecimalType>;
}

export interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimateOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of precision estimate */
  type?: CodeableConceptOutputType;
  /** Level of confidence interval */
  level?: t.OutputOf<primitives.R4.DecimalType>;
  /** Lower bound */
  from?: t.OutputOf<primitives.R4.DecimalType>;
  /** Upper bound */
  to?: t.OutputOf<primitives.R4.DecimalType>;
}

export const RiskEvidenceSynthesisRiskEstimatePrecisionEstimate: t.RecursiveType<
  t.Type<
    RiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
    RiskEvidenceSynthesisRiskEstimatePrecisionEstimateOutputType
  >,
  RiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
  RiskEvidenceSynthesisRiskEstimatePrecisionEstimateOutputType
> = t.recursion<
  RiskEvidenceSynthesisRiskEstimatePrecisionEstimate,
  RiskEvidenceSynthesisRiskEstimatePrecisionEstimateOutputType
>("RiskEvidenceSynthesisRiskEstimatePrecisionEstimate", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Lower bound */
        from: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Level of confidence interval */
        level: primitives.R4.decimal,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Upper bound */
        to: primitives.R4.decimal,
        /** Type of precision estimate */
        type: CodeableConcept
      })
    ],
    "RiskEvidenceSynthesisRiskEstimatePrecisionEstimate"
  )
);

/**
 * What was the estimated risk
 */
export interface RiskEvidenceSynthesisRiskEstimate {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of risk estimate */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Type of risk estimate */
  type?: CodeableConcept;
  /** Point estimate */
  value?: t.TypeOf<primitives.R4.DecimalType>;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConcept;
  /** Sample size for group measured */
  denominatorCount?: t.TypeOf<primitives.R4.IntegerType>;
  /** Number with the outcome */
  numeratorCount?: t.TypeOf<primitives.R4.IntegerType>;
  /** How precise the estimate is */
  precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimate[];
}

export interface RiskEvidenceSynthesisRiskEstimateOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of risk estimate */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Type of risk estimate */
  type?: CodeableConceptOutputType;
  /** Point estimate */
  value?: t.OutputOf<primitives.R4.DecimalType>;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConceptOutputType;
  /** Sample size for group measured */
  denominatorCount?: t.OutputOf<primitives.R4.IntegerType>;
  /** Number with the outcome */
  numeratorCount?: t.OutputOf<primitives.R4.IntegerType>;
  /** How precise the estimate is */
  precisionEstimate?: RiskEvidenceSynthesisRiskEstimatePrecisionEstimateOutputType[];
}

export const RiskEvidenceSynthesisRiskEstimate: t.RecursiveType<
  t.Type<
    RiskEvidenceSynthesisRiskEstimate,
    RiskEvidenceSynthesisRiskEstimateOutputType
  >,
  RiskEvidenceSynthesisRiskEstimate,
  RiskEvidenceSynthesisRiskEstimateOutputType
> = t.recursion<
  RiskEvidenceSynthesisRiskEstimate,
  RiskEvidenceSynthesisRiskEstimateOutputType
>("RiskEvidenceSynthesisRiskEstimate", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Sample size for group measured */
        denominatorCount: primitives.R4.integer,
        /** Description of risk estimate */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Number with the outcome */
        numeratorCount: primitives.R4.integer,
        /** How precise the estimate is */
        precisionEstimate: t.array(
          RiskEvidenceSynthesisRiskEstimatePrecisionEstimate
        ),
        /** Type of risk estimate */
        type: CodeableConcept,
        /** What unit is the outcome described in? */
        unitOfMeasure: CodeableConcept,
        /** Point estimate */
        value: primitives.R4.decimal
      })
    ],
    "RiskEvidenceSynthesisRiskEstimate"
  )
);

/**
 * A component that contributes to the overall certainty
 */
export interface RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of subcomponent of certainty rating */
  type?: CodeableConcept;
  /** Subcomponent certainty rating */
  rating?: CodeableConcept[];
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
}

export interface RiskEvidenceSynthesisCertaintyCertaintySubcomponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of subcomponent of certainty rating */
  type?: CodeableConceptOutputType;
  /** Subcomponent certainty rating */
  rating?: CodeableConceptOutputType[];
  /** Used for footnotes or explanatory notes */
  note?: AnnotationOutputType[];
}

export const RiskEvidenceSynthesisCertaintyCertaintySubcomponent: t.RecursiveType<
  t.Type<
    RiskEvidenceSynthesisCertaintyCertaintySubcomponent,
    RiskEvidenceSynthesisCertaintyCertaintySubcomponentOutputType
  >,
  RiskEvidenceSynthesisCertaintyCertaintySubcomponent,
  RiskEvidenceSynthesisCertaintyCertaintySubcomponentOutputType
> = t.recursion<
  RiskEvidenceSynthesisCertaintyCertaintySubcomponent,
  RiskEvidenceSynthesisCertaintyCertaintySubcomponentOutputType
>("RiskEvidenceSynthesisCertaintyCertaintySubcomponent", () =>
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
        /** Used for footnotes or explanatory notes */
        note: t.array(Annotation),
        /** Subcomponent certainty rating */
        rating: t.array(CodeableConcept),
        /** Type of subcomponent of certainty rating */
        type: CodeableConcept
      })
    ],
    "RiskEvidenceSynthesisCertaintyCertaintySubcomponent"
  )
);

/**
 * How certain is the risk
 */
export interface RiskEvidenceSynthesisCertainty {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Certainty rating */
  rating?: CodeableConcept[];
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** A component that contributes to the overall certainty */
  certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponent[];
}

export interface RiskEvidenceSynthesisCertaintyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Certainty rating */
  rating?: CodeableConceptOutputType[];
  /** Used for footnotes or explanatory notes */
  note?: AnnotationOutputType[];
  /** A component that contributes to the overall certainty */
  certaintySubcomponent?: RiskEvidenceSynthesisCertaintyCertaintySubcomponentOutputType[];
}

export const RiskEvidenceSynthesisCertainty: t.RecursiveType<
  t.Type<
    RiskEvidenceSynthesisCertainty,
    RiskEvidenceSynthesisCertaintyOutputType
  >,
  RiskEvidenceSynthesisCertainty,
  RiskEvidenceSynthesisCertaintyOutputType
> = t.recursion<
  RiskEvidenceSynthesisCertainty,
  RiskEvidenceSynthesisCertaintyOutputType
>("RiskEvidenceSynthesisCertainty", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** A component that contributes to the overall certainty */
        certaintySubcomponent: t.array(
          RiskEvidenceSynthesisCertaintyCertaintySubcomponent
        ),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Used for footnotes or explanatory notes */
        note: t.array(Annotation),
        /** Certainty rating */
        rating: t.array(CodeableConcept)
      })
    ],
    "RiskEvidenceSynthesisCertainty"
  )
);

/**
 * A quantified estimate of risk based on a body of evidence
 */
export interface RiskEvidenceSynthesis {
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
  /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the risk evidence synthesis */
  identifier?: Identifier[];
  /** Business version of the risk evidence synthesis */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this risk evidence synthesis (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this risk evidence synthesis (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the risk evidence synthesis */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for risk evidence synthesis (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the risk evidence synthesis was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the risk evidence synthesis was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the risk evidence synthesis is expected to be used */
  effectivePeriod?: Period;
  /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
  topic?: CodeableConcept[];
  /** Who authored the content */
  author?: ContactDetail[];
  /** Who edited the content */
  editor?: ContactDetail[];
  /** Who reviewed the content */
  reviewer?: ContactDetail[];
  /** Who endorsed the content */
  endorser?: ContactDetail[];
  /** Additional documentation, citations, etc. */
  relatedArtifact?: RelatedArtifact[];
  /** Type of synthesis */
  synthesisType?: CodeableConcept;
  /** Type of study */
  studyType?: CodeableConcept;
  /** What population? */
  population: Reference;
  /** What exposure? */
  exposure?: Reference;
  /** What outcome? */
  outcome: Reference;
  /** What sample size was involved? */
  sampleSize?: RiskEvidenceSynthesisSampleSize;
  /** What was the estimated risk */
  riskEstimate?: RiskEvidenceSynthesisRiskEstimate;
  /** How certain is the risk */
  certainty?: RiskEvidenceSynthesisCertainty[];
}

export interface RiskEvidenceSynthesisOutputType {
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
  /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the risk evidence synthesis */
  identifier?: IdentifierOutputType[];
  /** Business version of the risk evidence synthesis */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this risk evidence synthesis (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this risk evidence synthesis (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the risk evidence synthesis */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: AnnotationOutputType[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for risk evidence synthesis (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the risk evidence synthesis was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the risk evidence synthesis was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the risk evidence synthesis is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
  topic?: CodeableConceptOutputType[];
  /** Who authored the content */
  author?: ContactDetailOutputType[];
  /** Who edited the content */
  editor?: ContactDetailOutputType[];
  /** Who reviewed the content */
  reviewer?: ContactDetailOutputType[];
  /** Who endorsed the content */
  endorser?: ContactDetailOutputType[];
  /** Additional documentation, citations, etc. */
  relatedArtifact?: RelatedArtifactOutputType[];
  /** Type of synthesis */
  synthesisType?: CodeableConceptOutputType;
  /** Type of study */
  studyType?: CodeableConceptOutputType;
  /** What population? */
  population: ReferenceOutputType;
  /** What exposure? */
  exposure?: ReferenceOutputType;
  /** What outcome? */
  outcome: ReferenceOutputType;
  /** What sample size was involved? */
  sampleSize?: RiskEvidenceSynthesisSampleSizeOutputType;
  /** What was the estimated risk */
  riskEstimate?: RiskEvidenceSynthesisRiskEstimateOutputType;
  /** How certain is the risk */
  certainty?: RiskEvidenceSynthesisCertaintyOutputType[];
}

export const RiskEvidenceSynthesis: t.RecursiveType<
  t.Type<RiskEvidenceSynthesis, RiskEvidenceSynthesisOutputType>,
  RiskEvidenceSynthesis,
  RiskEvidenceSynthesisOutputType
> = t.recursion<RiskEvidenceSynthesis, RiskEvidenceSynthesisOutputType>(
  "RiskEvidenceSynthesis",
  () =>
    t.intersection(
      [
        t.type({
          /** What outcome? */
          outcome: Reference,
          /** What population? */
          population: Reference,
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** When the risk evidence synthesis was approved by publisher */
          approvalDate: primitives.R4.date,
          /** Who authored the content */
          author: t.array(ContactDetail),
          /** How certain is the risk */
          certainty: t.array(RiskEvidenceSynthesisCertainty),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the risk evidence synthesis */
          description: primitives.R4.markdown,
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** When the risk evidence synthesis is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** What exposure? */
          exposure: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the risk evidence synthesis */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for risk evidence synthesis (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the risk evidence synthesis was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this risk evidence synthesis (computer friendly) */
          name: primitives.R4.string,
          /** Used for footnotes or explanatory notes */
          note: t.array(Annotation),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Additional documentation, citations, etc. */
          relatedArtifact: t.array(RelatedArtifact),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** What was the estimated risk */
          riskEstimate: RiskEvidenceSynthesisRiskEstimate,
          /** What sample size was involved? */
          sampleSize: RiskEvidenceSynthesisSampleSize,
          /** Type of study */
          studyType: CodeableConcept,
          /** Type of synthesis */
          synthesisType: CodeableConcept,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this risk evidence synthesis (human friendly) */
          title: primitives.R4.string,
          /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
          topic: t.array(CodeableConcept),
          /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the risk evidence synthesis */
          version: primitives.R4.string
        })
      ],
      "RiskEvidenceSynthesis"
    )
);
