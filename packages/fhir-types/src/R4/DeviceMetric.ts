/**
 * DeviceMetric Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Measurement, calculation or setting capability of a medical device
 */
export interface DeviceMetric {
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
  operationalStatus?: primitives.R4.code;
  /** Extension of operationalStatus element */
  _operationalStatus?: Element;
  /** black | red | green | yellow | blue | magenta | cyan | white */
  color?: primitives.R4.code;
  /** Extension of color element */
  _color?: Element;
  /** measurement | setting | calculation | unspecified */
  category: primitives.R4.code;
  /** Extension of category element */
  _category?: Element;
  /** Describes the measurement repetition time */
  measurementPeriod?: Timing;
}
/**
 * Measurement, calculation or setting capability of a medical device
 */
export const DeviceMetric: t.Type<DeviceMetric> = t.recursion<DeviceMetric>(
  "DeviceMetric",
  () =>
    t.intersection([
      t.type({
        /** Identity of metric, for example Heart Rate or PEEP Setting */
        type: CodeableConcept,
        /** measurement | setting | calculation | unspecified */
        category: primitives.R4.code
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
        /** Instance identifier */
        identifier: t.array(Identifier),
        /** Unit of Measure for the Metric */
        unit: CodeableConcept,
        /** Describes the link to the source Device */
        source: Reference,
        /** Describes the link to the parent Device */
        parent: Reference,
        /** on | off | standby | entered-in-error */
        operationalStatus: primitives.R4.code,
        /** Extension of operationalStatus element */
        _operationalStatus: Element,
        /** black | red | green | yellow | blue | magenta | cyan | white */
        color: primitives.R4.code,
        /** Extension of color element */
        _color: Element,
        /** Extension of category element */
        _category: Element,
        /** Describes the measurement repetition time */
        measurementPeriod: Timing
      })
    ])
);

/**
 * Describes the calibrations that have been performed or that are required to be performed
 */
export interface DeviceMetricCalibration {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** unspecified | offset | gain | two-point */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** not-calibrated | calibration-required | calibrated | unspecified */
  state?: primitives.R4.code;
  /** Extension of state element */
  _state?: Element;
  /** Describes the time last calibration has been performed */
  time?: primitives.R4.instant;
  /** Extension of time element */
  _time?: Element;
}
/**
 * Describes the calibrations that have been performed or that are required to be performed
 */
export const DeviceMetricCalibration: t.Type<
  DeviceMetricCalibration
> = t.recursion<DeviceMetricCalibration>("DeviceMetricCalibration", () =>
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
      /** unspecified | offset | gain | two-point */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element,
      /** not-calibrated | calibration-required | calibrated | unspecified */
      state: primitives.R4.code,
      /** Extension of state element */
      _state: Element,
      /** Describes the time last calibration has been performed */
      time: primitives.R4.instant,
      /** Extension of time element */
      _time: Element
    })
  ])
);
