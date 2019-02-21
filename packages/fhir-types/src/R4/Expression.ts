/**
 * Expression Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";

/**
 * An expression that can be used to generate a value
 */
export interface Expression {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Natural language description of the condition */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Short name assigned to expression for reuse */
  name?: t.TypeOf<primitives.R4.IDType>;
  /** text/cql | text/fhirpath | application/x-fhir-query | etc. */
  language: t.TypeOf<primitives.R4.CodeType>;
  /** Expression in specified language */
  expression?: t.TypeOf<primitives.R4.StringType>;
  /** Where the expression is found */
  reference?: t.TypeOf<primitives.R4.URIType>;
}

export interface ExpressionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Natural language description of the condition */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Short name assigned to expression for reuse */
  name?: t.OutputOf<primitives.R4.IDType>;
  /** text/cql | text/fhirpath | application/x-fhir-query | etc. */
  language: t.OutputOf<primitives.R4.CodeType>;
  /** Expression in specified language */
  expression?: t.OutputOf<primitives.R4.StringType>;
  /** Where the expression is found */
  reference?: t.OutputOf<primitives.R4.URIType>;
}

export const Expression: t.RecursiveType<
  t.Type<Expression, ExpressionOutputType>,
  Expression,
  ExpressionOutputType
> = t.recursion<Expression, ExpressionOutputType>("Expression", () =>
  t.intersection(
    [
      t.type({
        /** text/cql | text/fhirpath | application/x-fhir-query | etc. */
        language: primitives.R4.code
      }),
      t.partial({
        /** Natural language description of the condition */
        description: primitives.R4.string,
        /** Expression in specified language */
        expression: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Short name assigned to expression for reuse */
        name: primitives.R4.id,
        /** Where the expression is found */
        reference: primitives.R4.uri
      })
    ],
    "Expression"
  )
);
