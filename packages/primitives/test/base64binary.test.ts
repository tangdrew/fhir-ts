/**
 * Tests for Base64Binary Runtime Type
 */

import { base64binary } from "../src";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("Base64BinaryType", () => {
  it("should succeed validating a valid value", () => {
    const T = base64binary;
    assertSuccess(T.decode("aGVsbG8gd29ybGQ="));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = base64binary;
    const value = "aGVsbG8gd29ybGQ=";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = base64binary;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : base64binary"]);
  });

  it("should fail validating a string with invalid characters", () => {
    const T = base64binary;
    assertFailure(T.decode("\0"), [
      'Invalid value "\\u0000" supplied to : base64binary'
    ]);
  });

  it("should type guard", () => {
    const T = base64binary;
    expect(T.is("aGVsbG8gd29ybGQ=")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
