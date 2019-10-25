/**
 * MedicinalProduct Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { MarketingStatus } from "./MarketingStatus";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use)
 */
export interface MedicinalProduct {
  /** The type of resource */
  resourceType?: "MedicinalProduct";
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
  /** Business identifier for this product. Could be an MPID */
  identifier?: Identifier[];
  /** Regulatory type, e.g. Investigational or Authorized */
  type?: CodeableConcept;
  /** If this medicine applies to human or veterinary uses */
  domain?: Coding;
  /** The dose form for a single part product, or combined form of a multiple part product */
  combinedPharmaceuticalDoseForm?: CodeableConcept;
  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: CodeableConcept;
  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons */
  additionalMonitoringIndicator?: CodeableConcept;
  /** Whether the Medicinal Product is subject to special measures for regulatory reasons */
  specialMeasures?: string[];
  /** Extension of specialMeasures element */
  _specialMeasures?: Element[];
  /** If authorised for use in children */
  paediatricUseIndicator?: CodeableConcept;
  /** Allows the product to be classified by various systems */
  productClassification?: CodeableConcept[];
  /** Marketing status of the medicinal product, in contrast to marketing authorizaton */
  marketingStatus?: MarketingStatus[];
  /** Pharmaceutical aspects of product */
  pharmaceuticalProduct?: Reference[];
  /** Package representation for the product */
  packagedMedicinalProduct?: Reference[];
  /** Supporting documentation, typically for regulatory submission */
  attachedDocument?: Reference[];
  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) */
  masterFile?: Reference[];
  /** A product specific contact, person (in a role), or an organization */
  contact?: Reference[];
  /** Clinical trials or studies that this product is involved in */
  clinicalTrial?: Reference[];
  /** Reference to another product, e.g. for linking authorised to investigational product */
  crossReference?: Identifier[];
}
/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use)
 */
export const MedicinalProduct: t.Type<MedicinalProduct> = t.recursion<
  MedicinalProduct
>("MedicinalProduct", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("MedicinalProduct"),
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
      /** Business identifier for this product. Could be an MPID */
      identifier: t.array(Identifier),
      /** Regulatory type, e.g. Investigational or Authorized */
      type: CodeableConcept,
      /** If this medicine applies to human or veterinary uses */
      domain: Coding,
      /** The dose form for a single part product, or combined form of a multiple part product */
      combinedPharmaceuticalDoseForm: CodeableConcept,
      /** The legal status of supply of the medicinal product as classified by the regulator */
      legalStatusOfSupply: CodeableConcept,
      /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons */
      additionalMonitoringIndicator: CodeableConcept,
      /** Whether the Medicinal Product is subject to special measures for regulatory reasons */
      specialMeasures: t.array(primitives.R4.string),
      /** Extension of specialMeasures element */
      _specialMeasures: t.array(Element),
      /** If authorised for use in children */
      paediatricUseIndicator: CodeableConcept,
      /** Allows the product to be classified by various systems */
      productClassification: t.array(CodeableConcept),
      /** Marketing status of the medicinal product, in contrast to marketing authorizaton */
      marketingStatus: t.array(MarketingStatus),
      /** Pharmaceutical aspects of product */
      pharmaceuticalProduct: t.array(Reference),
      /** Package representation for the product */
      packagedMedicinalProduct: t.array(Reference),
      /** Supporting documentation, typically for regulatory submission */
      attachedDocument: t.array(Reference),
      /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) */
      masterFile: t.array(Reference),
      /** A product specific contact, person (in a role), or an organization */
      contact: t.array(Reference),
      /** Clinical trials or studies that this product is involved in */
      clinicalTrial: t.array(Reference),
      /** Reference to another product, e.g. for linking authorised to investigational product */
      crossReference: t.array(Identifier)
    })
  ])
);

/**
 * The product's name, including full name and possibly coded parts
 */
export interface MedicinalProductName {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The full product name */
  productName: string;
  /** Extension of productName element */
  _productName?: Element;
}
/**
 * The product's name, including full name and possibly coded parts
 */
export const MedicinalProductName: t.Type<MedicinalProductName> = t.recursion<
  MedicinalProductName
>("MedicinalProductName", () =>
  t.intersection([
    t.type({
      /** The full product name */
      productName: primitives.R4.string
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
      /** Extension of productName element */
      _productName: Element
    })
  ])
);

/**
 * Coding words or phrases of the name
 */
export interface MedicinalProductNameNamePart {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A fragment of a product name */
  part: string;
  /** Extension of part element */
  _part?: Element;
  /** Idenifying type for this part of the name (e.g. strength part) */
  type: Coding;
}
/**
 * Coding words or phrases of the name
 */
export const MedicinalProductNameNamePart: t.Type<
  MedicinalProductNameNamePart
> = t.recursion<MedicinalProductNameNamePart>(
  "MedicinalProductNameNamePart",
  () =>
    t.intersection([
      t.type({
        /** A fragment of a product name */
        part: primitives.R4.string,
        /** Idenifying type for this part of the name (e.g. strength part) */
        type: Coding
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
        /** Extension of part element */
        _part: Element
      })
    ])
);

/**
 * Country where the name applies
 */
export interface MedicinalProductNameCountryLanguage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Country code for where this name applies */
  country: CodeableConcept;
  /** Jurisdiction code for where this name applies */
  jurisdiction?: CodeableConcept;
  /** Language code for this name */
  language: CodeableConcept;
}
/**
 * Country where the name applies
 */
export const MedicinalProductNameCountryLanguage: t.Type<
  MedicinalProductNameCountryLanguage
> = t.recursion<MedicinalProductNameCountryLanguage>(
  "MedicinalProductNameCountryLanguage",
  () =>
    t.intersection([
      t.type({
        /** Country code for where this name applies */
        country: CodeableConcept,
        /** Language code for this name */
        language: CodeableConcept
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
        /** Jurisdiction code for where this name applies */
        jurisdiction: CodeableConcept
      })
    ])
);

/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose
 */
export interface MedicinalProductManufacturingBusinessOperation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of manufacturing operation */
  operationType?: CodeableConcept;
  /** Regulatory authorization reference number */
  authorisationReferenceNumber?: Identifier;
  /** Regulatory authorization date */
  effectiveDate?: primitives.R4.dateTime;
  /** Extension of effectiveDate element */
  _effectiveDate?: Element;
  /** To indicate if this proces is commercially confidential */
  confidentialityIndicator?: CodeableConcept;
  /** The manufacturer or establishment associated with the process */
  manufacturer?: Reference[];
  /** A regulator which oversees the operation */
  regulator?: Reference;
}
/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose
 */
export const MedicinalProductManufacturingBusinessOperation: t.Type<
  MedicinalProductManufacturingBusinessOperation
> = t.recursion<MedicinalProductManufacturingBusinessOperation>(
  "MedicinalProductManufacturingBusinessOperation",
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
        /** The type of manufacturing operation */
        operationType: CodeableConcept,
        /** Regulatory authorization reference number */
        authorisationReferenceNumber: Identifier,
        /** Regulatory authorization date */
        effectiveDate: primitives.R4.dateTime,
        /** Extension of effectiveDate element */
        _effectiveDate: Element,
        /** To indicate if this proces is commercially confidential */
        confidentialityIndicator: CodeableConcept,
        /** The manufacturer or establishment associated with the process */
        manufacturer: t.array(Reference),
        /** A regulator which oversees the operation */
        regulator: Reference
      })
    ])
);

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 */
export interface MedicinalProductSpecialDesignation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier for the designation, or procedure number */
  identifier?: Identifier[];
  /** The type of special designation, e.g. orphan drug, minor use */
  type?: CodeableConcept;
  /** The intended use of the product, e.g. prevention, treatment */
  intendedUse?: CodeableConcept;
  /** Condition for which the medicinal use applies */
  indicationCodeableConcept?: CodeableConcept;
  /** Condition for which the medicinal use applies */
  indicationReference?: Reference;
  /** For example granted, pending, expired or withdrawn */
  status?: CodeableConcept;
  /** Date when the designation was granted */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Animal species for which this applies */
  species?: CodeableConcept;
}
/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 */
export const MedicinalProductSpecialDesignation: t.Type<
  MedicinalProductSpecialDesignation
> = t.recursion<MedicinalProductSpecialDesignation>(
  "MedicinalProductSpecialDesignation",
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
        /** Identifier for the designation, or procedure number */
        identifier: t.array(Identifier),
        /** The type of special designation, e.g. orphan drug, minor use */
        type: CodeableConcept,
        /** The intended use of the product, e.g. prevention, treatment */
        intendedUse: CodeableConcept,
        /** Condition for which the medicinal use applies */
        indicationCodeableConcept: CodeableConcept,
        /** Condition for which the medicinal use applies */
        indicationReference: Reference,
        /** For example granted, pending, expired or withdrawn */
        status: CodeableConcept,
        /** Date when the designation was granted */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element,
        /** Animal species for which this applies */
        species: CodeableConcept
      })
    ])
);
