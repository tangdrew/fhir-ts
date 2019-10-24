/**
 * Expression Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * An expression that can be used to generate a value
 */
export interface Expression {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Natural language description of the condition */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Short name assigned to expression for reuse */
  name?: primitives.R4.id;
  /** Extension of name element */
  _name?: Element;
  /** text/cql | text/fhirpath | application/x-fhir-query | etc. */
  language: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** Expression in specified language */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
  /** Where the expression is found */
  reference?: primitives.R4.uri;
  /** Extension of reference element */
  _reference?: Element;
}
/**
 * An expression that can be used to generate a value
 */
export const Expression: t.Type<Expression> = t.recursion<Expression>(
  "Expression",
  () =>
    t.intersection([
      t.type({
        /** text/cql | text/fhirpath | application/x-fhir-query | etc. */
        language: primitives.R4.code
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Natural language description of the condition */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Short name assigned to expression for reuse */
        name: primitives.R4.id,
        /** Extension of name element */
        _name: Element,
        /** Extension of language element */
        _language: Element,
        /** Expression in specified language */
        expression: primitives.R4.string,
        /** Extension of expression element */
        _expression: Element,
        /** Where the expression is found */
        reference: primitives.R4.uri,
        /** Extension of reference element */
        _reference: Element
      })
    ])
);
