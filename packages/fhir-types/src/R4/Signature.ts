/**
 * Signature Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Reference, ReferenceOutputType } from "./Reference";

/**
 * A Signature - XML DigSig, JWS, Graphical image of signature, etc.
 */
export interface Signature {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Indication of the reason the entity signed the object(s) */
  type: Coding[];
  /** When the signature was created */
  when: t.TypeOf<primitives.R4.InstantType>;
  /** Who signed */
  who: Reference;
  /** The party represented */
  onBehalfOf?: Reference;
  /** The technical format of the signed resources */
  targetFormat?: t.TypeOf<primitives.R4.CodeType>;
  /** The technical format of the signature */
  sigFormat?: t.TypeOf<primitives.R4.CodeType>;
  /** The actual signature content (XML DigSig. JWS, picture, etc.) */
  data?: t.TypeOf<primitives.R4.Base64BinaryType>;
}

export interface SignatureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Indication of the reason the entity signed the object(s) */
  type: CodingOutputType[];
  /** When the signature was created */
  when: t.OutputOf<primitives.R4.InstantType>;
  /** Who signed */
  who: ReferenceOutputType;
  /** The party represented */
  onBehalfOf?: ReferenceOutputType;
  /** The technical format of the signed resources */
  targetFormat?: t.OutputOf<primitives.R4.CodeType>;
  /** The technical format of the signature */
  sigFormat?: t.OutputOf<primitives.R4.CodeType>;
  /** The actual signature content (XML DigSig. JWS, picture, etc.) */
  data?: t.OutputOf<primitives.R4.Base64BinaryType>;
}

export const Signature: t.RecursiveType<
  t.Type<Signature, SignatureOutputType>,
  Signature,
  SignatureOutputType
> = t.recursion<Signature, SignatureOutputType>("Signature", () =>
  t.intersection(
    [
      t.type({
        /** Indication of the reason the entity signed the object(s) */
        type: t.array(Coding),
        /** When the signature was created */
        when: primitives.R4.instant,
        /** Who signed */
        who: Reference
      }),
      t.partial({
        /** The actual signature content (XML DigSig. JWS, picture, etc.) */
        data: primitives.R4.base64Binary,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The party represented */
        onBehalfOf: Reference,
        /** The technical format of the signature */
        sigFormat: primitives.R4.code,
        /** The technical format of the signed resources */
        targetFormat: primitives.R4.code
      })
    ],
    "Signature"
  )
);
