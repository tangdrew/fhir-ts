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

export const id = new IDType();
