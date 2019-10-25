/**
 * EnrollmentResponse Module
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
 * EnrollmentResponse resource
 */
export interface EnrollmentResponse {
  /** The type of resource */
  resourceType?: "EnrollmentResponse";
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
  /** Claim reference */
  request?: Reference;
  /** queued | complete | error | partial */
  outcome?: primitives.R4.code;
  /** Extension of outcome element */
  _outcome?: Element;
  /** Disposition Message */
  disposition?: string;
  /** Extension of disposition element */
  _disposition?: Element;
  /** Creation date */
  created?: primitives.R4.dateTime;
  /** Extension of created element */
  _created?: Element;
  /** Insurer */
  organization?: Reference;
  /** Responsible practitioner */
  requestProvider?: Reference;
}
/**
 * EnrollmentResponse resource
 */
export const EnrollmentResponse: t.Type<EnrollmentResponse> = t.recursion<
  EnrollmentResponse
>("EnrollmentResponse", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("EnrollmentResponse"),
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
      /** Claim reference */
      request: Reference,
      /** queued | complete | error | partial */
      outcome: primitives.R4.code,
      /** Extension of outcome element */
      _outcome: Element,
      /** Disposition Message */
      disposition: primitives.R4.string,
      /** Extension of disposition element */
      _disposition: Element,
      /** Creation date */
      created: primitives.R4.dateTime,
      /** Extension of created element */
      _created: Element,
      /** Insurer */
      organization: Reference,
      /** Responsible practitioner */
      requestProvider: Reference
    })
  ])
);
