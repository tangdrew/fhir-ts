/**
 * ResearchElementDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
import { UsageContext } from "./UsageContext";

/**
 * A population, intervention, or exposure definition
 */
export interface ResearchElementDefinition {
  /** The type of resource */
  resourceType?: "ResearchElementDefinition";
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
  /** Canonical identifier for this research element definition, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the research element definition */
  identifier?: Identifier[];
  /** Business version of the research element definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this research element definition (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this research element definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Title for use in informal contexts */
  shortTitle?: string;
  /** Extension of shortTitle element */
  _shortTitle?: Element;
  /** Subordinate title of the ResearchElementDefinition */
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
  /** Natural language description of the research element definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Used for footnotes or explanatory notes */
  comment?: string[];
  /** Extension of comment element */
  _comment?: Element[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for research element definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this research element definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Describes the clinical usage of the ResearchElementDefinition */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the research element definition was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the research element definition was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
  library?: primitives.R4.canonical[];
  /** Extension of library element */
  _library?: Element[];
  /** population | exposure | outcome */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** dichotomous | continuous | descriptive */
  variableType?: primitives.R4.code;
  /** Extension of variableType element */
  _variableType?: Element;
}
/**
 * A population, intervention, or exposure definition
 */
export const ResearchElementDefinition: t.Type<
  ResearchElementDefinition
> = t.recursion<ResearchElementDefinition>("ResearchElementDefinition", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** population | exposure | outcome */
      type: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ResearchElementDefinition"),
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
      /** Canonical identifier for this research element definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the research element definition */
      identifier: t.array(Identifier),
      /** Business version of the research element definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this research element definition (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this research element definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Title for use in informal contexts */
      shortTitle: primitives.R4.string,
      /** Extension of shortTitle element */
      _shortTitle: Element,
      /** Subordinate title of the ResearchElementDefinition */
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
      /** Natural language description of the research element definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** Used for footnotes or explanatory notes */
      comment: t.array(primitives.R4.string),
      /** Extension of comment element */
      _comment: t.array(Element),
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for research element definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this research element definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Describes the clinical usage of the ResearchElementDefinition */
      usage: primitives.R4.string,
      /** Extension of usage element */
      _usage: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the research element definition was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the research element definition was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the research element definition is expected to be used */
      effectivePeriod: Period,
      /** The category of the ResearchElementDefinition, such as Education, Treatment, Assessment, etc. */
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
      /** Logic used by the ResearchElementDefinition */
      library: t.array(primitives.R4.canonical),
      /** Extension of library element */
      _library: t.array(Element),
      /** Extension of type element */
      _type: Element,
      /** dichotomous | continuous | descriptive */
      variableType: primitives.R4.code,
      /** Extension of variableType element */
      _variableType: Element
    })
  ])
);

/**
 * What defines the members of the research element
 */
export interface ResearchElementDefinitionCharacteristic {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What code or expression defines members? */
  definitionCodeableConcept: CodeableConcept;
  /** What code or expression defines members? */
  definitionCanonical: primitives.R4.canonical;
  /** Extension of definitionCanonical element */
  _definitionCanonical?: Element;
  /** What code or expression defines members? */
  definitionExpression: Expression;
  /** What code or expression defines members? */
  definitionDataRequirement: DataRequirement;
  /** What code/value pairs define members? */
  usageContext?: UsageContext[];
  /** Whether the characteristic includes or excludes members */
  exclude?: boolean;
  /** Extension of exclude element */
  _exclude?: Element;
  /** What unit is the outcome described in? */
  unitOfMeasure?: CodeableConcept;
  /** What time period does the study cover */
  studyEffectiveDescription?: string;
  /** Extension of studyEffectiveDescription element */
  _studyEffectiveDescription?: Element;
  /** What time period does the study cover */
  studyeffectiveDateTime?: primitives.R4.dateTime;
  /** Extension of studyeffectiveDateTime element */
  _studyeffectiveDateTime?: Element;
  /** What time period does the study cover */
  studyeffectivePeriod?: Period;
  /** What time period does the study cover */
  studyeffectiveDuration?: Duration;
  /** What time period does the study cover */
  studyeffectiveTiming?: Timing;
  /** Observation time from study start */
  studyEffectiveTimeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  studyEffectiveGroupMeasure?: primitives.R4.code;
  /** Extension of studyEffectiveGroupMeasure element */
  _studyEffectiveGroupMeasure?: Element;
  /** What time period do participants cover */
  participantEffectiveDescription?: string;
  /** Extension of participantEffectiveDescription element */
  _participantEffectiveDescription?: Element;
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
  participantEffectiveTimeFromStart?: Duration;
  /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
  participantEffectiveGroupMeasure?: primitives.R4.code;
  /** Extension of participantEffectiveGroupMeasure element */
  _participantEffectiveGroupMeasure?: Element;
}
/**
 * What defines the members of the research element
 */
export const ResearchElementDefinitionCharacteristic: t.Type<
  ResearchElementDefinitionCharacteristic
> = t.recursion<ResearchElementDefinitionCharacteristic>(
  "ResearchElementDefinitionCharacteristic",
  () =>
    t.intersection([
      t.type({
        /** What code or expression defines members? */
        definitionCodeableConcept: CodeableConcept,
        /** What code or expression defines members? */
        definitionCanonical: primitives.R4.canonical,
        /** What code or expression defines members? */
        definitionExpression: Expression,
        /** What code or expression defines members? */
        definitionDataRequirement: DataRequirement
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
        /** Extension of definitionCanonical element */
        _definitionCanonical: Element,
        /** What code/value pairs define members? */
        usageContext: t.array(UsageContext),
        /** Whether the characteristic includes or excludes members */
        exclude: primitives.R4.boolean,
        /** Extension of exclude element */
        _exclude: Element,
        /** What unit is the outcome described in? */
        unitOfMeasure: CodeableConcept,
        /** What time period does the study cover */
        studyEffectiveDescription: primitives.R4.string,
        /** Extension of studyEffectiveDescription element */
        _studyEffectiveDescription: Element,
        /** What time period does the study cover */
        studyeffectiveDateTime: primitives.R4.dateTime,
        /** Extension of studyeffectiveDateTime element */
        _studyeffectiveDateTime: Element,
        /** What time period does the study cover */
        studyeffectivePeriod: Period,
        /** What time period does the study cover */
        studyeffectiveDuration: Duration,
        /** What time period does the study cover */
        studyeffectiveTiming: Timing,
        /** Observation time from study start */
        studyEffectiveTimeFromStart: Duration,
        /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
        studyEffectiveGroupMeasure: primitives.R4.code,
        /** Extension of studyEffectiveGroupMeasure element */
        _studyEffectiveGroupMeasure: Element,
        /** What time period do participants cover */
        participantEffectiveDescription: primitives.R4.string,
        /** Extension of participantEffectiveDescription element */
        _participantEffectiveDescription: Element,
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
        participantEffectiveTimeFromStart: Duration,
        /** mean | median | mean-of-mean | mean-of-median | median-of-mean | median-of-median */
        participantEffectiveGroupMeasure: primitives.R4.code,
        /** Extension of participantEffectiveGroupMeasure element */
        _participantEffectiveGroupMeasure: Element
      })
    ])
);
