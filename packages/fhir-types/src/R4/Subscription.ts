/**
 * Subscription Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The channel on which to report matches to the criteria
 */
export interface SubscriptionChannel {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** rest-hook | websocket | email | sms | message */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Where the channel points to */
  endpoint?: t.TypeOf<primitives.R4.URLType>;
  /** MIME type to send, or omit for no payload */
  payload?: t.TypeOf<primitives.R4.CodeType>;
  /** Usage depends on the channel type */
  header?: t.TypeOf<primitives.R4.StringType>[];
}

export interface SubscriptionChannelOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** rest-hook | websocket | email | sms | message */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Where the channel points to */
  endpoint?: t.OutputOf<primitives.R4.URLType>;
  /** MIME type to send, or omit for no payload */
  payload?: t.OutputOf<primitives.R4.CodeType>;
  /** Usage depends on the channel type */
  header?: t.OutputOf<primitives.R4.StringType>[];
}

export const SubscriptionChannel: t.RecursiveType<
  t.Type<SubscriptionChannel, SubscriptionChannelOutputType>,
  SubscriptionChannel,
  SubscriptionChannelOutputType
> = t.recursion<SubscriptionChannel, SubscriptionChannelOutputType>(
  "SubscriptionChannel",
  () =>
    t.intersection(
      [
        t.type({
          /** rest-hook | websocket | email | sms | message */
          type: primitives.R4.code
        }),
        t.partial({
          /** Where the channel points to */
          endpoint: primitives.R4.url,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Usage depends on the channel type */
          header: t.array(primitives.R4.string),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** MIME type to send, or omit for no payload */
          payload: primitives.R4.code
        })
      ],
      "SubscriptionChannel"
    )
);

/**
 * Server push subscription criteria
 */
export interface Subscription {
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
  /** requested | active | error | off */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Contact details for source (e.g. troubleshooting) */
  contact?: ContactPoint[];
  /** When to automatically delete the subscription */
  end?: t.TypeOf<primitives.R4.InstantType>;
  /** Description of why this subscription was created */
  reason: t.TypeOf<primitives.R4.StringType>;
  /** Rule for server push */
  criteria: t.TypeOf<primitives.R4.StringType>;
  /** Latest error note */
  error?: t.TypeOf<primitives.R4.StringType>;
  /** The channel on which to report matches to the criteria */
  channel: SubscriptionChannel;
}

export interface SubscriptionOutputType {
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
  /** requested | active | error | off */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Contact details for source (e.g. troubleshooting) */
  contact?: ContactPointOutputType[];
  /** When to automatically delete the subscription */
  end?: t.OutputOf<primitives.R4.InstantType>;
  /** Description of why this subscription was created */
  reason: t.OutputOf<primitives.R4.StringType>;
  /** Rule for server push */
  criteria: t.OutputOf<primitives.R4.StringType>;
  /** Latest error note */
  error?: t.OutputOf<primitives.R4.StringType>;
  /** The channel on which to report matches to the criteria */
  channel: SubscriptionChannelOutputType;
}

export const Subscription: t.RecursiveType<
  t.Type<Subscription, SubscriptionOutputType>,
  Subscription,
  SubscriptionOutputType
> = t.recursion<Subscription, SubscriptionOutputType>("Subscription", () =>
  t.intersection(
    [
      t.type({
        /** The channel on which to report matches to the criteria */
        channel: SubscriptionChannel,
        /** Rule for server push */
        criteria: primitives.R4.string,
        /** Description of why this subscription was created */
        reason: primitives.R4.string,
        /** requested | active | error | off */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contact details for source (e.g. troubleshooting) */
        contact: t.array(ContactPoint),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** When to automatically delete the subscription */
        end: primitives.R4.instant,
        /** Latest error note */
        error: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
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
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Subscription"
  )
);
