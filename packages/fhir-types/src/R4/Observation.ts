/**
 * Observation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { SampledData, SampledDataOutputType } from "./SampledData";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Provides guide for interpretation
 */
export interface ObservationReferenceRange {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  text?: t.TypeOf<primitives.R4.StringType>;
}

export interface ObservationReferenceRangeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Low Range, if relevant */
  low?: QuantityOutputType;
  /** High Range, if relevant */
  high?: QuantityOutputType;
  /** Reference range qualifier */
  type?: CodeableConceptOutputType;
  /** Reference range population */
  appliesTo?: CodeableConceptOutputType[];
  /** Applicable age range, if relevant */
  age?: RangeOutputType;
  /** Text based reference range in an observation */
  text?: t.OutputOf<primitives.R4.StringType>;
}

export const ObservationReferenceRange: t.RecursiveType<
  t.Type<ObservationReferenceRange, ObservationReferenceRangeOutputType>,
  ObservationReferenceRange,
  ObservationReferenceRangeOutputType
> = t.recursion<ObservationReferenceRange, ObservationReferenceRangeOutputType>(
  "ObservationReferenceRange",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Applicable age range, if relevant */
          age: Range,
          /** Reference range population */
          appliesTo: t.array(CodeableConcept),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** High Range, if relevant */
          high: Quantity,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Low Range, if relevant */
          low: Quantity,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Text based reference range in an observation */
          text: primitives.R4.string,
          /** Reference range qualifier */
          type: CodeableConcept
        })
      ],
      "ObservationReferenceRange"
    )
);

/**
 * Component results
 */
export interface ObservationComponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of component observation (code / type) */
  code: CodeableConcept;
  /** Actual component result */
  value?:
    | Quantity
    | CodeableConcept
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.IntegerType>
    | Range
    | Ratio
    | SampledData
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: CodeableConcept[];
  /** Provides guide for interpretation of component result */
  referenceRange?: ObservationReferenceRange[];
}

export interface ObservationComponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of component observation (code / type) */
  code: CodeableConceptOutputType;
  /** Actual component result */
  value?:
    | QuantityOutputType
    | CodeableConceptOutputType
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.IntegerType>
    | RangeOutputType
    | RatioOutputType
    | SampledDataOutputType
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConceptOutputType;
  /** High, low, normal, etc. */
  interpretation?: CodeableConceptOutputType[];
  /** Provides guide for interpretation of component result */
  referenceRange?: ObservationReferenceRangeOutputType[];
}

export const ObservationComponent: t.RecursiveType<
  t.Type<ObservationComponent, ObservationComponentOutputType>,
  ObservationComponent,
  ObservationComponentOutputType
> = t.recursion<ObservationComponent, ObservationComponentOutputType>(
  "ObservationComponent",
  () =>
    t.intersection(
      [
        t.type({
          /** Type of component observation (code / type) */
          code: CodeableConcept
        }),
        t.partial({
          /** Why the component result is missing */
          dataAbsentReason: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** High, low, normal, etc. */
          interpretation: t.array(CodeableConcept),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Provides guide for interpretation of component result */
          referenceRange: t.array(ObservationReferenceRange),
          /** Actual component result */
          value: t.union([
            Quantity,
            CodeableConcept,
            primitives.R4.string,
            primitives.R4.boolean,
            primitives.R4.integer,
            Range,
            Ratio,
            SampledData,
            primitives.R4.time,
            primitives.R4.dateTime,
            Period
          ])
        })
      ],
      "ObservationComponent"
    )
);

/**
 * Measurements and simple assertions
 */
export interface Observation {
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
  /** Business Identifier for observation */
  identifier?: Identifier[];
  /** Fulfills plan, proposal or order */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** registered | preliminary | final | amended + */
  status: t.TypeOf<primitives.R4.CodeType>;
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
  effective?:
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period
    | Timing
    | t.TypeOf<primitives.R4.InstantType>;
  /** Date/Time this version was made available */
  issued?: t.TypeOf<primitives.R4.InstantType>;
  /** Who is responsible for the observation */
  performer?: Reference[];
  /** Actual result */
  value?:
    | Quantity
    | CodeableConcept
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.IntegerType>
    | Range
    | Ratio
    | SampledData
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | Period;
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
  /** Provides guide for interpretation */
  referenceRange?: ObservationReferenceRange[];
  /** Related resource that belongs to the Observation group */
  hasMember?: Reference[];
  /** Related measurements the observation is made from */
  derivedFrom?: Reference[];
  /** Component results */
  component?: ObservationComponent[];
}

export interface ObservationOutputType {
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
  /** Business Identifier for observation */
  identifier?: IdentifierOutputType[];
  /** Fulfills plan, proposal or order */
  basedOn?: ReferenceOutputType[];
  /** Part of referenced event */
  partOf?: ReferenceOutputType[];
  /** registered | preliminary | final | amended + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Classification of  type of observation */
  category?: CodeableConceptOutputType[];
  /** Type of observation (code / type) */
  code: CodeableConceptOutputType;
  /** Who and/or what the observation is about */
  subject?: ReferenceOutputType;
  /** What the observation is about, when it is not about the subject of record */
  focus?: ReferenceOutputType[];
  /** Healthcare event during which this observation is made */
  encounter?: ReferenceOutputType;
  /** Clinically relevant time/time-period for observation */
  effective?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType
    | t.OutputOf<primitives.R4.InstantType>;
  /** Date/Time this version was made available */
  issued?: t.OutputOf<primitives.R4.InstantType>;
  /** Who is responsible for the observation */
  performer?: ReferenceOutputType[];
  /** Actual result */
  value?:
    | QuantityOutputType
    | CodeableConceptOutputType
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.IntegerType>
    | RangeOutputType
    | RatioOutputType
    | SampledDataOutputType
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType;
  /** Why the result is missing */
  dataAbsentReason?: CodeableConceptOutputType;
  /** High, low, normal, etc. */
  interpretation?: CodeableConceptOutputType[];
  /** Comments about the observation */
  note?: AnnotationOutputType[];
  /** Observed body part */
  bodySite?: CodeableConceptOutputType;
  /** How it was done */
  method?: CodeableConceptOutputType;
  /** Specimen used for this observation */
  specimen?: ReferenceOutputType;
  /** (Measurement) Device */
  device?: ReferenceOutputType;
  /** Provides guide for interpretation */
  referenceRange?: ObservationReferenceRangeOutputType[];
  /** Related resource that belongs to the Observation group */
  hasMember?: ReferenceOutputType[];
  /** Related measurements the observation is made from */
  derivedFrom?: ReferenceOutputType[];
  /** Component results */
  component?: ObservationComponentOutputType[];
}

export const Observation: t.RecursiveType<
  t.Type<Observation, ObservationOutputType>,
  Observation,
  ObservationOutputType
> = t.recursion<Observation, ObservationOutputType>("Observation", () =>
  t.intersection(
    [
      t.type({
        /** Type of observation (code / type) */
        code: CodeableConcept,
        /** registered | preliminary | final | amended + */
        status: primitives.R4.code
      }),
      t.partial({
        /** Fulfills plan, proposal or order */
        basedOn: t.array(Reference),
        /** Observed body part */
        bodySite: CodeableConcept,
        /** Classification of  type of observation */
        category: t.array(CodeableConcept),
        /** Component results */
        component: t.array(ObservationComponent),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Why the result is missing */
        dataAbsentReason: CodeableConcept,
        /** Related measurements the observation is made from */
        derivedFrom: t.array(Reference),
        /** (Measurement) Device */
        device: Reference,
        /** Clinically relevant time/time-period for observation */
        effective: t.union([
          primitives.R4.dateTime,
          Period,
          Timing,
          primitives.R4.instant
        ]),
        /** Healthcare event during which this observation is made */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** What the observation is about, when it is not about the subject of record */
        focus: t.array(Reference),
        /** Related resource that belongs to the Observation group */
        hasMember: t.array(Reference),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for observation */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** High, low, normal, etc. */
        interpretation: t.array(CodeableConcept),
        /** Date/Time this version was made available */
        issued: primitives.R4.instant,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** How it was done */
        method: CodeableConcept,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments about the observation */
        note: t.array(Annotation),
        /** Part of referenced event */
        partOf: t.array(Reference),
        /** Who is responsible for the observation */
        performer: t.array(Reference),
        /** Provides guide for interpretation */
        referenceRange: t.array(ObservationReferenceRange),
        /** Specimen used for this observation */
        specimen: Reference,
        /** Who and/or what the observation is about */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Actual result */
        value: t.union([
          Quantity,
          CodeableConcept,
          primitives.R4.string,
          primitives.R4.boolean,
          primitives.R4.integer,
          Range,
          Ratio,
          SampledData,
          primitives.R4.time,
          primitives.R4.dateTime,
          Period
        ])
      })
    ],
    "Observation"
  )
);
