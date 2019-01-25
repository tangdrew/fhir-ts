/**
 * String FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const STRING_REGEX = /[ \r\n\t\S]+/;

export class StringType extends Type<string> {
  readonly _tag: "StringType" = "StringType";
  constructor() {
    super(
      "string",
      (m): m is string => typeof m === "string" && STRING_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A sequence of Unicode characters.
 */
export const string = new StringType();
