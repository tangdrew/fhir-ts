/**
 * BiologicallyDerivedProduct Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Product storage
 */
export interface BiologicallyDerivedProductStorage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of storage */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Storage temperature */
  temperature?: t.TypeOf<primitives.R4.DecimalType>;
  /** farenheit | celsius | kelvin */
  scale?: t.TypeOf<primitives.R4.CodeType>;
  /** Storage timeperiod */
  duration?: Period;
}

export interface BiologicallyDerivedProductStorageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of storage */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Storage temperature */
  temperature?: t.OutputOf<primitives.R4.DecimalType>;
  /** farenheit | celsius | kelvin */
  scale?: t.OutputOf<primitives.R4.CodeType>;
  /** Storage timeperiod */
  duration?: PeriodOutputType;
}

export const BiologicallyDerivedProductStorage: t.RecursiveType<
  t.Type<
    BiologicallyDerivedProductStorage,
    BiologicallyDerivedProductStorageOutputType
  >,
  BiologicallyDerivedProductStorage,
  BiologicallyDerivedProductStorageOutputType
> = t.recursion<
  BiologicallyDerivedProductStorage,
  BiologicallyDerivedProductStorageOutputType
>("BiologicallyDerivedProductStorage", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Description of storage */
        description: primitives.R4.string,
        /** Storage timeperiod */
        duration: Period,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** farenheit | celsius | kelvin */
        scale: primitives.R4.code,
        /** Storage temperature */
        temperature: primitives.R4.decimal
      })
    ],
    "BiologicallyDerivedProductStorage"
  )
);

/**
 * Any processing of the product during collection
 */
export interface BiologicallyDerivedProductProcessing {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of of processing */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Procesing code */
  procedure?: CodeableConcept;
  /** Substance added during processing */
  additive?: Reference;
  /** Time of processing */
  time?: t.TypeOf<primitives.R4.DateTimeType> | Period;
}

export interface BiologicallyDerivedProductProcessingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of of processing */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Procesing code */
  procedure?: CodeableConceptOutputType;
  /** Substance added during processing */
  additive?: ReferenceOutputType;
  /** Time of processing */
  time?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
}

export const BiologicallyDerivedProductProcessing: t.RecursiveType<
  t.Type<
    BiologicallyDerivedProductProcessing,
    BiologicallyDerivedProductProcessingOutputType
  >,
  BiologicallyDerivedProductProcessing,
  BiologicallyDerivedProductProcessingOutputType
> = t.recursion<
  BiologicallyDerivedProductProcessing,
  BiologicallyDerivedProductProcessingOutputType
>("BiologicallyDerivedProductProcessing", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Substance added during processing */
        additive: Reference,
        /** Description of of processing */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Procesing code */
        procedure: CodeableConcept,
        /** Time of processing */
        time: t.union([primitives.R4.dateTime, Period])
      })
    ],
    "BiologicallyDerivedProductProcessing"
  )
);

/**
 * Any manipulation of product post-collection
 */
export interface BiologicallyDerivedProductManipulation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Description of manipulation */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Time of manipulation */
  time?: t.TypeOf<primitives.R4.DateTimeType> | Period;
}

export interface BiologicallyDerivedProductManipulationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Description of manipulation */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Time of manipulation */
  time?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
}

export const BiologicallyDerivedProductManipulation: t.RecursiveType<
  t.Type<
    BiologicallyDerivedProductManipulation,
    BiologicallyDerivedProductManipulationOutputType
  >,
  BiologicallyDerivedProductManipulation,
  BiologicallyDerivedProductManipulationOutputType
> = t.recursion<
  BiologicallyDerivedProductManipulation,
  BiologicallyDerivedProductManipulationOutputType
>("BiologicallyDerivedProductManipulation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Description of manipulation */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Time of manipulation */
        time: t.union([primitives.R4.dateTime, Period])
      })
    ],
    "BiologicallyDerivedProductManipulation"
  )
);

/**
 * How this product was collected
 */
export interface BiologicallyDerivedProductCollection {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Individual performing collection */
  collector?: Reference;
  /** Who is product from */
  source?: Reference;
  /** Time of product collection */
  collected?: t.TypeOf<primitives.R4.DateTimeType> | Period;
}

export interface BiologicallyDerivedProductCollectionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Individual performing collection */
  collector?: ReferenceOutputType;
  /** Who is product from */
  source?: ReferenceOutputType;
  /** Time of product collection */
  collected?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
}

export const BiologicallyDerivedProductCollection: t.RecursiveType<
  t.Type<
    BiologicallyDerivedProductCollection,
    BiologicallyDerivedProductCollectionOutputType
  >,
  BiologicallyDerivedProductCollection,
  BiologicallyDerivedProductCollectionOutputType
> = t.recursion<
  BiologicallyDerivedProductCollection,
  BiologicallyDerivedProductCollectionOutputType
>("BiologicallyDerivedProductCollection", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Time of product collection */
        collected: t.union([primitives.R4.dateTime, Period]),
        /** Individual performing collection */
        collector: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Who is product from */
        source: Reference
      })
    ],
    "BiologicallyDerivedProductCollection"
  )
);

/**
 * A material substance originating from a biological entity
 */
export interface BiologicallyDerivedProduct {
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
  /** External ids for this item */
  identifier?: Identifier[];
  /** organ | tissue | fluid | cells | biologicalAgent */
  productCategory?: t.TypeOf<primitives.R4.CodeType>;
  /** What this biologically derived product is */
  productCode?: CodeableConcept;
  /** available | unavailable */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Procedure request */
  request?: Reference[];
  /** The amount of this biologically derived product */
  quantity?: t.TypeOf<primitives.R4.IntegerType>;
  /** BiologicallyDerivedProduct parent */
  parent?: Reference[];
  /** How this product was collected */
  collection?: BiologicallyDerivedProductCollection;
  /** Any processing of the product during collection */
  processing?: BiologicallyDerivedProductProcessing[];
  /** Any manipulation of product post-collection */
  manipulation?: BiologicallyDerivedProductManipulation;
  /** Product storage */
  storage?: BiologicallyDerivedProductStorage[];
}

export interface BiologicallyDerivedProductOutputType {
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
  /** External ids for this item */
  identifier?: IdentifierOutputType[];
  /** organ | tissue | fluid | cells | biologicalAgent */
  productCategory?: t.OutputOf<primitives.R4.CodeType>;
  /** What this biologically derived product is */
  productCode?: CodeableConceptOutputType;
  /** available | unavailable */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Procedure request */
  request?: ReferenceOutputType[];
  /** The amount of this biologically derived product */
  quantity?: t.OutputOf<primitives.R4.IntegerType>;
  /** BiologicallyDerivedProduct parent */
  parent?: ReferenceOutputType[];
  /** How this product was collected */
  collection?: BiologicallyDerivedProductCollectionOutputType;
  /** Any processing of the product during collection */
  processing?: BiologicallyDerivedProductProcessingOutputType[];
  /** Any manipulation of product post-collection */
  manipulation?: BiologicallyDerivedProductManipulationOutputType;
  /** Product storage */
  storage?: BiologicallyDerivedProductStorageOutputType[];
}

export const BiologicallyDerivedProduct: t.RecursiveType<
  t.Type<BiologicallyDerivedProduct, BiologicallyDerivedProductOutputType>,
  BiologicallyDerivedProduct,
  BiologicallyDerivedProductOutputType
> = t.recursion<
  BiologicallyDerivedProduct,
  BiologicallyDerivedProductOutputType
>("BiologicallyDerivedProduct", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** How this product was collected */
        collection: BiologicallyDerivedProductCollection,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External ids for this item */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Any manipulation of product post-collection */
        manipulation: BiologicallyDerivedProductManipulation,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** BiologicallyDerivedProduct parent */
        parent: t.array(Reference),
        /** Any processing of the product during collection */
        processing: t.array(BiologicallyDerivedProductProcessing),
        /** organ | tissue | fluid | cells | biologicalAgent */
        productCategory: primitives.R4.code,
        /** What this biologically derived product is */
        productCode: CodeableConcept,
        /** The amount of this biologically derived product */
        quantity: primitives.R4.integer,
        /** Procedure request */
        request: t.array(Reference),
        /** available | unavailable */
        status: primitives.R4.code,
        /** Product storage */
        storage: t.array(BiologicallyDerivedProductStorage),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "BiologicallyDerivedProduct"
  )
);
