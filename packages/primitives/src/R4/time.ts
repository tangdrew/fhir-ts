/**
 * Time FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const TIME_REGEX = /([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?/;

const isTime = (m: unknown): m is string =>
  typeof m === "string" && TIME_REGEX.test(m);

/**
 * A time during the day, in the format hh:mm:ss.
 */
export const time = new Type<string>(
  "time",
  isTime,
  (m, c) => (isTime(m) ? success(m) : failure(m, c)),
  identity
);

export type time = TypeOf<typeof time>;
