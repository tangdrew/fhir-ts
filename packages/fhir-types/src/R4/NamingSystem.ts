/**
 * NamingSystem Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Unique identifiers used for system
 */
export interface NamingSystemUniqueId {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** oid | uuid | uri | other */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** The unique identifier */
  value: t.TypeOf<primitives.R4.StringType>;
  /** Is this the id that should be used for this type */
  preferred?: t.TypeOf<primitives.R4.BooleanType>;
  /** Notes about identifier usage */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** When is identifier valid? */
  period?: Period;
}

export interface NamingSystemUniqueIdOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** oid | uuid | uri | other */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** The unique identifier */
  value: t.OutputOf<primitives.R4.StringType>;
  /** Is this the id that should be used for this type */
  preferred?: t.OutputOf<primitives.R4.BooleanType>;
  /** Notes about identifier usage */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** When is identifier valid? */
  period?: PeriodOutputType;
}

export const NamingSystemUniqueId: t.RecursiveType<
  t.Type<NamingSystemUniqueId, NamingSystemUniqueIdOutputType>,
  NamingSystemUniqueId,
  NamingSystemUniqueIdOutputType
> = t.recursion<NamingSystemUniqueId, NamingSystemUniqueIdOutputType>(
  "NamingSystemUniqueId",
  () =>
    t.intersection(
      [
        t.type({
          /** oid | uuid | uri | other */
          type: primitives.R4.code,
          /** The unique identifier */
          value: primitives.R4.string
        }),
        t.partial({
          /** Notes about identifier usage */
          comment: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** When is identifier valid? */
          period: Period,
          /** Is this the id that should be used for this type */
          preferred: primitives.R4.boolean
        })
      ],
      "NamingSystemUniqueId"
    )
);

/**
 * System of unique identification
 */
export interface NamingSystem {
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
  /** Name for this naming system (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** codesystem | identifier | root */
  kind: t.TypeOf<primitives.R4.CodeType>;
  /** Date last changed */
  date: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Who maintains system namespace? */
  responsible?: t.TypeOf<primitives.R4.StringType>;
  /** e.g. driver,  provider,  patient, bank etc. */
  type?: CodeableConcept;
  /** Natural language description of the naming system */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for naming system (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** How/where is it used */
  usage?: t.TypeOf<primitives.R4.StringType>;
  /** Unique identifiers used for system */
  uniqueId: NamingSystemUniqueId[];
}

export interface NamingSystemOutputType {
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
  /** Name for this naming system (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** codesystem | identifier | root */
  kind: t.OutputOf<primitives.R4.CodeType>;
  /** Date last changed */
  date: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Who maintains system namespace? */
  responsible?: t.OutputOf<primitives.R4.StringType>;
  /** e.g. driver,  provider,  patient, bank etc. */
  type?: CodeableConceptOutputType;
  /** Natural language description of the naming system */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for naming system (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** How/where is it used */
  usage?: t.OutputOf<primitives.R4.StringType>;
  /** Unique identifiers used for system */
  uniqueId: NamingSystemUniqueIdOutputType[];
}

export const NamingSystem: t.RecursiveType<
  t.Type<NamingSystem, NamingSystemOutputType>,
  NamingSystem,
  NamingSystemOutputType
> = t.recursion<NamingSystem, NamingSystemOutputType>("NamingSystem", () =>
  t.intersection(
    [
      t.type({
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** codesystem | identifier | root */
        kind: primitives.R4.code,
        /** Name for this naming system (computer friendly) */
        name: primitives.R4.string,
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Unique identifiers used for system */
        uniqueId: t.array(NamingSystemUniqueId)
      }),
      t.partial({
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Natural language description of the naming system */
        description: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for naming system (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Who maintains system namespace? */
        responsible: primitives.R4.string,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** e.g. driver,  provider,  patient, bank etc. */
        type: CodeableConcept,
        /** How/where is it used */
        usage: primitives.R4.string,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext)
      })
    ],
    "NamingSystem"
  )
);
