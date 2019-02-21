/**
 * ImmunizationEvaluation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Immunization evaluation information
 */
export interface ImmunizationEvaluation {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** completed | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Who this evaluation is for */
  patient: Reference;
  /** Date evaluation was performed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who is responsible for publishing the recommendations */
  authority?: Reference;
  /** Evaluation target disease */
  targetDisease: CodeableConcept;
  /** Immunization being evaluated */
  immunizationEvent: Reference;
  /** Status of the dose relative to published recommendations */
  doseStatus: CodeableConcept;
  /** Reason for the dose status */
  doseStatusReason?: CodeableConcept[];
  /** Evaluation notes */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Name of vaccine series */
  series?: t.TypeOf<primitives.R4.StringType>;
  /** Dose number within series */
  dosenumber?:
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>;
  /** Recommended number of doses for immunity */
  seriesdoses?:
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>;
}

export interface ImmunizationEvaluationOutputType {
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
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** completed | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Who this evaluation is for */
  patient: ReferenceOutputType;
  /** Date evaluation was performed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is responsible for publishing the recommendations */
  authority?: ReferenceOutputType;
  /** Evaluation target disease */
  targetDisease: CodeableConceptOutputType;
  /** Immunization being evaluated */
  immunizationEvent: ReferenceOutputType;
  /** Status of the dose relative to published recommendations */
  doseStatus: CodeableConceptOutputType;
  /** Reason for the dose status */
  doseStatusReason?: CodeableConceptOutputType[];
  /** Evaluation notes */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Name of vaccine series */
  series?: t.OutputOf<primitives.R4.StringType>;
  /** Dose number within series */
  dosenumber?:
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>;
  /** Recommended number of doses for immunity */
  seriesdoses?:
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>;
}

export const ImmunizationEvaluation: t.RecursiveType<
  t.Type<ImmunizationEvaluation, ImmunizationEvaluationOutputType>,
  ImmunizationEvaluation,
  ImmunizationEvaluationOutputType
> = t.recursion<ImmunizationEvaluation, ImmunizationEvaluationOutputType>(
  "ImmunizationEvaluation",
  () =>
    t.intersection(
      [
        t.type({
          /** Status of the dose relative to published recommendations */
          doseStatus: CodeableConcept,
          /** Immunization being evaluated */
          immunizationEvent: Reference,
          /** Who this evaluation is for */
          patient: Reference,
          /** completed | entered-in-error */
          status: primitives.R4.code,
          /** Evaluation target disease */
          targetDisease: CodeableConcept
        }),
        t.partial({
          /** Who is responsible for publishing the recommendations */
          authority: Reference,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Date evaluation was performed */
          date: primitives.R4.dateTime,
          /** Evaluation notes */
          description: primitives.R4.string,
          /** Reason for the dose status */
          doseStatusReason: t.array(CodeableConcept),
          /** Dose number within series */
          dosenumber: t.union([
            primitives.R4.positiveInt,
            primitives.R4.string
          ]),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name of vaccine series */
          series: primitives.R4.string,
          /** Recommended number of doses for immunity */
          seriesdoses: t.union([
            primitives.R4.positiveInt,
            primitives.R4.string
          ]),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "ImmunizationEvaluation"
    )
);
