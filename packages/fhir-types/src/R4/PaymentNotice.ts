/**
 * PaymentNotice Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * PaymentNotice request
 */
export interface PaymentNotice {
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
  /** Business Identifier for the payment noctice */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Request reference */
  request?: Reference;
  /** Response reference */
  response?: Reference;
  /** Creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Responsible practitioner */
  provider?: Reference;
  /** Payment reference */
  payment: Reference;
  /** Payment or clearing date */
  paymentDate?: t.TypeOf<primitives.R4.DateType>;
  /** Party being paid */
  payee?: Reference;
  /** Party being notified */
  recipient: Reference;
  /** Monetary amount of the payment */
  amount: Money;
  /** Issued or cleared Status of the payment */
  paymentStatus?: CodeableConcept;
}

export interface PaymentNoticeOutputType {
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
  /** Business Identifier for the payment noctice */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Request reference */
  request?: ReferenceOutputType;
  /** Response reference */
  response?: ReferenceOutputType;
  /** Creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Responsible practitioner */
  provider?: ReferenceOutputType;
  /** Payment reference */
  payment: ReferenceOutputType;
  /** Payment or clearing date */
  paymentDate?: t.OutputOf<primitives.R4.DateType>;
  /** Party being paid */
  payee?: ReferenceOutputType;
  /** Party being notified */
  recipient: ReferenceOutputType;
  /** Monetary amount of the payment */
  amount: MoneyOutputType;
  /** Issued or cleared Status of the payment */
  paymentStatus?: CodeableConceptOutputType;
}

export const PaymentNotice: t.RecursiveType<
  t.Type<PaymentNotice, PaymentNoticeOutputType>,
  PaymentNotice,
  PaymentNoticeOutputType
> = t.recursion<PaymentNotice, PaymentNoticeOutputType>("PaymentNotice", () =>
  t.intersection(
    [
      t.type({
        /** Monetary amount of the payment */
        amount: Money,
        /** Creation date */
        created: primitives.R4.dateTime,
        /** Payment reference */
        payment: Reference,
        /** Party being notified */
        recipient: Reference,
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for the payment noctice */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Party being paid */
        payee: Reference,
        /** Payment or clearing date */
        paymentDate: primitives.R4.date,
        /** Issued or cleared Status of the payment */
        paymentStatus: CodeableConcept,
        /** Responsible practitioner */
        provider: Reference,
        /** Request reference */
        request: Reference,
        /** Response reference */
        response: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "PaymentNotice"
  )
);
