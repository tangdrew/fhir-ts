/**
 * Canonical URL FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const CANONICAL_REGEX = /\S*/;

const isCanonical = (m: unknown): m is string =>
  typeof m === "string" && CANONICAL_REGEX.test(m);

/**
 * A URI that refers to a resource by its canonical URL.
 */
export const canonical = new Type<string>(
  "canonical",
  isCanonical,
  (m, c) => (isCanonical(m) ? success(m) : failure(m, c)),
  identity
);

export type canonical = TypeOf<typeof canonical>;
