/**
 * ClinicalImpression Module
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

/**
 * A clinical assessment performed when planning treatments and management strategies for a patient
 */
export interface ClinicalImpression {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** draft | completed | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Kind of assessment performed */
  code?: CodeableConcept;
  /** Why/how the assessment was performed */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Patient or group assessed */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Time of assessment */
  effectiveDateTime?: primitives.R4.dateTime;
  /** Extension of effectiveDateTime element */
  _effectiveDateTime?: Element;
  /** Time of assessment */
  effectivePeriod?: Period;
  /** When the assessment was documented */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** The clinician performing the assessment */
  assessor?: Reference;
  /** Reference to last assessment */
  previous?: Reference;
  /** Relevant impressions of patient state */
  problem?: Reference[];
  /** Clinical Protocol followed */
  protocol?: primitives.R4.uri[];
  /** Extension of protocol element */
  _protocol?: Element[];
  /** Summary of the assessment */
  summary?: string;
  /** Extension of summary element */
  _summary?: Element;
  /** Estimate of likely outcome */
  prognosisCodeableConcept?: CodeableConcept[];
  /** RiskAssessment expressing likely outcome */
  prognosisReference?: Reference[];
  /** Information supporting the clinical impression */
  supportingInfo?: Reference[];
  /** Comments made about the ClinicalImpression */
  note?: Annotation[];
}
/**
 * A clinical assessment performed when planning treatments and management strategies for a patient
 */
export const ClinicalImpression: t.Type<ClinicalImpression> = t.recursion<
  ClinicalImpression
>("ClinicalImpression", () =>
  t.intersection([
    t.type({
      /** draft | completed | entered-in-error */
      status: primitives.R4.code,
      /** Patient or group assessed */
      subject: Reference
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
      /** Business identifier */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Reason for current status */
      statusReason: CodeableConcept,
      /** Kind of assessment performed */
      code: CodeableConcept,
      /** Why/how the assessment was performed */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Encounter created as part of */
      encounter: Reference,
      /** Time of assessment */
      effectiveDateTime: primitives.R4.dateTime,
      /** Extension of effectiveDateTime element */
      _effectiveDateTime: Element,
      /** Time of assessment */
      effectivePeriod: Period,
      /** When the assessment was documented */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** The clinician performing the assessment */
      assessor: Reference,
      /** Reference to last assessment */
      previous: Reference,
      /** Relevant impressions of patient state */
      problem: t.array(Reference),
      /** Clinical Protocol followed */
      protocol: t.array(primitives.R4.uri),
      /** Extension of protocol element */
      _protocol: t.array(Element),
      /** Summary of the assessment */
      summary: primitives.R4.string,
      /** Extension of summary element */
      _summary: Element,
      /** Estimate of likely outcome */
      prognosisCodeableConcept: t.array(CodeableConcept),
      /** RiskAssessment expressing likely outcome */
      prognosisReference: t.array(Reference),
      /** Information supporting the clinical impression */
      supportingInfo: t.array(Reference),
      /** Comments made about the ClinicalImpression */
      note: t.array(Annotation)
    })
  ])
);

/**
 * One or more sets of investigations (signs, symptoms, etc.)
 */
export interface ClinicalImpressionInvestigation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A name/code for the set */
  code: CodeableConcept;
  /** Record of a specific investigation */
  item?: Reference[];
}
/**
 * One or more sets of investigations (signs, symptoms, etc.)
 */
export const ClinicalImpressionInvestigation: t.Type<
  ClinicalImpressionInvestigation
> = t.recursion<ClinicalImpressionInvestigation>(
  "ClinicalImpressionInvestigation",
  () =>
    t.intersection([
      t.type({
        /** A name/code for the set */
        code: CodeableConcept
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
        /** Record of a specific investigation */
        item: t.array(Reference)
      })
    ])
);

/**
 * Possible or likely findings and diagnoses
 */
export interface ClinicalImpressionFinding {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What was found */
  itemCodeableConcept?: CodeableConcept;
  /** What was found */
  itemReference?: Reference;
  /** Which investigations support finding */
  basis?: string;
  /** Extension of basis element */
  _basis?: Element;
}
/**
 * Possible or likely findings and diagnoses
 */
export const ClinicalImpressionFinding: t.Type<
  ClinicalImpressionFinding
> = t.recursion<ClinicalImpressionFinding>("ClinicalImpressionFinding", () =>
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
      /** What was found */
      itemCodeableConcept: CodeableConcept,
      /** What was found */
      itemReference: Reference,
      /** Which investigations support finding */
      basis: primitives.R4.string,
      /** Extension of basis element */
      _basis: Element
    })
  ])
);
