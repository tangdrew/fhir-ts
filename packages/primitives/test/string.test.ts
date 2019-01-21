/**
 * Tests for String Runtime Type
 */

import { string } from "../src";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("StringType", () => {
  it("should succeed validating a valid value", () => {
    const T = string;
    assertSuccess(T.decode("abc"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = string;
    const value = "abc";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = string;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : string"]);
  });

  // TODO: Improve unicode check in regex
  xit("should fail validating a string with invalid characters", () => {
    const T = string;
    assertFailure(T.decode("\0"), ["Invalid value 2 supplied to : string"]);
  });

  it("should type guard", () => {
    const T = string;
    expect(T.is("abc")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
