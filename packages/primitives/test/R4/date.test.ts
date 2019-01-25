/**
 * Tests for Date Runtime Type
 */

import { date } from "../../src/R4";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("DateType", () => {
  it("should succeed validating a valid value", () => {
    const T = date;
    assertSuccess(T.decode("1905-08-23"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = date;
    const value = "1905-08-23";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = date;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : date"]);
  });

  it("should fail validating non YYYY, YYYY-MM, or YYYY-MM-DD formatted date", () => {
    const T = date;
    assertFailure(T.decode("08/23"), [
      'Invalid value "08/23" supplied to : date'
    ]);
  });

  it("should type guard", () => {
    const T = date;
    expect(T.is("1905-08-23")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
