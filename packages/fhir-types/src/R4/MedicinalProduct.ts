/**
 * MedicinalProduct Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { MarketingStatus, MarketingStatusOutputType } from "./MarketingStatus";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Indicates if the medicinal product has an orphan designation for the treatment of a rare disease
 */
export interface MedicinalProductSpecialDesignation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  indication?: CodeableConcept | Reference;
  /** For example granted, pending, expired or withdrawn */
  status?: CodeableConcept;
  /** Date when the designation was granted */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Animal species for which this applies */
  species?: CodeableConcept;
}

export interface MedicinalProductSpecialDesignationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifier for the designation, or procedure number */
  identifier?: IdentifierOutputType[];
  /** The type of special designation, e.g. orphan drug, minor use */
  type?: CodeableConceptOutputType;
  /** The intended use of the product, e.g. prevention, treatment */
  intendedUse?: CodeableConceptOutputType;
  /** Condition for which the medicinal use applies */
  indication?: CodeableConceptOutputType | ReferenceOutputType;
  /** For example granted, pending, expired or withdrawn */
  status?: CodeableConceptOutputType;
  /** Date when the designation was granted */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Animal species for which this applies */
  species?: CodeableConceptOutputType;
}

export const MedicinalProductSpecialDesignation: t.RecursiveType<
  t.Type<
    MedicinalProductSpecialDesignation,
    MedicinalProductSpecialDesignationOutputType
  >,
  MedicinalProductSpecialDesignation,
  MedicinalProductSpecialDesignationOutputType
> = t.recursion<
  MedicinalProductSpecialDesignation,
  MedicinalProductSpecialDesignationOutputType
>("MedicinalProductSpecialDesignation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Date when the designation was granted */
        date: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Identifier for the designation, or procedure number */
        identifier: t.array(Identifier),
        /** Condition for which the medicinal use applies */
        indication: t.union([CodeableConcept, Reference]),
        /** The intended use of the product, e.g. prevention, treatment */
        intendedUse: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Animal species for which this applies */
        species: CodeableConcept,
        /** For example granted, pending, expired or withdrawn */
        status: CodeableConcept,
        /** The type of special designation, e.g. orphan drug, minor use */
        type: CodeableConcept
      })
    ],
    "MedicinalProductSpecialDesignation"
  )
);

/**
 * Coding words or phrases of the name
 */
export interface MedicinalProductNameNamePart {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A fragment of a product name */
  part: t.TypeOf<primitives.R4.StringType>;
  /** Idenifying type for this part of the name (e.g. strength part) */
  type: Coding;
}

export interface MedicinalProductNameNamePartOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A fragment of a product name */
  part: t.OutputOf<primitives.R4.StringType>;
  /** Idenifying type for this part of the name (e.g. strength part) */
  type: CodingOutputType;
}

export const MedicinalProductNameNamePart: t.RecursiveType<
  t.Type<MedicinalProductNameNamePart, MedicinalProductNameNamePartOutputType>,
  MedicinalProductNameNamePart,
  MedicinalProductNameNamePartOutputType
> = t.recursion<
  MedicinalProductNameNamePart,
  MedicinalProductNameNamePartOutputType
>("MedicinalProductNameNamePart", () =>
  t.intersection(
    [
      t.type({
        /** A fragment of a product name */
        part: primitives.R4.string,
        /** Idenifying type for this part of the name (e.g. strength part) */
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
    "MedicinalProductNameNamePart"
  )
);

/**
 * Country where the name applies
 */
export interface MedicinalProductNameCountryLanguage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface MedicinalProductNameCountryLanguageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Country code for where this name applies */
  country: CodeableConceptOutputType;
  /** Jurisdiction code for where this name applies */
  jurisdiction?: CodeableConceptOutputType;
  /** Language code for this name */
  language: CodeableConceptOutputType;
}

export const MedicinalProductNameCountryLanguage: t.RecursiveType<
  t.Type<
    MedicinalProductNameCountryLanguage,
    MedicinalProductNameCountryLanguageOutputType
  >,
  MedicinalProductNameCountryLanguage,
  MedicinalProductNameCountryLanguageOutputType
> = t.recursion<
  MedicinalProductNameCountryLanguage,
  MedicinalProductNameCountryLanguageOutputType
>("MedicinalProductNameCountryLanguage", () =>
  t.intersection(
    [
      t.type({
        /** Country code for where this name applies */
        country: CodeableConcept,
        /** Language code for this name */
        language: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Jurisdiction code for where this name applies */
        jurisdiction: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicinalProductNameCountryLanguage"
  )
);

/**
 * The product's name, including full name and possibly coded parts
 */
export interface MedicinalProductName {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The full product name */
  productName: t.TypeOf<primitives.R4.StringType>;
  /** Coding words or phrases of the name */
  namePart?: MedicinalProductNameNamePart[];
  /** Country where the name applies */
  countryLanguage?: MedicinalProductNameCountryLanguage[];
}

export interface MedicinalProductNameOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The full product name */
  productName: t.OutputOf<primitives.R4.StringType>;
  /** Coding words or phrases of the name */
  namePart?: MedicinalProductNameNamePartOutputType[];
  /** Country where the name applies */
  countryLanguage?: MedicinalProductNameCountryLanguageOutputType[];
}

export const MedicinalProductName: t.RecursiveType<
  t.Type<MedicinalProductName, MedicinalProductNameOutputType>,
  MedicinalProductName,
  MedicinalProductNameOutputType
> = t.recursion<MedicinalProductName, MedicinalProductNameOutputType>(
  "MedicinalProductName",
  () =>
    t.intersection(
      [
        t.type({
          /** The full product name */
          productName: primitives.R4.string
        }),
        t.partial({
          /** Country where the name applies */
          countryLanguage: t.array(MedicinalProductNameCountryLanguage),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Coding words or phrases of the name */
          namePart: t.array(MedicinalProductNameNamePart)
        })
      ],
      "MedicinalProductName"
    )
);

/**
 * An operation applied to the product, for manufacturing or adminsitrative purpose
 */
export interface MedicinalProductManufacturingBusinessOperation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of manufacturing operation */
  operationType?: CodeableConcept;
  /** Regulatory authorization reference number */
  authorisationReferenceNumber?: Identifier;
  /** Regulatory authorization date */
  effectiveDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** To indicate if this proces is commercially confidential */
  confidentialityIndicator?: CodeableConcept;
  /** The manufacturer or establishment associated with the process */
  manufacturer?: Reference[];
  /** A regulator which oversees the operation */
  regulator?: Reference;
}

export interface MedicinalProductManufacturingBusinessOperationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of manufacturing operation */
  operationType?: CodeableConceptOutputType;
  /** Regulatory authorization reference number */
  authorisationReferenceNumber?: IdentifierOutputType;
  /** Regulatory authorization date */
  effectiveDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** To indicate if this proces is commercially confidential */
  confidentialityIndicator?: CodeableConceptOutputType;
  /** The manufacturer or establishment associated with the process */
  manufacturer?: ReferenceOutputType[];
  /** A regulator which oversees the operation */
  regulator?: ReferenceOutputType;
}

export const MedicinalProductManufacturingBusinessOperation: t.RecursiveType<
  t.Type<
    MedicinalProductManufacturingBusinessOperation,
    MedicinalProductManufacturingBusinessOperationOutputType
  >,
  MedicinalProductManufacturingBusinessOperation,
  MedicinalProductManufacturingBusinessOperationOutputType
> = t.recursion<
  MedicinalProductManufacturingBusinessOperation,
  MedicinalProductManufacturingBusinessOperationOutputType
>("MedicinalProductManufacturingBusinessOperation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Regulatory authorization reference number */
        authorisationReferenceNumber: Identifier,
        /** To indicate if this proces is commercially confidential */
        confidentialityIndicator: CodeableConcept,
        /** Regulatory authorization date */
        effectiveDate: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The manufacturer or establishment associated with the process */
        manufacturer: t.array(Reference),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The type of manufacturing operation */
        operationType: CodeableConcept,
        /** A regulator which oversees the operation */
        regulator: Reference
      })
    ],
    "MedicinalProductManufacturingBusinessOperation"
  )
);

/**
 * Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use)
 */
export interface MedicinalProduct {
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
  specialMeasures?: t.TypeOf<primitives.R4.StringType>[];
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
  /** The product's name, including full name and possibly coded parts */
  name: MedicinalProductName[];
  /** Reference to another product, e.g. for linking authorised to investigational product */
  crossReference?: Identifier[];
  /** An operation applied to the product, for manufacturing or adminsitrative purpose */
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];
  /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease */
  specialDesignation?: MedicinalProductSpecialDesignation[];
}

export interface MedicinalProductOutputType {
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
  /** Business identifier for this product. Could be an MPID */
  identifier?: IdentifierOutputType[];
  /** Regulatory type, e.g. Investigational or Authorized */
  type?: CodeableConceptOutputType;
  /** If this medicine applies to human or veterinary uses */
  domain?: CodingOutputType;
  /** The dose form for a single part product, or combined form of a multiple part product */
  combinedPharmaceuticalDoseForm?: CodeableConceptOutputType;
  /** The legal status of supply of the medicinal product as classified by the regulator */
  legalStatusOfSupply?: CodeableConceptOutputType;
  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons */
  additionalMonitoringIndicator?: CodeableConceptOutputType;
  /** Whether the Medicinal Product is subject to special measures for regulatory reasons */
  specialMeasures?: t.OutputOf<primitives.R4.StringType>[];
  /** If authorised for use in children */
  paediatricUseIndicator?: CodeableConceptOutputType;
  /** Allows the product to be classified by various systems */
  productClassification?: CodeableConceptOutputType[];
  /** Marketing status of the medicinal product, in contrast to marketing authorizaton */
  marketingStatus?: MarketingStatusOutputType[];
  /** Pharmaceutical aspects of product */
  pharmaceuticalProduct?: ReferenceOutputType[];
  /** Package representation for the product */
  packagedMedicinalProduct?: ReferenceOutputType[];
  /** Supporting documentation, typically for regulatory submission */
  attachedDocument?: ReferenceOutputType[];
  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) */
  masterFile?: ReferenceOutputType[];
  /** A product specific contact, person (in a role), or an organization */
  contact?: ReferenceOutputType[];
  /** Clinical trials or studies that this product is involved in */
  clinicalTrial?: ReferenceOutputType[];
  /** The product's name, including full name and possibly coded parts */
  name: MedicinalProductNameOutputType[];
  /** Reference to another product, e.g. for linking authorised to investigational product */
  crossReference?: IdentifierOutputType[];
  /** An operation applied to the product, for manufacturing or adminsitrative purpose */
  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperationOutputType[];
  /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease */
  specialDesignation?: MedicinalProductSpecialDesignationOutputType[];
}

export const MedicinalProduct: t.RecursiveType<
  t.Type<MedicinalProduct, MedicinalProductOutputType>,
  MedicinalProduct,
  MedicinalProductOutputType
> = t.recursion<MedicinalProduct, MedicinalProductOutputType>(
  "MedicinalProduct",
  () =>
    t.intersection(
      [
        t.type({
          /** The product's name, including full name and possibly coded parts */
          name: t.array(MedicinalProductName)
        }),
        t.partial({
          /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons */
          additionalMonitoringIndicator: CodeableConcept,
          /** Supporting documentation, typically for regulatory submission */
          attachedDocument: t.array(Reference),
          /** Clinical trials or studies that this product is involved in */
          clinicalTrial: t.array(Reference),
          /** The dose form for a single part product, or combined form of a multiple part product */
          combinedPharmaceuticalDoseForm: CodeableConcept,
          /** A product specific contact, person (in a role), or an organization */
          contact: t.array(Reference),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Reference to another product, e.g. for linking authorised to investigational product */
          crossReference: t.array(Identifier),
          /** If this medicine applies to human or veterinary uses */
          domain: Coding,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifier for this product. Could be an MPID */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** The legal status of supply of the medicinal product as classified by the regulator */
          legalStatusOfSupply: CodeableConcept,
          /** An operation applied to the product, for manufacturing or adminsitrative purpose */
          manufacturingBusinessOperation: t.array(
            MedicinalProductManufacturingBusinessOperation
          ),
          /** Marketing status of the medicinal product, in contrast to marketing authorizaton */
          marketingStatus: t.array(MarketingStatus),
          /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File) */
          masterFile: t.array(Reference),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Package representation for the product */
          packagedMedicinalProduct: t.array(Reference),
          /** If authorised for use in children */
          paediatricUseIndicator: CodeableConcept,
          /** Pharmaceutical aspects of product */
          pharmaceuticalProduct: t.array(Reference),
          /** Allows the product to be classified by various systems */
          productClassification: t.array(CodeableConcept),
          /** Indicates if the medicinal product has an orphan designation for the treatment of a rare disease */
          specialDesignation: t.array(MedicinalProductSpecialDesignation),
          /** Whether the Medicinal Product is subject to special measures for regulatory reasons */
          specialMeasures: t.array(primitives.R4.string),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Regulatory type, e.g. Investigational or Authorized */
          type: CodeableConcept
        })
      ],
      "MedicinalProduct"
    )
);
