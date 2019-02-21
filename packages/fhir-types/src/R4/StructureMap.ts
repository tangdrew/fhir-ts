/**
 * StructureMap Module
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
 * Structure Definition used by this map
 */
export interface StructureMapStructure {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Canonical reference to structure definition */
  url: t.TypeOf<primitives.R4.CanonicalType>;
  /** source | queried | target | produced */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** Name for type in this map */
  alias?: t.TypeOf<primitives.R4.StringType>;
  /** Documentation on use of structure */
  documentation?: t.TypeOf<primitives.R4.StringType>;
}

export interface StructureMapStructureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Canonical reference to structure definition */
  url: t.OutputOf<primitives.R4.CanonicalType>;
  /** source | queried | target | produced */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** Name for type in this map */
  alias?: t.OutputOf<primitives.R4.StringType>;
  /** Documentation on use of structure */
  documentation?: t.OutputOf<primitives.R4.StringType>;
}

export const StructureMapStructure: t.RecursiveType<
  t.Type<StructureMapStructure, StructureMapStructureOutputType>,
  StructureMapStructure,
  StructureMapStructureOutputType
> = t.recursion<StructureMapStructure, StructureMapStructureOutputType>(
  "StructureMapStructure",
  () =>
    t.intersection(
      [
        t.type({
          /** source | queried | target | produced */
          mode: primitives.R4.code,
          /** Canonical reference to structure definition */
          url: primitives.R4.canonical
        }),
        t.partial({
          /** Name for type in this map */
          alias: primitives.R4.string,
          /** Documentation on use of structure */
          documentation: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "StructureMapStructure"
    )
);

/**
 * Parameters to the transform
 */
export interface StructureMapGroupRuleTargetParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Parameter value - variable or literal */
  value:
    | t.TypeOf<primitives.R4.IDType>
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.DecimalType>;
}

export interface StructureMapGroupRuleTargetParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Parameter value - variable or literal */
  value:
    | t.OutputOf<primitives.R4.IDType>
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.DecimalType>;
}

export const StructureMapGroupRuleTargetParameter: t.RecursiveType<
  t.Type<
    StructureMapGroupRuleTargetParameter,
    StructureMapGroupRuleTargetParameterOutputType
  >,
  StructureMapGroupRuleTargetParameter,
  StructureMapGroupRuleTargetParameterOutputType
> = t.recursion<
  StructureMapGroupRuleTargetParameter,
  StructureMapGroupRuleTargetParameterOutputType
>("StructureMapGroupRuleTargetParameter", () =>
  t.intersection(
    [
      t.type({
        /** Parameter value - variable or literal */
        value: t.union([
          primitives.R4.id,
          primitives.R4.string,
          primitives.R4.boolean,
          primitives.R4.integer,
          primitives.R4.decimal
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
    "StructureMapGroupRuleTargetParameter"
  )
);

/**
 * Content to create because of this mapping rule
 */
export interface StructureMapGroupRuleTarget {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type or variable this rule applies to */
  context?: t.TypeOf<primitives.R4.IDType>;
  /** type | variable */
  contextType?: t.TypeOf<primitives.R4.CodeType>;
  /** Field to create in the context */
  element?: t.TypeOf<primitives.R4.StringType>;
  /** Named context for field, if desired, and a field is specified */
  variable?: t.TypeOf<primitives.R4.IDType>;
  /** first | share | last | collate */
  listMode?: t.TypeOf<primitives.R4.CodeType>[];
  /** Internal rule reference for shared list items */
  listRuleId?: t.TypeOf<primitives.R4.IDType>;
  /** create | copy + */
  transform?: t.TypeOf<primitives.R4.CodeType>;
  /** Parameters to the transform */
  parameter?: StructureMapGroupRuleTargetParameter[];
}

export interface StructureMapGroupRuleTargetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type or variable this rule applies to */
  context?: t.OutputOf<primitives.R4.IDType>;
  /** type | variable */
  contextType?: t.OutputOf<primitives.R4.CodeType>;
  /** Field to create in the context */
  element?: t.OutputOf<primitives.R4.StringType>;
  /** Named context for field, if desired, and a field is specified */
  variable?: t.OutputOf<primitives.R4.IDType>;
  /** first | share | last | collate */
  listMode?: t.OutputOf<primitives.R4.CodeType>[];
  /** Internal rule reference for shared list items */
  listRuleId?: t.OutputOf<primitives.R4.IDType>;
  /** create | copy + */
  transform?: t.OutputOf<primitives.R4.CodeType>;
  /** Parameters to the transform */
  parameter?: StructureMapGroupRuleTargetParameterOutputType[];
}

export const StructureMapGroupRuleTarget: t.RecursiveType<
  t.Type<StructureMapGroupRuleTarget, StructureMapGroupRuleTargetOutputType>,
  StructureMapGroupRuleTarget,
  StructureMapGroupRuleTargetOutputType
> = t.recursion<
  StructureMapGroupRuleTarget,
  StructureMapGroupRuleTargetOutputType
>("StructureMapGroupRuleTarget", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Type or variable this rule applies to */
        context: primitives.R4.id,
        /** type | variable */
        contextType: primitives.R4.code,
        /** Field to create in the context */
        element: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** first | share | last | collate */
        listMode: t.array(primitives.R4.code),
        /** Internal rule reference for shared list items */
        listRuleId: primitives.R4.id,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Parameters to the transform */
        parameter: t.array(StructureMapGroupRuleTargetParameter),
        /** create | copy + */
        transform: primitives.R4.code,
        /** Named context for field, if desired, and a field is specified */
        variable: primitives.R4.id
      })
    ],
    "StructureMapGroupRuleTarget"
  )
);

/**
 * Source inputs to the mapping
 */
export interface StructureMapGroupRuleSource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type or variable this rule applies to */
  context: t.TypeOf<primitives.R4.IDType>;
  /** Specified minimum cardinality */
  min?: t.TypeOf<primitives.R4.IntegerType>;
  /** Specified maximum cardinality (number or *) */
  max?: t.TypeOf<primitives.R4.StringType>;
  /** Rule only applies if source has this type */
  type?: t.TypeOf<primitives.R4.StringType>;
  /** Default value if no value exists */
  defaultvalue?:
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
  /** Optional field for this source */
  element?: t.TypeOf<primitives.R4.StringType>;
  /** first | not_first | last | not_last | only_one */
  listMode?: t.TypeOf<primitives.R4.CodeType>;
  /** Named context for field, if a field is specified */
  variable?: t.TypeOf<primitives.R4.IDType>;
  /** FHIRPath expression  - must be true or the rule does not apply */
  condition?: t.TypeOf<primitives.R4.StringType>;
  /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
  check?: t.TypeOf<primitives.R4.StringType>;
  /** Message to put in log if source exists (FHIRPath) */
  logMessage?: t.TypeOf<primitives.R4.StringType>;
}

export interface StructureMapGroupRuleSourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type or variable this rule applies to */
  context: t.OutputOf<primitives.R4.IDType>;
  /** Specified minimum cardinality */
  min?: t.OutputOf<primitives.R4.IntegerType>;
  /** Specified maximum cardinality (number or *) */
  max?: t.OutputOf<primitives.R4.StringType>;
  /** Rule only applies if source has this type */
  type?: t.OutputOf<primitives.R4.StringType>;
  /** Default value if no value exists */
  defaultvalue?:
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
  /** Optional field for this source */
  element?: t.OutputOf<primitives.R4.StringType>;
  /** first | not_first | last | not_last | only_one */
  listMode?: t.OutputOf<primitives.R4.CodeType>;
  /** Named context for field, if a field is specified */
  variable?: t.OutputOf<primitives.R4.IDType>;
  /** FHIRPath expression  - must be true or the rule does not apply */
  condition?: t.OutputOf<primitives.R4.StringType>;
  /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
  check?: t.OutputOf<primitives.R4.StringType>;
  /** Message to put in log if source exists (FHIRPath) */
  logMessage?: t.OutputOf<primitives.R4.StringType>;
}

export const StructureMapGroupRuleSource: t.RecursiveType<
  t.Type<StructureMapGroupRuleSource, StructureMapGroupRuleSourceOutputType>,
  StructureMapGroupRuleSource,
  StructureMapGroupRuleSourceOutputType
> = t.recursion<
  StructureMapGroupRuleSource,
  StructureMapGroupRuleSourceOutputType
>("StructureMapGroupRuleSource", () =>
  t.intersection(
    [
      t.type({
        /** Type or variable this rule applies to */
        context: primitives.R4.id
      }),
      t.partial({
        /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
        check: primitives.R4.string,
        /** FHIRPath expression  - must be true or the rule does not apply */
        condition: primitives.R4.string,
        /** Default value if no value exists */
        defaultvalue: t.union([
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
        ]),
        /** Optional field for this source */
        element: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** first | not_first | last | not_last | only_one */
        listMode: primitives.R4.code,
        /** Message to put in log if source exists (FHIRPath) */
        logMessage: primitives.R4.string,
        /** Specified maximum cardinality (number or *) */
        max: primitives.R4.string,
        /** Specified minimum cardinality */
        min: primitives.R4.integer,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Rule only applies if source has this type */
        type: primitives.R4.string,
        /** Named context for field, if a field is specified */
        variable: primitives.R4.id
      })
    ],
    "StructureMapGroupRuleSource"
  )
);

/**
 * Which other rules to apply in the context of this rule
 */
export interface StructureMapGroupRuleDependent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of a rule or group to apply */
  name: t.TypeOf<primitives.R4.IDType>;
  /** Variable to pass to the rule or group */
  variable: t.TypeOf<primitives.R4.StringType>[];
}

export interface StructureMapGroupRuleDependentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of a rule or group to apply */
  name: t.OutputOf<primitives.R4.IDType>;
  /** Variable to pass to the rule or group */
  variable: t.OutputOf<primitives.R4.StringType>[];
}

export const StructureMapGroupRuleDependent: t.RecursiveType<
  t.Type<
    StructureMapGroupRuleDependent,
    StructureMapGroupRuleDependentOutputType
  >,
  StructureMapGroupRuleDependent,
  StructureMapGroupRuleDependentOutputType
> = t.recursion<
  StructureMapGroupRuleDependent,
  StructureMapGroupRuleDependentOutputType
>("StructureMapGroupRuleDependent", () =>
  t.intersection(
    [
      t.type({
        /** Name of a rule or group to apply */
        name: primitives.R4.id,
        /** Variable to pass to the rule or group */
        variable: t.array(primitives.R4.string)
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
    "StructureMapGroupRuleDependent"
  )
);

/**
 * Transform Rule from source to target
 */
export interface StructureMapGroupRule {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of the rule for internal references */
  name: t.TypeOf<primitives.R4.IDType>;
  /** Source inputs to the mapping */
  source: StructureMapGroupRuleSource[];
  /** Content to create because of this mapping rule */
  target?: StructureMapGroupRuleTarget[];
  /** Rules contained in this rule */
  rule?: StructureMapGroupRule[];
  /** Which other rules to apply in the context of this rule */
  dependent?: StructureMapGroupRuleDependent[];
  /** Documentation for this instance of data */
  documentation?: t.TypeOf<primitives.R4.StringType>;
}

export interface StructureMapGroupRuleOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of the rule for internal references */
  name: t.OutputOf<primitives.R4.IDType>;
  /** Source inputs to the mapping */
  source: StructureMapGroupRuleSourceOutputType[];
  /** Content to create because of this mapping rule */
  target?: StructureMapGroupRuleTargetOutputType[];
  /** Rules contained in this rule */
  rule?: StructureMapGroupRuleOutputType[];
  /** Which other rules to apply in the context of this rule */
  dependent?: StructureMapGroupRuleDependentOutputType[];
  /** Documentation for this instance of data */
  documentation?: t.OutputOf<primitives.R4.StringType>;
}

export const StructureMapGroupRule: t.RecursiveType<
  t.Type<StructureMapGroupRule, StructureMapGroupRuleOutputType>,
  StructureMapGroupRule,
  StructureMapGroupRuleOutputType
> = t.recursion<StructureMapGroupRule, StructureMapGroupRuleOutputType>(
  "StructureMapGroupRule",
  () =>
    t.intersection(
      [
        t.type({
          /** Name of the rule for internal references */
          name: primitives.R4.id,
          /** Source inputs to the mapping */
          source: t.array(StructureMapGroupRuleSource)
        }),
        t.partial({
          /** Which other rules to apply in the context of this rule */
          dependent: t.array(StructureMapGroupRuleDependent),
          /** Documentation for this instance of data */
          documentation: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Rules contained in this rule */
          rule: t.array(StructureMapGroupRule),
          /** Content to create because of this mapping rule */
          target: t.array(StructureMapGroupRuleTarget)
        })
      ],
      "StructureMapGroupRule"
    )
);

/**
 * Named instance provided when invoking the map
 */
export interface StructureMapGroupInput {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name for this instance of data */
  name: t.TypeOf<primitives.R4.IDType>;
  /** Type for this instance of data */
  type?: t.TypeOf<primitives.R4.StringType>;
  /** source | target */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** Documentation for this instance of data */
  documentation?: t.TypeOf<primitives.R4.StringType>;
}

export interface StructureMapGroupInputOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name for this instance of data */
  name: t.OutputOf<primitives.R4.IDType>;
  /** Type for this instance of data */
  type?: t.OutputOf<primitives.R4.StringType>;
  /** source | target */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** Documentation for this instance of data */
  documentation?: t.OutputOf<primitives.R4.StringType>;
}

export const StructureMapGroupInput: t.RecursiveType<
  t.Type<StructureMapGroupInput, StructureMapGroupInputOutputType>,
  StructureMapGroupInput,
  StructureMapGroupInputOutputType
> = t.recursion<StructureMapGroupInput, StructureMapGroupInputOutputType>(
  "StructureMapGroupInput",
  () =>
    t.intersection(
      [
        t.type({
          /** source | target */
          mode: primitives.R4.code,
          /** Name for this instance of data */
          name: primitives.R4.id
        }),
        t.partial({
          /** Documentation for this instance of data */
          documentation: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Type for this instance of data */
          type: primitives.R4.string
        })
      ],
      "StructureMapGroupInput"
    )
);

/**
 * Named sections for reader convenience
 */
export interface StructureMapGroup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Human-readable label */
  name: t.TypeOf<primitives.R4.IDType>;
  /** Another group that this group adds rules to */
  extends?: t.TypeOf<primitives.R4.IDType>;
  /** none | types | type-and-types */
  typeMode: t.TypeOf<primitives.R4.CodeType>;
  /** Additional description/explanation for group */
  documentation?: t.TypeOf<primitives.R4.StringType>;
  /** Named instance provided when invoking the map */
  input: StructureMapGroupInput[];
  /** Transform Rule from source to target */
  rule: StructureMapGroupRule[];
}

export interface StructureMapGroupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Human-readable label */
  name: t.OutputOf<primitives.R4.IDType>;
  /** Another group that this group adds rules to */
  extends?: t.OutputOf<primitives.R4.IDType>;
  /** none | types | type-and-types */
  typeMode: t.OutputOf<primitives.R4.CodeType>;
  /** Additional description/explanation for group */
  documentation?: t.OutputOf<primitives.R4.StringType>;
  /** Named instance provided when invoking the map */
  input: StructureMapGroupInputOutputType[];
  /** Transform Rule from source to target */
  rule: StructureMapGroupRuleOutputType[];
}

export const StructureMapGroup: t.RecursiveType<
  t.Type<StructureMapGroup, StructureMapGroupOutputType>,
  StructureMapGroup,
  StructureMapGroupOutputType
> = t.recursion<StructureMapGroup, StructureMapGroupOutputType>(
  "StructureMapGroup",
  () =>
    t.intersection(
      [
        t.type({
          /** Named instance provided when invoking the map */
          input: t.array(StructureMapGroupInput),
          /** Human-readable label */
          name: primitives.R4.id,
          /** Transform Rule from source to target */
          rule: t.array(StructureMapGroupRule),
          /** none | types | type-and-types */
          typeMode: primitives.R4.code
        }),
        t.partial({
          /** Additional description/explanation for group */
          documentation: primitives.R4.string,
          /** Another group that this group adds rules to */
          extends: primitives.R4.id,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "StructureMapGroup"
    )
);

/**
 * A Map of relationships between 2 structures that can be used to transform data
 */
export interface StructureMap {
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
  /** Canonical identifier for this structure map, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the structure map */
  identifier?: Identifier[];
  /** Business version of the structure map */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this structure map (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Name for this structure map (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the structure map */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for structure map (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this structure map is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Structure Definition used by this map */
  structure?: StructureMapStructure[];
  /** Other maps used by this map (canonical URLs) */
  import?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Named sections for reader convenience */
  group: StructureMapGroup[];
}

export interface StructureMapOutputType {
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
  /** Canonical identifier for this structure map, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the structure map */
  identifier?: IdentifierOutputType[];
  /** Business version of the structure map */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this structure map (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Name for this structure map (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the structure map */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for structure map (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this structure map is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Structure Definition used by this map */
  structure?: StructureMapStructureOutputType[];
  /** Other maps used by this map (canonical URLs) */
  import?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Named sections for reader convenience */
  group: StructureMapGroupOutputType[];
}

export const StructureMap: t.RecursiveType<
  t.Type<StructureMap, StructureMapOutputType>,
  StructureMap,
  StructureMapOutputType
> = t.recursion<StructureMap, StructureMapOutputType>("StructureMap", () =>
  t.intersection(
    [
      t.type({
        /** Named sections for reader convenience */
        group: t.array(StructureMapGroup),
        /** Name for this structure map (computer friendly) */
        name: primitives.R4.string,
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Canonical identifier for this structure map, represented as a URI (globally unique) */
        url: primitives.R4.uri
      }),
      t.partial({
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Natural language description of the structure map */
        description: primitives.R4.markdown,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the structure map */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Other maps used by this map (canonical URLs) */
        import: t.array(primitives.R4.canonical),
        /** Intended jurisdiction for structure map (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this structure map is defined */
        purpose: primitives.R4.markdown,
        /** Structure Definition used by this map */
        structure: t.array(StructureMapStructure),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this structure map (human friendly) */
        title: primitives.R4.string,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the structure map */
        version: primitives.R4.string
      })
    ],
    "StructureMap"
  )
);
