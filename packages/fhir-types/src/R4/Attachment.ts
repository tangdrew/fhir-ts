/**
 * Attachment Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Content in a format defined elsewhere
 */
export interface Attachment {
  /** The type of resource */
  resourceType?: "Attachment";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Mime type of the content, with charset etc. */
  contentType?: primitives.R4.code;
  /** Extension of contentType element */
  _contentType?: Element;
  /** Human language of the content (BCP-47) */
  language?: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** Data inline, base64ed */
  data?: primitives.R4.base64Binary;
  /** Extension of data element */
  _data?: Element;
  /** Uri where the data can be found */
  url?: primitives.R4.url;
  /** Extension of url element */
  _url?: Element;
  /** Number of bytes of content (if url provided) */
  size?: primitives.R4.unsignedInt;
  /** Extension of size element */
  _size?: Element;
  /** Hash of the data (sha-1, base64ed) */
  hash?: primitives.R4.base64Binary;
  /** Extension of hash element */
  _hash?: Element;
  /** Label to display in place of the data */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Date attachment was first created */
  creation?: primitives.R4.dateTime;
  /** Extension of creation element */
  _creation?: Element;
}
/**
 * Content in a format defined elsewhere
 */
export const Attachment: t.Type<Attachment> = t.recursion<Attachment>(
  "Attachment",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Attachment"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Mime type of the content, with charset etc. */
        contentType: primitives.R4.code,
        /** Extension of contentType element */
        _contentType: Element,
        /** Human language of the content (BCP-47) */
        language: primitives.R4.code,
        /** Extension of language element */
        _language: Element,
        /** Data inline, base64ed */
        data: primitives.R4.base64Binary,
        /** Extension of data element */
        _data: Element,
        /** Uri where the data can be found */
        url: primitives.R4.url,
        /** Extension of url element */
        _url: Element,
        /** Number of bytes of content (if url provided) */
        size: primitives.R4.unsignedInt,
        /** Extension of size element */
        _size: Element,
        /** Hash of the data (sha-1, base64ed) */
        hash: primitives.R4.base64Binary,
        /** Extension of hash element */
        _hash: Element,
        /** Label to display in place of the data */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Date attachment was first created */
        creation: primitives.R4.dateTime,
        /** Extension of creation element */
        _creation: Element
      })
    ])
);
