/**
 * OperationOutcome Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";

/**
 * Information about the success/failure of an action
 */
export interface OperationOutcome {
  /** The type of resource */
  resourceType?: "OperationOutcome";
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
}
/**
 * Information about the success/failure of an action
 */
export const OperationOutcome: t.Type<OperationOutcome> = t.recursion<
  OperationOutcome
>("OperationOutcome", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("OperationOutcome"),
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
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * A single issue associated with the action
 */
export interface OperationOutcomeIssue {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** fatal | error | warning | information */
  severity: primitives.R4.code;
  /** Extension of severity element */
  _severity?: Element;
  /** Error or warning code */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Additional details about the error */
  details?: CodeableConcept;
  /** Additional diagnostic information about the issue */
  diagnostics?: string;
  /** Extension of diagnostics element */
  _diagnostics?: Element;
  /** Deprecated: Path of element(s) related to issue */
  location?: string[];
  /** Extension of location element */
  _location?: Element[];
  /** FHIRPath of element(s) related to issue */
  expression?: string[];
  /** Extension of expression element */
  _expression?: Element[];
}
/**
 * A single issue associated with the action
 */
export const OperationOutcomeIssue: t.Type<OperationOutcomeIssue> = t.recursion<
  OperationOutcomeIssue
>("OperationOutcomeIssue", () =>
  t.intersection([
    t.type({
      /** fatal | error | warning | information */
      severity: primitives.R4.code,
      /** Error or warning code */
      code: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Extension of severity element */
      _severity: Element,
      /** Extension of code element */
      _code: Element,
      /** Additional details about the error */
      details: CodeableConcept,
      /** Additional diagnostic information about the issue */
      diagnostics: primitives.R4.string,
      /** Extension of diagnostics element */
      _diagnostics: Element,
      /** Deprecated: Path of element(s) related to issue */
      location: t.array(primitives.R4.string),
      /** Extension of location element */
      _location: t.array(Element),
      /** FHIRPath of element(s) related to issue */
      expression: t.array(primitives.R4.string),
      /** Extension of expression element */
      _expression: t.array(Element)
    })
  ])
);
