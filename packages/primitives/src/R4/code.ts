/**
 * Code FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

// TODO: This regex seems incorrect as well
const CODE_REGEX = /[^\s]+(\s[^\s]+)*/;

export class CodeType extends Type<string> {
  readonly _tag: "CodeType" = "CodeType";
  constructor() {
    super(
      "code",
      (m): m is string => typeof m === "string" && CODE_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * Indicates that the value is taken from a set of controlled strings defined elsewhere.
 */
export const code = new CodeType();
