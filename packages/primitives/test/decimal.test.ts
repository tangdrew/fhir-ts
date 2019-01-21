/**
 * Tests for Decimal Runtime Type
 */

import { assertSuccess, assertFailure } from "./helpers";
import { decimal } from "../src";
import { Decimal } from "../src/decimal";

describe("DecimalType", () => {
  it("should succeed validating a valid value", () => {
    const T = decimal;
    const input = "1.01";
    const value = new Decimal(input);
    assertSuccess(T.decode(input));
    expect(T.decode(input).value).toEqual(value);
  });

  it("should successfully maintain precision", () => {
    const T = decimal;
    expect(T.decode("1.0100").map(T.encode).value).toEqual("1.0100");
    expect(T.decode(1.01).map(T.encode).value).toEqual("1.01");
    expect(T.decode("1.01e2").map(T.encode).value).toEqual("101");
    expect(T.decode("1.0100e2").map(T.encode).value).toEqual("101.00");
  });

  it("should fail validating an invalid value", () => {
    const T = decimal;
    assertFailure(T.decode("abc"), [
      'Invalid value "abc" supplied to : decimal'
    ]);
  });

  it("should type guard", () => {
    const T = decimal;
    const value = new Decimal("1.010");
    expect(T.is(value)).toEqual(true);
    expect(T.is("b")).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
