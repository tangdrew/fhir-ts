/**
 * ParameterDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * Definition of a parameter to a module
 */
export interface ParameterDefinition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Name used to access the parameter value */
  name?: primitives.R4.code;
  /** Extension of name element */
  _name?: Element;
  /** in | out */
  use: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** Minimum cardinality */
  min?: primitives.R4.integer;
  /** Extension of min element */
  _min?: Element;
  /** Maximum cardinality (a number of *) */
  max?: string;
  /** Extension of max element */
  _max?: Element;
  /** A brief description of the parameter */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
  /** What type of value */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** What profile the value is expected to be */
  profile?: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
}
/**
 * Definition of a parameter to a module
 */
export const ParameterDefinition: t.Type<ParameterDefinition> = t.recursion<
  ParameterDefinition
>("ParameterDefinition", () =>
  t.intersection([
    t.type({
      /** in | out */
      use: primitives.R4.code,
      /** What type of value */
      type: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Name used to access the parameter value */
      name: primitives.R4.code,
      /** Extension of name element */
      _name: Element,
      /** Extension of use element */
      _use: Element,
      /** Minimum cardinality */
      min: primitives.R4.integer,
      /** Extension of min element */
      _min: Element,
      /** Maximum cardinality (a number of *) */
      max: primitives.R4.string,
      /** Extension of max element */
      _max: Element,
      /** A brief description of the parameter */
      documentation: primitives.R4.string,
      /** Extension of documentation element */
      _documentation: Element,
      /** Extension of type element */
      _type: Element,
      /** What profile the value is expected to be */
      profile: primitives.R4.canonical,
      /** Extension of profile element */
      _profile: Element
    })
  ])
);
