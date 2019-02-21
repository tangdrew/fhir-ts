/**
 * Questionnaire Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Initial value(s) when item is first rendered
 */
export interface QuestionnaireItemInitial {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Actual value for initializing the question */
  value:
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
}

export interface QuestionnaireItemInitialOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Actual value for initializing the question */
  value:
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
}

export const QuestionnaireItemInitial: t.RecursiveType<
  t.Type<QuestionnaireItemInitial, QuestionnaireItemInitialOutputType>,
  QuestionnaireItemInitial,
  QuestionnaireItemInitialOutputType
> = t.recursion<QuestionnaireItemInitial, QuestionnaireItemInitialOutputType>(
  "QuestionnaireItemInitial",
  () =>
    t.intersection(
      [
        t.type({
          /** Actual value for initializing the question */
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
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "QuestionnaireItemInitial"
    )
);

/**
 * Only allow data when
 */
export interface QuestionnaireItemEnableWhen {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Question that determines whether item is enabled */
  question: t.TypeOf<primitives.R4.StringType>;
  /** exists | = | != | > | < | >= | <= */
  operator: t.TypeOf<primitives.R4.CodeType>;
  /** Value for question comparison based on operator */
  answer:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.StringType>
    | Coding
    | Quantity
    | Reference;
}

export interface QuestionnaireItemEnableWhenOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Question that determines whether item is enabled */
  question: t.OutputOf<primitives.R4.StringType>;
  /** exists | = | != | > | < | >= | <= */
  operator: t.OutputOf<primitives.R4.CodeType>;
  /** Value for question comparison based on operator */
  answer:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.StringType>
    | CodingOutputType
    | QuantityOutputType
    | ReferenceOutputType;
}

export const QuestionnaireItemEnableWhen: t.RecursiveType<
  t.Type<QuestionnaireItemEnableWhen, QuestionnaireItemEnableWhenOutputType>,
  QuestionnaireItemEnableWhen,
  QuestionnaireItemEnableWhenOutputType
> = t.recursion<
  QuestionnaireItemEnableWhen,
  QuestionnaireItemEnableWhenOutputType
>("QuestionnaireItemEnableWhen", () =>
  t.intersection(
    [
      t.type({
        /** Value for question comparison based on operator */
        answer: t.union([
          primitives.R4.boolean,
          primitives.R4.decimal,
          primitives.R4.integer,
          primitives.R4.date,
          primitives.R4.dateTime,
          primitives.R4.time,
          primitives.R4.string,
          Coding,
          Quantity,
          Reference
        ]),
        /** exists | = | != | > | < | >= | <= */
        operator: primitives.R4.code,
        /** Question that determines whether item is enabled */
        question: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "QuestionnaireItemEnableWhen"
  )
);

/**
 * Permitted answer
 */
export interface QuestionnaireItemAnswerOption {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Answer value */
  value:
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.StringType>
    | Coding
    | Reference;
  /** Whether option is selected by default */
  initialSelected?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface QuestionnaireItemAnswerOptionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Answer value */
  value:
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.StringType>
    | CodingOutputType
    | ReferenceOutputType;
  /** Whether option is selected by default */
  initialSelected?: t.OutputOf<primitives.R4.BooleanType>;
}

export const QuestionnaireItemAnswerOption: t.RecursiveType<
  t.Type<
    QuestionnaireItemAnswerOption,
    QuestionnaireItemAnswerOptionOutputType
  >,
  QuestionnaireItemAnswerOption,
  QuestionnaireItemAnswerOptionOutputType
> = t.recursion<
  QuestionnaireItemAnswerOption,
  QuestionnaireItemAnswerOptionOutputType
>("QuestionnaireItemAnswerOption", () =>
  t.intersection(
    [
      t.type({
        /** Answer value */
        value: t.union([
          primitives.R4.integer,
          primitives.R4.date,
          primitives.R4.time,
          primitives.R4.string,
          Coding,
          Reference
        ])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Whether option is selected by default */
        initialSelected: primitives.R4.boolean,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "QuestionnaireItemAnswerOption"
  )
);

/**
 * Questions and sections within the Questionnaire
 */
export interface QuestionnaireItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Unique id for item in questionnaire */
  linkId: t.TypeOf<primitives.R4.StringType>;
  /** ElementDefinition - details for the item */
  definition?: t.TypeOf<primitives.R4.URIType>;
  /** Corresponding concept for this item in a terminology */
  code?: Coding[];
  /** E.g. "1(a)", "2.5.3" */
  prefix?: t.TypeOf<primitives.R4.StringType>;
  /** Primary text for the item */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** group | display | boolean | decimal | integer | date | dateTime + */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Only allow data when */
  enableWhen?: QuestionnaireItemEnableWhen[];
  /** all | any */
  enableBehavior?: t.TypeOf<primitives.R4.CodeType>;
  /** Whether the item must be included in data results */
  required?: t.TypeOf<primitives.R4.BooleanType>;
  /** Whether the item may repeat */
  repeats?: t.TypeOf<primitives.R4.BooleanType>;
  /** Don't allow human editing */
  readOnly?: t.TypeOf<primitives.R4.BooleanType>;
  /** No more than this many characters */
  maxLength?: t.TypeOf<primitives.R4.IntegerType>;
  /** Valueset containing permitted answers */
  answerValueSet?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Permitted answer */
  answerOption?: QuestionnaireItemAnswerOption[];
  /** Initial value(s) when item is first rendered */
  initial?: QuestionnaireItemInitial[];
  /** Nested questionnaire items */
  item?: QuestionnaireItem[];
}

export interface QuestionnaireItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Unique id for item in questionnaire */
  linkId: t.OutputOf<primitives.R4.StringType>;
  /** ElementDefinition - details for the item */
  definition?: t.OutputOf<primitives.R4.URIType>;
  /** Corresponding concept for this item in a terminology */
  code?: CodingOutputType[];
  /** E.g. "1(a)", "2.5.3" */
  prefix?: t.OutputOf<primitives.R4.StringType>;
  /** Primary text for the item */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** group | display | boolean | decimal | integer | date | dateTime + */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Only allow data when */
  enableWhen?: QuestionnaireItemEnableWhenOutputType[];
  /** all | any */
  enableBehavior?: t.OutputOf<primitives.R4.CodeType>;
  /** Whether the item must be included in data results */
  required?: t.OutputOf<primitives.R4.BooleanType>;
  /** Whether the item may repeat */
  repeats?: t.OutputOf<primitives.R4.BooleanType>;
  /** Don't allow human editing */
  readOnly?: t.OutputOf<primitives.R4.BooleanType>;
  /** No more than this many characters */
  maxLength?: t.OutputOf<primitives.R4.IntegerType>;
  /** Valueset containing permitted answers */
  answerValueSet?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Permitted answer */
  answerOption?: QuestionnaireItemAnswerOptionOutputType[];
  /** Initial value(s) when item is first rendered */
  initial?: QuestionnaireItemInitialOutputType[];
  /** Nested questionnaire items */
  item?: QuestionnaireItemOutputType[];
}

export const QuestionnaireItem: t.RecursiveType<
  t.Type<QuestionnaireItem, QuestionnaireItemOutputType>,
  QuestionnaireItem,
  QuestionnaireItemOutputType
> = t.recursion<QuestionnaireItem, QuestionnaireItemOutputType>(
  "QuestionnaireItem",
  () =>
    t.intersection(
      [
        t.type({
          /** Unique id for item in questionnaire */
          linkId: primitives.R4.string,
          /** group | display | boolean | decimal | integer | date | dateTime + */
          type: primitives.R4.code
        }),
        t.partial({
          /** Permitted answer */
          answerOption: t.array(QuestionnaireItemAnswerOption),
          /** Valueset containing permitted answers */
          answerValueSet: primitives.R4.canonical,
          /** Corresponding concept for this item in a terminology */
          code: t.array(Coding),
          /** ElementDefinition - details for the item */
          definition: primitives.R4.uri,
          /** all | any */
          enableBehavior: primitives.R4.code,
          /** Only allow data when */
          enableWhen: t.array(QuestionnaireItemEnableWhen),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Initial value(s) when item is first rendered */
          initial: t.array(QuestionnaireItemInitial),
          /** Nested questionnaire items */
          item: t.array(QuestionnaireItem),
          /** No more than this many characters */
          maxLength: primitives.R4.integer,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** E.g. "1(a)", "2.5.3" */
          prefix: primitives.R4.string,
          /** Don't allow human editing */
          readOnly: primitives.R4.boolean,
          /** Whether the item may repeat */
          repeats: primitives.R4.boolean,
          /** Whether the item must be included in data results */
          required: primitives.R4.boolean,
          /** Primary text for the item */
          text: primitives.R4.string
        })
      ],
      "QuestionnaireItem"
    )
);

/**
 * A structured set of questions
 */
export interface Questionnaire {
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
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the questionnaire */
  identifier?: Identifier[];
  /** Business version of the questionnaire */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this questionnaire (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this questionnaire (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Instantiates protocol or definition */
  derivedFrom?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Resource that can be subject of QuestionnaireResponse */
  subjectType?: t.TypeOf<primitives.R4.CodeType>[];
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the questionnaire */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for questionnaire (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this questionnaire is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the questionnaire was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the questionnaire was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the questionnaire is expected to be used */
  effectivePeriod?: Period;
  /** Concept that represents the overall questionnaire */
  code?: Coding[];
  /** Questions and sections within the Questionnaire */
  item?: QuestionnaireItem[];
}

export interface QuestionnaireOutputType {
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
  /** Canonical identifier for this questionnaire, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the questionnaire */
  identifier?: IdentifierOutputType[];
  /** Business version of the questionnaire */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this questionnaire (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this questionnaire (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Instantiates protocol or definition */
  derivedFrom?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Resource that can be subject of QuestionnaireResponse */
  subjectType?: t.OutputOf<primitives.R4.CodeType>[];
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the questionnaire */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for questionnaire (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this questionnaire is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the questionnaire was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the questionnaire was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the questionnaire is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** Concept that represents the overall questionnaire */
  code?: CodingOutputType[];
  /** Questions and sections within the Questionnaire */
  item?: QuestionnaireItemOutputType[];
}

export const Questionnaire: t.RecursiveType<
  t.Type<Questionnaire, QuestionnaireOutputType>,
  Questionnaire,
  QuestionnaireOutputType
> = t.recursion<Questionnaire, QuestionnaireOutputType>("Questionnaire", () =>
  t.intersection(
    [
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** When the questionnaire was approved by publisher */
        approvalDate: primitives.R4.date,
        /** Concept that represents the overall questionnaire */
        code: t.array(Coding),
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Instantiates protocol or definition */
        derivedFrom: t.array(primitives.R4.canonical),
        /** Natural language description of the questionnaire */
        description: primitives.R4.markdown,
        /** When the questionnaire is expected to be used */
        effectivePeriod: Period,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the questionnaire */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Questions and sections within the Questionnaire */
        item: t.array(QuestionnaireItem),
        /** Intended jurisdiction for questionnaire (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** When the questionnaire was last reviewed */
        lastReviewDate: primitives.R4.date,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this questionnaire (computer friendly) */
        name: primitives.R4.string,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this questionnaire is defined */
        purpose: primitives.R4.markdown,
        /** Resource that can be subject of QuestionnaireResponse */
        subjectType: t.array(primitives.R4.code),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this questionnaire (human friendly) */
        title: primitives.R4.string,
        /** Canonical identifier for this questionnaire, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the questionnaire */
        version: primitives.R4.string
      })
    ],
    "Questionnaire"
  )
);
