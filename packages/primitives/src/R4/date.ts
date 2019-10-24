/**
 * Date FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

// TODO: This regex seems too permissive
const DATE_REGEX = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?/;

const isDate = (m: unknown): m is string =>
  typeof m === "string" && DATE_REGEX.test(m);

/**
 * A date, or partial date (e.g. just year or year + month) as used in human communication.
 */
export const date = new Type<string>(
  "date",
  isDate,
  (m, c) => (isDate(m) ? success(m) : failure(m, c)),
  identity
);

export type date = TypeOf<typeof date>;
