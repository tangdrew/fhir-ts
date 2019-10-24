/**
 * DataRequirement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";
import { Reference } from "./Reference";

/**
 * Describes a required data item
 */
export interface DataRequirement {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** The type of the required data */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** The profile of the required data */
  profile?: primitives.R4.canonical[];
  /** Extension of profile element */
  _profile?: Element[];
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectCodeableConcept?: CodeableConcept;
  /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
  subjectReference?: Reference;
  /** Indicates specific structure elements that are referenced by the knowledge module */
  mustSupport?: string[];
  /** Extension of mustSupport element */
  _mustSupport?: Element[];
  /** What codes are expected */
  codeFilter?: Element[];
  /** What dates/date ranges are expected */
  dateFilter?: Element[];
  /** Number of results */
  limit?: primitives.R4.positiveInt;
  /** Extension of limit element */
  _limit?: Element;
  /** Order of the results */
  sort?: Element[];
}
/**
 * Describes a required data item
 */
export const DataRequirement: t.Type<DataRequirement> = t.recursion<
  DataRequirement
>("DataRequirement", () =>
  t.intersection([
    t.type({
      /** The type of the required data */
      type: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of type element */
      _type: Element,
      /** The profile of the required data */
      profile: t.array(primitives.R4.canonical),
      /** Extension of profile element */
      _profile: t.array(Element),
      /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
      subjectCodeableConcept: CodeableConcept,
      /** E.g. Patient, Practitioner, RelatedPerson, Organization, Location, Device */
      subjectReference: Reference,
      /** Indicates specific structure elements that are referenced by the knowledge module */
      mustSupport: t.array(primitives.R4.string),
      /** Extension of mustSupport element */
      _mustSupport: t.array(Element),
      /** What codes are expected */
      codeFilter: t.array(Element),
      /** What dates/date ranges are expected */
      dateFilter: t.array(Element),
      /** Number of results */
      limit: primitives.R4.positiveInt,
      /** Extension of limit element */
      _limit: Element,
      /** Order of the results */
      sort: t.array(Element)
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface DataRequirementCodeFilter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** A code-valued attribute to filter on */
  path?: string;
  /** Extension of path element */
  _path?: Element;
  /** A coded (token) parameter to search on */
  searchParam?: string;
  /** Extension of searchParam element */
  _searchParam?: Element;
  /** Valueset for the filter */
  valueSet?: primitives.R4.canonical;
  /** Extension of valueSet element */
  _valueSet?: Element;
  /** What code is expected */
  code?: Coding[];
}
/**
 * Unique id for inter-element referencing
 */
export const DataRequirementCodeFilter: t.Type<
  DataRequirementCodeFilter
> = t.recursion<DataRequirementCodeFilter>("DataRequirementCodeFilter", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** A code-valued attribute to filter on */
      path: primitives.R4.string,
      /** Extension of path element */
      _path: Element,
      /** A coded (token) parameter to search on */
      searchParam: primitives.R4.string,
      /** Extension of searchParam element */
      _searchParam: Element,
      /** Valueset for the filter */
      valueSet: primitives.R4.canonical,
      /** Extension of valueSet element */
      _valueSet: Element,
      /** What code is expected */
      code: t.array(Coding)
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface DataRequirementDateFilter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** A date-valued attribute to filter on */
  path?: string;
  /** Extension of path element */
  _path?: Element;
  /** A date valued parameter to search on */
  searchParam?: string;
  /** Extension of searchParam element */
  _searchParam?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value */
  valueDateTime?: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** The value of the filter, as a Period, DateTime, or Duration value */
  valuePeriod?: Period;
  /** The value of the filter, as a Period, DateTime, or Duration value */
  valueDuration?: Duration;
}
/**
 * Unique id for inter-element referencing
 */
export const DataRequirementDateFilter: t.Type<
  DataRequirementDateFilter
> = t.recursion<DataRequirementDateFilter>("DataRequirementDateFilter", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** A date-valued attribute to filter on */
      path: primitives.R4.string,
      /** Extension of path element */
      _path: Element,
      /** A date valued parameter to search on */
      searchParam: primitives.R4.string,
      /** Extension of searchParam element */
      _searchParam: Element,
      /** The value of the filter, as a Period, DateTime, or Duration value */
      valueDateTime: primitives.R4.dateTime,
      /** Extension of valueDateTime element */
      _valueDateTime: Element,
      /** The value of the filter, as a Period, DateTime, or Duration value */
      valuePeriod: Period,
      /** The value of the filter, as a Period, DateTime, or Duration value */
      valueDuration: Duration
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface DataRequirementSort {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** The name of the attribute to perform the sort */
  path: string;
  /** Extension of path element */
  _path?: Element;
  /** ascending | descending */
  direction: primitives.R4.code;
  /** Extension of direction element */
  _direction?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const DataRequirementSort: t.Type<DataRequirementSort> = t.recursion<
  DataRequirementSort
>("DataRequirementSort", () =>
  t.intersection([
    t.type({
      /** The name of the attribute to perform the sort */
      path: primitives.R4.string,
      /** ascending | descending */
      direction: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of path element */
      _path: Element,
      /** Extension of direction element */
      _direction: Element
    })
  ])
);
