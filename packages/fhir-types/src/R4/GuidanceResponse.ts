/**
 * GuidanceResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { DataRequirement } from "./DataRequirement";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * The formal response to a guidance request
 */
export interface GuidanceResponse {
  /** The type of resource */
  resourceType?: "GuidanceResponse";
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
  /** The identifier of the request associated with this response, if any */
  requestIdentifier?: Identifier;
  /** Business identifier */
  identifier?: Identifier[];
  /** What guidance was requested */
  moduleUri: primitives.R4.uri;
  /** Extension of moduleUri element */
  _moduleUri?: Element;
  /** What guidance was requested */
  moduleCanonical: primitives.R4.canonical;
  /** Extension of moduleCanonical element */
  _moduleCanonical?: Element;
  /** What guidance was requested */
  moduleCodeableConcept: CodeableConcept;
  /** success | data-requested | data-required | in-progress | failure | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Patient the request was performed for */
  subject?: Reference;
  /** Encounter during which the response was returned */
  encounter?: Reference;
  /** When the guidance response was processed */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
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
/**
 * The formal response to a guidance request
 */
export const GuidanceResponse: t.Type<GuidanceResponse> = t.recursion<
  GuidanceResponse
>("GuidanceResponse", () =>
  t.intersection([
    t.type({
      /** What guidance was requested */
      moduleUri: primitives.R4.uri,
      /** What guidance was requested */
      moduleCanonical: primitives.R4.canonical,
      /** What guidance was requested */
      moduleCodeableConcept: CodeableConcept,
      /** success | data-requested | data-required | in-progress | failure | entered-in-error */
      status: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("GuidanceResponse"),
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
      modifierExtension: t.array(Extension),
      /** The identifier of the request associated with this response, if any */
      requestIdentifier: Identifier,
      /** Business identifier */
      identifier: t.array(Identifier),
      /** Extension of moduleUri element */
      _moduleUri: Element,
      /** Extension of moduleCanonical element */
      _moduleCanonical: Element,
      /** Extension of status element */
      _status: Element,
      /** Patient the request was performed for */
      subject: Reference,
      /** Encounter during which the response was returned */
      encounter: Reference,
      /** When the guidance response was processed */
      occurrenceDateTime: primitives.R4.dateTime,
      /** Extension of occurrenceDateTime element */
      _occurrenceDateTime: Element,
      /** Device returning the guidance */
      performer: Reference,
      /** Why guidance is needed */
      reasonCode: t.array(CodeableConcept),
      /** Why guidance is needed */
      reasonReference: t.array(Reference),
      /** Additional notes about the response */
      note: t.array(Annotation),
      /** Messages resulting from the evaluation of the artifact or artifacts */
      evaluationMessage: t.array(Reference),
      /** The output parameters of the evaluation, if any */
      outputParameters: Reference,
      /** Proposed actions, if any */
      result: Reference,
      /** Additional required data */
      dataRequirement: t.array(DataRequirement)
    })
  ])
);
