/**
 * Integer FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const isInteger = (m: unknown): m is number =>
  typeof m === "number" && Number.isInteger(m);

/**
 * A signed integer in the range −2,147,483,648..2,147,483,647 (32-bit; for larger values, use decimal).
 */
export const integer = new Type<number>(
  "integer",
  isInteger,
  (m, c) => (isInteger(m) ? success(m) : failure(m, c)),
  identity
);

export type integer = TypeOf<typeof integer>;
