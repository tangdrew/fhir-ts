/**
 * OperationDefinition Module
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
 * Definition of an operation or a named query
 */
export interface OperationDefinition {
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
  /** Canonical identifier for this operation definition, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the operation definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this operation definition (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this operation definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** operation | query */
  kind: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
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
  /** Natural language description of the operation definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for operation definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this operation definition is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Whether content is changed by the operation */
  affectsState?: boolean;
  /** Extension of affectsState element */
  _affectsState?: Element;
  /** Name used to invoke the operation */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Additional information about use */
  comment?: primitives.R4.markdown;
  /** Extension of comment element */
  _comment?: Element;
  /** Marks this as a profile of the base */
  base?: primitives.R4.canonical;
  /** Extension of base element */
  _base?: Element;
  /** Types this operation applies to */
  resource?: primitives.R4.code[];
  /** Extension of resource element */
  _resource?: Element[];
  /** Invoke at the system level? */
  system: boolean;
  /** Extension of system element */
  _system?: Element;
  /** Invoke at the type level? */
  type: boolean;
  /** Extension of type element */
  _type?: Element;
  /** Invoke on an instance? */
  instance: boolean;
  /** Extension of instance element */
  _instance?: Element;
  /** Validation information for in parameters */
  inputProfile?: primitives.R4.canonical;
  /** Extension of inputProfile element */
  _inputProfile?: Element;
  /** Validation information for out parameters */
  outputProfile?: primitives.R4.canonical;
  /** Extension of outputProfile element */
  _outputProfile?: Element;
}
/**
 * Definition of an operation or a named query
 */
export const OperationDefinition: t.Type<OperationDefinition> = t.recursion<
  OperationDefinition
>("OperationDefinition", () =>
  t.intersection([
    t.type({
      /** Name for this operation definition (computer friendly) */
      name: primitives.R4.string,
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** operation | query */
      kind: primitives.R4.code,
      /** Name used to invoke the operation */
      code: primitives.R4.code,
      /** Invoke at the system level? */
      system: primitives.R4.boolean,
      /** Invoke at the type level? */
      type: primitives.R4.boolean,
      /** Invoke on an instance? */
      instance: primitives.R4.boolean
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
      /** Canonical identifier for this operation definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Business version of the operation definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Extension of name element */
      _name: Element,
      /** Name for this operation definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Extension of status element */
      _status: Element,
      /** Extension of kind element */
      _kind: Element,
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
      /** Natural language description of the operation definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for operation definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this operation definition is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Whether content is changed by the operation */
      affectsState: primitives.R4.boolean,
      /** Extension of affectsState element */
      _affectsState: Element,
      /** Extension of code element */
      _code: Element,
      /** Additional information about use */
      comment: primitives.R4.markdown,
      /** Extension of comment element */
      _comment: Element,
      /** Marks this as a profile of the base */
      base: primitives.R4.canonical,
      /** Extension of base element */
      _base: Element,
      /** Types this operation applies to */
      resource: t.array(primitives.R4.code),
      /** Extension of resource element */
      _resource: t.array(Element),
      /** Extension of system element */
      _system: Element,
      /** Extension of type element */
      _type: Element,
      /** Extension of instance element */
      _instance: Element,
      /** Validation information for in parameters */
      inputProfile: primitives.R4.canonical,
      /** Extension of inputProfile element */
      _inputProfile: Element,
      /** Validation information for out parameters */
      outputProfile: primitives.R4.canonical,
      /** Extension of outputProfile element */
      _outputProfile: Element
    })
  ])
);

/**
 * Parameters for the operation/query
 */
export interface OperationDefinitionParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name in Parameters.parameter.name or in URL */
  name: primitives.R4.code;
  /** Extension of name element */
  _name?: Element;
  /** in | out */
  use: primitives.R4.code;
  /** Extension of use element */
  _use?: Element;
  /** Minimum Cardinality */
  min: primitives.R4.integer;
  /** Extension of min element */
  _min?: Element;
  /** Maximum Cardinality (a number or *) */
  max: string;
  /** Extension of max element */
  _max?: Element;
  /** Description of meaning/use */
  documentation?: string;
  /** Extension of documentation element */
  _documentation?: Element;
  /** What type this parameter has */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** If type is Reference | canonical, allowed targets */
  targetProfile?: primitives.R4.canonical[];
  /** Extension of targetProfile element */
  _targetProfile?: Element[];
  /** number | date | string | token | reference | composite | quantity | uri | special */
  searchType?: primitives.R4.code;
  /** Extension of searchType element */
  _searchType?: Element;
  /** Parts of a nested Parameter */
  part?: OperationDefinitionParameter[];
}
/**
 * Parameters for the operation/query
 */
export const OperationDefinitionParameter: t.Type<
  OperationDefinitionParameter
> = t.recursion<OperationDefinitionParameter>(
  "OperationDefinitionParameter",
  () =>
    t.intersection([
      t.type({
        /** Name in Parameters.parameter.name or in URL */
        name: primitives.R4.code,
        /** in | out */
        use: primitives.R4.code,
        /** Minimum Cardinality */
        min: primitives.R4.integer,
        /** Maximum Cardinality (a number or *) */
        max: primitives.R4.string
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
        /** Extension of use element */
        _use: Element,
        /** Extension of min element */
        _min: Element,
        /** Extension of max element */
        _max: Element,
        /** Description of meaning/use */
        documentation: primitives.R4.string,
        /** Extension of documentation element */
        _documentation: Element,
        /** What type this parameter has */
        type: primitives.R4.code,
        /** Extension of type element */
        _type: Element,
        /** If type is Reference | canonical, allowed targets */
        targetProfile: t.array(primitives.R4.canonical),
        /** Extension of targetProfile element */
        _targetProfile: t.array(Element),
        /** number | date | string | token | reference | composite | quantity | uri | special */
        searchType: primitives.R4.code,
        /** Extension of searchType element */
        _searchType: Element,
        /** Parts of a nested Parameter */
        part: t.array(OperationDefinitionParameter)
      })
    ])
);

/**
 * ValueSet details if this is coded
 */
export interface OperationDefinitionParameterBinding {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** required | extensible | preferred | example */
  strength: primitives.R4.code;
  /** Extension of strength element */
  _strength?: Element;
  /** Source of value set */
  valueSet: primitives.R4.canonical;
  /** Extension of valueSet element */
  _valueSet?: Element;
}
/**
 * ValueSet details if this is coded
 */
export const OperationDefinitionParameterBinding: t.Type<
  OperationDefinitionParameterBinding
> = t.recursion<OperationDefinitionParameterBinding>(
  "OperationDefinitionParameterBinding",
  () =>
    t.intersection([
      t.type({
        /** required | extensible | preferred | example */
        strength: primitives.R4.code,
        /** Source of value set */
        valueSet: primitives.R4.canonical
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
        /** Extension of strength element */
        _strength: Element,
        /** Extension of valueSet element */
        _valueSet: Element
      })
    ])
);

/**
 * References to this parameter
 */
export interface OperationDefinitionParameterReferencedFrom {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Referencing parameter */
  source: string;
  /** Extension of source element */
  _source?: Element;
  /** Element id of reference */
  sourceId?: string;
  /** Extension of sourceId element */
  _sourceId?: Element;
}
/**
 * References to this parameter
 */
export const OperationDefinitionParameterReferencedFrom: t.Type<
  OperationDefinitionParameterReferencedFrom
> = t.recursion<OperationDefinitionParameterReferencedFrom>(
  "OperationDefinitionParameterReferencedFrom",
  () =>
    t.intersection([
      t.type({
        /** Referencing parameter */
        source: primitives.R4.string
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
        /** Extension of source element */
        _source: Element,
        /** Element id of reference */
        sourceId: primitives.R4.string,
        /** Extension of sourceId element */
        _sourceId: Element
      })
    ])
);

/**
 * Define overloaded variants for when  generating code
 */
export interface OperationDefinitionOverload {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of parameter to include in overload */
  parameterName?: string[];
  /** Extension of parameterName element */
  _parameterName?: Element[];
  /** Comments to go on overload */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
}
/**
 * Define overloaded variants for when  generating code
 */
export const OperationDefinitionOverload: t.Type<
  OperationDefinitionOverload
> = t.recursion<OperationDefinitionOverload>(
  "OperationDefinitionOverload",
  () =>
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
        /** Name of parameter to include in overload */
        parameterName: t.array(primitives.R4.string),
        /** Extension of parameterName element */
        _parameterName: t.array(Element),
        /** Comments to go on overload */
        comment: primitives.R4.string,
        /** Extension of comment element */
        _comment: Element
      })
    ])
);
