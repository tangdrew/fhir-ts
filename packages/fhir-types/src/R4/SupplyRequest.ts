/**
 * SupplyRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Ordered item details
 */
export interface SupplyRequestParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item detail */
  code?: CodeableConcept;
  /** Value of detail */
  value?:
    | CodeableConcept
    | Quantity
    | Range
    | t.TypeOf<primitives.R4.BooleanType>;
}

export interface SupplyRequestParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Item detail */
  code?: CodeableConceptOutputType;
  /** Value of detail */
  value?:
    | CodeableConceptOutputType
    | QuantityOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.BooleanType>;
}

export const SupplyRequestParameter: t.RecursiveType<
  t.Type<SupplyRequestParameter, SupplyRequestParameterOutputType>,
  SupplyRequestParameter,
  SupplyRequestParameterOutputType
> = t.recursion<SupplyRequestParameter, SupplyRequestParameterOutputType>(
  "SupplyRequestParameter",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Item detail */
          code: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Value of detail */
          value: t.union([
            CodeableConcept,
            Quantity,
            Range,
            primitives.R4.boolean
          ])
        })
      ],
      "SupplyRequestParameter"
    )
);

/**
 * Request for a medication, substance or device
 */
export interface SupplyRequest {
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
  /** Business Identifier for SupplyRequest */
  identifier?: Identifier[];
  /** draft | active | suspended + */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** The kind of supply (central, non-stock, etc.) */
  category?: CodeableConcept;
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** Medication, Substance, or Device requested to be supplied */
  item: CodeableConcept | Reference;
  /** The requested amount of the item indicated */
  quantity: Quantity;
  /** Ordered item details */
  parameter?: SupplyRequestParameter[];
  /** When the request should be fulfilled */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period | Timing;
  /** When the request was made */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Individual making the request */
  requester?: Reference;
  /** Who is intended to fulfill the request */
  supplier?: Reference[];
  /** The reason why the supply item was requested */
  reasonCode?: CodeableConcept[];
  /** The reason why the supply item was requested */
  reasonReference?: Reference[];
  /** The origin of the supply */
  deliverFrom?: Reference;
  /** The destination of the supply */
  deliverTo?: Reference;
}

export interface SupplyRequestOutputType {
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
  /** Business Identifier for SupplyRequest */
  identifier?: IdentifierOutputType[];
  /** draft | active | suspended + */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** The kind of supply (central, non-stock, etc.) */
  category?: CodeableConceptOutputType;
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** Medication, Substance, or Device requested to be supplied */
  item: CodeableConceptOutputType | ReferenceOutputType;
  /** The requested amount of the item indicated */
  quantity: QuantityOutputType;
  /** Ordered item details */
  parameter?: SupplyRequestParameterOutputType[];
  /** When the request should be fulfilled */
  occurrence?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType;
  /** When the request was made */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Individual making the request */
  requester?: ReferenceOutputType;
  /** Who is intended to fulfill the request */
  supplier?: ReferenceOutputType[];
  /** The reason why the supply item was requested */
  reasonCode?: CodeableConceptOutputType[];
  /** The reason why the supply item was requested */
  reasonReference?: ReferenceOutputType[];
  /** The origin of the supply */
  deliverFrom?: ReferenceOutputType;
  /** The destination of the supply */
  deliverTo?: ReferenceOutputType;
}

export const SupplyRequest: t.RecursiveType<
  t.Type<SupplyRequest, SupplyRequestOutputType>,
  SupplyRequest,
  SupplyRequestOutputType
> = t.recursion<SupplyRequest, SupplyRequestOutputType>("SupplyRequest", () =>
  t.intersection(
    [
      t.type({
        /** Medication, Substance, or Device requested to be supplied */
        item: t.union([CodeableConcept, Reference]),
        /** The requested amount of the item indicated */
        quantity: Quantity
      }),
      t.partial({
        /** When the request was made */
        authoredOn: primitives.R4.dateTime,
        /** The kind of supply (central, non-stock, etc.) */
        category: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The origin of the supply */
        deliverFrom: Reference,
        /** The destination of the supply */
        deliverTo: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for SupplyRequest */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** When the request should be fulfilled */
        occurrence: t.union([primitives.R4.dateTime, Period, Timing]),
        /** Ordered item details */
        parameter: t.array(SupplyRequestParameter),
        /** routine | urgent | asap | stat */
        priority: primitives.R4.code,
        /** The reason why the supply item was requested */
        reasonCode: t.array(CodeableConcept),
        /** The reason why the supply item was requested */
        reasonReference: t.array(Reference),
        /** Individual making the request */
        requester: Reference,
        /** draft | active | suspended + */
        status: primitives.R4.code,
        /** Who is intended to fulfill the request */
        supplier: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "SupplyRequest"
  )
);
