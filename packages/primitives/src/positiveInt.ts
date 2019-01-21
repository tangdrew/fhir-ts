/**
 * Positive Integer FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

export class PositiveIntegerType extends Type<number> {
  readonly _tag: "PositiveIntegerType" = "PositiveIntegerType";
  constructor() {
    super(
      "positiveInt",
      (m): m is number => typeof m === "number" && Number.isInteger(m) && m > 0,
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * Any positive integer in the range 1..2,147,483,647.
 */
export const positiveInt = new PositiveIntegerType();
