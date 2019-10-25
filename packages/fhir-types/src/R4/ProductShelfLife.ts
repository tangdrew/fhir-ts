/**
 * ProductShelfLife Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Quantity } from "./Quantity";

/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class
 */
export interface ProductShelfLife {
  /** The type of resource */
  resourceType?: "ProductShelfLife";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Unique identifier for the packaged Medicinal Product */
  identifier?: Identifier;
  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
  type: CodeableConcept;
  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
  period: Quantity;
  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
  specialPrecautionsForStorage?: CodeableConcept[];
}
/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class
 */
export const ProductShelfLife: t.Type<ProductShelfLife> = t.recursion<
  ProductShelfLife
>("ProductShelfLife", () =>
  t.intersection([
    t.type({
      /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
      type: CodeableConcept,
      /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used */
      period: Quantity
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ProductShelfLife"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Unique identifier for the packaged Medicinal Product */
      identifier: Identifier,
      /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified */
      specialPrecautionsForStorage: t.array(CodeableConcept)
    })
  ])
);
