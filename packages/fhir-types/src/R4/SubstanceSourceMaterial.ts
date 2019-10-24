/**
 * SubstanceSourceMaterial Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";

/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex
 */
export interface SubstanceSourceMaterial {
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
  /** General high level classification of the source material specific to the origin of the material */
  sourceMaterialClass?: CodeableConcept;
  /** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent */
  sourceMaterialType?: CodeableConcept;
  /** The state of the source material when extracted */
  sourceMaterialState?: CodeableConcept;
  /** The unique identifier associated with the source material parent organism shall be specified */
  organismId?: Identifier;
  /** The organism accepted Scientific name shall be provided based on the organism taxonomy */
  organismName?: string;
  /** Extension of organismName element */
  _organismName?: Element;
  /** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant) */
  parentSubstanceId?: Identifier[];
  /** The parent substance of the Herbal Drug, or Herbal preparation */
  parentSubstanceName?: string[];
  /** Extension of parentSubstanceName element */
  _parentSubstanceName?: Element[];
  /** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate */
  countryOfOrigin?: CodeableConcept[];
  /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat */
  geographicalLocation?: string[];
  /** Extension of geographicalLocation element */
  _geographicalLocation?: Element[];
  /** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) */
  developmentStage?: CodeableConcept;
}
/**
 * Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex
 */
export const SubstanceSourceMaterial: t.Type<
  SubstanceSourceMaterial
> = t.recursion<SubstanceSourceMaterial>("SubstanceSourceMaterial", () =>
  t.intersection([
    t.type({}),
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
      /** General high level classification of the source material specific to the origin of the material */
      sourceMaterialClass: CodeableConcept,
      /** The type of the source material shall be specified based on a controlled vocabulary. For vaccines, this subclause refers to the class of infectious agent */
      sourceMaterialType: CodeableConcept,
      /** The state of the source material when extracted */
      sourceMaterialState: CodeableConcept,
      /** The unique identifier associated with the source material parent organism shall be specified */
      organismId: Identifier,
      /** The organism accepted Scientific name shall be provided based on the organism taxonomy */
      organismName: primitives.R4.string,
      /** Extension of organismName element */
      _organismName: Element,
      /** The parent of the herbal drug Ginkgo biloba, Leaf is the substance ID of the substance (fresh) of Ginkgo biloba L. or Ginkgo biloba L. (Whole plant) */
      parentSubstanceId: t.array(Identifier),
      /** The parent substance of the Herbal Drug, or Herbal preparation */
      parentSubstanceName: t.array(primitives.R4.string),
      /** Extension of parentSubstanceName element */
      _parentSubstanceName: t.array(Element),
      /** The country where the plant material is harvested or the countries where the plasma is sourced from as laid down in accordance with the Plasma Master File. For “Plasma-derived substances” the attribute country of origin provides information about the countries used for the manufacturing of the Cryopoor plama or Crioprecipitate */
      countryOfOrigin: t.array(CodeableConcept),
      /** The place/region where the plant is harvested or the places/regions where the animal source material has its habitat */
      geographicalLocation: t.array(primitives.R4.string),
      /** Extension of geographicalLocation element */
      _geographicalLocation: t.array(Element),
      /** Stage of life for animals, plants, insects and microorganisms. This information shall be provided only when the substance is significantly different in these stages (e.g. foetal bovine serum) */
      developmentStage: CodeableConcept
    })
  ])
);

/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 */
export interface SubstanceSourceMaterialFractionDescription {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation */
  fraction?: string;
  /** Extension of fraction element */
  _fraction?: Element;
  /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1 */
  materialType?: CodeableConcept;
}
/**
 * Many complex materials are fractions of parts of plants, animals, or minerals. Fraction elements are often necessary to define both Substances and Specified Group 1 Substances. For substances derived from Plants, fraction information will be captured at the Substance information level ( . Oils, Juices and Exudates). Additional information for Extracts, such as extraction solvent composition, will be captured at the Specified Substance Group 1 information level. For plasma-derived products fraction information will be captured at the Substance and the Specified Substance Group 1 levels
 */
export const SubstanceSourceMaterialFractionDescription: t.Type<
  SubstanceSourceMaterialFractionDescription
> = t.recursion<SubstanceSourceMaterialFractionDescription>(
  "SubstanceSourceMaterialFractionDescription",
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
        /** This element is capturing information about the fraction of a plant part, or human plasma for fractionation */
        fraction: primitives.R4.string,
        /** Extension of fraction element */
        _fraction: Element,
        /** The specific type of the material constituting the component. For Herbal preparations the particulars of the extracts (liquid/dry) is described in Specified Substance Group 1 */
        materialType: CodeableConcept
      })
    ])
);

/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 */
export interface SubstanceSourceMaterialOrganism {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The family of an organism shall be specified */
  family?: CodeableConcept;
  /** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies */
  genus?: CodeableConcept;
  /** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies */
  species?: CodeableConcept;
  /** The Intraspecific type of an organism shall be specified */
  intraspecificType?: CodeableConcept;
  /** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention */
  intraspecificDescription?: string;
  /** Extension of intraspecificDescription element */
  _intraspecificDescription?: Element;
}
/**
 * This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf
 */
export const SubstanceSourceMaterialOrganism: t.Type<
  SubstanceSourceMaterialOrganism
> = t.recursion<SubstanceSourceMaterialOrganism>(
  "SubstanceSourceMaterialOrganism",
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
        /** The family of an organism shall be specified */
        family: CodeableConcept,
        /** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies */
        genus: CodeableConcept,
        /** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies */
        species: CodeableConcept,
        /** The Intraspecific type of an organism shall be specified */
        intraspecificType: CodeableConcept,
        /** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention */
        intraspecificDescription: primitives.R4.string,
        /** Extension of intraspecificDescription element */
        _intraspecificDescription: Element
      })
    ])
);

/**
 * 4.9.13.6.1 Author type (Conditional)
 */
export interface SubstanceSourceMaterialOrganismAuthor {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name */
  authorType?: CodeableConcept;
  /** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank) */
  authorDescription?: string;
  /** Extension of authorDescription element */
  _authorDescription?: Element;
}
/**
 * 4.9.13.6.1 Author type (Conditional)
 */
export const SubstanceSourceMaterialOrganismAuthor: t.Type<
  SubstanceSourceMaterialOrganismAuthor
> = t.recursion<SubstanceSourceMaterialOrganismAuthor>(
  "SubstanceSourceMaterialOrganismAuthor",
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
        /** The type of author of an organism species shall be specified. The parenthetical author of an organism species refers to the first author who published the plant/animal name (of any rank). The primary author of an organism species refers to the first author(s), who validly published the plant/animal name */
        authorType: CodeableConcept,
        /** The author of an organism species shall be specified. The author year of an organism shall also be specified when applicable; refers to the year in which the first author(s) published the infraspecific plant/animal name (of any rank) */
        authorDescription: primitives.R4.string,
        /** Extension of authorDescription element */
        _authorDescription: Element
      })
    ])
);

/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 */
export interface SubstanceSourceMaterialOrganismHybrid {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal */
  maternalOrganismId?: string;
  /** Extension of maternalOrganismId element */
  _maternalOrganismId?: Element;
  /** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal */
  maternalOrganismName?: string;
  /** Extension of maternalOrganismName element */
  _maternalOrganismName?: Element;
  /** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary */
  paternalOrganismId?: string;
  /** Extension of paternalOrganismId element */
  _paternalOrganismId?: Element;
  /** The name of the paternal species constituting the hybrid organism shall be specified */
  paternalOrganismName?: string;
  /** Extension of paternalOrganismName element */
  _paternalOrganismName?: Element;
  /** The hybrid type of an organism shall be specified */
  hybridType?: CodeableConcept;
}
/**
 * 4.9.13.8.1 Hybrid species maternal organism ID (Optional)
 */
export const SubstanceSourceMaterialOrganismHybrid: t.Type<
  SubstanceSourceMaterialOrganismHybrid
> = t.recursion<SubstanceSourceMaterialOrganismHybrid>(
  "SubstanceSourceMaterialOrganismHybrid",
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
        /** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal */
        maternalOrganismId: primitives.R4.string,
        /** Extension of maternalOrganismId element */
        _maternalOrganismId: Element,
        /** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal */
        maternalOrganismName: primitives.R4.string,
        /** Extension of maternalOrganismName element */
        _maternalOrganismName: Element,
        /** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary */
        paternalOrganismId: primitives.R4.string,
        /** Extension of paternalOrganismId element */
        _paternalOrganismId: Element,
        /** The name of the paternal species constituting the hybrid organism shall be specified */
        paternalOrganismName: primitives.R4.string,
        /** Extension of paternalOrganismName element */
        _paternalOrganismName: Element,
        /** The hybrid type of an organism shall be specified */
        hybridType: CodeableConcept
      })
    ])
);

/**
 * 4.9.13.7.1 Kingdom (Conditional)
 */
export interface SubstanceSourceMaterialOrganismOrganismGeneral {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The kingdom of an organism shall be specified */
  kingdom?: CodeableConcept;
  /** The phylum of an organism shall be specified */
  phylum?: CodeableConcept;
  /** The class of an organism shall be specified */
  class?: CodeableConcept;
  /** The order of an organism shall be specified, */
  order?: CodeableConcept;
}
/**
 * 4.9.13.7.1 Kingdom (Conditional)
 */
export const SubstanceSourceMaterialOrganismOrganismGeneral: t.Type<
  SubstanceSourceMaterialOrganismOrganismGeneral
> = t.recursion<SubstanceSourceMaterialOrganismOrganismGeneral>(
  "SubstanceSourceMaterialOrganismOrganismGeneral",
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
        /** The kingdom of an organism shall be specified */
        kingdom: CodeableConcept,
        /** The phylum of an organism shall be specified */
        phylum: CodeableConcept,
        /** The class of an organism shall be specified */
        class: CodeableConcept,
        /** The order of an organism shall be specified, */
        order: CodeableConcept
      })
    ])
);

/**
 * To do
 */
export interface SubstanceSourceMaterialPartDescription {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Entity of anatomical origin of source material within an organism */
  part?: CodeableConcept;
  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply */
  partLocation?: CodeableConcept;
}
/**
 * To do
 */
export const SubstanceSourceMaterialPartDescription: t.Type<
  SubstanceSourceMaterialPartDescription
> = t.recursion<SubstanceSourceMaterialPartDescription>(
  "SubstanceSourceMaterialPartDescription",
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
        /** Entity of anatomical origin of source material within an organism */
        part: CodeableConcept,
        /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply */
        partLocation: CodeableConcept
      })
    ])
);
