/**
 * ActivityDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age, AgeOutputType } from "./Age";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Dosage, DosageOutputType } from "./Dosage";
import { Duration, DurationOutputType } from "./Duration";
import { Expression, ExpressionOutputType } from "./Expression";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Who should participate in the action
 */
export interface ActivityDefinitionParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** patient | practitioner | related-person | device */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** E.g. Nurse, Surgeon, Parent, etc. */
  role?: CodeableConcept;
}

export interface ActivityDefinitionParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** patient | practitioner | related-person | device */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** E.g. Nurse, Surgeon, Parent, etc. */
  role?: CodeableConceptOutputType;
}

export const ActivityDefinitionParticipant: t.RecursiveType<
  t.Type<
    ActivityDefinitionParticipant,
    ActivityDefinitionParticipantOutputType
  >,
  ActivityDefinitionParticipant,
  ActivityDefinitionParticipantOutputType
> = t.recursion<
  ActivityDefinitionParticipant,
  ActivityDefinitionParticipantOutputType
>("ActivityDefinitionParticipant", () =>
  t.intersection(
    [
      t.type({
        /** patient | practitioner | related-person | device */
        type: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** E.g. Nurse, Surgeon, Parent, etc. */
        role: CodeableConcept
      })
    ],
    "ActivityDefinitionParticipant"
  )
);

/**
 * Dynamic aspects of the definition
 */
export interface ActivityDefinitionDynamicValue {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The path to the element to be set dynamically */
  path: t.TypeOf<primitives.R4.StringType>;
  /** An expression that provides the dynamic value for the customization */
  expression: Expression;
}

export interface ActivityDefinitionDynamicValueOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The path to the element to be set dynamically */
  path: t.OutputOf<primitives.R4.StringType>;
  /** An expression that provides the dynamic value for the customization */
  expression: ExpressionOutputType;
}

export const ActivityDefinitionDynamicValue: t.RecursiveType<
  t.Type<
    ActivityDefinitionDynamicValue,
    ActivityDefinitionDynamicValueOutputType
  >,
  ActivityDefinitionDynamicValue,
  ActivityDefinitionDynamicValueOutputType
> = t.recursion<
  ActivityDefinitionDynamicValue,
  ActivityDefinitionDynamicValueOutputType
>("ActivityDefinitionDynamicValue", () =>
  t.intersection(
    [
      t.type({
        /** An expression that provides the dynamic value for the customization */
        expression: Expression,
        /** The path to the element to be set dynamically */
        path: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ActivityDefinitionDynamicValue"
  )
);

/**
 * The definition of a specific activity to be taken, independent of any particular patient or context
 */
export interface ActivityDefinition {
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
  /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the activity definition */
  identifier?: Identifier[];
  /** Business version of the activity definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this activity definition (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this activity definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the activity definition */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Type of individual the activity definition is intended for */
  subject?: CodeableConcept | Reference;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the activity definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for activity definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this activity definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the activity definition */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the activity definition was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the activity definition was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the activity definition is expected to be used */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment, etc. */
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
  /** Logic used by the activity definition */
  library?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Kind of resource */
  kind?: t.TypeOf<primitives.R4.CodeType>;
  /** What profile the resource needs to conform to */
  profile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Detail type of activity */
  code?: CodeableConcept;
  /** proposal | plan | order */
  intent?: t.TypeOf<primitives.R4.CodeType>;
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** True if the activity should not be performed */
  doNotPerform?: t.TypeOf<primitives.R4.BooleanType>;
  /** When activity is to occur */
  timing?:
    | Timing
    | t.TypeOf<primitives.R4.DateTimeType>
    | Age
    | Period
    | Range
    | Duration;
  /** Where it should happen */
  location?: Reference;
  /** Who should participate in the action */
  participant?: ActivityDefinitionParticipant[];
  /** What's administered/supplied */
  product?: Reference | CodeableConcept;
  /** How much is administered/consumed/supplied */
  quantity?: Quantity;
  /** Detailed dosage instructions */
  dosage?: Dosage[];
  /** What part of body to perform on */
  bodySite?: CodeableConcept[];
  /** What specimens are required to perform this action */
  specimenRequirement?: Reference[];
  /** What observations are required to perform this action */
  observationRequirement?: Reference[];
  /** What observations must be produced by this action */
  observationResultRequirement?: Reference[];
  /** Transform to apply the template */
  transform?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Dynamic aspects of the definition */
  dynamicValue?: ActivityDefinitionDynamicValue[];
}

export interface ActivityDefinitionOutputType {
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
  /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the activity definition */
  identifier?: IdentifierOutputType[];
  /** Business version of the activity definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this activity definition (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this activity definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the activity definition */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Type of individual the activity definition is intended for */
  subject?: CodeableConceptOutputType | ReferenceOutputType;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the activity definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for activity definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this activity definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the activity definition */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the activity definition was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the activity definition was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the activity definition is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** E.g. Education, Treatment, Assessment, etc. */
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
  /** Logic used by the activity definition */
  library?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Kind of resource */
  kind?: t.OutputOf<primitives.R4.CodeType>;
  /** What profile the resource needs to conform to */
  profile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Detail type of activity */
  code?: CodeableConceptOutputType;
  /** proposal | plan | order */
  intent?: t.OutputOf<primitives.R4.CodeType>;
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** True if the activity should not be performed */
  doNotPerform?: t.OutputOf<primitives.R4.BooleanType>;
  /** When activity is to occur */
  timing?:
    | TimingOutputType
    | t.OutputOf<primitives.R4.DateTimeType>
    | AgeOutputType
    | PeriodOutputType
    | RangeOutputType
    | DurationOutputType;
  /** Where it should happen */
  location?: ReferenceOutputType;
  /** Who should participate in the action */
  participant?: ActivityDefinitionParticipantOutputType[];
  /** What's administered/supplied */
  product?: ReferenceOutputType | CodeableConceptOutputType;
  /** How much is administered/consumed/supplied */
  quantity?: QuantityOutputType;
  /** Detailed dosage instructions */
  dosage?: DosageOutputType[];
  /** What part of body to perform on */
  bodySite?: CodeableConceptOutputType[];
  /** What specimens are required to perform this action */
  specimenRequirement?: ReferenceOutputType[];
  /** What observations are required to perform this action */
  observationRequirement?: ReferenceOutputType[];
  /** What observations must be produced by this action */
  observationResultRequirement?: ReferenceOutputType[];
  /** Transform to apply the template */
  transform?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Dynamic aspects of the definition */
  dynamicValue?: ActivityDefinitionDynamicValueOutputType[];
}

export const ActivityDefinition: t.RecursiveType<
  t.Type<ActivityDefinition, ActivityDefinitionOutputType>,
  ActivityDefinition,
  ActivityDefinitionOutputType
> = t.recursion<ActivityDefinition, ActivityDefinitionOutputType>(
  "ActivityDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** When the activity definition was approved by publisher */
          approvalDate: primitives.R4.date,
          /** Who authored the content */
          author: t.array(ContactDetail),
          /** What part of body to perform on */
          bodySite: t.array(CodeableConcept),
          /** Detail type of activity */
          code: CodeableConcept,
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the activity definition */
          description: primitives.R4.markdown,
          /** True if the activity should not be performed */
          doNotPerform: primitives.R4.boolean,
          /** Detailed dosage instructions */
          dosage: t.array(Dosage),
          /** Dynamic aspects of the definition */
          dynamicValue: t.array(ActivityDefinitionDynamicValue),
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** When the activity definition is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the activity definition */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** proposal | plan | order */
          intent: primitives.R4.code,
          /** Intended jurisdiction for activity definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Kind of resource */
          kind: primitives.R4.code,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the activity definition was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Logic used by the activity definition */
          library: t.array(primitives.R4.canonical),
          /** Where it should happen */
          location: Reference,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this activity definition (computer friendly) */
          name: primitives.R4.string,
          /** What observations are required to perform this action */
          observationRequirement: t.array(Reference),
          /** What observations must be produced by this action */
          observationResultRequirement: t.array(Reference),
          /** Who should participate in the action */
          participant: t.array(ActivityDefinitionParticipant),
          /** routine | urgent | asap | stat */
          priority: primitives.R4.code,
          /** What's administered/supplied */
          product: t.union([Reference, CodeableConcept]),
          /** What profile the resource needs to conform to */
          profile: primitives.R4.canonical,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this activity definition is defined */
          purpose: primitives.R4.markdown,
          /** How much is administered/consumed/supplied */
          quantity: Quantity,
          /** Additional documentation, citations, etc. */
          relatedArtifact: t.array(RelatedArtifact),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** What specimens are required to perform this action */
          specimenRequirement: t.array(Reference),
          /** Type of individual the activity definition is intended for */
          subject: t.union([CodeableConcept, Reference]),
          /** Subordinate title of the activity definition */
          subtitle: primitives.R4.string,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** When activity is to occur */
          timing: t.union([
            Timing,
            primitives.R4.dateTime,
            Age,
            Period,
            Range,
            Duration
          ]),
          /** Name for this activity definition (human friendly) */
          title: primitives.R4.string,
          /** E.g. Education, Treatment, Assessment, etc. */
          topic: t.array(CodeableConcept),
          /** Transform to apply the template */
          transform: primitives.R4.canonical,
          /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** Describes the clinical usage of the activity definition */
          usage: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the activity definition */
          version: primitives.R4.string
        })
      ],
      "ActivityDefinition"
    )
);
