/**
 * CarePlan Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Healthcare plan for patient or group
 */
export interface CarePlan {
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
  /** External Ids for this plan */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** Fulfills CarePlan */
  basedOn?: Reference[];
  /** CarePlan replaced by this CarePlan */
  replaces?: Reference[];
  /** Part of referenced CarePlan */
  partOf?: Reference[];
  /** draft | active | suspended | completed | entered-in-error | cancelled | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** proposal | plan | order | option */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** Type of plan */
  category?: CodeableConcept[];
  /** Human-friendly name for the care plan */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Summary of nature of plan */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Who the care plan is for */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Time period plan covers */
  period?: Period;
  /** Date record was first recorded */
  created?: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Who is the designated responsible party */
  author?: Reference;
  /** Who provided the content of the care plan */
  contributor?: Reference[];
  /** Who's involved in plan? */
  careTeam?: Reference[];
  /** Health issues this plan addresses */
  addresses?: Reference[];
  /** Information considered as part of plan */
  supportingInfo?: Reference[];
  /** Desired outcome of plan */
  goal?: Reference[];
  /** Comments about the plan */
  note?: Annotation[];
}
/**
 * Healthcare plan for patient or group
 */
export const CarePlan: t.Type<CarePlan> = t.recursion<CarePlan>(
  "CarePlan",
  () =>
    t.intersection([
      t.type({
        /** draft | active | suspended | completed | entered-in-error | cancelled | unknown */
        status: primitives.R4.code,
        /** proposal | plan | order | option */
        intent: primitives.R4.code,
        /** Who the care plan is for */
        subject: Reference
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
        /** External Ids for this plan */
        identifier: t.array(Identifier),
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Extension of instantiatesCanonical element */
        _instantiatesCanonical: t.array(Element),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Extension of instantiatesUri element */
        _instantiatesUri: t.array(Element),
        /** Fulfills CarePlan */
        basedOn: t.array(Reference),
        /** CarePlan replaced by this CarePlan */
        replaces: t.array(Reference),
        /** Part of referenced CarePlan */
        partOf: t.array(Reference),
        /** Extension of status element */
        _status: Element,
        /** Extension of intent element */
        _intent: Element,
        /** Type of plan */
        category: t.array(CodeableConcept),
        /** Human-friendly name for the care plan */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Summary of nature of plan */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Encounter created as part of */
        encounter: Reference,
        /** Time period plan covers */
        period: Period,
        /** Date record was first recorded */
        created: primitives.R4.dateTime,
        /** Extension of created element */
        _created: Element,
        /** Who is the designated responsible party */
        author: Reference,
        /** Who provided the content of the care plan */
        contributor: t.array(Reference),
        /** Who's involved in plan? */
        careTeam: t.array(Reference),
        /** Health issues this plan addresses */
        addresses: t.array(Reference),
        /** Information considered as part of plan */
        supportingInfo: t.array(Reference),
        /** Desired outcome of plan */
        goal: t.array(Reference),
        /** Comments about the plan */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Action to occur as part of plan
 */
export interface CarePlanActivity {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Results of the activity */
  outcomeCodeableConcept?: CodeableConcept[];
  /** Appointment, Encounter, Procedure, etc. */
  outcomeReference?: Reference[];
  /** Comments about the activity status/progress */
  progress?: Annotation[];
  /** Activity details defined in specific resource */
  reference?: Reference;
}
/**
 * Action to occur as part of plan
 */
export const CarePlanActivity: t.Type<CarePlanActivity> = t.recursion<
  CarePlanActivity
>("CarePlanActivity", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Results of the activity */
      outcomeCodeableConcept: t.array(CodeableConcept),
      /** Appointment, Encounter, Procedure, etc. */
      outcomeReference: t.array(Reference),
      /** Comments about the activity status/progress */
      progress: t.array(Annotation),
      /** Activity details defined in specific resource */
      reference: Reference
    })
  ])
);

/**
 * In-line definition of activity
 */
export interface CarePlanActivityDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Kind of resource */
  kind?: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** Detail type of activity */
  code?: CodeableConcept;
  /** Why activity should be done or why activity was prohibited */
  reasonCode?: CodeableConcept[];
  /** Why activity is needed */
  reasonReference?: Reference[];
  /** Goals this activity relates to */
  goal?: Reference[];
  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** If true, activity is prohibiting action */
  doNotPerform?: boolean;
  /** Extension of doNotPerform element */
  _doNotPerform?: Element;
  /** When activity is to occur */
  scheduledTiming?: Timing;
  /** When activity is to occur */
  scheduledPeriod?: Period;
  /** When activity is to occur */
  scheduledString?: string;
  /** Extension of scheduledString element */
  _scheduledString?: Element;
  /** Where it should happen */
  location?: Reference;
  /** Who will be responsible? */
  performer?: Reference[];
  /** What is to be administered/supplied */
  productCodeableConcept?: CodeableConcept;
  /** What is to be administered/supplied */
  productReference?: Reference;
  /** How to consume/day? */
  dailyAmount?: Quantity;
  /** How much to administer/supply/consume */
  quantity?: Quantity;
  /** Extra info describing activity to perform */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * In-line definition of activity
 */
export const CarePlanActivityDetail: t.Type<
  CarePlanActivityDetail
> = t.recursion<CarePlanActivityDetail>("CarePlanActivityDetail", () =>
  t.intersection([
    t.type({
      /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
      status: primitives.R4.code
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
      /** Kind of resource */
      kind: primitives.R4.code,
      /** Extension of kind element */
      _kind: Element,
      /** Instantiates FHIR protocol or definition */
      instantiatesCanonical: t.array(primitives.R4.canonical),
      /** Extension of instantiatesCanonical element */
      _instantiatesCanonical: t.array(Element),
      /** Instantiates external protocol or definition */
      instantiatesUri: t.array(primitives.R4.uri),
      /** Extension of instantiatesUri element */
      _instantiatesUri: t.array(Element),
      /** Detail type of activity */
      code: CodeableConcept,
      /** Why activity should be done or why activity was prohibited */
      reasonCode: t.array(CodeableConcept),
      /** Why activity is needed */
      reasonReference: t.array(Reference),
      /** Goals this activity relates to */
      goal: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Reason for current status */
      statusReason: CodeableConcept,
      /** If true, activity is prohibiting action */
      doNotPerform: primitives.R4.boolean,
      /** Extension of doNotPerform element */
      _doNotPerform: Element,
      /** When activity is to occur */
      scheduledTiming: Timing,
      /** When activity is to occur */
      scheduledPeriod: Period,
      /** When activity is to occur */
      scheduledString: primitives.R4.string,
      /** Extension of scheduledString element */
      _scheduledString: Element,
      /** Where it should happen */
      location: Reference,
      /** Who will be responsible? */
      performer: t.array(Reference),
      /** What is to be administered/supplied */
      productCodeableConcept: CodeableConcept,
      /** What is to be administered/supplied */
      productReference: Reference,
      /** How to consume/day? */
      dailyAmount: Quantity,
      /** How much to administer/supply/consume */
      quantity: Quantity,
      /** Extra info describing activity to perform */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);
