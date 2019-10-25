/**
 * Media Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
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
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference
 */
export interface Media {
  /** The type of resource */
  resourceType?: "Media";
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
  /** Identifier(s) for the image */
  identifier?: Identifier[];
  /** Procedure that caused this media to be created */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
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
  createdDateTime?: primitives.R4.dateTime;
  /** Extension of createdDateTime element */
  _createdDateTime?: Element;
  /** When Media was collected */
  createdPeriod?: Period;
  /** Date/Time this version was made available */
  issued?: primitives.R4.instant;
  /** Extension of issued element */
  _issued?: Element;
  /** The person who generated the image */
  operator?: Reference;
  /** Why was event performed? */
  reasonCode?: CodeableConcept[];
  /** Observed body part */
  bodySite?: CodeableConcept;
  /** Name of the device/manufacturer */
  deviceName?: string;
  /** Extension of deviceName element */
  _deviceName?: Element;
  /** Observing Device */
  device?: Reference;
  /** Height of the image in pixels (photo/video) */
  height?: primitives.R4.positiveInt;
  /** Extension of height element */
  _height?: Element;
  /** Width of the image in pixels (photo/video) */
  width?: primitives.R4.positiveInt;
  /** Extension of width element */
  _width?: Element;
  /** Number of frames if > 1 (photo) */
  frames?: primitives.R4.positiveInt;
  /** Extension of frames element */
  _frames?: Element;
  /** Length in seconds (audio / video) */
  duration?: primitives.R4.decimal;
  /** Extension of duration element */
  _duration?: Element;
  /** Actual Media - reference or data */
  content: Attachment;
  /** Comments made about the media */
  note?: Annotation[];
}
/**
 * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference
 */
export const Media: t.Type<Media> = t.recursion<Media>("Media", () =>
  t.intersection([
    t.type({
      /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
      status: primitives.R4.code,
      /** Actual Media - reference or data */
      content: Attachment
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Media"),
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
      /** Identifier(s) for the image */
      identifier: t.array(Identifier),
      /** Procedure that caused this media to be created */
      basedOn: t.array(Reference),
      /** Part of referenced event */
      partOf: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Classification of media as image, video, or audio */
      type: CodeableConcept,
      /** The type of acquisition equipment/process */
      modality: CodeableConcept,
      /** Imaging view, e.g. Lateral or Antero-posterior */
      view: CodeableConcept,
      /** Who/What this Media is a record of */
      subject: Reference,
      /** Encounter associated with media */
      encounter: Reference,
      /** When Media was collected */
      createdDateTime: primitives.R4.dateTime,
      /** Extension of createdDateTime element */
      _createdDateTime: Element,
      /** When Media was collected */
      createdPeriod: Period,
      /** Date/Time this version was made available */
      issued: primitives.R4.instant,
      /** Extension of issued element */
      _issued: Element,
      /** The person who generated the image */
      operator: Reference,
      /** Why was event performed? */
      reasonCode: t.array(CodeableConcept),
      /** Observed body part */
      bodySite: CodeableConcept,
      /** Name of the device/manufacturer */
      deviceName: primitives.R4.string,
      /** Extension of deviceName element */
      _deviceName: Element,
      /** Observing Device */
      device: Reference,
      /** Height of the image in pixels (photo/video) */
      height: primitives.R4.positiveInt,
      /** Extension of height element */
      _height: Element,
      /** Width of the image in pixels (photo/video) */
      width: primitives.R4.positiveInt,
      /** Extension of width element */
      _width: Element,
      /** Number of frames if > 1 (photo) */
      frames: primitives.R4.positiveInt,
      /** Extension of frames element */
      _frames: Element,
      /** Length in seconds (audio / video) */
      duration: primitives.R4.decimal,
      /** Extension of duration element */
      _duration: Element,
      /** Comments made about the media */
      note: t.array(Annotation)
    })
  ])
);
