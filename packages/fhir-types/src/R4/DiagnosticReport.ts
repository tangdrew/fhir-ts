/**
 * DiagnosticReport Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

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
 * Key images associated with this report
 */
export interface DiagnosticReportMedia {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Comment about the image (e.g. explanation) */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Reference to the image source */
  link: Reference;
}

export interface DiagnosticReportMediaOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Comment about the image (e.g. explanation) */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Reference to the image source */
  link: ReferenceOutputType;
}

export const DiagnosticReportMedia: t.RecursiveType<
  t.Type<DiagnosticReportMedia, DiagnosticReportMediaOutputType>,
  DiagnosticReportMedia,
  DiagnosticReportMediaOutputType
> = t.recursion<DiagnosticReportMedia, DiagnosticReportMediaOutputType>(
  "DiagnosticReportMedia",
  () =>
    t.intersection(
      [
        t.type({
          /** Reference to the image source */
          link: Reference
        }),
        t.partial({
          /** Comment about the image (e.g. explanation) */
          comment: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DiagnosticReportMedia"
    )
);

/**
 * A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports
 */
export interface DiagnosticReport {
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
  /** Business identifier for report */
  identifier?: Identifier[];
  /** What was requested */
  basedOn?: Reference[];
  /** registered | partial | preliminary | final + */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Service category */
  category?: CodeableConcept[];
  /** Name/Code for this diagnostic report */
  code: CodeableConcept;
  /** The subject of the report - usually, but not always, the patient */
  subject?: Reference;
  /** Health care event when test ordered */
  encounter?: Reference;
  /** Clinically relevant time/time-period for report */
  effective?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** DateTime this version was made */
  issued?: t.TypeOf<primitives.R4.InstantType>;
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
  /** Key images associated with this report */
  media?: DiagnosticReportMedia[];
  /** Clinical conclusion (interpretation) of test results */
  conclusion?: t.TypeOf<primitives.R4.StringType>;
  /** Codes for the clinical conclusion of test results */
  conclusionCode?: CodeableConcept[];
  /** Entire report as issued */
  presentedForm?: Attachment[];
}

export interface DiagnosticReportOutputType {
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
  /** Business identifier for report */
  identifier?: IdentifierOutputType[];
  /** What was requested */
  basedOn?: ReferenceOutputType[];
  /** registered | partial | preliminary | final + */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Service category */
  category?: CodeableConceptOutputType[];
  /** Name/Code for this diagnostic report */
  code: CodeableConceptOutputType;
  /** The subject of the report - usually, but not always, the patient */
  subject?: ReferenceOutputType;
  /** Health care event when test ordered */
  encounter?: ReferenceOutputType;
  /** Clinically relevant time/time-period for report */
  effective?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** DateTime this version was made */
  issued?: t.OutputOf<primitives.R4.InstantType>;
  /** Responsible Diagnostic Service */
  performer?: ReferenceOutputType[];
  /** Primary result interpreter */
  resultsInterpreter?: ReferenceOutputType[];
  /** Specimens this report is based on */
  specimen?: ReferenceOutputType[];
  /** Observations */
  result?: ReferenceOutputType[];
  /** Reference to full details of imaging associated with the diagnostic report */
  imagingStudy?: ReferenceOutputType[];
  /** Key images associated with this report */
  media?: DiagnosticReportMediaOutputType[];
  /** Clinical conclusion (interpretation) of test results */
  conclusion?: t.OutputOf<primitives.R4.StringType>;
  /** Codes for the clinical conclusion of test results */
  conclusionCode?: CodeableConceptOutputType[];
  /** Entire report as issued */
  presentedForm?: AttachmentOutputType[];
}

export const DiagnosticReport: t.RecursiveType<
  t.Type<DiagnosticReport, DiagnosticReportOutputType>,
  DiagnosticReport,
  DiagnosticReportOutputType
> = t.recursion<DiagnosticReport, DiagnosticReportOutputType>(
  "DiagnosticReport",
  () =>
    t.intersection(
      [
        t.type({
          /** Name/Code for this diagnostic report */
          code: CodeableConcept,
          /** registered | partial | preliminary | final + */
          status: primitives.R4.code
        }),
        t.partial({
          /** What was requested */
          basedOn: t.array(Reference),
          /** Service category */
          category: t.array(CodeableConcept),
          /** Clinical conclusion (interpretation) of test results */
          conclusion: primitives.R4.string,
          /** Codes for the clinical conclusion of test results */
          conclusionCode: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Clinically relevant time/time-period for report */
          effective: t.union([primitives.R4.dateTime, Period]),
          /** Health care event when test ordered */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifier for report */
          identifier: t.array(Identifier),
          /** Reference to full details of imaging associated with the diagnostic report */
          imagingStudy: t.array(Reference),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** DateTime this version was made */
          issued: primitives.R4.instant,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Key images associated with this report */
          media: t.array(DiagnosticReportMedia),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Responsible Diagnostic Service */
          performer: t.array(Reference),
          /** Entire report as issued */
          presentedForm: t.array(Attachment),
          /** Observations */
          result: t.array(Reference),
          /** Primary result interpreter */
          resultsInterpreter: t.array(Reference),
          /** Specimens this report is based on */
          specimen: t.array(Reference),
          /** The subject of the report - usually, but not always, the patient */
          subject: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "DiagnosticReport"
    )
);
