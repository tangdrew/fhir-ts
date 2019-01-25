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

/**
 * A FHIR string that may contain markdown syntax for optional processing by a markdown presentation engine, in the GFM extension of CommonMark format.
 */
export const markdown = new MarkdownType();
