/**
 * SubstancePolymer Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { SubstanceAmount, SubstanceAmountOutputType } from "./SubstanceAmount";

/**
 * Todo
 */
export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  type?: CodeableConcept;
  /** Todo */
  representation?: t.TypeOf<primitives.R4.StringType>;
  /** Todo */
  attachment?: Attachment;
}

export interface SubstancePolymerRepeatRepeatUnitStructuralRepresentationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  type?: CodeableConceptOutputType;
  /** Todo */
  representation?: t.OutputOf<primitives.R4.StringType>;
  /** Todo */
  attachment?: AttachmentOutputType;
}

export const SubstancePolymerRepeatRepeatUnitStructuralRepresentation: t.RecursiveType<
  t.Type<
    SubstancePolymerRepeatRepeatUnitStructuralRepresentation,
    SubstancePolymerRepeatRepeatUnitStructuralRepresentationOutputType
  >,
  SubstancePolymerRepeatRepeatUnitStructuralRepresentation,
  SubstancePolymerRepeatRepeatUnitStructuralRepresentationOutputType
> = t.recursion<
  SubstancePolymerRepeatRepeatUnitStructuralRepresentation,
  SubstancePolymerRepeatRepeatUnitStructuralRepresentationOutputType
>("SubstancePolymerRepeatRepeatUnitStructuralRepresentation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        attachment: Attachment,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        representation: primitives.R4.string,
        /** Todo */
        type: CodeableConcept
      })
    ],
    "SubstancePolymerRepeatRepeatUnitStructuralRepresentation"
  )
);

/**
 * Todo
 */
export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  degree?: CodeableConcept;
  /** Todo */
  amount?: SubstanceAmount;
}

export interface SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  degree?: CodeableConceptOutputType;
  /** Todo */
  amount?: SubstanceAmountOutputType;
}

export const SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation: t.RecursiveType<
  t.Type<
    SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
    SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationOutputType
  >,
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationOutputType
> = t.recursion<
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation,
  SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationOutputType
>("SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        amount: SubstanceAmount,
        /** Todo */
        degree: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation"
  )
);

/**
 * Todo
 */
export interface SubstancePolymerRepeatRepeatUnit {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  orientationOfPolymerisation?: CodeableConcept;
  /** Todo */
  repeatUnit?: t.TypeOf<primitives.R4.StringType>;
  /** Todo */
  amount?: SubstanceAmount;
  /** Todo */
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation[];
  /** Todo */
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentation[];
}

export interface SubstancePolymerRepeatRepeatUnitOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  orientationOfPolymerisation?: CodeableConceptOutputType;
  /** Todo */
  repeatUnit?: t.OutputOf<primitives.R4.StringType>;
  /** Todo */
  amount?: SubstanceAmountOutputType;
  /** Todo */
  degreeOfPolymerisation?: SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisationOutputType[];
  /** Todo */
  structuralRepresentation?: SubstancePolymerRepeatRepeatUnitStructuralRepresentationOutputType[];
}

export const SubstancePolymerRepeatRepeatUnit: t.RecursiveType<
  t.Type<
    SubstancePolymerRepeatRepeatUnit,
    SubstancePolymerRepeatRepeatUnitOutputType
  >,
  SubstancePolymerRepeatRepeatUnit,
  SubstancePolymerRepeatRepeatUnitOutputType
> = t.recursion<
  SubstancePolymerRepeatRepeatUnit,
  SubstancePolymerRepeatRepeatUnitOutputType
>("SubstancePolymerRepeatRepeatUnit", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        amount: SubstanceAmount,
        /** Todo */
        degreeOfPolymerisation: t.array(
          SubstancePolymerRepeatRepeatUnitDegreeOfPolymerisation
        ),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        orientationOfPolymerisation: CodeableConcept,
        /** Todo */
        repeatUnit: primitives.R4.string,
        /** Todo */
        structuralRepresentation: t.array(
          SubstancePolymerRepeatRepeatUnitStructuralRepresentation
        )
      })
    ],
    "SubstancePolymerRepeatRepeatUnit"
  )
);

/**
 * Todo
 */
export interface SubstancePolymerRepeat {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  numberOfUnits?: t.TypeOf<primitives.R4.IntegerType>;
  /** Todo */
  averageMolecularFormula?: t.TypeOf<primitives.R4.StringType>;
  /** Todo */
  repeatUnitAmountType?: CodeableConcept;
  /** Todo */
  repeatUnit?: SubstancePolymerRepeatRepeatUnit[];
}

export interface SubstancePolymerRepeatOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  numberOfUnits?: t.OutputOf<primitives.R4.IntegerType>;
  /** Todo */
  averageMolecularFormula?: t.OutputOf<primitives.R4.StringType>;
  /** Todo */
  repeatUnitAmountType?: CodeableConceptOutputType;
  /** Todo */
  repeatUnit?: SubstancePolymerRepeatRepeatUnitOutputType[];
}

export const SubstancePolymerRepeat: t.RecursiveType<
  t.Type<SubstancePolymerRepeat, SubstancePolymerRepeatOutputType>,
  SubstancePolymerRepeat,
  SubstancePolymerRepeatOutputType
> = t.recursion<SubstancePolymerRepeat, SubstancePolymerRepeatOutputType>(
  "SubstancePolymerRepeat",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Todo */
          averageMolecularFormula: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Todo */
          numberOfUnits: primitives.R4.integer,
          /** Todo */
          repeatUnit: t.array(SubstancePolymerRepeatRepeatUnit),
          /** Todo */
          repeatUnitAmountType: CodeableConcept
        })
      ],
      "SubstancePolymerRepeat"
    )
);

/**
 * Todo
 */
export interface SubstancePolymerMonomerSetStartingMaterial {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  material?: CodeableConcept;
  /** Todo */
  type?: CodeableConcept;
  /** Todo */
  isDefining?: t.TypeOf<primitives.R4.BooleanType>;
  /** Todo */
  amount?: SubstanceAmount;
}

export interface SubstancePolymerMonomerSetStartingMaterialOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  material?: CodeableConceptOutputType;
  /** Todo */
  type?: CodeableConceptOutputType;
  /** Todo */
  isDefining?: t.OutputOf<primitives.R4.BooleanType>;
  /** Todo */
  amount?: SubstanceAmountOutputType;
}

export const SubstancePolymerMonomerSetStartingMaterial: t.RecursiveType<
  t.Type<
    SubstancePolymerMonomerSetStartingMaterial,
    SubstancePolymerMonomerSetStartingMaterialOutputType
  >,
  SubstancePolymerMonomerSetStartingMaterial,
  SubstancePolymerMonomerSetStartingMaterialOutputType
> = t.recursion<
  SubstancePolymerMonomerSetStartingMaterial,
  SubstancePolymerMonomerSetStartingMaterialOutputType
>("SubstancePolymerMonomerSetStartingMaterial", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Todo */
        amount: SubstanceAmount,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Todo */
        isDefining: primitives.R4.boolean,
        /** Todo */
        material: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        type: CodeableConcept
      })
    ],
    "SubstancePolymerMonomerSetStartingMaterial"
  )
);

/**
 * Todo
 */
export interface SubstancePolymerMonomerSet {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Todo */
  ratioType?: CodeableConcept;
  /** Todo */
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterial[];
}

export interface SubstancePolymerMonomerSetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Todo */
  ratioType?: CodeableConceptOutputType;
  /** Todo */
  startingMaterial?: SubstancePolymerMonomerSetStartingMaterialOutputType[];
}

export const SubstancePolymerMonomerSet: t.RecursiveType<
  t.Type<SubstancePolymerMonomerSet, SubstancePolymerMonomerSetOutputType>,
  SubstancePolymerMonomerSet,
  SubstancePolymerMonomerSetOutputType
> = t.recursion<
  SubstancePolymerMonomerSet,
  SubstancePolymerMonomerSetOutputType
>("SubstancePolymerMonomerSet", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Todo */
        ratioType: CodeableConcept,
        /** Todo */
        startingMaterial: t.array(SubstancePolymerMonomerSetStartingMaterial)
      })
    ],
    "SubstancePolymerMonomerSet"
  )
);

/**
 * Todo
 */
export interface SubstancePolymer {
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
  class?: CodeableConcept;
  /** Todo */
  geometry?: CodeableConcept;
  /** Todo */
  copolymerConnectivity?: CodeableConcept[];
  /** Todo */
  modification?: t.TypeOf<primitives.R4.StringType>[];
  /** Todo */
  monomerSet?: SubstancePolymerMonomerSet[];
  /** Todo */
  repeat?: SubstancePolymerRepeat[];
}

export interface SubstancePolymerOutputType {
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
  class?: CodeableConceptOutputType;
  /** Todo */
  geometry?: CodeableConceptOutputType;
  /** Todo */
  copolymerConnectivity?: CodeableConceptOutputType[];
  /** Todo */
  modification?: t.OutputOf<primitives.R4.StringType>[];
  /** Todo */
  monomerSet?: SubstancePolymerMonomerSetOutputType[];
  /** Todo */
  repeat?: SubstancePolymerRepeatOutputType[];
}

export const SubstancePolymer: t.RecursiveType<
  t.Type<SubstancePolymer, SubstancePolymerOutputType>,
  SubstancePolymer,
  SubstancePolymerOutputType
> = t.recursion<SubstancePolymer, SubstancePolymerOutputType>(
  "SubstancePolymer",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Todo */
          class: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Todo */
          copolymerConnectivity: t.array(CodeableConcept),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Todo */
          geometry: CodeableConcept,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Todo */
          modification: t.array(primitives.R4.string),
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Todo */
          monomerSet: t.array(SubstancePolymerMonomerSet),
          /** Todo */
          repeat: t.array(SubstancePolymerRepeat),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "SubstancePolymer"
    )
);
