/**
 * DeviceUseStatement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Record of use of a device
 */
export interface DeviceUseStatement {
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
  /** External identifier for this record */
  identifier?: Identifier[];
  /** Fulfills plan, proposal or order */
  basedOn?: Reference[];
  /** active | completed | entered-in-error + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Patient using device */
  subject: Reference;
  /** Supporting information */
  derivedFrom?: Reference[];
  /** How often  the device was used */
  timing?: Timing | Period | t.TypeOf<primitives.R4.DateTimeType>;
  /** When statement was recorded */
  recordedOn?: t.TypeOf<primitives.R4.DateTimeType>;
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

export interface DeviceUseStatementOutputType {
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
  /** External identifier for this record */
  identifier?: IdentifierOutputType[];
  /** Fulfills plan, proposal or order */
  basedOn?: ReferenceOutputType[];
  /** active | completed | entered-in-error + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Patient using device */
  subject: ReferenceOutputType;
  /** Supporting information */
  derivedFrom?: ReferenceOutputType[];
  /** How often  the device was used */
  timing?:
    | TimingOutputType
    | PeriodOutputType
    | t.OutputOf<primitives.R4.DateTimeType>;
  /** When statement was recorded */
  recordedOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who made the statement */
  source?: ReferenceOutputType;
  /** Reference to device used */
  device: ReferenceOutputType;
  /** Why device was used */
  reasonCode?: CodeableConceptOutputType[];
  /** Why was DeviceUseStatement performed? */
  reasonReference?: ReferenceOutputType[];
  /** Target body site */
  bodySite?: CodeableConceptOutputType;
  /** Addition details (comments, instructions) */
  note?: AnnotationOutputType[];
}

export const DeviceUseStatement: t.RecursiveType<
  t.Type<DeviceUseStatement, DeviceUseStatementOutputType>,
  DeviceUseStatement,
  DeviceUseStatementOutputType
> = t.recursion<DeviceUseStatement, DeviceUseStatementOutputType>(
  "DeviceUseStatement",
  () =>
    t.intersection(
      [
        t.type({
          /** Reference to device used */
          device: Reference,
          /** active | completed | entered-in-error + */
          status: primitives.R4.code,
          /** Patient using device */
          subject: Reference
        }),
        t.partial({
          /** Fulfills plan, proposal or order */
          basedOn: t.array(Reference),
          /** Target body site */
          bodySite: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Supporting information */
          derivedFrom: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External identifier for this record */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Addition details (comments, instructions) */
          note: t.array(Annotation),
          /** Why device was used */
          reasonCode: t.array(CodeableConcept),
          /** Why was DeviceUseStatement performed? */
          reasonReference: t.array(Reference),
          /** When statement was recorded */
          recordedOn: primitives.R4.dateTime,
          /** Who made the statement */
          source: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** How often  the device was used */
          timing: t.union([Timing, Period, primitives.R4.dateTime])
        })
      ],
      "DeviceUseStatement"
    )
);
