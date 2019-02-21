/**
 * Specimen Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Processing and processing step details
 */
export interface SpecimenProcessing {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Textual description of procedure */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Indicates the treatment step  applied to the specimen */
  procedure?: CodeableConcept;
  /** Material used in the processing step */
  additive?: Reference[];
  /** Date and time of specimen processing */
  time?: t.TypeOf<primitives.R4.DateTimeType> | Period;
}

export interface SpecimenProcessingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Textual description of procedure */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Indicates the treatment step  applied to the specimen */
  procedure?: CodeableConceptOutputType;
  /** Material used in the processing step */
  additive?: ReferenceOutputType[];
  /** Date and time of specimen processing */
  time?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
}

export const SpecimenProcessing: t.RecursiveType<
  t.Type<SpecimenProcessing, SpecimenProcessingOutputType>,
  SpecimenProcessing,
  SpecimenProcessingOutputType
> = t.recursion<SpecimenProcessing, SpecimenProcessingOutputType>(
  "SpecimenProcessing",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Material used in the processing step */
          additive: t.array(Reference),
          /** Textual description of procedure */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Indicates the treatment step  applied to the specimen */
          procedure: CodeableConcept,
          /** Date and time of specimen processing */
          time: t.union([primitives.R4.dateTime, Period])
        })
      ],
      "SpecimenProcessing"
    )
);

/**
 * Direct container of specimen (tube/slide, etc.)
 */
export interface SpecimenContainer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Id for the container */
  identifier?: Identifier[];
  /** Textual description of the container */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Kind of container directly associated with specimen */
  type?: CodeableConcept;
  /** Container volume or size */
  capacity?: Quantity;
  /** Quantity of specimen within container */
  specimenQuantity?: Quantity;
  /** Additive associated with container */
  additive?: CodeableConcept | Reference;
}

export interface SpecimenContainerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Id for the container */
  identifier?: IdentifierOutputType[];
  /** Textual description of the container */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Kind of container directly associated with specimen */
  type?: CodeableConceptOutputType;
  /** Container volume or size */
  capacity?: QuantityOutputType;
  /** Quantity of specimen within container */
  specimenQuantity?: QuantityOutputType;
  /** Additive associated with container */
  additive?: CodeableConceptOutputType | ReferenceOutputType;
}

export const SpecimenContainer: t.RecursiveType<
  t.Type<SpecimenContainer, SpecimenContainerOutputType>,
  SpecimenContainer,
  SpecimenContainerOutputType
> = t.recursion<SpecimenContainer, SpecimenContainerOutputType>(
  "SpecimenContainer",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additive associated with container */
          additive: t.union([CodeableConcept, Reference]),
          /** Container volume or size */
          capacity: Quantity,
          /** Textual description of the container */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Id for the container */
          identifier: t.array(Identifier),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Quantity of specimen within container */
          specimenQuantity: Quantity,
          /** Kind of container directly associated with specimen */
          type: CodeableConcept
        })
      ],
      "SpecimenContainer"
    )
);

/**
 * Collection details
 */
export interface SpecimenCollection {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Who collected the specimen */
  collector?: Reference;
  /** Collection time */
  collected?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** How long it took to collect specimen */
  duration?: Duration;
  /** The quantity of specimen collected */
  quantity?: Quantity;
  /** Technique used to perform collection */
  method?: CodeableConcept;
  /** Anatomical collection site */
  bodySite?: CodeableConcept;
  /** Whether or how long patient abstained from food and/or drink */
  fastingstatus?: CodeableConcept | Duration;
}

export interface SpecimenCollectionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Who collected the specimen */
  collector?: ReferenceOutputType;
  /** Collection time */
  collected?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** How long it took to collect specimen */
  duration?: DurationOutputType;
  /** The quantity of specimen collected */
  quantity?: QuantityOutputType;
  /** Technique used to perform collection */
  method?: CodeableConceptOutputType;
  /** Anatomical collection site */
  bodySite?: CodeableConceptOutputType;
  /** Whether or how long patient abstained from food and/or drink */
  fastingstatus?: CodeableConceptOutputType | DurationOutputType;
}

export const SpecimenCollection: t.RecursiveType<
  t.Type<SpecimenCollection, SpecimenCollectionOutputType>,
  SpecimenCollection,
  SpecimenCollectionOutputType
> = t.recursion<SpecimenCollection, SpecimenCollectionOutputType>(
  "SpecimenCollection",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Anatomical collection site */
          bodySite: CodeableConcept,
          /** Collection time */
          collected: t.union([primitives.R4.dateTime, Period]),
          /** Who collected the specimen */
          collector: Reference,
          /** How long it took to collect specimen */
          duration: Duration,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Whether or how long patient abstained from food and/or drink */
          fastingstatus: t.union([CodeableConcept, Duration]),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Technique used to perform collection */
          method: CodeableConcept,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The quantity of specimen collected */
          quantity: Quantity
        })
      ],
      "SpecimenCollection"
    )
);

/**
 * Sample for analysis
 */
export interface Specimen {
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
  /** External Identifier */
  identifier?: Identifier[];
  /** Identifier assigned by the lab */
  accessionIdentifier?: Identifier;
  /** available | unavailable | unsatisfactory | entered-in-error */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Kind of material that forms the specimen */
  type?: CodeableConcept;
  /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device */
  subject?: Reference;
  /** The time when specimen was received for processing */
  receivedTime?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Specimen from which this specimen originated */
  parent?: Reference[];
  /** Why the specimen was collected */
  request?: Reference[];
  /** Collection details */
  collection?: SpecimenCollection;
  /** Processing and processing step details */
  processing?: SpecimenProcessing[];
  /** Direct container of specimen (tube/slide, etc.) */
  container?: SpecimenContainer[];
  /** State of the specimen */
  condition?: CodeableConcept[];
  /** Comments */
  note?: Annotation[];
}

export interface SpecimenOutputType {
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
  /** External Identifier */
  identifier?: IdentifierOutputType[];
  /** Identifier assigned by the lab */
  accessionIdentifier?: IdentifierOutputType;
  /** available | unavailable | unsatisfactory | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Kind of material that forms the specimen */
  type?: CodeableConceptOutputType;
  /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device */
  subject?: ReferenceOutputType;
  /** The time when specimen was received for processing */
  receivedTime?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Specimen from which this specimen originated */
  parent?: ReferenceOutputType[];
  /** Why the specimen was collected */
  request?: ReferenceOutputType[];
  /** Collection details */
  collection?: SpecimenCollectionOutputType;
  /** Processing and processing step details */
  processing?: SpecimenProcessingOutputType[];
  /** Direct container of specimen (tube/slide, etc.) */
  container?: SpecimenContainerOutputType[];
  /** State of the specimen */
  condition?: CodeableConceptOutputType[];
  /** Comments */
  note?: AnnotationOutputType[];
}

export const Specimen: t.RecursiveType<
  t.Type<Specimen, SpecimenOutputType>,
  Specimen,
  SpecimenOutputType
> = t.recursion<Specimen, SpecimenOutputType>("Specimen", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Identifier assigned by the lab */
        accessionIdentifier: Identifier,
        /** Collection details */
        collection: SpecimenCollection,
        /** State of the specimen */
        condition: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Direct container of specimen (tube/slide, etc.) */
        container: t.array(SpecimenContainer),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments */
        note: t.array(Annotation),
        /** Specimen from which this specimen originated */
        parent: t.array(Reference),
        /** Processing and processing step details */
        processing: t.array(SpecimenProcessing),
        /** The time when specimen was received for processing */
        receivedTime: primitives.R4.dateTime,
        /** Why the specimen was collected */
        request: t.array(Reference),
        /** available | unavailable | unsatisfactory | entered-in-error */
        status: primitives.R4.code,
        /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Kind of material that forms the specimen */
        type: CodeableConcept
      })
    ],
    "Specimen"
  )
);
