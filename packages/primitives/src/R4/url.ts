/**
 * URL FHIR Primitive Runtime Type
 */

import { uri } from "./uri";
import { Type, success, failure, identity } from "io-ts";

export class URLType extends Type<string> {
  readonly _tag: "URLType" = "URLType";
  constructor() {
    super(
      "url",
      uri.is,
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A Uniform Resource Locator.
 */
export const url = new URLType();
