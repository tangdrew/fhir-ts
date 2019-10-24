/**
 * SubstanceReferenceInformation Module
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
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Todo
 */
export interface SubstanceReferenceInformation {
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
  /** Todo */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * Todo
 */
export const SubstanceReferenceInformation: t.Type<
  SubstanceReferenceInformation
> = t.recursion<SubstanceReferenceInformation>(
  "SubstanceReferenceInformation",
  () =>
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
        /** Todo */
        comment: primitives.R4.string,
        /** Extension of comment element */
        _comment: Element
      })
    ])
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationGene {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Todo
 */
export const SubstanceReferenceInformationGene: t.Type<
  SubstanceReferenceInformationGene
> = t.recursion<SubstanceReferenceInformationGene>(
  "SubstanceReferenceInformationGene",
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
        /** Todo */
        geneSequenceOrigin: CodeableConcept,
        /** Todo */
        gene: CodeableConcept,
        /** Todo */
        source: t.array(Reference)
      })
    ])
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationGeneElement {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Todo
 */
export const SubstanceReferenceInformationGeneElement: t.Type<
  SubstanceReferenceInformationGeneElement
> = t.recursion<SubstanceReferenceInformationGeneElement>(
  "SubstanceReferenceInformationGeneElement",
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
        /** Todo */
        type: CodeableConcept,
        /** Todo */
        element: Identifier,
        /** Todo */
        source: t.array(Reference)
      })
    ])
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationClassification {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Todo
 */
export const SubstanceReferenceInformationClassification: t.Type<
  SubstanceReferenceInformationClassification
> = t.recursion<SubstanceReferenceInformationClassification>(
  "SubstanceReferenceInformationClassification",
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
        /** Todo */
        domain: CodeableConcept,
        /** Todo */
        classification: CodeableConcept,
        /** Todo */
        subtype: t.array(CodeableConcept),
        /** Todo */
        source: t.array(Reference)
      })
    ])
);

/**
 * Todo
 */
export interface SubstanceReferenceInformationTarget {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
  amountQuantity?: Quantity;
  /** Todo */
  amountRange?: Range;
  /** Todo */
  amountString?: string;
  /** Extension of amountString element */
  _amountString?: Element;
  /** Todo */
  amountType?: CodeableConcept;
  /** Todo */
  source?: Reference[];
}
/**
 * Todo
 */
export const SubstanceReferenceInformationTarget: t.Type<
  SubstanceReferenceInformationTarget
> = t.recursion<SubstanceReferenceInformationTarget>(
  "SubstanceReferenceInformationTarget",
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
        /** Todo */
        target: Identifier,
        /** Todo */
        type: CodeableConcept,
        /** Todo */
        interaction: CodeableConcept,
        /** Todo */
        organism: CodeableConcept,
        /** Todo */
        organismType: CodeableConcept,
        /** Todo */
        amountQuantity: Quantity,
        /** Todo */
        amountRange: Range,
        /** Todo */
        amountString: primitives.R4.string,
        /** Extension of amountString element */
        _amountString: Element,
        /** Todo */
        amountType: CodeableConcept,
        /** Todo */
        source: t.array(Reference)
      })
    ])
);
