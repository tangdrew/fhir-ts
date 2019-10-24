/**
 * MessageHeader Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A resource that describes a message that is exchanged between systems
 */
export interface MessageHeader {
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
  /** Code for the event this message represents or link to event definition */
  eventCoding: Coding;
  /** Code for the event this message represents or link to event definition */
  eventUri: primitives.R4.uri;
  /** Extension of eventUri element */
  _eventUri?: Element;
  /** Real world sender of the message */
  sender?: Reference;
  /** The source of the data entry */
  enterer?: Reference;
  /** The source of the decision */
  author?: Reference;
  /** Final responsibility for event */
  responsible?: Reference;
  /** Cause of event */
  reason?: CodeableConcept;
  /** The actual content of the message */
  focus?: Reference[];
  /** Link to the definition for this message */
  definition?: primitives.R4.canonical;
  /** Extension of definition element */
  _definition?: Element;
}
/**
 * A resource that describes a message that is exchanged between systems
 */
export const MessageHeader: t.Type<MessageHeader> = t.recursion<MessageHeader>(
  "MessageHeader",
  () =>
    t.intersection([
      t.type({
        /** Code for the event this message represents or link to event definition */
        eventCoding: Coding,
        /** Code for the event this message represents or link to event definition */
        eventUri: primitives.R4.uri
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
        /** Extension of eventUri element */
        _eventUri: Element,
        /** Real world sender of the message */
        sender: Reference,
        /** The source of the data entry */
        enterer: Reference,
        /** The source of the decision */
        author: Reference,
        /** Final responsibility for event */
        responsible: Reference,
        /** Cause of event */
        reason: CodeableConcept,
        /** The actual content of the message */
        focus: t.array(Reference),
        /** Link to the definition for this message */
        definition: primitives.R4.canonical,
        /** Extension of definition element */
        _definition: Element
      })
    ])
);

/**
 * Message destination application(s)
 */
export interface MessageHeaderDestination {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of system */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Particular delivery destination within the destination */
  target?: Reference;
  /** Actual destination address or id */
  endpoint: primitives.R4.url;
  /** Extension of endpoint element */
  _endpoint?: Element;
  /** Intended "real-world" recipient for the data */
  receiver?: Reference;
}
/**
 * Message destination application(s)
 */
export const MessageHeaderDestination: t.Type<
  MessageHeaderDestination
> = t.recursion<MessageHeaderDestination>("MessageHeaderDestination", () =>
  t.intersection([
    t.type({
      /** Actual destination address or id */
      endpoint: primitives.R4.url
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
      /** Name of system */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Particular delivery destination within the destination */
      target: Reference,
      /** Extension of endpoint element */
      _endpoint: Element,
      /** Intended "real-world" recipient for the data */
      receiver: Reference
    })
  ])
);

/**
 * Message source application
 */
export interface MessageHeaderSource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of system */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name of software running the system */
  software?: string;
  /** Extension of software element */
  _software?: Element;
  /** Version of software running */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Human contact for problems */
  contact?: ContactPoint;
  /** Actual message source address or id */
  endpoint: primitives.R4.url;
  /** Extension of endpoint element */
  _endpoint?: Element;
}
/**
 * Message source application
 */
export const MessageHeaderSource: t.Type<MessageHeaderSource> = t.recursion<
  MessageHeaderSource
>("MessageHeaderSource", () =>
  t.intersection([
    t.type({
      /** Actual message source address or id */
      endpoint: primitives.R4.url
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
      /** Name of system */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name of software running the system */
      software: primitives.R4.string,
      /** Extension of software element */
      _software: Element,
      /** Version of software running */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Human contact for problems */
      contact: ContactPoint,
      /** Extension of endpoint element */
      _endpoint: Element
    })
  ])
);

/**
 * If this is a reply to prior message
 */
export interface MessageHeaderResponse {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Id of original message */
  identifier: primitives.R4.id;
  /** Extension of identifier element */
  _identifier?: Element;
  /** ok | transient-error | fatal-error */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Specific list of hints/warnings/errors */
  details?: Reference;
}
/**
 * If this is a reply to prior message
 */
export const MessageHeaderResponse: t.Type<MessageHeaderResponse> = t.recursion<
  MessageHeaderResponse
>("MessageHeaderResponse", () =>
  t.intersection([
    t.type({
      /** Id of original message */
      identifier: primitives.R4.id,
      /** ok | transient-error | fatal-error */
      code: primitives.R4.code
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
      /** Extension of identifier element */
      _identifier: Element,
      /** Extension of code element */
      _code: Element,
      /** Specific list of hints/warnings/errors */
      details: Reference
    })
  ])
);
