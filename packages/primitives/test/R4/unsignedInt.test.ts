/**
 * Tests for Unsigned Integer Runtime Type
 */

import { unsignedInt } from "../../src/R4";
import { assertSuccess, assertFailure, assertEqual } from "./helpers";

describe("UnsignedIntegerType", () => {
  it("should succeed validating a valid value", () => {
    const T = unsignedInt;
    assertSuccess(T.decode(2));
  });

  it("should succeed validating 0", () => {
    const T = unsignedInt;
    assertSuccess(T.decode(0));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = unsignedInt;
    const value = 2;
    assertEqual(T.decode(value), value);
  });

  it("should fail validating a float", () => {
    const T = unsignedInt;
    assertFailure(T.decode(1.1), [
      "Invalid value 1.1 supplied to : unsignedInt"
    ]);
  });

  it("should fail validating a negative number", () => {
    const T = unsignedInt;
    assertFailure(T.decode(-2), ["Invalid value -2 supplied to : unsignedInt"]);
  });

  it("should type guard", () => {
    const T = unsignedInt;
    expect(T.is(2)).toEqual(true);
    expect(T.is(0)).toEqual(true);
    expect(T.is(1.1)).toEqual(false);
    expect(T.is(-2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
