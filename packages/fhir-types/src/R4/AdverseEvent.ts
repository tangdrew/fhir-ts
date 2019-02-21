/**
 * AdverseEvent Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Information on the possible cause of the event
 */
export interface AdverseEventSuspectEntityCausality {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Assessment of if the entity caused the event */
  assessment?: CodeableConcept;
  /** AdverseEvent.suspectEntity.causalityProductRelatedness */
  productRelatedness?: t.TypeOf<primitives.R4.StringType>;
  /** AdverseEvent.suspectEntity.causalityAuthor */
  author?: Reference;
  /** ProbabilityScale | Bayesian | Checklist */
  method?: CodeableConcept;
}

export interface AdverseEventSuspectEntityCausalityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Assessment of if the entity caused the event */
  assessment?: CodeableConceptOutputType;
  /** AdverseEvent.suspectEntity.causalityProductRelatedness */
  productRelatedness?: t.OutputOf<primitives.R4.StringType>;
  /** AdverseEvent.suspectEntity.causalityAuthor */
  author?: ReferenceOutputType;
  /** ProbabilityScale | Bayesian | Checklist */
  method?: CodeableConceptOutputType;
}

export const AdverseEventSuspectEntityCausality: t.RecursiveType<
  t.Type<
    AdverseEventSuspectEntityCausality,
    AdverseEventSuspectEntityCausalityOutputType
  >,
  AdverseEventSuspectEntityCausality,
  AdverseEventSuspectEntityCausalityOutputType
> = t.recursion<
  AdverseEventSuspectEntityCausality,
  AdverseEventSuspectEntityCausalityOutputType
>("AdverseEventSuspectEntityCausality", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Assessment of if the entity caused the event */
        assessment: CodeableConcept,
        /** AdverseEvent.suspectEntity.causalityAuthor */
        author: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** ProbabilityScale | Bayesian | Checklist */
        method: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** AdverseEvent.suspectEntity.causalityProductRelatedness */
        productRelatedness: primitives.R4.string
      })
    ],
    "AdverseEventSuspectEntityCausality"
  )
);

/**
 * The suspected agent causing the adverse event
 */
export interface AdverseEventSuspectEntity {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Refers to the specific entity that caused the adverse event */
  instance: Reference;
  /** Information on the possible cause of the event */
  causality?: AdverseEventSuspectEntityCausality[];
}

export interface AdverseEventSuspectEntityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Refers to the specific entity that caused the adverse event */
  instance: ReferenceOutputType;
  /** Information on the possible cause of the event */
  causality?: AdverseEventSuspectEntityCausalityOutputType[];
}

export const AdverseEventSuspectEntity: t.RecursiveType<
  t.Type<AdverseEventSuspectEntity, AdverseEventSuspectEntityOutputType>,
  AdverseEventSuspectEntity,
  AdverseEventSuspectEntityOutputType
> = t.recursion<AdverseEventSuspectEntity, AdverseEventSuspectEntityOutputType>(
  "AdverseEventSuspectEntity",
  () =>
    t.intersection(
      [
        t.type({
          /** Refers to the specific entity that caused the adverse event */
          instance: Reference
        }),
        t.partial({
          /** Information on the possible cause of the event */
          causality: t.array(AdverseEventSuspectEntityCausality),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "AdverseEventSuspectEntity"
    )
);

/**
 * Medical care, research study or other healthcare event causing physical injury
 */
export interface AdverseEvent {
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
  /** Business identifier for the event */
  identifier?: Identifier;
  /** actual | potential */
  actuality: t.TypeOf<primitives.R4.CodeType>;
  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
  category?: CodeableConcept[];
  /** Type of the event itself in relation to the subject */
  event?: CodeableConcept;
  /** Subject impacted by event */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** When the event occurred */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** When the event was detected */
  detected?: t.TypeOf<primitives.R4.DateTimeType>;
  /** When the event was recorded */
  recordedDate?: t.TypeOf<primitives.R4.DateTimeType>;
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
  /** The suspected agent causing the adverse event */
  suspectEntity?: AdverseEventSuspectEntity[];
  /** AdverseEvent.subjectMedicalHistory */
  subjectMedicalHistory?: Reference[];
  /** AdverseEvent.referenceDocument */
  referenceDocument?: Reference[];
  /** AdverseEvent.study */
  study?: Reference[];
}

export interface AdverseEventOutputType {
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
  /** Business identifier for the event */
  identifier?: IdentifierOutputType;
  /** actual | potential */
  actuality: t.OutputOf<primitives.R4.CodeType>;
  /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
  category?: CodeableConceptOutputType[];
  /** Type of the event itself in relation to the subject */
  event?: CodeableConceptOutputType;
  /** Subject impacted by event */
  subject: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** When the event occurred */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** When the event was detected */
  detected?: t.OutputOf<primitives.R4.DateTimeType>;
  /** When the event was recorded */
  recordedDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Effect on the subject due to this event */
  resultingCondition?: ReferenceOutputType[];
  /** Location where adverse event occurred */
  location?: ReferenceOutputType;
  /** Seriousness of the event */
  seriousness?: CodeableConceptOutputType;
  /** mild | moderate | severe */
  severity?: CodeableConceptOutputType;
  /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
  outcome?: CodeableConceptOutputType;
  /** Who recorded the adverse event */
  recorder?: ReferenceOutputType;
  /** Who  was involved in the adverse event or the potential adverse event */
  contributor?: ReferenceOutputType[];
  /** The suspected agent causing the adverse event */
  suspectEntity?: AdverseEventSuspectEntityOutputType[];
  /** AdverseEvent.subjectMedicalHistory */
  subjectMedicalHistory?: ReferenceOutputType[];
  /** AdverseEvent.referenceDocument */
  referenceDocument?: ReferenceOutputType[];
  /** AdverseEvent.study */
  study?: ReferenceOutputType[];
}

export const AdverseEvent: t.RecursiveType<
  t.Type<AdverseEvent, AdverseEventOutputType>,
  AdverseEvent,
  AdverseEventOutputType
> = t.recursion<AdverseEvent, AdverseEventOutputType>("AdverseEvent", () =>
  t.intersection(
    [
      t.type({
        /** actual | potential */
        actuality: primitives.R4.code,
        /** Subject impacted by event */
        subject: Reference
      }),
      t.partial({
        /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Who  was involved in the adverse event or the potential adverse event */
        contributor: t.array(Reference),
        /** When the event occurred */
        date: primitives.R4.dateTime,
        /** When the event was detected */
        detected: primitives.R4.dateTime,
        /** Encounter created as part of */
        encounter: Reference,
        /** Type of the event itself in relation to the subject */
        event: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier for the event */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Location where adverse event occurred */
        location: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
        outcome: CodeableConcept,
        /** When the event was recorded */
        recordedDate: primitives.R4.dateTime,
        /** Who recorded the adverse event */
        recorder: Reference,
        /** AdverseEvent.referenceDocument */
        referenceDocument: t.array(Reference),
        /** Effect on the subject due to this event */
        resultingCondition: t.array(Reference),
        /** Seriousness of the event */
        seriousness: CodeableConcept,
        /** mild | moderate | severe */
        severity: CodeableConcept,
        /** AdverseEvent.study */
        study: t.array(Reference),
        /** AdverseEvent.subjectMedicalHistory */
        subjectMedicalHistory: t.array(Reference),
        /** The suspected agent causing the adverse event */
        suspectEntity: t.array(AdverseEventSuspectEntity),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "AdverseEvent"
  )
);
