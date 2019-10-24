/**
 * XHTML FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const STRING_REGEX = /[ \r\n\t\S]+/;

const isXhtml = (m: unknown): m is string =>
  typeof m === "string" && STRING_REGEX.test(m);

/**
 * A XHTML fragment.
 */
export const xhtml = new Type<string>(
  "xhtml",
  isXhtml,
  (m, c) => (isXhtml(m) ? success(m) : failure(m, c)),
  identity
);

export type xhtml = TypeOf<typeof xhtml>;
