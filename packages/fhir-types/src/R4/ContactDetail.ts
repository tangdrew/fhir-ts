/**
 * ContactDetail Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Contact information
 */
export interface ContactDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Name of an individual to contact */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for individual or organization */
  telecom?: ContactPoint[];
}

export interface ContactDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Name of an individual to contact */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for individual or organization */
  telecom?: ContactPointOutputType[];
}

export const ContactDetail: t.RecursiveType<
  t.Type<ContactDetail, ContactDetailOutputType>,
  ContactDetail,
  ContactDetailOutputType
> = t.recursion<ContactDetail, ContactDetailOutputType>("ContactDetail", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Name of an individual to contact */
        name: primitives.R4.string,
        /** Contact details for individual or organization */
        telecom: t.array(ContactPoint)
      })
    ],
    "ContactDetail"
  )
);
