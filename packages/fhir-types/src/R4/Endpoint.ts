/**
 * Endpoint Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The technical details of an endpoint that can be used for electronic services
 */
export interface Endpoint {
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
  /** Identifies this endpoint across multiple systems */
  identifier?: Identifier[];
  /** active | suspended | error | off | entered-in-error | test */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Protocol/Profile/Standard to be used with this endpoint connection */
  connectionType: Coding;
  /** A name that this endpoint can be identified by */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
  managingOrganization?: Reference;
  /** Contact details for source (e.g. troubleshooting) */
  contact?: ContactPoint[];
  /** Interval the endpoint is expected to be operational */
  period?: Period;
  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
  payloadType: CodeableConcept[];
  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
  payloadMimeType?: t.TypeOf<primitives.R4.CodeType>[];
  /** The technical base address for connecting to this endpoint */
  address: t.TypeOf<primitives.R4.URLType>;
  /** Usage depends on the channel type */
  header?: t.TypeOf<primitives.R4.StringType>[];
}

export interface EndpointOutputType {
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
  /** Identifies this endpoint across multiple systems */
  identifier?: IdentifierOutputType[];
  /** active | suspended | error | off | entered-in-error | test */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Protocol/Profile/Standard to be used with this endpoint connection */
  connectionType: CodingOutputType;
  /** A name that this endpoint can be identified by */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
  managingOrganization?: ReferenceOutputType;
  /** Contact details for source (e.g. troubleshooting) */
  contact?: ContactPointOutputType[];
  /** Interval the endpoint is expected to be operational */
  period?: PeriodOutputType;
  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
  payloadType: CodeableConceptOutputType[];
  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
  payloadMimeType?: t.OutputOf<primitives.R4.CodeType>[];
  /** The technical base address for connecting to this endpoint */
  address: t.OutputOf<primitives.R4.URLType>;
  /** Usage depends on the channel type */
  header?: t.OutputOf<primitives.R4.StringType>[];
}

export const Endpoint: t.RecursiveType<
  t.Type<Endpoint, EndpointOutputType>,
  Endpoint,
  EndpointOutputType
> = t.recursion<Endpoint, EndpointOutputType>("Endpoint", () =>
  t.intersection(
    [
      t.type({
        /** The technical base address for connecting to this endpoint */
        address: primitives.R4.url,
        /** Protocol/Profile/Standard to be used with this endpoint connection */
        connectionType: Coding,
        /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
        payloadType: t.array(CodeableConcept),
        /** active | suspended | error | off | entered-in-error | test */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contact details for source (e.g. troubleshooting) */
        contact: t.array(ContactPoint),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Usage depends on the channel type */
        header: t.array(primitives.R4.string),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifies this endpoint across multiple systems */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
        managingOrganization: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** A name that this endpoint can be identified by */
        name: primitives.R4.string,
        /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
        payloadMimeType: t.array(primitives.R4.code),
        /** Interval the endpoint is expected to be operational */
        period: Period,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Endpoint"
  )
);
