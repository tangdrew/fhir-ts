/**
 * MolecularSequence Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Information about a biological sequence
 */
export interface MolecularSequence {
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
  /** Unique ID for this particular sequence. This is a FHIR-defined id */
  identifier?: Identifier[];
  /** aa | dna | rna */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) */
  coordinateSystem: primitives.R4.integer;
  /** Extension of coordinateSystem element */
  _coordinateSystem?: Element;
  /** Who and/or what this is about */
  patient?: Reference;
  /** Specimen used for sequencing */
  specimen?: Reference;
  /** The method for sequencing */
  device?: Reference;
  /** Who should be responsible for test result */
  performer?: Reference;
  /** The number of copies of the sequence of interest.  (RNASeq) */
  quantity?: Quantity;
  /** Sequence that was observed */
  observedSeq?: string;
  /** Extension of observedSeq element */
  _observedSeq?: Element;
  /** Average number of reads representing a given nucleotide in the reconstructed sequence */
  readCoverage?: primitives.R4.integer;
  /** Extension of readCoverage element */
  _readCoverage?: Element;
  /** Pointer to next atomic sequence */
  pointer?: Reference[];
}
/**
 * Information about a biological sequence
 */
export const MolecularSequence: t.Type<MolecularSequence> = t.recursion<
  MolecularSequence
>("MolecularSequence", () =>
  t.intersection([
    t.type({
      /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) */
      coordinateSystem: primitives.R4.integer
    }),
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
      /** Unique ID for this particular sequence. This is a FHIR-defined id */
      identifier: t.array(Identifier),
      /** aa | dna | rna */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element,
      /** Extension of coordinateSystem element */
      _coordinateSystem: Element,
      /** Who and/or what this is about */
      patient: Reference,
      /** Specimen used for sequencing */
      specimen: Reference,
      /** The method for sequencing */
      device: Reference,
      /** Who should be responsible for test result */
      performer: Reference,
      /** The number of copies of the sequence of interest.  (RNASeq) */
      quantity: Quantity,
      /** Sequence that was observed */
      observedSeq: primitives.R4.string,
      /** Extension of observedSeq element */
      _observedSeq: Element,
      /** Average number of reads representing a given nucleotide in the reconstructed sequence */
      readCoverage: primitives.R4.integer,
      /** Extension of readCoverage element */
      _readCoverage: Element,
      /** Pointer to next atomic sequence */
      pointer: t.array(Reference)
    })
  ])
);

/**
 * A sequence used as reference
 */
export interface MolecularSequenceReferenceSeq {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Chromosome containing genetic finding */
  chromosome?: CodeableConcept;
  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' */
  genomeBuild?: string;
  /** Extension of genomeBuild element */
  _genomeBuild?: Element;
  /** sense | antisense */
  orientation?: primitives.R4.code;
  /** Extension of orientation element */
  _orientation?: Element;
  /** Reference identifier */
  referenceSeqId?: CodeableConcept;
  /** A pointer to another MolecularSequence entity as reference sequence */
  referenceSeqPointer?: Reference;
  /** A string to represent reference sequence */
  referenceSeqString?: string;
  /** Extension of referenceSeqString element */
  _referenceSeqString?: Element;
  /** watson | crick */
  strand?: primitives.R4.code;
  /** Extension of strand element */
  _strand?: Element;
  /** Start position of the window on the  reference sequence */
  windowStart?: primitives.R4.integer;
  /** Extension of windowStart element */
  _windowStart?: Element;
  /** End position of the window on the reference sequence */
  windowEnd?: primitives.R4.integer;
  /** Extension of windowEnd element */
  _windowEnd?: Element;
}
/**
 * A sequence used as reference
 */
export const MolecularSequenceReferenceSeq: t.Type<
  MolecularSequenceReferenceSeq
> = t.recursion<MolecularSequenceReferenceSeq>(
  "MolecularSequenceReferenceSeq",
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
        /** Chromosome containing genetic finding */
        chromosome: CodeableConcept,
        /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' */
        genomeBuild: primitives.R4.string,
        /** Extension of genomeBuild element */
        _genomeBuild: Element,
        /** sense | antisense */
        orientation: primitives.R4.code,
        /** Extension of orientation element */
        _orientation: Element,
        /** Reference identifier */
        referenceSeqId: CodeableConcept,
        /** A pointer to another MolecularSequence entity as reference sequence */
        referenceSeqPointer: Reference,
        /** A string to represent reference sequence */
        referenceSeqString: primitives.R4.string,
        /** Extension of referenceSeqString element */
        _referenceSeqString: Element,
        /** watson | crick */
        strand: primitives.R4.code,
        /** Extension of strand element */
        _strand: Element,
        /** Start position of the window on the  reference sequence */
        windowStart: primitives.R4.integer,
        /** Extension of windowStart element */
        _windowStart: Element,
        /** End position of the window on the reference sequence */
        windowEnd: primitives.R4.integer,
        /** Extension of windowEnd element */
        _windowEnd: Element
      })
    ])
);

/**
 * Variant in sequence
 */
export interface MolecularSequenceVariant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Start position of the variant on the  reference sequence */
  start?: primitives.R4.integer;
  /** Extension of start element */
  _start?: Element;
  /** End position of the variant on the reference sequence */
  end?: primitives.R4.integer;
  /** Extension of end element */
  _end?: Element;
  /** Allele that was observed */
  observedAllele?: string;
  /** Extension of observedAllele element */
  _observedAllele?: Element;
  /** Allele in the reference sequence */
  referenceAllele?: string;
  /** Extension of referenceAllele element */
  _referenceAllele?: Element;
  /** Extended CIGAR string for aligning the sequence with reference bases */
  cigar?: string;
  /** Extension of cigar element */
  _cigar?: Element;
  /** Pointer to observed variant information */
  variantPointer?: Reference;
}
/**
 * Variant in sequence
 */
export const MolecularSequenceVariant: t.Type<
  MolecularSequenceVariant
> = t.recursion<MolecularSequenceVariant>("MolecularSequenceVariant", () =>
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
      /** Start position of the variant on the  reference sequence */
      start: primitives.R4.integer,
      /** Extension of start element */
      _start: Element,
      /** End position of the variant on the reference sequence */
      end: primitives.R4.integer,
      /** Extension of end element */
      _end: Element,
      /** Allele that was observed */
      observedAllele: primitives.R4.string,
      /** Extension of observedAllele element */
      _observedAllele: Element,
      /** Allele in the reference sequence */
      referenceAllele: primitives.R4.string,
      /** Extension of referenceAllele element */
      _referenceAllele: Element,
      /** Extended CIGAR string for aligning the sequence with reference bases */
      cigar: primitives.R4.string,
      /** Extension of cigar element */
      _cigar: Element,
      /** Pointer to observed variant information */
      variantPointer: Reference
    })
  ])
);

/**
 * An set of value as quality of sequence
 */
export interface MolecularSequenceQuality {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** indel | snp | unknown */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Standard sequence for comparison */
  standardSequence?: CodeableConcept;
  /** Start position of the sequence */
  start?: primitives.R4.integer;
  /** Extension of start element */
  _start?: Element;
  /** End position of the sequence */
  end?: primitives.R4.integer;
  /** Extension of end element */
  _end?: Element;
  /** Quality score for the comparison */
  score?: Quantity;
  /** Method to get quality */
  method?: CodeableConcept;
  /** True positives from the perspective of the truth data */
  truthTP?: primitives.R4.decimal;
  /** Extension of truthTP element */
  _truthTP?: Element;
  /** True positives from the perspective of the query data */
  queryTP?: primitives.R4.decimal;
  /** Extension of queryTP element */
  _queryTP?: Element;
  /** False negatives */
  truthFN?: primitives.R4.decimal;
  /** Extension of truthFN element */
  _truthFN?: Element;
  /** False positives */
  queryFP?: primitives.R4.decimal;
  /** Extension of queryFP element */
  _queryFP?: Element;
  /** False positives where the non-REF alleles in the Truth and Query Call Sets match */
  gtFP?: primitives.R4.decimal;
  /** Extension of gtFP element */
  _gtFP?: Element;
  /** Precision of comparison */
  precision?: primitives.R4.decimal;
  /** Extension of precision element */
  _precision?: Element;
  /** Recall of comparison */
  recall?: primitives.R4.decimal;
  /** Extension of recall element */
  _recall?: Element;
  /** F-score */
  fScore?: primitives.R4.decimal;
  /** Extension of fScore element */
  _fScore?: Element;
}
/**
 * An set of value as quality of sequence
 */
export const MolecularSequenceQuality: t.Type<
  MolecularSequenceQuality
> = t.recursion<MolecularSequenceQuality>("MolecularSequenceQuality", () =>
  t.intersection([
    t.type({
      /** indel | snp | unknown */
      type: primitives.R4.code
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
      /** Extension of type element */
      _type: Element,
      /** Standard sequence for comparison */
      standardSequence: CodeableConcept,
      /** Start position of the sequence */
      start: primitives.R4.integer,
      /** Extension of start element */
      _start: Element,
      /** End position of the sequence */
      end: primitives.R4.integer,
      /** Extension of end element */
      _end: Element,
      /** Quality score for the comparison */
      score: Quantity,
      /** Method to get quality */
      method: CodeableConcept,
      /** True positives from the perspective of the truth data */
      truthTP: primitives.R4.decimal,
      /** Extension of truthTP element */
      _truthTP: Element,
      /** True positives from the perspective of the query data */
      queryTP: primitives.R4.decimal,
      /** Extension of queryTP element */
      _queryTP: Element,
      /** False negatives */
      truthFN: primitives.R4.decimal,
      /** Extension of truthFN element */
      _truthFN: Element,
      /** False positives */
      queryFP: primitives.R4.decimal,
      /** Extension of queryFP element */
      _queryFP: Element,
      /** False positives where the non-REF alleles in the Truth and Query Call Sets match */
      gtFP: primitives.R4.decimal,
      /** Extension of gtFP element */
      _gtFP: Element,
      /** Precision of comparison */
      precision: primitives.R4.decimal,
      /** Extension of precision element */
      _precision: Element,
      /** Recall of comparison */
      recall: primitives.R4.decimal,
      /** Extension of recall element */
      _recall: Element,
      /** F-score */
      fScore: primitives.R4.decimal,
      /** Extension of fScore element */
      _fScore: Element
    })
  ])
);

/**
 * Receiver Operator Characteristic (ROC) Curve
 */
export interface MolecularSequenceQualityRoc {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Genotype quality score */
  score?: primitives.R4.integer[];
  /** Extension of score element */
  _score?: Element[];
  /** Roc score true positive numbers */
  numTP?: primitives.R4.integer[];
  /** Extension of numTP element */
  _numTP?: Element[];
  /** Roc score false positive numbers */
  numFP?: primitives.R4.integer[];
  /** Extension of numFP element */
  _numFP?: Element[];
  /** Roc score false negative numbers */
  numFN?: primitives.R4.integer[];
  /** Extension of numFN element */
  _numFN?: Element[];
  /** Precision of the GQ score */
  precision?: primitives.R4.decimal[];
  /** Extension of precision element */
  _precision?: Element[];
  /** Sensitivity of the GQ score */
  sensitivity?: primitives.R4.decimal[];
  /** Extension of sensitivity element */
  _sensitivity?: Element[];
  /** FScore of the GQ score */
  fMeasure?: primitives.R4.decimal[];
  /** Extension of fMeasure element */
  _fMeasure?: Element[];
}
/**
 * Receiver Operator Characteristic (ROC) Curve
 */
export const MolecularSequenceQualityRoc: t.Type<
  MolecularSequenceQualityRoc
> = t.recursion<MolecularSequenceQualityRoc>(
  "MolecularSequenceQualityRoc",
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
        /** Genotype quality score */
        score: t.array(primitives.R4.integer),
        /** Extension of score element */
        _score: t.array(Element),
        /** Roc score true positive numbers */
        numTP: t.array(primitives.R4.integer),
        /** Extension of numTP element */
        _numTP: t.array(Element),
        /** Roc score false positive numbers */
        numFP: t.array(primitives.R4.integer),
        /** Extension of numFP element */
        _numFP: t.array(Element),
        /** Roc score false negative numbers */
        numFN: t.array(primitives.R4.integer),
        /** Extension of numFN element */
        _numFN: t.array(Element),
        /** Precision of the GQ score */
        precision: t.array(primitives.R4.decimal),
        /** Extension of precision element */
        _precision: t.array(Element),
        /** Sensitivity of the GQ score */
        sensitivity: t.array(primitives.R4.decimal),
        /** Extension of sensitivity element */
        _sensitivity: t.array(Element),
        /** FScore of the GQ score */
        fMeasure: t.array(primitives.R4.decimal),
        /** Extension of fMeasure element */
        _fMeasure: t.array(Element)
      })
    ])
);

/**
 * External repository which contains detailed report related with observedSeq in this resource
 */
export interface MolecularSequenceRepository {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** directlink | openapi | login | oauth | other */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** URI of the repository */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Repository's name */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Id of the dataset that used to call for dataset in repository */
  datasetId?: string;
  /** Extension of datasetId element */
  _datasetId?: Element;
  /** Id of the variantset that used to call for variantset in repository */
  variantsetId?: string;
  /** Extension of variantsetId element */
  _variantsetId?: Element;
  /** Id of the read */
  readsetId?: string;
  /** Extension of readsetId element */
  _readsetId?: Element;
}
/**
 * External repository which contains detailed report related with observedSeq in this resource
 */
export const MolecularSequenceRepository: t.Type<
  MolecularSequenceRepository
> = t.recursion<MolecularSequenceRepository>(
  "MolecularSequenceRepository",
  () =>
    t.intersection([
      t.type({
        /** directlink | openapi | login | oauth | other */
        type: primitives.R4.code
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
        /** Extension of type element */
        _type: Element,
        /** URI of the repository */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Repository's name */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Id of the dataset that used to call for dataset in repository */
        datasetId: primitives.R4.string,
        /** Extension of datasetId element */
        _datasetId: Element,
        /** Id of the variantset that used to call for variantset in repository */
        variantsetId: primitives.R4.string,
        /** Extension of variantsetId element */
        _variantsetId: Element,
        /** Id of the read */
        readsetId: primitives.R4.string,
        /** Extension of readsetId element */
        _readsetId: Element
      })
    ])
);

/**
 * Structural variant
 */
export interface MolecularSequenceStructureVariant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Structural variant change type */
  variantType?: CodeableConcept;
  /** Does the structural variant have base pair resolution breakpoints? */
  exact?: boolean;
  /** Extension of exact element */
  _exact?: Element;
  /** Structural variant length */
  length?: primitives.R4.integer;
  /** Extension of length element */
  _length?: Element;
}
/**
 * Structural variant
 */
export const MolecularSequenceStructureVariant: t.Type<
  MolecularSequenceStructureVariant
> = t.recursion<MolecularSequenceStructureVariant>(
  "MolecularSequenceStructureVariant",
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
        /** Structural variant change type */
        variantType: CodeableConcept,
        /** Does the structural variant have base pair resolution breakpoints? */
        exact: primitives.R4.boolean,
        /** Extension of exact element */
        _exact: Element,
        /** Structural variant length */
        length: primitives.R4.integer,
        /** Extension of length element */
        _length: Element
      })
    ])
);

/**
 * Structural variant outer
 */
export interface MolecularSequenceStructureVariantOuter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Structural variant outer start */
  start?: primitives.R4.integer;
  /** Extension of start element */
  _start?: Element;
  /** Structural variant outer end */
  end?: primitives.R4.integer;
  /** Extension of end element */
  _end?: Element;
}
/**
 * Structural variant outer
 */
export const MolecularSequenceStructureVariantOuter: t.Type<
  MolecularSequenceStructureVariantOuter
> = t.recursion<MolecularSequenceStructureVariantOuter>(
  "MolecularSequenceStructureVariantOuter",
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
        /** Structural variant outer start */
        start: primitives.R4.integer,
        /** Extension of start element */
        _start: Element,
        /** Structural variant outer end */
        end: primitives.R4.integer,
        /** Extension of end element */
        _end: Element
      })
    ])
);

/**
 * Structural variant inner
 */
export interface MolecularSequenceStructureVariantInner {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Structural variant inner start */
  start?: primitives.R4.integer;
  /** Extension of start element */
  _start?: Element;
  /** Structural variant inner end */
  end?: primitives.R4.integer;
  /** Extension of end element */
  _end?: Element;
}
/**
 * Structural variant inner
 */
export const MolecularSequenceStructureVariantInner: t.Type<
  MolecularSequenceStructureVariantInner
> = t.recursion<MolecularSequenceStructureVariantInner>(
  "MolecularSequenceStructureVariantInner",
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
        /** Structural variant inner start */
        start: primitives.R4.integer,
        /** Extension of start element */
        _start: Element,
        /** Structural variant inner end */
        end: primitives.R4.integer,
        /** Extension of end element */
        _end: Element
      })
    ])
);
