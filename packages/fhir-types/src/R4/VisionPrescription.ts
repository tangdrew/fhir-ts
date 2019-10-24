/**
 * VisionPrescription Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
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
 * Prescription for vision correction products for a patient
 */
export interface VisionPrescription {
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
  /** Business Identifier for vision prescription */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Response creation date */
  created: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Who prescription is for */
  patient: Reference;
  /** Created during encounter / admission / stay */
  encounter?: Reference;
  /** When prescription was authorized */
  dateWritten: primitives.R4.dateTime;
  /** Extension of dateWritten element */
  _dateWritten?: Element;
  /** Who authorized the vision prescription */
  prescriber: Reference;
}
/**
 * Prescription for vision correction products for a patient
 */
export const VisionPrescription: t.Type<VisionPrescription> = t.recursion<
  VisionPrescription
>("VisionPrescription", () =>
  t.intersection([
    t.type({
      /** active | cancelled | draft | entered-in-error */
      status: primitives.R4.code,
      /** Response creation date */
      created: primitives.R4.dateTime,
      /** Who prescription is for */
      patient: Reference,
      /** When prescription was authorized */
      dateWritten: primitives.R4.dateTime,
      /** Who authorized the vision prescription */
      prescriber: Reference
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
      /** Business Identifier for vision prescription */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Extension of created element */
      _created: Element,
      /** Created during encounter / admission / stay */
      encounter: Reference,
      /** Extension of dateWritten element */
      _dateWritten: Element
    })
  ])
);

/**
 * Vision lens authorization
 */
export interface VisionPrescriptionLensSpecification {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Product to be supplied */
  product: CodeableConcept;
  /** right | left */
  eye: primitives.R4.code;
  /** Extension of eye element */
  _eye?: Element;
  /** Power of the lens */
  sphere?: primitives.R4.decimal;
  /** Extension of sphere element */
  _sphere?: Element;
  /** Lens power for astigmatism */
  cylinder?: primitives.R4.decimal;
  /** Extension of cylinder element */
  _cylinder?: Element;
  /** Lens meridian which contain no power for astigmatism */
  axis?: primitives.R4.integer;
  /** Extension of axis element */
  _axis?: Element;
  /** Added power for multifocal levels */
  add?: primitives.R4.decimal;
  /** Extension of add element */
  _add?: Element;
  /** Contact lens power */
  power?: primitives.R4.decimal;
  /** Extension of power element */
  _power?: Element;
  /** Contact lens back curvature */
  backCurve?: primitives.R4.decimal;
  /** Extension of backCurve element */
  _backCurve?: Element;
  /** Contact lens diameter */
  diameter?: primitives.R4.decimal;
  /** Extension of diameter element */
  _diameter?: Element;
  /** Lens wear duration */
  duration?: Quantity;
  /** Color required */
  color?: string;
  /** Extension of color element */
  _color?: Element;
  /** Brand required */
  brand?: string;
  /** Extension of brand element */
  _brand?: Element;
  /** Notes for coatings */
  note?: Annotation[];
}
/**
 * Vision lens authorization
 */
export const VisionPrescriptionLensSpecification: t.Type<
  VisionPrescriptionLensSpecification
> = t.recursion<VisionPrescriptionLensSpecification>(
  "VisionPrescriptionLensSpecification",
  () =>
    t.intersection([
      t.type({
        /** Product to be supplied */
        product: CodeableConcept,
        /** right | left */
        eye: primitives.R4.code
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
        /** Extension of eye element */
        _eye: Element,
        /** Power of the lens */
        sphere: primitives.R4.decimal,
        /** Extension of sphere element */
        _sphere: Element,
        /** Lens power for astigmatism */
        cylinder: primitives.R4.decimal,
        /** Extension of cylinder element */
        _cylinder: Element,
        /** Lens meridian which contain no power for astigmatism */
        axis: primitives.R4.integer,
        /** Extension of axis element */
        _axis: Element,
        /** Added power for multifocal levels */
        add: primitives.R4.decimal,
        /** Extension of add element */
        _add: Element,
        /** Contact lens power */
        power: primitives.R4.decimal,
        /** Extension of power element */
        _power: Element,
        /** Contact lens back curvature */
        backCurve: primitives.R4.decimal,
        /** Extension of backCurve element */
        _backCurve: Element,
        /** Contact lens diameter */
        diameter: primitives.R4.decimal,
        /** Extension of diameter element */
        _diameter: Element,
        /** Lens wear duration */
        duration: Quantity,
        /** Color required */
        color: primitives.R4.string,
        /** Extension of color element */
        _color: Element,
        /** Brand required */
        brand: primitives.R4.string,
        /** Extension of brand element */
        _brand: Element,
        /** Notes for coatings */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Eye alignment compensation
 */
export interface VisionPrescriptionLensSpecificationPrism {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Amount of adjustment */
  amount: primitives.R4.decimal;
  /** Extension of amount element */
  _amount?: Element;
  /** up | down | in | out */
  base: primitives.R4.code;
  /** Extension of base element */
  _base?: Element;
}
/**
 * Eye alignment compensation
 */
export const VisionPrescriptionLensSpecificationPrism: t.Type<
  VisionPrescriptionLensSpecificationPrism
> = t.recursion<VisionPrescriptionLensSpecificationPrism>(
  "VisionPrescriptionLensSpecificationPrism",
  () =>
    t.intersection([
      t.type({
        /** Amount of adjustment */
        amount: primitives.R4.decimal,
        /** up | down | in | out */
        base: primitives.R4.code
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
        /** Extension of amount element */
        _amount: Element,
        /** Extension of base element */
        _base: Element
      })
    ])
);
