/**
 * GraphDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Definition of a graph of resources
 */
export interface GraphDefinition {
  /** The type of resource */
  resourceType?: "GraphDefinition";
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
  /** Canonical identifier for this graph definition, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the graph definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this graph definition (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Date last changed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the graph definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for graph definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this graph definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Type of resource at which the graph starts */
  start: primitives.R4.code;
  /** Extension of start element */
  _start?: Element;
  /** Profile on base resource */
  profile?: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
}
/**
 * Definition of a graph of resources
 */
export const GraphDefinition: t.Type<GraphDefinition> = t.recursion<
  GraphDefinition
>("GraphDefinition", () =>
  t.intersection([
    t.type({
      /** Name for this graph definition (computer friendly) */
      name: primitives.R4.string,
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** Type of resource at which the graph starts */
      start: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("GraphDefinition"),
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
      /** Canonical identifier for this graph definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Business version of the graph definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Extension of name element */
      _name: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the graph definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for graph definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this graph definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Extension of start element */
      _start: Element,
      /** Profile on base resource */
      profile: primitives.R4.canonical,
      /** Extension of profile element */
      _profile: Element
    })
  ])
);

/**
 * Links this graph makes rules about
 */
export interface GraphDefinitionLink {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Path in the resource that contains the link */
  path?: string;
  /** Extension of path element */
  _path?: Element;
  /** Which slice (if profiled) */
  sliceName?: string;
  /** Extension of sliceName element */
  _sliceName?: Element;
  /** Minimum occurrences for this link */
  min?: primitives.R4.integer;
  /** Extension of min element */
  _min?: Element;
  /** Maximum occurrences for this link */
  max?: string;
  /** Extension of max element */
  _max?: Element;
  /** Why this link is specified */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Links this graph makes rules about
 */
export const GraphDefinitionLink: t.Type<GraphDefinitionLink> = t.recursion<
  GraphDefinitionLink
>("GraphDefinitionLink", () =>
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
      /** Path in the resource that contains the link */
      path: primitives.R4.string,
      /** Extension of path element */
      _path: Element,
      /** Which slice (if profiled) */
      sliceName: primitives.R4.string,
      /** Extension of sliceName element */
      _sliceName: Element,
      /** Minimum occurrences for this link */
      min: primitives.R4.integer,
      /** Extension of min element */
      _min: Element,
      /** Maximum occurrences for this link */
      max: primitives.R4.string,
      /** Extension of max element */
      _max: Element,
      /** Why this link is specified */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * Potential target for the link
 */
export interface GraphDefinitionLinkTarget {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of resource this link refers to */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Criteria for reverse lookup */
  params?: string;
  /** Extension of params element */
  _params?: Element;
  /** Profile for the target resource */
  profile?: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
  /** Additional links from target resource */
  link?: GraphDefinitionLink[];
}
/**
 * Potential target for the link
 */
export const GraphDefinitionLinkTarget: t.Type<
  GraphDefinitionLinkTarget
> = t.recursion<GraphDefinitionLinkTarget>("GraphDefinitionLinkTarget", () =>
  t.intersection([
    t.type({
      /** Type of resource this link refers to */
      type: primitives.R4.code
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
      /** Extension of type element */
      _type: Element,
      /** Criteria for reverse lookup */
      params: primitives.R4.string,
      /** Extension of params element */
      _params: Element,
      /** Profile for the target resource */
      profile: primitives.R4.canonical,
      /** Extension of profile element */
      _profile: Element,
      /** Additional links from target resource */
      link: t.array(GraphDefinitionLink)
    })
  ])
);

/**
 * Compartment Consistency Rules
 */
export interface GraphDefinitionLinkTargetCompartment {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** condition | requirement */
  use: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** Identifies the compartment */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** identical | matching | different | custom */
  rule: primitives.R4.code;
  /** Extension of rule element */
  _rule?: Element;
  /** Custom rule, as a FHIRPath expression */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
  /** Documentation for FHIRPath expression */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Compartment Consistency Rules
 */
export const GraphDefinitionLinkTargetCompartment: t.Type<
  GraphDefinitionLinkTargetCompartment
> = t.recursion<GraphDefinitionLinkTargetCompartment>(
  "GraphDefinitionLinkTargetCompartment",
  () =>
    t.intersection([
      t.type({
        /** condition | requirement */
        use: primitives.R4.code,
        /** Identifies the compartment */
        code: primitives.R4.code,
        /** identical | matching | different | custom */
        rule: primitives.R4.code
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
        /** Extension of use element */
        _use: Element,
        /** Extension of code element */
        _code: Element,
        /** Extension of rule element */
        _rule: Element,
        /** Custom rule, as a FHIRPath expression */
        expression: primitives.R4.string,
        /** Extension of expression element */
        _expression: Element,
        /** Documentation for FHIRPath expression */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element
      })
    ])
);
