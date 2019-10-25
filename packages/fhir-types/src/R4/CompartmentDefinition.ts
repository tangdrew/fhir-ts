/**
 * CompartmentDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Compartment Definition for a resource
 */
export interface CompartmentDefinition {
  /** The type of resource */
  resourceType?: "CompartmentDefinition";
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
  /** Canonical identifier for this compartment definition, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the compartment definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this compartment definition (computer friendly) */
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
  /** Natural language description of the compartment definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Why this compartment definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Patient | Encounter | RelatedPerson | Practitioner | Device */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Whether the search syntax is supported */
  search: boolean;
  /** Extension of search element */
  _search?: Element;
}
/**
 * Compartment Definition for a resource
 */
export const CompartmentDefinition: t.Type<CompartmentDefinition> = t.recursion<
  CompartmentDefinition
>("CompartmentDefinition", () =>
  t.intersection([
    t.type({
      /** Canonical identifier for this compartment definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Name for this compartment definition (computer friendly) */
      name: primitives.R4.string,
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** Patient | Encounter | RelatedPerson | Practitioner | Device */
      code: primitives.R4.code,
      /** Whether the search syntax is supported */
      search: primitives.R4.boolean
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("CompartmentDefinition"),
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
      /** Business version of the compartment definition */
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
      /** Natural language description of the compartment definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Why this compartment definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Extension of code element */
      _code: Element,
      /** Extension of search element */
      _search: Element
    })
  ])
);

/**
 * How a resource is related to the compartment
 */
export interface CompartmentDefinitionResource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of resource type */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Search Parameter Name, or chained parameters */
  param?: string[];
  /** Extension of param element */
  _param?: Element[];
  /** Additional documentation about the resource and compartment */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * How a resource is related to the compartment
 */
export const CompartmentDefinitionResource: t.Type<
  CompartmentDefinitionResource
> = t.recursion<CompartmentDefinitionResource>(
  "CompartmentDefinitionResource",
  () =>
    t.intersection([
      t.type({
        /** Name of resource type */
        code: primitives.R4.code
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
        /** Extension of code element */
        _code: Element,
        /** Search Parameter Name, or chained parameters */
        param: t.array(primitives.R4.string),
        /** Extension of param element */
        _param: t.array(Element),
        /** Additional documentation about the resource and compartment */
        documentation: primitives.R4.string,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);
