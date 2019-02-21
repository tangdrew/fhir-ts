/**
 * MessageDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Resource(s) that are the subject of the event
 */
export interface MessageDefinitionFocus {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of resource */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Profile that must be adhered to by focus */
  profile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Minimum number of focuses of this type */
  min: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Maximum number of focuses of this type */
  max?: t.TypeOf<primitives.R4.StringType>;
}

export interface MessageDefinitionFocusOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of resource */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Profile that must be adhered to by focus */
  profile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Minimum number of focuses of this type */
  min: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Maximum number of focuses of this type */
  max?: t.OutputOf<primitives.R4.StringType>;
}

export const MessageDefinitionFocus: t.RecursiveType<
  t.Type<MessageDefinitionFocus, MessageDefinitionFocusOutputType>,
  MessageDefinitionFocus,
  MessageDefinitionFocusOutputType
> = t.recursion<MessageDefinitionFocus, MessageDefinitionFocusOutputType>(
  "MessageDefinitionFocus",
  () =>
    t.intersection(
      [
        t.type({
          /** Type of resource */
          code: primitives.R4.code,
          /** Minimum number of focuses of this type */
          min: primitives.R4.unsignedInt
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Maximum number of focuses of this type */
          max: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Profile that must be adhered to by focus */
          profile: primitives.R4.canonical
        })
      ],
      "MessageDefinitionFocus"
    )
);

/**
 * Responses to this message
 */
export interface MessageDefinitionAllowedResponse {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to allowed message definition response */
  message: t.TypeOf<primitives.R4.CanonicalType>;
  /** When should this response be used */
  situation?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface MessageDefinitionAllowedResponseOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to allowed message definition response */
  message: t.OutputOf<primitives.R4.CanonicalType>;
  /** When should this response be used */
  situation?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const MessageDefinitionAllowedResponse: t.RecursiveType<
  t.Type<
    MessageDefinitionAllowedResponse,
    MessageDefinitionAllowedResponseOutputType
  >,
  MessageDefinitionAllowedResponse,
  MessageDefinitionAllowedResponseOutputType
> = t.recursion<
  MessageDefinitionAllowedResponse,
  MessageDefinitionAllowedResponseOutputType
>("MessageDefinitionAllowedResponse", () =>
  t.intersection(
    [
      t.type({
        /** Reference to allowed message definition response */
        message: primitives.R4.canonical
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** When should this response be used */
        situation: primitives.R4.markdown
      })
    ],
    "MessageDefinitionAllowedResponse"
  )
);

/**
 * A resource that defines a type of message that can be exchanged between systems
 */
export interface MessageDefinition {
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
  /** Business Identifier for a given MessageDefinition */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Primary key for the message definition on a given server */
  identifier?: Identifier[];
  /** Business version of the message definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this message definition (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this message definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Takes the place of */
  replaces?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the message definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for message definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this message definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Definition this one is based on */
  base?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Protocol/workflow this is part of */
  parent?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Event code  or link to the EventDefinition */
  event: Coding | t.TypeOf<primitives.R4.URIType>;
  /** consequence | currency | notification */
  category?: t.TypeOf<primitives.R4.CodeType>;
  /** Resource(s) that are the subject of the event */
  focus?: MessageDefinitionFocus[];
  /** always | on-error | never | on-success */
  responseRequired?: t.TypeOf<primitives.R4.CodeType>;
  /** Responses to this message */
  allowedResponse?: MessageDefinitionAllowedResponse[];
  /** Canonical reference to a GraphDefinition */
  graph?: t.TypeOf<primitives.R4.CanonicalType>[];
}

export interface MessageDefinitionOutputType {
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
  /** Business Identifier for a given MessageDefinition */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Primary key for the message definition on a given server */
  identifier?: IdentifierOutputType[];
  /** Business version of the message definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this message definition (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this message definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Takes the place of */
  replaces?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the message definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for message definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this message definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Definition this one is based on */
  base?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Protocol/workflow this is part of */
  parent?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Event code  or link to the EventDefinition */
  event: CodingOutputType | t.OutputOf<primitives.R4.URIType>;
  /** consequence | currency | notification */
  category?: t.OutputOf<primitives.R4.CodeType>;
  /** Resource(s) that are the subject of the event */
  focus?: MessageDefinitionFocusOutputType[];
  /** always | on-error | never | on-success */
  responseRequired?: t.OutputOf<primitives.R4.CodeType>;
  /** Responses to this message */
  allowedResponse?: MessageDefinitionAllowedResponseOutputType[];
  /** Canonical reference to a GraphDefinition */
  graph?: t.OutputOf<primitives.R4.CanonicalType>[];
}

export const MessageDefinition: t.RecursiveType<
  t.Type<MessageDefinition, MessageDefinitionOutputType>,
  MessageDefinition,
  MessageDefinitionOutputType
> = t.recursion<MessageDefinition, MessageDefinitionOutputType>(
  "MessageDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Event code  or link to the EventDefinition */
          event: t.union([Coding, primitives.R4.uri]),
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Responses to this message */
          allowedResponse: t.array(MessageDefinitionAllowedResponse),
          /** Definition this one is based on */
          base: primitives.R4.canonical,
          /** consequence | currency | notification */
          category: primitives.R4.code,
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Natural language description of the message definition */
          description: primitives.R4.markdown,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Resource(s) that are the subject of the event */
          focus: t.array(MessageDefinitionFocus),
          /** Canonical reference to a GraphDefinition */
          graph: t.array(primitives.R4.canonical),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Primary key for the message definition on a given server */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for message definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this message definition (computer friendly) */
          name: primitives.R4.string,
          /** Protocol/workflow this is part of */
          parent: t.array(primitives.R4.canonical),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this message definition is defined */
          purpose: primitives.R4.markdown,
          /** Takes the place of */
          replaces: t.array(primitives.R4.canonical),
          /** always | on-error | never | on-success */
          responseRequired: primitives.R4.code,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this message definition (human friendly) */
          title: primitives.R4.string,
          /** Business Identifier for a given MessageDefinition */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the message definition */
          version: primitives.R4.string
        })
      ],
      "MessageDefinition"
    )
);
