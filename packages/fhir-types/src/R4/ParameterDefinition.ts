/**
 * ParameterDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * Definition of a parameter to a module
 */
export interface ParameterDefinition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Name used to access the parameter value */
  name?: t.TypeOf<primitives.R4.CodeType>;
  /** in | out */
  use: t.TypeOf<primitives.R4.CodeType>;
  /** Minimum cardinality */
  min?: t.TypeOf<primitives.R4.IntegerType>;
  /** Maximum cardinality (a number of *) */
  max?: t.TypeOf<primitives.R4.StringType>;
  /** A brief description of the parameter */
  documentation?: t.TypeOf<primitives.R4.StringType>;
  /** What type of value */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** What profile the value is expected to be */
  profile?: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface ParameterDefinitionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Name used to access the parameter value */
  name?: t.OutputOf<primitives.R4.CodeType>;
  /** in | out */
  use: t.OutputOf<primitives.R4.CodeType>;
  /** Minimum cardinality */
  min?: t.OutputOf<primitives.R4.IntegerType>;
  /** Maximum cardinality (a number of *) */
  max?: t.OutputOf<primitives.R4.StringType>;
  /** A brief description of the parameter */
  documentation?: t.OutputOf<primitives.R4.StringType>;
  /** What type of value */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** What profile the value is expected to be */
  profile?: t.OutputOf<primitives.R4.CanonicalType>;
}

export const ParameterDefinition: t.RecursiveType<
  t.Type<ParameterDefinition, ParameterDefinitionOutputType>,
  ParameterDefinition,
  ParameterDefinitionOutputType
> = t.recursion<ParameterDefinition, ParameterDefinitionOutputType>(
  "ParameterDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** What type of value */
          type: primitives.R4.code,
          /** in | out */
          use: primitives.R4.code
        }),
        t.partial({
          /** A brief description of the parameter */
          documentation: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Maximum cardinality (a number of *) */
          max: primitives.R4.string,
          /** Minimum cardinality */
          min: primitives.R4.integer,
          /** Name used to access the parameter value */
          name: primitives.R4.code,
          /** What profile the value is expected to be */
          profile: primitives.R4.canonical
        })
      ],
      "ParameterDefinition"
    )
);
