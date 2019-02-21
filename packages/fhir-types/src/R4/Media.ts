/**
 * Media Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference
 */
export interface Media {
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
  /** Identifier(s) for the image */
  identifier?: Identifier[];
  /** Procedure that caused this media to be created */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Classification of media as image, video, or audio */
  type?: CodeableConcept;
  /** The type of acquisition equipment/process */
  modality?: CodeableConcept;
  /** Imaging view, e.g. Lateral or Antero-posterior */
  view?: CodeableConcept;
  /** Who/What this Media is a record of */
  subject?: Reference;
  /** Encounter associated with media */
  encounter?: Reference;
  /** When Media was collected */
  created?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** Date/Time this version was made available */
  issued?: t.TypeOf<primitives.R4.InstantType>;
  /** The person who generated the image */
  operator?: Reference;
  /** Why was event performed? */
  reasonCode?: CodeableConcept[];
  /** Observed body part */
  bodySite?: CodeableConcept;
  /** Name of the device/manufacturer */
  deviceName?: t.TypeOf<primitives.R4.StringType>;
  /** Observing Device */
  device?: Reference;
  /** Height of the image in pixels (photo/video) */
  height?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Width of the image in pixels (photo/video) */
  width?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Number of frames if > 1 (photo) */
  frames?: t.TypeOf<primitives.R4.PositiveIntegerType>;
  /** Length in seconds (audio / video) */
  duration?: t.TypeOf<primitives.R4.DecimalType>;
  /** Actual Media - reference or data */
  content: Attachment;
  /** Comments made about the media */
  note?: Annotation[];
}

export interface MediaOutputType {
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
  /** Identifier(s) for the image */
  identifier?: IdentifierOutputType[];
  /** Procedure that caused this media to be created */
  basedOn?: ReferenceOutputType[];
  /** Part of referenced event */
  partOf?: ReferenceOutputType[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Classification of media as image, video, or audio */
  type?: CodeableConceptOutputType;
  /** The type of acquisition equipment/process */
  modality?: CodeableConceptOutputType;
  /** Imaging view, e.g. Lateral or Antero-posterior */
  view?: CodeableConceptOutputType;
  /** Who/What this Media is a record of */
  subject?: ReferenceOutputType;
  /** Encounter associated with media */
  encounter?: ReferenceOutputType;
  /** When Media was collected */
  created?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** Date/Time this version was made available */
  issued?: t.OutputOf<primitives.R4.InstantType>;
  /** The person who generated the image */
  operator?: ReferenceOutputType;
  /** Why was event performed? */
  reasonCode?: CodeableConceptOutputType[];
  /** Observed body part */
  bodySite?: CodeableConceptOutputType;
  /** Name of the device/manufacturer */
  deviceName?: t.OutputOf<primitives.R4.StringType>;
  /** Observing Device */
  device?: ReferenceOutputType;
  /** Height of the image in pixels (photo/video) */
  height?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Width of the image in pixels (photo/video) */
  width?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Number of frames if > 1 (photo) */
  frames?: t.OutputOf<primitives.R4.PositiveIntegerType>;
  /** Length in seconds (audio / video) */
  duration?: t.OutputOf<primitives.R4.DecimalType>;
  /** Actual Media - reference or data */
  content: AttachmentOutputType;
  /** Comments made about the media */
  note?: AnnotationOutputType[];
}

export const Media: t.RecursiveType<
  t.Type<Media, MediaOutputType>,
  Media,
  MediaOutputType
> = t.recursion<Media, MediaOutputType>("Media", () =>
  t.intersection(
    [
      t.type({
        /** Actual Media - reference or data */
        content: Attachment,
        /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** Procedure that caused this media to be created */
        basedOn: t.array(Reference),
        /** Observed body part */
        bodySite: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** When Media was collected */
        created: t.union([primitives.R4.dateTime, Period]),
        /** Observing Device */
        device: Reference,
        /** Name of the device/manufacturer */
        deviceName: primitives.R4.string,
        /** Length in seconds (audio / video) */
        duration: primitives.R4.decimal,
        /** Encounter associated with media */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Number of frames if > 1 (photo) */
        frames: primitives.R4.positiveInt,
        /** Height of the image in pixels (photo/video) */
        height: primitives.R4.positiveInt,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifier(s) for the image */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Date/Time this version was made available */
        issued: primitives.R4.instant,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** The type of acquisition equipment/process */
        modality: CodeableConcept,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments made about the media */
        note: t.array(Annotation),
        /** The person who generated the image */
        operator: Reference,
        /** Part of referenced event */
        partOf: t.array(Reference),
        /** Why was event performed? */
        reasonCode: t.array(CodeableConcept),
        /** Who/What this Media is a record of */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Classification of media as image, video, or audio */
        type: CodeableConcept,
        /** Imaging view, e.g. Lateral or Antero-posterior */
        view: CodeableConcept,
        /** Width of the image in pixels (photo/video) */
        width: primitives.R4.positiveInt
      })
    ],
    "Media"
  )
);
