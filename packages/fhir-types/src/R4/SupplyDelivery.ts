/**
 * SupplyDelivery Module
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
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * The item that is delivered or supplied
 */
export interface SupplyDeliverySuppliedItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Amount dispensed */
  quantity?: Quantity;
  /** Medication, Substance, or Device supplied */
  item?: CodeableConcept | Reference;
}

export interface SupplyDeliverySuppliedItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Amount dispensed */
  quantity?: QuantityOutputType;
  /** Medication, Substance, or Device supplied */
  item?: CodeableConceptOutputType | ReferenceOutputType;
}

export const SupplyDeliverySuppliedItem: t.RecursiveType<
  t.Type<SupplyDeliverySuppliedItem, SupplyDeliverySuppliedItemOutputType>,
  SupplyDeliverySuppliedItem,
  SupplyDeliverySuppliedItemOutputType
> = t.recursion<
  SupplyDeliverySuppliedItem,
  SupplyDeliverySuppliedItemOutputType
>("SupplyDeliverySuppliedItem", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Medication, Substance, or Device supplied */
        item: t.union([CodeableConcept, Reference]),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Amount dispensed */
        quantity: Quantity
      })
    ],
    "SupplyDeliverySuppliedItem"
  )
);

/**
 * Delivery of bulk Supplies
 */
export interface SupplyDelivery {
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
  /** External identifier */
  identifier?: Identifier[];
  /** Fulfills plan, proposal or order */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** in-progress | completed | abandoned | entered-in-error */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Patient for whom the item is supplied */
  patient?: Reference;
  /** Category of dispense event */
  type?: CodeableConcept;
  /** The item that is delivered or supplied */
  suppliedItem?: SupplyDeliverySuppliedItem;
  /** When event occurred */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period | Timing;
  /** Dispenser */
  supplier?: Reference;
  /** Where the Supply was sent */
  destination?: Reference;
  /** Who collected the Supply */
  receiver?: Reference[];
}

export interface SupplyDeliveryOutputType {
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
  /** External identifier */
  identifier?: IdentifierOutputType[];
  /** Fulfills plan, proposal or order */
  basedOn?: ReferenceOutputType[];
  /** Part of referenced event */
  partOf?: ReferenceOutputType[];
  /** in-progress | completed | abandoned | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Patient for whom the item is supplied */
  patient?: ReferenceOutputType;
  /** Category of dispense event */
  type?: CodeableConceptOutputType;
  /** The item that is delivered or supplied */
  suppliedItem?: SupplyDeliverySuppliedItemOutputType;
  /** When event occurred */
  occurrence?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType;
  /** Dispenser */
  supplier?: ReferenceOutputType;
  /** Where the Supply was sent */
  destination?: ReferenceOutputType;
  /** Who collected the Supply */
  receiver?: ReferenceOutputType[];
}

export const SupplyDelivery: t.RecursiveType<
  t.Type<SupplyDelivery, SupplyDeliveryOutputType>,
  SupplyDelivery,
  SupplyDeliveryOutputType
> = t.recursion<SupplyDelivery, SupplyDeliveryOutputType>(
  "SupplyDelivery",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Fulfills plan, proposal or order */
          basedOn: t.array(Reference),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Where the Supply was sent */
          destination: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** When event occurred */
          occurrence: t.union([primitives.R4.dateTime, Period, Timing]),
          /** Part of referenced event */
          partOf: t.array(Reference),
          /** Patient for whom the item is supplied */
          patient: Reference,
          /** Who collected the Supply */
          receiver: t.array(Reference),
          /** in-progress | completed | abandoned | entered-in-error */
          status: primitives.R4.code,
          /** The item that is delivered or supplied */
          suppliedItem: SupplyDeliverySuppliedItem,
          /** Dispenser */
          supplier: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Category of dispense event */
          type: CodeableConcept
        })
      ],
      "SupplyDelivery"
    )
);
