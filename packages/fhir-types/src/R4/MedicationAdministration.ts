/**
 * MedicationAdministration Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Who performed the medication administration and what they did
 */
export interface MedicationAdministrationPerformer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of performance */
  function?: CodeableConcept;
  /** Who performed the medication administration */
  actor: Reference;
}

export interface MedicationAdministrationPerformerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of performance */
  function?: CodeableConceptOutputType;
  /** Who performed the medication administration */
  actor: ReferenceOutputType;
}

export const MedicationAdministrationPerformer: t.RecursiveType<
  t.Type<
    MedicationAdministrationPerformer,
    MedicationAdministrationPerformerOutputType
  >,
  MedicationAdministrationPerformer,
  MedicationAdministrationPerformerOutputType
> = t.recursion<
  MedicationAdministrationPerformer,
  MedicationAdministrationPerformerOutputType
>("MedicationAdministrationPerformer", () =>
  t.intersection(
    [
      t.type({
        /** Who performed the medication administration */
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
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicationAdministrationPerformer"
  )
);

/**
 * Details of how medication was taken
 */
export interface MedicationAdministrationDosage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Free text dosage instructions e.g. SIG */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Body site administered to */
  site?: CodeableConcept;
  /** Path of substance into body */
  route?: CodeableConcept;
  /** How drug was administered */
  method?: CodeableConcept;
  /** Amount of medication per dose */
  dose?: Quantity;
  /** Dose quantity per unit of time */
  rate?: Ratio | Quantity;
}

export interface MedicationAdministrationDosageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Free text dosage instructions e.g. SIG */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Body site administered to */
  site?: CodeableConceptOutputType;
  /** Path of substance into body */
  route?: CodeableConceptOutputType;
  /** How drug was administered */
  method?: CodeableConceptOutputType;
  /** Amount of medication per dose */
  dose?: QuantityOutputType;
  /** Dose quantity per unit of time */
  rate?: RatioOutputType | QuantityOutputType;
}

export const MedicationAdministrationDosage: t.RecursiveType<
  t.Type<
    MedicationAdministrationDosage,
    MedicationAdministrationDosageOutputType
  >,
  MedicationAdministrationDosage,
  MedicationAdministrationDosageOutputType
> = t.recursion<
  MedicationAdministrationDosage,
  MedicationAdministrationDosageOutputType
>("MedicationAdministrationDosage", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Amount of medication per dose */
        dose: Quantity,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** How drug was administered */
        method: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Dose quantity per unit of time */
        rate: t.union([Ratio, Quantity]),
        /** Path of substance into body */
        route: CodeableConcept,
        /** Body site administered to */
        site: CodeableConcept,
        /** Free text dosage instructions e.g. SIG */
        text: primitives.R4.string
      })
    ],
    "MedicationAdministrationDosage"
  )
);

/**
 * Administration of medication to a patient
 */
export interface MedicationAdministration {
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
  /** Instantiates protocol or definition */
  instantiates?: t.TypeOf<primitives.R4.URIType>[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason administration not performed */
  statusReason?: CodeableConcept[];
  /** Type of medication usage */
  category?: CodeableConcept;
  /** What was administered */
  medication: CodeableConcept | Reference;
  /** Who received medication */
  subject: Reference;
  /** Encounter or Episode of Care administered as part of */
  context?: Reference;
  /** Additional information to support administration */
  supportingInformation?: Reference[];
  /** Start and end time of administration */
  effective: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** Who performed the medication administration and what they did */
  performer?: MedicationAdministrationPerformer[];
  /** Reason administration performed */
  reasonCode?: CodeableConcept[];
  /** Condition or observation that supports why the medication was administered */
  reasonReference?: Reference[];
  /** Request administration performed against */
  request?: Reference;
  /** Device used to administer */
  device?: Reference[];
  /** Information about the administration */
  note?: Annotation[];
  /** Details of how medication was taken */
  dosage?: MedicationAdministrationDosage;
  /** A list of events of interest in the lifecycle */
  eventHistory?: Reference[];
}

export interface MedicationAdministrationOutputType {
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
  /** Instantiates protocol or definition */
  instantiates?: t.OutputOf<primitives.R4.URIType>[];
  /** Part of referenced event */
  partOf?: ReferenceOutputType[];
  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason administration not performed */
  statusReason?: CodeableConceptOutputType[];
  /** Type of medication usage */
  category?: CodeableConceptOutputType;
  /** What was administered */
  medication: CodeableConceptOutputType | ReferenceOutputType;
  /** Who received medication */
  subject: ReferenceOutputType;
  /** Encounter or Episode of Care administered as part of */
  context?: ReferenceOutputType;
  /** Additional information to support administration */
  supportingInformation?: ReferenceOutputType[];
  /** Start and end time of administration */
  effective: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** Who performed the medication administration and what they did */
  performer?: MedicationAdministrationPerformerOutputType[];
  /** Reason administration performed */
  reasonCode?: CodeableConceptOutputType[];
  /** Condition or observation that supports why the medication was administered */
  reasonReference?: ReferenceOutputType[];
  /** Request administration performed against */
  request?: ReferenceOutputType;
  /** Device used to administer */
  device?: ReferenceOutputType[];
  /** Information about the administration */
  note?: AnnotationOutputType[];
  /** Details of how medication was taken */
  dosage?: MedicationAdministrationDosageOutputType;
  /** A list of events of interest in the lifecycle */
  eventHistory?: ReferenceOutputType[];
}

export const MedicationAdministration: t.RecursiveType<
  t.Type<MedicationAdministration, MedicationAdministrationOutputType>,
  MedicationAdministration,
  MedicationAdministrationOutputType
> = t.recursion<MedicationAdministration, MedicationAdministrationOutputType>(
  "MedicationAdministration",
  () =>
    t.intersection(
      [
        t.type({
          /** Start and end time of administration */
          effective: t.union([primitives.R4.dateTime, Period]),
          /** What was administered */
          medication: t.union([CodeableConcept, Reference]),
          /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
          status: primitives.R4.code,
          /** Who received medication */
          subject: Reference
        }),
        t.partial({
          /** Type of medication usage */
          category: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Encounter or Episode of Care administered as part of */
          context: Reference,
          /** Device used to administer */
          device: t.array(Reference),
          /** Details of how medication was taken */
          dosage: MedicationAdministrationDosage,
          /** A list of events of interest in the lifecycle */
          eventHistory: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Instantiates protocol or definition */
          instantiates: t.array(primitives.R4.uri),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Information about the administration */
          note: t.array(Annotation),
          /** Part of referenced event */
          partOf: t.array(Reference),
          /** Who performed the medication administration and what they did */
          performer: t.array(MedicationAdministrationPerformer),
          /** Reason administration performed */
          reasonCode: t.array(CodeableConcept),
          /** Condition or observation that supports why the medication was administered */
          reasonReference: t.array(Reference),
          /** Request administration performed against */
          request: Reference,
          /** Reason administration not performed */
          statusReason: t.array(CodeableConcept),
          /** Additional information to support administration */
          supportingInformation: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "MedicationAdministration"
    )
);
