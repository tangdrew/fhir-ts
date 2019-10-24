/**
 * MedicationDispense Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Dosage } from "./Dosage";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Dispensing a medication to a named patient
 */
export interface MedicationDispense {
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
  /** External identifier */
  identifier?: Identifier[];
  /** Event that dispense is part of */
  partOf?: Reference[];
  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Why a dispense was not performed */
  statusreasonCodeableConcept?: CodeableConcept;
  /** Why a dispense was not performed */
  statusreasonReference?: Reference;
  /** Type of medication dispense */
  category?: CodeableConcept;
  /** What medication was supplied */
  medicationCodeableConcept: CodeableConcept;
  /** What medication was supplied */
  medicationReference: Reference;
  /** Who the dispense is for */
  subject?: Reference;
  /** Encounter / Episode associated with event */
  context?: Reference;
  /** Information that supports the dispensing of the medication */
  supportingInformation?: Reference[];
  /** Where the dispense occurred */
  location?: Reference;
  /** Medication order that authorizes the dispense */
  authorizingPrescription?: Reference[];
  /** Trial fill, partial fill, emergency fill, etc. */
  type?: CodeableConcept;
  /** Amount dispensed */
  quantity?: Quantity;
  /** Amount of medication expressed as a timing amount */
  daysSupply?: Quantity;
  /** When product was packaged and reviewed */
  whenPrepared?: primitives.R4.dateTime;
  /** Extension of whenPrepared element */
  _whenPrepared?: Element;
  /** When product was given out */
  whenHandedOver?: primitives.R4.dateTime;
  /** Extension of whenHandedOver element */
  _whenHandedOver?: Element;
  /** Where the medication was sent */
  destination?: Reference;
  /** Who collected the medication */
  receiver?: Reference[];
  /** Information about the dispense */
  note?: Annotation[];
  /** How the medication is to be used by the patient or administered by the caregiver */
  dosageInstruction?: Dosage[];
  /** Clinical issue with action */
  detectedIssue?: Reference[];
  /** A list of relevant lifecycle events */
  eventHistory?: Reference[];
}
/**
 * Dispensing a medication to a named patient
 */
export const MedicationDispense: t.Type<MedicationDispense> = t.recursion<
  MedicationDispense
>("MedicationDispense", () =>
  t.intersection([
    t.type({
      /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | unknown */
      status: primitives.R4.code,
      /** What medication was supplied */
      medicationCodeableConcept: CodeableConcept,
      /** What medication was supplied */
      medicationReference: Reference
    }),
    t.partial({
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
      /** External identifier */
      identifier: t.array(Identifier),
      /** Event that dispense is part of */
      partOf: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Why a dispense was not performed */
      statusreasonCodeableConcept: CodeableConcept,
      /** Why a dispense was not performed */
      statusreasonReference: Reference,
      /** Type of medication dispense */
      category: CodeableConcept,
      /** Who the dispense is for */
      subject: Reference,
      /** Encounter / Episode associated with event */
      context: Reference,
      /** Information that supports the dispensing of the medication */
      supportingInformation: t.array(Reference),
      /** Where the dispense occurred */
      location: Reference,
      /** Medication order that authorizes the dispense */
      authorizingPrescription: t.array(Reference),
      /** Trial fill, partial fill, emergency fill, etc. */
      type: CodeableConcept,
      /** Amount dispensed */
      quantity: Quantity,
      /** Amount of medication expressed as a timing amount */
      daysSupply: Quantity,
      /** When product was packaged and reviewed */
      whenPrepared: primitives.R4.dateTime,
      /** Extension of whenPrepared element */
      _whenPrepared: Element,
      /** When product was given out */
      whenHandedOver: primitives.R4.dateTime,
      /** Extension of whenHandedOver element */
      _whenHandedOver: Element,
      /** Where the medication was sent */
      destination: Reference,
      /** Who collected the medication */
      receiver: t.array(Reference),
      /** Information about the dispense */
      note: t.array(Annotation),
      /** How the medication is to be used by the patient or administered by the caregiver */
      dosageInstruction: t.array(Dosage),
      /** Clinical issue with action */
      detectedIssue: t.array(Reference),
      /** A list of relevant lifecycle events */
      eventHistory: t.array(Reference)
    })
  ])
);

/**
 * Who performed event
 */
export interface MedicationDispensePerformer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Who performed the dispense and what they did */
  function?: CodeableConcept;
  /** Individual who was performing */
  actor: Reference;
}
/**
 * Who performed event
 */
export const MedicationDispensePerformer: t.Type<
  MedicationDispensePerformer
> = t.recursion<MedicationDispensePerformer>(
  "MedicationDispensePerformer",
  () =>
    t.intersection([
      t.type({
        /** Individual who was performing */
        actor: Reference
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
        /** Who performed the dispense and what they did */
        function: CodeableConcept
      })
    ])
);

/**
 * Whether a substitution was performed on the dispense
 */
export interface MedicationDispenseSubstitution {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether a substitution was or was not performed on the dispense */
  wasSubstituted: boolean;
  /** Extension of wasSubstituted element */
  _wasSubstituted?: Element;
  /** Code signifying whether a different drug was dispensed from what was prescribed */
  type?: CodeableConcept;
  /** Why was substitution made */
  reason?: CodeableConcept[];
  /** Who is responsible for the substitution */
  responsibleParty?: Reference[];
}
/**
 * Whether a substitution was performed on the dispense
 */
export const MedicationDispenseSubstitution: t.Type<
  MedicationDispenseSubstitution
> = t.recursion<MedicationDispenseSubstitution>(
  "MedicationDispenseSubstitution",
  () =>
    t.intersection([
      t.type({
        /** Whether a substitution was or was not performed on the dispense */
        wasSubstituted: primitives.R4.boolean
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
        /** Extension of wasSubstituted element */
        _wasSubstituted: Element,
        /** Code signifying whether a different drug was dispensed from what was prescribed */
        type: CodeableConcept,
        /** Why was substitution made */
        reason: t.array(CodeableConcept),
        /** Who is responsible for the substitution */
        responsibleParty: t.array(Reference)
      })
    ])
);
