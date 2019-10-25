/**
 * Measure Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Expression } from "./Expression";
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
 * A quality measure definition
 */
export interface Measure {
  /** The type of resource */
  resourceType?: "Measure";
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
  /** Canonical identifier for this measure, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the measure */
  identifier?: Identifier[];
  /** Business version of the measure */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this measure (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this measure (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Subordinate title of the measure */
  subtitle?: string;
  /** Extension of subtitle element */
  _subtitle?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectReference?: Reference;
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
  /** Natural language description of the measure */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for measure (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this measure is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Describes the clinical usage of the measure */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the measure was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the measure was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
  /** When the measure is expected to be used */
  effectivePeriod?: Period;
  /** The category of the measure, such as Education, Treatment, Assessment, etc. */
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
  /** Logic used by the measure */
  library?: primitives.R4.canonical[];
  /** Extension of library element */
  _library?: Element[];
  /** Disclaimer for use of the measure or its referenced content */
  disclaimer?: primitives.R4.markdown;
  /** Extension of disclaimer element */
  _disclaimer?: Element;
  /** proportion | ratio | continuous-variable | cohort */
  scoring?: CodeableConcept;
  /** opportunity | all-or-nothing | linear | weighted */
  compositeScoring?: CodeableConcept;
  /** process | outcome | structure | patient-reported-outcome | composite */
  type?: CodeableConcept[];
  /** How risk adjustment is applied for this measure */
  riskAdjustment?: string;
  /** Extension of riskAdjustment element */
  _riskAdjustment?: Element;
  /** How is rate aggregation performed for this measure */
  rateAggregation?: string;
  /** Extension of rateAggregation element */
  _rateAggregation?: Element;
  /** Detailed description of why the measure exists */
  rationale?: primitives.R4.markdown;
  /** Extension of rationale element */
  _rationale?: Element;
  /** Summary of clinical guidelines */
  clinicalRecommendationStatement?: primitives.R4.markdown;
  /** Extension of clinicalRecommendationStatement element */
  _clinicalRecommendationStatement?: Element;
  /** increase | decrease */
  improvementNotation?: CodeableConcept;
  /** Defined terms used in the measure documentation */
  definition?: primitives.R4.markdown[];
  /** Extension of definition element */
  _definition?: Element[];
  /** Additional guidance for implementers */
  guidance?: primitives.R4.markdown;
  /** Extension of guidance element */
  _guidance?: Element;
}
/**
 * A quality measure definition
 */
export const Measure: t.Type<Measure> = t.recursion<Measure>("Measure", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Measure"),
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
      /** Canonical identifier for this measure, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the measure */
      identifier: t.array(Identifier),
      /** Business version of the measure */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this measure (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this measure (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Subordinate title of the measure */
      subtitle: primitives.R4.string,
      /** Extension of subtitle element */
      _subtitle: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
      subjectCodeableConcept: CodeableConcept,
      /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
      subjectReference: Reference,
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
      /** Natural language description of the measure */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for measure (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this measure is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Describes the clinical usage of the measure */
      usage: primitives.R4.string,
      /** Extension of usage element */
      _usage: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the measure was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the measure was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the measure is expected to be used */
      effectivePeriod: Period,
      /** The category of the measure, such as Education, Treatment, Assessment, etc. */
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
      /** Logic used by the measure */
      library: t.array(primitives.R4.canonical),
      /** Extension of library element */
      _library: t.array(Element),
      /** Disclaimer for use of the measure or its referenced content */
      disclaimer: primitives.R4.markdown,
      /** Extension of disclaimer element */
      _disclaimer: Element,
      /** proportion | ratio | continuous-variable | cohort */
      scoring: CodeableConcept,
      /** opportunity | all-or-nothing | linear | weighted */
      compositeScoring: CodeableConcept,
      /** process | outcome | structure | patient-reported-outcome | composite */
      type: t.array(CodeableConcept),
      /** How risk adjustment is applied for this measure */
      riskAdjustment: primitives.R4.string,
      /** Extension of riskAdjustment element */
      _riskAdjustment: Element,
      /** How is rate aggregation performed for this measure */
      rateAggregation: primitives.R4.string,
      /** Extension of rateAggregation element */
      _rateAggregation: Element,
      /** Detailed description of why the measure exists */
      rationale: primitives.R4.markdown,
      /** Extension of rationale element */
      _rationale: Element,
      /** Summary of clinical guidelines */
      clinicalRecommendationStatement: primitives.R4.markdown,
      /** Extension of clinicalRecommendationStatement element */
      _clinicalRecommendationStatement: Element,
      /** increase | decrease */
      improvementNotation: CodeableConcept,
      /** Defined terms used in the measure documentation */
      definition: t.array(primitives.R4.markdown),
      /** Extension of definition element */
      _definition: t.array(Element),
      /** Additional guidance for implementers */
      guidance: primitives.R4.markdown,
      /** Extension of guidance element */
      _guidance: Element
    })
  ])
);

/**
 * Population criteria group
 */
export interface MeasureGroup {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the group */
  code?: CodeableConcept;
  /** Summary description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Population criteria group
 */
export const MeasureGroup: t.Type<MeasureGroup> = t.recursion<MeasureGroup>(
  "MeasureGroup",
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
        /** Meaning of the group */
        code: CodeableConcept,
        /** Summary description */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * Population criteria
 */
export interface MeasureGroupPopulation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConcept;
  /** The human readable description of this population criteria */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** The criteria that defines this population */
  criteria: Expression;
}
/**
 * Population criteria
 */
export const MeasureGroupPopulation: t.Type<
  MeasureGroupPopulation
> = t.recursion<MeasureGroupPopulation>("MeasureGroupPopulation", () =>
  t.intersection([
    t.type({
      /** The criteria that defines this population */
      criteria: Expression
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
      /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
      code: CodeableConcept,
      /** The human readable description of this population criteria */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * Stratifier criteria for the measure
 */
export interface MeasureGroupStratifier {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the stratifier */
  code?: CodeableConcept;
  /** The human readable description of this stratifier */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** How the measure should be stratified */
  criteria?: Expression;
}
/**
 * Stratifier criteria for the measure
 */
export const MeasureGroupStratifier: t.Type<
  MeasureGroupStratifier
> = t.recursion<MeasureGroupStratifier>("MeasureGroupStratifier", () =>
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
      /** Meaning of the stratifier */
      code: CodeableConcept,
      /** The human readable description of this stratifier */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** How the measure should be stratified */
      criteria: Expression
    })
  ])
);

/**
 * Stratifier criteria component for the measure
 */
export interface MeasureGroupStratifierComponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the stratifier component */
  code?: CodeableConcept;
  /** The human readable description of this stratifier component */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Component of how the measure should be stratified */
  criteria: Expression;
}
/**
 * Stratifier criteria component for the measure
 */
export const MeasureGroupStratifierComponent: t.Type<
  MeasureGroupStratifierComponent
> = t.recursion<MeasureGroupStratifierComponent>(
  "MeasureGroupStratifierComponent",
  () =>
    t.intersection([
      t.type({
        /** Component of how the measure should be stratified */
        criteria: Expression
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
        /** Meaning of the stratifier component */
        code: CodeableConcept,
        /** The human readable description of this stratifier component */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * What other data should be reported with the measure
 */
export interface MeasureSupplementalData {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the supplemental data */
  code?: CodeableConcept;
  /** supplemental-data | risk-adjustment-factor */
  usage?: CodeableConcept[];
  /** The human readable description of this supplemental data */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Expression describing additional data to be reported */
  criteria: Expression;
}
/**
 * What other data should be reported with the measure
 */
export const MeasureSupplementalData: t.Type<
  MeasureSupplementalData
> = t.recursion<MeasureSupplementalData>("MeasureSupplementalData", () =>
  t.intersection([
    t.type({
      /** Expression describing additional data to be reported */
      criteria: Expression
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
      /** Meaning of the supplemental data */
      code: CodeableConcept,
      /** supplemental-data | risk-adjustment-factor */
      usage: t.array(CodeableConcept),
      /** The human readable description of this supplemental data */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);
