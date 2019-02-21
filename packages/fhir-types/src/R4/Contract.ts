/**
 * Contract Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Signature, SignatureOutputType } from "./Signature";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Protection for the Term
 */
export interface ContractTermSecurityLabel {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Link to Security Labels */
  number?: t.TypeOf<primitives.R4.UnsignedIntegerType>[];
  /** Confidentiality Protection */
  classification: Coding;
  /** Applicable Policy */
  category?: Coding[];
  /** Handling Instructions */
  control?: Coding[];
}

export interface ContractTermSecurityLabelOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Link to Security Labels */
  number?: t.OutputOf<primitives.R4.UnsignedIntegerType>[];
  /** Confidentiality Protection */
  classification: CodingOutputType;
  /** Applicable Policy */
  category?: CodingOutputType[];
  /** Handling Instructions */
  control?: CodingOutputType[];
}

export const ContractTermSecurityLabel: t.RecursiveType<
  t.Type<ContractTermSecurityLabel, ContractTermSecurityLabelOutputType>,
  ContractTermSecurityLabel,
  ContractTermSecurityLabelOutputType
> = t.recursion<ContractTermSecurityLabel, ContractTermSecurityLabelOutputType>(
  "ContractTermSecurityLabel",
  () =>
    t.intersection(
      [
        t.type({
          /** Confidentiality Protection */
          classification: Coding
        }),
        t.partial({
          /** Applicable Policy */
          category: t.array(Coding),
          /** Handling Instructions */
          control: t.array(Coding),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Link to Security Labels */
          number: t.array(primitives.R4.unsignedInt)
        })
      ],
      "ContractTermSecurityLabel"
    )
);

/**
 * Offer Recipient
 */
export interface ContractTermOfferParty {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Referenced entity */
  reference: Reference[];
  /** Participant engagement type */
  role: CodeableConcept;
}

export interface ContractTermOfferPartyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Referenced entity */
  reference: ReferenceOutputType[];
  /** Participant engagement type */
  role: CodeableConceptOutputType;
}

export const ContractTermOfferParty: t.RecursiveType<
  t.Type<ContractTermOfferParty, ContractTermOfferPartyOutputType>,
  ContractTermOfferParty,
  ContractTermOfferPartyOutputType
> = t.recursion<ContractTermOfferParty, ContractTermOfferPartyOutputType>(
  "ContractTermOfferParty",
  () =>
    t.intersection(
      [
        t.type({
          /** Referenced entity */
          reference: t.array(Reference),
          /** Participant engagement type */
          role: CodeableConcept
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ContractTermOfferParty"
    )
);

/**
 * Response to offer text
 */
export interface ContractTermOfferAnswer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The actual answer response */
  value:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.URIType>
    | Attachment
    | Coding
    | Quantity
    | Reference;
}

export interface ContractTermOfferAnswerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The actual answer response */
  value:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.URIType>
    | AttachmentOutputType
    | CodingOutputType
    | QuantityOutputType
    | ReferenceOutputType;
}

export const ContractTermOfferAnswer: t.RecursiveType<
  t.Type<ContractTermOfferAnswer, ContractTermOfferAnswerOutputType>,
  ContractTermOfferAnswer,
  ContractTermOfferAnswerOutputType
> = t.recursion<ContractTermOfferAnswer, ContractTermOfferAnswerOutputType>(
  "ContractTermOfferAnswer",
  () =>
    t.intersection(
      [
        t.type({
          /** The actual answer response */
          value: t.union([
            primitives.R4.boolean,
            primitives.R4.decimal,
            primitives.R4.integer,
            primitives.R4.date,
            primitives.R4.dateTime,
            primitives.R4.time,
            primitives.R4.string,
            primitives.R4.uri,
            Attachment,
            Coding,
            Quantity,
            Reference
          ])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ContractTermOfferAnswer"
    )
);

/**
 * Context of the Contract term
 */
export interface ContractTermOffer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Offer business ID */
  identifier?: Identifier[];
  /** Offer Recipient */
  party?: ContractTermOfferParty[];
  /** Negotiable offer asset */
  topic?: Reference;
  /** Contract Offer Type or Form */
  type?: CodeableConcept;
  /** Accepting party choice */
  decision?: CodeableConcept;
  /** How decision is conveyed */
  decisionMode?: CodeableConcept[];
  /** Response to offer text */
  answer?: ContractTermOfferAnswer[];
  /** Human readable offer text */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Pointer to text */
  linkId?: t.TypeOf<primitives.R4.StringType>[];
  /** Offer restriction numbers */
  securityLabelNumber?: t.TypeOf<primitives.R4.UnsignedIntegerType>[];
}

export interface ContractTermOfferOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Offer business ID */
  identifier?: IdentifierOutputType[];
  /** Offer Recipient */
  party?: ContractTermOfferPartyOutputType[];
  /** Negotiable offer asset */
  topic?: ReferenceOutputType;
  /** Contract Offer Type or Form */
  type?: CodeableConceptOutputType;
  /** Accepting party choice */
  decision?: CodeableConceptOutputType;
  /** How decision is conveyed */
  decisionMode?: CodeableConceptOutputType[];
  /** Response to offer text */
  answer?: ContractTermOfferAnswerOutputType[];
  /** Human readable offer text */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Pointer to text */
  linkId?: t.OutputOf<primitives.R4.StringType>[];
  /** Offer restriction numbers */
  securityLabelNumber?: t.OutputOf<primitives.R4.UnsignedIntegerType>[];
}

export const ContractTermOffer: t.RecursiveType<
  t.Type<ContractTermOffer, ContractTermOfferOutputType>,
  ContractTermOffer,
  ContractTermOfferOutputType
> = t.recursion<ContractTermOffer, ContractTermOfferOutputType>(
  "ContractTermOffer",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Response to offer text */
          answer: t.array(ContractTermOfferAnswer),
          /** Accepting party choice */
          decision: CodeableConcept,
          /** How decision is conveyed */
          decisionMode: t.array(CodeableConcept),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Offer business ID */
          identifier: t.array(Identifier),
          /** Pointer to text */
          linkId: t.array(primitives.R4.string),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Offer Recipient */
          party: t.array(ContractTermOfferParty),
          /** Offer restriction numbers */
          securityLabelNumber: t.array(primitives.R4.unsignedInt),
          /** Human readable offer text */
          text: primitives.R4.string,
          /** Negotiable offer asset */
          topic: Reference,
          /** Contract Offer Type or Form */
          type: CodeableConcept
        })
      ],
      "ContractTermOffer"
    )
);

/**
 * Contract Valued Item List
 */
export interface ContractTermAssetValuedItem {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Valued Item Type */
  entity?: CodeableConcept | Reference;
  /** Contract Valued Item Number */
  identifier?: Identifier;
  /** Contract Valued Item Effective Tiem */
  effectiveTime?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Count of Contract Valued Items */
  quantity?: Quantity;
  /** Contract Valued Item fee, charge, or cost */
  unitPrice?: Money;
  /** Contract Valued Item Price Scaling Factor */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Contract Valued Item Difficulty Scaling Factor */
  points?: t.TypeOf<primitives.R4.DecimalType>;
  /** Total Contract Valued Item Value */
  net?: Money;
  /** Terms of valuation */
  payment?: t.TypeOf<primitives.R4.StringType>;
  /** When payment is due */
  paymentDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who will make payment */
  responsible?: Reference;
  /** Who will receive payment */
  recipient?: Reference;
  /** Pointer to specific item */
  linkId?: t.TypeOf<primitives.R4.StringType>[];
  /** Security Labels that define affected terms */
  securityLabelNumber?: t.TypeOf<primitives.R4.UnsignedIntegerType>[];
}

export interface ContractTermAssetValuedItemOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Contract Valued Item Type */
  entity?: CodeableConceptOutputType | ReferenceOutputType;
  /** Contract Valued Item Number */
  identifier?: IdentifierOutputType;
  /** Contract Valued Item Effective Tiem */
  effectiveTime?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Count of Contract Valued Items */
  quantity?: QuantityOutputType;
  /** Contract Valued Item fee, charge, or cost */
  unitPrice?: MoneyOutputType;
  /** Contract Valued Item Price Scaling Factor */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Contract Valued Item Difficulty Scaling Factor */
  points?: t.OutputOf<primitives.R4.DecimalType>;
  /** Total Contract Valued Item Value */
  net?: MoneyOutputType;
  /** Terms of valuation */
  payment?: t.OutputOf<primitives.R4.StringType>;
  /** When payment is due */
  paymentDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who will make payment */
  responsible?: ReferenceOutputType;
  /** Who will receive payment */
  recipient?: ReferenceOutputType;
  /** Pointer to specific item */
  linkId?: t.OutputOf<primitives.R4.StringType>[];
  /** Security Labels that define affected terms */
  securityLabelNumber?: t.OutputOf<primitives.R4.UnsignedIntegerType>[];
}

export const ContractTermAssetValuedItem: t.RecursiveType<
  t.Type<ContractTermAssetValuedItem, ContractTermAssetValuedItemOutputType>,
  ContractTermAssetValuedItem,
  ContractTermAssetValuedItemOutputType
> = t.recursion<
  ContractTermAssetValuedItem,
  ContractTermAssetValuedItemOutputType
>("ContractTermAssetValuedItem", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Contract Valued Item Effective Tiem */
        effectiveTime: primitives.R4.dateTime,
        /** Contract Valued Item Type */
        entity: t.union([CodeableConcept, Reference]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Contract Valued Item Price Scaling Factor */
        factor: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Contract Valued Item Number */
        identifier: Identifier,
        /** Pointer to specific item */
        linkId: t.array(primitives.R4.string),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Total Contract Valued Item Value */
        net: Money,
        /** Terms of valuation */
        payment: primitives.R4.string,
        /** When payment is due */
        paymentDate: primitives.R4.dateTime,
        /** Contract Valued Item Difficulty Scaling Factor */
        points: primitives.R4.decimal,
        /** Count of Contract Valued Items */
        quantity: Quantity,
        /** Who will receive payment */
        recipient: Reference,
        /** Who will make payment */
        responsible: Reference,
        /** Security Labels that define affected terms */
        securityLabelNumber: t.array(primitives.R4.unsignedInt),
        /** Contract Valued Item fee, charge, or cost */
        unitPrice: Money
      })
    ],
    "ContractTermAssetValuedItem"
  )
);

/**
 * Circumstance of the asset
 */
export interface ContractTermAssetContext {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Creator,custodian or owner */
  reference?: Reference;
  /** Codeable asset context */
  code?: CodeableConcept[];
  /** Context description */
  text?: t.TypeOf<primitives.R4.StringType>;
}

export interface ContractTermAssetContextOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Creator,custodian or owner */
  reference?: ReferenceOutputType;
  /** Codeable asset context */
  code?: CodeableConceptOutputType[];
  /** Context description */
  text?: t.OutputOf<primitives.R4.StringType>;
}

export const ContractTermAssetContext: t.RecursiveType<
  t.Type<ContractTermAssetContext, ContractTermAssetContextOutputType>,
  ContractTermAssetContext,
  ContractTermAssetContextOutputType
> = t.recursion<ContractTermAssetContext, ContractTermAssetContextOutputType>(
  "ContractTermAssetContext",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Codeable asset context */
          code: t.array(CodeableConcept),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Creator,custodian or owner */
          reference: Reference,
          /** Context description */
          text: primitives.R4.string
        })
      ],
      "ContractTermAssetContext"
    )
);

/**
 * Contract Term Asset List
 */
export interface ContractTermAsset {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Range of asset */
  scope?: CodeableConcept;
  /** Asset category */
  type?: CodeableConcept[];
  /** Associated entities */
  typeReference?: Reference[];
  /** Asset sub-category */
  subtype?: CodeableConcept[];
  /** Kinship of the asset */
  relationship?: Coding;
  /** Circumstance of the asset */
  context?: ContractTermAssetContext[];
  /** Quality desctiption of asset */
  condition?: t.TypeOf<primitives.R4.StringType>;
  /** Asset availability types */
  periodType?: CodeableConcept[];
  /** Time period of the asset */
  period?: Period[];
  /** Time period */
  usePeriod?: Period[];
  /** Asset clause or question text */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Pointer to asset text */
  linkId?: t.TypeOf<primitives.R4.StringType>[];
  /** Response to assets */
  answer?: ContractTermOfferAnswer[];
  /** Asset restriction numbers */
  securityLabelNumber?: t.TypeOf<primitives.R4.UnsignedIntegerType>[];
  /** Contract Valued Item List */
  valuedItem?: ContractTermAssetValuedItem[];
}

export interface ContractTermAssetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Range of asset */
  scope?: CodeableConceptOutputType;
  /** Asset category */
  type?: CodeableConceptOutputType[];
  /** Associated entities */
  typeReference?: ReferenceOutputType[];
  /** Asset sub-category */
  subtype?: CodeableConceptOutputType[];
  /** Kinship of the asset */
  relationship?: CodingOutputType;
  /** Circumstance of the asset */
  context?: ContractTermAssetContextOutputType[];
  /** Quality desctiption of asset */
  condition?: t.OutputOf<primitives.R4.StringType>;
  /** Asset availability types */
  periodType?: CodeableConceptOutputType[];
  /** Time period of the asset */
  period?: PeriodOutputType[];
  /** Time period */
  usePeriod?: PeriodOutputType[];
  /** Asset clause or question text */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Pointer to asset text */
  linkId?: t.OutputOf<primitives.R4.StringType>[];
  /** Response to assets */
  answer?: ContractTermOfferAnswerOutputType[];
  /** Asset restriction numbers */
  securityLabelNumber?: t.OutputOf<primitives.R4.UnsignedIntegerType>[];
  /** Contract Valued Item List */
  valuedItem?: ContractTermAssetValuedItemOutputType[];
}

export const ContractTermAsset: t.RecursiveType<
  t.Type<ContractTermAsset, ContractTermAssetOutputType>,
  ContractTermAsset,
  ContractTermAssetOutputType
> = t.recursion<ContractTermAsset, ContractTermAssetOutputType>(
  "ContractTermAsset",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Response to assets */
          answer: t.array(ContractTermOfferAnswer),
          /** Quality desctiption of asset */
          condition: primitives.R4.string,
          /** Circumstance of the asset */
          context: t.array(ContractTermAssetContext),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Pointer to asset text */
          linkId: t.array(primitives.R4.string),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Time period of the asset */
          period: t.array(Period),
          /** Asset availability types */
          periodType: t.array(CodeableConcept),
          /** Kinship of the asset */
          relationship: Coding,
          /** Range of asset */
          scope: CodeableConcept,
          /** Asset restriction numbers */
          securityLabelNumber: t.array(primitives.R4.unsignedInt),
          /** Asset sub-category */
          subtype: t.array(CodeableConcept),
          /** Asset clause or question text */
          text: primitives.R4.string,
          /** Asset category */
          type: t.array(CodeableConcept),
          /** Associated entities */
          typeReference: t.array(Reference),
          /** Time period */
          usePeriod: t.array(Period),
          /** Contract Valued Item List */
          valuedItem: t.array(ContractTermAssetValuedItem)
        })
      ],
      "ContractTermAsset"
    )
);

/**
 * Entity of the action
 */
export interface ContractTermActionSubject {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Entity of the action */
  reference: Reference[];
  /** Role type of the agent */
  role?: CodeableConcept;
}

export interface ContractTermActionSubjectOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Entity of the action */
  reference: ReferenceOutputType[];
  /** Role type of the agent */
  role?: CodeableConceptOutputType;
}

export const ContractTermActionSubject: t.RecursiveType<
  t.Type<ContractTermActionSubject, ContractTermActionSubjectOutputType>,
  ContractTermActionSubject,
  ContractTermActionSubjectOutputType
> = t.recursion<ContractTermActionSubject, ContractTermActionSubjectOutputType>(
  "ContractTermActionSubject",
  () =>
    t.intersection(
      [
        t.type({
          /** Entity of the action */
          reference: t.array(Reference)
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Role type of the agent */
          role: CodeableConcept
        })
      ],
      "ContractTermActionSubject"
    )
);

/**
 * Entity being ascribed responsibility
 */
export interface ContractTermAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** True if the term prohibits the  action */
  doNotPerform?: t.TypeOf<primitives.R4.BooleanType>;
  /** Type or form of the action */
  type: CodeableConcept;
  /** Entity of the action */
  subject?: ContractTermActionSubject[];
  /** Purpose for the Contract Term Action */
  intent: CodeableConcept;
  /** Pointer to specific item */
  linkId?: t.TypeOf<primitives.R4.StringType>[];
  /** State of the action */
  status: CodeableConcept;
  /** Episode associated with action */
  context?: Reference;
  /** Pointer to specific item */
  contextLinkId?: t.TypeOf<primitives.R4.StringType>[];
  /** When action happens */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period | Timing;
  /** Who asked for action */
  requester?: Reference[];
  /** Pointer to specific item */
  requesterLinkId?: t.TypeOf<primitives.R4.StringType>[];
  /** Kind of service performer */
  performerType?: CodeableConcept[];
  /** Competency of the performer */
  performerRole?: CodeableConcept;
  /** Actor that wil execute (or not) the action */
  performer?: Reference;
  /** Pointer to specific item */
  performerLinkId?: t.TypeOf<primitives.R4.StringType>[];
  /** Why is action (not) needed? */
  reasonCode?: CodeableConcept[];
  /** Why is action (not) needed? */
  reasonReference?: Reference[];
  /** Why action is to be performed */
  reason?: t.TypeOf<primitives.R4.StringType>[];
  /** Pointer to specific item */
  reasonLinkId?: t.TypeOf<primitives.R4.StringType>[];
  /** Comments about the action */
  note?: Annotation[];
  /** Action restriction numbers */
  securityLabelNumber?: t.TypeOf<primitives.R4.UnsignedIntegerType>[];
}

export interface ContractTermActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** True if the term prohibits the  action */
  doNotPerform?: t.OutputOf<primitives.R4.BooleanType>;
  /** Type or form of the action */
  type: CodeableConceptOutputType;
  /** Entity of the action */
  subject?: ContractTermActionSubjectOutputType[];
  /** Purpose for the Contract Term Action */
  intent: CodeableConceptOutputType;
  /** Pointer to specific item */
  linkId?: t.OutputOf<primitives.R4.StringType>[];
  /** State of the action */
  status: CodeableConceptOutputType;
  /** Episode associated with action */
  context?: ReferenceOutputType;
  /** Pointer to specific item */
  contextLinkId?: t.OutputOf<primitives.R4.StringType>[];
  /** When action happens */
  occurrence?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType;
  /** Who asked for action */
  requester?: ReferenceOutputType[];
  /** Pointer to specific item */
  requesterLinkId?: t.OutputOf<primitives.R4.StringType>[];
  /** Kind of service performer */
  performerType?: CodeableConceptOutputType[];
  /** Competency of the performer */
  performerRole?: CodeableConceptOutputType;
  /** Actor that wil execute (or not) the action */
  performer?: ReferenceOutputType;
  /** Pointer to specific item */
  performerLinkId?: t.OutputOf<primitives.R4.StringType>[];
  /** Why is action (not) needed? */
  reasonCode?: CodeableConceptOutputType[];
  /** Why is action (not) needed? */
  reasonReference?: ReferenceOutputType[];
  /** Why action is to be performed */
  reason?: t.OutputOf<primitives.R4.StringType>[];
  /** Pointer to specific item */
  reasonLinkId?: t.OutputOf<primitives.R4.StringType>[];
  /** Comments about the action */
  note?: AnnotationOutputType[];
  /** Action restriction numbers */
  securityLabelNumber?: t.OutputOf<primitives.R4.UnsignedIntegerType>[];
}

export const ContractTermAction: t.RecursiveType<
  t.Type<ContractTermAction, ContractTermActionOutputType>,
  ContractTermAction,
  ContractTermActionOutputType
> = t.recursion<ContractTermAction, ContractTermActionOutputType>(
  "ContractTermAction",
  () =>
    t.intersection(
      [
        t.type({
          /** Purpose for the Contract Term Action */
          intent: CodeableConcept,
          /** State of the action */
          status: CodeableConcept,
          /** Type or form of the action */
          type: CodeableConcept
        }),
        t.partial({
          /** Episode associated with action */
          context: Reference,
          /** Pointer to specific item */
          contextLinkId: t.array(primitives.R4.string),
          /** True if the term prohibits the  action */
          doNotPerform: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Pointer to specific item */
          linkId: t.array(primitives.R4.string),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Comments about the action */
          note: t.array(Annotation),
          /** When action happens */
          occurrence: t.union([primitives.R4.dateTime, Period, Timing]),
          /** Actor that wil execute (or not) the action */
          performer: Reference,
          /** Pointer to specific item */
          performerLinkId: t.array(primitives.R4.string),
          /** Competency of the performer */
          performerRole: CodeableConcept,
          /** Kind of service performer */
          performerType: t.array(CodeableConcept),
          /** Why action is to be performed */
          reason: t.array(primitives.R4.string),
          /** Why is action (not) needed? */
          reasonCode: t.array(CodeableConcept),
          /** Pointer to specific item */
          reasonLinkId: t.array(primitives.R4.string),
          /** Why is action (not) needed? */
          reasonReference: t.array(Reference),
          /** Who asked for action */
          requester: t.array(Reference),
          /** Pointer to specific item */
          requesterLinkId: t.array(primitives.R4.string),
          /** Action restriction numbers */
          securityLabelNumber: t.array(primitives.R4.unsignedInt),
          /** Entity of the action */
          subject: t.array(ContractTermActionSubject)
        })
      ],
      "ContractTermAction"
    )
);

/**
 * Contract Term List
 */
export interface ContractTerm {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Term Number */
  identifier?: Identifier;
  /** Contract Term Issue Date Time */
  issued?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Contract Term Effective Time */
  applies?: Period;
  /** Term Concern */
  topic?: CodeableConcept | Reference;
  /** Contract Term Type or Form */
  type?: CodeableConcept;
  /** Contract Term Type specific classification */
  subType?: CodeableConcept;
  /** Term Statement */
  text?: t.TypeOf<primitives.R4.StringType>;
  /** Protection for the Term */
  securityLabel?: ContractTermSecurityLabel[];
  /** Context of the Contract term */
  offer: ContractTermOffer;
  /** Contract Term Asset List */
  asset?: ContractTermAsset[];
  /** Entity being ascribed responsibility */
  action?: ContractTermAction[];
  /** Nested Contract Term Group */
  group?: ContractTerm[];
}

export interface ContractTermOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Contract Term Number */
  identifier?: IdentifierOutputType;
  /** Contract Term Issue Date Time */
  issued?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Contract Term Effective Time */
  applies?: PeriodOutputType;
  /** Term Concern */
  topic?: CodeableConceptOutputType | ReferenceOutputType;
  /** Contract Term Type or Form */
  type?: CodeableConceptOutputType;
  /** Contract Term Type specific classification */
  subType?: CodeableConceptOutputType;
  /** Term Statement */
  text?: t.OutputOf<primitives.R4.StringType>;
  /** Protection for the Term */
  securityLabel?: ContractTermSecurityLabelOutputType[];
  /** Context of the Contract term */
  offer: ContractTermOfferOutputType;
  /** Contract Term Asset List */
  asset?: ContractTermAssetOutputType[];
  /** Entity being ascribed responsibility */
  action?: ContractTermActionOutputType[];
  /** Nested Contract Term Group */
  group?: ContractTermOutputType[];
}

export const ContractTerm: t.RecursiveType<
  t.Type<ContractTerm, ContractTermOutputType>,
  ContractTerm,
  ContractTermOutputType
> = t.recursion<ContractTerm, ContractTermOutputType>("ContractTerm", () =>
  t.intersection(
    [
      t.type({
        /** Context of the Contract term */
        offer: ContractTermOffer
      }),
      t.partial({
        /** Entity being ascribed responsibility */
        action: t.array(ContractTermAction),
        /** Contract Term Effective Time */
        applies: Period,
        /** Contract Term Asset List */
        asset: t.array(ContractTermAsset),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Nested Contract Term Group */
        group: t.array(ContractTerm),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Contract Term Number */
        identifier: Identifier,
        /** Contract Term Issue Date Time */
        issued: primitives.R4.dateTime,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Protection for the Term */
        securityLabel: t.array(ContractTermSecurityLabel),
        /** Contract Term Type specific classification */
        subType: CodeableConcept,
        /** Term Statement */
        text: primitives.R4.string,
        /** Term Concern */
        topic: t.union([CodeableConcept, Reference]),
        /** Contract Term Type or Form */
        type: CodeableConcept
      })
    ],
    "ContractTerm"
  )
);

/**
 * Contract Signatory
 */
export interface ContractSigner {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Signatory Role */
  type: Coding;
  /** Contract Signatory Party */
  party: Reference;
  /** Contract Documentation Signature */
  signature: Signature[];
}

export interface ContractSignerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Contract Signatory Role */
  type: CodingOutputType;
  /** Contract Signatory Party */
  party: ReferenceOutputType;
  /** Contract Documentation Signature */
  signature: SignatureOutputType[];
}

export const ContractSigner: t.RecursiveType<
  t.Type<ContractSigner, ContractSignerOutputType>,
  ContractSigner,
  ContractSignerOutputType
> = t.recursion<ContractSigner, ContractSignerOutputType>(
  "ContractSigner",
  () =>
    t.intersection(
      [
        t.type({
          /** Contract Signatory Party */
          party: Reference,
          /** Contract Documentation Signature */
          signature: t.array(Signature),
          /** Contract Signatory Role */
          type: Coding
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ContractSigner"
    )
);

/**
 * Computable Contract Language
 */
export interface ContractRule {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Computable Contract Rules */
  content: Attachment | Reference;
}

export interface ContractRuleOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Computable Contract Rules */
  content: AttachmentOutputType | ReferenceOutputType;
}

export const ContractRule: t.RecursiveType<
  t.Type<ContractRule, ContractRuleOutputType>,
  ContractRule,
  ContractRuleOutputType
> = t.recursion<ContractRule, ContractRuleOutputType>("ContractRule", () =>
  t.intersection(
    [
      t.type({
        /** Computable Contract Rules */
        content: t.union([Attachment, Reference])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ContractRule"
  )
);

/**
 * Contract Legal Language
 */
export interface ContractLegal {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Legal Text */
  content: Attachment | Reference;
}

export interface ContractLegalOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Contract Legal Text */
  content: AttachmentOutputType | ReferenceOutputType;
}

export const ContractLegal: t.RecursiveType<
  t.Type<ContractLegal, ContractLegalOutputType>,
  ContractLegal,
  ContractLegalOutputType
> = t.recursion<ContractLegal, ContractLegalOutputType>("ContractLegal", () =>
  t.intersection(
    [
      t.type({
        /** Contract Legal Text */
        content: t.union([Attachment, Reference])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ContractLegal"
  )
);

/**
 * Contract Friendly Language
 */
export interface ContractFriendly {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Easily comprehended representation of this Contract */
  content: Attachment | Reference;
}

export interface ContractFriendlyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Easily comprehended representation of this Contract */
  content: AttachmentOutputType | ReferenceOutputType;
}

export const ContractFriendly: t.RecursiveType<
  t.Type<ContractFriendly, ContractFriendlyOutputType>,
  ContractFriendly,
  ContractFriendlyOutputType
> = t.recursion<ContractFriendly, ContractFriendlyOutputType>(
  "ContractFriendly",
  () =>
    t.intersection(
      [
        t.type({
          /** Easily comprehended representation of this Contract */
          content: t.union([Attachment, Reference])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ContractFriendly"
    )
);

/**
 * Contract precursor content
 */
export interface ContractContentDefinition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Content structure and use */
  type: CodeableConcept;
  /** Detailed Content Type Definition */
  subType?: CodeableConcept;
  /** Publisher Entity */
  publisher?: Reference;
  /** When published */
  publicationDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** draft | active | retired | unknown */
  publicationStatus: t.TypeOf<primitives.R4.CodeType>;
  /** Publication Ownership */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface ContractContentDefinitionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Content structure and use */
  type: CodeableConceptOutputType;
  /** Detailed Content Type Definition */
  subType?: CodeableConceptOutputType;
  /** Publisher Entity */
  publisher?: ReferenceOutputType;
  /** When published */
  publicationDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** draft | active | retired | unknown */
  publicationStatus: t.OutputOf<primitives.R4.CodeType>;
  /** Publication Ownership */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const ContractContentDefinition: t.RecursiveType<
  t.Type<ContractContentDefinition, ContractContentDefinitionOutputType>,
  ContractContentDefinition,
  ContractContentDefinitionOutputType
> = t.recursion<ContractContentDefinition, ContractContentDefinitionOutputType>(
  "ContractContentDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | active | retired | unknown */
          publicationStatus: primitives.R4.code,
          /** Content structure and use */
          type: CodeableConcept
        }),
        t.partial({
          /** Publication Ownership */
          copyright: primitives.R4.markdown,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** When published */
          publicationDate: primitives.R4.dateTime,
          /** Publisher Entity */
          publisher: Reference,
          /** Detailed Content Type Definition */
          subType: CodeableConcept
        })
      ],
      "ContractContentDefinition"
    )
);

/**
 * Legal Agreement
 */
export interface Contract {
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
  /** Contract number */
  identifier?: Identifier[];
  /** Basal definition */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Business edition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Negotiation status */
  legalState?: CodeableConcept;
  /** Source Contract Definition */
  instantiatesCanonical?: Reference;
  /** External Contract Definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>;
  /** Content derived from the basal information */
  contentDerivative?: CodeableConcept;
  /** When this Contract was issued */
  issued?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Effective time */
  applies?: Period;
  /** Contract cessation cause */
  expirationType?: CodeableConcept;
  /** Contract Target Entity */
  subject?: Reference[];
  /** Authority under which this Contract has standing */
  authority?: Reference[];
  /** A sphere of control governed by an authoritative jurisdiction, organization, or person */
  domain?: Reference[];
  /** Specific Location */
  site?: Reference[];
  /** Computer friendly designation */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Human Friendly name */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Subordinate Friendly name */
  subtitle?: t.TypeOf<primitives.R4.StringType>;
  /** Acronym or short name */
  alias?: t.TypeOf<primitives.R4.StringType>[];
  /** Source of Contract */
  author?: Reference;
  /** Range of Legal Concerns */
  scope?: CodeableConcept;
  /** Focus of contract interest */
  topic?: CodeableConcept | Reference;
  /** Legal instrument category */
  type?: CodeableConcept;
  /** Subtype within the context of type */
  subType?: CodeableConcept[];
  /** Contract precursor content */
  contentDefinition?: ContractContentDefinition;
  /** Contract Term List */
  term?: ContractTerm[];
  /** Extra Information */
  supportingInfo?: Reference[];
  /** Key event in Contract History */
  relevantHistory?: Reference[];
  /** Contract Signatory */
  signer?: ContractSigner[];
  /** Contract Friendly Language */
  friendly?: ContractFriendly[];
  /** Contract Legal Language */
  legal?: ContractLegal[];
  /** Computable Contract Language */
  rule?: ContractRule[];
  /** Binding Contract */
  legallybinding?: Attachment | Reference;
}

export interface ContractOutputType {
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
  /** Contract number */
  identifier?: IdentifierOutputType[];
  /** Basal definition */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Business edition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Negotiation status */
  legalState?: CodeableConceptOutputType;
  /** Source Contract Definition */
  instantiatesCanonical?: ReferenceOutputType;
  /** External Contract Definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>;
  /** Content derived from the basal information */
  contentDerivative?: CodeableConceptOutputType;
  /** When this Contract was issued */
  issued?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Effective time */
  applies?: PeriodOutputType;
  /** Contract cessation cause */
  expirationType?: CodeableConceptOutputType;
  /** Contract Target Entity */
  subject?: ReferenceOutputType[];
  /** Authority under which this Contract has standing */
  authority?: ReferenceOutputType[];
  /** A sphere of control governed by an authoritative jurisdiction, organization, or person */
  domain?: ReferenceOutputType[];
  /** Specific Location */
  site?: ReferenceOutputType[];
  /** Computer friendly designation */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Human Friendly name */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Subordinate Friendly name */
  subtitle?: t.OutputOf<primitives.R4.StringType>;
  /** Acronym or short name */
  alias?: t.OutputOf<primitives.R4.StringType>[];
  /** Source of Contract */
  author?: ReferenceOutputType;
  /** Range of Legal Concerns */
  scope?: CodeableConceptOutputType;
  /** Focus of contract interest */
  topic?: CodeableConceptOutputType | ReferenceOutputType;
  /** Legal instrument category */
  type?: CodeableConceptOutputType;
  /** Subtype within the context of type */
  subType?: CodeableConceptOutputType[];
  /** Contract precursor content */
  contentDefinition?: ContractContentDefinitionOutputType;
  /** Contract Term List */
  term?: ContractTermOutputType[];
  /** Extra Information */
  supportingInfo?: ReferenceOutputType[];
  /** Key event in Contract History */
  relevantHistory?: ReferenceOutputType[];
  /** Contract Signatory */
  signer?: ContractSignerOutputType[];
  /** Contract Friendly Language */
  friendly?: ContractFriendlyOutputType[];
  /** Contract Legal Language */
  legal?: ContractLegalOutputType[];
  /** Computable Contract Language */
  rule?: ContractRuleOutputType[];
  /** Binding Contract */
  legallybinding?: AttachmentOutputType | ReferenceOutputType;
}

export const Contract: t.RecursiveType<
  t.Type<Contract, ContractOutputType>,
  Contract,
  ContractOutputType
> = t.recursion<Contract, ContractOutputType>("Contract", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Acronym or short name */
        alias: t.array(primitives.R4.string),
        /** Effective time */
        applies: Period,
        /** Source of Contract */
        author: Reference,
        /** Authority under which this Contract has standing */
        authority: t.array(Reference),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Contract precursor content */
        contentDefinition: ContractContentDefinition,
        /** Content derived from the basal information */
        contentDerivative: CodeableConcept,
        /** A sphere of control governed by an authoritative jurisdiction, organization, or person */
        domain: t.array(Reference),
        /** Contract cessation cause */
        expirationType: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Contract Friendly Language */
        friendly: t.array(ContractFriendly),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Contract number */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Source Contract Definition */
        instantiatesCanonical: Reference,
        /** External Contract Definition */
        instantiatesUri: primitives.R4.uri,
        /** When this Contract was issued */
        issued: primitives.R4.dateTime,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Contract Legal Language */
        legal: t.array(ContractLegal),
        /** Negotiation status */
        legalState: CodeableConcept,
        /** Binding Contract */
        legallybinding: t.union([Attachment, Reference]),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Computer friendly designation */
        name: primitives.R4.string,
        /** Key event in Contract History */
        relevantHistory: t.array(Reference),
        /** Computable Contract Language */
        rule: t.array(ContractRule),
        /** Range of Legal Concerns */
        scope: CodeableConcept,
        /** Contract Signatory */
        signer: t.array(ContractSigner),
        /** Specific Location */
        site: t.array(Reference),
        /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Subtype within the context of type */
        subType: t.array(CodeableConcept),
        /** Contract Target Entity */
        subject: t.array(Reference),
        /** Subordinate Friendly name */
        subtitle: primitives.R4.string,
        /** Extra Information */
        supportingInfo: t.array(Reference),
        /** Contract Term List */
        term: t.array(ContractTerm),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Human Friendly name */
        title: primitives.R4.string,
        /** Focus of contract interest */
        topic: t.union([CodeableConcept, Reference]),
        /** Legal instrument category */
        type: CodeableConcept,
        /** Basal definition */
        url: primitives.R4.uri,
        /** Business edition */
        version: primitives.R4.string
      })
    ],
    "Contract"
  )
);
