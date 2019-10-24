/**
 * Timing Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";
import { Range } from "./Range";

/**
 * A timing schedule that specifies an event that may occur multiple times
 */
export interface Timing {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When the event occurs */
  event?: primitives.R4.dateTime[];
  /** Extension of event element */
  _event?: Element[];
  /** When the event is to occur */
  repeat?: Element;
  /** BID | TID | QID | AM | PM | QD | QOD | + */
  code?: CodeableConcept;
}
/**
 * A timing schedule that specifies an event that may occur multiple times
 */
export const Timing: t.Type<Timing> = t.recursion<Timing>("Timing", () =>
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
      /** When the event occurs */
      event: t.array(primitives.R4.dateTime),
      /** Extension of event element */
      _event: t.array(Element),
      /** When the event is to occur */
      repeat: Element,
      /** BID | TID | QID | AM | PM | QD | QOD | + */
      code: CodeableConcept
    })
  ])
);

/**
 * Unique id for inter-element referencing
 */
export interface TimingRepeat {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Length/Range of lengths, or (Start and/or end) limits */
  boundsDuration?: Duration;
  /** Length/Range of lengths, or (Start and/or end) limits */
  boundsRange?: Range;
  /** Length/Range of lengths, or (Start and/or end) limits */
  boundsPeriod?: Period;
  /** Number of times to repeat */
  count?: primitives.R4.positiveInt;
  /** Extension of count element */
  _count?: Element;
  /** Maximum number of times to repeat */
  countMax?: primitives.R4.positiveInt;
  /** Extension of countMax element */
  _countMax?: Element;
  /** How long when it happens */
  duration?: primitives.R4.decimal;
  /** Extension of duration element */
  _duration?: Element;
  /** How long when it happens (Max) */
  durationMax?: primitives.R4.decimal;
  /** Extension of durationMax element */
  _durationMax?: Element;
  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  durationUnit?: primitives.R4.code;
  /** Extension of durationUnit element */
  _durationUnit?: Element;
  /** Event occurs frequency times per period */
  frequency?: primitives.R4.positiveInt;
  /** Extension of frequency element */
  _frequency?: Element;
  /** Event occurs up to frequencyMax times per period */
  frequencyMax?: primitives.R4.positiveInt;
  /** Extension of frequencyMax element */
  _frequencyMax?: Element;
  /** Event occurs frequency times per period */
  period?: primitives.R4.decimal;
  /** Extension of period element */
  _period?: Element;
  /** Upper limit of period (3-4 hours) */
  periodMax?: primitives.R4.decimal;
  /** Extension of periodMax element */
  _periodMax?: Element;
  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  periodUnit?: primitives.R4.code;
  /** Extension of periodUnit element */
  _periodUnit?: Element;
  /** mon | tue | wed | thu | fri | sat | sun */
  dayOfWeek?: primitives.R4.code[];
  /** Extension of dayOfWeek element */
  _dayOfWeek?: Element[];
  /** Time of day for action */
  timeOfDay?: primitives.R4.time[];
  /** Extension of timeOfDay element */
  _timeOfDay?: Element[];
  /** Code for time period of occurrence */
  when?: primitives.R4.code[];
  /** Extension of when element */
  _when?: Element[];
  /** Minutes from event (before or after) */
  offset?: primitives.R4.unsignedInt;
  /** Extension of offset element */
  _offset?: Element;
}
/**
 * Unique id for inter-element referencing
 */
export const TimingRepeat: t.Type<TimingRepeat> = t.recursion<TimingRepeat>(
  "TimingRepeat",
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
        /** Length/Range of lengths, or (Start and/or end) limits */
        boundsDuration: Duration,
        /** Length/Range of lengths, or (Start and/or end) limits */
        boundsRange: Range,
        /** Length/Range of lengths, or (Start and/or end) limits */
        boundsPeriod: Period,
        /** Number of times to repeat */
        count: primitives.R4.positiveInt,
        /** Extension of count element */
        _count: Element,
        /** Maximum number of times to repeat */
        countMax: primitives.R4.positiveInt,
        /** Extension of countMax element */
        _countMax: Element,
        /** How long when it happens */
        duration: primitives.R4.decimal,
        /** Extension of duration element */
        _duration: Element,
        /** How long when it happens (Max) */
        durationMax: primitives.R4.decimal,
        /** Extension of durationMax element */
        _durationMax: Element,
        /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
        durationUnit: primitives.R4.code,
        /** Extension of durationUnit element */
        _durationUnit: Element,
        /** Event occurs frequency times per period */
        frequency: primitives.R4.positiveInt,
        /** Extension of frequency element */
        _frequency: Element,
        /** Event occurs up to frequencyMax times per period */
        frequencyMax: primitives.R4.positiveInt,
        /** Extension of frequencyMax element */
        _frequencyMax: Element,
        /** Event occurs frequency times per period */
        period: primitives.R4.decimal,
        /** Extension of period element */
        _period: Element,
        /** Upper limit of period (3-4 hours) */
        periodMax: primitives.R4.decimal,
        /** Extension of periodMax element */
        _periodMax: Element,
        /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
        periodUnit: primitives.R4.code,
        /** Extension of periodUnit element */
        _periodUnit: Element,
        /** mon | tue | wed | thu | fri | sat | sun */
        dayOfWeek: t.array(primitives.R4.code),
        /** Extension of dayOfWeek element */
        _dayOfWeek: t.array(Element),
        /** Time of day for action */
        timeOfDay: t.array(primitives.R4.time),
        /** Extension of timeOfDay element */
        _timeOfDay: t.array(Element),
        /** Code for time period of occurrence */
        when: t.array(primitives.R4.code),
        /** Extension of when element */
        _when: t.array(Element),
        /** Minutes from event (before or after) */
        offset: primitives.R4.unsignedInt,
        /** Extension of offset element */
        _offset: Element
      })
    ])
);
