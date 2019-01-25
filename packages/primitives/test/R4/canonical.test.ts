/**
 * Tests for Canonical URL Runtime Type
 */

import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";
import { canonical } from "../../src/R4";

describe("CanonicalType", () => {
  it("should succeed validating a valid value", () => {
    const T = canonical;
    const input = "http://snomed.info/sct";
    assertSuccess(T.decode(input));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = canonical;
    const value = "http://snomed.info/sct";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = canonical;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : canonical"]);
  });

  it("should type guard", () => {
    const T = canonical;
    expect(T.is("http://snomed.info/sct")).toEqual(true);
    expect(T.is(2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
