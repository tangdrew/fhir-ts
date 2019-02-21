/**
 * DeviceMetric Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Describes the calibrations that have been performed or that are required to be performed
 */
export interface DeviceMetricCalibration {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** unspecified | offset | gain | two-point */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** not-calibrated | calibration-required | calibrated | unspecified */
  state?: t.TypeOf<primitives.R4.CodeType>;
  /** Describes the time last calibration has been performed */
  time?: t.TypeOf<primitives.R4.InstantType>;
}

export interface DeviceMetricCalibrationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** unspecified | offset | gain | two-point */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** not-calibrated | calibration-required | calibrated | unspecified */
  state?: t.OutputOf<primitives.R4.CodeType>;
  /** Describes the time last calibration has been performed */
  time?: t.OutputOf<primitives.R4.InstantType>;
}

export const DeviceMetricCalibration: t.RecursiveType<
  t.Type<DeviceMetricCalibration, DeviceMetricCalibrationOutputType>,
  DeviceMetricCalibration,
  DeviceMetricCalibrationOutputType
> = t.recursion<DeviceMetricCalibration, DeviceMetricCalibrationOutputType>(
  "DeviceMetricCalibration",
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
          /** not-calibrated | calibration-required | calibrated | unspecified */
          state: primitives.R4.code,
          /** Describes the time last calibration has been performed */
          time: primitives.R4.instant,
          /** unspecified | offset | gain | two-point */
          type: primitives.R4.code
        })
      ],
      "DeviceMetricCalibration"
    )
);

/**
 * Measurement, calculation or setting capability of a medical device
 */
export interface DeviceMetric {
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
  /** Instance identifier */
  identifier?: Identifier[];
  /** Identity of metric, for example Heart Rate or PEEP Setting */
  type: CodeableConcept;
  /** Unit of Measure for the Metric */
  unit?: CodeableConcept;
  /** Describes the link to the source Device */
  source?: Reference;
  /** Describes the link to the parent Device */
  parent?: Reference;
  /** on | off | standby | entered-in-error */
  operationalStatus?: t.TypeOf<primitives.R4.CodeType>;
  /** black | red | green | yellow | blue | magenta | cyan | white */
  color?: t.TypeOf<primitives.R4.CodeType>;
  /** measurement | setting | calculation | unspecified */
  category: t.TypeOf<primitives.R4.CodeType>;
  /** Describes the measurement repetition time */
  measurementPeriod?: Timing;
  /** Describes the calibrations that have been performed or that are required to be performed */
  calibration?: DeviceMetricCalibration[];
}

export interface DeviceMetricOutputType {
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
  /** Instance identifier */
  identifier?: IdentifierOutputType[];
  /** Identity of metric, for example Heart Rate or PEEP Setting */
  type: CodeableConceptOutputType;
  /** Unit of Measure for the Metric */
  unit?: CodeableConceptOutputType;
  /** Describes the link to the source Device */
  source?: ReferenceOutputType;
  /** Describes the link to the parent Device */
  parent?: ReferenceOutputType;
  /** on | off | standby | entered-in-error */
  operationalStatus?: t.OutputOf<primitives.R4.CodeType>;
  /** black | red | green | yellow | blue | magenta | cyan | white */
  color?: t.OutputOf<primitives.R4.CodeType>;
  /** measurement | setting | calculation | unspecified */
  category: t.OutputOf<primitives.R4.CodeType>;
  /** Describes the measurement repetition time */
  measurementPeriod?: TimingOutputType;
  /** Describes the calibrations that have been performed or that are required to be performed */
  calibration?: DeviceMetricCalibrationOutputType[];
}

export const DeviceMetric: t.RecursiveType<
  t.Type<DeviceMetric, DeviceMetricOutputType>,
  DeviceMetric,
  DeviceMetricOutputType
> = t.recursion<DeviceMetric, DeviceMetricOutputType>("DeviceMetric", () =>
  t.intersection(
    [
      t.type({
        /** measurement | setting | calculation | unspecified */
        category: primitives.R4.code,
        /** Identity of metric, for example Heart Rate or PEEP Setting */
        type: CodeableConcept
      }),
      t.partial({
        /** Describes the calibrations that have been performed or that are required to be performed */
        calibration: t.array(DeviceMetricCalibration),
        /** black | red | green | yellow | blue | magenta | cyan | white */
        color: primitives.R4.code,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Instance identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Describes the measurement repetition time */
        measurementPeriod: Timing,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** on | off | standby | entered-in-error */
        operationalStatus: primitives.R4.code,
        /** Describes the link to the parent Device */
        parent: Reference,
        /** Describes the link to the source Device */
        source: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Unit of Measure for the Metric */
        unit: CodeableConcept
      })
    ],
    "DeviceMetric"
  )
);
