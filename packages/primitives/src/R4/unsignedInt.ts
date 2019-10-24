/**
 * Unsigned Integer FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const isUnsignedInt = (m: unknown): m is number =>
  typeof m === "number" && Number.isInteger(m) && m >= 0;

/**
 * Any non-negative integer in the range 0..2,147,483,647.
 */
export const unsignedInt = new Type<number>(
  "unsignedInt",
  isUnsignedInt,
  (m, c) => (isUnsignedInt(m) ? success(m) : failure(m, c)),
  identity
);

export type unsignedInt = TypeOf<typeof unsignedInt>;
