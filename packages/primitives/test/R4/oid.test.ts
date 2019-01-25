/**
 * Tests for OID Runtime Type
 */

import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";
import { oid } from "../../src/R4";

describe("OIDType", () => {
  it("should succeed validating a valid value", () => {
    const T = oid;
    const input = "urn:oid:1.2.3.4.5";
    assertSuccess(T.decode(input));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = oid;
    const value = "urn:oid:1.2.3.4.5";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = oid;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : oid"]);
  });

  it("should fail validating a string that doesn't match regex", () => {
    const T = oid;
    assertFailure(T.decode("https://www.hl7.org/fhir/datatypes.html"), [
      'Invalid value "https://www.hl7.org/fhir/datatypes.html" supplied to : oid'
    ]);
  });

  it("should type guard", () => {
    const T = oid;
    expect(T.is("urn:oid:1.2.3.4.5")).toEqual(true);
    expect(T.is(2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
