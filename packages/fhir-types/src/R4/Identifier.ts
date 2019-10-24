/**
 * Identifier Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";
import { Reference } from "./Reference";

/**
 * An identifier intended for computation
 */
export interface Identifier {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** usual | official | temp | secondary | old (If known) */
  use?: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** Description of identifier */
  type?: CodeableConcept;
  /** The namespace for the identifier value */
  system?: primitives.R4.uri;
  /** Extension of system element */
  _system?: Element;
  /** The value that is unique */
  value?: string;
  /** Extension of value element */
  _value?: Element;
  /** Time period when id is/was valid for use */
  period?: Period;
  /** Organization that issued id (may be just text) */
  assigner?: Reference;
}
/**
 * An identifier intended for computation
 */
export const Identifier: t.Type<Identifier> = t.recursion<Identifier>(
  "Identifier",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** usual | official | temp | secondary | old (If known) */
        use: primitives.R4.code,
        /** Extension of use element */
        _use: Element,
        /** Description of identifier */
        type: CodeableConcept,
        /** The namespace for the identifier value */
        system: primitives.R4.uri,
        /** Extension of system element */
        _system: Element,
        /** The value that is unique */
        value: primitives.R4.string,
        /** Extension of value element */
        _value: Element,
        /** Time period when id is/was valid for use */
        period: Period,
        /** Organization that issued id (may be just text) */
        assigner: Reference
      })
    ])
);
