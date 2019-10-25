/**
 * EffectEvidenceSynthesis Module
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
 * A quantified estimate of effect based on a body of evidence
 */
export interface EffectEvidenceSynthesis {
  /** The type of resource */
  resourceType?: "EffectEvidenceSynthesis";
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
  /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the effect evidence synthesis */
  identifier?: Identifier[];
  /** Business version of the effect evidence synthesis */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this effect evidence synthesis (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this effect evidence synthesis (human friendly) */
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
  /** Natural language description of the effect evidence synthesis */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for effect evidence synthesis (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the effect evidence synthesis was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the effect evidence synthesis was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
}
/**
 * A quantified estimate of effect based on a body of evidence
 */
export const EffectEvidenceSynthesis: t.Type<
  EffectEvidenceSynthesis
> = t.recursion<EffectEvidenceSynthesis>("EffectEvidenceSynthesis", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** What population? */
      population: Reference,
      /** What exposure? */
      exposure: Reference,
      /** What comparison exposure? */
      exposureAlternative: Reference,
      /** What outcome? */
      outcome: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("EffectEvidenceSynthesis"),
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
      /** Canonical identifier for this effect evidence synthesis, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the effect evidence synthesis */
      identifier: t.array(Identifier),
      /** Business version of the effect evidence synthesis */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this effect evidence synthesis (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this effect evidence synthesis (human friendly) */
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
      /** Natural language description of the effect evidence synthesis */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** Used for footnotes or explanatory notes */
      note: t.array(Annotation),
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for effect evidence synthesis (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the effect evidence synthesis was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the effect evidence synthesis was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the effect evidence synthesis is expected to be used */
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
      studyType: CodeableConcept
    })
  ])
);

/**
 * What sample size was involved?
 */
export interface EffectEvidenceSynthesisSampleSize {
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
export const EffectEvidenceSynthesisSampleSize: t.Type<
  EffectEvidenceSynthesisSampleSize
> = t.recursion<EffectEvidenceSynthesisSampleSize>(
  "EffectEvidenceSynthesisSampleSize",
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
 * What was the result per exposure?
 */
export interface EffectEvidenceSynthesisResultsByExposure {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of results by exposure */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** exposure | exposure-alternative */
  exposureState?: primitives.R4.code;
  /** Extension of exposureState element */
  _exposureState?: Element;
  /** Variant exposure states */
  variantState?: CodeableConcept;
  /** Risk evidence synthesis */
  riskEvidenceSynthesis: Reference;
}
/**
 * What was the result per exposure?
 */
export const EffectEvidenceSynthesisResultsByExposure: t.Type<
  EffectEvidenceSynthesisResultsByExposure
> = t.recursion<EffectEvidenceSynthesisResultsByExposure>(
  "EffectEvidenceSynthesisResultsByExposure",
  () =>
    t.intersection([
      t.type({
        /** Risk evidence synthesis */
        riskEvidenceSynthesis: Reference
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
        /** Description of results by exposure */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** exposure | exposure-alternative */
        exposureState: primitives.R4.code,
        /** Extension of exposureState element */
        _exposureState: Element,
        /** Variant exposure states */
        variantState: CodeableConcept
      })
    ])
);

/**
 * What was the estimated effect
 */
export interface EffectEvidenceSynthesisEffectEstimate {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of effect estimate */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Type of efffect estimate */
  type?: CodeableConcept;
  /** Variant exposure states */
  variantState?: CodeableConcept;
  /** Point estimate */
  value?: primitives.R4.decimal;
  /** Extension of value element */
  _value?: Element;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConcept;
}
/**
 * What was the estimated effect
 */
export const EffectEvidenceSynthesisEffectEstimate: t.Type<
  EffectEvidenceSynthesisEffectEstimate
> = t.recursion<EffectEvidenceSynthesisEffectEstimate>(
  "EffectEvidenceSynthesisEffectEstimate",
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
        /** Description of effect estimate */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Type of efffect estimate */
        type: CodeableConcept,
        /** Variant exposure states */
        variantState: CodeableConcept,
        /** Point estimate */
        value: primitives.R4.decimal,
        /** Extension of value element */
        _value: Element,
        /** What unit is the outcome described in? */
        unitOfMeasure: CodeableConcept
      })
    ])
);

/**
 * How precise the estimate is
 */
export interface EffectEvidenceSynthesisEffectEstimatePrecisionEstimate {
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
export const EffectEvidenceSynthesisEffectEstimatePrecisionEstimate: t.Type<
  EffectEvidenceSynthesisEffectEstimatePrecisionEstimate
> = t.recursion<EffectEvidenceSynthesisEffectEstimatePrecisionEstimate>(
  "EffectEvidenceSynthesisEffectEstimatePrecisionEstimate",
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
 * How certain is the effect
 */
export interface EffectEvidenceSynthesisCertainty {
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
 * How certain is the effect
 */
export const EffectEvidenceSynthesisCertainty: t.Type<
  EffectEvidenceSynthesisCertainty
> = t.recursion<EffectEvidenceSynthesisCertainty>(
  "EffectEvidenceSynthesisCertainty",
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
export interface EffectEvidenceSynthesisCertaintyCertaintySubcomponent {
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
export const EffectEvidenceSynthesisCertaintyCertaintySubcomponent: t.Type<
  EffectEvidenceSynthesisCertaintyCertaintySubcomponent
> = t.recursion<EffectEvidenceSynthesisCertaintyCertaintySubcomponent>(
  "EffectEvidenceSynthesisCertaintyCertaintySubcomponent",
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
