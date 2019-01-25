/**
 * ID FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

// TODO: This regex seems incorrect as well
const ID_REGEX = /[A-Za-z0-9\-\.]{1,64}/;

export class IDType extends Type<string> {
  readonly _tag: "IDType" = "IDType";
  constructor() {
    super(
      "id",
      (m): m is string => typeof m === "string" && ID_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * Any combination of upper- or lower-case ASCII letters ('A'..'Z', and 'a'..'z', numerals ('0'..'9'),
 * '-' and '.', with a length limit of 64 characters.
 */
export const id = new IDType();
