/**
 * MessageHeader Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Message source application
 */
export interface MessageHeaderSource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of system */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name of software running the system */
  software?: t.TypeOf<primitives.R4.StringType>;
  /** Version of software running */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Human contact for problems */
  contact?: ContactPoint;
  /** Actual message source address or id */
  endpoint: t.TypeOf<primitives.R4.URLType>;
}

export interface MessageHeaderSourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of system */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name of software running the system */
  software?: t.OutputOf<primitives.R4.StringType>;
  /** Version of software running */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Human contact for problems */
  contact?: ContactPointOutputType;
  /** Actual message source address or id */
  endpoint: t.OutputOf<primitives.R4.URLType>;
}

export const MessageHeaderSource: t.RecursiveType<
  t.Type<MessageHeaderSource, MessageHeaderSourceOutputType>,
  MessageHeaderSource,
  MessageHeaderSourceOutputType
> = t.recursion<MessageHeaderSource, MessageHeaderSourceOutputType>(
  "MessageHeaderSource",
  () =>
    t.intersection(
      [
        t.type({
          /** Actual message source address or id */
          endpoint: primitives.R4.url
        }),
        t.partial({
          /** Human contact for problems */
          contact: ContactPoint,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Name of system */
          name: primitives.R4.string,
          /** Name of software running the system */
          software: primitives.R4.string,
          /** Version of software running */
          version: primitives.R4.string
        })
      ],
      "MessageHeaderSource"
    )
);

/**
 * If this is a reply to prior message
 */
export interface MessageHeaderResponse {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Id of original message */
  identifier: t.TypeOf<primitives.R4.IDType>;
  /** ok | transient-error | fatal-error */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Specific list of hints/warnings/errors */
  details?: Reference;
}

export interface MessageHeaderResponseOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Id of original message */
  identifier: t.OutputOf<primitives.R4.IDType>;
  /** ok | transient-error | fatal-error */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Specific list of hints/warnings/errors */
  details?: ReferenceOutputType;
}

export const MessageHeaderResponse: t.RecursiveType<
  t.Type<MessageHeaderResponse, MessageHeaderResponseOutputType>,
  MessageHeaderResponse,
  MessageHeaderResponseOutputType
> = t.recursion<MessageHeaderResponse, MessageHeaderResponseOutputType>(
  "MessageHeaderResponse",
  () =>
    t.intersection(
      [
        t.type({
          /** ok | transient-error | fatal-error */
          code: primitives.R4.code,
          /** Id of original message */
          identifier: primitives.R4.id
        }),
        t.partial({
          /** Specific list of hints/warnings/errors */
          details: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "MessageHeaderResponse"
    )
);

/**
 * Message destination application(s)
 */
export interface MessageHeaderDestination {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of system */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Particular delivery destination within the destination */
  target?: Reference;
  /** Actual destination address or id */
  endpoint: t.TypeOf<primitives.R4.URLType>;
  /** Intended "real-world" recipient for the data */
  receiver?: Reference;
}

export interface MessageHeaderDestinationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of system */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Particular delivery destination within the destination */
  target?: ReferenceOutputType;
  /** Actual destination address or id */
  endpoint: t.OutputOf<primitives.R4.URLType>;
  /** Intended "real-world" recipient for the data */
  receiver?: ReferenceOutputType;
}

export const MessageHeaderDestination: t.RecursiveType<
  t.Type<MessageHeaderDestination, MessageHeaderDestinationOutputType>,
  MessageHeaderDestination,
  MessageHeaderDestinationOutputType
> = t.recursion<MessageHeaderDestination, MessageHeaderDestinationOutputType>(
  "MessageHeaderDestination",
  () =>
    t.intersection(
      [
        t.type({
          /** Actual destination address or id */
          endpoint: primitives.R4.url
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Name of system */
          name: primitives.R4.string,
          /** Intended "real-world" recipient for the data */
          receiver: Reference,
          /** Particular delivery destination within the destination */
          target: Reference
        })
      ],
      "MessageHeaderDestination"
    )
);

/**
 * A resource that describes a message that is exchanged between systems
 */
export interface MessageHeader {
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
  /** Code for the event this message represents or link to event definition */
  event: Coding | t.TypeOf<primitives.R4.URIType>;
  /** Message destination application(s) */
  destination?: MessageHeaderDestination[];
  /** Real world sender of the message */
  sender?: Reference;
  /** The source of the data entry */
  enterer?: Reference;
  /** The source of the decision */
  author?: Reference;
  /** Message source application */
  source: MessageHeaderSource;
  /** Final responsibility for event */
  responsible?: Reference;
  /** Cause of event */
  reason?: CodeableConcept;
  /** If this is a reply to prior message */
  response?: MessageHeaderResponse;
  /** The actual content of the message */
  focus?: Reference[];
  /** Link to the definition for this message */
  definition?: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface MessageHeaderOutputType {
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
  /** Code for the event this message represents or link to event definition */
  event: CodingOutputType | t.OutputOf<primitives.R4.URIType>;
  /** Message destination application(s) */
  destination?: MessageHeaderDestinationOutputType[];
  /** Real world sender of the message */
  sender?: ReferenceOutputType;
  /** The source of the data entry */
  enterer?: ReferenceOutputType;
  /** The source of the decision */
  author?: ReferenceOutputType;
  /** Message source application */
  source: MessageHeaderSourceOutputType;
  /** Final responsibility for event */
  responsible?: ReferenceOutputType;
  /** Cause of event */
  reason?: CodeableConceptOutputType;
  /** If this is a reply to prior message */
  response?: MessageHeaderResponseOutputType;
  /** The actual content of the message */
  focus?: ReferenceOutputType[];
  /** Link to the definition for this message */
  definition?: t.OutputOf<primitives.R4.CanonicalType>;
}

export const MessageHeader: t.RecursiveType<
  t.Type<MessageHeader, MessageHeaderOutputType>,
  MessageHeader,
  MessageHeaderOutputType
> = t.recursion<MessageHeader, MessageHeaderOutputType>("MessageHeader", () =>
  t.intersection(
    [
      t.type({
        /** Code for the event this message represents or link to event definition */
        event: t.union([Coding, primitives.R4.uri]),
        /** Message source application */
        source: MessageHeaderSource
      }),
      t.partial({
        /** The source of the decision */
        author: Reference,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Link to the definition for this message */
        definition: primitives.R4.canonical,
        /** Message destination application(s) */
        destination: t.array(MessageHeaderDestination),
        /** The source of the data entry */
        enterer: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The actual content of the message */
        focus: t.array(Reference),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Cause of event */
        reason: CodeableConcept,
        /** If this is a reply to prior message */
        response: MessageHeaderResponse,
        /** Final responsibility for event */
        responsible: Reference,
        /** Real world sender of the message */
        sender: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "MessageHeader"
  )
);
