/**
 * ImagingStudy Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A set of images produced in single study (one or more series of references images)
 */
export interface ImagingStudy {
  /** The type of resource */
  resourceType?: "ImagingStudy";
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
  /** Identifiers for the whole study */
  identifier?: Identifier[];
  /** registered | available | cancelled | entered-in-error | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** All series modality if actual acquisition modalities */
  modality?: Coding[];
  /** Who or what is the subject of the study */
  subject: Reference;
  /** Encounter with which this imaging study is associated */
  encounter?: Reference;
  /** When the study was started */
  started?: primitives.R4.dateTime;
  /** Extension of started element */
  _started?: Element;
  /** Request fulfilled */
  basedOn?: Reference[];
  /** Referring physician */
  referrer?: Reference;
  /** Who interpreted images */
  interpreter?: Reference[];
  /** Study access endpoint */
  endpoint?: Reference[];
  /** Number of Study Related Series */
  numberOfSeries?: primitives.R4.unsignedInt;
  /** Extension of numberOfSeries element */
  _numberOfSeries?: Element;
  /** Number of Study Related Instances */
  numberOfInstances?: primitives.R4.unsignedInt;
  /** Extension of numberOfInstances element */
  _numberOfInstances?: Element;
  /** The performed Procedure reference */
  procedureReference?: Reference;
  /** The performed procedure code */
  procedureCode?: CodeableConcept[];
  /** Where ImagingStudy occurred */
  location?: Reference;
  /** Why the study was requested */
  reasonCode?: CodeableConcept[];
  /** Why was study performed */
  reasonReference?: Reference[];
  /** User-defined comments */
  note?: Annotation[];
  /** Institution-generated description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * A set of images produced in single study (one or more series of references images)
 */
export const ImagingStudy: t.Type<ImagingStudy> = t.recursion<ImagingStudy>(
  "ImagingStudy",
  () =>
    t.intersection([
      t.type({
        /** registered | available | cancelled | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Who or what is the subject of the study */
        subject: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("ImagingStudy"),
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
        /** Identifiers for the whole study */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** All series modality if actual acquisition modalities */
        modality: t.array(Coding),
        /** Encounter with which this imaging study is associated */
        encounter: Reference,
        /** When the study was started */
        started: primitives.R4.dateTime,
        /** Extension of started element */
        _started: Element,
        /** Request fulfilled */
        basedOn: t.array(Reference),
        /** Referring physician */
        referrer: Reference,
        /** Who interpreted images */
        interpreter: t.array(Reference),
        /** Study access endpoint */
        endpoint: t.array(Reference),
        /** Number of Study Related Series */
        numberOfSeries: primitives.R4.unsignedInt,
        /** Extension of numberOfSeries element */
        _numberOfSeries: Element,
        /** Number of Study Related Instances */
        numberOfInstances: primitives.R4.unsignedInt,
        /** Extension of numberOfInstances element */
        _numberOfInstances: Element,
        /** The performed Procedure reference */
        procedureReference: Reference,
        /** The performed procedure code */
        procedureCode: t.array(CodeableConcept),
        /** Where ImagingStudy occurred */
        location: Reference,
        /** Why the study was requested */
        reasonCode: t.array(CodeableConcept),
        /** Why was study performed */
        reasonReference: t.array(Reference),
        /** User-defined comments */
        note: t.array(Annotation),
        /** Institution-generated description */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * Each study has one or more series of instances
 */
export interface ImagingStudySeries {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** DICOM Series Instance UID for the series */
  uid: primitives.R4.id;
  /** Extension of uid element */
  _uid?: Element;
  /** Numeric identifier of this series */
  number?: primitives.R4.unsignedInt;
  /** Extension of number element */
  _number?: Element;
  /** The modality of the instances in the series */
  modality: Coding;
  /** A short human readable summary of the series */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Number of Series Related Instances */
  numberOfInstances?: primitives.R4.unsignedInt;
  /** Extension of numberOfInstances element */
  _numberOfInstances?: Element;
  /** Series access endpoint */
  endpoint?: Reference[];
  /** Body part examined */
  bodySite?: Coding;
  /** Body part laterality */
  laterality?: Coding;
  /** Specimen imaged */
  specimen?: Reference[];
  /** When the series started */
  started?: primitives.R4.dateTime;
  /** Extension of started element */
  _started?: Element;
}
/**
 * Each study has one or more series of instances
 */
export const ImagingStudySeries: t.Type<ImagingStudySeries> = t.recursion<
  ImagingStudySeries
>("ImagingStudySeries", () =>
  t.intersection([
    t.type({
      /** DICOM Series Instance UID for the series */
      uid: primitives.R4.id,
      /** The modality of the instances in the series */
      modality: Coding
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
      /** Extension of uid element */
      _uid: Element,
      /** Numeric identifier of this series */
      number: primitives.R4.unsignedInt,
      /** Extension of number element */
      _number: Element,
      /** A short human readable summary of the series */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Number of Series Related Instances */
      numberOfInstances: primitives.R4.unsignedInt,
      /** Extension of numberOfInstances element */
      _numberOfInstances: Element,
      /** Series access endpoint */
      endpoint: t.array(Reference),
      /** Body part examined */
      bodySite: Coding,
      /** Body part laterality */
      laterality: Coding,
      /** Specimen imaged */
      specimen: t.array(Reference),
      /** When the series started */
      started: primitives.R4.dateTime,
      /** Extension of started element */
      _started: Element
    })
  ])
);

/**
 * Who performed the series
 */
export interface ImagingStudySeriesPerformer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of performance */
  function?: CodeableConcept;
  /** Who performed the series */
  actor: Reference;
}
/**
 * Who performed the series
 */
export const ImagingStudySeriesPerformer: t.Type<
  ImagingStudySeriesPerformer
> = t.recursion<ImagingStudySeriesPerformer>(
  "ImagingStudySeriesPerformer",
  () =>
    t.intersection([
      t.type({
        /** Who performed the series */
        actor: Reference
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
        /** Type of performance */
        function: CodeableConcept
      })
    ])
);

/**
 * A single SOP instance from the series
 */
export interface ImagingStudySeriesInstance {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** DICOM SOP Instance UID */
  uid: primitives.R4.id;
  /** Extension of uid element */
  _uid?: Element;
  /** DICOM class type */
  sopClass: Coding;
  /** The number of this instance in the series */
  number?: primitives.R4.unsignedInt;
  /** Extension of number element */
  _number?: Element;
  /** Description of instance */
  title?: string;
  /** Extension of title element */
  _title?: Element;
}
/**
 * A single SOP instance from the series
 */
export const ImagingStudySeriesInstance: t.Type<
  ImagingStudySeriesInstance
> = t.recursion<ImagingStudySeriesInstance>("ImagingStudySeriesInstance", () =>
  t.intersection([
    t.type({
      /** DICOM SOP Instance UID */
      uid: primitives.R4.id,
      /** DICOM class type */
      sopClass: Coding
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
      /** Extension of uid element */
      _uid: Element,
      /** The number of this instance in the series */
      number: primitives.R4.unsignedInt,
      /** Extension of number element */
      _number: Element,
      /** Description of instance */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element
    })
  ])
);
