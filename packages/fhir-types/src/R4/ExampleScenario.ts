/**
 * ExampleScenario Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Example of workflow instance
 */
export interface ExampleScenario {
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
  /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the example scenario */
  identifier?: Identifier[];
  /** Business version of the example scenario */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this example scenario (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
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
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for example scenario (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** The purpose of the example, e.g. to illustrate a scenario */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Another nested workflow */
  workflow?: primitives.R4.canonical[];
  /** Extension of workflow element */
  _workflow?: Element[];
}
/**
 * Example of workflow instance
 */
export const ExampleScenario: t.Type<ExampleScenario> = t.recursion<
  ExampleScenario
>("ExampleScenario", () =>
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
      /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the example scenario */
      identifier: t.array(Identifier),
      /** Business version of the example scenario */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this example scenario (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
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
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for example scenario (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** The purpose of the example, e.g. to illustrate a scenario */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Another nested workflow */
      workflow: t.array(primitives.R4.canonical),
      /** Extension of workflow element */
      _workflow: t.array(Element)
    })
  ])
);

/**
 * Actor participating in the resource
 */
export interface ExampleScenarioActor {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** ID or acronym of the actor */
  actorId: string;
  /** Extension of actorId element */
  _actorId?: Element;
  /** person | entity */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** The name of the actor as shown in the page */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** The description of the actor */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Actor participating in the resource
 */
export const ExampleScenarioActor: t.Type<ExampleScenarioActor> = t.recursion<
  ExampleScenarioActor
>("ExampleScenarioActor", () =>
  t.intersection([
    t.type({
      /** ID or acronym of the actor */
      actorId: primitives.R4.string,
      /** person | entity */
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
      /** Extension of actorId element */
      _actorId: Element,
      /** Extension of type element */
      _type: Element,
      /** The name of the actor as shown in the page */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** The description of the actor */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * Each resource and each version that is present in the workflow
 */
export interface ExampleScenarioInstance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The id of the resource for referencing */
  resourceId: string;
  /** Extension of resourceId element */
  _resourceId?: Element;
  /** The type of the resource */
  resourceType: primitives.R4.code;
  /** Extension of resourceType element */
  _resourceType?: Element;
  /** A short name for the resource instance */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Human-friendly description of the resource instance */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Each resource and each version that is present in the workflow
 */
export const ExampleScenarioInstance: t.Type<
  ExampleScenarioInstance
> = t.recursion<ExampleScenarioInstance>("ExampleScenarioInstance", () =>
  t.intersection([
    t.type({
      /** The id of the resource for referencing */
      resourceId: primitives.R4.string,
      /** The type of the resource */
      resourceType: primitives.R4.code
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
      /** Extension of resourceId element */
      _resourceId: Element,
      /** Extension of resourceType element */
      _resourceType: Element,
      /** A short name for the resource instance */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Human-friendly description of the resource instance */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * A specific version of the resource
 */
export interface ExampleScenarioInstanceVersion {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The identifier of a specific version of a resource */
  versionId: string;
  /** Extension of versionId element */
  _versionId?: Element;
  /** The description of the resource version */
  description: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
}
/**
 * A specific version of the resource
 */
export const ExampleScenarioInstanceVersion: t.Type<
  ExampleScenarioInstanceVersion
> = t.recursion<ExampleScenarioInstanceVersion>(
  "ExampleScenarioInstanceVersion",
  () =>
    t.intersection([
      t.type({
        /** The identifier of a specific version of a resource */
        versionId: primitives.R4.string,
        /** The description of the resource version */
        description: primitives.R4.markdown
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
        /** Extension of versionId element */
        _versionId: Element,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * Resources contained in the instance
 */
export interface ExampleScenarioInstanceContainedInstance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Each resource contained in the instance */
  resourceId: string;
  /** Extension of resourceId element */
  _resourceId?: Element;
  /** A specific version of a resource contained in the instance */
  versionId?: string;
  /** Extension of versionId element */
  _versionId?: Element;
}
/**
 * Resources contained in the instance
 */
export const ExampleScenarioInstanceContainedInstance: t.Type<
  ExampleScenarioInstanceContainedInstance
> = t.recursion<ExampleScenarioInstanceContainedInstance>(
  "ExampleScenarioInstanceContainedInstance",
  () =>
    t.intersection([
      t.type({
        /** Each resource contained in the instance */
        resourceId: primitives.R4.string
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
        /** Extension of resourceId element */
        _resourceId: Element,
        /** A specific version of a resource contained in the instance */
        versionId: primitives.R4.string,
        /** Extension of versionId element */
        _versionId: Element
      })
    ])
);

/**
 * Each major process - a group of operations
 */
export interface ExampleScenarioProcess {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The diagram title of the group of operations */
  title: string;
  /** Extension of title element */
  _title?: Element;
  /** A longer description of the group of operations */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Description of initial status before the process starts */
  preConditions?: primitives.R4.markdown;
  /** Extension of preConditions element */
  _preConditions?: Element;
  /** Description of final status after the process ends */
  postConditions?: primitives.R4.markdown;
  /** Extension of postConditions element */
  _postConditions?: Element;
}
/**
 * Each major process - a group of operations
 */
export const ExampleScenarioProcess: t.Type<
  ExampleScenarioProcess
> = t.recursion<ExampleScenarioProcess>("ExampleScenarioProcess", () =>
  t.intersection([
    t.type({
      /** The diagram title of the group of operations */
      title: primitives.R4.string
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
      /** Extension of title element */
      _title: Element,
      /** A longer description of the group of operations */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** Description of initial status before the process starts */
      preConditions: primitives.R4.markdown,
      /** Extension of preConditions element */
      _preConditions: Element,
      /** Description of final status after the process ends */
      postConditions: primitives.R4.markdown,
      /** Extension of postConditions element */
      _postConditions: Element
    })
  ])
);

/**
 * Each step of the process
 */
export interface ExampleScenarioProcessStep {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Nested process */
  process?: ExampleScenarioProcess[];
  /** If there is a pause in the flow */
  pause?: boolean;
  /** Extension of pause element */
  _pause?: Element;
}
/**
 * Each step of the process
 */
export const ExampleScenarioProcessStep: t.Type<
  ExampleScenarioProcessStep
> = t.recursion<ExampleScenarioProcessStep>("ExampleScenarioProcessStep", () =>
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
      /** Nested process */
      process: t.array(ExampleScenarioProcess),
      /** If there is a pause in the flow */
      pause: primitives.R4.boolean,
      /** Extension of pause element */
      _pause: Element
    })
  ])
);

/**
 * Each interaction or action
 */
export interface ExampleScenarioProcessStepOperation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The sequential number of the interaction */
  number: string;
  /** Extension of number element */
  _number?: Element;
  /** The type of operation - CRUD */
  type?: string;
  /** Extension of type element */
  _type?: Element;
  /** The human-friendly name of the interaction */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Who starts the transaction */
  initiator?: string;
  /** Extension of initiator element */
  _initiator?: Element;
  /** Who receives the transaction */
  receiver?: string;
  /** Extension of receiver element */
  _receiver?: Element;
  /** A comment to be inserted in the diagram */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** Whether the initiator is deactivated right after the transaction */
  initiatorActive?: boolean;
  /** Extension of initiatorActive element */
  _initiatorActive?: Element;
  /** Whether the receiver is deactivated right after the transaction */
  receiverActive?: boolean;
  /** Extension of receiverActive element */
  _receiverActive?: Element;
  /** Each resource instance used by the initiator */
  request?: ExampleScenarioInstanceContainedInstance;
  /** Each resource instance used by the responder */
  response?: ExampleScenarioInstanceContainedInstance;
}
/**
 * Each interaction or action
 */
export const ExampleScenarioProcessStepOperation: t.Type<
  ExampleScenarioProcessStepOperation
> = t.recursion<ExampleScenarioProcessStepOperation>(
  "ExampleScenarioProcessStepOperation",
  () =>
    t.intersection([
      t.type({
        /** The sequential number of the interaction */
        number: primitives.R4.string
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
        /** Extension of number element */
        _number: Element,
        /** The type of operation - CRUD */
        type: primitives.R4.string,
        /** Extension of type element */
        _type: Element,
        /** The human-friendly name of the interaction */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Who starts the transaction */
        initiator: primitives.R4.string,
        /** Extension of initiator element */
        _initiator: Element,
        /** Who receives the transaction */
        receiver: primitives.R4.string,
        /** Extension of receiver element */
        _receiver: Element,
        /** A comment to be inserted in the diagram */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** Whether the initiator is deactivated right after the transaction */
        initiatorActive: primitives.R4.boolean,
        /** Extension of initiatorActive element */
        _initiatorActive: Element,
        /** Whether the receiver is deactivated right after the transaction */
        receiverActive: primitives.R4.boolean,
        /** Extension of receiverActive element */
        _receiverActive: Element,
        /** Each resource instance used by the initiator */
        request: ExampleScenarioInstanceContainedInstance,
        /** Each resource instance used by the responder */
        response: ExampleScenarioInstanceContainedInstance
      })
    ])
);

/**
 * Alternate non-typical step action
 */
export interface ExampleScenarioProcessStepAlternative {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for alternative */
  title: string;
  /** Extension of title element */
  _title?: Element;
  /** A human-readable description of each option */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** What happens in each alternative option */
  step?: ExampleScenarioProcessStep[];
}
/**
 * Alternate non-typical step action
 */
export const ExampleScenarioProcessStepAlternative: t.Type<
  ExampleScenarioProcessStepAlternative
> = t.recursion<ExampleScenarioProcessStepAlternative>(
  "ExampleScenarioProcessStepAlternative",
  () =>
    t.intersection([
      t.type({
        /** Label for alternative */
        title: primitives.R4.string
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
        /** Extension of title element */
        _title: Element,
        /** A human-readable description of each option */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** What happens in each alternative option */
        step: t.array(ExampleScenarioProcessStep)
      })
    ])
);
