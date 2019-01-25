/**
 * UUID FHIR Primitive Runtime Type
 */

import { uri } from "./uri";
import { Type, success, failure, identity } from "io-ts";

export class UUIDType extends Type<string> {
  readonly _tag: "UUIDType" = "UUIDType";
  constructor() {
    super(
      "uuid",
      uri.is,
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A UUID (aka GUID) represented as a URI.
 */
export const uuid = new UUIDType();
