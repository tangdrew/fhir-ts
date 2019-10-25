/**
 * ValueSet Module
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
 * A set of codes drawn from one or more code systems
 */
export interface ValueSet {
  /** The type of resource */
  resourceType?: "ValueSet";
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
  /** Canonical identifier for this value set, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the value set (business identifier) */
  identifier?: Identifier[];
  /** Business version of the value set */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this value set (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this value set (human friendly) */
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
  /** Natural language description of the value set */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for value set (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Indicates whether or not any change to the content logical definition may occur */
  immutable?: boolean;
  /** Extension of immutable element */
  _immutable?: Element;
  /** Why this value set is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
}
/**
 * A set of codes drawn from one or more code systems
 */
export const ValueSet: t.Type<ValueSet> = t.recursion<ValueSet>(
  "ValueSet",
  () =>
    t.intersection([
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("ValueSet"),
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
        /** Canonical identifier for this value set, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Additional identifier for the value set (business identifier) */
        identifier: t.array(Identifier),
        /** Business version of the value set */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Name for this value set (computer friendly) */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Name for this value set (human friendly) */
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
        /** Natural language description of the value set */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for value set (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Indicates whether or not any change to the content logical definition may occur */
        immutable: primitives.R4.boolean,
        /** Extension of immutable element */
        _immutable: Element,
        /** Why this value set is defined */
        purpose: primitives.R4.markdown,
        /** Extension of purpose element */
        _purpose: Element,
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element
      })
    ])
);

/**
 * Content logical definition of the value set (CLD)
 */
export interface ValueSetCompose {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Fixed date for references with no specified version (transitive) */
  lockedDate?: primitives.R4.date;
  /** Extension of lockedDate element */
  _lockedDate?: Element;
  /** Whether inactive codes are in the value set */
  inactive?: boolean;
  /** Extension of inactive element */
  _inactive?: Element;
  /** Explicitly exclude codes from a code system or other value sets */
  exclude?: ValueSetComposeInclude[];
}
/**
 * Content logical definition of the value set (CLD)
 */
export const ValueSetCompose: t.Type<ValueSetCompose> = t.recursion<
  ValueSetCompose
>("ValueSetCompose", () =>
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
      /** Fixed date for references with no specified version (transitive) */
      lockedDate: primitives.R4.date,
      /** Extension of lockedDate element */
      _lockedDate: Element,
      /** Whether inactive codes are in the value set */
      inactive: primitives.R4.boolean,
      /** Extension of inactive element */
      _inactive: Element,
      /** Explicitly exclude codes from a code system or other value sets */
      exclude: t.array(ValueSetComposeInclude)
    })
  ])
);

/**
 * Include one or more codes from a code system or other value set(s)
 */
export interface ValueSetComposeInclude {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The system the codes come from */
  system?: primitives.R4.uri;
  /** Extension of system element */
  _system?: Element;
  /** Specific version of the code system referred to */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Select the contents included in this value set */
  valueSet?: primitives.R4.canonical[];
  /** Extension of valueSet element */
  _valueSet?: Element[];
}
/**
 * Include one or more codes from a code system or other value set(s)
 */
export const ValueSetComposeInclude: t.Type<
  ValueSetComposeInclude
> = t.recursion<ValueSetComposeInclude>("ValueSetComposeInclude", () =>
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
      /** The system the codes come from */
      system: primitives.R4.uri,
      /** Extension of system element */
      _system: Element,
      /** Specific version of the code system referred to */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Select the contents included in this value set */
      valueSet: t.array(primitives.R4.canonical),
      /** Extension of valueSet element */
      _valueSet: t.array(Element)
    })
  ])
);

/**
 * A concept defined in the system
 */
export interface ValueSetComposeIncludeConcept {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code or expression from system */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Text to display for this code for this value set in this valueset */
  display?: string;
  /** Extension of display element */
  _display?: Element;
}
/**
 * A concept defined in the system
 */
export const ValueSetComposeIncludeConcept: t.Type<
  ValueSetComposeIncludeConcept
> = t.recursion<ValueSetComposeIncludeConcept>(
  "ValueSetComposeIncludeConcept",
  () =>
    t.intersection([
      t.type({
        /** Code or expression from system */
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
        /** Text to display for this code for this value set in this valueset */
        display: primitives.R4.string,
        /** Extension of display element */
        _display: Element
      })
    ])
);

/**
 * Additional representations for this concept
 */
export interface ValueSetComposeIncludeConceptDesignation {
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
  /** Types of uses of designations */
  use?: Coding;
  /** The text value for this designation */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Additional representations for this concept
 */
export const ValueSetComposeIncludeConceptDesignation: t.Type<
  ValueSetComposeIncludeConceptDesignation
> = t.recursion<ValueSetComposeIncludeConceptDesignation>(
  "ValueSetComposeIncludeConceptDesignation",
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
        /** Types of uses of designations */
        use: Coding,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * Select codes/concepts by their properties (including relationships)
 */
export interface ValueSetComposeIncludeFilter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A property/filter defined by the code system */
  property: primitives.R4.code;
  /** Extension of property element */
  _property?: Element;
  /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
  op: primitives.R4.code;
  /** Extension of op element */
  _op?: Element;
  /** Code from the system, or regex criteria, or boolean value for exists */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Select codes/concepts by their properties (including relationships)
 */
export const ValueSetComposeIncludeFilter: t.Type<
  ValueSetComposeIncludeFilter
> = t.recursion<ValueSetComposeIncludeFilter>(
  "ValueSetComposeIncludeFilter",
  () =>
    t.intersection([
      t.type({
        /** A property/filter defined by the code system */
        property: primitives.R4.code,
        /** = | is-a | descendent-of | is-not-a | regex | in | not-in | generalizes | exists */
        op: primitives.R4.code,
        /** Code from the system, or regex criteria, or boolean value for exists */
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
        /** Extension of property element */
        _property: Element,
        /** Extension of op element */
        _op: Element,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * Used when the value set is "expanded"
 */
export interface ValueSetExpansion {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifies the value set expansion (business identifier) */
  identifier?: primitives.R4.uri;
  /** Extension of identifier element */
  _identifier?: Element;
  /** Time ValueSet expansion happened */
  timestamp: primitives.R4.dateTime;
  /** Extension of timestamp element */
  _timestamp?: Element;
  /** Total number of codes in the expansion */
  total?: primitives.R4.integer;
  /** Extension of total element */
  _total?: Element;
  /** Offset at which this resource starts */
  offset?: primitives.R4.integer;
  /** Extension of offset element */
  _offset?: Element;
}
/**
 * Used when the value set is "expanded"
 */
export const ValueSetExpansion: t.Type<ValueSetExpansion> = t.recursion<
  ValueSetExpansion
>("ValueSetExpansion", () =>
  t.intersection([
    t.type({
      /** Time ValueSet expansion happened */
      timestamp: primitives.R4.dateTime
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
      /** Identifies the value set expansion (business identifier) */
      identifier: primitives.R4.uri,
      /** Extension of identifier element */
      _identifier: Element,
      /** Extension of timestamp element */
      _timestamp: Element,
      /** Total number of codes in the expansion */
      total: primitives.R4.integer,
      /** Extension of total element */
      _total: Element,
      /** Offset at which this resource starts */
      offset: primitives.R4.integer,
      /** Extension of offset element */
      _offset: Element
    })
  ])
);

/**
 * Parameter that controlled the expansion process
 */
export interface ValueSetExpansionParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name as assigned by the client or server */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Value of the named parameter */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Value of the named parameter */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Value of the named parameter */
  valueInteger?: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Value of the named parameter */
  valueDecimal?: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Value of the named parameter */
  valueUri?: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Value of the named parameter */
  valueCode?: primitives.R4.code;
  /** Extension of valueCode element */
  _valueCode?: Element;
  /** Value of the named parameter */
  valueDateTime?: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
}
/**
 * Parameter that controlled the expansion process
 */
export const ValueSetExpansionParameter: t.Type<
  ValueSetExpansionParameter
> = t.recursion<ValueSetExpansionParameter>("ValueSetExpansionParameter", () =>
  t.intersection([
    t.type({
      /** Name as assigned by the client or server */
      name: primitives.R4.string
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
      /** Extension of name element */
      _name: Element,
      /** Value of the named parameter */
      valueString: primitives.R4.string,
      /** Extension of valueString element */
      _valueString: Element,
      /** Value of the named parameter */
      valueBoolean: primitives.R4.boolean,
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Value of the named parameter */
      valueInteger: primitives.R4.integer,
      /** Extension of valueInteger element */
      _valueInteger: Element,
      /** Value of the named parameter */
      valueDecimal: primitives.R4.decimal,
      /** Extension of valueDecimal element */
      _valueDecimal: Element,
      /** Value of the named parameter */
      valueUri: primitives.R4.uri,
      /** Extension of valueUri element */
      _valueUri: Element,
      /** Value of the named parameter */
      valueCode: primitives.R4.code,
      /** Extension of valueCode element */
      _valueCode: Element,
      /** Value of the named parameter */
      valueDateTime: primitives.R4.dateTime,
      /** Extension of valueDateTime element */
      _valueDateTime: Element
    })
  ])
);

/**
 * Codes in the value set
 */
export interface ValueSetExpansionContains {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** System value for the code */
  system?: primitives.R4.uri;
  /** Extension of system element */
  _system?: Element;
  /** If user cannot select this entry */
  abstract?: boolean;
  /** Extension of abstract element */
  _abstract?: Element;
  /** If concept is inactive in the code system */
  inactive?: boolean;
  /** Extension of inactive element */
  _inactive?: Element;
  /** Version in which this code/display is defined */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Code - if blank, this is not a selectable code */
  code?: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** User display for the concept */
  display?: string;
  /** Extension of display element */
  _display?: Element;
  /** Additional representations for this item */
  designation?: ValueSetComposeIncludeConceptDesignation[];
  /** Codes contained under this entry */
  contains?: ValueSetExpansionContains[];
}
/**
 * Codes in the value set
 */
export const ValueSetExpansionContains: t.Type<
  ValueSetExpansionContains
> = t.recursion<ValueSetExpansionContains>("ValueSetExpansionContains", () =>
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
      /** System value for the code */
      system: primitives.R4.uri,
      /** Extension of system element */
      _system: Element,
      /** If user cannot select this entry */
      abstract: primitives.R4.boolean,
      /** Extension of abstract element */
      _abstract: Element,
      /** If concept is inactive in the code system */
      inactive: primitives.R4.boolean,
      /** Extension of inactive element */
      _inactive: Element,
      /** Version in which this code/display is defined */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Code - if blank, this is not a selectable code */
      code: primitives.R4.code,
      /** Extension of code element */
      _code: Element,
      /** User display for the concept */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element,
      /** Additional representations for this item */
      designation: t.array(ValueSetComposeIncludeConceptDesignation),
      /** Codes contained under this entry */
      contains: t.array(ValueSetExpansionContains)
    })
  ])
);
