/**
 * Attachment Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Content in a format defined elsewhere
 */
export interface Attachment {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Mime type of the content, with charset etc. */
  contentType?: t.TypeOf<primitives.R4.CodeType>;
  /** Human language of the content (BCP-47) */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Data inline, base64ed */
  data?: t.TypeOf<primitives.R4.Base64BinaryType>;
  /** Uri where the data can be found */
  url?: t.TypeOf<primitives.R4.URLType>;
  /** Number of bytes of content (if url provided) */
  size?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Hash of the data (sha-1, base64ed) */
  hash?: t.TypeOf<primitives.R4.Base64BinaryType>;
  /** Label to display in place of the data */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Date attachment was first created */
  creation?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface AttachmentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Mime type of the content, with charset etc. */
  contentType?: t.OutputOf<primitives.R4.CodeType>;
  /** Human language of the content (BCP-47) */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Data inline, base64ed */
  data?: t.OutputOf<primitives.R4.Base64BinaryType>;
  /** Uri where the data can be found */
  url?: t.OutputOf<primitives.R4.URLType>;
  /** Number of bytes of content (if url provided) */
  size?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Hash of the data (sha-1, base64ed) */
  hash?: t.OutputOf<primitives.R4.Base64BinaryType>;
  /** Label to display in place of the data */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Date attachment was first created */
  creation?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const Attachment: t.RecursiveType<
  t.Type<Attachment, AttachmentOutputType>,
  Attachment,
  AttachmentOutputType
> = t.recursion<Attachment, AttachmentOutputType>("Attachment", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Mime type of the content, with charset etc. */
        contentType: primitives.R4.code,
        /** Date attachment was first created */
        creation: primitives.R4.dateTime,
        /** Data inline, base64ed */
        data: primitives.R4.base64Binary,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Hash of the data (sha-1, base64ed) */
        hash: primitives.R4.base64Binary,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Human language of the content (BCP-47) */
        language: primitives.R4.code,
        /** Number of bytes of content (if url provided) */
        size: primitives.R4.unsignedInt,
        /** Label to display in place of the data */
        title: primitives.R4.string,
        /** Uri where the data can be found */
        url: primitives.R4.url
      })
    ],
    "Attachment"
  )
);
