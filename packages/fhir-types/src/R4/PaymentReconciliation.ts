/**
 * PaymentReconciliation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * PaymentReconciliation resource
 */
export interface PaymentReconciliation {
  /** The type of resource */
  resourceType?: "PaymentReconciliation";
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
  /** Business Identifier for a payment reconciliation */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Period covered */
  period?: Period;
  /** Creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Party generating payment */
  paymentIssuer?: Reference;
  /** Reference to requesting resource */
  request?: Reference;
  /** Responsible practitioner */
  requestor?: Reference;
  /** queued | complete | error | partial */
  outcome?: primitives.R4.code;
  /** Extension of outcome element */
  _outcome?: Element;
  /** Disposition message */
  disposition?: string;
  /** Extension of disposition element */
  _disposition?: Element;
  /** When payment issued */
  paymentDate: primitives.R4.date;
  /** Extension of paymentDate element */
  _paymentDate?: Element;
  /** Total amount of Payment */
  paymentAmount: Money;
  /** Business identifier for the payment */
  paymentIdentifier?: Identifier;
  /** Printed form identifier */
  formCode?: CodeableConcept;
}
/**
 * PaymentReconciliation resource
 */
export const PaymentReconciliation: t.Type<PaymentReconciliation> = t.recursion<
  PaymentReconciliation
>("PaymentReconciliation", () =>
  t.intersection([
    t.type({
      /** active | cancelled | draft | entered-in-error */
      status: primitives.R4.code,
      /** Creation date */
      created: primitives.R4.dateTime,
      /** When payment issued */
      paymentDate: primitives.R4.date,
      /** Total amount of Payment */
      paymentAmount: Money
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("PaymentReconciliation"),
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
      /** Business Identifier for a payment reconciliation */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Period covered */
      period: Period,
      /** Extension of created element */
      _created: Element,
      /** Party generating payment */
      paymentIssuer: Reference,
      /** Reference to requesting resource */
      request: Reference,
      /** Responsible practitioner */
      requestor: Reference,
      /** queued | complete | error | partial */
      outcome: primitives.R4.code,
      /** Extension of outcome element */
      _outcome: Element,
      /** Disposition message */
      disposition: primitives.R4.string,
      /** Extension of disposition element */
      _disposition: Element,
      /** Extension of paymentDate element */
      _paymentDate: Element,
      /** Business identifier for the payment */
      paymentIdentifier: Identifier,
      /** Printed form identifier */
      formCode: CodeableConcept
    })
  ])
);

/**
 * Settlement particulars
 */
export interface PaymentReconciliationDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
  date?: primitives.R4.date;
  /** Extension of date element */
  _date?: Element;
  /** Contact for the response */
  responsible?: Reference;
  /** Recipient of the payment */
  payee?: Reference;
  /** Amount allocated to this payable */
  amount?: Money;
}
/**
 * Settlement particulars
 */
export const PaymentReconciliationDetail: t.Type<
  PaymentReconciliationDetail
> = t.recursion<PaymentReconciliationDetail>(
  "PaymentReconciliationDetail",
  () =>
    t.intersection([
      t.type({
        /** Category of payment */
        type: CodeableConcept
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
        /** Business identifier of the payment detail */
        identifier: Identifier,
        /** Business identifier of the prior payment detail */
        predecessor: Identifier,
        /** Request giving rise to the payment */
        request: Reference,
        /** Submitter of the request */
        submitter: Reference,
        /** Response committing to a payment */
        response: Reference,
        /** Date of commitment to pay */
        date: primitives.R4.date,
        /** Extension of date element */
        _date: Element,
        /** Contact for the response */
        responsible: Reference,
        /** Recipient of the payment */
        payee: Reference,
        /** Amount allocated to this payable */
        amount: Money
      })
    ])
);

/**
 * Note concerning processing
 */
export interface PaymentReconciliationProcessNote {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** display | print | printoper */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Note explanatory text */
  text?: string;
  /** Extension of text element */
  _text?: Element;
}
/**
 * Note concerning processing
 */
export const PaymentReconciliationProcessNote: t.Type<
  PaymentReconciliationProcessNote
> = t.recursion<PaymentReconciliationProcessNote>(
  "PaymentReconciliationProcessNote",
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
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** display | print | printoper */
        type: primitives.R4.code,
        /** Extension of type element */
        _type: Element,
        /** Note explanatory text */
        text: primitives.R4.string,
        /** Extension of text element */
        _text: Element
      })
    ])
);
