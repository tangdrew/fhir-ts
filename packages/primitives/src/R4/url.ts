/**
 * URL FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const URL_REGEX = /\S*/;

const isUrl = (m: unknown): m is string =>
  typeof m === "string" && URL_REGEX.test(m);

/**
 * A Uniform Resource Locator.
 */
export const url = new Type<string>(
  "url",
  isUrl,
  (m, c) => (isUrl(m) ? success(m) : failure(m, c)),
  identity
);

export type url = TypeOf<typeof url>;
