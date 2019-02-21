/**
 * Procedure Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age, AgeOutputType } from "./Age";
import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The people who performed the procedure
 */
export interface ProcedurePerformer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of performance */
  function?: CodeableConcept;
  /** The reference to the practitioner */
  actor: Reference;
  /** Organization the device or practitioner was acting for */
  onBehalfOf?: Reference;
}

export interface ProcedurePerformerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of performance */
  function?: CodeableConceptOutputType;
  /** The reference to the practitioner */
  actor: ReferenceOutputType;
  /** Organization the device or practitioner was acting for */
  onBehalfOf?: ReferenceOutputType;
}

export const ProcedurePerformer: t.RecursiveType<
  t.Type<ProcedurePerformer, ProcedurePerformerOutputType>,
  ProcedurePerformer,
  ProcedurePerformerOutputType
> = t.recursion<ProcedurePerformer, ProcedurePerformerOutputType>(
  "ProcedurePerformer",
  () =>
    t.intersection(
      [
        t.type({
          /** The reference to the practitioner */
          actor: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Type of performance */
          function: CodeableConcept,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Organization the device or practitioner was acting for */
          onBehalfOf: Reference
        })
      ],
      "ProcedurePerformer"
    )
);

/**
 * Manipulated, implanted, or removed device
 */
export interface ProcedureFocalDevice {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Kind of change to device */
  action?: CodeableConcept;
  /** Device that was changed */
  manipulated: Reference;
}

export interface ProcedureFocalDeviceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Kind of change to device */
  action?: CodeableConceptOutputType;
  /** Device that was changed */
  manipulated: ReferenceOutputType;
}

export const ProcedureFocalDevice: t.RecursiveType<
  t.Type<ProcedureFocalDevice, ProcedureFocalDeviceOutputType>,
  ProcedureFocalDevice,
  ProcedureFocalDeviceOutputType
> = t.recursion<ProcedureFocalDevice, ProcedureFocalDeviceOutputType>(
  "ProcedureFocalDevice",
  () =>
    t.intersection(
      [
        t.type({
          /** Device that was changed */
          manipulated: Reference
        }),
        t.partial({
          /** Kind of change to device */
          action: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ProcedureFocalDevice"
    )
);

/**
 * An action that is being or was performed on a patient
 */
export interface Procedure {
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
  /** External Identifiers for this procedure */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** A request for this procedure */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Classification of the procedure */
  category?: CodeableConcept;
  /** Identification of the procedure */
  code?: CodeableConcept;
  /** Who the procedure was performed on */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** When the procedure was performed */
  performed?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period
    | t.TypeOf<primitives.R4.StringType>
    | Age
    | Range;
  /** Who recorded the procedure */
  recorder?: Reference;
  /** Person who asserts this procedure */
  asserter?: Reference;
  /** The people who performed the procedure */
  performer?: ProcedurePerformer[];
  /** Where the procedure happened */
  location?: Reference;
  /** Coded reason procedure performed */
  reasonCode?: CodeableConcept[];
  /** The justification that the procedure was performed */
  reasonReference?: Reference[];
  /** Target body sites */
  bodySite?: CodeableConcept[];
  /** The result of procedure */
  outcome?: CodeableConcept;
  /** Any report resulting from the procedure */
  report?: Reference[];
  /** Complication following the procedure */
  complication?: CodeableConcept[];
  /** A condition that is a result of the procedure */
  complicationDetail?: Reference[];
  /** Instructions for follow up */
  followUp?: CodeableConcept[];
  /** Additional information about the procedure */
  note?: Annotation[];
  /** Manipulated, implanted, or removed device */
  focalDevice?: ProcedureFocalDevice[];
  /** Items used during procedure */
  usedReference?: Reference[];
  /** Coded items used during the procedure */
  usedCode?: CodeableConcept[];
}

export interface ProcedureOutputType {
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
  /** External Identifiers for this procedure */
  identifier?: IdentifierOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** A request for this procedure */
  basedOn?: ReferenceOutputType[];
  /** Part of referenced event */
  partOf?: ReferenceOutputType[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** Classification of the procedure */
  category?: CodeableConceptOutputType;
  /** Identification of the procedure */
  code?: CodeableConceptOutputType;
  /** Who the procedure was performed on */
  subject: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** When the procedure was performed */
  performed?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | t.OutputOf<primitives.R4.StringType>
    | AgeOutputType
    | RangeOutputType;
  /** Who recorded the procedure */
  recorder?: ReferenceOutputType;
  /** Person who asserts this procedure */
  asserter?: ReferenceOutputType;
  /** The people who performed the procedure */
  performer?: ProcedurePerformerOutputType[];
  /** Where the procedure happened */
  location?: ReferenceOutputType;
  /** Coded reason procedure performed */
  reasonCode?: CodeableConceptOutputType[];
  /** The justification that the procedure was performed */
  reasonReference?: ReferenceOutputType[];
  /** Target body sites */
  bodySite?: CodeableConceptOutputType[];
  /** The result of procedure */
  outcome?: CodeableConceptOutputType;
  /** Any report resulting from the procedure */
  report?: ReferenceOutputType[];
  /** Complication following the procedure */
  complication?: CodeableConceptOutputType[];
  /** A condition that is a result of the procedure */
  complicationDetail?: ReferenceOutputType[];
  /** Instructions for follow up */
  followUp?: CodeableConceptOutputType[];
  /** Additional information about the procedure */
  note?: AnnotationOutputType[];
  /** Manipulated, implanted, or removed device */
  focalDevice?: ProcedureFocalDeviceOutputType[];
  /** Items used during procedure */
  usedReference?: ReferenceOutputType[];
  /** Coded items used during the procedure */
  usedCode?: CodeableConceptOutputType[];
}

export const Procedure: t.RecursiveType<
  t.Type<Procedure, ProcedureOutputType>,
  Procedure,
  ProcedureOutputType
> = t.recursion<Procedure, ProcedureOutputType>("Procedure", () =>
  t.intersection(
    [
      t.type({
        /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Who the procedure was performed on */
        subject: Reference
      }),
      t.partial({
        /** Person who asserts this procedure */
        asserter: Reference,
        /** A request for this procedure */
        basedOn: t.array(Reference),
        /** Target body sites */
        bodySite: t.array(CodeableConcept),
        /** Classification of the procedure */
        category: CodeableConcept,
        /** Identification of the procedure */
        code: CodeableConcept,
        /** Complication following the procedure */
        complication: t.array(CodeableConcept),
        /** A condition that is a result of the procedure */
        complicationDetail: t.array(Reference),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Encounter created as part of */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Manipulated, implanted, or removed device */
        focalDevice: t.array(ProcedureFocalDevice),
        /** Instructions for follow up */
        followUp: t.array(CodeableConcept),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Identifiers for this procedure */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Where the procedure happened */
        location: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Additional information about the procedure */
        note: t.array(Annotation),
        /** The result of procedure */
        outcome: CodeableConcept,
        /** Part of referenced event */
        partOf: t.array(Reference),
        /** When the procedure was performed */
        performed: t.union([
          primitives.R4.dateTime,
          Period,
          primitives.R4.string,
          Age,
          Range
        ]),
        /** The people who performed the procedure */
        performer: t.array(ProcedurePerformer),
        /** Coded reason procedure performed */
        reasonCode: t.array(CodeableConcept),
        /** The justification that the procedure was performed */
        reasonReference: t.array(Reference),
        /** Who recorded the procedure */
        recorder: Reference,
        /** Any report resulting from the procedure */
        report: t.array(Reference),
        /** Reason for current status */
        statusReason: CodeableConcept,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Coded items used during the procedure */
        usedCode: t.array(CodeableConcept),
        /** Items used during procedure */
        usedReference: t.array(Reference)
      })
    ],
    "Procedure"
  )
);
