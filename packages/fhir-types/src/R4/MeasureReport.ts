/**
 * MeasureReport Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
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
 * Results of a measure evaluation
 */
export interface MeasureReport {
  /** The type of resource */
  resourceType?: "MeasureReport";
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
  /** Additional identifier for the MeasureReport */
  identifier?: Identifier[];
  /** complete | pending | error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** individual | subject-list | summary | data-collection */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** What measure was calculated */
  measure: primitives.R4.canonical;
  /** Extension of measure element */
  _measure?: Element;
  /** What individual(s) the report is for */
  subject?: Reference;
  /** When the report was generated */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Who is reporting the data */
  reporter?: Reference;
  /** What period the report covers */
  period: Period;
  /** increase | decrease */
  improvementNotation?: CodeableConcept;
  /** What data was used to calculate the measure score */
  evaluatedResource?: Reference[];
}
/**
 * Results of a measure evaluation
 */
export const MeasureReport: t.Type<MeasureReport> = t.recursion<MeasureReport>(
  "MeasureReport",
  () =>
    t.intersection([
      t.type({
        /** complete | pending | error */
        status: primitives.R4.code,
        /** individual | subject-list | summary | data-collection */
        type: primitives.R4.code,
        /** What measure was calculated */
        measure: primitives.R4.canonical,
        /** What period the report covers */
        period: Period
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("MeasureReport"),
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
        /** Additional identifier for the MeasureReport */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Extension of type element */
        _type: Element,
        /** Extension of measure element */
        _measure: Element,
        /** What individual(s) the report is for */
        subject: Reference,
        /** When the report was generated */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element,
        /** Who is reporting the data */
        reporter: Reference,
        /** increase | decrease */
        improvementNotation: CodeableConcept,
        /** What data was used to calculate the measure score */
        evaluatedResource: t.array(Reference)
      })
    ])
);

/**
 * Measure results for each group
 */
export interface MeasureReportGroup {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Meaning of the group */
  code?: CodeableConcept;
  /** What score this group achieved */
  measureScore?: Quantity;
}
/**
 * Measure results for each group
 */
export const MeasureReportGroup: t.Type<MeasureReportGroup> = t.recursion<
  MeasureReportGroup
>("MeasureReportGroup", () =>
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
      /** Meaning of the group */
      code: CodeableConcept,
      /** What score this group achieved */
      measureScore: Quantity
    })
  ])
);

/**
 * The populations in the group
 */
export interface MeasureReportGroupPopulation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConcept;
  /** Size of the population */
  count?: primitives.R4.integer;
  /** Extension of count element */
  _count?: Element;
  /** For subject-list reports, the subject results in this population */
  subjectResults?: Reference;
}
/**
 * The populations in the group
 */
export const MeasureReportGroupPopulation: t.Type<
  MeasureReportGroupPopulation
> = t.recursion<MeasureReportGroupPopulation>(
  "MeasureReportGroupPopulation",
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
        /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
        code: CodeableConcept,
        /** Size of the population */
        count: primitives.R4.integer,
        /** Extension of count element */
        _count: Element,
        /** For subject-list reports, the subject results in this population */
        subjectResults: Reference
      })
    ])
);

/**
 * Stratification results
 */
export interface MeasureReportGroupStratifier {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What stratifier of the group */
  code?: CodeableConcept[];
}
/**
 * Stratification results
 */
export const MeasureReportGroupStratifier: t.Type<
  MeasureReportGroupStratifier
> = t.recursion<MeasureReportGroupStratifier>(
  "MeasureReportGroupStratifier",
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
        /** What stratifier of the group */
        code: t.array(CodeableConcept)
      })
    ])
);

/**
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 */
export interface MeasureReportGroupStratifierStratum {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The stratum value, e.g. male */
  value?: CodeableConcept;
  /** What score this stratum achieved */
  measureScore?: Quantity;
}
/**
 * Stratum results, one for each unique value, or set of values, in the stratifier, or stratifier components
 */
export const MeasureReportGroupStratifierStratum: t.Type<
  MeasureReportGroupStratifierStratum
> = t.recursion<MeasureReportGroupStratifierStratum>(
  "MeasureReportGroupStratifierStratum",
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
        /** The stratum value, e.g. male */
        value: CodeableConcept,
        /** What score this stratum achieved */
        measureScore: Quantity
      })
    ])
);

/**
 * Stratifier component values
 */
export interface MeasureReportGroupStratifierStratumComponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What stratifier component of the group */
  code: CodeableConcept;
  /** The stratum component value, e.g. male */
  value: CodeableConcept;
}
/**
 * Stratifier component values
 */
export const MeasureReportGroupStratifierStratumComponent: t.Type<
  MeasureReportGroupStratifierStratumComponent
> = t.recursion<MeasureReportGroupStratifierStratumComponent>(
  "MeasureReportGroupStratifierStratumComponent",
  () =>
    t.intersection([
      t.type({
        /** What stratifier component of the group */
        code: CodeableConcept,
        /** The stratum component value, e.g. male */
        value: CodeableConcept
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
 * Population results in this stratum
 */
export interface MeasureReportGroupStratifierStratumPopulation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
  code?: CodeableConcept;
  /** Size of the population */
  count?: primitives.R4.integer;
  /** Extension of count element */
  _count?: Element;
  /** For subject-list reports, the subject results in this population */
  subjectResults?: Reference;
}
/**
 * Population results in this stratum
 */
export const MeasureReportGroupStratifierStratumPopulation: t.Type<
  MeasureReportGroupStratifierStratumPopulation
> = t.recursion<MeasureReportGroupStratifierStratumPopulation>(
  "MeasureReportGroupStratifierStratumPopulation",
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
        /** initial-population | numerator | numerator-exclusion | denominator | denominator-exclusion | denominator-exception | measure-population | measure-population-exclusion | measure-observation */
        code: CodeableConcept,
        /** Size of the population */
        count: primitives.R4.integer,
        /** Extension of count element */
        _count: Element,
        /** For subject-list reports, the subject results in this population */
        subjectResults: Reference
      })
    ])
);
