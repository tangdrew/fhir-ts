/**
 * OID FHIR Primitive Runtime Type
 */

import { uri } from "./uri";
import { Type, success, failure, identity } from "io-ts";

const OID_REGEX = /urn:oid:[0-2](\.(0|[1-9][0-9]*))+/;

export class OIDType extends Type<string> {
  readonly _tag: "OIDType" = "OIDType";
  constructor() {
    super(
      "oid",
      (m): m is string => uri.is(m) && OID_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * An OID represented as a URI.
 */
export const oid = new OIDType();
