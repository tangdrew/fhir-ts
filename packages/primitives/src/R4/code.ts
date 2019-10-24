/**
 * Code FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

// TODO: This regex seems incorrect as well
const CODE_REGEX = /[^\s]+(\s[^\s]+)*/;

const isCode = (m: unknown): m is string =>
  typeof m === "string" && CODE_REGEX.test(m);

/**
 * Indicates that the value is taken from a set of controlled strings defined elsewhere.
 */
export const code = new Type<string>(
  "code",
  isCode,
  (m, c) => (isCode(m) ? success(m) : failure(m, c)),
  identity
);

export type code = TypeOf<typeof code>;
