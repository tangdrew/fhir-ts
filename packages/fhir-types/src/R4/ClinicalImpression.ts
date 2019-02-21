/**
 * ClinicalImpression Module
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

/**
 * One or more sets of investigations (signs, symptoms, etc.)
 */
export interface ClinicalImpressionInvestigation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A name/code for the set */
  code: CodeableConcept;
  /** Record of a specific investigation */
  item?: Reference[];
}

export interface ClinicalImpressionInvestigationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A name/code for the set */
  code: CodeableConceptOutputType;
  /** Record of a specific investigation */
  item?: ReferenceOutputType[];
}

export const ClinicalImpressionInvestigation: t.RecursiveType<
  t.Type<
    ClinicalImpressionInvestigation,
    ClinicalImpressionInvestigationOutputType
  >,
  ClinicalImpressionInvestigation,
  ClinicalImpressionInvestigationOutputType
> = t.recursion<
  ClinicalImpressionInvestigation,
  ClinicalImpressionInvestigationOutputType
>("ClinicalImpressionInvestigation", () =>
  t.intersection(
    [
      t.type({
        /** A name/code for the set */
        code: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Record of a specific investigation */
        item: t.array(Reference),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ClinicalImpressionInvestigation"
  )
);

/**
 * Possible or likely findings and diagnoses
 */
export interface ClinicalImpressionFinding {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What was found */
  itemCodeableConcept?: CodeableConcept;
  /** What was found */
  itemReference?: Reference;
  /** Which investigations support finding */
  basis?: t.TypeOf<primitives.R4.StringType>;
}

export interface ClinicalImpressionFindingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What was found */
  itemCodeableConcept?: CodeableConceptOutputType;
  /** What was found */
  itemReference?: ReferenceOutputType;
  /** Which investigations support finding */
  basis?: t.OutputOf<primitives.R4.StringType>;
}

export const ClinicalImpressionFinding: t.RecursiveType<
  t.Type<ClinicalImpressionFinding, ClinicalImpressionFindingOutputType>,
  ClinicalImpressionFinding,
  ClinicalImpressionFindingOutputType
> = t.recursion<ClinicalImpressionFinding, ClinicalImpressionFindingOutputType>(
  "ClinicalImpressionFinding",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Which investigations support finding */
          basis: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** What was found */
          itemCodeableConcept: CodeableConcept,
          /** What was found */
          itemReference: Reference,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ClinicalImpressionFinding"
    )
);

/**
 * A clinical assessment performed when planning treatments and management strategies for a patient
 */
export interface ClinicalImpression {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** draft | completed | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Kind of assessment performed */
  code?: CodeableConcept;
  /** Why/how the assessment was performed */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Patient or group assessed */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Time of assessment */
  effective?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** When the assessment was documented */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The clinician performing the assessment */
  assessor?: Reference;
  /** Reference to last assessment */
  previous?: Reference;
  /** Relevant impressions of patient state */
  problem?: Reference[];
  /** One or more sets of investigations (signs, symptoms, etc.) */
  investigation?: ClinicalImpressionInvestigation[];
  /** Clinical Protocol followed */
  protocol?: t.TypeOf<primitives.R4.URIType>[];
  /** Summary of the assessment */
  summary?: t.TypeOf<primitives.R4.StringType>;
  /** Possible or likely findings and diagnoses */
  finding?: ClinicalImpressionFinding[];
  /** Estimate of likely outcome */
  prognosisCodeableConcept?: CodeableConcept[];
  /** RiskAssessment expressing likely outcome */
  prognosisReference?: Reference[];
  /** Information supporting the clinical impression */
  supportingInfo?: Reference[];
  /** Comments made about the ClinicalImpression */
  note?: Annotation[];
}

export interface ClinicalImpressionOutputType {
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
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** draft | completed | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** Kind of assessment performed */
  code?: CodeableConceptOutputType;
  /** Why/how the assessment was performed */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Patient or group assessed */
  subject: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** Time of assessment */
  effective?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** When the assessment was documented */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The clinician performing the assessment */
  assessor?: ReferenceOutputType;
  /** Reference to last assessment */
  previous?: ReferenceOutputType;
  /** Relevant impressions of patient state */
  problem?: ReferenceOutputType[];
  /** One or more sets of investigations (signs, symptoms, etc.) */
  investigation?: ClinicalImpressionInvestigationOutputType[];
  /** Clinical Protocol followed */
  protocol?: t.OutputOf<primitives.R4.URIType>[];
  /** Summary of the assessment */
  summary?: t.OutputOf<primitives.R4.StringType>;
  /** Possible or likely findings and diagnoses */
  finding?: ClinicalImpressionFindingOutputType[];
  /** Estimate of likely outcome */
  prognosisCodeableConcept?: CodeableConceptOutputType[];
  /** RiskAssessment expressing likely outcome */
  prognosisReference?: ReferenceOutputType[];
  /** Information supporting the clinical impression */
  supportingInfo?: ReferenceOutputType[];
  /** Comments made about the ClinicalImpression */
  note?: AnnotationOutputType[];
}

export const ClinicalImpression: t.RecursiveType<
  t.Type<ClinicalImpression, ClinicalImpressionOutputType>,
  ClinicalImpression,
  ClinicalImpressionOutputType
> = t.recursion<ClinicalImpression, ClinicalImpressionOutputType>(
  "ClinicalImpression",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | completed | entered-in-error */
          status: primitives.R4.code,
          /** Patient or group assessed */
          subject: Reference
        }),
        t.partial({
          /** The clinician performing the assessment */
          assessor: Reference,
          /** Kind of assessment performed */
          code: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** When the assessment was documented */
          date: primitives.R4.dateTime,
          /** Why/how the assessment was performed */
          description: primitives.R4.string,
          /** Time of assessment */
          effective: t.union([primitives.R4.dateTime, Period]),
          /** Encounter created as part of */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Possible or likely findings and diagnoses */
          finding: t.array(ClinicalImpressionFinding),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** One or more sets of investigations (signs, symptoms, etc.) */
          investigation: t.array(ClinicalImpressionInvestigation),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Comments made about the ClinicalImpression */
          note: t.array(Annotation),
          /** Reference to last assessment */
          previous: Reference,
          /** Relevant impressions of patient state */
          problem: t.array(Reference),
          /** Estimate of likely outcome */
          prognosisCodeableConcept: t.array(CodeableConcept),
          /** RiskAssessment expressing likely outcome */
          prognosisReference: t.array(Reference),
          /** Clinical Protocol followed */
          protocol: t.array(primitives.R4.uri),
          /** Reason for current status */
          statusReason: CodeableConcept,
          /** Summary of the assessment */
          summary: primitives.R4.string,
          /** Information supporting the clinical impression */
          supportingInfo: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "ClinicalImpression"
    )
);
