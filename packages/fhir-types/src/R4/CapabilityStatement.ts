/**
 * CapabilityStatement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Software that is covered by this capability statement
 */
export interface CapabilityStatementSoftware {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A name the software is known by */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Version covered by this statement */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Date this version was released */
  releaseDate?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface CapabilityStatementSoftwareOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A name the software is known by */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Version covered by this statement */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Date this version was released */
  releaseDate?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const CapabilityStatementSoftware: t.RecursiveType<
  t.Type<CapabilityStatementSoftware, CapabilityStatementSoftwareOutputType>,
  CapabilityStatementSoftware,
  CapabilityStatementSoftwareOutputType
> = t.recursion<
  CapabilityStatementSoftware,
  CapabilityStatementSoftwareOutputType
>("CapabilityStatementSoftware", () =>
  t.intersection(
    [
      t.type({
        /** A name the software is known by */
        name: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Date this version was released */
        releaseDate: primitives.R4.dateTime,
        /** Version covered by this statement */
        version: primitives.R4.string
      })
    ],
    "CapabilityStatementSoftware"
  )
);

/**
 * Information about security of implementation
 */
export interface CapabilityStatementRestSecurity {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Adds CORS Headers (http://enable-cors.org/) */
  cors?: t.TypeOf<primitives.R4.BooleanType>;
  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates */
  service?: CodeableConcept[];
  /** General description of how security works */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface CapabilityStatementRestSecurityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Adds CORS Headers (http://enable-cors.org/) */
  cors?: t.OutputOf<primitives.R4.BooleanType>;
  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates */
  service?: CodeableConceptOutputType[];
  /** General description of how security works */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const CapabilityStatementRestSecurity: t.RecursiveType<
  t.Type<
    CapabilityStatementRestSecurity,
    CapabilityStatementRestSecurityOutputType
  >,
  CapabilityStatementRestSecurity,
  CapabilityStatementRestSecurityOutputType
> = t.recursion<
  CapabilityStatementRestSecurity,
  CapabilityStatementRestSecurityOutputType
>("CapabilityStatementRestSecurity", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Adds CORS Headers (http://enable-cors.org/) */
        cors: primitives.R4.boolean,
        /** General description of how security works */
        description: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates */
        service: t.array(CodeableConcept)
      })
    ],
    "CapabilityStatementRestSecurity"
  )
);

/**
 * Search parameters supported by implementation
 */
export interface CapabilityStatementRestResourceSearchParam {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of search parameter */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Source of definition for parameter */
  definition?: t.TypeOf<primitives.R4.CanonicalType>;
  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Server-specific usage */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface CapabilityStatementRestResourceSearchParamOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of search parameter */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Source of definition for parameter */
  definition?: t.OutputOf<primitives.R4.CanonicalType>;
  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Server-specific usage */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const CapabilityStatementRestResourceSearchParam: t.RecursiveType<
  t.Type<
    CapabilityStatementRestResourceSearchParam,
    CapabilityStatementRestResourceSearchParamOutputType
  >,
  CapabilityStatementRestResourceSearchParam,
  CapabilityStatementRestResourceSearchParamOutputType
> = t.recursion<
  CapabilityStatementRestResourceSearchParam,
  CapabilityStatementRestResourceSearchParamOutputType
>("CapabilityStatementRestResourceSearchParam", () =>
  t.intersection(
    [
      t.type({
        /** Name of search parameter */
        name: primitives.R4.string,
        /** number | date | string | token | reference | composite | quantity | uri | special */
        type: primitives.R4.code
      }),
      t.partial({
        /** Source of definition for parameter */
        definition: primitives.R4.canonical,
        /** Server-specific usage */
        documentation: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CapabilityStatementRestResourceSearchParam"
  )
);

/**
 * Definition of a resource operation
 */
export interface CapabilityStatementRestResourceOperation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name by which the operation/query is invoked */
  name: t.TypeOf<primitives.R4.StringType>;
  /** The defined operation/query */
  definition: t.TypeOf<primitives.R4.CanonicalType>;
  /** Specific details about operation behavior */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface CapabilityStatementRestResourceOperationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name by which the operation/query is invoked */
  name: t.OutputOf<primitives.R4.StringType>;
  /** The defined operation/query */
  definition: t.OutputOf<primitives.R4.CanonicalType>;
  /** Specific details about operation behavior */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const CapabilityStatementRestResourceOperation: t.RecursiveType<
  t.Type<
    CapabilityStatementRestResourceOperation,
    CapabilityStatementRestResourceOperationOutputType
  >,
  CapabilityStatementRestResourceOperation,
  CapabilityStatementRestResourceOperationOutputType
> = t.recursion<
  CapabilityStatementRestResourceOperation,
  CapabilityStatementRestResourceOperationOutputType
>("CapabilityStatementRestResourceOperation", () =>
  t.intersection(
    [
      t.type({
        /** The defined operation/query */
        definition: primitives.R4.canonical,
        /** Name by which the operation/query is invoked */
        name: primitives.R4.string
      }),
      t.partial({
        /** Specific details about operation behavior */
        documentation: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CapabilityStatementRestResourceOperation"
  )
);

/**
 * What operations are supported?
 */
export interface CapabilityStatementRestResourceInteraction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Anything special about operation behavior */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface CapabilityStatementRestResourceInteractionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Anything special about operation behavior */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const CapabilityStatementRestResourceInteraction: t.RecursiveType<
  t.Type<
    CapabilityStatementRestResourceInteraction,
    CapabilityStatementRestResourceInteractionOutputType
  >,
  CapabilityStatementRestResourceInteraction,
  CapabilityStatementRestResourceInteractionOutputType
> = t.recursion<
  CapabilityStatementRestResourceInteraction,
  CapabilityStatementRestResourceInteractionOutputType
>("CapabilityStatementRestResourceInteraction", () =>
  t.intersection(
    [
      t.type({
        /** read | vread | update | patch | delete | history-instance | history-type | create | search-type */
        code: primitives.R4.code
      }),
      t.partial({
        /** Anything special about operation behavior */
        documentation: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CapabilityStatementRestResourceInteraction"
  )
);

/**
 * Resource served on the REST interface
 */
export interface CapabilityStatementRestResource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A resource type that is supported */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Base System profile for all uses of resource */
  profile?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Profiles for use cases supported */
  supportedProfile?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Additional information about the use of the resource type */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
  /** What operations are supported? */
  interaction?: CapabilityStatementRestResourceInteraction[];
  /** no-version | versioned | versioned-update */
  versioning?: t.TypeOf<primitives.R4.CodeType>;
  /** Whether vRead can return past versions */
  readHistory?: t.TypeOf<primitives.R4.BooleanType>;
  /** If update can commit to a new identity */
  updateCreate?: t.TypeOf<primitives.R4.BooleanType>;
  /** If allows/uses conditional create */
  conditionalCreate?: t.TypeOf<primitives.R4.BooleanType>;
  /** not-supported | modified-since | not-match | full-support */
  conditionalRead?: t.TypeOf<primitives.R4.CodeType>;
  /** If allows/uses conditional update */
  conditionalUpdate?: t.TypeOf<primitives.R4.BooleanType>;
  /** not-supported | single | multiple - how conditional delete is supported */
  conditionalDelete?: t.TypeOf<primitives.R4.CodeType>;
  /** literal | logical | resolves | enforced | local */
  referencePolicy?: t.TypeOf<primitives.R4.CodeType>[];
  /** _include values supported by the server */
  searchInclude?: t.TypeOf<primitives.R4.StringType>[];
  /** _revinclude values supported by the server */
  searchRevInclude?: t.TypeOf<primitives.R4.StringType>[];
  /** Search parameters supported by implementation */
  searchParam?: CapabilityStatementRestResourceSearchParam[];
  /** Definition of a resource operation */
  operation?: CapabilityStatementRestResourceOperation[];
}

export interface CapabilityStatementRestResourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A resource type that is supported */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Base System profile for all uses of resource */
  profile?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Profiles for use cases supported */
  supportedProfile?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Additional information about the use of the resource type */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
  /** What operations are supported? */
  interaction?: CapabilityStatementRestResourceInteractionOutputType[];
  /** no-version | versioned | versioned-update */
  versioning?: t.OutputOf<primitives.R4.CodeType>;
  /** Whether vRead can return past versions */
  readHistory?: t.OutputOf<primitives.R4.BooleanType>;
  /** If update can commit to a new identity */
  updateCreate?: t.OutputOf<primitives.R4.BooleanType>;
  /** If allows/uses conditional create */
  conditionalCreate?: t.OutputOf<primitives.R4.BooleanType>;
  /** not-supported | modified-since | not-match | full-support */
  conditionalRead?: t.OutputOf<primitives.R4.CodeType>;
  /** If allows/uses conditional update */
  conditionalUpdate?: t.OutputOf<primitives.R4.BooleanType>;
  /** not-supported | single | multiple - how conditional delete is supported */
  conditionalDelete?: t.OutputOf<primitives.R4.CodeType>;
  /** literal | logical | resolves | enforced | local */
  referencePolicy?: t.OutputOf<primitives.R4.CodeType>[];
  /** _include values supported by the server */
  searchInclude?: t.OutputOf<primitives.R4.StringType>[];
  /** _revinclude values supported by the server */
  searchRevInclude?: t.OutputOf<primitives.R4.StringType>[];
  /** Search parameters supported by implementation */
  searchParam?: CapabilityStatementRestResourceSearchParamOutputType[];
  /** Definition of a resource operation */
  operation?: CapabilityStatementRestResourceOperationOutputType[];
}

export const CapabilityStatementRestResource: t.RecursiveType<
  t.Type<
    CapabilityStatementRestResource,
    CapabilityStatementRestResourceOutputType
  >,
  CapabilityStatementRestResource,
  CapabilityStatementRestResourceOutputType
> = t.recursion<
  CapabilityStatementRestResource,
  CapabilityStatementRestResourceOutputType
>("CapabilityStatementRestResource", () =>
  t.intersection(
    [
      t.type({
        /** A resource type that is supported */
        type: primitives.R4.code
      }),
      t.partial({
        /** If allows/uses conditional create */
        conditionalCreate: primitives.R4.boolean,
        /** not-supported | single | multiple - how conditional delete is supported */
        conditionalDelete: primitives.R4.code,
        /** not-supported | modified-since | not-match | full-support */
        conditionalRead: primitives.R4.code,
        /** If allows/uses conditional update */
        conditionalUpdate: primitives.R4.boolean,
        /** Additional information about the use of the resource type */
        documentation: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** What operations are supported? */
        interaction: t.array(CapabilityStatementRestResourceInteraction),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Definition of a resource operation */
        operation: t.array(CapabilityStatementRestResourceOperation),
        /** Base System profile for all uses of resource */
        profile: primitives.R4.canonical,
        /** Whether vRead can return past versions */
        readHistory: primitives.R4.boolean,
        /** literal | logical | resolves | enforced | local */
        referencePolicy: t.array(primitives.R4.code),
        /** _include values supported by the server */
        searchInclude: t.array(primitives.R4.string),
        /** Search parameters supported by implementation */
        searchParam: t.array(CapabilityStatementRestResourceSearchParam),
        /** _revinclude values supported by the server */
        searchRevInclude: t.array(primitives.R4.string),
        /** Profiles for use cases supported */
        supportedProfile: t.array(primitives.R4.canonical),
        /** If update can commit to a new identity */
        updateCreate: primitives.R4.boolean,
        /** no-version | versioned | versioned-update */
        versioning: primitives.R4.code
      })
    ],
    "CapabilityStatementRestResource"
  )
);

/**
 * What operations are supported?
 */
export interface CapabilityStatementRestInteraction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** transaction | batch | search-system | history-system */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Anything special about operation behavior */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
}

export interface CapabilityStatementRestInteractionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** transaction | batch | search-system | history-system */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Anything special about operation behavior */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
}

export const CapabilityStatementRestInteraction: t.RecursiveType<
  t.Type<
    CapabilityStatementRestInteraction,
    CapabilityStatementRestInteractionOutputType
  >,
  CapabilityStatementRestInteraction,
  CapabilityStatementRestInteractionOutputType
> = t.recursion<
  CapabilityStatementRestInteraction,
  CapabilityStatementRestInteractionOutputType
>("CapabilityStatementRestInteraction", () =>
  t.intersection(
    [
      t.type({
        /** transaction | batch | search-system | history-system */
        code: primitives.R4.code
      }),
      t.partial({
        /** Anything special about operation behavior */
        documentation: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CapabilityStatementRestInteraction"
  )
);

/**
 * If the endpoint is a RESTful one
 */
export interface CapabilityStatementRest {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** client | server */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** General description of implementation */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Information about security of implementation */
  security?: CapabilityStatementRestSecurity;
  /** Resource served on the REST interface */
  resource?: CapabilityStatementRestResource[];
  /** What operations are supported? */
  interaction?: CapabilityStatementRestInteraction[];
  /** Search parameters for searching all resources */
  searchParam?: CapabilityStatementRestResourceSearchParam[];
  /** Definition of a system level operation */
  operation?: CapabilityStatementRestResourceOperation[];
  /** Compartments served/used by system */
  compartment?: t.TypeOf<primitives.R4.CanonicalType>[];
}

export interface CapabilityStatementRestOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** client | server */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** General description of implementation */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Information about security of implementation */
  security?: CapabilityStatementRestSecurityOutputType;
  /** Resource served on the REST interface */
  resource?: CapabilityStatementRestResourceOutputType[];
  /** What operations are supported? */
  interaction?: CapabilityStatementRestInteractionOutputType[];
  /** Search parameters for searching all resources */
  searchParam?: CapabilityStatementRestResourceSearchParamOutputType[];
  /** Definition of a system level operation */
  operation?: CapabilityStatementRestResourceOperationOutputType[];
  /** Compartments served/used by system */
  compartment?: t.OutputOf<primitives.R4.CanonicalType>[];
}

export const CapabilityStatementRest: t.RecursiveType<
  t.Type<CapabilityStatementRest, CapabilityStatementRestOutputType>,
  CapabilityStatementRest,
  CapabilityStatementRestOutputType
> = t.recursion<CapabilityStatementRest, CapabilityStatementRestOutputType>(
  "CapabilityStatementRest",
  () =>
    t.intersection(
      [
        t.type({
          /** client | server */
          mode: primitives.R4.code
        }),
        t.partial({
          /** Compartments served/used by system */
          compartment: t.array(primitives.R4.canonical),
          /** General description of implementation */
          documentation: primitives.R4.markdown,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** What operations are supported? */
          interaction: t.array(CapabilityStatementRestInteraction),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Definition of a system level operation */
          operation: t.array(CapabilityStatementRestResourceOperation),
          /** Resource served on the REST interface */
          resource: t.array(CapabilityStatementRestResource),
          /** Search parameters for searching all resources */
          searchParam: t.array(CapabilityStatementRestResourceSearchParam),
          /** Information about security of implementation */
          security: CapabilityStatementRestSecurity
        })
      ],
      "CapabilityStatementRest"
    )
);

/**
 * Messages supported by this system
 */
export interface CapabilityStatementMessagingSupportedMessage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** sender | receiver */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** Message supported by this system */
  definition: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface CapabilityStatementMessagingSupportedMessageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** sender | receiver */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** Message supported by this system */
  definition: t.OutputOf<primitives.R4.CanonicalType>;
}

export const CapabilityStatementMessagingSupportedMessage: t.RecursiveType<
  t.Type<
    CapabilityStatementMessagingSupportedMessage,
    CapabilityStatementMessagingSupportedMessageOutputType
  >,
  CapabilityStatementMessagingSupportedMessage,
  CapabilityStatementMessagingSupportedMessageOutputType
> = t.recursion<
  CapabilityStatementMessagingSupportedMessage,
  CapabilityStatementMessagingSupportedMessageOutputType
>("CapabilityStatementMessagingSupportedMessage", () =>
  t.intersection(
    [
      t.type({
        /** Message supported by this system */
        definition: primitives.R4.canonical,
        /** sender | receiver */
        mode: primitives.R4.code
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
    "CapabilityStatementMessagingSupportedMessage"
  )
);

/**
 * Where messages should be sent
 */
export interface CapabilityStatementMessagingEndpoint {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** http | ftp | mllp + */
  protocol: Coding;
  /** Network address or identifier of the end-point */
  address: t.TypeOf<primitives.R4.URLType>;
}

export interface CapabilityStatementMessagingEndpointOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** http | ftp | mllp + */
  protocol: CodingOutputType;
  /** Network address or identifier of the end-point */
  address: t.OutputOf<primitives.R4.URLType>;
}

export const CapabilityStatementMessagingEndpoint: t.RecursiveType<
  t.Type<
    CapabilityStatementMessagingEndpoint,
    CapabilityStatementMessagingEndpointOutputType
  >,
  CapabilityStatementMessagingEndpoint,
  CapabilityStatementMessagingEndpointOutputType
> = t.recursion<
  CapabilityStatementMessagingEndpoint,
  CapabilityStatementMessagingEndpointOutputType
>("CapabilityStatementMessagingEndpoint", () =>
  t.intersection(
    [
      t.type({
        /** Network address or identifier of the end-point */
        address: primitives.R4.url,
        /** http | ftp | mllp + */
        protocol: Coding
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
    "CapabilityStatementMessagingEndpoint"
  )
);

/**
 * If messaging is supported
 */
export interface CapabilityStatementMessaging {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Where messages should be sent */
  endpoint?: CapabilityStatementMessagingEndpoint[];
  /** Reliable Message Cache Length (min) */
  reliableCache?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Messaging interface behavior details */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Messages supported by this system */
  supportedMessage?: CapabilityStatementMessagingSupportedMessage[];
}

export interface CapabilityStatementMessagingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Where messages should be sent */
  endpoint?: CapabilityStatementMessagingEndpointOutputType[];
  /** Reliable Message Cache Length (min) */
  reliableCache?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Messaging interface behavior details */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Messages supported by this system */
  supportedMessage?: CapabilityStatementMessagingSupportedMessageOutputType[];
}

export const CapabilityStatementMessaging: t.RecursiveType<
  t.Type<CapabilityStatementMessaging, CapabilityStatementMessagingOutputType>,
  CapabilityStatementMessaging,
  CapabilityStatementMessagingOutputType
> = t.recursion<
  CapabilityStatementMessaging,
  CapabilityStatementMessagingOutputType
>("CapabilityStatementMessaging", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Messaging interface behavior details */
        documentation: primitives.R4.markdown,
        /** Where messages should be sent */
        endpoint: t.array(CapabilityStatementMessagingEndpoint),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Reliable Message Cache Length (min) */
        reliableCache: primitives.R4.unsignedInt,
        /** Messages supported by this system */
        supportedMessage: t.array(CapabilityStatementMessagingSupportedMessage)
      })
    ],
    "CapabilityStatementMessaging"
  )
);

/**
 * If this describes a specific instance
 */
export interface CapabilityStatementImplementation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Describes this specific instance */
  description: t.TypeOf<primitives.R4.StringType>;
  /** Base URL for the installation */
  url?: t.TypeOf<primitives.R4.URLType>;
  /** Organization that manages the data */
  custodian?: Reference;
}

export interface CapabilityStatementImplementationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Describes this specific instance */
  description: t.OutputOf<primitives.R4.StringType>;
  /** Base URL for the installation */
  url?: t.OutputOf<primitives.R4.URLType>;
  /** Organization that manages the data */
  custodian?: ReferenceOutputType;
}

export const CapabilityStatementImplementation: t.RecursiveType<
  t.Type<
    CapabilityStatementImplementation,
    CapabilityStatementImplementationOutputType
  >,
  CapabilityStatementImplementation,
  CapabilityStatementImplementationOutputType
> = t.recursion<
  CapabilityStatementImplementation,
  CapabilityStatementImplementationOutputType
>("CapabilityStatementImplementation", () =>
  t.intersection(
    [
      t.type({
        /** Describes this specific instance */
        description: primitives.R4.string
      }),
      t.partial({
        /** Organization that manages the data */
        custodian: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Base URL for the installation */
        url: primitives.R4.url
      })
    ],
    "CapabilityStatementImplementation"
  )
);

/**
 * Document definition
 */
export interface CapabilityStatementDocument {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** producer | consumer */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** Description of document support */
  documentation?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Constraint on the resources used in the document */
  profile: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface CapabilityStatementDocumentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** producer | consumer */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** Description of document support */
  documentation?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Constraint on the resources used in the document */
  profile: t.OutputOf<primitives.R4.CanonicalType>;
}

export const CapabilityStatementDocument: t.RecursiveType<
  t.Type<CapabilityStatementDocument, CapabilityStatementDocumentOutputType>,
  CapabilityStatementDocument,
  CapabilityStatementDocumentOutputType
> = t.recursion<
  CapabilityStatementDocument,
  CapabilityStatementDocumentOutputType
>("CapabilityStatementDocument", () =>
  t.intersection(
    [
      t.type({
        /** producer | consumer */
        mode: primitives.R4.code,
        /** Constraint on the resources used in the document */
        profile: primitives.R4.canonical
      }),
      t.partial({
        /** Description of document support */
        documentation: primitives.R4.markdown,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CapabilityStatementDocument"
  )
);

/**
 * A statement of system capabilities
 */
export interface CapabilityStatement {
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
  /** Canonical identifier for this capability statement, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the capability statement */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this capability statement (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this capability statement (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the capability statement */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for capability statement (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this capability statement is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** instance | capability | requirements */
  kind: t.TypeOf<primitives.R4.CodeType>;
  /** Canonical URL of another capability statement this implements */
  instantiates?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Canonical URL of another capability statement this adds to */
  imports?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Software that is covered by this capability statement */
  software?: CapabilityStatementSoftware;
  /** If this describes a specific instance */
  implementation?: CapabilityStatementImplementation;
  /** FHIR Version the system supports */
  fhirVersion: t.TypeOf<primitives.R4.CodeType>;
  /** formats supported (xml | json | ttl | mime type) */
  format: t.TypeOf<primitives.R4.CodeType>[];
  /** Patch formats supported */
  patchFormat?: t.TypeOf<primitives.R4.CodeType>[];
  /** Implementation guides supported */
  implementationGuide?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** If the endpoint is a RESTful one */
  rest?: CapabilityStatementRest[];
  /** If messaging is supported */
  messaging?: CapabilityStatementMessaging[];
  /** Document definition */
  document?: CapabilityStatementDocument[];
}

export interface CapabilityStatementOutputType {
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
  /** Canonical identifier for this capability statement, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the capability statement */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this capability statement (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this capability statement (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the capability statement */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for capability statement (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this capability statement is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** instance | capability | requirements */
  kind: t.OutputOf<primitives.R4.CodeType>;
  /** Canonical URL of another capability statement this implements */
  instantiates?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Canonical URL of another capability statement this adds to */
  imports?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Software that is covered by this capability statement */
  software?: CapabilityStatementSoftwareOutputType;
  /** If this describes a specific instance */
  implementation?: CapabilityStatementImplementationOutputType;
  /** FHIR Version the system supports */
  fhirVersion: t.OutputOf<primitives.R4.CodeType>;
  /** formats supported (xml | json | ttl | mime type) */
  format: t.OutputOf<primitives.R4.CodeType>[];
  /** Patch formats supported */
  patchFormat?: t.OutputOf<primitives.R4.CodeType>[];
  /** Implementation guides supported */
  implementationGuide?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** If the endpoint is a RESTful one */
  rest?: CapabilityStatementRestOutputType[];
  /** If messaging is supported */
  messaging?: CapabilityStatementMessagingOutputType[];
  /** Document definition */
  document?: CapabilityStatementDocumentOutputType[];
}

export const CapabilityStatement: t.RecursiveType<
  t.Type<CapabilityStatement, CapabilityStatementOutputType>,
  CapabilityStatement,
  CapabilityStatementOutputType
> = t.recursion<CapabilityStatement, CapabilityStatementOutputType>(
  "CapabilityStatement",
  () =>
    t.intersection(
      [
        t.type({
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** FHIR Version the system supports */
          fhirVersion: primitives.R4.code,
          /** formats supported (xml | json | ttl | mime type) */
          format: t.array(primitives.R4.code),
          /** instance | capability | requirements */
          kind: primitives.R4.code,
          /** draft | active | retired | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Natural language description of the capability statement */
          description: primitives.R4.markdown,
          /** Document definition */
          document: t.array(CapabilityStatementDocument),
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** If this describes a specific instance */
          implementation: CapabilityStatementImplementation,
          /** Implementation guides supported */
          implementationGuide: t.array(primitives.R4.canonical),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Canonical URL of another capability statement this adds to */
          imports: t.array(primitives.R4.canonical),
          /** Canonical URL of another capability statement this implements */
          instantiates: t.array(primitives.R4.canonical),
          /** Intended jurisdiction for capability statement (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** If messaging is supported */
          messaging: t.array(CapabilityStatementMessaging),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name for this capability statement (computer friendly) */
          name: primitives.R4.string,
          /** Patch formats supported */
          patchFormat: t.array(primitives.R4.code),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Why this capability statement is defined */
          purpose: primitives.R4.markdown,
          /** If the endpoint is a RESTful one */
          rest: t.array(CapabilityStatementRest),
          /** Software that is covered by this capability statement */
          software: CapabilityStatementSoftware,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this capability statement (human friendly) */
          title: primitives.R4.string,
          /** Canonical identifier for this capability statement, represented as a URI (globally unique) */
          url: primitives.R4.uri,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the capability statement */
          version: primitives.R4.string
        })
      ],
      "CapabilityStatement"
    )
);
