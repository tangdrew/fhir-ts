/**
 * Invoice Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Participant in creation of this Invoice
 */
export interface InvoiceParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of involvement in creation of this Invoice */
  role?: CodeableConcept;
  /** Individual who was involved */
  actor: Reference;
}

export interface InvoiceParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of involvement in creation of this Invoice */
  role?: CodeableConceptOutputType;
  /** Individual who was involved */
  actor: ReferenceOutputType;
}

export const InvoiceParticipant: t.RecursiveType<
  t.Type<InvoiceParticipant, InvoiceParticipantOutputType>,
  InvoiceParticipant,
  InvoiceParticipantOutputType
> = t.recursion<InvoiceParticipant, InvoiceParticipantOutputType>(
  "InvoiceParticipant",
  () =>
    t.intersection(
      [
        t.type({
          /** Individual who was involved */
          actor: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Type of involvement in creation of this Invoice */
          role: CodeableConcept
        })
      ],
      "InvoiceParticipant"
    )
);

/**
 * Components of total line item price
 */
export interface InvoiceLineItemPriceComponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** base | surcharge | deduction | discount | tax | informational */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Code identifying the specific component */
  code?: CodeableConcept;
  /** Factor used for calculating this component */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Monetary amount associated with this component */
  amount?: Money;
}

export interface InvoiceLineItemPriceComponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** base | surcharge | deduction | discount | tax | informational */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Code identifying the specific component */
  code?: CodeableConceptOutputType;
  /** Factor used for calculating this component */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Monetary amount associated with this component */
  amount?: MoneyOutputType;
}

export const InvoiceLineItemPriceComponent: t.RecursiveType<
  t.Type<
    InvoiceLineItemPriceComponent,
    InvoiceLineItemPriceComponentOutputType
  >,
  InvoiceLineItemPriceComponent,
  InvoiceLineItemPriceComponentOutputType
> = t.recursion<
  InvoiceLineItemPriceComponent,
  InvoiceLineItemPriceComponentOutputType
>("InvoiceLineItemPriceComponent", () =>
  t.intersection(
    [
      t.type({
        /** base | surcharge | deduction | discount | tax | informational */
        type: primitives.R4.code
      }),
      t.partial({
        /** Monetary amount associated with this component */
        amount: Money,
        /** Code identifying the specific component */
        code: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Factor used for calculating this component */
        factor: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "InvoiceLineItemPriceComponent"
  )
);

/**
 * Line items of this Invoice
 */
export interface InvoiceLineItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Sequence number of line item */
  sequence?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Reference to ChargeItem containing details of this line item or an inline billing code */
  chargeitem: Reference | CodeableConcept;
  /** Components of total line item price */
  priceComponent?: InvoiceLineItemPriceComponent[];
}

export interface InvoiceLineItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Sequence number of line item */
  sequence?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Reference to ChargeItem containing details of this line item or an inline billing code */
  chargeitem: ReferenceOutputType | CodeableConceptOutputType;
  /** Components of total line item price */
  priceComponent?: InvoiceLineItemPriceComponentOutputType[];
}

export const InvoiceLineItem: t.RecursiveType<
  t.Type<InvoiceLineItem, InvoiceLineItemOutputType>,
  InvoiceLineItem,
  InvoiceLineItemOutputType
> = t.recursion<InvoiceLineItem, InvoiceLineItemOutputType>(
  "InvoiceLineItem",
  () =>
    t.intersection(
      [
        t.type({
          /** Reference to ChargeItem containing details of this line item or an inline billing code */
          chargeitem: t.union([Reference, CodeableConcept])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Components of total line item price */
          priceComponent: t.array(InvoiceLineItemPriceComponent),
          /** Sequence number of line item */
          sequence: primitives.R4.positiveInt
        })
      ],
      "InvoiceLineItem"
    )
);

/**
 * Invoice containing ChargeItems from an Account
 */
export interface Invoice {
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
  /** Business Identifier for item */
  identifier?: Identifier[];
  /** draft | issued | balanced | cancelled | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for cancellation of this Invoice */
  cancelledReason?: t.TypeOf<primitives.R4.StringType>;
  /** Type of Invoice */
  type?: CodeableConcept;
  /** Recipient(s) of goods and services */
  subject?: Reference;
  /** Recipient of this invoice */
  recipient?: Reference;
  /** Invoice date / posting date */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Participant in creation of this Invoice */
  participant?: InvoiceParticipant[];
  /** Issuing Organization of Invoice */
  issuer?: Reference;
  /** Account that is being balanced */
  account?: Reference;
  /** Line items of this Invoice */
  lineItem?: InvoiceLineItem[];
  /** Components of Invoice total */
  totalPriceComponent?: InvoiceLineItemPriceComponent[];
  /** Net total of this Invoice */
  totalNet?: Money;
  /** Gross total of this Invoice */
  totalGross?: Money;
  /** Payment details */
  paymentTerms?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Comments made about the invoice */
  note?: Annotation[];
}

export interface InvoiceOutputType {
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
  /** Business Identifier for item */
  identifier?: IdentifierOutputType[];
  /** draft | issued | balanced | cancelled | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for cancellation of this Invoice */
  cancelledReason?: t.OutputOf<primitives.R4.StringType>;
  /** Type of Invoice */
  type?: CodeableConceptOutputType;
  /** Recipient(s) of goods and services */
  subject?: ReferenceOutputType;
  /** Recipient of this invoice */
  recipient?: ReferenceOutputType;
  /** Invoice date / posting date */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Participant in creation of this Invoice */
  participant?: InvoiceParticipantOutputType[];
  /** Issuing Organization of Invoice */
  issuer?: ReferenceOutputType;
  /** Account that is being balanced */
  account?: ReferenceOutputType;
  /** Line items of this Invoice */
  lineItem?: InvoiceLineItemOutputType[];
  /** Components of Invoice total */
  totalPriceComponent?: InvoiceLineItemPriceComponentOutputType[];
  /** Net total of this Invoice */
  totalNet?: MoneyOutputType;
  /** Gross total of this Invoice */
  totalGross?: MoneyOutputType;
  /** Payment details */
  paymentTerms?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Comments made about the invoice */
  note?: AnnotationOutputType[];
}

export const Invoice: t.RecursiveType<
  t.Type<Invoice, InvoiceOutputType>,
  Invoice,
  InvoiceOutputType
> = t.recursion<Invoice, InvoiceOutputType>("Invoice", () =>
  t.intersection(
    [
      t.type({
        /** draft | issued | balanced | cancelled | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Account that is being balanced */
        account: Reference,
        /** Reason for cancellation of this Invoice */
        cancelledReason: primitives.R4.string,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Invoice date / posting date */
        date: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for item */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Issuing Organization of Invoice */
        issuer: Reference,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Line items of this Invoice */
        lineItem: t.array(InvoiceLineItem),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments made about the invoice */
        note: t.array(Annotation),
        /** Participant in creation of this Invoice */
        participant: t.array(InvoiceParticipant),
        /** Payment details */
        paymentTerms: primitives.R4.markdown,
        /** Recipient of this invoice */
        recipient: Reference,
        /** Recipient(s) of goods and services */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Gross total of this Invoice */
        totalGross: Money,
        /** Net total of this Invoice */
        totalNet: Money,
        /** Components of Invoice total */
        totalPriceComponent: t.array(InvoiceLineItemPriceComponent),
        /** Type of Invoice */
        type: CodeableConcept
      })
    ],
    "Invoice"
  )
);
