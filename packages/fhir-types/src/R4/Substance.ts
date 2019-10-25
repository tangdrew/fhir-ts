/**
 * Substance Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A homogeneous material with a definite composition
 */
export interface Substance {
  /** The type of resource */
  resourceType?: "Substance";
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
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
  /** Unique identifier */
  identifier?: Identifier[];
  /** active | inactive | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** What class/type of substance this is */
  category?: CodeableConcept[];
  /** What substance this is */
  code: CodeableConcept;
  /** Textual description of the substance, comments */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * A homogeneous material with a definite composition
 */
export const Substance: t.Type<Substance> = t.recursion<Substance>(
  "Substance",
  () =>
    t.intersection([
      t.type({
        /** What substance this is */
        code: CodeableConcept
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Substance"),
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
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Unique identifier */
        identifier: t.array(Identifier),
        /** active | inactive | entered-in-error */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** What class/type of substance this is */
        category: t.array(CodeableConcept),
        /** Textual description of the substance, comments */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * If this describes a specific package/container of the substance
 */
export interface SubstanceInstance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier of the package/container */
  identifier?: Identifier;
  /** When no longer valid to use */
  expiry?: primitives.R4.dateTime;
  /** Extension of expiry element */
  _expiry?: Element;
  /** Amount of substance in the package */
  quantity?: Quantity;
}
/**
 * If this describes a specific package/container of the substance
 */
export const SubstanceInstance: t.Type<SubstanceInstance> = t.recursion<
  SubstanceInstance
>("SubstanceInstance", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Identifier of the package/container */
      identifier: Identifier,
      /** When no longer valid to use */
      expiry: primitives.R4.dateTime,
      /** Extension of expiry element */
      _expiry: Element,
      /** Amount of substance in the package */
      quantity: Quantity
    })
  ])
);

/**
 * Composition information about the substance
 */
export interface SubstanceIngredient {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Optional amount (concentration) */
  quantity?: Ratio;
  /** A component of the substance */
  substanceCodeableConcept: CodeableConcept;
  /** A component of the substance */
  substanceReference: Reference;
}
/**
 * Composition information about the substance
 */
export const SubstanceIngredient: t.Type<SubstanceIngredient> = t.recursion<
  SubstanceIngredient
>("SubstanceIngredient", () =>
  t.intersection([
    t.type({
      /** A component of the substance */
      substanceCodeableConcept: CodeableConcept,
      /** A component of the substance */
      substanceReference: Reference
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Optional amount (concentration) */
      quantity: Ratio
    })
  ])
);
