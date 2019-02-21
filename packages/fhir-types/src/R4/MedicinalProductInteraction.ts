/**
 * MedicinalProductInteraction Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The specific medication, food or laboratory test that interacts
 */
export interface MedicinalProductInteractionInteractant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The specific medication, food or laboratory test that interacts */
  item: Reference | CodeableConcept;
}

export interface MedicinalProductInteractionInteractantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The specific medication, food or laboratory test that interacts */
  item: ReferenceOutputType | CodeableConceptOutputType;
}

export const MedicinalProductInteractionInteractant: t.RecursiveType<
  t.Type<
    MedicinalProductInteractionInteractant,
    MedicinalProductInteractionInteractantOutputType
  >,
  MedicinalProductInteractionInteractant,
  MedicinalProductInteractionInteractantOutputType
> = t.recursion<
  MedicinalProductInteractionInteractant,
  MedicinalProductInteractionInteractantOutputType
>("MedicinalProductInteractionInteractant", () =>
  t.intersection(
    [
      t.type({
        /** The specific medication, food or laboratory test that interacts */
        item: t.union([Reference, CodeableConcept])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicinalProductInteractionInteractant"
  )
);

/**
 * MedicinalProductInteraction
 */
export interface MedicinalProductInteraction {
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
  /** The medication for which this is a described interaction */
  subject?: Reference[];
  /** The interaction described */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** The specific medication, food or laboratory test that interacts */
  interactant?: MedicinalProductInteractionInteractant[];
  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction */
  type?: CodeableConcept;
  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
  effect?: CodeableConcept;
  /** The incidence of the interaction, e.g. theoretical, observed */
  incidence?: CodeableConcept;
  /** Actions for managing the interaction */
  management?: CodeableConcept;
}

export interface MedicinalProductInteractionOutputType {
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
  /** The medication for which this is a described interaction */
  subject?: ReferenceOutputType[];
  /** The interaction described */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** The specific medication, food or laboratory test that interacts */
  interactant?: MedicinalProductInteractionInteractantOutputType[];
  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction */
  type?: CodeableConceptOutputType;
  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
  effect?: CodeableConceptOutputType;
  /** The incidence of the interaction, e.g. theoretical, observed */
  incidence?: CodeableConceptOutputType;
  /** Actions for managing the interaction */
  management?: CodeableConceptOutputType;
}

export const MedicinalProductInteraction: t.RecursiveType<
  t.Type<MedicinalProductInteraction, MedicinalProductInteractionOutputType>,
  MedicinalProductInteraction,
  MedicinalProductInteractionOutputType
> = t.recursion<
  MedicinalProductInteraction,
  MedicinalProductInteractionOutputType
>("MedicinalProductInteraction", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The interaction described */
        description: primitives.R4.string,
        /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
        effect: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** The incidence of the interaction, e.g. theoretical, observed */
        incidence: CodeableConcept,
        /** The specific medication, food or laboratory test that interacts */
        interactant: t.array(MedicinalProductInteractionInteractant),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Actions for managing the interaction */
        management: CodeableConcept,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** The medication for which this is a described interaction */
        subject: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction */
        type: CodeableConcept
      })
    ],
    "MedicinalProductInteraction"
  )
);
