/**
 * Base64Binary FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const BASE64_BINARY_REGEX = /(\s*([0-9a-zA-Z\+\=]){4}\s*)+/;

export class Base64BinaryType extends Type<string> {
  readonly _tag: "Base64BinaryType" = "Base64BinaryType";
  constructor() {
    super(
      "base64binary",
      (m): m is string => typeof m === "string" && BASE64_BINARY_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A stream of bytes, base64 encoded.
 */
export const base64binary = new Base64BinaryType();
