/**
 * BiologicallyDerivedProduct Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A material substance originating from a biological entity
 */
export interface BiologicallyDerivedProduct {
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
  /** External ids for this item */
  identifier?: Identifier[];
  /** organ | tissue | fluid | cells | biologicalAgent */
  productCategory?: primitives.R4.code;
  /** Extension of productCategory element */
  _productCategory?: Element;
  /** What this biologically derived product is */
  productCode?: CodeableConcept;
  /** available | unavailable */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Procedure request */
  request?: Reference[];
  /** The amount of this biologically derived product */
  quantity?: primitives.R4.integer;
  /** Extension of quantity element */
  _quantity?: Element;
  /** BiologicallyDerivedProduct parent */
  parent?: Reference[];
}
/**
 * A material substance originating from a biological entity
 */
export const BiologicallyDerivedProduct: t.Type<
  BiologicallyDerivedProduct
> = t.recursion<BiologicallyDerivedProduct>("BiologicallyDerivedProduct", () =>
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
      /** External ids for this item */
      identifier: t.array(Identifier),
      /** organ | tissue | fluid | cells | biologicalAgent */
      productCategory: primitives.R4.code,
      /** Extension of productCategory element */
      _productCategory: Element,
      /** What this biologically derived product is */
      productCode: CodeableConcept,
      /** available | unavailable */
      status: primitives.R4.code,
      /** Extension of status element */
      _status: Element,
      /** Procedure request */
      request: t.array(Reference),
      /** The amount of this biologically derived product */
      quantity: primitives.R4.integer,
      /** Extension of quantity element */
      _quantity: Element,
      /** BiologicallyDerivedProduct parent */
      parent: t.array(Reference)
    })
  ])
);

/**
 * How this product was collected
 */
export interface BiologicallyDerivedProductCollection {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Individual performing collection */
  collector?: Reference;
  /** Who is product from */
  source?: Reference;
  /** Time of product collection */
  collectedDateTime?: primitives.R4.dateTime;
  /** Extension of collectedDateTime element */
  _collectedDateTime?: Element;
  /** Time of product collection */
  collectedPeriod?: Period;
}
/**
 * How this product was collected
 */
export const BiologicallyDerivedProductCollection: t.Type<
  BiologicallyDerivedProductCollection
> = t.recursion<BiologicallyDerivedProductCollection>(
  "BiologicallyDerivedProductCollection",
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
        /** Individual performing collection */
        collector: Reference,
        /** Who is product from */
        source: Reference,
        /** Time of product collection */
        collectedDateTime: primitives.R4.dateTime,
        /** Extension of collectedDateTime element */
        _collectedDateTime: Element,
        /** Time of product collection */
        collectedPeriod: Period
      })
    ])
);

/**
 * Any processing of the product during collection
 */
export interface BiologicallyDerivedProductProcessing {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of of processing */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Procesing code */
  procedure?: CodeableConcept;
  /** Substance added during processing */
  additive?: Reference;
  /** Time of processing */
  timeDateTime?: primitives.R4.dateTime;
  /** Extension of timeDateTime element */
  _timeDateTime?: Element;
  /** Time of processing */
  timePeriod?: Period;
}
/**
 * Any processing of the product during collection
 */
export const BiologicallyDerivedProductProcessing: t.Type<
  BiologicallyDerivedProductProcessing
> = t.recursion<BiologicallyDerivedProductProcessing>(
  "BiologicallyDerivedProductProcessing",
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
        /** Description of of processing */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Procesing code */
        procedure: CodeableConcept,
        /** Substance added during processing */
        additive: Reference,
        /** Time of processing */
        timeDateTime: primitives.R4.dateTime,
        /** Extension of timeDateTime element */
        _timeDateTime: Element,
        /** Time of processing */
        timePeriod: Period
      })
    ])
);

/**
 * Any manipulation of product post-collection
 */
export interface BiologicallyDerivedProductManipulation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of manipulation */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Time of manipulation */
  timeDateTime?: primitives.R4.dateTime;
  /** Extension of timeDateTime element */
  _timeDateTime?: Element;
  /** Time of manipulation */
  timePeriod?: Period;
}
/**
 * Any manipulation of product post-collection
 */
export const BiologicallyDerivedProductManipulation: t.Type<
  BiologicallyDerivedProductManipulation
> = t.recursion<BiologicallyDerivedProductManipulation>(
  "BiologicallyDerivedProductManipulation",
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
        /** Description of manipulation */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Time of manipulation */
        timeDateTime: primitives.R4.dateTime,
        /** Extension of timeDateTime element */
        _timeDateTime: Element,
        /** Time of manipulation */
        timePeriod: Period
      })
    ])
);

/**
 * Product storage
 */
export interface BiologicallyDerivedProductStorage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of storage */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Storage temperature */
  temperature?: primitives.R4.decimal;
  /** Extension of temperature element */
  _temperature?: Element;
  /** farenheit | celsius | kelvin */
  scale?: primitives.R4.code;
  /** Extension of scale element */
  _scale?: Element;
  /** Storage timeperiod */
  duration?: Period;
}
/**
 * Product storage
 */
export const BiologicallyDerivedProductStorage: t.Type<
  BiologicallyDerivedProductStorage
> = t.recursion<BiologicallyDerivedProductStorage>(
  "BiologicallyDerivedProductStorage",
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
        /** Description of storage */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Storage temperature */
        temperature: primitives.R4.decimal,
        /** Extension of temperature element */
        _temperature: Element,
        /** farenheit | celsius | kelvin */
        scale: primitives.R4.code,
        /** Extension of scale element */
        _scale: Element,
        /** Storage timeperiod */
        duration: Period
      })
    ])
);
