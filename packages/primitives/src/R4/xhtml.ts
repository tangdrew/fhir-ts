/**
 * XHTML FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const STRING_REGEX = /[ \r\n\t\S]+/;

export class XHTMLType extends Type<string> {
  readonly _tag: "XHTMLType" = "XHTMLType";
  constructor() {
    super(
      "xhtml",
      (m): m is string => typeof m === "string" && STRING_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

/**
 * A XHTML fragment.
 */
export const xhtml = new XHTMLType();
