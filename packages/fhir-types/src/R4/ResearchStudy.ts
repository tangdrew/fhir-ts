/**
 * ResearchStudy Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { Resource } from "./Resource";

/**
 * Investigation to increase healthcare-related patient-independent knowledge
 */
export interface ResearchStudy {
  /** The type of resource */
  resourceType?: "ResearchStudy";
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
  /** Business Identifier for study */
  identifier?: Identifier[];
  /** Name for this study */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Steps followed in executing study */
  protocol?: Reference[];
  /** Part of larger study */
  partOf?: Reference[];
  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
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
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
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
}
/**
 * Investigation to increase healthcare-related patient-independent knowledge
 */
export const ResearchStudy: t.Type<ResearchStudy> = t.recursion<ResearchStudy>(
  "ResearchStudy",
  () =>
    t.intersection([
      t.type({
        /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
        status: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("ResearchStudy"),
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
        /** Business Identifier for study */
        identifier: t.array(Identifier),
        /** Name for this study */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Steps followed in executing study */
        protocol: t.array(Reference),
        /** Part of larger study */
        partOf: t.array(Reference),
        /** Extension of status element */
        _status: Element,
        /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
        primaryPurposeType: CodeableConcept,
        /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
        phase: CodeableConcept,
        /** Classifications for the study */
        category: t.array(CodeableConcept),
        /** Drugs, devices, etc. under study */
        focus: t.array(CodeableConcept),
        /** Condition being studied */
        condition: t.array(CodeableConcept),
        /** Contact details for the study */
        contact: t.array(ContactDetail),
        /** References and dependencies */
        relatedArtifact: t.array(RelatedArtifact),
        /** Used to search for the study */
        keyword: t.array(CodeableConcept),
        /** Geographic region(s) for study */
        location: t.array(CodeableConcept),
        /** What this is study doing */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** Inclusion & exclusion criteria */
        enrollment: t.array(Reference),
        /** When the study began and ended */
        period: Period,
        /** Organization that initiates and is legally responsible for the study */
        sponsor: Reference,
        /** Researcher who oversees multiple aspects of the study */
        principalInvestigator: Reference,
        /** Facility where study activities are conducted */
        site: t.array(Reference),
        /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
        reasonStopped: CodeableConcept,
        /** Comments made about the study */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Defined path through the study for a subject
 */
export interface ResearchStudyArm {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for study arm */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Categorization of study arm */
  type?: CodeableConcept;
  /** Short explanation of study path */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Defined path through the study for a subject
 */
export const ResearchStudyArm: t.Type<ResearchStudyArm> = t.recursion<
  ResearchStudyArm
>("ResearchStudyArm", () =>
  t.intersection([
    t.type({
      /** Label for study arm */
      name: primitives.R4.string
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
      /** Extension of name element */
      _name: Element,
      /** Categorization of study arm */
      type: CodeableConcept,
      /** Short explanation of study path */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * A goal for the study
 */
export interface ResearchStudyObjective {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for the objective */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** primary | secondary | exploratory */
  type?: CodeableConcept;
}
/**
 * A goal for the study
 */
export const ResearchStudyObjective: t.Type<
  ResearchStudyObjective
> = t.recursion<ResearchStudyObjective>("ResearchStudyObjective", () =>
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
      /** Label for the objective */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** primary | secondary | exploratory */
      type: CodeableConcept
    })
  ])
);
