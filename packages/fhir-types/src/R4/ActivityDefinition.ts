/**
 * ActivityDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age } from "./Age";
import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Expression } from "./Expression";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";
import { Timing } from "./Timing";
import { UsageContext } from "./UsageContext";

/**
 * The definition of a specific activity to be taken, independent of any particular patient or context
 */
export interface ActivityDefinition {
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
  /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the activity definition */
  identifier?: Identifier[];
  /** Business version of the activity definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this activity definition (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this activity definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Subordinate title of the activity definition */
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
  /** Type of individual the activity definition is intended for */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the activity definition is intended for */
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
  /** Natural language description of the activity definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for activity definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this activity definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Describes the clinical usage of the activity definition */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the activity definition was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the activity definition was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
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
  library?: primitives.R4.canonical[];
  /** Extension of library element */
  _library?: Element[];
  /** Kind of resource */
  kind?: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
  /** What profile the resource needs to conform to */
  profile?: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
  /** Detail type of activity */
  code?: CodeableConcept;
  /** proposal | plan | order */
  intent?: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** True if the activity should not be performed */
  doNotPerform?: boolean;
  /** Extension of doNotPerform element */
  _doNotPerform?: Element;
  /** When activity is to occur */
  timingTiming?: Timing;
  /** When activity is to occur */
  timingDateTime?: primitives.R4.dateTime;
  /** Extension of timingDateTime element */
  _timingDateTime?: Element;
  /** When activity is to occur */
  timingAge?: Age;
  /** When activity is to occur */
  timingPeriod?: Period;
  /** When activity is to occur */
  timingRange?: Range;
  /** When activity is to occur */
  timingDuration?: Duration;
  /** Where it should happen */
  location?: Reference;
  /** What's administered/supplied */
  productReference?: Reference;
  /** What's administered/supplied */
  productCodeableConcept?: CodeableConcept;
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
  transform?: primitives.R4.canonical;
  /** Extension of transform element */
  _transform?: Element;
}
/**
 * The definition of a specific activity to be taken, independent of any particular patient or context
 */
export const ActivityDefinition: t.Type<ActivityDefinition> = t.recursion<
  ActivityDefinition
>("ActivityDefinition", () =>
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
      /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the activity definition */
      identifier: t.array(Identifier),
      /** Business version of the activity definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this activity definition (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this activity definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Subordinate title of the activity definition */
      subtitle: primitives.R4.string,
      /** Extension of subtitle element */
      _subtitle: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Type of individual the activity definition is intended for */
      subjectCodeableConcept: CodeableConcept,
      /** Type of individual the activity definition is intended for */
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
      /** Natural language description of the activity definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for activity definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this activity definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Describes the clinical usage of the activity definition */
      usage: primitives.R4.string,
      /** Extension of usage element */
      _usage: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the activity definition was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the activity definition was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the activity definition is expected to be used */
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
      /** Logic used by the activity definition */
      library: t.array(primitives.R4.canonical),
      /** Extension of library element */
      _library: t.array(Element),
      /** Kind of resource */
      kind: primitives.R4.code,
      /** Extension of kind element */
      _kind: Element,
      /** What profile the resource needs to conform to */
      profile: primitives.R4.canonical,
      /** Extension of profile element */
      _profile: Element,
      /** Detail type of activity */
      code: CodeableConcept,
      /** proposal | plan | order */
      intent: primitives.R4.code,
      /** Extension of intent element */
      _intent: Element,
      /** routine | urgent | asap | stat */
      priority: primitives.R4.code,
      /** Extension of priority element */
      _priority: Element,
      /** True if the activity should not be performed */
      doNotPerform: primitives.R4.boolean,
      /** Extension of doNotPerform element */
      _doNotPerform: Element,
      /** When activity is to occur */
      timingTiming: Timing,
      /** When activity is to occur */
      timingDateTime: primitives.R4.dateTime,
      /** Extension of timingDateTime element */
      _timingDateTime: Element,
      /** When activity is to occur */
      timingAge: Age,
      /** When activity is to occur */
      timingPeriod: Period,
      /** When activity is to occur */
      timingRange: Range,
      /** When activity is to occur */
      timingDuration: Duration,
      /** Where it should happen */
      location: Reference,
      /** What's administered/supplied */
      productReference: Reference,
      /** What's administered/supplied */
      productCodeableConcept: CodeableConcept,
      /** How much is administered/consumed/supplied */
      quantity: Quantity,
      /** Detailed dosage instructions */
      dosage: t.array(Dosage),
      /** What part of body to perform on */
      bodySite: t.array(CodeableConcept),
      /** What specimens are required to perform this action */
      specimenRequirement: t.array(Reference),
      /** What observations are required to perform this action */
      observationRequirement: t.array(Reference),
      /** What observations must be produced by this action */
      observationResultRequirement: t.array(Reference),
      /** Transform to apply the template */
      transform: primitives.R4.canonical,
      /** Extension of transform element */
      _transform: Element
    })
  ])
);

/**
 * Who should participate in the action
 */
export interface ActivityDefinitionParticipant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** patient | practitioner | related-person | device */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** E.g. Nurse, Surgeon, Parent, etc. */
  role?: CodeableConcept;
}
/**
 * Who should participate in the action
 */
export const ActivityDefinitionParticipant: t.Type<
  ActivityDefinitionParticipant
> = t.recursion<ActivityDefinitionParticipant>(
  "ActivityDefinitionParticipant",
  () =>
    t.intersection([
      t.type({
        /** patient | practitioner | related-person | device */
        type: primitives.R4.code
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
        /** Extension of type element */
        _type: Element,
        /** E.g. Nurse, Surgeon, Parent, etc. */
        role: CodeableConcept
      })
    ])
);

/**
 * Dynamic aspects of the definition
 */
export interface ActivityDefinitionDynamicValue {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The path to the element to be set dynamically */
  path: string;
  /** Extension of path element */
  _path?: Element;
  /** An expression that provides the dynamic value for the customization */
  expression: Expression;
}
/**
 * Dynamic aspects of the definition
 */
export const ActivityDefinitionDynamicValue: t.Type<
  ActivityDefinitionDynamicValue
> = t.recursion<ActivityDefinitionDynamicValue>(
  "ActivityDefinitionDynamicValue",
  () =>
    t.intersection([
      t.type({
        /** The path to the element to be set dynamically */
        path: primitives.R4.string,
        /** An expression that provides the dynamic value for the customization */
        expression: Expression
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
        /** Extension of path element */
        _path: Element
      })
    ])
);
