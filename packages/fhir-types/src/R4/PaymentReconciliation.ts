/**
 * PaymentReconciliation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Note concerning processing
 */
export interface PaymentReconciliationProcessNote {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** display | print | printoper */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** Note explanatory text */
  text?: t.TypeOf<primitives.R4.StringType>;
}

export interface PaymentReconciliationProcessNoteOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** display | print | printoper */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** Note explanatory text */
  text?: t.OutputOf<primitives.R4.StringType>;
}

export const PaymentReconciliationProcessNote: t.RecursiveType<
  t.Type<
    PaymentReconciliationProcessNote,
    PaymentReconciliationProcessNoteOutputType
  >,
  PaymentReconciliationProcessNote,
  PaymentReconciliationProcessNoteOutputType
> = t.recursion<
  PaymentReconciliationProcessNote,
  PaymentReconciliationProcessNoteOutputType
>("PaymentReconciliationProcessNote", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Note explanatory text */
        text: primitives.R4.string,
        /** display | print | printoper */
        type: primitives.R4.code
      })
    ],
    "PaymentReconciliationProcessNote"
  )
);

/**
 * Settlement particulars
 */
export interface PaymentReconciliationDetail {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Business identifier of the payment detail */
  identifier?: Identifier;
  /** Business identifier of the prior payment detail */
  predecessor?: Identifier;
  /** Category of payment */
  type: CodeableConcept;
  /** Request giving rise to the payment */
  request?: Reference;
  /** Submitter of the request */
  submitter?: Reference;
  /** Response committing to a payment */
  response?: Reference;
  /** Date of commitment to pay */
  date?: t.TypeOf<primitives.R4.DateType>;
  /** Contact for the response */
  responsible?: Reference;
  /** Recipient of the payment */
  payee?: Reference;
  /** Amount allocated to this payable */
  amount?: Money;
}

export interface PaymentReconciliationDetailOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Business identifier of the payment detail */
  identifier?: IdentifierOutputType;
  /** Business identifier of the prior payment detail */
  predecessor?: IdentifierOutputType;
  /** Category of payment */
  type: CodeableConceptOutputType;
  /** Request giving rise to the payment */
  request?: ReferenceOutputType;
  /** Submitter of the request */
  submitter?: ReferenceOutputType;
  /** Response committing to a payment */
  response?: ReferenceOutputType;
  /** Date of commitment to pay */
  date?: t.OutputOf<primitives.R4.DateType>;
  /** Contact for the response */
  responsible?: ReferenceOutputType;
  /** Recipient of the payment */
  payee?: ReferenceOutputType;
  /** Amount allocated to this payable */
  amount?: MoneyOutputType;
}

export const PaymentReconciliationDetail: t.RecursiveType<
  t.Type<PaymentReconciliationDetail, PaymentReconciliationDetailOutputType>,
  PaymentReconciliationDetail,
  PaymentReconciliationDetailOutputType
> = t.recursion<
  PaymentReconciliationDetail,
  PaymentReconciliationDetailOutputType
>("PaymentReconciliationDetail", () =>
  t.intersection(
    [
      t.type({
        /** Category of payment */
        type: CodeableConcept
      }),
      t.partial({
        /** Amount allocated to this payable */
        amount: Money,
        /** Date of commitment to pay */
        date: primitives.R4.date,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Business identifier of the payment detail */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Recipient of the payment */
        payee: Reference,
        /** Business identifier of the prior payment detail */
        predecessor: Identifier,
        /** Request giving rise to the payment */
        request: Reference,
        /** Response committing to a payment */
        response: Reference,
        /** Contact for the response */
        responsible: Reference,
        /** Submitter of the request */
        submitter: Reference
      })
    ],
    "PaymentReconciliationDetail"
  )
);

/**
 * PaymentReconciliation resource
 */
export interface PaymentReconciliation {
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
  /** Business Identifier for a payment reconciliation */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Period covered */
  period?: Period;
  /** Creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Party generating payment */
  paymentIssuer?: Reference;
  /** Reference to requesting resource */
  request?: Reference;
  /** Responsible practitioner */
  requestor?: Reference;
  /** queued | complete | error | partial */
  outcome?: t.TypeOf<primitives.R4.CodeType>;
  /** Disposition message */
  disposition?: t.TypeOf<primitives.R4.StringType>;
  /** When payment issued */
  paymentDate: t.TypeOf<primitives.R4.DateType>;
  /** Total amount of Payment */
  paymentAmount: Money;
  /** Business identifier for the payment */
  paymentIdentifier?: Identifier;
  /** Settlement particulars */
  detail?: PaymentReconciliationDetail[];
  /** Printed form identifier */
  formCode?: CodeableConcept;
  /** Note concerning processing */
  processNote?: PaymentReconciliationProcessNote[];
}

export interface PaymentReconciliationOutputType {
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
  /** Business Identifier for a payment reconciliation */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Period covered */
  period?: PeriodOutputType;
  /** Creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Party generating payment */
  paymentIssuer?: ReferenceOutputType;
  /** Reference to requesting resource */
  request?: ReferenceOutputType;
  /** Responsible practitioner */
  requestor?: ReferenceOutputType;
  /** queued | complete | error | partial */
  outcome?: t.OutputOf<primitives.R4.CodeType>;
  /** Disposition message */
  disposition?: t.OutputOf<primitives.R4.StringType>;
  /** When payment issued */
  paymentDate: t.OutputOf<primitives.R4.DateType>;
  /** Total amount of Payment */
  paymentAmount: MoneyOutputType;
  /** Business identifier for the payment */
  paymentIdentifier?: IdentifierOutputType;
  /** Settlement particulars */
  detail?: PaymentReconciliationDetailOutputType[];
  /** Printed form identifier */
  formCode?: CodeableConceptOutputType;
  /** Note concerning processing */
  processNote?: PaymentReconciliationProcessNoteOutputType[];
}

export const PaymentReconciliation: t.RecursiveType<
  t.Type<PaymentReconciliation, PaymentReconciliationOutputType>,
  PaymentReconciliation,
  PaymentReconciliationOutputType
> = t.recursion<PaymentReconciliation, PaymentReconciliationOutputType>(
  "PaymentReconciliation",
  () =>
    t.intersection(
      [
        t.type({
          /** Creation date */
          created: primitives.R4.dateTime,
          /** Total amount of Payment */
          paymentAmount: Money,
          /** When payment issued */
          paymentDate: primitives.R4.date,
          /** active | cancelled | draft | entered-in-error */
          status: primitives.R4.code
        }),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Settlement particulars */
          detail: t.array(PaymentReconciliationDetail),
          /** Disposition message */
          disposition: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Printed form identifier */
          formCode: CodeableConcept,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifier for a payment reconciliation */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** queued | complete | error | partial */
          outcome: primitives.R4.code,
          /** Business identifier for the payment */
          paymentIdentifier: Identifier,
          /** Party generating payment */
          paymentIssuer: Reference,
          /** Period covered */
          period: Period,
          /** Note concerning processing */
          processNote: t.array(PaymentReconciliationProcessNote),
          /** Reference to requesting resource */
          request: Reference,
          /** Responsible practitioner */
          requestor: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "PaymentReconciliation"
    )
);
