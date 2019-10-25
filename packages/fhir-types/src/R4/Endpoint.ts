/**
 * Endpoint Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * The technical details of an endpoint that can be used for electronic services
 */
export interface Endpoint {
  /** The type of resource */
  resourceType?: "Endpoint";
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
  /** Identifies this endpoint across multiple systems */
  identifier?: Identifier[];
  /** active | suspended | error | off | entered-in-error | test */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Protocol/Profile/Standard to be used with this endpoint connection */
  connectionType: Coding;
  /** A name that this endpoint can be identified by */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
  managingOrganization?: Reference;
  /** Contact details for source (e.g. troubleshooting) */
  contact?: ContactPoint[];
  /** Interval the endpoint is expected to be operational */
  period?: Period;
  /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
  payloadType: CodeableConcept[];
  /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
  payloadMimeType?: primitives.R4.code[];
  /** Extension of payloadMimeType element */
  _payloadMimeType?: Element[];
  /** The technical base address for connecting to this endpoint */
  address: primitives.R4.url;
  /** Extension of address element */
  _address?: Element;
  /** Usage depends on the channel type */
  header?: string[];
  /** Extension of header element */
  _header?: Element[];
}
/**
 * The technical details of an endpoint that can be used for electronic services
 */
export const Endpoint: t.Type<Endpoint> = t.recursion<Endpoint>(
  "Endpoint",
  () =>
    t.intersection([
      t.type({
        /** active | suspended | error | off | entered-in-error | test */
        status: primitives.R4.code,
        /** Protocol/Profile/Standard to be used with this endpoint connection */
        connectionType: Coding,
        /** The type of content that may be used at this endpoint (e.g. XDS Discharge summaries) */
        payloadType: t.array(CodeableConcept),
        /** The technical base address for connecting to this endpoint */
        address: primitives.R4.url
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Endpoint"),
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
        /** Identifies this endpoint across multiple systems */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** A name that this endpoint can be identified by */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Organization that manages this endpoint (might not be the organization that exposes the endpoint) */
        managingOrganization: Reference,
        /** Contact details for source (e.g. troubleshooting) */
        contact: t.array(ContactPoint),
        /** Interval the endpoint is expected to be operational */
        period: Period,
        /** Mimetype to send. If not specified, the content could be anything (including no payload, if the connectionType defined this) */
        payloadMimeType: t.array(primitives.R4.code),
        /** Extension of payloadMimeType element */
        _payloadMimeType: t.array(Element),
        /** Extension of address element */
        _address: Element,
        /** Usage depends on the channel type */
        header: t.array(primitives.R4.string),
        /** Extension of header element */
        _header: t.array(Element)
      })
    ])
);
