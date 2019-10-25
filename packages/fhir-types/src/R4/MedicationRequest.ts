/**
 * MedicationRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Ordering of medication for patient or group
 */
export interface MedicationRequest {
  /** The type of resource */
  resourceType?: "MedicationRequest";
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
  /** External ids for this request */
  identifier?: Identifier[];
  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** proposal | plan | order | original-order | instance-order | option */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** Type of medication usage */
  category?: CodeableConcept[];
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** True if request is prohibiting action */
  doNotPerform?: boolean;
  /** Extension of doNotPerform element */
  _doNotPerform?: Element;
  /** Reported rather than primary record */
  reportedBoolean?: boolean;
  /** Extension of reportedBoolean element */
  _reportedBoolean?: Element;
  /** Reported rather than primary record */
  reportedReference?: Reference;
  /** Medication to be taken */
  medicationCodeableConcept: CodeableConcept;
  /** Medication to be taken */
  medicationReference: Reference;
  /** Who or group medication request is for */
  subject: Reference;
  /** Encounter created as part of encounter/admission/stay */
  encounter?: Reference;
  /** Information to support ordering of the medication */
  supportingInformation?: Reference[];
  /** When request was initially authored */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
  /** Who/What requested the Request */
  requester?: Reference;
  /** Intended performer of administration */
  performer?: Reference;
  /** Desired kind of performer of the medication administration */
  performerType?: CodeableConcept;
  /** Person who entered the request */
  recorder?: Reference;
  /** Reason or indication for ordering or not ordering the medication */
  reasonCode?: CodeableConcept[];
  /** Condition or observation that supports why the prescription is being written */
  reasonReference?: Reference[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** What request fulfills */
  basedOn?: Reference[];
  /** Composite request this is part of */
  groupIdentifier?: Identifier;
  /** Overall pattern of medication administration */
  courseOfTherapyType?: CodeableConcept;
  /** Associated insurance coverage */
  insurance?: Reference[];
  /** Information about the prescription */
  note?: Annotation[];
  /** How the medication should be taken */
  dosageInstruction?: Dosage[];
  /** An order/prescription that is being replaced */
  priorPrescription?: Reference;
  /** Clinical Issue with action */
  detectedIssue?: Reference[];
  /** A list of events of interest in the lifecycle */
  eventHistory?: Reference[];
}
/**
 * Ordering of medication for patient or group
 */
export const MedicationRequest: t.Type<MedicationRequest> = t.recursion<
  MedicationRequest
>("MedicationRequest", () =>
  t.intersection([
    t.type({
      /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
      status: primitives.R4.code,
      /** proposal | plan | order | original-order | instance-order | option */
      intent: primitives.R4.code,
      /** Medication to be taken */
      medicationCodeableConcept: CodeableConcept,
      /** Medication to be taken */
      medicationReference: Reference,
      /** Who or group medication request is for */
      subject: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("MedicationRequest"),
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
      /** External ids for this request */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Reason for current status */
      statusReason: CodeableConcept,
      /** Extension of intent element */
      _intent: Element,
      /** Type of medication usage */
      category: t.array(CodeableConcept),
      /** routine | urgent | asap | stat */
      priority: primitives.R4.code,
      /** Extension of priority element */
      _priority: Element,
      /** True if request is prohibiting action */
      doNotPerform: primitives.R4.boolean,
      /** Extension of doNotPerform element */
      _doNotPerform: Element,
      /** Reported rather than primary record */
      reportedBoolean: primitives.R4.boolean,
      /** Extension of reportedBoolean element */
      _reportedBoolean: Element,
      /** Reported rather than primary record */
      reportedReference: Reference,
      /** Encounter created as part of encounter/admission/stay */
      encounter: Reference,
      /** Information to support ordering of the medication */
      supportingInformation: t.array(Reference),
      /** When request was initially authored */
      authoredOn: primitives.R4.dateTime,
      /** Extension of authoredOn element */
      _authoredOn: Element,
      /** Who/What requested the Request */
      requester: Reference,
      /** Intended performer of administration */
      performer: Reference,
      /** Desired kind of performer of the medication administration */
      performerType: CodeableConcept,
      /** Person who entered the request */
      recorder: Reference,
      /** Reason or indication for ordering or not ordering the medication */
      reasonCode: t.array(CodeableConcept),
      /** Condition or observation that supports why the prescription is being written */
      reasonReference: t.array(Reference),
      /** Instantiates FHIR protocol or definition */
      instantiatesCanonical: t.array(primitives.R4.canonical),
      /** Extension of instantiatesCanonical element */
      _instantiatesCanonical: t.array(Element),
      /** Instantiates external protocol or definition */
      instantiatesUri: t.array(primitives.R4.uri),
      /** Extension of instantiatesUri element */
      _instantiatesUri: t.array(Element),
      /** What request fulfills */
      basedOn: t.array(Reference),
      /** Composite request this is part of */
      groupIdentifier: Identifier,
      /** Overall pattern of medication administration */
      courseOfTherapyType: CodeableConcept,
      /** Associated insurance coverage */
      insurance: t.array(Reference),
      /** Information about the prescription */
      note: t.array(Annotation),
      /** How the medication should be taken */
      dosageInstruction: t.array(Dosage),
      /** An order/prescription that is being replaced */
      priorPrescription: Reference,
      /** Clinical Issue with action */
      detectedIssue: t.array(Reference),
      /** A list of events of interest in the lifecycle */
      eventHistory: t.array(Reference)
    })
  ])
);

/**
 * Medication supply authorization
 */
export interface MedicationRequestDispenseRequest {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Minimum period of time between dispenses */
  dispenseInterval?: Duration;
  /** Time period supply is authorized for */
  validityPeriod?: Period;
  /** Number of refills authorized */
  numberOfRepeatsAllowed?: primitives.R4.unsignedInt;
  /** Extension of numberOfRepeatsAllowed element */
  _numberOfRepeatsAllowed?: Element;
  /** Amount of medication to supply per dispense */
  quantity?: Quantity;
  /** Number of days supply per dispense */
  expectedSupplyDuration?: Duration;
  /** Intended dispenser */
  performer?: Reference;
}
/**
 * Medication supply authorization
 */
export const MedicationRequestDispenseRequest: t.Type<
  MedicationRequestDispenseRequest
> = t.recursion<MedicationRequestDispenseRequest>(
  "MedicationRequestDispenseRequest",
  () =>
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
        /** Minimum period of time between dispenses */
        dispenseInterval: Duration,
        /** Time period supply is authorized for */
        validityPeriod: Period,
        /** Number of refills authorized */
        numberOfRepeatsAllowed: primitives.R4.unsignedInt,
        /** Extension of numberOfRepeatsAllowed element */
        _numberOfRepeatsAllowed: Element,
        /** Amount of medication to supply per dispense */
        quantity: Quantity,
        /** Number of days supply per dispense */
        expectedSupplyDuration: Duration,
        /** Intended dispenser */
        performer: Reference
      })
    ])
);

/**
 * First fill details
 */
export interface MedicationRequestDispenseRequestInitialFill {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** First fill quantity */
  quantity?: Quantity;
  /** First fill duration */
  duration?: Duration;
}
/**
 * First fill details
 */
export const MedicationRequestDispenseRequestInitialFill: t.Type<
  MedicationRequestDispenseRequestInitialFill
> = t.recursion<MedicationRequestDispenseRequestInitialFill>(
  "MedicationRequestDispenseRequestInitialFill",
  () =>
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
        /** First fill quantity */
        quantity: Quantity,
        /** First fill duration */
        duration: Duration
      })
    ])
);

/**
 * Any restrictions on medication substitution
 */
export interface MedicationRequestSubstitution {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether substitution is allowed or not */
  allowedBoolean: boolean;
  /** Extension of allowedBoolean element */
  _allowedBoolean?: Element;
  /** Whether substitution is allowed or not */
  allowedCodeableConcept: CodeableConcept;
  /** Why should (not) substitution be made */
  reason?: CodeableConcept;
}
/**
 * Any restrictions on medication substitution
 */
export const MedicationRequestSubstitution: t.Type<
  MedicationRequestSubstitution
> = t.recursion<MedicationRequestSubstitution>(
  "MedicationRequestSubstitution",
  () =>
    t.intersection([
      t.type({
        /** Whether substitution is allowed or not */
        allowedBoolean: primitives.R4.boolean,
        /** Whether substitution is allowed or not */
        allowedCodeableConcept: CodeableConcept
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
        /** Extension of allowedBoolean element */
        _allowedBoolean: Element,
        /** Why should (not) substitution be made */
        reason: CodeableConcept
      })
    ])
);
