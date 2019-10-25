/**
 * StructureMap Module
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
 * A Map of relationships between 2 structures that can be used to transform data
 */
export interface StructureMap {
  /** The type of resource */
  resourceType?: "StructureMap";
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
  /** Canonical identifier for this structure map, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the structure map */
  identifier?: Identifier[];
  /** Business version of the structure map */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this structure map (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this structure map (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
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
  /** Natural language description of the structure map */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for structure map (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this structure map is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** Other maps used by this map (canonical URLs) */
  import?: primitives.R4.canonical[];
  /** Extension of import element */
  _import?: Element[];
}
/**
 * A Map of relationships between 2 structures that can be used to transform data
 */
export const StructureMap: t.Type<StructureMap> = t.recursion<StructureMap>(
  "StructureMap",
  () =>
    t.intersection([
      t.type({
        /** Canonical identifier for this structure map, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Name for this structure map (computer friendly) */
        name: primitives.R4.string,
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("StructureMap"),
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
        /** Extension of url element */
        _url: Element,
        /** Additional identifier for the structure map */
        identifier: t.array(Identifier),
        /** Business version of the structure map */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Extension of name element */
        _name: Element,
        /** Name for this structure map (human friendly) */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Extension of status element */
        _status: Element,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Extension of experimental element */
        _experimental: Element,
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
        /** Natural language description of the structure map */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for structure map (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Why this structure map is defined */
        purpose: primitives.R4.markdown,
        /** Extension of purpose element */
        _purpose: Element,
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element,
        /** Other maps used by this map (canonical URLs) */
        import: t.array(primitives.R4.canonical),
        /** Extension of import element */
        _import: t.array(Element)
      })
    ])
);

/**
 * Structure Definition used by this map
 */
export interface StructureMapStructure {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Canonical reference to structure definition */
  url: primitives.R4.canonical;
  /** Extension of url element */
  _url?: Element;
  /** source | queried | target | produced */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Name for type in this map */
  alias?: string;
  /** Extension of alias element */
  _alias?: Element;
  /** Documentation on use of structure */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Structure Definition used by this map
 */
export const StructureMapStructure: t.Type<StructureMapStructure> = t.recursion<
  StructureMapStructure
>("StructureMapStructure", () =>
  t.intersection([
    t.type({
      /** Canonical reference to structure definition */
      url: primitives.R4.canonical,
      /** source | queried | target | produced */
      mode: primitives.R4.code
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
      /** Extension of url element */
      _url: Element,
      /** Extension of mode element */
      _mode: Element,
      /** Name for type in this map */
      alias: primitives.R4.string,
      /** Extension of alias element */
      _alias: Element,
      /** Documentation on use of structure */
      documentation: primitives.R4.string,
      /** Extension of documentation element */
      _documentation: Element
    })
  ])
);

/**
 * Named sections for reader convenience
 */
export interface StructureMapGroup {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Human-readable label */
  name: primitives.R4.id;
  /** Extension of name element */
  _name?: Element;
  /** Another group that this group adds rules to */
  extends?: primitives.R4.id;
  /** Extension of extends element */
  _extends?: Element;
  /** none | types | type-and-types */
  typeMode: primitives.R4.code;
  /** Extension of typeMode element */
  _typeMode?: Element;
  /** Additional description/explanation for group */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Named sections for reader convenience
 */
export const StructureMapGroup: t.Type<StructureMapGroup> = t.recursion<
  StructureMapGroup
>("StructureMapGroup", () =>
  t.intersection([
    t.type({
      /** Human-readable label */
      name: primitives.R4.id,
      /** none | types | type-and-types */
      typeMode: primitives.R4.code
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
      /** Extension of name element */
      _name: Element,
      /** Another group that this group adds rules to */
      extends: primitives.R4.id,
      /** Extension of extends element */
      _extends: Element,
      /** Extension of typeMode element */
      _typeMode: Element,
      /** Additional description/explanation for group */
      documentation: primitives.R4.string,
      /** Extension of documentation element */
      _documentation: Element
    })
  ])
);

/**
 * Named instance provided when invoking the map
 */
export interface StructureMapGroupInput {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name for this instance of data */
  name: primitives.R4.id;
  /** Extension of name element */
  _name?: Element;
  /** Type for this instance of data */
  type?: string;
  /** Extension of type element */
  _type?: Element;
  /** source | target */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Documentation for this instance of data */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Named instance provided when invoking the map
 */
export const StructureMapGroupInput: t.Type<
  StructureMapGroupInput
> = t.recursion<StructureMapGroupInput>("StructureMapGroupInput", () =>
  t.intersection([
    t.type({
      /** Name for this instance of data */
      name: primitives.R4.id,
      /** source | target */
      mode: primitives.R4.code
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
      /** Extension of name element */
      _name: Element,
      /** Type for this instance of data */
      type: primitives.R4.string,
      /** Extension of type element */
      _type: Element,
      /** Extension of mode element */
      _mode: Element,
      /** Documentation for this instance of data */
      documentation: primitives.R4.string,
      /** Extension of documentation element */
      _documentation: Element
    })
  ])
);

/**
 * Transform Rule from source to target
 */
export interface StructureMapGroupRule {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of the rule for internal references */
  name: primitives.R4.id;
  /** Extension of name element */
  _name?: Element;
  /** Rules contained in this rule */
  rule?: StructureMapGroupRule[];
  /** Documentation for this instance of data */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Transform Rule from source to target
 */
export const StructureMapGroupRule: t.Type<StructureMapGroupRule> = t.recursion<
  StructureMapGroupRule
>("StructureMapGroupRule", () =>
  t.intersection([
    t.type({
      /** Name of the rule for internal references */
      name: primitives.R4.id
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
      /** Extension of name element */
      _name: Element,
      /** Rules contained in this rule */
      rule: t.array(StructureMapGroupRule),
      /** Documentation for this instance of data */
      documentation: primitives.R4.string,
      /** Extension of documentation element */
      _documentation: Element
    })
  ])
);

/**
 * Source inputs to the mapping
 */
export interface StructureMapGroupRuleSource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type or variable this rule applies to */
  context: primitives.R4.id;
  /** Extension of context element */
  _context?: Element;
  /** Specified minimum cardinality */
  min?: primitives.R4.integer;
  /** Extension of min element */
  _min?: Element;
  /** Specified maximum cardinality (number or *) */
  max?: string;
  /** Extension of max element */
  _max?: Element;
  /** Rule only applies if source has this type */
  type?: string;
  /** Extension of type element */
  _type?: Element;
  /** Default value if no value exists */
  defaultvalueBase64Binary?: primitives.R4.base64Binary;
  /** Extension of defaultvalueBase64Binary element */
  _defaultvalueBase64Binary?: Element;
  /** Default value if no value exists */
  defaultvalueBoolean?: boolean;
  /** Extension of defaultvalueBoolean element */
  _defaultvalueBoolean?: Element;
  /** Default value if no value exists */
  defaultvalueCanonical?: primitives.R4.canonical;
  /** Extension of defaultvalueCanonical element */
  _defaultvalueCanonical?: Element;
  /** Default value if no value exists */
  defaultvalueCode?: primitives.R4.code;
  /** Extension of defaultvalueCode element */
  _defaultvalueCode?: Element;
  /** Default value if no value exists */
  defaultvalueDate?: primitives.R4.date;
  /** Extension of defaultvalueDate element */
  _defaultvalueDate?: Element;
  /** Default value if no value exists */
  defaultvalueDateTime?: primitives.R4.dateTime;
  /** Extension of defaultvalueDateTime element */
  _defaultvalueDateTime?: Element;
  /** Default value if no value exists */
  defaultvalueDecimal?: primitives.R4.decimal;
  /** Extension of defaultvalueDecimal element */
  _defaultvalueDecimal?: Element;
  /** Default value if no value exists */
  defaultvalueId?: primitives.R4.id;
  /** Extension of defaultvalueId element */
  _defaultvalueId?: Element;
  /** Default value if no value exists */
  defaultvalueInstant?: primitives.R4.instant;
  /** Extension of defaultvalueInstant element */
  _defaultvalueInstant?: Element;
  /** Default value if no value exists */
  defaultvalueInteger?: primitives.R4.integer;
  /** Extension of defaultvalueInteger element */
  _defaultvalueInteger?: Element;
  /** Default value if no value exists */
  defaultvalueMarkdown?: primitives.R4.markdown;
  /** Extension of defaultvalueMarkdown element */
  _defaultvalueMarkdown?: Element;
  /** Default value if no value exists */
  defaultvalueOid?: primitives.R4.oid;
  /** Extension of defaultvalueOid element */
  _defaultvalueOid?: Element;
  /** Default value if no value exists */
  defaultvaluePositiveInt?: primitives.R4.positiveInt;
  /** Extension of defaultvaluePositiveInt element */
  _defaultvaluePositiveInt?: Element;
  /** Default value if no value exists */
  defaultvalueString?: string;
  /** Extension of defaultvalueString element */
  _defaultvalueString?: Element;
  /** Default value if no value exists */
  defaultvalueTime?: primitives.R4.time;
  /** Extension of defaultvalueTime element */
  _defaultvalueTime?: Element;
  /** Default value if no value exists */
  defaultvalueUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of defaultvalueUnsignedInt element */
  _defaultvalueUnsignedInt?: Element;
  /** Default value if no value exists */
  defaultvalueUri?: primitives.R4.uri;
  /** Extension of defaultvalueUri element */
  _defaultvalueUri?: Element;
  /** Default value if no value exists */
  defaultvalueUrl?: primitives.R4.url;
  /** Extension of defaultvalueUrl element */
  _defaultvalueUrl?: Element;
  /** Default value if no value exists */
  defaultvalueUuid?: primitives.R4.uuid;
  /** Extension of defaultvalueUuid element */
  _defaultvalueUuid?: Element;
  /** Default value if no value exists */
  defaultvalueAddress?: Address;
  /** Default value if no value exists */
  defaultvalueAge?: Age;
  /** Default value if no value exists */
  defaultvalueAnnotation?: Annotation;
  /** Default value if no value exists */
  defaultvalueAttachment?: Attachment;
  /** Default value if no value exists */
  defaultvalueCodeableConcept?: CodeableConcept;
  /** Default value if no value exists */
  defaultvalueCoding?: Coding;
  /** Default value if no value exists */
  defaultvalueContactPoint?: ContactPoint;
  /** Default value if no value exists */
  defaultvalueCount?: Count;
  /** Default value if no value exists */
  defaultvalueDistance?: Distance;
  /** Default value if no value exists */
  defaultvalueDuration?: Duration;
  /** Default value if no value exists */
  defaultvalueHumanName?: HumanName;
  /** Default value if no value exists */
  defaultvalueIdentifier?: Identifier;
  /** Default value if no value exists */
  defaultvalueMoney?: Money;
  /** Default value if no value exists */
  defaultvaluePeriod?: Period;
  /** Default value if no value exists */
  defaultvalueQuantity?: Quantity;
  /** Default value if no value exists */
  defaultvalueRange?: Range;
  /** Default value if no value exists */
  defaultvalueRatio?: Ratio;
  /** Default value if no value exists */
  defaultvalueReference?: Reference;
  /** Default value if no value exists */
  defaultvalueSampledData?: SampledData;
  /** Default value if no value exists */
  defaultvalueSignature?: Signature;
  /** Default value if no value exists */
  defaultvalueTiming?: Timing;
  /** Default value if no value exists */
  defaultvalueContactDetail?: ContactDetail;
  /** Default value if no value exists */
  defaultvalueContributor?: Contributor;
  /** Default value if no value exists */
  defaultvalueDataRequirement?: DataRequirement;
  /** Default value if no value exists */
  defaultvalueExpression?: Expression;
  /** Default value if no value exists */
  defaultvalueParameterDefinition?: ParameterDefinition;
  /** Default value if no value exists */
  defaultvalueRelatedArtifact?: RelatedArtifact;
  /** Default value if no value exists */
  defaultvalueTriggerDefinition?: TriggerDefinition;
  /** Default value if no value exists */
  defaultvalueUsageContext?: UsageContext;
  /** Default value if no value exists */
  defaultvalueDosage?: Dosage;
  /** Optional field for this source */
  element?: string;
  /** Extension of element element */
  _element?: Element;
  /** first | not_first | last | not_last | only_one */
  listMode?: primitives.R4.code;
  /** Extension of listMode element */
  _listMode?: Element;
  /** Named context for field, if a field is specified */
  variable?: primitives.R4.id;
  /** Extension of variable element */
  _variable?: Element;
  /** FHIRPath expression  - must be true or the rule does not apply */
  condition?: string;
  /** Extension of condition element */
  _condition?: Element;
  /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
  check?: string;
  /** Extension of check element */
  _check?: Element;
  /** Message to put in log if source exists (FHIRPath) */
  logMessage?: string;
  /** Extension of logMessage element */
  _logMessage?: Element;
}
/**
 * Source inputs to the mapping
 */
export const StructureMapGroupRuleSource: t.Type<
  StructureMapGroupRuleSource
> = t.recursion<StructureMapGroupRuleSource>(
  "StructureMapGroupRuleSource",
  () =>
    t.intersection([
      t.type({
        /** Type or variable this rule applies to */
        context: primitives.R4.id
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
        /** Extension of context element */
        _context: Element,
        /** Specified minimum cardinality */
        min: primitives.R4.integer,
        /** Extension of min element */
        _min: Element,
        /** Specified maximum cardinality (number or *) */
        max: primitives.R4.string,
        /** Extension of max element */
        _max: Element,
        /** Rule only applies if source has this type */
        type: primitives.R4.string,
        /** Extension of type element */
        _type: Element,
        /** Default value if no value exists */
        defaultvalueBase64Binary: primitives.R4.base64Binary,
        /** Extension of defaultvalueBase64Binary element */
        _defaultvalueBase64Binary: Element,
        /** Default value if no value exists */
        defaultvalueBoolean: primitives.R4.boolean,
        /** Extension of defaultvalueBoolean element */
        _defaultvalueBoolean: Element,
        /** Default value if no value exists */
        defaultvalueCanonical: primitives.R4.canonical,
        /** Extension of defaultvalueCanonical element */
        _defaultvalueCanonical: Element,
        /** Default value if no value exists */
        defaultvalueCode: primitives.R4.code,
        /** Extension of defaultvalueCode element */
        _defaultvalueCode: Element,
        /** Default value if no value exists */
        defaultvalueDate: primitives.R4.date,
        /** Extension of defaultvalueDate element */
        _defaultvalueDate: Element,
        /** Default value if no value exists */
        defaultvalueDateTime: primitives.R4.dateTime,
        /** Extension of defaultvalueDateTime element */
        _defaultvalueDateTime: Element,
        /** Default value if no value exists */
        defaultvalueDecimal: primitives.R4.decimal,
        /** Extension of defaultvalueDecimal element */
        _defaultvalueDecimal: Element,
        /** Default value if no value exists */
        defaultvalueId: primitives.R4.id,
        /** Extension of defaultvalueId element */
        _defaultvalueId: Element,
        /** Default value if no value exists */
        defaultvalueInstant: primitives.R4.instant,
        /** Extension of defaultvalueInstant element */
        _defaultvalueInstant: Element,
        /** Default value if no value exists */
        defaultvalueInteger: primitives.R4.integer,
        /** Extension of defaultvalueInteger element */
        _defaultvalueInteger: Element,
        /** Default value if no value exists */
        defaultvalueMarkdown: primitives.R4.markdown,
        /** Extension of defaultvalueMarkdown element */
        _defaultvalueMarkdown: Element,
        /** Default value if no value exists */
        defaultvalueOid: primitives.R4.oid,
        /** Extension of defaultvalueOid element */
        _defaultvalueOid: Element,
        /** Default value if no value exists */
        defaultvaluePositiveInt: primitives.R4.positiveInt,
        /** Extension of defaultvaluePositiveInt element */
        _defaultvaluePositiveInt: Element,
        /** Default value if no value exists */
        defaultvalueString: primitives.R4.string,
        /** Extension of defaultvalueString element */
        _defaultvalueString: Element,
        /** Default value if no value exists */
        defaultvalueTime: primitives.R4.time,
        /** Extension of defaultvalueTime element */
        _defaultvalueTime: Element,
        /** Default value if no value exists */
        defaultvalueUnsignedInt: primitives.R4.unsignedInt,
        /** Extension of defaultvalueUnsignedInt element */
        _defaultvalueUnsignedInt: Element,
        /** Default value if no value exists */
        defaultvalueUri: primitives.R4.uri,
        /** Extension of defaultvalueUri element */
        _defaultvalueUri: Element,
        /** Default value if no value exists */
        defaultvalueUrl: primitives.R4.url,
        /** Extension of defaultvalueUrl element */
        _defaultvalueUrl: Element,
        /** Default value if no value exists */
        defaultvalueUuid: primitives.R4.uuid,
        /** Extension of defaultvalueUuid element */
        _defaultvalueUuid: Element,
        /** Default value if no value exists */
        defaultvalueAddress: Address,
        /** Default value if no value exists */
        defaultvalueAge: Age,
        /** Default value if no value exists */
        defaultvalueAnnotation: Annotation,
        /** Default value if no value exists */
        defaultvalueAttachment: Attachment,
        /** Default value if no value exists */
        defaultvalueCodeableConcept: CodeableConcept,
        /** Default value if no value exists */
        defaultvalueCoding: Coding,
        /** Default value if no value exists */
        defaultvalueContactPoint: ContactPoint,
        /** Default value if no value exists */
        defaultvalueCount: Count,
        /** Default value if no value exists */
        defaultvalueDistance: Distance,
        /** Default value if no value exists */
        defaultvalueDuration: Duration,
        /** Default value if no value exists */
        defaultvalueHumanName: HumanName,
        /** Default value if no value exists */
        defaultvalueIdentifier: Identifier,
        /** Default value if no value exists */
        defaultvalueMoney: Money,
        /** Default value if no value exists */
        defaultvaluePeriod: Period,
        /** Default value if no value exists */
        defaultvalueQuantity: Quantity,
        /** Default value if no value exists */
        defaultvalueRange: Range,
        /** Default value if no value exists */
        defaultvalueRatio: Ratio,
        /** Default value if no value exists */
        defaultvalueReference: Reference,
        /** Default value if no value exists */
        defaultvalueSampledData: SampledData,
        /** Default value if no value exists */
        defaultvalueSignature: Signature,
        /** Default value if no value exists */
        defaultvalueTiming: Timing,
        /** Default value if no value exists */
        defaultvalueContactDetail: ContactDetail,
        /** Default value if no value exists */
        defaultvalueContributor: Contributor,
        /** Default value if no value exists */
        defaultvalueDataRequirement: DataRequirement,
        /** Default value if no value exists */
        defaultvalueExpression: Expression,
        /** Default value if no value exists */
        defaultvalueParameterDefinition: ParameterDefinition,
        /** Default value if no value exists */
        defaultvalueRelatedArtifact: RelatedArtifact,
        /** Default value if no value exists */
        defaultvalueTriggerDefinition: TriggerDefinition,
        /** Default value if no value exists */
        defaultvalueUsageContext: UsageContext,
        /** Default value if no value exists */
        defaultvalueDosage: Dosage,
        /** Optional field for this source */
        element: primitives.R4.string,
        /** Extension of element element */
        _element: Element,
        /** first | not_first | last | not_last | only_one */
        listMode: primitives.R4.code,
        /** Extension of listMode element */
        _listMode: Element,
        /** Named context for field, if a field is specified */
        variable: primitives.R4.id,
        /** Extension of variable element */
        _variable: Element,
        /** FHIRPath expression  - must be true or the rule does not apply */
        condition: primitives.R4.string,
        /** Extension of condition element */
        _condition: Element,
        /** FHIRPath expression  - must be true or the mapping engine throws an error instead of completing */
        check: primitives.R4.string,
        /** Extension of check element */
        _check: Element,
        /** Message to put in log if source exists (FHIRPath) */
        logMessage: primitives.R4.string,
        /** Extension of logMessage element */
        _logMessage: Element
      })
    ])
);

/**
 * Content to create because of this mapping rule
 */
export interface StructureMapGroupRuleTarget {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type or variable this rule applies to */
  context?: primitives.R4.id;
  /** Extension of context element */
  _context?: Element;
  /** type | variable */
  contextType?: primitives.R4.code;
  /** Extension of contextType element */
  _contextType?: Element;
  /** Field to create in the context */
  element?: string;
  /** Extension of element element */
  _element?: Element;
  /** Named context for field, if desired, and a field is specified */
  variable?: primitives.R4.id;
  /** Extension of variable element */
  _variable?: Element;
  /** first | share | last | collate */
  listMode?: primitives.R4.code[];
  /** Extension of listMode element */
  _listMode?: Element[];
  /** Internal rule reference for shared list items */
  listRuleId?: primitives.R4.id;
  /** Extension of listRuleId element */
  _listRuleId?: Element;
  /** create | copy + */
  transform?: primitives.R4.code;
  /** Extension of transform element */
  _transform?: Element;
}
/**
 * Content to create because of this mapping rule
 */
export const StructureMapGroupRuleTarget: t.Type<
  StructureMapGroupRuleTarget
> = t.recursion<StructureMapGroupRuleTarget>(
  "StructureMapGroupRuleTarget",
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
        /** Type or variable this rule applies to */
        context: primitives.R4.id,
        /** Extension of context element */
        _context: Element,
        /** type | variable */
        contextType: primitives.R4.code,
        /** Extension of contextType element */
        _contextType: Element,
        /** Field to create in the context */
        element: primitives.R4.string,
        /** Extension of element element */
        _element: Element,
        /** Named context for field, if desired, and a field is specified */
        variable: primitives.R4.id,
        /** Extension of variable element */
        _variable: Element,
        /** first | share | last | collate */
        listMode: t.array(primitives.R4.code),
        /** Extension of listMode element */
        _listMode: t.array(Element),
        /** Internal rule reference for shared list items */
        listRuleId: primitives.R4.id,
        /** Extension of listRuleId element */
        _listRuleId: Element,
        /** create | copy + */
        transform: primitives.R4.code,
        /** Extension of transform element */
        _transform: Element
      })
    ])
);

/**
 * Parameters to the transform
 */
export interface StructureMapGroupRuleTargetParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Parameter value - variable or literal */
  valueId: primitives.R4.id;
  /** Extension of valueId element */
  _valueId?: Element;
  /** Parameter value - variable or literal */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Parameter value - variable or literal */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Parameter value - variable or literal */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Parameter value - variable or literal */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
}
/**
 * Parameters to the transform
 */
export const StructureMapGroupRuleTargetParameter: t.Type<
  StructureMapGroupRuleTargetParameter
> = t.recursion<StructureMapGroupRuleTargetParameter>(
  "StructureMapGroupRuleTargetParameter",
  () =>
    t.intersection([
      t.type({
        /** Parameter value - variable or literal */
        valueId: primitives.R4.id,
        /** Parameter value - variable or literal */
        valueString: primitives.R4.string,
        /** Parameter value - variable or literal */
        valueBoolean: primitives.R4.boolean,
        /** Parameter value - variable or literal */
        valueInteger: primitives.R4.integer,
        /** Parameter value - variable or literal */
        valueDecimal: primitives.R4.decimal
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
        /** Extension of valueId element */
        _valueId: Element,
        /** Extension of valueString element */
        _valueString: Element,
        /** Extension of valueBoolean element */
        _valueBoolean: Element,
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Extension of valueDecimal element */
        _valueDecimal: Element
      })
    ])
);

/**
 * Which other rules to apply in the context of this rule
 */
export interface StructureMapGroupRuleDependent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of a rule or group to apply */
  name: primitives.R4.id;
  /** Extension of name element */
  _name?: Element;
  /** Variable to pass to the rule or group */
  variable: string[];
  /** Extension of variable element */
  _variable?: Element[];
}
/**
 * Which other rules to apply in the context of this rule
 */
export const StructureMapGroupRuleDependent: t.Type<
  StructureMapGroupRuleDependent
> = t.recursion<StructureMapGroupRuleDependent>(
  "StructureMapGroupRuleDependent",
  () =>
    t.intersection([
      t.type({
        /** Name of a rule or group to apply */
        name: primitives.R4.id,
        /** Variable to pass to the rule or group */
        variable: t.array(primitives.R4.string)
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
        /** Extension of name element */
        _name: Element,
        /** Extension of variable element */
        _variable: t.array(Element)
      })
    ])
);
