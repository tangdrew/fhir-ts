/**
 * ID FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

// TODO: This regex seems incorrect as well
const ID_REGEX = /[A-Za-z0-9\-\.]{1,64}/;

const isId = (m: unknown): m is string =>
  typeof m === "string" && ID_REGEX.test(m);

/**
 * Any combination of upper- or lower-case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'),
 * '-' and '.', with a length limit of 64 characters.
 */
export const id = new Type<string>(
  "id",
  isId,
  (m, c) => (isId(m) ? success(m) : failure(m, c)),
  identity
);

export type id = TypeOf<typeof id>;
