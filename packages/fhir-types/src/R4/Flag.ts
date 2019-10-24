/**
 * Flag Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Key information to flag to healthcare providers
 */
export interface Flag {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** active | inactive | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Clinical, administrative, etc. */
  category?: CodeableConcept[];
  /** Coded or textual message to display to user */
  code: CodeableConcept;
  /** Who/What is flag about? */
  subject: Reference;
  /** Time period when flag is active */
  period?: Period;
  /** Alert relevant during encounter */
  encounter?: Reference;
  /** Flag creator */
  author?: Reference;
}
/**
 * Key information to flag to healthcare providers
 */
export const Flag: t.Type<Flag> = t.recursion<Flag>("Flag", () =>
  t.intersection([
    t.type({
      /** active | inactive | entered-in-error */
      status: primitives.R4.code,
      /** Coded or textual message to display to user */
      code: CodeableConcept,
      /** Who/What is flag about? */
      subject: Reference
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
      /** Business identifier */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Clinical, administrative, etc. */
      category: t.array(CodeableConcept),
      /** Time period when flag is active */
      period: Period,
      /** Alert relevant during encounter */
      encounter: Reference,
      /** Flag creator */
      author: Reference
    })
  ])
);
