/**
 * ImagingStudy Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Who performed the series
 */
export interface ImagingStudySeriesPerformer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of performance */
  function?: CodeableConcept;
  /** Who performed the series */
  actor: Reference;
}

export interface ImagingStudySeriesPerformerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of performance */
  function?: CodeableConceptOutputType;
  /** Who performed the series */
  actor: ReferenceOutputType;
}

export const ImagingStudySeriesPerformer: t.RecursiveType<
  t.Type<ImagingStudySeriesPerformer, ImagingStudySeriesPerformerOutputType>,
  ImagingStudySeriesPerformer,
  ImagingStudySeriesPerformerOutputType
> = t.recursion<
  ImagingStudySeriesPerformer,
  ImagingStudySeriesPerformerOutputType
>("ImagingStudySeriesPerformer", () =>
  t.intersection(
    [
      t.type({
        /** Who performed the series */
        actor: Reference
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Type of performance */
        function: CodeableConcept,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ImagingStudySeriesPerformer"
  )
);

/**
 * A single SOP instance from the series
 */
export interface ImagingStudySeriesInstance {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** DICOM SOP Instance UID */
  uid: t.TypeOf<primitives.R4.IDType>;
  /** DICOM class type */
  sopClass: Coding;
  /** The number of this instance in the series */
  number?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Description of instance */
  title?: t.TypeOf<primitives.R4.StringType>;
}

export interface ImagingStudySeriesInstanceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** DICOM SOP Instance UID */
  uid: t.OutputOf<primitives.R4.IDType>;
  /** DICOM class type */
  sopClass: CodingOutputType;
  /** The number of this instance in the series */
  number?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Description of instance */
  title?: t.OutputOf<primitives.R4.StringType>;
}

export const ImagingStudySeriesInstance: t.RecursiveType<
  t.Type<ImagingStudySeriesInstance, ImagingStudySeriesInstanceOutputType>,
  ImagingStudySeriesInstance,
  ImagingStudySeriesInstanceOutputType
> = t.recursion<
  ImagingStudySeriesInstance,
  ImagingStudySeriesInstanceOutputType
>("ImagingStudySeriesInstance", () =>
  t.intersection(
    [
      t.type({
        /** DICOM class type */
        sopClass: Coding,
        /** DICOM SOP Instance UID */
        uid: primitives.R4.id
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The number of this instance in the series */
        number: primitives.R4.unsignedInt,
        /** Description of instance */
        title: primitives.R4.string
      })
    ],
    "ImagingStudySeriesInstance"
  )
);

/**
 * Each study has one or more series of instances
 */
export interface ImagingStudySeries {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** DICOM Series Instance UID for the series */
  uid: t.TypeOf<primitives.R4.IDType>;
  /** Numeric identifier of this series */
  number?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** The modality of the instances in the series */
  modality: Coding;
  /** A short human readable summary of the series */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Number of Series Related Instances */
  numberOfInstances?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Series access endpoint */
  endpoint?: Reference[];
  /** Body part examined */
  bodySite?: Coding;
  /** Body part laterality */
  laterality?: Coding;
  /** Specimen imaged */
  specimen?: Reference[];
  /** When the series started */
  started?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who performed the series */
  performer?: ImagingStudySeriesPerformer[];
  /** A single SOP instance from the series */
  instance?: ImagingStudySeriesInstance[];
}

export interface ImagingStudySeriesOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** DICOM Series Instance UID for the series */
  uid: t.OutputOf<primitives.R4.IDType>;
  /** Numeric identifier of this series */
  number?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** The modality of the instances in the series */
  modality: CodingOutputType;
  /** A short human readable summary of the series */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Number of Series Related Instances */
  numberOfInstances?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Series access endpoint */
  endpoint?: ReferenceOutputType[];
  /** Body part examined */
  bodySite?: CodingOutputType;
  /** Body part laterality */
  laterality?: CodingOutputType;
  /** Specimen imaged */
  specimen?: ReferenceOutputType[];
  /** When the series started */
  started?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who performed the series */
  performer?: ImagingStudySeriesPerformerOutputType[];
  /** A single SOP instance from the series */
  instance?: ImagingStudySeriesInstanceOutputType[];
}

export const ImagingStudySeries: t.RecursiveType<
  t.Type<ImagingStudySeries, ImagingStudySeriesOutputType>,
  ImagingStudySeries,
  ImagingStudySeriesOutputType
> = t.recursion<ImagingStudySeries, ImagingStudySeriesOutputType>(
  "ImagingStudySeries",
  () =>
    t.intersection(
      [
        t.type({
          /** The modality of the instances in the series */
          modality: Coding,
          /** DICOM Series Instance UID for the series */
          uid: primitives.R4.id
        }),
        t.partial({
          /** Body part examined */
          bodySite: Coding,
          /** A short human readable summary of the series */
          description: primitives.R4.string,
          /** Series access endpoint */
          endpoint: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** A single SOP instance from the series */
          instance: t.array(ImagingStudySeriesInstance),
          /** Body part laterality */
          laterality: Coding,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Numeric identifier of this series */
          number: primitives.R4.unsignedInt,
          /** Number of Series Related Instances */
          numberOfInstances: primitives.R4.unsignedInt,
          /** Who performed the series */
          performer: t.array(ImagingStudySeriesPerformer),
          /** Specimen imaged */
          specimen: t.array(Reference),
          /** When the series started */
          started: primitives.R4.dateTime
        })
      ],
      "ImagingStudySeries"
    )
);

/**
 * A set of images produced in single study (one or more series of references images)
 */
export interface ImagingStudy {
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
  /** Identifiers for the whole study */
  identifier?: Identifier[];
  /** registered | available | cancelled | entered-in-error | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** All series modality if actual acquisition modalities */
  modality?: Coding[];
  /** Who or what is the subject of the study */
  subject: Reference;
  /** Encounter with which this imaging study is associated */
  encounter?: Reference;
  /** When the study was started */
  started?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Request fulfilled */
  basedOn?: Reference[];
  /** Referring physician */
  referrer?: Reference;
  /** Who interpreted images */
  interpreter?: Reference[];
  /** Study access endpoint */
  endpoint?: Reference[];
  /** Number of Study Related Series */
  numberOfSeries?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Number of Study Related Instances */
  numberOfInstances?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
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
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Each study has one or more series of instances */
  series?: ImagingStudySeries[];
}

export interface ImagingStudyOutputType {
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
  /** Identifiers for the whole study */
  identifier?: IdentifierOutputType[];
  /** registered | available | cancelled | entered-in-error | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** All series modality if actual acquisition modalities */
  modality?: CodingOutputType[];
  /** Who or what is the subject of the study */
  subject: ReferenceOutputType;
  /** Encounter with which this imaging study is associated */
  encounter?: ReferenceOutputType;
  /** When the study was started */
  started?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Request fulfilled */
  basedOn?: ReferenceOutputType[];
  /** Referring physician */
  referrer?: ReferenceOutputType;
  /** Who interpreted images */
  interpreter?: ReferenceOutputType[];
  /** Study access endpoint */
  endpoint?: ReferenceOutputType[];
  /** Number of Study Related Series */
  numberOfSeries?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Number of Study Related Instances */
  numberOfInstances?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** The performed Procedure reference */
  procedureReference?: ReferenceOutputType;
  /** The performed procedure code */
  procedureCode?: CodeableConceptOutputType[];
  /** Where ImagingStudy occurred */
  location?: ReferenceOutputType;
  /** Why the study was requested */
  reasonCode?: CodeableConceptOutputType[];
  /** Why was study performed */
  reasonReference?: ReferenceOutputType[];
  /** User-defined comments */
  note?: AnnotationOutputType[];
  /** Institution-generated description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Each study has one or more series of instances */
  series?: ImagingStudySeriesOutputType[];
}

export const ImagingStudy: t.RecursiveType<
  t.Type<ImagingStudy, ImagingStudyOutputType>,
  ImagingStudy,
  ImagingStudyOutputType
> = t.recursion<ImagingStudy, ImagingStudyOutputType>("ImagingStudy", () =>
  t.intersection(
    [
      t.type({
        /** registered | available | cancelled | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Who or what is the subject of the study */
        subject: Reference
      }),
      t.partial({
        /** Request fulfilled */
        basedOn: t.array(Reference),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Institution-generated description */
        description: primitives.R4.string,
        /** Encounter with which this imaging study is associated */
        encounter: Reference,
        /** Study access endpoint */
        endpoint: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifiers for the whole study */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Who interpreted images */
        interpreter: t.array(Reference),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Where ImagingStudy occurred */
        location: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** All series modality if actual acquisition modalities */
        modality: t.array(Coding),
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** User-defined comments */
        note: t.array(Annotation),
        /** Number of Study Related Instances */
        numberOfInstances: primitives.R4.unsignedInt,
        /** Number of Study Related Series */
        numberOfSeries: primitives.R4.unsignedInt,
        /** The performed procedure code */
        procedureCode: t.array(CodeableConcept),
        /** The performed Procedure reference */
        procedureReference: Reference,
        /** Why the study was requested */
        reasonCode: t.array(CodeableConcept),
        /** Why was study performed */
        reasonReference: t.array(Reference),
        /** Referring physician */
        referrer: Reference,
        /** Each study has one or more series of instances */
        series: t.array(ImagingStudySeries),
        /** When the study was started */
        started: primitives.R4.dateTime,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "ImagingStudy"
  )
);
