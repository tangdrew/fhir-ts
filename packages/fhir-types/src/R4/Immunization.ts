/**
 * Immunization Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Immunization event information
 */
export interface Immunization {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** completed | entered-in-error | not-done */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason not done */
  statusReason?: CodeableConcept;
  /** Vaccine product administered */
  vaccineCode: CodeableConcept;
  /** Who was immunized */
  patient: Reference;
  /** Encounter immunization was part of */
  encounter?: Reference;
  /** Vaccine administration date */
  occurrenceDateTime: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** Vaccine administration date */
  occurrenceString: string;
  /** Extension of occurrenceString element */
  _occurrenceString?: Element;
  /** When the immunization was first captured in the subject's record */
  recorded?: primitives.R4.dateTime;
  /** Extension of recorded element */
  _recorded?: Element;
  /** Indicates context the data was recorded in */
  primarySource?: boolean;
  /** Extension of primarySource element */
  _primarySource?: Element;
  /** Indicates the source of a secondarily reported record */
  reportOrigin?: CodeableConcept;
  /** Where immunization occurred */
  location?: Reference;
  /** Vaccine manufacturer */
  manufacturer?: Reference;
  /** Vaccine lot number */
  lotNumber?: string;
  /** Extension of lotNumber element */
  _lotNumber?: Element;
  /** Vaccine expiration date */
  expirationDate?: primitives.R4.date;
  /** Extension of expirationDate element */
  _expirationDate?: Element;
  /** Body site vaccine  was administered */
  site?: CodeableConcept;
  /** How vaccine entered body */
  route?: CodeableConcept;
  /** Amount of vaccine administered */
  doseQuantity?: Quantity;
  /** Additional immunization notes */
  note?: Annotation[];
  /** Why immunization occurred */
  reasonCode?: CodeableConcept[];
  /** Why immunization occurred */
  reasonReference?: Reference[];
  /** Dose potency */
  isSubpotent?: boolean;
  /** Extension of isSubpotent element */
  _isSubpotent?: Element;
  /** Reason for being subpotent */
  subpotentReason?: CodeableConcept[];
  /** Patient eligibility for a vaccination program */
  programEligibility?: CodeableConcept[];
  /** Funding source for the vaccine */
  fundingSource?: CodeableConcept;
}
/**
 * Immunization event information
 */
export const Immunization: t.Type<Immunization> = t.recursion<Immunization>(
  "Immunization",
  () =>
    t.intersection([
      t.type({
        /** completed | entered-in-error | not-done */
        status: primitives.R4.code,
        /** Vaccine product administered */
        vaccineCode: CodeableConcept,
        /** Who was immunized */
        patient: Reference,
        /** Vaccine administration date */
        occurrenceDateTime: primitives.R4.dateTime,
        /** Vaccine administration date */
        occurrenceString: primitives.R4.string
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
        /** Business identifier */
        identifier: t.array(Identifier),
        /** Extension of status element */
        _status: Element,
        /** Reason not done */
        statusReason: CodeableConcept,
        /** Encounter immunization was part of */
        encounter: Reference,
        /** Extension of occurrenceDateTime element */
        _occurrenceDateTime: Element,
        /** Extension of occurrenceString element */
        _occurrenceString: Element,
        /** When the immunization was first captured in the subject's record */
        recorded: primitives.R4.dateTime,
        /** Extension of recorded element */
        _recorded: Element,
        /** Indicates context the data was recorded in */
        primarySource: primitives.R4.boolean,
        /** Extension of primarySource element */
        _primarySource: Element,
        /** Indicates the source of a secondarily reported record */
        reportOrigin: CodeableConcept,
        /** Where immunization occurred */
        location: Reference,
        /** Vaccine manufacturer */
        manufacturer: Reference,
        /** Vaccine lot number */
        lotNumber: primitives.R4.string,
        /** Extension of lotNumber element */
        _lotNumber: Element,
        /** Vaccine expiration date */
        expirationDate: primitives.R4.date,
        /** Extension of expirationDate element */
        _expirationDate: Element,
        /** Body site vaccine  was administered */
        site: CodeableConcept,
        /** How vaccine entered body */
        route: CodeableConcept,
        /** Amount of vaccine administered */
        doseQuantity: Quantity,
        /** Additional immunization notes */
        note: t.array(Annotation),
        /** Why immunization occurred */
        reasonCode: t.array(CodeableConcept),
        /** Why immunization occurred */
        reasonReference: t.array(Reference),
        /** Dose potency */
        isSubpotent: primitives.R4.boolean,
        /** Extension of isSubpotent element */
        _isSubpotent: Element,
        /** Reason for being subpotent */
        subpotentReason: t.array(CodeableConcept),
        /** Patient eligibility for a vaccination program */
        programEligibility: t.array(CodeableConcept),
        /** Funding source for the vaccine */
        fundingSource: CodeableConcept
      })
    ])
);

/**
 * Who performed event
 */
export interface ImmunizationPerformer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What type of performance was done */
  function?: CodeableConcept;
  /** Individual or organization who was performing */
  actor: Reference;
}
/**
 * Who performed event
 */
export const ImmunizationPerformer: t.Type<ImmunizationPerformer> = t.recursion<
  ImmunizationPerformer
>("ImmunizationPerformer", () =>
  t.intersection([
    t.type({
      /** Individual or organization who was performing */
      actor: Reference
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
      /** What type of performance was done */
      function: CodeableConcept
    })
  ])
);

/**
 * Educational material presented to patient
 */
export interface ImmunizationEducation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Educational material document identifier */
  documentType?: string;
  /** Extension of documentType element */
  _documentType?: Element;
  /** Educational material reference pointer */
  reference?: primitives.R4.uri;
  /** Extension of reference element */
  _reference?: Element;
  /** Educational material publication date */
  publicationDate?: primitives.R4.dateTime;
  /** Extension of publicationDate element */
  _publicationDate?: Element;
  /** Educational material presentation date */
  presentationDate?: primitives.R4.dateTime;
  /** Extension of presentationDate element */
  _presentationDate?: Element;
}
/**
 * Educational material presented to patient
 */
export const ImmunizationEducation: t.Type<ImmunizationEducation> = t.recursion<
  ImmunizationEducation
>("ImmunizationEducation", () =>
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
      /** Educational material document identifier */
      documentType: primitives.R4.string,
      /** Extension of documentType element */
      _documentType: Element,
      /** Educational material reference pointer */
      reference: primitives.R4.uri,
      /** Extension of reference element */
      _reference: Element,
      /** Educational material publication date */
      publicationDate: primitives.R4.dateTime,
      /** Extension of publicationDate element */
      _publicationDate: Element,
      /** Educational material presentation date */
      presentationDate: primitives.R4.dateTime,
      /** Extension of presentationDate element */
      _presentationDate: Element
    })
  ])
);

/**
 * Details of a reaction that follows immunization
 */
export interface ImmunizationReaction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When reaction started */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Additional information on reaction */
  detail?: Reference;
  /** Indicates self-reported reaction */
  reported?: boolean;
  /** Extension of reported element */
  _reported?: Element;
}
/**
 * Details of a reaction that follows immunization
 */
export const ImmunizationReaction: t.Type<ImmunizationReaction> = t.recursion<
  ImmunizationReaction
>("ImmunizationReaction", () =>
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
      /** When reaction started */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Additional information on reaction */
      detail: Reference,
      /** Indicates self-reported reaction */
      reported: primitives.R4.boolean,
      /** Extension of reported element */
      _reported: Element
    })
  ])
);

/**
 * Protocol followed by the provider
 */
export interface ImmunizationProtocolApplied {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of vaccine series */
  series?: string;
  /** Extension of series element */
  _series?: Element;
  /** Who is responsible for publishing the recommendations */
  authority?: Reference;
  /** Vaccine preventatable disease being targetted */
  targetDisease?: CodeableConcept[];
  /** Dose number within series */
  dosenumberPositiveInt: primitives.R4.positiveInt;
  /** Extension of dosenumberPositiveInt element */
  _dosenumberPositiveInt?: Element;
  /** Dose number within series */
  dosenumberString: string;
  /** Extension of dosenumberString element */
  _dosenumberString?: Element;
  /** Recommended number of doses for immunity */
  seriesdosesPositiveInt?: primitives.R4.positiveInt;
  /** Extension of seriesdosesPositiveInt element */
  _seriesdosesPositiveInt?: Element;
  /** Recommended number of doses for immunity */
  seriesdosesString?: string;
  /** Extension of seriesdosesString element */
  _seriesdosesString?: Element;
}
/**
 * Protocol followed by the provider
 */
export const ImmunizationProtocolApplied: t.Type<
  ImmunizationProtocolApplied
> = t.recursion<ImmunizationProtocolApplied>(
  "ImmunizationProtocolApplied",
  () =>
    t.intersection([
      t.type({
        /** Dose number within series */
        dosenumberPositiveInt: primitives.R4.positiveInt,
        /** Dose number within series */
        dosenumberString: primitives.R4.string
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
        /** Name of vaccine series */
        series: primitives.R4.string,
        /** Extension of series element */
        _series: Element,
        /** Who is responsible for publishing the recommendations */
        authority: Reference,
        /** Vaccine preventatable disease being targetted */
        targetDisease: t.array(CodeableConcept),
        /** Extension of dosenumberPositiveInt element */
        _dosenumberPositiveInt: Element,
        /** Extension of dosenumberString element */
        _dosenumberString: Element,
        /** Recommended number of doses for immunity */
        seriesdosesPositiveInt: primitives.R4.positiveInt,
        /** Extension of seriesdosesPositiveInt element */
        _seriesdosesPositiveInt: Element,
        /** Recommended number of doses for immunity */
        seriesdosesString: primitives.R4.string,
        /** Extension of seriesdosesString element */
        _seriesdosesString: Element
      })
    ])
);
