/**
 * Substance Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * If this describes a specific package/container of the substance
 */
export interface SubstanceInstance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier of the package/container */
  identifier?: Identifier;
  /** When no longer valid to use */
  expiry?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Amount of substance in the package */
  quantity?: Quantity;
}

export interface SubstanceInstanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifier of the package/container */
  identifier?: IdentifierOutputType;
  /** When no longer valid to use */
  expiry?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Amount of substance in the package */
  quantity?: QuantityOutputType;
}

export const SubstanceInstance: t.RecursiveType<
  t.Type<SubstanceInstance, SubstanceInstanceOutputType>,
  SubstanceInstance,
  SubstanceInstanceOutputType
> = t.recursion<SubstanceInstance, SubstanceInstanceOutputType>(
  "SubstanceInstance",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** When no longer valid to use */
          expiry: primitives.R4.dateTime,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Identifier of the package/container */
          identifier: Identifier,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Amount of substance in the package */
          quantity: Quantity
        })
      ],
      "SubstanceInstance"
    )
);

/**
 * Composition information about the substance
 */
export interface SubstanceIngredient {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Optional amount (concentration) */
  quantity?: Ratio;
  /** A component of the substance */
  substance: CodeableConcept | Reference;
}

export interface SubstanceIngredientOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Optional amount (concentration) */
  quantity?: RatioOutputType;
  /** A component of the substance */
  substance: CodeableConceptOutputType | ReferenceOutputType;
}

export const SubstanceIngredient: t.RecursiveType<
  t.Type<SubstanceIngredient, SubstanceIngredientOutputType>,
  SubstanceIngredient,
  SubstanceIngredientOutputType
> = t.recursion<SubstanceIngredient, SubstanceIngredientOutputType>(
  "SubstanceIngredient",
  () =>
    t.intersection(
      [
        t.type({
          /** A component of the substance */
          substance: t.union([CodeableConcept, Reference])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Optional amount (concentration) */
          quantity: Ratio
        })
      ],
      "SubstanceIngredient"
    )
);

/**
 * A homogeneous material with a definite composition
 */
export interface Substance {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
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
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** What class/type of substance this is */
  category?: CodeableConcept[];
  /** What substance this is */
  code: CodeableConcept;
  /** Textual description of the substance, comments */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** If this describes a specific package/container of the substance */
  instance?: SubstanceInstance[];
  /** Composition information about the substance */
  ingredient?: SubstanceIngredient[];
}

export interface SubstanceOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Text summary of the resource, for human interpretation */
  text?: NarrativeOutputType;
  /** Contained, inline Resources */
  contained?: ResourceOutputType[];
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored */
  modifierExtension?: ExtensionOutputType[];
  /** Unique identifier */
  identifier?: IdentifierOutputType[];
  /** active | inactive | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** What class/type of substance this is */
  category?: CodeableConceptOutputType[];
  /** What substance this is */
  code: CodeableConceptOutputType;
  /** Textual description of the substance, comments */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** If this describes a specific package/container of the substance */
  instance?: SubstanceInstanceOutputType[];
  /** Composition information about the substance */
  ingredient?: SubstanceIngredientOutputType[];
}

export const Substance: t.RecursiveType<
  t.Type<Substance, SubstanceOutputType>,
  Substance,
  SubstanceOutputType
> = t.recursion<Substance, SubstanceOutputType>("Substance", () =>
  t.intersection(
    [
      t.type({
        /** What substance this is */
        code: CodeableConcept
      }),
      t.partial({
        /** What class/type of substance this is */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Textual description of the substance, comments */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Unique identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Composition information about the substance */
        ingredient: t.array(SubstanceIngredient),
        /** If this describes a specific package/container of the substance */
        instance: t.array(SubstanceInstance),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** active | inactive | entered-in-error */
        status: primitives.R4.code,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Substance"
  )
);
