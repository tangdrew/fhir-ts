/**
 * Instant FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const INSTANT_REGEX = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))/;

export class InstantType extends Type<string> {
  readonly _tag: "InstantType" = "InstantType";
  constructor() {
    super(
      "instant",
      (m): m is string => typeof m === "string" && INSTANT_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

export const instant = new InstantType();
