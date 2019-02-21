/**
 * Immunization Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Details of a reaction that follows immunization
 */
export interface ImmunizationReaction {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** When reaction started */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Additional information on reaction */
  detail?: Reference;
  /** Indicates self-reported reaction */
  reported?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface ImmunizationReactionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** When reaction started */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Additional information on reaction */
  detail?: ReferenceOutputType;
  /** Indicates self-reported reaction */
  reported?: t.OutputOf<primitives.R4.BooleanType>;
}

export const ImmunizationReaction: t.RecursiveType<
  t.Type<ImmunizationReaction, ImmunizationReactionOutputType>,
  ImmunizationReaction,
  ImmunizationReactionOutputType
> = t.recursion<ImmunizationReaction, ImmunizationReactionOutputType>(
  "ImmunizationReaction",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** When reaction started */
          date: primitives.R4.dateTime,
          /** Additional information on reaction */
          detail: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Indicates self-reported reaction */
          reported: primitives.R4.boolean
        })
      ],
      "ImmunizationReaction"
    )
);

/**
 * Protocol followed by the provider
 */
export interface ImmunizationProtocolApplied {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Name of vaccine series */
  series?: t.TypeOf<primitives.R4.StringType>;
  /** Who is responsible for publishing the recommendations */
  authority?: Reference;
  /** Vaccine preventatable disease being targetted */
  targetDisease?: CodeableConcept[];
  /** Dose number within series */
  dosenumber:
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>;
  /** Recommended number of doses for immunity */
  seriesdoses?:
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>;
}

export interface ImmunizationProtocolAppliedOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Name of vaccine series */
  series?: t.OutputOf<primitives.R4.StringType>;
  /** Who is responsible for publishing the recommendations */
  authority?: ReferenceOutputType;
  /** Vaccine preventatable disease being targetted */
  targetDisease?: CodeableConceptOutputType[];
  /** Dose number within series */
  dosenumber:
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>;
  /** Recommended number of doses for immunity */
  seriesdoses?:
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>;
}

export const ImmunizationProtocolApplied: t.RecursiveType<
  t.Type<ImmunizationProtocolApplied, ImmunizationProtocolAppliedOutputType>,
  ImmunizationProtocolApplied,
  ImmunizationProtocolAppliedOutputType
> = t.recursion<
  ImmunizationProtocolApplied,
  ImmunizationProtocolAppliedOutputType
>("ImmunizationProtocolApplied", () =>
  t.intersection(
    [
      t.type({
        /** Dose number within series */
        dosenumber: t.union([primitives.R4.positiveInt, primitives.R4.string])
      }),
      t.partial({
        /** Who is responsible for publishing the recommendations */
        authority: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Name of vaccine series */
        series: primitives.R4.string,
        /** Recommended number of doses for immunity */
        seriesdoses: t.union([primitives.R4.positiveInt, primitives.R4.string]),
        /** Vaccine preventatable disease being targetted */
        targetDisease: t.array(CodeableConcept)
      })
    ],
    "ImmunizationProtocolApplied"
  )
);

/**
 * Who performed event
 */
export interface ImmunizationPerformer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What type of performance was done */
  function?: CodeableConcept;
  /** Individual or organization who was performing */
  actor: Reference;
}

export interface ImmunizationPerformerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What type of performance was done */
  function?: CodeableConceptOutputType;
  /** Individual or organization who was performing */
  actor: ReferenceOutputType;
}

export const ImmunizationPerformer: t.RecursiveType<
  t.Type<ImmunizationPerformer, ImmunizationPerformerOutputType>,
  ImmunizationPerformer,
  ImmunizationPerformerOutputType
> = t.recursion<ImmunizationPerformer, ImmunizationPerformerOutputType>(
  "ImmunizationPerformer",
  () =>
    t.intersection(
      [
        t.type({
          /** Individual or organization who was performing */
          actor: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** What type of performance was done */
          function: CodeableConcept,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ImmunizationPerformer"
    )
);

/**
 * Educational material presented to patient
 */
export interface ImmunizationEducation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Educational material document identifier */
  documentType?: t.TypeOf<primitives.R4.StringType>;
  /** Educational material reference pointer */
  reference?: t.TypeOf<primitives.R4.URIType>;
  /** Educational material publication date */
  publicationDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Educational material presentation date */
  presentationDate?: t.TypeOf<primitives.R4.DateTimeType>;
}

export interface ImmunizationEducationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Educational material document identifier */
  documentType?: t.OutputOf<primitives.R4.StringType>;
  /** Educational material reference pointer */
  reference?: t.OutputOf<primitives.R4.URIType>;
  /** Educational material publication date */
  publicationDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Educational material presentation date */
  presentationDate?: t.OutputOf<primitives.R4.DateTimeType>;
}

export const ImmunizationEducation: t.RecursiveType<
  t.Type<ImmunizationEducation, ImmunizationEducationOutputType>,
  ImmunizationEducation,
  ImmunizationEducationOutputType
> = t.recursion<ImmunizationEducation, ImmunizationEducationOutputType>(
  "ImmunizationEducation",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Educational material document identifier */
          documentType: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Educational material presentation date */
          presentationDate: primitives.R4.dateTime,
          /** Educational material publication date */
          publicationDate: primitives.R4.dateTime,
          /** Educational material reference pointer */
          reference: primitives.R4.uri
        })
      ],
      "ImmunizationEducation"
    )
);

/**
 * Immunization event information
 */
export interface Immunization {
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
  /** completed | entered-in-error | not-done */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason not done */
  statusReason?: CodeableConcept;
  /** Vaccine product administered */
  vaccineCode: CodeableConcept;
  /** Who was immunized */
  patient: Reference;
  /** Encounter immunization was part of */
  encounter?: Reference;
  /** Vaccine administration date */
  occurrence:
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.StringType>;
  /** When the immunization was first captured in the subject's record */
  recorded?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Indicates context the data was recorded in */
  primarySource?: t.TypeOf<primitives.R4.BooleanType>;
  /** Indicates the source of a secondarily reported record */
  reportOrigin?: CodeableConcept;
  /** Where immunization occurred */
  location?: Reference;
  /** Vaccine manufacturer */
  manufacturer?: Reference;
  /** Vaccine lot number */
  lotNumber?: t.TypeOf<primitives.R4.StringType>;
  /** Vaccine expiration date */
  expirationDate?: t.TypeOf<primitives.R4.DateType>;
  /** Body site vaccine  was administered */
  site?: CodeableConcept;
  /** How vaccine entered body */
  route?: CodeableConcept;
  /** Amount of vaccine administered */
  doseQuantity?: Quantity;
  /** Who performed event */
  performer?: ImmunizationPerformer[];
  /** Additional immunization notes */
  note?: Annotation[];
  /** Why immunization occurred */
  reasonCode?: CodeableConcept[];
  /** Why immunization occurred */
  reasonReference?: Reference[];
  /** Dose potency */
  isSubpotent?: t.TypeOf<primitives.R4.BooleanType>;
  /** Reason for being subpotent */
  subpotentReason?: CodeableConcept[];
  /** Educational material presented to patient */
  education?: ImmunizationEducation[];
  /** Patient eligibility for a vaccination program */
  programEligibility?: CodeableConcept[];
  /** Funding source for the vaccine */
  fundingSource?: CodeableConcept;
  /** Details of a reaction that follows immunization */
  reaction?: ImmunizationReaction[];
  /** Protocol followed by the provider */
  protocolApplied?: ImmunizationProtocolApplied[];
}

export interface ImmunizationOutputType {
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
  /** completed | entered-in-error | not-done */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason not done */
  statusReason?: CodeableConceptOutputType;
  /** Vaccine product administered */
  vaccineCode: CodeableConceptOutputType;
  /** Who was immunized */
  patient: ReferenceOutputType;
  /** Encounter immunization was part of */
  encounter?: ReferenceOutputType;
  /** Vaccine administration date */
  occurrence:
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.StringType>;
  /** When the immunization was first captured in the subject's record */
  recorded?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Indicates context the data was recorded in */
  primarySource?: t.OutputOf<primitives.R4.BooleanType>;
  /** Indicates the source of a secondarily reported record */
  reportOrigin?: CodeableConceptOutputType;
  /** Where immunization occurred */
  location?: ReferenceOutputType;
  /** Vaccine manufacturer */
  manufacturer?: ReferenceOutputType;
  /** Vaccine lot number */
  lotNumber?: t.OutputOf<primitives.R4.StringType>;
  /** Vaccine expiration date */
  expirationDate?: t.OutputOf<primitives.R4.DateType>;
  /** Body site vaccine  was administered */
  site?: CodeableConceptOutputType;
  /** How vaccine entered body */
  route?: CodeableConceptOutputType;
  /** Amount of vaccine administered */
  doseQuantity?: QuantityOutputType;
  /** Who performed event */
  performer?: ImmunizationPerformerOutputType[];
  /** Additional immunization notes */
  note?: AnnotationOutputType[];
  /** Why immunization occurred */
  reasonCode?: CodeableConceptOutputType[];
  /** Why immunization occurred */
  reasonReference?: ReferenceOutputType[];
  /** Dose potency */
  isSubpotent?: t.OutputOf<primitives.R4.BooleanType>;
  /** Reason for being subpotent */
  subpotentReason?: CodeableConceptOutputType[];
  /** Educational material presented to patient */
  education?: ImmunizationEducationOutputType[];
  /** Patient eligibility for a vaccination program */
  programEligibility?: CodeableConceptOutputType[];
  /** Funding source for the vaccine */
  fundingSource?: CodeableConceptOutputType;
  /** Details of a reaction that follows immunization */
  reaction?: ImmunizationReactionOutputType[];
  /** Protocol followed by the provider */
  protocolApplied?: ImmunizationProtocolAppliedOutputType[];
}

export const Immunization: t.RecursiveType<
  t.Type<Immunization, ImmunizationOutputType>,
  Immunization,
  ImmunizationOutputType
> = t.recursion<Immunization, ImmunizationOutputType>("Immunization", () =>
  t.intersection(
    [
      t.type({
        /** Vaccine administration date */
        occurrence: t.union([primitives.R4.dateTime, primitives.R4.string]),
        /** Who was immunized */
        patient: Reference,
        /** completed | entered-in-error | not-done */
        status: primitives.R4.code,
        /** Vaccine product administered */
        vaccineCode: CodeableConcept
      }),
      t.partial({
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Amount of vaccine administered */
        doseQuantity: Quantity,
        /** Educational material presented to patient */
        education: t.array(ImmunizationEducation),
        /** Encounter immunization was part of */
        encounter: Reference,
        /** Vaccine expiration date */
        expirationDate: primitives.R4.date,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Funding source for the vaccine */
        fundingSource: CodeableConcept,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Dose potency */
        isSubpotent: primitives.R4.boolean,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Where immunization occurred */
        location: Reference,
        /** Vaccine lot number */
        lotNumber: primitives.R4.string,
        /** Vaccine manufacturer */
        manufacturer: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Additional immunization notes */
        note: t.array(Annotation),
        /** Who performed event */
        performer: t.array(ImmunizationPerformer),
        /** Indicates context the data was recorded in */
        primarySource: primitives.R4.boolean,
        /** Patient eligibility for a vaccination program */
        programEligibility: t.array(CodeableConcept),
        /** Protocol followed by the provider */
        protocolApplied: t.array(ImmunizationProtocolApplied),
        /** Details of a reaction that follows immunization */
        reaction: t.array(ImmunizationReaction),
        /** Why immunization occurred */
        reasonCode: t.array(CodeableConcept),
        /** Why immunization occurred */
        reasonReference: t.array(Reference),
        /** When the immunization was first captured in the subject's record */
        recorded: primitives.R4.dateTime,
        /** Indicates the source of a secondarily reported record */
        reportOrigin: CodeableConcept,
        /** How vaccine entered body */
        route: CodeableConcept,
        /** Body site vaccine  was administered */
        site: CodeableConcept,
        /** Reason not done */
        statusReason: CodeableConcept,
        /** Reason for being subpotent */
        subpotentReason: t.array(CodeableConcept),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Immunization"
  )
);
