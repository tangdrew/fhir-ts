/**
 * SupplyDelivery Module
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
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Delivery of bulk Supplies
 */
export interface SupplyDelivery {
  /** The type of resource */
  resourceType?: "SupplyDelivery";
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
  /** External identifier */
  identifier?: Identifier[];
  /** Fulfills plan, proposal or order */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** in-progress | completed | abandoned | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Patient for whom the item is supplied */
  patient?: Reference;
  /** Category of dispense event */
  type?: CodeableConcept;
  /** When event occurred */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When event occurred */
  occurrencePeriod?: Period;
  /** When event occurred */
  occurrenceTiming?: Timing;
  /** Dispenser */
  supplier?: Reference;
  /** Where the Supply was sent */
  destination?: Reference;
  /** Who collected the Supply */
  receiver?: Reference[];
}
/**
 * Delivery of bulk Supplies
 */
export const SupplyDelivery: t.Type<SupplyDelivery> = t.recursion<
  SupplyDelivery
>("SupplyDelivery", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("SupplyDelivery"),
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
      /** External identifier */
      identifier: t.array(Identifier),
      /** Fulfills plan, proposal or order */
      basedOn: t.array(Reference),
      /** Part of referenced event */
      partOf: t.array(Reference),
      /** in-progress | completed | abandoned | entered-in-error */
      status: primitives.R4.code,
      /** Extension of status element */
      _status: Element,
      /** Patient for whom the item is supplied */
      patient: Reference,
      /** Category of dispense event */
      type: CodeableConcept,
      /** When event occurred */
      occurrenceDateTime: primitives.R4.dateTime,
      /** Extension of occurrenceDateTime element */
      _occurrenceDateTime: Element,
      /** When event occurred */
      occurrencePeriod: Period,
      /** When event occurred */
      occurrenceTiming: Timing,
      /** Dispenser */
      supplier: Reference,
      /** Where the Supply was sent */
      destination: Reference,
      /** Who collected the Supply */
      receiver: t.array(Reference)
    })
  ])
);

/**
 * The item that is delivered or supplied
 */
export interface SupplyDeliverySuppliedItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Amount dispensed */
  quantity?: Quantity;
  /** Medication, Substance, or Device supplied */
  itemCodeableConcept?: CodeableConcept;
  /** Medication, Substance, or Device supplied */
  itemReference?: Reference;
}
/**
 * The item that is delivered or supplied
 */
export const SupplyDeliverySuppliedItem: t.Type<
  SupplyDeliverySuppliedItem
> = t.recursion<SupplyDeliverySuppliedItem>("SupplyDeliverySuppliedItem", () =>
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
      /** Amount dispensed */
      quantity: Quantity,
      /** Medication, Substance, or Device supplied */
      itemCodeableConcept: CodeableConcept,
      /** Medication, Substance, or Device supplied */
      itemReference: Reference
    })
  ])
);
