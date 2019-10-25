/**
 * AdverseEvent Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Medical care, research study or other healthcare event causing physical injury
 */
export interface AdverseEvent {
  /** The type of resource */
  resourceType?: "AdverseEvent";
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
  /** Business identifier for the event */
  identifier?: Identifier;
  /** actual | potential */
  actuality: primitives.R4.code;
  /** Extension of actuality element */
  _actuality?: Element;
  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
  category?: CodeableConcept[];
  /** Type of the event itself in relation to the subject */
  event?: CodeableConcept;
  /** Subject impacted by event */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** When the event occurred */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** When the event was detected */
  detected?: primitives.R4.dateTime;
  /** Extension of detected element */
  _detected?: Element;
  /** When the event was recorded */
  recordedDate?: primitives.R4.dateTime;
  /** Extension of recordedDate element */
  _recordedDate?: Element;
  /** Effect on the subject due to this event */
  resultingCondition?: Reference[];
  /** Location where adverse event occurred */
  location?: Reference;
  /** Seriousness of the event */
  seriousness?: CodeableConcept;
  /** mild | moderate | severe */
  severity?: CodeableConcept;
  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
  outcome?: CodeableConcept;
  /** Who recorded the adverse event */
  recorder?: Reference;
  /** Who  was involved in the adverse event or the potential adverse event */
  contributor?: Reference[];
  /** AdverseEvent.subjectMedicalHistory */
  subjectMedicalHistory?: Reference[];
  /** AdverseEvent.referenceDocument */
  referenceDocument?: Reference[];
  /** AdverseEvent.study */
  study?: Reference[];
}
/**
 * Medical care, research study or other healthcare event causing physical injury
 */
export const AdverseEvent: t.Type<AdverseEvent> = t.recursion<AdverseEvent>(
  "AdverseEvent",
  () =>
    t.intersection([
      t.type({
        /** actual | potential */
        actuality: primitives.R4.code,
        /** Subject impacted by event */
        subject: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("AdverseEvent"),
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
        /** Business identifier for the event */
        identifier: Identifier,
        /** Extension of actuality element */
        _actuality: Element,
        /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
        category: t.array(CodeableConcept),
        /** Type of the event itself in relation to the subject */
        event: CodeableConcept,
        /** Encounter created as part of */
        encounter: Reference,
        /** When the event occurred */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element,
        /** When the event was detected */
        detected: primitives.R4.dateTime,
        /** Extension of detected element */
        _detected: Element,
        /** When the event was recorded */
        recordedDate: primitives.R4.dateTime,
        /** Extension of recordedDate element */
        _recordedDate: Element,
        /** Effect on the subject due to this event */
        resultingCondition: t.array(Reference),
        /** Location where adverse event occurred */
        location: Reference,
        /** Seriousness of the event */
        seriousness: CodeableConcept,
        /** mild | moderate | severe */
        severity: CodeableConcept,
        /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
        outcome: CodeableConcept,
        /** Who recorded the adverse event */
        recorder: Reference,
        /** Who  was involved in the adverse event or the potential adverse event */
        contributor: t.array(Reference),
        /** AdverseEvent.subjectMedicalHistory */
        subjectMedicalHistory: t.array(Reference),
        /** AdverseEvent.referenceDocument */
        referenceDocument: t.array(Reference),
        /** AdverseEvent.study */
        study: t.array(Reference)
      })
    ])
);

/**
 * The suspected agent causing the adverse event
 */
export interface AdverseEventSuspectEntity {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Refers to the specific entity that caused the adverse event */
  instance: Reference;
}
/**
 * The suspected agent causing the adverse event
 */
export const AdverseEventSuspectEntity: t.Type<
  AdverseEventSuspectEntity
> = t.recursion<AdverseEventSuspectEntity>("AdverseEventSuspectEntity", () =>
  t.intersection([
    t.type({
      /** Refers to the specific entity that caused the adverse event */
      instance: Reference
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * Information on the possible cause of the event
 */
export interface AdverseEventSuspectEntityCausality {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Assessment of if the entity caused the event */
  assessment?: CodeableConcept;
  /** AdverseEvent.suspectEntity.causalityProductRelatedness */
  productRelatedness?: string;
  /** Extension of productRelatedness element */
  _productRelatedness?: Element;
  /** AdverseEvent.suspectEntity.causalityAuthor */
  author?: Reference;
  /** ProbabilityScale | Bayesian | Checklist */
  method?: CodeableConcept;
}
/**
 * Information on the possible cause of the event
 */
export const AdverseEventSuspectEntityCausality: t.Type<
  AdverseEventSuspectEntityCausality
> = t.recursion<AdverseEventSuspectEntityCausality>(
  "AdverseEventSuspectEntityCausality",
  () =>
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
        /** Assessment of if the entity caused the event */
        assessment: CodeableConcept,
        /** AdverseEvent.suspectEntity.causalityProductRelatedness */
        productRelatedness: primitives.R4.string,
        /** Extension of productRelatedness element */
        _productRelatedness: Element,
        /** AdverseEvent.suspectEntity.causalityAuthor */
        author: Reference,
        /** ProbabilityScale | Bayesian | Checklist */
        method: CodeableConcept
      })
    ])
);
