/**
 * MedicationKnowledge Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Dosage, DosageOutputType } from "./Dosage";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Associated or related medication information
 */
export interface MedicationKnowledgeRelatedMedicationKnowledge {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Category of medicationKnowledge */
  type: CodeableConcept;
  /** Associated documentation about the associated medication knowledge */
  reference: Reference[];
}

export interface MedicationKnowledgeRelatedMedicationKnowledgeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Category of medicationKnowledge */
  type: CodeableConceptOutputType;
  /** Associated documentation about the associated medication knowledge */
  reference: ReferenceOutputType[];
}

export const MedicationKnowledgeRelatedMedicationKnowledge: t.RecursiveType<
  t.Type<
    MedicationKnowledgeRelatedMedicationKnowledge,
    MedicationKnowledgeRelatedMedicationKnowledgeOutputType
  >,
  MedicationKnowledgeRelatedMedicationKnowledge,
  MedicationKnowledgeRelatedMedicationKnowledgeOutputType
> = t.recursion<
  MedicationKnowledgeRelatedMedicationKnowledge,
  MedicationKnowledgeRelatedMedicationKnowledgeOutputType
>("MedicationKnowledgeRelatedMedicationKnowledge", () =>
  t.intersection(
    [
      t.type({
        /** Associated documentation about the associated medication knowledge */
        reference: t.array(Reference),
        /** Category of medicationKnowledge */
        type: CodeableConcept
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
    "MedicationKnowledgeRelatedMedicationKnowledge"
  )
);

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export interface MedicationKnowledgeRegulatorySubstitution {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specifies the type of substitution allowed */
  type: CodeableConcept;
  /** Specifies if regulation allows for changes in the medication when dispensing */
  allowed: t.TypeOf<primitives.R4.BooleanType>;
}

export interface MedicationKnowledgeRegulatorySubstitutionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Specifies the type of substitution allowed */
  type: CodeableConceptOutputType;
  /** Specifies if regulation allows for changes in the medication when dispensing */
  allowed: t.OutputOf<primitives.R4.BooleanType>;
}

export const MedicationKnowledgeRegulatorySubstitution: t.RecursiveType<
  t.Type<
    MedicationKnowledgeRegulatorySubstitution,
    MedicationKnowledgeRegulatorySubstitutionOutputType
  >,
  MedicationKnowledgeRegulatorySubstitution,
  MedicationKnowledgeRegulatorySubstitutionOutputType
> = t.recursion<
  MedicationKnowledgeRegulatorySubstitution,
  MedicationKnowledgeRegulatorySubstitutionOutputType
>("MedicationKnowledgeRegulatorySubstitution", () =>
  t.intersection(
    [
      t.type({
        /** Specifies if regulation allows for changes in the medication when dispensing */
        allowed: primitives.R4.boolean,
        /** Specifies the type of substitution allowed */
        type: CodeableConcept
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
    "MedicationKnowledgeRegulatorySubstitution"
  )
);

/**
 * Specifies the schedule of a medication in jurisdiction
 */
export interface MedicationKnowledgeRegulatorySchedule {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specifies the specific drug schedule */
  schedule: CodeableConcept;
}

export interface MedicationKnowledgeRegulatoryScheduleOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Specifies the specific drug schedule */
  schedule: CodeableConceptOutputType;
}

export const MedicationKnowledgeRegulatorySchedule: t.RecursiveType<
  t.Type<
    MedicationKnowledgeRegulatorySchedule,
    MedicationKnowledgeRegulatoryScheduleOutputType
  >,
  MedicationKnowledgeRegulatorySchedule,
  MedicationKnowledgeRegulatoryScheduleOutputType
> = t.recursion<
  MedicationKnowledgeRegulatorySchedule,
  MedicationKnowledgeRegulatoryScheduleOutputType
>("MedicationKnowledgeRegulatorySchedule", () =>
  t.intersection(
    [
      t.type({
        /** Specifies the specific drug schedule */
        schedule: CodeableConcept
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
    "MedicationKnowledgeRegulatorySchedule"
  )
);

/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export interface MedicationKnowledgeRegulatoryMaxDispense {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The maximum number of units of the medication that can be dispensed */
  quantity: Quantity;
  /** The period that applies to the maximum number of units */
  period?: Duration;
}

export interface MedicationKnowledgeRegulatoryMaxDispenseOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The maximum number of units of the medication that can be dispensed */
  quantity: QuantityOutputType;
  /** The period that applies to the maximum number of units */
  period?: DurationOutputType;
}

export const MedicationKnowledgeRegulatoryMaxDispense: t.RecursiveType<
  t.Type<
    MedicationKnowledgeRegulatoryMaxDispense,
    MedicationKnowledgeRegulatoryMaxDispenseOutputType
  >,
  MedicationKnowledgeRegulatoryMaxDispense,
  MedicationKnowledgeRegulatoryMaxDispenseOutputType
> = t.recursion<
  MedicationKnowledgeRegulatoryMaxDispense,
  MedicationKnowledgeRegulatoryMaxDispenseOutputType
>("MedicationKnowledgeRegulatoryMaxDispense", () =>
  t.intersection(
    [
      t.type({
        /** The maximum number of units of the medication that can be dispensed */
        quantity: Quantity
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The period that applies to the maximum number of units */
        period: Duration
      })
    ],
    "MedicationKnowledgeRegulatoryMaxDispense"
  )
);

/**
 * Regulatory information about a medication
 */
export interface MedicationKnowledgeRegulatory {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specifies the authority of the regulation */
  regulatoryAuthority: Reference;
  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective */
  substitution?: MedicationKnowledgeRegulatorySubstitution[];
  /** Specifies the schedule of a medication in jurisdiction */
  schedule?: MedicationKnowledgeRegulatorySchedule[];
  /** The maximum number of units of the medication that can be dispensed in a period */
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispense;
}

export interface MedicationKnowledgeRegulatoryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Specifies the authority of the regulation */
  regulatoryAuthority: ReferenceOutputType;
  /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective */
  substitution?: MedicationKnowledgeRegulatorySubstitutionOutputType[];
  /** Specifies the schedule of a medication in jurisdiction */
  schedule?: MedicationKnowledgeRegulatoryScheduleOutputType[];
  /** The maximum number of units of the medication that can be dispensed in a period */
  maxDispense?: MedicationKnowledgeRegulatoryMaxDispenseOutputType;
}

export const MedicationKnowledgeRegulatory: t.RecursiveType<
  t.Type<
    MedicationKnowledgeRegulatory,
    MedicationKnowledgeRegulatoryOutputType
  >,
  MedicationKnowledgeRegulatory,
  MedicationKnowledgeRegulatoryOutputType
> = t.recursion<
  MedicationKnowledgeRegulatory,
  MedicationKnowledgeRegulatoryOutputType
>("MedicationKnowledgeRegulatory", () =>
  t.intersection(
    [
      t.type({
        /** Specifies the authority of the regulation */
        regulatoryAuthority: Reference
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The maximum number of units of the medication that can be dispensed in a period */
        maxDispense: MedicationKnowledgeRegulatoryMaxDispense,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Specifies the schedule of a medication in jurisdiction */
        schedule: t.array(MedicationKnowledgeRegulatorySchedule),
        /** Specifies if changes are allowed when dispensing a medication from a regulatory perspective */
        substitution: t.array(MedicationKnowledgeRegulatorySubstitution)
      })
    ],
    "MedicationKnowledgeRegulatory"
  )
);

/**
 * Details about packaged medications
 */
export interface MedicationKnowledgePackaging {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A code that defines the specific type of packaging that the medication can be found in */
  type?: CodeableConcept;
  /** The number of product units the package would contain if fully loaded */
  quantity?: Quantity;
}

export interface MedicationKnowledgePackagingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A code that defines the specific type of packaging that the medication can be found in */
  type?: CodeableConceptOutputType;
  /** The number of product units the package would contain if fully loaded */
  quantity?: QuantityOutputType;
}

export const MedicationKnowledgePackaging: t.RecursiveType<
  t.Type<MedicationKnowledgePackaging, MedicationKnowledgePackagingOutputType>,
  MedicationKnowledgePackaging,
  MedicationKnowledgePackagingOutputType
> = t.recursion<
  MedicationKnowledgePackaging,
  MedicationKnowledgePackagingOutputType
>("MedicationKnowledgePackaging", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The number of product units the package would contain if fully loaded */
        quantity: Quantity,
        /** A code that defines the specific type of packaging that the medication can be found in */
        type: CodeableConcept
      })
    ],
    "MedicationKnowledgePackaging"
  )
);

/**
 * Associated documentation about the medication
 */
export interface MedicationKnowledgeMonograph {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The category of medication document */
  type?: CodeableConcept;
  /** Associated documentation about the medication */
  source?: Reference;
}

export interface MedicationKnowledgeMonographOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The category of medication document */
  type?: CodeableConceptOutputType;
  /** Associated documentation about the medication */
  source?: ReferenceOutputType;
}

export const MedicationKnowledgeMonograph: t.RecursiveType<
  t.Type<MedicationKnowledgeMonograph, MedicationKnowledgeMonographOutputType>,
  MedicationKnowledgeMonograph,
  MedicationKnowledgeMonographOutputType
> = t.recursion<
  MedicationKnowledgeMonograph,
  MedicationKnowledgeMonographOutputType
>("MedicationKnowledgeMonograph", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Associated documentation about the medication */
        source: Reference,
        /** The category of medication document */
        type: CodeableConcept
      })
    ],
    "MedicationKnowledgeMonograph"
  )
);

/**
 * Program under which a medication is reviewed
 */
export interface MedicationKnowledgeMonitoringProgram {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of program under which the medication is monitored */
  type?: CodeableConcept;
  /** Name of the reviewing program */
  name?: t.TypeOf<primitives.R4.StringType>;
}

export interface MedicationKnowledgeMonitoringProgramOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of program under which the medication is monitored */
  type?: CodeableConceptOutputType;
  /** Name of the reviewing program */
  name?: t.OutputOf<primitives.R4.StringType>;
}

export const MedicationKnowledgeMonitoringProgram: t.RecursiveType<
  t.Type<
    MedicationKnowledgeMonitoringProgram,
    MedicationKnowledgeMonitoringProgramOutputType
  >,
  MedicationKnowledgeMonitoringProgram,
  MedicationKnowledgeMonitoringProgramOutputType
> = t.recursion<
  MedicationKnowledgeMonitoringProgram,
  MedicationKnowledgeMonitoringProgramOutputType
>("MedicationKnowledgeMonitoringProgram", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Name of the reviewing program */
        name: primitives.R4.string,
        /** Type of program under which the medication is monitored */
        type: CodeableConcept
      })
    ],
    "MedicationKnowledgeMonitoringProgram"
  )
);

/**
 * Categorization of the medication within a formulary or classification system
 */
export interface MedicationKnowledgeMedicineClassification {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) */
  type: CodeableConcept;
  /** Specific category assigned to the medication */
  classification?: CodeableConcept[];
}

export interface MedicationKnowledgeMedicineClassificationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) */
  type: CodeableConceptOutputType;
  /** Specific category assigned to the medication */
  classification?: CodeableConceptOutputType[];
}

export const MedicationKnowledgeMedicineClassification: t.RecursiveType<
  t.Type<
    MedicationKnowledgeMedicineClassification,
    MedicationKnowledgeMedicineClassificationOutputType
  >,
  MedicationKnowledgeMedicineClassification,
  MedicationKnowledgeMedicineClassificationOutputType
> = t.recursion<
  MedicationKnowledgeMedicineClassification,
  MedicationKnowledgeMedicineClassificationOutputType
>("MedicationKnowledgeMedicineClassification", () =>
  t.intersection(
    [
      t.type({
        /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) */
        type: CodeableConcept
      }),
      t.partial({
        /** Specific category assigned to the medication */
        classification: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicationKnowledgeMedicineClassification"
  )
);

/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 */
export interface MedicationKnowledgeKinetics {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The drug concentration measured at certain discrete points in time */
  areaUnderCurve?: Quantity[];
  /** The median lethal dose of a drug */
  lethalDose50?: Quantity[];
  /** Time required for concentration in the body to decrease by half */
  halfLifePeriod?: Duration;
}

export interface MedicationKnowledgeKineticsOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The drug concentration measured at certain discrete points in time */
  areaUnderCurve?: QuantityOutputType[];
  /** The median lethal dose of a drug */
  lethalDose50?: QuantityOutputType[];
  /** Time required for concentration in the body to decrease by half */
  halfLifePeriod?: DurationOutputType;
}

export const MedicationKnowledgeKinetics: t.RecursiveType<
  t.Type<MedicationKnowledgeKinetics, MedicationKnowledgeKineticsOutputType>,
  MedicationKnowledgeKinetics,
  MedicationKnowledgeKineticsOutputType
> = t.recursion<
  MedicationKnowledgeKinetics,
  MedicationKnowledgeKineticsOutputType
>("MedicationKnowledgeKinetics", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** The drug concentration measured at certain discrete points in time */
        areaUnderCurve: t.array(Quantity),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Time required for concentration in the body to decrease by half */
        halfLifePeriod: Duration,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The median lethal dose of a drug */
        lethalDose50: t.array(Quantity),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicationKnowledgeKinetics"
  )
);

/**
 * Active or inactive ingredient
 */
export interface MedicationKnowledgeIngredient {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Medication(s) or substance(s) contained in the medication */
  item: CodeableConcept | Reference;
  /** Active ingredient indicator */
  isActive?: t.TypeOf<primitives.R4.BooleanType>;
  /** Quantity of ingredient present */
  strength?: Ratio;
}

export interface MedicationKnowledgeIngredientOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Medication(s) or substance(s) contained in the medication */
  item: CodeableConceptOutputType | ReferenceOutputType;
  /** Active ingredient indicator */
  isActive?: t.OutputOf<primitives.R4.BooleanType>;
  /** Quantity of ingredient present */
  strength?: RatioOutputType;
}

export const MedicationKnowledgeIngredient: t.RecursiveType<
  t.Type<
    MedicationKnowledgeIngredient,
    MedicationKnowledgeIngredientOutputType
  >,
  MedicationKnowledgeIngredient,
  MedicationKnowledgeIngredientOutputType
> = t.recursion<
  MedicationKnowledgeIngredient,
  MedicationKnowledgeIngredientOutputType
>("MedicationKnowledgeIngredient", () =>
  t.intersection(
    [
      t.type({
        /** Medication(s) or substance(s) contained in the medication */
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
    "MedicationKnowledgeIngredient"
  )
);

/**
 * Specifies descriptive properties of the medicine
 */
export interface MedicationKnowledgeDrugCharacteristic {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code specifying the type of characteristic of medication */
  type?: CodeableConcept;
  /** Description of the characteristic */
  value?:
    | CodeableConcept
    | t.TypeOf<primitives.R4.StringType>
    | Quantity
    | t.TypeOf<primitives.R4.Base64BinaryType>;
}

export interface MedicationKnowledgeDrugCharacteristicOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code specifying the type of characteristic of medication */
  type?: CodeableConceptOutputType;
  /** Description of the characteristic */
  value?:
    | CodeableConceptOutputType
    | t.OutputOf<primitives.R4.StringType>
    | QuantityOutputType
    | t.OutputOf<primitives.R4.Base64BinaryType>;
}

export const MedicationKnowledgeDrugCharacteristic: t.RecursiveType<
  t.Type<
    MedicationKnowledgeDrugCharacteristic,
    MedicationKnowledgeDrugCharacteristicOutputType
  >,
  MedicationKnowledgeDrugCharacteristic,
  MedicationKnowledgeDrugCharacteristicOutputType
> = t.recursion<
  MedicationKnowledgeDrugCharacteristic,
  MedicationKnowledgeDrugCharacteristicOutputType
>("MedicationKnowledgeDrugCharacteristic", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Code specifying the type of characteristic of medication */
        type: CodeableConcept,
        /** Description of the characteristic */
        value: t.union([
          CodeableConcept,
          primitives.R4.string,
          Quantity,
          primitives.R4.base64Binary
        ])
      })
    ],
    "MedicationKnowledgeDrugCharacteristic"
  )
);

/**
 * The pricing of the medication
 */
export interface MedicationKnowledgeCost {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The category of the cost information */
  type: CodeableConcept;
  /** The source or owner for the price information */
  source?: t.TypeOf<primitives.R4.StringType>;
  /** The price of the medication */
  cost: Money;
}

export interface MedicationKnowledgeCostOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The category of the cost information */
  type: CodeableConceptOutputType;
  /** The source or owner for the price information */
  source?: t.OutputOf<primitives.R4.StringType>;
  /** The price of the medication */
  cost: MoneyOutputType;
}

export const MedicationKnowledgeCost: t.RecursiveType<
  t.Type<MedicationKnowledgeCost, MedicationKnowledgeCostOutputType>,
  MedicationKnowledgeCost,
  MedicationKnowledgeCostOutputType
> = t.recursion<MedicationKnowledgeCost, MedicationKnowledgeCostOutputType>(
  "MedicationKnowledgeCost",
  () =>
    t.intersection(
      [
        t.type({
          /** The price of the medication */
          cost: Money,
          /** The category of the cost information */
          type: CodeableConcept
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The source or owner for the price information */
          source: primitives.R4.string
        })
      ],
      "MedicationKnowledgeCost"
    )
);

/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specific characteristic that is relevant to the administration guideline */
  characteristic: CodeableConcept | Quantity;
  /** The specific characteristic */
  value?: t.TypeOf<primitives.R4.StringType>[];
}

export interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Specific characteristic that is relevant to the administration guideline */
  characteristic: CodeableConceptOutputType | QuantityOutputType;
  /** The specific characteristic */
  value?: t.OutputOf<primitives.R4.StringType>[];
}

export const MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics: t.RecursiveType<
  t.Type<
    MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
    MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsOutputType
  >,
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsOutputType
> = t.recursion<
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics,
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsOutputType
>("MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics", () =>
  t.intersection(
    [
      t.type({
        /** Specific characteristic that is relevant to the administration guideline */
        characteristic: t.union([CodeableConcept, Quantity])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The specific characteristic */
        value: t.array(primitives.R4.string)
      })
    ],
    "MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics"
  )
);

/**
 * Dosage for the medication for the specific guidelines
 */
export interface MedicationKnowledgeAdministrationGuidelinesDosage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of dosage */
  type: CodeableConcept;
  /** Dosage for the medication for the specific guidelines */
  dosage: Dosage[];
}

export interface MedicationKnowledgeAdministrationGuidelinesDosageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of dosage */
  type: CodeableConceptOutputType;
  /** Dosage for the medication for the specific guidelines */
  dosage: DosageOutputType[];
}

export const MedicationKnowledgeAdministrationGuidelinesDosage: t.RecursiveType<
  t.Type<
    MedicationKnowledgeAdministrationGuidelinesDosage,
    MedicationKnowledgeAdministrationGuidelinesDosageOutputType
  >,
  MedicationKnowledgeAdministrationGuidelinesDosage,
  MedicationKnowledgeAdministrationGuidelinesDosageOutputType
> = t.recursion<
  MedicationKnowledgeAdministrationGuidelinesDosage,
  MedicationKnowledgeAdministrationGuidelinesDosageOutputType
>("MedicationKnowledgeAdministrationGuidelinesDosage", () =>
  t.intersection(
    [
      t.type({
        /** Dosage for the medication for the specific guidelines */
        dosage: t.array(Dosage),
        /** Type of dosage */
        type: CodeableConcept
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
    "MedicationKnowledgeAdministrationGuidelinesDosage"
  )
);

/**
 * Guidelines for administration of the medication
 */
export interface MedicationKnowledgeAdministrationGuidelines {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Dosage for the medication for the specific guidelines */
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosage[];
  /** Indication for use that apply to the specific administration guidelines */
  indication?: CodeableConcept | Reference;
  /** Characteristics of the patient that are relevant to the administration guidelines */
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics[];
}

export interface MedicationKnowledgeAdministrationGuidelinesOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Dosage for the medication for the specific guidelines */
  dosage?: MedicationKnowledgeAdministrationGuidelinesDosageOutputType[];
  /** Indication for use that apply to the specific administration guidelines */
  indication?: CodeableConceptOutputType | ReferenceOutputType;
  /** Characteristics of the patient that are relevant to the administration guidelines */
  patientCharacteristics?: MedicationKnowledgeAdministrationGuidelinesPatientCharacteristicsOutputType[];
}

export const MedicationKnowledgeAdministrationGuidelines: t.RecursiveType<
  t.Type<
    MedicationKnowledgeAdministrationGuidelines,
    MedicationKnowledgeAdministrationGuidelinesOutputType
  >,
  MedicationKnowledgeAdministrationGuidelines,
  MedicationKnowledgeAdministrationGuidelinesOutputType
> = t.recursion<
  MedicationKnowledgeAdministrationGuidelines,
  MedicationKnowledgeAdministrationGuidelinesOutputType
>("MedicationKnowledgeAdministrationGuidelines", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Dosage for the medication for the specific guidelines */
        dosage: t.array(MedicationKnowledgeAdministrationGuidelinesDosage),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Indication for use that apply to the specific administration guidelines */
        indication: t.union([CodeableConcept, Reference]),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Characteristics of the patient that are relevant to the administration guidelines */
        patientCharacteristics: t.array(
          MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
        )
      })
    ],
    "MedicationKnowledgeAdministrationGuidelines"
  )
);

/**
 * Definition of Medication Knowledge
 */
export interface MedicationKnowledge {
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
  /** Code that identifies this medication */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Manufacturer of the item */
  manufacturer?: Reference;
  /** powder | tablets | capsule + */
  doseForm?: CodeableConcept;
  /** Amount of drug in package */
  amount?: Quantity;
  /** Additional names for a medication */
  synonym?: t.TypeOf<primitives.R4.StringType>[];
  /** Associated or related medication information */
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];
  /** A medication resource that is associated with this medication */
  associatedMedication?: Reference[];
  /** Category of the medication or product */
  productType?: CodeableConcept[];
  /** Associated documentation about the medication */
  monograph?: MedicationKnowledgeMonograph[];
  /** Active or inactive ingredient */
  ingredient?: MedicationKnowledgeIngredient[];
  /** The instructions for preparing the medication */
  preparationInstruction?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The intended or approved route of administration */
  intendedRoute?: CodeableConcept[];
  /** The pricing of the medication */
  cost?: MedicationKnowledgeCost[];
  /** Program under which a medication is reviewed */
  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];
  /** Guidelines for administration of the medication */
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];
  /** Categorization of the medication within a formulary or classification system */
  medicineClassification?: MedicationKnowledgeMedicineClassification[];
  /** Details about packaged medications */
  packaging?: MedicationKnowledgePackaging;
  /** Specifies descriptive properties of the medicine */
  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];
  /** Potential clinical issue with or between medication(s) */
  contraindication?: Reference[];
  /** Regulatory information about a medication */
  regulatory?: MedicationKnowledgeRegulatory[];
  /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body */
  kinetics?: MedicationKnowledgeKinetics[];
}

export interface MedicationKnowledgeOutputType {
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
  /** Code that identifies this medication */
  code?: CodeableConceptOutputType;
  /** active | inactive | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Manufacturer of the item */
  manufacturer?: ReferenceOutputType;
  /** powder | tablets | capsule + */
  doseForm?: CodeableConceptOutputType;
  /** Amount of drug in package */
  amount?: QuantityOutputType;
  /** Additional names for a medication */
  synonym?: t.OutputOf<primitives.R4.StringType>[];
  /** Associated or related medication information */
  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledgeOutputType[];
  /** A medication resource that is associated with this medication */
  associatedMedication?: ReferenceOutputType[];
  /** Category of the medication or product */
  productType?: CodeableConceptOutputType[];
  /** Associated documentation about the medication */
  monograph?: MedicationKnowledgeMonographOutputType[];
  /** Active or inactive ingredient */
  ingredient?: MedicationKnowledgeIngredientOutputType[];
  /** The instructions for preparing the medication */
  preparationInstruction?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The intended or approved route of administration */
  intendedRoute?: CodeableConceptOutputType[];
  /** The pricing of the medication */
  cost?: MedicationKnowledgeCostOutputType[];
  /** Program under which a medication is reviewed */
  monitoringProgram?: MedicationKnowledgeMonitoringProgramOutputType[];
  /** Guidelines for administration of the medication */
  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelinesOutputType[];
  /** Categorization of the medication within a formulary or classification system */
  medicineClassification?: MedicationKnowledgeMedicineClassificationOutputType[];
  /** Details about packaged medications */
  packaging?: MedicationKnowledgePackagingOutputType;
  /** Specifies descriptive properties of the medicine */
  drugCharacteristic?: MedicationKnowledgeDrugCharacteristicOutputType[];
  /** Potential clinical issue with or between medication(s) */
  contraindication?: ReferenceOutputType[];
  /** Regulatory information about a medication */
  regulatory?: MedicationKnowledgeRegulatoryOutputType[];
  /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body */
  kinetics?: MedicationKnowledgeKineticsOutputType[];
}

export const MedicationKnowledge: t.RecursiveType<
  t.Type<MedicationKnowledge, MedicationKnowledgeOutputType>,
  MedicationKnowledge,
  MedicationKnowledgeOutputType
> = t.recursion<MedicationKnowledge, MedicationKnowledgeOutputType>(
  "MedicationKnowledge",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Guidelines for administration of the medication */
          administrationGuidelines: t.array(
            MedicationKnowledgeAdministrationGuidelines
          ),
          /** Amount of drug in package */
          amount: Quantity,
          /** A medication resource that is associated with this medication */
          associatedMedication: t.array(Reference),
          /** Code that identifies this medication */
          code: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Potential clinical issue with or between medication(s) */
          contraindication: t.array(Reference),
          /** The pricing of the medication */
          cost: t.array(MedicationKnowledgeCost),
          /** powder | tablets | capsule + */
          doseForm: CodeableConcept,
          /** Specifies descriptive properties of the medicine */
          drugCharacteristic: t.array(MedicationKnowledgeDrugCharacteristic),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Active or inactive ingredient */
          ingredient: t.array(MedicationKnowledgeIngredient),
          /** The intended or approved route of administration */
          intendedRoute: t.array(CodeableConcept),
          /** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body */
          kinetics: t.array(MedicationKnowledgeKinetics),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Manufacturer of the item */
          manufacturer: Reference,
          /** Categorization of the medication within a formulary or classification system */
          medicineClassification: t.array(
            MedicationKnowledgeMedicineClassification
          ),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Program under which a medication is reviewed */
          monitoringProgram: t.array(MedicationKnowledgeMonitoringProgram),
          /** Associated documentation about the medication */
          monograph: t.array(MedicationKnowledgeMonograph),
          /** Details about packaged medications */
          packaging: MedicationKnowledgePackaging,
          /** The instructions for preparing the medication */
          preparationInstruction: primitives.R4.markdown,
          /** Category of the medication or product */
          productType: t.array(CodeableConcept),
          /** Regulatory information about a medication */
          regulatory: t.array(MedicationKnowledgeRegulatory),
          /** Associated or related medication information */
          relatedMedicationKnowledge: t.array(
            MedicationKnowledgeRelatedMedicationKnowledge
          ),
          /** active | inactive | entered-in-error */
          status: primitives.R4.code,
          /** Additional names for a medication */
          synonym: t.array(primitives.R4.string),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "MedicationKnowledge"
    )
);
