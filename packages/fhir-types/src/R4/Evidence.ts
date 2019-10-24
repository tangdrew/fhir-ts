/**
 * Evidence Module
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
 * A research context or question
 */
export interface Evidence {
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
  /** Canonical identifier for this evidence, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the evidence */
  identifier?: Identifier[];
  /** Business version of the evidence */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this evidence (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this evidence (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Title for use in informal contexts */
  shortTitle?: string;
  /** Extension of shortTitle element */
  _shortTitle?: Element;
  /** Subordinate title of the Evidence */
  subtitle?: string;
  /** Extension of subtitle element */
  _subtitle?: Element;
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
  /** Natural language description of the evidence */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for evidence (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the evidence was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the evidence was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
/**
 * A research context or question
 */
export const Evidence: t.Type<Evidence> = t.recursion<Evidence>(
  "Evidence",
  () =>
    t.intersection([
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** What population? */
        exposureBackground: Reference
      }),
      t.partial({
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
        /** Canonical identifier for this evidence, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Additional identifier for the evidence */
        identifier: t.array(Identifier),
        /** Business version of the evidence */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Name for this evidence (computer friendly) */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Name for this evidence (human friendly) */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Title for use in informal contexts */
        shortTitle: primitives.R4.string,
        /** Extension of shortTitle element */
        _shortTitle: Element,
        /** Subordinate title of the Evidence */
        subtitle: primitives.R4.string,
        /** Extension of subtitle element */
        _subtitle: Element,
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
        /** Natural language description of the evidence */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** Used for footnotes or explanatory notes */
        note: t.array(Annotation),
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for evidence (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element,
        /** When the evidence was approved by publisher */
        approvalDate: primitives.R4.date,
        /** Extension of approvalDate element */
        _approvalDate: Element,
        /** When the evidence was last reviewed */
        lastReviewDate: primitives.R4.date,
        /** Extension of lastReviewDate element */
        _lastReviewDate: Element,
        /** When the evidence is expected to be used */
        effectivePeriod: Period,
        /** The category of the Evidence, such as Education, Treatment, Assessment, etc. */
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
        /** What exposure? */
        exposureVariant: t.array(Reference),
        /** What outcome? */
        outcome: t.array(Reference)
      })
    ])
);
