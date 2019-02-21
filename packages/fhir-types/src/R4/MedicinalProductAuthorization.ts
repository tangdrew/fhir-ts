/**
 * MedicinalProductAuthorization Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The regulatory procedure for granting or amending a marketing authorization
 */
export interface MedicinalProductAuthorizationProcedure {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifier for this procedure */
  identifier?: Identifier;
  /** Type of procedure */
  type: CodeableConcept;
  /** Date of procedure */
  date?: Period | t.TypeOf<primitives.R4.DateTimeType>;
  /** Applcations submitted to obtain a marketing authorization */
  application?: MedicinalProductAuthorizationProcedure[];
}

export interface MedicinalProductAuthorizationProcedureOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifier for this procedure */
  identifier?: IdentifierOutputType;
  /** Type of procedure */
  type: CodeableConceptOutputType;
  /** Date of procedure */
  date?: PeriodOutputType | t.OutputOf<primitives.R4.DateTimeType>;
  /** Applcations submitted to obtain a marketing authorization */
  application?: MedicinalProductAuthorizationProcedureOutputType[];
}

export const MedicinalProductAuthorizationProcedure: t.RecursiveType<
  t.Type<
    MedicinalProductAuthorizationProcedure,
    MedicinalProductAuthorizationProcedureOutputType
  >,
  MedicinalProductAuthorizationProcedure,
  MedicinalProductAuthorizationProcedureOutputType
> = t.recursion<
  MedicinalProductAuthorizationProcedure,
  MedicinalProductAuthorizationProcedureOutputType
>("MedicinalProductAuthorizationProcedure", () =>
  t.intersection(
    [
      t.type({
        /** Type of procedure */
        type: CodeableConcept
      }),
      t.partial({
        /** Applcations submitted to obtain a marketing authorization */
        application: t.array(MedicinalProductAuthorizationProcedure),
        /** Date of procedure */
        date: t.union([Period, primitives.R4.dateTime]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Identifier for this procedure */
        identifier: Identifier,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "MedicinalProductAuthorizationProcedure"
  )
);

/**
 * Authorization in areas within a country
 */
export interface MedicinalProductAuthorizationJurisdictionalAuthorization {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface MedicinalProductAuthorizationJurisdictionalAuthorizationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The assigned number for the marketing authorization */
  identifier?: IdentifierOutputType[];
  /** Country of authorization */
  country?: CodeableConceptOutputType;
  /** Jurisdiction within a country */
  jurisdiction?: CodeableConceptOutputType[];
  /** The legal status of supply in a jurisdiction or region */
  legalStatusOfSupply?: CodeableConceptOutputType;
  /** The start and expected end date of the authorization */
  validityPeriod?: PeriodOutputType;
}

export const MedicinalProductAuthorizationJurisdictionalAuthorization: t.RecursiveType<
  t.Type<
    MedicinalProductAuthorizationJurisdictionalAuthorization,
    MedicinalProductAuthorizationJurisdictionalAuthorizationOutputType
  >,
  MedicinalProductAuthorizationJurisdictionalAuthorization,
  MedicinalProductAuthorizationJurisdictionalAuthorizationOutputType
> = t.recursion<
  MedicinalProductAuthorizationJurisdictionalAuthorization,
  MedicinalProductAuthorizationJurisdictionalAuthorizationOutputType
>("MedicinalProductAuthorizationJurisdictionalAuthorization", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Country of authorization */
        country: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The assigned number for the marketing authorization */
        identifier: t.array(Identifier),
        /** Jurisdiction within a country */
        jurisdiction: t.array(CodeableConcept),
        /** The legal status of supply in a jurisdiction or region */
        legalStatusOfSupply: CodeableConcept,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The start and expected end date of the authorization */
        validityPeriod: Period
      })
    ],
    "MedicinalProductAuthorizationJurisdictionalAuthorization"
  )
);

/**
 * The regulatory authorization of a medicinal product
 */
export interface MedicinalProductAuthorization {
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
  statusDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored */
  restoreDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format */
  validityPeriod?: Period;
  /** A period of time after authorization before generic product applicatiosn can be submitted */
  dataExclusivityPeriod?: Period;
  /** The date when the first authorization was granted by a Medicines Regulatory Agency */
  dateOfFirstAuthorization?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Date of first marketing authorization for a company's new medicinal product in any country in the World */
  internationalBirthDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The legal framework against which this authorization is granted */
  legalBasis?: CodeableConcept;
  /** Authorization in areas within a country */
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorization[];
  /** Marketing Authorization Holder */
  holder?: Reference;
  /** Medicines Regulatory Agency */
  regulator?: Reference;
  /** The regulatory procedure for granting or amending a marketing authorization */
  procedure?: MedicinalProductAuthorizationProcedure;
}

export interface MedicinalProductAuthorizationOutputType {
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
  /** Business identifier for the marketing authorization, as assigned by a regulator */
  identifier?: IdentifierOutputType[];
  /** The medicinal product that is being authorized */
  subject?: ReferenceOutputType;
  /** The country in which the marketing authorization has been granted */
  country?: CodeableConceptOutputType[];
  /** Jurisdiction within a country */
  jurisdiction?: CodeableConceptOutputType[];
  /** The status of the marketing authorization */
  status?: CodeableConceptOutputType;
  /** The date at which the given status has become applicable */
  statusDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored */
  restoreDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format */
  validityPeriod?: PeriodOutputType;
  /** A period of time after authorization before generic product applicatiosn can be submitted */
  dataExclusivityPeriod?: PeriodOutputType;
  /** The date when the first authorization was granted by a Medicines Regulatory Agency */
  dateOfFirstAuthorization?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Date of first marketing authorization for a company's new medicinal product in any country in the World */
  internationalBirthDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The legal framework against which this authorization is granted */
  legalBasis?: CodeableConceptOutputType;
  /** Authorization in areas within a country */
  jurisdictionalAuthorization?: MedicinalProductAuthorizationJurisdictionalAuthorizationOutputType[];
  /** Marketing Authorization Holder */
  holder?: ReferenceOutputType;
  /** Medicines Regulatory Agency */
  regulator?: ReferenceOutputType;
  /** The regulatory procedure for granting or amending a marketing authorization */
  procedure?: MedicinalProductAuthorizationProcedureOutputType;
}

export const MedicinalProductAuthorization: t.RecursiveType<
  t.Type<
    MedicinalProductAuthorization,
    MedicinalProductAuthorizationOutputType
  >,
  MedicinalProductAuthorization,
  MedicinalProductAuthorizationOutputType
> = t.recursion<
  MedicinalProductAuthorization,
  MedicinalProductAuthorizationOutputType
>("MedicinalProductAuthorization", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The country in which the marketing authorization has been granted */
        country: t.array(CodeableConcept),
        /** A period of time after authorization before generic product applicatiosn can be submitted */
        dataExclusivityPeriod: Period,
        /** The date when the first authorization was granted by a Medicines Regulatory Agency */
        dateOfFirstAuthorization: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Marketing Authorization Holder */
        holder: Reference,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier for the marketing authorization, as assigned by a regulator */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Date of first marketing authorization for a company's new medicinal product in any country in the World */
        internationalBirthDate: primitives.R4.dateTime,
        /** Jurisdiction within a country */
        jurisdiction: t.array(CodeableConcept),
        /** Authorization in areas within a country */
        jurisdictionalAuthorization: t.array(
          MedicinalProductAuthorizationJurisdictionalAuthorization
        ),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** The legal framework against which this authorization is granted */
        legalBasis: CodeableConcept,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** The regulatory procedure for granting or amending a marketing authorization */
        procedure: MedicinalProductAuthorizationProcedure,
        /** Medicines Regulatory Agency */
        regulator: Reference,
        /** The date when a suspended the marketing or the marketing authorization of the product is anticipated to be restored */
        restoreDate: primitives.R4.dateTime,
        /** The status of the marketing authorization */
        status: CodeableConcept,
        /** The date at which the given status has become applicable */
        statusDate: primitives.R4.dateTime,
        /** The medicinal product that is being authorized */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** The beginning of the time period in which the marketing authorization is in the specific status shall be specified A complete date consisting of day, month and year shall be specified using the ISO 8601 date format */
        validityPeriod: Period
      })
    ],
    "MedicinalProductAuthorization"
  )
);
