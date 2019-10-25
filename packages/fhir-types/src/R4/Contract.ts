/**
 * Contract Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
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
import { Signature } from "./Signature";
import { Timing } from "./Timing";

/**
 * Legal Agreement
 */
export interface Contract {
  /** The type of resource */
  resourceType?: "Contract";
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
  /** Contract number */
  identifier?: Identifier[];
  /** Basal definition */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business edition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Negotiation status */
  legalState?: CodeableConcept;
  /** Source Contract Definition */
  instantiatesCanonical?: Reference;
  /** External Contract Definition */
  instantiatesUri?: primitives.R4.uri;
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element;
  /** Content derived from the basal information */
  contentDerivative?: CodeableConcept;
  /** When this Contract was issued */
  issued?: primitives.R4.dateTime;
  /** Extension of issued element */
  _issued?: Element;
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
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Human Friendly name */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Subordinate Friendly name */
  subtitle?: string;
  /** Extension of subtitle element */
  _subtitle?: Element;
  /** Acronym or short name */
  alias?: string[];
  /** Extension of alias element */
  _alias?: Element[];
  /** Source of Contract */
  author?: Reference;
  /** Range of Legal Concerns */
  scope?: CodeableConcept;
  /** Focus of contract interest */
  topicCodeableConcept?: CodeableConcept;
  /** Focus of contract interest */
  topicReference?: Reference;
  /** Legal instrument category */
  type?: CodeableConcept;
  /** Subtype within the context of type */
  subType?: CodeableConcept[];
  /** Extra Information */
  supportingInfo?: Reference[];
  /** Key event in Contract History */
  relevantHistory?: Reference[];
  /** Binding Contract */
  legallybindingAttachment?: Attachment;
  /** Binding Contract */
  legallybindingReference?: Reference;
}
/**
 * Legal Agreement
 */
export const Contract: t.Type<Contract> = t.recursion<Contract>(
  "Contract",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Contract"),
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
        /** Contract number */
        identifier: t.array(Identifier),
        /** Basal definition */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Business edition */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** Negotiation status */
        legalState: CodeableConcept,
        /** Source Contract Definition */
        instantiatesCanonical: Reference,
        /** External Contract Definition */
        instantiatesUri: primitives.R4.uri,
        /** Extension of instantiatesUri element */
        _instantiatesUri: Element,
        /** Content derived from the basal information */
        contentDerivative: CodeableConcept,
        /** When this Contract was issued */
        issued: primitives.R4.dateTime,
        /** Extension of issued element */
        _issued: Element,
        /** Effective time */
        applies: Period,
        /** Contract cessation cause */
        expirationType: CodeableConcept,
        /** Contract Target Entity */
        subject: t.array(Reference),
        /** Authority under which this Contract has standing */
        authority: t.array(Reference),
        /** A sphere of control governed by an authoritative jurisdiction, organization, or person */
        domain: t.array(Reference),
        /** Specific Location */
        site: t.array(Reference),
        /** Computer friendly designation */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Human Friendly name */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Subordinate Friendly name */
        subtitle: primitives.R4.string,
        /** Extension of subtitle element */
        _subtitle: Element,
        /** Acronym or short name */
        alias: t.array(primitives.R4.string),
        /** Extension of alias element */
        _alias: t.array(Element),
        /** Source of Contract */
        author: Reference,
        /** Range of Legal Concerns */
        scope: CodeableConcept,
        /** Focus of contract interest */
        topicCodeableConcept: CodeableConcept,
        /** Focus of contract interest */
        topicReference: Reference,
        /** Legal instrument category */
        type: CodeableConcept,
        /** Subtype within the context of type */
        subType: t.array(CodeableConcept),
        /** Extra Information */
        supportingInfo: t.array(Reference),
        /** Key event in Contract History */
        relevantHistory: t.array(Reference),
        /** Binding Contract */
        legallybindingAttachment: Attachment,
        /** Binding Contract */
        legallybindingReference: Reference
      })
    ])
);

/**
 * Contract precursor content
 */
export interface ContractContentDefinition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
  publicationDate?: primitives.R4.dateTime;
  /** Extension of publicationDate element */
  _publicationDate?: Element;
  /** draft | active | retired | unknown */
  publicationStatus: primitives.R4.code;
  /** Extension of publicationStatus element */
  _publicationStatus?: Element;
  /** Publication Ownership */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
}
/**
 * Contract precursor content
 */
export const ContractContentDefinition: t.Type<
  ContractContentDefinition
> = t.recursion<ContractContentDefinition>("ContractContentDefinition", () =>
  t.intersection([
    t.type({
      /** Content structure and use */
      type: CodeableConcept,
      /** draft | active | retired | unknown */
      publicationStatus: primitives.R4.code
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
      /** Detailed Content Type Definition */
      subType: CodeableConcept,
      /** Publisher Entity */
      publisher: Reference,
      /** When published */
      publicationDate: primitives.R4.dateTime,
      /** Extension of publicationDate element */
      _publicationDate: Element,
      /** Extension of publicationStatus element */
      _publicationStatus: Element,
      /** Publication Ownership */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element
    })
  ])
);

/**
 * Contract Term List
 */
export interface ContractTerm {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Term Number */
  identifier?: Identifier;
  /** Contract Term Issue Date Time */
  issued?: primitives.R4.dateTime;
  /** Extension of issued element */
  _issued?: Element;
  /** Contract Term Effective Time */
  applies?: Period;
  /** Term Concern */
  topicCodeableConcept?: CodeableConcept;
  /** Term Concern */
  topicReference?: Reference;
  /** Contract Term Type or Form */
  type?: CodeableConcept;
  /** Contract Term Type specific classification */
  subType?: CodeableConcept;
  /** Term Statement */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Nested Contract Term Group */
  group?: ContractTerm[];
}
/**
 * Contract Term List
 */
export const ContractTerm: t.Type<ContractTerm> = t.recursion<ContractTerm>(
  "ContractTerm",
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
        /** Contract Term Number */
        identifier: Identifier,
        /** Contract Term Issue Date Time */
        issued: primitives.R4.dateTime,
        /** Extension of issued element */
        _issued: Element,
        /** Contract Term Effective Time */
        applies: Period,
        /** Term Concern */
        topicCodeableConcept: CodeableConcept,
        /** Term Concern */
        topicReference: Reference,
        /** Contract Term Type or Form */
        type: CodeableConcept,
        /** Contract Term Type specific classification */
        subType: CodeableConcept,
        /** Term Statement */
        text: primitives.R4.string,
        /** Extension of text element */
        _text: Element,
        /** Nested Contract Term Group */
        group: t.array(ContractTerm)
      })
    ])
);

/**
 * Protection for the Term
 */
export interface ContractTermSecurityLabel {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Link to Security Labels */
  number?: primitives.R4.unsignedInt[];
  /** Extension of number element */
  _number?: Element[];
  /** Confidentiality Protection */
  classification: Coding;
  /** Applicable Policy */
  category?: Coding[];
  /** Handling Instructions */
  control?: Coding[];
}
/**
 * Protection for the Term
 */
export const ContractTermSecurityLabel: t.Type<
  ContractTermSecurityLabel
> = t.recursion<ContractTermSecurityLabel>("ContractTermSecurityLabel", () =>
  t.intersection([
    t.type({
      /** Confidentiality Protection */
      classification: Coding
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
      /** Link to Security Labels */
      number: t.array(primitives.R4.unsignedInt),
      /** Extension of number element */
      _number: t.array(Element),
      /** Applicable Policy */
      category: t.array(Coding),
      /** Handling Instructions */
      control: t.array(Coding)
    })
  ])
);

/**
 * Context of the Contract term
 */
export interface ContractTermOffer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Offer business ID */
  identifier?: Identifier[];
  /** Negotiable offer asset */
  topic?: Reference;
  /** Contract Offer Type or Form */
  type?: CodeableConcept;
  /** Accepting party choice */
  decision?: CodeableConcept;
  /** How decision is conveyed */
  decisionMode?: CodeableConcept[];
  /** Human readable offer text */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Pointer to text */
  linkId?: string[];
  /** Extension of linkId element */
  _linkId?: Element[];
  /** Offer restriction numbers */
  securityLabelNumber?: primitives.R4.unsignedInt[];
  /** Extension of securityLabelNumber element */
  _securityLabelNumber?: Element[];
}
/**
 * Context of the Contract term
 */
export const ContractTermOffer: t.Type<ContractTermOffer> = t.recursion<
  ContractTermOffer
>("ContractTermOffer", () =>
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
      /** Offer business ID */
      identifier: t.array(Identifier),
      /** Negotiable offer asset */
      topic: Reference,
      /** Contract Offer Type or Form */
      type: CodeableConcept,
      /** Accepting party choice */
      decision: CodeableConcept,
      /** How decision is conveyed */
      decisionMode: t.array(CodeableConcept),
      /** Human readable offer text */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element,
      /** Pointer to text */
      linkId: t.array(primitives.R4.string),
      /** Extension of linkId element */
      _linkId: t.array(Element),
      /** Offer restriction numbers */
      securityLabelNumber: t.array(primitives.R4.unsignedInt),
      /** Extension of securityLabelNumber element */
      _securityLabelNumber: t.array(Element)
    })
  ])
);

/**
 * Offer Recipient
 */
export interface ContractTermOfferParty {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Referenced entity */
  reference: Reference[];
  /** Participant engagement type */
  role: CodeableConcept;
}
/**
 * Offer Recipient
 */
export const ContractTermOfferParty: t.Type<
  ContractTermOfferParty
> = t.recursion<ContractTermOfferParty>("ContractTermOfferParty", () =>
  t.intersection([
    t.type({
      /** Referenced entity */
      reference: t.array(Reference),
      /** Participant engagement type */
      role: CodeableConcept
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
 * Response to offer text
 */
export interface ContractTermOfferAnswer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The actual answer response */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** The actual answer response */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** The actual answer response */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** The actual answer response */
  valueDate: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** The actual answer response */
  valueDateTime: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** The actual answer response */
  valueTime: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** The actual answer response */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** The actual answer response */
  valueUri: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** The actual answer response */
  valueAttachment: Attachment;
  /** The actual answer response */
  valueCoding: Coding;
  /** The actual answer response */
  valueQuantity: Quantity;
  /** The actual answer response */
  valueReference: Reference;
}
/**
 * Response to offer text
 */
export const ContractTermOfferAnswer: t.Type<
  ContractTermOfferAnswer
> = t.recursion<ContractTermOfferAnswer>("ContractTermOfferAnswer", () =>
  t.intersection([
    t.type({
      /** The actual answer response */
      valueBoolean: primitives.R4.boolean,
      /** The actual answer response */
      valueDecimal: primitives.R4.decimal,
      /** The actual answer response */
      valueInteger: primitives.R4.integer,
      /** The actual answer response */
      valueDate: primitives.R4.date,
      /** The actual answer response */
      valueDateTime: primitives.R4.dateTime,
      /** The actual answer response */
      valueTime: primitives.R4.time,
      /** The actual answer response */
      valueString: primitives.R4.string,
      /** The actual answer response */
      valueUri: primitives.R4.uri,
      /** The actual answer response */
      valueAttachment: Attachment,
      /** The actual answer response */
      valueCoding: Coding,
      /** The actual answer response */
      valueQuantity: Quantity,
      /** The actual answer response */
      valueReference: Reference
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
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Extension of valueDecimal element */
      _valueDecimal: Element,
      /** Extension of valueInteger element */
      _valueInteger: Element,
      /** Extension of valueDate element */
      _valueDate: Element,
      /** Extension of valueDateTime element */
      _valueDateTime: Element,
      /** Extension of valueTime element */
      _valueTime: Element,
      /** Extension of valueString element */
      _valueString: Element,
      /** Extension of valueUri element */
      _valueUri: Element
    })
  ])
);

/**
 * Contract Term Asset List
 */
export interface ContractTermAsset {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
  /** Quality desctiption of asset */
  condition?: string;
  /** Extension of condition element */
  _condition?: Element;
  /** Asset availability types */
  periodType?: CodeableConcept[];
  /** Time period of the asset */
  period?: Period[];
  /** Time period */
  usePeriod?: Period[];
  /** Asset clause or question text */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Pointer to asset text */
  linkId?: string[];
  /** Extension of linkId element */
  _linkId?: Element[];
  /** Response to assets */
  answer?: ContractTermOfferAnswer[];
  /** Asset restriction numbers */
  securityLabelNumber?: primitives.R4.unsignedInt[];
  /** Extension of securityLabelNumber element */
  _securityLabelNumber?: Element[];
}
/**
 * Contract Term Asset List
 */
export const ContractTermAsset: t.Type<ContractTermAsset> = t.recursion<
  ContractTermAsset
>("ContractTermAsset", () =>
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
      /** Range of asset */
      scope: CodeableConcept,
      /** Asset category */
      type: t.array(CodeableConcept),
      /** Associated entities */
      typeReference: t.array(Reference),
      /** Asset sub-category */
      subtype: t.array(CodeableConcept),
      /** Kinship of the asset */
      relationship: Coding,
      /** Quality desctiption of asset */
      condition: primitives.R4.string,
      /** Extension of condition element */
      _condition: Element,
      /** Asset availability types */
      periodType: t.array(CodeableConcept),
      /** Time period of the asset */
      period: t.array(Period),
      /** Time period */
      usePeriod: t.array(Period),
      /** Asset clause or question text */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element,
      /** Pointer to asset text */
      linkId: t.array(primitives.R4.string),
      /** Extension of linkId element */
      _linkId: t.array(Element),
      /** Response to assets */
      answer: t.array(ContractTermOfferAnswer),
      /** Asset restriction numbers */
      securityLabelNumber: t.array(primitives.R4.unsignedInt),
      /** Extension of securityLabelNumber element */
      _securityLabelNumber: t.array(Element)
    })
  ])
);

/**
 * Circumstance of the asset
 */
export interface ContractTermAssetContext {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Creator,custodian or owner */
  reference?: Reference;
  /** Codeable asset context */
  code?: CodeableConcept[];
  /** Context description */
  text?: string;
  /** Extension of text element */
  _text?: Element;
}
/**
 * Circumstance of the asset
 */
export const ContractTermAssetContext: t.Type<
  ContractTermAssetContext
> = t.recursion<ContractTermAssetContext>("ContractTermAssetContext", () =>
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
      /** Creator,custodian or owner */
      reference: Reference,
      /** Codeable asset context */
      code: t.array(CodeableConcept),
      /** Context description */
      text: primitives.R4.string,
      /** Extension of text element */
      _text: Element
    })
  ])
);

/**
 * Contract Valued Item List
 */
export interface ContractTermAssetValuedItem {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Valued Item Type */
  entityCodeableConcept?: CodeableConcept;
  /** Contract Valued Item Type */
  entityReference?: Reference;
  /** Contract Valued Item Number */
  identifier?: Identifier;
  /** Contract Valued Item Effective Tiem */
  effectiveTime?: primitives.R4.dateTime;
  /** Extension of effectiveTime element */
  _effectiveTime?: Element;
  /** Count of Contract Valued Items */
  quantity?: Quantity;
  /** Contract Valued Item fee, charge, or cost */
  unitPrice?: Money;
  /** Contract Valued Item Price Scaling Factor */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Contract Valued Item Difficulty Scaling Factor */
  points?: primitives.R4.decimal;
  /** Extension of points element */
  _points?: Element;
  /** Total Contract Valued Item Value */
  net?: Money;
  /** Terms of valuation */
  payment?: string;
  /** Extension of payment element */
  _payment?: Element;
  /** When payment is due */
  paymentDate?: primitives.R4.dateTime;
  /** Extension of paymentDate element */
  _paymentDate?: Element;
  /** Who will make payment */
  responsible?: Reference;
  /** Who will receive payment */
  recipient?: Reference;
  /** Pointer to specific item */
  linkId?: string[];
  /** Extension of linkId element */
  _linkId?: Element[];
  /** Security Labels that define affected terms */
  securityLabelNumber?: primitives.R4.unsignedInt[];
  /** Extension of securityLabelNumber element */
  _securityLabelNumber?: Element[];
}
/**
 * Contract Valued Item List
 */
export const ContractTermAssetValuedItem: t.Type<
  ContractTermAssetValuedItem
> = t.recursion<ContractTermAssetValuedItem>(
  "ContractTermAssetValuedItem",
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
        /** Contract Valued Item Type */
        entityCodeableConcept: CodeableConcept,
        /** Contract Valued Item Type */
        entityReference: Reference,
        /** Contract Valued Item Number */
        identifier: Identifier,
        /** Contract Valued Item Effective Tiem */
        effectiveTime: primitives.R4.dateTime,
        /** Extension of effectiveTime element */
        _effectiveTime: Element,
        /** Count of Contract Valued Items */
        quantity: Quantity,
        /** Contract Valued Item fee, charge, or cost */
        unitPrice: Money,
        /** Contract Valued Item Price Scaling Factor */
        factor: primitives.R4.decimal,
        /** Extension of factor element */
        _factor: Element,
        /** Contract Valued Item Difficulty Scaling Factor */
        points: primitives.R4.decimal,
        /** Extension of points element */
        _points: Element,
        /** Total Contract Valued Item Value */
        net: Money,
        /** Terms of valuation */
        payment: primitives.R4.string,
        /** Extension of payment element */
        _payment: Element,
        /** When payment is due */
        paymentDate: primitives.R4.dateTime,
        /** Extension of paymentDate element */
        _paymentDate: Element,
        /** Who will make payment */
        responsible: Reference,
        /** Who will receive payment */
        recipient: Reference,
        /** Pointer to specific item */
        linkId: t.array(primitives.R4.string),
        /** Extension of linkId element */
        _linkId: t.array(Element),
        /** Security Labels that define affected terms */
        securityLabelNumber: t.array(primitives.R4.unsignedInt),
        /** Extension of securityLabelNumber element */
        _securityLabelNumber: t.array(Element)
      })
    ])
);

/**
 * Entity being ascribed responsibility
 */
export interface ContractTermAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** True if the term prohibits the  action */
  doNotPerform?: boolean;
  /** Extension of doNotPerform element */
  _doNotPerform?: Element;
  /** Type or form of the action */
  type: CodeableConcept;
  /** Purpose for the Contract Term Action */
  intent: CodeableConcept;
  /** Pointer to specific item */
  linkId?: string[];
  /** Extension of linkId element */
  _linkId?: Element[];
  /** State of the action */
  status: CodeableConcept;
  /** Episode associated with action */
  context?: Reference;
  /** Pointer to specific item */
  contextLinkId?: string[];
  /** Extension of contextLinkId element */
  _contextLinkId?: Element[];
  /** When action happens */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When action happens */
  occurrencePeriod?: Period;
  /** When action happens */
  occurrenceTiming?: Timing;
  /** Who asked for action */
  requester?: Reference[];
  /** Pointer to specific item */
  requesterLinkId?: string[];
  /** Extension of requesterLinkId element */
  _requesterLinkId?: Element[];
  /** Kind of service performer */
  performerType?: CodeableConcept[];
  /** Competency of the performer */
  performerRole?: CodeableConcept;
  /** Actor that wil execute (or not) the action */
  performer?: Reference;
  /** Pointer to specific item */
  performerLinkId?: string[];
  /** Extension of performerLinkId element */
  _performerLinkId?: Element[];
  /** Why is action (not) needed? */
  reasonCode?: CodeableConcept[];
  /** Why is action (not) needed? */
  reasonReference?: Reference[];
  /** Why action is to be performed */
  reason?: string[];
  /** Extension of reason element */
  _reason?: Element[];
  /** Pointer to specific item */
  reasonLinkId?: string[];
  /** Extension of reasonLinkId element */
  _reasonLinkId?: Element[];
  /** Comments about the action */
  note?: Annotation[];
  /** Action restriction numbers */
  securityLabelNumber?: primitives.R4.unsignedInt[];
  /** Extension of securityLabelNumber element */
  _securityLabelNumber?: Element[];
}
/**
 * Entity being ascribed responsibility
 */
export const ContractTermAction: t.Type<ContractTermAction> = t.recursion<
  ContractTermAction
>("ContractTermAction", () =>
  t.intersection([
    t.type({
      /** Type or form of the action */
      type: CodeableConcept,
      /** Purpose for the Contract Term Action */
      intent: CodeableConcept,
      /** State of the action */
      status: CodeableConcept
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
      /** True if the term prohibits the  action */
      doNotPerform: primitives.R4.boolean,
      /** Extension of doNotPerform element */
      _doNotPerform: Element,
      /** Pointer to specific item */
      linkId: t.array(primitives.R4.string),
      /** Extension of linkId element */
      _linkId: t.array(Element),
      /** Episode associated with action */
      context: Reference,
      /** Pointer to specific item */
      contextLinkId: t.array(primitives.R4.string),
      /** Extension of contextLinkId element */
      _contextLinkId: t.array(Element),
      /** When action happens */
      occurrenceDateTime: primitives.R4.dateTime,
      /** Extension of occurrenceDateTime element */
      _occurrenceDateTime: Element,
      /** When action happens */
      occurrencePeriod: Period,
      /** When action happens */
      occurrenceTiming: Timing,
      /** Who asked for action */
      requester: t.array(Reference),
      /** Pointer to specific item */
      requesterLinkId: t.array(primitives.R4.string),
      /** Extension of requesterLinkId element */
      _requesterLinkId: t.array(Element),
      /** Kind of service performer */
      performerType: t.array(CodeableConcept),
      /** Competency of the performer */
      performerRole: CodeableConcept,
      /** Actor that wil execute (or not) the action */
      performer: Reference,
      /** Pointer to specific item */
      performerLinkId: t.array(primitives.R4.string),
      /** Extension of performerLinkId element */
      _performerLinkId: t.array(Element),
      /** Why is action (not) needed? */
      reasonCode: t.array(CodeableConcept),
      /** Why is action (not) needed? */
      reasonReference: t.array(Reference),
      /** Why action is to be performed */
      reason: t.array(primitives.R4.string),
      /** Extension of reason element */
      _reason: t.array(Element),
      /** Pointer to specific item */
      reasonLinkId: t.array(primitives.R4.string),
      /** Extension of reasonLinkId element */
      _reasonLinkId: t.array(Element),
      /** Comments about the action */
      note: t.array(Annotation),
      /** Action restriction numbers */
      securityLabelNumber: t.array(primitives.R4.unsignedInt),
      /** Extension of securityLabelNumber element */
      _securityLabelNumber: t.array(Element)
    })
  ])
);

/**
 * Entity of the action
 */
export interface ContractTermActionSubject {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Entity of the action */
  reference: Reference[];
  /** Role type of the agent */
  role?: CodeableConcept;
}
/**
 * Entity of the action
 */
export const ContractTermActionSubject: t.Type<
  ContractTermActionSubject
> = t.recursion<ContractTermActionSubject>("ContractTermActionSubject", () =>
  t.intersection([
    t.type({
      /** Entity of the action */
      reference: t.array(Reference)
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
      /** Role type of the agent */
      role: CodeableConcept
    })
  ])
);

/**
 * Contract Signatory
 */
export interface ContractSigner {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Contract Signatory
 */
export const ContractSigner: t.Type<ContractSigner> = t.recursion<
  ContractSigner
>("ContractSigner", () =>
  t.intersection([
    t.type({
      /** Contract Signatory Role */
      type: Coding,
      /** Contract Signatory Party */
      party: Reference,
      /** Contract Documentation Signature */
      signature: t.array(Signature)
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
 * Contract Friendly Language
 */
export interface ContractFriendly {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Easily comprehended representation of this Contract */
  contentAttachment: Attachment;
  /** Easily comprehended representation of this Contract */
  contentReference: Reference;
}
/**
 * Contract Friendly Language
 */
export const ContractFriendly: t.Type<ContractFriendly> = t.recursion<
  ContractFriendly
>("ContractFriendly", () =>
  t.intersection([
    t.type({
      /** Easily comprehended representation of this Contract */
      contentAttachment: Attachment,
      /** Easily comprehended representation of this Contract */
      contentReference: Reference
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
 * Contract Legal Language
 */
export interface ContractLegal {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Contract Legal Text */
  contentAttachment: Attachment;
  /** Contract Legal Text */
  contentReference: Reference;
}
/**
 * Contract Legal Language
 */
export const ContractLegal: t.Type<ContractLegal> = t.recursion<ContractLegal>(
  "ContractLegal",
  () =>
    t.intersection([
      t.type({
        /** Contract Legal Text */
        contentAttachment: Attachment,
        /** Contract Legal Text */
        contentReference: Reference
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
 * Computable Contract Language
 */
export interface ContractRule {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Computable Contract Rules */
  contentAttachment: Attachment;
  /** Computable Contract Rules */
  contentReference: Reference;
}
/**
 * Computable Contract Language
 */
export const ContractRule: t.Type<ContractRule> = t.recursion<ContractRule>(
  "ContractRule",
  () =>
    t.intersection([
      t.type({
        /** Computable Contract Rules */
        contentAttachment: Attachment,
        /** Computable Contract Rules */
        contentReference: Reference
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
