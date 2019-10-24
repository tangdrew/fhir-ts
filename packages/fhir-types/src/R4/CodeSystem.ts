/**
 * CodeSystem Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Declares the existence of and describes a code system or code system supplement
 */
export interface CodeSystem {
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
  /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the code system (business identifier) */
  identifier?: Identifier[];
  /** Business version of the code system (Coding.version) */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this code system (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this code system (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
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
  /** Natural language description of the code system */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for code system (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this code system is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** If code comparison is case sensitive */
  caseSensitive?: boolean;
  /** Extension of caseSensitive element */
  _caseSensitive?: Element;
  /** Canonical reference to the value set with entire code system */
  valueSet?: primitives.R4.canonical;
  /** Extension of valueSet element */
  _valueSet?: Element;
  /** grouped-by | is-a | part-of | classified-with */
  hierarchyMeaning?: primitives.R4.code;
  /** Extension of hierarchyMeaning element */
  _hierarchyMeaning?: Element;
  /** If code system defines a compositional grammar */
  compositional?: boolean;
  /** Extension of compositional element */
  _compositional?: Element;
  /** If definitions are not stable */
  versionNeeded?: boolean;
  /** Extension of versionNeeded element */
  _versionNeeded?: Element;
  /** not-present | example | fragment | complete | supplement */
  content: primitives.R4.code;
  /** Extension of content element */
  _content?: Element;
  /** Canonical URL of Code System this adds designations and properties to */
  supplements?: primitives.R4.canonical;
  /** Extension of supplements element */
  _supplements?: Element;
  /** Total concepts in the code system */
  count?: primitives.R4.unsignedInt;
  /** Extension of count element */
  _count?: Element;
}
/**
 * Declares the existence of and describes a code system or code system supplement
 */
export const CodeSystem: t.Type<CodeSystem> = t.recursion<CodeSystem>(
  "CodeSystem",
  () =>
    t.intersection([
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** not-present | example | fragment | complete | supplement */
        content: primitives.R4.code
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
        /** Canonical identifier for this code system, represented as a URI (globally unique) (Coding.system) */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Additional identifier for the code system (business identifier) */
        identifier: t.array(Identifier),
        /** Business version of the code system (Coding.version) */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Name for this code system (computer friendly) */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Name for this code system (human friendly) */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
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
        /** Natural language description of the code system */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for code system (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Why this code system is defined */
        purpose: primitives.R4.markdown,
        /** Extension of purpose element */
        _purpose: Element,
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element,
        /** If code comparison is case sensitive */
        caseSensitive: primitives.R4.boolean,
        /** Extension of caseSensitive element */
        _caseSensitive: Element,
        /** Canonical reference to the value set with entire code system */
        valueSet: primitives.R4.canonical,
        /** Extension of valueSet element */
        _valueSet: Element,
        /** grouped-by | is-a | part-of | classified-with */
        hierarchyMeaning: primitives.R4.code,
        /** Extension of hierarchyMeaning element */
        _hierarchyMeaning: Element,
        /** If code system defines a compositional grammar */
        compositional: primitives.R4.boolean,
        /** Extension of compositional element */
        _compositional: Element,
        /** If definitions are not stable */
        versionNeeded: primitives.R4.boolean,
        /** Extension of versionNeeded element */
        _versionNeeded: Element,
        /** Extension of content element */
        _content: Element,
        /** Canonical URL of Code System this adds designations and properties to */
        supplements: primitives.R4.canonical,
        /** Extension of supplements element */
        _supplements: Element,
        /** Total concepts in the code system */
        count: primitives.R4.unsignedInt,
        /** Extension of count element */
        _count: Element
      })
    ])
);

/**
 * Filter that can be used in a value set
 */
export interface CodeSystemFilter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that identifies the filter */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** How or why the filter is used */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Operators that can be used with filter */
  operator: primitives.R4.code[];
  /** Extension of operator element */
  _operator?: Element[];
  /** What to use for the value */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Filter that can be used in a value set
 */
export const CodeSystemFilter: t.Type<CodeSystemFilter> = t.recursion<
  CodeSystemFilter
>("CodeSystemFilter", () =>
  t.intersection([
    t.type({
      /** Code that identifies the filter */
      code: primitives.R4.code,
      /** Operators that can be used with filter */
      operator: t.array(primitives.R4.code),
      /** What to use for the value */
      value: primitives.R4.string
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
      /** How or why the filter is used */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Extension of operator element */
      _operator: t.array(Element),
      /** Extension of value element */
      _value: Element
    })
  ])
);

/**
 * Additional information supplied about each concept
 */
export interface CodeSystemProperty {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifies the property on the concepts, and when referred to in operations */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Formal identifier for the property */
  uri?: primitives.R4.uri;
  /** Extension of uri element */
  _uri?: Element;
  /** Why the property is defined, and/or what it conveys */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** code | Coding | string | integer | boolean | dateTime | decimal */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
}
/**
 * Additional information supplied about each concept
 */
export const CodeSystemProperty: t.Type<CodeSystemProperty> = t.recursion<
  CodeSystemProperty
>("CodeSystemProperty", () =>
  t.intersection([
    t.type({
      /** Identifies the property on the concepts, and when referred to in operations */
      code: primitives.R4.code,
      /** code | Coding | string | integer | boolean | dateTime | decimal */
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
      /** Extension of code element */
      _code: Element,
      /** Formal identifier for the property */
      uri: primitives.R4.uri,
      /** Extension of uri element */
      _uri: Element,
      /** Why the property is defined, and/or what it conveys */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Extension of type element */
      _type: Element
    })
  ])
);

/**
 * Concepts in the code system
 */
export interface CodeSystemConcept {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that identifies concept */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Text to display to the user */
  display?: string;
  /** Extension of display element */
  _display?: Element;
  /** Formal definition */
  definition?: string;
  /** Extension of definition element */
  _definition?: Element;
  /** Child Concepts (is-a/contains/categorizes) */
  concept?: CodeSystemConcept[];
}
/**
 * Concepts in the code system
 */
export const CodeSystemConcept: t.Type<CodeSystemConcept> = t.recursion<
  CodeSystemConcept
>("CodeSystemConcept", () =>
  t.intersection([
    t.type({
      /** Code that identifies concept */
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
      /** Text to display to the user */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element,
      /** Formal definition */
      definition: primitives.R4.string,
      /** Extension of definition element */
      _definition: Element,
      /** Child Concepts (is-a/contains/categorizes) */
      concept: t.array(CodeSystemConcept)
    })
  ])
);

/**
 * Additional representations for the concept
 */
export interface CodeSystemConceptDesignation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Human language of the designation */
  language?: primitives.R4.code;
  /** Extension of language element */
  _language?: Element;
  /** Details how this designation would be used */
  use?: Coding;
  /** The text value for this designation */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Additional representations for the concept
 */
export const CodeSystemConceptDesignation: t.Type<
  CodeSystemConceptDesignation
> = t.recursion<CodeSystemConceptDesignation>(
  "CodeSystemConceptDesignation",
  () =>
    t.intersection([
      t.type({
        /** The text value for this designation */
        value: primitives.R4.string
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
        /** Human language of the designation */
        language: primitives.R4.code,
        /** Extension of language element */
        _language: Element,
        /** Details how this designation would be used */
        use: Coding,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * Property value for the concept
 */
export interface CodeSystemConceptProperty {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to CodeSystem.property.code */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Value of the property for this concept */
  valueCode: primitives.R4.code;
  /** Extension of valueCode element */
  _valueCode?: Element;
  /** Value of the property for this concept */
  valueCoding: Coding;
  /** Value of the property for this concept */
  valueString: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Value of the property for this concept */
  valueInteger: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Value of the property for this concept */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Value of the property for this concept */
  valueDateTime: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Value of the property for this concept */
  valueDecimal: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
}
/**
 * Property value for the concept
 */
export const CodeSystemConceptProperty: t.Type<
  CodeSystemConceptProperty
> = t.recursion<CodeSystemConceptProperty>("CodeSystemConceptProperty", () =>
  t.intersection([
    t.type({
      /** Reference to CodeSystem.property.code */
      code: primitives.R4.code,
      /** Value of the property for this concept */
      valueCode: primitives.R4.code,
      /** Value of the property for this concept */
      valueCoding: Coding,
      /** Value of the property for this concept */
      valueString: primitives.R4.string,
      /** Value of the property for this concept */
      valueInteger: primitives.R4.integer,
      /** Value of the property for this concept */
      valueBoolean: primitives.R4.boolean,
      /** Value of the property for this concept */
      valueDateTime: primitives.R4.dateTime,
      /** Value of the property for this concept */
      valueDecimal: primitives.R4.decimal
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
      /** Extension of valueCode element */
      _valueCode: Element,
      /** Extension of valueString element */
      _valueString: Element,
      /** Extension of valueInteger element */
      _valueInteger: Element,
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Extension of valueDateTime element */
      _valueDateTime: Element,
      /** Extension of valueDecimal element */
      _valueDecimal: Element
    })
  ])
);
