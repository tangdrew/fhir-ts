/**
 * ObservationDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Definition of an observation
 */
export interface ObservationDefinition {
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
  /** Category of observation */
  category?: CodeableConcept[];
  /** Type of observation (code / type) */
  code: CodeableConcept;
  /** Business identifier for this ObservationDefinition instance */
  identifier?: Identifier[];
  /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
  permittedDataType?: primitives.R4.code[];
  /** Extension of permittedDataType element */
  _permittedDataType?: Element[];
  /** Multiple results allowed */
  multipleResultsAllowed?: boolean;
  /** Extension of multipleResultsAllowed element */
  _multipleResultsAllowed?: Element;
  /** Method used to produce the observation */
  method?: CodeableConcept;
  /** Preferred report name */
  preferredReportName?: string;
  /** Extension of preferredReportName element */
  _preferredReportName?: Element;
  /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
  validCodedValueSet?: Reference;
  /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
  normalCodedValueSet?: Reference;
  /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
  abnormalCodedValueSet?: Reference;
  /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
  criticalCodedValueSet?: Reference;
}
/**
 * Definition of an observation
 */
export const ObservationDefinition: t.Type<ObservationDefinition> = t.recursion<
  ObservationDefinition
>("ObservationDefinition", () =>
  t.intersection([
    t.type({
      /** Type of observation (code / type) */
      code: CodeableConcept
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
      /** Category of observation */
      category: t.array(CodeableConcept),
      /** Business identifier for this ObservationDefinition instance */
      identifier: t.array(Identifier),
      /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
      permittedDataType: t.array(primitives.R4.code),
      /** Extension of permittedDataType element */
      _permittedDataType: t.array(Element),
      /** Multiple results allowed */
      multipleResultsAllowed: primitives.R4.boolean,
      /** Extension of multipleResultsAllowed element */
      _multipleResultsAllowed: Element,
      /** Method used to produce the observation */
      method: CodeableConcept,
      /** Preferred report name */
      preferredReportName: primitives.R4.string,
      /** Extension of preferredReportName element */
      _preferredReportName: Element,
      /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
      validCodedValueSet: Reference,
      /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
      normalCodedValueSet: Reference,
      /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
      abnormalCodedValueSet: Reference,
      /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
      criticalCodedValueSet: Reference
    })
  ])
);

/**
 * Characteristics of quantitative results
 */
export interface ObservationDefinitionQuantitativeDetails {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Customary unit for quantitative results */
  customaryUnit?: CodeableConcept;
  /** SI unit for quantitative results */
  unit?: CodeableConcept;
  /** SI to Customary unit conversion factor */
  conversionFactor?: primitives.R4.decimal;
  /** Extension of conversionFactor element */
  _conversionFactor?: Element;
  /** Decimal precision of observation quantitative results */
  decimalPrecision?: primitives.R4.integer;
  /** Extension of decimalPrecision element */
  _decimalPrecision?: Element;
}
/**
 * Characteristics of quantitative results
 */
export const ObservationDefinitionQuantitativeDetails: t.Type<
  ObservationDefinitionQuantitativeDetails
> = t.recursion<ObservationDefinitionQuantitativeDetails>(
  "ObservationDefinitionQuantitativeDetails",
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
        /** Customary unit for quantitative results */
        customaryUnit: CodeableConcept,
        /** SI unit for quantitative results */
        unit: CodeableConcept,
        /** SI to Customary unit conversion factor */
        conversionFactor: primitives.R4.decimal,
        /** Extension of conversionFactor element */
        _conversionFactor: Element,
        /** Decimal precision of observation quantitative results */
        decimalPrecision: primitives.R4.integer,
        /** Extension of decimalPrecision element */
        _decimalPrecision: Element
      })
    ])
);

/**
 * Qualified range for continuous and ordinal observation results
 */
export interface ObservationDefinitionQualifiedInterval {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** reference | critical | absolute */
  category?: primitives.R4.code;
  /** Extension of category element */
  _category?: Element;
  /** The interval itself, for continuous or ordinal observations */
  range?: Range;
  /** Range context qualifier */
  context?: CodeableConcept;
  /** Targetted population of the range */
  appliesTo?: CodeableConcept[];
  /** male | female | other | unknown */
  gender?: primitives.R4.code;
  /** Extension of gender element */
  _gender?: Element;
  /** Applicable age range, if relevant */
  age?: Range;
  /** Applicable gestational age range, if relevant */
  gestationalAge?: Range;
  /** Condition associated with the reference range */
  condition?: string;
  /** Extension of condition element */
  _condition?: Element;
}
/**
 * Qualified range for continuous and ordinal observation results
 */
export const ObservationDefinitionQualifiedInterval: t.Type<
  ObservationDefinitionQualifiedInterval
> = t.recursion<ObservationDefinitionQualifiedInterval>(
  "ObservationDefinitionQualifiedInterval",
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
        /** reference | critical | absolute */
        category: primitives.R4.code,
        /** Extension of category element */
        _category: Element,
        /** The interval itself, for continuous or ordinal observations */
        range: Range,
        /** Range context qualifier */
        context: CodeableConcept,
        /** Targetted population of the range */
        appliesTo: t.array(CodeableConcept),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Extension of gender element */
        _gender: Element,
        /** Applicable age range, if relevant */
        age: Range,
        /** Applicable gestational age range, if relevant */
        gestationalAge: Range,
        /** Condition associated with the reference range */
        condition: primitives.R4.string,
        /** Extension of condition element */
        _condition: Element
      })
    ])
);
