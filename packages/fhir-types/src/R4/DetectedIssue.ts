/**
 * DetectedIssue Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Clinical issue with action
 */
export interface DetectedIssue {
  /** The type of resource */
  resourceType?: "DetectedIssue";
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
  /** Unique id for the detected issue */
  identifier?: Identifier[];
  /** registered | preliminary | final | amended + */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Issue Category, e.g. drug-drug, duplicate therapy, etc. */
  code?: CodeableConcept;
  /** high | moderate | low */
  severity?: primitives.R4.code;
  /** Extension of severity element */
  _severity?: Element;
  /** Associated patient */
  patient?: Reference;
  /** When identified */
  identifiedDateTime?: primitives.R4.dateTime;
  /** Extension of identifiedDateTime element */
  _identifiedDateTime?: Element;
  /** When identified */
  identifiedPeriod?: Period;
  /** The provider or device that identified the issue */
  author?: Reference;
  /** Problem resource */
  implicated?: Reference[];
  /** Description and context */
  detail?: string;
  /** Extension of detail element */
  _detail?: Element;
  /** Authority for issue */
  reference?: primitives.R4.uri;
  /** Extension of reference element */
  _reference?: Element;
}
/**
 * Clinical issue with action
 */
export const DetectedIssue: t.Type<DetectedIssue> = t.recursion<DetectedIssue>(
  "DetectedIssue",
  () =>
    t.intersection([
      t.type({
        /** registered | preliminary | final | amended + */
        status: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("DetectedIssue"),
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
        /** Unique id for the detected issue */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Issue Category, e.g. drug-drug, duplicate therapy, etc. */
        code: CodeableConcept,
        /** high | moderate | low */
        severity: primitives.R4.code,
        /** Extension of severity element */
        _severity: Element,
        /** Associated patient */
        patient: Reference,
        /** When identified */
        identifiedDateTime: primitives.R4.dateTime,
        /** Extension of identifiedDateTime element */
        _identifiedDateTime: Element,
        /** When identified */
        identifiedPeriod: Period,
        /** The provider or device that identified the issue */
        author: Reference,
        /** Problem resource */
        implicated: t.array(Reference),
        /** Description and context */
        detail: primitives.R4.string,
        /** Extension of detail element */
        _detail: Element,
        /** Authority for issue */
        reference: primitives.R4.uri,
        /** Extension of reference element */
        _reference: Element
      })
    ])
);

/**
 * Supporting evidence
 */
export interface DetectedIssueEvidence {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Manifestation */
  code?: CodeableConcept[];
  /** Supporting information */
  detail?: Reference[];
}
/**
 * Supporting evidence
 */
export const DetectedIssueEvidence: t.Type<DetectedIssueEvidence> = t.recursion<
  DetectedIssueEvidence
>("DetectedIssueEvidence", () =>
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
      /** Manifestation */
      code: t.array(CodeableConcept),
      /** Supporting information */
      detail: t.array(Reference)
    })
  ])
);

/**
 * Step taken to address
 */
export interface DetectedIssueMitigation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What mitigation? */
  action: CodeableConcept;
  /** Date committed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Who is committing? */
  author?: Reference;
}
/**
 * Step taken to address
 */
export const DetectedIssueMitigation: t.Type<
  DetectedIssueMitigation
> = t.recursion<DetectedIssueMitigation>("DetectedIssueMitigation", () =>
  t.intersection([
    t.type({
      /** What mitigation? */
      action: CodeableConcept
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
      /** Date committed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Who is committing? */
      author: Reference
    })
  ])
);
