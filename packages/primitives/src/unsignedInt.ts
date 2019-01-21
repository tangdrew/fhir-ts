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

export const unsignedInt = new UnsignedIntegerType();
