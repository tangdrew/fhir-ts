/**
 * Tests for UUID Runtime Type
 */

import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";
import { uuid } from "../../src/R4";

describe("UUIDType", () => {
  it("should succeed validating a valid value", () => {
    const T = uuid;
    const input = "urn:uuid:c757873d-ec9a-4326-a141-556f43239520";
    assertSuccess(T.decode(input));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = uuid;
    const value = "urn:uuid:c757873d-ec9a-4326-a141-556f43239520";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = uuid;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : uuid"]);
  });

  it("should type guard", () => {
    const T = uuid;
    expect(T.is("urn:uuid:c757873d-ec9a-4326-a141-556f43239520")).toEqual(true);
    expect(T.is(2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
