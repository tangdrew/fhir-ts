/**
 * MedicationRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Dosage, DosageOutputType } from "./Dosage";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Any restrictions on medication substitution
 */
export interface MedicationRequestSubstitution {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether substitution is allowed or not */
  allowed: t.TypeOf<primitives.R4.BooleanType> | CodeableConcept;
  /** Why should (not) substitution be made */
  reason?: CodeableConcept;
}

export interface MedicationRequestSubstitutionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Whether substitution is allowed or not */
  allowed: t.OutputOf<primitives.R4.BooleanType> | CodeableConceptOutputType;
  /** Why should (not) substitution be made */
  reason?: CodeableConceptOutputType;
}

export const MedicationRequestSubstitution: t.RecursiveType<
  t.Type<
    MedicationRequestSubstitution,
    MedicationRequestSubstitutionOutputType
  >,
  MedicationRequestSubstitution,
  MedicationRequestSubstitutionOutputType
> = t.recursion<
  MedicationRequestSubstitution,
  MedicationRequestSubstitutionOutputType
>("MedicationRequestSubstitution", () =>
  t.intersection(
    [
      t.type({
        /** Whether substitution is allowed or not */
        allowed: t.union([primitives.R4.boolean, CodeableConcept])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Why should (not) substitution be made */
        reason: CodeableConcept
      })
    ],
    "MedicationRequestSubstitution"
  )
);

/**
 * First fill details
 */
export interface MedicationRequestDispenseRequestInitialFill {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** First fill quantity */
  quantity?: Quantity;
  /** First fill duration */
  duration?: Duration;
}

export interface MedicationRequestDispenseRequestInitialFillOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** First fill quantity */
  quantity?: QuantityOutputType;
  /** First fill duration */
  duration?: DurationOutputType;
}

export const MedicationRequestDispenseRequestInitialFill: t.RecursiveType<
  t.Type<
    MedicationRequestDispenseRequestInitialFill,
    MedicationRequestDispenseRequestInitialFillOutputType
  >,
  MedicationRequestDispenseRequestInitialFill,
  MedicationRequestDispenseRequestInitialFillOutputType
> = t.recursion<
  MedicationRequestDispenseRequestInitialFill,
  MedicationRequestDispenseRequestInitialFillOutputType
>("MedicationRequestDispenseRequestInitialFill", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** First fill duration */
        duration: Duration,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** First fill quantity */
        quantity: Quantity
      })
    ],
    "MedicationRequestDispenseRequestInitialFill"
  )
);

/**
 * Medication supply authorization
 */
export interface MedicationRequestDispenseRequest {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** First fill details */
  initialFill?: MedicationRequestDispenseRequestInitialFill;
  /** Minimum period of time between dispenses */
  dispenseInterval?: Duration;
  /** Time period supply is authorized for */
  validityPeriod?: Period;
  /** Number of refills authorized */
  numberOfRepeatsAllowed?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Amount of medication to supply per dispense */
  quantity?: Quantity;
  /** Number of days supply per dispense */
  expectedSupplyDuration?: Duration;
  /** Intended dispenser */
  performer?: Reference;
}

export interface MedicationRequestDispenseRequestOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** First fill details */
  initialFill?: MedicationRequestDispenseRequestInitialFillOutputType;
  /** Minimum period of time between dispenses */
  dispenseInterval?: DurationOutputType;
  /** Time period supply is authorized for */
  validityPeriod?: PeriodOutputType;
  /** Number of refills authorized */
  numberOfRepeatsAllowed?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Amount of medication to supply per dispense */
  quantity?: QuantityOutputType;
  /** Number of days supply per dispense */
  expectedSupplyDuration?: DurationOutputType;
  /** Intended dispenser */
  performer?: ReferenceOutputType;
}

export const MedicationRequestDispenseRequest: t.RecursiveType<
  t.Type<
    MedicationRequestDispenseRequest,
    MedicationRequestDispenseRequestOutputType
  >,
  MedicationRequestDispenseRequest,
  MedicationRequestDispenseRequestOutputType
> = t.recursion<
  MedicationRequestDispenseRequest,
  MedicationRequestDispenseRequestOutputType
>("MedicationRequestDispenseRequest", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Minimum period of time between dispenses */
        dispenseInterval: Duration,
        /** Number of days supply per dispense */
        expectedSupplyDuration: Duration,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** First fill details */
        initialFill: MedicationRequestDispenseRequestInitialFill,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Number of refills authorized */
        numberOfRepeatsAllowed: primitives.R4.unsignedInt,
        /** Intended dispenser */
        performer: Reference,
        /** Amount of medication to supply per dispense */
        quantity: Quantity,
        /** Time period supply is authorized for */
        validityPeriod: Period
      })
    ],
    "MedicationRequestDispenseRequest"
  )
);

/**
 * Ordering of medication for patient or group
 */
export interface MedicationRequest {
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
  /** External ids for this request */
  identifier?: Identifier[];
  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** proposal | plan | order | original-order | instance-order | option */
  intent: t.TypeOf<primitives.R4.CodeType>;
  /** Type of medication usage */
  category?: CodeableConcept[];
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** True if request is prohibiting action */
  doNotPerform?: t.TypeOf<primitives.R4.BooleanType>;
  /** Reported rather than primary record */
  reported?: t.TypeOf<primitives.R4.BooleanType> | Reference;
  /** Medication to be taken */
  medication: CodeableConcept | Reference;
  /** Who or group medication request is for */
  subject: Reference;
  /** Encounter created as part of encounter/admission/stay */
  encounter?: Reference;
  /** Information to support ordering of the medication */
  supportingInformation?: Reference[];
  /** When request was initially authored */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
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
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
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
  /** Medication supply authorization */
  dispenseRequest?: MedicationRequestDispenseRequest;
  /** Any restrictions on medication substitution */
  substitution?: MedicationRequestSubstitution;
  /** An order/prescription that is being replaced */
  priorPrescription?: Reference;
  /** Clinical Issue with action */
  detectedIssue?: Reference[];
  /** A list of events of interest in the lifecycle */
  eventHistory?: Reference[];
}

export interface MedicationRequestOutputType {
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
  /** External ids for this request */
  identifier?: IdentifierOutputType[];
  /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** proposal | plan | order | original-order | instance-order | option */
  intent: t.OutputOf<primitives.R4.CodeType>;
  /** Type of medication usage */
  category?: CodeableConceptOutputType[];
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** True if request is prohibiting action */
  doNotPerform?: t.OutputOf<primitives.R4.BooleanType>;
  /** Reported rather than primary record */
  reported?: t.OutputOf<primitives.R4.BooleanType> | ReferenceOutputType;
  /** Medication to be taken */
  medication: CodeableConceptOutputType | ReferenceOutputType;
  /** Who or group medication request is for */
  subject: ReferenceOutputType;
  /** Encounter created as part of encounter/admission/stay */
  encounter?: ReferenceOutputType;
  /** Information to support ordering of the medication */
  supportingInformation?: ReferenceOutputType[];
  /** When request was initially authored */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who/What requested the Request */
  requester?: ReferenceOutputType;
  /** Intended performer of administration */
  performer?: ReferenceOutputType;
  /** Desired kind of performer of the medication administration */
  performerType?: CodeableConceptOutputType;
  /** Person who entered the request */
  recorder?: ReferenceOutputType;
  /** Reason or indication for ordering or not ordering the medication */
  reasonCode?: CodeableConceptOutputType[];
  /** Condition or observation that supports why the prescription is being written */
  reasonReference?: ReferenceOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** What request fulfills */
  basedOn?: ReferenceOutputType[];
  /** Composite request this is part of */
  groupIdentifier?: IdentifierOutputType;
  /** Overall pattern of medication administration */
  courseOfTherapyType?: CodeableConceptOutputType;
  /** Associated insurance coverage */
  insurance?: ReferenceOutputType[];
  /** Information about the prescription */
  note?: AnnotationOutputType[];
  /** How the medication should be taken */
  dosageInstruction?: DosageOutputType[];
  /** Medication supply authorization */
  dispenseRequest?: MedicationRequestDispenseRequestOutputType;
  /** Any restrictions on medication substitution */
  substitution?: MedicationRequestSubstitutionOutputType;
  /** An order/prescription that is being replaced */
  priorPrescription?: ReferenceOutputType;
  /** Clinical Issue with action */
  detectedIssue?: ReferenceOutputType[];
  /** A list of events of interest in the lifecycle */
  eventHistory?: ReferenceOutputType[];
}

export const MedicationRequest: t.RecursiveType<
  t.Type<MedicationRequest, MedicationRequestOutputType>,
  MedicationRequest,
  MedicationRequestOutputType
> = t.recursion<MedicationRequest, MedicationRequestOutputType>(
  "MedicationRequest",
  () =>
    t.intersection(
      [
        t.type({
          /** proposal | plan | order | original-order | instance-order | option */
          intent: primitives.R4.code,
          /** Medication to be taken */
          medication: t.union([CodeableConcept, Reference]),
          /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
          status: primitives.R4.code,
          /** Who or group medication request is for */
          subject: Reference
        }),
        t.partial({
          /** When request was initially authored */
          authoredOn: primitives.R4.dateTime,
          /** What request fulfills */
          basedOn: t.array(Reference),
          /** Type of medication usage */
          category: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Overall pattern of medication administration */
          courseOfTherapyType: CodeableConcept,
          /** Clinical Issue with action */
          detectedIssue: t.array(Reference),
          /** Medication supply authorization */
          dispenseRequest: MedicationRequestDispenseRequest,
          /** True if request is prohibiting action */
          doNotPerform: primitives.R4.boolean,
          /** How the medication should be taken */
          dosageInstruction: t.array(Dosage),
          /** Encounter created as part of encounter/admission/stay */
          encounter: Reference,
          /** A list of events of interest in the lifecycle */
          eventHistory: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Composite request this is part of */
          groupIdentifier: Identifier,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External ids for this request */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Instantiates FHIR protocol or definition */
          instantiatesCanonical: t.array(primitives.R4.canonical),
          /** Instantiates external protocol or definition */
          instantiatesUri: t.array(primitives.R4.uri),
          /** Associated insurance coverage */
          insurance: t.array(Reference),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Information about the prescription */
          note: t.array(Annotation),
          /** Intended performer of administration */
          performer: Reference,
          /** Desired kind of performer of the medication administration */
          performerType: CodeableConcept,
          /** An order/prescription that is being replaced */
          priorPrescription: Reference,
          /** routine | urgent | asap | stat */
          priority: primitives.R4.code,
          /** Reason or indication for ordering or not ordering the medication */
          reasonCode: t.array(CodeableConcept),
          /** Condition or observation that supports why the prescription is being written */
          reasonReference: t.array(Reference),
          /** Person who entered the request */
          recorder: Reference,
          /** Reported rather than primary record */
          reported: t.union([primitives.R4.boolean, Reference]),
          /** Who/What requested the Request */
          requester: Reference,
          /** Reason for current status */
          statusReason: CodeableConcept,
          /** Any restrictions on medication substitution */
          substitution: MedicationRequestSubstitution,
          /** Information to support ordering of the medication */
          supportingInformation: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "MedicationRequest"
    )
);
