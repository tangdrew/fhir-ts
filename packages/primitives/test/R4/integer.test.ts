/**
 * Tests for Integer Runtime Type
 */

import { integer } from "../../src/R4";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("IntegerType", () => {
  it("should succeed validating a valid value", () => {
    const T = integer;
    assertSuccess(T.decode(2));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = integer;
    const value = 2;
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = integer;
    assertFailure(T.decode(1.1), ["Invalid value 1.1 supplied to : integer"]);
  });

  it("should type guard", () => {
    const T = integer;
    expect(T.is(2)).toEqual(true);
    expect(T.is(1.1)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
