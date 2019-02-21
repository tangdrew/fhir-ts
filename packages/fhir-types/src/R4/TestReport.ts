/**
 * TestReport Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A test operation or assert that was performed
 */
export interface TestReportTestAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The operation performed */
  operation?: TestReportSetupActionOperation;
  /** The assertion performed */
  assert?: TestReportSetupActionAssert;
}

export interface TestReportTestActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The operation performed */
  operation?: TestReportSetupActionOperationOutputType;
  /** The assertion performed */
  assert?: TestReportSetupActionAssertOutputType;
}

export const TestReportTestAction: t.RecursiveType<
  t.Type<TestReportTestAction, TestReportTestActionOutputType>,
  TestReportTestAction,
  TestReportTestActionOutputType
> = t.recursion<TestReportTestAction, TestReportTestActionOutputType>(
  "TestReportTestAction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The assertion performed */
          assert: TestReportSetupActionAssert,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The operation performed */
          operation: TestReportSetupActionOperation
        })
      ],
      "TestReportTestAction"
    )
);

/**
 * A test executed from the test script
 */
export interface TestReportTest {
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
  /** A test operation or assert that was performed */
  action: TestReportTestAction[];
}

export interface TestReportTestOutputType {
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
  /** A test operation or assert that was performed */
  action: TestReportTestActionOutputType[];
}

export const TestReportTest: t.RecursiveType<
  t.Type<TestReportTest, TestReportTestOutputType>,
  TestReportTest,
  TestReportTestOutputType
> = t.recursion<TestReportTest, TestReportTestOutputType>(
  "TestReportTest",
  () =>
    t.intersection(
      [
        t.type({
          /** A test operation or assert that was performed */
          action: t.array(TestReportTestAction)
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
      "TestReportTest"
    )
);

/**
 * One or more teardown operations performed
 */
export interface TestReportTeardownAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The teardown operation performed */
  operation: TestReportSetupActionOperation;
}

export interface TestReportTeardownActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The teardown operation performed */
  operation: TestReportSetupActionOperationOutputType;
}

export const TestReportTeardownAction: t.RecursiveType<
  t.Type<TestReportTeardownAction, TestReportTeardownActionOutputType>,
  TestReportTeardownAction,
  TestReportTeardownActionOutputType
> = t.recursion<TestReportTeardownAction, TestReportTeardownActionOutputType>(
  "TestReportTeardownAction",
  () =>
    t.intersection(
      [
        t.type({
          /** The teardown operation performed */
          operation: TestReportSetupActionOperation
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
      "TestReportTeardownAction"
    )
);

/**
 * The results of running the series of required clean up steps
 */
export interface TestReportTeardown {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** One or more teardown operations performed */
  action: TestReportTeardownAction[];
}

export interface TestReportTeardownOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** One or more teardown operations performed */
  action: TestReportTeardownActionOutputType[];
}

export const TestReportTeardown: t.RecursiveType<
  t.Type<TestReportTeardown, TestReportTeardownOutputType>,
  TestReportTeardown,
  TestReportTeardownOutputType
> = t.recursion<TestReportTeardown, TestReportTeardownOutputType>(
  "TestReportTeardown",
  () =>
    t.intersection(
      [
        t.type({
          /** One or more teardown operations performed */
          action: t.array(TestReportTeardownAction)
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
      "TestReportTeardown"
    )
);

/**
 * The operation to perform
 */
export interface TestReportSetupActionOperation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** pass | skip | fail | warning | error */
  result: t.TypeOf<primitives.R4.CodeType>;
  /** A message associated with the result */
  message?: t.TypeOf<primitives.R4.MarkdownType>;
  /** A link to further details on the result */
  detail?: t.TypeOf<primitives.R4.URIType>;
}

export interface TestReportSetupActionOperationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** pass | skip | fail | warning | error */
  result: t.OutputOf<primitives.R4.CodeType>;
  /** A message associated with the result */
  message?: t.OutputOf<primitives.R4.MarkdownType>;
  /** A link to further details on the result */
  detail?: t.OutputOf<primitives.R4.URIType>;
}

export const TestReportSetupActionOperation: t.RecursiveType<
  t.Type<
    TestReportSetupActionOperation,
    TestReportSetupActionOperationOutputType
  >,
  TestReportSetupActionOperation,
  TestReportSetupActionOperationOutputType
> = t.recursion<
  TestReportSetupActionOperation,
  TestReportSetupActionOperationOutputType
>("TestReportSetupActionOperation", () =>
  t.intersection(
    [
      t.type({
        /** pass | skip | fail | warning | error */
        result: primitives.R4.code
      }),
      t.partial({
        /** A link to further details on the result */
        detail: primitives.R4.uri,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** A message associated with the result */
        message: primitives.R4.markdown,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "TestReportSetupActionOperation"
  )
);

/**
 * The assertion to perform
 */
export interface TestReportSetupActionAssert {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** pass | skip | fail | warning | error */
  result: t.TypeOf<primitives.R4.CodeType>;
  /** A message associated with the result */
  message?: t.TypeOf<primitives.R4.MarkdownType>;
  /** A link to further details on the result */
  detail?: t.TypeOf<primitives.R4.StringType>;
}

export interface TestReportSetupActionAssertOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** pass | skip | fail | warning | error */
  result: t.OutputOf<primitives.R4.CodeType>;
  /** A message associated with the result */
  message?: t.OutputOf<primitives.R4.MarkdownType>;
  /** A link to further details on the result */
  detail?: t.OutputOf<primitives.R4.StringType>;
}

export const TestReportSetupActionAssert: t.RecursiveType<
  t.Type<TestReportSetupActionAssert, TestReportSetupActionAssertOutputType>,
  TestReportSetupActionAssert,
  TestReportSetupActionAssertOutputType
> = t.recursion<
  TestReportSetupActionAssert,
  TestReportSetupActionAssertOutputType
>("TestReportSetupActionAssert", () =>
  t.intersection(
    [
      t.type({
        /** pass | skip | fail | warning | error */
        result: primitives.R4.code
      }),
      t.partial({
        /** A link to further details on the result */
        detail: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** A message associated with the result */
        message: primitives.R4.markdown,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "TestReportSetupActionAssert"
  )
);

/**
 * A setup operation or assert that was executed
 */
export interface TestReportSetupAction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The operation to perform */
  operation?: TestReportSetupActionOperation;
  /** The assertion to perform */
  assert?: TestReportSetupActionAssert;
}

export interface TestReportSetupActionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The operation to perform */
  operation?: TestReportSetupActionOperationOutputType;
  /** The assertion to perform */
  assert?: TestReportSetupActionAssertOutputType;
}

export const TestReportSetupAction: t.RecursiveType<
  t.Type<TestReportSetupAction, TestReportSetupActionOutputType>,
  TestReportSetupAction,
  TestReportSetupActionOutputType
> = t.recursion<TestReportSetupAction, TestReportSetupActionOutputType>(
  "TestReportSetupAction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The assertion to perform */
          assert: TestReportSetupActionAssert,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The operation to perform */
          operation: TestReportSetupActionOperation
        })
      ],
      "TestReportSetupAction"
    )
);

/**
 * The results of the series of required setup operations before the tests were executed
 */
export interface TestReportSetup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A setup operation or assert that was executed */
  action: TestReportSetupAction[];
}

export interface TestReportSetupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A setup operation or assert that was executed */
  action: TestReportSetupActionOutputType[];
}

export const TestReportSetup: t.RecursiveType<
  t.Type<TestReportSetup, TestReportSetupOutputType>,
  TestReportSetup,
  TestReportSetupOutputType
> = t.recursion<TestReportSetup, TestReportSetupOutputType>(
  "TestReportSetup",
  () =>
    t.intersection(
      [
        t.type({
          /** A setup operation or assert that was executed */
          action: t.array(TestReportSetupAction)
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
      "TestReportSetup"
    )
);

/**
 * A participant in the test execution, either the execution engine, a client, or a server
 */
export interface TestReportParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** test-engine | client | server */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** The uri of the participant. An absolute URL is preferred */
  uri: t.TypeOf<primitives.R4.URIType>;
  /** The display name of the participant */
  display?: t.TypeOf<primitives.R4.StringType>;
}

export interface TestReportParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** test-engine | client | server */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** The uri of the participant. An absolute URL is preferred */
  uri: t.OutputOf<primitives.R4.URIType>;
  /** The display name of the participant */
  display?: t.OutputOf<primitives.R4.StringType>;
}

export const TestReportParticipant: t.RecursiveType<
  t.Type<TestReportParticipant, TestReportParticipantOutputType>,
  TestReportParticipant,
  TestReportParticipantOutputType
> = t.recursion<TestReportParticipant, TestReportParticipantOutputType>(
  "TestReportParticipant",
  () =>
    t.intersection(
      [
        t.type({
          /** test-engine | client | server */
          type: primitives.R4.code,
          /** The uri of the participant. An absolute URL is preferred */
          uri: primitives.R4.uri
        }),
        t.partial({
          /** The display name of the participant */
          display: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "TestReportParticipant"
    )
);

/**
 * Describes the results of a TestScript execution
 */
export interface TestReport {
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
  /** External identifier */
  identifier?: Identifier;
  /** Informal name of the executed TestScript */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** completed | in-progress | waiting | stopped | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reference to the  version-specific TestScript that was executed to produce this TestReport */
  testScript: Reference;
  /** pass | fail | pending */
  result: t.TypeOf<primitives.R4.CodeType>;
  /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
  score?: t.TypeOf<primitives.R4.DecimalType>;
  /** Name of the tester producing this report (Organization or individual) */
  tester?: t.TypeOf<primitives.R4.StringType>;
  /** When the TestScript was executed and this TestReport was generated */
  issued?: t.TypeOf<primitives.R4.DateTimeType>;
  /** A participant in the test execution, either the execution engine, a client, or a server */
  participant?: TestReportParticipant[];
  /** The results of the series of required setup operations before the tests were executed */
  setup?: TestReportSetup;
  /** A test executed from the test script */
  test?: TestReportTest[];
  /** The results of running the series of required clean up steps */
  teardown?: TestReportTeardown;
}

export interface TestReportOutputType {
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
  /** External identifier */
  identifier?: IdentifierOutputType;
  /** Informal name of the executed TestScript */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** completed | in-progress | waiting | stopped | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reference to the  version-specific TestScript that was executed to produce this TestReport */
  testScript: ReferenceOutputType;
  /** pass | fail | pending */
  result: t.OutputOf<primitives.R4.CodeType>;
  /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
  score?: t.OutputOf<primitives.R4.DecimalType>;
  /** Name of the tester producing this report (Organization or individual) */
  tester?: t.OutputOf<primitives.R4.StringType>;
  /** When the TestScript was executed and this TestReport was generated */
  issued?: t.OutputOf<primitives.R4.DateTimeType>;
  /** A participant in the test execution, either the execution engine, a client, or a server */
  participant?: TestReportParticipantOutputType[];
  /** The results of the series of required setup operations before the tests were executed */
  setup?: TestReportSetupOutputType;
  /** A test executed from the test script */
  test?: TestReportTestOutputType[];
  /** The results of running the series of required clean up steps */
  teardown?: TestReportTeardownOutputType;
}

export const TestReport: t.RecursiveType<
  t.Type<TestReport, TestReportOutputType>,
  TestReport,
  TestReportOutputType
> = t.recursion<TestReport, TestReportOutputType>("TestReport", () =>
  t.intersection(
    [
      t.type({
        /** pass | fail | pending */
        result: primitives.R4.code,
        /** completed | in-progress | waiting | stopped | entered-in-error */
        status: primitives.R4.code,
        /** Reference to the  version-specific TestScript that was executed to produce this TestReport */
        testScript: Reference
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External identifier */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** When the TestScript was executed and this TestReport was generated */
        issued: primitives.R4.dateTime,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Informal name of the executed TestScript */
        name: primitives.R4.string,
        /** A participant in the test execution, either the execution engine, a client, or a server */
        participant: t.array(TestReportParticipant),
        /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
        score: primitives.R4.decimal,
        /** The results of the series of required setup operations before the tests were executed */
        setup: TestReportSetup,
        /** The results of running the series of required clean up steps */
        teardown: TestReportTeardown,
        /** A test executed from the test script */
        test: t.array(TestReportTest),
        /** Name of the tester producing this report (Organization or individual) */
        tester: primitives.R4.string,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "TestReport"
  )
);
