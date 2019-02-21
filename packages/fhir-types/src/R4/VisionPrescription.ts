/**
 * VisionPrescription Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Eye alignment compensation
 */
export interface VisionPrescriptionLensSpecificationPrism {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Amount of adjustment */
  amount: t.TypeOf<primitives.R4.DecimalType>;
  /** up | down | in | out */
  base: t.TypeOf<primitives.R4.CodeType>;
}

export interface VisionPrescriptionLensSpecificationPrismOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Amount of adjustment */
  amount: t.OutputOf<primitives.R4.DecimalType>;
  /** up | down | in | out */
  base: t.OutputOf<primitives.R4.CodeType>;
}

export const VisionPrescriptionLensSpecificationPrism: t.RecursiveType<
  t.Type<
    VisionPrescriptionLensSpecificationPrism,
    VisionPrescriptionLensSpecificationPrismOutputType
  >,
  VisionPrescriptionLensSpecificationPrism,
  VisionPrescriptionLensSpecificationPrismOutputType
> = t.recursion<
  VisionPrescriptionLensSpecificationPrism,
  VisionPrescriptionLensSpecificationPrismOutputType
>("VisionPrescriptionLensSpecificationPrism", () =>
  t.intersection(
    [
      t.type({
        /** Amount of adjustment */
        amount: primitives.R4.decimal,
        /** up | down | in | out */
        base: primitives.R4.code
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "VisionPrescriptionLensSpecificationPrism"
  )
);

/**
 * Vision lens authorization
 */
export interface VisionPrescriptionLensSpecification {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Product to be supplied */
  product: CodeableConcept;
  /** right | left */
  eye: t.TypeOf<primitives.R4.CodeType>;
  /** Power of the lens */
  sphere?: t.TypeOf<primitives.R4.DecimalType>;
  /** Lens power for astigmatism */
  cylinder?: t.TypeOf<primitives.R4.DecimalType>;
  /** Lens meridian which contain no power for astigmatism */
  axis?: t.TypeOf<primitives.R4.IntegerType>;
  /** Eye alignment compensation */
  prism?: VisionPrescriptionLensSpecificationPrism[];
  /** Added power for multifocal levels */
  add?: t.TypeOf<primitives.R4.DecimalType>;
  /** Contact lens power */
  power?: t.TypeOf<primitives.R4.DecimalType>;
  /** Contact lens back curvature */
  backCurve?: t.TypeOf<primitives.R4.DecimalType>;
  /** Contact lens diameter */
  diameter?: t.TypeOf<primitives.R4.DecimalType>;
  /** Lens wear duration */
  duration?: Quantity;
  /** Color required */
  color?: t.TypeOf<primitives.R4.StringType>;
  /** Brand required */
  brand?: t.TypeOf<primitives.R4.StringType>;
  /** Notes for coatings */
  note?: Annotation[];
}

export interface VisionPrescriptionLensSpecificationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Product to be supplied */
  product: CodeableConceptOutputType;
  /** right | left */
  eye: t.OutputOf<primitives.R4.CodeType>;
  /** Power of the lens */
  sphere?: t.OutputOf<primitives.R4.DecimalType>;
  /** Lens power for astigmatism */
  cylinder?: t.OutputOf<primitives.R4.DecimalType>;
  /** Lens meridian which contain no power for astigmatism */
  axis?: t.OutputOf<primitives.R4.IntegerType>;
  /** Eye alignment compensation */
  prism?: VisionPrescriptionLensSpecificationPrismOutputType[];
  /** Added power for multifocal levels */
  add?: t.OutputOf<primitives.R4.DecimalType>;
  /** Contact lens power */
  power?: t.OutputOf<primitives.R4.DecimalType>;
  /** Contact lens back curvature */
  backCurve?: t.OutputOf<primitives.R4.DecimalType>;
  /** Contact lens diameter */
  diameter?: t.OutputOf<primitives.R4.DecimalType>;
  /** Lens wear duration */
  duration?: QuantityOutputType;
  /** Color required */
  color?: t.OutputOf<primitives.R4.StringType>;
  /** Brand required */
  brand?: t.OutputOf<primitives.R4.StringType>;
  /** Notes for coatings */
  note?: AnnotationOutputType[];
}

export const VisionPrescriptionLensSpecification: t.RecursiveType<
  t.Type<
    VisionPrescriptionLensSpecification,
    VisionPrescriptionLensSpecificationOutputType
  >,
  VisionPrescriptionLensSpecification,
  VisionPrescriptionLensSpecificationOutputType
> = t.recursion<
  VisionPrescriptionLensSpecification,
  VisionPrescriptionLensSpecificationOutputType
>("VisionPrescriptionLensSpecification", () =>
  t.intersection(
    [
      t.type({
        /** right | left */
        eye: primitives.R4.code,
        /** Product to be supplied */
        product: CodeableConcept
      }),
      t.partial({
        /** Added power for multifocal levels */
        add: primitives.R4.decimal,
        /** Lens meridian which contain no power for astigmatism */
        axis: primitives.R4.integer,
        /** Contact lens back curvature */
        backCurve: primitives.R4.decimal,
        /** Brand required */
        brand: primitives.R4.string,
        /** Color required */
        color: primitives.R4.string,
        /** Lens power for astigmatism */
        cylinder: primitives.R4.decimal,
        /** Contact lens diameter */
        diameter: primitives.R4.decimal,
        /** Lens wear duration */
        duration: Quantity,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Notes for coatings */
        note: t.array(Annotation),
        /** Contact lens power */
        power: primitives.R4.decimal,
        /** Eye alignment compensation */
        prism: t.array(VisionPrescriptionLensSpecificationPrism),
        /** Power of the lens */
        sphere: primitives.R4.decimal
      })
    ],
    "VisionPrescriptionLensSpecification"
  )
);

/**
 * Prescription for vision correction products for a patient
 */
export interface VisionPrescription {
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
  /** Business Identifier for vision prescription */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Response creation date */
  created: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who prescription is for */
  patient: Reference;
  /** Created during encounter / admission / stay */
  encounter?: Reference;
  /** When prescription was authorized */
  dateWritten: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who authorized the vision prescription */
  prescriber: Reference;
  /** Vision lens authorization */
  lensSpecification: VisionPrescriptionLensSpecification[];
}

export interface VisionPrescriptionOutputType {
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
  /** Business Identifier for vision prescription */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Response creation date */
  created: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who prescription is for */
  patient: ReferenceOutputType;
  /** Created during encounter / admission / stay */
  encounter?: ReferenceOutputType;
  /** When prescription was authorized */
  dateWritten: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who authorized the vision prescription */
  prescriber: ReferenceOutputType;
  /** Vision lens authorization */
  lensSpecification: VisionPrescriptionLensSpecificationOutputType[];
}

export const VisionPrescription: t.RecursiveType<
  t.Type<VisionPrescription, VisionPrescriptionOutputType>,
  VisionPrescription,
  VisionPrescriptionOutputType
> = t.recursion<VisionPrescription, VisionPrescriptionOutputType>(
  "VisionPrescription",
  () =>
    t.intersection(
      [
        t.type({
          /** Response creation date */
          created: primitives.R4.dateTime,
          /** When prescription was authorized */
          dateWritten: primitives.R4.dateTime,
          /** Vision lens authorization */
          lensSpecification: t.array(VisionPrescriptionLensSpecification),
          /** Who prescription is for */
          patient: Reference,
          /** Who authorized the vision prescription */
          prescriber: Reference,
          /** active | cancelled | draft | entered-in-error */
          status: primitives.R4.code
        }),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Created during encounter / admission / stay */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifier for vision prescription */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "VisionPrescription"
    )
);
