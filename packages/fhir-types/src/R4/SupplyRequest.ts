/**
 * SupplyRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Request for a medication, substance or device
 */
export interface SupplyRequest {
  /** The type of resource */
  resourceType?: "SupplyRequest";
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
  /** Business Identifier for SupplyRequest */
  identifier?: Identifier[];
  /** draft | active | suspended + */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** The kind of supply (central, non-stock, etc.) */
  category?: CodeableConcept;
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** Medication, Substance, or Device requested to be supplied */
  itemCodeableConcept: CodeableConcept;
  /** Medication, Substance, or Device requested to be supplied */
  itemReference: Reference;
  /** The requested amount of the item indicated */
  quantity: Quantity;
  /** When the request should be fulfilled */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When the request should be fulfilled */
  occurrencePeriod?: Period;
  /** When the request should be fulfilled */
  occurrenceTiming?: Timing;
  /** When the request was made */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
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
/**
 * Request for a medication, substance or device
 */
export const SupplyRequest: t.Type<SupplyRequest> = t.recursion<SupplyRequest>(
  "SupplyRequest",
  () =>
    t.intersection([
      t.type({
        /** Medication, Substance, or Device requested to be supplied */
        itemCodeableConcept: CodeableConcept,
        /** Medication, Substance, or Device requested to be supplied */
        itemReference: Reference,
        /** The requested amount of the item indicated */
        quantity: Quantity
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("SupplyRequest"),
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
        /** Business Identifier for SupplyRequest */
        identifier: t.array(Identifier),
        /** draft | active | suspended + */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** The kind of supply (central, non-stock, etc.) */
        category: CodeableConcept,
        /** routine | urgent | asap | stat */
        priority: primitives.R4.code,
        /** Extension of priority element */
        _priority: Element,
        /** When the request should be fulfilled */
        occurrenceDateTime: primitives.R4.dateTime,
        /** Extension of occurrenceDateTime element */
        _occurrenceDateTime: Element,
        /** When the request should be fulfilled */
        occurrencePeriod: Period,
        /** When the request should be fulfilled */
        occurrenceTiming: Timing,
        /** When the request was made */
        authoredOn: primitives.R4.dateTime,
        /** Extension of authoredOn element */
        _authoredOn: Element,
        /** Individual making the request */
        requester: Reference,
        /** Who is intended to fulfill the request */
        supplier: t.array(Reference),
        /** The reason why the supply item was requested */
        reasonCode: t.array(CodeableConcept),
        /** The reason why the supply item was requested */
        reasonReference: t.array(Reference),
        /** The origin of the supply */
        deliverFrom: Reference,
        /** The destination of the supply */
        deliverTo: Reference
      })
    ])
);

/**
 * Ordered item details
 */
export interface SupplyRequestParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item detail */
  code?: CodeableConcept;
  /** Value of detail */
  valueCodeableConcept?: CodeableConcept;
  /** Value of detail */
  valueQuantity?: Quantity;
  /** Value of detail */
  valueRange?: Range;
  /** Value of detail */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
}
/**
 * Ordered item details
 */
export const SupplyRequestParameter: t.Type<
  SupplyRequestParameter
> = t.recursion<SupplyRequestParameter>("SupplyRequestParameter", () =>
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
      /** Item detail */
      code: CodeableConcept,
      /** Value of detail */
      valueCodeableConcept: CodeableConcept,
      /** Value of detail */
      valueQuantity: Quantity,
      /** Value of detail */
      valueRange: Range,
      /** Value of detail */
      valueBoolean: primitives.R4.boolean,
      /** Extension of valueBoolean element */
      _valueBoolean: Element
    })
  ])
);
