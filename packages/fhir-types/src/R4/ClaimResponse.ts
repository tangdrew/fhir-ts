/**
 * ClaimResponse Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Response to a claim predetermination or preauthorization
 */
export interface ClaimResponse {
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
  /** Business Identifier for a claim response */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** More granular claim type */
  type: CodeableConcept;
  /** More granular claim type */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination */
  use: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** The recipient of the products and services */
  patient: Reference;
  /** Response creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Party responsible for reimbursement */
  insurer: Reference;
  /** Party responsible for the claim */
  requestor?: Reference;
  /** Id of resource triggering adjudication */
  request?: Reference;
  /** queued | complete | error | partial */
  outcome: primitives.R4.code;
  /** Extension of outcome element */
  _outcome?: Element;
  /** Disposition Message */
  disposition?: string;
  /** Extension of disposition element */
  _disposition?: Element;
  /** Preauthorization reference */
  preAuthRef?: string;
  /** Extension of preAuthRef element */
  _preAuthRef?: Element;
  /** Preauthorization reference effective period */
  preAuthPeriod?: Period;
  /** Party to be paid any benefits payable */
  payeeType?: CodeableConcept;
  /** Header-level adjudication */
  adjudication?: ClaimResponseItemAdjudication[];
  /** Funds reserved status */
  fundsReserve?: CodeableConcept;
  /** Printed form identifier */
  formCode?: CodeableConcept;
  /** Printed reference or actual form */
  form?: Attachment;
  /** Request for additional information */
  communicationRequest?: Reference[];
}
/**
 * Response to a claim predetermination or preauthorization
 */
export const ClaimResponse: t.Type<ClaimResponse> = t.recursion<ClaimResponse>(
  "ClaimResponse",
  () =>
    t.intersection([
      t.type({
        /** active | cancelled | draft | entered-in-error */
        status: primitives.R4.code,
        /** More granular claim type */
        type: CodeableConcept,
        /** claim | preauthorization | predetermination */
        use: primitives.R4.code,
        /** The recipient of the products and services */
        patient: Reference,
        /** Response creation date */
        created: primitives.R4.dateTime,
        /** Party responsible for reimbursement */
        insurer: Reference,
        /** queued | complete | error | partial */
        outcome: primitives.R4.code
      }),
      t.partial({
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
        /** Business Identifier for a claim response */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** More granular claim type */
        subType: CodeableConcept,
        /** Extension of use element */
        _use: Element,
        /** Extension of created element */
        _created: Element,
        /** Party responsible for the claim */
        requestor: Reference,
        /** Id of resource triggering adjudication */
        request: Reference,
        /** Extension of outcome element */
        _outcome: Element,
        /** Disposition Message */
        disposition: primitives.R4.string,
        /** Extension of disposition element */
        _disposition: Element,
        /** Preauthorization reference */
        preAuthRef: primitives.R4.string,
        /** Extension of preAuthRef element */
        _preAuthRef: Element,
        /** Preauthorization reference effective period */
        preAuthPeriod: Period,
        /** Party to be paid any benefits payable */
        payeeType: CodeableConcept,
        /** Header-level adjudication */
        adjudication: t.array(ClaimResponseItemAdjudication),
        /** Funds reserved status */
        fundsReserve: CodeableConcept,
        /** Printed form identifier */
        formCode: CodeableConcept,
        /** Printed reference or actual form */
        form: Attachment,
        /** Request for additional information */
        communicationRequest: t.array(Reference)
      })
    ])
);

/**
 * Adjudication for claim line items
 */
export interface ClaimResponseItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Claim item instance identifier */
  itemSequence: primitives.R4.positiveInt;
  /** Extension of itemSequence element */
  _itemSequence?: Element;
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
}
/**
 * Adjudication for claim line items
 */
export const ClaimResponseItem: t.Type<ClaimResponseItem> = t.recursion<
  ClaimResponseItem
>("ClaimResponseItem", () =>
  t.intersection([
    t.type({
      /** Claim item instance identifier */
      itemSequence: primitives.R4.positiveInt
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
      /** Extension of itemSequence element */
      _itemSequence: Element,
      /** Applicable note numbers */
      noteNumber: t.array(primitives.R4.positiveInt),
      /** Extension of noteNumber element */
      _noteNumber: t.array(Element)
    })
  ])
);

/**
 * Adjudication details
 */
export interface ClaimResponseItemAdjudication {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of adjudication information */
  category: CodeableConcept;
  /** Explanation of adjudication outcome */
  reason?: CodeableConcept;
  /** Monetary amount */
  amount?: Money;
  /** Non-monetary value */
  value?: primitives.R4.decimal;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Adjudication details
 */
export const ClaimResponseItemAdjudication: t.Type<
  ClaimResponseItemAdjudication
> = t.recursion<ClaimResponseItemAdjudication>(
  "ClaimResponseItemAdjudication",
  () =>
    t.intersection([
      t.type({
        /** Type of adjudication information */
        category: CodeableConcept
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
        /** Explanation of adjudication outcome */
        reason: CodeableConcept,
        /** Monetary amount */
        amount: Money,
        /** Non-monetary value */
        value: primitives.R4.decimal,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * Adjudication for claim details
 */
export interface ClaimResponseItemDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Claim detail instance identifier */
  detailSequence: primitives.R4.positiveInt;
  /** Extension of detailSequence element */
  _detailSequence?: Element;
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Detail level adjudication details */
  adjudication: ClaimResponseItemAdjudication[];
}
/**
 * Adjudication for claim details
 */
export const ClaimResponseItemDetail: t.Type<
  ClaimResponseItemDetail
> = t.recursion<ClaimResponseItemDetail>("ClaimResponseItemDetail", () =>
  t.intersection([
    t.type({
      /** Claim detail instance identifier */
      detailSequence: primitives.R4.positiveInt,
      /** Detail level adjudication details */
      adjudication: t.array(ClaimResponseItemAdjudication)
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
      /** Extension of detailSequence element */
      _detailSequence: Element,
      /** Applicable note numbers */
      noteNumber: t.array(primitives.R4.positiveInt),
      /** Extension of noteNumber element */
      _noteNumber: t.array(Element)
    })
  ])
);

/**
 * Adjudication for claim sub-details
 */
export interface ClaimResponseItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Claim sub-detail instance identifier */
  subDetailSequence: primitives.R4.positiveInt;
  /** Extension of subDetailSequence element */
  _subDetailSequence?: Element;
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Subdetail level adjudication details */
  adjudication?: ClaimResponseItemAdjudication[];
}
/**
 * Adjudication for claim sub-details
 */
export const ClaimResponseItemDetailSubDetail: t.Type<
  ClaimResponseItemDetailSubDetail
> = t.recursion<ClaimResponseItemDetailSubDetail>(
  "ClaimResponseItemDetailSubDetail",
  () =>
    t.intersection([
      t.type({
        /** Claim sub-detail instance identifier */
        subDetailSequence: primitives.R4.positiveInt
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
        /** Extension of subDetailSequence element */
        _subDetailSequence: Element,
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt),
        /** Extension of noteNumber element */
        _noteNumber: t.array(Element),
        /** Subdetail level adjudication details */
        adjudication: t.array(ClaimResponseItemAdjudication)
      })
    ])
);

/**
 * Insurer added line items
 */
export interface ClaimResponseAddItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item sequence number */
  itemSequence?: primitives.R4.positiveInt[];
  /** Extension of itemSequence element */
  _itemSequence?: Element[];
  /** Detail sequence number */
  detailSequence?: primitives.R4.positiveInt[];
  /** Extension of detailSequence element */
  _detailSequence?: Element[];
  /** Subdetail sequence number */
  subdetailSequence?: primitives.R4.positiveInt[];
  /** Extension of subdetailSequence element */
  _subdetailSequence?: Element[];
  /** Authorized providers */
  provider?: Reference[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Program the product or service is provided under */
  programCode?: CodeableConcept[];
  /** Date or dates of service or product delivery */
  servicedDate?: primitives.R4.date;
  /** Extension of servicedDate element */
  _servicedDate?: Element;
  /** Date or dates of service or product delivery */
  servicedPeriod?: Period;
  /** Place of service or where product was supplied */
  locationCodeableConcept?: CodeableConcept;
  /** Place of service or where product was supplied */
  locationAddress?: Address;
  /** Place of service or where product was supplied */
  locationReference?: Reference;
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Total item cost */
  net?: Money;
  /** Anatomical location */
  bodySite?: CodeableConcept;
  /** Anatomical sub-location */
  subSite?: CodeableConcept[];
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Added items adjudication */
  adjudication: ClaimResponseItemAdjudication[];
}
/**
 * Insurer added line items
 */
export const ClaimResponseAddItem: t.Type<ClaimResponseAddItem> = t.recursion<
  ClaimResponseAddItem
>("ClaimResponseAddItem", () =>
  t.intersection([
    t.type({
      /** Billing, service, product, or drug code */
      productOrService: CodeableConcept,
      /** Added items adjudication */
      adjudication: t.array(ClaimResponseItemAdjudication)
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
      /** Item sequence number */
      itemSequence: t.array(primitives.R4.positiveInt),
      /** Extension of itemSequence element */
      _itemSequence: t.array(Element),
      /** Detail sequence number */
      detailSequence: t.array(primitives.R4.positiveInt),
      /** Extension of detailSequence element */
      _detailSequence: t.array(Element),
      /** Subdetail sequence number */
      subdetailSequence: t.array(primitives.R4.positiveInt),
      /** Extension of subdetailSequence element */
      _subdetailSequence: t.array(Element),
      /** Authorized providers */
      provider: t.array(Reference),
      /** Service/Product billing modifiers */
      modifier: t.array(CodeableConcept),
      /** Program the product or service is provided under */
      programCode: t.array(CodeableConcept),
      /** Date or dates of service or product delivery */
      servicedDate: primitives.R4.date,
      /** Extension of servicedDate element */
      _servicedDate: Element,
      /** Date or dates of service or product delivery */
      servicedPeriod: Period,
      /** Place of service or where product was supplied */
      locationCodeableConcept: CodeableConcept,
      /** Place of service or where product was supplied */
      locationAddress: Address,
      /** Place of service or where product was supplied */
      locationReference: Reference,
      /** Count of products or services */
      quantity: Quantity,
      /** Fee, charge or cost per item */
      unitPrice: Money,
      /** Price scaling factor */
      factor: primitives.R4.decimal,
      /** Extension of factor element */
      _factor: Element,
      /** Total item cost */
      net: Money,
      /** Anatomical location */
      bodySite: CodeableConcept,
      /** Anatomical sub-location */
      subSite: t.array(CodeableConcept),
      /** Applicable note numbers */
      noteNumber: t.array(primitives.R4.positiveInt),
      /** Extension of noteNumber element */
      _noteNumber: t.array(Element)
    })
  ])
);

/**
 * Insurer added line details
 */
export interface ClaimResponseAddItemDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Total item cost */
  net?: Money;
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Added items detail adjudication */
  adjudication: ClaimResponseItemAdjudication[];
}
/**
 * Insurer added line details
 */
export const ClaimResponseAddItemDetail: t.Type<
  ClaimResponseAddItemDetail
> = t.recursion<ClaimResponseAddItemDetail>("ClaimResponseAddItemDetail", () =>
  t.intersection([
    t.type({
      /** Billing, service, product, or drug code */
      productOrService: CodeableConcept,
      /** Added items detail adjudication */
      adjudication: t.array(ClaimResponseItemAdjudication)
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
      /** Service/Product billing modifiers */
      modifier: t.array(CodeableConcept),
      /** Count of products or services */
      quantity: Quantity,
      /** Fee, charge or cost per item */
      unitPrice: Money,
      /** Price scaling factor */
      factor: primitives.R4.decimal,
      /** Extension of factor element */
      _factor: Element,
      /** Total item cost */
      net: Money,
      /** Applicable note numbers */
      noteNumber: t.array(primitives.R4.positiveInt),
      /** Extension of noteNumber element */
      _noteNumber: t.array(Element)
    })
  ])
);

/**
 * Insurer added line items
 */
export interface ClaimResponseAddItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Count of products or services */
  quantity?: Quantity;
  /** Fee, charge or cost per item */
  unitPrice?: Money;
  /** Price scaling factor */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Total item cost */
  net?: Money;
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Added items detail adjudication */
  adjudication: ClaimResponseItemAdjudication[];
}
/**
 * Insurer added line items
 */
export const ClaimResponseAddItemDetailSubDetail: t.Type<
  ClaimResponseAddItemDetailSubDetail
> = t.recursion<ClaimResponseAddItemDetailSubDetail>(
  "ClaimResponseAddItemDetailSubDetail",
  () =>
    t.intersection([
      t.type({
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept,
        /** Added items detail adjudication */
        adjudication: t.array(ClaimResponseItemAdjudication)
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
        /** Service/Product billing modifiers */
        modifier: t.array(CodeableConcept),
        /** Count of products or services */
        quantity: Quantity,
        /** Fee, charge or cost per item */
        unitPrice: Money,
        /** Price scaling factor */
        factor: primitives.R4.decimal,
        /** Extension of factor element */
        _factor: Element,
        /** Total item cost */
        net: Money,
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt),
        /** Extension of noteNumber element */
        _noteNumber: t.array(Element)
      })
    ])
);

/**
 * Adjudication totals
 */
export interface ClaimResponseTotal {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of adjudication information */
  category: CodeableConcept;
  /** Financial total for the category */
  amount: Money;
}
/**
 * Adjudication totals
 */
export const ClaimResponseTotal: t.Type<ClaimResponseTotal> = t.recursion<
  ClaimResponseTotal
>("ClaimResponseTotal", () =>
  t.intersection([
    t.type({
      /** Type of adjudication information */
      category: CodeableConcept,
      /** Financial total for the category */
      amount: Money
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * Payment Details
 */
export interface ClaimResponsePayment {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Partial or complete payment */
  type: CodeableConcept;
  /** Payment adjustment for non-claim issues */
  adjustment?: Money;
  /** Explanation for the adjustment */
  adjustmentReason?: CodeableConcept;
  /** Expected date of payment */
  date?: primitives.R4.date;
  /** Extension of date element */
  _date?: Element;
  /** Payable amount after adjustment */
  amount: Money;
  /** Business identifier for the payment */
  identifier?: Identifier;
}
/**
 * Payment Details
 */
export const ClaimResponsePayment: t.Type<ClaimResponsePayment> = t.recursion<
  ClaimResponsePayment
>("ClaimResponsePayment", () =>
  t.intersection([
    t.type({
      /** Partial or complete payment */
      type: CodeableConcept,
      /** Payable amount after adjustment */
      amount: Money
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
      /** Payment adjustment for non-claim issues */
      adjustment: Money,
      /** Explanation for the adjustment */
      adjustmentReason: CodeableConcept,
      /** Expected date of payment */
      date: primitives.R4.date,
      /** Extension of date element */
      _date: Element,
      /** Business identifier for the payment */
      identifier: Identifier
    })
  ])
);

/**
 * Note concerning adjudication
 */
export interface ClaimResponseProcessNote {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Note instance identifier */
  number?: primitives.R4.positiveInt;
  /** Extension of number element */
  _number?: Element;
  /** display | print | printoper */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Note explanatory text */
  text: string;
  /** Extension of text element */
  _text?: Element;
  /** Language of the text */
  language?: CodeableConcept;
}
/**
 * Note concerning adjudication
 */
export const ClaimResponseProcessNote: t.Type<
  ClaimResponseProcessNote
> = t.recursion<ClaimResponseProcessNote>("ClaimResponseProcessNote", () =>
  t.intersection([
    t.type({
      /** Note explanatory text */
      text: primitives.R4.string
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
      /** Note instance identifier */
      number: primitives.R4.positiveInt,
      /** Extension of number element */
      _number: Element,
      /** display | print | printoper */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element,
      /** Extension of text element */
      _text: Element,
      /** Language of the text */
      language: CodeableConcept
    })
  ])
);

/**
 * Patient insurance information
 */
export interface ClaimResponseInsurance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Insurance instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Coverage to be used for adjudication */
  focal: boolean;
  /** Extension of focal element */
  _focal?: Element;
  /** Insurance information */
  coverage: Reference;
  /** Additional provider contract number */
  businessArrangement?: string;
  /** Extension of businessArrangement element */
  _businessArrangement?: Element;
  /** Adjudication results */
  claimResponse?: Reference;
}
/**
 * Patient insurance information
 */
export const ClaimResponseInsurance: t.Type<
  ClaimResponseInsurance
> = t.recursion<ClaimResponseInsurance>("ClaimResponseInsurance", () =>
  t.intersection([
    t.type({
      /** Insurance instance identifier */
      sequence: primitives.R4.positiveInt,
      /** Coverage to be used for adjudication */
      focal: primitives.R4.boolean,
      /** Insurance information */
      coverage: Reference
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
      /** Extension of sequence element */
      _sequence: Element,
      /** Extension of focal element */
      _focal: Element,
      /** Additional provider contract number */
      businessArrangement: primitives.R4.string,
      /** Extension of businessArrangement element */
      _businessArrangement: Element,
      /** Adjudication results */
      claimResponse: Reference
    })
  ])
);

/**
 * Processing errors
 */
export interface ClaimResponseError {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item sequence number */
  itemSequence?: primitives.R4.positiveInt;
  /** Extension of itemSequence element */
  _itemSequence?: Element;
  /** Detail sequence number */
  detailSequence?: primitives.R4.positiveInt;
  /** Extension of detailSequence element */
  _detailSequence?: Element;
  /** Subdetail sequence number */
  subDetailSequence?: primitives.R4.positiveInt;
  /** Extension of subDetailSequence element */
  _subDetailSequence?: Element;
  /** Error code detailing processing issues */
  code: CodeableConcept;
}
/**
 * Processing errors
 */
export const ClaimResponseError: t.Type<ClaimResponseError> = t.recursion<
  ClaimResponseError
>("ClaimResponseError", () =>
  t.intersection([
    t.type({
      /** Error code detailing processing issues */
      code: CodeableConcept
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
      /** Item sequence number */
      itemSequence: primitives.R4.positiveInt,
      /** Extension of itemSequence element */
      _itemSequence: Element,
      /** Detail sequence number */
      detailSequence: primitives.R4.positiveInt,
      /** Extension of detailSequence element */
      _detailSequence: Element,
      /** Subdetail sequence number */
      subDetailSequence: primitives.R4.positiveInt,
      /** Extension of subDetailSequence element */
      _subDetailSequence: Element
    })
  ])
);
