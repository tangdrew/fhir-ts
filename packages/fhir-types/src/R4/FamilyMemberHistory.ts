/**
 * FamilyMemberHistory Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Information about patient's relatives, relevant for patient
 */
export interface FamilyMemberHistory {
  /** The type of resource */
  resourceType?: "FamilyMemberHistory";
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
  /** External Id(s) for this record */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** partial | completed | entered-in-error | health-unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** subject-unknown | withheld | unable-to-obtain | deferred */
  dataAbsentReason?: CodeableConcept;
  /** Patient history is about */
  patient: Reference;
  /** When history was recorded or last updated */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** The family member described */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Relationship to the subject */
  relationship: CodeableConcept;
  /** male | female | other | unknown */
  sex?: CodeableConcept;
  /** (approximate) date of birth */
  bornPeriod?: Period;
  /** (approximate) date of birth */
  bornDate?: primitives.R4.date;
  /** Extension of bornDate element */
  _bornDate?: Element;
  /** (approximate) date of birth */
  bornString?: string;
  /** Extension of bornString element */
  _bornString?: Element;
  /** (approximate) age */
  ageAge?: Age;
  /** (approximate) age */
  ageRange?: Range;
  /** (approximate) age */
  ageString?: string;
  /** Extension of ageString element */
  _ageString?: Element;
  /** Age is estimated? */
  estimatedAge?: boolean;
  /** Extension of estimatedAge element */
  _estimatedAge?: Element;
  /** Dead? How old/when? */
  deceasedBoolean?: boolean;
  /** Extension of deceasedBoolean element */
  _deceasedBoolean?: Element;
  /** Dead? How old/when? */
  deceasedAge?: Age;
  /** Dead? How old/when? */
  deceasedRange?: Range;
  /** Dead? How old/when? */
  deceasedDate?: primitives.R4.date;
  /** Extension of deceasedDate element */
  _deceasedDate?: Element;
  /** Dead? How old/when? */
  deceasedString?: string;
  /** Extension of deceasedString element */
  _deceasedString?: Element;
  /** Why was family member history performed? */
  reasonCode?: CodeableConcept[];
  /** Why was family member history performed? */
  reasonReference?: Reference[];
  /** General note about related person */
  note?: Annotation[];
}
/**
 * Information about patient's relatives, relevant for patient
 */
export const FamilyMemberHistory: t.Type<FamilyMemberHistory> = t.recursion<
  FamilyMemberHistory
>("FamilyMemberHistory", () =>
  t.intersection([
    t.type({
      /** partial | completed | entered-in-error | health-unknown */
      status: primitives.R4.code,
      /** Patient history is about */
      patient: Reference,
      /** Relationship to the subject */
      relationship: CodeableConcept
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("FamilyMemberHistory"),
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
      /** External Id(s) for this record */
      identifier: t.array(Identifier),
      /** Instantiates FHIR protocol or definition */
      instantiatesCanonical: t.array(primitives.R4.canonical),
      /** Extension of instantiatesCanonical element */
      _instantiatesCanonical: t.array(Element),
      /** Instantiates external protocol or definition */
      instantiatesUri: t.array(primitives.R4.uri),
      /** Extension of instantiatesUri element */
      _instantiatesUri: t.array(Element),
      /** Extension of status element */
      _status: Element,
      /** subject-unknown | withheld | unable-to-obtain | deferred */
      dataAbsentReason: CodeableConcept,
      /** When history was recorded or last updated */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** The family member described */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** male | female | other | unknown */
      sex: CodeableConcept,
      /** (approximate) date of birth */
      bornPeriod: Period,
      /** (approximate) date of birth */
      bornDate: primitives.R4.date,
      /** Extension of bornDate element */
      _bornDate: Element,
      /** (approximate) date of birth */
      bornString: primitives.R4.string,
      /** Extension of bornString element */
      _bornString: Element,
      /** (approximate) age */
      ageAge: Age,
      /** (approximate) age */
      ageRange: Range,
      /** (approximate) age */
      ageString: primitives.R4.string,
      /** Extension of ageString element */
      _ageString: Element,
      /** Age is estimated? */
      estimatedAge: primitives.R4.boolean,
      /** Extension of estimatedAge element */
      _estimatedAge: Element,
      /** Dead? How old/when? */
      deceasedBoolean: primitives.R4.boolean,
      /** Extension of deceasedBoolean element */
      _deceasedBoolean: Element,
      /** Dead? How old/when? */
      deceasedAge: Age,
      /** Dead? How old/when? */
      deceasedRange: Range,
      /** Dead? How old/when? */
      deceasedDate: primitives.R4.date,
      /** Extension of deceasedDate element */
      _deceasedDate: Element,
      /** Dead? How old/when? */
      deceasedString: primitives.R4.string,
      /** Extension of deceasedString element */
      _deceasedString: Element,
      /** Why was family member history performed? */
      reasonCode: t.array(CodeableConcept),
      /** Why was family member history performed? */
      reasonReference: t.array(Reference),
      /** General note about related person */
      note: t.array(Annotation)
    })
  ])
);

/**
 * Condition that the related person had
 */
export interface FamilyMemberHistoryCondition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Condition suffered by relation */
  code: CodeableConcept;
  /** deceased | permanent disability | etc. */
  outcome?: CodeableConcept;
  /** Whether the condition contributed to the cause of death */
  contributedToDeath?: boolean;
  /** Extension of contributedToDeath element */
  _contributedToDeath?: Element;
  /** When condition first manifested */
  onsetAge?: Age;
  /** When condition first manifested */
  onsetRange?: Range;
  /** When condition first manifested */
  onsetPeriod?: Period;
  /** When condition first manifested */
  onsetString?: string;
  /** Extension of onsetString element */
  _onsetString?: Element;
  /** Extra information about condition */
  note?: Annotation[];
}
/**
 * Condition that the related person had
 */
export const FamilyMemberHistoryCondition: t.Type<
  FamilyMemberHistoryCondition
> = t.recursion<FamilyMemberHistoryCondition>(
  "FamilyMemberHistoryCondition",
  () =>
    t.intersection([
      t.type({
        /** Condition suffered by relation */
        code: CodeableConcept
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
        /** deceased | permanent disability | etc. */
        outcome: CodeableConcept,
        /** Whether the condition contributed to the cause of death */
        contributedToDeath: primitives.R4.boolean,
        /** Extension of contributedToDeath element */
        _contributedToDeath: Element,
        /** When condition first manifested */
        onsetAge: Age,
        /** When condition first manifested */
        onsetRange: Range,
        /** When condition first manifested */
        onsetPeriod: Period,
        /** When condition first manifested */
        onsetString: primitives.R4.string,
        /** Extension of onsetString element */
        _onsetString: Element,
        /** Extra information about condition */
        note: t.array(Annotation)
      })
    ])
);
