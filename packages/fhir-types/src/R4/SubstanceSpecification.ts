/**
 * SubstanceSpecification Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing
 */
export interface SubstanceSpecification {
  /** The type of resource */
  resourceType?: "SubstanceSpecification";
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
  /** Identifier by which this substance is known */
  identifier?: Identifier;
  /** High level categorization, e.g. polymer or nucleic acid */
  type?: CodeableConcept;
  /** Status of substance within the catalogue e.g. approved */
  status?: CodeableConcept;
  /** If the substance applies to only human or veterinary use */
  domain?: CodeableConcept;
  /** Textual description of the substance */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Supporting literature */
  source?: Reference[];
  /** Textual comment about this record of a substance */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** General information detailing this substance */
  referenceInformation?: Reference;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];
  /** Data items specific to nucleic acids */
  nucleicAcid?: Reference;
  /** Data items specific to polymers */
  polymer?: Reference;
  /** Data items specific to proteins */
  protein?: Reference;
  /** Material or taxonomic/anatomical source for the substance */
  sourceMaterial?: Reference;
}
/**
 * The detailed description of a substance, typically at a level beyond what is used for prescribing
 */
export const SubstanceSpecification: t.Type<
  SubstanceSpecification
> = t.recursion<SubstanceSpecification>("SubstanceSpecification", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("SubstanceSpecification"),
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
      /** Identifier by which this substance is known */
      identifier: Identifier,
      /** High level categorization, e.g. polymer or nucleic acid */
      type: CodeableConcept,
      /** Status of substance within the catalogue e.g. approved */
      status: CodeableConcept,
      /** If the substance applies to only human or veterinary use */
      domain: CodeableConcept,
      /** Textual description of the substance */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Supporting literature */
      source: t.array(Reference),
      /** Textual comment about this record of a substance */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element,
      /** General information detailing this substance */
      referenceInformation: Reference,
      /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
      molecularWeight: t.array(
        SubstanceSpecificationStructureIsotopeMolecularWeight
      ),
      /** Data items specific to nucleic acids */
      nucleicAcid: Reference,
      /** Data items specific to polymers */
      polymer: Reference,
      /** Data items specific to proteins */
      protein: Reference,
      /** Material or taxonomic/anatomical source for the substance */
      sourceMaterial: Reference
    })
  ])
);

/**
 * Moiety, for structural modifications
 */
export interface SubstanceSpecificationMoiety {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Role that the moiety is playing */
  role?: CodeableConcept;
  /** Identifier by which this moiety substance is known */
  identifier?: Identifier;
  /** Textual name for this moiety substance */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Stereochemistry type */
  stereochemistry?: CodeableConcept;
  /** Optical activity type */
  opticalActivity?: CodeableConcept;
  /** Molecular formula */
  molecularFormula?: string;
  /** Extension of molecularFormula element */
  _molecularFormula?: Element;
  /** Quantitative value for this moiety */
  amountQuantity?: Quantity;
  /** Quantitative value for this moiety */
  amountString?: string;
  /** Extension of amountString element */
  _amountString?: Element;
}
/**
 * Moiety, for structural modifications
 */
export const SubstanceSpecificationMoiety: t.Type<
  SubstanceSpecificationMoiety
> = t.recursion<SubstanceSpecificationMoiety>(
  "SubstanceSpecificationMoiety",
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
        /** Role that the moiety is playing */
        role: CodeableConcept,
        /** Identifier by which this moiety substance is known */
        identifier: Identifier,
        /** Textual name for this moiety substance */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Stereochemistry type */
        stereochemistry: CodeableConcept,
        /** Optical activity type */
        opticalActivity: CodeableConcept,
        /** Molecular formula */
        molecularFormula: primitives.R4.string,
        /** Extension of molecularFormula element */
        _molecularFormula: Element,
        /** Quantitative value for this moiety */
        amountQuantity: Quantity,
        /** Quantitative value for this moiety */
        amountString: primitives.R4.string,
        /** Extension of amountString element */
        _amountString: Element
      })
    ])
);

/**
 * General specifications for this substance, including how it is related to other substances
 */
export interface SubstanceSpecificationProperty {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A category for this property, e.g. Physical, Chemical, Enzymatic */
  category?: CodeableConcept;
  /** Property type e.g. viscosity, pH, isoelectric point */
  code?: CodeableConcept;
  /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) */
  parameters?: string;
  /** Extension of parameters element */
  _parameters?: Element;
  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
  definingsubstanceReference?: Reference;
  /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
  definingsubstanceCodeableConcept?: CodeableConcept;
  /** Quantitative value for this property */
  amountQuantity?: Quantity;
  /** Quantitative value for this property */
  amountString?: string;
  /** Extension of amountString element */
  _amountString?: Element;
}
/**
 * General specifications for this substance, including how it is related to other substances
 */
export const SubstanceSpecificationProperty: t.Type<
  SubstanceSpecificationProperty
> = t.recursion<SubstanceSpecificationProperty>(
  "SubstanceSpecificationProperty",
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
        /** A category for this property, e.g. Physical, Chemical, Enzymatic */
        category: CodeableConcept,
        /** Property type e.g. viscosity, pH, isoelectric point */
        code: CodeableConcept,
        /** Parameters that were used in the measurement of a property (e.g. for viscosity: measured at 20C with a pH of 7.1) */
        parameters: primitives.R4.string,
        /** Extension of parameters element */
        _parameters: Element,
        /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
        definingsubstanceReference: Reference,
        /** A substance upon which a defining property depends (e.g. for solubility: in water, in alcohol) */
        definingsubstanceCodeableConcept: CodeableConcept,
        /** Quantitative value for this property */
        amountQuantity: Quantity,
        /** Quantitative value for this property */
        amountString: primitives.R4.string,
        /** Extension of amountString element */
        _amountString: Element
      })
    ])
);

/**
 * Structural information
 */
export interface SubstanceSpecificationStructure {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Stereochemistry type */
  stereochemistry?: CodeableConcept;
  /** Optical activity type */
  opticalActivity?: CodeableConcept;
  /** Molecular formula */
  molecularFormula?: string;
  /** Extension of molecularFormula element */
  _molecularFormula?: Element;
  /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot */
  molecularFormulaByMoiety?: string;
  /** Extension of molecularFormulaByMoiety element */
  _molecularFormulaByMoiety?: Element;
  /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
  /** Supporting literature */
  source?: Reference[];
}
/**
 * Structural information
 */
export const SubstanceSpecificationStructure: t.Type<
  SubstanceSpecificationStructure
> = t.recursion<SubstanceSpecificationStructure>(
  "SubstanceSpecificationStructure",
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
        /** Stereochemistry type */
        stereochemistry: CodeableConcept,
        /** Optical activity type */
        opticalActivity: CodeableConcept,
        /** Molecular formula */
        molecularFormula: primitives.R4.string,
        /** Extension of molecularFormula element */
        _molecularFormula: Element,
        /** Specified per moiety according to the Hill system, i.e. first C, then H, then alphabetical, each moiety separated by a dot */
        molecularFormulaByMoiety: primitives.R4.string,
        /** Extension of molecularFormulaByMoiety element */
        _molecularFormulaByMoiety: Element,
        /** The molecular weight or weight range (for proteins, polymers or nucleic acids) */
        molecularWeight: SubstanceSpecificationStructureIsotopeMolecularWeight,
        /** Supporting literature */
        source: t.array(Reference)
      })
    ])
);

/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 */
export interface SubstanceSpecificationStructureIsotope {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
}
/**
 * Applicable for single substances that contain a radionuclide or a non-natural isotopic ratio
 */
export const SubstanceSpecificationStructureIsotope: t.Type<
  SubstanceSpecificationStructureIsotope
> = t.recursion<SubstanceSpecificationStructureIsotope>(
  "SubstanceSpecificationStructureIsotope",
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
        /** Substance identifier for each non-natural or radioisotope */
        identifier: Identifier,
        /** Substance name for each non-natural or radioisotope */
        name: CodeableConcept,
        /** The type of isotopic substitution present in a single substance */
        substitution: CodeableConcept,
        /** Half life - for a non-natural nuclide */
        halfLife: Quantity
      })
    ])
);

/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids)
 */
export interface SubstanceSpecificationStructureIsotopeMolecularWeight {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * The molecular weight or weight range (for proteins, polymers or nucleic acids)
 */
export const SubstanceSpecificationStructureIsotopeMolecularWeight: t.Type<
  SubstanceSpecificationStructureIsotopeMolecularWeight
> = t.recursion<SubstanceSpecificationStructureIsotopeMolecularWeight>(
  "SubstanceSpecificationStructureIsotopeMolecularWeight",
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
        /** The method by which the molecular weight was determined */
        method: CodeableConcept,
        /** Type of molecular weight such as exact, average (also known as. number average), weight average */
        type: CodeableConcept,
        /** Used to capture quantitative values for a variety of elements. If only limits are given, the arithmetic mean would be the average. If only a single definite value for a given element is given, it would be captured in this field */
        amount: Quantity
      })
    ])
);

/**
 * Molecular structural representation
 */
export interface SubstanceSpecificationStructureRepresentation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of structure (e.g. Full, Partial, Representative) */
  type?: CodeableConcept;
  /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX */
  representation?: string;
  /** Extension of representation element */
  _representation?: Element;
  /** An attached file with the structural representation */
  attachment?: Attachment;
}
/**
 * Molecular structural representation
 */
export const SubstanceSpecificationStructureRepresentation: t.Type<
  SubstanceSpecificationStructureRepresentation
> = t.recursion<SubstanceSpecificationStructureRepresentation>(
  "SubstanceSpecificationStructureRepresentation",
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
        /** The type of structure (e.g. Full, Partial, Representative) */
        type: CodeableConcept,
        /** The structural representation as text string in a format e.g. InChI, SMILES, MOLFILE, CDX */
        representation: primitives.R4.string,
        /** Extension of representation element */
        _representation: Element,
        /** An attached file with the structural representation */
        attachment: Attachment
      })
    ])
);

/**
 * Codes associated with the substance
 */
export interface SubstanceSpecificationCode {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The specific code */
  code?: CodeableConcept;
  /** Status of the code assignment */
  status?: CodeableConcept;
  /** The date at which the code status is changed as part of the terminology maintenance */
  statusDate?: primitives.R4.dateTime;
  /** Extension of statusDate element */
  _statusDate?: Element;
  /** Any comment can be provided in this field, if necessary */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** Supporting literature */
  source?: Reference[];
}
/**
 * Codes associated with the substance
 */
export const SubstanceSpecificationCode: t.Type<
  SubstanceSpecificationCode
> = t.recursion<SubstanceSpecificationCode>("SubstanceSpecificationCode", () =>
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
      /** The specific code */
      code: CodeableConcept,
      /** Status of the code assignment */
      status: CodeableConcept,
      /** The date at which the code status is changed as part of the terminology maintenance */
      statusDate: primitives.R4.dateTime,
      /** Extension of statusDate element */
      _statusDate: Element,
      /** Any comment can be provided in this field, if necessary */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element,
      /** Supporting literature */
      source: t.array(Reference)
    })
  ])
);

/**
 * Names applicable to this substance
 */
export interface SubstanceSpecificationName {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The actual name */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Name type */
  type?: CodeableConcept;
  /** The status of the name */
  status?: CodeableConcept;
  /** If this is the preferred name for this substance */
  preferred?: boolean;
  /** Extension of preferred element */
  _preferred?: Element;
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
  /** Supporting literature */
  source?: Reference[];
}
/**
 * Names applicable to this substance
 */
export const SubstanceSpecificationName: t.Type<
  SubstanceSpecificationName
> = t.recursion<SubstanceSpecificationName>("SubstanceSpecificationName", () =>
  t.intersection([
    t.type({
      /** The actual name */
      name: primitives.R4.string
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
      /** Extension of name element */
      _name: Element,
      /** Name type */
      type: CodeableConcept,
      /** The status of the name */
      status: CodeableConcept,
      /** If this is the preferred name for this substance */
      preferred: primitives.R4.boolean,
      /** Extension of preferred element */
      _preferred: Element,
      /** Language of the name */
      language: t.array(CodeableConcept),
      /** The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive */
      domain: t.array(CodeableConcept),
      /** The jurisdiction where this name applies */
      jurisdiction: t.array(CodeableConcept),
      /** A synonym of this name */
      synonym: t.array(SubstanceSpecificationName),
      /** A translation for this name */
      translation: t.array(SubstanceSpecificationName),
      /** Supporting literature */
      source: t.array(Reference)
    })
  ])
);

/**
 * Details of the official nature of this name
 */
export interface SubstanceSpecificationNameOfficial {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Which authority uses this official name */
  authority?: CodeableConcept;
  /** The status of the official name */
  status?: CodeableConcept;
  /** Date of official name change */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
}
/**
 * Details of the official nature of this name
 */
export const SubstanceSpecificationNameOfficial: t.Type<
  SubstanceSpecificationNameOfficial
> = t.recursion<SubstanceSpecificationNameOfficial>(
  "SubstanceSpecificationNameOfficial",
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
        /** Which authority uses this official name */
        authority: CodeableConcept,
        /** The status of the official name */
        status: CodeableConcept,
        /** Date of official name change */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element
      })
    ])
);

/**
 * A link between this substance and another, with details of the relationship
 */
export interface SubstanceSpecificationRelationship {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A pointer to another substance, as a resource or just a representational code */
  substanceReference?: Reference;
  /** A pointer to another substance, as a resource or just a representational code */
  substanceCodeableConcept?: CodeableConcept;
  /** For example "salt to parent", "active moiety", "starting material" */
  relationship?: CodeableConcept;
  /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships */
  isDefining?: boolean;
  /** Extension of isDefining element */
  _isDefining?: Element;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountQuantity?: Quantity;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountRange?: Range;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountRatio?: Ratio;
  /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
  amountString?: string;
  /** Extension of amountString element */
  _amountString?: Element;
  /** For use when the numeric */
  amountRatioLowLimit?: Ratio;
  /** An operator for the amount, for example "average", "approximately", "less than" */
  amountType?: CodeableConcept;
  /** Supporting literature */
  source?: Reference[];
}
/**
 * A link between this substance and another, with details of the relationship
 */
export const SubstanceSpecificationRelationship: t.Type<
  SubstanceSpecificationRelationship
> = t.recursion<SubstanceSpecificationRelationship>(
  "SubstanceSpecificationRelationship",
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
        /** A pointer to another substance, as a resource or just a representational code */
        substanceReference: Reference,
        /** A pointer to another substance, as a resource or just a representational code */
        substanceCodeableConcept: CodeableConcept,
        /** For example "salt to parent", "active moiety", "starting material" */
        relationship: CodeableConcept,
        /** For example where an enzyme strongly bonds with a particular substance, this is a defining relationship for that enzyme, out of several possible substance relationships */
        isDefining: primitives.R4.boolean,
        /** Extension of isDefining element */
        _isDefining: Element,
        /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
        amountQuantity: Quantity,
        /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
        amountRange: Range,
        /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
        amountRatio: Ratio,
        /** A numeric factor for the relationship, for instance to express that the salt of a substance has some percentage of the active substance in relation to some other */
        amountString: primitives.R4.string,
        /** Extension of amountString element */
        _amountString: Element,
        /** For use when the numeric */
        amountRatioLowLimit: Ratio,
        /** An operator for the amount, for example "average", "approximately", "less than" */
        amountType: CodeableConcept,
        /** Supporting literature */
        source: t.array(Reference)
      })
    ])
);
