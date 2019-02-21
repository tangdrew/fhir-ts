/**
 * CarePlan Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * In-line definition of activity
 */
export interface CarePlanActivityDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Kind of resource */
  kind?: t.TypeOf<primitives.R4.CodeType>;
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** Detail type of activity */
  code?: CodeableConcept;
  /** Why activity should be done or why activity was prohibited */
  reasonCode?: CodeableConcept[];
  /** Why activity is needed */
  reasonReference?: Reference[];
  /** Goals this activity relates to */
  goal?: Reference[];
  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** If true, activity is prohibiting action */
  doNotPerform?: t.TypeOf<primitives.R4.BooleanType>;
  /** When activity is to occur */
  scheduled?: Timing | Period | t.TypeOf<primitives.R4.StringType>;
  /** Where it should happen */
  location?: Reference;
  /** Who will be responsible? */
  performer?: Reference[];
  /** What is to be administered/supplied */
  product?: CodeableConcept | Reference;
  /** How to consume/day? */
  dailyAmount?: Quantity;
  /** How much to administer/supply/consume */
  quantity?: Quantity;
  /** Extra info describing activity to perform */
  description?: t.TypeOf<primitives.R4.StringType>;
}

export interface CarePlanActivityDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Kind of resource */
  kind?: t.OutputOf<primitives.R4.CodeType>;
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** Detail type of activity */
  code?: CodeableConceptOutputType;
  /** Why activity should be done or why activity was prohibited */
  reasonCode?: CodeableConceptOutputType[];
  /** Why activity is needed */
  reasonReference?: ReferenceOutputType[];
  /** Goals this activity relates to */
  goal?: ReferenceOutputType[];
  /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** If true, activity is prohibiting action */
  doNotPerform?: t.OutputOf<primitives.R4.BooleanType>;
  /** When activity is to occur */
  scheduled?:
    | TimingOutputType
    | PeriodOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** Where it should happen */
  location?: ReferenceOutputType;
  /** Who will be responsible? */
  performer?: ReferenceOutputType[];
  /** What is to be administered/supplied */
  product?: CodeableConceptOutputType | ReferenceOutputType;
  /** How to consume/day? */
  dailyAmount?: QuantityOutputType;
  /** How much to administer/supply/consume */
  quantity?: QuantityOutputType;
  /** Extra info describing activity to perform */
  description?: t.OutputOf<primitives.R4.StringType>;
}

export const CarePlanActivityDetail: t.RecursiveType<
  t.Type<CarePlanActivityDetail, CarePlanActivityDetailOutputType>,
  CarePlanActivityDetail,
  CarePlanActivityDetailOutputType
> = t.recursion<CarePlanActivityDetail, CarePlanActivityDetailOutputType>(
  "CarePlanActivityDetail",
  () =>
    t.intersection(
      [
        t.type({
          /** not-started | scheduled | in-progress | on-hold | completed | cancelled | stopped | unknown | entered-in-error */
          status: primitives.R4.code
        }),
        t.partial({
          /** Detail type of activity */
          code: CodeableConcept,
          /** How to consume/day? */
          dailyAmount: Quantity,
          /** Extra info describing activity to perform */
          description: primitives.R4.string,
          /** If true, activity is prohibiting action */
          doNotPerform: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Goals this activity relates to */
          goal: t.array(Reference),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Instantiates FHIR protocol or definition */
          instantiatesCanonical: t.array(primitives.R4.canonical),
          /** Instantiates external protocol or definition */
          instantiatesUri: t.array(primitives.R4.uri),
          /** Kind of resource */
          kind: primitives.R4.code,
          /** Where it should happen */
          location: Reference,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Who will be responsible? */
          performer: t.array(Reference),
          /** What is to be administered/supplied */
          product: t.union([CodeableConcept, Reference]),
          /** How much to administer/supply/consume */
          quantity: Quantity,
          /** Why activity should be done or why activity was prohibited */
          reasonCode: t.array(CodeableConcept),
          /** Why activity is needed */
          reasonReference: t.array(Reference),
          /** When activity is to occur */
          scheduled: t.union([Timing, Period, primitives.R4.string]),
          /** Reason for current status */
          statusReason: CodeableConcept
        })
      ],
      "CarePlanActivityDetail"
    )
);

/**
 * Action to occur as part of plan
 */
export interface CarePlanActivity {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  /** In-line definition of activity */
  detail?: CarePlanActivityDetail;
}

export interface CarePlanActivityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Results of the activity */
  outcomeCodeableConcept?: CodeableConceptOutputType[];
  /** Appointment, Encounter, Procedure, etc. */
  outcomeReference?: ReferenceOutputType[];
  /** Comments about the activity status/progress */
  progress?: AnnotationOutputType[];
  /** Activity details defined in specific resource */
  reference?: ReferenceOutputType;
  /** In-line definition of activity */
  detail?: CarePlanActivityDetailOutputType;
}

export const CarePlanActivity: t.RecursiveType<
  t.Type<CarePlanActivity, CarePlanActivityOutputType>,
  CarePlanActivity,
  CarePlanActivityOutputType
> = t.recursion<CarePlanActivity, CarePlanActivityOutputType>(
  "CarePlanActivity",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** In-line definition of activity */
          detail: CarePlanActivityDetail,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
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
      ],
      "CarePlanActivity"
    )
);

/**
 * Healthcare plan for patient or group
 */
export interface CarePlan {
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
  /** External Ids for this plan */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** Fulfills CarePlan */
  basedOn?: Reference[];
  /** CarePlan replaced by this CarePlan */
  replaces?: Reference[];
  /** Part of referenced CarePlan */
  partOf?: Reference[];
  /** draft | active | suspended | completed | entered-in-error | cancelled | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** proposal | plan | order | option */
  intent: t.TypeOf<primitives.R4.CodeType>;
  /** Type of plan */
  category?: CodeableConcept[];
  /** Human-friendly name for the care plan */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Summary of nature of plan */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Who the care plan is for */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Time period plan covers */
  period?: Period;
  /** Date record was first recorded */
  created?: t.TypeOf<primitives.R4.DateTimeType>;
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
  /** Action to occur as part of plan */
  activity?: CarePlanActivity[];
  /** Comments about the plan */
  note?: Annotation[];
}

export interface CarePlanOutputType {
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
  /** External Ids for this plan */
  identifier?: IdentifierOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** Fulfills CarePlan */
  basedOn?: ReferenceOutputType[];
  /** CarePlan replaced by this CarePlan */
  replaces?: ReferenceOutputType[];
  /** Part of referenced CarePlan */
  partOf?: ReferenceOutputType[];
  /** draft | active | suspended | completed | entered-in-error | cancelled | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** proposal | plan | order | option */
  intent: t.OutputOf<primitives.R4.CodeType>;
  /** Type of plan */
  category?: CodeableConceptOutputType[];
  /** Human-friendly name for the care plan */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Summary of nature of plan */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Who the care plan is for */
  subject: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** Time period plan covers */
  period?: PeriodOutputType;
  /** Date record was first recorded */
  created?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is the designated responsible party */
  author?: ReferenceOutputType;
  /** Who provided the content of the care plan */
  contributor?: ReferenceOutputType[];
  /** Who's involved in plan? */
  careTeam?: ReferenceOutputType[];
  /** Health issues this plan addresses */
  addresses?: ReferenceOutputType[];
  /** Information considered as part of plan */
  supportingInfo?: ReferenceOutputType[];
  /** Desired outcome of plan */
  goal?: ReferenceOutputType[];
  /** Action to occur as part of plan */
  activity?: CarePlanActivityOutputType[];
  /** Comments about the plan */
  note?: AnnotationOutputType[];
}

export const CarePlan: t.RecursiveType<
  t.Type<CarePlan, CarePlanOutputType>,
  CarePlan,
  CarePlanOutputType
> = t.recursion<CarePlan, CarePlanOutputType>("CarePlan", () =>
  t.intersection(
    [
      t.type({
        /** proposal | plan | order | option */
        intent: primitives.R4.code,
        /** draft | active | suspended | completed | entered-in-error | cancelled | unknown */
        status: primitives.R4.code,
        /** Who the care plan is for */
        subject: Reference
      }),
      t.partial({
        /** Action to occur as part of plan */
        activity: t.array(CarePlanActivity),
        /** Health issues this plan addresses */
        addresses: t.array(Reference),
        /** Who is the designated responsible party */
        author: Reference,
        /** Fulfills CarePlan */
        basedOn: t.array(Reference),
        /** Who's involved in plan? */
        careTeam: t.array(Reference),
        /** Type of plan */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Who provided the content of the care plan */
        contributor: t.array(Reference),
        /** Date record was first recorded */
        created: primitives.R4.dateTime,
        /** Summary of nature of plan */
        description: primitives.R4.string,
        /** Encounter created as part of */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Desired outcome of plan */
        goal: t.array(Reference),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Ids for this plan */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments about the plan */
        note: t.array(Annotation),
        /** Part of referenced CarePlan */
        partOf: t.array(Reference),
        /** Time period plan covers */
        period: Period,
        /** CarePlan replaced by this CarePlan */
        replaces: t.array(Reference),
        /** Information considered as part of plan */
        supportingInfo: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Human-friendly name for the care plan */
        title: primitives.R4.string
      })
    ],
    "CarePlan"
  )
);
