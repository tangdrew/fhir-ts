/**
 * Tests for ID Runtime Type
 */

import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";
import { id } from "../src";

describe("IDType", () => {
  it("should succeed validating a valid value", () => {
    const T = id;
    const input = "5e8c5a39-ac09-4a1e-9769-c61192b4355d";
    assertSuccess(T.decode(input));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = id;
    const value = "5e8c5a39-ac09-4a1e-9769-c61192b4355d";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = id;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : id"]);
  });

  // TODO: Improve regex so this fails
  xit("should fail validating a string that doesn't match regex", () => {
    const T = id;
    assertFailure(T.decode("invalid{}"), [
      'Invalid value "invalid{}" supplied to : id'
    ]);
  });

  // TODO: Improve regex so this fails
  xit("should fail validating a string that is greater than 64 characters", () => {
    const T = id;
    assertFailure(
      T.decode(
        "5e8c5a39-ac09-4a1e-9769-c61192b4355d5e8c5a39-ac09-4a1e-9769-c61192b4355d"
      ),
      [
        'Invalid value "5e8c5a39-ac09-4a1e-9769-c61192b4355d5e8c5a39-ac09-4a1e-9769-c61192b4355d" supplied to : id'
      ]
    );
  });

  it("should type guard", () => {
    const T = id;
    expect(T.is("5e8c5a39-ac09-4a1e-9769-c61192b4355d")).toEqual(true);
    expect(T.is(2)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
