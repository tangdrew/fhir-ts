/**
 * Tests for Code Runtime Type
 */

import { code } from "../../src/R4";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("CodeType", () => {
  it("should succeed validating a valid value", () => {
    const T = code;
    assertSuccess(T.decode("55423-8"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = code;
    const value = "55423-8";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = code;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : code"]);
  });

  // TODO: Improve regex so this fails
  xit("should fail validating a string with invalid characters", () => {
    const T = code;
    assertFailure(T.decode("invalid\tcode"), [
      'Invalid value "invalid\tcode" supplied to : code'
    ]);
  });

  it("should type guard", () => {
    const T = code;
    expect(T.is("55423-8")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
