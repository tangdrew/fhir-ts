/**
 * SearchParameter Module
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
 * Search parameter for a resource
 */
export interface SearchParameter {
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
  /** Canonical identifier for this search parameter, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the search parameter */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this search parameter (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Original definition for the search parameter */
  derivedFrom?: primitives.R4.canonical;
  /** Extension of derivedFrom element */
  _derivedFrom?: Element;
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
  /** Natural language description of the search parameter */
  description: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for search parameter (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this search parameter is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Code used in URL */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** The resource type(s) this search parameter applies to */
  base: primitives.R4.code[];
  /** Extension of base element */
  _base?: Element[];
  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** FHIRPath expression that extracts the values */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
  /** XPath that extracts the values */
  xpath?: string;
  /** Extension of xpath element */
  _xpath?: Element;
  /** normal | phonetic | nearby | distance | other */
  xpathUsage?: primitives.R4.code;
  /** Extension of xpathUsage element */
  _xpathUsage?: Element;
  /** Types of resource (if a resource reference) */
  target?: primitives.R4.code[];
  /** Extension of target element */
  _target?: Element[];
  /** Allow multiple values per parameter (or) */
  multipleOr?: boolean;
  /** Extension of multipleOr element */
  _multipleOr?: Element;
  /** Allow multiple parameters (and) */
  multipleAnd?: boolean;
  /** Extension of multipleAnd element */
  _multipleAnd?: Element;
  /** eq | ne | gt | lt | ge | le | sa | eb | ap */
  comparator?: primitives.R4.code[];
  /** Extension of comparator element */
  _comparator?: Element[];
  /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType */
  modifier?: primitives.R4.code[];
  /** Extension of modifier element */
  _modifier?: Element[];
  /** Chained names supported */
  chain?: string[];
  /** Extension of chain element */
  _chain?: Element[];
}
/**
 * Search parameter for a resource
 */
export const SearchParameter: t.Type<SearchParameter> = t.recursion<
  SearchParameter
>("SearchParameter", () =>
  t.intersection([
    t.type({
      /** Canonical identifier for this search parameter, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Name for this search parameter (computer friendly) */
      name: primitives.R4.string,
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** Natural language description of the search parameter */
      description: primitives.R4.markdown,
      /** Code used in URL */
      code: primitives.R4.code,
      /** The resource type(s) this search parameter applies to */
      base: t.array(primitives.R4.code),
      /** number | date | string | token | reference | composite | quantity | uri | special */
      type: primitives.R4.code
    }),
    t.partial({
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
      /** Extension of url element */
      _url: Element,
      /** Business version of the search parameter */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Extension of name element */
      _name: Element,
      /** Original definition for the search parameter */
      derivedFrom: primitives.R4.canonical,
      /** Extension of derivedFrom element */
      _derivedFrom: Element,
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
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for search parameter (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this search parameter is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Extension of code element */
      _code: Element,
      /** Extension of base element */
      _base: t.array(Element),
      /** Extension of type element */
      _type: Element,
      /** FHIRPath expression that extracts the values */
      expression: primitives.R4.string,
      /** Extension of expression element */
      _expression: Element,
      /** XPath that extracts the values */
      xpath: primitives.R4.string,
      /** Extension of xpath element */
      _xpath: Element,
      /** normal | phonetic | nearby | distance | other */
      xpathUsage: primitives.R4.code,
      /** Extension of xpathUsage element */
      _xpathUsage: Element,
      /** Types of resource (if a resource reference) */
      target: t.array(primitives.R4.code),
      /** Extension of target element */
      _target: t.array(Element),
      /** Allow multiple values per parameter (or) */
      multipleOr: primitives.R4.boolean,
      /** Extension of multipleOr element */
      _multipleOr: Element,
      /** Allow multiple parameters (and) */
      multipleAnd: primitives.R4.boolean,
      /** Extension of multipleAnd element */
      _multipleAnd: Element,
      /** eq | ne | gt | lt | ge | le | sa | eb | ap */
      comparator: t.array(primitives.R4.code),
      /** Extension of comparator element */
      _comparator: t.array(Element),
      /** missing | exact | contains | not | text | in | not-in | below | above | type | identifier | ofType */
      modifier: t.array(primitives.R4.code),
      /** Extension of modifier element */
      _modifier: t.array(Element),
      /** Chained names supported */
      chain: t.array(primitives.R4.string),
      /** Extension of chain element */
      _chain: t.array(Element)
    })
  ])
);

/**
 * For Composite resources to define the parts
 */
export interface SearchParameterComponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Defines how the part works */
  definition: primitives.R4.canonical;
  /** Extension of definition element */
  _definition?: Element;
  /** Subexpression relative to main expression */
  expression: string;
  /** Extension of expression element */
  _expression?: Element;
}
/**
 * For Composite resources to define the parts
 */
export const SearchParameterComponent: t.Type<
  SearchParameterComponent
> = t.recursion<SearchParameterComponent>("SearchParameterComponent", () =>
  t.intersection([
    t.type({
      /** Defines how the part works */
      definition: primitives.R4.canonical,
      /** Subexpression relative to main expression */
      expression: primitives.R4.string
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
      /** Extension of definition element */
      _definition: Element,
      /** Extension of expression element */
      _expression: Element
    })
  ])
);
