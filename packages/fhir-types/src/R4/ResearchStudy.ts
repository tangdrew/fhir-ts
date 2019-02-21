/**
 * ResearchStudy Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A goal for the study
 */
export interface ResearchStudyObjective {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for the objective */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** primary | secondary | exploratory */
  type?: CodeableConcept;
}

export interface ResearchStudyObjectiveOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Label for the objective */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** primary | secondary | exploratory */
  type?: CodeableConceptOutputType;
}

export const ResearchStudyObjective: t.RecursiveType<
  t.Type<ResearchStudyObjective, ResearchStudyObjectiveOutputType>,
  ResearchStudyObjective,
  ResearchStudyObjectiveOutputType
> = t.recursion<ResearchStudyObjective, ResearchStudyObjectiveOutputType>(
  "ResearchStudyObjective",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Label for the objective */
          name: primitives.R4.string,
          /** primary | secondary | exploratory */
          type: CodeableConcept
        })
      ],
      "ResearchStudyObjective"
    )
);

/**
 * Defined path through the study for a subject
 */
export interface ResearchStudyArm {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for study arm */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Categorization of study arm */
  type?: CodeableConcept;
  /** Short explanation of study path */
  description?: t.TypeOf<primitives.R4.StringType>;
}

export interface ResearchStudyArmOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Label for study arm */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Categorization of study arm */
  type?: CodeableConceptOutputType;
  /** Short explanation of study path */
  description?: t.OutputOf<primitives.R4.StringType>;
}

export const ResearchStudyArm: t.RecursiveType<
  t.Type<ResearchStudyArm, ResearchStudyArmOutputType>,
  ResearchStudyArm,
  ResearchStudyArmOutputType
> = t.recursion<ResearchStudyArm, ResearchStudyArmOutputType>(
  "ResearchStudyArm",
  () =>
    t.intersection(
      [
        t.type({
          /** Label for study arm */
          name: primitives.R4.string
        }),
        t.partial({
          /** Short explanation of study path */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Categorization of study arm */
          type: CodeableConcept
        })
      ],
      "ResearchStudyArm"
    )
);

/**
 * Investigation to increase healthcare-related patient-independent knowledge
 */
export interface ResearchStudy {
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
  /** Business Identifier for study */
  identifier?: Identifier[];
  /** Name for this study */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Steps followed in executing study */
  protocol?: Reference[];
  /** Part of larger study */
  partOf?: Reference[];
  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: CodeableConcept;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: CodeableConcept;
  /** Classifications for the study */
  category?: CodeableConcept[];
  /** Drugs, devices, etc. under study */
  focus?: CodeableConcept[];
  /** Condition being studied */
  condition?: CodeableConcept[];
  /** Contact details for the study */
  contact?: ContactDetail[];
  /** References and dependencies */
  relatedArtifact?: RelatedArtifact[];
  /** Used to search for the study */
  keyword?: CodeableConcept[];
  /** Geographic region(s) for study */
  location?: CodeableConcept[];
  /** What this is study doing */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Inclusion & exclusion criteria */
  enrollment?: Reference[];
  /** When the study began and ended */
  period?: Period;
  /** Organization that initiates and is legally responsible for the study */
  sponsor?: Reference;
  /** Researcher who oversees multiple aspects of the study */
  principalInvestigator?: Reference;
  /** Facility where study activities are conducted */
  site?: Reference[];
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  reasonStopped?: CodeableConcept;
  /** Comments made about the study */
  note?: Annotation[];
  /** Defined path through the study for a subject */
  arm?: ResearchStudyArm[];
  /** A goal for the study */
  objective?: ResearchStudyObjective[];
}

export interface ResearchStudyOutputType {
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
  /** Business Identifier for study */
  identifier?: IdentifierOutputType[];
  /** Name for this study */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Steps followed in executing study */
  protocol?: ReferenceOutputType[];
  /** Part of larger study */
  partOf?: ReferenceOutputType[];
  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: CodeableConceptOutputType;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: CodeableConceptOutputType;
  /** Classifications for the study */
  category?: CodeableConceptOutputType[];
  /** Drugs, devices, etc. under study */
  focus?: CodeableConceptOutputType[];
  /** Condition being studied */
  condition?: CodeableConceptOutputType[];
  /** Contact details for the study */
  contact?: ContactDetailOutputType[];
  /** References and dependencies */
  relatedArtifact?: RelatedArtifactOutputType[];
  /** Used to search for the study */
  keyword?: CodeableConceptOutputType[];
  /** Geographic region(s) for study */
  location?: CodeableConceptOutputType[];
  /** What this is study doing */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Inclusion & exclusion criteria */
  enrollment?: ReferenceOutputType[];
  /** When the study began and ended */
  period?: PeriodOutputType;
  /** Organization that initiates and is legally responsible for the study */
  sponsor?: ReferenceOutputType;
  /** Researcher who oversees multiple aspects of the study */
  principalInvestigator?: ReferenceOutputType;
  /** Facility where study activities are conducted */
  site?: ReferenceOutputType[];
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  reasonStopped?: CodeableConceptOutputType;
  /** Comments made about the study */
  note?: AnnotationOutputType[];
  /** Defined path through the study for a subject */
  arm?: ResearchStudyArmOutputType[];
  /** A goal for the study */
  objective?: ResearchStudyObjectiveOutputType[];
}

export const ResearchStudy: t.RecursiveType<
  t.Type<ResearchStudy, ResearchStudyOutputType>,
  ResearchStudy,
  ResearchStudyOutputType
> = t.recursion<ResearchStudy, ResearchStudyOutputType>("ResearchStudy", () =>
  t.intersection(
    [
      t.type({
        /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
        status: primitives.R4.code
      }),
      t.partial({
        /** Defined path through the study for a subject */
        arm: t.array(ResearchStudyArm),
        /** Classifications for the study */
        category: t.array(CodeableConcept),
        /** Condition being studied */
        condition: t.array(CodeableConcept),
        /** Contact details for the study */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** What this is study doing */
        description: primitives.R4.markdown,
        /** Inclusion & exclusion criteria */
        enrollment: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Drugs, devices, etc. under study */
        focus: t.array(CodeableConcept),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for study */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Used to search for the study */
        keyword: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Geographic region(s) for study */
        location: t.array(CodeableConcept),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments made about the study */
        note: t.array(Annotation),
        /** A goal for the study */
        objective: t.array(ResearchStudyObjective),
        /** Part of larger study */
        partOf: t.array(Reference),
        /** When the study began and ended */
        period: Period,
        /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
        phase: CodeableConcept,
        /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
        primaryPurposeType: CodeableConcept,
        /** Researcher who oversees multiple aspects of the study */
        principalInvestigator: Reference,
        /** Steps followed in executing study */
        protocol: t.array(Reference),
        /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
        reasonStopped: CodeableConcept,
        /** References and dependencies */
        relatedArtifact: t.array(RelatedArtifact),
        /** Facility where study activities are conducted */
        site: t.array(Reference),
        /** Organization that initiates and is legally responsible for the study */
        sponsor: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this study */
        title: primitives.R4.string
      })
    ],
    "ResearchStudy"
  )
);
