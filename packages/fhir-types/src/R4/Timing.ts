/**
 * Timing Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Period, PeriodOutputType } from "./Period";
import { Range, RangeOutputType } from "./Range";

/**
 * When the event is to occur
 */
export interface TimingRepeat {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Length/Range of lengths, or (Start and/or end) limits */
  bounds?: Duration | Range | Period;
  /** Number of times to repeat */
  count?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Maximum number of times to repeat */
  countMax?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** How long when it happens */
  duration?: t.TypeOf<primitives.R4.DecimalType>;
  /** How long when it happens (Max) */
  durationMax?: t.TypeOf<primitives.R4.DecimalType>;
  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  durationUnit?: t.TypeOf<primitives.R4.CodeType>;
  /** Event occurs frequency times per period */
  frequency?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Event occurs up to frequencyMax times per period */
  frequencyMax?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Event occurs frequency times per period */
  period?: t.TypeOf<primitives.R4.DecimalType>;
  /** Upper limit of period (3-4 hours) */
  periodMax?: t.TypeOf<primitives.R4.DecimalType>;
  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  periodUnit?: t.TypeOf<primitives.R4.CodeType>;
  /** mon | tue | wed | thu | fri | sat | sun */
  dayOfWeek?: t.TypeOf<primitives.R4.CodeType>[];
  /** Time of day for action */
  timeOfDay?: t.TypeOf<primitives.R4.TimeType>[];
  /** Code for time period of occurrence */
  when?: t.TypeOf<primitives.R4.CodeType>[];
  /** Minutes from event (before or after) */
  offset?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
}

export interface TimingRepeatOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Length/Range of lengths, or (Start and/or end) limits */
  bounds?: DurationOutputType | RangeOutputType | PeriodOutputType;
  /** Number of times to repeat */
  count?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Maximum number of times to repeat */
  countMax?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** How long when it happens */
  duration?: t.OutputOf<primitives.R4.DecimalType>;
  /** How long when it happens (Max) */
  durationMax?: t.OutputOf<primitives.R4.DecimalType>;
  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  durationUnit?: t.OutputOf<primitives.R4.CodeType>;
  /** Event occurs frequency times per period */
  frequency?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Event occurs up to frequencyMax times per period */
  frequencyMax?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Event occurs frequency times per period */
  period?: t.OutputOf<primitives.R4.DecimalType>;
  /** Upper limit of period (3-4 hours) */
  periodMax?: t.OutputOf<primitives.R4.DecimalType>;
  /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
  periodUnit?: t.OutputOf<primitives.R4.CodeType>;
  /** mon | tue | wed | thu | fri | sat | sun */
  dayOfWeek?: t.OutputOf<primitives.R4.CodeType>[];
  /** Time of day for action */
  timeOfDay?: t.OutputOf<primitives.R4.TimeType>[];
  /** Code for time period of occurrence */
  when?: t.OutputOf<primitives.R4.CodeType>[];
  /** Minutes from event (before or after) */
  offset?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
}

export const TimingRepeat: t.RecursiveType<
  t.Type<TimingRepeat, TimingRepeatOutputType>,
  TimingRepeat,
  TimingRepeatOutputType
> = t.recursion<TimingRepeat, TimingRepeatOutputType>("TimingRepeat", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Length/Range of lengths, or (Start and/or end) limits */
        bounds: t.union([Duration, Range, Period]),
        /** Number of times to repeat */
        count: primitives.R4.positiveInt,
        /** Maximum number of times to repeat */
        countMax: primitives.R4.positiveInt,
        /** mon | tue | wed | thu | fri | sat | sun */
        dayOfWeek: t.array(primitives.R4.code),
        /** How long when it happens */
        duration: primitives.R4.decimal,
        /** How long when it happens (Max) */
        durationMax: primitives.R4.decimal,
        /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
        durationUnit: primitives.R4.code,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Event occurs frequency times per period */
        frequency: primitives.R4.positiveInt,
        /** Event occurs up to frequencyMax times per period */
        frequencyMax: primitives.R4.positiveInt,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Minutes from event (before or after) */
        offset: primitives.R4.unsignedInt,
        /** Event occurs frequency times per period */
        period: primitives.R4.decimal,
        /** Upper limit of period (3-4 hours) */
        periodMax: primitives.R4.decimal,
        /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
        periodUnit: primitives.R4.code,
        /** Time of day for action */
        timeOfDay: t.array(primitives.R4.time),
        /** Code for time period of occurrence */
        when: t.array(primitives.R4.code)
      })
    ],
    "TimingRepeat"
  )
);

/**
 * A timing schedule that specifies an event that may occur multiple times
 */
export interface Timing {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When the event occurs */
  event?: t.TypeOf<primitives.R4.DateTimeType>[];
  /** When the event is to occur */
  repeat?: TimingRepeat;
  /** BID | TID | QID | AM | PM | QD | QOD | + */
  code?: CodeableConcept;
}

export interface TimingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** When the event occurs */
  event?: t.OutputOf<primitives.R4.DateTimeType>[];
  /** When the event is to occur */
  repeat?: TimingRepeatOutputType;
  /** BID | TID | QID | AM | PM | QD | QOD | + */
  code?: CodeableConceptOutputType;
}

export const Timing: t.RecursiveType<
  t.Type<Timing, TimingOutputType>,
  Timing,
  TimingOutputType
> = t.recursion<Timing, TimingOutputType>("Timing", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** BID | TID | QID | AM | PM | QD | QOD | + */
        code: CodeableConcept,
        /** When the event occurs */
        event: t.array(primitives.R4.dateTime),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** When the event is to occur */
        repeat: TimingRepeat
      })
    ],
    "Timing"
  )
);
