/**
 * AllergyIntolerance Module
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
 * Allergy or Intolerance (generally: Risk of adverse reaction to a substance)
 */
export interface AllergyIntolerance {
  /** The type of resource */
  resourceType?: "AllergyIntolerance";
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
  /** External ids for this item */
  identifier?: Identifier[];
  /** active | inactive | resolved */
  clinicalStatus?: CodeableConcept;
  /** unconfirmed | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConcept;
  /** allergy | intolerance - Underlying mechanism (if known) */
  type?: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** food | medication | environment | biologic */
  category?: primitives.R4.code[];
  /** Extension of category element */
  _category?: Element[];
  /** low | high | unable-to-assess */
  criticality?: primitives.R4.code;
  /** Extension of criticality element */
  _criticality?: Element;
  /** Code that identifies the allergy or intolerance */
  code?: CodeableConcept;
  /** Who the sensitivity is for */
  patient: Reference;
  /** Encounter when the allergy or intolerance was asserted */
  encounter?: Reference;
  /** When allergy or intolerance was identified */
  onsetDateTime?: primitives.R4.dateTime;
  /** Extension of onsetDateTime element */
  _onsetDateTime?: Element;
  /** When allergy or intolerance was identified */
  onsetAge?: Age;
  /** When allergy or intolerance was identified */
  onsetPeriod?: Period;
  /** When allergy or intolerance was identified */
  onsetRange?: Range;
  /** When allergy or intolerance was identified */
  onsetString?: string;
  /** Extension of onsetString element */
  _onsetString?: Element;
  /** Date first version of the resource instance was recorded */
  recordedDate?: primitives.R4.dateTime;
  /** Extension of recordedDate element */
  _recordedDate?: Element;
  /** Who recorded the sensitivity */
  recorder?: Reference;
  /** Source of the information about the allergy */
  asserter?: Reference;
  /** Date(/time) of last known occurrence of a reaction */
  lastOccurrence?: primitives.R4.dateTime;
  /** Extension of lastOccurrence element */
  _lastOccurrence?: Element;
  /** Additional text not captured in other fields */
  note?: Annotation[];
}
/**
 * Allergy or Intolerance (generally: Risk of adverse reaction to a substance)
 */
export const AllergyIntolerance: t.Type<AllergyIntolerance> = t.recursion<
  AllergyIntolerance
>("AllergyIntolerance", () =>
  t.intersection([
    t.type({
      /** Who the sensitivity is for */
      patient: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("AllergyIntolerance"),
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
      /** External ids for this item */
      identifier: t.array(Identifier),
      /** active | inactive | resolved */
      clinicalStatus: CodeableConcept,
      /** unconfirmed | confirmed | refuted | entered-in-error */
      verificationStatus: CodeableConcept,
      /** allergy | intolerance - Underlying mechanism (if known) */
      type: primitives.R4.code,
      /** Extension of type element */
      _type: Element,
      /** food | medication | environment | biologic */
      category: t.array(primitives.R4.code),
      /** Extension of category element */
      _category: t.array(Element),
      /** low | high | unable-to-assess */
      criticality: primitives.R4.code,
      /** Extension of criticality element */
      _criticality: Element,
      /** Code that identifies the allergy or intolerance */
      code: CodeableConcept,
      /** Encounter when the allergy or intolerance was asserted */
      encounter: Reference,
      /** When allergy or intolerance was identified */
      onsetDateTime: primitives.R4.dateTime,
      /** Extension of onsetDateTime element */
      _onsetDateTime: Element,
      /** When allergy or intolerance was identified */
      onsetAge: Age,
      /** When allergy or intolerance was identified */
      onsetPeriod: Period,
      /** When allergy or intolerance was identified */
      onsetRange: Range,
      /** When allergy or intolerance was identified */
      onsetString: primitives.R4.string,
      /** Extension of onsetString element */
      _onsetString: Element,
      /** Date first version of the resource instance was recorded */
      recordedDate: primitives.R4.dateTime,
      /** Extension of recordedDate element */
      _recordedDate: Element,
      /** Who recorded the sensitivity */
      recorder: Reference,
      /** Source of the information about the allergy */
      asserter: Reference,
      /** Date(/time) of last known occurrence of a reaction */
      lastOccurrence: primitives.R4.dateTime,
      /** Extension of lastOccurrence element */
      _lastOccurrence: Element,
      /** Additional text not captured in other fields */
      note: t.array(Annotation)
    })
  ])
);

/**
 * Adverse Reaction Events linked to exposure to substance
 */
export interface AllergyIntoleranceReaction {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Specific substance or pharmaceutical product considered to be responsible for event */
  substance?: CodeableConcept;
  /** Clinical symptoms/signs associated with the Event */
  manifestation: CodeableConcept[];
  /** Description of the event as a whole */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Date(/time) when manifestations showed */
  onset?: primitives.R4.dateTime;
  /** Extension of onset element */
  _onset?: Element;
  /** mild | moderate | severe (of event as a whole) */
  severity?: primitives.R4.code;
  /** Extension of severity element */
  _severity?: Element;
  /** How the subject was exposed to the substance */
  exposureRoute?: CodeableConcept;
  /** Text about event not captured in other fields */
  note?: Annotation[];
}
/**
 * Adverse Reaction Events linked to exposure to substance
 */
export const AllergyIntoleranceReaction: t.Type<
  AllergyIntoleranceReaction
> = t.recursion<AllergyIntoleranceReaction>("AllergyIntoleranceReaction", () =>
  t.intersection([
    t.type({
      /** Clinical symptoms/signs associated with the Event */
      manifestation: t.array(CodeableConcept)
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
      /** Specific substance or pharmaceutical product considered to be responsible for event */
      substance: CodeableConcept,
      /** Description of the event as a whole */
      description: primitives.R4.string,
      /** Extension of description element */
      _description: Element,
      /** Date(/time) when manifestations showed */
      onset: primitives.R4.dateTime,
      /** Extension of onset element */
      _onset: Element,
      /** mild | moderate | severe (of event as a whole) */
      severity: primitives.R4.code,
      /** Extension of severity element */
      _severity: Element,
      /** How the subject was exposed to the substance */
      exposureRoute: CodeableConcept,
      /** Text about event not captured in other fields */
      note: t.array(Annotation)
    })
  ])
);
