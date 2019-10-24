/**
 * MedicinalProductAuthorization Module
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
 * The regulatory authorization of a medicinal product
 */
export interface MedicinalProductAuthorization {
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
  /** Business identifier for the marketing authorization, as assigned by a regulator */
  identifier?: Identifier[];
  /** The medicinal product that is being authorized */
  subject?: Reference;
  /** The country in which the marketing authorization has been granted */
  country?: CodeableConcept[];
  /** Jurisdiction within a country */
  jurisdiction?: CodeableConcept[];
  /** The status of the marketing authorization */
  status?: CodeableConcept;
  /** The date at which the given status has become applicable */
  statusDate?: primitives.R4.dateTime;
  /** Extension of statusDate element */
  _statusDate?: Element;
  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored */
  restoreDate?: primitives.R4.dateTime;
  /** Extension of restoreDate element */
  _restoreDate?: Element;
  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format */
  validityPeriod?: Period;
  /** A period of time after authorization before generic product applicatiosn can be submitted */
  dataExclusivityPeriod?: Period;
  /** The date when the first authorization was granted by a Medicines Regulatory Agency */
  dateOfFirstAuthorization?: primitives.R4.dateTime;
  /** Extension of dateOfFirstAuthorization element */
  _dateOfFirstAuthorization?: Element;
  /** Date of first marketing authorization for a company's new medicinal product in any country in the World */
  internationalBirthDate?: primitives.R4.dateTime;
  /** Extension of internationalBirthDate element */
  _internationalBirthDate?: Element;
  /** The legal framework against which this authorization is granted */
  legalBasis?: CodeableConcept;
  /** Marketing Authorization Holder */
  holder?: Reference;
  /** Medicines Regulatory Agency */
  regulator?: Reference;
}
/**
 * The regulatory authorization of a medicinal product
 */
export const MedicinalProductAuthorization: t.Type<
  MedicinalProductAuthorization
> = t.recursion<MedicinalProductAuthorization>(
  "MedicinalProductAuthorization",
  () =>
    t.intersection([
      t.type({}),
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
        /** Business identifier for the marketing authorization, as assigned by a regulator */
        identifier: t.array(Identifier),
        /** The medicinal product that is being authorized */
        subject: Reference,
        /** The country in which the marketing authorization has been granted */
        country: t.array(CodeableConcept),
        /** Jurisdiction within a country */
        jurisdiction: t.array(CodeableConcept),
        /** The status of the marketing authorization */
        status: CodeableConcept,
        /** The date at which the given status has become applicable */
        statusDate: primitives.R4.dateTime,
        /** Extension of statusDate element */
        _statusDate: Element,
        /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored */
        restoreDate: primitives.R4.dateTime,
        /** Extension of restoreDate element */
        _restoreDate: Element,
        /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format */
        validityPeriod: Period,
        /** A period of time after authorization before generic product applicatiosn can be submitted */
        dataExclusivityPeriod: Period,
        /** The date when the first authorization was granted by a Medicines Regulatory Agency */
        dateOfFirstAuthorization: primitives.R4.dateTime,
        /** Extension of dateOfFirstAuthorization element */
        _dateOfFirstAuthorization: Element,
        /** Date of first marketing authorization for a company's new medicinal product in any country in the World */
        internationalBirthDate: primitives.R4.dateTime,
        /** Extension of internationalBirthDate element */
        _internationalBirthDate: Element,
        /** The legal framework against which this authorization is granted */
        legalBasis: CodeableConcept,
        /** Marketing Authorization Holder */
        holder: Reference,
        /** Medicines Regulatory Agency */
        regulator: Reference
      })
    ])
);

/**
 * Authorization in areas within a country
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorization {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The assigned number for the marketing authorization */
  identifier?: Identifier[];
  /** Country of authorization */
  country?: CodeableConcept;
  /** Jurisdiction within a country */
  jurisdiction?: CodeableConcept[];
  /** The legal status of supply in a jurisdiction or region */
  legalStatusOfSupply?: CodeableConcept;
  /** The start and expected end date of the authorization */
  validityPeriod?: Period;
}
/**
 * Authorization in areas within a country
 */
export const MedicinalProductAuthorizationJurisdictionalAuthorization: t.Type<
  MedicinalProductAuthorizationJurisdictionalAuthorization
> = t.recursion<MedicinalProductAuthorizationJurisdictionalAuthorization>(
  "MedicinalProductAuthorizationJurisdictionalAuthorization",
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
        /** The assigned number for the marketing authorization */
        identifier: t.array(Identifier),
        /** Country of authorization */
        country: CodeableConcept,
        /** Jurisdiction within a country */
        jurisdiction: t.array(CodeableConcept),
        /** The legal status of supply in a jurisdiction or region */
        legalStatusOfSupply: CodeableConcept,
        /** The start and expected end date of the authorization */
        validityPeriod: Period
      })
    ])
);

/**
 * The regulatory procedure for granting or amending a marketing authorization
 */
export interface MedicinalProductAuthorizationProcedure {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier for this procedure */
  identifier?: Identifier;
  /** Type of procedure */
  type: CodeableConcept;
  /** Date of procedure */
  datePeriod?: Period;
  /** Date of procedure */
  dateDateTime?: primitives.R4.dateTime;
  /** Extension of dateDateTime element */
  _dateDateTime?: Element;
  /** Applcations submitted to obtain a marketing authorization */
  application?: MedicinalProductAuthorizationProcedure[];
}
/**
 * The regulatory procedure for granting or amending a marketing authorization
 */
export const MedicinalProductAuthorizationProcedure: t.Type<
  MedicinalProductAuthorizationProcedure
> = t.recursion<MedicinalProductAuthorizationProcedure>(
  "MedicinalProductAuthorizationProcedure",
  () =>
    t.intersection([
      t.type({
        /** Type of procedure */
        type: CodeableConcept
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
        /** Identifier for this procedure */
        identifier: Identifier,
        /** Date of procedure */
        datePeriod: Period,
        /** Date of procedure */
        dateDateTime: primitives.R4.dateTime,
        /** Extension of dateDateTime element */
        _dateDateTime: Element,
        /** Applcations submitted to obtain a marketing authorization */
        application: t.array(MedicinalProductAuthorizationProcedure)
      })
    ])
);
