/**
 * Tests for Boolean Runtime Type
 */

import { boolean } from "../src";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("boolean", () => {
  it("should succeed validating a valid value", () => {
    const T = boolean;
    assertSuccess(T.decode(true));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = boolean;
    const value = false;
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = boolean;
    assertFailure(T.decode("abc"), [
      'Invalid value "abc" supplied to : boolean'
    ]);
  });

  it("should type guard", () => {
    const T = boolean;
    expect(T.is(false)).toEqual(true);
    expect(T.is("b")).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
