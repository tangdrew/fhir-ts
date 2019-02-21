/**
 * SubstanceNucleicAcid Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * 5.3.6.8.1 Sugar ID (Mandatory)
 */
export interface SubstanceNucleicAcidSubunitSugar {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
  identifier?: Identifier;
  /** The name of the sugar or sugar-like component that make up the nucleotide */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
  residueSite?: t.TypeOf<primitives.R4.StringType>;
}

export interface SubstanceNucleicAcidSubunitSugarOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
  identifier?: IdentifierOutputType;
  /** The name of the sugar or sugar-like component that make up the nucleotide */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
  residueSite?: t.OutputOf<primitives.R4.StringType>;
}

export const SubstanceNucleicAcidSubunitSugar: t.RecursiveType<
  t.Type<
    SubstanceNucleicAcidSubunitSugar,
    SubstanceNucleicAcidSubunitSugarOutputType
  >,
  SubstanceNucleicAcidSubunitSugar,
  SubstanceNucleicAcidSubunitSugarOutputType
> = t.recursion<
  SubstanceNucleicAcidSubunitSugar,
  SubstanceNucleicAcidSubunitSugarOutputType
>("SubstanceNucleicAcidSubunitSugar", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The Substance ID of the sugar or sugar-like component that make up the nucleotide */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The name of the sugar or sugar-like component that make up the nucleotide */
        name: primitives.R4.string,
        /** The residues that contain a given sugar will be captured. The order of given residues will be captured in the 5‘-3‘direction consistent with the base sequences listed above */
        residueSite: primitives.R4.string
      })
    ],
    "SubstanceNucleicAcidSubunitSugar"
  )
);

/**
 * The linkages between sugar residues will also be captured
 */
export interface SubstanceNucleicAcidSubunitLinkage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
  connectivity?: t.TypeOf<primitives.R4.StringType>;
  /** Each linkage will be registered as a fragment and have an ID */
  identifier?: Identifier;
  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Residues shall be captured as described in 5.3.6.8.3 */
  residueSite?: t.TypeOf<primitives.R4.StringType>;
}

export interface SubstanceNucleicAcidSubunitLinkageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
  connectivity?: t.OutputOf<primitives.R4.StringType>;
  /** Each linkage will be registered as a fragment and have an ID */
  identifier?: IdentifierOutputType;
  /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Residues shall be captured as described in 5.3.6.8.3 */
  residueSite?: t.OutputOf<primitives.R4.StringType>;
}

export const SubstanceNucleicAcidSubunitLinkage: t.RecursiveType<
  t.Type<
    SubstanceNucleicAcidSubunitLinkage,
    SubstanceNucleicAcidSubunitLinkageOutputType
  >,
  SubstanceNucleicAcidSubunitLinkage,
  SubstanceNucleicAcidSubunitLinkageOutputType
> = t.recursion<
  SubstanceNucleicAcidSubunitLinkage,
  SubstanceNucleicAcidSubunitLinkageOutputType
>("SubstanceNucleicAcidSubunitLinkage", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** The entity that links the sugar residues together should also be captured for nearly all naturally occurring nucleic acid the linkage is a phosphate group. For many synthetic oligonucleotides phosphorothioate linkages are often seen. Linkage connectivity is assumed to be 3’-5’. If the linkage is either 3’-3’ or 5’-5’ this should be specified */
        connectivity: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Each linkage will be registered as a fragment and have an ID */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Each linkage will be registered as a fragment and have at least one name. A single name shall be assigned to each linkage */
        name: primitives.R4.string,
        /** Residues shall be captured as described in 5.3.6.8.3 */
        residueSite: primitives.R4.string
      })
    ],
    "SubstanceNucleicAcidSubunitLinkage"
  )
);

/**
 * Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times
 */
export interface SubstanceNucleicAcidSubunit {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: t.TypeOf<primitives.R4.IntegerType>;
  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
  sequence?: t.TypeOf<primitives.R4.StringType>;
  /** The length of the sequence shall be captured */
  length?: t.TypeOf<primitives.R4.IntegerType>;
  /** (TBC) */
  sequenceAttachment?: Attachment;
  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
  fivePrime?: CodeableConcept;
  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
  threePrime?: CodeableConcept;
  /** The linkages between sugar residues will also be captured */
  linkage?: SubstanceNucleicAcidSubunitLinkage[];
  /** 5.3.6.8.1 Sugar ID (Mandatory) */
  sugar?: SubstanceNucleicAcidSubunitSugar[];
}

export interface SubstanceNucleicAcidSubunitOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
  subunit?: t.OutputOf<primitives.R4.IntegerType>;
  /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
  sequence?: t.OutputOf<primitives.R4.StringType>;
  /** The length of the sequence shall be captured */
  length?: t.OutputOf<primitives.R4.IntegerType>;
  /** (TBC) */
  sequenceAttachment?: AttachmentOutputType;
  /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
  fivePrime?: CodeableConceptOutputType;
  /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
  threePrime?: CodeableConceptOutputType;
  /** The linkages between sugar residues will also be captured */
  linkage?: SubstanceNucleicAcidSubunitLinkageOutputType[];
  /** 5.3.6.8.1 Sugar ID (Mandatory) */
  sugar?: SubstanceNucleicAcidSubunitSugarOutputType[];
}

export const SubstanceNucleicAcidSubunit: t.RecursiveType<
  t.Type<SubstanceNucleicAcidSubunit, SubstanceNucleicAcidSubunitOutputType>,
  SubstanceNucleicAcidSubunit,
  SubstanceNucleicAcidSubunitOutputType
> = t.recursion<
  SubstanceNucleicAcidSubunit,
  SubstanceNucleicAcidSubunitOutputType
>("SubstanceNucleicAcidSubunit", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The nucleotide present at the 5’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the first position in the sequence. A separate representation would be redundant */
        fivePrime: CodeableConcept,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The length of the sequence shall be captured */
        length: primitives.R4.integer,
        /** The linkages between sugar residues will also be captured */
        linkage: t.array(SubstanceNucleicAcidSubunitLinkage),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Actual nucleotide sequence notation from 5' to 3' end using standard single letter codes. In addition to the base sequence, sugar and type of phosphate or non-phosphate linkage should also be captured */
        sequence: primitives.R4.string,
        /** (TBC) */
        sequenceAttachment: Attachment,
        /** Index of linear sequences of nucleic acids in order of decreasing length. Sequences of the same length will be ordered by molecular weight. Subunits that have identical sequences will be repeated and have sequential subscripts */
        subunit: primitives.R4.integer,
        /** 5.3.6.8.1 Sugar ID (Mandatory) */
        sugar: t.array(SubstanceNucleicAcidSubunitSugar),
        /** The nucleotide present at the 3’ terminal shall be specified based on a controlled vocabulary. Since the sequence is represented from the 5' to the 3' end, the 5’ prime nucleotide is the letter at the last position in the sequence. A separate representation would be redundant */
        threePrime: CodeableConcept
      })
    ],
    "SubstanceNucleicAcidSubunit"
  )
);

/**
 * Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction
 */
export interface SubstanceNucleicAcid {
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
  /** The type of the sequence shall be specified based on a controlled vocabulary */
  sequenceType?: CodeableConcept;
  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
  numberOfSubunits?: t.TypeOf<primitives.R4.IntegerType>;
  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
  areaOfHybridisation?: t.TypeOf<primitives.R4.StringType>;
  /** (TBC) */
  oligoNucleotideType?: CodeableConcept;
  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times */
  subunit?: SubstanceNucleicAcidSubunit[];
}

export interface SubstanceNucleicAcidOutputType {
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
  /** The type of the sequence shall be specified based on a controlled vocabulary */
  sequenceType?: CodeableConceptOutputType;
  /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
  numberOfSubunits?: t.OutputOf<primitives.R4.IntegerType>;
  /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
  areaOfHybridisation?: t.OutputOf<primitives.R4.StringType>;
  /** (TBC) */
  oligoNucleotideType?: CodeableConceptOutputType;
  /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times */
  subunit?: SubstanceNucleicAcidSubunitOutputType[];
}

export const SubstanceNucleicAcid: t.RecursiveType<
  t.Type<SubstanceNucleicAcid, SubstanceNucleicAcidOutputType>,
  SubstanceNucleicAcid,
  SubstanceNucleicAcidOutputType
> = t.recursion<SubstanceNucleicAcid, SubstanceNucleicAcidOutputType>(
  "SubstanceNucleicAcid",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The area of hybridisation shall be described if applicable for double stranded RNA or DNA. The number associated with the subunit followed by the number associated to the residue shall be specified in increasing order. The underscore “” shall be used as separator as follows: “Subunitnumber Residue” */
          areaOfHybridisation: primitives.R4.string,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** The number of linear sequences of nucleotides linked through phosphodiester bonds shall be described. Subunits would be strands of nucleic acids that are tightly associated typically through Watson-Crick base pairing. NOTE: If not specified in the reference source, the assumption is that there is 1 subunit */
          numberOfSubunits: primitives.R4.integer,
          /** (TBC) */
          oligoNucleotideType: CodeableConcept,
          /** The type of the sequence shall be specified based on a controlled vocabulary */
          sequenceType: CodeableConcept,
          /** Subunits are listed in order of decreasing length; sequences of the same length will be ordered by molecular weight; subunits that have identical sequences will be repeated multiple times */
          subunit: t.array(SubstanceNucleicAcidSubunit),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "SubstanceNucleicAcid"
    )
);
