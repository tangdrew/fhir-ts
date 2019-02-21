/**
 * ProdCharacteristic Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
 */
export interface ProdCharacteristic {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  shape?: t.TypeOf<primitives.R4.StringType>;
  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  color?: t.TypeOf<primitives.R4.StringType>[];
  /** Where applicable, the imprint can be specified as text */
  imprint?: t.TypeOf<primitives.R4.StringType>[];
  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations */
  image?: Attachment[];
  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  scoring?: CodeableConcept;
}

export interface ProdCharacteristicOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  height?: QuantityOutputType;
  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  width?: QuantityOutputType;
  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  depth?: QuantityOutputType;
  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  weight?: QuantityOutputType;
  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  nominalVolume?: QuantityOutputType;
  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  externalDiameter?: QuantityOutputType;
  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  shape?: t.OutputOf<primitives.R4.StringType>;
  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  color?: t.OutputOf<primitives.R4.StringType>[];
  /** Where applicable, the imprint can be specified as text */
  imprint?: t.OutputOf<primitives.R4.StringType>[];
  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations */
  image?: AttachmentOutputType[];
  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
  scoring?: CodeableConceptOutputType;
}

export const ProdCharacteristic: t.RecursiveType<
  t.Type<ProdCharacteristic, ProdCharacteristicOutputType>,
  ProdCharacteristic,
  ProdCharacteristicOutputType
> = t.recursion<ProdCharacteristic, ProdCharacteristicOutputType>(
  "ProdCharacteristic",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
          color: t.array(primitives.R4.string),
          /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
          depth: Quantity,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
          externalDiameter: Quantity,
          /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
          height: Quantity,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations */
          image: t.array(Attachment),
          /** Where applicable, the imprint can be specified as text */
          imprint: t.array(primitives.R4.string),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
          nominalVolume: Quantity,
          /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
          scoring: CodeableConcept,
          /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used */
          shape: primitives.R4.string,
          /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
          weight: Quantity,
          /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
          width: Quantity
        })
      ],
      "ProdCharacteristic"
    )
);
