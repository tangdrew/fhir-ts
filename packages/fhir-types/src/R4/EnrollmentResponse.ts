/**
 * EnrollmentResponse Module
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
 * EnrollmentResponse resource
 */
export interface EnrollmentResponse {
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
  /** Claim reference */
  request?: Reference;
  /** queued | complete | error | partial */
  outcome?: t.TypeOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.TypeOf<primitives.R4.StringType>;
  /** Creation date */
  created?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Insurer */
  organization?: Reference;
  /** Responsible practitioner */
  requestProvider?: Reference;
}

export interface EnrollmentResponseOutputType {
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
  /** Claim reference */
  request?: ReferenceOutputType;
  /** queued | complete | error | partial */
  outcome?: t.OutputOf<primitives.R4.CodeType>;
  /** Disposition Message */
  disposition?: t.OutputOf<primitives.R4.StringType>;
  /** Creation date */
  created?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Insurer */
  organization?: ReferenceOutputType;
  /** Responsible practitioner */
  requestProvider?: ReferenceOutputType;
}

export const EnrollmentResponse: t.RecursiveType<
  t.Type<EnrollmentResponse, EnrollmentResponseOutputType>,
  EnrollmentResponse,
  EnrollmentResponseOutputType
> = t.recursion<EnrollmentResponse, EnrollmentResponseOutputType>(
  "EnrollmentResponse",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Creation date */
          created: primitives.R4.dateTime,
          /** Disposition Message */
          disposition: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business Identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Insurer */
          organization: Reference,
          /** queued | complete | error | partial */
          outcome: primitives.R4.code,
          /** Claim reference */
          request: Reference,
          /** Responsible practitioner */
          requestProvider: Reference,
          /** active | cancelled | draft | entered-in-error */
          status: primitives.R4.code,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "EnrollmentResponse"
    )
);
