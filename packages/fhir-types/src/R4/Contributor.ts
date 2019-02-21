/**
 * Contributor Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Contributor information
 */
export interface Contributor {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** author | editor | reviewer | endorser */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Who contributed the content */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Contact details of the contributor */
  contact?: ContactDetail[];
}

export interface ContributorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** author | editor | reviewer | endorser */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Who contributed the content */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Contact details of the contributor */
  contact?: ContactDetailOutputType[];
}

export const Contributor: t.RecursiveType<
  t.Type<Contributor, ContributorOutputType>,
  Contributor,
  ContributorOutputType
> = t.recursion<Contributor, ContributorOutputType>("Contributor", () =>
  t.intersection(
    [
      t.type({
        /** Who contributed the content */
        name: primitives.R4.string,
        /** author | editor | reviewer | endorser */
        type: primitives.R4.code
      }),
      t.partial({
        /** Contact details of the contributor */
        contact: t.array(ContactDetail),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string
      })
    ],
    "Contributor"
  )
);
