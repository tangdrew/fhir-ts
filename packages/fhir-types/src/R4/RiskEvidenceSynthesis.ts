/**
 * RiskEvidenceSynthesis Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A quantified estimate of risk based on a body of evidence
 */
export interface RiskEvidenceSynthesis {
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
  /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the risk evidence synthesis */
  identifier?: Identifier[];
  /** Business version of the risk evidence synthesis */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this risk evidence synthesis (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this risk evidence synthesis (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Date last changed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the risk evidence synthesis */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for risk evidence synthesis (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the risk evidence synthesis was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the risk evidence synthesis was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
}
/**
 * A quantified estimate of risk based on a body of evidence
 */
export const RiskEvidenceSynthesis: t.Type<RiskEvidenceSynthesis> = t.recursion<
  RiskEvidenceSynthesis
>("RiskEvidenceSynthesis", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** What population? */
      population: Reference,
      /** What outcome? */
      outcome: Reference
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
      /** Canonical identifier for this risk evidence synthesis, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the risk evidence synthesis */
      identifier: t.array(Identifier),
      /** Business version of the risk evidence synthesis */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this risk evidence synthesis (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this risk evidence synthesis (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Extension of status element */
      _status: Element,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the risk evidence synthesis */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** Used for footnotes or explanatory notes */
      note: t.array(Annotation),
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for risk evidence synthesis (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the risk evidence synthesis was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the risk evidence synthesis was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the risk evidence synthesis is expected to be used */
      effectivePeriod: Period,
      /** The category of the EffectEvidenceSynthesis, such as Education, Treatment, Assessment, etc. */
      topic: t.array(CodeableConcept),
      /** Who authored the content */
      author: t.array(ContactDetail),
      /** Who edited the content */
      editor: t.array(ContactDetail),
      /** Who reviewed the content */
      reviewer: t.array(ContactDetail),
      /** Who endorsed the content */
      endorser: t.array(ContactDetail),
      /** Additional documentation, citations, etc. */
      relatedArtifact: t.array(RelatedArtifact),
      /** Type of synthesis */
      synthesisType: CodeableConcept,
      /** Type of study */
      studyType: CodeableConcept,
      /** What exposure? */
      exposure: Reference
    })
  ])
);

/**
 * What sample size was involved?
 */
export interface RiskEvidenceSynthesisSampleSize {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of sample size */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** How many studies? */
  numberOfStudies?: primitives.R4.integer;
  /** Extension of numberOfStudies element */
  _numberOfStudies?: Element;
  /** How many participants? */
  numberOfParticipants?: primitives.R4.integer;
  /** Extension of numberOfParticipants element */
  _numberOfParticipants?: Element;
}
/**
 * What sample size was involved?
 */
export const RiskEvidenceSynthesisSampleSize: t.Type<
  RiskEvidenceSynthesisSampleSize
> = t.recursion<RiskEvidenceSynthesisSampleSize>(
  "RiskEvidenceSynthesisSampleSize",
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
        /** Description of sample size */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** How many studies? */
        numberOfStudies: primitives.R4.integer,
        /** Extension of numberOfStudies element */
        _numberOfStudies: Element,
        /** How many participants? */
        numberOfParticipants: primitives.R4.integer,
        /** Extension of numberOfParticipants element */
        _numberOfParticipants: Element
      })
    ])
);

/**
 * What was the estimated risk
 */
export interface RiskEvidenceSynthesisRiskEstimate {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of risk estimate */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Type of risk estimate */
  type?: CodeableConcept;
  /** Point estimate */
  value?: primitives.R4.decimal;
  /** Extension of value element */
  _value?: Element;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConcept;
  /** Sample size for group measured */
  denominatorCount?: primitives.R4.integer;
  /** Extension of denominatorCount element */
  _denominatorCount?: Element;
  /** Number with the outcome */
  numeratorCount?: primitives.R4.integer;
  /** Extension of numeratorCount element */
  _numeratorCount?: Element;
}
/**
 * What was the estimated risk
 */
export const RiskEvidenceSynthesisRiskEstimate: t.Type<
  RiskEvidenceSynthesisRiskEstimate
> = t.recursion<RiskEvidenceSynthesisRiskEstimate>(
  "RiskEvidenceSynthesisRiskEstimate",
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
        /** Description of risk estimate */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Type of risk estimate */
        type: CodeableConcept,
        /** Point estimate */
        value: primitives.R4.decimal,
        /** Extension of value element */
        _value: Element,
        /** What unit is the outcome described in? */
        unitOfMeasure: CodeableConcept,
        /** Sample size for group measured */
        denominatorCount: primitives.R4.integer,
        /** Extension of denominatorCount element */
        _denominatorCount: Element,
        /** Number with the outcome */
        numeratorCount: primitives.R4.integer,
        /** Extension of numeratorCount element */
        _numeratorCount: Element
      })
    ])
);

/**
 * How precise the estimate is
 */
export interface RiskEvidenceSynthesisRiskEstimatePrecisionEstimate {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of precision estimate */
  type?: CodeableConcept;
  /** Level of confidence interval */
  level?: primitives.R4.decimal;
  /** Extension of level element */
  _level?: Element;
  /** Lower bound */
  from?: primitives.R4.decimal;
  /** Extension of from element */
  _from?: Element;
  /** Upper bound */
  to?: primitives.R4.decimal;
  /** Extension of to element */
  _to?: Element;
}
/**
 * How precise the estimate is
 */
export const RiskEvidenceSynthesisRiskEstimatePrecisionEstimate: t.Type<
  RiskEvidenceSynthesisRiskEstimatePrecisionEstimate
> = t.recursion<RiskEvidenceSynthesisRiskEstimatePrecisionEstimate>(
  "RiskEvidenceSynthesisRiskEstimatePrecisionEstimate",
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
        /** Type of precision estimate */
        type: CodeableConcept,
        /** Level of confidence interval */
        level: primitives.R4.decimal,
        /** Extension of level element */
        _level: Element,
        /** Lower bound */
        from: primitives.R4.decimal,
        /** Extension of from element */
        _from: Element,
        /** Upper bound */
        to: primitives.R4.decimal,
        /** Extension of to element */
        _to: Element
      })
    ])
);

/**
 * How certain is the risk
 */
export interface RiskEvidenceSynthesisCertainty {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Certainty rating */
  rating?: CodeableConcept[];
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
}
/**
 * How certain is the risk
 */
export const RiskEvidenceSynthesisCertainty: t.Type<
  RiskEvidenceSynthesisCertainty
> = t.recursion<RiskEvidenceSynthesisCertainty>(
  "RiskEvidenceSynthesisCertainty",
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
        /** Certainty rating */
        rating: t.array(CodeableConcept),
        /** Used for footnotes or explanatory notes */
        note: t.array(Annotation)
      })
    ])
);

/**
 * A component that contributes to the overall certainty
 */
export interface RiskEvidenceSynthesisCertaintyCertaintySubcomponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * A component that contributes to the overall certainty
 */
export const RiskEvidenceSynthesisCertaintyCertaintySubcomponent: t.Type<
  RiskEvidenceSynthesisCertaintyCertaintySubcomponent
> = t.recursion<RiskEvidenceSynthesisCertaintyCertaintySubcomponent>(
  "RiskEvidenceSynthesisCertaintyCertaintySubcomponent",
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
        /** Type of subcomponent of certainty rating */
        type: CodeableConcept,
        /** Subcomponent certainty rating */
        rating: t.array(CodeableConcept),
        /** Used for footnotes or explanatory notes */
        note: t.array(Annotation)
      })
    ])
);
