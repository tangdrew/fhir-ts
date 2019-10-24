/**
 * SubstancePolymer Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { SubstanceAmount } from "./SubstanceAmount";

/**
 * Todo
 */
export interface SubstancePolymer {
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
  class?: CodeableConcept;
  /** Todo */
  geometry?: CodeableConcept;
  /** Todo */
  copolymerConnectivity?: CodeableConcept[];
  /** Todo */
  modification?: string[];
  /** Extension of modification element */
  _modification?: Element[];
}
/**
 * Todo
 */
export const SubstancePolymer: t.Type<SubstancePolymer> = t.recursion<
  SubstancePolymer
>("SubstancePolymer", () =>
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
      class: CodeableConcept,
      /** Todo */
      geometry: CodeableConcept,
      /** Todo */
      copolymerConnectivity: t.array(CodeableConcept),
      /** Todo */
      modification: t.array(primitives.R4.string),
      /** Extension of modification element */
      _modification: t.array(Element)
    })
  ])
);

/**
 * Todo
 */
export interface SubstancePolymerMonomerSet {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  ratioType?: CodeableConcept;
}
/**
 * Todo
 */
export const SubstancePolymerMonomerSet: t.Type<
  SubstancePolymerMonomerSet
> = t.recursion<SubstancePolymerMonomerSet>("SubstancePolymerMonomerSet", () =>
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
      ratioType: CodeableConcept
    })
  ])
);

/**
 * Todo
 */
export interface SubstancePolymerMonomerSetStartingMaterial {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  material?: CodeableConcept;
  /** Todo */
  type?: CodeableConcept;
  /** Todo */
  isDefining?: boolean;
  /** Extension of isDefining element */
  _isDefining?: Element;
  /** Todo */
  amount?: SubstanceAmount;
}
/**
 * Todo
 */
export const SubstancePolymerMonomerSetStartingMaterial: t.Type<
  SubstancePolymerMonomerSetStartingMaterial
> = t.recursion<SubstancePolymerMonomerSetStartingMaterial>(
  "SubstancePolymerMonomerSetStartingMaterial",
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
        material: CodeableConcept,
        /** Todo */
        type: CodeableConcept,
        /** Todo */
        isDefining: primitives.R4.boolean,
        /** Extension of isDefining element */
        _isDefining: Element,
        /** Todo */
        amount: SubstanceAmount
      })
    ])
);

/**
 * Todo
 */
export interface SubstancePolymerRepeat {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  numberOfUnits?: primitives.R4.integer;
  /** Extension of numberOfUnits element */
  _numberOfUnits?: Element;
  /** Todo */
  averageMolecularFormula?: string;
  /** Extension of averageMolecularFormula element */
  _averageMolecularFormula?: Element;
  /** Todo */
  repeatUnitAmountType?: CodeableConcept;
}
/**
 * Todo
 */
export const SubstancePolymerRepeat: t.Type<
  SubstancePolymerRepeat
> = t.recursion<SubstancePolymerRepeat>("SubstancePolymerRepeat", () =>
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
      numberOfUnits: primitives.R4.integer,
      /** Extension of numberOfUnits element */
      _numberOfUnits: Element,
      /** Todo */
      averageMolecularFormula: primitives.R4.string,
      /** Extension of averageMolecularFormula element */
      _averageMolecularFormula: Element,
      /** Todo */
      repeatUnitAmountType: CodeableConcept
    })
  ])
);

/**
 * Todo
 */
export interface SubstancePolymerRepeatRepeatUnit {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  orientationOfPolymerisation?: CodeableConcept;
  /** Todo */
  repeatUnit?: string;
  /** Extension of repeatUnit element */
  _repeatUnit?: Element;
  /** Todo */
  amount?: SubstanceAmount;
}
/**
 * Todo
 */
export const SubstancePolymerRepeatRepeatUnit: t.Type<
  SubstancePolymerRepeatRepeatUnit
> = t.recursion<SubstancePolymerRepeatRepeatUnit>(
  "SubstancePolymerRepeatRepeatUnit",
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
        orientationOfPolymerisation: CodeableConcept,
        /** Todo */
        repeatUnit: primitives.R4.string,
        /** Extension of repeatUnit element */
        _repeatUnit: Element,
        /** Todo */
        amount: SubstanceAmount
      })
    ])
);

/**
 * Todo
 */
export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  degree?: CodeableConcept;
  /** Todo */
  amount?: SubstanceAmount;
}
/**
 * Todo
 */
export const SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation: t.Type<
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
> = t.recursion<SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation>(
  "SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation",
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
        degree: CodeableConcept,
        /** Todo */
        amount: SubstanceAmount
      })
    ])
);

/**
 * Todo
 */
export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
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
  representation?: string;
  /** Extension of representation element */
  _representation?: Element;
  /** Todo */
  attachment?: Attachment;
}
/**
 * Todo
 */
export const SubstancePolymerRepeatRepeatUnitStructuralRepresentation: t.Type<
  SubstancePolymerRepeatRepeatUnitStructuralRepresentation
> = t.recursion<SubstancePolymerRepeatRepeatUnitStructuralRepresentation>(
  "SubstancePolymerRepeatRepeatUnitStructuralRepresentation",
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
        representation: primitives.R4.string,
        /** Extension of representation element */
        _representation: Element,
        /** Todo */
        attachment: Attachment
      })
    ])
);
