/**
 * TestReport Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Describes the results of a TestScript execution
 */
export interface TestReport {
  /** The type of resource */
  resourceType?: "TestReport";
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
  /** External identifier */
  identifier?: Identifier;
  /** Informal name of the executed TestScript */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** completed | in-progress | waiting | stopped | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reference to the  version-specific TestScript that was executed to produce this TestReport */
  testScript: Reference;
  /** pass | fail | pending */
  result: primitives.R4.code;
  /** Extension of result element */
  _result?: Element;
  /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
  score?: primitives.R4.decimal;
  /** Extension of score element */
  _score?: Element;
  /** Name of the tester producing this report (Organization or individual) */
  tester?: string;
  /** Extension of tester element */
  _tester?: Element;
  /** When the TestScript was executed and this TestReport was generated */
  issued?: primitives.R4.dateTime;
  /** Extension of issued element */
  _issued?: Element;
}
/**
 * Describes the results of a TestScript execution
 */
export const TestReport: t.Type<TestReport> = t.recursion<TestReport>(
  "TestReport",
  () =>
    t.intersection([
      t.type({
        /** completed | in-progress | waiting | stopped | entered-in-error */
        status: primitives.R4.code,
        /** Reference to the  version-specific TestScript that was executed to produce this TestReport */
        testScript: Reference,
        /** pass | fail | pending */
        result: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("TestReport"),
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
        /** External identifier */
        identifier: Identifier,
        /** Informal name of the executed TestScript */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Extension of status element */
        _status: Element,
        /** Extension of result element */
        _result: Element,
        /** The final score (percentage of tests passed) resulting from the execution of the TestScript */
        score: primitives.R4.decimal,
        /** Extension of score element */
        _score: Element,
        /** Name of the tester producing this report (Organization or individual) */
        tester: primitives.R4.string,
        /** Extension of tester element */
        _tester: Element,
        /** When the TestScript was executed and this TestReport was generated */
        issued: primitives.R4.dateTime,
        /** Extension of issued element */
        _issued: Element
      })
    ])
);

/**
 * A participant in the test execution, either the execution engine, a client, or a server
 */
export interface TestReportParticipant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** test-engine | client | server */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** The uri of the participant. An absolute URL is preferred */
  uri: primitives.R4.uri;
  /** Extension of uri element */
  _uri?: Element;
  /** The display name of the participant */
  display?: string;
  /** Extension of display element */
  _display?: Element;
}
/**
 * A participant in the test execution, either the execution engine, a client, or a server
 */
export const TestReportParticipant: t.Type<TestReportParticipant> = t.recursion<
  TestReportParticipant
>("TestReportParticipant", () =>
  t.intersection([
    t.type({
      /** test-engine | client | server */
      type: primitives.R4.code,
      /** The uri of the participant. An absolute URL is preferred */
      uri: primitives.R4.uri
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
      /** Extension of uri element */
      _uri: Element,
      /** The display name of the participant */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element
    })
  ])
);

/**
 * The results of the series of required setup operations before the tests were executed
 */
export interface TestReportSetup {
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
 * The results of the series of required setup operations before the tests were executed
 */
export const TestReportSetup: t.Type<TestReportSetup> = t.recursion<
  TestReportSetup
>("TestReportSetup", () =>
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
 * A setup operation or assert that was executed
 */
export interface TestReportSetupAction {
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
 * A setup operation or assert that was executed
 */
export const TestReportSetupAction: t.Type<TestReportSetupAction> = t.recursion<
  TestReportSetupAction
>("TestReportSetupAction", () =>
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
 * The operation to perform
 */
export interface TestReportSetupActionOperation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** pass | skip | fail | warning | error */
  result: primitives.R4.code;
  /** Extension of result element */
  _result?: Element;
  /** A message associated with the result */
  message?: primitives.R4.markdown;
  /** Extension of message element */
  _message?: Element;
  /** A link to further details on the result */
  detail?: primitives.R4.uri;
  /** Extension of detail element */
  _detail?: Element;
}
/**
 * The operation to perform
 */
export const TestReportSetupActionOperation: t.Type<
  TestReportSetupActionOperation
> = t.recursion<TestReportSetupActionOperation>(
  "TestReportSetupActionOperation",
  () =>
    t.intersection([
      t.type({
        /** pass | skip | fail | warning | error */
        result: primitives.R4.code
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
        /** Extension of result element */
        _result: Element,
        /** A message associated with the result */
        message: primitives.R4.markdown,
        /** Extension of message element */
        _message: Element,
        /** A link to further details on the result */
        detail: primitives.R4.uri,
        /** Extension of detail element */
        _detail: Element
      })
    ])
);

/**
 * The assertion to perform
 */
export interface TestReportSetupActionAssert {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** pass | skip | fail | warning | error */
  result: primitives.R4.code;
  /** Extension of result element */
  _result?: Element;
  /** A message associated with the result */
  message?: primitives.R4.markdown;
  /** Extension of message element */
  _message?: Element;
  /** A link to further details on the result */
  detail?: string;
  /** Extension of detail element */
  _detail?: Element;
}
/**
 * The assertion to perform
 */
export const TestReportSetupActionAssert: t.Type<
  TestReportSetupActionAssert
> = t.recursion<TestReportSetupActionAssert>(
  "TestReportSetupActionAssert",
  () =>
    t.intersection([
      t.type({
        /** pass | skip | fail | warning | error */
        result: primitives.R4.code
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
        /** Extension of result element */
        _result: Element,
        /** A message associated with the result */
        message: primitives.R4.markdown,
        /** Extension of message element */
        _message: Element,
        /** A link to further details on the result */
        detail: primitives.R4.string,
        /** Extension of detail element */
        _detail: Element
      })
    ])
);

/**
 * A test executed from the test script
 */
export interface TestReportTest {
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
 * A test executed from the test script
 */
export const TestReportTest: t.Type<TestReportTest> = t.recursion<
  TestReportTest
>("TestReportTest", () =>
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
 * A test operation or assert that was performed
 */
export interface TestReportTestAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The operation performed */
  operation?: TestReportSetupActionOperation;
  /** The assertion performed */
  assert?: TestReportSetupActionAssert;
}
/**
 * A test operation or assert that was performed
 */
export const TestReportTestAction: t.Type<TestReportTestAction> = t.recursion<
  TestReportTestAction
>("TestReportTestAction", () =>
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
      /** The operation performed */
      operation: TestReportSetupActionOperation,
      /** The assertion performed */
      assert: TestReportSetupActionAssert
    })
  ])
);

/**
 * The results of running the series of required clean up steps
 */
export interface TestReportTeardown {
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
 * The results of running the series of required clean up steps
 */
export const TestReportTeardown: t.Type<TestReportTeardown> = t.recursion<
  TestReportTeardown
>("TestReportTeardown", () =>
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
 * One or more teardown operations performed
 */
export interface TestReportTeardownAction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The teardown operation performed */
  operation: TestReportSetupActionOperation;
}
/**
 * One or more teardown operations performed
 */
export const TestReportTeardownAction: t.Type<
  TestReportTeardownAction
> = t.recursion<TestReportTeardownAction>("TestReportTeardownAction", () =>
  t.intersection([
    t.type({
      /** The teardown operation performed */
      operation: TestReportSetupActionOperation
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
