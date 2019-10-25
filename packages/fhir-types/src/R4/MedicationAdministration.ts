/**
 * MedicationAdministration Module
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
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Administration of medication to a patient
 */
export interface MedicationAdministration {
  /** The type of resource */
  resourceType?: "MedicationAdministration";
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
  /** Instantiates protocol or definition */
  instantiates?: primitives.R4.uri[];
  /** Extension of instantiates element */
  _instantiates?: Element[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason administration not performed */
  statusReason?: CodeableConcept[];
  /** Type of medication usage */
  category?: CodeableConcept;
  /** What was administered */
  medicationCodeableConcept: CodeableConcept;
  /** What was administered */
  medicationReference: Reference;
  /** Who received medication */
  subject: Reference;
  /** Encounter or Episode of Care administered as part of */
  context?: Reference;
  /** Additional information to support administration */
  supportingInformation?: Reference[];
  /** Start and end time of administration */
  effectiveDateTime: primitives.R4.dateTime;
  /** Extension of effectiveDateTime element */
  _effectiveDateTime?: Element;
  /** Start and end time of administration */
  effectivePeriod: Period;
  /** Reason administration performed */
  reasonCode?: CodeableConcept[];
  /** Condition or observation that supports why the medication was administered */
  reasonReference?: Reference[];
  /** Request administration performed against */
  request?: Reference;
  /** Device used to administer */
  device?: Reference[];
  /** Information about the administration */
  note?: Annotation[];
  /** A list of events of interest in the lifecycle */
  eventHistory?: Reference[];
}
/**
 * Administration of medication to a patient
 */
export const MedicationAdministration: t.Type<
  MedicationAdministration
> = t.recursion<MedicationAdministration>("MedicationAdministration", () =>
  t.intersection([
    t.type({
      /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
      status: primitives.R4.code,
      /** What was administered */
      medicationCodeableConcept: CodeableConcept,
      /** What was administered */
      medicationReference: Reference,
      /** Who received medication */
      subject: Reference,
      /** Start and end time of administration */
      effectiveDateTime: primitives.R4.dateTime,
      /** Start and end time of administration */
      effectivePeriod: Period
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("MedicationAdministration"),
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
      /** Instantiates protocol or definition */
      instantiates: t.array(primitives.R4.uri),
      /** Extension of instantiates element */
      _instantiates: t.array(Element),
      /** Part of referenced event */
      partOf: t.array(Reference),
      /** Extension of status element */
      _status: Element,
      /** Reason administration not performed */
      statusReason: t.array(CodeableConcept),
      /** Type of medication usage */
      category: CodeableConcept,
      /** Encounter or Episode of Care administered as part of */
      context: Reference,
      /** Additional information to support administration */
      supportingInformation: t.array(Reference),
      /** Extension of effectiveDateTime element */
      _effectiveDateTime: Element,
      /** Reason administration performed */
      reasonCode: t.array(CodeableConcept),
      /** Condition or observation that supports why the medication was administered */
      reasonReference: t.array(Reference),
      /** Request administration performed against */
      request: Reference,
      /** Device used to administer */
      device: t.array(Reference),
      /** Information about the administration */
      note: t.array(Annotation),
      /** A list of events of interest in the lifecycle */
      eventHistory: t.array(Reference)
    })
  ])
);

/**
 * Who performed the medication administration and what they did
 */
export interface MedicationAdministrationPerformer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of performance */
  function?: CodeableConcept;
  /** Who performed the medication administration */
  actor: Reference;
}
/**
 * Who performed the medication administration and what they did
 */
export const MedicationAdministrationPerformer: t.Type<
  MedicationAdministrationPerformer
> = t.recursion<MedicationAdministrationPerformer>(
  "MedicationAdministrationPerformer",
  () =>
    t.intersection([
      t.type({
        /** Who performed the medication administration */
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
        /** Type of performance */
        function: CodeableConcept
      })
    ])
);

/**
 * Details of how medication was taken
 */
export interface MedicationAdministrationDosage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Free text dosage instructions e.g. SIG */
  text?: string;
  /** Extension of text element */
  _text?: Element;
  /** Body site administered to */
  site?: CodeableConcept;
  /** Path of substance into body */
  route?: CodeableConcept;
  /** How drug was administered */
  method?: CodeableConcept;
  /** Amount of medication per dose */
  dose?: Quantity;
  /** Dose quantity per unit of time */
  rateRatio?: Ratio;
  /** Dose quantity per unit of time */
  rateQuantity?: Quantity;
}
/**
 * Details of how medication was taken
 */
export const MedicationAdministrationDosage: t.Type<
  MedicationAdministrationDosage
> = t.recursion<MedicationAdministrationDosage>(
  "MedicationAdministrationDosage",
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
        /** Free text dosage instructions e.g. SIG */
        text: primitives.R4.string,
        /** Extension of text element */
        _text: Element,
        /** Body site administered to */
        site: CodeableConcept,
        /** Path of substance into body */
        route: CodeableConcept,
        /** How drug was administered */
        method: CodeableConcept,
        /** Amount of medication per dose */
        dose: Quantity,
        /** Dose quantity per unit of time */
        rateRatio: Ratio,
        /** Dose quantity per unit of time */
        rateQuantity: Quantity
      })
    ])
);
