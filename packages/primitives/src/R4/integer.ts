/**
 * Integer FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

export class IntegerType extends Type<number> {
  readonly _tag: "IntegerType" = "IntegerType";
  constructor() {
    super(
      "integer",
      (m): m is number => typeof m === "number" && Number.isInteger(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A signed integer in the range −2,147,483,648..2,147,483,647 (32-bit; for larger values, use decimal).
 */
export const integer = new IntegerType();
