/**
 * Dosage Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Timing } from "./Timing";

/**
 * How the medication is/was taken or should be taken
 */
export interface Dosage {
  /** The type of resource */
  resourceType?: "Dosage";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The order of the dosage instructions */
  sequence?: primitives.R4.integer;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Free text dosage instructions e.g. SIG */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
  additionalInstruction?: CodeableConcept[];
  /** Patient or consumer oriented instructions */
  patientInstruction?: string;
  /** Extension of patientInstruction element */
  _patientInstruction?: Element;
  /** When medication should be administered */
  timing?: Timing;
  /** Take "as needed" (for x) */
  asneededBoolean?: boolean;
  /** Extension of asneededBoolean element */
  _asneededBoolean?: Element;
  /** Take "as needed" (for x) */
  asneededCodeableConcept?: CodeableConcept;
  /** Body site to administer to */
  site?: CodeableConcept;
  /** How drug should enter body */
  route?: CodeableConcept;
  /** Technique for administering medication */
  method?: CodeableConcept;
  /** Amount of medication administered */
  doseAndRate?: Element[];
  /** Upper limit on medication per unit of time */
  maxDosePerPeriod?: Ratio;
  /** Upper limit on medication per administration */
  maxDosePerAdministration?: Quantity;
  /** Upper limit on medication per lifetime of the patient */
  maxDosePerLifetime?: Quantity;
}
/**
 * How the medication is/was taken or should be taken
 */
export const Dosage: t.Type<Dosage> = t.recursion<Dosage>("Dosage", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Dosage"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** The order of the dosage instructions */
      sequence: primitives.R4.integer,
      /** Extension of sequence element */
      _sequence: Element,
      /** Free text dosage instructions e.g. SIG */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element,
      /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
      additionalInstruction: t.array(CodeableConcept),
      /** Patient or consumer oriented instructions */
      patientInstruction: primitives.R4.string,
      /** Extension of patientInstruction element */
      _patientInstruction: Element,
      /** When medication should be administered */
      timing: Timing,
      /** Take "as needed" (for x) */
      asneededBoolean: primitives.R4.boolean,
      /** Extension of asneededBoolean element */
      _asneededBoolean: Element,
      /** Take "as needed" (for x) */
      asneededCodeableConcept: CodeableConcept,
      /** Body site to administer to */
      site: CodeableConcept,
      /** How drug should enter body */
      route: CodeableConcept,
      /** Technique for administering medication */
      method: CodeableConcept,
      /** Amount of medication administered */
      doseAndRate: t.array(Element),
      /** Upper limit on medication per unit of time */
      maxDosePerPeriod: Ratio,
      /** Upper limit on medication per administration */
      maxDosePerAdministration: Quantity,
      /** Upper limit on medication per lifetime of the patient */
      maxDosePerLifetime: Quantity
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface DosageDoseAndRate {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** The kind of dose or rate specified */
  type?: CodeableConcept;
  /** Amount of medication per dose */
  doseRange?: Range;
  /** Amount of medication per dose */
  doseQuantity?: Quantity;
  /** Amount of medication per unit of time */
  rateRatio?: Ratio;
  /** Amount of medication per unit of time */
  rateRange?: Range;
  /** Amount of medication per unit of time */
  rateQuantity?: Quantity;
}
/**
 * Unique id for inter-element referencing
 */
export const DosageDoseAndRate: t.Type<DosageDoseAndRate> = t.recursion<
  DosageDoseAndRate
>("DosageDoseAndRate", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** The kind of dose or rate specified */
      type: CodeableConcept,
      /** Amount of medication per dose */
      doseRange: Range,
      /** Amount of medication per dose */
      doseQuantity: Quantity,
      /** Amount of medication per unit of time */
      rateRatio: Ratio,
      /** Amount of medication per unit of time */
      rateRange: Range,
      /** Amount of medication per unit of time */
      rateQuantity: Quantity
    })
  ])
);
