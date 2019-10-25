/**
 * ExplanationOfBenefit Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
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
 * Explanation of Benefit resource
 */
export interface ExplanationOfBenefit {
  /** The type of resource */
  resourceType?: "ExplanationOfBenefit";
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
  /** Business Identifier for the resource */
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
  /** Response creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Author of the claim */
  enterer?: Reference;
  /** Party responsible for reimbursement */
  insurer: Reference;
  /** Party responsible for the claim */
  provider: Reference;
  /** Desired processing urgency */
  priority?: CodeableConcept;
  /** For whom to reserve funds */
  fundsReserveRequested?: CodeableConcept;
  /** Funds reserved status */
  fundsReserve?: CodeableConcept;
  /** Prescription authorizing services or products */
  prescription?: Reference;
  /** Original prescription if superceded by fulfiller */
  originalPrescription?: Reference;
  /** Treatment Referral */
  referral?: Reference;
  /** Servicing Facility */
  facility?: Reference;
  /** Claim reference */
  claim?: Reference;
  /** Claim response reference */
  claimResponse?: Reference;
  /** queued | complete | error | partial */
  outcome: primitives.R4.code;
  /** Extension of outcome element */
  _outcome?: Element;
  /** Disposition Message */
  disposition?: string;
  /** Extension of disposition element */
  _disposition?: Element;
  /** Preauthorization reference */
  preAuthRef?: string[];
  /** Extension of preAuthRef element */
  _preAuthRef?: Element[];
  /** Preauthorization in-effect period */
  preAuthRefPeriod?: Period[];
  /** Precedence (primary, secondary, etc.) */
  precedence?: primitives.R4.positiveInt;
  /** Extension of precedence element */
  _precedence?: Element;
  /** Header-level adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
  /** Printed form identifier */
  formCode?: CodeableConcept;
  /** Printed reference or actual form */
  form?: Attachment;
  /** When the benefits are applicable */
  benefitPeriod?: Period;
}
/**
 * Explanation of Benefit resource
 */
export const ExplanationOfBenefit: t.Type<ExplanationOfBenefit> = t.recursion<
  ExplanationOfBenefit
>("ExplanationOfBenefit", () =>
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
      /** Response creation date */
      created: primitives.R4.dateTime,
      /** Party responsible for reimbursement */
      insurer: Reference,
      /** Party responsible for the claim */
      provider: Reference,
      /** queued | complete | error | partial */
      outcome: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ExplanationOfBenefit"),
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
      /** Business Identifier for the resource */
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
      /** Desired processing urgency */
      priority: CodeableConcept,
      /** For whom to reserve funds */
      fundsReserveRequested: CodeableConcept,
      /** Funds reserved status */
      fundsReserve: CodeableConcept,
      /** Prescription authorizing services or products */
      prescription: Reference,
      /** Original prescription if superceded by fulfiller */
      originalPrescription: Reference,
      /** Treatment Referral */
      referral: Reference,
      /** Servicing Facility */
      facility: Reference,
      /** Claim reference */
      claim: Reference,
      /** Claim response reference */
      claimResponse: Reference,
      /** Extension of outcome element */
      _outcome: Element,
      /** Disposition Message */
      disposition: primitives.R4.string,
      /** Extension of disposition element */
      _disposition: Element,
      /** Preauthorization reference */
      preAuthRef: t.array(primitives.R4.string),
      /** Extension of preAuthRef element */
      _preAuthRef: t.array(Element),
      /** Preauthorization in-effect period */
      preAuthRefPeriod: t.array(Period),
      /** Precedence (primary, secondary, etc.) */
      precedence: primitives.R4.positiveInt,
      /** Extension of precedence element */
      _precedence: Element,
      /** Header-level adjudication */
      adjudication: t.array(ExplanationOfBenefitItemAdjudication),
      /** Printed form identifier */
      formCode: CodeableConcept,
      /** Printed reference or actual form */
      form: Attachment,
      /** When the benefits are applicable */
      benefitPeriod: Period
    })
  ])
);

/**
 * Prior or corollary claims
 */
export interface ExplanationOfBenefitRelated {
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
export const ExplanationOfBenefitRelated: t.Type<
  ExplanationOfBenefitRelated
> = t.recursion<ExplanationOfBenefitRelated>(
  "ExplanationOfBenefitRelated",
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
export interface ExplanationOfBenefitPayee {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Category of recipient */
  type?: CodeableConcept;
  /** Recipient reference */
  party?: Reference;
}
/**
 * Recipient of benefits payable
 */
export const ExplanationOfBenefitPayee: t.Type<
  ExplanationOfBenefitPayee
> = t.recursion<ExplanationOfBenefitPayee>("ExplanationOfBenefitPayee", () =>
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
      /** Category of recipient */
      type: CodeableConcept,
      /** Recipient reference */
      party: Reference
    })
  ])
);

/**
 * Care Team members
 */
export interface ExplanationOfBenefitCareTeam {
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
 * Care Team members
 */
export const ExplanationOfBenefitCareTeam: t.Type<
  ExplanationOfBenefitCareTeam
> = t.recursion<ExplanationOfBenefitCareTeam>(
  "ExplanationOfBenefitCareTeam",
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
export interface ExplanationOfBenefitSupportingInfo {
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
  reason?: Coding;
}
/**
 * Supporting information
 */
export const ExplanationOfBenefitSupportingInfo: t.Type<
  ExplanationOfBenefitSupportingInfo
> = t.recursion<ExplanationOfBenefitSupportingInfo>(
  "ExplanationOfBenefitSupportingInfo",
  () =>
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
        reason: Coding
      })
    ])
);

/**
 * Pertinent diagnosis information
 */
export interface ExplanationOfBenefitDiagnosis {
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
export const ExplanationOfBenefitDiagnosis: t.Type<
  ExplanationOfBenefitDiagnosis
> = t.recursion<ExplanationOfBenefitDiagnosis>(
  "ExplanationOfBenefitDiagnosis",
  () =>
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
export interface ExplanationOfBenefitProcedure {
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
export const ExplanationOfBenefitProcedure: t.Type<
  ExplanationOfBenefitProcedure
> = t.recursion<ExplanationOfBenefitProcedure>(
  "ExplanationOfBenefitProcedure",
  () =>
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
export interface ExplanationOfBenefitInsurance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coverage to be used for adjudication */
  focal: boolean;
  /** Extension of focal element */
  _focal?: Element;
  /** Insurance information */
  coverage: Reference;
  /** Prior authorization reference number */
  preAuthRef?: string[];
  /** Extension of preAuthRef element */
  _preAuthRef?: Element[];
}
/**
 * Patient insurance information
 */
export const ExplanationOfBenefitInsurance: t.Type<
  ExplanationOfBenefitInsurance
> = t.recursion<ExplanationOfBenefitInsurance>(
  "ExplanationOfBenefitInsurance",
  () =>
    t.intersection([
      t.type({
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
        /** Extension of focal element */
        _focal: Element,
        /** Prior authorization reference number */
        preAuthRef: t.array(primitives.R4.string),
        /** Extension of preAuthRef element */
        _preAuthRef: t.array(Element)
      })
    ])
);

/**
 * Details of the event
 */
export interface ExplanationOfBenefitAccident {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When the incident occurred */
  date?: primitives.R4.date;
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
export const ExplanationOfBenefitAccident: t.Type<
  ExplanationOfBenefitAccident
> = t.recursion<ExplanationOfBenefitAccident>(
  "ExplanationOfBenefitAccident",
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
        /** When the incident occurred */
        date: primitives.R4.date,
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
export interface ExplanationOfBenefitItem {
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
  /** Applicable care team members */
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
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
}
/**
 * Product or service provided
 */
export const ExplanationOfBenefitItem: t.Type<
  ExplanationOfBenefitItem
> = t.recursion<ExplanationOfBenefitItem>("ExplanationOfBenefitItem", () =>
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
      /** Applicable care team members */
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
      encounter: t.array(Reference),
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
export interface ExplanationOfBenefitItemAdjudication {
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
  /** Non-monitary value */
  value?: primitives.R4.decimal;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Adjudication details
 */
export const ExplanationOfBenefitItemAdjudication: t.Type<
  ExplanationOfBenefitItemAdjudication
> = t.recursion<ExplanationOfBenefitItemAdjudication>(
  "ExplanationOfBenefitItemAdjudication",
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
        /** Non-monitary value */
        value: primitives.R4.decimal,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * Additional items
 */
export interface ExplanationOfBenefitItemDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Product or service provided */
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
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Detail level adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}
/**
 * Additional items
 */
export const ExplanationOfBenefitItemDetail: t.Type<
  ExplanationOfBenefitItemDetail
> = t.recursion<ExplanationOfBenefitItemDetail>(
  "ExplanationOfBenefitItemDetail",
  () =>
    t.intersection([
      t.type({
        /** Product or service provided */
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
        udi: t.array(Reference),
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt),
        /** Extension of noteNumber element */
        _noteNumber: t.array(Element),
        /** Detail level adjudication details */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication)
      })
    ])
);

/**
 * Additional items
 */
export interface ExplanationOfBenefitItemDetailSubDetail {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Product or service provided */
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
  /** Applicable note numbers */
  noteNumber?: primitives.R4.positiveInt[];
  /** Extension of noteNumber element */
  _noteNumber?: Element[];
  /** Subdetail level adjudication details */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}
/**
 * Additional items
 */
export const ExplanationOfBenefitItemDetailSubDetail: t.Type<
  ExplanationOfBenefitItemDetailSubDetail
> = t.recursion<ExplanationOfBenefitItemDetailSubDetail>(
  "ExplanationOfBenefitItemDetailSubDetail",
  () =>
    t.intersection([
      t.type({
        /** Product or service provided */
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
        udi: t.array(Reference),
        /** Applicable note numbers */
        noteNumber: t.array(primitives.R4.positiveInt),
        /** Extension of noteNumber element */
        _noteNumber: t.array(Element),
        /** Subdetail level adjudication details */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication)
      })
    ])
);

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItem {
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
  subDetailSequence?: primitives.R4.positiveInt[];
  /** Extension of subDetailSequence element */
  _subDetailSequence?: Element[];
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
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}
/**
 * Insurer added line items
 */
export const ExplanationOfBenefitAddItem: t.Type<
  ExplanationOfBenefitAddItem
> = t.recursion<ExplanationOfBenefitAddItem>(
  "ExplanationOfBenefitAddItem",
  () =>
    t.intersection([
      t.type({
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
        /** Item sequence number */
        itemSequence: t.array(primitives.R4.positiveInt),
        /** Extension of itemSequence element */
        _itemSequence: t.array(Element),
        /** Detail sequence number */
        detailSequence: t.array(primitives.R4.positiveInt),
        /** Extension of detailSequence element */
        _detailSequence: t.array(Element),
        /** Subdetail sequence number */
        subDetailSequence: t.array(primitives.R4.positiveInt),
        /** Extension of subDetailSequence element */
        _subDetailSequence: t.array(Element),
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
        _noteNumber: t.array(Element),
        /** Added items adjudication */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication)
      })
    ])
);

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItemDetail {
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
  /** Added items adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}
/**
 * Insurer added line items
 */
export const ExplanationOfBenefitAddItemDetail: t.Type<
  ExplanationOfBenefitAddItemDetail
> = t.recursion<ExplanationOfBenefitAddItemDetail>(
  "ExplanationOfBenefitAddItemDetail",
  () =>
    t.intersection([
      t.type({
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
        _noteNumber: t.array(Element),
        /** Added items adjudication */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication)
      })
    ])
);

/**
 * Insurer added line items
 */
export interface ExplanationOfBenefitAddItemDetailSubDetail {
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
  /** Added items adjudication */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}
/**
 * Insurer added line items
 */
export const ExplanationOfBenefitAddItemDetailSubDetail: t.Type<
  ExplanationOfBenefitAddItemDetailSubDetail
> = t.recursion<ExplanationOfBenefitAddItemDetailSubDetail>(
  "ExplanationOfBenefitAddItemDetailSubDetail",
  () =>
    t.intersection([
      t.type({
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
        _noteNumber: t.array(Element),
        /** Added items adjudication */
        adjudication: t.array(ExplanationOfBenefitItemAdjudication)
      })
    ])
);

/**
 * Adjudication totals
 */
export interface ExplanationOfBenefitTotal {
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
export const ExplanationOfBenefitTotal: t.Type<
  ExplanationOfBenefitTotal
> = t.recursion<ExplanationOfBenefitTotal>("ExplanationOfBenefitTotal", () =>
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
export interface ExplanationOfBenefitPayment {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Partial or complete payment */
  type?: CodeableConcept;
  /** Payment adjustment for non-claim issues */
  adjustment?: Money;
  /** Explanation for the variance */
  adjustmentReason?: CodeableConcept;
  /** Expected date of payment */
  date?: primitives.R4.date;
  /** Extension of date element */
  _date?: Element;
  /** Payable amount after adjustment */
  amount?: Money;
  /** Business identifier for the payment */
  identifier?: Identifier;
}
/**
 * Payment Details
 */
export const ExplanationOfBenefitPayment: t.Type<
  ExplanationOfBenefitPayment
> = t.recursion<ExplanationOfBenefitPayment>(
  "ExplanationOfBenefitPayment",
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
        /** Partial or complete payment */
        type: CodeableConcept,
        /** Payment adjustment for non-claim issues */
        adjustment: Money,
        /** Explanation for the variance */
        adjustmentReason: CodeableConcept,
        /** Expected date of payment */
        date: primitives.R4.date,
        /** Extension of date element */
        _date: Element,
        /** Payable amount after adjustment */
        amount: Money,
        /** Business identifier for the payment */
        identifier: Identifier
      })
    ])
);

/**
 * Note concerning adjudication
 */
export interface ExplanationOfBenefitProcessNote {
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
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Language of the text */
  language?: CodeableConcept;
}
/**
 * Note concerning adjudication
 */
export const ExplanationOfBenefitProcessNote: t.Type<
  ExplanationOfBenefitProcessNote
> = t.recursion<ExplanationOfBenefitProcessNote>(
  "ExplanationOfBenefitProcessNote",
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
        /** Note instance identifier */
        number: primitives.R4.positiveInt,
        /** Extension of number element */
        _number: Element,
        /** display | print | printoper */
        type: primitives.R4.code,
        /** Extension of type element */
        _type: Element,
        /** Note explanatory text */
        text: primitives.R4.string,
        /** Extension of text element */
        _text: Element,
        /** Language of the text */
        language: CodeableConcept
      })
    ])
);

/**
 * Balance by Benefit Category
 */
export interface ExplanationOfBenefitBenefitBalance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Benefit classification */
  category: CodeableConcept;
  /** Excluded from the plan */
  excluded?: boolean;
  /** Extension of excluded element */
  _excluded?: Element;
  /** Short name for the benefit */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Description of the benefit or services covered */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** In or out of network */
  network?: CodeableConcept;
  /** Individual or family */
  unit?: CodeableConcept;
  /** Annual or lifetime */
  term?: CodeableConcept;
}
/**
 * Balance by Benefit Category
 */
export const ExplanationOfBenefitBenefitBalance: t.Type<
  ExplanationOfBenefitBenefitBalance
> = t.recursion<ExplanationOfBenefitBenefitBalance>(
  "ExplanationOfBenefitBenefitBalance",
  () =>
    t.intersection([
      t.type({
        /** Benefit classification */
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
        /** Excluded from the plan */
        excluded: primitives.R4.boolean,
        /** Extension of excluded element */
        _excluded: Element,
        /** Short name for the benefit */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Description of the benefit or services covered */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** In or out of network */
        network: CodeableConcept,
        /** Individual or family */
        unit: CodeableConcept,
        /** Annual or lifetime */
        term: CodeableConcept
      })
    ])
);

/**
 * Benefit Summary
 */
export interface ExplanationOfBenefitBenefitBalanceFinancial {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Benefit classification */
  type: CodeableConcept;
  /** Benefits allowed */
  allowedUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of allowedUnsignedInt element */
  _allowedUnsignedInt?: Element;
  /** Benefits allowed */
  allowedString?: string;
  /** Extension of allowedString element */
  _allowedString?: Element;
  /** Benefits allowed */
  allowedMoney?: Money;
  /** Benefits used */
  usedUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of usedUnsignedInt element */
  _usedUnsignedInt?: Element;
  /** Benefits used */
  usedMoney?: Money;
}
/**
 * Benefit Summary
 */
export const ExplanationOfBenefitBenefitBalanceFinancial: t.Type<
  ExplanationOfBenefitBenefitBalanceFinancial
> = t.recursion<ExplanationOfBenefitBenefitBalanceFinancial>(
  "ExplanationOfBenefitBenefitBalanceFinancial",
  () =>
    t.intersection([
      t.type({
        /** Benefit classification */
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
        /** Benefits allowed */
        allowedUnsignedInt: primitives.R4.unsignedInt,
        /** Extension of allowedUnsignedInt element */
        _allowedUnsignedInt: Element,
        /** Benefits allowed */
        allowedString: primitives.R4.string,
        /** Extension of allowedString element */
        _allowedString: Element,
        /** Benefits allowed */
        allowedMoney: Money,
        /** Benefits used */
        usedUnsignedInt: primitives.R4.unsignedInt,
        /** Extension of usedUnsignedInt element */
        _usedUnsignedInt: Element,
        /** Benefits used */
        usedMoney: Money
      })
    ])
);
