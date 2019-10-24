/**
 * ResearchSubject Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Physical entity which is the primary unit of interest in the study
 */
export interface ResearchSubject {
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
  /** Business Identifier for research subject in a study */
  identifier?: Identifier[];
  /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Start and end of participation */
  period?: Period;
  /** Study subject is part of */
  study: Reference;
  /** Who is part of study */
  individual: Reference;
  /** What path should be followed */
  assignedArm?: string;
  /** Extension of assignedArm element */
  _assignedArm?: Element;
  /** What path was followed */
  actualArm?: string;
  /** Extension of actualArm element */
  _actualArm?: Element;
  /** Agreement to participate in study */
  consent?: Reference;
}
/**
 * Physical entity which is the primary unit of interest in the study
 */
export const ResearchSubject: t.Type<ResearchSubject> = t.recursion<
  ResearchSubject
>("ResearchSubject", () =>
  t.intersection([
    t.type({
      /** candidate | eligible | follow-up | ineligible | not-registered | off-study | on-study | on-study-intervention | on-study-observation | pending-on-study | potential-candidate | screening | withdrawn */
      status: primitives.R4.code,
      /** Study subject is part of */
      study: Reference,
      /** Who is part of study */
      individual: Reference
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
      /** Business Identifier for research subject in a study */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Start and end of participation */
      period: Period,
      /** What path should be followed */
      assignedArm: primitives.R4.string,
      /** Extension of assignedArm element */
      _assignedArm: Element,
      /** What path was followed */
      actualArm: primitives.R4.string,
      /** Extension of actualArm element */
      _actualArm: Element,
      /** Agreement to participate in study */
      consent: Reference
    })
  ])
);
