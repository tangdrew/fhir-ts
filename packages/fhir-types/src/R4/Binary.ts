/**
 * Binary Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Meta } from "./Meta";
import { Reference } from "./Reference";

/**
 * Pure binary content defined by a format other than FHIR
 */
export interface Binary {
  /** Logical id of this artifact */
  id?: primitives.R4.id;
  /** Extension of id element */
  _id?: Element;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: primitives.R4.uri;
  /** Extension of implicitRules element */
  _implicitRules?: Element;
  /** Language of the resource content */
  language?: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** MimeType of the binary content */
  contentType: primitives.R4.code;
  /** Extension of contentType element */
  _contentType?: Element;
  /** Identifies another resource to use as proxy when enforcing access control */
  securityContext?: Reference;
  /** The actual content */
  data?: primitives.R4.base64Binary;
  /** Extension of data element */
  _data?: Element;
}
/**
 * Pure binary content defined by a format other than FHIR
 */
export const Binary: t.Type<Binary> = t.recursion<Binary>("Binary", () =>
  t.intersection([
    t.type({
      /** MimeType of the binary content */
      contentType: primitives.R4.code
    }),
    t.partial({
      /** Logical id of this artifact */
      id: primitives.R4.id,
      /** Extension of id element */
      _id: Element,
      /** Metadata about the resource */
      meta: Meta,
      /** A set of rules under which this content was created */
      implicitRules: primitives.R4.uri,
      /** Extension of implicitRules element */
      _implicitRules: Element,
      /** Language of the resource content */
      language: primitives.R4.code,
      /** Extension of language element */
      _language: Element,
      /** Extension of contentType element */
      _contentType: Element,
      /** Identifies another resource to use as proxy when enforcing access control */
      securityContext: Reference,
      /** The actual content */
      data: primitives.R4.base64Binary,
      /** Extension of data element */
      _data: Element
    })
  ])
);
