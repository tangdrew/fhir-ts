/**
 * String FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const STRING_REGEX = /[ \r\n\t\S]+/;

const isString = (m: unknown): m is string =>
  typeof m === "string" && STRING_REGEX.test(m);

/**
 * A sequence of Unicode characters.
 */
export const string = new Type<string>(
  "string",
  isString,
  (m, c) => (isString(m) ? success(m) : failure(m, c)),
  identity
);
