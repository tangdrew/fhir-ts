/**
 * Binary Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Meta, MetaOutputType } from "./Meta";
import { Reference, ReferenceOutputType } from "./Reference";

/**
 * Pure binary content defined by a format other than FHIR
 */
export interface Binary {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** MimeType of the binary content */
  contentType: t.TypeOf<primitives.R4.CodeType>;
  /** Identifies another resource to use as proxy when enforcing access control */
  securityContext?: Reference;
  /** The actual content */
  data?: t.TypeOf<primitives.R4.Base64BinaryType>;
}

export interface BinaryOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** MimeType of the binary content */
  contentType: t.OutputOf<primitives.R4.CodeType>;
  /** Identifies another resource to use as proxy when enforcing access control */
  securityContext?: ReferenceOutputType;
  /** The actual content */
  data?: t.OutputOf<primitives.R4.Base64BinaryType>;
}

export const Binary: t.RecursiveType<
  t.Type<Binary, BinaryOutputType>,
  Binary,
  BinaryOutputType
> = t.recursion<Binary, BinaryOutputType>("Binary", () =>
  t.intersection(
    [
      t.type({
        /** MimeType of the binary content */
        contentType: primitives.R4.code
      }),
      t.partial({
        /** The actual content */
        data: primitives.R4.base64Binary,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Identifies another resource to use as proxy when enforcing access control */
        securityContext: Reference
      })
    ],
    "Binary"
  )
);
