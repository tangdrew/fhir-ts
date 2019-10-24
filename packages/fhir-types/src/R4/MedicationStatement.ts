/**
 * MedicationStatement Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Dosage } from "./Dosage";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Record of medication being taken by a patient
 */
export interface MedicationStatement {
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
  identifier?: Identifier[];
  /** Fulfils plan, proposal or order */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept[];
  /** Type of medication usage */
  category?: CodeableConcept;
  /** What medication was taken */
  medicationCodeableConcept: CodeableConcept;
  /** What medication was taken */
  medicationReference: Reference;
  /** Who is/was taking  the medication */
  subject: Reference;
  /** Encounter / Episode associated with MedicationStatement */
  context?: Reference;
  /** The date/time or interval when the medication is/was/will be taken */
  effectiveDateTime?: primitives.R4.dateTime;
  /** Extension of effectiveDateTime element */
  _effectiveDateTime?: Element;
  /** The date/time or interval when the medication is/was/will be taken */
  effectivePeriod?: Period;
  /** When the statement was asserted? */
  dateAsserted?: primitives.R4.dateTime;
  /** Extension of dateAsserted element */
  _dateAsserted?: Element;
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
/**
 * Record of medication being taken by a patient
 */
export const MedicationStatement: t.Type<MedicationStatement> = t.recursion<
  MedicationStatement
>("MedicationStatement", () =>
  t.intersection([
    t.type({
      /** active | completed | entered-in-error | intended | stopped | on-hold | unknown | not-taken */
      status: primitives.R4.code,
      /** What medication was taken */
      medicationCodeableConcept: CodeableConcept,
      /** What medication was taken */
      medicationReference: Reference,
      /** Who is/was taking  the medication */
      subject: Reference
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
      /** External identifier */
      identifier: t.array(Identifier),
      /** Fulfils plan, proposal or order */
      basedOn: t.array(Reference),
      /** Part of referenced event */
      partOf: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Reason for current status */
      statusReason: t.array(CodeableConcept),
      /** Type of medication usage */
      category: CodeableConcept,
      /** Encounter / Episode associated with MedicationStatement */
      context: Reference,
      /** The date/time or interval when the medication is/was/will be taken */
      effectiveDateTime: primitives.R4.dateTime,
      /** Extension of effectiveDateTime element */
      _effectiveDateTime: Element,
      /** The date/time or interval when the medication is/was/will be taken */
      effectivePeriod: Period,
      /** When the statement was asserted? */
      dateAsserted: primitives.R4.dateTime,
      /** Extension of dateAsserted element */
      _dateAsserted: Element,
      /** Person or organization that provided the information about the taking of this medication */
      informationSource: Reference,
      /** Additional supporting information */
      derivedFrom: t.array(Reference),
      /** Reason for why the medication is being/was taken */
      reasonCode: t.array(CodeableConcept),
      /** Condition or observation that supports why the medication is being/was taken */
      reasonReference: t.array(Reference),
      /** Further information about the statement */
      note: t.array(Annotation),
      /** Details of how medication is/was taken or should be taken */
      dosage: t.array(Dosage)
    })
  ])
);
