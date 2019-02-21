/**
 * Evidence Module
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
 * A research context or question
 */
export interface Evidence {
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
  /** Canonical identifier for this evidence, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the evidence */
  identifier?: Identifier[];
  /** Business version of the evidence */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this evidence (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this evidence (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the Evidence */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the evidence */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for evidence (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the evidence was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the evidence was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the evidence is expected to be used */
  effectivePeriod?: Period;
  /** The category of the Evidence, such as Education, Treatment, Assessment, etc. */
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
  /** What population? */
  exposureBackground: Reference;
  /** What exposure? */
  exposureVariant?: Reference[];
  /** What outcome? */
  outcome?: Reference[];
}

export interface EvidenceOutputType {
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
  /** Canonical identifier for this evidence, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the evidence */
  identifier?: IdentifierOutputType[];
  /** Business version of the evidence */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this evidence (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this evidence (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Title for use in informal contexts */
  shortTitle?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the Evidence */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the evidence */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Used for footnotes or explanatory notes */
  note?: AnnotationOutputType[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for evidence (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the evidence was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the evidence was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the evidence is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** The category of the Evidence, such as Education, Treatment, Assessment, etc. */
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
  /** What population? */
  exposureBackground: ReferenceOutputType;
  /** What exposure? */
  exposureVariant?: ReferenceOutputType[];
  /** What outcome? */
  outcome?: ReferenceOutputType[];
}

export const Evidence: t.RecursiveType<
  t.Type<Evidence, EvidenceOutputType>,
  Evidence,
  EvidenceOutputType
> = t.recursion<Evidence, EvidenceOutputType>("Evidence", () =>
  t.intersection(
    [
      t.type({
        /** What population? */
        exposureBackground: Reference,
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** When the evidence was approved by publisher */
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
        /** Natural language description of the evidence */
        description: primitives.R4.markdown,
        /** Who edited the content */
        editor: t.array(ContactDetail),
        /** When the evidence is expected to be used */
        effectivePeriod: Period,
        /** Who endorsed the content */
        endorser: t.array(ContactDetail),
        /** What exposure? */
        exposureVariant: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the evidence */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for evidence (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** When the evidence was last reviewed */
        lastReviewDate: primitives.R4.date,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this evidence (computer friendly) */
        name: primitives.R4.string,
        /** Used for footnotes or explanatory notes */
        note: t.array(Annotation),
        /** What outcome? */
        outcome: t.array(Reference),
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Additional documentation, citations, etc. */
        relatedArtifact: t.array(RelatedArtifact),
        /** Who reviewed the content */
        reviewer: t.array(ContactDetail),
        /** Title for use in informal contexts */
        shortTitle: primitives.R4.string,
        /** Subordinate title of the Evidence */
        subtitle: primitives.R4.string,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this evidence (human friendly) */
        title: primitives.R4.string,
        /** The category of the Evidence, such as Education, Treatment, Assessment, etc. */
        topic: t.array(CodeableConcept),
        /** Canonical identifier for this evidence, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the evidence */
        version: primitives.R4.string
      })
    ],
    "Evidence"
  )
);
