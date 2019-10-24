/**
 * Tests for Decimal Runtime Type
 */

import { assertSuccess, assertFailure, assertEqual } from "./helpers";
import { decimal } from "../../src/R4";

describe("DecimalType", () => {
  it("should succeed validating a valid value", () => {
    const T = decimal;
    const input = 1.01;
    assertSuccess(T.decode(input));
  });

  it("should successfully maintain precision", () => {
    const T = decimal;
    assertEqual(T.decode("1.0100"), "1.0100");
    assertEqual(T.decode(1.01), "1.01");
    assertEqual(T.decode("1.01e2"), "101");
    assertEqual(T.decode("1.0100e2"), "101.00");
  });

  it("should fail validating an invalid value", () => {
    const T = decimal;
    assertFailure(T.decode("abc"), [
      'Invalid value "abc" supplied to : decimal'
    ]);
  });

  it("should type guard", () => {
    const T = decimal;
    const value = 1.01;
    expect(T.is(value)).toEqual(true);
    expect(T.is("b")).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
