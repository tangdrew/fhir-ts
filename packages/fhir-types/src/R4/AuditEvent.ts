/**
 * AuditEvent Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Audit Event Reporter
 */
export interface AuditEventSource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Logical source location within the enterprise */
  site?: t.TypeOf<primitives.R4.StringType>;
  /** The identity of source detecting the event */
  observer: Reference;
  /** The type of source where event originated */
  type?: Coding[];
}

export interface AuditEventSourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Logical source location within the enterprise */
  site?: t.OutputOf<primitives.R4.StringType>;
  /** The identity of source detecting the event */
  observer: ReferenceOutputType;
  /** The type of source where event originated */
  type?: CodingOutputType[];
}

export const AuditEventSource: t.RecursiveType<
  t.Type<AuditEventSource, AuditEventSourceOutputType>,
  AuditEventSource,
  AuditEventSourceOutputType
> = t.recursion<AuditEventSource, AuditEventSourceOutputType>(
  "AuditEventSource",
  () =>
    t.intersection(
      [
        t.type({
          /** The identity of source detecting the event */
          observer: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Logical source location within the enterprise */
          site: primitives.R4.string,
          /** The type of source where event originated */
          type: t.array(Coding)
        })
      ],
      "AuditEventSource"
    )
);

/**
 * Additional Information about the entity
 */
export interface AuditEventEntityDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of the property */
  type: t.TypeOf<primitives.R4.StringType>;
  /** Property value */
  value:
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.Base64BinaryType>;
}

export interface AuditEventEntityDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of the property */
  type: t.OutputOf<primitives.R4.StringType>;
  /** Property value */
  value:
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.Base64BinaryType>;
}

export const AuditEventEntityDetail: t.RecursiveType<
  t.Type<AuditEventEntityDetail, AuditEventEntityDetailOutputType>,
  AuditEventEntityDetail,
  AuditEventEntityDetailOutputType
> = t.recursion<AuditEventEntityDetail, AuditEventEntityDetailOutputType>(
  "AuditEventEntityDetail",
  () =>
    t.intersection(
      [
        t.type({
          /** Name of the property */
          type: primitives.R4.string,
          /** Property value */
          value: t.union([primitives.R4.string, primitives.R4.base64Binary])
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
      "AuditEventEntityDetail"
    )
);

/**
 * Data or objects used
 */
export interface AuditEventEntity {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Descriptive text */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Query parameters */
  query?: t.TypeOf<primitives.R4.Base64BinaryType>;
  /** Additional Information about the entity */
  detail?: AuditEventEntityDetail[];
}

export interface AuditEventEntityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Specific instance of resource */
  what?: ReferenceOutputType;
  /** Type of entity involved */
  type?: CodingOutputType;
  /** What role the entity played */
  role?: CodingOutputType;
  /** Life-cycle stage for the entity */
  lifecycle?: CodingOutputType;
  /** Security labels on the entity */
  securityLabel?: CodingOutputType[];
  /** Descriptor for entity */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Descriptive text */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Query parameters */
  query?: t.OutputOf<primitives.R4.Base64BinaryType>;
  /** Additional Information about the entity */
  detail?: AuditEventEntityDetailOutputType[];
}

export const AuditEventEntity: t.RecursiveType<
  t.Type<AuditEventEntity, AuditEventEntityOutputType>,
  AuditEventEntity,
  AuditEventEntityOutputType
> = t.recursion<AuditEventEntity, AuditEventEntityOutputType>(
  "AuditEventEntity",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Descriptive text */
          description: primitives.R4.string,
          /** Additional Information about the entity */
          detail: t.array(AuditEventEntityDetail),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Life-cycle stage for the entity */
          lifecycle: Coding,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Descriptor for entity */
          name: primitives.R4.string,
          /** Query parameters */
          query: primitives.R4.base64Binary,
          /** What role the entity played */
          role: Coding,
          /** Security labels on the entity */
          securityLabel: t.array(Coding),
          /** Type of entity involved */
          type: Coding,
          /** Specific instance of resource */
          what: Reference
        })
      ],
      "AuditEventEntity"
    )
);

/**
 * Logical network location for application activity
 */
export interface AuditEventAgentNetwork {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier for the network access point of the user device */
  address?: t.TypeOf<primitives.R4.StringType>;
  /** The type of network access point */
  type?: t.TypeOf<primitives.R4.CodeType>;
}

export interface AuditEventAgentNetworkOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifier for the network access point of the user device */
  address?: t.OutputOf<primitives.R4.StringType>;
  /** The type of network access point */
  type?: t.OutputOf<primitives.R4.CodeType>;
}

export const AuditEventAgentNetwork: t.RecursiveType<
  t.Type<AuditEventAgentNetwork, AuditEventAgentNetworkOutputType>,
  AuditEventAgentNetwork,
  AuditEventAgentNetworkOutputType
> = t.recursion<AuditEventAgentNetwork, AuditEventAgentNetworkOutputType>(
  "AuditEventAgentNetwork",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Identifier for the network access point of the user device */
          address: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The type of network access point */
          type: primitives.R4.code
        })
      ],
      "AuditEventAgentNetwork"
    )
);

/**
 * Actor involved in the event
 */
export interface AuditEventAgent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  altId?: t.TypeOf<primitives.R4.StringType>;
  /** Human friendly name for the agent */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Whether user is initiator */
  requestor: t.TypeOf<primitives.R4.BooleanType>;
  /** Where */
  location?: Reference;
  /** Policy that authorized event */
  policy?: t.TypeOf<primitives.R4.URIType>[];
  /** Type of media */
  media?: Coding;
  /** Logical network location for application activity */
  network?: AuditEventAgentNetwork;
  /** Reason given for this user */
  purposeOfUse?: CodeableConcept[];
}

export interface AuditEventAgentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** How agent participated */
  type?: CodeableConceptOutputType;
  /** Agent role in the event */
  role?: CodeableConceptOutputType[];
  /** Identifier of who */
  who?: ReferenceOutputType;
  /** Alternative User identity */
  altId?: t.OutputOf<primitives.R4.StringType>;
  /** Human friendly name for the agent */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Whether user is initiator */
  requestor: t.OutputOf<primitives.R4.BooleanType>;
  /** Where */
  location?: ReferenceOutputType;
  /** Policy that authorized event */
  policy?: t.OutputOf<primitives.R4.URIType>[];
  /** Type of media */
  media?: CodingOutputType;
  /** Logical network location for application activity */
  network?: AuditEventAgentNetworkOutputType;
  /** Reason given for this user */
  purposeOfUse?: CodeableConceptOutputType[];
}

export const AuditEventAgent: t.RecursiveType<
  t.Type<AuditEventAgent, AuditEventAgentOutputType>,
  AuditEventAgent,
  AuditEventAgentOutputType
> = t.recursion<AuditEventAgent, AuditEventAgentOutputType>(
  "AuditEventAgent",
  () =>
    t.intersection(
      [
        t.type({
          /** Whether user is initiator */
          requestor: primitives.R4.boolean
        }),
        t.partial({
          /** Alternative User identity */
          altId: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Where */
          location: Reference,
          /** Type of media */
          media: Coding,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Human friendly name for the agent */
          name: primitives.R4.string,
          /** Logical network location for application activity */
          network: AuditEventAgentNetwork,
          /** Policy that authorized event */
          policy: t.array(primitives.R4.uri),
          /** Reason given for this user */
          purposeOfUse: t.array(CodeableConcept),
          /** Agent role in the event */
          role: t.array(CodeableConcept),
          /** How agent participated */
          type: CodeableConcept,
          /** Identifier of who */
          who: Reference
        })
      ],
      "AuditEventAgent"
    )
);

/**
 * Event record kept for security purposes
 */
export interface AuditEvent {
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
  /** Type/identifier of event */
  type: Coding;
  /** More specific type/id for the event */
  subtype?: Coding[];
  /** Type of action performed during the event */
  action?: t.TypeOf<primitives.R4.CodeType>;
  /** When the activity occurred */
  period?: Period;
  /** Time when the event was recorded */
  recorded: t.TypeOf<primitives.R4.InstantType>;
  /** Whether the event succeeded or failed */
  outcome?: t.TypeOf<primitives.R4.CodeType>;
  /** Description of the event outcome */
  outcomeDesc?: t.TypeOf<primitives.R4.StringType>;
  /** The purposeOfUse of the event */
  purposeOfEvent?: CodeableConcept[];
  /** Actor involved in the event */
  agent: AuditEventAgent[];
  /** Audit Event Reporter */
  source: AuditEventSource;
  /** Data or objects used */
  entity?: AuditEventEntity[];
}

export interface AuditEventOutputType {
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
  /** Type/identifier of event */
  type: CodingOutputType;
  /** More specific type/id for the event */
  subtype?: CodingOutputType[];
  /** Type of action performed during the event */
  action?: t.OutputOf<primitives.R4.CodeType>;
  /** When the activity occurred */
  period?: PeriodOutputType;
  /** Time when the event was recorded */
  recorded: t.OutputOf<primitives.R4.InstantType>;
  /** Whether the event succeeded or failed */
  outcome?: t.OutputOf<primitives.R4.CodeType>;
  /** Description of the event outcome */
  outcomeDesc?: t.OutputOf<primitives.R4.StringType>;
  /** The purposeOfUse of the event */
  purposeOfEvent?: CodeableConceptOutputType[];
  /** Actor involved in the event */
  agent: AuditEventAgentOutputType[];
  /** Audit Event Reporter */
  source: AuditEventSourceOutputType;
  /** Data or objects used */
  entity?: AuditEventEntityOutputType[];
}

export const AuditEvent: t.RecursiveType<
  t.Type<AuditEvent, AuditEventOutputType>,
  AuditEvent,
  AuditEventOutputType
> = t.recursion<AuditEvent, AuditEventOutputType>("AuditEvent", () =>
  t.intersection(
    [
      t.type({
        /** Actor involved in the event */
        agent: t.array(AuditEventAgent),
        /** Time when the event was recorded */
        recorded: primitives.R4.instant,
        /** Audit Event Reporter */
        source: AuditEventSource,
        /** Type/identifier of event */
        type: Coding
      }),
      t.partial({
        /** Type of action performed during the event */
        action: primitives.R4.code,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Data or objects used */
        entity: t.array(AuditEventEntity),
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
        /** Whether the event succeeded or failed */
        outcome: primitives.R4.code,
        /** Description of the event outcome */
        outcomeDesc: primitives.R4.string,
        /** When the activity occurred */
        period: Period,
        /** The purposeOfUse of the event */
        purposeOfEvent: t.array(CodeableConcept),
        /** More specific type/id for the event */
        subtype: t.array(Coding),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "AuditEvent"
  )
);
