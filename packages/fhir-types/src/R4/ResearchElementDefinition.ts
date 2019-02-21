/**
 * ResearchElementDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Duration, DurationOutputType } from "./Duration";
import { Expression, ExpressionOutputType } from "./Expression";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * What defines the members of the research element
 */
export interface ResearchElementDefinitionCharacteristic {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What code or expression defines members? */
  definition:
    | CodeableConcept
    | t.TypeOf<primitives.R4.CanonicalType>
    | Expression
    | DataRequirement;
  /** What code/value pairs define members? */
  usageContext?: UsageContext[];
  /** Whether the characteristic includes or excludes members */
  exclude?: t.TypeOf<primitives.R4.BooleanType>;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConcept;
  /** What time period does the study cover */
  studyEffectiveDescription?: t.TypeOf<primitives.R4.StringType>;
  /** What time period does the study cover */
  studyeffective?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period
    | Duration
    | Timing;
  /** Observation time from study start */
  studyEffectiveTimeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  studyEffectiveGroupMeasure?: t.TypeOf<primitives.R4.CodeType>;
  /** What time period do participants cover */
  participantEffectiveDescription?: t.TypeOf<primitives.R4.StringType>;
  /** What time period do participants cover */
  participanteffective?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period
    | Duration
    | Timing;
  /** Observation time from study start */
  participantEffectiveTimeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  participantEffectiveGroupMeasure?: t.TypeOf<primitives.R4.CodeType>;
}

export interface ResearchElementDefinitionCharacteristicOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What code or expression defines members? */
  definition:
    | CodeableConceptOutputType
    | t.OutputOf<primitives.R4.CanonicalType>
    | ExpressionOutputType
    | DataRequirementOutputType;
  /** What code/value pairs define members? */
  usageContext?: UsageContextOutputType[];
  /** Whether the characteristic includes or excludes members */
  exclude?: t.OutputOf<primitives.R4.BooleanType>;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConceptOutputType;
  /** What time period does the study cover */
  studyEffectiveDescription?: t.OutputOf<primitives.R4.StringType>;
  /** What time period does the study cover */
  studyeffective?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | DurationOutputType
    | TimingOutputType;
  /** Observation time from study start */
  studyEffectiveTimeFromStart?: DurationOutputType;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  studyEffectiveGroupMeasure?: t.OutputOf<primitives.R4.CodeType>;
  /** What time period do participants cover */
  participantEffectiveDescription?: t.OutputOf<primitives.R4.StringType>;
  /** What time period do participants cover */
  participanteffective?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | DurationOutputType
    | TimingOutputType;
  /** Observation time from study start */
  participantEffectiveTimeFromStart?: DurationOutputType;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  participantEffectiveGroupMeasure?: t.OutputOf<primitives.R4.CodeType>;
}

export const ResearchElementDefinitionCharacteristic: t.RecursiveType<
  t.Type<
    ResearchElementDefinitionCharacteristic,
    ResearchElementDefinitionCharacteristicOutputType
  >,
  ResearchElementDefinitionCharacteristic,
  ResearchElementDefinitionCharacteristicOutputType
> = t.recursion<
  ResearchElementDefinitionCharacteristic,
  ResearchElementDefinitionCharacteristicOutputType
>("ResearchElementDefinitionCharacteristic", () =>
  t.intersection(
    [
      t.type({
        /** What code or expression defines members? */
        definition: t.union([
          CodeableConcept,
          primitives.R4.canonical,
          Expression,
          DataRequirement
        ])
      }),
      t.partial({
        /** Whether the characteristic includes or excludes members */
        exclude: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** What time period do participants cover */
        participantEffectiveDescription: primitives.R4.string,
        /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
        participantEffectiveGroupMeasure: primitives.R4.code,
        /** Observation time from study start */
        participantEffectiveTimeFromStart: Duration,
        /** What time period do participants cover */
        participanteffective: t.union([
          primitives.R4.dateTime,
          Period,
          Duration,
          Timing
        ]),
        /** What time period does the study cover */
        studyEffectiveDescription: primitives.R4.string,
        /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
        studyEffectiveGroupMeasure: primitives.R4.code,
        /** Observation time from study start */
        studyEffectiveTimeFromStart: Duration,
        /** What time period does the study cover */
        studyeffective: t.union([
          primitives.R4.dateTime,
          Period,
          Duration,
          Timing
        ]),
        /** What unit is the outcome described in? */
        unitOfMeasure: CodeableConcept,
        /** What code/value pairs define members? */
        usageContext: t.array(UsageContext)
      })
    ],
    "ResearchElementDefinitionCharacteristic"
  )
);

/**
 * A population, intervention, or exposure definition
 */
export interface ResearchElementDefinition {
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
  /** Canonical identifier for this research element definition, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the research element definition */
  identifier?: Identifier[];
  /** Business version of the research element definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this research element definition (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this research element definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the ResearchElementDefinition */
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
  /** Natural language description of the research element definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  comment?: t.TypeOf<primitives.R4.StringType>[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for research element definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this research element definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the ResearchElementDefinition */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the research element definition was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the research element definition was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the research element definition is expected to be used */
  effectivePeriod?: Period;
  /** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc. */
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
  /** Logic used by the ResearchElementDefinition */
  library?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** population | exposure | outcome */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** dichotomous | continuous | descriptive */
  variableType?: t.TypeOf<primitives.R4.CodeType>;
  /** What defines the members of the research element */
  characteristic: ResearchElementDefinitionCharacteristic[];
}

export interface ResearchElementDefinitionOutputType {
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
  /** Canonical identifier for this research element definition, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the research element definition */
  identifier?: IdentifierOutputType[];
  /** Business version of the research element definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this research element definition (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this research element definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the ResearchElementDefinition */
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
  /** Natural language description of the research element definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  comment?: t.OutputOf<primitives.R4.StringType>[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for research element definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this research element definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the ResearchElementDefinition */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the research element definition was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the research element definition was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the research element definition is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc. */
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
  /** Logic used by the ResearchElementDefinition */
  library?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** population | exposure | outcome */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** dichotomous | continuous | descriptive */
  variableType?: t.OutputOf<primitives.R4.CodeType>;
  /** What defines the members of the research element */
  characteristic: ResearchElementDefinitionCharacteristicOutputType[];
}

export const ResearchElementDefinition: t.RecursiveType<
  t.Type<ResearchElementDefinition, ResearchElementDefinitionOutputType>,
  ResearchElementDefinition,
  ResearchElementDefinitionOutputType
> = t.recursion<ResearchElementDefinition, ResearchElementDefinitionOutputType>(
  "ResearchElementDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** What defines the members of the research element */
          characteristic: t.array(ResearchElementDefinitionCharacteristic),
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** population | exposure | outcome */
          type: primitives.R4.code
        }),
        t.partial({
          /** When the research element definition was approved by publisher */
          approvalDate: primitives.R4.date,
          /** Who authored the content */
          author: t.array(ContactDetail),
          /** Used for footnotes or explanatory notes */
          comment: t.array(primitives.R4.string),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the research element definition */
          description: primitives.R4.markdown,
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** When the research element definition is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the research element definition */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for research element definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the research element definition was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Logic used by the ResearchElementDefinition */
          library: t.array(primitives.R4.canonical),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this research element definition (computer friendly) */
          name: primitives.R4.string,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this research element definition is defined */
          purpose: primitives.R4.markdown,
          /** Additional documentation, citations, etc. */
          relatedArtifact: t.array(RelatedArtifact),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** Title for use in informal contexts */
          shortTitle: primitives.R4.string,
          /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
          subject: t.union([CodeableConcept, Reference]),
          /** Subordinate title of the ResearchElementDefinition */
          subtitle: primitives.R4.string,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this research element definition (human friendly) */
          title: primitives.R4.string,
          /** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc. */
          topic: t.array(CodeableConcept),
          /** Canonical identifier for this research element definition, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** Describes the clinical usage of the ResearchElementDefinition */
          usage: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** dichotomous | continuous | descriptive */
          variableType: primitives.R4.code,
          /** Business version of the research element definition */
          version: primitives.R4.string
        })
      ],
      "ResearchElementDefinition"
    )
);
