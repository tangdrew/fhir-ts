/**
 * DeviceUseStatement Module
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
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Record of use of a device
 */
export interface DeviceUseStatement {
  /** The type of resource */
  resourceType?: "DeviceUseStatement";
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
  /** External identifier for this record */
  identifier?: Identifier[];
  /** Fulfills plan, proposal or order */
  basedOn?: Reference[];
  /** active | completed | entered-in-error + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Patient using device */
  subject: Reference;
  /** Supporting information */
  derivedFrom?: Reference[];
  /** How often  the device was used */
  timingTiming?: Timing;
  /** How often  the device was used */
  timingPeriod?: Period;
  /** How often  the device was used */
  timingDateTime?: primitives.R4.dateTime;
  /** Extension of timingDateTime element */
  _timingDateTime?: Element;
  /** When statement was recorded */
  recordedOn?: primitives.R4.dateTime;
  /** Extension of recordedOn element */
  _recordedOn?: Element;
  /** Who made the statement */
  source?: Reference;
  /** Reference to device used */
  device: Reference;
  /** Why device was used */
  reasonCode?: CodeableConcept[];
  /** Why was DeviceUseStatement performed? */
  reasonReference?: Reference[];
  /** Target body site */
  bodySite?: CodeableConcept;
  /** Addition details (comments, instructions) */
  note?: Annotation[];
}
/**
 * Record of use of a device
 */
export const DeviceUseStatement: t.Type<DeviceUseStatement> = t.recursion<
  DeviceUseStatement
>("DeviceUseStatement", () =>
  t.intersection([
    t.type({
      /** active | completed | entered-in-error + */
      status: primitives.R4.code,
      /** Patient using device */
      subject: Reference,
      /** Reference to device used */
      device: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("DeviceUseStatement"),
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
      /** External identifier for this record */
      identifier: t.array(Identifier),
      /** Fulfills plan, proposal or order */
      basedOn: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Supporting information */
      derivedFrom: t.array(Reference),
      /** How often  the device was used */
      timingTiming: Timing,
      /** How often  the device was used */
      timingPeriod: Period,
      /** How often  the device was used */
      timingDateTime: primitives.R4.dateTime,
      /** Extension of timingDateTime element */
      _timingDateTime: Element,
      /** When statement was recorded */
      recordedOn: primitives.R4.dateTime,
      /** Extension of recordedOn element */
      _recordedOn: Element,
      /** Who made the statement */
      source: Reference,
      /** Why device was used */
      reasonCode: t.array(CodeableConcept),
      /** Why was DeviceUseStatement performed? */
      reasonReference: t.array(Reference),
      /** Target body site */
      bodySite: CodeableConcept,
      /** Addition details (comments, instructions) */
      note: t.array(Annotation)
    })
  ])
);
