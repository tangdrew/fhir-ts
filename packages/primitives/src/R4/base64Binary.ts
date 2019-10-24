/**
 * Base64Binary FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const BASE64_BINARY_REGEX = /(\s*([0-9a-zA-Z\+\=]){4}\s*)+/;

const isBase64Binary = (m: unknown): m is string =>
  typeof m === "string" && BASE64_BINARY_REGEX.test(m);

/**
 * A stream of bytes, base64 encoded.
 */
export const base64Binary = new Type<string>(
  "base64Binary",
  isBase64Binary,
  (m, c) => (isBase64Binary(m) ? success(m) : failure(m, c)),
  identity
);

export type base64Binary = TypeOf<typeof base64Binary>;
