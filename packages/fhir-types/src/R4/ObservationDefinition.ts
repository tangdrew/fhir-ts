/**
 * ObservationDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Characteristics of quantitative results
 */
export interface ObservationDefinitionQuantitativeDetails {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Customary unit for quantitative results */
  customaryUnit?: CodeableConcept;
  /** SI unit for quantitative results */
  unit?: CodeableConcept;
  /** SI to Customary unit conversion factor */
  conversionFactor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Decimal precision of observation quantitative results */
  decimalPrecision?: t.TypeOf<primitives.R4.IntegerType>;
}

export interface ObservationDefinitionQuantitativeDetailsOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Customary unit for quantitative results */
  customaryUnit?: CodeableConceptOutputType;
  /** SI unit for quantitative results */
  unit?: CodeableConceptOutputType;
  /** SI to Customary unit conversion factor */
  conversionFactor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Decimal precision of observation quantitative results */
  decimalPrecision?: t.OutputOf<primitives.R4.IntegerType>;
}

export const ObservationDefinitionQuantitativeDetails: t.RecursiveType<
  t.Type<
    ObservationDefinitionQuantitativeDetails,
    ObservationDefinitionQuantitativeDetailsOutputType
  >,
  ObservationDefinitionQuantitativeDetails,
  ObservationDefinitionQuantitativeDetailsOutputType
> = t.recursion<
  ObservationDefinitionQuantitativeDetails,
  ObservationDefinitionQuantitativeDetailsOutputType
>("ObservationDefinitionQuantitativeDetails", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** SI to Customary unit conversion factor */
        conversionFactor: primitives.R4.decimal,
        /** Customary unit for quantitative results */
        customaryUnit: CodeableConcept,
        /** Decimal precision of observation quantitative results */
        decimalPrecision: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** SI unit for quantitative results */
        unit: CodeableConcept
      })
    ],
    "ObservationDefinitionQuantitativeDetails"
  )
);

/**
 * Qualified range for continuous and ordinal observation results
 */
export interface ObservationDefinitionQualifiedInterval {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** reference | critical | absolute */
  category?: t.TypeOf<primitives.R4.CodeType>;
  /** The interval itself, for continuous or ordinal observations */
  range?: Range;
  /** Range context qualifier */
  context?: CodeableConcept;
  /** Targetted population of the range */
  appliesTo?: CodeableConcept[];
  /** male | female | other | unknown */
  gender?: t.TypeOf<primitives.R4.CodeType>;
  /** Applicable age range, if relevant */
  age?: Range;
  /** Applicable gestational age range, if relevant */
  gestationalAge?: Range;
  /** Condition associated with the reference range */
  condition?: t.TypeOf<primitives.R4.StringType>;
}

export interface ObservationDefinitionQualifiedIntervalOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** reference | critical | absolute */
  category?: t.OutputOf<primitives.R4.CodeType>;
  /** The interval itself, for continuous or ordinal observations */
  range?: RangeOutputType;
  /** Range context qualifier */
  context?: CodeableConceptOutputType;
  /** Targetted population of the range */
  appliesTo?: CodeableConceptOutputType[];
  /** male | female | other | unknown */
  gender?: t.OutputOf<primitives.R4.CodeType>;
  /** Applicable age range, if relevant */
  age?: RangeOutputType;
  /** Applicable gestational age range, if relevant */
  gestationalAge?: RangeOutputType;
  /** Condition associated with the reference range */
  condition?: t.OutputOf<primitives.R4.StringType>;
}

export const ObservationDefinitionQualifiedInterval: t.RecursiveType<
  t.Type<
    ObservationDefinitionQualifiedInterval,
    ObservationDefinitionQualifiedIntervalOutputType
  >,
  ObservationDefinitionQualifiedInterval,
  ObservationDefinitionQualifiedIntervalOutputType
> = t.recursion<
  ObservationDefinitionQualifiedInterval,
  ObservationDefinitionQualifiedIntervalOutputType
>("ObservationDefinitionQualifiedInterval", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Applicable age range, if relevant */
        age: Range,
        /** Targetted population of the range */
        appliesTo: t.array(CodeableConcept),
        /** reference | critical | absolute */
        category: primitives.R4.code,
        /** Condition associated with the reference range */
        condition: primitives.R4.string,
        /** Range context qualifier */
        context: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Applicable gestational age range, if relevant */
        gestationalAge: Range,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The interval itself, for continuous or ordinal observations */
        range: Range
      })
    ],
    "ObservationDefinitionQualifiedInterval"
  )
);

/**
 * Definition of an observation
 */
export interface ObservationDefinition {
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
  /** Category of observation */
  category?: CodeableConcept[];
  /** Type of observation (code / type) */
  code: CodeableConcept;
  /** Business identifier for this ObservationDefinition instance */
  identifier?: Identifier[];
  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
  permittedDataType?: t.TypeOf<primitives.R4.CodeType>[];
  /** Multiple results allowed */
  multipleResultsAllowed?: t.TypeOf<primitives.R4.BooleanType>;
  /** Method used to produce the observation */
  method?: CodeableConcept;
  /** Preferred report name */
  preferredReportName?: t.TypeOf<primitives.R4.StringType>;
  /** Characteristics of quantitative results */
  quantitativeDetails?: ObservationDefinitionQuantitativeDetails;
  /** Qualified range for continuous and ordinal observation results */
  qualifiedInterval?: ObservationDefinitionQualifiedInterval[];
  /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
  validCodedValueSet?: Reference;
  /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
  normalCodedValueSet?: Reference;
  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
  abnormalCodedValueSet?: Reference;
  /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
  criticalCodedValueSet?: Reference;
}

export interface ObservationDefinitionOutputType {
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
  /** Category of observation */
  category?: CodeableConceptOutputType[];
  /** Type of observation (code / type) */
  code: CodeableConceptOutputType;
  /** Business identifier for this ObservationDefinition instance */
  identifier?: IdentifierOutputType[];
  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
  permittedDataType?: t.OutputOf<primitives.R4.CodeType>[];
  /** Multiple results allowed */
  multipleResultsAllowed?: t.OutputOf<primitives.R4.BooleanType>;
  /** Method used to produce the observation */
  method?: CodeableConceptOutputType;
  /** Preferred report name */
  preferredReportName?: t.OutputOf<primitives.R4.StringType>;
  /** Characteristics of quantitative results */
  quantitativeDetails?: ObservationDefinitionQuantitativeDetailsOutputType;
  /** Qualified range for continuous and ordinal observation results */
  qualifiedInterval?: ObservationDefinitionQualifiedIntervalOutputType[];
  /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
  validCodedValueSet?: ReferenceOutputType;
  /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
  normalCodedValueSet?: ReferenceOutputType;
  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
  abnormalCodedValueSet?: ReferenceOutputType;
  /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
  criticalCodedValueSet?: ReferenceOutputType;
}

export const ObservationDefinition: t.RecursiveType<
  t.Type<ObservationDefinition, ObservationDefinitionOutputType>,
  ObservationDefinition,
  ObservationDefinitionOutputType
> = t.recursion<ObservationDefinition, ObservationDefinitionOutputType>(
  "ObservationDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Type of observation (code / type) */
          code: CodeableConcept
        }),
        t.partial({
          /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
          abnormalCodedValueSet: Reference,
          /** Category of observation */
          category: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
          criticalCodedValueSet: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifier for this ObservationDefinition instance */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Method used to produce the observation */
          method: CodeableConcept,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Multiple results allowed */
          multipleResultsAllowed: primitives.R4.boolean,
          /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
          normalCodedValueSet: Reference,
          /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
          permittedDataType: t.array(primitives.R4.code),
          /** Preferred report name */
          preferredReportName: primitives.R4.string,
          /** Qualified range for continuous and ordinal observation results */
          qualifiedInterval: t.array(ObservationDefinitionQualifiedInterval),
          /** Characteristics of quantitative results */
          quantitativeDetails: ObservationDefinitionQuantitativeDetails,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
          validCodedValueSet: Reference
        })
      ],
      "ObservationDefinition"
    )
);
