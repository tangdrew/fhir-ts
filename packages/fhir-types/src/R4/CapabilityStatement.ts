/**
 * CapabilityStatement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A statement of system capabilities
 */
export interface CapabilityStatement {
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
  /** Canonical identifier for this capability statement, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the capability statement */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this capability statement (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this capability statement (human friendly) */
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
  date: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the capability statement */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for capability statement (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this capability statement is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** instance | capability | requirements */
  kind: primitives.R4.code;
  /** Extension of kind element */
  _kind?: Element;
  /** Canonical URL of another capability statement this implements */
  instantiates?: primitives.R4.canonical[];
  /** Extension of instantiates element */
  _instantiates?: Element[];
  /** Canonical URL of another capability statement this adds to */
  imports?: primitives.R4.canonical[];
  /** Extension of imports element */
  _imports?: Element[];
  /** FHIR Version the system supports */
  fhirVersion: primitives.R4.code;
  /** Extension of fhirVersion element */
  _fhirVersion?: Element;
  /** formats supported (xml | json | ttl | mime type) */
  format: primitives.R4.code[];
  /** Extension of format element */
  _format?: Element[];
  /** Patch formats supported */
  patchFormat?: primitives.R4.code[];
  /** Extension of patchFormat element */
  _patchFormat?: Element[];
  /** Implementation guides supported */
  implementationGuide?: primitives.R4.canonical[];
  /** Extension of implementationGuide element */
  _implementationGuide?: Element[];
}
/**
 * A statement of system capabilities
 */
export const CapabilityStatement: t.Type<CapabilityStatement> = t.recursion<
  CapabilityStatement
>("CapabilityStatement", () =>
  t.intersection([
    t.type({
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** instance | capability | requirements */
      kind: primitives.R4.code,
      /** FHIR Version the system supports */
      fhirVersion: primitives.R4.code,
      /** formats supported (xml | json | ttl | mime type) */
      format: t.array(primitives.R4.code)
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
      /** Canonical identifier for this capability statement, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Business version of the capability statement */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this capability statement (computer friendly) */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Name for this capability statement (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the capability statement */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for capability statement (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Why this capability statement is defined */
      purpose: primitives.R4.markdown,
      /** Extension of purpose element */
      _purpose: Element,
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** Extension of kind element */
      _kind: Element,
      /** Canonical URL of another capability statement this implements */
      instantiates: t.array(primitives.R4.canonical),
      /** Extension of instantiates element */
      _instantiates: t.array(Element),
      /** Canonical URL of another capability statement this adds to */
      imports: t.array(primitives.R4.canonical),
      /** Extension of imports element */
      _imports: t.array(Element),
      /** Extension of fhirVersion element */
      _fhirVersion: Element,
      /** Extension of format element */
      _format: t.array(Element),
      /** Patch formats supported */
      patchFormat: t.array(primitives.R4.code),
      /** Extension of patchFormat element */
      _patchFormat: t.array(Element),
      /** Implementation guides supported */
      implementationGuide: t.array(primitives.R4.canonical),
      /** Extension of implementationGuide element */
      _implementationGuide: t.array(Element)
    })
  ])
);

/**
 * Software that is covered by this capability statement
 */
export interface CapabilityStatementSoftware {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A name the software is known by */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Version covered by this statement */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Date this version was released */
  releaseDate?: primitives.R4.dateTime;
  /** Extension of releaseDate element */
  _releaseDate?: Element;
}
/**
 * Software that is covered by this capability statement
 */
export const CapabilityStatementSoftware: t.Type<
  CapabilityStatementSoftware
> = t.recursion<CapabilityStatementSoftware>(
  "CapabilityStatementSoftware",
  () =>
    t.intersection([
      t.type({
        /** A name the software is known by */
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
        /** Version covered by this statement */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Date this version was released */
        releaseDate: primitives.R4.dateTime,
        /** Extension of releaseDate element */
        _releaseDate: Element
      })
    ])
);

/**
 * If this describes a specific instance
 */
export interface CapabilityStatementImplementation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Describes this specific instance */
  description: string;
  /** Extension of description element */
  _description?: Element;
  /** Base URL for the installation */
  url?: primitives.R4.url;
  /** Extension of url element */
  _url?: Element;
  /** Organization that manages the data */
  custodian?: Reference;
}
/**
 * If this describes a specific instance
 */
export const CapabilityStatementImplementation: t.Type<
  CapabilityStatementImplementation
> = t.recursion<CapabilityStatementImplementation>(
  "CapabilityStatementImplementation",
  () =>
    t.intersection([
      t.type({
        /** Describes this specific instance */
        description: primitives.R4.string
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
        /** Extension of description element */
        _description: Element,
        /** Base URL for the installation */
        url: primitives.R4.url,
        /** Extension of url element */
        _url: Element,
        /** Organization that manages the data */
        custodian: Reference
      })
    ])
);

/**
 * If the endpoint is a RESTful one
 */
export interface CapabilityStatementRest {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** client | server */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** General description of implementation */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
  /** Search parameters for searching all resources */
  searchParam?: CapabilityStatementRestResourceSearchParam[];
  /** Definition of a system level operation */
  operation?: CapabilityStatementRestResourceOperation[];
  /** Compartments served/used by system */
  compartment?: primitives.R4.canonical[];
  /** Extension of compartment element */
  _compartment?: Element[];
}
/**
 * If the endpoint is a RESTful one
 */
export const CapabilityStatementRest: t.Type<
  CapabilityStatementRest
> = t.recursion<CapabilityStatementRest>("CapabilityStatementRest", () =>
  t.intersection([
    t.type({
      /** client | server */
      mode: primitives.R4.code
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
      /** Extension of mode element */
      _mode: Element,
      /** General description of implementation */
      documentation: primitives.R4.markdown,
      /** Extension of documentation element */
      _documentation: Element,
      /** Search parameters for searching all resources */
      searchParam: t.array(CapabilityStatementRestResourceSearchParam),
      /** Definition of a system level operation */
      operation: t.array(CapabilityStatementRestResourceOperation),
      /** Compartments served/used by system */
      compartment: t.array(primitives.R4.canonical),
      /** Extension of compartment element */
      _compartment: t.array(Element)
    })
  ])
);

/**
 * Information about security of implementation
 */
export interface CapabilityStatementRestSecurity {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Adds CORS Headers (http://enable-cors.org/) */
  cors?: boolean;
  /** Extension of cors element */
  _cors?: Element;
  /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates */
  service?: CodeableConcept[];
  /** General description of how security works */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Information about security of implementation
 */
export const CapabilityStatementRestSecurity: t.Type<
  CapabilityStatementRestSecurity
> = t.recursion<CapabilityStatementRestSecurity>(
  "CapabilityStatementRestSecurity",
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
        /** Adds CORS Headers (http://enable-cors.org/) */
        cors: primitives.R4.boolean,
        /** Extension of cors element */
        _cors: Element,
        /** OAuth | SMART-on-FHIR | NTLM | Basic | Kerberos | Certificates */
        service: t.array(CodeableConcept),
        /** General description of how security works */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * Resource served on the REST interface
 */
export interface CapabilityStatementRestResource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A resource type that is supported */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Base System profile for all uses of resource */
  profile?: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
  /** Profiles for use cases supported */
  supportedProfile?: primitives.R4.canonical[];
  /** Extension of supportedProfile element */
  _supportedProfile?: Element[];
  /** Additional information about the use of the resource type */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
  /** no-version | versioned | versioned-update */
  versioning?: primitives.R4.code;
  /** Extension of versioning element */
  _versioning?: Element;
  /** Whether vRead can return past versions */
  readHistory?: boolean;
  /** Extension of readHistory element */
  _readHistory?: Element;
  /** If update can commit to a new identity */
  updateCreate?: boolean;
  /** Extension of updateCreate element */
  _updateCreate?: Element;
  /** If allows/uses conditional create */
  conditionalCreate?: boolean;
  /** Extension of conditionalCreate element */
  _conditionalCreate?: Element;
  /** not-supported | modified-since | not-match | full-support */
  conditionalRead?: primitives.R4.code;
  /** Extension of conditionalRead element */
  _conditionalRead?: Element;
  /** If allows/uses conditional update */
  conditionalUpdate?: boolean;
  /** Extension of conditionalUpdate element */
  _conditionalUpdate?: Element;
  /** not-supported | single | multiple - how conditional delete is supported */
  conditionalDelete?: primitives.R4.code;
  /** Extension of conditionalDelete element */
  _conditionalDelete?: Element;
  /** literal | logical | resolves | enforced | local */
  referencePolicy?: primitives.R4.code[];
  /** Extension of referencePolicy element */
  _referencePolicy?: Element[];
  /** _include values supported by the server */
  searchInclude?: string[];
  /** Extension of searchInclude element */
  _searchInclude?: Element[];
  /** _revinclude values supported by the server */
  searchRevInclude?: string[];
  /** Extension of searchRevInclude element */
  _searchRevInclude?: Element[];
}
/**
 * Resource served on the REST interface
 */
export const CapabilityStatementRestResource: t.Type<
  CapabilityStatementRestResource
> = t.recursion<CapabilityStatementRestResource>(
  "CapabilityStatementRestResource",
  () =>
    t.intersection([
      t.type({
        /** A resource type that is supported */
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
        /** Extension of type element */
        _type: Element,
        /** Base System profile for all uses of resource */
        profile: primitives.R4.canonical,
        /** Extension of profile element */
        _profile: Element,
        /** Profiles for use cases supported */
        supportedProfile: t.array(primitives.R4.canonical),
        /** Extension of supportedProfile element */
        _supportedProfile: t.array(Element),
        /** Additional information about the use of the resource type */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element,
        /** no-version | versioned | versioned-update */
        versioning: primitives.R4.code,
        /** Extension of versioning element */
        _versioning: Element,
        /** Whether vRead can return past versions */
        readHistory: primitives.R4.boolean,
        /** Extension of readHistory element */
        _readHistory: Element,
        /** If update can commit to a new identity */
        updateCreate: primitives.R4.boolean,
        /** Extension of updateCreate element */
        _updateCreate: Element,
        /** If allows/uses conditional create */
        conditionalCreate: primitives.R4.boolean,
        /** Extension of conditionalCreate element */
        _conditionalCreate: Element,
        /** not-supported | modified-since | not-match | full-support */
        conditionalRead: primitives.R4.code,
        /** Extension of conditionalRead element */
        _conditionalRead: Element,
        /** If allows/uses conditional update */
        conditionalUpdate: primitives.R4.boolean,
        /** Extension of conditionalUpdate element */
        _conditionalUpdate: Element,
        /** not-supported | single | multiple - how conditional delete is supported */
        conditionalDelete: primitives.R4.code,
        /** Extension of conditionalDelete element */
        _conditionalDelete: Element,
        /** literal | logical | resolves | enforced | local */
        referencePolicy: t.array(primitives.R4.code),
        /** Extension of referencePolicy element */
        _referencePolicy: t.array(Element),
        /** _include values supported by the server */
        searchInclude: t.array(primitives.R4.string),
        /** Extension of searchInclude element */
        _searchInclude: t.array(Element),
        /** _revinclude values supported by the server */
        searchRevInclude: t.array(primitives.R4.string),
        /** Extension of searchRevInclude element */
        _searchRevInclude: t.array(Element)
      })
    ])
);

/**
 * What operations are supported?
 */
export interface CapabilityStatementRestResourceInteraction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** read | vread | update | patch | delete | history-instance | history-type | create | search-type */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Anything special about operation behavior */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * What operations are supported?
 */
export const CapabilityStatementRestResourceInteraction: t.Type<
  CapabilityStatementRestResourceInteraction
> = t.recursion<CapabilityStatementRestResourceInteraction>(
  "CapabilityStatementRestResourceInteraction",
  () =>
    t.intersection([
      t.type({
        /** read | vread | update | patch | delete | history-instance | history-type | create | search-type */
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
        /** Anything special about operation behavior */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);

/**
 * Search parameters supported by implementation
 */
export interface CapabilityStatementRestResourceSearchParam {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of search parameter */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Source of definition for parameter */
  definition?: primitives.R4.canonical;
  /** Extension of definition element */
  _definition?: Element;
  /** number | date | string | token | reference | composite | quantity | uri | special */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Server-specific usage */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Search parameters supported by implementation
 */
export const CapabilityStatementRestResourceSearchParam: t.Type<
  CapabilityStatementRestResourceSearchParam
> = t.recursion<CapabilityStatementRestResourceSearchParam>(
  "CapabilityStatementRestResourceSearchParam",
  () =>
    t.intersection([
      t.type({
        /** Name of search parameter */
        name: primitives.R4.string,
        /** number | date | string | token | reference | composite | quantity | uri | special */
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
        /** Extension of name element */
        _name: Element,
        /** Source of definition for parameter */
        definition: primitives.R4.canonical,
        /** Extension of definition element */
        _definition: Element,
        /** Extension of type element */
        _type: Element,
        /** Server-specific usage */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);

/**
 * Definition of a resource operation
 */
export interface CapabilityStatementRestResourceOperation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name by which the operation/query is invoked */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** The defined operation/query */
  definition: primitives.R4.canonical;
  /** Extension of definition element */
  _definition?: Element;
  /** Specific details about operation behavior */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * Definition of a resource operation
 */
export const CapabilityStatementRestResourceOperation: t.Type<
  CapabilityStatementRestResourceOperation
> = t.recursion<CapabilityStatementRestResourceOperation>(
  "CapabilityStatementRestResourceOperation",
  () =>
    t.intersection([
      t.type({
        /** Name by which the operation/query is invoked */
        name: primitives.R4.string,
        /** The defined operation/query */
        definition: primitives.R4.canonical
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
        /** Extension of definition element */
        _definition: Element,
        /** Specific details about operation behavior */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);

/**
 * What operations are supported?
 */
export interface CapabilityStatementRestInteraction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** transaction | batch | search-system | history-system */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Anything special about operation behavior */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * What operations are supported?
 */
export const CapabilityStatementRestInteraction: t.Type<
  CapabilityStatementRestInteraction
> = t.recursion<CapabilityStatementRestInteraction>(
  "CapabilityStatementRestInteraction",
  () =>
    t.intersection([
      t.type({
        /** transaction | batch | search-system | history-system */
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
        /** Anything special about operation behavior */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);

/**
 * If messaging is supported
 */
export interface CapabilityStatementMessaging {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reliable Message Cache Length (min) */
  reliableCache?: primitives.R4.unsignedInt;
  /** Extension of reliableCache element */
  _reliableCache?: Element;
  /** Messaging interface behavior details */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
}
/**
 * If messaging is supported
 */
export const CapabilityStatementMessaging: t.Type<
  CapabilityStatementMessaging
> = t.recursion<CapabilityStatementMessaging>(
  "CapabilityStatementMessaging",
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
        /** Reliable Message Cache Length (min) */
        reliableCache: primitives.R4.unsignedInt,
        /** Extension of reliableCache element */
        _reliableCache: Element,
        /** Messaging interface behavior details */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element
      })
    ])
);

/**
 * Where messages should be sent
 */
export interface CapabilityStatementMessagingEndpoint {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** http | ftp | mllp + */
  protocol: Coding;
  /** Network address or identifier of the end-point */
  address: primitives.R4.url;
  /** Extension of address element */
  _address?: Element;
}
/**
 * Where messages should be sent
 */
export const CapabilityStatementMessagingEndpoint: t.Type<
  CapabilityStatementMessagingEndpoint
> = t.recursion<CapabilityStatementMessagingEndpoint>(
  "CapabilityStatementMessagingEndpoint",
  () =>
    t.intersection([
      t.type({
        /** http | ftp | mllp + */
        protocol: Coding,
        /** Network address or identifier of the end-point */
        address: primitives.R4.url
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
        /** Extension of address element */
        _address: Element
      })
    ])
);

/**
 * Messages supported by this system
 */
export interface CapabilityStatementMessagingSupportedMessage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** sender | receiver */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Message supported by this system */
  definition: primitives.R4.canonical;
  /** Extension of definition element */
  _definition?: Element;
}
/**
 * Messages supported by this system
 */
export const CapabilityStatementMessagingSupportedMessage: t.Type<
  CapabilityStatementMessagingSupportedMessage
> = t.recursion<CapabilityStatementMessagingSupportedMessage>(
  "CapabilityStatementMessagingSupportedMessage",
  () =>
    t.intersection([
      t.type({
        /** sender | receiver */
        mode: primitives.R4.code,
        /** Message supported by this system */
        definition: primitives.R4.canonical
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
        /** Extension of mode element */
        _mode: Element,
        /** Extension of definition element */
        _definition: Element
      })
    ])
);

/**
 * Document definition
 */
export interface CapabilityStatementDocument {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** producer | consumer */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Description of document support */
  documentation?: primitives.R4.markdown;
  /** Extension of documentation element */
  _documentation?: Element;
  /** Constraint on the resources used in the document */
  profile: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
}
/**
 * Document definition
 */
export const CapabilityStatementDocument: t.Type<
  CapabilityStatementDocument
> = t.recursion<CapabilityStatementDocument>(
  "CapabilityStatementDocument",
  () =>
    t.intersection([
      t.type({
        /** producer | consumer */
        mode: primitives.R4.code,
        /** Constraint on the resources used in the document */
        profile: primitives.R4.canonical
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
        /** Extension of mode element */
        _mode: Element,
        /** Description of document support */
        documentation: primitives.R4.markdown,
        /** Extension of documentation element */
        _documentation: Element,
        /** Extension of profile element */
        _profile: Element
      })
    ])
);
