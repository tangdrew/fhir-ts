/**
 * AuditEvent Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Event record kept for security purposes
 */
export interface AuditEvent {
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
  /** Type/identifier of event */
  type: Coding;
  /** More specific type/id for the event */
  subtype?: Coding[];
  /** Type of action performed during the event */
  action?: primitives.R4.code;
  /** Extension of action element */
  _action?: Element;
  /** When the activity occurred */
  period?: Period;
  /** Time when the event was recorded */
  recorded: primitives.R4.instant;
  /** Extension of recorded element */
  _recorded?: Element;
  /** Whether the event succeeded or failed */
  outcome?: primitives.R4.code;
  /** Extension of outcome element */
  _outcome?: Element;
  /** Description of the event outcome */
  outcomeDesc?: string;
  /** Extension of outcomeDesc element */
  _outcomeDesc?: Element;
  /** The purposeOfUse of the event */
  purposeOfEvent?: CodeableConcept[];
}
/**
 * Event record kept for security purposes
 */
export const AuditEvent: t.Type<AuditEvent> = t.recursion<AuditEvent>(
  "AuditEvent",
  () =>
    t.intersection([
      t.type({
        /** Type/identifier of event */
        type: Coding,
        /** Time when the event was recorded */
        recorded: primitives.R4.instant
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
        /** More specific type/id for the event */
        subtype: t.array(Coding),
        /** Type of action performed during the event */
        action: primitives.R4.code,
        /** Extension of action element */
        _action: Element,
        /** When the activity occurred */
        period: Period,
        /** Extension of recorded element */
        _recorded: Element,
        /** Whether the event succeeded or failed */
        outcome: primitives.R4.code,
        /** Extension of outcome element */
        _outcome: Element,
        /** Description of the event outcome */
        outcomeDesc: primitives.R4.string,
        /** Extension of outcomeDesc element */
        _outcomeDesc: Element,
        /** The purposeOfUse of the event */
        purposeOfEvent: t.array(CodeableConcept)
      })
    ])
);

/**
 * Actor involved in the event
 */
export interface AuditEventAgent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** How agent participated */
  type?: CodeableConcept;
  /** Agent role in the event */
  role?: CodeableConcept[];
  /** Identifier of who */
  who?: Reference;
  /** Alternative User identity */
  altId?: string;
  /** Extension of altId element */
  _altId?: Element;
  /** Human friendly name for the agent */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Whether user is initiator */
  requestor: boolean;
  /** Extension of requestor element */
  _requestor?: Element;
  /** Where */
  location?: Reference;
  /** Policy that authorized event */
  policy?: primitives.R4.uri[];
  /** Extension of policy element */
  _policy?: Element[];
  /** Type of media */
  media?: Coding;
  /** Reason given for this user */
  purposeOfUse?: CodeableConcept[];
}
/**
 * Actor involved in the event
 */
export const AuditEventAgent: t.Type<AuditEventAgent> = t.recursion<
  AuditEventAgent
>("AuditEventAgent", () =>
  t.intersection([
    t.type({
      /** Whether user is initiator */
      requestor: primitives.R4.boolean
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
      /** How agent participated */
      type: CodeableConcept,
      /** Agent role in the event */
      role: t.array(CodeableConcept),
      /** Identifier of who */
      who: Reference,
      /** Alternative User identity */
      altId: primitives.R4.string,
      /** Extension of altId element */
      _altId: Element,
      /** Human friendly name for the agent */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Extension of requestor element */
      _requestor: Element,
      /** Where */
      location: Reference,
      /** Policy that authorized event */
      policy: t.array(primitives.R4.uri),
      /** Extension of policy element */
      _policy: t.array(Element),
      /** Type of media */
      media: Coding,
      /** Reason given for this user */
      purposeOfUse: t.array(CodeableConcept)
    })
  ])
);

/**
 * Logical network location for application activity
 */
export interface AuditEventAgentNetwork {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier for the network access point of the user device */
  address?: string;
  /** Extension of address element */
  _address?: Element;
  /** The type of network access point */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
}
/**
 * Logical network location for application activity
 */
export const AuditEventAgentNetwork: t.Type<
  AuditEventAgentNetwork
> = t.recursion<AuditEventAgentNetwork>("AuditEventAgentNetwork", () =>
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
      /** Identifier for the network access point of the user device */
      address: primitives.R4.string,
      /** Extension of address element */
      _address: Element,
      /** The type of network access point */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element
    })
  ])
);

/**
 * Audit Event Reporter
 */
export interface AuditEventSource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Logical source location within the enterprise */
  site?: string;
  /** Extension of site element */
  _site?: Element;
  /** The identity of source detecting the event */
  observer: Reference;
  /** The type of source where event originated */
  type?: Coding[];
}
/**
 * Audit Event Reporter
 */
export const AuditEventSource: t.Type<AuditEventSource> = t.recursion<
  AuditEventSource
>("AuditEventSource", () =>
  t.intersection([
    t.type({
      /** The identity of source detecting the event */
      observer: Reference
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
      /** Logical source location within the enterprise */
      site: primitives.R4.string,
      /** Extension of site element */
      _site: Element,
      /** The type of source where event originated */
      type: t.array(Coding)
    })
  ])
);

/**
 * Data or objects used
 */
export interface AuditEventEntity {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specific instance of resource */
  what?: Reference;
  /** Type of entity involved */
  type?: Coding;
  /** What role the entity played */
  role?: Coding;
  /** Life-cycle stage for the entity */
  lifecycle?: Coding;
  /** Security labels on the entity */
  securityLabel?: Coding[];
  /** Descriptor for entity */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Descriptive text */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Query parameters */
  query?: primitives.R4.base64Binary;
  /** Extension of query element */
  _query?: Element;
}
/**
 * Data or objects used
 */
export const AuditEventEntity: t.Type<AuditEventEntity> = t.recursion<
  AuditEventEntity
>("AuditEventEntity", () =>
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
      /** Specific instance of resource */
      what: Reference,
      /** Type of entity involved */
      type: Coding,
      /** What role the entity played */
      role: Coding,
      /** Life-cycle stage for the entity */
      lifecycle: Coding,
      /** Security labels on the entity */
      securityLabel: t.array(Coding),
      /** Descriptor for entity */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Descriptive text */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Query parameters */
      query: primitives.R4.base64Binary,
      /** Extension of query element */
      _query: Element
    })
  ])
);

/**
 * Additional Information about the entity
 */
export interface AuditEventEntityDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of the property */
  type: string;
  /** Extension of type element */
  _type?: Element;
  /** Property value */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Property value */
  valueBase64Binary: primitives.R4.base64Binary;
  /** Extension of valueBase64Binary element */
  _valueBase64Binary?: Element;
}
/**
 * Additional Information about the entity
 */
export const AuditEventEntityDetail: t.Type<
  AuditEventEntityDetail
> = t.recursion<AuditEventEntityDetail>("AuditEventEntityDetail", () =>
  t.intersection([
    t.type({
      /** Name of the property */
      type: primitives.R4.string,
      /** Property value */
      valueString: primitives.R4.string,
      /** Property value */
      valueBase64Binary: primitives.R4.base64Binary
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
      /** Extension of valueString element */
      _valueString: Element,
      /** Extension of valueBase64Binary element */
      _valueBase64Binary: Element
    })
  ])
);
