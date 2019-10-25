/**
 * ProdCharacteristic Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
 */
export interface ProdCharacteristic {
  /** The type of resource */
  resourceType?: "ProdCharacteristic";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  height?: Quantity;
  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  width?: Quantity;
  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  depth?: Quantity;
  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  weight?: Quantity;
  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  nominalVolume?: Quantity;
  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  externalDiameter?: Quantity;
  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  shape?: string;
  /** Extension of shape element */
  _shape?: Element;
  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  color?: string[];
  /** Extension of color element */
  _color?: Element[];
  /** Where applicable, the imprint can be specified as text */
  imprint?: string[];
  /** Extension of imprint element */
  _imprint?: Element[];
  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations */
  image?: Attachment[];
  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  scoring?: CodeableConcept;
}
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
 */
export const ProdCharacteristic: t.Type<ProdCharacteristic> = t.recursion<
  ProdCharacteristic
>("ProdCharacteristic", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ProdCharacteristic"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      height: Quantity,
      /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      width: Quantity,
      /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      depth: Quantity,
      /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      weight: Quantity,
      /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      nominalVolume: Quantity,
      /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      externalDiameter: Quantity,
      /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
      shape: primitives.R4.string,
      /** Extension of shape element */
      _shape: Element,
      /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
      color: t.array(primitives.R4.string),
      /** Extension of color element */
      _color: t.array(Element),
      /** Where applicable, the imprint can be specified as text */
      imprint: t.array(primitives.R4.string),
      /** Extension of imprint element */
      _imprint: t.array(Element),
      /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations */
      image: t.array(Attachment),
      /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
      scoring: CodeableConcept
    })
  ])
);
