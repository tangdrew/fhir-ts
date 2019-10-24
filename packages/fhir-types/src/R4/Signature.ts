/**
 * Signature Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";

/**
 * A Signature - XML DigSig, JWS, Graphical image of signature, etc.
 */
export interface Signature {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Indication of the reason the entity signed the object(s) */
  type: Coding[];
  /** When the signature was created */
  when: primitives.R4.instant;
  /** Extension of when element */
  _when?: Element;
  /** Who signed */
  who: Reference;
  /** The party represented */
  onBehalfOf?: Reference;
  /** The technical format of the signed resources */
  targetFormat?: primitives.R4.code;
  /** Extension of targetFormat element */
  _targetFormat?: Element;
  /** The technical format of the signature */
  sigFormat?: primitives.R4.code;
  /** Extension of sigFormat element */
  _sigFormat?: Element;
  /** The actual signature content (XML DigSig. JWS, picture, etc.) */
  data?: primitives.R4.base64Binary;
  /** Extension of data element */
  _data?: Element;
}
/**
 * A Signature - XML DigSig, JWS, Graphical image of signature, etc.
 */
export const Signature: t.Type<Signature> = t.recursion<Signature>(
  "Signature",
  () =>
    t.intersection([
      t.type({
        /** Indication of the reason the entity signed the object(s) */
        type: t.array(Coding),
        /** When the signature was created */
        when: primitives.R4.instant,
        /** Who signed */
        who: Reference
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of when element */
        _when: Element,
        /** The party represented */
        onBehalfOf: Reference,
        /** The technical format of the signed resources */
        targetFormat: primitives.R4.code,
        /** Extension of targetFormat element */
        _targetFormat: Element,
        /** The technical format of the signature */
        sigFormat: primitives.R4.code,
        /** Extension of sigFormat element */
        _sigFormat: Element,
        /** The actual signature content (XML DigSig. JWS, picture, etc.) */
        data: primitives.R4.base64Binary,
        /** Extension of data element */
        _data: Element
      })
    ])
);
