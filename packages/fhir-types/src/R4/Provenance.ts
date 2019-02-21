/**
 * Provenance Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Signature, SignatureOutputType } from "./Signature";

/**
 * An entity used in this activity
 */
export interface ProvenanceEntity {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** derivation | revision | quotation | source | removal */
  role: t.TypeOf<primitives.R4.CodeType>;
  /** Identity of entity */
  what: Reference;
  /** Entity is attributed to this agent */
  agent?: ProvenanceAgent[];
}

export interface ProvenanceEntityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** derivation | revision | quotation | source | removal */
  role: t.OutputOf<primitives.R4.CodeType>;
  /** Identity of entity */
  what: ReferenceOutputType;
  /** Entity is attributed to this agent */
  agent?: ProvenanceAgentOutputType[];
}

export const ProvenanceEntity: t.RecursiveType<
  t.Type<ProvenanceEntity, ProvenanceEntityOutputType>,
  ProvenanceEntity,
  ProvenanceEntityOutputType
> = t.recursion<ProvenanceEntity, ProvenanceEntityOutputType>(
  "ProvenanceEntity",
  () =>
    t.intersection(
      [
        t.type({
          /** derivation | revision | quotation | source | removal */
          role: primitives.R4.code,
          /** Identity of entity */
          what: Reference
        }),
        t.partial({
          /** Entity is attributed to this agent */
          agent: t.array(ProvenanceAgent),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ProvenanceEntity"
    )
);

/**
 * Actor involved
 */
export interface ProvenanceAgent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface ProvenanceAgentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** How the agent participated */
  type?: CodeableConceptOutputType;
  /** What the agents role was */
  role?: CodeableConceptOutputType[];
  /** Who participated */
  who: ReferenceOutputType;
  /** Who the agent is representing */
  onBehalfOf?: ReferenceOutputType;
}

export const ProvenanceAgent: t.RecursiveType<
  t.Type<ProvenanceAgent, ProvenanceAgentOutputType>,
  ProvenanceAgent,
  ProvenanceAgentOutputType
> = t.recursion<ProvenanceAgent, ProvenanceAgentOutputType>(
  "ProvenanceAgent",
  () =>
    t.intersection(
      [
        t.type({
          /** Who participated */
          who: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Who the agent is representing */
          onBehalfOf: Reference,
          /** What the agents role was */
          role: t.array(CodeableConcept),
          /** How the agent participated */
          type: CodeableConcept
        })
      ],
      "ProvenanceAgent"
    )
);

/**
 * Who, What, When for a set of resources
 */
export interface Provenance {
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
  /** Target Reference(s) (usually version specific) */
  target: Reference[];
  /** When the activity occurred */
  occurred?: Period | t.TypeOf<primitives.R4.DateTimeType>;
  /** When the activity was recorded / updated */
  recorded: t.TypeOf<primitives.R4.InstantType>;
  /** Policy or plan the activity was defined by */
  policy?: t.TypeOf<primitives.R4.URIType>[];
  /** Where the activity occurred, if relevant */
  location?: Reference;
  /** Reason the activity is occurring */
  reason?: CodeableConcept[];
  /** Activity that occurred */
  activity?: CodeableConcept;
  /** Actor involved */
  agent: ProvenanceAgent[];
  /** An entity used in this activity */
  entity?: ProvenanceEntity[];
  /** Signature on target */
  signature?: Signature[];
}

export interface ProvenanceOutputType {
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
  /** Target Reference(s) (usually version specific) */
  target: ReferenceOutputType[];
  /** When the activity occurred */
  occurred?: PeriodOutputType | t.OutputOf<primitives.R4.DateTimeType>;
  /** When the activity was recorded / updated */
  recorded: t.OutputOf<primitives.R4.InstantType>;
  /** Policy or plan the activity was defined by */
  policy?: t.OutputOf<primitives.R4.URIType>[];
  /** Where the activity occurred, if relevant */
  location?: ReferenceOutputType;
  /** Reason the activity is occurring */
  reason?: CodeableConceptOutputType[];
  /** Activity that occurred */
  activity?: CodeableConceptOutputType;
  /** Actor involved */
  agent: ProvenanceAgentOutputType[];
  /** An entity used in this activity */
  entity?: ProvenanceEntityOutputType[];
  /** Signature on target */
  signature?: SignatureOutputType[];
}

export const Provenance: t.RecursiveType<
  t.Type<Provenance, ProvenanceOutputType>,
  Provenance,
  ProvenanceOutputType
> = t.recursion<Provenance, ProvenanceOutputType>("Provenance", () =>
  t.intersection(
    [
      t.type({
        /** Actor involved */
        agent: t.array(ProvenanceAgent),
        /** When the activity was recorded / updated */
        recorded: primitives.R4.instant,
        /** Target Reference(s) (usually version specific) */
        target: t.array(Reference)
      }),
      t.partial({
        /** Activity that occurred */
        activity: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** An entity used in this activity */
        entity: t.array(ProvenanceEntity),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Where the activity occurred, if relevant */
        location: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** When the activity occurred */
        occurred: t.union([Period, primitives.R4.dateTime]),
        /** Policy or plan the activity was defined by */
        policy: t.array(primitives.R4.uri),
        /** Reason the activity is occurring */
        reason: t.array(CodeableConcept),
        /** Signature on target */
        signature: t.array(Signature),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Provenance"
  )
);
