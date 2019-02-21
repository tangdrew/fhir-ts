/**
 * SubstanceSpecification Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Molecular structural representation
 */
export interface SubstanceSpecificationStructureRepresentation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of structure (e.g. Full, Partial, Representative) */
  type?: CodeableConcept;
  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX */
  representation?: t.TypeOf<primitives.R4.StringType>;
  /** An attached file with the structural representation */
  attachment?: Attachment;
}

export interface SubstanceSpecificationStructureRepresentationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of structure (e.g. Full, Partial, Representative) */
  type?: CodeableConceptOutputType;
  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX */
  representation?: t.OutputOf<primitives.R4.StringType>;
  /** An attached file with the structural representation */
  attachment?: AttachmentOutputType;
}

export const SubstanceSpecificationStructureRepresentation: t.RecursiveType<
  t.Type<
    SubstanceSpecificationStructureRepresentation,
    SubstanceSpecificationStructureRepresentationOutputType
  >,
  SubstanceSpecificationStructureRepresentation,
  SubstanceSpecificationStructureRepresentationOutputType
> = t.recursion<
  SubstanceSpecificationStructureRepresentation,
  SubstanceSpecificationStructureRepresentationOutputType
>("SubstanceSpecificationStructureRepresentation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** An attached file with the structural representation */
        attachment: Attachment,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX */
        representation: primitives.R4.string,
        /** The type of structure (e.g. Full, Partial, Representative) */
        type: CodeableConcept
      })
    ],
    "SubstanceSpecificationStructureRepresentation"
  )
);

/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids)
 */
export interface SubstanceSpecificationStructureIsotopeMolecularWeight {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The method by which the molecular weight was determined */
  method?: CodeableConcept;
  /** Type of molecular weight such as exact, average (also known as. number average), weight average */
  type?: CodeableConcept;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amount?: Quantity;
}

export interface SubstanceSpecificationStructureIsotopeMolecularWeightOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The method by which the molecular weight was determined */
  method?: CodeableConceptOutputType;
  /** Type of molecular weight such as exact, average (also known as. number average), weight average */
  type?: CodeableConceptOutputType;
  /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
  amount?: QuantityOutputType;
}

export const SubstanceSpecificationStructureIsotopeMolecularWeight: t.RecursiveType<
  t.Type<
    SubstanceSpecificationStructureIsotopeMolecularWeight,
    SubstanceSpecificationStructureIsotopeMolecularWeightOutputType
  >,
  SubstanceSpecificationStructureIsotopeMolecularWeight,
  SubstanceSpecificationStructureIsotopeMolecularWeightOutputType
> = t.recursion<
  SubstanceSpecificationStructureIsotopeMolecularWeight,
  SubstanceSpecificationStructureIsotopeMolecularWeightOutputType
>("SubstanceSpecificationStructureIsotopeMolecularWeight", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
        amount: Quantity,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The method by which the molecular weight was determined */
        method: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Type of molecular weight such as exact, average (also known as. number average), weight average */
        type: CodeableConcept
      })
    ],
    "SubstanceSpecificationStructureIsotopeMolecularWeight"
  )
);

/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 */
export interface SubstanceSpecificationStructureIsotope {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Substance identifier for each non-natural or radioisotope */
  identifier?: Identifier;
  /** Substance name for each non-natural or radioisotope */
  name?: CodeableConcept;
  /** The type of isotopic substitution present in a single substance */
  substitution?: CodeableConcept;
  /** Half life - for a non-natural nuclide */
  halfLife?: Quantity;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
}

export interface SubstanceSpecificationStructureIsotopeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Substance identifier for each non-natural or radioisotope */
  identifier?: IdentifierOutputType;
  /** Substance name for each non-natural or radioisotope */
  name?: CodeableConceptOutputType;
  /** The type of isotopic substitution present in a single substance */
  substitution?: CodeableConceptOutputType;
  /** Half life - for a non-natural nuclide */
  halfLife?: QuantityOutputType;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeightOutputType;
}

export const SubstanceSpecificationStructureIsotope: t.RecursiveType<
  t.Type<
    SubstanceSpecificationStructureIsotope,
    SubstanceSpecificationStructureIsotopeOutputType
  >,
  SubstanceSpecificationStructureIsotope,
  SubstanceSpecificationStructureIsotopeOutputType
> = t.recursion<
  SubstanceSpecificationStructureIsotope,
  SubstanceSpecificationStructureIsotopeOutputType
>("SubstanceSpecificationStructureIsotope", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Half life - for a non-natural nuclide */
        halfLife: Quantity,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Substance identifier for each non-natural or radioisotope */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
        molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight,
        /** Substance name for each non-natural or radioisotope */
        name: CodeableConcept,
        /** The type of isotopic substitution present in a single substance */
        substitution: CodeableConcept
      })
    ],
    "SubstanceSpecificationStructureIsotope"
  )
);

/**
 * Structural information
 */
export interface SubstanceSpecificationStructure {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Stereochemistry type */
  stereochemistry?: CodeableConcept;
  /** Optical activity type */
  opticalActivity?: CodeableConcept;
  /** Molecular formula */
  molecularFormula?: t.TypeOf<primitives.R4.StringType>;
  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot */
  molecularFormulaByMoiety?: t.TypeOf<primitives.R4.StringType>;
  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio */
  isotope?: SubstanceSpecificationStructureIsotope[];
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
  /** Supporting literature */
  source?: Reference[];
  /** Molecular structural representation */
  representation?: SubstanceSpecificationStructureRepresentation[];
}

export interface SubstanceSpecificationStructureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Stereochemistry type */
  stereochemistry?: CodeableConceptOutputType;
  /** Optical activity type */
  opticalActivity?: CodeableConceptOutputType;
  /** Molecular formula */
  molecularFormula?: t.OutputOf<primitives.R4.StringType>;
  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot */
  molecularFormulaByMoiety?: t.OutputOf<primitives.R4.StringType>;
  /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio */
  isotope?: SubstanceSpecificationStructureIsotopeOutputType[];
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeightOutputType;
  /** Supporting literature */
  source?: ReferenceOutputType[];
  /** Molecular structural representation */
  representation?: SubstanceSpecificationStructureRepresentationOutputType[];
}

export const SubstanceSpecificationStructure: t.RecursiveType<
  t.Type<
    SubstanceSpecificationStructure,
    SubstanceSpecificationStructureOutputType
  >,
  SubstanceSpecificationStructure,
  SubstanceSpecificationStructureOutputType
> = t.recursion<
  SubstanceSpecificationStructure,
  SubstanceSpecificationStructureOutputType
>("SubstanceSpecificationStructure", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio */
        isotope: t.array(SubstanceSpecificationStructureIsotope),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Molecular formula */
        molecularFormula: primitives.R4.string,
        /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot */
        molecularFormulaByMoiety: primitives.R4.string,
        /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
        molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight,
        /** Optical activity type */
        opticalActivity: CodeableConcept,
        /** Molecular structural representation */
        representation: t.array(SubstanceSpecificationStructureRepresentation),
        /** Supporting literature */
        source: t.array(Reference),
        /** Stereochemistry type */
        stereochemistry: CodeableConcept
      })
    ],
    "SubstanceSpecificationStructure"
  )
);

/**
 * A link between this substance and another, with details of the relationship
 */
export interface SubstanceSpecificationRelationship {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A pointer to another substance, as a resource or just a representational code */
  substance?: Reference | CodeableConcept;
  /** For example "salt to parent", "active moiety", "starting material" */
  relationship?: CodeableConcept;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships */
  isDefining?: t.TypeOf<primitives.R4.BooleanType>;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amount?: Quantity | Range | Ratio | t.TypeOf<primitives.R4.StringType>;
  /** For use when the numeric */
  amountRatioLowLimit?: Ratio;
  /** An operator for the amount, for example "average", "approximately", "less than" */
  amountType?: CodeableConcept;
  /** Supporting literature */
  source?: Reference[];
}

export interface SubstanceSpecificationRelationshipOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A pointer to another substance, as a resource or just a representational code */
  substance?: ReferenceOutputType | CodeableConceptOutputType;
  /** For example "salt to parent", "active moiety", "starting material" */
  relationship?: CodeableConceptOutputType;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships */
  isDefining?: t.OutputOf<primitives.R4.BooleanType>;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amount?:
    | QuantityOutputType
    | RangeOutputType
    | RatioOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** For use when the numeric */
  amountRatioLowLimit?: RatioOutputType;
  /** An operator for the amount, for example "average", "approximately", "less than" */
  amountType?: CodeableConceptOutputType;
  /** Supporting literature */
  source?: ReferenceOutputType[];
}

export const SubstanceSpecificationRelationship: t.RecursiveType<
  t.Type<
    SubstanceSpecificationRelationship,
    SubstanceSpecificationRelationshipOutputType
  >,
  SubstanceSpecificationRelationship,
  SubstanceSpecificationRelationshipOutputType
> = t.recursion<
  SubstanceSpecificationRelationship,
  SubstanceSpecificationRelationshipOutputType
>("SubstanceSpecificationRelationship", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
        amount: t.union([Quantity, Range, Ratio, primitives.R4.string]),
        /** For use when the numeric */
        amountRatioLowLimit: Ratio,
        /** An operator for the amount, for example "average", "approximately", "less than" */
        amountType: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships */
        isDefining: primitives.R4.boolean,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** For example "salt to parent", "active moiety", "starting material" */
        relationship: CodeableConcept,
        /** Supporting literature */
        source: t.array(Reference),
        /** A pointer to another substance, as a resource or just a representational code */
        substance: t.union([Reference, CodeableConcept])
      })
    ],
    "SubstanceSpecificationRelationship"
  )
);

/**
 * General specifications for this substance, including how it is related to other substances
 */
export interface SubstanceSpecificationProperty {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A category for this property, e.g. Physical, Chemical, Enzymatic */
  category?: CodeableConcept;
  /** Property type e.g. viscosity, pH, isoelectric point */
  code?: CodeableConcept;
  /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) */
  parameters?: t.TypeOf<primitives.R4.StringType>;
  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
  definingsubstance?: Reference | CodeableConcept;
  /** Quantitative value for this property */
  amount?: Quantity | t.TypeOf<primitives.R4.StringType>;
}

export interface SubstanceSpecificationPropertyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A category for this property, e.g. Physical, Chemical, Enzymatic */
  category?: CodeableConceptOutputType;
  /** Property type e.g. viscosity, pH, isoelectric point */
  code?: CodeableConceptOutputType;
  /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) */
  parameters?: t.OutputOf<primitives.R4.StringType>;
  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
  definingsubstance?: ReferenceOutputType | CodeableConceptOutputType;
  /** Quantitative value for this property */
  amount?: QuantityOutputType | t.OutputOf<primitives.R4.StringType>;
}

export const SubstanceSpecificationProperty: t.RecursiveType<
  t.Type<
    SubstanceSpecificationProperty,
    SubstanceSpecificationPropertyOutputType
  >,
  SubstanceSpecificationProperty,
  SubstanceSpecificationPropertyOutputType
> = t.recursion<
  SubstanceSpecificationProperty,
  SubstanceSpecificationPropertyOutputType
>("SubstanceSpecificationProperty", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Quantitative value for this property */
        amount: t.union([Quantity, primitives.R4.string]),
        /** A category for this property, e.g. Physical, Chemical, Enzymatic */
        category: CodeableConcept,
        /** Property type e.g. viscosity, pH, isoelectric point */
        code: CodeableConcept,
        /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
        definingsubstance: t.union([Reference, CodeableConcept]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) */
        parameters: primitives.R4.string
      })
    ],
    "SubstanceSpecificationProperty"
  )
);

/**
 * Details of the official nature of this name
 */
export interface SubstanceSpecificationNameOfficial {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Which authority uses this official name */
  authority?: CodeableConcept;
  /** The status of the official name */
  status?: CodeableConcept;
  /** Date of official name change */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface SubstanceSpecificationNameOfficialOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Which authority uses this official name */
  authority?: CodeableConceptOutputType;
  /** The status of the official name */
  status?: CodeableConceptOutputType;
  /** Date of official name change */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const SubstanceSpecificationNameOfficial: t.RecursiveType<
  t.Type<
    SubstanceSpecificationNameOfficial,
    SubstanceSpecificationNameOfficialOutputType
  >,
  SubstanceSpecificationNameOfficial,
  SubstanceSpecificationNameOfficialOutputType
> = t.recursion<
  SubstanceSpecificationNameOfficial,
  SubstanceSpecificationNameOfficialOutputType
>("SubstanceSpecificationNameOfficial", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Which authority uses this official name */
        authority: CodeableConcept,
        /** Date of official name change */
        date: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The status of the official name */
        status: CodeableConcept
      })
    ],
    "SubstanceSpecificationNameOfficial"
  )
);

/**
 * Names applicable to this substance
 */
export interface SubstanceSpecificationName {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The actual name */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Name type */
  type?: CodeableConcept;
  /** The status of the name */
  status?: CodeableConcept;
  /** If this is the preferred name for this substance */
  preferred?: t.TypeOf<primitives.R4.BooleanType>;
  /** Language of the name */
  language?: CodeableConcept[];
  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive */
  domain?: CodeableConcept[];
  /** The jurisdiction where this name applies */
  jurisdiction?: CodeableConcept[];
  /** A synonym of this name */
  synonym?: SubstanceSpecificationName[];
  /** A translation for this name */
  translation?: SubstanceSpecificationName[];
  /** Details of the official nature of this name */
  official?: SubstanceSpecificationNameOfficial[];
  /** Supporting literature */
  source?: Reference[];
}

export interface SubstanceSpecificationNameOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The actual name */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Name type */
  type?: CodeableConceptOutputType;
  /** The status of the name */
  status?: CodeableConceptOutputType;
  /** If this is the preferred name for this substance */
  preferred?: t.OutputOf<primitives.R4.BooleanType>;
  /** Language of the name */
  language?: CodeableConceptOutputType[];
  /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive */
  domain?: CodeableConceptOutputType[];
  /** The jurisdiction where this name applies */
  jurisdiction?: CodeableConceptOutputType[];
  /** A synonym of this name */
  synonym?: SubstanceSpecificationNameOutputType[];
  /** A translation for this name */
  translation?: SubstanceSpecificationNameOutputType[];
  /** Details of the official nature of this name */
  official?: SubstanceSpecificationNameOfficialOutputType[];
  /** Supporting literature */
  source?: ReferenceOutputType[];
}

export const SubstanceSpecificationName: t.RecursiveType<
  t.Type<SubstanceSpecificationName, SubstanceSpecificationNameOutputType>,
  SubstanceSpecificationName,
  SubstanceSpecificationNameOutputType
> = t.recursion<
  SubstanceSpecificationName,
  SubstanceSpecificationNameOutputType
>("SubstanceSpecificationName", () =>
  t.intersection(
    [
      t.type({
        /** The actual name */
        name: primitives.R4.string
      }),
      t.partial({
        /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive */
        domain: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The jurisdiction where this name applies */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the name */
        language: t.array(CodeableConcept),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Details of the official nature of this name */
        official: t.array(SubstanceSpecificationNameOfficial),
        /** If this is the preferred name for this substance */
        preferred: primitives.R4.boolean,
        /** Supporting literature */
        source: t.array(Reference),
        /** The status of the name */
        status: CodeableConcept,
        /** A synonym of this name */
        synonym: t.array(SubstanceSpecificationName),
        /** A translation for this name */
        translation: t.array(SubstanceSpecificationName),
        /** Name type */
        type: CodeableConcept
      })
    ],
    "SubstanceSpecificationName"
  )
);

/**
 * Moiety, for structural modifications
 */
export interface SubstanceSpecificationMoiety {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Role that the moiety is playing */
  role?: CodeableConcept;
  /** Identifier by which this moiety substance is known */
  identifier?: Identifier;
  /** Textual name for this moiety substance */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Stereochemistry type */
  stereochemistry?: CodeableConcept;
  /** Optical activity type */
  opticalActivity?: CodeableConcept;
  /** Molecular formula */
  molecularFormula?: t.TypeOf<primitives.R4.StringType>;
  /** Quantitative value for this moiety */
  amount?: Quantity | t.TypeOf<primitives.R4.StringType>;
}

export interface SubstanceSpecificationMoietyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Role that the moiety is playing */
  role?: CodeableConceptOutputType;
  /** Identifier by which this moiety substance is known */
  identifier?: IdentifierOutputType;
  /** Textual name for this moiety substance */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Stereochemistry type */
  stereochemistry?: CodeableConceptOutputType;
  /** Optical activity type */
  opticalActivity?: CodeableConceptOutputType;
  /** Molecular formula */
  molecularFormula?: t.OutputOf<primitives.R4.StringType>;
  /** Quantitative value for this moiety */
  amount?: QuantityOutputType | t.OutputOf<primitives.R4.StringType>;
}

export const SubstanceSpecificationMoiety: t.RecursiveType<
  t.Type<SubstanceSpecificationMoiety, SubstanceSpecificationMoietyOutputType>,
  SubstanceSpecificationMoiety,
  SubstanceSpecificationMoietyOutputType
> = t.recursion<
  SubstanceSpecificationMoiety,
  SubstanceSpecificationMoietyOutputType
>("SubstanceSpecificationMoiety", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Quantitative value for this moiety */
        amount: t.union([Quantity, primitives.R4.string]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Identifier by which this moiety substance is known */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Molecular formula */
        molecularFormula: primitives.R4.string,
        /** Textual name for this moiety substance */
        name: primitives.R4.string,
        /** Optical activity type */
        opticalActivity: CodeableConcept,
        /** Role that the moiety is playing */
        role: CodeableConcept,
        /** Stereochemistry type */
        stereochemistry: CodeableConcept
      })
    ],
    "SubstanceSpecificationMoiety"
  )
);

/**
 * Codes associated with the substance
 */
export interface SubstanceSpecificationCode {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The specific code */
  code?: CodeableConcept;
  /** Status of the code assignment */
  status?: CodeableConcept;
  /** The date at which the code status is changed as part of the terminology maintenance */
  statusDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Any comment can be provided in this field, if necessary */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Supporting literature */
  source?: Reference[];
}

export interface SubstanceSpecificationCodeOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The specific code */
  code?: CodeableConceptOutputType;
  /** Status of the code assignment */
  status?: CodeableConceptOutputType;
  /** The date at which the code status is changed as part of the terminology maintenance */
  statusDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Any comment can be provided in this field, if necessary */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Supporting literature */
  source?: ReferenceOutputType[];
}

export const SubstanceSpecificationCode: t.RecursiveType<
  t.Type<SubstanceSpecificationCode, SubstanceSpecificationCodeOutputType>,
  SubstanceSpecificationCode,
  SubstanceSpecificationCodeOutputType
> = t.recursion<
  SubstanceSpecificationCode,
  SubstanceSpecificationCodeOutputType
>("SubstanceSpecificationCode", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** The specific code */
        code: CodeableConcept,
        /** Any comment can be provided in this field, if necessary */
        comment: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Supporting literature */
        source: t.array(Reference),
        /** Status of the code assignment */
        status: CodeableConcept,
        /** The date at which the code status is changed as part of the terminology maintenance */
        statusDate: primitives.R4.dateTime
      })
    ],
    "SubstanceSpecificationCode"
  )
);

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing
 */
export interface SubstanceSpecification {
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
  /** Identifier by which this substance is known */
  identifier?: Identifier;
  /** High level categorization, e.g. polymer or nucleic acid */
  type?: CodeableConcept;
  /** Status of substance within the catalogue e.g. approved */
  status?: CodeableConcept;
  /** If the substance applies to only human or veterinary use */
  domain?: CodeableConcept;
  /** Textual description of the substance */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Supporting literature */
  source?: Reference[];
  /** Textual comment about this record of a substance */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Moiety, for structural modifications */
  moiety?: SubstanceSpecificationMoiety[];
  /** General specifications for this substance, including how it is related to other substances */
  property?: SubstanceSpecificationProperty[];
  /** General information detailing this substance */
  referenceInformation?: Reference;
  /** Structural information */
  structure?: SubstanceSpecificationStructure;
  /** Codes associated with the substance */
  code?: SubstanceSpecificationCode[];
  /** Names applicable to this substance */
  name?: SubstanceSpecificationName[];
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];
  /** A link between this substance and another, with details of the relationship */
  relationship?: SubstanceSpecificationRelationship[];
  /** Data items specific to nucleic acids */
  nucleicAcid?: Reference;
  /** Data items specific to polymers */
  polymer?: Reference;
  /** Data items specific to proteins */
  protein?: Reference;
  /** Material or taxonomic/anatomical source for the substance */
  sourceMaterial?: Reference;
}

export interface SubstanceSpecificationOutputType {
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
  /** Identifier by which this substance is known */
  identifier?: IdentifierOutputType;
  /** High level categorization, e.g. polymer or nucleic acid */
  type?: CodeableConceptOutputType;
  /** Status of substance within the catalogue e.g. approved */
  status?: CodeableConceptOutputType;
  /** If the substance applies to only human or veterinary use */
  domain?: CodeableConceptOutputType;
  /** Textual description of the substance */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Supporting literature */
  source?: ReferenceOutputType[];
  /** Textual comment about this record of a substance */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Moiety, for structural modifications */
  moiety?: SubstanceSpecificationMoietyOutputType[];
  /** General specifications for this substance, including how it is related to other substances */
  property?: SubstanceSpecificationPropertyOutputType[];
  /** General information detailing this substance */
  referenceInformation?: ReferenceOutputType;
  /** Structural information */
  structure?: SubstanceSpecificationStructureOutputType;
  /** Codes associated with the substance */
  code?: SubstanceSpecificationCodeOutputType[];
  /** Names applicable to this substance */
  name?: SubstanceSpecificationNameOutputType[];
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeightOutputType[];
  /** A link between this substance and another, with details of the relationship */
  relationship?: SubstanceSpecificationRelationshipOutputType[];
  /** Data items specific to nucleic acids */
  nucleicAcid?: ReferenceOutputType;
  /** Data items specific to polymers */
  polymer?: ReferenceOutputType;
  /** Data items specific to proteins */
  protein?: ReferenceOutputType;
  /** Material or taxonomic/anatomical source for the substance */
  sourceMaterial?: ReferenceOutputType;
}

export const SubstanceSpecification: t.RecursiveType<
  t.Type<SubstanceSpecification, SubstanceSpecificationOutputType>,
  SubstanceSpecification,
  SubstanceSpecificationOutputType
> = t.recursion<SubstanceSpecification, SubstanceSpecificationOutputType>(
  "SubstanceSpecification",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Codes associated with the substance */
          code: t.array(SubstanceSpecificationCode),
          /** Textual comment about this record of a substance */
          comment: primitives.R4.string,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Textual description of the substance */
          description: primitives.R4.string,
          /** If the substance applies to only human or veterinary use */
          domain: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Identifier by which this substance is known */
          identifier: Identifier,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Moiety, for structural modifications */
          moiety: t.array(SubstanceSpecificationMoiety),
          /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
          molecularWeight: t.array(
            SubstanceSpecificationStructureIsotopeMolecularWeight
          ),
          /** Names applicable to this substance */
          name: t.array(SubstanceSpecificationName),
          /** Data items specific to nucleic acids */
          nucleicAcid: Reference,
          /** Data items specific to polymers */
          polymer: Reference,
          /** General specifications for this substance, including how it is related to other substances */
          property: t.array(SubstanceSpecificationProperty),
          /** Data items specific to proteins */
          protein: Reference,
          /** General information detailing this substance */
          referenceInformation: Reference,
          /** A link between this substance and another, with details of the relationship */
          relationship: t.array(SubstanceSpecificationRelationship),
          /** Supporting literature */
          source: t.array(Reference),
          /** Material or taxonomic/anatomical source for the substance */
          sourceMaterial: Reference,
          /** Status of substance within the catalogue e.g. approved */
          status: CodeableConcept,
          /** Structural information */
          structure: SubstanceSpecificationStructure,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** High level categorization, e.g. polymer or nucleic acid */
          type: CodeableConcept
        })
      ],
      "SubstanceSpecification"
    )
);
