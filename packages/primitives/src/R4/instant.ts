/**
 * Instant FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const INSTANT_REGEX = /([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))/;

const isInstant = (m: unknown): m is string =>
  typeof m === "string" && INSTANT_REGEX.test(m);

/**
 * An instant in time in the format YYYY-MM-DDThh:mm:ss.sss+zz:zz.
 */
export const instant = new Type<string>(
  "instant",
  isInstant,
  (m, c) => (isInstant(m) ? success(m) : failure(m, c)),
  identity
);

export type instant = TypeOf<typeof instant>;
