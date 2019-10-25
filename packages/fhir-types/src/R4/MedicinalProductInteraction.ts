/**
 * MedicinalProductInteraction Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * MedicinalProductInteraction
 */
export interface MedicinalProductInteraction {
  /** The type of resource */
  resourceType?: "MedicinalProductInteraction";
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
  /** The medication for which this is a described interaction */
  subject?: Reference[];
  /** The interaction described */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction */
  type?: CodeableConcept;
  /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
  effect?: CodeableConcept;
  /** The incidence of the interaction, e.g. theoretical, observed */
  incidence?: CodeableConcept;
  /** Actions for managing the interaction */
  management?: CodeableConcept;
}
/**
 * MedicinalProductInteraction
 */
export const MedicinalProductInteraction: t.Type<
  MedicinalProductInteraction
> = t.recursion<MedicinalProductInteraction>(
  "MedicinalProductInteraction",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("MedicinalProductInteraction"),
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
        /** The medication for which this is a described interaction */
        subject: t.array(Reference),
        /** The interaction described */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction */
        type: CodeableConcept,
        /** The effect of the interaction, for example "reduced gastric absorption of primary medication" */
        effect: CodeableConcept,
        /** The incidence of the interaction, e.g. theoretical, observed */
        incidence: CodeableConcept,
        /** Actions for managing the interaction */
        management: CodeableConcept
      })
    ])
);

/**
 * The specific medication, food or laboratory test that interacts
 */
export interface MedicinalProductInteractionInteractant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The specific medication, food or laboratory test that interacts */
  itemReference: Reference;
  /** The specific medication, food or laboratory test that interacts */
  itemCodeableConcept: CodeableConcept;
}
/**
 * The specific medication, food or laboratory test that interacts
 */
export const MedicinalProductInteractionInteractant: t.Type<
  MedicinalProductInteractionInteractant
> = t.recursion<MedicinalProductInteractionInteractant>(
  "MedicinalProductInteractionInteractant",
  () =>
    t.intersection([
      t.type({
        /** The specific medication, food or laboratory test that interacts */
        itemReference: Reference,
        /** The specific medication, food or laboratory test that interacts */
        itemCodeableConcept: CodeableConcept
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ])
);
