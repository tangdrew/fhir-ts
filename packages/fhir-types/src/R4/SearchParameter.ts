/**
 * SearchParameter Module
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
 * For Composite resources to define the parts
 */
export interface SearchParameterComponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Defines how the part works */
  definition: t.TypeOf<primitives.R4.CanonicalType>;
  /** Subexpression relative to main expression */
  expression: t.TypeOf<primitives.R4.StringType>;
}

export interface SearchParameterComponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Defines how the part works */
  definition: t.OutputOf<primitives.R4.CanonicalType>;
  /** Subexpression relative to main expression */
  expression: t.OutputOf<primitives.R4.StringType>;
}

export const SearchParameterComponent: t.RecursiveType<
  t.Type<SearchParameterComponent, SearchParameterComponentOutputType>,
  SearchParameterComponent,
  SearchParameterComponentOutputType
> = t.recursion<SearchParameterComponent, SearchParameterComponentOutputType>(
  "SearchParameterComponent",
  () =>
    t.intersection(
      [
        t.type({
          /** Defines how the part works */
          definition: primitives.R4.canonical,
          /** Subexpression relative to main expression */
          expression: primitives.R4.string
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "SearchParameterComponent"
    )
);

/**
 * Search parameter for a resource
 */
export interface SearchParameter {
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
  /** Canonical identifier for this search parameter, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the search parameter */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this search parameter (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Original definition for the search parameter */
  derivedFrom?: t.TypeOf<primitives.R4.CanonicalType>;
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
  /** Natural language description of the search parameter */
  description: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for search parameter (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this search parameter is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Code used in URL */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** The resource type(s) this search parameter applies to */
  base: t.TypeOf<primitives.R4.CodeType>[];
  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** FHIRPath expression that extracts the values */
  expression?: t.TypeOf<primitives.R4.StringType>;
  /** XPath that extracts the values */
  xpath?: t.TypeOf<primitives.R4.StringType>;
  /** normal | phonetic | nearby | distance | other */
  xpathUsage?: t.TypeOf<primitives.R4.CodeType>;
  /** Types of resource (if a resource reference) */
  target?: t.TypeOf<primitives.R4.CodeType>[];
  /** Allow multiple values per parameter (or) */
  multipleOr?: t.TypeOf<primitives.R4.BooleanType>;
  /** Allow multiple parameters (and) */
  multipleAnd?: t.TypeOf<primitives.R4.BooleanType>;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap */
  comparator?: t.TypeOf<primitives.R4.CodeType>[];
  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType */
  modifier?: t.TypeOf<primitives.R4.CodeType>[];
  /** Chained names supported */
  chain?: t.TypeOf<primitives.R4.StringType>[];
  /** For Composite resources to define the parts */
  component?: SearchParameterComponent[];
}

export interface SearchParameterOutputType {
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
  /** Canonical identifier for this search parameter, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the search parameter */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this search parameter (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Original definition for the search parameter */
  derivedFrom?: t.OutputOf<primitives.R4.CanonicalType>;
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
  /** Natural language description of the search parameter */
  description: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for search parameter (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this search parameter is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Code used in URL */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** The resource type(s) this search parameter applies to */
  base: t.OutputOf<primitives.R4.CodeType>[];
  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** FHIRPath expression that extracts the values */
  expression?: t.OutputOf<primitives.R4.StringType>;
  /** XPath that extracts the values */
  xpath?: t.OutputOf<primitives.R4.StringType>;
  /** normal | phonetic | nearby | distance | other */
  xpathUsage?: t.OutputOf<primitives.R4.CodeType>;
  /** Types of resource (if a resource reference) */
  target?: t.OutputOf<primitives.R4.CodeType>[];
  /** Allow multiple values per parameter (or) */
  multipleOr?: t.OutputOf<primitives.R4.BooleanType>;
  /** Allow multiple parameters (and) */
  multipleAnd?: t.OutputOf<primitives.R4.BooleanType>;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap */
  comparator?: t.OutputOf<primitives.R4.CodeType>[];
  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType */
  modifier?: t.OutputOf<primitives.R4.CodeType>[];
  /** Chained names supported */
  chain?: t.OutputOf<primitives.R4.StringType>[];
  /** For Composite resources to define the parts */
  component?: SearchParameterComponentOutputType[];
}

export const SearchParameter: t.RecursiveType<
  t.Type<SearchParameter, SearchParameterOutputType>,
  SearchParameter,
  SearchParameterOutputType
> = t.recursion<SearchParameter, SearchParameterOutputType>(
  "SearchParameter",
  () =>
    t.intersection(
      [
        t.type({
          /** The resource type(s) this search parameter applies to */
          base: t.array(primitives.R4.code),
          /** Code used in URL */
          code: primitives.R4.code,
          /** Natural language description of the search parameter */
          description: primitives.R4.markdown,
          /** Name for this search parameter (computer friendly) */
          name: primitives.R4.string,
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** number | date | string | token | reference | composite | quantity | uri | special */
          type: primitives.R4.code,
          /** Canonical identifier for this search parameter, represented as a URI (globally unique) */
          url: primitives.R4.uri
        }),
        t.partial({
          /** Chained names supported */
          chain: t.array(primitives.R4.string),
          /** eq | ne | gt | lt | ge | le | sa | eb | ap */
          comparator: t.array(primitives.R4.code),
          /** For Composite resources to define the parts */
          component: t.array(SearchParameterComponent),
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Original definition for the search parameter */
          derivedFrom: primitives.R4.canonical,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** FHIRPath expression that extracts the values */
          expression: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for search parameter (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType */
          modifier: t.array(primitives.R4.code),
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Allow multiple parameters (and) */
          multipleAnd: primitives.R4.boolean,
          /** Allow multiple values per parameter (or) */
          multipleOr: primitives.R4.boolean,
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this search parameter is defined */
          purpose: primitives.R4.markdown,
          /** Types of resource (if a resource reference) */
          target: t.array(primitives.R4.code),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the search parameter */
          version: primitives.R4.string,
          /** XPath that extracts the values */
          xpath: primitives.R4.string,
          /** normal | phonetic | nearby | distance | other */
          xpathUsage: primitives.R4.code
        })
      ],
      "SearchParameter"
    )
);
