/**
 * DataRequirement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";

/**
 * Order of the results
 */
export interface DataRequirementSort {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** The name of the attribute to perform the sort */
  path: t.TypeOf<primitives.R4.StringType>;
  /** ascending | descending */
  direction: t.TypeOf<primitives.R4.CodeType>;
}

export interface DataRequirementSortOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** The name of the attribute to perform the sort */
  path: t.OutputOf<primitives.R4.StringType>;
  /** ascending | descending */
  direction: t.OutputOf<primitives.R4.CodeType>;
}

export const DataRequirementSort: t.RecursiveType<
  t.Type<DataRequirementSort, DataRequirementSortOutputType>,
  DataRequirementSort,
  DataRequirementSortOutputType
> = t.recursion<DataRequirementSort, DataRequirementSortOutputType>(
  "DataRequirementSort",
  () =>
    t.intersection(
      [
        t.type({
          /** ascending | descending */
          direction: primitives.R4.code,
          /** The name of the attribute to perform the sort */
          path: primitives.R4.string
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string
        })
      ],
      "DataRequirementSort"
    )
);

/**
 * What dates/date ranges are expected
 */
export interface DataRequirementDateFilter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** A date-valued attribute to filter on */
  path?: t.TypeOf<primitives.R4.StringType>;
  /** A date valued parameter to search on */
  searchParam?: t.TypeOf<primitives.R4.StringType>;
  /** The value of the filter, as a Period, DateTime, or Duration value */
  value?: t.TypeOf<primitives.R4.DateTimeType> | Period | Duration;
}

export interface DataRequirementDateFilterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** A date-valued attribute to filter on */
  path?: t.OutputOf<primitives.R4.StringType>;
  /** A date valued parameter to search on */
  searchParam?: t.OutputOf<primitives.R4.StringType>;
  /** The value of the filter, as a Period, DateTime, or Duration value */
  value?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | DurationOutputType;
}

export const DataRequirementDateFilter: t.RecursiveType<
  t.Type<DataRequirementDateFilter, DataRequirementDateFilterOutputType>,
  DataRequirementDateFilter,
  DataRequirementDateFilterOutputType
> = t.recursion<DataRequirementDateFilter, DataRequirementDateFilterOutputType>(
  "DataRequirementDateFilter",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** A date-valued attribute to filter on */
          path: primitives.R4.string,
          /** A date valued parameter to search on */
          searchParam: primitives.R4.string,
          /** The value of the filter, as a Period, DateTime, or Duration value */
          value: t.union([primitives.R4.dateTime, Period, Duration])
        })
      ],
      "DataRequirementDateFilter"
    )
);

/**
 * What codes are expected
 */
export interface DataRequirementCodeFilter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** A code-valued attribute to filter on */
  path?: t.TypeOf<primitives.R4.StringType>;
  /** A coded (token) parameter to search on */
  searchParam?: t.TypeOf<primitives.R4.StringType>;
  /** Valueset for the filter */
  valueSet?: t.TypeOf<primitives.R4.CanonicalType>;
  /** What code is expected */
  code?: Coding[];
}

export interface DataRequirementCodeFilterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** A code-valued attribute to filter on */
  path?: t.OutputOf<primitives.R4.StringType>;
  /** A coded (token) parameter to search on */
  searchParam?: t.OutputOf<primitives.R4.StringType>;
  /** Valueset for the filter */
  valueSet?: t.OutputOf<primitives.R4.CanonicalType>;
  /** What code is expected */
  code?: CodingOutputType[];
}

export const DataRequirementCodeFilter: t.RecursiveType<
  t.Type<DataRequirementCodeFilter, DataRequirementCodeFilterOutputType>,
  DataRequirementCodeFilter,
  DataRequirementCodeFilterOutputType
> = t.recursion<DataRequirementCodeFilter, DataRequirementCodeFilterOutputType>(
  "DataRequirementCodeFilter",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** What code is expected */
          code: t.array(Coding),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** A code-valued attribute to filter on */
          path: primitives.R4.string,
          /** A coded (token) parameter to search on */
          searchParam: primitives.R4.string,
          /** Valueset for the filter */
          valueSet: primitives.R4.canonical
        })
      ],
      "DataRequirementCodeFilter"
    )
);

/**
 * Describes a required data item
 */
export interface DataRequirement {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** The type of the required data */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** The profile of the required data */
  profile?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subject?: CodeableConcept | Reference;
  /** Indicates specific structure elements that are referenced by the knowledge module */
  mustSupport?: t.TypeOf<primitives.R4.StringType>[];
  /** What codes are expected */
  codeFilter?: DataRequirementCodeFilter[];
  /** What dates/date ranges are expected */
  dateFilter?: DataRequirementDateFilter[];
  /** Number of results */
  limit?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Order of the results */
  sort?: DataRequirementSort[];
}

export interface DataRequirementOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** The type of the required data */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** The profile of the required data */
  profile?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subject?: CodeableConceptOutputType | ReferenceOutputType;
  /** Indicates specific structure elements that are referenced by the knowledge module */
  mustSupport?: t.OutputOf<primitives.R4.StringType>[];
  /** What codes are expected */
  codeFilter?: DataRequirementCodeFilterOutputType[];
  /** What dates/date ranges are expected */
  dateFilter?: DataRequirementDateFilterOutputType[];
  /** Number of results */
  limit?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Order of the results */
  sort?: DataRequirementSortOutputType[];
}

export const DataRequirement: t.RecursiveType<
  t.Type<DataRequirement, DataRequirementOutputType>,
  DataRequirement,
  DataRequirementOutputType
> = t.recursion<DataRequirement, DataRequirementOutputType>(
  "DataRequirement",
  () =>
    t.intersection(
      [
        t.type({
          /** The type of the required data */
          type: primitives.R4.code
        }),
        t.partial({
          /** What codes are expected */
          codeFilter: t.array(DataRequirementCodeFilter),
          /** What dates/date ranges are expected */
          dateFilter: t.array(DataRequirementDateFilter),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Number of results */
          limit: primitives.R4.positiveInt,
          /** Indicates specific structure elements that are referenced by the knowledge module */
          mustSupport: t.array(primitives.R4.string),
          /** The profile of the required data */
          profile: t.array(primitives.R4.canonical),
          /** Order of the results */
          sort: t.array(DataRequirementSort),
          /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
          subject: t.union([CodeableConcept, Reference])
        })
      ],
      "DataRequirement"
    )
);
