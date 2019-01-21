/**
 * Tests for Time Runtime Type
 */

import { time } from "../src";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("TimeType", () => {
  it("should succeed validating a valid value", () => {
    const T = time;
    assertSuccess(T.decode("11:48:22"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = time;
    const value = "11:48:22";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = time;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : time"]);
  });

  it("should fail validating non hh:mm:ss formatted time", () => {
    const T = time;
    assertFailure(T.decode("24:00"), [
      'Invalid value "24:00" supplied to : time'
    ]);
  });

  it("should type guard", () => {
    const T = time;
    expect(T.is("11:48:22")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
