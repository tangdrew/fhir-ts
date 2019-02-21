/**
 * EvidenceVariable Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
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
import {
  TriggerDefinition,
  TriggerDefinitionOutputType
} from "./TriggerDefinition";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * What defines the members of the evidence element
 */
export interface EvidenceVariableCharacteristic {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Natural language description of the characteristic */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** What code or expression defines members? */
  definition:
    | Reference
    | t.TypeOf<primitives.R4.CanonicalType>
    | CodeableConcept
    | Expression
    | DataRequirement
    | TriggerDefinition;
  /** What code/value pairs define members? */
  usageContext?: UsageContext[];
  /** Whether the characteristic includes or excludes members */
  exclude?: t.TypeOf<primitives.R4.BooleanType>;
  /** What time period do participants cover */
  participanteffective?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period
    | Duration
    | Timing;
  /** Observation time from study start */
  timeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  groupMeasure?: t.TypeOf<primitives.R4.CodeType>;
}

export interface EvidenceVariableCharacteristicOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Natural language description of the characteristic */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** What code or expression defines members? */
  definition:
    | ReferenceOutputType
    | t.OutputOf<primitives.R4.CanonicalType>
    | CodeableConceptOutputType
    | ExpressionOutputType
    | DataRequirementOutputType
    | TriggerDefinitionOutputType;
  /** What code/value pairs define members? */
  usageContext?: UsageContextOutputType[];
  /** Whether the characteristic includes or excludes members */
  exclude?: t.OutputOf<primitives.R4.BooleanType>;
  /** What time period do participants cover */
  participanteffective?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | DurationOutputType
    | TimingOutputType;
  /** Observation time from study start */
  timeFromStart?: DurationOutputType;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  groupMeasure?: t.OutputOf<primitives.R4.CodeType>;
}

export const EvidenceVariableCharacteristic: t.RecursiveType<
  t.Type<
    EvidenceVariableCharacteristic,
    EvidenceVariableCharacteristicOutputType
  >,
  EvidenceVariableCharacteristic,
  EvidenceVariableCharacteristicOutputType
> = t.recursion<
  EvidenceVariableCharacteristic,
  EvidenceVariableCharacteristicOutputType
>("EvidenceVariableCharacteristic", () =>
  t.intersection(
    [
      t.type({
        /** What code or expression defines members? */
        definition: t.union([
          Reference,
          primitives.R4.canonical,
          CodeableConcept,
          Expression,
          DataRequirement,
          TriggerDefinition
        ])
      }),
      t.partial({
        /** Natural language description of the characteristic */
        description: primitives.R4.string,
        /** Whether the characteristic includes or excludes members */
        exclude: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
        groupMeasure: primitives.R4.code,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** What time period do participants cover */
        participanteffective: t.union([
          primitives.R4.dateTime,
          Period,
          Duration,
          Timing
        ]),
        /** Observation time from study start */
        timeFromStart: Duration,
        /** What code/value pairs define members? */
        usageContext: t.array(UsageContext)
      })
    ],
    "EvidenceVariableCharacteristic"
  )
);

/**
 * A population, intervention, or exposure definition
 */
export interface EvidenceVariable {
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
  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the evidence variable */
  identifier?: Identifier[];
  /** Business version of the evidence variable */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this evidence variable (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this evidence variable (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the EvidenceVariable */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the evidence variable */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for evidence variable (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the evidence variable was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the evidence variable was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the evidence variable is expected to be used */
  effectivePeriod?: Period;
  /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. */
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
  /** dichotomous | continuous | descriptive */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** What defines the members of the evidence element */
  characteristic: EvidenceVariableCharacteristic[];
}

export interface EvidenceVariableOutputType {
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
  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the evidence variable */
  identifier?: IdentifierOutputType[];
  /** Business version of the evidence variable */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this evidence variable (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this evidence variable (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the EvidenceVariable */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the evidence variable */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: AnnotationOutputType[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for evidence variable (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the evidence variable was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the evidence variable was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the evidence variable is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. */
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
  /** dichotomous | continuous | descriptive */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** What defines the members of the evidence element */
  characteristic: EvidenceVariableCharacteristicOutputType[];
}

export const EvidenceVariable: t.RecursiveType<
  t.Type<EvidenceVariable, EvidenceVariableOutputType>,
  EvidenceVariable,
  EvidenceVariableOutputType
> = t.recursion<EvidenceVariable, EvidenceVariableOutputType>(
  "EvidenceVariable",
  () =>
    t.intersection(
      [
        t.type({
          /** What defines the members of the evidence element */
          characteristic: t.array(EvidenceVariableCharacteristic),
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** When the evidence variable was approved by publisher */
          approvalDate: primitives.R4.date,
          /** Who authored the content */
          author: t.array(ContactDetail),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the evidence variable */
          description: primitives.R4.markdown,
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** When the evidence variable is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the evidence variable */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for evidence variable (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the evidence variable was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this evidence variable (computer friendly) */
          name: primitives.R4.string,
          /** Used for footnotes or explanatory notes */
          note: t.array(Annotation),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Additional documentation, citations, etc. */
          relatedArtifact: t.array(RelatedArtifact),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** Title for use in informal contexts */
          shortTitle: primitives.R4.string,
          /** Subordinate title of the EvidenceVariable */
          subtitle: primitives.R4.string,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this evidence variable (human friendly) */
          title: primitives.R4.string,
          /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. */
          topic: t.array(CodeableConcept),
          /** dichotomous | continuous | descriptive */
          type: primitives.R4.code,
          /** Canonical identifier for this evidence variable, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the evidence variable */
          version: primitives.R4.string
        })
      ],
      "EvidenceVariable"
    )
);
