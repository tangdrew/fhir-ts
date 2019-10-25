/**
 * RequestGroup Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Expression } from "./Expression";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * A group of related requests
 */
export interface RequestGroup {
  /** The type of resource */
  resourceType?: "RequestGroup";
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
  /** Business identifier */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** Fulfills plan, proposal, or order */
  basedOn?: Reference[];
  /** Request(s) replaced by this request */
  replaces?: Reference[];
  /** Composite request this is part of */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** proposal | plan | order */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** What's being requested/ordered */
  code?: CodeableConcept;
  /** Who the request group is about */
  subject?: Reference;
  /** Created as part of */
  encounter?: Reference;
  /** When the request group was authored */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
  /** Device or practitioner that authored the request group */
  author?: Reference;
  /** Why the request group is needed */
  reasonCode?: CodeableConcept[];
  /** Why the request group is needed */
  reasonReference?: Reference[];
  /** Additional notes about the response */
  note?: Annotation[];
}
/**
 * A group of related requests
 */
export const RequestGroup: t.Type<RequestGroup> = t.recursion<RequestGroup>(
  "RequestGroup",
  () =>
    t.intersection([
      t.type({
        /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** proposal | plan | order */
        intent: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("RequestGroup"),
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
        /** Business identifier */
        identifier: t.array(Identifier),
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Extension of instantiatesCanonical element */
        _instantiatesCanonical: t.array(Element),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Extension of instantiatesUri element */
        _instantiatesUri: t.array(Element),
        /** Fulfills plan, proposal, or order */
        basedOn: t.array(Reference),
        /** Request(s) replaced by this request */
        replaces: t.array(Reference),
        /** Composite request this is part of */
        groupIdentifier: Identifier,
        /** Extension of status element */
        _status: Element,
        /** Extension of intent element */
        _intent: Element,
        /** routine | urgent | asap | stat */
        priority: primitives.R4.code,
        /** Extension of priority element */
        _priority: Element,
        /** What's being requested/ordered */
        code: CodeableConcept,
        /** Who the request group is about */
        subject: Reference,
        /** Created as part of */
        encounter: Reference,
        /** When the request group was authored */
        authoredOn: primitives.R4.dateTime,
        /** Extension of authoredOn element */
        _authoredOn: Element,
        /** Device or practitioner that authored the request group */
        author: Reference,
        /** Why the request group is needed */
        reasonCode: t.array(CodeableConcept),
        /** Why the request group is needed */
        reasonReference: t.array(Reference),
        /** Additional notes about the response */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Proposed actions, if any
 */
export interface RequestGroupAction {
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
  /** Short description of the action */
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
  /** Supporting documentation for the intended performer of the action */
  documentation?: RelatedArtifact[];
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
  /** Who should perform the action */
  participant?: Reference[];
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
  /** The target of the action */
  resource?: Reference;
  /** Sub action */
  action?: RequestGroupAction[];
}
/**
 * Proposed actions, if any
 */
export const RequestGroupAction: t.Type<RequestGroupAction> = t.recursion<
  RequestGroupAction
>("RequestGroupAction", () =>
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
      /** Short description of the action */
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
      /** Supporting documentation for the intended performer of the action */
      documentation: t.array(RelatedArtifact),
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
      /** Who should perform the action */
      participant: t.array(Reference),
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
      /** The target of the action */
      resource: Reference,
      /** Sub action */
      action: t.array(RequestGroupAction)
    })
  ])
);

/**
 * Whether or not the action is applicable
 */
export interface RequestGroupActionCondition {
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
export const RequestGroupActionCondition: t.Type<
  RequestGroupActionCondition
> = t.recursion<RequestGroupActionCondition>(
  "RequestGroupActionCondition",
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
export interface RequestGroupActionRelatedAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What action this is related to */
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
export const RequestGroupActionRelatedAction: t.Type<
  RequestGroupActionRelatedAction
> = t.recursion<RequestGroupActionRelatedAction>(
  "RequestGroupActionRelatedAction",
  () =>
    t.intersection([
      t.type({
        /** What action this is related to */
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
