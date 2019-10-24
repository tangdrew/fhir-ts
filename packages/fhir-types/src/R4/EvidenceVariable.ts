/**
 * EvidenceVariable Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { DataRequirement } from "./DataRequirement";
import { Duration } from "./Duration";
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
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

/**
 * A population, intervention, or exposure definition
 */
export interface EvidenceVariable {
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
  /** Canonical identifier for this evidence variable, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the evidence variable */
  identifier?: Identifier[];
  /** Business version of the evidence variable */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this evidence variable (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this evidence variable (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Title for use in informal contexts */
  shortTitle?: string;
  /** Extension of shortTitle element */
  _shortTitle?: Element;
  /** Subordinate title of the EvidenceVariable */
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
  /** Natural language description of the evidence variable */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Used for footnotes or explanatory notes */
  note?: Annotation[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for evidence variable (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the evidence variable was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the evidence variable was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
}
/**
 * A population, intervention, or exposure definition
 */
export const EvidenceVariable: t.Type<EvidenceVariable> = t.recursion<
  EvidenceVariable
>("EvidenceVariable", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code
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
      /** Canonical identifier for this evidence variable, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the evidence variable */
      identifier: t.array(Identifier),
      /** Business version of the evidence variable */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this evidence variable (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this evidence variable (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Title for use in informal contexts */
      shortTitle: primitives.R4.string,
      /** Extension of shortTitle element */
      _shortTitle: Element,
      /** Subordinate title of the EvidenceVariable */
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
      /** Natural language description of the evidence variable */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** Used for footnotes or explanatory notes */
      note: t.array(Annotation),
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for evidence variable (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the evidence variable was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the evidence variable was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the evidence variable is expected to be used */
      effectivePeriod: Period,
      /** The category of the EvidenceVariable, such as Education, Treatment, Assessment, etc. */
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
      /** dichotomous | continuous | descriptive */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element
    })
  ])
);

/**
 * What defines the members of the evidence element
 */
export interface EvidenceVariableCharacteristic {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Natural language description of the characteristic */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** What code or expression defines members? */
  definitionReference: Reference;
  /** What code or expression defines members? */
  definitionCanonical: primitives.R4.canonical;
  /** Extension of definitionCanonical element */
  _definitionCanonical?: Element;
  /** What code or expression defines members? */
  definitionCodeableConcept: CodeableConcept;
  /** What code or expression defines members? */
  definitionExpression: Expression;
  /** What code or expression defines members? */
  definitionDataRequirement: DataRequirement;
  /** What code or expression defines members? */
  definitionTriggerDefinition: TriggerDefinition;
  /** What code/value pairs define members? */
  usageContext?: UsageContext[];
  /** Whether the characteristic includes or excludes members */
  exclude?: boolean;
  /** Extension of exclude element */
  _exclude?: Element;
  /** What time period do participants cover */
  participanteffectiveDateTime?: primitives.R4.dateTime;
  /** Extension of participanteffectiveDateTime element */
  _participanteffectiveDateTime?: Element;
  /** What time period do participants cover */
  participanteffectivePeriod?: Period;
  /** What time period do participants cover */
  participanteffectiveDuration?: Duration;
  /** What time period do participants cover */
  participanteffectiveTiming?: Timing;
  /** Observation time from study start */
  timeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  groupMeasure?: primitives.R4.code;
  /** Extension of groupMeasure element */
  _groupMeasure?: Element;
}
/**
 * What defines the members of the evidence element
 */
export const EvidenceVariableCharacteristic: t.Type<
  EvidenceVariableCharacteristic
> = t.recursion<EvidenceVariableCharacteristic>(
  "EvidenceVariableCharacteristic",
  () =>
    t.intersection([
      t.type({
        /** What code or expression defines members? */
        definitionReference: Reference,
        /** What code or expression defines members? */
        definitionCanonical: primitives.R4.canonical,
        /** What code or expression defines members? */
        definitionCodeableConcept: CodeableConcept,
        /** What code or expression defines members? */
        definitionExpression: Expression,
        /** What code or expression defines members? */
        definitionDataRequirement: DataRequirement,
        /** What code or expression defines members? */
        definitionTriggerDefinition: TriggerDefinition
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
        /** Natural language description of the characteristic */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Extension of definitionCanonical element */
        _definitionCanonical: Element,
        /** What code/value pairs define members? */
        usageContext: t.array(UsageContext),
        /** Whether the characteristic includes or excludes members */
        exclude: primitives.R4.boolean,
        /** Extension of exclude element */
        _exclude: Element,
        /** What time period do participants cover */
        participanteffectiveDateTime: primitives.R4.dateTime,
        /** Extension of participanteffectiveDateTime element */
        _participanteffectiveDateTime: Element,
        /** What time period do participants cover */
        participanteffectivePeriod: Period,
        /** What time period do participants cover */
        participanteffectiveDuration: Duration,
        /** What time period do participants cover */
        participanteffectiveTiming: Timing,
        /** Observation time from study start */
        timeFromStart: Duration,
        /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
        groupMeasure: primitives.R4.code,
        /** Extension of groupMeasure element */
        _groupMeasure: Element
      })
    ])
);
