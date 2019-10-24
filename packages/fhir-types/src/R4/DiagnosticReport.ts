/**
 * DiagnosticReport Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
 * A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports
 */
export interface DiagnosticReport {
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
  /** Business identifier for report */
  identifier?: Identifier[];
  /** What was requested */
  basedOn?: Reference[];
  /** registered | partial | preliminary | final + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Service category */
  category?: CodeableConcept[];
  /** Name/Code for this diagnostic report */
  code: CodeableConcept;
  /** The subject of the report - usually, but not always, the patient */
  subject?: Reference;
  /** Health care event when test ordered */
  encounter?: Reference;
  /** Clinically relevant time/time-period for report */
  effectiveDateTime?: primitives.R4.dateTime;
  /** Extension of effectiveDateTime element */
  _effectiveDateTime?: Element;
  /** Clinically relevant time/time-period for report */
  effectivePeriod?: Period;
  /** DateTime this version was made */
  issued?: primitives.R4.instant;
  /** Extension of issued element */
  _issued?: Element;
  /** Responsible Diagnostic Service */
  performer?: Reference[];
  /** Primary result interpreter */
  resultsInterpreter?: Reference[];
  /** Specimens this report is based on */
  specimen?: Reference[];
  /** Observations */
  result?: Reference[];
  /** Reference to full details of imaging associated with the diagnostic report */
  imagingStudy?: Reference[];
  /** Clinical conclusion (interpretation) of test results */
  conclusion?: string;
  /** Extension of conclusion element */
  _conclusion?: Element;
  /** Codes for the clinical conclusion of test results */
  conclusionCode?: CodeableConcept[];
  /** Entire report as issued */
  presentedForm?: Attachment[];
}
/**
 * A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports
 */
export const DiagnosticReport: t.Type<DiagnosticReport> = t.recursion<
  DiagnosticReport
>("DiagnosticReport", () =>
  t.intersection([
    t.type({
      /** registered | partial | preliminary | final + */
      status: primitives.R4.code,
      /** Name/Code for this diagnostic report */
      code: CodeableConcept
    }),
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
      /** Business identifier for report */
      identifier: t.array(Identifier),
      /** What was requested */
      basedOn: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Service category */
      category: t.array(CodeableConcept),
      /** The subject of the report - usually, but not always, the patient */
      subject: Reference,
      /** Health care event when test ordered */
      encounter: Reference,
      /** Clinically relevant time/time-period for report */
      effectiveDateTime: primitives.R4.dateTime,
      /** Extension of effectiveDateTime element */
      _effectiveDateTime: Element,
      /** Clinically relevant time/time-period for report */
      effectivePeriod: Period,
      /** DateTime this version was made */
      issued: primitives.R4.instant,
      /** Extension of issued element */
      _issued: Element,
      /** Responsible Diagnostic Service */
      performer: t.array(Reference),
      /** Primary result interpreter */
      resultsInterpreter: t.array(Reference),
      /** Specimens this report is based on */
      specimen: t.array(Reference),
      /** Observations */
      result: t.array(Reference),
      /** Reference to full details of imaging associated with the diagnostic report */
      imagingStudy: t.array(Reference),
      /** Clinical conclusion (interpretation) of test results */
      conclusion: primitives.R4.string,
      /** Extension of conclusion element */
      _conclusion: Element,
      /** Codes for the clinical conclusion of test results */
      conclusionCode: t.array(CodeableConcept),
      /** Entire report as issued */
      presentedForm: t.array(Attachment)
    })
  ])
);

/**
 * Key images associated with this report
 */
export interface DiagnosticReportMedia {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Comment about the image (e.g. explanation) */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** Reference to the image source */
  link: Reference;
}
/**
 * Key images associated with this report
 */
export const DiagnosticReportMedia: t.Type<DiagnosticReportMedia> = t.recursion<
  DiagnosticReportMedia
>("DiagnosticReportMedia", () =>
  t.intersection([
    t.type({
      /** Reference to the image source */
      link: Reference
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
      /** Comment about the image (e.g. explanation) */
      comment: primitives.R4.string,
      /** Extension of comment element */
      _comment: Element
    })
  ])
);
