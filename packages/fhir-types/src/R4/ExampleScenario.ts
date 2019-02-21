/**
 * ExampleScenario Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Each interaction or action
 */
export interface ExampleScenarioProcessStepOperation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The sequential number of the interaction */
  number: t.TypeOf<primitives.R4.StringType>;
  /** The type of operation - CRUD */
  type?: t.TypeOf<primitives.R4.StringType>;
  /** The human-friendly name of the interaction */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Who starts the transaction */
  initiator?: t.TypeOf<primitives.R4.StringType>;
  /** Who receives the transaction */
  receiver?: t.TypeOf<primitives.R4.StringType>;
  /** A comment to be inserted in the diagram */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Whether the initiator is deactivated right after the transaction */
  initiatorActive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Whether the receiver is deactivated right after the transaction */
  receiverActive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Each resource instance used by the initiator */
  request?: ExampleScenarioInstanceContainedInstance;
  /** Each resource instance used by the responder */
  response?: ExampleScenarioInstanceContainedInstance;
}

export interface ExampleScenarioProcessStepOperationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The sequential number of the interaction */
  number: t.OutputOf<primitives.R4.StringType>;
  /** The type of operation - CRUD */
  type?: t.OutputOf<primitives.R4.StringType>;
  /** The human-friendly name of the interaction */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Who starts the transaction */
  initiator?: t.OutputOf<primitives.R4.StringType>;
  /** Who receives the transaction */
  receiver?: t.OutputOf<primitives.R4.StringType>;
  /** A comment to be inserted in the diagram */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Whether the initiator is deactivated right after the transaction */
  initiatorActive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Whether the receiver is deactivated right after the transaction */
  receiverActive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Each resource instance used by the initiator */
  request?: ExampleScenarioInstanceContainedInstanceOutputType;
  /** Each resource instance used by the responder */
  response?: ExampleScenarioInstanceContainedInstanceOutputType;
}

export const ExampleScenarioProcessStepOperation: t.RecursiveType<
  t.Type<
    ExampleScenarioProcessStepOperation,
    ExampleScenarioProcessStepOperationOutputType
  >,
  ExampleScenarioProcessStepOperation,
  ExampleScenarioProcessStepOperationOutputType
> = t.recursion<
  ExampleScenarioProcessStepOperation,
  ExampleScenarioProcessStepOperationOutputType
>("ExampleScenarioProcessStepOperation", () =>
  t.intersection(
    [
      t.type({
        /** The sequential number of the interaction */
        number: primitives.R4.string
      }),
      t.partial({
        /** A comment to be inserted in the diagram */
        description: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Who starts the transaction */
        initiator: primitives.R4.string,
        /** Whether the initiator is deactivated right after the transaction */
        initiatorActive: primitives.R4.boolean,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The human-friendly name of the interaction */
        name: primitives.R4.string,
        /** Who receives the transaction */
        receiver: primitives.R4.string,
        /** Whether the receiver is deactivated right after the transaction */
        receiverActive: primitives.R4.boolean,
        /** Each resource instance used by the initiator */
        request: ExampleScenarioInstanceContainedInstance,
        /** Each resource instance used by the responder */
        response: ExampleScenarioInstanceContainedInstance,
        /** The type of operation - CRUD */
        type: primitives.R4.string
      })
    ],
    "ExampleScenarioProcessStepOperation"
  )
);

/**
 * Alternate non-typical step action
 */
export interface ExampleScenarioProcessStepAlternative {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for alternative */
  title: t.TypeOf<primitives.R4.StringType>;
  /** A human-readable description of each option */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** What happens in each alternative option */
  step?: ExampleScenarioProcessStep[];
}

export interface ExampleScenarioProcessStepAlternativeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Label for alternative */
  title: t.OutputOf<primitives.R4.StringType>;
  /** A human-readable description of each option */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** What happens in each alternative option */
  step?: ExampleScenarioProcessStepOutputType[];
}

export const ExampleScenarioProcessStepAlternative: t.RecursiveType<
  t.Type<
    ExampleScenarioProcessStepAlternative,
    ExampleScenarioProcessStepAlternativeOutputType
  >,
  ExampleScenarioProcessStepAlternative,
  ExampleScenarioProcessStepAlternativeOutputType
> = t.recursion<
  ExampleScenarioProcessStepAlternative,
  ExampleScenarioProcessStepAlternativeOutputType
>("ExampleScenarioProcessStepAlternative", () =>
  t.intersection(
    [
      t.type({
        /** Label for alternative */
        title: primitives.R4.string
      }),
      t.partial({
        /** A human-readable description of each option */
        description: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** What happens in each alternative option */
        step: t.array(ExampleScenarioProcessStep)
      })
    ],
    "ExampleScenarioProcessStepAlternative"
  )
);

/**
 * Each step of the process
 */
export interface ExampleScenarioProcessStep {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Nested process */
  process?: ExampleScenarioProcess[];
  /** If there is a pause in the flow */
  pause?: t.TypeOf<primitives.R4.BooleanType>;
  /** Each interaction or action */
  operation?: ExampleScenarioProcessStepOperation;
  /** Alternate non-typical step action */
  alternative?: ExampleScenarioProcessStepAlternative[];
}

export interface ExampleScenarioProcessStepOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Nested process */
  process?: ExampleScenarioProcessOutputType[];
  /** If there is a pause in the flow */
  pause?: t.OutputOf<primitives.R4.BooleanType>;
  /** Each interaction or action */
  operation?: ExampleScenarioProcessStepOperationOutputType;
  /** Alternate non-typical step action */
  alternative?: ExampleScenarioProcessStepAlternativeOutputType[];
}

export const ExampleScenarioProcessStep: t.RecursiveType<
  t.Type<ExampleScenarioProcessStep, ExampleScenarioProcessStepOutputType>,
  ExampleScenarioProcessStep,
  ExampleScenarioProcessStepOutputType
> = t.recursion<
  ExampleScenarioProcessStep,
  ExampleScenarioProcessStepOutputType
>("ExampleScenarioProcessStep", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Alternate non-typical step action */
        alternative: t.array(ExampleScenarioProcessStepAlternative),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Each interaction or action */
        operation: ExampleScenarioProcessStepOperation,
        /** If there is a pause in the flow */
        pause: primitives.R4.boolean,
        /** Nested process */
        process: t.array(ExampleScenarioProcess)
      })
    ],
    "ExampleScenarioProcessStep"
  )
);

/**
 * Each major process - a group of operations
 */
export interface ExampleScenarioProcess {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The diagram title of the group of operations */
  title: t.TypeOf<primitives.R4.StringType>;
  /** A longer description of the group of operations */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Description of initial status before the process starts */
  preConditions?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Description of final status after the process ends */
  postConditions?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Each step of the process */
  step?: ExampleScenarioProcessStep[];
}

export interface ExampleScenarioProcessOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The diagram title of the group of operations */
  title: t.OutputOf<primitives.R4.StringType>;
  /** A longer description of the group of operations */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Description of initial status before the process starts */
  preConditions?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Description of final status after the process ends */
  postConditions?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Each step of the process */
  step?: ExampleScenarioProcessStepOutputType[];
}

export const ExampleScenarioProcess: t.RecursiveType<
  t.Type<ExampleScenarioProcess, ExampleScenarioProcessOutputType>,
  ExampleScenarioProcess,
  ExampleScenarioProcessOutputType
> = t.recursion<ExampleScenarioProcess, ExampleScenarioProcessOutputType>(
  "ExampleScenarioProcess",
  () =>
    t.intersection(
      [
        t.type({
          /** The diagram title of the group of operations */
          title: primitives.R4.string
        }),
        t.partial({
          /** A longer description of the group of operations */
          description: primitives.R4.markdown,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Description of final status after the process ends */
          postConditions: primitives.R4.markdown,
          /** Description of initial status before the process starts */
          preConditions: primitives.R4.markdown,
          /** Each step of the process */
          step: t.array(ExampleScenarioProcessStep)
        })
      ],
      "ExampleScenarioProcess"
    )
);

/**
 * A specific version of the resource
 */
export interface ExampleScenarioInstanceVersion {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The identifier of a specific version of a resource */
  versionId: t.TypeOf<primitives.R4.StringType>;
  /** The description of the resource version */
  description: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface ExampleScenarioInstanceVersionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The identifier of a specific version of a resource */
  versionId: t.OutputOf<primitives.R4.StringType>;
  /** The description of the resource version */
  description: t.OutputOf<primitives.R4.MarkdownType>;
}

export const ExampleScenarioInstanceVersion: t.RecursiveType<
  t.Type<
    ExampleScenarioInstanceVersion,
    ExampleScenarioInstanceVersionOutputType
  >,
  ExampleScenarioInstanceVersion,
  ExampleScenarioInstanceVersionOutputType
> = t.recursion<
  ExampleScenarioInstanceVersion,
  ExampleScenarioInstanceVersionOutputType
>("ExampleScenarioInstanceVersion", () =>
  t.intersection(
    [
      t.type({
        /** The description of the resource version */
        description: primitives.R4.markdown,
        /** The identifier of a specific version of a resource */
        versionId: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ExampleScenarioInstanceVersion"
  )
);

/**
 * Resources contained in the instance
 */
export interface ExampleScenarioInstanceContainedInstance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Each resource contained in the instance */
  resourceId: t.TypeOf<primitives.R4.StringType>;
  /** A specific version of a resource contained in the instance */
  versionId?: t.TypeOf<primitives.R4.StringType>;
}

export interface ExampleScenarioInstanceContainedInstanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Each resource contained in the instance */
  resourceId: t.OutputOf<primitives.R4.StringType>;
  /** A specific version of a resource contained in the instance */
  versionId?: t.OutputOf<primitives.R4.StringType>;
}

export const ExampleScenarioInstanceContainedInstance: t.RecursiveType<
  t.Type<
    ExampleScenarioInstanceContainedInstance,
    ExampleScenarioInstanceContainedInstanceOutputType
  >,
  ExampleScenarioInstanceContainedInstance,
  ExampleScenarioInstanceContainedInstanceOutputType
> = t.recursion<
  ExampleScenarioInstanceContainedInstance,
  ExampleScenarioInstanceContainedInstanceOutputType
>("ExampleScenarioInstanceContainedInstance", () =>
  t.intersection(
    [
      t.type({
        /** Each resource contained in the instance */
        resourceId: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** A specific version of a resource contained in the instance */
        versionId: primitives.R4.string
      })
    ],
    "ExampleScenarioInstanceContainedInstance"
  )
);

/**
 * Each resource and each version that is present in the workflow
 */
export interface ExampleScenarioInstance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The id of the resource for referencing */
  resourceId: t.TypeOf<primitives.R4.StringType>;
  /** The type of the resource */
  resourceType: t.TypeOf<primitives.R4.CodeType>;
  /** A short name for the resource instance */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Human-friendly description of the resource instance */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** A specific version of the resource */
  version?: ExampleScenarioInstanceVersion[];
  /** Resources contained in the instance */
  containedInstance?: ExampleScenarioInstanceContainedInstance[];
}

export interface ExampleScenarioInstanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The id of the resource for referencing */
  resourceId: t.OutputOf<primitives.R4.StringType>;
  /** The type of the resource */
  resourceType: t.OutputOf<primitives.R4.CodeType>;
  /** A short name for the resource instance */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Human-friendly description of the resource instance */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** A specific version of the resource */
  version?: ExampleScenarioInstanceVersionOutputType[];
  /** Resources contained in the instance */
  containedInstance?: ExampleScenarioInstanceContainedInstanceOutputType[];
}

export const ExampleScenarioInstance: t.RecursiveType<
  t.Type<ExampleScenarioInstance, ExampleScenarioInstanceOutputType>,
  ExampleScenarioInstance,
  ExampleScenarioInstanceOutputType
> = t.recursion<ExampleScenarioInstance, ExampleScenarioInstanceOutputType>(
  "ExampleScenarioInstance",
  () =>
    t.intersection(
      [
        t.type({
          /** The id of the resource for referencing */
          resourceId: primitives.R4.string,
          /** The type of the resource */
          resourceType: primitives.R4.code
        }),
        t.partial({
          /** Resources contained in the instance */
          containedInstance: t.array(ExampleScenarioInstanceContainedInstance),
          /** Human-friendly description of the resource instance */
          description: primitives.R4.markdown,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** A short name for the resource instance */
          name: primitives.R4.string,
          /** A specific version of the resource */
          version: t.array(ExampleScenarioInstanceVersion)
        })
      ],
      "ExampleScenarioInstance"
    )
);

/**
 * Actor participating in the resource
 */
export interface ExampleScenarioActor {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** ID or acronym of the actor */
  actorId: t.TypeOf<primitives.R4.StringType>;
  /** person | entity */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** The name of the actor as shown in the page */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** The description of the actor */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface ExampleScenarioActorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** ID or acronym of the actor */
  actorId: t.OutputOf<primitives.R4.StringType>;
  /** person | entity */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** The name of the actor as shown in the page */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** The description of the actor */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const ExampleScenarioActor: t.RecursiveType<
  t.Type<ExampleScenarioActor, ExampleScenarioActorOutputType>,
  ExampleScenarioActor,
  ExampleScenarioActorOutputType
> = t.recursion<ExampleScenarioActor, ExampleScenarioActorOutputType>(
  "ExampleScenarioActor",
  () =>
    t.intersection(
      [
        t.type({
          /** ID or acronym of the actor */
          actorId: primitives.R4.string,
          /** person | entity */
          type: primitives.R4.code
        }),
        t.partial({
          /** The description of the actor */
          description: primitives.R4.markdown,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The name of the actor as shown in the page */
          name: primitives.R4.string
        })
      ],
      "ExampleScenarioActor"
    )
);

/**
 * Example of workflow instance
 */
export interface ExampleScenario {
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
  /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the example scenario */
  identifier?: Identifier[];
  /** Business version of the example scenario */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this example scenario (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for example scenario (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The purpose of the example, e.g. to illustrate a scenario */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Actor participating in the resource */
  actor?: ExampleScenarioActor[];
  /** Each resource and each version that is present in the workflow */
  instance?: ExampleScenarioInstance[];
  /** Each major process - a group of operations */
  process?: ExampleScenarioProcess[];
  /** Another nested workflow */
  workflow?: t.TypeOf<primitives.R4.CanonicalType>[];
}

export interface ExampleScenarioOutputType {
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
  /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the example scenario */
  identifier?: IdentifierOutputType[];
  /** Business version of the example scenario */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this example scenario (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for example scenario (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The purpose of the example, e.g. to illustrate a scenario */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Actor participating in the resource */
  actor?: ExampleScenarioActorOutputType[];
  /** Each resource and each version that is present in the workflow */
  instance?: ExampleScenarioInstanceOutputType[];
  /** Each major process - a group of operations */
  process?: ExampleScenarioProcessOutputType[];
  /** Another nested workflow */
  workflow?: t.OutputOf<primitives.R4.CanonicalType>[];
}

export const ExampleScenario: t.RecursiveType<
  t.Type<ExampleScenario, ExampleScenarioOutputType>,
  ExampleScenario,
  ExampleScenarioOutputType
> = t.recursion<ExampleScenario, ExampleScenarioOutputType>(
  "ExampleScenario",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Actor participating in the resource */
          actor: t.array(ExampleScenarioActor),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the example scenario */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Each resource and each version that is present in the workflow */
          instance: t.array(ExampleScenarioInstance),
          /** Intended jurisdiction for example scenario (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this example scenario (computer friendly) */
          name: primitives.R4.string,
          /** Each major process - a group of operations */
          process: t.array(ExampleScenarioProcess),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** The purpose of the example, e.g. to illustrate a scenario */
          purpose: primitives.R4.markdown,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the example scenario */
          version: primitives.R4.string,
          /** Another nested workflow */
          workflow: t.array(primitives.R4.canonical)
        })
      ],
      "ExampleScenario"
    )
);
