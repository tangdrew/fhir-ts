/**
 * ResearchDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
 * A research context or question
 */
export interface ResearchDefinition {
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
  /** Canonical identifier for this research definition, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the research definition */
  identifier?: Identifier[];
  /** Business version of the research definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this research definition (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this research definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the ResearchDefinition */
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
  /** Natural language description of the research definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  comment?: t.TypeOf<primitives.R4.StringType>[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for research definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this research definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the ResearchDefinition */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the research definition was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the research definition was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the research definition is expected to be used */
  effectivePeriod?: Period;
  /** The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc. */
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
  /** Logic used by the ResearchDefinition */
  library?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** What population? */
  population: Reference;
  /** What exposure? */
  exposure?: Reference;
  /** What alternative exposure state? */
  exposureAlternative?: Reference;
  /** What outcome? */
  outcome?: Reference;
}

export interface ResearchDefinitionOutputType {
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
  /** Canonical identifier for this research definition, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the research definition */
  identifier?: IdentifierOutputType[];
  /** Business version of the research definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this research definition (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this research definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the ResearchDefinition */
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
  /** Natural language description of the research definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  comment?: t.OutputOf<primitives.R4.StringType>[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for research definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this research definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the ResearchDefinition */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the research definition was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the research definition was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the research definition is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc. */
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
  /** Logic used by the ResearchDefinition */
  library?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** What population? */
  population: ReferenceOutputType;
  /** What exposure? */
  exposure?: ReferenceOutputType;
  /** What alternative exposure state? */
  exposureAlternative?: ReferenceOutputType;
  /** What outcome? */
  outcome?: ReferenceOutputType;
}

export const ResearchDefinition: t.RecursiveType<
  t.Type<ResearchDefinition, ResearchDefinitionOutputType>,
  ResearchDefinition,
  ResearchDefinitionOutputType
> = t.recursion<ResearchDefinition, ResearchDefinitionOutputType>(
  "ResearchDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** What population? */
          population: Reference,
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** When the research definition was approved by publisher */
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
          /** Natural language description of the research definition */
          description: primitives.R4.markdown,
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** When the research definition is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** What exposure? */
          exposure: Reference,
          /** What alternative exposure state? */
          exposureAlternative: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the research definition */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for research definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the research definition was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Logic used by the ResearchDefinition */
          library: t.array(primitives.R4.canonical),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this research definition (computer friendly) */
          name: primitives.R4.string,
          /** What outcome? */
          outcome: Reference,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this research definition is defined */
          purpose: primitives.R4.markdown,
          /** Additional documentation, citations, etc. */
          relatedArtifact: t.array(RelatedArtifact),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** Title for use in informal contexts */
          shortTitle: primitives.R4.string,
          /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
          subject: t.union([CodeableConcept, Reference]),
          /** Subordinate title of the ResearchDefinition */
          subtitle: primitives.R4.string,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this research definition (human friendly) */
          title: primitives.R4.string,
          /** The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc. */
          topic: t.array(CodeableConcept),
          /** Canonical identifier for this research definition, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** Describes the clinical usage of the ResearchDefinition */
          usage: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the research definition */
          version: primitives.R4.string
        })
      ],
      "ResearchDefinition"
    )
);
