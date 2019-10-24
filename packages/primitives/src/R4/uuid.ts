/**
 * UUID FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const UUID_REGEX = /\S*/;

const isUuid = (m: unknown): m is string =>
  typeof m === "string" && UUID_REGEX.test(m);

/**
 * A UUID (aka GUID) represented as a URI.
 */
export const uuid = new Type<string>(
  "uuid",
  isUuid,
  (m, c) => (isUuid(m) ? success(m) : failure(m, c)),
  identity
);

export type uuid = TypeOf<typeof uuid>;
