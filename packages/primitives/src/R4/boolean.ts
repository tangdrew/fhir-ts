/**
 * Boolean FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const isBoolean = (m: unknown): m is boolean => typeof m === "boolean";

/**
 * true | false
 */
export const boolean = new Type<boolean>(
  "boolean",
  isBoolean,
  (m, c) => (isBoolean(m) ? success(m) : failure(m, c)),
  identity
);
