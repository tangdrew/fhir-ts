/**
 * Tests for XHTML Runtime Type
 */

import { xhtml } from "../../src/R4";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("XHTMLType", () => {
  it("should succeed validating a valid value", () => {
    const T = xhtml;
    assertSuccess(T.decode("<div>Hello World!</div>"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = xhtml;
    const value = "<div>Hello World!</div>";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = xhtml;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : xhtml"]);
  });

  // TODO: Do actual xhtml validation
  xit("should fail validating a string that is not valid xhtml", () => {
    const T = xhtml;
    assertFailure(T.decode("Invalid xhtml"), [
      'Invalid value "Invalid xhtml" supplied to : xhtml'
    ]);
  });

  it("should type guard", () => {
    const T = xhtml;
    expect(T.is("<div>Hello World!</div>")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
