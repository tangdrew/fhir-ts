/**
 * Canonical URL FHIR Primitive Runtime Type
 */

import { uri } from "./uri";
import { Type, success, failure, identity } from "io-ts";

export class CanonicalType extends Type<string> {
  readonly _tag: "CanonicalType" = "CanonicalType";
  constructor() {
    super(
      "canonical",
      uri.is,
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A URI that refers to a resource by its canonical URL.
 */
export const canonical = new CanonicalType();
