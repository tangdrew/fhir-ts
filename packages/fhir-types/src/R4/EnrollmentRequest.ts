/**
 * EnrollmentRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Enroll in coverage
 */
export interface EnrollmentRequest {
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
  /** Business Identifier */
  identifier?: Identifier[];
  /** active | cancelled | draft | entered-in-error */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Creation date */
  created?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Target */
  insurer?: Reference;
  /** Responsible practitioner */
  provider?: Reference;
  /** The subject to be enrolled */
  candidate?: Reference;
  /** Insurance information */
  coverage?: Reference;
}

export interface EnrollmentRequestOutputType {
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
  /** Business Identifier */
  identifier?: IdentifierOutputType[];
  /** active | cancelled | draft | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Creation date */
  created?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Target */
  insurer?: ReferenceOutputType;
  /** Responsible practitioner */
  provider?: ReferenceOutputType;
  /** The subject to be enrolled */
  candidate?: ReferenceOutputType;
  /** Insurance information */
  coverage?: ReferenceOutputType;
}

export const EnrollmentRequest: t.RecursiveType<
  t.Type<EnrollmentRequest, EnrollmentRequestOutputType>,
  EnrollmentRequest,
  EnrollmentRequestOutputType
> = t.recursion<EnrollmentRequest, EnrollmentRequestOutputType>(
  "EnrollmentRequest",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The subject to be enrolled */
          candidate: Reference,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Insurance information */
          coverage: Reference,
          /** Creation date */
          created: primitives.R4.dateTime,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Target */
          insurer: Reference,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Responsible practitioner */
          provider: Reference,
          /** active | cancelled | draft | entered-in-error */
          status: primitives.R4.code,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "EnrollmentRequest"
    )
);
