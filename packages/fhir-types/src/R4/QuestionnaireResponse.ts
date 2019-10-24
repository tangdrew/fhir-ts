/**
 * QuestionnaireResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A structured set of questions and their answers
 */
export interface QuestionnaireResponse {
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
  /** Unique id for this set of answers */
  identifier?: Identifier;
  /** Request fulfilled by this QuestionnaireResponse */
  basedOn?: Reference[];
  /** Part of this action */
  partOf?: Reference[];
  /** Form being answered */
  questionnaire?: primitives.R4.canonical;
  /** Extension of questionnaire element */
  _questionnaire?: Element;
  /** in-progress | completed | amended | entered-in-error | stopped */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** The subject of the questions */
  subject?: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Date the answers were gathered */
  authored?: primitives.R4.dateTime;
  /** Extension of authored element */
  _authored?: Element;
  /** Person who received and recorded the answers */
  author?: Reference;
  /** The person who answered the questions */
  source?: Reference;
}
/**
 * A structured set of questions and their answers
 */
export const QuestionnaireResponse: t.Type<QuestionnaireResponse> = t.recursion<
  QuestionnaireResponse
>("QuestionnaireResponse", () =>
  t.intersection([
    t.type({
      /** in-progress | completed | amended | entered-in-error | stopped */
      status: primitives.R4.code
    }),
    t.partial({
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
      /** Unique id for this set of answers */
      identifier: Identifier,
      /** Request fulfilled by this QuestionnaireResponse */
      basedOn: t.array(Reference),
      /** Part of this action */
      partOf: t.array(Reference),
      /** Form being answered */
      questionnaire: primitives.R4.canonical,
      /** Extension of questionnaire element */
      _questionnaire: Element,
      /** Extension of status element */
      _status: Element,
      /** The subject of the questions */
      subject: Reference,
      /** Encounter created as part of */
      encounter: Reference,
      /** Date the answers were gathered */
      authored: primitives.R4.dateTime,
      /** Extension of authored element */
      _authored: Element,
      /** Person who received and recorded the answers */
      author: Reference,
      /** The person who answered the questions */
      source: Reference
    })
  ])
);

/**
 * Groups and questions
 */
export interface QuestionnaireResponseItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Pointer to specific item from Questionnaire */
  linkId: string;
  /** Extension of linkId element */
  _linkId?: Element;
  /** ElementDefinition - details for the item */
  definition?: primitives.R4.uri;
  /** Extension of definition element */
  _definition?: Element;
  /** Name for group or question text */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Nested questionnaire response items */
  item?: QuestionnaireResponseItem[];
}
/**
 * Groups and questions
 */
export const QuestionnaireResponseItem: t.Type<
  QuestionnaireResponseItem
> = t.recursion<QuestionnaireResponseItem>("QuestionnaireResponseItem", () =>
  t.intersection([
    t.type({
      /** Pointer to specific item from Questionnaire */
      linkId: primitives.R4.string
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
      /** Extension of linkId element */
      _linkId: Element,
      /** ElementDefinition - details for the item */
      definition: primitives.R4.uri,
      /** Extension of definition element */
      _definition: Element,
      /** Name for group or question text */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element,
      /** Nested questionnaire response items */
      item: t.array(QuestionnaireResponseItem)
    })
  ])
);

/**
 * The response(s) to the question
 */
export interface QuestionnaireResponseItemAnswer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Single-valued answer to the question */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Single-valued answer to the question */
  valueDecimal?: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Single-valued answer to the question */
  valueInteger?: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Single-valued answer to the question */
  valueDate?: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Single-valued answer to the question */
  valueDateTime?: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Single-valued answer to the question */
  valueTime?: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Single-valued answer to the question */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Single-valued answer to the question */
  valueUri?: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Single-valued answer to the question */
  valueAttachment?: Attachment;
  /** Single-valued answer to the question */
  valueCoding?: Coding;
  /** Single-valued answer to the question */
  valueQuantity?: Quantity;
  /** Single-valued answer to the question */
  valueReference?: Reference;
  /** Nested groups and questions */
  item?: QuestionnaireResponseItem[];
}
/**
 * The response(s) to the question
 */
export const QuestionnaireResponseItemAnswer: t.Type<
  QuestionnaireResponseItemAnswer
> = t.recursion<QuestionnaireResponseItemAnswer>(
  "QuestionnaireResponseItemAnswer",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Single-valued answer to the question */
        valueBoolean: primitives.R4.boolean,
        /** Extension of valueBoolean element */
        _valueBoolean: Element,
        /** Single-valued answer to the question */
        valueDecimal: primitives.R4.decimal,
        /** Extension of valueDecimal element */
        _valueDecimal: Element,
        /** Single-valued answer to the question */
        valueInteger: primitives.R4.integer,
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Single-valued answer to the question */
        valueDate: primitives.R4.date,
        /** Extension of valueDate element */
        _valueDate: Element,
        /** Single-valued answer to the question */
        valueDateTime: primitives.R4.dateTime,
        /** Extension of valueDateTime element */
        _valueDateTime: Element,
        /** Single-valued answer to the question */
        valueTime: primitives.R4.time,
        /** Extension of valueTime element */
        _valueTime: Element,
        /** Single-valued answer to the question */
        valueString: primitives.R4.string,
        /** Extension of valueString element */
        _valueString: Element,
        /** Single-valued answer to the question */
        valueUri: primitives.R4.uri,
        /** Extension of valueUri element */
        _valueUri: Element,
        /** Single-valued answer to the question */
        valueAttachment: Attachment,
        /** Single-valued answer to the question */
        valueCoding: Coding,
        /** Single-valued answer to the question */
        valueQuantity: Quantity,
        /** Single-valued answer to the question */
        valueReference: Reference,
        /** Nested groups and questions */
        item: t.array(QuestionnaireResponseItem)
      })
    ])
);
