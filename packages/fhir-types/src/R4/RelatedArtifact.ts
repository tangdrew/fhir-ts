/**
 * RelatedArtifact Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Related artifacts for a knowledge resource
 */
export interface RelatedArtifact {
  /** The type of resource */
  resourceType?: "RelatedArtifact";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Short label */
  label?: string;
  /** Extension of label element */
  _label?: Element;
  /** Brief description of the related artifact */
  display?: string;
  /** Extension of display element */
  _display?: Element;
  /** Bibliographic citation for the artifact */
  citation?: primitives.R4.markdown;
  /** Extension of citation element */
  _citation?: Element;
  /** Where the artifact can be accessed */
  url?: primitives.R4.url;
  /** Extension of url element */
  _url?: Element;
  /** What document is being referenced */
  document?: Attachment;
  /** What resource is being referenced */
  resource?: primitives.R4.canonical;
  /** Extension of resource element */
  _resource?: Element;
}
/**
 * Related artifacts for a knowledge resource
 */
export const RelatedArtifact: t.Type<RelatedArtifact> = t.recursion<
  RelatedArtifact
>("RelatedArtifact", () =>
  t.intersection([
    t.type({
      /** documentation | justification | citation | predecessor | successor | derived-from | depends-on | composed-of */
      type: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("RelatedArtifact"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of type element */
      _type: Element,
      /** Short label */
      label: primitives.R4.string,
      /** Extension of label element */
      _label: Element,
      /** Brief description of the related artifact */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element,
      /** Bibliographic citation for the artifact */
      citation: primitives.R4.markdown,
      /** Extension of citation element */
      _citation: Element,
      /** Where the artifact can be accessed */
      url: primitives.R4.url,
      /** Extension of url element */
      _url: Element,
      /** What document is being referenced */
      document: Attachment,
      /** What resource is being referenced */
      resource: primitives.R4.canonical,
      /** Extension of resource element */
      _resource: Element
    })
  ])
);
