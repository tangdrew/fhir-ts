/**
 * MessageDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A resource that defines a type of message that can be exchanged between systems
 */
export interface MessageDefinition {
  /** The type of resource */
  resourceType?: "MessageDefinition";
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
  /** Business Identifier for a given MessageDefinition */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Primary key for the message definition on a given server */
  identifier?: Identifier[];
  /** Business version of the message definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this message definition (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this message definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Takes the place of */
  replaces?: primitives.R4.canonical[];
  /** Extension of replaces element */
  _replaces?: Element[];
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Date last changed */
  date: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the message definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for message definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this message definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** Definition this one is based on */
  base?: primitives.R4.canonical;
  /** Extension of base element */
  _base?: Element;
  /** Protocol/workflow this is part of */
  parent?: primitives.R4.canonical[];
  /** Extension of parent element */
  _parent?: Element[];
  /** Event code  or link to the EventDefinition */
  eventCoding: Coding;
  /** Event code  or link to the EventDefinition */
  eventUri: primitives.R4.uri;
  /** Extension of eventUri element */
  _eventUri?: Element;
  /** consequence | currency | notification */
  category?: primitives.R4.code;
  /** Extension of category element */
  _category?: Element;
  /** always | on-error | never | on-success */
  responseRequired?: primitives.R4.code;
  /** Extension of responseRequired element */
  _responseRequired?: Element;
  /** Canonical reference to a GraphDefinition */
  graph?: primitives.R4.canonical[];
  /** Extension of graph element */
  _graph?: Element[];
}
/**
 * A resource that defines a type of message that can be exchanged between systems
 */
export const MessageDefinition: t.Type<MessageDefinition> = t.recursion<
  MessageDefinition
>("MessageDefinition", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** Event code  or link to the EventDefinition */
      eventCoding: Coding,
      /** Event code  or link to the EventDefinition */
      eventUri: primitives.R4.uri
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("MessageDefinition"),
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
      /** Business Identifier for a given MessageDefinition */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Primary key for the message definition on a given server */
      identifier: t.array(Identifier),
      /** Business version of the message definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this message definition (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this message definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Takes the place of */
      replaces: t.array(primitives.R4.canonical),
      /** Extension of replaces element */
      _replaces: t.array(Element),
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the message definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for message definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this message definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** Definition this one is based on */
      base: primitives.R4.canonical,
      /** Extension of base element */
      _base: Element,
      /** Protocol/workflow this is part of */
      parent: t.array(primitives.R4.canonical),
      /** Extension of parent element */
      _parent: t.array(Element),
      /** Extension of eventUri element */
      _eventUri: Element,
      /** consequence | currency | notification */
      category: primitives.R4.code,
      /** Extension of category element */
      _category: Element,
      /** always | on-error | never | on-success */
      responseRequired: primitives.R4.code,
      /** Extension of responseRequired element */
      _responseRequired: Element,
      /** Canonical reference to a GraphDefinition */
      graph: t.array(primitives.R4.canonical),
      /** Extension of graph element */
      _graph: t.array(Element)
    })
  ])
);

/**
 * Resource(s) that are the subject of the event
 */
export interface MessageDefinitionFocus {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of resource */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Profile that must be adhered to by focus */
  profile?: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
  /** Minimum number of focuses of this type */
  min: primitives.R4.unsignedInt;
  /** Extension of min element */
  _min?: Element;
  /** Maximum number of focuses of this type */
  max?: string;
  /** Extension of max element */
  _max?: Element;
}
/**
 * Resource(s) that are the subject of the event
 */
export const MessageDefinitionFocus: t.Type<
  MessageDefinitionFocus
> = t.recursion<MessageDefinitionFocus>("MessageDefinitionFocus", () =>
  t.intersection([
    t.type({
      /** Type of resource */
      code: primitives.R4.code,
      /** Minimum number of focuses of this type */
      min: primitives.R4.unsignedInt
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
      /** Extension of code element */
      _code: Element,
      /** Profile that must be adhered to by focus */
      profile: primitives.R4.canonical,
      /** Extension of profile element */
      _profile: Element,
      /** Extension of min element */
      _min: Element,
      /** Maximum number of focuses of this type */
      max: primitives.R4.string,
      /** Extension of max element */
      _max: Element
    })
  ])
);

/**
 * Responses to this message
 */
export interface MessageDefinitionAllowedResponse {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to allowed message definition response */
  message: primitives.R4.canonical;
  /** Extension of message element */
  _message?: Element;
  /** When should this response be used */
  situation?: primitives.R4.markdown;
  /** Extension of situation element */
  _situation?: Element;
}
/**
 * Responses to this message
 */
export const MessageDefinitionAllowedResponse: t.Type<
  MessageDefinitionAllowedResponse
> = t.recursion<MessageDefinitionAllowedResponse>(
  "MessageDefinitionAllowedResponse",
  () =>
    t.intersection([
      t.type({
        /** Reference to allowed message definition response */
        message: primitives.R4.canonical
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
        /** Extension of message element */
        _message: Element,
        /** When should this response be used */
        situation: primitives.R4.markdown,
        /** Extension of situation element */
        _situation: Element
      })
    ])
);
