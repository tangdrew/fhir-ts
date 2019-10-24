/**
 * Specimen Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Sample for analysis
 */
export interface Specimen {
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
  /** External Identifier */
  identifier?: Identifier[];
  /** Identifier assigned by the lab */
  accessionIdentifier?: Identifier;
  /** available | unavailable | unsatisfactory | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Kind of material that forms the specimen */
  type?: CodeableConcept;
  /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device */
  subject?: Reference;
  /** The time when specimen was received for processing */
  receivedTime?: primitives.R4.dateTime;
  /** Extension of receivedTime element */
  _receivedTime?: Element;
  /** Specimen from which this specimen originated */
  parent?: Reference[];
  /** Why the specimen was collected */
  request?: Reference[];
  /** State of the specimen */
  condition?: CodeableConcept[];
  /** Comments */
  note?: Annotation[];
}
/**
 * Sample for analysis
 */
export const Specimen: t.Type<Specimen> = t.recursion<Specimen>(
  "Specimen",
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
        /** External Identifier */
        identifier: t.array(Identifier),
        /** Identifier assigned by the lab */
        accessionIdentifier: Identifier,
        /** available | unavailable | unsatisfactory | entered-in-error */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** Kind of material that forms the specimen */
        type: CodeableConcept,
        /** Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device */
        subject: Reference,
        /** The time when specimen was received for processing */
        receivedTime: primitives.R4.dateTime,
        /** Extension of receivedTime element */
        _receivedTime: Element,
        /** Specimen from which this specimen originated */
        parent: t.array(Reference),
        /** Why the specimen was collected */
        request: t.array(Reference),
        /** State of the specimen */
        condition: t.array(CodeableConcept),
        /** Comments */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Collection details
 */
export interface SpecimenCollection {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Who collected the specimen */
  collector?: Reference;
  /** Collection time */
  collectedDateTime?: primitives.R4.dateTime;
  /** Extension of collectedDateTime element */
  _collectedDateTime?: Element;
  /** Collection time */
  collectedPeriod?: Period;
  /** How long it took to collect specimen */
  duration?: Duration;
  /** The quantity of specimen collected */
  quantity?: Quantity;
  /** Technique used to perform collection */
  method?: CodeableConcept;
  /** Anatomical collection site */
  bodySite?: CodeableConcept;
  /** Whether or how long patient abstained from food and/or drink */
  fastingstatusCodeableConcept?: CodeableConcept;
  /** Whether or how long patient abstained from food and/or drink */
  fastingstatusDuration?: Duration;
}
/**
 * Collection details
 */
export const SpecimenCollection: t.Type<SpecimenCollection> = t.recursion<
  SpecimenCollection
>("SpecimenCollection", () =>
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
      /** Who collected the specimen */
      collector: Reference,
      /** Collection time */
      collectedDateTime: primitives.R4.dateTime,
      /** Extension of collectedDateTime element */
      _collectedDateTime: Element,
      /** Collection time */
      collectedPeriod: Period,
      /** How long it took to collect specimen */
      duration: Duration,
      /** The quantity of specimen collected */
      quantity: Quantity,
      /** Technique used to perform collection */
      method: CodeableConcept,
      /** Anatomical collection site */
      bodySite: CodeableConcept,
      /** Whether or how long patient abstained from food and/or drink */
      fastingstatusCodeableConcept: CodeableConcept,
      /** Whether or how long patient abstained from food and/or drink */
      fastingstatusDuration: Duration
    })
  ])
);

/**
 * Processing and processing step details
 */
export interface SpecimenProcessing {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Textual description of procedure */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Indicates the treatment step  applied to the specimen */
  procedure?: CodeableConcept;
  /** Material used in the processing step */
  additive?: Reference[];
  /** Date and time of specimen processing */
  timeDateTime?: primitives.R4.dateTime;
  /** Extension of timeDateTime element */
  _timeDateTime?: Element;
  /** Date and time of specimen processing */
  timePeriod?: Period;
}
/**
 * Processing and processing step details
 */
export const SpecimenProcessing: t.Type<SpecimenProcessing> = t.recursion<
  SpecimenProcessing
>("SpecimenProcessing", () =>
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
      /** Textual description of procedure */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Indicates the treatment step  applied to the specimen */
      procedure: CodeableConcept,
      /** Material used in the processing step */
      additive: t.array(Reference),
      /** Date and time of specimen processing */
      timeDateTime: primitives.R4.dateTime,
      /** Extension of timeDateTime element */
      _timeDateTime: Element,
      /** Date and time of specimen processing */
      timePeriod: Period
    })
  ])
);

/**
 * Direct container of specimen (tube/slide, etc.)
 */
export interface SpecimenContainer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Id for the container */
  identifier?: Identifier[];
  /** Textual description of the container */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Kind of container directly associated with specimen */
  type?: CodeableConcept;
  /** Container volume or size */
  capacity?: Quantity;
  /** Quantity of specimen within container */
  specimenQuantity?: Quantity;
  /** Additive associated with container */
  additiveCodeableConcept?: CodeableConcept;
  /** Additive associated with container */
  additiveReference?: Reference;
}
/**
 * Direct container of specimen (tube/slide, etc.)
 */
export const SpecimenContainer: t.Type<SpecimenContainer> = t.recursion<
  SpecimenContainer
>("SpecimenContainer", () =>
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
      /** Id for the container */
      identifier: t.array(Identifier),
      /** Textual description of the container */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Kind of container directly associated with specimen */
      type: CodeableConcept,
      /** Container volume or size */
      capacity: Quantity,
      /** Quantity of specimen within container */
      specimenQuantity: Quantity,
      /** Additive associated with container */
      additiveCodeableConcept: CodeableConcept,
      /** Additive associated with container */
      additiveReference: Reference
    })
  ])
);
