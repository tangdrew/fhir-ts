/**
 * Questionnaire Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A structured set of questions
 */
export interface Questionnaire {
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
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the questionnaire */
  identifier?: Identifier[];
  /** Business version of the questionnaire */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this questionnaire (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this questionnaire (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Instantiates protocol or definition */
  derivedFrom?: primitives.R4.canonical[];
  /** Extension of derivedFrom element */
  _derivedFrom?: Element[];
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Resource that can be subject of QuestionnaireResponse */
  subjectType?: primitives.R4.code[];
  /** Extension of subjectType element */
  _subjectType?: Element[];
  /** Date last changed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the questionnaire */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for questionnaire (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this questionnaire is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the questionnaire was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the questionnaire was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
  /** When the questionnaire is expected to be used */
  effectivePeriod?: Period;
  /** Concept that represents the overall questionnaire */
  code?: Coding[];
}
/**
 * A structured set of questions
 */
export const Questionnaire: t.Type<Questionnaire> = t.recursion<Questionnaire>(
  "Questionnaire",
  () =>
    t.intersection([
      t.type({
        /** draft | active | retired | unknown */
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
        /** Canonical identifier for this questionnaire, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Additional identifier for the questionnaire */
        identifier: t.array(Identifier),
        /** Business version of the questionnaire */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Name for this questionnaire (computer friendly) */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Name for this questionnaire (human friendly) */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Instantiates protocol or definition */
        derivedFrom: t.array(primitives.R4.canonical),
        /** Extension of derivedFrom element */
        _derivedFrom: t.array(Element),
        /** Extension of status element */
        _status: Element,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Extension of experimental element */
        _experimental: Element,
        /** Resource that can be subject of QuestionnaireResponse */
        subjectType: t.array(primitives.R4.code),
        /** Extension of subjectType element */
        _subjectType: t.array(Element),
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Extension of publisher element */
        _publisher: Element,
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Natural language description of the questionnaire */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for questionnaire (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Why this questionnaire is defined */
        purpose: primitives.R4.markdown,
        /** Extension of purpose element */
        _purpose: Element,
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element,
        /** When the questionnaire was approved by publisher */
        approvalDate: primitives.R4.date,
        /** Extension of approvalDate element */
        _approvalDate: Element,
        /** When the questionnaire was last reviewed */
        lastReviewDate: primitives.R4.date,
        /** Extension of lastReviewDate element */
        _lastReviewDate: Element,
        /** When the questionnaire is expected to be used */
        effectivePeriod: Period,
        /** Concept that represents the overall questionnaire */
        code: t.array(Coding)
      })
    ])
);

/**
 * Questions and sections within the Questionnaire
 */
export interface QuestionnaireItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Unique id for item in questionnaire */
  linkId: string;
  /** Extension of linkId element */
  _linkId?: Element;
  /** ElementDefinition - details for the item */
  definition?: primitives.R4.uri;
  /** Extension of definition element */
  _definition?: Element;
  /** Corresponding concept for this item in a terminology */
  code?: Coding[];
  /** E.g. "1(a)", "2.5.3" */
  prefix?: string;
  /** Extension of prefix element */
  _prefix?: Element;
  /** Primary text for the item */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** group | display | boolean | decimal | integer | date | dateTime + */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** all | any */
  enableBehavior?: primitives.R4.code;
  /** Extension of enableBehavior element */
  _enableBehavior?: Element;
  /** Whether the item must be included in data results */
  required?: boolean;
  /** Extension of required element */
  _required?: Element;
  /** Whether the item may repeat */
  repeats?: boolean;
  /** Extension of repeats element */
  _repeats?: Element;
  /** Don't allow human editing */
  readOnly?: boolean;
  /** Extension of readOnly element */
  _readOnly?: Element;
  /** No more than this many characters */
  maxLength?: primitives.R4.integer;
  /** Extension of maxLength element */
  _maxLength?: Element;
  /** Valueset containing permitted answers */
  answerValueSet?: primitives.R4.canonical;
  /** Extension of answerValueSet element */
  _answerValueSet?: Element;
  /** Nested questionnaire items */
  item?: QuestionnaireItem[];
}
/**
 * Questions and sections within the Questionnaire
 */
export const QuestionnaireItem: t.Type<QuestionnaireItem> = t.recursion<
  QuestionnaireItem
>("QuestionnaireItem", () =>
  t.intersection([
    t.type({
      /** Unique id for item in questionnaire */
      linkId: primitives.R4.string,
      /** group | display | boolean | decimal | integer | date | dateTime + */
      type: primitives.R4.code
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
      /** Corresponding concept for this item in a terminology */
      code: t.array(Coding),
      /** E.g. "1(a)", "2.5.3" */
      prefix: primitives.R4.string,
      /** Extension of prefix element */
      _prefix: Element,
      /** Primary text for the item */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element,
      /** Extension of type element */
      _type: Element,
      /** all | any */
      enableBehavior: primitives.R4.code,
      /** Extension of enableBehavior element */
      _enableBehavior: Element,
      /** Whether the item must be included in data results */
      required: primitives.R4.boolean,
      /** Extension of required element */
      _required: Element,
      /** Whether the item may repeat */
      repeats: primitives.R4.boolean,
      /** Extension of repeats element */
      _repeats: Element,
      /** Don't allow human editing */
      readOnly: primitives.R4.boolean,
      /** Extension of readOnly element */
      _readOnly: Element,
      /** No more than this many characters */
      maxLength: primitives.R4.integer,
      /** Extension of maxLength element */
      _maxLength: Element,
      /** Valueset containing permitted answers */
      answerValueSet: primitives.R4.canonical,
      /** Extension of answerValueSet element */
      _answerValueSet: Element,
      /** Nested questionnaire items */
      item: t.array(QuestionnaireItem)
    })
  ])
);

/**
 * Only allow data when
 */
export interface QuestionnaireItemEnableWhen {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Question that determines whether item is enabled */
  question: string;
  /** Extension of question element */
  _question?: Element;
  /** exists | = | != | > | < | >= | <= */
  operator: primitives.R4.code;
  /** Extension of operator element */
  _operator?: Element;
  /** Value for question comparison based on operator */
  answerBoolean: boolean;
  /** Extension of answerBoolean element */
  _answerBoolean?: Element;
  /** Value for question comparison based on operator */
  answerDecimal: primitives.R4.decimal;
  /** Extension of answerDecimal element */
  _answerDecimal?: Element;
  /** Value for question comparison based on operator */
  answerInteger: primitives.R4.integer;
  /** Extension of answerInteger element */
  _answerInteger?: Element;
  /** Value for question comparison based on operator */
  answerDate: primitives.R4.date;
  /** Extension of answerDate element */
  _answerDate?: Element;
  /** Value for question comparison based on operator */
  answerDateTime: primitives.R4.dateTime;
  /** Extension of answerDateTime element */
  _answerDateTime?: Element;
  /** Value for question comparison based on operator */
  answerTime: primitives.R4.time;
  /** Extension of answerTime element */
  _answerTime?: Element;
  /** Value for question comparison based on operator */
  answerString: string;
  /** Extension of answerString element */
  _answerString?: Element;
  /** Value for question comparison based on operator */
  answerCoding: Coding;
  /** Value for question comparison based on operator */
  answerQuantity: Quantity;
  /** Value for question comparison based on operator */
  answerReference: Reference;
}
/**
 * Only allow data when
 */
export const QuestionnaireItemEnableWhen: t.Type<
  QuestionnaireItemEnableWhen
> = t.recursion<QuestionnaireItemEnableWhen>(
  "QuestionnaireItemEnableWhen",
  () =>
    t.intersection([
      t.type({
        /** Question that determines whether item is enabled */
        question: primitives.R4.string,
        /** exists | = | != | > | < | >= | <= */
        operator: primitives.R4.code,
        /** Value for question comparison based on operator */
        answerBoolean: primitives.R4.boolean,
        /** Value for question comparison based on operator */
        answerDecimal: primitives.R4.decimal,
        /** Value for question comparison based on operator */
        answerInteger: primitives.R4.integer,
        /** Value for question comparison based on operator */
        answerDate: primitives.R4.date,
        /** Value for question comparison based on operator */
        answerDateTime: primitives.R4.dateTime,
        /** Value for question comparison based on operator */
        answerTime: primitives.R4.time,
        /** Value for question comparison based on operator */
        answerString: primitives.R4.string,
        /** Value for question comparison based on operator */
        answerCoding: Coding,
        /** Value for question comparison based on operator */
        answerQuantity: Quantity,
        /** Value for question comparison based on operator */
        answerReference: Reference
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
        /** Extension of question element */
        _question: Element,
        /** Extension of operator element */
        _operator: Element,
        /** Extension of answerBoolean element */
        _answerBoolean: Element,
        /** Extension of answerDecimal element */
        _answerDecimal: Element,
        /** Extension of answerInteger element */
        _answerInteger: Element,
        /** Extension of answerDate element */
        _answerDate: Element,
        /** Extension of answerDateTime element */
        _answerDateTime: Element,
        /** Extension of answerTime element */
        _answerTime: Element,
        /** Extension of answerString element */
        _answerString: Element
      })
    ])
);

/**
 * Permitted answer
 */
export interface QuestionnaireItemAnswerOption {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Answer value */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Answer value */
  valueDate: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Answer value */
  valueTime: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Answer value */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Answer value */
  valueCoding: Coding;
  /** Answer value */
  valueReference: Reference;
  /** Whether option is selected by default */
  initialSelected?: boolean;
  /** Extension of initialSelected element */
  _initialSelected?: Element;
}
/**
 * Permitted answer
 */
export const QuestionnaireItemAnswerOption: t.Type<
  QuestionnaireItemAnswerOption
> = t.recursion<QuestionnaireItemAnswerOption>(
  "QuestionnaireItemAnswerOption",
  () =>
    t.intersection([
      t.type({
        /** Answer value */
        valueInteger: primitives.R4.integer,
        /** Answer value */
        valueDate: primitives.R4.date,
        /** Answer value */
        valueTime: primitives.R4.time,
        /** Answer value */
        valueString: primitives.R4.string,
        /** Answer value */
        valueCoding: Coding,
        /** Answer value */
        valueReference: Reference
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
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Extension of valueDate element */
        _valueDate: Element,
        /** Extension of valueTime element */
        _valueTime: Element,
        /** Extension of valueString element */
        _valueString: Element,
        /** Whether option is selected by default */
        initialSelected: primitives.R4.boolean,
        /** Extension of initialSelected element */
        _initialSelected: Element
      })
    ])
);

/**
 * Initial value(s) when item is first rendered
 */
export interface QuestionnaireItemInitial {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Actual value for initializing the question */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Actual value for initializing the question */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Actual value for initializing the question */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Actual value for initializing the question */
  valueDate: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Actual value for initializing the question */
  valueDateTime: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Actual value for initializing the question */
  valueTime: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Actual value for initializing the question */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Actual value for initializing the question */
  valueUri: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Actual value for initializing the question */
  valueAttachment: Attachment;
  /** Actual value for initializing the question */
  valueCoding: Coding;
  /** Actual value for initializing the question */
  valueQuantity: Quantity;
  /** Actual value for initializing the question */
  valueReference: Reference;
}
/**
 * Initial value(s) when item is first rendered
 */
export const QuestionnaireItemInitial: t.Type<
  QuestionnaireItemInitial
> = t.recursion<QuestionnaireItemInitial>("QuestionnaireItemInitial", () =>
  t.intersection([
    t.type({
      /** Actual value for initializing the question */
      valueBoolean: primitives.R4.boolean,
      /** Actual value for initializing the question */
      valueDecimal: primitives.R4.decimal,
      /** Actual value for initializing the question */
      valueInteger: primitives.R4.integer,
      /** Actual value for initializing the question */
      valueDate: primitives.R4.date,
      /** Actual value for initializing the question */
      valueDateTime: primitives.R4.dateTime,
      /** Actual value for initializing the question */
      valueTime: primitives.R4.time,
      /** Actual value for initializing the question */
      valueString: primitives.R4.string,
      /** Actual value for initializing the question */
      valueUri: primitives.R4.uri,
      /** Actual value for initializing the question */
      valueAttachment: Attachment,
      /** Actual value for initializing the question */
      valueCoding: Coding,
      /** Actual value for initializing the question */
      valueQuantity: Quantity,
      /** Actual value for initializing the question */
      valueReference: Reference
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
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Extension of valueDecimal element */
      _valueDecimal: Element,
      /** Extension of valueInteger element */
      _valueInteger: Element,
      /** Extension of valueDate element */
      _valueDate: Element,
      /** Extension of valueDateTime element */
      _valueDateTime: Element,
      /** Extension of valueTime element */
      _valueTime: Element,
      /** Extension of valueString element */
      _valueString: Element,
      /** Extension of valueUri element */
      _valueUri: Element
    })
  ])
);
