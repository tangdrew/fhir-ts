/**
 * PlanDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age, AgeOutputType } from "./Age";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Duration, DurationOutputType } from "./Duration";
import { Expression, ExpressionOutputType } from "./Expression";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";
import {
  TriggerDefinition,
  TriggerDefinitionOutputType
} from "./TriggerDefinition";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Target outcome for the goal
 */
export interface PlanDefinitionGoalTarget {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The parameter whose value is to be tracked */
  measure?: CodeableConcept;
  /** The target value to be achieved */
  detail?: Quantity | Range | CodeableConcept;
  /** Reach goal within */
  due?: Duration;
}

export interface PlanDefinitionGoalTargetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The parameter whose value is to be tracked */
  measure?: CodeableConceptOutputType;
  /** The target value to be achieved */
  detail?: QuantityOutputType | RangeOutputType | CodeableConceptOutputType;
  /** Reach goal within */
  due?: DurationOutputType;
}

export const PlanDefinitionGoalTarget: t.RecursiveType<
  t.Type<PlanDefinitionGoalTarget, PlanDefinitionGoalTargetOutputType>,
  PlanDefinitionGoalTarget,
  PlanDefinitionGoalTargetOutputType
> = t.recursion<PlanDefinitionGoalTarget, PlanDefinitionGoalTargetOutputType>(
  "PlanDefinitionGoalTarget",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The target value to be achieved */
          detail: t.union([Quantity, Range, CodeableConcept]),
          /** Reach goal within */
          due: Duration,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** The parameter whose value is to be tracked */
          measure: CodeableConcept,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "PlanDefinitionGoalTarget"
    )
);

/**
 * What the plan is trying to accomplish
 */
export interface PlanDefinitionGoal {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  /** Target outcome for the goal */
  target?: PlanDefinitionGoalTarget[];
}

export interface PlanDefinitionGoalOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** E.g. Treatment, dietary, behavioral */
  category?: CodeableConceptOutputType;
  /** Code or text describing the goal */
  description: CodeableConceptOutputType;
  /** high-priority | medium-priority | low-priority */
  priority?: CodeableConceptOutputType;
  /** When goal pursuit begins */
  start?: CodeableConceptOutputType;
  /** What does the goal address */
  addresses?: CodeableConceptOutputType[];
  /** Supporting documentation for the goal */
  documentation?: RelatedArtifactOutputType[];
  /** Target outcome for the goal */
  target?: PlanDefinitionGoalTargetOutputType[];
}

export const PlanDefinitionGoal: t.RecursiveType<
  t.Type<PlanDefinitionGoal, PlanDefinitionGoalOutputType>,
  PlanDefinitionGoal,
  PlanDefinitionGoalOutputType
> = t.recursion<PlanDefinitionGoal, PlanDefinitionGoalOutputType>(
  "PlanDefinitionGoal",
  () =>
    t.intersection(
      [
        t.type({
          /** Code or text describing the goal */
          description: CodeableConcept
        }),
        t.partial({
          /** What does the goal address */
          addresses: t.array(CodeableConcept),
          /** E.g. Treatment, dietary, behavioral */
          category: CodeableConcept,
          /** Supporting documentation for the goal */
          documentation: t.array(RelatedArtifact),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** high-priority | medium-priority | low-priority */
          priority: CodeableConcept,
          /** When goal pursuit begins */
          start: CodeableConcept,
          /** Target outcome for the goal */
          target: t.array(PlanDefinitionGoalTarget)
        })
      ],
      "PlanDefinitionGoal"
    )
);

/**
 * Relationship to another action
 */
export interface PlanDefinitionActionRelatedAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What action is this related to */
  actionId: t.TypeOf<primitives.R4.IDType>;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: t.TypeOf<primitives.R4.CodeType>;
  /** Time offset for the relationship */
  offset?: Duration | Range;
}

export interface PlanDefinitionActionRelatedActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What action is this related to */
  actionId: t.OutputOf<primitives.R4.IDType>;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: t.OutputOf<primitives.R4.CodeType>;
  /** Time offset for the relationship */
  offset?: DurationOutputType | RangeOutputType;
}

export const PlanDefinitionActionRelatedAction: t.RecursiveType<
  t.Type<
    PlanDefinitionActionRelatedAction,
    PlanDefinitionActionRelatedActionOutputType
  >,
  PlanDefinitionActionRelatedAction,
  PlanDefinitionActionRelatedActionOutputType
> = t.recursion<
  PlanDefinitionActionRelatedAction,
  PlanDefinitionActionRelatedActionOutputType
>("PlanDefinitionActionRelatedAction", () =>
  t.intersection(
    [
      t.type({
        /** What action is this related to */
        actionId: primitives.R4.id,
        /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
        relationship: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Time offset for the relationship */
        offset: t.union([Duration, Range])
      })
    ],
    "PlanDefinitionActionRelatedAction"
  )
);

/**
 * Who should participate in the action
 */
export interface PlanDefinitionActionParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** patient | practitioner | related-person | device */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** E.g. Nurse, Surgeon, Parent */
  role?: CodeableConcept;
}

export interface PlanDefinitionActionParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** patient | practitioner | related-person | device */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** E.g. Nurse, Surgeon, Parent */
  role?: CodeableConceptOutputType;
}

export const PlanDefinitionActionParticipant: t.RecursiveType<
  t.Type<
    PlanDefinitionActionParticipant,
    PlanDefinitionActionParticipantOutputType
  >,
  PlanDefinitionActionParticipant,
  PlanDefinitionActionParticipantOutputType
> = t.recursion<
  PlanDefinitionActionParticipant,
  PlanDefinitionActionParticipantOutputType
>("PlanDefinitionActionParticipant", () =>
  t.intersection(
    [
      t.type({
        /** patient | practitioner | related-person | device */
        type: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** E.g. Nurse, Surgeon, Parent */
        role: CodeableConcept
      })
    ],
    "PlanDefinitionActionParticipant"
  )
);

/**
 * Dynamic aspects of the definition
 */
export interface PlanDefinitionActionDynamicValue {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The path to the element to be set dynamically */
  path?: t.TypeOf<primitives.R4.StringType>;
  /** An expression that provides the dynamic value for the customization */
  expression?: Expression;
}

export interface PlanDefinitionActionDynamicValueOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The path to the element to be set dynamically */
  path?: t.OutputOf<primitives.R4.StringType>;
  /** An expression that provides the dynamic value for the customization */
  expression?: ExpressionOutputType;
}

export const PlanDefinitionActionDynamicValue: t.RecursiveType<
  t.Type<
    PlanDefinitionActionDynamicValue,
    PlanDefinitionActionDynamicValueOutputType
  >,
  PlanDefinitionActionDynamicValue,
  PlanDefinitionActionDynamicValueOutputType
> = t.recursion<
  PlanDefinitionActionDynamicValue,
  PlanDefinitionActionDynamicValueOutputType
>("PlanDefinitionActionDynamicValue", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** An expression that provides the dynamic value for the customization */
        expression: Expression,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The path to the element to be set dynamically */
        path: primitives.R4.string
      })
    ],
    "PlanDefinitionActionDynamicValue"
  )
);

/**
 * Whether or not the action is applicable
 */
export interface PlanDefinitionActionCondition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** applicability | start | stop */
  kind: t.TypeOf<primitives.R4.CodeType>;
  /** Boolean-valued expression */
  expression?: Expression;
}

export interface PlanDefinitionActionConditionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** applicability | start | stop */
  kind: t.OutputOf<primitives.R4.CodeType>;
  /** Boolean-valued expression */
  expression?: ExpressionOutputType;
}

export const PlanDefinitionActionCondition: t.RecursiveType<
  t.Type<
    PlanDefinitionActionCondition,
    PlanDefinitionActionConditionOutputType
  >,
  PlanDefinitionActionCondition,
  PlanDefinitionActionConditionOutputType
> = t.recursion<
  PlanDefinitionActionCondition,
  PlanDefinitionActionConditionOutputType
>("PlanDefinitionActionCondition", () =>
  t.intersection(
    [
      t.type({
        /** applicability | start | stop */
        kind: primitives.R4.code
      }),
      t.partial({
        /** Boolean-valued expression */
        expression: Expression,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "PlanDefinitionActionCondition"
  )
);

/**
 * Action defined by the plan
 */
export interface PlanDefinitionAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** User-visible prefix for the action (e.g. 1. or A.) */
  prefix?: t.TypeOf<primitives.R4.StringType>;
  /** User-visible title */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Brief description of the action */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
  textEquivalent?: t.TypeOf<primitives.R4.StringType>;
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** Code representing the meaning of the action or sub-actions */
  code?: CodeableConcept[];
  /** Why the action should be performed */
  reason?: CodeableConcept[];
  /** Supporting documentation for the intended performer of the action */
  documentation?: RelatedArtifact[];
  /** What goals this action supports */
  goalId?: t.TypeOf<primitives.R4.IDType>[];
  /** Type of individual the action is focused on */
  subject?: CodeableConcept | Reference;
  /** When the action should be triggered */
  trigger?: TriggerDefinition[];
  /** Whether or not the action is applicable */
  condition?: PlanDefinitionActionCondition[];
  /** Input data requirements */
  input?: DataRequirement[];
  /** Output data definition */
  output?: DataRequirement[];
  /** Relationship to another action */
  relatedAction?: PlanDefinitionActionRelatedAction[];
  /** When the action should take place */
  timing?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Age
    | Period
    | Duration
    | Range
    | Timing;
  /** Who should participate in the action */
  participant?: PlanDefinitionActionParticipant[];
  /** create | update | remove | fire-event */
  type?: CodeableConcept;
  /** visual-group | logical-group | sentence-group */
  groupingBehavior?: t.TypeOf<primitives.R4.CodeType>;
  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
  selectionBehavior?: t.TypeOf<primitives.R4.CodeType>;
  /** must | could | must-unless-documented */
  requiredBehavior?: t.TypeOf<primitives.R4.CodeType>;
  /** yes | no */
  precheckBehavior?: t.TypeOf<primitives.R4.CodeType>;
  /** single | multiple */
  cardinalityBehavior?: t.TypeOf<primitives.R4.CodeType>;
  /** Description of the activity to be performed */
  definition?:
    | t.TypeOf<primitives.R4.CanonicalType>
    | t.TypeOf<primitives.R4.URIType>;
  /** Transform to apply the template */
  transform?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Dynamic aspects of the definition */
  dynamicValue?: PlanDefinitionActionDynamicValue[];
  /** A sub-action */
  action?: PlanDefinitionAction[];
}

export interface PlanDefinitionActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** User-visible prefix for the action (e.g. 1. or A.) */
  prefix?: t.OutputOf<primitives.R4.StringType>;
  /** User-visible title */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Brief description of the action */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
  textEquivalent?: t.OutputOf<primitives.R4.StringType>;
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** Code representing the meaning of the action or sub-actions */
  code?: CodeableConceptOutputType[];
  /** Why the action should be performed */
  reason?: CodeableConceptOutputType[];
  /** Supporting documentation for the intended performer of the action */
  documentation?: RelatedArtifactOutputType[];
  /** What goals this action supports */
  goalId?: t.OutputOf<primitives.R4.IDType>[];
  /** Type of individual the action is focused on */
  subject?: CodeableConceptOutputType | ReferenceOutputType;
  /** When the action should be triggered */
  trigger?: TriggerDefinitionOutputType[];
  /** Whether or not the action is applicable */
  condition?: PlanDefinitionActionConditionOutputType[];
  /** Input data requirements */
  input?: DataRequirementOutputType[];
  /** Output data definition */
  output?: DataRequirementOutputType[];
  /** Relationship to another action */
  relatedAction?: PlanDefinitionActionRelatedActionOutputType[];
  /** When the action should take place */
  timing?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | AgeOutputType
    | PeriodOutputType
    | DurationOutputType
    | RangeOutputType
    | TimingOutputType;
  /** Who should participate in the action */
  participant?: PlanDefinitionActionParticipantOutputType[];
  /** create | update | remove | fire-event */
  type?: CodeableConceptOutputType;
  /** visual-group | logical-group | sentence-group */
  groupingBehavior?: t.OutputOf<primitives.R4.CodeType>;
  /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
  selectionBehavior?: t.OutputOf<primitives.R4.CodeType>;
  /** must | could | must-unless-documented */
  requiredBehavior?: t.OutputOf<primitives.R4.CodeType>;
  /** yes | no */
  precheckBehavior?: t.OutputOf<primitives.R4.CodeType>;
  /** single | multiple */
  cardinalityBehavior?: t.OutputOf<primitives.R4.CodeType>;
  /** Description of the activity to be performed */
  definition?:
    | t.OutputOf<primitives.R4.CanonicalType>
    | t.OutputOf<primitives.R4.URIType>;
  /** Transform to apply the template */
  transform?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Dynamic aspects of the definition */
  dynamicValue?: PlanDefinitionActionDynamicValueOutputType[];
  /** A sub-action */
  action?: PlanDefinitionActionOutputType[];
}

export const PlanDefinitionAction: t.RecursiveType<
  t.Type<PlanDefinitionAction, PlanDefinitionActionOutputType>,
  PlanDefinitionAction,
  PlanDefinitionActionOutputType
> = t.recursion<PlanDefinitionAction, PlanDefinitionActionOutputType>(
  "PlanDefinitionAction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** A sub-action */
          action: t.array(PlanDefinitionAction),
          /** single | multiple */
          cardinalityBehavior: primitives.R4.code,
          /** Code representing the meaning of the action or sub-actions */
          code: t.array(CodeableConcept),
          /** Whether or not the action is applicable */
          condition: t.array(PlanDefinitionActionCondition),
          /** Description of the activity to be performed */
          definition: t.union([primitives.R4.canonical, primitives.R4.uri]),
          /** Brief description of the action */
          description: primitives.R4.string,
          /** Supporting documentation for the intended performer of the action */
          documentation: t.array(RelatedArtifact),
          /** Dynamic aspects of the definition */
          dynamicValue: t.array(PlanDefinitionActionDynamicValue),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** What goals this action supports */
          goalId: t.array(primitives.R4.id),
          /** visual-group | logical-group | sentence-group */
          groupingBehavior: primitives.R4.code,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Input data requirements */
          input: t.array(DataRequirement),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Output data definition */
          output: t.array(DataRequirement),
          /** Who should participate in the action */
          participant: t.array(PlanDefinitionActionParticipant),
          /** yes | no */
          precheckBehavior: primitives.R4.code,
          /** User-visible prefix for the action (e.g. 1. or A.) */
          prefix: primitives.R4.string,
          /** routine | urgent | asap | stat */
          priority: primitives.R4.code,
          /** Why the action should be performed */
          reason: t.array(CodeableConcept),
          /** Relationship to another action */
          relatedAction: t.array(PlanDefinitionActionRelatedAction),
          /** must | could | must-unless-documented */
          requiredBehavior: primitives.R4.code,
          /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
          selectionBehavior: primitives.R4.code,
          /** Type of individual the action is focused on */
          subject: t.union([CodeableConcept, Reference]),
          /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
          textEquivalent: primitives.R4.string,
          /** When the action should take place */
          timing: t.union([
            primitives.R4.dateTime,
            Age,
            Period,
            Duration,
            Range,
            Timing
          ]),
          /** User-visible title */
          title: primitives.R4.string,
          /** Transform to apply the template */
          transform: primitives.R4.canonical,
          /** When the action should be triggered */
          trigger: t.array(TriggerDefinition),
          /** create | update | remove | fire-event */
          type: CodeableConcept
        })
      ],
      "PlanDefinitionAction"
    )
);

/**
 * The definition of a plan for a series of actions, independent of any specific patient or context
 */
export interface PlanDefinition {
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
  /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the plan definition */
  identifier?: Identifier[];
  /** Business version of the plan definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this plan definition (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this plan definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate title of the plan definition */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** order-set | clinical-protocol | eca-rule | workflow-definition */
  type?: CodeableConcept;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Type of individual the plan definition is focused on */
  subject?: CodeableConcept | Reference;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the plan definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for plan definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this plan definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the plan */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the plan definition was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the plan definition was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
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
  library?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** What the plan is trying to accomplish */
  goal?: PlanDefinitionGoal[];
  /** Action defined by the plan */
  action?: PlanDefinitionAction[];
}

export interface PlanDefinitionOutputType {
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
  /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the plan definition */
  identifier?: IdentifierOutputType[];
  /** Business version of the plan definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this plan definition (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this plan definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate title of the plan definition */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** order-set | clinical-protocol | eca-rule | workflow-definition */
  type?: CodeableConceptOutputType;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Type of individual the plan definition is focused on */
  subject?: CodeableConceptOutputType | ReferenceOutputType;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the plan definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for plan definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this plan definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Describes the clinical usage of the plan */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the plan definition was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the plan definition was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the plan definition is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** E.g. Education, Treatment, Assessment */
  topic?: CodeableConceptOutputType[];
  /** Who authored the content */
  author?: ContactDetailOutputType[];
  /** Who edited the content */
  editor?: ContactDetailOutputType[];
  /** Who reviewed the content */
  reviewer?: ContactDetailOutputType[];
  /** Who endorsed the content */
  endorser?: ContactDetailOutputType[];
  /** Additional documentation, citations */
  relatedArtifact?: RelatedArtifactOutputType[];
  /** Logic used by the plan definition */
  library?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** What the plan is trying to accomplish */
  goal?: PlanDefinitionGoalOutputType[];
  /** Action defined by the plan */
  action?: PlanDefinitionActionOutputType[];
}

export const PlanDefinition: t.RecursiveType<
  t.Type<PlanDefinition, PlanDefinitionOutputType>,
  PlanDefinition,
  PlanDefinitionOutputType
> = t.recursion<PlanDefinition, PlanDefinitionOutputType>(
  "PlanDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Action defined by the plan */
          action: t.array(PlanDefinitionAction),
          /** When the plan definition was approved by publisher */
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
          /** Natural language description of the plan definition */
          description: primitives.R4.markdown,
          /** Who edited the content */
          editor: t.array(ContactDetail),
          /** When the plan definition is expected to be used */
          effectivePeriod: Period,
          /** Who endorsed the content */
          endorser: t.array(ContactDetail),
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** What the plan is trying to accomplish */
          goal: t.array(PlanDefinitionGoal),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the plan definition */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for plan definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the plan definition was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Logic used by the plan definition */
          library: t.array(primitives.R4.canonical),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this plan definition (computer friendly) */
          name: primitives.R4.string,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this plan definition is defined */
          purpose: primitives.R4.markdown,
          /** Additional documentation, citations */
          relatedArtifact: t.array(RelatedArtifact),
          /** Who reviewed the content */
          reviewer: t.array(ContactDetail),
          /** Type of individual the plan definition is focused on */
          subject: t.union([CodeableConcept, Reference]),
          /** Subordinate title of the plan definition */
          subtitle: primitives.R4.string,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this plan definition (human friendly) */
          title: primitives.R4.string,
          /** E.g. Education, Treatment, Assessment */
          topic: t.array(CodeableConcept),
          /** order-set | clinical-protocol | eca-rule | workflow-definition */
          type: CodeableConcept,
          /** Canonical identifier for this plan definition, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** Describes the clinical usage of the plan */
          usage: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the plan definition */
          version: primitives.R4.string
        })
      ],
      "PlanDefinition"
    )
);
