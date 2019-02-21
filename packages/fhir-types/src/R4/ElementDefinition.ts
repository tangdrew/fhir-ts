/**
 * ElementDefinition Module
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
import { Money, MoneyOutputType } from "./Money";
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
import { SampledData, SampledDataOutputType } from "./SampledData";
import { Signature, SignatureOutputType } from "./Signature";
import { Timing, TimingOutputType } from "./Timing";
import {
  TriggerDefinition,
  TriggerDefinitionOutputType
} from "./TriggerDefinition";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Data type and Profile for this element
 */
export interface ElementDefinitionType {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Data type or Resource (reference to definition) */
  code: t.TypeOf<primitives.R4.URIType>;
  /** Profiles (StructureDefinition or IG) - one must apply */
  profile?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
  targetProfile?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** contained | referenced | bundled - how aggregated */
  aggregation?: t.TypeOf<primitives.R4.CodeType>[];
  /** either | independent | specific */
  versioning?: t.TypeOf<primitives.R4.CodeType>;
}

export interface ElementDefinitionTypeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Data type or Resource (reference to definition) */
  code: t.OutputOf<primitives.R4.URIType>;
  /** Profiles (StructureDefinition or IG) - one must apply */
  profile?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
  targetProfile?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** contained | referenced | bundled - how aggregated */
  aggregation?: t.OutputOf<primitives.R4.CodeType>[];
  /** either | independent | specific */
  versioning?: t.OutputOf<primitives.R4.CodeType>;
}

export const ElementDefinitionType: t.RecursiveType<
  t.Type<ElementDefinitionType, ElementDefinitionTypeOutputType>,
  ElementDefinitionType,
  ElementDefinitionTypeOutputType
> = t.recursion<ElementDefinitionType, ElementDefinitionTypeOutputType>(
  "ElementDefinitionType",
  () =>
    t.intersection(
      [
        t.type({
          /** Data type or Resource (reference to definition) */
          code: primitives.R4.uri
        }),
        t.partial({
          /** contained | referenced | bundled - how aggregated */
          aggregation: t.array(primitives.R4.code),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Profiles (StructureDefinition or IG) - one must apply */
          profile: t.array(primitives.R4.canonical),
          /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
          targetProfile: t.array(primitives.R4.canonical),
          /** either | independent | specific */
          versioning: primitives.R4.code
        })
      ],
      "ElementDefinitionType"
    )
);

/**
 * Element values that are used to distinguish the slices
 */
export interface ElementDefinitionSlicingDiscriminator {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** value | exists | pattern | type | profile */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Path to element value */
  path: t.TypeOf<primitives.R4.StringType>;
}

export interface ElementDefinitionSlicingDiscriminatorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** value | exists | pattern | type | profile */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Path to element value */
  path: t.OutputOf<primitives.R4.StringType>;
}

export const ElementDefinitionSlicingDiscriminator: t.RecursiveType<
  t.Type<
    ElementDefinitionSlicingDiscriminator,
    ElementDefinitionSlicingDiscriminatorOutputType
  >,
  ElementDefinitionSlicingDiscriminator,
  ElementDefinitionSlicingDiscriminatorOutputType
> = t.recursion<
  ElementDefinitionSlicingDiscriminator,
  ElementDefinitionSlicingDiscriminatorOutputType
>("ElementDefinitionSlicingDiscriminator", () =>
  t.intersection(
    [
      t.type({
        /** Path to element value */
        path: primitives.R4.string,
        /** value | exists | pattern | type | profile */
        type: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string
      })
    ],
    "ElementDefinitionSlicingDiscriminator"
  )
);

/**
 * This element is sliced - slices follow
 */
export interface ElementDefinitionSlicing {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Element values that are used to distinguish the slices */
  discriminator?: ElementDefinitionSlicingDiscriminator[];
  /** Text description of how slicing works (or not) */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** If elements must be in same order as slices */
  ordered?: t.TypeOf<primitives.R4.BooleanType>;
  /** closed | open | openAtEnd */
  rules: t.TypeOf<primitives.R4.CodeType>;
}

export interface ElementDefinitionSlicingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Element values that are used to distinguish the slices */
  discriminator?: ElementDefinitionSlicingDiscriminatorOutputType[];
  /** Text description of how slicing works (or not) */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** If elements must be in same order as slices */
  ordered?: t.OutputOf<primitives.R4.BooleanType>;
  /** closed | open | openAtEnd */
  rules: t.OutputOf<primitives.R4.CodeType>;
}

export const ElementDefinitionSlicing: t.RecursiveType<
  t.Type<ElementDefinitionSlicing, ElementDefinitionSlicingOutputType>,
  ElementDefinitionSlicing,
  ElementDefinitionSlicingOutputType
> = t.recursion<ElementDefinitionSlicing, ElementDefinitionSlicingOutputType>(
  "ElementDefinitionSlicing",
  () =>
    t.intersection(
      [
        t.type({
          /** closed | open | openAtEnd */
          rules: primitives.R4.code
        }),
        t.partial({
          /** Text description of how slicing works (or not) */
          description: primitives.R4.string,
          /** Element values that are used to distinguish the slices */
          discriminator: t.array(ElementDefinitionSlicingDiscriminator),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** If elements must be in same order as slices */
          ordered: primitives.R4.boolean
        })
      ],
      "ElementDefinitionSlicing"
    )
);

/**
 * Map element to another set of definitions
 */
export interface ElementDefinitionMapping {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Reference to mapping declaration */
  identity: t.TypeOf<primitives.R4.IDType>;
  /** Computable language of mapping */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Details of the mapping */
  map: t.TypeOf<primitives.R4.StringType>;
  /** Comments about the mapping or its use */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface ElementDefinitionMappingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Reference to mapping declaration */
  identity: t.OutputOf<primitives.R4.IDType>;
  /** Computable language of mapping */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Details of the mapping */
  map: t.OutputOf<primitives.R4.StringType>;
  /** Comments about the mapping or its use */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const ElementDefinitionMapping: t.RecursiveType<
  t.Type<ElementDefinitionMapping, ElementDefinitionMappingOutputType>,
  ElementDefinitionMapping,
  ElementDefinitionMappingOutputType
> = t.recursion<ElementDefinitionMapping, ElementDefinitionMappingOutputType>(
  "ElementDefinitionMapping",
  () =>
    t.intersection(
      [
        t.type({
          /** Reference to mapping declaration */
          identity: primitives.R4.id,
          /** Details of the mapping */
          map: primitives.R4.string
        }),
        t.partial({
          /** Comments about the mapping or its use */
          comment: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Computable language of mapping */
          language: primitives.R4.code
        })
      ],
      "ElementDefinitionMapping"
    )
);

/**
 * Example value (as defined for type)
 */
export interface ElementDefinitionExample {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Describes the purpose of this example */
  label: t.TypeOf<primitives.R4.StringType>;
  /** Value of Example (one of allowed types) */
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

export interface ElementDefinitionExampleOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Describes the purpose of this example */
  label: t.OutputOf<primitives.R4.StringType>;
  /** Value of Example (one of allowed types) */
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

export const ElementDefinitionExample: t.RecursiveType<
  t.Type<ElementDefinitionExample, ElementDefinitionExampleOutputType>,
  ElementDefinitionExample,
  ElementDefinitionExampleOutputType
> = t.recursion<ElementDefinitionExample, ElementDefinitionExampleOutputType>(
  "ElementDefinitionExample",
  () =>
    t.intersection(
      [
        t.type({
          /** Describes the purpose of this example */
          label: primitives.R4.string,
          /** Value of Example (one of allowed types) */
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
          id: primitives.R4.string
        })
      ],
      "ElementDefinitionExample"
    )
);

/**
 * Condition that must evaluate to true
 */
export interface ElementDefinitionConstraint {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Target of 'condition' reference above */
  key: t.TypeOf<primitives.R4.IDType>;
  /** Why this constraint is necessary or appropriate */
  requirements?: t.TypeOf<primitives.R4.StringType>;
  /** error | warning */
  severity: t.TypeOf<primitives.R4.CodeType>;
  /** Human description of constraint */
  human: t.TypeOf<primitives.R4.StringType>;
  /** FHIRPath expression of constraint */
  expression?: t.TypeOf<primitives.R4.StringType>;
  /** XPath expression of constraint */
  xpath?: t.TypeOf<primitives.R4.StringType>;
  /** Reference to original source of constraint */
  source?: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface ElementDefinitionConstraintOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Target of 'condition' reference above */
  key: t.OutputOf<primitives.R4.IDType>;
  /** Why this constraint is necessary or appropriate */
  requirements?: t.OutputOf<primitives.R4.StringType>;
  /** error | warning */
  severity: t.OutputOf<primitives.R4.CodeType>;
  /** Human description of constraint */
  human: t.OutputOf<primitives.R4.StringType>;
  /** FHIRPath expression of constraint */
  expression?: t.OutputOf<primitives.R4.StringType>;
  /** XPath expression of constraint */
  xpath?: t.OutputOf<primitives.R4.StringType>;
  /** Reference to original source of constraint */
  source?: t.OutputOf<primitives.R4.CanonicalType>;
}

export const ElementDefinitionConstraint: t.RecursiveType<
  t.Type<ElementDefinitionConstraint, ElementDefinitionConstraintOutputType>,
  ElementDefinitionConstraint,
  ElementDefinitionConstraintOutputType
> = t.recursion<
  ElementDefinitionConstraint,
  ElementDefinitionConstraintOutputType
>("ElementDefinitionConstraint", () =>
  t.intersection(
    [
      t.type({
        /** Human description of constraint */
        human: primitives.R4.string,
        /** Target of 'condition' reference above */
        key: primitives.R4.id,
        /** error | warning */
        severity: primitives.R4.code
      }),
      t.partial({
        /** FHIRPath expression of constraint */
        expression: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Why this constraint is necessary or appropriate */
        requirements: primitives.R4.string,
        /** Reference to original source of constraint */
        source: primitives.R4.canonical,
        /** XPath expression of constraint */
        xpath: primitives.R4.string
      })
    ],
    "ElementDefinitionConstraint"
  )
);

/**
 * ValueSet details if this is coded
 */
export interface ElementDefinitionBinding {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** required | extensible | preferred | example */
  strength: t.TypeOf<primitives.R4.CodeType>;
  /** Human explanation of the value set */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Source of value set */
  valueSet?: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface ElementDefinitionBindingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** required | extensible | preferred | example */
  strength: t.OutputOf<primitives.R4.CodeType>;
  /** Human explanation of the value set */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Source of value set */
  valueSet?: t.OutputOf<primitives.R4.CanonicalType>;
}

export const ElementDefinitionBinding: t.RecursiveType<
  t.Type<ElementDefinitionBinding, ElementDefinitionBindingOutputType>,
  ElementDefinitionBinding,
  ElementDefinitionBindingOutputType
> = t.recursion<ElementDefinitionBinding, ElementDefinitionBindingOutputType>(
  "ElementDefinitionBinding",
  () =>
    t.intersection(
      [
        t.type({
          /** required | extensible | preferred | example */
          strength: primitives.R4.code
        }),
        t.partial({
          /** Human explanation of the value set */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Source of value set */
          valueSet: primitives.R4.canonical
        })
      ],
      "ElementDefinitionBinding"
    )
);

/**
 * Base definition information for tools
 */
export interface ElementDefinitionBase {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Path that identifies the base element */
  path: t.TypeOf<primitives.R4.StringType>;
  /** Min cardinality of the base element */
  min: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Max cardinality of the base element */
  max: t.TypeOf<primitives.R4.StringType>;
}

export interface ElementDefinitionBaseOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Path that identifies the base element */
  path: t.OutputOf<primitives.R4.StringType>;
  /** Min cardinality of the base element */
  min: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Max cardinality of the base element */
  max: t.OutputOf<primitives.R4.StringType>;
}

export const ElementDefinitionBase: t.RecursiveType<
  t.Type<ElementDefinitionBase, ElementDefinitionBaseOutputType>,
  ElementDefinitionBase,
  ElementDefinitionBaseOutputType
> = t.recursion<ElementDefinitionBase, ElementDefinitionBaseOutputType>(
  "ElementDefinitionBase",
  () =>
    t.intersection(
      [
        t.type({
          /** Max cardinality of the base element */
          max: primitives.R4.string,
          /** Min cardinality of the base element */
          min: primitives.R4.unsignedInt,
          /** Path that identifies the base element */
          path: primitives.R4.string
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string
        })
      ],
      "ElementDefinitionBase"
    )
);

/**
 * Definition of an element in a resource or extension
 */
export interface ElementDefinition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Path of the element in the hierarchy of elements */
  path: t.TypeOf<primitives.R4.StringType>;
  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
  representation?: t.TypeOf<primitives.R4.CodeType>[];
  /** Name for this particular element (in a set of slices) */
  sliceName?: t.TypeOf<primitives.R4.StringType>;
  /** If this slice definition constrains an inherited slice definition (or not) */
  sliceIsConstraining?: t.TypeOf<primitives.R4.BooleanType>;
  /** Name for element to display with or prompt for element */
  label?: t.TypeOf<primitives.R4.StringType>;
  /** Corresponding codes in terminologies */
  code?: Coding[];
  /** This element is sliced - slices follow */
  slicing?: ElementDefinitionSlicing;
  /** Concise definition for space-constrained presentation */
  short?: t.TypeOf<primitives.R4.StringType>;
  /** Full formal definition as narrative text */
  definition?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Comments about the use of this element */
  comment?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Why this resource has been created */
  requirements?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Other names */
  alias?: t.TypeOf<primitives.R4.StringType>[];
  /** Minimum Cardinality */
  min?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Maximum Cardinality (a number or *) */
  max?: t.TypeOf<primitives.R4.StringType>;
  /** Base definition information for tools */
  base?: ElementDefinitionBase;
  /** Reference to definition of content for the element */
  contentReference?: t.TypeOf<primitives.R4.URIType>;
  /** Data type and Profile for this element */
  type?: ElementDefinitionType[];
  /** Specified value if missing from instance */
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
  /** Implicit meaning when this element is missing */
  meaningWhenMissing?: t.TypeOf<primitives.R4.MarkdownType>;
  /** What the order of the elements means */
  orderMeaning?: t.TypeOf<primitives.R4.StringType>;
  /** Value must be exactly this */
  fixed?:
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
  /** Value must have at least these property values */
  pattern?:
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
  /** Example value (as defined for type) */
  example?: ElementDefinitionExample[];
  /** Minimum Allowed Value (for some types) */
  minvalue?:
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.InstantType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | Quantity;
  /** Maximum Allowed Value (for some types) */
  maxvalue?:
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.InstantType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | Quantity;
  /** Max length for strings */
  maxLength?: t.TypeOf<primitives.R4.IntegerType>;
  /** Reference to invariant about presence */
  condition?: t.TypeOf<primitives.R4.IDType>[];
  /** Condition that must evaluate to true */
  constraint?: ElementDefinitionConstraint[];
  /** If the element must be supported */
  mustSupport?: t.TypeOf<primitives.R4.BooleanType>;
  /** If this modifies the meaning of other elements */
  isModifier?: t.TypeOf<primitives.R4.BooleanType>;
  /** Reason that this element is marked as a modifier */
  isModifierReason?: t.TypeOf<primitives.R4.StringType>;
  /** Include when _summary = true? */
  isSummary?: t.TypeOf<primitives.R4.BooleanType>;
  /** ValueSet details if this is coded */
  binding?: ElementDefinitionBinding;
  /** Map element to another set of definitions */
  mapping?: ElementDefinitionMapping[];
}

export interface ElementDefinitionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Path of the element in the hierarchy of elements */
  path: t.OutputOf<primitives.R4.StringType>;
  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
  representation?: t.OutputOf<primitives.R4.CodeType>[];
  /** Name for this particular element (in a set of slices) */
  sliceName?: t.OutputOf<primitives.R4.StringType>;
  /** If this slice definition constrains an inherited slice definition (or not) */
  sliceIsConstraining?: t.OutputOf<primitives.R4.BooleanType>;
  /** Name for element to display with or prompt for element */
  label?: t.OutputOf<primitives.R4.StringType>;
  /** Corresponding codes in terminologies */
  code?: CodingOutputType[];
  /** This element is sliced - slices follow */
  slicing?: ElementDefinitionSlicingOutputType;
  /** Concise definition for space-constrained presentation */
  short?: t.OutputOf<primitives.R4.StringType>;
  /** Full formal definition as narrative text */
  definition?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Comments about the use of this element */
  comment?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Why this resource has been created */
  requirements?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Other names */
  alias?: t.OutputOf<primitives.R4.StringType>[];
  /** Minimum Cardinality */
  min?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Maximum Cardinality (a number or *) */
  max?: t.OutputOf<primitives.R4.StringType>;
  /** Base definition information for tools */
  base?: ElementDefinitionBaseOutputType;
  /** Reference to definition of content for the element */
  contentReference?: t.OutputOf<primitives.R4.URIType>;
  /** Data type and Profile for this element */
  type?: ElementDefinitionTypeOutputType[];
  /** Specified value if missing from instance */
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
  /** Implicit meaning when this element is missing */
  meaningWhenMissing?: t.OutputOf<primitives.R4.MarkdownType>;
  /** What the order of the elements means */
  orderMeaning?: t.OutputOf<primitives.R4.StringType>;
  /** Value must be exactly this */
  fixed?:
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
  /** Value must have at least these property values */
  pattern?:
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
  /** Example value (as defined for type) */
  example?: ElementDefinitionExampleOutputType[];
  /** Minimum Allowed Value (for some types) */
  minvalue?:
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.InstantType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | QuantityOutputType;
  /** Maximum Allowed Value (for some types) */
  maxvalue?:
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.InstantType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | QuantityOutputType;
  /** Max length for strings */
  maxLength?: t.OutputOf<primitives.R4.IntegerType>;
  /** Reference to invariant about presence */
  condition?: t.OutputOf<primitives.R4.IDType>[];
  /** Condition that must evaluate to true */
  constraint?: ElementDefinitionConstraintOutputType[];
  /** If the element must be supported */
  mustSupport?: t.OutputOf<primitives.R4.BooleanType>;
  /** If this modifies the meaning of other elements */
  isModifier?: t.OutputOf<primitives.R4.BooleanType>;
  /** Reason that this element is marked as a modifier */
  isModifierReason?: t.OutputOf<primitives.R4.StringType>;
  /** Include when _summary = true? */
  isSummary?: t.OutputOf<primitives.R4.BooleanType>;
  /** ValueSet details if this is coded */
  binding?: ElementDefinitionBindingOutputType;
  /** Map element to another set of definitions */
  mapping?: ElementDefinitionMappingOutputType[];
}

export const ElementDefinition: t.RecursiveType<
  t.Type<ElementDefinition, ElementDefinitionOutputType>,
  ElementDefinition,
  ElementDefinitionOutputType
> = t.recursion<ElementDefinition, ElementDefinitionOutputType>(
  "ElementDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Path of the element in the hierarchy of elements */
          path: primitives.R4.string
        }),
        t.partial({
          /** Other names */
          alias: t.array(primitives.R4.string),
          /** Base definition information for tools */
          base: ElementDefinitionBase,
          /** ValueSet details if this is coded */
          binding: ElementDefinitionBinding,
          /** Corresponding codes in terminologies */
          code: t.array(Coding),
          /** Comments about the use of this element */
          comment: primitives.R4.markdown,
          /** Reference to invariant about presence */
          condition: t.array(primitives.R4.id),
          /** Condition that must evaluate to true */
          constraint: t.array(ElementDefinitionConstraint),
          /** Reference to definition of content for the element */
          contentReference: primitives.R4.uri,
          /** Specified value if missing from instance */
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
          /** Full formal definition as narrative text */
          definition: primitives.R4.markdown,
          /** Example value (as defined for type) */
          example: t.array(ElementDefinitionExample),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Value must be exactly this */
          fixed: t.union([
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
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** If this modifies the meaning of other elements */
          isModifier: primitives.R4.boolean,
          /** Reason that this element is marked as a modifier */
          isModifierReason: primitives.R4.string,
          /** Include when _summary = true? */
          isSummary: primitives.R4.boolean,
          /** Name for element to display with or prompt for element */
          label: primitives.R4.string,
          /** Map element to another set of definitions */
          mapping: t.array(ElementDefinitionMapping),
          /** Maximum Cardinality (a number or *) */
          max: primitives.R4.string,
          /** Max length for strings */
          maxLength: primitives.R4.integer,
          /** Maximum Allowed Value (for some types) */
          maxvalue: t.union([
            primitives.R4.date,
            primitives.R4.dateTime,
            primitives.R4.instant,
            primitives.R4.time,
            primitives.R4.decimal,
            primitives.R4.integer,
            primitives.R4.positiveInt,
            primitives.R4.unsignedInt,
            Quantity
          ]),
          /** Implicit meaning when this element is missing */
          meaningWhenMissing: primitives.R4.markdown,
          /** Minimum Cardinality */
          min: primitives.R4.unsignedInt,
          /** Minimum Allowed Value (for some types) */
          minvalue: t.union([
            primitives.R4.date,
            primitives.R4.dateTime,
            primitives.R4.instant,
            primitives.R4.time,
            primitives.R4.decimal,
            primitives.R4.integer,
            primitives.R4.positiveInt,
            primitives.R4.unsignedInt,
            Quantity
          ]),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** If the element must be supported */
          mustSupport: primitives.R4.boolean,
          /** What the order of the elements means */
          orderMeaning: primitives.R4.string,
          /** Value must have at least these property values */
          pattern: t.union([
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
          /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
          representation: t.array(primitives.R4.code),
          /** Why this resource has been created */
          requirements: primitives.R4.markdown,
          /** Concise definition for space-constrained presentation */
          short: primitives.R4.string,
          /** If this slice definition constrains an inherited slice definition (or not) */
          sliceIsConstraining: primitives.R4.boolean,
          /** Name for this particular element (in a set of slices) */
          sliceName: primitives.R4.string,
          /** This element is sliced - slices follow */
          slicing: ElementDefinitionSlicing,
          /** Data type and Profile for this element */
          type: t.array(ElementDefinitionType)
        })
      ],
      "ElementDefinition"
    )
);
