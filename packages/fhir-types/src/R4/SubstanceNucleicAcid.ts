/**
 * SubstanceNucleicAcid Module
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
import { Resource } from "./Resource";

/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction
 */
export interface SubstanceNucleicAcid {
  /** The type of resource */
  resourceType?: "SubstanceNucleicAcid";
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
  /** The type of the sequence shall be specified based on a controlled vocabulary */
  sequenceType?: CodeableConcept;
  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
  numberOfSubunits?: primitives.R4.integer;
  /** Extension of numberOfSubunits element */
  _numberOfSubunits?: Element;
  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
  areaOfHybridisation?: string;
  /** Extension of areaOfHybridisation element */
  _areaOfHybridisation?: Element;
  /** (TBC) */
  oligoNucleotideType?: CodeableConcept;
}
/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction
 */
export const SubstanceNucleicAcid: t.Type<SubstanceNucleicAcid> = t.recursion<
  SubstanceNucleicAcid
>("SubstanceNucleicAcid", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("SubstanceNucleicAcid"),
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
      /** The type of the sequence shall be specified based on a controlled vocabulary */
      sequenceType: CodeableConcept,
      /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
      numberOfSubunits: primitives.R4.integer,
      /** Extension of numberOfSubunits element */
      _numberOfSubunits: Element,
      /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
      areaOfHybridisation: primitives.R4.string,
      /** Extension of areaOfHybridisation element */
      _areaOfHybridisation: Element,
      /** (TBC) */
      oligoNucleotideType: CodeableConcept
    })
  ])
);

/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export interface SubstanceNucleicAcidSubunit {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: primitives.R4.integer;
  /** Extension of subunit element */
  _subunit?: Element;
  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
  sequence?: string;
  /** Extension of sequence element */
  _sequence?: Element;
  /** The length of the sequence shall be captured */
  length?: primitives.R4.integer;
  /** Extension of length element */
  _length?: Element;
  /** (TBC) */
  sequenceAttachment?: Attachment;
  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
  fivePrime?: CodeableConcept;
  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
  threePrime?: CodeableConcept;
}
/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export const SubstanceNucleicAcidSubunit: t.Type<
  SubstanceNucleicAcidSubunit
> = t.recursion<SubstanceNucleicAcidSubunit>(
  "SubstanceNucleicAcidSubunit",
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
        /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
        subunit: primitives.R4.integer,
        /** Extension of subunit element */
        _subunit: Element,
        /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
        sequence: primitives.R4.string,
        /** Extension of sequence element */
        _sequence: Element,
        /** The length of the sequence shall be captured */
        length: primitives.R4.integer,
        /** Extension of length element */
        _length: Element,
        /** (TBC) */
        sequenceAttachment: Attachment,
        /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
        fivePrime: CodeableConcept,
        /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
        threePrime: CodeableConcept
      })
    ])
);

/**
 * The linkages between sugar residues will also be captured
 */
export interface SubstanceNucleicAcidSubunitLinkage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
  connectivity?: string;
  /** Extension of connectivity element */
  _connectivity?: Element;
  /** Each linkage will be registered as a fragment and have an ID */
  identifier?: Identifier;
  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Residues shall be captured as described in 5.3.6.8.3 */
  residueSite?: string;
  /** Extension of residueSite element */
  _residueSite?: Element;
}
/**
 * The linkages between sugar residues will also be captured
 */
export const SubstanceNucleicAcidSubunitLinkage: t.Type<
  SubstanceNucleicAcidSubunitLinkage
> = t.recursion<SubstanceNucleicAcidSubunitLinkage>(
  "SubstanceNucleicAcidSubunitLinkage",
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
        /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
        connectivity: primitives.R4.string,
        /** Extension of connectivity element */
        _connectivity: Element,
        /** Each linkage will be registered as a fragment and have an ID */
        identifier: Identifier,
        /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Residues shall be captured as described in 5.3.6.8.3 */
        residueSite: primitives.R4.string,
        /** Extension of residueSite element */
        _residueSite: Element
      })
    ])
);

/**
 * 5.3.6.8.1 Sugar ID (Mandatory)
 */
export interface SubstanceNucleicAcidSubunitSugar {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
  identifier?: Identifier;
  /** The name of the sugar or sugar-like component that make up the nucleotide */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
  residueSite?: string;
  /** Extension of residueSite element */
  _residueSite?: Element;
}
/**
 * 5.3.6.8.1 Sugar ID (Mandatory)
 */
export const SubstanceNucleicAcidSubunitSugar: t.Type<
  SubstanceNucleicAcidSubunitSugar
> = t.recursion<SubstanceNucleicAcidSubunitSugar>(
  "SubstanceNucleicAcidSubunitSugar",
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
        /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
        identifier: Identifier,
        /** The name of the sugar or sugar-like component that make up the nucleotide */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
        residueSite: primitives.R4.string,
        /** Extension of residueSite element */
        _residueSite: Element
      })
    ])
);
