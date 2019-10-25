/**
 * PlanDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age } from "./Age";
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
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

/**
 * The definition of a plan for a series of actions, independent of any specific patient or context
 */
export interface PlanDefinition {
  /** The type of resource */
  resourceType?: "PlanDefinition";
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
  /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the plan definition */
  identifier?: Identifier[];
  /** Business version of the plan definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this plan definition (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this plan definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Subordinate title of the plan definition */
  subtitle?: string;
  /** Extension of subtitle element */
  _subtitle?: Element;
  /** order-set | clinical-protocol | eca-rule | workflow-definition */
  type?: CodeableConcept;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Type of individual the plan definition is focused on */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the plan definition is focused on */
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
  /** Natural language description of the plan definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for plan definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this plan definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Describes the clinical usage of the plan */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the plan definition was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the plan definition was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
  /** When the plan definition is expected to be used */
  effectivePeriod?: Period;
  /** E.g. Education, Treatment, Assessment */
  topic?: CodeableConcept[];
  /** Who authored the content */
  author?: ContactDetail[];
  /** Who edited the content */
  editor?: ContactDetail[];
  /** Who reviewed the content */
  reviewer?: ContactDetail[];
  /** Who endorsed the content */
  endorser?: ContactDetail[];
  /** Additional documentation, citations */
  relatedArtifact?: RelatedArtifact[];
  /** Logic used by the plan definition */
  library?: primitives.R4.canonical[];
  /** Extension of library element */
  _library?: Element[];
}
/**
 * The definition of a plan for a series of actions, independent of any specific patient or context
 */
export const PlanDefinition: t.Type<PlanDefinition> = t.recursion<
  PlanDefinition
>("PlanDefinition", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("PlanDefinition"),
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
      /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the plan definition */
      identifier: t.array(Identifier),
      /** Business version of the plan definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this plan definition (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this plan definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Subordinate title of the plan definition */
      subtitle: primitives.R4.string,
      /** Extension of subtitle element */
      _subtitle: Element,
      /** order-set | clinical-protocol | eca-rule | workflow-definition */
      type: CodeableConcept,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Type of individual the plan definition is focused on */
      subjectCodeableConcept: CodeableConcept,
      /** Type of individual the plan definition is focused on */
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
      /** Natural language description of the plan definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for plan definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this plan definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Describes the clinical usage of the plan */
      usage: primitives.R4.string,
      /** Extension of usage element */
      _usage: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the plan definition was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the plan definition was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the plan definition is expected to be used */
      effectivePeriod: Period,
      /** E.g. Education, Treatment, Assessment */
      topic: t.array(CodeableConcept),
      /** Who authored the content */
      author: t.array(ContactDetail),
      /** Who edited the content */
      editor: t.array(ContactDetail),
      /** Who reviewed the content */
      reviewer: t.array(ContactDetail),
      /** Who endorsed the content */
      endorser: t.array(ContactDetail),
      /** Additional documentation, citations */
      relatedArtifact: t.array(RelatedArtifact),
      /** Logic used by the plan definition */
      library: t.array(primitives.R4.canonical),
      /** Extension of library element */
      _library: t.array(Element)
    })
  ])
);

/**
 * What the plan is trying to accomplish
 */
export interface PlanDefinitionGoal {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** E.g. Treatment, dietary, behavioral */
  category?: CodeableConcept;
  /** Code or text describing the goal */
  description: CodeableConcept;
  /** high-priority | medium-priority | low-priority */
  priority?: CodeableConcept;
  /** When goal pursuit begins */
  start?: CodeableConcept;
  /** What does the goal address */
  addresses?: CodeableConcept[];
  /** Supporting documentation for the goal */
  documentation?: RelatedArtifact[];
}
/**
 * What the plan is trying to accomplish
 */
export const PlanDefinitionGoal: t.Type<PlanDefinitionGoal> = t.recursion<
  PlanDefinitionGoal
>("PlanDefinitionGoal", () =>
  t.intersection([
    t.type({
      /** Code or text describing the goal */
      description: CodeableConcept
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
      /** E.g. Treatment, dietary, behavioral */
      category: CodeableConcept,
      /** high-priority | medium-priority | low-priority */
      priority: CodeableConcept,
      /** When goal pursuit begins */
      start: CodeableConcept,
      /** What does the goal address */
      addresses: t.array(CodeableConcept),
      /** Supporting documentation for the goal */
      documentation: t.array(RelatedArtifact)
    })
  ])
);

/**
 * Target outcome for the goal
 */
export interface PlanDefinitionGoalTarget {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The parameter whose value is to be tracked */
  measure?: CodeableConcept;
  /** The target value to be achieved */
  detailQuantity?: Quantity;
  /** The target value to be achieved */
  detailRange?: Range;
  /** The target value to be achieved */
  detailCodeableConcept?: CodeableConcept;
  /** Reach goal within */
  due?: Duration;
}
/**
 * Target outcome for the goal
 */
export const PlanDefinitionGoalTarget: t.Type<
  PlanDefinitionGoalTarget
> = t.recursion<PlanDefinitionGoalTarget>("PlanDefinitionGoalTarget", () =>
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
      /** The parameter whose value is to be tracked */
      measure: CodeableConcept,
      /** The target value to be achieved */
      detailQuantity: Quantity,
      /** The target value to be achieved */
      detailRange: Range,
      /** The target value to be achieved */
      detailCodeableConcept: CodeableConcept,
      /** Reach goal within */
      due: Duration
    })
  ])
);

/**
 * Action defined by the plan
 */
export interface PlanDefinitionAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** User-visible prefix for the action (e.g. 1. or A.) */
  prefix?: string;
  /** Extension of prefix element */
  _prefix?: Element;
  /** User-visible title */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Brief description of the action */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
  textEquivalent?: string;
  /** Extension of textEquivalent element */
  _textEquivalent?: Element;
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** Code representing the meaning of the action or sub-actions */
  code?: CodeableConcept[];
  /** Why the action should be performed */
  reason?: CodeableConcept[];
  /** Supporting documentation for the intended performer of the action */
  documentation?: RelatedArtifact[];
  /** What goals this action supports */
  goalId?: primitives.R4.id[];
  /** Extension of goalId element */
  _goalId?: Element[];
  /** Type of individual the action is focused on */
  subjectCodeableConcept?: CodeableConcept;
  /** Type of individual the action is focused on */
  subjectReference?: Reference;
  /** When the action should be triggered */
  trigger?: TriggerDefinition[];
  /** Input data requirements */
  input?: DataRequirement[];
  /** Output data definition */
  output?: DataRequirement[];
  /** When the action should take place */
  timingDateTime?: primitives.R4.dateTime;
  /** Extension of timingDateTime element */
  _timingDateTime?: Element;
  /** When the action should take place */
  timingAge?: Age;
  /** When the action should take place */
  timingPeriod?: Period;
  /** When the action should take place */
  timingDuration?: Duration;
  /** When the action should take place */
  timingRange?: Range;
  /** When the action should take place */
  timingTiming?: Timing;
  /** create | update | remove | fire-event */
  type?: CodeableConcept;
  /** visual-group | logical-group | sentence-group */
  groupingBehavior?: primitives.R4.code;
  /** Extension of groupingBehavior element */
  _groupingBehavior?: Element;
  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
  selectionBehavior?: primitives.R4.code;
  /** Extension of selectionBehavior element */
  _selectionBehavior?: Element;
  /** must | could | must-unless-documented */
  requiredBehavior?: primitives.R4.code;
  /** Extension of requiredBehavior element */
  _requiredBehavior?: Element;
  /** yes | no */
  precheckBehavior?: primitives.R4.code;
  /** Extension of precheckBehavior element */
  _precheckBehavior?: Element;
  /** single | multiple */
  cardinalityBehavior?: primitives.R4.code;
  /** Extension of cardinalityBehavior element */
  _cardinalityBehavior?: Element;
  /** Description of the activity to be performed */
  definitionCanonical?: primitives.R4.canonical;
  /** Extension of definitionCanonical element */
  _definitionCanonical?: Element;
  /** Description of the activity to be performed */
  definitionUri?: primitives.R4.uri;
  /** Extension of definitionUri element */
  _definitionUri?: Element;
  /** Transform to apply the template */
  transform?: primitives.R4.canonical;
  /** Extension of transform element */
  _transform?: Element;
  /** A sub-action */
  action?: PlanDefinitionAction[];
}
/**
 * Action defined by the plan
 */
export const PlanDefinitionAction: t.Type<PlanDefinitionAction> = t.recursion<
  PlanDefinitionAction
>("PlanDefinitionAction", () =>
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
      /** User-visible prefix for the action (e.g. 1. or A.) */
      prefix: primitives.R4.string,
      /** Extension of prefix element */
      _prefix: Element,
      /** User-visible title */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Brief description of the action */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
      textEquivalent: primitives.R4.string,
      /** Extension of textEquivalent element */
      _textEquivalent: Element,
      /** routine | urgent | asap | stat */
      priority: primitives.R4.code,
      /** Extension of priority element */
      _priority: Element,
      /** Code representing the meaning of the action or sub-actions */
      code: t.array(CodeableConcept),
      /** Why the action should be performed */
      reason: t.array(CodeableConcept),
      /** Supporting documentation for the intended performer of the action */
      documentation: t.array(RelatedArtifact),
      /** What goals this action supports */
      goalId: t.array(primitives.R4.id),
      /** Extension of goalId element */
      _goalId: t.array(Element),
      /** Type of individual the action is focused on */
      subjectCodeableConcept: CodeableConcept,
      /** Type of individual the action is focused on */
      subjectReference: Reference,
      /** When the action should be triggered */
      trigger: t.array(TriggerDefinition),
      /** Input data requirements */
      input: t.array(DataRequirement),
      /** Output data definition */
      output: t.array(DataRequirement),
      /** When the action should take place */
      timingDateTime: primitives.R4.dateTime,
      /** Extension of timingDateTime element */
      _timingDateTime: Element,
      /** When the action should take place */
      timingAge: Age,
      /** When the action should take place */
      timingPeriod: Period,
      /** When the action should take place */
      timingDuration: Duration,
      /** When the action should take place */
      timingRange: Range,
      /** When the action should take place */
      timingTiming: Timing,
      /** create | update | remove | fire-event */
      type: CodeableConcept,
      /** visual-group | logical-group | sentence-group */
      groupingBehavior: primitives.R4.code,
      /** Extension of groupingBehavior element */
      _groupingBehavior: Element,
      /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
      selectionBehavior: primitives.R4.code,
      /** Extension of selectionBehavior element */
      _selectionBehavior: Element,
      /** must | could | must-unless-documented */
      requiredBehavior: primitives.R4.code,
      /** Extension of requiredBehavior element */
      _requiredBehavior: Element,
      /** yes | no */
      precheckBehavior: primitives.R4.code,
      /** Extension of precheckBehavior element */
      _precheckBehavior: Element,
      /** single | multiple */
      cardinalityBehavior: primitives.R4.code,
      /** Extension of cardinalityBehavior element */
      _cardinalityBehavior: Element,
      /** Description of the activity to be performed */
      definitionCanonical: primitives.R4.canonical,
      /** Extension of definitionCanonical element */
      _definitionCanonical: Element,
      /** Description of the activity to be performed */
      definitionUri: primitives.R4.uri,
      /** Extension of definitionUri element */
      _definitionUri: Element,
      /** Transform to apply the template */
      transform: primitives.R4.canonical,
      /** Extension of transform element */
      _transform: Element,
      /** A sub-action */
      action: t.array(PlanDefinitionAction)
    })
  ])
);

/**
 * Whether or not the action is applicable
 */
export interface PlanDefinitionActionCondition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** applicability | start | stop */
  kind: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
  /** Boolean-valued expression */
  expression?: Expression;
}
/**
 * Whether or not the action is applicable
 */
export const PlanDefinitionActionCondition: t.Type<
  PlanDefinitionActionCondition
> = t.recursion<PlanDefinitionActionCondition>(
  "PlanDefinitionActionCondition",
  () =>
    t.intersection([
      t.type({
        /** applicability | start | stop */
        kind: primitives.R4.code
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
        /** Extension of kind element */
        _kind: Element,
        /** Boolean-valued expression */
        expression: Expression
      })
    ])
);

/**
 * Relationship to another action
 */
export interface PlanDefinitionActionRelatedAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What action is this related to */
  actionId: primitives.R4.id;
  /** Extension of actionId element */
  _actionId?: Element;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: primitives.R4.code;
  /** Extension of relationship element */
  _relationship?: Element;
  /** Time offset for the relationship */
  offsetDuration?: Duration;
  /** Time offset for the relationship */
  offsetRange?: Range;
}
/**
 * Relationship to another action
 */
export const PlanDefinitionActionRelatedAction: t.Type<
  PlanDefinitionActionRelatedAction
> = t.recursion<PlanDefinitionActionRelatedAction>(
  "PlanDefinitionActionRelatedAction",
  () =>
    t.intersection([
      t.type({
        /** What action is this related to */
        actionId: primitives.R4.id,
        /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
        relationship: primitives.R4.code
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
        /** Extension of actionId element */
        _actionId: Element,
        /** Extension of relationship element */
        _relationship: Element,
        /** Time offset for the relationship */
        offsetDuration: Duration,
        /** Time offset for the relationship */
        offsetRange: Range
      })
    ])
);

/**
 * Who should participate in the action
 */
export interface PlanDefinitionActionParticipant {
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
  /** E.g. Nurse, Surgeon, Parent */
  role?: CodeableConcept;
}
/**
 * Who should participate in the action
 */
export const PlanDefinitionActionParticipant: t.Type<
  PlanDefinitionActionParticipant
> = t.recursion<PlanDefinitionActionParticipant>(
  "PlanDefinitionActionParticipant",
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
        /** E.g. Nurse, Surgeon, Parent */
        role: CodeableConcept
      })
    ])
);

/**
 * Dynamic aspects of the definition
 */
export interface PlanDefinitionActionDynamicValue {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The path to the element to be set dynamically */
  path?: string;
  /** Extension of path element */
  _path?: Element;
  /** An expression that provides the dynamic value for the customization */
  expression?: Expression;
}
/**
 * Dynamic aspects of the definition
 */
export const PlanDefinitionActionDynamicValue: t.Type<
  PlanDefinitionActionDynamicValue
> = t.recursion<PlanDefinitionActionDynamicValue>(
  "PlanDefinitionActionDynamicValue",
  () =>
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
        /** The path to the element to be set dynamically */
        path: primitives.R4.string,
        /** Extension of path element */
        _path: Element,
        /** An expression that provides the dynamic value for the customization */
        expression: Expression
      })
    ])
);
