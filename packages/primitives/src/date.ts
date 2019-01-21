/**
 * Date FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

// TODO: This regex seems too permissive
const DATE_REGEX = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?/;

export class DateType extends Type<string> {
  readonly _tag: "DateType" = "DateType";
  constructor() {
    super(
      "date",
      (m): m is string => typeof m === "string" && DATE_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

export const date = new DateType();
