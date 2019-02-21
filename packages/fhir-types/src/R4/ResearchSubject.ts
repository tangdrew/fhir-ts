/**
 * ResearchSubject Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Physical entity which is the primary unit of interest in the study
 */
export interface ResearchSubject {
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
  /** Business Identifier for research subject in a study */
  identifier?: Identifier[];
  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Start and end of participation */
  period?: Period;
  /** Study subject is part of */
  study: Reference;
  /** Who is part of study */
  individual: Reference;
  /** What path should be followed */
  assignedArm?: t.TypeOf<primitives.R4.StringType>;
  /** What path was followed */
  actualArm?: t.TypeOf<primitives.R4.StringType>;
  /** Agreement to participate in study */
  consent?: Reference;
}

export interface ResearchSubjectOutputType {
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
  /** Business Identifier for research subject in a study */
  identifier?: IdentifierOutputType[];
  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Start and end of participation */
  period?: PeriodOutputType;
  /** Study subject is part of */
  study: ReferenceOutputType;
  /** Who is part of study */
  individual: ReferenceOutputType;
  /** What path should be followed */
  assignedArm?: t.OutputOf<primitives.R4.StringType>;
  /** What path was followed */
  actualArm?: t.OutputOf<primitives.R4.StringType>;
  /** Agreement to participate in study */
  consent?: ReferenceOutputType;
}

export const ResearchSubject: t.RecursiveType<
  t.Type<ResearchSubject, ResearchSubjectOutputType>,
  ResearchSubject,
  ResearchSubjectOutputType
> = t.recursion<ResearchSubject, ResearchSubjectOutputType>(
  "ResearchSubject",
  () =>
    t.intersection(
      [
        t.type({
          /** Who is part of study */
          individual: Reference,
          /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
          status: primitives.R4.code,
          /** Study subject is part of */
          study: Reference
        }),
        t.partial({
          /** What path was followed */
          actualArm: primitives.R4.string,
          /** What path should be followed */
          assignedArm: primitives.R4.string,
          /** Agreement to participate in study */
          consent: Reference,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifier for research subject in a study */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Start and end of participation */
          period: Period,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "ResearchSubject"
    )
);
