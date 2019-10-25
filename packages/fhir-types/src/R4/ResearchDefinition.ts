/**
 * ResearchDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
 * A research context or question
 */
export interface ResearchDefinition {
  /** The type of resource */
  resourceType?: "ResearchDefinition";
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
  /** Canonical identifier for this research definition, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the research definition */
  identifier?: Identifier[];
  /** Business version of the research definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this research definition (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this research definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Title for use in informal contexts */
  shortTitle?: string;
  /** Extension of shortTitle element */
  _shortTitle?: Element;
  /** Subordinate title of the ResearchDefinition */
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
  /** Natural language description of the research definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Used for footnotes or explanatory notes */
  comment?: string[];
  /** Extension of comment element */
  _comment?: Element[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for research definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this research definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Describes the clinical usage of the ResearchDefinition */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the research definition was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the research definition was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
  library?: primitives.R4.canonical[];
  /** Extension of library element */
  _library?: Element[];
  /** What population? */
  population: Reference;
  /** What exposure? */
  exposure?: Reference;
  /** What alternative exposure state? */
  exposureAlternative?: Reference;
  /** What outcome? */
  outcome?: Reference;
}
/**
 * A research context or question
 */
export const ResearchDefinition: t.Type<ResearchDefinition> = t.recursion<
  ResearchDefinition
>("ResearchDefinition", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** What population? */
      population: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ResearchDefinition"),
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
      /** Canonical identifier for this research definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the research definition */
      identifier: t.array(Identifier),
      /** Business version of the research definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this research definition (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this research definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Title for use in informal contexts */
      shortTitle: primitives.R4.string,
      /** Extension of shortTitle element */
      _shortTitle: Element,
      /** Subordinate title of the ResearchDefinition */
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
      /** Natural language description of the research definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** Used for footnotes or explanatory notes */
      comment: t.array(primitives.R4.string),
      /** Extension of comment element */
      _comment: t.array(Element),
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for research definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this research definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Describes the clinical usage of the ResearchDefinition */
      usage: primitives.R4.string,
      /** Extension of usage element */
      _usage: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the research definition was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the research definition was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the research definition is expected to be used */
      effectivePeriod: Period,
      /** The category of the ResearchDefinition, such as Education, Treatment, Assessment, etc. */
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
      /** Logic used by the ResearchDefinition */
      library: t.array(primitives.R4.canonical),
      /** Extension of library element */
      _library: t.array(Element),
      /** What exposure? */
      exposure: Reference,
      /** What alternative exposure state? */
      exposureAlternative: Reference,
      /** What outcome? */
      outcome: Reference
    })
  ])
);
