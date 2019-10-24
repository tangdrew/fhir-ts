/**
 * Tests for Base64Binary Runtime Type
 */

import { base64Binary } from "../../src/R4";
import { assertSuccess, assertFailure, assertEqual } from "./helpers";

describe("Base64BinaryType", () => {
  it("should succeed validating a valid value", () => {
    const T = base64Binary;
    assertSuccess(T.decode("aGVsbG8gd29ybGQ="));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = base64Binary;
    const value = "aGVsbG8gd29ybGQ=";
    assertEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = base64Binary;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : base64Binary"]);
  });

  it("should fail validating a string with invalid characters", () => {
    const T = base64Binary;
    assertFailure(T.decode("\0"), [
      'Invalid value "\\u0000" supplied to : base64Binary'
    ]);
  });

  it("should type guard", () => {
    const T = base64Binary;
    expect(T.is("aGVsbG8gd29ybGQ=")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
