/**
 * Unsigned Integer FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

export class UnsignedIntegerType extends Type<number> {
  readonly _tag: "UnsignedIntegerType" = "UnsignedIntegerType";
  constructor() {
    super(
      "unsignedInt",
      (m): m is number =>
        typeof m === "number" && Number.isInteger(m) && m >= 0,
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * Any non-negative integer in the range 0..2,147,483,647.
 */
export const unsignedInt = new UnsignedIntegerType();
