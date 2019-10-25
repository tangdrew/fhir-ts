/**
 * Library Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { DataRequirement } from "./DataRequirement";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { ParameterDefinition } from "./ParameterDefinition";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Represents a library of quality improvement components
 */
export interface Library {
  /** The type of resource */
  resourceType?: "Library";
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
  /** Canonical identifier for this library, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the library */
  identifier?: Identifier[];
  /** Business version of the library */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this library (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this library (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Subordinate title of the library */
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
  /** logic-library | model-definition | asset-collection | module-definition */
  type: CodeableConcept;
  /** Type of individual the library content is focused on */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the library content is focused on */
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
  /** Natural language description of the library */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for library (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this library is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Describes the clinical usage of the library */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the library was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the library was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
  /** When the library is expected to be used */
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
  /** Parameters defined by the library */
  parameter?: ParameterDefinition[];
  /** What data is referenced by this library */
  dataRequirement?: DataRequirement[];
  /** Contents of the library, either embedded or referenced */
  content?: Attachment[];
}
/**
 * Represents a library of quality improvement components
 */
export const Library: t.Type<Library> = t.recursion<Library>("Library", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** logic-library | model-definition | asset-collection | module-definition */
      type: CodeableConcept
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Library"),
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
      /** Canonical identifier for this library, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the library */
      identifier: t.array(Identifier),
      /** Business version of the library */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this library (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this library (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Subordinate title of the library */
      subtitle: primitives.R4.string,
      /** Extension of subtitle element */
      _subtitle: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Type of individual the library content is focused on */
      subjectCodeableConcept: CodeableConcept,
      /** Type of individual the library content is focused on */
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
      /** Natural language description of the library */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for library (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this library is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Describes the clinical usage of the library */
      usage: primitives.R4.string,
      /** Extension of usage element */
      _usage: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the library was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the library was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the library is expected to be used */
      effectivePeriod: Period,
      /** E.g. Education, Treatment, Assessment, etc. */
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
      /** Parameters defined by the library */
      parameter: t.array(ParameterDefinition),
      /** What data is referenced by this library */
      dataRequirement: t.array(DataRequirement),
      /** Contents of the library, either embedded or referenced */
      content: t.array(Attachment)
    })
  ])
);
