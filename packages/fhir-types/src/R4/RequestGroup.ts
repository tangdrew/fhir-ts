/**
 * RequestGroup Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age, AgeOutputType } from "./Age";
import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Duration, DurationOutputType } from "./Duration";
import { Expression, ExpressionOutputType } from "./Expression";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Relationship to another action
 */
export interface RequestGroupActionRelatedAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What action this is related to */
  actionId: t.TypeOf<primitives.R4.IDType>;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: t.TypeOf<primitives.R4.CodeType>;
  /** Time offset for the relationship */
  offset?: Duration | Range;
}

export interface RequestGroupActionRelatedActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What action this is related to */
  actionId: t.OutputOf<primitives.R4.IDType>;
  /** before-start | before | before-end | concurrent-with-start | concurrent | concurrent-with-end | after-start | after | after-end */
  relationship: t.OutputOf<primitives.R4.CodeType>;
  /** Time offset for the relationship */
  offset?: DurationOutputType | RangeOutputType;
}

export const RequestGroupActionRelatedAction: t.RecursiveType<
  t.Type<
    RequestGroupActionRelatedAction,
    RequestGroupActionRelatedActionOutputType
  >,
  RequestGroupActionRelatedAction,
  RequestGroupActionRelatedActionOutputType
> = t.recursion<
  RequestGroupActionRelatedAction,
  RequestGroupActionRelatedActionOutputType
>("RequestGroupActionRelatedAction", () =>
  t.intersection(
    [
      t.type({
        /** What action this is related to */
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
    "RequestGroupActionRelatedAction"
  )
);

/**
 * Whether or not the action is applicable
 */
export interface RequestGroupActionCondition {
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

export interface RequestGroupActionConditionOutputType {
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

export const RequestGroupActionCondition: t.RecursiveType<
  t.Type<RequestGroupActionCondition, RequestGroupActionConditionOutputType>,
  RequestGroupActionCondition,
  RequestGroupActionConditionOutputType
> = t.recursion<
  RequestGroupActionCondition,
  RequestGroupActionConditionOutputType
>("RequestGroupActionCondition", () =>
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
    "RequestGroupActionCondition"
  )
);

/**
 * Proposed actions, if any
 */
export interface RequestGroupAction {
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
  /** Short description of the action */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
  textEquivalent?: t.TypeOf<primitives.R4.StringType>;
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** Code representing the meaning of the action or sub-actions */
  code?: CodeableConcept[];
  /** Supporting documentation for the intended performer of the action */
  documentation?: RelatedArtifact[];
  /** Whether or not the action is applicable */
  condition?: RequestGroupActionCondition[];
  /** Relationship to another action */
  relatedAction?: RequestGroupActionRelatedAction[];
  /** When the action should take place */
  timing?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Age
    | Period
    | Duration
    | Range
    | Timing;
  /** Who should perform the action */
  participant?: Reference[];
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
  /** The target of the action */
  resource?: Reference;
  /** Sub action */
  action?: RequestGroupAction[];
}

export interface RequestGroupActionOutputType {
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
  /** Short description of the action */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Static text equivalent of the action, used if the dynamic aspects cannot be interpreted by the receiving system */
  textEquivalent?: t.OutputOf<primitives.R4.StringType>;
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** Code representing the meaning of the action or sub-actions */
  code?: CodeableConceptOutputType[];
  /** Supporting documentation for the intended performer of the action */
  documentation?: RelatedArtifactOutputType[];
  /** Whether or not the action is applicable */
  condition?: RequestGroupActionConditionOutputType[];
  /** Relationship to another action */
  relatedAction?: RequestGroupActionRelatedActionOutputType[];
  /** When the action should take place */
  timing?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | AgeOutputType
    | PeriodOutputType
    | DurationOutputType
    | RangeOutputType
    | TimingOutputType;
  /** Who should perform the action */
  participant?: ReferenceOutputType[];
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
  /** The target of the action */
  resource?: ReferenceOutputType;
  /** Sub action */
  action?: RequestGroupActionOutputType[];
}

export const RequestGroupAction: t.RecursiveType<
  t.Type<RequestGroupAction, RequestGroupActionOutputType>,
  RequestGroupAction,
  RequestGroupActionOutputType
> = t.recursion<RequestGroupAction, RequestGroupActionOutputType>(
  "RequestGroupAction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Sub action */
          action: t.array(RequestGroupAction),
          /** single | multiple */
          cardinalityBehavior: primitives.R4.code,
          /** Code representing the meaning of the action or sub-actions */
          code: t.array(CodeableConcept),
          /** Whether or not the action is applicable */
          condition: t.array(RequestGroupActionCondition),
          /** Short description of the action */
          description: primitives.R4.string,
          /** Supporting documentation for the intended performer of the action */
          documentation: t.array(RelatedArtifact),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** visual-group | logical-group | sentence-group */
          groupingBehavior: primitives.R4.code,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Who should perform the action */
          participant: t.array(Reference),
          /** yes | no */
          precheckBehavior: primitives.R4.code,
          /** User-visible prefix for the action (e.g. 1. or A.) */
          prefix: primitives.R4.string,
          /** routine | urgent | asap | stat */
          priority: primitives.R4.code,
          /** Relationship to another action */
          relatedAction: t.array(RequestGroupActionRelatedAction),
          /** must | could | must-unless-documented */
          requiredBehavior: primitives.R4.code,
          /** The target of the action */
          resource: Reference,
          /** any | all | all-or-none | exactly-one | at-most-one | one-or-more */
          selectionBehavior: primitives.R4.code,
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
          /** create | update | remove | fire-event */
          type: CodeableConcept
        })
      ],
      "RequestGroupAction"
    )
);

/**
 * A group of related requests
 */
export interface RequestGroup {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** Fulfills plan, proposal, or order */
  basedOn?: Reference[];
  /** Request(s) replaced by this request */
  replaces?: Reference[];
  /** Composite request this is part of */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** proposal | plan | order */
  intent: t.TypeOf<primitives.R4.CodeType>;
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** What's being requested/ordered */
  code?: CodeableConcept;
  /** Who the request group is about */
  subject?: Reference;
  /** Created as part of */
  encounter?: Reference;
  /** When the request group was authored */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Device or practitioner that authored the request group */
  author?: Reference;
  /** Why the request group is needed */
  reasonCode?: CodeableConcept[];
  /** Why the request group is needed */
  reasonReference?: Reference[];
  /** Additional notes about the response */
  note?: Annotation[];
  /** Proposed actions, if any */
  action?: RequestGroupAction[];
}

export interface RequestGroupOutputType {
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
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** Fulfills plan, proposal, or order */
  basedOn?: ReferenceOutputType[];
  /** Request(s) replaced by this request */
  replaces?: ReferenceOutputType[];
  /** Composite request this is part of */
  groupIdentifier?: IdentifierOutputType;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** proposal | plan | order */
  intent: t.OutputOf<primitives.R4.CodeType>;
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** What's being requested/ordered */
  code?: CodeableConceptOutputType;
  /** Who the request group is about */
  subject?: ReferenceOutputType;
  /** Created as part of */
  encounter?: ReferenceOutputType;
  /** When the request group was authored */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Device or practitioner that authored the request group */
  author?: ReferenceOutputType;
  /** Why the request group is needed */
  reasonCode?: CodeableConceptOutputType[];
  /** Why the request group is needed */
  reasonReference?: ReferenceOutputType[];
  /** Additional notes about the response */
  note?: AnnotationOutputType[];
  /** Proposed actions, if any */
  action?: RequestGroupActionOutputType[];
}

export const RequestGroup: t.RecursiveType<
  t.Type<RequestGroup, RequestGroupOutputType>,
  RequestGroup,
  RequestGroupOutputType
> = t.recursion<RequestGroup, RequestGroupOutputType>("RequestGroup", () =>
  t.intersection(
    [
      t.type({
        /** proposal | plan | order */
        intent: primitives.R4.code,
        /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** Proposed actions, if any */
        action: t.array(RequestGroupAction),
        /** Device or practitioner that authored the request group */
        author: Reference,
        /** When the request group was authored */
        authoredOn: primitives.R4.dateTime,
        /** Fulfills plan, proposal, or order */
        basedOn: t.array(Reference),
        /** What's being requested/ordered */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Created as part of */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Composite request this is part of */
        groupIdentifier: Identifier,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier */
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
        /** Additional notes about the response */
        note: t.array(Annotation),
        /** routine | urgent | asap | stat */
        priority: primitives.R4.code,
        /** Why the request group is needed */
        reasonCode: t.array(CodeableConcept),
        /** Why the request group is needed */
        reasonReference: t.array(Reference),
        /** Request(s) replaced by this request */
        replaces: t.array(Reference),
        /** Who the request group is about */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "RequestGroup"
  )
);
