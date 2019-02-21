/**
 * Task Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { Age, AgeOutputType } from "./Age";
import { Annotation, AnnotationOutputType } from "./Annotation";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Contributor, ContributorOutputType } from "./Contributor";
import { Count, CountOutputType } from "./Count";
import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Distance, DistanceOutputType } from "./Distance";
import { Dosage, DosageOutputType } from "./Dosage";
import { Duration, DurationOutputType } from "./Duration";
import { Expression, ExpressionOutputType } from "./Expression";
import { Extension, ExtensionOutputType } from "./Extension";
import { HumanName, HumanNameOutputType } from "./HumanName";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import {
  ParameterDefinition,
  ParameterDefinitionOutputType
} from "./ParameterDefinition";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";
import { SampledData, SampledDataOutputType } from "./SampledData";
import { Signature, SignatureOutputType } from "./Signature";
import { Timing, TimingOutputType } from "./Timing";
import {
  TriggerDefinition,
  TriggerDefinitionOutputType
} from "./TriggerDefinition";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Constraints on fulfillment tasks
 */
export interface TaskRestriction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** How many times to repeat */
  repetitions?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** When fulfillment sought */
  period?: Period;
  /** For whom is fulfillment sought? */
  recipient?: Reference[];
}

export interface TaskRestrictionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** How many times to repeat */
  repetitions?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** When fulfillment sought */
  period?: PeriodOutputType;
  /** For whom is fulfillment sought? */
  recipient?: ReferenceOutputType[];
}

export const TaskRestriction: t.RecursiveType<
  t.Type<TaskRestriction, TaskRestrictionOutputType>,
  TaskRestriction,
  TaskRestrictionOutputType
> = t.recursion<TaskRestriction, TaskRestrictionOutputType>(
  "TaskRestriction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** When fulfillment sought */
          period: Period,
          /** For whom is fulfillment sought? */
          recipient: t.array(Reference),
          /** How many times to repeat */
          repetitions: primitives.R4.positiveInt
        })
      ],
      "TaskRestriction"
    )
);

/**
 * Information produced as part of task
 */
export interface TaskOutput {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for output */
  type: CodeableConcept;
  /** Result of output */
  value:
    | t.TypeOf<primitives.R4.Base64BinaryType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.CanonicalType>
    | t.TypeOf<primitives.R4.CodeType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IDType>
    | t.TypeOf<primitives.R4.InstantType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.MarkdownType>
    | t.TypeOf<primitives.R4.OIDType>
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.URLType>
    | t.TypeOf<primitives.R4.UUIDType>
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage;
}

export interface TaskOutputOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Label for output */
  type: CodeableConceptOutputType;
  /** Result of output */
  value:
    | t.OutputOf<primitives.R4.Base64BinaryType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.CanonicalType>
    | t.OutputOf<primitives.R4.CodeType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IDType>
    | t.OutputOf<primitives.R4.InstantType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.MarkdownType>
    | t.OutputOf<primitives.R4.OIDType>
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.URLType>
    | t.OutputOf<primitives.R4.UUIDType>
    | AddressOutputType
    | AgeOutputType
    | AnnotationOutputType
    | AttachmentOutputType
    | CodeableConceptOutputType
    | CodingOutputType
    | ContactPointOutputType
    | CountOutputType
    | DistanceOutputType
    | DurationOutputType
    | HumanNameOutputType
    | IdentifierOutputType
    | MoneyOutputType
    | PeriodOutputType
    | QuantityOutputType
    | RangeOutputType
    | RatioOutputType
    | ReferenceOutputType
    | SampledDataOutputType
    | SignatureOutputType
    | TimingOutputType
    | ContactDetailOutputType
    | ContributorOutputType
    | DataRequirementOutputType
    | ExpressionOutputType
    | ParameterDefinitionOutputType
    | RelatedArtifactOutputType
    | TriggerDefinitionOutputType
    | UsageContextOutputType
    | DosageOutputType;
}

export const TaskOutput: t.RecursiveType<
  t.Type<TaskOutput, TaskOutputOutputType>,
  TaskOutput,
  TaskOutputOutputType
> = t.recursion<TaskOutput, TaskOutputOutputType>("TaskOutput", () =>
  t.intersection(
    [
      t.type({
        /** Label for output */
        type: CodeableConcept,
        /** Result of output */
        value: t.union([
          primitives.R4.base64Binary,
          primitives.R4.boolean,
          primitives.R4.canonical,
          primitives.R4.code,
          primitives.R4.date,
          primitives.R4.dateTime,
          primitives.R4.decimal,
          primitives.R4.id,
          primitives.R4.instant,
          primitives.R4.integer,
          primitives.R4.markdown,
          primitives.R4.oid,
          primitives.R4.positiveInt,
          primitives.R4.string,
          primitives.R4.time,
          primitives.R4.unsignedInt,
          primitives.R4.uri,
          primitives.R4.url,
          primitives.R4.uuid,
          Address,
          Age,
          Annotation,
          Attachment,
          CodeableConcept,
          Coding,
          ContactPoint,
          Count,
          Distance,
          Duration,
          HumanName,
          Identifier,
          Money,
          Period,
          Quantity,
          Range,
          Ratio,
          Reference,
          SampledData,
          Signature,
          Timing,
          ContactDetail,
          Contributor,
          DataRequirement,
          Expression,
          ParameterDefinition,
          RelatedArtifact,
          TriggerDefinition,
          UsageContext,
          Dosage
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
    "TaskOutput"
  )
);

/**
 * Information used to perform task
 */
export interface TaskInput {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for the input */
  type: CodeableConcept;
  /** Content to use in performing the task */
  value:
    | t.TypeOf<primitives.R4.Base64BinaryType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.CanonicalType>
    | t.TypeOf<primitives.R4.CodeType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IDType>
    | t.TypeOf<primitives.R4.InstantType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.MarkdownType>
    | t.TypeOf<primitives.R4.OIDType>
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.URLType>
    | t.TypeOf<primitives.R4.UUIDType>
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage;
}

export interface TaskInputOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Label for the input */
  type: CodeableConceptOutputType;
  /** Content to use in performing the task */
  value:
    | t.OutputOf<primitives.R4.Base64BinaryType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.CanonicalType>
    | t.OutputOf<primitives.R4.CodeType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IDType>
    | t.OutputOf<primitives.R4.InstantType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.MarkdownType>
    | t.OutputOf<primitives.R4.OIDType>
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.URLType>
    | t.OutputOf<primitives.R4.UUIDType>
    | AddressOutputType
    | AgeOutputType
    | AnnotationOutputType
    | AttachmentOutputType
    | CodeableConceptOutputType
    | CodingOutputType
    | ContactPointOutputType
    | CountOutputType
    | DistanceOutputType
    | DurationOutputType
    | HumanNameOutputType
    | IdentifierOutputType
    | MoneyOutputType
    | PeriodOutputType
    | QuantityOutputType
    | RangeOutputType
    | RatioOutputType
    | ReferenceOutputType
    | SampledDataOutputType
    | SignatureOutputType
    | TimingOutputType
    | ContactDetailOutputType
    | ContributorOutputType
    | DataRequirementOutputType
    | ExpressionOutputType
    | ParameterDefinitionOutputType
    | RelatedArtifactOutputType
    | TriggerDefinitionOutputType
    | UsageContextOutputType
    | DosageOutputType;
}

export const TaskInput: t.RecursiveType<
  t.Type<TaskInput, TaskInputOutputType>,
  TaskInput,
  TaskInputOutputType
> = t.recursion<TaskInput, TaskInputOutputType>("TaskInput", () =>
  t.intersection(
    [
      t.type({
        /** Label for the input */
        type: CodeableConcept,
        /** Content to use in performing the task */
        value: t.union([
          primitives.R4.base64Binary,
          primitives.R4.boolean,
          primitives.R4.canonical,
          primitives.R4.code,
          primitives.R4.date,
          primitives.R4.dateTime,
          primitives.R4.decimal,
          primitives.R4.id,
          primitives.R4.instant,
          primitives.R4.integer,
          primitives.R4.markdown,
          primitives.R4.oid,
          primitives.R4.positiveInt,
          primitives.R4.string,
          primitives.R4.time,
          primitives.R4.unsignedInt,
          primitives.R4.uri,
          primitives.R4.url,
          primitives.R4.uuid,
          Address,
          Age,
          Annotation,
          Attachment,
          CodeableConcept,
          Coding,
          ContactPoint,
          Count,
          Distance,
          Duration,
          HumanName,
          Identifier,
          Money,
          Period,
          Quantity,
          Range,
          Ratio,
          Reference,
          SampledData,
          Signature,
          Timing,
          ContactDetail,
          Contributor,
          DataRequirement,
          Expression,
          ParameterDefinition,
          RelatedArtifact,
          TriggerDefinition,
          UsageContext,
          Dosage
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
    "TaskInput"
  )
);

/**
 * A task to be performed
 */
export interface Task {
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
  /** Task Instance Identifier */
  identifier?: Identifier[];
  /** Formal definition of task */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Formal definition of task */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>;
  /** Request fulfilled by this task */
  basedOn?: Reference[];
  /** Requisition or grouper id */
  groupIdentifier?: Identifier;
  /** Composite task */
  partOf?: Reference[];
  /** draft | requested | received | accepted | + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** E.g. "Specimen collected", "IV prepped" */
  businessStatus?: CodeableConcept;
  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: t.TypeOf<primitives.R4.CodeType>;
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** Task Type */
  code?: CodeableConcept;
  /** Human-readable explanation of task */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** What task is acting on */
  focus?: Reference;
  /** Beneficiary of the Task */
  for?: Reference;
  /** Healthcare event during which this task originated */
  encounter?: Reference;
  /** Start and end time of execution */
  executionPeriod?: Period;
  /** Task Creation Date */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Task Last Modified Date */
  lastModified?: t.TypeOf<primitives.R4.DateTimeType>;
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
  /** Constraints on fulfillment tasks */
  restriction?: TaskRestriction;
  /** Information used to perform task */
  input?: TaskInput[];
  /** Information produced as part of task */
  output?: TaskOutput[];
}

export interface TaskOutputType {
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
  /** Task Instance Identifier */
  identifier?: IdentifierOutputType[];
  /** Formal definition of task */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Formal definition of task */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>;
  /** Request fulfilled by this task */
  basedOn?: ReferenceOutputType[];
  /** Requisition or grouper id */
  groupIdentifier?: IdentifierOutputType;
  /** Composite task */
  partOf?: ReferenceOutputType[];
  /** draft | requested | received | accepted | + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** E.g. "Specimen collected", "IV prepped" */
  businessStatus?: CodeableConceptOutputType;
  /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
  intent: t.OutputOf<primitives.R4.CodeType>;
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** Task Type */
  code?: CodeableConceptOutputType;
  /** Human-readable explanation of task */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** What task is acting on */
  focus?: ReferenceOutputType;
  /** Beneficiary of the Task */
  for?: ReferenceOutputType;
  /** Healthcare event during which this task originated */
  encounter?: ReferenceOutputType;
  /** Start and end time of execution */
  executionPeriod?: PeriodOutputType;
  /** Task Creation Date */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Task Last Modified Date */
  lastModified?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is asking for task to be done */
  requester?: ReferenceOutputType;
  /** Requested performer */
  performerType?: CodeableConceptOutputType[];
  /** Responsible individual */
  owner?: ReferenceOutputType;
  /** Where task occurs */
  location?: ReferenceOutputType;
  /** Why task is needed */
  reasonCode?: CodeableConceptOutputType;
  /** Why task is needed */
  reasonReference?: ReferenceOutputType;
  /** Associated insurance coverage */
  insurance?: ReferenceOutputType[];
  /** Comments made about the task */
  note?: AnnotationOutputType[];
  /** Key events in history of the Task */
  relevantHistory?: ReferenceOutputType[];
  /** Constraints on fulfillment tasks */
  restriction?: TaskRestrictionOutputType;
  /** Information used to perform task */
  input?: TaskInputOutputType[];
  /** Information produced as part of task */
  output?: TaskOutputOutputType[];
}

export const Task: t.RecursiveType<
  t.Type<Task, TaskOutputType>,
  Task,
  TaskOutputType
> = t.recursion<Task, TaskOutputType>("Task", () =>
  t.intersection(
    [
      t.type({
        /** unknown | proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
        intent: primitives.R4.code,
        /** draft | requested | received | accepted | + */
        status: primitives.R4.code
      }),
      t.partial({
        /** Task Creation Date */
        authoredOn: primitives.R4.dateTime,
        /** Request fulfilled by this task */
        basedOn: t.array(Reference),
        /** E.g. "Specimen collected", "IV prepped" */
        businessStatus: CodeableConcept,
        /** Task Type */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Human-readable explanation of task */
        description: primitives.R4.string,
        /** Healthcare event during which this task originated */
        encounter: Reference,
        /** Start and end time of execution */
        executionPeriod: Period,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** What task is acting on */
        focus: Reference,
        /** Beneficiary of the Task */
        for: Reference,
        /** Requisition or grouper id */
        groupIdentifier: Identifier,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Task Instance Identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Information used to perform task */
        input: t.array(TaskInput),
        /** Formal definition of task */
        instantiatesCanonical: primitives.R4.canonical,
        /** Formal definition of task */
        instantiatesUri: primitives.R4.uri,
        /** Associated insurance coverage */
        insurance: t.array(Reference),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Task Last Modified Date */
        lastModified: primitives.R4.dateTime,
        /** Where task occurs */
        location: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments made about the task */
        note: t.array(Annotation),
        /** Information produced as part of task */
        output: t.array(TaskOutput),
        /** Responsible individual */
        owner: Reference,
        /** Composite task */
        partOf: t.array(Reference),
        /** Requested performer */
        performerType: t.array(CodeableConcept),
        /** routine | urgent | asap | stat */
        priority: primitives.R4.code,
        /** Why task is needed */
        reasonCode: CodeableConcept,
        /** Why task is needed */
        reasonReference: Reference,
        /** Key events in history of the Task */
        relevantHistory: t.array(Reference),
        /** Who is asking for task to be done */
        requester: Reference,
        /** Constraints on fulfillment tasks */
        restriction: TaskRestriction,
        /** Reason for current status */
        statusReason: CodeableConcept,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Task"
  )
);
