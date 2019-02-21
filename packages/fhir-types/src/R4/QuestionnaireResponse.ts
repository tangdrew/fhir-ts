/**
 * QuestionnaireResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The response(s) to the question
 */
export interface QuestionnaireResponseItemAnswer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Single-valued answer to the question */
  value?:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.URIType>
    | Attachment
    | Coding
    | Quantity
    | Reference;
  /** Nested groups and questions */
  item?: QuestionnaireResponseItem[];
}

export interface QuestionnaireResponseItemAnswerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Single-valued answer to the question */
  value?:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.URIType>
    | AttachmentOutputType
    | CodingOutputType
    | QuantityOutputType
    | ReferenceOutputType;
  /** Nested groups and questions */
  item?: QuestionnaireResponseItemOutputType[];
}

export const QuestionnaireResponseItemAnswer: t.RecursiveType<
  t.Type<
    QuestionnaireResponseItemAnswer,
    QuestionnaireResponseItemAnswerOutputType
  >,
  QuestionnaireResponseItemAnswer,
  QuestionnaireResponseItemAnswerOutputType
> = t.recursion<
  QuestionnaireResponseItemAnswer,
  QuestionnaireResponseItemAnswerOutputType
>("QuestionnaireResponseItemAnswer", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Nested groups and questions */
        item: t.array(QuestionnaireResponseItem),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Single-valued answer to the question */
        value: t.union([
          primitives.R4.boolean,
          primitives.R4.decimal,
          primitives.R4.integer,
          primitives.R4.date,
          primitives.R4.dateTime,
          primitives.R4.time,
          primitives.R4.string,
          primitives.R4.uri,
          Attachment,
          Coding,
          Quantity,
          Reference
        ])
      })
    ],
    "QuestionnaireResponseItemAnswer"
  )
);

/**
 * Groups and questions
 */
export interface QuestionnaireResponseItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Pointer to specific item from Questionnaire */
  linkId: t.TypeOf<primitives.R4.StringType>;
  /** ElementDefinition - details for the item */
  definition?: t.TypeOf<primitives.R4.URIType>;
  /** Name for group or question text */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** The response(s) to the question */
  answer?: QuestionnaireResponseItemAnswer[];
  /** Nested questionnaire response items */
  item?: QuestionnaireResponseItem[];
}

export interface QuestionnaireResponseItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Pointer to specific item from Questionnaire */
  linkId: t.OutputOf<primitives.R4.StringType>;
  /** ElementDefinition - details for the item */
  definition?: t.OutputOf<primitives.R4.URIType>;
  /** Name for group or question text */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** The response(s) to the question */
  answer?: QuestionnaireResponseItemAnswerOutputType[];
  /** Nested questionnaire response items */
  item?: QuestionnaireResponseItemOutputType[];
}

export const QuestionnaireResponseItem: t.RecursiveType<
  t.Type<QuestionnaireResponseItem, QuestionnaireResponseItemOutputType>,
  QuestionnaireResponseItem,
  QuestionnaireResponseItemOutputType
> = t.recursion<QuestionnaireResponseItem, QuestionnaireResponseItemOutputType>(
  "QuestionnaireResponseItem",
  () =>
    t.intersection(
      [
        t.type({
          /** Pointer to specific item from Questionnaire */
          linkId: primitives.R4.string
        }),
        t.partial({
          /** The response(s) to the question */
          answer: t.array(QuestionnaireResponseItemAnswer),
          /** ElementDefinition - details for the item */
          definition: primitives.R4.uri,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Nested questionnaire response items */
          item: t.array(QuestionnaireResponseItem),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Name for group or question text */
          text: primitives.R4.string
        })
      ],
      "QuestionnaireResponseItem"
    )
);

/**
 * A structured set of questions and their answers
 */
export interface QuestionnaireResponse {
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
  /** Unique id for this set of answers */
  identifier?: Identifier;
  /** Request fulfilled by this QuestionnaireResponse */
  basedOn?: Reference[];
  /** Part of this action */
  partOf?: Reference[];
  /** Form being answered */
  questionnaire?: t.TypeOf<primitives.R4.CanonicalType>;
  /** in-progress | completed | amended | entered-in-error | stopped */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** The subject of the questions */
  subject?: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Date the answers were gathered */
  authored?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Person who received and recorded the answers */
  author?: Reference;
  /** The person who answered the questions */
  source?: Reference;
  /** Groups and questions */
  item?: QuestionnaireResponseItem[];
}

export interface QuestionnaireResponseOutputType {
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
  /** Unique id for this set of answers */
  identifier?: IdentifierOutputType;
  /** Request fulfilled by this QuestionnaireResponse */
  basedOn?: ReferenceOutputType[];
  /** Part of this action */
  partOf?: ReferenceOutputType[];
  /** Form being answered */
  questionnaire?: t.OutputOf<primitives.R4.CanonicalType>;
  /** in-progress | completed | amended | entered-in-error | stopped */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** The subject of the questions */
  subject?: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** Date the answers were gathered */
  authored?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Person who received and recorded the answers */
  author?: ReferenceOutputType;
  /** The person who answered the questions */
  source?: ReferenceOutputType;
  /** Groups and questions */
  item?: QuestionnaireResponseItemOutputType[];
}

export const QuestionnaireResponse: t.RecursiveType<
  t.Type<QuestionnaireResponse, QuestionnaireResponseOutputType>,
  QuestionnaireResponse,
  QuestionnaireResponseOutputType
> = t.recursion<QuestionnaireResponse, QuestionnaireResponseOutputType>(
  "QuestionnaireResponse",
  () =>
    t.intersection(
      [
        t.type({
          /** in-progress | completed | amended | entered-in-error | stopped */
          status: primitives.R4.code
        }),
        t.partial({
          /** Person who received and recorded the answers */
          author: Reference,
          /** Date the answers were gathered */
          authored: primitives.R4.dateTime,
          /** Request fulfilled by this QuestionnaireResponse */
          basedOn: t.array(Reference),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Encounter created as part of */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Unique id for this set of answers */
          identifier: Identifier,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Groups and questions */
          item: t.array(QuestionnaireResponseItem),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Part of this action */
          partOf: t.array(Reference),
          /** Form being answered */
          questionnaire: primitives.R4.canonical,
          /** The person who answered the questions */
          source: Reference,
          /** The subject of the questions */
          subject: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "QuestionnaireResponse"
    )
);
