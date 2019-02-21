/**
 * CompartmentDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * How a resource is related to the compartment
 */
export interface CompartmentDefinitionResource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of resource type */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Search Parameter Name, or chained parameters */
  param?: t.TypeOf<primitives.R4.StringType>[];
  /** Additional documentation about the resource and compartment */
  documentation?: t.TypeOf<primitives.R4.StringType>;
}

export interface CompartmentDefinitionResourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of resource type */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Search Parameter Name, or chained parameters */
  param?: t.OutputOf<primitives.R4.StringType>[];
  /** Additional documentation about the resource and compartment */
  documentation?: t.OutputOf<primitives.R4.StringType>;
}

export const CompartmentDefinitionResource: t.RecursiveType<
  t.Type<
    CompartmentDefinitionResource,
    CompartmentDefinitionResourceOutputType
  >,
  CompartmentDefinitionResource,
  CompartmentDefinitionResourceOutputType
> = t.recursion<
  CompartmentDefinitionResource,
  CompartmentDefinitionResourceOutputType
>("CompartmentDefinitionResource", () =>
  t.intersection(
    [
      t.type({
        /** Name of resource type */
        code: primitives.R4.code
      }),
      t.partial({
        /** Additional documentation about the resource and compartment */
        documentation: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Search Parameter Name, or chained parameters */
        param: t.array(primitives.R4.string)
      })
    ],
    "CompartmentDefinitionResource"
  )
);

/**
 * Compartment Definition for a resource
 */
export interface CompartmentDefinition {
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
  /** Canonical identifier for this compartment definition, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the compartment definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this compartment definition (computer friendly) */
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
  /** Natural language description of the compartment definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Why this compartment definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Patient | Encounter | RelatedPerson | Practitioner | Device */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Whether the search syntax is supported */
  search: t.TypeOf<primitives.R4.BooleanType>;
  /** How a resource is related to the compartment */
  resource?: CompartmentDefinitionResource[];
}

export interface CompartmentDefinitionOutputType {
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
  /** Canonical identifier for this compartment definition, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the compartment definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this compartment definition (computer friendly) */
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
  /** Natural language description of the compartment definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Why this compartment definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Patient | Encounter | RelatedPerson | Practitioner | Device */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Whether the search syntax is supported */
  search: t.OutputOf<primitives.R4.BooleanType>;
  /** How a resource is related to the compartment */
  resource?: CompartmentDefinitionResourceOutputType[];
}

export const CompartmentDefinition: t.RecursiveType<
  t.Type<CompartmentDefinition, CompartmentDefinitionOutputType>,
  CompartmentDefinition,
  CompartmentDefinitionOutputType
> = t.recursion<CompartmentDefinition, CompartmentDefinitionOutputType>(
  "CompartmentDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Patient | Encounter | RelatedPerson | Practitioner | Device */
          code: primitives.R4.code,
          /** Name for this compartment definition (computer friendly) */
          name: primitives.R4.string,
          /** Whether the search syntax is supported */
          search: primitives.R4.boolean,
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** Canonical identifier for this compartment definition, represented as a URI (globally unique) */
          url: primitives.R4.uri
        }),
        t.partial({
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the compartment definition */
          description: primitives.R4.markdown,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this compartment definition is defined */
          purpose: primitives.R4.markdown,
          /** How a resource is related to the compartment */
          resource: t.array(CompartmentDefinitionResource),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the compartment definition */
          version: primitives.R4.string
        })
      ],
      "CompartmentDefinition"
    )
);
