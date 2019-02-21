/**
 * OperationDefinition Module
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
 * References to this parameter
 */
export interface OperationDefinitionParameterReferencedFrom {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Referencing parameter */
  source: t.TypeOf<primitives.R4.StringType>;
  /** Element id of reference */
  sourceId?: t.TypeOf<primitives.R4.StringType>;
}

export interface OperationDefinitionParameterReferencedFromOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Referencing parameter */
  source: t.OutputOf<primitives.R4.StringType>;
  /** Element id of reference */
  sourceId?: t.OutputOf<primitives.R4.StringType>;
}

export const OperationDefinitionParameterReferencedFrom: t.RecursiveType<
  t.Type<
    OperationDefinitionParameterReferencedFrom,
    OperationDefinitionParameterReferencedFromOutputType
  >,
  OperationDefinitionParameterReferencedFrom,
  OperationDefinitionParameterReferencedFromOutputType
> = t.recursion<
  OperationDefinitionParameterReferencedFrom,
  OperationDefinitionParameterReferencedFromOutputType
>("OperationDefinitionParameterReferencedFrom", () =>
  t.intersection(
    [
      t.type({
        /** Referencing parameter */
        source: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Element id of reference */
        sourceId: primitives.R4.string
      })
    ],
    "OperationDefinitionParameterReferencedFrom"
  )
);

/**
 * ValueSet details if this is coded
 */
export interface OperationDefinitionParameterBinding {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** required | extensible | preferred | example */
  strength: t.TypeOf<primitives.R4.CodeType>;
  /** Source of value set */
  valueSet: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface OperationDefinitionParameterBindingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** required | extensible | preferred | example */
  strength: t.OutputOf<primitives.R4.CodeType>;
  /** Source of value set */
  valueSet: t.OutputOf<primitives.R4.CanonicalType>;
}

export const OperationDefinitionParameterBinding: t.RecursiveType<
  t.Type<
    OperationDefinitionParameterBinding,
    OperationDefinitionParameterBindingOutputType
  >,
  OperationDefinitionParameterBinding,
  OperationDefinitionParameterBindingOutputType
> = t.recursion<
  OperationDefinitionParameterBinding,
  OperationDefinitionParameterBindingOutputType
>("OperationDefinitionParameterBinding", () =>
  t.intersection(
    [
      t.type({
        /** required | extensible | preferred | example */
        strength: primitives.R4.code,
        /** Source of value set */
        valueSet: primitives.R4.canonical
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
    "OperationDefinitionParameterBinding"
  )
);

/**
 * Parameters for the operation/query
 */
export interface OperationDefinitionParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name in Parameters.parameter.name or in URL */
  name: t.TypeOf<primitives.R4.CodeType>;
  /** in | out */
  use: t.TypeOf<primitives.R4.CodeType>;
  /** Minimum Cardinality */
  min: t.TypeOf<primitives.R4.IntegerType>;
  /** Maximum Cardinality (a number or *) */
  max: t.TypeOf<primitives.R4.StringType>;
  /** Description of meaning/use */
  documentation?: t.TypeOf<primitives.R4.StringType>;
  /** What type this parameter has */
  type?: t.TypeOf<primitives.R4.CodeType>;
  /** If type is Reference | canonical, allowed targets */
  targetProfile?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** number | date | string | token | reference | composite | quantity | uri | special */
  searchType?: t.TypeOf<primitives.R4.CodeType>;
  /** ValueSet details if this is coded */
  binding?: OperationDefinitionParameterBinding;
  /** References to this parameter */
  referencedFrom?: OperationDefinitionParameterReferencedFrom[];
  /** Parts of a nested Parameter */
  part?: OperationDefinitionParameter[];
}

export interface OperationDefinitionParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name in Parameters.parameter.name or in URL */
  name: t.OutputOf<primitives.R4.CodeType>;
  /** in | out */
  use: t.OutputOf<primitives.R4.CodeType>;
  /** Minimum Cardinality */
  min: t.OutputOf<primitives.R4.IntegerType>;
  /** Maximum Cardinality (a number or *) */
  max: t.OutputOf<primitives.R4.StringType>;
  /** Description of meaning/use */
  documentation?: t.OutputOf<primitives.R4.StringType>;
  /** What type this parameter has */
  type?: t.OutputOf<primitives.R4.CodeType>;
  /** If type is Reference | canonical, allowed targets */
  targetProfile?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** number | date | string | token | reference | composite | quantity | uri | special */
  searchType?: t.OutputOf<primitives.R4.CodeType>;
  /** ValueSet details if this is coded */
  binding?: OperationDefinitionParameterBindingOutputType;
  /** References to this parameter */
  referencedFrom?: OperationDefinitionParameterReferencedFromOutputType[];
  /** Parts of a nested Parameter */
  part?: OperationDefinitionParameterOutputType[];
}

export const OperationDefinitionParameter: t.RecursiveType<
  t.Type<OperationDefinitionParameter, OperationDefinitionParameterOutputType>,
  OperationDefinitionParameter,
  OperationDefinitionParameterOutputType
> = t.recursion<
  OperationDefinitionParameter,
  OperationDefinitionParameterOutputType
>("OperationDefinitionParameter", () =>
  t.intersection(
    [
      t.type({
        /** Maximum Cardinality (a number or *) */
        max: primitives.R4.string,
        /** Minimum Cardinality */
        min: primitives.R4.integer,
        /** Name in Parameters.parameter.name or in URL */
        name: primitives.R4.code,
        /** in | out */
        use: primitives.R4.code
      }),
      t.partial({
        /** ValueSet details if this is coded */
        binding: OperationDefinitionParameterBinding,
        /** Description of meaning/use */
        documentation: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Parts of a nested Parameter */
        part: t.array(OperationDefinitionParameter),
        /** References to this parameter */
        referencedFrom: t.array(OperationDefinitionParameterReferencedFrom),
        /** number | date | string | token | reference | composite | quantity | uri | special */
        searchType: primitives.R4.code,
        /** If type is Reference | canonical, allowed targets */
        targetProfile: t.array(primitives.R4.canonical),
        /** What type this parameter has */
        type: primitives.R4.code
      })
    ],
    "OperationDefinitionParameter"
  )
);

/**
 * Define overloaded variants for when  generating code
 */
export interface OperationDefinitionOverload {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of parameter to include in overload */
  parameterName?: t.TypeOf<primitives.R4.StringType>[];
  /** Comments to go on overload */
  comment?: t.TypeOf<primitives.R4.StringType>;
}

export interface OperationDefinitionOverloadOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of parameter to include in overload */
  parameterName?: t.OutputOf<primitives.R4.StringType>[];
  /** Comments to go on overload */
  comment?: t.OutputOf<primitives.R4.StringType>;
}

export const OperationDefinitionOverload: t.RecursiveType<
  t.Type<OperationDefinitionOverload, OperationDefinitionOverloadOutputType>,
  OperationDefinitionOverload,
  OperationDefinitionOverloadOutputType
> = t.recursion<
  OperationDefinitionOverload,
  OperationDefinitionOverloadOutputType
>("OperationDefinitionOverload", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Comments to go on overload */
        comment: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Name of parameter to include in overload */
        parameterName: t.array(primitives.R4.string)
      })
    ],
    "OperationDefinitionOverload"
  )
);

/**
 * Definition of an operation or a named query
 */
export interface OperationDefinition {
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
  /** Canonical identifier for this operation definition, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the operation definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this operation definition (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Name for this operation definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** operation | query */
  kind: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the operation definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for operation definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this operation definition is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Whether content is changed by the operation */
  affectsState?: t.TypeOf<primitives.R4.BooleanType>;
  /** Name used to invoke the operation */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Additional information about use */
  comment?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Marks this as a profile of the base */
  base?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Types this operation applies to */
  resource?: t.TypeOf<primitives.R4.CodeType>[];
  /** Invoke at the system level? */
  system: t.TypeOf<primitives.R4.BooleanType>;
  /** Invoke at the type level? */
  type: t.TypeOf<primitives.R4.BooleanType>;
  /** Invoke on an instance? */
  instance: t.TypeOf<primitives.R4.BooleanType>;
  /** Validation information for in parameters */
  inputProfile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Validation information for out parameters */
  outputProfile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Parameters for the operation/query */
  parameter?: OperationDefinitionParameter[];
  /** Define overloaded variants for when  generating code */
  overload?: OperationDefinitionOverload[];
}

export interface OperationDefinitionOutputType {
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
  /** Canonical identifier for this operation definition, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the operation definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this operation definition (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Name for this operation definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** operation | query */
  kind: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the operation definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for operation definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this operation definition is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Whether content is changed by the operation */
  affectsState?: t.OutputOf<primitives.R4.BooleanType>;
  /** Name used to invoke the operation */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Additional information about use */
  comment?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Marks this as a profile of the base */
  base?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Types this operation applies to */
  resource?: t.OutputOf<primitives.R4.CodeType>[];
  /** Invoke at the system level? */
  system: t.OutputOf<primitives.R4.BooleanType>;
  /** Invoke at the type level? */
  type: t.OutputOf<primitives.R4.BooleanType>;
  /** Invoke on an instance? */
  instance: t.OutputOf<primitives.R4.BooleanType>;
  /** Validation information for in parameters */
  inputProfile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Validation information for out parameters */
  outputProfile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Parameters for the operation/query */
  parameter?: OperationDefinitionParameterOutputType[];
  /** Define overloaded variants for when  generating code */
  overload?: OperationDefinitionOverloadOutputType[];
}

export const OperationDefinition: t.RecursiveType<
  t.Type<OperationDefinition, OperationDefinitionOutputType>,
  OperationDefinition,
  OperationDefinitionOutputType
> = t.recursion<OperationDefinition, OperationDefinitionOutputType>(
  "OperationDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** Name used to invoke the operation */
          code: primitives.R4.code,
          /** Invoke on an instance? */
          instance: primitives.R4.boolean,
          /** operation | query */
          kind: primitives.R4.code,
          /** Name for this operation definition (computer friendly) */
          name: primitives.R4.string,
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** Invoke at the system level? */
          system: primitives.R4.boolean,
          /** Invoke at the type level? */
          type: primitives.R4.boolean
        }),
        t.partial({
          /** Whether content is changed by the operation */
          affectsState: primitives.R4.boolean,
          /** Marks this as a profile of the base */
          base: primitives.R4.canonical,
          /** Additional information about use */
          comment: primitives.R4.markdown,
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Natural language description of the operation definition */
          description: primitives.R4.markdown,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Validation information for in parameters */
          inputProfile: primitives.R4.canonical,
          /** Intended jurisdiction for operation definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Validation information for out parameters */
          outputProfile: primitives.R4.canonical,
          /** Define overloaded variants for when  generating code */
          overload: t.array(OperationDefinitionOverload),
          /** Parameters for the operation/query */
          parameter: t.array(OperationDefinitionParameter),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this operation definition is defined */
          purpose: primitives.R4.markdown,
          /** Types this operation applies to */
          resource: t.array(primitives.R4.code),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this operation definition (human friendly) */
          title: primitives.R4.string,
          /** Canonical identifier for this operation definition, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the operation definition */
          version: primitives.R4.string
        })
      ],
      "OperationDefinition"
    )
);
