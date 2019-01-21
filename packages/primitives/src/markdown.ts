/**
 * Markdown FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity } from "io-ts";

const MARKDOWN_REGEX = /[^\s]+(\s[^\s]+)*/;

export class MarkdownType extends Type<string> {
  readonly _tag: "MarkdownType" = "MarkdownType";
  constructor() {
    super(
      "markdown",
      (m): m is string => typeof m === "string" && MARKDOWN_REGEX.test(m),
      (m, c) => (this.is(m) ? success(m) : failure(m, c)),
      identity
    );
  }
}

export const markdown = new MarkdownType();
