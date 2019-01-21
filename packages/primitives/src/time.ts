/**
 * Time FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const TIME_REGEX = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/;

export class TimeType extends Type<string> {
  readonly _tag: "TimeType" = "TimeType";
  constructor() {
    super(
      "time",
      (m): m is string => typeof m === "string" && TIME_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

export const time = new TimeType();
