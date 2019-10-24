/**
 * URI FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const URI_REGEX = /\S*/;

const isUri = (m: unknown): m is string =>
  typeof m === "string" && URI_REGEX.test(m);

/**
 * A Uniform Resource Identifier Reference.
 */
export const uri = new Type<string>(
  "uri",
  isUri,
  (m, c) => (isUri(m) ? success(m) : failure(m, c)),
  identity
);

export type uri = TypeOf<typeof uri>;
