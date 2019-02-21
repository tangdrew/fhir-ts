/**
 * RelatedArtifact Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Related artifacts for a knowledge resource
 */
export interface RelatedArtifact {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Short label */
  label?: t.TypeOf<primitives.R4.StringType>;
  /** Brief description of the related artifact */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** Bibliographic citation for the artifact */
  citation?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Where the artifact can be accessed */
  url?: t.TypeOf<primitives.R4.URLType>;
  /** What document is being referenced */
  document?: Attachment;
  /** What resource is being referenced */
  resource?: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface RelatedArtifactOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Short label */
  label?: t.OutputOf<primitives.R4.StringType>;
  /** Brief description of the related artifact */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** Bibliographic citation for the artifact */
  citation?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Where the artifact can be accessed */
  url?: t.OutputOf<primitives.R4.URLType>;
  /** What document is being referenced */
  document?: AttachmentOutputType;
  /** What resource is being referenced */
  resource?: t.OutputOf<primitives.R4.CanonicalType>;
}

export const RelatedArtifact: t.RecursiveType<
  t.Type<RelatedArtifact, RelatedArtifactOutputType>,
  RelatedArtifact,
  RelatedArtifactOutputType
> = t.recursion<RelatedArtifact, RelatedArtifactOutputType>(
  "RelatedArtifact",
  () =>
    t.intersection(
      [
        t.type({
          /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of */
          type: primitives.R4.code
        }),
        t.partial({
          /** Bibliographic citation for the artifact */
          citation: primitives.R4.markdown,
          /** Brief description of the related artifact */
          display: primitives.R4.string,
          /** What document is being referenced */
          document: Attachment,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Short label */
          label: primitives.R4.string,
          /** What resource is being referenced */
          resource: primitives.R4.canonical,
          /** Where the artifact can be accessed */
          url: primitives.R4.url
        })
      ],
      "RelatedArtifact"
    )
);
