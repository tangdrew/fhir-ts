/**
 * MolecularSequence Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Variant in sequence
 */
export interface MolecularSequenceVariant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Start position of the variant on the  reference sequence */
  start?: t.TypeOf<primitives.R4.IntegerType>;
  /** End position of the variant on the reference sequence */
  end?: t.TypeOf<primitives.R4.IntegerType>;
  /** Allele that was observed */
  observedAllele?: t.TypeOf<primitives.R4.StringType>;
  /** Allele in the reference sequence */
  referenceAllele?: t.TypeOf<primitives.R4.StringType>;
  /** Extended CIGAR string for aligning the sequence with reference bases */
  cigar?: t.TypeOf<primitives.R4.StringType>;
  /** Pointer to observed variant information */
  variantPointer?: Reference;
}

export interface MolecularSequenceVariantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Start position of the variant on the  reference sequence */
  start?: t.OutputOf<primitives.R4.IntegerType>;
  /** End position of the variant on the reference sequence */
  end?: t.OutputOf<primitives.R4.IntegerType>;
  /** Allele that was observed */
  observedAllele?: t.OutputOf<primitives.R4.StringType>;
  /** Allele in the reference sequence */
  referenceAllele?: t.OutputOf<primitives.R4.StringType>;
  /** Extended CIGAR string for aligning the sequence with reference bases */
  cigar?: t.OutputOf<primitives.R4.StringType>;
  /** Pointer to observed variant information */
  variantPointer?: ReferenceOutputType;
}

export const MolecularSequenceVariant: t.RecursiveType<
  t.Type<MolecularSequenceVariant, MolecularSequenceVariantOutputType>,
  MolecularSequenceVariant,
  MolecularSequenceVariantOutputType
> = t.recursion<MolecularSequenceVariant, MolecularSequenceVariantOutputType>(
  "MolecularSequenceVariant",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Extended CIGAR string for aligning the sequence with reference bases */
          cigar: primitives.R4.string,
          /** End position of the variant on the reference sequence */
          end: primitives.R4.integer,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Allele that was observed */
          observedAllele: primitives.R4.string,
          /** Allele in the reference sequence */
          referenceAllele: primitives.R4.string,
          /** Start position of the variant on the  reference sequence */
          start: primitives.R4.integer,
          /** Pointer to observed variant information */
          variantPointer: Reference
        })
      ],
      "MolecularSequenceVariant"
    )
);

/**
 * Structural variant outer
 */
export interface MolecularSequenceStructureVariantOuter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Structural variant outer start */
  start?: t.TypeOf<primitives.R4.IntegerType>;
  /** Structural variant outer end */
  end?: t.TypeOf<primitives.R4.IntegerType>;
}

export interface MolecularSequenceStructureVariantOuterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Structural variant outer start */
  start?: t.OutputOf<primitives.R4.IntegerType>;
  /** Structural variant outer end */
  end?: t.OutputOf<primitives.R4.IntegerType>;
}

export const MolecularSequenceStructureVariantOuter: t.RecursiveType<
  t.Type<
    MolecularSequenceStructureVariantOuter,
    MolecularSequenceStructureVariantOuterOutputType
  >,
  MolecularSequenceStructureVariantOuter,
  MolecularSequenceStructureVariantOuterOutputType
> = t.recursion<
  MolecularSequenceStructureVariantOuter,
  MolecularSequenceStructureVariantOuterOutputType
>("MolecularSequenceStructureVariantOuter", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Structural variant outer end */
        end: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Structural variant outer start */
        start: primitives.R4.integer
      })
    ],
    "MolecularSequenceStructureVariantOuter"
  )
);

/**
 * Structural variant inner
 */
export interface MolecularSequenceStructureVariantInner {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Structural variant inner start */
  start?: t.TypeOf<primitives.R4.IntegerType>;
  /** Structural variant inner end */
  end?: t.TypeOf<primitives.R4.IntegerType>;
}

export interface MolecularSequenceStructureVariantInnerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Structural variant inner start */
  start?: t.OutputOf<primitives.R4.IntegerType>;
  /** Structural variant inner end */
  end?: t.OutputOf<primitives.R4.IntegerType>;
}

export const MolecularSequenceStructureVariantInner: t.RecursiveType<
  t.Type<
    MolecularSequenceStructureVariantInner,
    MolecularSequenceStructureVariantInnerOutputType
  >,
  MolecularSequenceStructureVariantInner,
  MolecularSequenceStructureVariantInnerOutputType
> = t.recursion<
  MolecularSequenceStructureVariantInner,
  MolecularSequenceStructureVariantInnerOutputType
>("MolecularSequenceStructureVariantInner", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Structural variant inner end */
        end: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Structural variant inner start */
        start: primitives.R4.integer
      })
    ],
    "MolecularSequenceStructureVariantInner"
  )
);

/**
 * Structural variant
 */
export interface MolecularSequenceStructureVariant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Structural variant change type */
  variantType?: CodeableConcept;
  /** Does the structural variant have base pair resolution breakpoints? */
  exact?: t.TypeOf<primitives.R4.BooleanType>;
  /** Structural variant length */
  length?: t.TypeOf<primitives.R4.IntegerType>;
  /** Structural variant outer */
  outer?: MolecularSequenceStructureVariantOuter;
  /** Structural variant inner */
  inner?: MolecularSequenceStructureVariantInner;
}

export interface MolecularSequenceStructureVariantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Structural variant change type */
  variantType?: CodeableConceptOutputType;
  /** Does the structural variant have base pair resolution breakpoints? */
  exact?: t.OutputOf<primitives.R4.BooleanType>;
  /** Structural variant length */
  length?: t.OutputOf<primitives.R4.IntegerType>;
  /** Structural variant outer */
  outer?: MolecularSequenceStructureVariantOuterOutputType;
  /** Structural variant inner */
  inner?: MolecularSequenceStructureVariantInnerOutputType;
}

export const MolecularSequenceStructureVariant: t.RecursiveType<
  t.Type<
    MolecularSequenceStructureVariant,
    MolecularSequenceStructureVariantOutputType
  >,
  MolecularSequenceStructureVariant,
  MolecularSequenceStructureVariantOutputType
> = t.recursion<
  MolecularSequenceStructureVariant,
  MolecularSequenceStructureVariantOutputType
>("MolecularSequenceStructureVariant", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Does the structural variant have base pair resolution breakpoints? */
        exact: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Structural variant inner */
        inner: MolecularSequenceStructureVariantInner,
        /** Structural variant length */
        length: primitives.R4.integer,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Structural variant outer */
        outer: MolecularSequenceStructureVariantOuter,
        /** Structural variant change type */
        variantType: CodeableConcept
      })
    ],
    "MolecularSequenceStructureVariant"
  )
);

/**
 * External repository which contains detailed report related with observedSeq in this resource
 */
export interface MolecularSequenceRepository {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** directlink | openapi | login | oauth | other */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** URI of the repository */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Repository's name */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Id of the dataset that used to call for dataset in repository */
  datasetId?: t.TypeOf<primitives.R4.StringType>;
  /** Id of the variantset that used to call for variantset in repository */
  variantsetId?: t.TypeOf<primitives.R4.StringType>;
  /** Id of the read */
  readsetId?: t.TypeOf<primitives.R4.StringType>;
}

export interface MolecularSequenceRepositoryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** directlink | openapi | login | oauth | other */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** URI of the repository */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Repository's name */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Id of the dataset that used to call for dataset in repository */
  datasetId?: t.OutputOf<primitives.R4.StringType>;
  /** Id of the variantset that used to call for variantset in repository */
  variantsetId?: t.OutputOf<primitives.R4.StringType>;
  /** Id of the read */
  readsetId?: t.OutputOf<primitives.R4.StringType>;
}

export const MolecularSequenceRepository: t.RecursiveType<
  t.Type<MolecularSequenceRepository, MolecularSequenceRepositoryOutputType>,
  MolecularSequenceRepository,
  MolecularSequenceRepositoryOutputType
> = t.recursion<
  MolecularSequenceRepository,
  MolecularSequenceRepositoryOutputType
>("MolecularSequenceRepository", () =>
  t.intersection(
    [
      t.type({
        /** directlink | openapi | login | oauth | other */
        type: primitives.R4.code
      }),
      t.partial({
        /** Id of the dataset that used to call for dataset in repository */
        datasetId: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Repository's name */
        name: primitives.R4.string,
        /** Id of the read */
        readsetId: primitives.R4.string,
        /** URI of the repository */
        url: primitives.R4.uri,
        /** Id of the variantset that used to call for variantset in repository */
        variantsetId: primitives.R4.string
      })
    ],
    "MolecularSequenceRepository"
  )
);

/**
 * A sequence used as reference
 */
export interface MolecularSequenceReferenceSeq {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Chromosome containing genetic finding */
  chromosome?: CodeableConcept;
  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' */
  genomeBuild?: t.TypeOf<primitives.R4.StringType>;
  /** sense | antisense */
  orientation?: t.TypeOf<primitives.R4.CodeType>;
  /** Reference identifier */
  referenceSeqId?: CodeableConcept;
  /** A pointer to another MolecularSequence entity as reference sequence */
  referenceSeqPointer?: Reference;
  /** A string to represent reference sequence */
  referenceSeqString?: t.TypeOf<primitives.R4.StringType>;
  /** watson | crick */
  strand?: t.TypeOf<primitives.R4.CodeType>;
  /** Start position of the window on the  reference sequence */
  windowStart?: t.TypeOf<primitives.R4.IntegerType>;
  /** End position of the window on the reference sequence */
  windowEnd?: t.TypeOf<primitives.R4.IntegerType>;
}

export interface MolecularSequenceReferenceSeqOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Chromosome containing genetic finding */
  chromosome?: CodeableConceptOutputType;
  /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' */
  genomeBuild?: t.OutputOf<primitives.R4.StringType>;
  /** sense | antisense */
  orientation?: t.OutputOf<primitives.R4.CodeType>;
  /** Reference identifier */
  referenceSeqId?: CodeableConceptOutputType;
  /** A pointer to another MolecularSequence entity as reference sequence */
  referenceSeqPointer?: ReferenceOutputType;
  /** A string to represent reference sequence */
  referenceSeqString?: t.OutputOf<primitives.R4.StringType>;
  /** watson | crick */
  strand?: t.OutputOf<primitives.R4.CodeType>;
  /** Start position of the window on the  reference sequence */
  windowStart?: t.OutputOf<primitives.R4.IntegerType>;
  /** End position of the window on the reference sequence */
  windowEnd?: t.OutputOf<primitives.R4.IntegerType>;
}

export const MolecularSequenceReferenceSeq: t.RecursiveType<
  t.Type<
    MolecularSequenceReferenceSeq,
    MolecularSequenceReferenceSeqOutputType
  >,
  MolecularSequenceReferenceSeq,
  MolecularSequenceReferenceSeqOutputType
> = t.recursion<
  MolecularSequenceReferenceSeq,
  MolecularSequenceReferenceSeqOutputType
>("MolecularSequenceReferenceSeq", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Chromosome containing genetic finding */
        chromosome: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The Genome Build used for reference, following GRCh build versions e.g. 'GRCh 37' */
        genomeBuild: primitives.R4.string,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** sense | antisense */
        orientation: primitives.R4.code,
        /** Reference identifier */
        referenceSeqId: CodeableConcept,
        /** A pointer to another MolecularSequence entity as reference sequence */
        referenceSeqPointer: Reference,
        /** A string to represent reference sequence */
        referenceSeqString: primitives.R4.string,
        /** watson | crick */
        strand: primitives.R4.code,
        /** End position of the window on the reference sequence */
        windowEnd: primitives.R4.integer,
        /** Start position of the window on the  reference sequence */
        windowStart: primitives.R4.integer
      })
    ],
    "MolecularSequenceReferenceSeq"
  )
);

/**
 * Receiver Operator Characteristic (ROC) Curve
 */
export interface MolecularSequenceQualityRoc {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Genotype quality score */
  score?: t.TypeOf<primitives.R4.IntegerType>[];
  /** Roc score true positive numbers */
  numTP?: t.TypeOf<primitives.R4.IntegerType>[];
  /** Roc score false positive numbers */
  numFP?: t.TypeOf<primitives.R4.IntegerType>[];
  /** Roc score false negative numbers */
  numFN?: t.TypeOf<primitives.R4.IntegerType>[];
  /** Precision of the GQ score */
  precision?: t.TypeOf<primitives.R4.DecimalType>[];
  /** Sensitivity of the GQ score */
  sensitivity?: t.TypeOf<primitives.R4.DecimalType>[];
  /** FScore of the GQ score */
  fMeasure?: t.TypeOf<primitives.R4.DecimalType>[];
}

export interface MolecularSequenceQualityRocOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Genotype quality score */
  score?: t.OutputOf<primitives.R4.IntegerType>[];
  /** Roc score true positive numbers */
  numTP?: t.OutputOf<primitives.R4.IntegerType>[];
  /** Roc score false positive numbers */
  numFP?: t.OutputOf<primitives.R4.IntegerType>[];
  /** Roc score false negative numbers */
  numFN?: t.OutputOf<primitives.R4.IntegerType>[];
  /** Precision of the GQ score */
  precision?: t.OutputOf<primitives.R4.DecimalType>[];
  /** Sensitivity of the GQ score */
  sensitivity?: t.OutputOf<primitives.R4.DecimalType>[];
  /** FScore of the GQ score */
  fMeasure?: t.OutputOf<primitives.R4.DecimalType>[];
}

export const MolecularSequenceQualityRoc: t.RecursiveType<
  t.Type<MolecularSequenceQualityRoc, MolecularSequenceQualityRocOutputType>,
  MolecularSequenceQualityRoc,
  MolecularSequenceQualityRocOutputType
> = t.recursion<
  MolecularSequenceQualityRoc,
  MolecularSequenceQualityRocOutputType
>("MolecularSequenceQualityRoc", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** FScore of the GQ score */
        fMeasure: t.array(primitives.R4.decimal),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Roc score false negative numbers */
        numFN: t.array(primitives.R4.integer),
        /** Roc score false positive numbers */
        numFP: t.array(primitives.R4.integer),
        /** Roc score true positive numbers */
        numTP: t.array(primitives.R4.integer),
        /** Precision of the GQ score */
        precision: t.array(primitives.R4.decimal),
        /** Genotype quality score */
        score: t.array(primitives.R4.integer),
        /** Sensitivity of the GQ score */
        sensitivity: t.array(primitives.R4.decimal)
      })
    ],
    "MolecularSequenceQualityRoc"
  )
);

/**
 * An set of value as quality of sequence
 */
export interface MolecularSequenceQuality {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** indel | snp | unknown */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Standard sequence for comparison */
  standardSequence?: CodeableConcept;
  /** Start position of the sequence */
  start?: t.TypeOf<primitives.R4.IntegerType>;
  /** End position of the sequence */
  end?: t.TypeOf<primitives.R4.IntegerType>;
  /** Quality score for the comparison */
  score?: Quantity;
  /** Method to get quality */
  method?: CodeableConcept;
  /** True positives from the perspective of the truth data */
  truthTP?: t.TypeOf<primitives.R4.DecimalType>;
  /** True positives from the perspective of the query data */
  queryTP?: t.TypeOf<primitives.R4.DecimalType>;
  /** False negatives */
  truthFN?: t.TypeOf<primitives.R4.DecimalType>;
  /** False positives */
  queryFP?: t.TypeOf<primitives.R4.DecimalType>;
  /** False positives where the non-REF alleles in the Truth and Query Call Sets match */
  gtFP?: t.TypeOf<primitives.R4.DecimalType>;
  /** Precision of comparison */
  precision?: t.TypeOf<primitives.R4.DecimalType>;
  /** Recall of comparison */
  recall?: t.TypeOf<primitives.R4.DecimalType>;
  /** F-score */
  fScore?: t.TypeOf<primitives.R4.DecimalType>;
  /** Receiver Operator Characteristic (ROC) Curve */
  roc?: MolecularSequenceQualityRoc;
}

export interface MolecularSequenceQualityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** indel | snp | unknown */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Standard sequence for comparison */
  standardSequence?: CodeableConceptOutputType;
  /** Start position of the sequence */
  start?: t.OutputOf<primitives.R4.IntegerType>;
  /** End position of the sequence */
  end?: t.OutputOf<primitives.R4.IntegerType>;
  /** Quality score for the comparison */
  score?: QuantityOutputType;
  /** Method to get quality */
  method?: CodeableConceptOutputType;
  /** True positives from the perspective of the truth data */
  truthTP?: t.OutputOf<primitives.R4.DecimalType>;
  /** True positives from the perspective of the query data */
  queryTP?: t.OutputOf<primitives.R4.DecimalType>;
  /** False negatives */
  truthFN?: t.OutputOf<primitives.R4.DecimalType>;
  /** False positives */
  queryFP?: t.OutputOf<primitives.R4.DecimalType>;
  /** False positives where the non-REF alleles in the Truth and Query Call Sets match */
  gtFP?: t.OutputOf<primitives.R4.DecimalType>;
  /** Precision of comparison */
  precision?: t.OutputOf<primitives.R4.DecimalType>;
  /** Recall of comparison */
  recall?: t.OutputOf<primitives.R4.DecimalType>;
  /** F-score */
  fScore?: t.OutputOf<primitives.R4.DecimalType>;
  /** Receiver Operator Characteristic (ROC) Curve */
  roc?: MolecularSequenceQualityRocOutputType;
}

export const MolecularSequenceQuality: t.RecursiveType<
  t.Type<MolecularSequenceQuality, MolecularSequenceQualityOutputType>,
  MolecularSequenceQuality,
  MolecularSequenceQualityOutputType
> = t.recursion<MolecularSequenceQuality, MolecularSequenceQualityOutputType>(
  "MolecularSequenceQuality",
  () =>
    t.intersection(
      [
        t.type({
          /** indel | snp | unknown */
          type: primitives.R4.code
        }),
        t.partial({
          /** End position of the sequence */
          end: primitives.R4.integer,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** F-score */
          fScore: primitives.R4.decimal,
          /** False positives where the non-REF alleles in the Truth and Query Call Sets match */
          gtFP: primitives.R4.decimal,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Method to get quality */
          method: CodeableConcept,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Precision of comparison */
          precision: primitives.R4.decimal,
          /** False positives */
          queryFP: primitives.R4.decimal,
          /** True positives from the perspective of the query data */
          queryTP: primitives.R4.decimal,
          /** Recall of comparison */
          recall: primitives.R4.decimal,
          /** Receiver Operator Characteristic (ROC) Curve */
          roc: MolecularSequenceQualityRoc,
          /** Quality score for the comparison */
          score: Quantity,
          /** Standard sequence for comparison */
          standardSequence: CodeableConcept,
          /** Start position of the sequence */
          start: primitives.R4.integer,
          /** False negatives */
          truthFN: primitives.R4.decimal,
          /** True positives from the perspective of the truth data */
          truthTP: primitives.R4.decimal
        })
      ],
      "MolecularSequenceQuality"
    )
);

/**
 * Information about a biological sequence
 */
export interface MolecularSequence {
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
  /** Unique ID for this particular sequence. This is a FHIR-defined id */
  identifier?: Identifier[];
  /** aa | dna | rna */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) */
  coordinateSystem: t.TypeOf<primitives.R4.IntegerType>;
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
  /** A sequence used as reference */
  referenceSeq?: MolecularSequenceReferenceSeq;
  /** Variant in sequence */
  variant?: MolecularSequenceVariant[];
  /** Sequence that was observed */
  observedSeq?: t.TypeOf<primitives.R4.StringType>;
  /** An set of value as quality of sequence */
  quality?: MolecularSequenceQuality[];
  /** Average number of reads representing a given nucleotide in the reconstructed sequence */
  readCoverage?: t.TypeOf<primitives.R4.IntegerType>;
  /** External repository which contains detailed report related with observedSeq in this resource */
  repository?: MolecularSequenceRepository[];
  /** Pointer to next atomic sequence */
  pointer?: Reference[];
  /** Structural variant */
  structureVariant?: MolecularSequenceStructureVariant[];
}

export interface MolecularSequenceOutputType {
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
  /** Unique ID for this particular sequence. This is a FHIR-defined id */
  identifier?: IdentifierOutputType[];
  /** aa | dna | rna */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) */
  coordinateSystem: t.OutputOf<primitives.R4.IntegerType>;
  /** Who and/or what this is about */
  patient?: ReferenceOutputType;
  /** Specimen used for sequencing */
  specimen?: ReferenceOutputType;
  /** The method for sequencing */
  device?: ReferenceOutputType;
  /** Who should be responsible for test result */
  performer?: ReferenceOutputType;
  /** The number of copies of the sequence of interest.  (RNASeq) */
  quantity?: QuantityOutputType;
  /** A sequence used as reference */
  referenceSeq?: MolecularSequenceReferenceSeqOutputType;
  /** Variant in sequence */
  variant?: MolecularSequenceVariantOutputType[];
  /** Sequence that was observed */
  observedSeq?: t.OutputOf<primitives.R4.StringType>;
  /** An set of value as quality of sequence */
  quality?: MolecularSequenceQualityOutputType[];
  /** Average number of reads representing a given nucleotide in the reconstructed sequence */
  readCoverage?: t.OutputOf<primitives.R4.IntegerType>;
  /** External repository which contains detailed report related with observedSeq in this resource */
  repository?: MolecularSequenceRepositoryOutputType[];
  /** Pointer to next atomic sequence */
  pointer?: ReferenceOutputType[];
  /** Structural variant */
  structureVariant?: MolecularSequenceStructureVariantOutputType[];
}

export const MolecularSequence: t.RecursiveType<
  t.Type<MolecularSequence, MolecularSequenceOutputType>,
  MolecularSequence,
  MolecularSequenceOutputType
> = t.recursion<MolecularSequence, MolecularSequenceOutputType>(
  "MolecularSequence",
  () =>
    t.intersection(
      [
        t.type({
          /** Base number of coordinate system (0 for 0-based numbering or coordinates, inclusive start, exclusive end, 1 for 1-based numbering, inclusive start, inclusive end) */
          coordinateSystem: primitives.R4.integer
        }),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** The method for sequencing */
          device: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Unique ID for this particular sequence. This is a FHIR-defined id */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Sequence that was observed */
          observedSeq: primitives.R4.string,
          /** Who and/or what this is about */
          patient: Reference,
          /** Who should be responsible for test result */
          performer: Reference,
          /** Pointer to next atomic sequence */
          pointer: t.array(Reference),
          /** An set of value as quality of sequence */
          quality: t.array(MolecularSequenceQuality),
          /** The number of copies of the sequence of interest.  (RNASeq) */
          quantity: Quantity,
          /** Average number of reads representing a given nucleotide in the reconstructed sequence */
          readCoverage: primitives.R4.integer,
          /** A sequence used as reference */
          referenceSeq: MolecularSequenceReferenceSeq,
          /** External repository which contains detailed report related with observedSeq in this resource */
          repository: t.array(MolecularSequenceRepository),
          /** Specimen used for sequencing */
          specimen: Reference,
          /** Structural variant */
          structureVariant: t.array(MolecularSequenceStructureVariant),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** aa | dna | rna */
          type: primitives.R4.code,
          /** Variant in sequence */
          variant: t.array(MolecularSequenceVariant)
        })
      ],
      "MolecularSequence"
    )
);
