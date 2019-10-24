/**
 * Provenance Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Signature } from "./Signature";

/**
 * Who, What, When for a set of resources
 */
export interface Provenance {
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
  /** Target Reference(s) (usually version specific) */
  target: Reference[];
  /** When the activity occurred */
  occurredPeriod?: Period;
  /** When the activity occurred */
  occurredDateTime?: primitives.R4.dateTime;
  /** Extension of occurredDateTime element */
  _occurredDateTime?: Element;
  /** When the activity was recorded / updated */
  recorded: primitives.R4.instant;
  /** Extension of recorded element */
  _recorded?: Element;
  /** Policy or plan the activity was defined by */
  policy?: primitives.R4.uri[];
  /** Extension of policy element */
  _policy?: Element[];
  /** Where the activity occurred, if relevant */
  location?: Reference;
  /** Reason the activity is occurring */
  reason?: CodeableConcept[];
  /** Activity that occurred */
  activity?: CodeableConcept;
  /** Signature on target */
  signature?: Signature[];
}
/**
 * Who, What, When for a set of resources
 */
export const Provenance: t.Type<Provenance> = t.recursion<Provenance>(
  "Provenance",
  () =>
    t.intersection([
      t.type({
        /** Target Reference(s) (usually version specific) */
        target: t.array(Reference),
        /** When the activity was recorded / updated */
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
        /** When the activity occurred */
        occurredPeriod: Period,
        /** When the activity occurred */
        occurredDateTime: primitives.R4.dateTime,
        /** Extension of occurredDateTime element */
        _occurredDateTime: Element,
        /** Extension of recorded element */
        _recorded: Element,
        /** Policy or plan the activity was defined by */
        policy: t.array(primitives.R4.uri),
        /** Extension of policy element */
        _policy: t.array(Element),
        /** Where the activity occurred, if relevant */
        location: Reference,
        /** Reason the activity is occurring */
        reason: t.array(CodeableConcept),
        /** Activity that occurred */
        activity: CodeableConcept,
        /** Signature on target */
        signature: t.array(Signature)
      })
    ])
);

/**
 * Actor involved
 */
export interface ProvenanceAgent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** How the agent participated */
  type?: CodeableConcept;
  /** What the agents role was */
  role?: CodeableConcept[];
  /** Who participated */
  who: Reference;
  /** Who the agent is representing */
  onBehalfOf?: Reference;
}
/**
 * Actor involved
 */
export const ProvenanceAgent: t.Type<ProvenanceAgent> = t.recursion<
  ProvenanceAgent
>("ProvenanceAgent", () =>
  t.intersection([
    t.type({
      /** Who participated */
      who: Reference
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
      /** How the agent participated */
      type: CodeableConcept,
      /** What the agents role was */
      role: t.array(CodeableConcept),
      /** Who the agent is representing */
      onBehalfOf: Reference
    })
  ])
);

/**
 * An entity used in this activity
 */
export interface ProvenanceEntity {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** derivation | revision | quotation | source | removal */
  role: primitives.R4.code;
  /** Extension of role element */
  _role?: Element;
  /** Identity of entity */
  what: Reference;
  /** Entity is attributed to this agent */
  agent?: ProvenanceAgent[];
}
/**
 * An entity used in this activity
 */
export const ProvenanceEntity: t.Type<ProvenanceEntity> = t.recursion<
  ProvenanceEntity
>("ProvenanceEntity", () =>
  t.intersection([
    t.type({
      /** derivation | revision | quotation | source | removal */
      role: primitives.R4.code,
      /** Identity of entity */
      what: Reference
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
      /** Extension of role element */
      _role: Element,
      /** Entity is attributed to this agent */
      agent: t.array(ProvenanceAgent)
    })
  ])
);
