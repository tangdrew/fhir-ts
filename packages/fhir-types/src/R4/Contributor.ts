/**
 * Contributor Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Contributor information
 */
export interface Contributor {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** author | editor | reviewer | endorser */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Who contributed the content */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Contact details of the contributor */
  contact?: ContactDetail[];
}
/**
 * Contributor information
 */
export const Contributor: t.Type<Contributor> = t.recursion<Contributor>(
  "Contributor",
  () =>
    t.intersection([
      t.type({
        /** author | editor | reviewer | endorser */
        type: primitives.R4.code,
        /** Who contributed the content */
        name: primitives.R4.string
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of type element */
        _type: Element,
        /** Extension of name element */
        _name: Element,
        /** Contact details of the contributor */
        contact: t.array(ContactDetail)
      })
    ])
);
