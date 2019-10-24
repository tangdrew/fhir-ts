/**
 * OID FHIR Primitive Runtime Type
 */

import { uri } from "./uri";
import { Type, success, failure, identity, TypeOf } from "io-ts";

const OID_REGEX = /urn:oid:[0-2](\.(0|[1-9][0-9]*))+/;

const isOid = (m: unknown): m is string => uri.is(m) && OID_REGEX.test(m);

/**
 * An OID represented as a URI.
 */
export const oid = new Type<string>(
  "oid",
  isOid,
  (m, c) => (isOid(m) ? success(m) : failure(m, c)),
  identity
);

export type oid = TypeOf<typeof oid>;
