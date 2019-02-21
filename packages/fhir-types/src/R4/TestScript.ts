/**
 * TestScript Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Placeholder for evaluated elements
 */
export interface TestScriptVariable {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Descriptive name for this variable */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Default, hard-coded, or user-defined value for this variable */
  defaultValue?: t.TypeOf<primitives.R4.StringType>;
  /** Natural language description of the variable */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** The FHIRPath expression against the fixture body */
  expression?: t.TypeOf<primitives.R4.StringType>;
  /** HTTP header field name for source */
  headerField?: t.TypeOf<primitives.R4.StringType>;
  /** Hint help text for default value to enter */
  hint?: t.TypeOf<primitives.R4.StringType>;
  /** XPath or JSONPath against the fixture body */
  path?: t.TypeOf<primitives.R4.StringType>;
  /** Fixture Id of source expression or headerField within this variable */
  sourceId?: t.TypeOf<primitives.R4.IDType>;
}

export interface TestScriptVariableOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Descriptive name for this variable */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Default, hard-coded, or user-defined value for this variable */
  defaultValue?: t.OutputOf<primitives.R4.StringType>;
  /** Natural language description of the variable */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** The FHIRPath expression against the fixture body */
  expression?: t.OutputOf<primitives.R4.StringType>;
  /** HTTP header field name for source */
  headerField?: t.OutputOf<primitives.R4.StringType>;
  /** Hint help text for default value to enter */
  hint?: t.OutputOf<primitives.R4.StringType>;
  /** XPath or JSONPath against the fixture body */
  path?: t.OutputOf<primitives.R4.StringType>;
  /** Fixture Id of source expression or headerField within this variable */
  sourceId?: t.OutputOf<primitives.R4.IDType>;
}

export const TestScriptVariable: t.RecursiveType<
  t.Type<TestScriptVariable, TestScriptVariableOutputType>,
  TestScriptVariable,
  TestScriptVariableOutputType
> = t.recursion<TestScriptVariable, TestScriptVariableOutputType>(
  "TestScriptVariable",
  () =>
    t.intersection(
      [
        t.type({
          /** Descriptive name for this variable */
          name: primitives.R4.string
        }),
        t.partial({
          /** Default, hard-coded, or user-defined value for this variable */
          defaultValue: primitives.R4.string,
          /** Natural language description of the variable */
          description: primitives.R4.string,
          /** The FHIRPath expression against the fixture body */
          expression: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** HTTP header field name for source */
          headerField: primitives.R4.string,
          /** Hint help text for default value to enter */
          hint: primitives.R4.string,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** XPath or JSONPath against the fixture body */
          path: primitives.R4.string,
          /** Fixture Id of source expression or headerField within this variable */
          sourceId: primitives.R4.id
        })
      ],
      "TestScriptVariable"
    )
);

/**
 * A test operation or assert to perform
 */
export interface TestScriptTestAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The setup operation to perform */
  operation?: TestScriptSetupActionOperation;
  /** The setup assertion to perform */
  assert?: TestScriptSetupActionAssert;
}

export interface TestScriptTestActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The setup operation to perform */
  operation?: TestScriptSetupActionOperationOutputType;
  /** The setup assertion to perform */
  assert?: TestScriptSetupActionAssertOutputType;
}

export const TestScriptTestAction: t.RecursiveType<
  t.Type<TestScriptTestAction, TestScriptTestActionOutputType>,
  TestScriptTestAction,
  TestScriptTestActionOutputType
> = t.recursion<TestScriptTestAction, TestScriptTestActionOutputType>(
  "TestScriptTestAction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The setup assertion to perform */
          assert: TestScriptSetupActionAssert,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The setup operation to perform */
          operation: TestScriptSetupActionOperation
        })
      ],
      "TestScriptTestAction"
    )
);

/**
 * A test in this script
 */
export interface TestScriptTest {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Tracking/logging name of this test */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Tracking/reporting short description of the test */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** A test operation or assert to perform */
  action: TestScriptTestAction[];
}

export interface TestScriptTestOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Tracking/logging name of this test */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Tracking/reporting short description of the test */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** A test operation or assert to perform */
  action: TestScriptTestActionOutputType[];
}

export const TestScriptTest: t.RecursiveType<
  t.Type<TestScriptTest, TestScriptTestOutputType>,
  TestScriptTest,
  TestScriptTestOutputType
> = t.recursion<TestScriptTest, TestScriptTestOutputType>(
  "TestScriptTest",
  () =>
    t.intersection(
      [
        t.type({
          /** A test operation or assert to perform */
          action: t.array(TestScriptTestAction)
        }),
        t.partial({
          /** Tracking/reporting short description of the test */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Tracking/logging name of this test */
          name: primitives.R4.string
        })
      ],
      "TestScriptTest"
    )
);

/**
 * One or more teardown operations to perform
 */
export interface TestScriptTeardownAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The teardown operation to perform */
  operation: TestScriptSetupActionOperation;
}

export interface TestScriptTeardownActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The teardown operation to perform */
  operation: TestScriptSetupActionOperationOutputType;
}

export const TestScriptTeardownAction: t.RecursiveType<
  t.Type<TestScriptTeardownAction, TestScriptTeardownActionOutputType>,
  TestScriptTeardownAction,
  TestScriptTeardownActionOutputType
> = t.recursion<TestScriptTeardownAction, TestScriptTeardownActionOutputType>(
  "TestScriptTeardownAction",
  () =>
    t.intersection(
      [
        t.type({
          /** The teardown operation to perform */
          operation: TestScriptSetupActionOperation
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
      "TestScriptTeardownAction"
    )
);

/**
 * A series of required clean up steps
 */
export interface TestScriptTeardown {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** One or more teardown operations to perform */
  action: TestScriptTeardownAction[];
}

export interface TestScriptTeardownOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** One or more teardown operations to perform */
  action: TestScriptTeardownActionOutputType[];
}

export const TestScriptTeardown: t.RecursiveType<
  t.Type<TestScriptTeardown, TestScriptTeardownOutputType>,
  TestScriptTeardown,
  TestScriptTeardownOutputType
> = t.recursion<TestScriptTeardown, TestScriptTeardownOutputType>(
  "TestScriptTeardown",
  () =>
    t.intersection(
      [
        t.type({
          /** One or more teardown operations to perform */
          action: t.array(TestScriptTeardownAction)
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
      "TestScriptTeardown"
    )
);

/**
 * Each operation can have one or more header elements
 */
export interface TestScriptSetupActionOperationRequestHeader {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** HTTP header field name */
  field: t.TypeOf<primitives.R4.StringType>;
  /** HTTP headerfield value */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface TestScriptSetupActionOperationRequestHeaderOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** HTTP header field name */
  field: t.OutputOf<primitives.R4.StringType>;
  /** HTTP headerfield value */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const TestScriptSetupActionOperationRequestHeader: t.RecursiveType<
  t.Type<
    TestScriptSetupActionOperationRequestHeader,
    TestScriptSetupActionOperationRequestHeaderOutputType
  >,
  TestScriptSetupActionOperationRequestHeader,
  TestScriptSetupActionOperationRequestHeaderOutputType
> = t.recursion<
  TestScriptSetupActionOperationRequestHeader,
  TestScriptSetupActionOperationRequestHeaderOutputType
>("TestScriptSetupActionOperationRequestHeader", () =>
  t.intersection(
    [
      t.type({
        /** HTTP header field name */
        field: primitives.R4.string,
        /** HTTP headerfield value */
        value: primitives.R4.string
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
    "TestScriptSetupActionOperationRequestHeader"
  )
);

/**
 * The setup operation to perform
 */
export interface TestScriptSetupActionOperation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The operation code type that will be executed */
  type?: Coding;
  /** Resource type */
  resource?: t.TypeOf<primitives.R4.CodeType>;
  /** Tracking/logging operation label */
  label?: t.TypeOf<primitives.R4.StringType>;
  /** Tracking/reporting operation description */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Mime type to accept in the payload of the response, with charset etc. */
  accept?: t.TypeOf<primitives.R4.CodeType>;
  /** Mime type of the request payload contents, with charset etc. */
  contentType?: t.TypeOf<primitives.R4.CodeType>;
  /** Server responding to the request */
  destination?: t.TypeOf<primitives.R4.IntegerType>;
  /** Whether or not to send the request url in encoded format */
  encodeRequestUrl: t.TypeOf<primitives.R4.BooleanType>;
  /** delete | get | options | patch | post | put | head */
  method?: t.TypeOf<primitives.R4.CodeType>;
  /** Server initiating the request */
  origin?: t.TypeOf<primitives.R4.IntegerType>;
  /** Explicitly defined path parameters */
  params?: t.TypeOf<primitives.R4.StringType>;
  /** Each operation can have one or more header elements */
  requestHeader?: TestScriptSetupActionOperationRequestHeader[];
  /** Fixture Id of mapped request */
  requestId?: t.TypeOf<primitives.R4.IDType>;
  /** Fixture Id of mapped response */
  responseId?: t.TypeOf<primitives.R4.IDType>;
  /** Fixture Id of body for PUT and POST requests */
  sourceId?: t.TypeOf<primitives.R4.IDType>;
  /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests */
  targetId?: t.TypeOf<primitives.R4.IDType>;
  /** Request URL */
  url?: t.TypeOf<primitives.R4.StringType>;
}

export interface TestScriptSetupActionOperationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The operation code type that will be executed */
  type?: CodingOutputType;
  /** Resource type */
  resource?: t.OutputOf<primitives.R4.CodeType>;
  /** Tracking/logging operation label */
  label?: t.OutputOf<primitives.R4.StringType>;
  /** Tracking/reporting operation description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Mime type to accept in the payload of the response, with charset etc. */
  accept?: t.OutputOf<primitives.R4.CodeType>;
  /** Mime type of the request payload contents, with charset etc. */
  contentType?: t.OutputOf<primitives.R4.CodeType>;
  /** Server responding to the request */
  destination?: t.OutputOf<primitives.R4.IntegerType>;
  /** Whether or not to send the request url in encoded format */
  encodeRequestUrl: t.OutputOf<primitives.R4.BooleanType>;
  /** delete | get | options | patch | post | put | head */
  method?: t.OutputOf<primitives.R4.CodeType>;
  /** Server initiating the request */
  origin?: t.OutputOf<primitives.R4.IntegerType>;
  /** Explicitly defined path parameters */
  params?: t.OutputOf<primitives.R4.StringType>;
  /** Each operation can have one or more header elements */
  requestHeader?: TestScriptSetupActionOperationRequestHeaderOutputType[];
  /** Fixture Id of mapped request */
  requestId?: t.OutputOf<primitives.R4.IDType>;
  /** Fixture Id of mapped response */
  responseId?: t.OutputOf<primitives.R4.IDType>;
  /** Fixture Id of body for PUT and POST requests */
  sourceId?: t.OutputOf<primitives.R4.IDType>;
  /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests */
  targetId?: t.OutputOf<primitives.R4.IDType>;
  /** Request URL */
  url?: t.OutputOf<primitives.R4.StringType>;
}

export const TestScriptSetupActionOperation: t.RecursiveType<
  t.Type<
    TestScriptSetupActionOperation,
    TestScriptSetupActionOperationOutputType
  >,
  TestScriptSetupActionOperation,
  TestScriptSetupActionOperationOutputType
> = t.recursion<
  TestScriptSetupActionOperation,
  TestScriptSetupActionOperationOutputType
>("TestScriptSetupActionOperation", () =>
  t.intersection(
    [
      t.type({
        /** Whether or not to send the request url in encoded format */
        encodeRequestUrl: primitives.R4.boolean
      }),
      t.partial({
        /** Mime type to accept in the payload of the response, with charset etc. */
        accept: primitives.R4.code,
        /** Mime type of the request payload contents, with charset etc. */
        contentType: primitives.R4.code,
        /** Tracking/reporting operation description */
        description: primitives.R4.string,
        /** Server responding to the request */
        destination: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Tracking/logging operation label */
        label: primitives.R4.string,
        /** delete | get | options | patch | post | put | head */
        method: primitives.R4.code,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Server initiating the request */
        origin: primitives.R4.integer,
        /** Explicitly defined path parameters */
        params: primitives.R4.string,
        /** Each operation can have one or more header elements */
        requestHeader: t.array(TestScriptSetupActionOperationRequestHeader),
        /** Fixture Id of mapped request */
        requestId: primitives.R4.id,
        /** Resource type */
        resource: primitives.R4.code,
        /** Fixture Id of mapped response */
        responseId: primitives.R4.id,
        /** Fixture Id of body for PUT and POST requests */
        sourceId: primitives.R4.id,
        /** Id of fixture used for extracting the [id],  [type], and [vid] for GET requests */
        targetId: primitives.R4.id,
        /** The operation code type that will be executed */
        type: Coding,
        /** Request URL */
        url: primitives.R4.string
      })
    ],
    "TestScriptSetupActionOperation"
  )
);

/**
 * The assertion to perform
 */
export interface TestScriptSetupActionAssert {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Tracking/logging assertion label */
  label?: t.TypeOf<primitives.R4.StringType>;
  /** Tracking/reporting assertion description */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** response | request */
  direction?: t.TypeOf<primitives.R4.CodeType>;
  /** Id of the source fixture to be evaluated */
  compareToSourceId?: t.TypeOf<primitives.R4.StringType>;
  /** The FHIRPath expression to evaluate against the source fixture */
  compareToSourceExpression?: t.TypeOf<primitives.R4.StringType>;
  /** XPath or JSONPath expression to evaluate against the source fixture */
  compareToSourcePath?: t.TypeOf<primitives.R4.StringType>;
  /** Mime type to compare against the 'Content-Type' header */
  contentType?: t.TypeOf<primitives.R4.CodeType>;
  /** The FHIRPath expression to be evaluated */
  expression?: t.TypeOf<primitives.R4.StringType>;
  /** HTTP header field name */
  headerField?: t.TypeOf<primitives.R4.StringType>;
  /** Fixture Id of minimum content resource */
  minimumId?: t.TypeOf<primitives.R4.StringType>;
  /** Perform validation on navigation links? */
  navigationLinks?: t.TypeOf<primitives.R4.BooleanType>;
  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval */
  operator?: t.TypeOf<primitives.R4.CodeType>;
  /** XPath or JSONPath expression */
  path?: t.TypeOf<primitives.R4.StringType>;
  /** delete | get | options | patch | post | put | head */
  requestMethod?: t.TypeOf<primitives.R4.CodeType>;
  /** Request URL comparison value */
  requestURL?: t.TypeOf<primitives.R4.StringType>;
  /** Resource type */
  resource?: t.TypeOf<primitives.R4.CodeType>;
  /** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable */
  response?: t.TypeOf<primitives.R4.CodeType>;
  /** HTTP response code to test */
  responseCode?: t.TypeOf<primitives.R4.StringType>;
  /** Fixture Id of source expression or headerField */
  sourceId?: t.TypeOf<primitives.R4.IDType>;
  /** Profile Id of validation profile reference */
  validateProfileId?: t.TypeOf<primitives.R4.IDType>;
  /** The value to compare to */
  value?: t.TypeOf<primitives.R4.StringType>;
  /** Will this assert produce a warning only on error? */
  warningOnly: t.TypeOf<primitives.R4.BooleanType>;
}

export interface TestScriptSetupActionAssertOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Tracking/logging assertion label */
  label?: t.OutputOf<primitives.R4.StringType>;
  /** Tracking/reporting assertion description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** response | request */
  direction?: t.OutputOf<primitives.R4.CodeType>;
  /** Id of the source fixture to be evaluated */
  compareToSourceId?: t.OutputOf<primitives.R4.StringType>;
  /** The FHIRPath expression to evaluate against the source fixture */
  compareToSourceExpression?: t.OutputOf<primitives.R4.StringType>;
  /** XPath or JSONPath expression to evaluate against the source fixture */
  compareToSourcePath?: t.OutputOf<primitives.R4.StringType>;
  /** Mime type to compare against the 'Content-Type' header */
  contentType?: t.OutputOf<primitives.R4.CodeType>;
  /** The FHIRPath expression to be evaluated */
  expression?: t.OutputOf<primitives.R4.StringType>;
  /** HTTP header field name */
  headerField?: t.OutputOf<primitives.R4.StringType>;
  /** Fixture Id of minimum content resource */
  minimumId?: t.OutputOf<primitives.R4.StringType>;
  /** Perform validation on navigation links? */
  navigationLinks?: t.OutputOf<primitives.R4.BooleanType>;
  /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval */
  operator?: t.OutputOf<primitives.R4.CodeType>;
  /** XPath or JSONPath expression */
  path?: t.OutputOf<primitives.R4.StringType>;
  /** delete | get | options | patch | post | put | head */
  requestMethod?: t.OutputOf<primitives.R4.CodeType>;
  /** Request URL comparison value */
  requestURL?: t.OutputOf<primitives.R4.StringType>;
  /** Resource type */
  resource?: t.OutputOf<primitives.R4.CodeType>;
  /** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable */
  response?: t.OutputOf<primitives.R4.CodeType>;
  /** HTTP response code to test */
  responseCode?: t.OutputOf<primitives.R4.StringType>;
  /** Fixture Id of source expression or headerField */
  sourceId?: t.OutputOf<primitives.R4.IDType>;
  /** Profile Id of validation profile reference */
  validateProfileId?: t.OutputOf<primitives.R4.IDType>;
  /** The value to compare to */
  value?: t.OutputOf<primitives.R4.StringType>;
  /** Will this assert produce a warning only on error? */
  warningOnly: t.OutputOf<primitives.R4.BooleanType>;
}

export const TestScriptSetupActionAssert: t.RecursiveType<
  t.Type<TestScriptSetupActionAssert, TestScriptSetupActionAssertOutputType>,
  TestScriptSetupActionAssert,
  TestScriptSetupActionAssertOutputType
> = t.recursion<
  TestScriptSetupActionAssert,
  TestScriptSetupActionAssertOutputType
>("TestScriptSetupActionAssert", () =>
  t.intersection(
    [
      t.type({
        /** Will this assert produce a warning only on error? */
        warningOnly: primitives.R4.boolean
      }),
      t.partial({
        /** The FHIRPath expression to evaluate against the source fixture */
        compareToSourceExpression: primitives.R4.string,
        /** Id of the source fixture to be evaluated */
        compareToSourceId: primitives.R4.string,
        /** XPath or JSONPath expression to evaluate against the source fixture */
        compareToSourcePath: primitives.R4.string,
        /** Mime type to compare against the 'Content-Type' header */
        contentType: primitives.R4.code,
        /** Tracking/reporting assertion description */
        description: primitives.R4.string,
        /** response | request */
        direction: primitives.R4.code,
        /** The FHIRPath expression to be evaluated */
        expression: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** HTTP header field name */
        headerField: primitives.R4.string,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Tracking/logging assertion label */
        label: primitives.R4.string,
        /** Fixture Id of minimum content resource */
        minimumId: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Perform validation on navigation links? */
        navigationLinks: primitives.R4.boolean,
        /** equals | notEquals | in | notIn | greaterThan | lessThan | empty | notEmpty | contains | notContains | eval */
        operator: primitives.R4.code,
        /** XPath or JSONPath expression */
        path: primitives.R4.string,
        /** delete | get | options | patch | post | put | head */
        requestMethod: primitives.R4.code,
        /** Request URL comparison value */
        requestURL: primitives.R4.string,
        /** Resource type */
        resource: primitives.R4.code,
        /** okay | created | noContent | notModified | bad | forbidden | notFound | methodNotAllowed | conflict | gone | preconditionFailed | unprocessable */
        response: primitives.R4.code,
        /** HTTP response code to test */
        responseCode: primitives.R4.string,
        /** Fixture Id of source expression or headerField */
        sourceId: primitives.R4.id,
        /** Profile Id of validation profile reference */
        validateProfileId: primitives.R4.id,
        /** The value to compare to */
        value: primitives.R4.string
      })
    ],
    "TestScriptSetupActionAssert"
  )
);

/**
 * A setup operation or assert to perform
 */
export interface TestScriptSetupAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The setup operation to perform */
  operation?: TestScriptSetupActionOperation;
  /** The assertion to perform */
  assert?: TestScriptSetupActionAssert;
}

export interface TestScriptSetupActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The setup operation to perform */
  operation?: TestScriptSetupActionOperationOutputType;
  /** The assertion to perform */
  assert?: TestScriptSetupActionAssertOutputType;
}

export const TestScriptSetupAction: t.RecursiveType<
  t.Type<TestScriptSetupAction, TestScriptSetupActionOutputType>,
  TestScriptSetupAction,
  TestScriptSetupActionOutputType
> = t.recursion<TestScriptSetupAction, TestScriptSetupActionOutputType>(
  "TestScriptSetupAction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The assertion to perform */
          assert: TestScriptSetupActionAssert,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The setup operation to perform */
          operation: TestScriptSetupActionOperation
        })
      ],
      "TestScriptSetupAction"
    )
);

/**
 * A series of required setup operations before tests are executed
 */
export interface TestScriptSetup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A setup operation or assert to perform */
  action: TestScriptSetupAction[];
}

export interface TestScriptSetupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A setup operation or assert to perform */
  action: TestScriptSetupActionOutputType[];
}

export const TestScriptSetup: t.RecursiveType<
  t.Type<TestScriptSetup, TestScriptSetupOutputType>,
  TestScriptSetup,
  TestScriptSetupOutputType
> = t.recursion<TestScriptSetup, TestScriptSetupOutputType>(
  "TestScriptSetup",
  () =>
    t.intersection(
      [
        t.type({
          /** A setup operation or assert to perform */
          action: t.array(TestScriptSetupAction)
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
      "TestScriptSetup"
    )
);

/**
 * An abstract server representing a client or sender in a message exchange
 */
export interface TestScriptOrigin {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The index of the abstract origin server starting at 1 */
  index: t.TypeOf<primitives.R4.IntegerType>;
  /** FHIR-Client | FHIR-SDC-FormFiller */
  profile: Coding;
}

export interface TestScriptOriginOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The index of the abstract origin server starting at 1 */
  index: t.OutputOf<primitives.R4.IntegerType>;
  /** FHIR-Client | FHIR-SDC-FormFiller */
  profile: CodingOutputType;
}

export const TestScriptOrigin: t.RecursiveType<
  t.Type<TestScriptOrigin, TestScriptOriginOutputType>,
  TestScriptOrigin,
  TestScriptOriginOutputType
> = t.recursion<TestScriptOrigin, TestScriptOriginOutputType>(
  "TestScriptOrigin",
  () =>
    t.intersection(
      [
        t.type({
          /** The index of the abstract origin server starting at 1 */
          index: primitives.R4.integer,
          /** FHIR-Client | FHIR-SDC-FormFiller */
          profile: Coding
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
      "TestScriptOrigin"
    )
);

/**
 * Links to the FHIR specification
 */
export interface TestScriptMetadataLink {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** URL to the specification */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Short description */
  description?: t.TypeOf<primitives.R4.StringType>;
}

export interface TestScriptMetadataLinkOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** URL to the specification */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Short description */
  description?: t.OutputOf<primitives.R4.StringType>;
}

export const TestScriptMetadataLink: t.RecursiveType<
  t.Type<TestScriptMetadataLink, TestScriptMetadataLinkOutputType>,
  TestScriptMetadataLink,
  TestScriptMetadataLinkOutputType
> = t.recursion<TestScriptMetadataLink, TestScriptMetadataLinkOutputType>(
  "TestScriptMetadataLink",
  () =>
    t.intersection(
      [
        t.type({
          /** URL to the specification */
          url: primitives.R4.uri
        }),
        t.partial({
          /** Short description */
          description: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "TestScriptMetadataLink"
    )
);

/**
 * Capabilities  that are assumed to function correctly on the FHIR server being tested
 */
export interface TestScriptMetadataCapability {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Are the capabilities required? */
  required: t.TypeOf<primitives.R4.BooleanType>;
  /** Are the capabilities validated? */
  validated: t.TypeOf<primitives.R4.BooleanType>;
  /** The expected capabilities of the server */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Which origin server these requirements apply to */
  origin?: t.TypeOf<primitives.R4.IntegerType>[];
  /** Which server these requirements apply to */
  destination?: t.TypeOf<primitives.R4.IntegerType>;
  /** Links to the FHIR specification */
  link?: t.TypeOf<primitives.R4.URIType>[];
  /** Required Capability Statement */
  capabilities: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface TestScriptMetadataCapabilityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Are the capabilities required? */
  required: t.OutputOf<primitives.R4.BooleanType>;
  /** Are the capabilities validated? */
  validated: t.OutputOf<primitives.R4.BooleanType>;
  /** The expected capabilities of the server */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Which origin server these requirements apply to */
  origin?: t.OutputOf<primitives.R4.IntegerType>[];
  /** Which server these requirements apply to */
  destination?: t.OutputOf<primitives.R4.IntegerType>;
  /** Links to the FHIR specification */
  link?: t.OutputOf<primitives.R4.URIType>[];
  /** Required Capability Statement */
  capabilities: t.OutputOf<primitives.R4.CanonicalType>;
}

export const TestScriptMetadataCapability: t.RecursiveType<
  t.Type<TestScriptMetadataCapability, TestScriptMetadataCapabilityOutputType>,
  TestScriptMetadataCapability,
  TestScriptMetadataCapabilityOutputType
> = t.recursion<
  TestScriptMetadataCapability,
  TestScriptMetadataCapabilityOutputType
>("TestScriptMetadataCapability", () =>
  t.intersection(
    [
      t.type({
        /** Required Capability Statement */
        capabilities: primitives.R4.canonical,
        /** Are the capabilities required? */
        required: primitives.R4.boolean,
        /** Are the capabilities validated? */
        validated: primitives.R4.boolean
      }),
      t.partial({
        /** The expected capabilities of the server */
        description: primitives.R4.string,
        /** Which server these requirements apply to */
        destination: primitives.R4.integer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Links to the FHIR specification */
        link: t.array(primitives.R4.uri),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Which origin server these requirements apply to */
        origin: t.array(primitives.R4.integer)
      })
    ],
    "TestScriptMetadataCapability"
  )
);

/**
 * Required capability that is assumed to function correctly on the FHIR server being tested
 */
export interface TestScriptMetadata {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Links to the FHIR specification */
  link?: TestScriptMetadataLink[];
  /** Capabilities  that are assumed to function correctly on the FHIR server being tested */
  capability: TestScriptMetadataCapability[];
}

export interface TestScriptMetadataOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Links to the FHIR specification */
  link?: TestScriptMetadataLinkOutputType[];
  /** Capabilities  that are assumed to function correctly on the FHIR server being tested */
  capability: TestScriptMetadataCapabilityOutputType[];
}

export const TestScriptMetadata: t.RecursiveType<
  t.Type<TestScriptMetadata, TestScriptMetadataOutputType>,
  TestScriptMetadata,
  TestScriptMetadataOutputType
> = t.recursion<TestScriptMetadata, TestScriptMetadataOutputType>(
  "TestScriptMetadata",
  () =>
    t.intersection(
      [
        t.type({
          /** Capabilities  that are assumed to function correctly on the FHIR server being tested */
          capability: t.array(TestScriptMetadataCapability)
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Links to the FHIR specification */
          link: t.array(TestScriptMetadataLink),
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "TestScriptMetadata"
    )
);

/**
 * Fixture in the test script - by reference (uri)
 */
export interface TestScriptFixture {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Whether or not to implicitly create the fixture during setup */
  autocreate: t.TypeOf<primitives.R4.BooleanType>;
  /** Whether or not to implicitly delete the fixture during teardown */
  autodelete: t.TypeOf<primitives.R4.BooleanType>;
  /** Reference of the resource */
  resource?: Reference;
}

export interface TestScriptFixtureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Whether or not to implicitly create the fixture during setup */
  autocreate: t.OutputOf<primitives.R4.BooleanType>;
  /** Whether or not to implicitly delete the fixture during teardown */
  autodelete: t.OutputOf<primitives.R4.BooleanType>;
  /** Reference of the resource */
  resource?: ReferenceOutputType;
}

export const TestScriptFixture: t.RecursiveType<
  t.Type<TestScriptFixture, TestScriptFixtureOutputType>,
  TestScriptFixture,
  TestScriptFixtureOutputType
> = t.recursion<TestScriptFixture, TestScriptFixtureOutputType>(
  "TestScriptFixture",
  () =>
    t.intersection(
      [
        t.type({
          /** Whether or not to implicitly create the fixture during setup */
          autocreate: primitives.R4.boolean,
          /** Whether or not to implicitly delete the fixture during teardown */
          autodelete: primitives.R4.boolean
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Reference of the resource */
          resource: Reference
        })
      ],
      "TestScriptFixture"
    )
);

/**
 * An abstract server representing a destination or receiver in a message exchange
 */
export interface TestScriptDestination {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The index of the abstract destination server starting at 1 */
  index: t.TypeOf<primitives.R4.IntegerType>;
  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor */
  profile: Coding;
}

export interface TestScriptDestinationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The index of the abstract destination server starting at 1 */
  index: t.OutputOf<primitives.R4.IntegerType>;
  /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor */
  profile: CodingOutputType;
}

export const TestScriptDestination: t.RecursiveType<
  t.Type<TestScriptDestination, TestScriptDestinationOutputType>,
  TestScriptDestination,
  TestScriptDestinationOutputType
> = t.recursion<TestScriptDestination, TestScriptDestinationOutputType>(
  "TestScriptDestination",
  () =>
    t.intersection(
      [
        t.type({
          /** The index of the abstract destination server starting at 1 */
          index: primitives.R4.integer,
          /** FHIR-Server | FHIR-SDC-FormManager | FHIR-SDC-FormReceiver | FHIR-SDC-FormProcessor */
          profile: Coding
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
      "TestScriptDestination"
    )
);

/**
 * Describes a set of tests
 */
export interface TestScript {
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
  /** Canonical identifier for this test script, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the test script */
  identifier?: Identifier;
  /** Business version of the test script */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this test script (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Name for this test script (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
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
  /** Natural language description of the test script */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for test script (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this test script is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** An abstract server representing a client or sender in a message exchange */
  origin?: TestScriptOrigin[];
  /** An abstract server representing a destination or receiver in a message exchange */
  destination?: TestScriptDestination[];
  /** Required capability that is assumed to function correctly on the FHIR server being tested */
  metadata?: TestScriptMetadata;
  /** Fixture in the test script - by reference (uri) */
  fixture?: TestScriptFixture[];
  /** Reference of the validation profile */
  profile?: Reference[];
  /** Placeholder for evaluated elements */
  variable?: TestScriptVariable[];
  /** A series of required setup operations before tests are executed */
  setup?: TestScriptSetup;
  /** A test in this script */
  test?: TestScriptTest[];
  /** A series of required clean up steps */
  teardown?: TestScriptTeardown;
}

export interface TestScriptOutputType {
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
  /** Canonical identifier for this test script, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the test script */
  identifier?: IdentifierOutputType;
  /** Business version of the test script */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this test script (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Name for this test script (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
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
  /** Natural language description of the test script */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for test script (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this test script is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** An abstract server representing a client or sender in a message exchange */
  origin?: TestScriptOriginOutputType[];
  /** An abstract server representing a destination or receiver in a message exchange */
  destination?: TestScriptDestinationOutputType[];
  /** Required capability that is assumed to function correctly on the FHIR server being tested */
  metadata?: TestScriptMetadataOutputType;
  /** Fixture in the test script - by reference (uri) */
  fixture?: TestScriptFixtureOutputType[];
  /** Reference of the validation profile */
  profile?: ReferenceOutputType[];
  /** Placeholder for evaluated elements */
  variable?: TestScriptVariableOutputType[];
  /** A series of required setup operations before tests are executed */
  setup?: TestScriptSetupOutputType;
  /** A test in this script */
  test?: TestScriptTestOutputType[];
  /** A series of required clean up steps */
  teardown?: TestScriptTeardownOutputType;
}

export const TestScript: t.RecursiveType<
  t.Type<TestScript, TestScriptOutputType>,
  TestScript,
  TestScriptOutputType
> = t.recursion<TestScript, TestScriptOutputType>("TestScript", () =>
  t.intersection(
    [
      t.type({
        /** Name for this test script (computer friendly) */
        name: primitives.R4.string,
        /** draft | active | retired | unknown */
        status: primitives.R4.code,
        /** Canonical identifier for this test script, represented as a URI (globally unique) */
        url: primitives.R4.uri
      }),
      t.partial({
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Natural language description of the test script */
        description: primitives.R4.markdown,
        /** An abstract server representing a destination or receiver in a message exchange */
        destination: t.array(TestScriptDestination),
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Fixture in the test script - by reference (uri) */
        fixture: t.array(TestScriptFixture),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the test script */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for test script (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Required capability that is assumed to function correctly on the FHIR server being tested */
        metadata: TestScriptMetadata,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** An abstract server representing a client or sender in a message exchange */
        origin: t.array(TestScriptOrigin),
        /** Reference of the validation profile */
        profile: t.array(Reference),
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this test script is defined */
        purpose: primitives.R4.markdown,
        /** A series of required setup operations before tests are executed */
        setup: TestScriptSetup,
        /** A series of required clean up steps */
        teardown: TestScriptTeardown,
        /** A test in this script */
        test: t.array(TestScriptTest),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this test script (human friendly) */
        title: primitives.R4.string,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Placeholder for evaluated elements */
        variable: t.array(TestScriptVariable),
        /** Business version of the test script */
        version: primitives.R4.string
      })
    ],
    "TestScript"
  )
);
