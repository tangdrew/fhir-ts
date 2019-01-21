/**
 * Tests for Instant Runtime Type
 */

import { instant } from "../src";
import { assertSuccess, assertFailure, assertStrictEqual } from "./helpers";

describe("InstantType", () => {
  it("should succeed validating a valid value", () => {
    const T = instant;
    assertSuccess(T.decode("2015-02-07T13:28:17.239+02:00"));
  });

  it("should return the same reference if validation succeeded and nothing changed", () => {
    const T = instant;
    const value = "2015-02-07T13:28:17.239+02:00";
    assertStrictEqual(T.decode(value), value);
  });

  it("should fail validating an invalid value", () => {
    const T = instant;
    assertFailure(T.decode(2), ["Invalid value 2 supplied to : instant"]);
  });

  it("should fail validating non YYYY-MM-DDThh:mm:ss.sss+zz:zz formatted date", () => {
    const T = instant;
    assertFailure(T.decode("Mon Jan 21 2019 10:55:23 GMT-0600"), [
      'Invalid value "Mon Jan 21 2019 10:55:23 GMT-0600" supplied to : instant'
    ]);
  });

  it("should type guard", () => {
    const T = instant;
    expect(T.is("2015-02-07T13:28:17.239+02:00")).toEqual(true);
    expect(T.is(true)).toEqual(false);
    expect(T.is(undefined)).toEqual(false);
  });
});
