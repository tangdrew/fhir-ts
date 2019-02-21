/**
 * MedicationStatement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Dosage, DosageOutputType } from "./Dosage";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Record of medication being taken by a patient
 */
export interface MedicationStatement {
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
  identifier?: Identifier[];
  /** Fulfils plan, proposal or order */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept[];
  /** Type of medication usage */
  category?: CodeableConcept;
  /** What medication was taken */
  medication: CodeableConcept | Reference;
  /** Who is/was taking  the medication */
  subject: Reference;
  /** Encounter / Episode associated with MedicationStatement */
  context?: Reference;
  /** The date/time or interval when the medication is/was/will be taken */
  effective?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** When the statement was asserted? */
  dateAsserted?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Person or organization that provided the information about the taking of this medication */
  informationSource?: Reference;
  /** Additional supporting information */
  derivedFrom?: Reference[];
  /** Reason for why the medication is being/was taken */
  reasonCode?: CodeableConcept[];
  /** Condition or observation that supports why the medication is being/was taken */
  reasonReference?: Reference[];
  /** Further information about the statement */
  note?: Annotation[];
  /** Details of how medication is/was taken or should be taken */
  dosage?: Dosage[];
}

export interface MedicationStatementOutputType {
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
  identifier?: IdentifierOutputType[];
  /** Fulfils plan, proposal or order */
  basedOn?: ReferenceOutputType[];
  /** Part of referenced event */
  partOf?: ReferenceOutputType[];
  /** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType[];
  /** Type of medication usage */
  category?: CodeableConceptOutputType;
  /** What medication was taken */
  medication: CodeableConceptOutputType | ReferenceOutputType;
  /** Who is/was taking  the medication */
  subject: ReferenceOutputType;
  /** Encounter / Episode associated with MedicationStatement */
  context?: ReferenceOutputType;
  /** The date/time or interval when the medication is/was/will be taken */
  effective?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** When the statement was asserted? */
  dateAsserted?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Person or organization that provided the information about the taking of this medication */
  informationSource?: ReferenceOutputType;
  /** Additional supporting information */
  derivedFrom?: ReferenceOutputType[];
  /** Reason for why the medication is being/was taken */
  reasonCode?: CodeableConceptOutputType[];
  /** Condition or observation that supports why the medication is being/was taken */
  reasonReference?: ReferenceOutputType[];
  /** Further information about the statement */
  note?: AnnotationOutputType[];
  /** Details of how medication is/was taken or should be taken */
  dosage?: DosageOutputType[];
}

export const MedicationStatement: t.RecursiveType<
  t.Type<MedicationStatement, MedicationStatementOutputType>,
  MedicationStatement,
  MedicationStatementOutputType
> = t.recursion<MedicationStatement, MedicationStatementOutputType>(
  "MedicationStatement",
  () =>
    t.intersection(
      [
        t.type({
          /** What medication was taken */
          medication: t.union([CodeableConcept, Reference]),
          /** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
          status: primitives.R4.code,
          /** Who is/was taking  the medication */
          subject: Reference
        }),
        t.partial({
          /** Fulfils plan, proposal or order */
          basedOn: t.array(Reference),
          /** Type of medication usage */
          category: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Encounter / Episode associated with MedicationStatement */
          context: Reference,
          /** When the statement was asserted? */
          dateAsserted: primitives.R4.dateTime,
          /** Additional supporting information */
          derivedFrom: t.array(Reference),
          /** Details of how medication is/was taken or should be taken */
          dosage: t.array(Dosage),
          /** The date/time or interval when the medication is/was/will be taken */
          effective: t.union([primitives.R4.dateTime, Period]),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** External identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Person or organization that provided the information about the taking of this medication */
          informationSource: Reference,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Further information about the statement */
          note: t.array(Annotation),
          /** Part of referenced event */
          partOf: t.array(Reference),
          /** Reason for why the medication is being/was taken */
          reasonCode: t.array(CodeableConcept),
          /** Condition or observation that supports why the medication is being/was taken */
          reasonReference: t.array(Reference),
          /** Reason for current status */
          statusReason: t.array(CodeableConcept),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "MedicationStatement"
    )
);
