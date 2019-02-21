/**
 * OperationOutcome Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A single issue associated with the action
 */
export interface OperationOutcomeIssue {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** fatal | error | warning | information */
  severity: t.TypeOf<primitives.R4.CodeType>;
  /** Error or warning code */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Additional details about the error */
  details?: CodeableConcept;
  /** Additional diagnostic information about the issue */
  diagnostics?: t.TypeOf<primitives.R4.StringType>;
  /** Deprecated: Path of element(s) related to issue */
  location?: t.TypeOf<primitives.R4.StringType>[];
  /** FHIRPath of element(s) related to issue */
  expression?: t.TypeOf<primitives.R4.StringType>[];
}

export interface OperationOutcomeIssueOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** fatal | error | warning | information */
  severity: t.OutputOf<primitives.R4.CodeType>;
  /** Error or warning code */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Additional details about the error */
  details?: CodeableConceptOutputType;
  /** Additional diagnostic information about the issue */
  diagnostics?: t.OutputOf<primitives.R4.StringType>;
  /** Deprecated: Path of element(s) related to issue */
  location?: t.OutputOf<primitives.R4.StringType>[];
  /** FHIRPath of element(s) related to issue */
  expression?: t.OutputOf<primitives.R4.StringType>[];
}

export const OperationOutcomeIssue: t.RecursiveType<
  t.Type<OperationOutcomeIssue, OperationOutcomeIssueOutputType>,
  OperationOutcomeIssue,
  OperationOutcomeIssueOutputType
> = t.recursion<OperationOutcomeIssue, OperationOutcomeIssueOutputType>(
  "OperationOutcomeIssue",
  () =>
    t.intersection(
      [
        t.type({
          /** Error or warning code */
          code: primitives.R4.code,
          /** fatal | error | warning | information */
          severity: primitives.R4.code
        }),
        t.partial({
          /** Additional details about the error */
          details: CodeableConcept,
          /** Additional diagnostic information about the issue */
          diagnostics: primitives.R4.string,
          /** FHIRPath of element(s) related to issue */
          expression: t.array(primitives.R4.string),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Deprecated: Path of element(s) related to issue */
          location: t.array(primitives.R4.string),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "OperationOutcomeIssue"
    )
);

/**
 * Information about the success/failure of an action
 */
export interface OperationOutcome {
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
  /** A single issue associated with the action */
  issue: OperationOutcomeIssue[];
}

export interface OperationOutcomeOutputType {
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
  /** A single issue associated with the action */
  issue: OperationOutcomeIssueOutputType[];
}

export const OperationOutcome: t.RecursiveType<
  t.Type<OperationOutcome, OperationOutcomeOutputType>,
  OperationOutcome,
  OperationOutcomeOutputType
> = t.recursion<OperationOutcome, OperationOutcomeOutputType>(
  "OperationOutcome",
  () =>
    t.intersection(
      [
        t.type({
          /** A single issue associated with the action */
          issue: t.array(OperationOutcomeIssue)
        }),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "OperationOutcome"
    )
);
