/**
 * TriggerDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Expression, ExpressionOutputType } from "./Expression";
import { Extension, ExtensionOutputType } from "./Extension";
import { Reference, ReferenceOutputType } from "./Reference";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Defines an expected trigger for a module
 */
export interface TriggerDefinition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Name or URI that identifies the event */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Timing of the event */
  timing?:
    | Timing
    | Reference
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>;
  /** Triggering data of the event (multiple = 'and') */
  data?: DataRequirement[];
  /** Whether the event triggers (boolean expression) */
  condition?: Expression;
}

export interface TriggerDefinitionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Name or URI that identifies the event */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Timing of the event */
  timing?:
    | TimingOutputType
    | ReferenceOutputType
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>;
  /** Triggering data of the event (multiple = 'and') */
  data?: DataRequirementOutputType[];
  /** Whether the event triggers (boolean expression) */
  condition?: ExpressionOutputType;
}

export const TriggerDefinition: t.RecursiveType<
  t.Type<TriggerDefinition, TriggerDefinitionOutputType>,
  TriggerDefinition,
  TriggerDefinitionOutputType
> = t.recursion<TriggerDefinition, TriggerDefinitionOutputType>(
  "TriggerDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** named-event | periodic | data-changed | data-added | data-modified | data-removed | data-accessed | data-access-ended */
          type: primitives.R4.code
        }),
        t.partial({
          /** Whether the event triggers (boolean expression) */
          condition: Expression,
          /** Triggering data of the event (multiple = 'and') */
          data: t.array(DataRequirement),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Name or URI that identifies the event */
          name: primitives.R4.string,
          /** Timing of the event */
          timing: t.union([
            Timing,
            Reference,
            primitives.R4.date,
            primitives.R4.dateTime
          ])
        })
      ],
      "TriggerDefinition"
    )
);
