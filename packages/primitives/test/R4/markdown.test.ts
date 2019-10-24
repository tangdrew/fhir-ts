/**
 * Tests for Markdown Runtime Type
 */

import { markdown } from "../../src/R4";
import { assertSuccess, assertFailure, assertEqual } from "./helpers";

describe("MarkdownType", () => {
  it("should succeed validating a valid value", () => {
    const T = markdown;
    assertSuccess(T.decode("# H1\n - bullet point"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = markdown;
    const value = "# H1\n - bullet point";
    assertEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = markdown;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : markdown"]);
  });

  // TODO: Improve unicode check in regex
  xit("should fail validating a string with invalid characters", () => {
    const T = markdown;
    assertFailure(T.decode("\0"), [
      'Invalid value "\\u0000" supplied to : markdown'
    ]);
  });

  it("should type guard", () => {
    const T = markdown;
    expect(T.is("# H1\n - bullet point")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
