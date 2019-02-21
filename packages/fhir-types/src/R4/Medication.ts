/**
 * Medication Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Active or inactive ingredient
 */
export interface MedicationIngredient {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The actual ingredient or content */
  item: CodeableConcept | Reference;
  /** Active ingredient indicator */
  isActive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Quantity of ingredient present */
  strength?: Ratio;
}

export interface MedicationIngredientOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The actual ingredient or content */
  item: CodeableConceptOutputType | ReferenceOutputType;
  /** Active ingredient indicator */
  isActive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Quantity of ingredient present */
  strength?: RatioOutputType;
}

export const MedicationIngredient: t.RecursiveType<
  t.Type<MedicationIngredient, MedicationIngredientOutputType>,
  MedicationIngredient,
  MedicationIngredientOutputType
> = t.recursion<MedicationIngredient, MedicationIngredientOutputType>(
  "MedicationIngredient",
  () =>
    t.intersection(
      [
        t.type({
          /** The actual ingredient or content */
          item: t.union([CodeableConcept, Reference])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Active ingredient indicator */
          isActive: primitives.R4.boolean,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Quantity of ingredient present */
          strength: Ratio
        })
      ],
      "MedicationIngredient"
    )
);

/**
 * Details about packaged medications
 */
export interface MedicationBatch {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier assigned to batch */
  lotNumber?: t.TypeOf<primitives.R4.StringType>;
  /** When batch will expire */
  expirationDate?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface MedicationBatchOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifier assigned to batch */
  lotNumber?: t.OutputOf<primitives.R4.StringType>;
  /** When batch will expire */
  expirationDate?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const MedicationBatch: t.RecursiveType<
  t.Type<MedicationBatch, MedicationBatchOutputType>,
  MedicationBatch,
  MedicationBatchOutputType
> = t.recursion<MedicationBatch, MedicationBatchOutputType>(
  "MedicationBatch",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** When batch will expire */
          expirationDate: primitives.R4.dateTime,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Identifier assigned to batch */
          lotNumber: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "MedicationBatch"
    )
);

/**
 * Definition of a Medication
 */
export interface Medication {
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
  /** Business identifier for this medication */
  identifier?: Identifier[];
  /** Codes that identify this medication */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Manufacturer of the item */
  manufacturer?: Reference;
  /** powder | tablets | capsule + */
  form?: CodeableConcept;
  /** Amount of drug in package */
  amount?: Ratio;
  /** Active or inactive ingredient */
  ingredient?: MedicationIngredient[];
  /** Details about packaged medications */
  batch?: MedicationBatch;
}

export interface MedicationOutputType {
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
  /** Business identifier for this medication */
  identifier?: IdentifierOutputType[];
  /** Codes that identify this medication */
  code?: CodeableConceptOutputType;
  /** active | inactive | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Manufacturer of the item */
  manufacturer?: ReferenceOutputType;
  /** powder | tablets | capsule + */
  form?: CodeableConceptOutputType;
  /** Amount of drug in package */
  amount?: RatioOutputType;
  /** Active or inactive ingredient */
  ingredient?: MedicationIngredientOutputType[];
  /** Details about packaged medications */
  batch?: MedicationBatchOutputType;
}

export const Medication: t.RecursiveType<
  t.Type<Medication, MedicationOutputType>,
  Medication,
  MedicationOutputType
> = t.recursion<Medication, MedicationOutputType>("Medication", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Amount of drug in package */
        amount: Ratio,
        /** Details about packaged medications */
        batch: MedicationBatch,
        /** Codes that identify this medication */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** powder | tablets | capsule + */
        form: CodeableConcept,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier for this medication */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Active or inactive ingredient */
        ingredient: t.array(MedicationIngredient),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Manufacturer of the item */
        manufacturer: Reference,
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
    "Medication"
  )
);
