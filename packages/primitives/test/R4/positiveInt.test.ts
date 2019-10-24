/**
 * Tests for Postive Integer Runtime Type
 */

import { positiveInt } from "../../src/R4";
import { assertSuccess, assertFailure, assertEqual } from "./helpers";

describe("PositiveIntegerType", () => {
  it("should succeed validating a valid value", () => {
    const T = positiveInt;
    assertSuccess(T.decode(2));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = positiveInt;
    const value = 2;
    assertEqual(T.decode(value), value);
  });

  it("should fail validating a float", () => {
    const T = positiveInt;
    assertFailure(T.decode(1.1), [
      "Invalid value 1.1 supplied to : positiveInt"
    ]);
  });

  it("should fail validating a negative number", () => {
    const T = positiveInt;
    assertFailure(T.decode(-2), ["Invalid value -2 supplied to : positiveInt"]);
  });

  it("should fail validating 0", () => {
    const T = positiveInt;
    assertFailure(T.decode(0), ["Invalid value 0 supplied to : positiveInt"]);
  });

  it("should type guard", () => {
    const T = positiveInt;
    expect(T.is(2)).toEqual(true);
    expect(T.is(0)).toEqual(false);
    expect(T.is(1.1)).toEqual(false);
    expect(T.is(-2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
