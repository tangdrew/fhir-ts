/**
 * Markdown FHIR Primitive Runtime Type
 */

import { Type, success, failure, identity, TypeOf } from "io-ts";

const MARKDOWN_REGEX = /[^\s]+(\s[^\s]+)*/;

const isMarkdown = (m: unknown): m is string =>
  typeof m === "string" && MARKDOWN_REGEX.test(m);

/**
 * A FHIR string that may contain markdown syntax for optional processing by a markdown presentation engine, in the GFM extension of CommonMark format.
 */
export const markdown = new Type<string>(
  "markdown",
  isMarkdown,
  (m, c) => (isMarkdown(m) ? success(m) : failure(m, c)),
  identity
);

export type markdown = TypeOf<typeof markdown>;
