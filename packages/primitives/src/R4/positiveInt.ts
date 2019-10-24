/**
 * Positive Integer FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const isPositiveInt = (m: unknown): m is number =>
  typeof m === "number" && Number.isInteger(m) && m > 0;

/**
 * Any positive integer in the range 1..2,147,483,647.
 */
export const positiveInt = new Type<number>(
  "positiveInt",
  isPositiveInt,
  (m, c) => (isPositiveInt(m) ? success(m) : failure(m, c)),
  identity
);

export type positiveInt = TypeOf<typeof positiveInt>;
