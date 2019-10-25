/**
 * Goal Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Describes the intended objective(s) for a patient, group or organization
 */
export interface Goal {
  /** The type of resource */
  resourceType?: "Goal";
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
  /** External Ids for this goal */
  identifier?: Identifier[];
  /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
  lifecycleStatus: primitives.R4.code;
  /** Extension of lifecycleStatus element */
  _lifecycleStatus?: Element;
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
  startDate?: primitives.R4.date;
  /** Extension of startDate element */
  _startDate?: Element;
  /** When goal pursuit begins */
  startCodeableConcept?: CodeableConcept;
  /** When goal status took effect */
  statusDate?: primitives.R4.date;
  /** Extension of statusDate element */
  _statusDate?: Element;
  /** Reason for current status */
  statusReason?: string;
  /** Extension of statusReason element */
  _statusReason?: Element;
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
/**
 * Describes the intended objective(s) for a patient, group or organization
 */
export const Goal: t.Type<Goal> = t.recursion<Goal>("Goal", () =>
  t.intersection([
    t.type({
      /** proposed | planned | accepted | active | on-hold | completed | cancelled | entered-in-error | rejected */
      lifecycleStatus: primitives.R4.code,
      /** Code or text describing goal */
      description: CodeableConcept,
      /** Who this goal is intended for */
      subject: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Goal"),
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
      /** External Ids for this goal */
      identifier: t.array(Identifier),
      /** Extension of lifecycleStatus element */
      _lifecycleStatus: Element,
      /** in-progress | improving | worsening | no-change | achieved | sustaining | not-achieved | no-progress | not-attainable */
      achievementStatus: CodeableConcept,
      /** E.g. Treatment, dietary, behavioral, etc. */
      category: t.array(CodeableConcept),
      /** high-priority | medium-priority | low-priority */
      priority: CodeableConcept,
      /** When goal pursuit begins */
      startDate: primitives.R4.date,
      /** Extension of startDate element */
      _startDate: Element,
      /** When goal pursuit begins */
      startCodeableConcept: CodeableConcept,
      /** When goal status took effect */
      statusDate: primitives.R4.date,
      /** Extension of statusDate element */
      _statusDate: Element,
      /** Reason for current status */
      statusReason: primitives.R4.string,
      /** Extension of statusReason element */
      _statusReason: Element,
      /** Who's responsible for creating Goal? */
      expressedBy: Reference,
      /** Issues addressed by this goal */
      addresses: t.array(Reference),
      /** Comments about the goal */
      note: t.array(Annotation),
      /** What result was achieved regarding the goal? */
      outcomeCode: t.array(CodeableConcept),
      /** Observation that resulted from goal */
      outcomeReference: t.array(Reference)
    })
  ])
);

/**
 * Target outcome for the goal
 */
export interface GoalTarget {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The parameter whose value is being tracked */
  measure?: CodeableConcept;
  /** The target value to be achieved */
  detailQuantity?: Quantity;
  /** The target value to be achieved */
  detailRange?: Range;
  /** The target value to be achieved */
  detailCodeableConcept?: CodeableConcept;
  /** The target value to be achieved */
  detailString?: string;
  /** Extension of detailString element */
  _detailString?: Element;
  /** The target value to be achieved */
  detailBoolean?: boolean;
  /** Extension of detailBoolean element */
  _detailBoolean?: Element;
  /** The target value to be achieved */
  detailInteger?: primitives.R4.integer;
  /** Extension of detailInteger element */
  _detailInteger?: Element;
  /** The target value to be achieved */
  detailRatio?: Ratio;
  /** Reach goal on or before */
  dueDate?: primitives.R4.date;
  /** Extension of dueDate element */
  _dueDate?: Element;
  /** Reach goal on or before */
  dueDuration?: Duration;
}
/**
 * Target outcome for the goal
 */
export const GoalTarget: t.Type<GoalTarget> = t.recursion<GoalTarget>(
  "GoalTarget",
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
        /** The parameter whose value is being tracked */
        measure: CodeableConcept,
        /** The target value to be achieved */
        detailQuantity: Quantity,
        /** The target value to be achieved */
        detailRange: Range,
        /** The target value to be achieved */
        detailCodeableConcept: CodeableConcept,
        /** The target value to be achieved */
        detailString: primitives.R4.string,
        /** Extension of detailString element */
        _detailString: Element,
        /** The target value to be achieved */
        detailBoolean: primitives.R4.boolean,
        /** Extension of detailBoolean element */
        _detailBoolean: Element,
        /** The target value to be achieved */
        detailInteger: primitives.R4.integer,
        /** Extension of detailInteger element */
        _detailInteger: Element,
        /** The target value to be achieved */
        detailRatio: Ratio,
        /** Reach goal on or before */
        dueDate: primitives.R4.date,
        /** Extension of dueDate element */
        _dueDate: Element,
        /** Reach goal on or before */
        dueDuration: Duration
      })
    ])
);
