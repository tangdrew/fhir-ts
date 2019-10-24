/**
 * Task Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { ContactPoint } from "./ContactPoint";
import { Contributor } from "./Contributor";
import { Count } from "./Count";
import { DataRequirement } from "./DataRequirement";
import { Distance } from "./Distance";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Expression } from "./Expression";
import { Extension } from "./Extension";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { ParameterDefinition } from "./ParameterDefinition";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";
import { SampledData } from "./SampledData";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

/**
 * A task to be performed
 */
export interface Task {
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
  /** Task Instance Identifier */
  identifier?: Identifier[];
  /** Formal definition of task */
  instantiatesCanonical?: primitives.R4.canonical;
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element;
  /** Formal definition of task */
  instantiatesUri?: primitives.R4.uri;
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element;
  /** Request fulfilled by this task */
  basedOn?: Reference[];
  /** Requisition or grouper id */
  groupIdentifier?: Identifier;
  /** Composite task */
  partOf?: Reference[];
  /** draft | requested | received | accepted | + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** E.g. "Specimen collected", "IV prepped" */
  businessStatus?: CodeableConcept;
  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** Task Type */
  code?: CodeableConcept;
  /** Human-readable explanation of task */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** What task is acting on */
  focus?: Reference;
  /** Beneficiary of the Task */
  for?: Reference;
  /** Healthcare event during which this task originated */
  encounter?: Reference;
  /** Start and end time of execution */
  executionPeriod?: Period;
  /** Task Creation Date */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
  /** Task Last Modified Date */
  lastModified?: primitives.R4.dateTime;
  /** Extension of lastModified element */
  _lastModified?: Element;
  /** Who is asking for task to be done */
  requester?: Reference;
  /** Requested performer */
  performerType?: CodeableConcept[];
  /** Responsible individual */
  owner?: Reference;
  /** Where task occurs */
  location?: Reference;
  /** Why task is needed */
  reasonCode?: CodeableConcept;
  /** Why task is needed */
  reasonReference?: Reference;
  /** Associated insurance coverage */
  insurance?: Reference[];
  /** Comments made about the task */
  note?: Annotation[];
  /** Key events in history of the Task */
  relevantHistory?: Reference[];
}
/**
 * A task to be performed
 */
export const Task: t.Type<Task> = t.recursion<Task>("Task", () =>
  t.intersection([
    t.type({
      /** draft | requested | received | accepted | + */
      status: primitives.R4.code,
      /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
      intent: primitives.R4.code
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
      /** Task Instance Identifier */
      identifier: t.array(Identifier),
      /** Formal definition of task */
      instantiatesCanonical: primitives.R4.canonical,
      /** Extension of instantiatesCanonical element */
      _instantiatesCanonical: Element,
      /** Formal definition of task */
      instantiatesUri: primitives.R4.uri,
      /** Extension of instantiatesUri element */
      _instantiatesUri: Element,
      /** Request fulfilled by this task */
      basedOn: t.array(Reference),
      /** Requisition or grouper id */
      groupIdentifier: Identifier,
      /** Composite task */
      partOf: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Reason for current status */
      statusReason: CodeableConcept,
      /** E.g. "Specimen collected", "IV prepped" */
      businessStatus: CodeableConcept,
      /** Extension of intent element */
      _intent: Element,
      /** routine | urgent | asap | stat */
      priority: primitives.R4.code,
      /** Extension of priority element */
      _priority: Element,
      /** Task Type */
      code: CodeableConcept,
      /** Human-readable explanation of task */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** What task is acting on */
      focus: Reference,
      /** Beneficiary of the Task */
      for: Reference,
      /** Healthcare event during which this task originated */
      encounter: Reference,
      /** Start and end time of execution */
      executionPeriod: Period,
      /** Task Creation Date */
      authoredOn: primitives.R4.dateTime,
      /** Extension of authoredOn element */
      _authoredOn: Element,
      /** Task Last Modified Date */
      lastModified: primitives.R4.dateTime,
      /** Extension of lastModified element */
      _lastModified: Element,
      /** Who is asking for task to be done */
      requester: Reference,
      /** Requested performer */
      performerType: t.array(CodeableConcept),
      /** Responsible individual */
      owner: Reference,
      /** Where task occurs */
      location: Reference,
      /** Why task is needed */
      reasonCode: CodeableConcept,
      /** Why task is needed */
      reasonReference: Reference,
      /** Associated insurance coverage */
      insurance: t.array(Reference),
      /** Comments made about the task */
      note: t.array(Annotation),
      /** Key events in history of the Task */
      relevantHistory: t.array(Reference)
    })
  ])
);

/**
 * Constraints on fulfillment tasks
 */
export interface TaskRestriction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** How many times to repeat */
  repetitions?: primitives.R4.positiveInt;
  /** Extension of repetitions element */
  _repetitions?: Element;
  /** When fulfillment sought */
  period?: Period;
  /** For whom is fulfillment sought? */
  recipient?: Reference[];
}
/**
 * Constraints on fulfillment tasks
 */
export const TaskRestriction: t.Type<TaskRestriction> = t.recursion<
  TaskRestriction
>("TaskRestriction", () =>
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
      /** How many times to repeat */
      repetitions: primitives.R4.positiveInt,
      /** Extension of repetitions element */
      _repetitions: Element,
      /** When fulfillment sought */
      period: Period,
      /** For whom is fulfillment sought? */
      recipient: t.array(Reference)
    })
  ])
);

/**
 * Information used to perform task
 */
export interface TaskInput {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for the input */
  type: CodeableConcept;
  /** Content to use in performing the task */
  valueBase64Binary: primitives.R4.base64Binary;
  /** Extension of valueBase64Binary element */
  _valueBase64Binary?: Element;
  /** Content to use in performing the task */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Content to use in performing the task */
  valueCanonical: primitives.R4.canonical;
  /** Extension of valueCanonical element */
  _valueCanonical?: Element;
  /** Content to use in performing the task */
  valueCode: primitives.R4.code;
  /** Extension of valueCode element */
  _valueCode?: Element;
  /** Content to use in performing the task */
  valueDate: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Content to use in performing the task */
  valueDateTime: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Content to use in performing the task */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Content to use in performing the task */
  valueId: primitives.R4.id;
  /** Extension of valueId element */
  _valueId?: Element;
  /** Content to use in performing the task */
  valueInstant: primitives.R4.instant;
  /** Extension of valueInstant element */
  _valueInstant?: Element;
  /** Content to use in performing the task */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Content to use in performing the task */
  valueMarkdown: primitives.R4.markdown;
  /** Extension of valueMarkdown element */
  _valueMarkdown?: Element;
  /** Content to use in performing the task */
  valueOid: primitives.R4.oid;
  /** Extension of valueOid element */
  _valueOid?: Element;
  /** Content to use in performing the task */
  valuePositiveInt: primitives.R4.positiveInt;
  /** Extension of valuePositiveInt element */
  _valuePositiveInt?: Element;
  /** Content to use in performing the task */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Content to use in performing the task */
  valueTime: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Content to use in performing the task */
  valueUnsignedInt: primitives.R4.unsignedInt;
  /** Extension of valueUnsignedInt element */
  _valueUnsignedInt?: Element;
  /** Content to use in performing the task */
  valueUri: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Content to use in performing the task */
  valueUrl: primitives.R4.url;
  /** Extension of valueUrl element */
  _valueUrl?: Element;
  /** Content to use in performing the task */
  valueUuid: primitives.R4.uuid;
  /** Extension of valueUuid element */
  _valueUuid?: Element;
  /** Content to use in performing the task */
  valueAddress: Address;
  /** Content to use in performing the task */
  valueAge: Age;
  /** Content to use in performing the task */
  valueAnnotation: Annotation;
  /** Content to use in performing the task */
  valueAttachment: Attachment;
  /** Content to use in performing the task */
  valueCodeableConcept: CodeableConcept;
  /** Content to use in performing the task */
  valueCoding: Coding;
  /** Content to use in performing the task */
  valueContactPoint: ContactPoint;
  /** Content to use in performing the task */
  valueCount: Count;
  /** Content to use in performing the task */
  valueDistance: Distance;
  /** Content to use in performing the task */
  valueDuration: Duration;
  /** Content to use in performing the task */
  valueHumanName: HumanName;
  /** Content to use in performing the task */
  valueIdentifier: Identifier;
  /** Content to use in performing the task */
  valueMoney: Money;
  /** Content to use in performing the task */
  valuePeriod: Period;
  /** Content to use in performing the task */
  valueQuantity: Quantity;
  /** Content to use in performing the task */
  valueRange: Range;
  /** Content to use in performing the task */
  valueRatio: Ratio;
  /** Content to use in performing the task */
  valueReference: Reference;
  /** Content to use in performing the task */
  valueSampledData: SampledData;
  /** Content to use in performing the task */
  valueSignature: Signature;
  /** Content to use in performing the task */
  valueTiming: Timing;
  /** Content to use in performing the task */
  valueContactDetail: ContactDetail;
  /** Content to use in performing the task */
  valueContributor: Contributor;
  /** Content to use in performing the task */
  valueDataRequirement: DataRequirement;
  /** Content to use in performing the task */
  valueExpression: Expression;
  /** Content to use in performing the task */
  valueParameterDefinition: ParameterDefinition;
  /** Content to use in performing the task */
  valueRelatedArtifact: RelatedArtifact;
  /** Content to use in performing the task */
  valueTriggerDefinition: TriggerDefinition;
  /** Content to use in performing the task */
  valueUsageContext: UsageContext;
  /** Content to use in performing the task */
  valueDosage: Dosage;
}
/**
 * Information used to perform task
 */
export const TaskInput: t.Type<TaskInput> = t.recursion<TaskInput>(
  "TaskInput",
  () =>
    t.intersection([
      t.type({
        /** Label for the input */
        type: CodeableConcept,
        /** Content to use in performing the task */
        valueBase64Binary: primitives.R4.base64Binary,
        /** Content to use in performing the task */
        valueBoolean: primitives.R4.boolean,
        /** Content to use in performing the task */
        valueCanonical: primitives.R4.canonical,
        /** Content to use in performing the task */
        valueCode: primitives.R4.code,
        /** Content to use in performing the task */
        valueDate: primitives.R4.date,
        /** Content to use in performing the task */
        valueDateTime: primitives.R4.dateTime,
        /** Content to use in performing the task */
        valueDecimal: primitives.R4.decimal,
        /** Content to use in performing the task */
        valueId: primitives.R4.id,
        /** Content to use in performing the task */
        valueInstant: primitives.R4.instant,
        /** Content to use in performing the task */
        valueInteger: primitives.R4.integer,
        /** Content to use in performing the task */
        valueMarkdown: primitives.R4.markdown,
        /** Content to use in performing the task */
        valueOid: primitives.R4.oid,
        /** Content to use in performing the task */
        valuePositiveInt: primitives.R4.positiveInt,
        /** Content to use in performing the task */
        valueString: primitives.R4.string,
        /** Content to use in performing the task */
        valueTime: primitives.R4.time,
        /** Content to use in performing the task */
        valueUnsignedInt: primitives.R4.unsignedInt,
        /** Content to use in performing the task */
        valueUri: primitives.R4.uri,
        /** Content to use in performing the task */
        valueUrl: primitives.R4.url,
        /** Content to use in performing the task */
        valueUuid: primitives.R4.uuid,
        /** Content to use in performing the task */
        valueAddress: Address,
        /** Content to use in performing the task */
        valueAge: Age,
        /** Content to use in performing the task */
        valueAnnotation: Annotation,
        /** Content to use in performing the task */
        valueAttachment: Attachment,
        /** Content to use in performing the task */
        valueCodeableConcept: CodeableConcept,
        /** Content to use in performing the task */
        valueCoding: Coding,
        /** Content to use in performing the task */
        valueContactPoint: ContactPoint,
        /** Content to use in performing the task */
        valueCount: Count,
        /** Content to use in performing the task */
        valueDistance: Distance,
        /** Content to use in performing the task */
        valueDuration: Duration,
        /** Content to use in performing the task */
        valueHumanName: HumanName,
        /** Content to use in performing the task */
        valueIdentifier: Identifier,
        /** Content to use in performing the task */
        valueMoney: Money,
        /** Content to use in performing the task */
        valuePeriod: Period,
        /** Content to use in performing the task */
        valueQuantity: Quantity,
        /** Content to use in performing the task */
        valueRange: Range,
        /** Content to use in performing the task */
        valueRatio: Ratio,
        /** Content to use in performing the task */
        valueReference: Reference,
        /** Content to use in performing the task */
        valueSampledData: SampledData,
        /** Content to use in performing the task */
        valueSignature: Signature,
        /** Content to use in performing the task */
        valueTiming: Timing,
        /** Content to use in performing the task */
        valueContactDetail: ContactDetail,
        /** Content to use in performing the task */
        valueContributor: Contributor,
        /** Content to use in performing the task */
        valueDataRequirement: DataRequirement,
        /** Content to use in performing the task */
        valueExpression: Expression,
        /** Content to use in performing the task */
        valueParameterDefinition: ParameterDefinition,
        /** Content to use in performing the task */
        valueRelatedArtifact: RelatedArtifact,
        /** Content to use in performing the task */
        valueTriggerDefinition: TriggerDefinition,
        /** Content to use in performing the task */
        valueUsageContext: UsageContext,
        /** Content to use in performing the task */
        valueDosage: Dosage
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
        /** Extension of valueBase64Binary element */
        _valueBase64Binary: Element,
        /** Extension of valueBoolean element */
        _valueBoolean: Element,
        /** Extension of valueCanonical element */
        _valueCanonical: Element,
        /** Extension of valueCode element */
        _valueCode: Element,
        /** Extension of valueDate element */
        _valueDate: Element,
        /** Extension of valueDateTime element */
        _valueDateTime: Element,
        /** Extension of valueDecimal element */
        _valueDecimal: Element,
        /** Extension of valueId element */
        _valueId: Element,
        /** Extension of valueInstant element */
        _valueInstant: Element,
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Extension of valueMarkdown element */
        _valueMarkdown: Element,
        /** Extension of valueOid element */
        _valueOid: Element,
        /** Extension of valuePositiveInt element */
        _valuePositiveInt: Element,
        /** Extension of valueString element */
        _valueString: Element,
        /** Extension of valueTime element */
        _valueTime: Element,
        /** Extension of valueUnsignedInt element */
        _valueUnsignedInt: Element,
        /** Extension of valueUri element */
        _valueUri: Element,
        /** Extension of valueUrl element */
        _valueUrl: Element,
        /** Extension of valueUuid element */
        _valueUuid: Element
      })
    ])
);

/**
 * Information produced as part of task
 */
export interface TaskOutput {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for output */
  type: CodeableConcept;
  /** Result of output */
  valueBase64Binary: primitives.R4.base64Binary;
  /** Extension of valueBase64Binary element */
  _valueBase64Binary?: Element;
  /** Result of output */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Result of output */
  valueCanonical: primitives.R4.canonical;
  /** Extension of valueCanonical element */
  _valueCanonical?: Element;
  /** Result of output */
  valueCode: primitives.R4.code;
  /** Extension of valueCode element */
  _valueCode?: Element;
  /** Result of output */
  valueDate: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Result of output */
  valueDateTime: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Result of output */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Result of output */
  valueId: primitives.R4.id;
  /** Extension of valueId element */
  _valueId?: Element;
  /** Result of output */
  valueInstant: primitives.R4.instant;
  /** Extension of valueInstant element */
  _valueInstant?: Element;
  /** Result of output */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Result of output */
  valueMarkdown: primitives.R4.markdown;
  /** Extension of valueMarkdown element */
  _valueMarkdown?: Element;
  /** Result of output */
  valueOid: primitives.R4.oid;
  /** Extension of valueOid element */
  _valueOid?: Element;
  /** Result of output */
  valuePositiveInt: primitives.R4.positiveInt;
  /** Extension of valuePositiveInt element */
  _valuePositiveInt?: Element;
  /** Result of output */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Result of output */
  valueTime: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Result of output */
  valueUnsignedInt: primitives.R4.unsignedInt;
  /** Extension of valueUnsignedInt element */
  _valueUnsignedInt?: Element;
  /** Result of output */
  valueUri: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Result of output */
  valueUrl: primitives.R4.url;
  /** Extension of valueUrl element */
  _valueUrl?: Element;
  /** Result of output */
  valueUuid: primitives.R4.uuid;
  /** Extension of valueUuid element */
  _valueUuid?: Element;
  /** Result of output */
  valueAddress: Address;
  /** Result of output */
  valueAge: Age;
  /** Result of output */
  valueAnnotation: Annotation;
  /** Result of output */
  valueAttachment: Attachment;
  /** Result of output */
  valueCodeableConcept: CodeableConcept;
  /** Result of output */
  valueCoding: Coding;
  /** Result of output */
  valueContactPoint: ContactPoint;
  /** Result of output */
  valueCount: Count;
  /** Result of output */
  valueDistance: Distance;
  /** Result of output */
  valueDuration: Duration;
  /** Result of output */
  valueHumanName: HumanName;
  /** Result of output */
  valueIdentifier: Identifier;
  /** Result of output */
  valueMoney: Money;
  /** Result of output */
  valuePeriod: Period;
  /** Result of output */
  valueQuantity: Quantity;
  /** Result of output */
  valueRange: Range;
  /** Result of output */
  valueRatio: Ratio;
  /** Result of output */
  valueReference: Reference;
  /** Result of output */
  valueSampledData: SampledData;
  /** Result of output */
  valueSignature: Signature;
  /** Result of output */
  valueTiming: Timing;
  /** Result of output */
  valueContactDetail: ContactDetail;
  /** Result of output */
  valueContributor: Contributor;
  /** Result of output */
  valueDataRequirement: DataRequirement;
  /** Result of output */
  valueExpression: Expression;
  /** Result of output */
  valueParameterDefinition: ParameterDefinition;
  /** Result of output */
  valueRelatedArtifact: RelatedArtifact;
  /** Result of output */
  valueTriggerDefinition: TriggerDefinition;
  /** Result of output */
  valueUsageContext: UsageContext;
  /** Result of output */
  valueDosage: Dosage;
}
/**
 * Information produced as part of task
 */
export const TaskOutput: t.Type<TaskOutput> = t.recursion<TaskOutput>(
  "TaskOutput",
  () =>
    t.intersection([
      t.type({
        /** Label for output */
        type: CodeableConcept,
        /** Result of output */
        valueBase64Binary: primitives.R4.base64Binary,
        /** Result of output */
        valueBoolean: primitives.R4.boolean,
        /** Result of output */
        valueCanonical: primitives.R4.canonical,
        /** Result of output */
        valueCode: primitives.R4.code,
        /** Result of output */
        valueDate: primitives.R4.date,
        /** Result of output */
        valueDateTime: primitives.R4.dateTime,
        /** Result of output */
        valueDecimal: primitives.R4.decimal,
        /** Result of output */
        valueId: primitives.R4.id,
        /** Result of output */
        valueInstant: primitives.R4.instant,
        /** Result of output */
        valueInteger: primitives.R4.integer,
        /** Result of output */
        valueMarkdown: primitives.R4.markdown,
        /** Result of output */
        valueOid: primitives.R4.oid,
        /** Result of output */
        valuePositiveInt: primitives.R4.positiveInt,
        /** Result of output */
        valueString: primitives.R4.string,
        /** Result of output */
        valueTime: primitives.R4.time,
        /** Result of output */
        valueUnsignedInt: primitives.R4.unsignedInt,
        /** Result of output */
        valueUri: primitives.R4.uri,
        /** Result of output */
        valueUrl: primitives.R4.url,
        /** Result of output */
        valueUuid: primitives.R4.uuid,
        /** Result of output */
        valueAddress: Address,
        /** Result of output */
        valueAge: Age,
        /** Result of output */
        valueAnnotation: Annotation,
        /** Result of output */
        valueAttachment: Attachment,
        /** Result of output */
        valueCodeableConcept: CodeableConcept,
        /** Result of output */
        valueCoding: Coding,
        /** Result of output */
        valueContactPoint: ContactPoint,
        /** Result of output */
        valueCount: Count,
        /** Result of output */
        valueDistance: Distance,
        /** Result of output */
        valueDuration: Duration,
        /** Result of output */
        valueHumanName: HumanName,
        /** Result of output */
        valueIdentifier: Identifier,
        /** Result of output */
        valueMoney: Money,
        /** Result of output */
        valuePeriod: Period,
        /** Result of output */
        valueQuantity: Quantity,
        /** Result of output */
        valueRange: Range,
        /** Result of output */
        valueRatio: Ratio,
        /** Result of output */
        valueReference: Reference,
        /** Result of output */
        valueSampledData: SampledData,
        /** Result of output */
        valueSignature: Signature,
        /** Result of output */
        valueTiming: Timing,
        /** Result of output */
        valueContactDetail: ContactDetail,
        /** Result of output */
        valueContributor: Contributor,
        /** Result of output */
        valueDataRequirement: DataRequirement,
        /** Result of output */
        valueExpression: Expression,
        /** Result of output */
        valueParameterDefinition: ParameterDefinition,
        /** Result of output */
        valueRelatedArtifact: RelatedArtifact,
        /** Result of output */
        valueTriggerDefinition: TriggerDefinition,
        /** Result of output */
        valueUsageContext: UsageContext,
        /** Result of output */
        valueDosage: Dosage
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
        /** Extension of valueBase64Binary element */
        _valueBase64Binary: Element,
        /** Extension of valueBoolean element */
        _valueBoolean: Element,
        /** Extension of valueCanonical element */
        _valueCanonical: Element,
        /** Extension of valueCode element */
        _valueCode: Element,
        /** Extension of valueDate element */
        _valueDate: Element,
        /** Extension of valueDateTime element */
        _valueDateTime: Element,
        /** Extension of valueDecimal element */
        _valueDecimal: Element,
        /** Extension of valueId element */
        _valueId: Element,
        /** Extension of valueInstant element */
        _valueInstant: Element,
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Extension of valueMarkdown element */
        _valueMarkdown: Element,
        /** Extension of valueOid element */
        _valueOid: Element,
        /** Extension of valuePositiveInt element */
        _valuePositiveInt: Element,
        /** Extension of valueString element */
        _valueString: Element,
        /** Extension of valueTime element */
        _valueTime: Element,
        /** Extension of valueUnsignedInt element */
        _valueUnsignedInt: Element,
        /** Extension of valueUri element */
        _valueUri: Element,
        /** Extension of valueUrl element */
        _valueUrl: Element,
        /** Extension of valueUuid element */
        _valueUuid: Element
      })
    ])
);
