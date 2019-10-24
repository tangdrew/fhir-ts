/**
 * NamingSystem Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * System of unique identification
 */
export interface NamingSystem {
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
  /** Name for this naming system (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** codesystem | identifier | root */
  kind: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
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
  /** Who maintains system namespace? */
  responsible?: string;
  /** Extension of responsible element */
  _responsible?: Element;
  /** e.g. driver,  provider,  patient, bank etc. */
  type?: CodeableConcept;
  /** Natural language description of the naming system */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for naming system (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** How/where is it used */
  usage?: string;
  /** Extension of usage element */
  _usage?: Element;
}
/**
 * System of unique identification
 */
export const NamingSystem: t.Type<NamingSystem> = t.recursion<NamingSystem>(
  "NamingSystem",
  () =>
    t.intersection([
      t.type({
        /** Name for this naming system (computer friendly) */
        name: primitives.R4.string,
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** codesystem | identifier | root */
        kind: primitives.R4.code,
        /** Date last changed */
        date: primitives.R4.dateTime
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
        /** Extension of name element */
        _name: Element,
        /** Extension of status element */
        _status: Element,
        /** Extension of kind element */
        _kind: Element,
        /** Extension of date element */
        _date: Element,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Extension of publisher element */
        _publisher: Element,
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Who maintains system namespace? */
        responsible: primitives.R4.string,
        /** Extension of responsible element */
        _responsible: Element,
        /** e.g. driver,  provider,  patient, bank etc. */
        type: CodeableConcept,
        /** Natural language description of the naming system */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for naming system (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** How/where is it used */
        usage: primitives.R4.string,
        /** Extension of usage element */
        _usage: Element
      })
    ])
);

/**
 * Unique identifiers used for system
 */
export interface NamingSystemUniqueId {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** oid | uuid | uri | other */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** The unique identifier */
  value: string;
  /** Extension of value element */
  _value?: Element;
  /** Is this the id that should be used for this type */
  preferred?: boolean;
  /** Extension of preferred element */
  _preferred?: Element;
  /** Notes about identifier usage */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** When is identifier valid? */
  period?: Period;
}
/**
 * Unique identifiers used for system
 */
export const NamingSystemUniqueId: t.Type<NamingSystemUniqueId> = t.recursion<
  NamingSystemUniqueId
>("NamingSystemUniqueId", () =>
  t.intersection([
    t.type({
      /** oid | uuid | uri | other */
      type: primitives.R4.code,
      /** The unique identifier */
      value: primitives.R4.string
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
      /** Extension of value element */
      _value: Element,
      /** Is this the id that should be used for this type */
      preferred: primitives.R4.boolean,
      /** Extension of preferred element */
      _preferred: Element,
      /** Notes about identifier usage */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element,
      /** When is identifier valid? */
      period: Period
    })
  ])
);
