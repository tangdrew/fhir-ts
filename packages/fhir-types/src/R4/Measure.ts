/**
 * Measure Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Expression, ExpressionOutputType } from "./Expression";
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
 * What other data should be reported with the measure
 */
export interface MeasureSupplementalData {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the supplemental data */
  code?: CodeableConcept;
  /** supplemental-data | risk-adjustment-factor */
  usage?: CodeableConcept[];
  /** The human readable description of this supplemental data */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Expression describing additional data to be reported */
  criteria: Expression;
}

export interface MeasureSupplementalDataOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Meaning of the supplemental data */
  code?: CodeableConceptOutputType;
  /** supplemental-data | risk-adjustment-factor */
  usage?: CodeableConceptOutputType[];
  /** The human readable description of this supplemental data */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Expression describing additional data to be reported */
  criteria: ExpressionOutputType;
}

export const MeasureSupplementalData: t.RecursiveType<
  t.Type<MeasureSupplementalData, MeasureSupplementalDataOutputType>,
  MeasureSupplementalData,
  MeasureSupplementalDataOutputType
> = t.recursion<MeasureSupplementalData, MeasureSupplementalDataOutputType>(
  "MeasureSupplementalData",
  () =>
    t.intersection(
      [
        t.type({
          /** Expression describing additional data to be reported */
          criteria: Expression
        }),
        t.partial({
          /** Meaning of the supplemental data */
          code: CodeableConcept,
          /** The human readable description of this supplemental data */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** supplemental-data | risk-adjustment-factor */
          usage: t.array(CodeableConcept)
        })
      ],
      "MeasureSupplementalData"
    )
);

/**
 * Stratifier criteria component for the measure
 */
export interface MeasureGroupStratifierComponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the stratifier component */
  code?: CodeableConcept;
  /** The human readable description of this stratifier component */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Component of how the measure should be stratified */
  criteria: Expression;
}

export interface MeasureGroupStratifierComponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Meaning of the stratifier component */
  code?: CodeableConceptOutputType;
  /** The human readable description of this stratifier component */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Component of how the measure should be stratified */
  criteria: ExpressionOutputType;
}

export const MeasureGroupStratifierComponent: t.RecursiveType<
  t.Type<
    MeasureGroupStratifierComponent,
    MeasureGroupStratifierComponentOutputType
  >,
  MeasureGroupStratifierComponent,
  MeasureGroupStratifierComponentOutputType
> = t.recursion<
  MeasureGroupStratifierComponent,
  MeasureGroupStratifierComponentOutputType
>("MeasureGroupStratifierComponent", () =>
  t.intersection(
    [
      t.type({
        /** Component of how the measure should be stratified */
        criteria: Expression
      }),
      t.partial({
        /** Meaning of the stratifier component */
        code: CodeableConcept,
        /** The human readable description of this stratifier component */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MeasureGroupStratifierComponent"
  )
);

/**
 * Stratifier criteria for the measure
 */
export interface MeasureGroupStratifier {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the stratifier */
  code?: CodeableConcept;
  /** The human readable description of this stratifier */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** How the measure should be stratified */
  criteria?: Expression;
  /** Stratifier criteria component for the measure */
  component?: MeasureGroupStratifierComponent[];
}

export interface MeasureGroupStratifierOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Meaning of the stratifier */
  code?: CodeableConceptOutputType;
  /** The human readable description of this stratifier */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** How the measure should be stratified */
  criteria?: ExpressionOutputType;
  /** Stratifier criteria component for the measure */
  component?: MeasureGroupStratifierComponentOutputType[];
}

export const MeasureGroupStratifier: t.RecursiveType<
  t.Type<MeasureGroupStratifier, MeasureGroupStratifierOutputType>,
  MeasureGroupStratifier,
  MeasureGroupStratifierOutputType
> = t.recursion<MeasureGroupStratifier, MeasureGroupStratifierOutputType>(
  "MeasureGroupStratifier",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Meaning of the stratifier */
          code: CodeableConcept,
          /** Stratifier criteria component for the measure */
          component: t.array(MeasureGroupStratifierComponent),
          /** How the measure should be stratified */
          criteria: Expression,
          /** The human readable description of this stratifier */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "MeasureGroupStratifier"
    )
);

/**
 * Population criteria
 */
export interface MeasureGroupPopulation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConcept;
  /** The human readable description of this population criteria */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** The criteria that defines this population */
  criteria: Expression;
}

export interface MeasureGroupPopulationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConceptOutputType;
  /** The human readable description of this population criteria */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** The criteria that defines this population */
  criteria: ExpressionOutputType;
}

export const MeasureGroupPopulation: t.RecursiveType<
  t.Type<MeasureGroupPopulation, MeasureGroupPopulationOutputType>,
  MeasureGroupPopulation,
  MeasureGroupPopulationOutputType
> = t.recursion<MeasureGroupPopulation, MeasureGroupPopulationOutputType>(
  "MeasureGroupPopulation",
  () =>
    t.intersection(
      [
        t.type({
          /** The criteria that defines this population */
          criteria: Expression
        }),
        t.partial({
          /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
          code: CodeableConcept,
          /** The human readable description of this population criteria */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "MeasureGroupPopulation"
    )
);

/**
 * Population criteria group
 */
export interface MeasureGroup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the group */
  code?: CodeableConcept;
  /** Summary description */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Population criteria */
  population?: MeasureGroupPopulation[];
  /** Stratifier criteria for the measure */
  stratifier?: MeasureGroupStratifier[];
}

export interface MeasureGroupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Meaning of the group */
  code?: CodeableConceptOutputType;
  /** Summary description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Population criteria */
  population?: MeasureGroupPopulationOutputType[];
  /** Stratifier criteria for the measure */
  stratifier?: MeasureGroupStratifierOutputType[];
}

export const MeasureGroup: t.RecursiveType<
  t.Type<MeasureGroup, MeasureGroupOutputType>,
  MeasureGroup,
  MeasureGroupOutputType
> = t.recursion<MeasureGroup, MeasureGroupOutputType>("MeasureGroup", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Meaning of the group */
        code: CodeableConcept,
        /** Summary description */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Population criteria */
        population: t.array(MeasureGroupPopulation),
        /** Stratifier criteria for the measure */
        stratifier: t.array(MeasureGroupStratifier)
      })
    ],
    "MeasureGroup"
  )
);

/**
 * A quality measure definition
 */
export interface Measure {
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
  /** Canonical identifier for this measure, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the measure */
  identifier?: Identifier[];
  /** Business version of the measure */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this measure (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this measure (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the measure */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subject?: CodeableConcept | Reference;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the measure */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for measure (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this measure is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the measure */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the measure was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the measure was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
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
  library?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Disclaimer for use of the measure or its referenced content */
  disclaimer?: t.TypeOf<primitives.R4.MarkdownType>;
  /** proportion | ratio | continuous-variable | cohort */
  scoring?: CodeableConcept;
  /** opportunity | all-or-nothing | linear | weighted */
  compositeScoring?: CodeableConcept;
  /** process | outcome | structure | patient-reported-outcome | composite */
  type?: CodeableConcept[];
  /** How risk adjustment is applied for this measure */
  riskAdjustment?: t.TypeOf<primitives.R4.StringType>;
  /** How is rate aggregation performed for this measure */
  rateAggregation?: t.TypeOf<primitives.R4.StringType>;
  /** Detailed description of why the measure exists */
  rationale?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Summary of clinical guidelines */
  clinicalRecommendationStatement?: t.TypeOf<primitives.R4.MarkdownType>;
  /** increase | decrease */
  improvementNotation?: CodeableConcept;
  /** Defined terms used in the measure documentation */
  definition?: t.TypeOf<primitives.R4.MarkdownType>[];
  /** Additional guidance for implementers */
  guidance?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Population criteria group */
  group?: MeasureGroup[];
  /** What other data should be reported with the measure */
  supplementalData?: MeasureSupplementalData[];
}

export interface MeasureOutputType {
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
  /** Canonical identifier for this measure, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the measure */
  identifier?: IdentifierOutputType[];
  /** Business version of the measure */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this measure (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this measure (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the measure */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subject?: CodeableConceptOutputType | ReferenceOutputType;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the measure */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for measure (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this measure is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the measure */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the measure was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the measure was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the measure is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** The category of the measure, such as Education, Treatment, Assessment, etc. */
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
  /** Logic used by the measure */
  library?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Disclaimer for use of the measure or its referenced content */
  disclaimer?: t.OutputOf<primitives.R4.MarkdownType>;
  /** proportion | ratio | continuous-variable | cohort */
  scoring?: CodeableConceptOutputType;
  /** opportunity | all-or-nothing | linear | weighted */
  compositeScoring?: CodeableConceptOutputType;
  /** process | outcome | structure | patient-reported-outcome | composite */
  type?: CodeableConceptOutputType[];
  /** How risk adjustment is applied for this measure */
  riskAdjustment?: t.OutputOf<primitives.R4.StringType>;
  /** How is rate aggregation performed for this measure */
  rateAggregation?: t.OutputOf<primitives.R4.StringType>;
  /** Detailed description of why the measure exists */
  rationale?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Summary of clinical guidelines */
  clinicalRecommendationStatement?: t.OutputOf<primitives.R4.MarkdownType>;
  /** increase | decrease */
  improvementNotation?: CodeableConceptOutputType;
  /** Defined terms used in the measure documentation */
  definition?: t.OutputOf<primitives.R4.MarkdownType>[];
  /** Additional guidance for implementers */
  guidance?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Population criteria group */
  group?: MeasureGroupOutputType[];
  /** What other data should be reported with the measure */
  supplementalData?: MeasureSupplementalDataOutputType[];
}

export const Measure: t.RecursiveType<
  t.Type<Measure, MeasureOutputType>,
  Measure,
  MeasureOutputType
> = t.recursion<Measure, MeasureOutputType>("Measure", () =>
  t.intersection(
    [
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** When the measure was approved by publisher */
        approvalDate: primitives.R4.date,
        /** Who authored the content */
        author: t.array(ContactDetail),
        /** Summary of clinical guidelines */
        clinicalRecommendationStatement: primitives.R4.markdown,
        /** opportunity | all-or-nothing | linear | weighted */
        compositeScoring: CodeableConcept,
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Defined terms used in the measure documentation */
        definition: t.array(primitives.R4.markdown),
        /** Natural language description of the measure */
        description: primitives.R4.markdown,
        /** Disclaimer for use of the measure or its referenced content */
        disclaimer: primitives.R4.markdown,
        /** Who edited the content */
        editor: t.array(ContactDetail),
        /** When the measure is expected to be used */
        effectivePeriod: Period,
        /** Who endorsed the content */
        endorser: t.array(ContactDetail),
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Population criteria group */
        group: t.array(MeasureGroup),
        /** Additional guidance for implementers */
        guidance: primitives.R4.markdown,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the measure */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** increase | decrease */
        improvementNotation: CodeableConcept,
        /** Intended jurisdiction for measure (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** When the measure was last reviewed */
        lastReviewDate: primitives.R4.date,
        /** Logic used by the measure */
        library: t.array(primitives.R4.canonical),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this measure (computer friendly) */
        name: primitives.R4.string,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this measure is defined */
        purpose: primitives.R4.markdown,
        /** How is rate aggregation performed for this measure */
        rateAggregation: primitives.R4.string,
        /** Detailed description of why the measure exists */
        rationale: primitives.R4.markdown,
        /** Additional documentation, citations, etc. */
        relatedArtifact: t.array(RelatedArtifact),
        /** Who reviewed the content */
        reviewer: t.array(ContactDetail),
        /** How risk adjustment is applied for this measure */
        riskAdjustment: primitives.R4.string,
        /** proportion | ratio | continuous-variable | cohort */
        scoring: CodeableConcept,
        /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
        subject: t.union([CodeableConcept, Reference]),
        /** Subordinate title of the measure */
        subtitle: primitives.R4.string,
        /** What other data should be reported with the measure */
        supplementalData: t.array(MeasureSupplementalData),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this measure (human friendly) */
        title: primitives.R4.string,
        /** The category of the measure, such as Education, Treatment, Assessment, etc. */
        topic: t.array(CodeableConcept),
        /** process | outcome | structure | patient-reported-outcome | composite */
        type: t.array(CodeableConcept),
        /** Canonical identifier for this measure, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Describes the clinical usage of the measure */
        usage: primitives.R4.string,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the measure */
        version: primitives.R4.string
      })
    ],
    "Measure"
  )
);
