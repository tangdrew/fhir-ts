/**
 * Tests for DateTime Runtime Type
 */

import { dateTime } from "../../src/R4";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("DateTimeType", () => {
  it("should succeed validating a valid value", () => {
    const T = dateTime;
    assertSuccess(T.decode("2017-01-01T00:00:00.000Z"));
  });

  it("should succeed validating a partial dateTime", () => {
    const T = dateTime;
    assertSuccess(T.decode("2017"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = dateTime;
    const value = "2017-01-01T00:00:00.000Z";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = dateTime;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : dateTime"]);
  });

  it("should fail validating non YYYY, YYYY-MM, YYYY-MM-DD or YYYY-MM-DDThh:mm:ss+zz:zz formatted date", () => {
    const T = dateTime;
    assertFailure(T.decode("08/23"), [
      'Invalid value "08/23" supplied to : dateTime'
    ]);
  });

  it("should type guard", () => {
    const T = dateTime;
    expect(T.is("2017-01-01T00:00:00.000Z")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
