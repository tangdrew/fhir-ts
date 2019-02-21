/**
 * EffectEvidenceSynthesis Module
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
export interface EffectEvidenceSynthesisSampleSize {
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

export interface EffectEvidenceSynthesisSampleSizeOutputType {
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

export const EffectEvidenceSynthesisSampleSize: t.RecursiveType<
  t.Type<
    EffectEvidenceSynthesisSampleSize,
    EffectEvidenceSynthesisSampleSizeOutputType
  >,
  EffectEvidenceSynthesisSampleSize,
  EffectEvidenceSynthesisSampleSizeOutputType
> = t.recursion<
  EffectEvidenceSynthesisSampleSize,
  EffectEvidenceSynthesisSampleSizeOutputType
>("EffectEvidenceSynthesisSampleSize", () =>
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
    "EffectEvidenceSynthesisSampleSize"
  )
);

/**
 * What was the result per exposure?
 */
export interface EffectEvidenceSynthesisResultsByExposure {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of results by exposure */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** exposure | exposure-alternative */
  exposureState?: t.TypeOf<primitives.R4.CodeType>;
  /** Variant exposure states */
  variantState?: CodeableConcept;
  /** Risk evidence synthesis */
  riskEvidenceSynthesis: Reference;
}

export interface EffectEvidenceSynthesisResultsByExposureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of results by exposure */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** exposure | exposure-alternative */
  exposureState?: t.OutputOf<primitives.R4.CodeType>;
  /** Variant exposure states */
  variantState?: CodeableConceptOutputType;
  /** Risk evidence synthesis */
  riskEvidenceSynthesis: ReferenceOutputType;
}

export const EffectEvidenceSynthesisResultsByExposure: t.RecursiveType<
  t.Type<
    EffectEvidenceSynthesisResultsByExposure,
    EffectEvidenceSynthesisResultsByExposureOutputType
  >,
  EffectEvidenceSynthesisResultsByExposure,
  EffectEvidenceSynthesisResultsByExposureOutputType
> = t.recursion<
  EffectEvidenceSynthesisResultsByExposure,
  EffectEvidenceSynthesisResultsByExposureOutputType
>("EffectEvidenceSynthesisResultsByExposure", () =>
  t.intersection(
    [
      t.type({
        /** Risk evidence synthesis */
        riskEvidenceSynthesis: Reference
      }),
      t.partial({
        /** Description of results by exposure */
        description: primitives.R4.string,
        /** exposure | exposure-alternative */
        exposureState: primitives.R4.code,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Variant exposure states */
        variantState: CodeableConcept
      })
    ],
    "EffectEvidenceSynthesisResultsByExposure"
  )
);

/**
 * How precise the estimate is
 */
export interface EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
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

export interface EffectEvidenceSynthesisEffectEstimatePrecisionEstimateOutputType {
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

export const EffectEvidenceSynthesisEffectEstimatePrecisionEstimate: t.RecursiveType<
  t.Type<
    EffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
    EffectEvidenceSynthesisEffectEstimatePrecisionEstimateOutputType
  >,
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimateOutputType
> = t.recursion<
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimate,
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimateOutputType
>("EffectEvidenceSynthesisEffectEstimatePrecisionEstimate", () =>
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
    "EffectEvidenceSynthesisEffectEstimatePrecisionEstimate"
  )
);

/**
 * What was the estimated effect
 */
export interface EffectEvidenceSynthesisEffectEstimate {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of effect estimate */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Type of efffect estimate */
  type?: CodeableConcept;
  /** Variant exposure states */
  variantState?: CodeableConcept;
  /** Point estimate */
  value?: t.TypeOf<primitives.R4.DecimalType>;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConcept;
  /** How precise the estimate is */
  precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimate[];
}

export interface EffectEvidenceSynthesisEffectEstimateOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of effect estimate */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Type of efffect estimate */
  type?: CodeableConceptOutputType;
  /** Variant exposure states */
  variantState?: CodeableConceptOutputType;
  /** Point estimate */
  value?: t.OutputOf<primitives.R4.DecimalType>;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConceptOutputType;
  /** How precise the estimate is */
  precisionEstimate?: EffectEvidenceSynthesisEffectEstimatePrecisionEstimateOutputType[];
}

export const EffectEvidenceSynthesisEffectEstimate: t.RecursiveType<
  t.Type<
    EffectEvidenceSynthesisEffectEstimate,
    EffectEvidenceSynthesisEffectEstimateOutputType
  >,
  EffectEvidenceSynthesisEffectEstimate,
  EffectEvidenceSynthesisEffectEstimateOutputType
> = t.recursion<
  EffectEvidenceSynthesisEffectEstimate,
  EffectEvidenceSynthesisEffectEstimateOutputType
>("EffectEvidenceSynthesisEffectEstimate", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Description of effect estimate */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** How precise the estimate is */
        precisionEstimate: t.array(
          EffectEvidenceSynthesisEffectEstimatePrecisionEstimate
        ),
        /** Type of efffect estimate */
        type: CodeableConcept,
        /** What unit is the outcome described in? */
        unitOfMeasure: CodeableConcept,
        /** Point estimate */
        value: primitives.R4.decimal,
        /** Variant exposure states */
        variantState: CodeableConcept
      })
    ],
    "EffectEvidenceSynthesisEffectEstimate"
  )
);

/**
 * A component that contributes to the overall certainty
 */
export interface EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
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

export interface EffectEvidenceSynthesisCertaintyCertaintySubcomponentOutputType {
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

export const EffectEvidenceSynthesisCertaintyCertaintySubcomponent: t.RecursiveType<
  t.Type<
    EffectEvidenceSynthesisCertaintyCertaintySubcomponent,
    EffectEvidenceSynthesisCertaintyCertaintySubcomponentOutputType
  >,
  EffectEvidenceSynthesisCertaintyCertaintySubcomponent,
  EffectEvidenceSynthesisCertaintyCertaintySubcomponentOutputType
> = t.recursion<
  EffectEvidenceSynthesisCertaintyCertaintySubcomponent,
  EffectEvidenceSynthesisCertaintyCertaintySubcomponentOutputType
>("EffectEvidenceSynthesisCertaintyCertaintySubcomponent", () =>
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
    "EffectEvidenceSynthesisCertaintyCertaintySubcomponent"
  )
);

/**
 * How certain is the effect
 */
export interface EffectEvidenceSynthesisCertainty {
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
  certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponent[];
}

export interface EffectEvidenceSynthesisCertaintyOutputType {
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
  certaintySubcomponent?: EffectEvidenceSynthesisCertaintyCertaintySubcomponentOutputType[];
}

export const EffectEvidenceSynthesisCertainty: t.RecursiveType<
  t.Type<
    EffectEvidenceSynthesisCertainty,
    EffectEvidenceSynthesisCertaintyOutputType
  >,
  EffectEvidenceSynthesisCertainty,
  EffectEvidenceSynthesisCertaintyOutputType
> = t.recursion<
  EffectEvidenceSynthesisCertainty,
  EffectEvidenceSynthesisCertaintyOutputType
>("EffectEvidenceSynthesisCertainty", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** A component that contributes to the overall certainty */
        certaintySubcomponent: t.array(
          EffectEvidenceSynthesisCertaintyCertaintySubcomponent
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
    "EffectEvidenceSynthesisCertainty"
  )
);

/**
 * A quantified estimate of effect based on a body of evidence
 */
export interface EffectEvidenceSynthesis {
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
  /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the effect evidence synthesis */
  identifier?: Identifier[];
  /** Business version of the effect evidence synthesis */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this effect evidence synthesis (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this effect evidence synthesis (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the effect evidence synthesis */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for effect evidence synthesis (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the effect evidence synthesis was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the effect evidence synthesis was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the effect evidence synthesis is expected to be used */
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
  exposure: Reference;
  /** What comparison exposure? */
  exposureAlternative: Reference;
  /** What outcome? */
  outcome: Reference;
  /** What sample size was involved? */
  sampleSize?: EffectEvidenceSynthesisSampleSize;
  /** What was the result per exposure? */
  resultsByExposure?: EffectEvidenceSynthesisResultsByExposure[];
  /** What was the estimated effect */
  effectEstimate?: EffectEvidenceSynthesisEffectEstimate[];
  /** How certain is the effect */
  certainty?: EffectEvidenceSynthesisCertainty[];
}

export interface EffectEvidenceSynthesisOutputType {
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
  /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the effect evidence synthesis */
  identifier?: IdentifierOutputType[];
  /** Business version of the effect evidence synthesis */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this effect evidence synthesis (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this effect evidence synthesis (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the effect evidence synthesis */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: AnnotationOutputType[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for effect evidence synthesis (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the effect evidence synthesis was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the effect evidence synthesis was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the effect evidence synthesis is expected to be used */
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
  exposure: ReferenceOutputType;
  /** What comparison exposure? */
  exposureAlternative: ReferenceOutputType;
  /** What outcome? */
  outcome: ReferenceOutputType;
  /** What sample size was involved? */
  sampleSize?: EffectEvidenceSynthesisSampleSizeOutputType;
  /** What was the result per exposure? */
  resultsByExposure?: EffectEvidenceSynthesisResultsByExposureOutputType[];
  /** What was the estimated effect */
  effectEstimate?: EffectEvidenceSynthesisEffectEstimateOutputType[];
  /** How certain is the effect */
  certainty?: EffectEvidenceSynthesisCertaintyOutputType[];
}

export const EffectEvidenceSynthesis: t.RecursiveType<
  t.Type<EffectEvidenceSynthesis, EffectEvidenceSynthesisOutputType>,
  EffectEvidenceSynthesis,
  EffectEvidenceSynthesisOutputType
> = t.recursion<EffectEvidenceSynthesis, EffectEvidenceSynthesisOutputType>(
  "EffectEvidenceSynthesis",
  () =>
    t.intersection(
      [
        t.type({
          /** What exposure? */
          exposure: Reference,
          /** What comparison exposure? */
          exposureAlternative: Reference,
          /** What outcome? */
          outcome: Reference,
          /** What population? */
          population: Reference,
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** When the effect evidence synthesis was approved by publisher */
          approvalDate: primitives.R4.date,
          /** Who authored the content */
          author: t.array(ContactDetail),
          /** How certain is the effect */
          certainty: t.array(EffectEvidenceSynthesisCertainty),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the effect evidence synthesis */
          description: primitives.R4.markdown,
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** What was the estimated effect */
          effectEstimate: t.array(EffectEvidenceSynthesisEffectEstimate),
          /** When the effect evidence synthesis is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the effect evidence synthesis */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for effect evidence synthesis (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the effect evidence synthesis was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this effect evidence synthesis (computer friendly) */
          name: primitives.R4.string,
          /** Used for footnotes or explanatory notes */
          note: t.array(Annotation),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Additional documentation, citations, etc. */
          relatedArtifact: t.array(RelatedArtifact),
          /** What was the result per exposure? */
          resultsByExposure: t.array(EffectEvidenceSynthesisResultsByExposure),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** What sample size was involved? */
          sampleSize: EffectEvidenceSynthesisSampleSize,
          /** Type of study */
          studyType: CodeableConcept,
          /** Type of synthesis */
          synthesisType: CodeableConcept,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this effect evidence synthesis (human friendly) */
          title: primitives.R4.string,
          /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
          topic: t.array(CodeableConcept),
          /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the effect evidence synthesis */
          version: primitives.R4.string
        })
      ],
      "EffectEvidenceSynthesis"
    )
);
