/**
 * EnrollmentRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Enroll in coverage
 */
export interface EnrollmentRequest {
  /** The type of resource */
  resourceType?: "EnrollmentRequest";
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
  /** Business Identifier */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Creation date */
  created?: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Target */
  insurer?: Reference;
  /** Responsible practitioner */
  provider?: Reference;
  /** The subject to be enrolled */
  candidate?: Reference;
  /** Insurance information */
  coverage?: Reference;
}
/**
 * Enroll in coverage
 */
export const EnrollmentRequest: t.Type<EnrollmentRequest> = t.recursion<
  EnrollmentRequest
>("EnrollmentRequest", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("EnrollmentRequest"),
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
      /** Business Identifier */
      identifier: t.array(Identifier),
      /** active | cancelled | draft | entered-in-error */
      status: primitives.R4.code,
      /** Extension of status element */
      _status: Element,
      /** Creation date */
      created: primitives.R4.dateTime,
      /** Extension of created element */
      _created: Element,
      /** Target */
      insurer: Reference,
      /** Responsible practitioner */
      provider: Reference,
      /** The subject to be enrolled */
      candidate: Reference,
      /** Insurance information */
      coverage: Reference
    })
  ])
);
