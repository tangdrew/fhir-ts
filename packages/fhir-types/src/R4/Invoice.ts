/**
 * Invoice Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Invoice containing ChargeItems from an Account
 */
export interface Invoice {
  /** The type of resource */
  resourceType?: "Invoice";
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
  /** Business Identifier for item */
  identifier?: Identifier[];
  /** draft | issued | balanced | cancelled | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for cancellation of this Invoice */
  cancelledReason?: string;
  /** Extension of cancelledReason element */
  _cancelledReason?: Element;
  /** Type of Invoice */
  type?: CodeableConcept;
  /** Recipient(s) of goods and services */
  subject?: Reference;
  /** Recipient of this invoice */
  recipient?: Reference;
  /** Invoice date / posting date */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Issuing Organization of Invoice */
  issuer?: Reference;
  /** Account that is being balanced */
  account?: Reference;
  /** Components of Invoice total */
  totalPriceComponent?: InvoiceLineItemPriceComponent[];
  /** Net total of this Invoice */
  totalNet?: Money;
  /** Gross total of this Invoice */
  totalGross?: Money;
  /** Payment details */
  paymentTerms?: primitives.R4.markdown;
  /** Extension of paymentTerms element */
  _paymentTerms?: Element;
  /** Comments made about the invoice */
  note?: Annotation[];
}
/**
 * Invoice containing ChargeItems from an Account
 */
export const Invoice: t.Type<Invoice> = t.recursion<Invoice>("Invoice", () =>
  t.intersection([
    t.type({
      /** draft | issued | balanced | cancelled | entered-in-error */
      status: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Invoice"),
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
      /** Business Identifier for item */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Reason for cancellation of this Invoice */
      cancelledReason: primitives.R4.string,
      /** Extension of cancelledReason element */
      _cancelledReason: Element,
      /** Type of Invoice */
      type: CodeableConcept,
      /** Recipient(s) of goods and services */
      subject: Reference,
      /** Recipient of this invoice */
      recipient: Reference,
      /** Invoice date / posting date */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Issuing Organization of Invoice */
      issuer: Reference,
      /** Account that is being balanced */
      account: Reference,
      /** Components of Invoice total */
      totalPriceComponent: t.array(InvoiceLineItemPriceComponent),
      /** Net total of this Invoice */
      totalNet: Money,
      /** Gross total of this Invoice */
      totalGross: Money,
      /** Payment details */
      paymentTerms: primitives.R4.markdown,
      /** Extension of paymentTerms element */
      _paymentTerms: Element,
      /** Comments made about the invoice */
      note: t.array(Annotation)
    })
  ])
);

/**
 * Participant in creation of this Invoice
 */
export interface InvoiceParticipant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of involvement in creation of this Invoice */
  role?: CodeableConcept;
  /** Individual who was involved */
  actor: Reference;
}
/**
 * Participant in creation of this Invoice
 */
export const InvoiceParticipant: t.Type<InvoiceParticipant> = t.recursion<
  InvoiceParticipant
>("InvoiceParticipant", () =>
  t.intersection([
    t.type({
      /** Individual who was involved */
      actor: Reference
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Type of involvement in creation of this Invoice */
      role: CodeableConcept
    })
  ])
);

/**
 * Line items of this Invoice
 */
export interface InvoiceLineItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Sequence number of line item */
  sequence?: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Reference to ChargeItem containing details of this line item or an inline billing code */
  chargeitemReference: Reference;
  /** Reference to ChargeItem containing details of this line item or an inline billing code */
  chargeitemCodeableConcept: CodeableConcept;
}
/**
 * Line items of this Invoice
 */
export const InvoiceLineItem: t.Type<InvoiceLineItem> = t.recursion<
  InvoiceLineItem
>("InvoiceLineItem", () =>
  t.intersection([
    t.type({
      /** Reference to ChargeItem containing details of this line item or an inline billing code */
      chargeitemReference: Reference,
      /** Reference to ChargeItem containing details of this line item or an inline billing code */
      chargeitemCodeableConcept: CodeableConcept
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Sequence number of line item */
      sequence: primitives.R4.positiveInt,
      /** Extension of sequence element */
      _sequence: Element
    })
  ])
);

/**
 * Components of total line item price
 */
export interface InvoiceLineItemPriceComponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** base | surcharge | deduction | discount | tax | informational */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Code identifying the specific component */
  code?: CodeableConcept;
  /** Factor used for calculating this component */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Monetary amount associated with this component */
  amount?: Money;
}
/**
 * Components of total line item price
 */
export const InvoiceLineItemPriceComponent: t.Type<
  InvoiceLineItemPriceComponent
> = t.recursion<InvoiceLineItemPriceComponent>(
  "InvoiceLineItemPriceComponent",
  () =>
    t.intersection([
      t.type({
        /** base | surcharge | deduction | discount | tax | informational */
        type: primitives.R4.code
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Extension of type element */
        _type: Element,
        /** Code identifying the specific component */
        code: CodeableConcept,
        /** Factor used for calculating this component */
        factor: primitives.R4.decimal,
        /** Extension of factor element */
        _factor: Element,
        /** Monetary amount associated with this component */
        amount: Money
      })
    ])
);
