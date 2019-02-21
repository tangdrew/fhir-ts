/**
 * SubstanceReferenceInformation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Todo
 */
export interface SubstanceReferenceInformationTarget {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  target?: Identifier;
  /** Todo */
  type?: CodeableConcept;
  /** Todo */
  interaction?: CodeableConcept;
  /** Todo */
  organism?: CodeableConcept;
  /** Todo */
  organismType?: CodeableConcept;
  /** Todo */
  amount?: Quantity | Range | t.TypeOf<primitives.R4.StringType>;
  /** Todo */
  amountType?: CodeableConcept;
  /** Todo */
  source?: Reference[];
}

export interface SubstanceReferenceInformationTargetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  target?: IdentifierOutputType;
  /** Todo */
  type?: CodeableConceptOutputType;
  /** Todo */
  interaction?: CodeableConceptOutputType;
  /** Todo */
  organism?: CodeableConceptOutputType;
  /** Todo */
  organismType?: CodeableConceptOutputType;
  /** Todo */
  amount?:
    | QuantityOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.StringType>;
  /** Todo */
  amountType?: CodeableConceptOutputType;
  /** Todo */
  source?: ReferenceOutputType[];
}

export const SubstanceReferenceInformationTarget: t.RecursiveType<
  t.Type<
    SubstanceReferenceInformationTarget,
    SubstanceReferenceInformationTargetOutputType
  >,
  SubstanceReferenceInformationTarget,
  SubstanceReferenceInformationTargetOutputType
> = t.recursion<
  SubstanceReferenceInformationTarget,
  SubstanceReferenceInformationTargetOutputType
>("SubstanceReferenceInformationTarget", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        amount: t.union([Quantity, Range, primitives.R4.string]),
        /** Todo */
        amountType: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Todo */
        interaction: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        organism: CodeableConcept,
        /** Todo */
        organismType: CodeableConcept,
        /** Todo */
        source: t.array(Reference),
        /** Todo */
        target: Identifier,
        /** Todo */
        type: CodeableConcept
      })
    ],
    "SubstanceReferenceInformationTarget"
  )
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationGeneElement {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  type?: CodeableConcept;
  /** Todo */
  element?: Identifier;
  /** Todo */
  source?: Reference[];
}

export interface SubstanceReferenceInformationGeneElementOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  type?: CodeableConceptOutputType;
  /** Todo */
  element?: IdentifierOutputType;
  /** Todo */
  source?: ReferenceOutputType[];
}

export const SubstanceReferenceInformationGeneElement: t.RecursiveType<
  t.Type<
    SubstanceReferenceInformationGeneElement,
    SubstanceReferenceInformationGeneElementOutputType
  >,
  SubstanceReferenceInformationGeneElement,
  SubstanceReferenceInformationGeneElementOutputType
> = t.recursion<
  SubstanceReferenceInformationGeneElement,
  SubstanceReferenceInformationGeneElementOutputType
>("SubstanceReferenceInformationGeneElement", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        element: Identifier,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        source: t.array(Reference),
        /** Todo */
        type: CodeableConcept
      })
    ],
    "SubstanceReferenceInformationGeneElement"
  )
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationGene {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  geneSequenceOrigin?: CodeableConcept;
  /** Todo */
  gene?: CodeableConcept;
  /** Todo */
  source?: Reference[];
}

export interface SubstanceReferenceInformationGeneOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  geneSequenceOrigin?: CodeableConceptOutputType;
  /** Todo */
  gene?: CodeableConceptOutputType;
  /** Todo */
  source?: ReferenceOutputType[];
}

export const SubstanceReferenceInformationGene: t.RecursiveType<
  t.Type<
    SubstanceReferenceInformationGene,
    SubstanceReferenceInformationGeneOutputType
  >,
  SubstanceReferenceInformationGene,
  SubstanceReferenceInformationGeneOutputType
> = t.recursion<
  SubstanceReferenceInformationGene,
  SubstanceReferenceInformationGeneOutputType
>("SubstanceReferenceInformationGene", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Todo */
        gene: CodeableConcept,
        /** Todo */
        geneSequenceOrigin: CodeableConcept,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        source: t.array(Reference)
      })
    ],
    "SubstanceReferenceInformationGene"
  )
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationClassification {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  domain?: CodeableConcept;
  /** Todo */
  classification?: CodeableConcept;
  /** Todo */
  subtype?: CodeableConcept[];
  /** Todo */
  source?: Reference[];
}

export interface SubstanceReferenceInformationClassificationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  domain?: CodeableConceptOutputType;
  /** Todo */
  classification?: CodeableConceptOutputType;
  /** Todo */
  subtype?: CodeableConceptOutputType[];
  /** Todo */
  source?: ReferenceOutputType[];
}

export const SubstanceReferenceInformationClassification: t.RecursiveType<
  t.Type<
    SubstanceReferenceInformationClassification,
    SubstanceReferenceInformationClassificationOutputType
  >,
  SubstanceReferenceInformationClassification,
  SubstanceReferenceInformationClassificationOutputType
> = t.recursion<
  SubstanceReferenceInformationClassification,
  SubstanceReferenceInformationClassificationOutputType
>("SubstanceReferenceInformationClassification", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        classification: CodeableConcept,
        /** Todo */
        domain: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        source: t.array(Reference),
        /** Todo */
        subtype: t.array(CodeableConcept)
      })
    ],
    "SubstanceReferenceInformationClassification"
  )
);

/**
 * Todo
 */
export interface SubstanceReferenceInformation {
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
  /** Todo */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Todo */
  gene?: SubstanceReferenceInformationGene[];
  /** Todo */
  geneElement?: SubstanceReferenceInformationGeneElement[];
  /** Todo */
  classification?: SubstanceReferenceInformationClassification[];
  /** Todo */
  target?: SubstanceReferenceInformationTarget[];
}

export interface SubstanceReferenceInformationOutputType {
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
  /** Todo */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Todo */
  gene?: SubstanceReferenceInformationGeneOutputType[];
  /** Todo */
  geneElement?: SubstanceReferenceInformationGeneElementOutputType[];
  /** Todo */
  classification?: SubstanceReferenceInformationClassificationOutputType[];
  /** Todo */
  target?: SubstanceReferenceInformationTargetOutputType[];
}

export const SubstanceReferenceInformation: t.RecursiveType<
  t.Type<
    SubstanceReferenceInformation,
    SubstanceReferenceInformationOutputType
  >,
  SubstanceReferenceInformation,
  SubstanceReferenceInformationOutputType
> = t.recursion<
  SubstanceReferenceInformation,
  SubstanceReferenceInformationOutputType
>("SubstanceReferenceInformation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        classification: t.array(SubstanceReferenceInformationClassification),
        /** Todo */
        comment: primitives.R4.string,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Todo */
        gene: t.array(SubstanceReferenceInformationGene),
        /** Todo */
        geneElement: t.array(SubstanceReferenceInformationGeneElement),
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
        /** Todo */
        target: t.array(SubstanceReferenceInformationTarget),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "SubstanceReferenceInformation"
  )
);
