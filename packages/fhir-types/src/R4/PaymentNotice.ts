/**
 * PaymentNotice Module
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
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * PaymentNotice request
 */
export interface PaymentNotice {
  /** The type of resource */
  resourceType?: "PaymentNotice";
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
  /** Business Identifier for the payment noctice */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Request reference */
  request?: Reference;
  /** Response reference */
  response?: Reference;
  /** Creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Responsible practitioner */
  provider?: Reference;
  /** Payment reference */
  payment: Reference;
  /** Payment or clearing date */
  paymentDate?: primitives.R4.date;
  /** Extension of paymentDate element */
  _paymentDate?: Element;
  /** Party being paid */
  payee?: Reference;
  /** Party being notified */
  recipient: Reference;
  /** Monetary amount of the payment */
  amount: Money;
  /** Issued or cleared Status of the payment */
  paymentStatus?: CodeableConcept;
}
/**
 * PaymentNotice request
 */
export const PaymentNotice: t.Type<PaymentNotice> = t.recursion<PaymentNotice>(
  "PaymentNotice",
  () =>
    t.intersection([
      t.type({
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code,
        /** Creation date */
        created: primitives.R4.dateTime,
        /** Payment reference */
        payment: Reference,
        /** Party being notified */
        recipient: Reference,
        /** Monetary amount of the payment */
        amount: Money
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("PaymentNotice"),
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
        /** Business Identifier for the payment noctice */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Request reference */
        request: Reference,
        /** Response reference */
        response: Reference,
        /** Extension of created element */
        _created: Element,
        /** Responsible practitioner */
        provider: Reference,
        /** Payment or clearing date */
        paymentDate: primitives.R4.date,
        /** Extension of paymentDate element */
        _paymentDate: Element,
        /** Party being paid */
        payee: Reference,
        /** Issued or cleared Status of the payment */
        paymentStatus: CodeableConcept
      })
    ])
);
