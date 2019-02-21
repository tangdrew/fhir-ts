/**
 * MedicationDispense Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Dosage, DosageOutputType } from "./Dosage";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Whether a substitution was performed on the dispense
 */
export interface MedicationDispenseSubstitution {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether a substitution was or was not performed on the dispense */
  wasSubstituted: t.TypeOf<primitives.R4.BooleanType>;
  /** Code signifying whether a different drug was dispensed from what was prescribed */
  type?: CodeableConcept;
  /** Why was substitution made */
  reason?: CodeableConcept[];
  /** Who is responsible for the substitution */
  responsibleParty?: Reference[];
}

export interface MedicationDispenseSubstitutionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Whether a substitution was or was not performed on the dispense */
  wasSubstituted: t.OutputOf<primitives.R4.BooleanType>;
  /** Code signifying whether a different drug was dispensed from what was prescribed */
  type?: CodeableConceptOutputType;
  /** Why was substitution made */
  reason?: CodeableConceptOutputType[];
  /** Who is responsible for the substitution */
  responsibleParty?: ReferenceOutputType[];
}

export const MedicationDispenseSubstitution: t.RecursiveType<
  t.Type<
    MedicationDispenseSubstitution,
    MedicationDispenseSubstitutionOutputType
  >,
  MedicationDispenseSubstitution,
  MedicationDispenseSubstitutionOutputType
> = t.recursion<
  MedicationDispenseSubstitution,
  MedicationDispenseSubstitutionOutputType
>("MedicationDispenseSubstitution", () =>
  t.intersection(
    [
      t.type({
        /** Whether a substitution was or was not performed on the dispense */
        wasSubstituted: primitives.R4.boolean
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Why was substitution made */
        reason: t.array(CodeableConcept),
        /** Who is responsible for the substitution */
        responsibleParty: t.array(Reference),
        /** Code signifying whether a different drug was dispensed from what was prescribed */
        type: CodeableConcept
      })
    ],
    "MedicationDispenseSubstitution"
  )
);

/**
 * Who performed event
 */
export interface MedicationDispensePerformer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Who performed the dispense and what they did */
  function?: CodeableConcept;
  /** Individual who was performing */
  actor: Reference;
}

export interface MedicationDispensePerformerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Who performed the dispense and what they did */
  function?: CodeableConceptOutputType;
  /** Individual who was performing */
  actor: ReferenceOutputType;
}

export const MedicationDispensePerformer: t.RecursiveType<
  t.Type<MedicationDispensePerformer, MedicationDispensePerformerOutputType>,
  MedicationDispensePerformer,
  MedicationDispensePerformerOutputType
> = t.recursion<
  MedicationDispensePerformer,
  MedicationDispensePerformerOutputType
>("MedicationDispensePerformer", () =>
  t.intersection(
    [
      t.type({
        /** Individual who was performing */
        actor: Reference
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Who performed the dispense and what they did */
        function: CodeableConcept,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicationDispensePerformer"
  )
);

/**
 * Dispensing a medication to a named patient
 */
export interface MedicationDispense {
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
  /** External identifier */
  identifier?: Identifier[];
  /** Event that dispense is part of */
  partOf?: Reference[];
  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Why a dispense was not performed */
  statusreason?: CodeableConcept | Reference;
  /** Type of medication dispense */
  category?: CodeableConcept;
  /** What medication was supplied */
  medication: CodeableConcept | Reference;
  /** Who the dispense is for */
  subject?: Reference;
  /** Encounter / Episode associated with event */
  context?: Reference;
  /** Information that supports the dispensing of the medication */
  supportingInformation?: Reference[];
  /** Who performed event */
  performer?: MedicationDispensePerformer[];
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
  whenPrepared?: t.TypeOf<primitives.R4.DateTimeType>;
  /** When product was given out */
  whenHandedOver?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Where the medication was sent */
  destination?: Reference;
  /** Who collected the medication */
  receiver?: Reference[];
  /** Information about the dispense */
  note?: Annotation[];
  /** How the medication is to be used by the patient or administered by the caregiver */
  dosageInstruction?: Dosage[];
  /** Whether a substitution was performed on the dispense */
  substitution?: MedicationDispenseSubstitution;
  /** Clinical issue with action */
  detectedIssue?: Reference[];
  /** A list of relevant lifecycle events */
  eventHistory?: Reference[];
}

export interface MedicationDispenseOutputType {
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
  /** External identifier */
  identifier?: IdentifierOutputType[];
  /** Event that dispense is part of */
  partOf?: ReferenceOutputType[];
  /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Why a dispense was not performed */
  statusreason?: CodeableConceptOutputType | ReferenceOutputType;
  /** Type of medication dispense */
  category?: CodeableConceptOutputType;
  /** What medication was supplied */
  medication: CodeableConceptOutputType | ReferenceOutputType;
  /** Who the dispense is for */
  subject?: ReferenceOutputType;
  /** Encounter / Episode associated with event */
  context?: ReferenceOutputType;
  /** Information that supports the dispensing of the medication */
  supportingInformation?: ReferenceOutputType[];
  /** Who performed event */
  performer?: MedicationDispensePerformerOutputType[];
  /** Where the dispense occurred */
  location?: ReferenceOutputType;
  /** Medication order that authorizes the dispense */
  authorizingPrescription?: ReferenceOutputType[];
  /** Trial fill, partial fill, emergency fill, etc. */
  type?: CodeableConceptOutputType;
  /** Amount dispensed */
  quantity?: QuantityOutputType;
  /** Amount of medication expressed as a timing amount */
  daysSupply?: QuantityOutputType;
  /** When product was packaged and reviewed */
  whenPrepared?: t.OutputOf<primitives.R4.DateTimeType>;
  /** When product was given out */
  whenHandedOver?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Where the medication was sent */
  destination?: ReferenceOutputType;
  /** Who collected the medication */
  receiver?: ReferenceOutputType[];
  /** Information about the dispense */
  note?: AnnotationOutputType[];
  /** How the medication is to be used by the patient or administered by the caregiver */
  dosageInstruction?: DosageOutputType[];
  /** Whether a substitution was performed on the dispense */
  substitution?: MedicationDispenseSubstitutionOutputType;
  /** Clinical issue with action */
  detectedIssue?: ReferenceOutputType[];
  /** A list of relevant lifecycle events */
  eventHistory?: ReferenceOutputType[];
}

export const MedicationDispense: t.RecursiveType<
  t.Type<MedicationDispense, MedicationDispenseOutputType>,
  MedicationDispense,
  MedicationDispenseOutputType
> = t.recursion<MedicationDispense, MedicationDispenseOutputType>(
  "MedicationDispense",
  () =>
    t.intersection(
      [
        t.type({
          /** What medication was supplied */
          medication: t.union([CodeableConcept, Reference]),
          /** preparation | in-progress | cancelled | on-hold | completed | entered-in-error | stopped | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Medication order that authorizes the dispense */
          authorizingPrescription: t.array(Reference),
          /** Type of medication dispense */
          category: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Encounter / Episode associated with event */
          context: Reference,
          /** Amount of medication expressed as a timing amount */
          daysSupply: Quantity,
          /** Where the medication was sent */
          destination: Reference,
          /** Clinical issue with action */
          detectedIssue: t.array(Reference),
          /** How the medication is to be used by the patient or administered by the caregiver */
          dosageInstruction: t.array(Dosage),
          /** A list of relevant lifecycle events */
          eventHistory: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Where the dispense occurred */
          location: Reference,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Information about the dispense */
          note: t.array(Annotation),
          /** Event that dispense is part of */
          partOf: t.array(Reference),
          /** Who performed event */
          performer: t.array(MedicationDispensePerformer),
          /** Amount dispensed */
          quantity: Quantity,
          /** Who collected the medication */
          receiver: t.array(Reference),
          /** Why a dispense was not performed */
          statusreason: t.union([CodeableConcept, Reference]),
          /** Who the dispense is for */
          subject: Reference,
          /** Whether a substitution was performed on the dispense */
          substitution: MedicationDispenseSubstitution,
          /** Information that supports the dispensing of the medication */
          supportingInformation: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Trial fill, partial fill, emergency fill, etc. */
          type: CodeableConcept,
          /** When product was given out */
          whenHandedOver: primitives.R4.dateTime,
          /** When product was packaged and reviewed */
          whenPrepared: primitives.R4.dateTime
        })
      ],
      "MedicationDispense"
    )
);
