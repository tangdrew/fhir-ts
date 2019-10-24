/**
 * Tests for URI Runtime Type
 */

import { assertSuccess, assertFailure, assertEqual } from "./helpers";
import { uri } from "../../src/R4";

describe("URIType", () => {
  it("should succeed validating a valid value", () => {
    const T = uri;
    const input = "http://snomed.info/sct";
    assertSuccess(T.decode(input));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = uri;
    const value = "http://snomed.info/sct";
    assertEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = uri;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : uri"]);
  });

  it("should type guard", () => {
    const T = uri;
    expect(T.is("http://snomed.info/sct")).toEqual(true);
    expect(T.is(2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
