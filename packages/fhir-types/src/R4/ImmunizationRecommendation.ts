/**
 * ImmunizationRecommendation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Dates governing proposed immunization
 */
export interface ImmunizationRecommendationRecommendationDateCriterion {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of date */
  code: CodeableConcept;
  /** Recommended date */
  value: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface ImmunizationRecommendationRecommendationDateCriterionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of date */
  code: CodeableConceptOutputType;
  /** Recommended date */
  value: t.OutputOf<primitives.R4.DateTimeType>;
}

export const ImmunizationRecommendationRecommendationDateCriterion: t.RecursiveType<
  t.Type<
    ImmunizationRecommendationRecommendationDateCriterion,
    ImmunizationRecommendationRecommendationDateCriterionOutputType
  >,
  ImmunizationRecommendationRecommendationDateCriterion,
  ImmunizationRecommendationRecommendationDateCriterionOutputType
> = t.recursion<
  ImmunizationRecommendationRecommendationDateCriterion,
  ImmunizationRecommendationRecommendationDateCriterionOutputType
>("ImmunizationRecommendationRecommendationDateCriterion", () =>
  t.intersection(
    [
      t.type({
        /** Type of date */
        code: CodeableConcept,
        /** Recommended date */
        value: primitives.R4.dateTime
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
    "ImmunizationRecommendationRecommendationDateCriterion"
  )
);

/**
 * Vaccine administration recommendations
 */
export interface ImmunizationRecommendationRecommendation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Vaccine  or vaccine group recommendation applies to */
  vaccineCode?: CodeableConcept[];
  /** Disease to be immunized against */
  targetDisease?: CodeableConcept;
  /** Vaccine which is contraindicated to fulfill the recommendation */
  contraindicatedVaccineCode?: CodeableConcept[];
  /** Vaccine recommendation status */
  forecastStatus: CodeableConcept;
  /** Vaccine administration status reason */
  forecastReason?: CodeableConcept[];
  /** Dates governing proposed immunization */
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterion[];
  /** Protocol details */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Name of vaccination series */
  series?: t.TypeOf<primitives.R4.StringType>;
  /** Recommended dose number within series */
  dosenumber?:
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>;
  /** Recommended number of doses for immunity */
  seriesdoses?:
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>;
  /** Past immunizations supporting recommendation */
  supportingImmunization?: Reference[];
  /** Patient observations supporting recommendation */
  supportingPatientInformation?: Reference[];
}

export interface ImmunizationRecommendationRecommendationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Vaccine  or vaccine group recommendation applies to */
  vaccineCode?: CodeableConceptOutputType[];
  /** Disease to be immunized against */
  targetDisease?: CodeableConceptOutputType;
  /** Vaccine which is contraindicated to fulfill the recommendation */
  contraindicatedVaccineCode?: CodeableConceptOutputType[];
  /** Vaccine recommendation status */
  forecastStatus: CodeableConceptOutputType;
  /** Vaccine administration status reason */
  forecastReason?: CodeableConceptOutputType[];
  /** Dates governing proposed immunization */
  dateCriterion?: ImmunizationRecommendationRecommendationDateCriterionOutputType[];
  /** Protocol details */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Name of vaccination series */
  series?: t.OutputOf<primitives.R4.StringType>;
  /** Recommended dose number within series */
  dosenumber?:
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>;
  /** Recommended number of doses for immunity */
  seriesdoses?:
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>;
  /** Past immunizations supporting recommendation */
  supportingImmunization?: ReferenceOutputType[];
  /** Patient observations supporting recommendation */
  supportingPatientInformation?: ReferenceOutputType[];
}

export const ImmunizationRecommendationRecommendation: t.RecursiveType<
  t.Type<
    ImmunizationRecommendationRecommendation,
    ImmunizationRecommendationRecommendationOutputType
  >,
  ImmunizationRecommendationRecommendation,
  ImmunizationRecommendationRecommendationOutputType
> = t.recursion<
  ImmunizationRecommendationRecommendation,
  ImmunizationRecommendationRecommendationOutputType
>("ImmunizationRecommendationRecommendation", () =>
  t.intersection(
    [
      t.type({
        /** Vaccine recommendation status */
        forecastStatus: CodeableConcept
      }),
      t.partial({
        /** Vaccine which is contraindicated to fulfill the recommendation */
        contraindicatedVaccineCode: t.array(CodeableConcept),
        /** Dates governing proposed immunization */
        dateCriterion: t.array(
          ImmunizationRecommendationRecommendationDateCriterion
        ),
        /** Protocol details */
        description: primitives.R4.string,
        /** Recommended dose number within series */
        dosenumber: t.union([primitives.R4.positiveInt, primitives.R4.string]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Vaccine administration status reason */
        forecastReason: t.array(CodeableConcept),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Name of vaccination series */
        series: primitives.R4.string,
        /** Recommended number of doses for immunity */
        seriesdoses: t.union([primitives.R4.positiveInt, primitives.R4.string]),
        /** Past immunizations supporting recommendation */
        supportingImmunization: t.array(Reference),
        /** Patient observations supporting recommendation */
        supportingPatientInformation: t.array(Reference),
        /** Disease to be immunized against */
        targetDisease: CodeableConcept,
        /** Vaccine  or vaccine group recommendation applies to */
        vaccineCode: t.array(CodeableConcept)
      })
    ],
    "ImmunizationRecommendationRecommendation"
  )
);

/**
 * Guidance or advice relating to an immunization
 */
export interface ImmunizationRecommendation {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** Who this profile is for */
  patient: Reference;
  /** Date recommendation(s) created */
  date: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who is responsible for protocol */
  authority?: Reference;
  /** Vaccine administration recommendations */
  recommendation: ImmunizationRecommendationRecommendation[];
}

export interface ImmunizationRecommendationOutputType {
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
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** Who this profile is for */
  patient: ReferenceOutputType;
  /** Date recommendation(s) created */
  date: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who is responsible for protocol */
  authority?: ReferenceOutputType;
  /** Vaccine administration recommendations */
  recommendation: ImmunizationRecommendationRecommendationOutputType[];
}

export const ImmunizationRecommendation: t.RecursiveType<
  t.Type<ImmunizationRecommendation, ImmunizationRecommendationOutputType>,
  ImmunizationRecommendation,
  ImmunizationRecommendationOutputType
> = t.recursion<
  ImmunizationRecommendation,
  ImmunizationRecommendationOutputType
>("ImmunizationRecommendation", () =>
  t.intersection(
    [
      t.type({
        /** Date recommendation(s) created */
        date: primitives.R4.dateTime,
        /** Who this profile is for */
        patient: Reference,
        /** Vaccine administration recommendations */
        recommendation: t.array(ImmunizationRecommendationRecommendation)
      }),
      t.partial({
        /** Who is responsible for protocol */
        authority: Reference,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "ImmunizationRecommendation"
  )
);
