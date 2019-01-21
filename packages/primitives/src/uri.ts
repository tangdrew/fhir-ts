/**
 * URI FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const URI_REGEX = /\S*/;

export class URIType extends Type<string> {
  readonly _tag: "URIType" = "URIType";
  constructor() {
    super(
      "uri",
      (m): m is string => typeof m === "string" && URI_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

export const uri = new URIType();
