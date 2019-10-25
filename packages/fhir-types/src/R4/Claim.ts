/**
 * Claim Module
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
 * Claim, Pre-determination or Pre-authorization
 */
export interface Claim {
  /** The type of resource */
  resourceType?: "Claim";
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
  /** Business Identifier for claim */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Category or discipline */
  type: CodeableConcept;
  /** More granular claim type */
  subType?: CodeableConcept;
  /** claim | preauthorization | predetermination */
  use: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** The recipient of the products and services */
  patient: Reference;
  /** Relevant time frame for the claim */
  billablePeriod?: Period;
  /** Resource creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Author of the claim */
  enterer?: Reference;
  /** Target */
  insurer?: Reference;
  /** Party responsible for the claim */
  provider: Reference;
  /** Desired processing ugency */
  priority: CodeableConcept;
  /** For whom to reserve funds */
  fundsReserve?: CodeableConcept;
  /** Prescription authorizing services and products */
  prescription?: Reference;
  /** Original prescription if superseded by fulfiller */
  originalPrescription?: Reference;
  /** Treatment referral */
  referral?: Reference;
  /** Servicing facility */
  facility?: Reference;
  /** Total claim cost */
  total?: Money;
}
/**
 * Claim, Pre-determination or Pre-authorization
 */
export const Claim: t.Type<Claim> = t.recursion<Claim>("Claim", () =>
  t.intersection([
    t.type({
      /** active | cancelled | draft | entered-in-error */
      status: primitives.R4.code,
      /** Category or discipline */
      type: CodeableConcept,
      /** claim | preauthorization | predetermination */
      use: primitives.R4.code,
      /** The recipient of the products and services */
      patient: Reference,
      /** Resource creation date */
      created: primitives.R4.dateTime,
      /** Party responsible for the claim */
      provider: Reference,
      /** Desired processing ugency */
      priority: CodeableConcept
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Claim"),
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
      /** Business Identifier for claim */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** More granular claim type */
      subType: CodeableConcept,
      /** Extension of use element */
      _use: Element,
      /** Relevant time frame for the claim */
      billablePeriod: Period,
      /** Extension of created element */
      _created: Element,
      /** Author of the claim */
      enterer: Reference,
      /** Target */
      insurer: Reference,
      /** For whom to reserve funds */
      fundsReserve: CodeableConcept,
      /** Prescription authorizing services and products */
      prescription: Reference,
      /** Original prescription if superseded by fulfiller */
      originalPrescription: Reference,
      /** Treatment referral */
      referral: Reference,
      /** Servicing facility */
      facility: Reference,
      /** Total claim cost */
      total: Money
    })
  ])
);

/**
 * Prior or corollary claims
 */
export interface ClaimRelated {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the related claim */
  claim?: Reference;
  /** How the reference claim is related */
  relationship?: CodeableConcept;
  /** File or case reference */
  reference?: Identifier;
}
/**
 * Prior or corollary claims
 */
export const ClaimRelated: t.Type<ClaimRelated> = t.recursion<ClaimRelated>(
  "ClaimRelated",
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
        /** Reference to the related claim */
        claim: Reference,
        /** How the reference claim is related */
        relationship: CodeableConcept,
        /** File or case reference */
        reference: Identifier
      })
    ])
);

/**
 * Recipient of benefits payable
 */
export interface ClaimPayee {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Category of recipient */
  type: CodeableConcept;
  /** Recipient reference */
  party?: Reference;
}
/**
 * Recipient of benefits payable
 */
export const ClaimPayee: t.Type<ClaimPayee> = t.recursion<ClaimPayee>(
  "ClaimPayee",
  () =>
    t.intersection([
      t.type({
        /** Category of recipient */
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
        /** Recipient reference */
        party: Reference
      })
    ])
);

/**
 * Members of the care team
 */
export interface ClaimCareTeam {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Order of care team */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Practitioner or organization */
  provider: Reference;
  /** Indicator of the lead practitioner */
  responsible?: boolean;
  /** Extension of responsible element */
  _responsible?: Element;
  /** Function within the team */
  role?: CodeableConcept;
  /** Practitioner credential or specialization */
  qualification?: CodeableConcept;
}
/**
 * Members of the care team
 */
export const ClaimCareTeam: t.Type<ClaimCareTeam> = t.recursion<ClaimCareTeam>(
  "ClaimCareTeam",
  () =>
    t.intersection([
      t.type({
        /** Order of care team */
        sequence: primitives.R4.positiveInt,
        /** Practitioner or organization */
        provider: Reference
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
        /** Indicator of the lead practitioner */
        responsible: primitives.R4.boolean,
        /** Extension of responsible element */
        _responsible: Element,
        /** Function within the team */
        role: CodeableConcept,
        /** Practitioner credential or specialization */
        qualification: CodeableConcept
      })
    ])
);

/**
 * Supporting information
 */
export interface ClaimSupportingInfo {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Information instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Classification of the supplied information */
  category: CodeableConcept;
  /** Type of information */
  code?: CodeableConcept;
  /** When it occurred */
  timingDate?: primitives.R4.date;
  /** Extension of timingDate element */
  _timingDate?: Element;
  /** When it occurred */
  timingPeriod?: Period;
  /** Data to be provided */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Data to be provided */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Data to be provided */
  valueQuantity?: Quantity;
  /** Data to be provided */
  valueAttachment?: Attachment;
  /** Data to be provided */
  valueReference?: Reference;
  /** Explanation for the information */
  reason?: CodeableConcept;
}
/**
 * Supporting information
 */
export const ClaimSupportingInfo: t.Type<ClaimSupportingInfo> = t.recursion<
  ClaimSupportingInfo
>("ClaimSupportingInfo", () =>
  t.intersection([
    t.type({
      /** Information instance identifier */
      sequence: primitives.R4.positiveInt,
      /** Classification of the supplied information */
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
      /** Extension of sequence element */
      _sequence: Element,
      /** Type of information */
      code: CodeableConcept,
      /** When it occurred */
      timingDate: primitives.R4.date,
      /** Extension of timingDate element */
      _timingDate: Element,
      /** When it occurred */
      timingPeriod: Period,
      /** Data to be provided */
      valueBoolean: primitives.R4.boolean,
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Data to be provided */
      valueString: primitives.R4.string,
      /** Extension of valueString element */
      _valueString: Element,
      /** Data to be provided */
      valueQuantity: Quantity,
      /** Data to be provided */
      valueAttachment: Attachment,
      /** Data to be provided */
      valueReference: Reference,
      /** Explanation for the information */
      reason: CodeableConcept
    })
  ])
);

/**
 * Pertinent diagnosis information
 */
export interface ClaimDiagnosis {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Diagnosis instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Nature of illness or problem */
  diagnosisCodeableConcept: CodeableConcept;
  /** Nature of illness or problem */
  diagnosisReference: Reference;
  /** Timing or nature of the diagnosis */
  type?: CodeableConcept[];
  /** Present on admission */
  onAdmission?: CodeableConcept;
  /** Package billing code */
  packageCode?: CodeableConcept;
}
/**
 * Pertinent diagnosis information
 */
export const ClaimDiagnosis: t.Type<ClaimDiagnosis> = t.recursion<
  ClaimDiagnosis
>("ClaimDiagnosis", () =>
  t.intersection([
    t.type({
      /** Diagnosis instance identifier */
      sequence: primitives.R4.positiveInt,
      /** Nature of illness or problem */
      diagnosisCodeableConcept: CodeableConcept,
      /** Nature of illness or problem */
      diagnosisReference: Reference
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
      /** Timing or nature of the diagnosis */
      type: t.array(CodeableConcept),
      /** Present on admission */
      onAdmission: CodeableConcept,
      /** Package billing code */
      packageCode: CodeableConcept
    })
  ])
);

/**
 * Clinical procedures performed
 */
export interface ClaimProcedure {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Procedure instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Category of Procedure */
  type?: CodeableConcept[];
  /** When the procedure was performed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Specific clinical procedure */
  procedureCodeableConcept: CodeableConcept;
  /** Specific clinical procedure */
  procedureReference: Reference;
  /** Unique device identifier */
  udi?: Reference[];
}
/**
 * Clinical procedures performed
 */
export const ClaimProcedure: t.Type<ClaimProcedure> = t.recursion<
  ClaimProcedure
>("ClaimProcedure", () =>
  t.intersection([
    t.type({
      /** Procedure instance identifier */
      sequence: primitives.R4.positiveInt,
      /** Specific clinical procedure */
      procedureCodeableConcept: CodeableConcept,
      /** Specific clinical procedure */
      procedureReference: Reference
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
      /** Category of Procedure */
      type: t.array(CodeableConcept),
      /** When the procedure was performed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Unique device identifier */
      udi: t.array(Reference)
    })
  ])
);

/**
 * Patient insurance information
 */
export interface ClaimInsurance {
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
  /** Pre-assigned Claim number */
  identifier?: Identifier;
  /** Insurance information */
  coverage: Reference;
  /** Additional provider contract number */
  businessArrangement?: string;
  /** Extension of businessArrangement element */
  _businessArrangement?: Element;
  /** Prior authorization reference number */
  preAuthRef?: string[];
  /** Extension of preAuthRef element */
  _preAuthRef?: Element[];
  /** Adjudication results */
  claimResponse?: Reference;
}
/**
 * Patient insurance information
 */
export const ClaimInsurance: t.Type<ClaimInsurance> = t.recursion<
  ClaimInsurance
>("ClaimInsurance", () =>
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
      /** Pre-assigned Claim number */
      identifier: Identifier,
      /** Additional provider contract number */
      businessArrangement: primitives.R4.string,
      /** Extension of businessArrangement element */
      _businessArrangement: Element,
      /** Prior authorization reference number */
      preAuthRef: t.array(primitives.R4.string),
      /** Extension of preAuthRef element */
      _preAuthRef: t.array(Element),
      /** Adjudication results */
      claimResponse: Reference
    })
  ])
);

/**
 * Details of the event
 */
export interface ClaimAccident {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When the incident occurred */
  date: primitives.R4.date;
  /** Extension of date element */
  _date?: Element;
  /** The nature of the accident */
  type?: CodeableConcept;
  /** Where the event occurred */
  locationAddress?: Address;
  /** Where the event occurred */
  locationReference?: Reference;
}
/**
 * Details of the event
 */
export const ClaimAccident: t.Type<ClaimAccident> = t.recursion<ClaimAccident>(
  "ClaimAccident",
  () =>
    t.intersection([
      t.type({
        /** When the incident occurred */
        date: primitives.R4.date
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
        /** Extension of date element */
        _date: Element,
        /** The nature of the accident */
        type: CodeableConcept,
        /** Where the event occurred */
        locationAddress: Address,
        /** Where the event occurred */
        locationReference: Reference
      })
    ])
);

/**
 * Product or service provided
 */
export interface ClaimItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Applicable careTeam members */
  careTeamSequence?: primitives.R4.positiveInt[];
  /** Extension of careTeamSequence element */
  _careTeamSequence?: Element[];
  /** Applicable diagnoses */
  diagnosisSequence?: primitives.R4.positiveInt[];
  /** Extension of diagnosisSequence element */
  _diagnosisSequence?: Element[];
  /** Applicable procedures */
  procedureSequence?: primitives.R4.positiveInt[];
  /** Extension of procedureSequence element */
  _procedureSequence?: Element[];
  /** Applicable exception and supporting information */
  informationSequence?: primitives.R4.positiveInt[];
  /** Extension of informationSequence element */
  _informationSequence?: Element[];
  /** Revenue or cost center code */
  revenue?: CodeableConcept;
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Product or service billing modifiers */
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
  /** Unique device identifier */
  udi?: Reference[];
  /** Anatomical location */
  bodySite?: CodeableConcept;
  /** Anatomical sub-location */
  subSite?: CodeableConcept[];
  /** Encounters related to this billed item */
  encounter?: Reference[];
}
/**
 * Product or service provided
 */
export const ClaimItem: t.Type<ClaimItem> = t.recursion<ClaimItem>(
  "ClaimItem",
  () =>
    t.intersection([
      t.type({
        /** Item instance identifier */
        sequence: primitives.R4.positiveInt,
        /** Billing, service, product, or drug code */
        productOrService: CodeableConcept
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
        /** Applicable careTeam members */
        careTeamSequence: t.array(primitives.R4.positiveInt),
        /** Extension of careTeamSequence element */
        _careTeamSequence: t.array(Element),
        /** Applicable diagnoses */
        diagnosisSequence: t.array(primitives.R4.positiveInt),
        /** Extension of diagnosisSequence element */
        _diagnosisSequence: t.array(Element),
        /** Applicable procedures */
        procedureSequence: t.array(primitives.R4.positiveInt),
        /** Extension of procedureSequence element */
        _procedureSequence: t.array(Element),
        /** Applicable exception and supporting information */
        informationSequence: t.array(primitives.R4.positiveInt),
        /** Extension of informationSequence element */
        _informationSequence: t.array(Element),
        /** Revenue or cost center code */
        revenue: CodeableConcept,
        /** Benefit classification */
        category: CodeableConcept,
        /** Product or service billing modifiers */
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
        /** Unique device identifier */
        udi: t.array(Reference),
        /** Anatomical location */
        bodySite: CodeableConcept,
        /** Anatomical sub-location */
        subSite: t.array(CodeableConcept),
        /** Encounters related to this billed item */
        encounter: t.array(Reference)
      })
    ])
);

/**
 * Product or service provided
 */
export interface ClaimItemDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Revenue or cost center code */
  revenue?: CodeableConcept;
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Program the product or service is provided under */
  programCode?: CodeableConcept[];
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
  /** Unique device identifier */
  udi?: Reference[];
}
/**
 * Product or service provided
 */
export const ClaimItemDetail: t.Type<ClaimItemDetail> = t.recursion<
  ClaimItemDetail
>("ClaimItemDetail", () =>
  t.intersection([
    t.type({
      /** Item instance identifier */
      sequence: primitives.R4.positiveInt,
      /** Billing, service, product, or drug code */
      productOrService: CodeableConcept
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
      /** Revenue or cost center code */
      revenue: CodeableConcept,
      /** Benefit classification */
      category: CodeableConcept,
      /** Service/Product billing modifiers */
      modifier: t.array(CodeableConcept),
      /** Program the product or service is provided under */
      programCode: t.array(CodeableConcept),
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
      /** Unique device identifier */
      udi: t.array(Reference)
    })
  ])
);

/**
 * Product or service provided
 */
export interface ClaimItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Item instance identifier */
  sequence: primitives.R4.positiveInt;
  /** Extension of sequence element */
  _sequence?: Element;
  /** Revenue or cost center code */
  revenue?: CodeableConcept;
  /** Benefit classification */
  category?: CodeableConcept;
  /** Billing, service, product, or drug code */
  productOrService: CodeableConcept;
  /** Service/Product billing modifiers */
  modifier?: CodeableConcept[];
  /** Program the product or service is provided under */
  programCode?: CodeableConcept[];
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
  /** Unique device identifier */
  udi?: Reference[];
}
/**
 * Product or service provided
 */
export const ClaimItemDetailSubDetail: t.Type<
  ClaimItemDetailSubDetail
> = t.recursion<ClaimItemDetailSubDetail>("ClaimItemDetailSubDetail", () =>
  t.intersection([
    t.type({
      /** Item instance identifier */
      sequence: primitives.R4.positiveInt,
      /** Billing, service, product, or drug code */
      productOrService: CodeableConcept
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
      /** Revenue or cost center code */
      revenue: CodeableConcept,
      /** Benefit classification */
      category: CodeableConcept,
      /** Service/Product billing modifiers */
      modifier: t.array(CodeableConcept),
      /** Program the product or service is provided under */
      programCode: t.array(CodeableConcept),
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
      /** Unique device identifier */
      udi: t.array(Reference)
    })
  ])
);
