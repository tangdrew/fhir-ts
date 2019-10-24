/**
 * Subscription Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";

/**
 * Server push subscription criteria
 */
export interface Subscription {
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
  /** requested | active | error | off */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Contact details for source (e.g. troubleshooting) */
  contact?: ContactPoint[];
  /** When to automatically delete the subscription */
  end?: primitives.R4.instant;
  /** Extension of end element */
  _end?: Element;
  /** Description of why this subscription was created */
  reason: string;
  /** Extension of reason element */
  _reason?: Element;
  /** Rule for server push */
  criteria: string;
  /** Extension of criteria element */
  _criteria?: Element;
  /** Latest error note */
  error?: string;
  /** Extension of error element */
  _error?: Element;
}
/**
 * Server push subscription criteria
 */
export const Subscription: t.Type<Subscription> = t.recursion<Subscription>(
  "Subscription",
  () =>
    t.intersection([
      t.type({
        /** requested | active | error | off */
        status: primitives.R4.code,
        /** Description of why this subscription was created */
        reason: primitives.R4.string,
        /** Rule for server push */
        criteria: primitives.R4.string
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
        /** Extension of status element */
        _status: Element,
        /** Contact details for source (e.g. troubleshooting) */
        contact: t.array(ContactPoint),
        /** When to automatically delete the subscription */
        end: primitives.R4.instant,
        /** Extension of end element */
        _end: Element,
        /** Extension of reason element */
        _reason: Element,
        /** Extension of criteria element */
        _criteria: Element,
        /** Latest error note */
        error: primitives.R4.string,
        /** Extension of error element */
        _error: Element
      })
    ])
);

/**
 * The channel on which to report matches to the criteria
 */
export interface SubscriptionChannel {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** rest-hook | websocket | email | sms | message */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Where the channel points to */
  endpoint?: primitives.R4.url;
  /** Extension of endpoint element */
  _endpoint?: Element;
  /** MIME type to send, or omit for no payload */
  payload?: primitives.R4.code;
  /** Extension of payload element */
  _payload?: Element;
  /** Usage depends on the channel type */
  header?: string[];
  /** Extension of header element */
  _header?: Element[];
}
/**
 * The channel on which to report matches to the criteria
 */
export const SubscriptionChannel: t.Type<SubscriptionChannel> = t.recursion<
  SubscriptionChannel
>("SubscriptionChannel", () =>
  t.intersection([
    t.type({
      /** rest-hook | websocket | email | sms | message */
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
      /** Extension of type element */
      _type: Element,
      /** Where the channel points to */
      endpoint: primitives.R4.url,
      /** Extension of endpoint element */
      _endpoint: Element,
      /** MIME type to send, or omit for no payload */
      payload: primitives.R4.code,
      /** Extension of payload element */
      _payload: Element,
      /** Usage depends on the channel type */
      header: t.array(primitives.R4.string),
      /** Extension of header element */
      _header: t.array(Element)
    })
  ])
);
