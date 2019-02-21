/**
 * GuidanceResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The formal response to a guidance request
 */
export interface GuidanceResponse {
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
  /** The identifier of the request associated with this response, if any */
  requestIdentifier?: Identifier;
  /** Business identifier */
  identifier?: Identifier[];
  /** What guidance was requested */
  module:
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.CanonicalType>
    | CodeableConcept;
  /** success | data-requested | data-required | in-progress | failure | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Patient the request was performed for */
  subject?: Reference;
  /** Encounter during which the response was returned */
  encounter?: Reference;
  /** When the guidance response was processed */
  occurrenceDateTime?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Device returning the guidance */
  performer?: Reference;
  /** Why guidance is needed */
  reasonCode?: CodeableConcept[];
  /** Why guidance is needed */
  reasonReference?: Reference[];
  /** Additional notes about the response */
  note?: Annotation[];
  /** Messages resulting from the evaluation of the artifact or artifacts */
  evaluationMessage?: Reference[];
  /** The output parameters of the evaluation, if any */
  outputParameters?: Reference;
  /** Proposed actions, if any */
  result?: Reference;
  /** Additional required data */
  dataRequirement?: DataRequirement[];
}

export interface GuidanceResponseOutputType {
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
  /** The identifier of the request associated with this response, if any */
  requestIdentifier?: IdentifierOutputType;
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** What guidance was requested */
  module:
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.CanonicalType>
    | CodeableConceptOutputType;
  /** success | data-requested | data-required | in-progress | failure | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Patient the request was performed for */
  subject?: ReferenceOutputType;
  /** Encounter during which the response was returned */
  encounter?: ReferenceOutputType;
  /** When the guidance response was processed */
  occurrenceDateTime?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Device returning the guidance */
  performer?: ReferenceOutputType;
  /** Why guidance is needed */
  reasonCode?: CodeableConceptOutputType[];
  /** Why guidance is needed */
  reasonReference?: ReferenceOutputType[];
  /** Additional notes about the response */
  note?: AnnotationOutputType[];
  /** Messages resulting from the evaluation of the artifact or artifacts */
  evaluationMessage?: ReferenceOutputType[];
  /** The output parameters of the evaluation, if any */
  outputParameters?: ReferenceOutputType;
  /** Proposed actions, if any */
  result?: ReferenceOutputType;
  /** Additional required data */
  dataRequirement?: DataRequirementOutputType[];
}

export const GuidanceResponse: t.RecursiveType<
  t.Type<GuidanceResponse, GuidanceResponseOutputType>,
  GuidanceResponse,
  GuidanceResponseOutputType
> = t.recursion<GuidanceResponse, GuidanceResponseOutputType>(
  "GuidanceResponse",
  () =>
    t.intersection(
      [
        t.type({
          /** What guidance was requested */
          module: t.union([
            primitives.R4.uri,
            primitives.R4.canonical,
            CodeableConcept
          ]),
          /** success | data-requested | data-required | in-progress | failure | entered-in-error */
          status: primitives.R4.code
        }),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Additional required data */
          dataRequirement: t.array(DataRequirement),
          /** Encounter during which the response was returned */
          encounter: Reference,
          /** Messages resulting from the evaluation of the artifact or artifacts */
          evaluationMessage: t.array(Reference),
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
          /** Additional notes about the response */
          note: t.array(Annotation),
          /** When the guidance response was processed */
          occurrenceDateTime: primitives.R4.dateTime,
          /** The output parameters of the evaluation, if any */
          outputParameters: Reference,
          /** Device returning the guidance */
          performer: Reference,
          /** Why guidance is needed */
          reasonCode: t.array(CodeableConcept),
          /** Why guidance is needed */
          reasonReference: t.array(Reference),
          /** The identifier of the request associated with this response, if any */
          requestIdentifier: Identifier,
          /** Proposed actions, if any */
          result: Reference,
          /** Patient the request was performed for */
          subject: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "GuidanceResponse"
    )
);
