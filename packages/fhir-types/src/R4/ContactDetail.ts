/**
 * ContactDetail Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Contact information
 */
export interface ContactDetail {
  /** The type of resource */
  resourceType?: "ContactDetail";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Name of an individual to contact */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Contact details for individual or organization */
  telecom?: ContactPoint[];
}
/**
 * Contact information
 */
export const ContactDetail: t.Type<ContactDetail> = t.recursion<ContactDetail>(
  "ContactDetail",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("ContactDetail"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Name of an individual to contact */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Contact details for individual or organization */
        telecom: t.array(ContactPoint)
      })
    ])
);
