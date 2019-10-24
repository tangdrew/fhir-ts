/**
 * MedicationKnowledge Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Definition of Medication Knowledge
 */
export interface MedicationKnowledge {
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
  /** Code that identifies this medication */
  code?: CodeableConcept;
  /** active | inactive | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Manufacturer of the item */
  manufacturer?: Reference;
  /** powder | tablets | capsule + */
  doseForm?: CodeableConcept;
  /** Amount of drug in package */
  amount?: Quantity;
  /** Additional names for a medication */
  synonym?: string[];
  /** Extension of synonym element */
  _synonym?: Element[];
  /** A medication resource that is associated with this medication */
  associatedMedication?: Reference[];
  /** Category of the medication or product */
  productType?: CodeableConcept[];
  /** The instructions for preparing the medication */
  preparationInstruction?: primitives.R4.markdown;
  /** Extension of preparationInstruction element */
  _preparationInstruction?: Element;
  /** The intended or approved route of administration */
  intendedRoute?: CodeableConcept[];
  /** Potential clinical issue with or between medication(s) */
  contraindication?: Reference[];
}
/**
 * Definition of Medication Knowledge
 */
export const MedicationKnowledge: t.Type<MedicationKnowledge> = t.recursion<
  MedicationKnowledge
>("MedicationKnowledge", () =>
  t.intersection([
    t.type({}),
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
      /** Code that identifies this medication */
      code: CodeableConcept,
      /** active | inactive | entered-in-error */
      status: primitives.R4.code,
      /** Extension of status element */
      _status: Element,
      /** Manufacturer of the item */
      manufacturer: Reference,
      /** powder | tablets | capsule + */
      doseForm: CodeableConcept,
      /** Amount of drug in package */
      amount: Quantity,
      /** Additional names for a medication */
      synonym: t.array(primitives.R4.string),
      /** Extension of synonym element */
      _synonym: t.array(Element),
      /** A medication resource that is associated with this medication */
      associatedMedication: t.array(Reference),
      /** Category of the medication or product */
      productType: t.array(CodeableConcept),
      /** The instructions for preparing the medication */
      preparationInstruction: primitives.R4.markdown,
      /** Extension of preparationInstruction element */
      _preparationInstruction: Element,
      /** The intended or approved route of administration */
      intendedRoute: t.array(CodeableConcept),
      /** Potential clinical issue with or between medication(s) */
      contraindication: t.array(Reference)
    })
  ])
);

/**
 * Associated or related medication information
 */
export interface MedicationKnowledgeRelatedMedicationKnowledge {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Category of medicationKnowledge */
  type: CodeableConcept;
  /** Associated documentation about the associated medication knowledge */
  reference: Reference[];
}
/**
 * Associated or related medication information
 */
export const MedicationKnowledgeRelatedMedicationKnowledge: t.Type<
  MedicationKnowledgeRelatedMedicationKnowledge
> = t.recursion<MedicationKnowledgeRelatedMedicationKnowledge>(
  "MedicationKnowledgeRelatedMedicationKnowledge",
  () =>
    t.intersection([
      t.type({
        /** Category of medicationKnowledge */
        type: CodeableConcept,
        /** Associated documentation about the associated medication knowledge */
        reference: t.array(Reference)
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

/**
 * Associated documentation about the medication
 */
export interface MedicationKnowledgeMonograph {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The category of medication document */
  type?: CodeableConcept;
  /** Associated documentation about the medication */
  source?: Reference;
}
/**
 * Associated documentation about the medication
 */
export const MedicationKnowledgeMonograph: t.Type<
  MedicationKnowledgeMonograph
> = t.recursion<MedicationKnowledgeMonograph>(
  "MedicationKnowledgeMonograph",
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
        /** The category of medication document */
        type: CodeableConcept,
        /** Associated documentation about the medication */
        source: Reference
      })
    ])
);

/**
 * Active or inactive ingredient
 */
export interface MedicationKnowledgeIngredient {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Medication(s) or substance(s) contained in the medication */
  itemCodeableConcept: CodeableConcept;
  /** Medication(s) or substance(s) contained in the medication */
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
export const MedicationKnowledgeIngredient: t.Type<
  MedicationKnowledgeIngredient
> = t.recursion<MedicationKnowledgeIngredient>(
  "MedicationKnowledgeIngredient",
  () =>
    t.intersection([
      t.type({
        /** Medication(s) or substance(s) contained in the medication */
        itemCodeableConcept: CodeableConcept,
        /** Medication(s) or substance(s) contained in the medication */
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
 * The pricing of the medication
 */
export interface MedicationKnowledgeCost {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The category of the cost information */
  type: CodeableConcept;
  /** The source or owner for the price information */
  source?: string;
  /** Extension of source element */
  _source?: Element;
  /** The price of the medication */
  cost: Money;
}
/**
 * The pricing of the medication
 */
export const MedicationKnowledgeCost: t.Type<
  MedicationKnowledgeCost
> = t.recursion<MedicationKnowledgeCost>("MedicationKnowledgeCost", () =>
  t.intersection([
    t.type({
      /** The category of the cost information */
      type: CodeableConcept,
      /** The price of the medication */
      cost: Money
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
      /** The source or owner for the price information */
      source: primitives.R4.string,
      /** Extension of source element */
      _source: Element
    })
  ])
);

/**
 * Program under which a medication is reviewed
 */
export interface MedicationKnowledgeMonitoringProgram {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of program under which the medication is monitored */
  type?: CodeableConcept;
  /** Name of the reviewing program */
  name?: string;
  /** Extension of name element */
  _name?: Element;
}
/**
 * Program under which a medication is reviewed
 */
export const MedicationKnowledgeMonitoringProgram: t.Type<
  MedicationKnowledgeMonitoringProgram
> = t.recursion<MedicationKnowledgeMonitoringProgram>(
  "MedicationKnowledgeMonitoringProgram",
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
        /** Type of program under which the medication is monitored */
        type: CodeableConcept,
        /** Name of the reviewing program */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element
      })
    ])
);

/**
 * Guidelines for administration of the medication
 */
export interface MedicationKnowledgeAdministrationGuidelines {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Indication for use that apply to the specific administration guidelines */
  indicationCodeableConcept?: CodeableConcept;
  /** Indication for use that apply to the specific administration guidelines */
  indicationReference?: Reference;
}
/**
 * Guidelines for administration of the medication
 */
export const MedicationKnowledgeAdministrationGuidelines: t.Type<
  MedicationKnowledgeAdministrationGuidelines
> = t.recursion<MedicationKnowledgeAdministrationGuidelines>(
  "MedicationKnowledgeAdministrationGuidelines",
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
        /** Indication for use that apply to the specific administration guidelines */
        indicationCodeableConcept: CodeableConcept,
        /** Indication for use that apply to the specific administration guidelines */
        indicationReference: Reference
      })
    ])
);

/**
 * Dosage for the medication for the specific guidelines
 */
export interface MedicationKnowledgeAdministrationGuidelinesDosage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of dosage */
  type: CodeableConcept;
  /** Dosage for the medication for the specific guidelines */
  dosage: Dosage[];
}
/**
 * Dosage for the medication for the specific guidelines
 */
export const MedicationKnowledgeAdministrationGuidelinesDosage: t.Type<
  MedicationKnowledgeAdministrationGuidelinesDosage
> = t.recursion<MedicationKnowledgeAdministrationGuidelinesDosage>(
  "MedicationKnowledgeAdministrationGuidelinesDosage",
  () =>
    t.intersection([
      t.type({
        /** Type of dosage */
        type: CodeableConcept,
        /** Dosage for the medication for the specific guidelines */
        dosage: t.array(Dosage)
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

/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export interface MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specific characteristic that is relevant to the administration guideline */
  characteristicCodeableConcept: CodeableConcept;
  /** Specific characteristic that is relevant to the administration guideline */
  characteristicQuantity: Quantity;
  /** The specific characteristic */
  value?: string[];
  /** Extension of value element */
  _value?: Element[];
}
/**
 * Characteristics of the patient that are relevant to the administration guidelines
 */
export const MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics: t.Type<
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
> = t.recursion<
  MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics
>("MedicationKnowledgeAdministrationGuidelinesPatientCharacteristics", () =>
  t.intersection([
    t.type({
      /** Specific characteristic that is relevant to the administration guideline */
      characteristicCodeableConcept: CodeableConcept,
      /** Specific characteristic that is relevant to the administration guideline */
      characteristicQuantity: Quantity
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
      /** The specific characteristic */
      value: t.array(primitives.R4.string),
      /** Extension of value element */
      _value: t.array(Element)
    })
  ])
);

/**
 * Categorization of the medication within a formulary or classification system
 */
export interface MedicationKnowledgeMedicineClassification {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) */
  type: CodeableConcept;
  /** Specific category assigned to the medication */
  classification?: CodeableConcept[];
}
/**
 * Categorization of the medication within a formulary or classification system
 */
export const MedicationKnowledgeMedicineClassification: t.Type<
  MedicationKnowledgeMedicineClassification
> = t.recursion<MedicationKnowledgeMedicineClassification>(
  "MedicationKnowledgeMedicineClassification",
  () =>
    t.intersection([
      t.type({
        /** The type of category for the medication (for example, therapeutic classification, therapeutic sub-classification) */
        type: CodeableConcept
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
        /** Specific category assigned to the medication */
        classification: t.array(CodeableConcept)
      })
    ])
);

/**
 * Details about packaged medications
 */
export interface MedicationKnowledgePackaging {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A code that defines the specific type of packaging that the medication can be found in */
  type?: CodeableConcept;
  /** The number of product units the package would contain if fully loaded */
  quantity?: Quantity;
}
/**
 * Details about packaged medications
 */
export const MedicationKnowledgePackaging: t.Type<
  MedicationKnowledgePackaging
> = t.recursion<MedicationKnowledgePackaging>(
  "MedicationKnowledgePackaging",
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
        /** A code that defines the specific type of packaging that the medication can be found in */
        type: CodeableConcept,
        /** The number of product units the package would contain if fully loaded */
        quantity: Quantity
      })
    ])
);

/**
 * Specifies descriptive properties of the medicine
 */
export interface MedicationKnowledgeDrugCharacteristic {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code specifying the type of characteristic of medication */
  type?: CodeableConcept;
  /** Description of the characteristic */
  valueCodeableConcept?: CodeableConcept;
  /** Description of the characteristic */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Description of the characteristic */
  valueQuantity?: Quantity;
  /** Description of the characteristic */
  valueBase64Binary?: primitives.R4.base64Binary;
  /** Extension of valueBase64Binary element */
  _valueBase64Binary?: Element;
}
/**
 * Specifies descriptive properties of the medicine
 */
export const MedicationKnowledgeDrugCharacteristic: t.Type<
  MedicationKnowledgeDrugCharacteristic
> = t.recursion<MedicationKnowledgeDrugCharacteristic>(
  "MedicationKnowledgeDrugCharacteristic",
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
        /** Code specifying the type of characteristic of medication */
        type: CodeableConcept,
        /** Description of the characteristic */
        valueCodeableConcept: CodeableConcept,
        /** Description of the characteristic */
        valueString: primitives.R4.string,
        /** Extension of valueString element */
        _valueString: Element,
        /** Description of the characteristic */
        valueQuantity: Quantity,
        /** Description of the characteristic */
        valueBase64Binary: primitives.R4.base64Binary,
        /** Extension of valueBase64Binary element */
        _valueBase64Binary: Element
      })
    ])
);

/**
 * Regulatory information about a medication
 */
export interface MedicationKnowledgeRegulatory {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specifies the authority of the regulation */
  regulatoryAuthority: Reference;
}
/**
 * Regulatory information about a medication
 */
export const MedicationKnowledgeRegulatory: t.Type<
  MedicationKnowledgeRegulatory
> = t.recursion<MedicationKnowledgeRegulatory>(
  "MedicationKnowledgeRegulatory",
  () =>
    t.intersection([
      t.type({
        /** Specifies the authority of the regulation */
        regulatoryAuthority: Reference
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

/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export interface MedicationKnowledgeRegulatorySubstitution {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specifies the type of substitution allowed */
  type: CodeableConcept;
  /** Specifies if regulation allows for changes in the medication when dispensing */
  allowed: boolean;
  /** Extension of allowed element */
  _allowed?: Element;
}
/**
 * Specifies if changes are allowed when dispensing a medication from a regulatory perspective
 */
export const MedicationKnowledgeRegulatorySubstitution: t.Type<
  MedicationKnowledgeRegulatorySubstitution
> = t.recursion<MedicationKnowledgeRegulatorySubstitution>(
  "MedicationKnowledgeRegulatorySubstitution",
  () =>
    t.intersection([
      t.type({
        /** Specifies the type of substitution allowed */
        type: CodeableConcept,
        /** Specifies if regulation allows for changes in the medication when dispensing */
        allowed: primitives.R4.boolean
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
        /** Extension of allowed element */
        _allowed: Element
      })
    ])
);

/**
 * Specifies the schedule of a medication in jurisdiction
 */
export interface MedicationKnowledgeRegulatorySchedule {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specifies the specific drug schedule */
  schedule: CodeableConcept;
}
/**
 * Specifies the schedule of a medication in jurisdiction
 */
export const MedicationKnowledgeRegulatorySchedule: t.Type<
  MedicationKnowledgeRegulatorySchedule
> = t.recursion<MedicationKnowledgeRegulatorySchedule>(
  "MedicationKnowledgeRegulatorySchedule",
  () =>
    t.intersection([
      t.type({
        /** Specifies the specific drug schedule */
        schedule: CodeableConcept
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

/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export interface MedicationKnowledgeRegulatoryMaxDispense {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The maximum number of units of the medication that can be dispensed */
  quantity: Quantity;
  /** The period that applies to the maximum number of units */
  period?: Duration;
}
/**
 * The maximum number of units of the medication that can be dispensed in a period
 */
export const MedicationKnowledgeRegulatoryMaxDispense: t.Type<
  MedicationKnowledgeRegulatoryMaxDispense
> = t.recursion<MedicationKnowledgeRegulatoryMaxDispense>(
  "MedicationKnowledgeRegulatoryMaxDispense",
  () =>
    t.intersection([
      t.type({
        /** The maximum number of units of the medication that can be dispensed */
        quantity: Quantity
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
        /** The period that applies to the maximum number of units */
        period: Duration
      })
    ])
);

/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 */
export interface MedicationKnowledgeKinetics {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * The time course of drug absorption, distribution, metabolism and excretion of a medication from the body
 */
export const MedicationKnowledgeKinetics: t.Type<
  MedicationKnowledgeKinetics
> = t.recursion<MedicationKnowledgeKinetics>(
  "MedicationKnowledgeKinetics",
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
        /** The drug concentration measured at certain discrete points in time */
        areaUnderCurve: t.array(Quantity),
        /** The median lethal dose of a drug */
        lethalDose50: t.array(Quantity),
        /** Time required for concentration in the body to decrease by half */
        halfLifePeriod: Duration
      })
    ])
);
