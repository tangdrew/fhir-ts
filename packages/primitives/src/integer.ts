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

export const integer = new IntegerType();
