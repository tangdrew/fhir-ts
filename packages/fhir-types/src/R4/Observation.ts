/**
 * Observation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { SampledData } from "./SampledData";
import { Timing } from "./Timing";

/**
 * Measurements and simple assertions
 */
export interface Observation {
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
  /** Business Identifier for observation */
  identifier?: Identifier[];
  /** Fulfills plan, proposal or order */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** registered | preliminary | final | amended + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Classification of  type of observation */
  category?: CodeableConcept[];
  /** Type of observation (code / type) */
  code: CodeableConcept;
  /** Who and/or what the observation is about */
  subject?: Reference;
  /** What the observation is about, when it is not about the subject of record */
  focus?: Reference[];
  /** Healthcare event during which this observation is made */
  encounter?: Reference;
  /** Clinically relevant time/time-period for observation */
  effectiveDateTime?: primitives.R4.dateTime;
  /** Extension of effectiveDateTime element */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for observation */
  effectivePeriod?: Period;
  /** Clinically relevant time/time-period for observation */
  effectiveTiming?: Timing;
  /** Clinically relevant time/time-period for observation */
  effectiveInstant?: primitives.R4.instant;
  /** Extension of effectiveInstant element */
  _effectiveInstant?: Element;
  /** Date/Time this version was made available */
  issued?: primitives.R4.instant;
  /** Extension of issued element */
  _issued?: Element;
  /** Who is responsible for the observation */
  performer?: Reference[];
  /** Actual result */
  valueQuantity?: Quantity;
  /** Actual result */
  valueCodeableConcept?: CodeableConcept;
  /** Actual result */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Actual result */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Actual result */
  valueInteger?: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Actual result */
  valueRange?: Range;
  /** Actual result */
  valueRatio?: Ratio;
  /** Actual result */
  valueSampledData?: SampledData;
  /** Actual result */
  valueTime?: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Actual result */
  valueDateTime?: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Actual result */
  valuePeriod?: Period;
  /** Why the result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: CodeableConcept[];
  /** Comments about the observation */
  note?: Annotation[];
  /** Observed body part */
  bodySite?: CodeableConcept;
  /** How it was done */
  method?: CodeableConcept;
  /** Specimen used for this observation */
  specimen?: Reference;
  /** (Measurement) Device */
  device?: Reference;
  /** Related resource that belongs to the Observation group */
  hasMember?: Reference[];
  /** Related measurements the observation is made from */
  derivedFrom?: Reference[];
}
/**
 * Measurements and simple assertions
 */
export const Observation: t.Type<Observation> = t.recursion<Observation>(
  "Observation",
  () =>
    t.intersection([
      t.type({
        /** registered | preliminary | final | amended + */
        status: primitives.R4.code,
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
        /** Business Identifier for observation */
        identifier: t.array(Identifier),
        /** Fulfills plan, proposal or order */
        basedOn: t.array(Reference),
        /** Part of referenced event */
        partOf: t.array(Reference),
        /** Extension of status element */
        _status: Element,
        /** Classification of  type of observation */
        category: t.array(CodeableConcept),
        /** Who and/or what the observation is about */
        subject: Reference,
        /** What the observation is about, when it is not about the subject of record */
        focus: t.array(Reference),
        /** Healthcare event during which this observation is made */
        encounter: Reference,
        /** Clinically relevant time/time-period for observation */
        effectiveDateTime: primitives.R4.dateTime,
        /** Extension of effectiveDateTime element */
        _effectiveDateTime: Element,
        /** Clinically relevant time/time-period for observation */
        effectivePeriod: Period,
        /** Clinically relevant time/time-period for observation */
        effectiveTiming: Timing,
        /** Clinically relevant time/time-period for observation */
        effectiveInstant: primitives.R4.instant,
        /** Extension of effectiveInstant element */
        _effectiveInstant: Element,
        /** Date/Time this version was made available */
        issued: primitives.R4.instant,
        /** Extension of issued element */
        _issued: Element,
        /** Who is responsible for the observation */
        performer: t.array(Reference),
        /** Actual result */
        valueQuantity: Quantity,
        /** Actual result */
        valueCodeableConcept: CodeableConcept,
        /** Actual result */
        valueString: primitives.R4.string,
        /** Extension of valueString element */
        _valueString: Element,
        /** Actual result */
        valueBoolean: primitives.R4.boolean,
        /** Extension of valueBoolean element */
        _valueBoolean: Element,
        /** Actual result */
        valueInteger: primitives.R4.integer,
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Actual result */
        valueRange: Range,
        /** Actual result */
        valueRatio: Ratio,
        /** Actual result */
        valueSampledData: SampledData,
        /** Actual result */
        valueTime: primitives.R4.time,
        /** Extension of valueTime element */
        _valueTime: Element,
        /** Actual result */
        valueDateTime: primitives.R4.dateTime,
        /** Extension of valueDateTime element */
        _valueDateTime: Element,
        /** Actual result */
        valuePeriod: Period,
        /** Why the result is missing */
        dataAbsentReason: CodeableConcept,
        /** High, low, normal, etc. */
        interpretation: t.array(CodeableConcept),
        /** Comments about the observation */
        note: t.array(Annotation),
        /** Observed body part */
        bodySite: CodeableConcept,
        /** How it was done */
        method: CodeableConcept,
        /** Specimen used for this observation */
        specimen: Reference,
        /** (Measurement) Device */
        device: Reference,
        /** Related resource that belongs to the Observation group */
        hasMember: t.array(Reference),
        /** Related measurements the observation is made from */
        derivedFrom: t.array(Reference)
      })
    ])
);

/**
 * Provides guide for interpretation
 */
export interface ObservationReferenceRange {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Low Range, if relevant */
  low?: Quantity;
  /** High Range, if relevant */
  high?: Quantity;
  /** Reference range qualifier */
  type?: CodeableConcept;
  /** Reference range population */
  appliesTo?: CodeableConcept[];
  /** Applicable age range, if relevant */
  age?: Range;
  /** Text based reference range in an observation */
  text?: string;
  /** Extension of text element */
  _text?: Element;
}
/**
 * Provides guide for interpretation
 */
export const ObservationReferenceRange: t.Type<
  ObservationReferenceRange
> = t.recursion<ObservationReferenceRange>("ObservationReferenceRange", () =>
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
      /** Low Range, if relevant */
      low: Quantity,
      /** High Range, if relevant */
      high: Quantity,
      /** Reference range qualifier */
      type: CodeableConcept,
      /** Reference range population */
      appliesTo: t.array(CodeableConcept),
      /** Applicable age range, if relevant */
      age: Range,
      /** Text based reference range in an observation */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element
    })
  ])
);

/**
 * Component results
 */
export interface ObservationComponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of component observation (code / type) */
  code: CodeableConcept;
  /** Actual component result */
  valueQuantity?: Quantity;
  /** Actual component result */
  valueCodeableConcept?: CodeableConcept;
  /** Actual component result */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Actual component result */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Actual component result */
  valueInteger?: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Actual component result */
  valueRange?: Range;
  /** Actual component result */
  valueRatio?: Ratio;
  /** Actual component result */
  valueSampledData?: SampledData;
  /** Actual component result */
  valueTime?: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Actual component result */
  valueDateTime?: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Actual component result */
  valuePeriod?: Period;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: CodeableConcept[];
  /** Provides guide for interpretation of component result */
  referenceRange?: ObservationReferenceRange[];
}
/**
 * Component results
 */
export const ObservationComponent: t.Type<ObservationComponent> = t.recursion<
  ObservationComponent
>("ObservationComponent", () =>
  t.intersection([
    t.type({
      /** Type of component observation (code / type) */
      code: CodeableConcept
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
      /** Actual component result */
      valueQuantity: Quantity,
      /** Actual component result */
      valueCodeableConcept: CodeableConcept,
      /** Actual component result */
      valueString: primitives.R4.string,
      /** Extension of valueString element */
      _valueString: Element,
      /** Actual component result */
      valueBoolean: primitives.R4.boolean,
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Actual component result */
      valueInteger: primitives.R4.integer,
      /** Extension of valueInteger element */
      _valueInteger: Element,
      /** Actual component result */
      valueRange: Range,
      /** Actual component result */
      valueRatio: Ratio,
      /** Actual component result */
      valueSampledData: SampledData,
      /** Actual component result */
      valueTime: primitives.R4.time,
      /** Extension of valueTime element */
      _valueTime: Element,
      /** Actual component result */
      valueDateTime: primitives.R4.dateTime,
      /** Extension of valueDateTime element */
      _valueDateTime: Element,
      /** Actual component result */
      valuePeriod: Period,
      /** Why the component result is missing */
      dataAbsentReason: CodeableConcept,
      /** High, low, normal, etc. */
      interpretation: t.array(CodeableConcept),
      /** Provides guide for interpretation of component result */
      referenceRange: t.array(ObservationReferenceRange)
    })
  ])
);
