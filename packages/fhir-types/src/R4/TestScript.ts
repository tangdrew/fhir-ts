/**
 * TestScript Module
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
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Describes a set of tests
 */
export interface TestScript {
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
  /** Canonical identifier for this test script, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the test script */
  identifier?: Identifier;
  /** Business version of the test script */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this test script (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this test script (human friendly) */
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
  /** Natural language description of the test script */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for test script (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this test script is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** Reference of the validation profile */
  profile?: Reference[];
}
/**
 * Describes a set of tests
 */
export const TestScript: t.Type<TestScript> = t.recursion<TestScript>(
  "TestScript",
  () =>
    t.intersection([
      t.type({
        /** Canonical identifier for this test script, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Name for this test script (computer friendly) */
        name: primitives.R4.string,
        /** draft | active | retired | unknown */
        status: primitives.R4.code
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
        /** Additional identifier for the test script */
        identifier: Identifier,
        /** Business version of the test script */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Extension of name element */
        _name: Element,
        /** Name for this test script (human friendly) */
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
        /** Natural language description of the test script */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for test script (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Why this test script is defined */
        purpose: primitives.R4.markdown,
        /** Extension of purpose element */
        _purpose: Element,
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element,
        /** Reference of the validation profile */
        profile: t.array(Reference)
      })
    ])
);

/**
 * An abstract server representing a client or sender in a message exchange
 */
export interface TestScriptOrigin {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The index of the abstract origin server starting at 1 */
  index: primitives.R4.integer;
  /** Extension of index element */
  _index?: Element;
  /** FHIR-Client | FHIR-SDC-FormFiller */
  profile: Coding;
}
/**
 * An abstract server representing a client or sender in a message exchange
 */
export const TestScriptOrigin: t.Type<TestScriptOrigin> = t.recursion<
  TestScriptOrigin
>("TestScriptOrigin", () =>
  t.intersection([
    t.type({
      /** The index of the abstract origin server starting at 1 */
      index: primitives.R4.integer,
      /** FHIR-Client | FHIR-SDC-FormFiller */
      profile: Coding
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
      /** Extension of index element */
      _index: Element
    })
  ])
);

/**
 * An abstract server representing a destination or receiver in a message exchange
 */
export interface TestScriptDestination {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The index of the abstract destination server starting at 1 */
  index: primitives.R4.integer;
  /** Extension of index element */
  _index?: Element;
  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor */
  profile: Coding;
}
/**
 * An abstract server representing a destination or receiver in a message exchange
 */
export const TestScriptDestination: t.Type<TestScriptDestination> = t.recursion<
  TestScriptDestination
>("TestScriptDestination", () =>
  t.intersection([
    t.type({
      /** The index of the abstract destination server starting at 1 */
      index: primitives.R4.integer,
      /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor */
      profile: Coding
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
      /** Extension of index element */
      _index: Element
    })
  ])
);

/**
 * Required capability that is assumed to function correctly on the FHIR server being tested
 */
export interface TestScriptMetadata {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
}
/**
 * Required capability that is assumed to function correctly on the FHIR server being tested
 */
export const TestScriptMetadata: t.Type<TestScriptMetadata> = t.recursion<
  TestScriptMetadata
>("TestScriptMetadata", () =>
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
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * Links to the FHIR specification
 */
export interface TestScriptMetadataLink {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** URL to the specification */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Short description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Links to the FHIR specification
 */
export const TestScriptMetadataLink: t.Type<
  TestScriptMetadataLink
> = t.recursion<TestScriptMetadataLink>("TestScriptMetadataLink", () =>
  t.intersection([
    t.type({
      /** URL to the specification */
      url: primitives.R4.uri
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
      /** Extension of url element */
      _url: Element,
      /** Short description */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * Capabilities  that are assumed to function correctly on the FHIR server being tested
 */
export interface TestScriptMetadataCapability {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Are the capabilities required? */
  required: boolean;
  /** Extension of required element */
  _required?: Element;
  /** Are the capabilities validated? */
  validated: boolean;
  /** Extension of validated element */
  _validated?: Element;
  /** The expected capabilities of the server */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Which origin server these requirements apply to */
  origin?: primitives.R4.integer[];
  /** Extension of origin element */
  _origin?: Element[];
  /** Which server these requirements apply to */
  destination?: primitives.R4.integer;
  /** Extension of destination element */
  _destination?: Element;
  /** Links to the FHIR specification */
  link?: primitives.R4.uri[];
  /** Extension of link element */
  _link?: Element[];
  /** Required Capability Statement */
  capabilities: primitives.R4.canonical;
  /** Extension of capabilities element */
  _capabilities?: Element;
}
/**
 * Capabilities  that are assumed to function correctly on the FHIR server being tested
 */
export const TestScriptMetadataCapability: t.Type<
  TestScriptMetadataCapability
> = t.recursion<TestScriptMetadataCapability>(
  "TestScriptMetadataCapability",
  () =>
    t.intersection([
      t.type({
        /** Are the capabilities required? */
        required: primitives.R4.boolean,
        /** Are the capabilities validated? */
        validated: primitives.R4.boolean,
        /** Required Capability Statement */
        capabilities: primitives.R4.canonical
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
        /** Extension of required element */
        _required: Element,
        /** Extension of validated element */
        _validated: Element,
        /** The expected capabilities of the server */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Which origin server these requirements apply to */
        origin: t.array(primitives.R4.integer),
        /** Extension of origin element */
        _origin: t.array(Element),
        /** Which server these requirements apply to */
        destination: primitives.R4.integer,
        /** Extension of destination element */
        _destination: Element,
        /** Links to the FHIR specification */
        link: t.array(primitives.R4.uri),
        /** Extension of link element */
        _link: t.array(Element),
        /** Extension of capabilities element */
        _capabilities: Element
      })
    ])
);

/**
 * Fixture in the test script - by reference (uri)
 */
export interface TestScriptFixture {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether or not to implicitly create the fixture during setup */
  autocreate: boolean;
  /** Extension of autocreate element */
  _autocreate?: Element;
  /** Whether or not to implicitly delete the fixture during teardown */
  autodelete: boolean;
  /** Extension of autodelete element */
  _autodelete?: Element;
  /** Reference of the resource */
  resource?: Reference;
}
/**
 * Fixture in the test script - by reference (uri)
 */
export const TestScriptFixture: t.Type<TestScriptFixture> = t.recursion<
  TestScriptFixture
>("TestScriptFixture", () =>
  t.intersection([
    t.type({
      /** Whether or not to implicitly create the fixture during setup */
      autocreate: primitives.R4.boolean,
      /** Whether or not to implicitly delete the fixture during teardown */
      autodelete: primitives.R4.boolean
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
      /** Extension of autocreate element */
      _autocreate: Element,
      /** Extension of autodelete element */
      _autodelete: Element,
      /** Reference of the resource */
      resource: Reference
    })
  ])
);

/**
 * Placeholder for evaluated elements
 */
export interface TestScriptVariable {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Descriptive name for this variable */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Default, hard-coded, or user-defined value for this variable */
  defaultValue?: string;
  /** Extension of defaultValue element */
  _defaultValue?: Element;
  /** Natural language description of the variable */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** The FHIRPath expression against the fixture body */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
  /** HTTP header field name for source */
  headerField?: string;
  /** Extension of headerField element */
  _headerField?: Element;
  /** Hint help text for default value to enter */
  hint?: string;
  /** Extension of hint element */
  _hint?: Element;
  /** XPath or JSONPath against the fixture body */
  path?: string;
  /** Extension of path element */
  _path?: Element;
  /** Fixture Id of source expression or headerField within this variable */
  sourceId?: primitives.R4.id;
  /** Extension of sourceId element */
  _sourceId?: Element;
}
/**
 * Placeholder for evaluated elements
 */
export const TestScriptVariable: t.Type<TestScriptVariable> = t.recursion<
  TestScriptVariable
>("TestScriptVariable", () =>
  t.intersection([
    t.type({
      /** Descriptive name for this variable */
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
      /** Default, hard-coded, or user-defined value for this variable */
      defaultValue: primitives.R4.string,
      /** Extension of defaultValue element */
      _defaultValue: Element,
      /** Natural language description of the variable */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** The FHIRPath expression against the fixture body */
      expression: primitives.R4.string,
      /** Extension of expression element */
      _expression: Element,
      /** HTTP header field name for source */
      headerField: primitives.R4.string,
      /** Extension of headerField element */
      _headerField: Element,
      /** Hint help text for default value to enter */
      hint: primitives.R4.string,
      /** Extension of hint element */
      _hint: Element,
      /** XPath or JSONPath against the fixture body */
      path: primitives.R4.string,
      /** Extension of path element */
      _path: Element,
      /** Fixture Id of source expression or headerField within this variable */
      sourceId: primitives.R4.id,
      /** Extension of sourceId element */
      _sourceId: Element
    })
  ])
);

/**
 * A series of required setup operations before tests are executed
 */
export interface TestScriptSetup {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
}
/**
 * A series of required setup operations before tests are executed
 */
export const TestScriptSetup: t.Type<TestScriptSetup> = t.recursion<
  TestScriptSetup
>("TestScriptSetup", () =>
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
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * A setup operation or assert to perform
 */
export interface TestScriptSetupAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
}
/**
 * A setup operation or assert to perform
 */
export const TestScriptSetupAction: t.Type<TestScriptSetupAction> = t.recursion<
  TestScriptSetupAction
>("TestScriptSetupAction", () =>
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
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * The setup operation to perform
 */
export interface TestScriptSetupActionOperation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The operation code type that will be executed */
  type?: Coding;
  /** Resource type */
  resource?: primitives.R4.code;
  /** Extension of resource element */
  _resource?: Element;
  /** Tracking/logging operation label */
  label?: string;
  /** Extension of label element */
  _label?: Element;
  /** Tracking/reporting operation description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Mime type to accept in the payload of the response, with charset etc. */
  accept?: primitives.R4.code;
  /** Extension of accept element */
  _accept?: Element;
  /** Mime type of the request payload contents, with charset etc. */
  contentType?: primitives.R4.code;
  /** Extension of contentType element */
  _contentType?: Element;
  /** Server responding to the request */
  destination?: primitives.R4.integer;
  /** Extension of destination element */
  _destination?: Element;
  /** Whether or not to send the request url in encoded format */
  encodeRequestUrl: boolean;
  /** Extension of encodeRequestUrl element */
  _encodeRequestUrl?: Element;
  /** delete | get | options | patch | post | put | head */
  method?: primitives.R4.code;
  /** Extension of method element */
  _method?: Element;
  /** Server initiating the request */
  origin?: primitives.R4.integer;
  /** Extension of origin element */
  _origin?: Element;
  /** Explicitly defined path parameters */
  params?: string;
  /** Extension of params element */
  _params?: Element;
  /** Fixture Id of mapped request */
  requestId?: primitives.R4.id;
  /** Extension of requestId element */
  _requestId?: Element;
  /** Fixture Id of mapped response */
  responseId?: primitives.R4.id;
  /** Extension of responseId element */
  _responseId?: Element;
  /** Fixture Id of body for PUT and POST requests */
  sourceId?: primitives.R4.id;
  /** Extension of sourceId element */
  _sourceId?: Element;
  /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests */
  targetId?: primitives.R4.id;
  /** Extension of targetId element */
  _targetId?: Element;
  /** Request URL */
  url?: string;
  /** Extension of url element */
  _url?: Element;
}
/**
 * The setup operation to perform
 */
export const TestScriptSetupActionOperation: t.Type<
  TestScriptSetupActionOperation
> = t.recursion<TestScriptSetupActionOperation>(
  "TestScriptSetupActionOperation",
  () =>
    t.intersection([
      t.type({
        /** Whether or not to send the request url in encoded format */
        encodeRequestUrl: primitives.R4.boolean
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
        /** The operation code type that will be executed */
        type: Coding,
        /** Resource type */
        resource: primitives.R4.code,
        /** Extension of resource element */
        _resource: Element,
        /** Tracking/logging operation label */
        label: primitives.R4.string,
        /** Extension of label element */
        _label: Element,
        /** Tracking/reporting operation description */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Mime type to accept in the payload of the response, with charset etc. */
        accept: primitives.R4.code,
        /** Extension of accept element */
        _accept: Element,
        /** Mime type of the request payload contents, with charset etc. */
        contentType: primitives.R4.code,
        /** Extension of contentType element */
        _contentType: Element,
        /** Server responding to the request */
        destination: primitives.R4.integer,
        /** Extension of destination element */
        _destination: Element,
        /** Extension of encodeRequestUrl element */
        _encodeRequestUrl: Element,
        /** delete | get | options | patch | post | put | head */
        method: primitives.R4.code,
        /** Extension of method element */
        _method: Element,
        /** Server initiating the request */
        origin: primitives.R4.integer,
        /** Extension of origin element */
        _origin: Element,
        /** Explicitly defined path parameters */
        params: primitives.R4.string,
        /** Extension of params element */
        _params: Element,
        /** Fixture Id of mapped request */
        requestId: primitives.R4.id,
        /** Extension of requestId element */
        _requestId: Element,
        /** Fixture Id of mapped response */
        responseId: primitives.R4.id,
        /** Extension of responseId element */
        _responseId: Element,
        /** Fixture Id of body for PUT and POST requests */
        sourceId: primitives.R4.id,
        /** Extension of sourceId element */
        _sourceId: Element,
        /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests */
        targetId: primitives.R4.id,
        /** Extension of targetId element */
        _targetId: Element,
        /** Request URL */
        url: primitives.R4.string,
        /** Extension of url element */
        _url: Element
      })
    ])
);

/**
 * Each operation can have one or more header elements
 */
export interface TestScriptSetupActionOperationRequestHeader {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** HTTP header field name */
  field: string;
  /** Extension of field element */
  _field?: Element;
  /** HTTP headerfield value */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Each operation can have one or more header elements
 */
export const TestScriptSetupActionOperationRequestHeader: t.Type<
  TestScriptSetupActionOperationRequestHeader
> = t.recursion<TestScriptSetupActionOperationRequestHeader>(
  "TestScriptSetupActionOperationRequestHeader",
  () =>
    t.intersection([
      t.type({
        /** HTTP header field name */
        field: primitives.R4.string,
        /** HTTP headerfield value */
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
        /** Extension of field element */
        _field: Element,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * The assertion to perform
 */
export interface TestScriptSetupActionAssert {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Tracking/logging assertion label */
  label?: string;
  /** Extension of label element */
  _label?: Element;
  /** Tracking/reporting assertion description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** response | request */
  direction?: primitives.R4.code;
  /** Extension of direction element */
  _direction?: Element;
  /** Id of the source fixture to be evaluated */
  compareToSourceId?: string;
  /** Extension of compareToSourceId element */
  _compareToSourceId?: Element;
  /** The FHIRPath expression to evaluate against the source fixture */
  compareToSourceExpression?: string;
  /** Extension of compareToSourceExpression element */
  _compareToSourceExpression?: Element;
  /** XPath or JSONPath expression to evaluate against the source fixture */
  compareToSourcePath?: string;
  /** Extension of compareToSourcePath element */
  _compareToSourcePath?: Element;
  /** Mime type to compare against the 'Content-Type' header */
  contentType?: primitives.R4.code;
  /** Extension of contentType element */
  _contentType?: Element;
  /** The FHIRPath expression to be evaluated */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
  /** HTTP header field name */
  headerField?: string;
  /** Extension of headerField element */
  _headerField?: Element;
  /** Fixture Id of minimum content resource */
  minimumId?: string;
  /** Extension of minimumId element */
  _minimumId?: Element;
  /** Perform validation on navigation links? */
  navigationLinks?: boolean;
  /** Extension of navigationLinks element */
  _navigationLinks?: Element;
  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval */
  operator?: primitives.R4.code;
  /** Extension of operator element */
  _operator?: Element;
  /** XPath or JSONPath expression */
  path?: string;
  /** Extension of path element */
  _path?: Element;
  /** delete | get | options | patch | post | put | head */
  requestMethod?: primitives.R4.code;
  /** Extension of requestMethod element */
  _requestMethod?: Element;
  /** Request URL comparison value */
  requestURL?: string;
  /** Extension of requestURL element */
  _requestURL?: Element;
  /** Resource type */
  resource?: primitives.R4.code;
  /** Extension of resource element */
  _resource?: Element;
  /** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable */
  response?: primitives.R4.code;
  /** Extension of response element */
  _response?: Element;
  /** HTTP response code to test */
  responseCode?: string;
  /** Extension of responseCode element */
  _responseCode?: Element;
  /** Fixture Id of source expression or headerField */
  sourceId?: primitives.R4.id;
  /** Extension of sourceId element */
  _sourceId?: Element;
  /** Profile Id of validation profile reference */
  validateProfileId?: primitives.R4.id;
  /** Extension of validateProfileId element */
  _validateProfileId?: Element;
  /** The value to compare to */
  value?: string;
  /** Extension of value element */
  _value?: Element;
  /** Will this assert produce a warning only on error? */
  warningOnly: boolean;
  /** Extension of warningOnly element */
  _warningOnly?: Element;
}
/**
 * The assertion to perform
 */
export const TestScriptSetupActionAssert: t.Type<
  TestScriptSetupActionAssert
> = t.recursion<TestScriptSetupActionAssert>(
  "TestScriptSetupActionAssert",
  () =>
    t.intersection([
      t.type({
        /** Will this assert produce a warning only on error? */
        warningOnly: primitives.R4.boolean
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
        /** Tracking/logging assertion label */
        label: primitives.R4.string,
        /** Extension of label element */
        _label: Element,
        /** Tracking/reporting assertion description */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** response | request */
        direction: primitives.R4.code,
        /** Extension of direction element */
        _direction: Element,
        /** Id of the source fixture to be evaluated */
        compareToSourceId: primitives.R4.string,
        /** Extension of compareToSourceId element */
        _compareToSourceId: Element,
        /** The FHIRPath expression to evaluate against the source fixture */
        compareToSourceExpression: primitives.R4.string,
        /** Extension of compareToSourceExpression element */
        _compareToSourceExpression: Element,
        /** XPath or JSONPath expression to evaluate against the source fixture */
        compareToSourcePath: primitives.R4.string,
        /** Extension of compareToSourcePath element */
        _compareToSourcePath: Element,
        /** Mime type to compare against the 'Content-Type' header */
        contentType: primitives.R4.code,
        /** Extension of contentType element */
        _contentType: Element,
        /** The FHIRPath expression to be evaluated */
        expression: primitives.R4.string,
        /** Extension of expression element */
        _expression: Element,
        /** HTTP header field name */
        headerField: primitives.R4.string,
        /** Extension of headerField element */
        _headerField: Element,
        /** Fixture Id of minimum content resource */
        minimumId: primitives.R4.string,
        /** Extension of minimumId element */
        _minimumId: Element,
        /** Perform validation on navigation links? */
        navigationLinks: primitives.R4.boolean,
        /** Extension of navigationLinks element */
        _navigationLinks: Element,
        /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval */
        operator: primitives.R4.code,
        /** Extension of operator element */
        _operator: Element,
        /** XPath or JSONPath expression */
        path: primitives.R4.string,
        /** Extension of path element */
        _path: Element,
        /** delete | get | options | patch | post | put | head */
        requestMethod: primitives.R4.code,
        /** Extension of requestMethod element */
        _requestMethod: Element,
        /** Request URL comparison value */
        requestURL: primitives.R4.string,
        /** Extension of requestURL element */
        _requestURL: Element,
        /** Resource type */
        resource: primitives.R4.code,
        /** Extension of resource element */
        _resource: Element,
        /** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable */
        response: primitives.R4.code,
        /** Extension of response element */
        _response: Element,
        /** HTTP response code to test */
        responseCode: primitives.R4.string,
        /** Extension of responseCode element */
        _responseCode: Element,
        /** Fixture Id of source expression or headerField */
        sourceId: primitives.R4.id,
        /** Extension of sourceId element */
        _sourceId: Element,
        /** Profile Id of validation profile reference */
        validateProfileId: primitives.R4.id,
        /** Extension of validateProfileId element */
        _validateProfileId: Element,
        /** The value to compare to */
        value: primitives.R4.string,
        /** Extension of value element */
        _value: Element,
        /** Extension of warningOnly element */
        _warningOnly: Element
      })
    ])
);

/**
 * A test in this script
 */
export interface TestScriptTest {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Tracking/logging name of this test */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Tracking/reporting short description of the test */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * A test in this script
 */
export const TestScriptTest: t.Type<TestScriptTest> = t.recursion<
  TestScriptTest
>("TestScriptTest", () =>
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
      /** Tracking/logging name of this test */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Tracking/reporting short description of the test */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element
    })
  ])
);

/**
 * A test operation or assert to perform
 */
export interface TestScriptTestAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The setup operation to perform */
  operation?: TestScriptSetupActionOperation;
  /** The setup assertion to perform */
  assert?: TestScriptSetupActionAssert;
}
/**
 * A test operation or assert to perform
 */
export const TestScriptTestAction: t.Type<TestScriptTestAction> = t.recursion<
  TestScriptTestAction
>("TestScriptTestAction", () =>
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
      /** The setup operation to perform */
      operation: TestScriptSetupActionOperation,
      /** The setup assertion to perform */
      assert: TestScriptSetupActionAssert
    })
  ])
);

/**
 * A series of required clean up steps
 */
export interface TestScriptTeardown {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
}
/**
 * A series of required clean up steps
 */
export const TestScriptTeardown: t.Type<TestScriptTeardown> = t.recursion<
  TestScriptTeardown
>("TestScriptTeardown", () =>
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
      modifierExtension: t.array(Extension)
    })
  ])
);

/**
 * One or more teardown operations to perform
 */
export interface TestScriptTeardownAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The teardown operation to perform */
  operation: TestScriptSetupActionOperation;
}
/**
 * One or more teardown operations to perform
 */
export const TestScriptTeardownAction: t.Type<
  TestScriptTeardownAction
> = t.recursion<TestScriptTeardownAction>("TestScriptTeardownAction", () =>
  t.intersection([
    t.type({
      /** The teardown operation to perform */
      operation: TestScriptSetupActionOperation
    }),
    t.partial({
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension)
    })
  ])
);
