/**
 * GraphDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Compartment Consistency Rules
 */
export interface GraphDefinitionLinkTargetCompartment {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** condition | requirement */
  use: t.TypeOf<primitives.R4.CodeType>;
  /** Identifies the compartment */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** identical | matching | different | custom */
  rule: t.TypeOf<primitives.R4.CodeType>;
  /** Custom rule, as a FHIRPath expression */
  expression?: t.TypeOf<primitives.R4.StringType>;
  /** Documentation for FHIRPath expression */
  description?: t.TypeOf<primitives.R4.StringType>;
}

export interface GraphDefinitionLinkTargetCompartmentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** condition | requirement */
  use: t.OutputOf<primitives.R4.CodeType>;
  /** Identifies the compartment */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** identical | matching | different | custom */
  rule: t.OutputOf<primitives.R4.CodeType>;
  /** Custom rule, as a FHIRPath expression */
  expression?: t.OutputOf<primitives.R4.StringType>;
  /** Documentation for FHIRPath expression */
  description?: t.OutputOf<primitives.R4.StringType>;
}

export const GraphDefinitionLinkTargetCompartment: t.RecursiveType<
  t.Type<
    GraphDefinitionLinkTargetCompartment,
    GraphDefinitionLinkTargetCompartmentOutputType
  >,
  GraphDefinitionLinkTargetCompartment,
  GraphDefinitionLinkTargetCompartmentOutputType
> = t.recursion<
  GraphDefinitionLinkTargetCompartment,
  GraphDefinitionLinkTargetCompartmentOutputType
>("GraphDefinitionLinkTargetCompartment", () =>
  t.intersection(
    [
      t.type({
        /** Identifies the compartment */
        code: primitives.R4.code,
        /** identical | matching | different | custom */
        rule: primitives.R4.code,
        /** condition | requirement */
        use: primitives.R4.code
      }),
      t.partial({
        /** Documentation for FHIRPath expression */
        description: primitives.R4.string,
        /** Custom rule, as a FHIRPath expression */
        expression: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "GraphDefinitionLinkTargetCompartment"
  )
);

/**
 * Potential target for the link
 */
export interface GraphDefinitionLinkTarget {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of resource this link refers to */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Criteria for reverse lookup */
  params?: t.TypeOf<primitives.R4.StringType>;
  /** Profile for the target resource */
  profile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Compartment Consistency Rules */
  compartment?: GraphDefinitionLinkTargetCompartment[];
  /** Additional links from target resource */
  link?: GraphDefinitionLink[];
}

export interface GraphDefinitionLinkTargetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of resource this link refers to */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Criteria for reverse lookup */
  params?: t.OutputOf<primitives.R4.StringType>;
  /** Profile for the target resource */
  profile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Compartment Consistency Rules */
  compartment?: GraphDefinitionLinkTargetCompartmentOutputType[];
  /** Additional links from target resource */
  link?: GraphDefinitionLinkOutputType[];
}

export const GraphDefinitionLinkTarget: t.RecursiveType<
  t.Type<GraphDefinitionLinkTarget, GraphDefinitionLinkTargetOutputType>,
  GraphDefinitionLinkTarget,
  GraphDefinitionLinkTargetOutputType
> = t.recursion<GraphDefinitionLinkTarget, GraphDefinitionLinkTargetOutputType>(
  "GraphDefinitionLinkTarget",
  () =>
    t.intersection(
      [
        t.type({
          /** Type of resource this link refers to */
          type: primitives.R4.code
        }),
        t.partial({
          /** Compartment Consistency Rules */
          compartment: t.array(GraphDefinitionLinkTargetCompartment),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Additional links from target resource */
          link: t.array(GraphDefinitionLink),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Criteria for reverse lookup */
          params: primitives.R4.string,
          /** Profile for the target resource */
          profile: primitives.R4.canonical
        })
      ],
      "GraphDefinitionLinkTarget"
    )
);

/**
 * Links this graph makes rules about
 */
export interface GraphDefinitionLink {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Path in the resource that contains the link */
  path?: t.TypeOf<primitives.R4.StringType>;
  /** Which slice (if profiled) */
  sliceName?: t.TypeOf<primitives.R4.StringType>;
  /** Minimum occurrences for this link */
  min?: t.TypeOf<primitives.R4.IntegerType>;
  /** Maximum occurrences for this link */
  max?: t.TypeOf<primitives.R4.StringType>;
  /** Why this link is specified */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Potential target for the link */
  target?: GraphDefinitionLinkTarget[];
}

export interface GraphDefinitionLinkOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Path in the resource that contains the link */
  path?: t.OutputOf<primitives.R4.StringType>;
  /** Which slice (if profiled) */
  sliceName?: t.OutputOf<primitives.R4.StringType>;
  /** Minimum occurrences for this link */
  min?: t.OutputOf<primitives.R4.IntegerType>;
  /** Maximum occurrences for this link */
  max?: t.OutputOf<primitives.R4.StringType>;
  /** Why this link is specified */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Potential target for the link */
  target?: GraphDefinitionLinkTargetOutputType[];
}

export const GraphDefinitionLink: t.RecursiveType<
  t.Type<GraphDefinitionLink, GraphDefinitionLinkOutputType>,
  GraphDefinitionLink,
  GraphDefinitionLinkOutputType
> = t.recursion<GraphDefinitionLink, GraphDefinitionLinkOutputType>(
  "GraphDefinitionLink",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Why this link is specified */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Maximum occurrences for this link */
          max: primitives.R4.string,
          /** Minimum occurrences for this link */
          min: primitives.R4.integer,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Path in the resource that contains the link */
          path: primitives.R4.string,
          /** Which slice (if profiled) */
          sliceName: primitives.R4.string,
          /** Potential target for the link */
          target: t.array(GraphDefinitionLinkTarget)
        })
      ],
      "GraphDefinitionLink"
    )
);

/**
 * Definition of a graph of resources
 */
export interface GraphDefinition {
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
  /** Canonical identifier for this graph definition, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the graph definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this graph definition (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the graph definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for graph definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this graph definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Type of resource at which the graph starts */
  start: t.TypeOf<primitives.R4.CodeType>;
  /** Profile on base resource */
  profile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Links this graph makes rules about */
  link?: GraphDefinitionLink[];
}

export interface GraphDefinitionOutputType {
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
  /** Canonical identifier for this graph definition, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the graph definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this graph definition (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the graph definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for graph definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this graph definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Type of resource at which the graph starts */
  start: t.OutputOf<primitives.R4.CodeType>;
  /** Profile on base resource */
  profile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Links this graph makes rules about */
  link?: GraphDefinitionLinkOutputType[];
}

export const GraphDefinition: t.RecursiveType<
  t.Type<GraphDefinition, GraphDefinitionOutputType>,
  GraphDefinition,
  GraphDefinitionOutputType
> = t.recursion<GraphDefinition, GraphDefinitionOutputType>(
  "GraphDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Name for this graph definition (computer friendly) */
          name: primitives.R4.string,
          /** Type of resource at which the graph starts */
          start: primitives.R4.code,
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the graph definition */
          description: primitives.R4.markdown,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for graph definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Links this graph makes rules about */
          link: t.array(GraphDefinitionLink),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Profile on base resource */
          profile: primitives.R4.canonical,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this graph definition is defined */
          purpose: primitives.R4.markdown,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Canonical identifier for this graph definition, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the graph definition */
          version: primitives.R4.string
        })
      ],
      "GraphDefinition"
    )
);
