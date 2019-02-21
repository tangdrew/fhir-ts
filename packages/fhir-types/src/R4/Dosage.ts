/**
 * Dosage Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Amount of medication administered
 */
export interface DosageDoseAndRate {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** The kind of dose or rate specified */
  type?: CodeableConcept;
  /** Amount of medication per dose */
  dose?: Range | Quantity;
  /** Amount of medication per unit of time */
  rate?: Ratio | Range | Quantity;
}

export interface DosageDoseAndRateOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** The kind of dose or rate specified */
  type?: CodeableConceptOutputType;
  /** Amount of medication per dose */
  dose?: RangeOutputType | QuantityOutputType;
  /** Amount of medication per unit of time */
  rate?: RatioOutputType | RangeOutputType | QuantityOutputType;
}

export const DosageDoseAndRate: t.RecursiveType<
  t.Type<DosageDoseAndRate, DosageDoseAndRateOutputType>,
  DosageDoseAndRate,
  DosageDoseAndRateOutputType
> = t.recursion<DosageDoseAndRate, DosageDoseAndRateOutputType>(
  "DosageDoseAndRate",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Amount of medication per dose */
          dose: t.union([Range, Quantity]),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Amount of medication per unit of time */
          rate: t.union([Ratio, Range, Quantity]),
          /** The kind of dose or rate specified */
          type: CodeableConcept
        })
      ],
      "DosageDoseAndRate"
    )
);

/**
 * How the medication is/was taken or should be taken
 */
export interface Dosage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The order of the dosage instructions */
  sequence?: t.TypeOf<primitives.R4.IntegerType>;
  /** Free text dosage instructions e.g. SIG */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
  additionalInstruction?: CodeableConcept[];
  /** Patient or consumer oriented instructions */
  patientInstruction?: t.TypeOf<primitives.R4.StringType>;
  /** When medication should be administered */
  timing?: Timing;
  /** Take "as needed" (for x) */
  asneeded?: t.TypeOf<primitives.R4.BooleanType> | CodeableConcept;
  /** Body site to administer to */
  site?: CodeableConcept;
  /** How drug should enter body */
  route?: CodeableConcept;
  /** Technique for administering medication */
  method?: CodeableConcept;
  /** Amount of medication administered */
  doseAndRate?: DosageDoseAndRate[];
  /** Upper limit on medication per unit of time */
  maxDosePerPeriod?: Ratio;
  /** Upper limit on medication per administration */
  maxDosePerAdministration?: Quantity;
  /** Upper limit on medication per lifetime of the patient */
  maxDosePerLifetime?: Quantity;
}

export interface DosageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The order of the dosage instructions */
  sequence?: t.OutputOf<primitives.R4.IntegerType>;
  /** Free text dosage instructions e.g. SIG */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
  additionalInstruction?: CodeableConceptOutputType[];
  /** Patient or consumer oriented instructions */
  patientInstruction?: t.OutputOf<primitives.R4.StringType>;
  /** When medication should be administered */
  timing?: TimingOutputType;
  /** Take "as needed" (for x) */
  asneeded?: t.OutputOf<primitives.R4.BooleanType> | CodeableConceptOutputType;
  /** Body site to administer to */
  site?: CodeableConceptOutputType;
  /** How drug should enter body */
  route?: CodeableConceptOutputType;
  /** Technique for administering medication */
  method?: CodeableConceptOutputType;
  /** Amount of medication administered */
  doseAndRate?: DosageDoseAndRateOutputType[];
  /** Upper limit on medication per unit of time */
  maxDosePerPeriod?: RatioOutputType;
  /** Upper limit on medication per administration */
  maxDosePerAdministration?: QuantityOutputType;
  /** Upper limit on medication per lifetime of the patient */
  maxDosePerLifetime?: QuantityOutputType;
}

export const Dosage: t.RecursiveType<
  t.Type<Dosage, DosageOutputType>,
  Dosage,
  DosageOutputType
> = t.recursion<Dosage, DosageOutputType>("Dosage", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
        additionalInstruction: t.array(CodeableConcept),
        /** Take "as needed" (for x) */
        asneeded: t.union([primitives.R4.boolean, CodeableConcept]),
        /** Amount of medication administered */
        doseAndRate: t.array(DosageDoseAndRate),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Upper limit on medication per administration */
        maxDosePerAdministration: Quantity,
        /** Upper limit on medication per lifetime of the patient */
        maxDosePerLifetime: Quantity,
        /** Upper limit on medication per unit of time */
        maxDosePerPeriod: Ratio,
        /** Technique for administering medication */
        method: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Patient or consumer oriented instructions */
        patientInstruction: primitives.R4.string,
        /** How drug should enter body */
        route: CodeableConcept,
        /** The order of the dosage instructions */
        sequence: primitives.R4.integer,
        /** Body site to administer to */
        site: CodeableConcept,
        /** Free text dosage instructions e.g. SIG */
        text: primitives.R4.string,
        /** When medication should be administered */
        timing: Timing
      })
    ],
    "Dosage"
  )
);
