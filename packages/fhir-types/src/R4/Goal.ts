/**
 * Goal Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Target outcome for the goal
 */
export interface GoalTarget {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The parameter whose value is being tracked */
  measure?: CodeableConcept;
  /** The target value to be achieved */
  detail?:
    | Quantity
    | Range
    | CodeableConcept
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.IntegerType>
    | Ratio;
  /** Reach goal on or before */
  due?: t.TypeOf<primitives.R4.DateType> | Duration;
}

export interface GoalTargetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The parameter whose value is being tracked */
  measure?: CodeableConceptOutputType;
  /** The target value to be achieved */
  detail?:
    | QuantityOutputType
    | RangeOutputType
    | CodeableConceptOutputType
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.IntegerType>
    | RatioOutputType;
  /** Reach goal on or before */
  due?: t.OutputOf<primitives.R4.DateType> | DurationOutputType;
}

export const GoalTarget: t.RecursiveType<
  t.Type<GoalTarget, GoalTargetOutputType>,
  GoalTarget,
  GoalTargetOutputType
> = t.recursion<GoalTarget, GoalTargetOutputType>("GoalTarget", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** The target value to be achieved */
        detail: t.union([
          Quantity,
          Range,
          CodeableConcept,
          primitives.R4.string,
          primitives.R4.boolean,
          primitives.R4.integer,
          Ratio
        ]),
        /** Reach goal on or before */
        due: t.union([primitives.R4.date, Duration]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The parameter whose value is being tracked */
        measure: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "GoalTarget"
  )
);

/**
 * Describes the intended objective(s) for a patient, group or organization
 */
export interface Goal {
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
  /** External Ids for this goal */
  identifier?: Identifier[];
  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
  lifecycleStatus: t.TypeOf<primitives.R4.CodeType>;
  /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable */
  achievementStatus?: CodeableConcept;
  /** E.g. Treatment, dietary, behavioral, etc. */
  category?: CodeableConcept[];
  /** high-priority | medium-priority | low-priority */
  priority?: CodeableConcept;
  /** Code or text describing goal */
  description: CodeableConcept;
  /** Who this goal is intended for */
  subject: Reference;
  /** When goal pursuit begins */
  start?: t.TypeOf<primitives.R4.DateType> | CodeableConcept;
  /** Target outcome for the goal */
  target?: GoalTarget[];
  /** When goal status took effect */
  statusDate?: t.TypeOf<primitives.R4.DateType>;
  /** Reason for current status */
  statusReason?: t.TypeOf<primitives.R4.StringType>;
  /** Who's responsible for creating Goal? */
  expressedBy?: Reference;
  /** Issues addressed by this goal */
  addresses?: Reference[];
  /** Comments about the goal */
  note?: Annotation[];
  /** What result was achieved regarding the goal? */
  outcomeCode?: CodeableConcept[];
  /** Observation that resulted from goal */
  outcomeReference?: Reference[];
}

export interface GoalOutputType {
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
  /** External Ids for this goal */
  identifier?: IdentifierOutputType[];
  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
  lifecycleStatus: t.OutputOf<primitives.R4.CodeType>;
  /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable */
  achievementStatus?: CodeableConceptOutputType;
  /** E.g. Treatment, dietary, behavioral, etc. */
  category?: CodeableConceptOutputType[];
  /** high-priority | medium-priority | low-priority */
  priority?: CodeableConceptOutputType;
  /** Code or text describing goal */
  description: CodeableConceptOutputType;
  /** Who this goal is intended for */
  subject: ReferenceOutputType;
  /** When goal pursuit begins */
  start?: t.OutputOf<primitives.R4.DateType> | CodeableConceptOutputType;
  /** Target outcome for the goal */
  target?: GoalTargetOutputType[];
  /** When goal status took effect */
  statusDate?: t.OutputOf<primitives.R4.DateType>;
  /** Reason for current status */
  statusReason?: t.OutputOf<primitives.R4.StringType>;
  /** Who's responsible for creating Goal? */
  expressedBy?: ReferenceOutputType;
  /** Issues addressed by this goal */
  addresses?: ReferenceOutputType[];
  /** Comments about the goal */
  note?: AnnotationOutputType[];
  /** What result was achieved regarding the goal? */
  outcomeCode?: CodeableConceptOutputType[];
  /** Observation that resulted from goal */
  outcomeReference?: ReferenceOutputType[];
}

export const Goal: t.RecursiveType<
  t.Type<Goal, GoalOutputType>,
  Goal,
  GoalOutputType
> = t.recursion<Goal, GoalOutputType>("Goal", () =>
  t.intersection(
    [
      t.type({
        /** Code or text describing goal */
        description: CodeableConcept,
        /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
        lifecycleStatus: primitives.R4.code,
        /** Who this goal is intended for */
        subject: Reference
      }),
      t.partial({
        /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable */
        achievementStatus: CodeableConcept,
        /** Issues addressed by this goal */
        addresses: t.array(Reference),
        /** E.g. Treatment, dietary, behavioral, etc. */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Who's responsible for creating Goal? */
        expressedBy: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Ids for this goal */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments about the goal */
        note: t.array(Annotation),
        /** What result was achieved regarding the goal? */
        outcomeCode: t.array(CodeableConcept),
        /** Observation that resulted from goal */
        outcomeReference: t.array(Reference),
        /** high-priority | medium-priority | low-priority */
        priority: CodeableConcept,
        /** When goal pursuit begins */
        start: t.union([primitives.R4.date, CodeableConcept]),
        /** When goal status took effect */
        statusDate: primitives.R4.date,
        /** Reason for current status */
        statusReason: primitives.R4.string,
        /** Target outcome for the goal */
        target: t.array(GoalTarget),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Goal"
  )
);
