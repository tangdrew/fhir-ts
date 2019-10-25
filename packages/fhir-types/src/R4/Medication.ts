/**
 * Medication Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Definition of a Medication
 */
export interface Medication {
  /** The type of resource */
  resourceType?: "Medication";
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
  /** Business identifier for this medication */
  identifier?: Identifier[];
  /** Codes that identify this medication */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Manufacturer of the item */
  manufacturer?: Reference;
  /** powder | tablets | capsule + */
  form?: CodeableConcept;
  /** Amount of drug in package */
  amount?: Ratio;
}
/**
 * Definition of a Medication
 */
export const Medication: t.Type<Medication> = t.recursion<Medication>(
  "Medication",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Medication"),
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
        /** Business identifier for this medication */
        identifier: t.array(Identifier),
        /** Codes that identify this medication */
        code: CodeableConcept,
        /** active | inactive | entered-in-error */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** Manufacturer of the item */
        manufacturer: Reference,
        /** powder | tablets | capsule + */
        form: CodeableConcept,
        /** Amount of drug in package */
        amount: Ratio
      })
    ])
);

/**
 * Active or inactive ingredient
 */
export interface MedicationIngredient {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The actual ingredient or content */
  itemCodeableConcept: CodeableConcept;
  /** The actual ingredient or content */
  itemReference: Reference;
  /** Active ingredient indicator */
  isActive?: boolean;
  /** Extension of isActive element */
  _isActive?: Element;
  /** Quantity of ingredient present */
  strength?: Ratio;
}
/**
 * Active or inactive ingredient
 */
export const MedicationIngredient: t.Type<MedicationIngredient> = t.recursion<
  MedicationIngredient
>("MedicationIngredient", () =>
  t.intersection([
    t.type({
      /** The actual ingredient or content */
      itemCodeableConcept: CodeableConcept,
      /** The actual ingredient or content */
      itemReference: Reference
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
      /** Active ingredient indicator */
      isActive: primitives.R4.boolean,
      /** Extension of isActive element */
      _isActive: Element,
      /** Quantity of ingredient present */
      strength: Ratio
    })
  ])
);

/**
 * Details about packaged medications
 */
export interface MedicationBatch {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier assigned to batch */
  lotNumber?: string;
  /** Extension of lotNumber element */
  _lotNumber?: Element;
  /** When batch will expire */
  expirationDate?: primitives.R4.dateTime;
  /** Extension of expirationDate element */
  _expirationDate?: Element;
}
/**
 * Details about packaged medications
 */
export const MedicationBatch: t.Type<MedicationBatch> = t.recursion<
  MedicationBatch
>("MedicationBatch", () =>
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
      /** Identifier assigned to batch */
      lotNumber: primitives.R4.string,
      /** Extension of lotNumber element */
      _lotNumber: Element,
      /** When batch will expire */
      expirationDate: primitives.R4.dateTime,
      /** Extension of expirationDate element */
      _expirationDate: Element
    })
  ])
);
