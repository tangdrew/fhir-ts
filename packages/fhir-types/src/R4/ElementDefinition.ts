/**
 * ElementDefinition Module
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
import { Money } from "./Money";
import { ParameterDefinition } from "./ParameterDefinition";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { SampledData } from "./SampledData";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

/**
 * Definition of an element in a resource or extension
 */
export interface ElementDefinition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Path of the element in the hierarchy of elements */
  path: string;
  /** Extension of path element */
  _path?: Element;
  /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
  representation?: primitives.R4.code[];
  /** Extension of representation element */
  _representation?: Element[];
  /** Name for this particular element (in a set of slices) */
  sliceName?: string;
  /** Extension of sliceName element */
  _sliceName?: Element;
  /** If this slice definition constrains an inherited slice definition (or not) */
  sliceIsConstraining?: boolean;
  /** Extension of sliceIsConstraining element */
  _sliceIsConstraining?: Element;
  /** Name for element to display with or prompt for element */
  label?: string;
  /** Extension of label element */
  _label?: Element;
  /** Corresponding codes in terminologies */
  code?: Coding[];
  /** This element is sliced - slices follow */
  slicing?: Element;
  /** Concise definition for space-constrained presentation */
  short?: string;
  /** Extension of short element */
  _short?: Element;
  /** Full formal definition as narrative text */
  definition?: primitives.R4.markdown;
  /** Extension of definition element */
  _definition?: Element;
  /** Comments about the use of this element */
  comment?: primitives.R4.markdown;
  /** Extension of comment element */
  _comment?: Element;
  /** Why this resource has been created */
  requirements?: primitives.R4.markdown;
  /** Extension of requirements element */
  _requirements?: Element;
  /** Other names */
  alias?: string[];
  /** Extension of alias element */
  _alias?: Element[];
  /** Minimum Cardinality */
  min?: primitives.R4.unsignedInt;
  /** Extension of min element */
  _min?: Element;
  /** Maximum Cardinality (a number or *) */
  max?: string;
  /** Extension of max element */
  _max?: Element;
  /** Base definition information for tools */
  base?: Element;
  /** Reference to definition of content for the element */
  contentReference?: primitives.R4.uri;
  /** Extension of contentReference element */
  _contentReference?: Element;
  /** Data type and Profile for this element */
  type?: Element[];
  /** Specified value if missing from instance */
  defaultvalueBase64Binary?: primitives.R4.base64Binary;
  /** Extension of defaultvalueBase64Binary element */
  _defaultvalueBase64Binary?: Element;
  /** Specified value if missing from instance */
  defaultvalueBoolean?: boolean;
  /** Extension of defaultvalueBoolean element */
  _defaultvalueBoolean?: Element;
  /** Specified value if missing from instance */
  defaultvalueCanonical?: primitives.R4.canonical;
  /** Extension of defaultvalueCanonical element */
  _defaultvalueCanonical?: Element;
  /** Specified value if missing from instance */
  defaultvalueCode?: primitives.R4.code;
  /** Extension of defaultvalueCode element */
  _defaultvalueCode?: Element;
  /** Specified value if missing from instance */
  defaultvalueDate?: primitives.R4.date;
  /** Extension of defaultvalueDate element */
  _defaultvalueDate?: Element;
  /** Specified value if missing from instance */
  defaultvalueDateTime?: primitives.R4.dateTime;
  /** Extension of defaultvalueDateTime element */
  _defaultvalueDateTime?: Element;
  /** Specified value if missing from instance */
  defaultvalueDecimal?: primitives.R4.decimal;
  /** Extension of defaultvalueDecimal element */
  _defaultvalueDecimal?: Element;
  /** Specified value if missing from instance */
  defaultvalueId?: primitives.R4.id;
  /** Extension of defaultvalueId element */
  _defaultvalueId?: Element;
  /** Specified value if missing from instance */
  defaultvalueInstant?: primitives.R4.instant;
  /** Extension of defaultvalueInstant element */
  _defaultvalueInstant?: Element;
  /** Specified value if missing from instance */
  defaultvalueInteger?: primitives.R4.integer;
  /** Extension of defaultvalueInteger element */
  _defaultvalueInteger?: Element;
  /** Specified value if missing from instance */
  defaultvalueMarkdown?: primitives.R4.markdown;
  /** Extension of defaultvalueMarkdown element */
  _defaultvalueMarkdown?: Element;
  /** Specified value if missing from instance */
  defaultvalueOid?: primitives.R4.oid;
  /** Extension of defaultvalueOid element */
  _defaultvalueOid?: Element;
  /** Specified value if missing from instance */
  defaultvaluePositiveInt?: primitives.R4.positiveInt;
  /** Extension of defaultvaluePositiveInt element */
  _defaultvaluePositiveInt?: Element;
  /** Specified value if missing from instance */
  defaultvalueString?: string;
  /** Extension of defaultvalueString element */
  _defaultvalueString?: Element;
  /** Specified value if missing from instance */
  defaultvalueTime?: primitives.R4.time;
  /** Extension of defaultvalueTime element */
  _defaultvalueTime?: Element;
  /** Specified value if missing from instance */
  defaultvalueUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of defaultvalueUnsignedInt element */
  _defaultvalueUnsignedInt?: Element;
  /** Specified value if missing from instance */
  defaultvalueUri?: primitives.R4.uri;
  /** Extension of defaultvalueUri element */
  _defaultvalueUri?: Element;
  /** Specified value if missing from instance */
  defaultvalueUrl?: primitives.R4.url;
  /** Extension of defaultvalueUrl element */
  _defaultvalueUrl?: Element;
  /** Specified value if missing from instance */
  defaultvalueUuid?: primitives.R4.uuid;
  /** Extension of defaultvalueUuid element */
  _defaultvalueUuid?: Element;
  /** Specified value if missing from instance */
  defaultvalueAddress?: Address;
  /** Specified value if missing from instance */
  defaultvalueAge?: Age;
  /** Specified value if missing from instance */
  defaultvalueAnnotation?: Annotation;
  /** Specified value if missing from instance */
  defaultvalueAttachment?: Attachment;
  /** Specified value if missing from instance */
  defaultvalueCodeableConcept?: CodeableConcept;
  /** Specified value if missing from instance */
  defaultvalueCoding?: Coding;
  /** Specified value if missing from instance */
  defaultvalueContactPoint?: ContactPoint;
  /** Specified value if missing from instance */
  defaultvalueCount?: Count;
  /** Specified value if missing from instance */
  defaultvalueDistance?: Distance;
  /** Specified value if missing from instance */
  defaultvalueDuration?: Duration;
  /** Specified value if missing from instance */
  defaultvalueHumanName?: HumanName;
  /** Specified value if missing from instance */
  defaultvalueIdentifier?: Identifier;
  /** Specified value if missing from instance */
  defaultvalueMoney?: Money;
  /** Specified value if missing from instance */
  defaultvaluePeriod?: Period;
  /** Specified value if missing from instance */
  defaultvalueQuantity?: Quantity;
  /** Specified value if missing from instance */
  defaultvalueRange?: Range;
  /** Specified value if missing from instance */
  defaultvalueRatio?: Ratio;
  /** Specified value if missing from instance */
  defaultvalueReference?: Reference;
  /** Specified value if missing from instance */
  defaultvalueSampledData?: SampledData;
  /** Specified value if missing from instance */
  defaultvalueSignature?: Signature;
  /** Specified value if missing from instance */
  defaultvalueTiming?: Timing;
  /** Specified value if missing from instance */
  defaultvalueContactDetail?: ContactDetail;
  /** Specified value if missing from instance */
  defaultvalueContributor?: Contributor;
  /** Specified value if missing from instance */
  defaultvalueDataRequirement?: DataRequirement;
  /** Specified value if missing from instance */
  defaultvalueExpression?: Expression;
  /** Specified value if missing from instance */
  defaultvalueParameterDefinition?: ParameterDefinition;
  /** Specified value if missing from instance */
  defaultvalueRelatedArtifact?: RelatedArtifact;
  /** Specified value if missing from instance */
  defaultvalueTriggerDefinition?: TriggerDefinition;
  /** Specified value if missing from instance */
  defaultvalueUsageContext?: UsageContext;
  /** Specified value if missing from instance */
  defaultvalueDosage?: Dosage;
  /** Implicit meaning when this element is missing */
  meaningWhenMissing?: primitives.R4.markdown;
  /** Extension of meaningWhenMissing element */
  _meaningWhenMissing?: Element;
  /** What the order of the elements means */
  orderMeaning?: string;
  /** Extension of orderMeaning element */
  _orderMeaning?: Element;
  /** Value must be exactly this */
  fixedBase64Binary?: primitives.R4.base64Binary;
  /** Extension of fixedBase64Binary element */
  _fixedBase64Binary?: Element;
  /** Value must be exactly this */
  fixedBoolean?: boolean;
  /** Extension of fixedBoolean element */
  _fixedBoolean?: Element;
  /** Value must be exactly this */
  fixedCanonical?: primitives.R4.canonical;
  /** Extension of fixedCanonical element */
  _fixedCanonical?: Element;
  /** Value must be exactly this */
  fixedCode?: primitives.R4.code;
  /** Extension of fixedCode element */
  _fixedCode?: Element;
  /** Value must be exactly this */
  fixedDate?: primitives.R4.date;
  /** Extension of fixedDate element */
  _fixedDate?: Element;
  /** Value must be exactly this */
  fixedDateTime?: primitives.R4.dateTime;
  /** Extension of fixedDateTime element */
  _fixedDateTime?: Element;
  /** Value must be exactly this */
  fixedDecimal?: primitives.R4.decimal;
  /** Extension of fixedDecimal element */
  _fixedDecimal?: Element;
  /** Value must be exactly this */
  fixedId?: primitives.R4.id;
  /** Extension of fixedId element */
  _fixedId?: Element;
  /** Value must be exactly this */
  fixedInstant?: primitives.R4.instant;
  /** Extension of fixedInstant element */
  _fixedInstant?: Element;
  /** Value must be exactly this */
  fixedInteger?: primitives.R4.integer;
  /** Extension of fixedInteger element */
  _fixedInteger?: Element;
  /** Value must be exactly this */
  fixedMarkdown?: primitives.R4.markdown;
  /** Extension of fixedMarkdown element */
  _fixedMarkdown?: Element;
  /** Value must be exactly this */
  fixedOid?: primitives.R4.oid;
  /** Extension of fixedOid element */
  _fixedOid?: Element;
  /** Value must be exactly this */
  fixedPositiveInt?: primitives.R4.positiveInt;
  /** Extension of fixedPositiveInt element */
  _fixedPositiveInt?: Element;
  /** Value must be exactly this */
  fixedString?: string;
  /** Extension of fixedString element */
  _fixedString?: Element;
  /** Value must be exactly this */
  fixedTime?: primitives.R4.time;
  /** Extension of fixedTime element */
  _fixedTime?: Element;
  /** Value must be exactly this */
  fixedUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of fixedUnsignedInt element */
  _fixedUnsignedInt?: Element;
  /** Value must be exactly this */
  fixedUri?: primitives.R4.uri;
  /** Extension of fixedUri element */
  _fixedUri?: Element;
  /** Value must be exactly this */
  fixedUrl?: primitives.R4.url;
  /** Extension of fixedUrl element */
  _fixedUrl?: Element;
  /** Value must be exactly this */
  fixedUuid?: primitives.R4.uuid;
  /** Extension of fixedUuid element */
  _fixedUuid?: Element;
  /** Value must be exactly this */
  fixedAddress?: Address;
  /** Value must be exactly this */
  fixedAge?: Age;
  /** Value must be exactly this */
  fixedAnnotation?: Annotation;
  /** Value must be exactly this */
  fixedAttachment?: Attachment;
  /** Value must be exactly this */
  fixedCodeableConcept?: CodeableConcept;
  /** Value must be exactly this */
  fixedCoding?: Coding;
  /** Value must be exactly this */
  fixedContactPoint?: ContactPoint;
  /** Value must be exactly this */
  fixedCount?: Count;
  /** Value must be exactly this */
  fixedDistance?: Distance;
  /** Value must be exactly this */
  fixedDuration?: Duration;
  /** Value must be exactly this */
  fixedHumanName?: HumanName;
  /** Value must be exactly this */
  fixedIdentifier?: Identifier;
  /** Value must be exactly this */
  fixedMoney?: Money;
  /** Value must be exactly this */
  fixedPeriod?: Period;
  /** Value must be exactly this */
  fixedQuantity?: Quantity;
  /** Value must be exactly this */
  fixedRange?: Range;
  /** Value must be exactly this */
  fixedRatio?: Ratio;
  /** Value must be exactly this */
  fixedReference?: Reference;
  /** Value must be exactly this */
  fixedSampledData?: SampledData;
  /** Value must be exactly this */
  fixedSignature?: Signature;
  /** Value must be exactly this */
  fixedTiming?: Timing;
  /** Value must be exactly this */
  fixedContactDetail?: ContactDetail;
  /** Value must be exactly this */
  fixedContributor?: Contributor;
  /** Value must be exactly this */
  fixedDataRequirement?: DataRequirement;
  /** Value must be exactly this */
  fixedExpression?: Expression;
  /** Value must be exactly this */
  fixedParameterDefinition?: ParameterDefinition;
  /** Value must be exactly this */
  fixedRelatedArtifact?: RelatedArtifact;
  /** Value must be exactly this */
  fixedTriggerDefinition?: TriggerDefinition;
  /** Value must be exactly this */
  fixedUsageContext?: UsageContext;
  /** Value must be exactly this */
  fixedDosage?: Dosage;
  /** Value must have at least these property values */
  patternBase64Binary?: primitives.R4.base64Binary;
  /** Extension of patternBase64Binary element */
  _patternBase64Binary?: Element;
  /** Value must have at least these property values */
  patternBoolean?: boolean;
  /** Extension of patternBoolean element */
  _patternBoolean?: Element;
  /** Value must have at least these property values */
  patternCanonical?: primitives.R4.canonical;
  /** Extension of patternCanonical element */
  _patternCanonical?: Element;
  /** Value must have at least these property values */
  patternCode?: primitives.R4.code;
  /** Extension of patternCode element */
  _patternCode?: Element;
  /** Value must have at least these property values */
  patternDate?: primitives.R4.date;
  /** Extension of patternDate element */
  _patternDate?: Element;
  /** Value must have at least these property values */
  patternDateTime?: primitives.R4.dateTime;
  /** Extension of patternDateTime element */
  _patternDateTime?: Element;
  /** Value must have at least these property values */
  patternDecimal?: primitives.R4.decimal;
  /** Extension of patternDecimal element */
  _patternDecimal?: Element;
  /** Value must have at least these property values */
  patternId?: primitives.R4.id;
  /** Extension of patternId element */
  _patternId?: Element;
  /** Value must have at least these property values */
  patternInstant?: primitives.R4.instant;
  /** Extension of patternInstant element */
  _patternInstant?: Element;
  /** Value must have at least these property values */
  patternInteger?: primitives.R4.integer;
  /** Extension of patternInteger element */
  _patternInteger?: Element;
  /** Value must have at least these property values */
  patternMarkdown?: primitives.R4.markdown;
  /** Extension of patternMarkdown element */
  _patternMarkdown?: Element;
  /** Value must have at least these property values */
  patternOid?: primitives.R4.oid;
  /** Extension of patternOid element */
  _patternOid?: Element;
  /** Value must have at least these property values */
  patternPositiveInt?: primitives.R4.positiveInt;
  /** Extension of patternPositiveInt element */
  _patternPositiveInt?: Element;
  /** Value must have at least these property values */
  patternString?: string;
  /** Extension of patternString element */
  _patternString?: Element;
  /** Value must have at least these property values */
  patternTime?: primitives.R4.time;
  /** Extension of patternTime element */
  _patternTime?: Element;
  /** Value must have at least these property values */
  patternUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of patternUnsignedInt element */
  _patternUnsignedInt?: Element;
  /** Value must have at least these property values */
  patternUri?: primitives.R4.uri;
  /** Extension of patternUri element */
  _patternUri?: Element;
  /** Value must have at least these property values */
  patternUrl?: primitives.R4.url;
  /** Extension of patternUrl element */
  _patternUrl?: Element;
  /** Value must have at least these property values */
  patternUuid?: primitives.R4.uuid;
  /** Extension of patternUuid element */
  _patternUuid?: Element;
  /** Value must have at least these property values */
  patternAddress?: Address;
  /** Value must have at least these property values */
  patternAge?: Age;
  /** Value must have at least these property values */
  patternAnnotation?: Annotation;
  /** Value must have at least these property values */
  patternAttachment?: Attachment;
  /** Value must have at least these property values */
  patternCodeableConcept?: CodeableConcept;
  /** Value must have at least these property values */
  patternCoding?: Coding;
  /** Value must have at least these property values */
  patternContactPoint?: ContactPoint;
  /** Value must have at least these property values */
  patternCount?: Count;
  /** Value must have at least these property values */
  patternDistance?: Distance;
  /** Value must have at least these property values */
  patternDuration?: Duration;
  /** Value must have at least these property values */
  patternHumanName?: HumanName;
  /** Value must have at least these property values */
  patternIdentifier?: Identifier;
  /** Value must have at least these property values */
  patternMoney?: Money;
  /** Value must have at least these property values */
  patternPeriod?: Period;
  /** Value must have at least these property values */
  patternQuantity?: Quantity;
  /** Value must have at least these property values */
  patternRange?: Range;
  /** Value must have at least these property values */
  patternRatio?: Ratio;
  /** Value must have at least these property values */
  patternReference?: Reference;
  /** Value must have at least these property values */
  patternSampledData?: SampledData;
  /** Value must have at least these property values */
  patternSignature?: Signature;
  /** Value must have at least these property values */
  patternTiming?: Timing;
  /** Value must have at least these property values */
  patternContactDetail?: ContactDetail;
  /** Value must have at least these property values */
  patternContributor?: Contributor;
  /** Value must have at least these property values */
  patternDataRequirement?: DataRequirement;
  /** Value must have at least these property values */
  patternExpression?: Expression;
  /** Value must have at least these property values */
  patternParameterDefinition?: ParameterDefinition;
  /** Value must have at least these property values */
  patternRelatedArtifact?: RelatedArtifact;
  /** Value must have at least these property values */
  patternTriggerDefinition?: TriggerDefinition;
  /** Value must have at least these property values */
  patternUsageContext?: UsageContext;
  /** Value must have at least these property values */
  patternDosage?: Dosage;
  /** Example value (as defined for type) */
  example?: Element[];
  /** Minimum Allowed Value (for some types) */
  minvalueDate?: primitives.R4.date;
  /** Extension of minvalueDate element */
  _minvalueDate?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueDateTime?: primitives.R4.dateTime;
  /** Extension of minvalueDateTime element */
  _minvalueDateTime?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueInstant?: primitives.R4.instant;
  /** Extension of minvalueInstant element */
  _minvalueInstant?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueTime?: primitives.R4.time;
  /** Extension of minvalueTime element */
  _minvalueTime?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueDecimal?: primitives.R4.decimal;
  /** Extension of minvalueDecimal element */
  _minvalueDecimal?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueInteger?: primitives.R4.integer;
  /** Extension of minvalueInteger element */
  _minvalueInteger?: Element;
  /** Minimum Allowed Value (for some types) */
  minvaluePositiveInt?: primitives.R4.positiveInt;
  /** Extension of minvaluePositiveInt element */
  _minvaluePositiveInt?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of minvalueUnsignedInt element */
  _minvalueUnsignedInt?: Element;
  /** Minimum Allowed Value (for some types) */
  minvalueQuantity?: Quantity;
  /** Maximum Allowed Value (for some types) */
  maxvalueDate?: primitives.R4.date;
  /** Extension of maxvalueDate element */
  _maxvalueDate?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueDateTime?: primitives.R4.dateTime;
  /** Extension of maxvalueDateTime element */
  _maxvalueDateTime?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueInstant?: primitives.R4.instant;
  /** Extension of maxvalueInstant element */
  _maxvalueInstant?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueTime?: primitives.R4.time;
  /** Extension of maxvalueTime element */
  _maxvalueTime?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueDecimal?: primitives.R4.decimal;
  /** Extension of maxvalueDecimal element */
  _maxvalueDecimal?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueInteger?: primitives.R4.integer;
  /** Extension of maxvalueInteger element */
  _maxvalueInteger?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvaluePositiveInt?: primitives.R4.positiveInt;
  /** Extension of maxvaluePositiveInt element */
  _maxvaluePositiveInt?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of maxvalueUnsignedInt element */
  _maxvalueUnsignedInt?: Element;
  /** Maximum Allowed Value (for some types) */
  maxvalueQuantity?: Quantity;
  /** Max length for strings */
  maxLength?: primitives.R4.integer;
  /** Extension of maxLength element */
  _maxLength?: Element;
  /** Reference to invariant about presence */
  condition?: primitives.R4.id[];
  /** Extension of condition element */
  _condition?: Element[];
  /** Condition that must evaluate to true */
  constraint?: Element[];
  /** If the element must be supported */
  mustSupport?: boolean;
  /** Extension of mustSupport element */
  _mustSupport?: Element;
  /** If this modifies the meaning of other elements */
  isModifier?: boolean;
  /** Extension of isModifier element */
  _isModifier?: Element;
  /** Reason that this element is marked as a modifier */
  isModifierReason?: string;
  /** Extension of isModifierReason element */
  _isModifierReason?: Element;
  /** Include when _summary = true? */
  isSummary?: boolean;
  /** Extension of isSummary element */
  _isSummary?: Element;
  /** ValueSet details if this is coded */
  binding?: Element;
  /** Map element to another set of definitions */
  mapping?: Element[];
}
/**
 * Definition of an element in a resource or extension
 */
export const ElementDefinition: t.Type<ElementDefinition> = t.recursion<
  ElementDefinition
>("ElementDefinition", () =>
  t.intersection([
    t.type({
      /** Path of the element in the hierarchy of elements */
      path: primitives.R4.string
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
      /** Extension of path element */
      _path: Element,
      /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
      representation: t.array(primitives.R4.code),
      /** Extension of representation element */
      _representation: t.array(Element),
      /** Name for this particular element (in a set of slices) */
      sliceName: primitives.R4.string,
      /** Extension of sliceName element */
      _sliceName: Element,
      /** If this slice definition constrains an inherited slice definition (or not) */
      sliceIsConstraining: primitives.R4.boolean,
      /** Extension of sliceIsConstraining element */
      _sliceIsConstraining: Element,
      /** Name for element to display with or prompt for element */
      label: primitives.R4.string,
      /** Extension of label element */
      _label: Element,
      /** Corresponding codes in terminologies */
      code: t.array(Coding),
      /** This element is sliced - slices follow */
      slicing: Element,
      /** Concise definition for space-constrained presentation */
      short: primitives.R4.string,
      /** Extension of short element */
      _short: Element,
      /** Full formal definition as narrative text */
      definition: primitives.R4.markdown,
      /** Extension of definition element */
      _definition: Element,
      /** Comments about the use of this element */
      comment: primitives.R4.markdown,
      /** Extension of comment element */
      _comment: Element,
      /** Why this resource has been created */
      requirements: primitives.R4.markdown,
      /** Extension of requirements element */
      _requirements: Element,
      /** Other names */
      alias: t.array(primitives.R4.string),
      /** Extension of alias element */
      _alias: t.array(Element),
      /** Minimum Cardinality */
      min: primitives.R4.unsignedInt,
      /** Extension of min element */
      _min: Element,
      /** Maximum Cardinality (a number or *) */
      max: primitives.R4.string,
      /** Extension of max element */
      _max: Element,
      /** Base definition information for tools */
      base: Element,
      /** Reference to definition of content for the element */
      contentReference: primitives.R4.uri,
      /** Extension of contentReference element */
      _contentReference: Element,
      /** Data type and Profile for this element */
      type: t.array(Element),
      /** Specified value if missing from instance */
      defaultvalueBase64Binary: primitives.R4.base64Binary,
      /** Extension of defaultvalueBase64Binary element */
      _defaultvalueBase64Binary: Element,
      /** Specified value if missing from instance */
      defaultvalueBoolean: primitives.R4.boolean,
      /** Extension of defaultvalueBoolean element */
      _defaultvalueBoolean: Element,
      /** Specified value if missing from instance */
      defaultvalueCanonical: primitives.R4.canonical,
      /** Extension of defaultvalueCanonical element */
      _defaultvalueCanonical: Element,
      /** Specified value if missing from instance */
      defaultvalueCode: primitives.R4.code,
      /** Extension of defaultvalueCode element */
      _defaultvalueCode: Element,
      /** Specified value if missing from instance */
      defaultvalueDate: primitives.R4.date,
      /** Extension of defaultvalueDate element */
      _defaultvalueDate: Element,
      /** Specified value if missing from instance */
      defaultvalueDateTime: primitives.R4.dateTime,
      /** Extension of defaultvalueDateTime element */
      _defaultvalueDateTime: Element,
      /** Specified value if missing from instance */
      defaultvalueDecimal: primitives.R4.decimal,
      /** Extension of defaultvalueDecimal element */
      _defaultvalueDecimal: Element,
      /** Specified value if missing from instance */
      defaultvalueId: primitives.R4.id,
      /** Extension of defaultvalueId element */
      _defaultvalueId: Element,
      /** Specified value if missing from instance */
      defaultvalueInstant: primitives.R4.instant,
      /** Extension of defaultvalueInstant element */
      _defaultvalueInstant: Element,
      /** Specified value if missing from instance */
      defaultvalueInteger: primitives.R4.integer,
      /** Extension of defaultvalueInteger element */
      _defaultvalueInteger: Element,
      /** Specified value if missing from instance */
      defaultvalueMarkdown: primitives.R4.markdown,
      /** Extension of defaultvalueMarkdown element */
      _defaultvalueMarkdown: Element,
      /** Specified value if missing from instance */
      defaultvalueOid: primitives.R4.oid,
      /** Extension of defaultvalueOid element */
      _defaultvalueOid: Element,
      /** Specified value if missing from instance */
      defaultvaluePositiveInt: primitives.R4.positiveInt,
      /** Extension of defaultvaluePositiveInt element */
      _defaultvaluePositiveInt: Element,
      /** Specified value if missing from instance */
      defaultvalueString: primitives.R4.string,
      /** Extension of defaultvalueString element */
      _defaultvalueString: Element,
      /** Specified value if missing from instance */
      defaultvalueTime: primitives.R4.time,
      /** Extension of defaultvalueTime element */
      _defaultvalueTime: Element,
      /** Specified value if missing from instance */
      defaultvalueUnsignedInt: primitives.R4.unsignedInt,
      /** Extension of defaultvalueUnsignedInt element */
      _defaultvalueUnsignedInt: Element,
      /** Specified value if missing from instance */
      defaultvalueUri: primitives.R4.uri,
      /** Extension of defaultvalueUri element */
      _defaultvalueUri: Element,
      /** Specified value if missing from instance */
      defaultvalueUrl: primitives.R4.url,
      /** Extension of defaultvalueUrl element */
      _defaultvalueUrl: Element,
      /** Specified value if missing from instance */
      defaultvalueUuid: primitives.R4.uuid,
      /** Extension of defaultvalueUuid element */
      _defaultvalueUuid: Element,
      /** Specified value if missing from instance */
      defaultvalueAddress: Address,
      /** Specified value if missing from instance */
      defaultvalueAge: Age,
      /** Specified value if missing from instance */
      defaultvalueAnnotation: Annotation,
      /** Specified value if missing from instance */
      defaultvalueAttachment: Attachment,
      /** Specified value if missing from instance */
      defaultvalueCodeableConcept: CodeableConcept,
      /** Specified value if missing from instance */
      defaultvalueCoding: Coding,
      /** Specified value if missing from instance */
      defaultvalueContactPoint: ContactPoint,
      /** Specified value if missing from instance */
      defaultvalueCount: Count,
      /** Specified value if missing from instance */
      defaultvalueDistance: Distance,
      /** Specified value if missing from instance */
      defaultvalueDuration: Duration,
      /** Specified value if missing from instance */
      defaultvalueHumanName: HumanName,
      /** Specified value if missing from instance */
      defaultvalueIdentifier: Identifier,
      /** Specified value if missing from instance */
      defaultvalueMoney: Money,
      /** Specified value if missing from instance */
      defaultvaluePeriod: Period,
      /** Specified value if missing from instance */
      defaultvalueQuantity: Quantity,
      /** Specified value if missing from instance */
      defaultvalueRange: Range,
      /** Specified value if missing from instance */
      defaultvalueRatio: Ratio,
      /** Specified value if missing from instance */
      defaultvalueReference: Reference,
      /** Specified value if missing from instance */
      defaultvalueSampledData: SampledData,
      /** Specified value if missing from instance */
      defaultvalueSignature: Signature,
      /** Specified value if missing from instance */
      defaultvalueTiming: Timing,
      /** Specified value if missing from instance */
      defaultvalueContactDetail: ContactDetail,
      /** Specified value if missing from instance */
      defaultvalueContributor: Contributor,
      /** Specified value if missing from instance */
      defaultvalueDataRequirement: DataRequirement,
      /** Specified value if missing from instance */
      defaultvalueExpression: Expression,
      /** Specified value if missing from instance */
      defaultvalueParameterDefinition: ParameterDefinition,
      /** Specified value if missing from instance */
      defaultvalueRelatedArtifact: RelatedArtifact,
      /** Specified value if missing from instance */
      defaultvalueTriggerDefinition: TriggerDefinition,
      /** Specified value if missing from instance */
      defaultvalueUsageContext: UsageContext,
      /** Specified value if missing from instance */
      defaultvalueDosage: Dosage,
      /** Implicit meaning when this element is missing */
      meaningWhenMissing: primitives.R4.markdown,
      /** Extension of meaningWhenMissing element */
      _meaningWhenMissing: Element,
      /** What the order of the elements means */
      orderMeaning: primitives.R4.string,
      /** Extension of orderMeaning element */
      _orderMeaning: Element,
      /** Value must be exactly this */
      fixedBase64Binary: primitives.R4.base64Binary,
      /** Extension of fixedBase64Binary element */
      _fixedBase64Binary: Element,
      /** Value must be exactly this */
      fixedBoolean: primitives.R4.boolean,
      /** Extension of fixedBoolean element */
      _fixedBoolean: Element,
      /** Value must be exactly this */
      fixedCanonical: primitives.R4.canonical,
      /** Extension of fixedCanonical element */
      _fixedCanonical: Element,
      /** Value must be exactly this */
      fixedCode: primitives.R4.code,
      /** Extension of fixedCode element */
      _fixedCode: Element,
      /** Value must be exactly this */
      fixedDate: primitives.R4.date,
      /** Extension of fixedDate element */
      _fixedDate: Element,
      /** Value must be exactly this */
      fixedDateTime: primitives.R4.dateTime,
      /** Extension of fixedDateTime element */
      _fixedDateTime: Element,
      /** Value must be exactly this */
      fixedDecimal: primitives.R4.decimal,
      /** Extension of fixedDecimal element */
      _fixedDecimal: Element,
      /** Value must be exactly this */
      fixedId: primitives.R4.id,
      /** Extension of fixedId element */
      _fixedId: Element,
      /** Value must be exactly this */
      fixedInstant: primitives.R4.instant,
      /** Extension of fixedInstant element */
      _fixedInstant: Element,
      /** Value must be exactly this */
      fixedInteger: primitives.R4.integer,
      /** Extension of fixedInteger element */
      _fixedInteger: Element,
      /** Value must be exactly this */
      fixedMarkdown: primitives.R4.markdown,
      /** Extension of fixedMarkdown element */
      _fixedMarkdown: Element,
      /** Value must be exactly this */
      fixedOid: primitives.R4.oid,
      /** Extension of fixedOid element */
      _fixedOid: Element,
      /** Value must be exactly this */
      fixedPositiveInt: primitives.R4.positiveInt,
      /** Extension of fixedPositiveInt element */
      _fixedPositiveInt: Element,
      /** Value must be exactly this */
      fixedString: primitives.R4.string,
      /** Extension of fixedString element */
      _fixedString: Element,
      /** Value must be exactly this */
      fixedTime: primitives.R4.time,
      /** Extension of fixedTime element */
      _fixedTime: Element,
      /** Value must be exactly this */
      fixedUnsignedInt: primitives.R4.unsignedInt,
      /** Extension of fixedUnsignedInt element */
      _fixedUnsignedInt: Element,
      /** Value must be exactly this */
      fixedUri: primitives.R4.uri,
      /** Extension of fixedUri element */
      _fixedUri: Element,
      /** Value must be exactly this */
      fixedUrl: primitives.R4.url,
      /** Extension of fixedUrl element */
      _fixedUrl: Element,
      /** Value must be exactly this */
      fixedUuid: primitives.R4.uuid,
      /** Extension of fixedUuid element */
      _fixedUuid: Element,
      /** Value must be exactly this */
      fixedAddress: Address,
      /** Value must be exactly this */
      fixedAge: Age,
      /** Value must be exactly this */
      fixedAnnotation: Annotation,
      /** Value must be exactly this */
      fixedAttachment: Attachment,
      /** Value must be exactly this */
      fixedCodeableConcept: CodeableConcept,
      /** Value must be exactly this */
      fixedCoding: Coding,
      /** Value must be exactly this */
      fixedContactPoint: ContactPoint,
      /** Value must be exactly this */
      fixedCount: Count,
      /** Value must be exactly this */
      fixedDistance: Distance,
      /** Value must be exactly this */
      fixedDuration: Duration,
      /** Value must be exactly this */
      fixedHumanName: HumanName,
      /** Value must be exactly this */
      fixedIdentifier: Identifier,
      /** Value must be exactly this */
      fixedMoney: Money,
      /** Value must be exactly this */
      fixedPeriod: Period,
      /** Value must be exactly this */
      fixedQuantity: Quantity,
      /** Value must be exactly this */
      fixedRange: Range,
      /** Value must be exactly this */
      fixedRatio: Ratio,
      /** Value must be exactly this */
      fixedReference: Reference,
      /** Value must be exactly this */
      fixedSampledData: SampledData,
      /** Value must be exactly this */
      fixedSignature: Signature,
      /** Value must be exactly this */
      fixedTiming: Timing,
      /** Value must be exactly this */
      fixedContactDetail: ContactDetail,
      /** Value must be exactly this */
      fixedContributor: Contributor,
      /** Value must be exactly this */
      fixedDataRequirement: DataRequirement,
      /** Value must be exactly this */
      fixedExpression: Expression,
      /** Value must be exactly this */
      fixedParameterDefinition: ParameterDefinition,
      /** Value must be exactly this */
      fixedRelatedArtifact: RelatedArtifact,
      /** Value must be exactly this */
      fixedTriggerDefinition: TriggerDefinition,
      /** Value must be exactly this */
      fixedUsageContext: UsageContext,
      /** Value must be exactly this */
      fixedDosage: Dosage,
      /** Value must have at least these property values */
      patternBase64Binary: primitives.R4.base64Binary,
      /** Extension of patternBase64Binary element */
      _patternBase64Binary: Element,
      /** Value must have at least these property values */
      patternBoolean: primitives.R4.boolean,
      /** Extension of patternBoolean element */
      _patternBoolean: Element,
      /** Value must have at least these property values */
      patternCanonical: primitives.R4.canonical,
      /** Extension of patternCanonical element */
      _patternCanonical: Element,
      /** Value must have at least these property values */
      patternCode: primitives.R4.code,
      /** Extension of patternCode element */
      _patternCode: Element,
      /** Value must have at least these property values */
      patternDate: primitives.R4.date,
      /** Extension of patternDate element */
      _patternDate: Element,
      /** Value must have at least these property values */
      patternDateTime: primitives.R4.dateTime,
      /** Extension of patternDateTime element */
      _patternDateTime: Element,
      /** Value must have at least these property values */
      patternDecimal: primitives.R4.decimal,
      /** Extension of patternDecimal element */
      _patternDecimal: Element,
      /** Value must have at least these property values */
      patternId: primitives.R4.id,
      /** Extension of patternId element */
      _patternId: Element,
      /** Value must have at least these property values */
      patternInstant: primitives.R4.instant,
      /** Extension of patternInstant element */
      _patternInstant: Element,
      /** Value must have at least these property values */
      patternInteger: primitives.R4.integer,
      /** Extension of patternInteger element */
      _patternInteger: Element,
      /** Value must have at least these property values */
      patternMarkdown: primitives.R4.markdown,
      /** Extension of patternMarkdown element */
      _patternMarkdown: Element,
      /** Value must have at least these property values */
      patternOid: primitives.R4.oid,
      /** Extension of patternOid element */
      _patternOid: Element,
      /** Value must have at least these property values */
      patternPositiveInt: primitives.R4.positiveInt,
      /** Extension of patternPositiveInt element */
      _patternPositiveInt: Element,
      /** Value must have at least these property values */
      patternString: primitives.R4.string,
      /** Extension of patternString element */
      _patternString: Element,
      /** Value must have at least these property values */
      patternTime: primitives.R4.time,
      /** Extension of patternTime element */
      _patternTime: Element,
      /** Value must have at least these property values */
      patternUnsignedInt: primitives.R4.unsignedInt,
      /** Extension of patternUnsignedInt element */
      _patternUnsignedInt: Element,
      /** Value must have at least these property values */
      patternUri: primitives.R4.uri,
      /** Extension of patternUri element */
      _patternUri: Element,
      /** Value must have at least these property values */
      patternUrl: primitives.R4.url,
      /** Extension of patternUrl element */
      _patternUrl: Element,
      /** Value must have at least these property values */
      patternUuid: primitives.R4.uuid,
      /** Extension of patternUuid element */
      _patternUuid: Element,
      /** Value must have at least these property values */
      patternAddress: Address,
      /** Value must have at least these property values */
      patternAge: Age,
      /** Value must have at least these property values */
      patternAnnotation: Annotation,
      /** Value must have at least these property values */
      patternAttachment: Attachment,
      /** Value must have at least these property values */
      patternCodeableConcept: CodeableConcept,
      /** Value must have at least these property values */
      patternCoding: Coding,
      /** Value must have at least these property values */
      patternContactPoint: ContactPoint,
      /** Value must have at least these property values */
      patternCount: Count,
      /** Value must have at least these property values */
      patternDistance: Distance,
      /** Value must have at least these property values */
      patternDuration: Duration,
      /** Value must have at least these property values */
      patternHumanName: HumanName,
      /** Value must have at least these property values */
      patternIdentifier: Identifier,
      /** Value must have at least these property values */
      patternMoney: Money,
      /** Value must have at least these property values */
      patternPeriod: Period,
      /** Value must have at least these property values */
      patternQuantity: Quantity,
      /** Value must have at least these property values */
      patternRange: Range,
      /** Value must have at least these property values */
      patternRatio: Ratio,
      /** Value must have at least these property values */
      patternReference: Reference,
      /** Value must have at least these property values */
      patternSampledData: SampledData,
      /** Value must have at least these property values */
      patternSignature: Signature,
      /** Value must have at least these property values */
      patternTiming: Timing,
      /** Value must have at least these property values */
      patternContactDetail: ContactDetail,
      /** Value must have at least these property values */
      patternContributor: Contributor,
      /** Value must have at least these property values */
      patternDataRequirement: DataRequirement,
      /** Value must have at least these property values */
      patternExpression: Expression,
      /** Value must have at least these property values */
      patternParameterDefinition: ParameterDefinition,
      /** Value must have at least these property values */
      patternRelatedArtifact: RelatedArtifact,
      /** Value must have at least these property values */
      patternTriggerDefinition: TriggerDefinition,
      /** Value must have at least these property values */
      patternUsageContext: UsageContext,
      /** Value must have at least these property values */
      patternDosage: Dosage,
      /** Example value (as defined for type) */
      example: t.array(Element),
      /** Minimum Allowed Value (for some types) */
      minvalueDate: primitives.R4.date,
      /** Extension of minvalueDate element */
      _minvalueDate: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueDateTime: primitives.R4.dateTime,
      /** Extension of minvalueDateTime element */
      _minvalueDateTime: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueInstant: primitives.R4.instant,
      /** Extension of minvalueInstant element */
      _minvalueInstant: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueTime: primitives.R4.time,
      /** Extension of minvalueTime element */
      _minvalueTime: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueDecimal: primitives.R4.decimal,
      /** Extension of minvalueDecimal element */
      _minvalueDecimal: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueInteger: primitives.R4.integer,
      /** Extension of minvalueInteger element */
      _minvalueInteger: Element,
      /** Minimum Allowed Value (for some types) */
      minvaluePositiveInt: primitives.R4.positiveInt,
      /** Extension of minvaluePositiveInt element */
      _minvaluePositiveInt: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueUnsignedInt: primitives.R4.unsignedInt,
      /** Extension of minvalueUnsignedInt element */
      _minvalueUnsignedInt: Element,
      /** Minimum Allowed Value (for some types) */
      minvalueQuantity: Quantity,
      /** Maximum Allowed Value (for some types) */
      maxvalueDate: primitives.R4.date,
      /** Extension of maxvalueDate element */
      _maxvalueDate: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueDateTime: primitives.R4.dateTime,
      /** Extension of maxvalueDateTime element */
      _maxvalueDateTime: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueInstant: primitives.R4.instant,
      /** Extension of maxvalueInstant element */
      _maxvalueInstant: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueTime: primitives.R4.time,
      /** Extension of maxvalueTime element */
      _maxvalueTime: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueDecimal: primitives.R4.decimal,
      /** Extension of maxvalueDecimal element */
      _maxvalueDecimal: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueInteger: primitives.R4.integer,
      /** Extension of maxvalueInteger element */
      _maxvalueInteger: Element,
      /** Maximum Allowed Value (for some types) */
      maxvaluePositiveInt: primitives.R4.positiveInt,
      /** Extension of maxvaluePositiveInt element */
      _maxvaluePositiveInt: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueUnsignedInt: primitives.R4.unsignedInt,
      /** Extension of maxvalueUnsignedInt element */
      _maxvalueUnsignedInt: Element,
      /** Maximum Allowed Value (for some types) */
      maxvalueQuantity: Quantity,
      /** Max length for strings */
      maxLength: primitives.R4.integer,
      /** Extension of maxLength element */
      _maxLength: Element,
      /** Reference to invariant about presence */
      condition: t.array(primitives.R4.id),
      /** Extension of condition element */
      _condition: t.array(Element),
      /** Condition that must evaluate to true */
      constraint: t.array(Element),
      /** If the element must be supported */
      mustSupport: primitives.R4.boolean,
      /** Extension of mustSupport element */
      _mustSupport: Element,
      /** If this modifies the meaning of other elements */
      isModifier: primitives.R4.boolean,
      /** Extension of isModifier element */
      _isModifier: Element,
      /** Reason that this element is marked as a modifier */
      isModifierReason: primitives.R4.string,
      /** Extension of isModifierReason element */
      _isModifierReason: Element,
      /** Include when _summary = true? */
      isSummary: primitives.R4.boolean,
      /** Extension of isSummary element */
      _isSummary: Element,
      /** ValueSet details if this is coded */
      binding: Element,
      /** Map element to another set of definitions */
      mapping: t.array(Element)
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionSlicing {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Element values that are used to distinguish the slices */
  discriminator?: Element[];
  /** Text description of how slicing works (or not) */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** If elements must be in same order as slices */
  ordered?: boolean;
  /** Extension of ordered element */
  _ordered?: Element;
  /** closed | open | openAtEnd */
  rules: primitives.R4.code;
  /** Extension of rules element */
  _rules?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionSlicing: t.Type<
  ElementDefinitionSlicing
> = t.recursion<ElementDefinitionSlicing>("ElementDefinitionSlicing", () =>
  t.intersection([
    t.type({
      /** closed | open | openAtEnd */
      rules: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Element values that are used to distinguish the slices */
      discriminator: t.array(Element),
      /** Text description of how slicing works (or not) */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** If elements must be in same order as slices */
      ordered: primitives.R4.boolean,
      /** Extension of ordered element */
      _ordered: Element,
      /** Extension of rules element */
      _rules: Element
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionSlicingDiscriminator {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** value | exists | pattern | type | profile */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Path to element value */
  path: string;
  /** Extension of path element */
  _path?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionSlicingDiscriminator: t.Type<
  ElementDefinitionSlicingDiscriminator
> = t.recursion<ElementDefinitionSlicingDiscriminator>(
  "ElementDefinitionSlicingDiscriminator",
  () =>
    t.intersection([
      t.type({
        /** value | exists | pattern | type | profile */
        type: primitives.R4.code,
        /** Path to element value */
        path: primitives.R4.string
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of type element */
        _type: Element,
        /** Extension of path element */
        _path: Element
      })
    ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionBase {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Path that identifies the base element */
  path: string;
  /** Extension of path element */
  _path?: Element;
  /** Min cardinality of the base element */
  min: primitives.R4.unsignedInt;
  /** Extension of min element */
  _min?: Element;
  /** Max cardinality of the base element */
  max: string;
  /** Extension of max element */
  _max?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionBase: t.Type<ElementDefinitionBase> = t.recursion<
  ElementDefinitionBase
>("ElementDefinitionBase", () =>
  t.intersection([
    t.type({
      /** Path that identifies the base element */
      path: primitives.R4.string,
      /** Min cardinality of the base element */
      min: primitives.R4.unsignedInt,
      /** Max cardinality of the base element */
      max: primitives.R4.string
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of path element */
      _path: Element,
      /** Extension of min element */
      _min: Element,
      /** Extension of max element */
      _max: Element
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionType {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Data type or Resource (reference to definition) */
  code: primitives.R4.uri;
  /** Extension of code element */
  _code?: Element;
  /** Profiles (StructureDefinition or IG) - one must apply */
  profile?: primitives.R4.canonical[];
  /** Extension of profile element */
  _profile?: Element[];
  /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
  targetProfile?: primitives.R4.canonical[];
  /** Extension of targetProfile element */
  _targetProfile?: Element[];
  /** contained | referenced | bundled - how aggregated */
  aggregation?: primitives.R4.code[];
  /** Extension of aggregation element */
  _aggregation?: Element[];
  /** either | independent | specific */
  versioning?: primitives.R4.code;
  /** Extension of versioning element */
  _versioning?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionType: t.Type<ElementDefinitionType> = t.recursion<
  ElementDefinitionType
>("ElementDefinitionType", () =>
  t.intersection([
    t.type({
      /** Data type or Resource (reference to definition) */
      code: primitives.R4.uri
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of code element */
      _code: Element,
      /** Profiles (StructureDefinition or IG) - one must apply */
      profile: t.array(primitives.R4.canonical),
      /** Extension of profile element */
      _profile: t.array(Element),
      /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
      targetProfile: t.array(primitives.R4.canonical),
      /** Extension of targetProfile element */
      _targetProfile: t.array(Element),
      /** contained | referenced | bundled - how aggregated */
      aggregation: t.array(primitives.R4.code),
      /** Extension of aggregation element */
      _aggregation: t.array(Element),
      /** either | independent | specific */
      versioning: primitives.R4.code,
      /** Extension of versioning element */
      _versioning: Element
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionExample {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Describes the purpose of this example */
  label: string;
  /** Extension of label element */
  _label?: Element;
  /** Value of Example (one of allowed types) */
  valueBase64Binary: primitives.R4.base64Binary;
  /** Extension of valueBase64Binary element */
  _valueBase64Binary?: Element;
  /** Value of Example (one of allowed types) */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Value of Example (one of allowed types) */
  valueCanonical: primitives.R4.canonical;
  /** Extension of valueCanonical element */
  _valueCanonical?: Element;
  /** Value of Example (one of allowed types) */
  valueCode: primitives.R4.code;
  /** Extension of valueCode element */
  _valueCode?: Element;
  /** Value of Example (one of allowed types) */
  valueDate: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Value of Example (one of allowed types) */
  valueDateTime: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Value of Example (one of allowed types) */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Value of Example (one of allowed types) */
  valueId: primitives.R4.id;
  /** Extension of valueId element */
  _valueId?: Element;
  /** Value of Example (one of allowed types) */
  valueInstant: primitives.R4.instant;
  /** Extension of valueInstant element */
  _valueInstant?: Element;
  /** Value of Example (one of allowed types) */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Value of Example (one of allowed types) */
  valueMarkdown: primitives.R4.markdown;
  /** Extension of valueMarkdown element */
  _valueMarkdown?: Element;
  /** Value of Example (one of allowed types) */
  valueOid: primitives.R4.oid;
  /** Extension of valueOid element */
  _valueOid?: Element;
  /** Value of Example (one of allowed types) */
  valuePositiveInt: primitives.R4.positiveInt;
  /** Extension of valuePositiveInt element */
  _valuePositiveInt?: Element;
  /** Value of Example (one of allowed types) */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Value of Example (one of allowed types) */
  valueTime: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Value of Example (one of allowed types) */
  valueUnsignedInt: primitives.R4.unsignedInt;
  /** Extension of valueUnsignedInt element */
  _valueUnsignedInt?: Element;
  /** Value of Example (one of allowed types) */
  valueUri: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Value of Example (one of allowed types) */
  valueUrl: primitives.R4.url;
  /** Extension of valueUrl element */
  _valueUrl?: Element;
  /** Value of Example (one of allowed types) */
  valueUuid: primitives.R4.uuid;
  /** Extension of valueUuid element */
  _valueUuid?: Element;
  /** Value of Example (one of allowed types) */
  valueAddress: Address;
  /** Value of Example (one of allowed types) */
  valueAge: Age;
  /** Value of Example (one of allowed types) */
  valueAnnotation: Annotation;
  /** Value of Example (one of allowed types) */
  valueAttachment: Attachment;
  /** Value of Example (one of allowed types) */
  valueCodeableConcept: CodeableConcept;
  /** Value of Example (one of allowed types) */
  valueCoding: Coding;
  /** Value of Example (one of allowed types) */
  valueContactPoint: ContactPoint;
  /** Value of Example (one of allowed types) */
  valueCount: Count;
  /** Value of Example (one of allowed types) */
  valueDistance: Distance;
  /** Value of Example (one of allowed types) */
  valueDuration: Duration;
  /** Value of Example (one of allowed types) */
  valueHumanName: HumanName;
  /** Value of Example (one of allowed types) */
  valueIdentifier: Identifier;
  /** Value of Example (one of allowed types) */
  valueMoney: Money;
  /** Value of Example (one of allowed types) */
  valuePeriod: Period;
  /** Value of Example (one of allowed types) */
  valueQuantity: Quantity;
  /** Value of Example (one of allowed types) */
  valueRange: Range;
  /** Value of Example (one of allowed types) */
  valueRatio: Ratio;
  /** Value of Example (one of allowed types) */
  valueReference: Reference;
  /** Value of Example (one of allowed types) */
  valueSampledData: SampledData;
  /** Value of Example (one of allowed types) */
  valueSignature: Signature;
  /** Value of Example (one of allowed types) */
  valueTiming: Timing;
  /** Value of Example (one of allowed types) */
  valueContactDetail: ContactDetail;
  /** Value of Example (one of allowed types) */
  valueContributor: Contributor;
  /** Value of Example (one of allowed types) */
  valueDataRequirement: DataRequirement;
  /** Value of Example (one of allowed types) */
  valueExpression: Expression;
  /** Value of Example (one of allowed types) */
  valueParameterDefinition: ParameterDefinition;
  /** Value of Example (one of allowed types) */
  valueRelatedArtifact: RelatedArtifact;
  /** Value of Example (one of allowed types) */
  valueTriggerDefinition: TriggerDefinition;
  /** Value of Example (one of allowed types) */
  valueUsageContext: UsageContext;
  /** Value of Example (one of allowed types) */
  valueDosage: Dosage;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionExample: t.Type<
  ElementDefinitionExample
> = t.recursion<ElementDefinitionExample>("ElementDefinitionExample", () =>
  t.intersection([
    t.type({
      /** Describes the purpose of this example */
      label: primitives.R4.string,
      /** Value of Example (one of allowed types) */
      valueBase64Binary: primitives.R4.base64Binary,
      /** Value of Example (one of allowed types) */
      valueBoolean: primitives.R4.boolean,
      /** Value of Example (one of allowed types) */
      valueCanonical: primitives.R4.canonical,
      /** Value of Example (one of allowed types) */
      valueCode: primitives.R4.code,
      /** Value of Example (one of allowed types) */
      valueDate: primitives.R4.date,
      /** Value of Example (one of allowed types) */
      valueDateTime: primitives.R4.dateTime,
      /** Value of Example (one of allowed types) */
      valueDecimal: primitives.R4.decimal,
      /** Value of Example (one of allowed types) */
      valueId: primitives.R4.id,
      /** Value of Example (one of allowed types) */
      valueInstant: primitives.R4.instant,
      /** Value of Example (one of allowed types) */
      valueInteger: primitives.R4.integer,
      /** Value of Example (one of allowed types) */
      valueMarkdown: primitives.R4.markdown,
      /** Value of Example (one of allowed types) */
      valueOid: primitives.R4.oid,
      /** Value of Example (one of allowed types) */
      valuePositiveInt: primitives.R4.positiveInt,
      /** Value of Example (one of allowed types) */
      valueString: primitives.R4.string,
      /** Value of Example (one of allowed types) */
      valueTime: primitives.R4.time,
      /** Value of Example (one of allowed types) */
      valueUnsignedInt: primitives.R4.unsignedInt,
      /** Value of Example (one of allowed types) */
      valueUri: primitives.R4.uri,
      /** Value of Example (one of allowed types) */
      valueUrl: primitives.R4.url,
      /** Value of Example (one of allowed types) */
      valueUuid: primitives.R4.uuid,
      /** Value of Example (one of allowed types) */
      valueAddress: Address,
      /** Value of Example (one of allowed types) */
      valueAge: Age,
      /** Value of Example (one of allowed types) */
      valueAnnotation: Annotation,
      /** Value of Example (one of allowed types) */
      valueAttachment: Attachment,
      /** Value of Example (one of allowed types) */
      valueCodeableConcept: CodeableConcept,
      /** Value of Example (one of allowed types) */
      valueCoding: Coding,
      /** Value of Example (one of allowed types) */
      valueContactPoint: ContactPoint,
      /** Value of Example (one of allowed types) */
      valueCount: Count,
      /** Value of Example (one of allowed types) */
      valueDistance: Distance,
      /** Value of Example (one of allowed types) */
      valueDuration: Duration,
      /** Value of Example (one of allowed types) */
      valueHumanName: HumanName,
      /** Value of Example (one of allowed types) */
      valueIdentifier: Identifier,
      /** Value of Example (one of allowed types) */
      valueMoney: Money,
      /** Value of Example (one of allowed types) */
      valuePeriod: Period,
      /** Value of Example (one of allowed types) */
      valueQuantity: Quantity,
      /** Value of Example (one of allowed types) */
      valueRange: Range,
      /** Value of Example (one of allowed types) */
      valueRatio: Ratio,
      /** Value of Example (one of allowed types) */
      valueReference: Reference,
      /** Value of Example (one of allowed types) */
      valueSampledData: SampledData,
      /** Value of Example (one of allowed types) */
      valueSignature: Signature,
      /** Value of Example (one of allowed types) */
      valueTiming: Timing,
      /** Value of Example (one of allowed types) */
      valueContactDetail: ContactDetail,
      /** Value of Example (one of allowed types) */
      valueContributor: Contributor,
      /** Value of Example (one of allowed types) */
      valueDataRequirement: DataRequirement,
      /** Value of Example (one of allowed types) */
      valueExpression: Expression,
      /** Value of Example (one of allowed types) */
      valueParameterDefinition: ParameterDefinition,
      /** Value of Example (one of allowed types) */
      valueRelatedArtifact: RelatedArtifact,
      /** Value of Example (one of allowed types) */
      valueTriggerDefinition: TriggerDefinition,
      /** Value of Example (one of allowed types) */
      valueUsageContext: UsageContext,
      /** Value of Example (one of allowed types) */
      valueDosage: Dosage
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of label element */
      _label: Element,
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
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionConstraint {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Target of 'condition' reference above */
  key: primitives.R4.id;
  /** Extension of key element */
  _key?: Element;
  /** Why this constraint is necessary or appropriate */
  requirements?: string;
  /** Extension of requirements element */
  _requirements?: Element;
  /** error | warning */
  severity: primitives.R4.code;
  /** Extension of severity element */
  _severity?: Element;
  /** Human description of constraint */
  human: string;
  /** Extension of human element */
  _human?: Element;
  /** FHIRPath expression of constraint */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
  /** XPath expression of constraint */
  xpath?: string;
  /** Extension of xpath element */
  _xpath?: Element;
  /** Reference to original source of constraint */
  source?: primitives.R4.canonical;
  /** Extension of source element */
  _source?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionConstraint: t.Type<
  ElementDefinitionConstraint
> = t.recursion<ElementDefinitionConstraint>(
  "ElementDefinitionConstraint",
  () =>
    t.intersection([
      t.type({
        /** Target of 'condition' reference above */
        key: primitives.R4.id,
        /** error | warning */
        severity: primitives.R4.code,
        /** Human description of constraint */
        human: primitives.R4.string
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of key element */
        _key: Element,
        /** Why this constraint is necessary or appropriate */
        requirements: primitives.R4.string,
        /** Extension of requirements element */
        _requirements: Element,
        /** Extension of severity element */
        _severity: Element,
        /** Extension of human element */
        _human: Element,
        /** FHIRPath expression of constraint */
        expression: primitives.R4.string,
        /** Extension of expression element */
        _expression: Element,
        /** XPath expression of constraint */
        xpath: primitives.R4.string,
        /** Extension of xpath element */
        _xpath: Element,
        /** Reference to original source of constraint */
        source: primitives.R4.canonical,
        /** Extension of source element */
        _source: Element
      })
    ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionBinding {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** required | extensible | preferred | example */
  strength: primitives.R4.code;
  /** Extension of strength element */
  _strength?: Element;
  /** Human explanation of the value set */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Source of value set */
  valueSet?: primitives.R4.canonical;
  /** Extension of valueSet element */
  _valueSet?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionBinding: t.Type<
  ElementDefinitionBinding
> = t.recursion<ElementDefinitionBinding>("ElementDefinitionBinding", () =>
  t.intersection([
    t.type({
      /** required | extensible | preferred | example */
      strength: primitives.R4.code
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of strength element */
      _strength: Element,
      /** Human explanation of the value set */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Source of value set */
      valueSet: primitives.R4.canonical,
      /** Extension of valueSet element */
      _valueSet: Element
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface ElementDefinitionMapping {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Reference to mapping declaration */
  identity: primitives.R4.id;
  /** Extension of identity element */
  _identity?: Element;
  /** Computable language of mapping */
  language?: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** Details of the mapping */
  map: string;
  /** Extension of map element */
  _map?: Element;
  /** Comments about the mapping or its use */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const ElementDefinitionMapping: t.Type<
  ElementDefinitionMapping
> = t.recursion<ElementDefinitionMapping>("ElementDefinitionMapping", () =>
  t.intersection([
    t.type({
      /** Reference to mapping declaration */
      identity: primitives.R4.id,
      /** Details of the mapping */
      map: primitives.R4.string
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extension of identity element */
      _identity: Element,
      /** Computable language of mapping */
      language: primitives.R4.code,
      /** Extension of language element */
      _language: Element,
      /** Extension of map element */
      _map: Element,
      /** Comments about the mapping or its use */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element
    })
  ])
);
