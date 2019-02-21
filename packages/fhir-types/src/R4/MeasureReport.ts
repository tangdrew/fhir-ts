/**
 * MeasureReport Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Population results in this stratum
 */
export interface MeasureReportGroupStratifierStratumPopulation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConcept;
  /** Size of the population */
  count?: t.TypeOf<primitives.R4.IntegerType>;
  /** For subject-list reports, the subject results in this population */
  subjectResults?: Reference;
}

export interface MeasureReportGroupStratifierStratumPopulationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConceptOutputType;
  /** Size of the population */
  count?: t.OutputOf<primitives.R4.IntegerType>;
  /** For subject-list reports, the subject results in this population */
  subjectResults?: ReferenceOutputType;
}

export const MeasureReportGroupStratifierStratumPopulation: t.RecursiveType<
  t.Type<
    MeasureReportGroupStratifierStratumPopulation,
    MeasureReportGroupStratifierStratumPopulationOutputType
  >,
  MeasureReportGroupStratifierStratumPopulation,
  MeasureReportGroupStratifierStratumPopulationOutputType
> = t.recursion<
  MeasureReportGroupStratifierStratumPopulation,
  MeasureReportGroupStratifierStratumPopulationOutputType
>("MeasureReportGroupStratifierStratumPopulation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
        code: CodeableConcept,
        /** Size of the population */
        count: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** For subject-list reports, the subject results in this population */
        subjectResults: Reference
      })
    ],
    "MeasureReportGroupStratifierStratumPopulation"
  )
);

/**
 * Stratifier component values
 */
export interface MeasureReportGroupStratifierStratumComponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What stratifier component of the group */
  code: CodeableConcept;
  /** The stratum component value, e.g. male */
  value: CodeableConcept;
}

export interface MeasureReportGroupStratifierStratumComponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What stratifier component of the group */
  code: CodeableConceptOutputType;
  /** The stratum component value, e.g. male */
  value: CodeableConceptOutputType;
}

export const MeasureReportGroupStratifierStratumComponent: t.RecursiveType<
  t.Type<
    MeasureReportGroupStratifierStratumComponent,
    MeasureReportGroupStratifierStratumComponentOutputType
  >,
  MeasureReportGroupStratifierStratumComponent,
  MeasureReportGroupStratifierStratumComponentOutputType
> = t.recursion<
  MeasureReportGroupStratifierStratumComponent,
  MeasureReportGroupStratifierStratumComponentOutputType
>("MeasureReportGroupStratifierStratumComponent", () =>
  t.intersection(
    [
      t.type({
        /** What stratifier component of the group */
        code: CodeableConcept,
        /** The stratum component value, e.g. male */
        value: CodeableConcept
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
    "MeasureReportGroupStratifierStratumComponent"
  )
);

/**
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 */
export interface MeasureReportGroupStratifierStratum {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The stratum value, e.g. male */
  value?: CodeableConcept;
  /** Stratifier component values */
  component?: MeasureReportGroupStratifierStratumComponent[];
  /** Population results in this stratum */
  population?: MeasureReportGroupStratifierStratumPopulation[];
  /** What score this stratum achieved */
  measureScore?: Quantity;
}

export interface MeasureReportGroupStratifierStratumOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The stratum value, e.g. male */
  value?: CodeableConceptOutputType;
  /** Stratifier component values */
  component?: MeasureReportGroupStratifierStratumComponentOutputType[];
  /** Population results in this stratum */
  population?: MeasureReportGroupStratifierStratumPopulationOutputType[];
  /** What score this stratum achieved */
  measureScore?: QuantityOutputType;
}

export const MeasureReportGroupStratifierStratum: t.RecursiveType<
  t.Type<
    MeasureReportGroupStratifierStratum,
    MeasureReportGroupStratifierStratumOutputType
  >,
  MeasureReportGroupStratifierStratum,
  MeasureReportGroupStratifierStratumOutputType
> = t.recursion<
  MeasureReportGroupStratifierStratum,
  MeasureReportGroupStratifierStratumOutputType
>("MeasureReportGroupStratifierStratum", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Stratifier component values */
        component: t.array(MeasureReportGroupStratifierStratumComponent),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** What score this stratum achieved */
        measureScore: Quantity,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Population results in this stratum */
        population: t.array(MeasureReportGroupStratifierStratumPopulation),
        /** The stratum value, e.g. male */
        value: CodeableConcept
      })
    ],
    "MeasureReportGroupStratifierStratum"
  )
);

/**
 * Stratification results
 */
export interface MeasureReportGroupStratifier {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What stratifier of the group */
  code?: CodeableConcept[];
  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components */
  stratum?: MeasureReportGroupStratifierStratum[];
}

export interface MeasureReportGroupStratifierOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What stratifier of the group */
  code?: CodeableConceptOutputType[];
  /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components */
  stratum?: MeasureReportGroupStratifierStratumOutputType[];
}

export const MeasureReportGroupStratifier: t.RecursiveType<
  t.Type<MeasureReportGroupStratifier, MeasureReportGroupStratifierOutputType>,
  MeasureReportGroupStratifier,
  MeasureReportGroupStratifierOutputType
> = t.recursion<
  MeasureReportGroupStratifier,
  MeasureReportGroupStratifierOutputType
>("MeasureReportGroupStratifier", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** What stratifier of the group */
        code: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components */
        stratum: t.array(MeasureReportGroupStratifierStratum)
      })
    ],
    "MeasureReportGroupStratifier"
  )
);

/**
 * The populations in the group
 */
export interface MeasureReportGroupPopulation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConcept;
  /** Size of the population */
  count?: t.TypeOf<primitives.R4.IntegerType>;
  /** For subject-list reports, the subject results in this population */
  subjectResults?: Reference;
}

export interface MeasureReportGroupPopulationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConceptOutputType;
  /** Size of the population */
  count?: t.OutputOf<primitives.R4.IntegerType>;
  /** For subject-list reports, the subject results in this population */
  subjectResults?: ReferenceOutputType;
}

export const MeasureReportGroupPopulation: t.RecursiveType<
  t.Type<MeasureReportGroupPopulation, MeasureReportGroupPopulationOutputType>,
  MeasureReportGroupPopulation,
  MeasureReportGroupPopulationOutputType
> = t.recursion<
  MeasureReportGroupPopulation,
  MeasureReportGroupPopulationOutputType
>("MeasureReportGroupPopulation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
        code: CodeableConcept,
        /** Size of the population */
        count: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** For subject-list reports, the subject results in this population */
        subjectResults: Reference
      })
    ],
    "MeasureReportGroupPopulation"
  )
);

/**
 * Measure results for each group
 */
export interface MeasureReportGroup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the group */
  code?: CodeableConcept;
  /** The populations in the group */
  population?: MeasureReportGroupPopulation[];
  /** What score this group achieved */
  measureScore?: Quantity;
  /** Stratification results */
  stratifier?: MeasureReportGroupStratifier[];
}

export interface MeasureReportGroupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Meaning of the group */
  code?: CodeableConceptOutputType;
  /** The populations in the group */
  population?: MeasureReportGroupPopulationOutputType[];
  /** What score this group achieved */
  measureScore?: QuantityOutputType;
  /** Stratification results */
  stratifier?: MeasureReportGroupStratifierOutputType[];
}

export const MeasureReportGroup: t.RecursiveType<
  t.Type<MeasureReportGroup, MeasureReportGroupOutputType>,
  MeasureReportGroup,
  MeasureReportGroupOutputType
> = t.recursion<MeasureReportGroup, MeasureReportGroupOutputType>(
  "MeasureReportGroup",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Meaning of the group */
          code: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** What score this group achieved */
          measureScore: Quantity,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The populations in the group */
          population: t.array(MeasureReportGroupPopulation),
          /** Stratification results */
          stratifier: t.array(MeasureReportGroupStratifier)
        })
      ],
      "MeasureReportGroup"
    )
);

/**
 * Results of a measure evaluation
 */
export interface MeasureReport {
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
  /** Additional identifier for the MeasureReport */
  identifier?: Identifier[];
  /** complete | pending | error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** individual | subject-list | summary | data-collection */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** What measure was calculated */
  measure: t.TypeOf<primitives.R4.CanonicalType>;
  /** What individual(s) the report is for */
  subject?: Reference;
  /** When the report was generated */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who is reporting the data */
  reporter?: Reference;
  /** What period the report covers */
  period: Period;
  /** increase | decrease */
  improvementNotation?: CodeableConcept;
  /** Measure results for each group */
  group?: MeasureReportGroup[];
  /** What data was used to calculate the measure score */
  evaluatedResource?: Reference[];
}

export interface MeasureReportOutputType {
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
  /** Additional identifier for the MeasureReport */
  identifier?: IdentifierOutputType[];
  /** complete | pending | error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** individual | subject-list | summary | data-collection */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** What measure was calculated */
  measure: t.OutputOf<primitives.R4.CanonicalType>;
  /** What individual(s) the report is for */
  subject?: ReferenceOutputType;
  /** When the report was generated */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is reporting the data */
  reporter?: ReferenceOutputType;
  /** What period the report covers */
  period: PeriodOutputType;
  /** increase | decrease */
  improvementNotation?: CodeableConceptOutputType;
  /** Measure results for each group */
  group?: MeasureReportGroupOutputType[];
  /** What data was used to calculate the measure score */
  evaluatedResource?: ReferenceOutputType[];
}

export const MeasureReport: t.RecursiveType<
  t.Type<MeasureReport, MeasureReportOutputType>,
  MeasureReport,
  MeasureReportOutputType
> = t.recursion<MeasureReport, MeasureReportOutputType>("MeasureReport", () =>
  t.intersection(
    [
      t.type({
        /** What measure was calculated */
        measure: primitives.R4.canonical,
        /** What period the report covers */
        period: Period,
        /** complete | pending | error */
        status: primitives.R4.code,
        /** individual | subject-list | summary | data-collection */
        type: primitives.R4.code
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** When the report was generated */
        date: primitives.R4.dateTime,
        /** What data was used to calculate the measure score */
        evaluatedResource: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Measure results for each group */
        group: t.array(MeasureReportGroup),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the MeasureReport */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** increase | decrease */
        improvementNotation: CodeableConcept,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Who is reporting the data */
        reporter: Reference,
        /** What individual(s) the report is for */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "MeasureReport"
  )
);
