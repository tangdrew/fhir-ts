/**
 * Tests for URL Runtime Type
 */

import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";
import { url } from "../src";

describe("URLType", () => {
  it("should succeed validating a valid value", () => {
    const T = url;
    const input = "http://snomed.info/sct";
    assertSuccess(T.decode(input));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = url;
    const value = "http://snomed.info/sct";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = url;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : url"]);
  });

  it("should type guard", () => {
    const T = url;
    expect(T.is("http://snomed.info/sct")).toEqual(true);
    expect(T.is(2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
