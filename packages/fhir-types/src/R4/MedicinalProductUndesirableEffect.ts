/**
 * MedicinalProductUndesirableEffect Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Population } from "./Population";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * MedicinalProductUndesirableEffect
 */
export interface MedicinalProductUndesirableEffect {
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
  /** The medication for which this is an indication */
  subject?: Reference[];
  /** The symptom, condition or undesirable effect */
  symptomConditionEffect?: CodeableConcept;
  /** Classification of the effect */
  classification?: CodeableConcept;
  /** The frequency of occurrence of the effect */
  frequencyOfOccurrence?: CodeableConcept;
  /** The population group to which this applies */
  population?: Population[];
}
/**
 * MedicinalProductUndesirableEffect
 */
export const MedicinalProductUndesirableEffect: t.Type<
  MedicinalProductUndesirableEffect
> = t.recursion<MedicinalProductUndesirableEffect>(
  "MedicinalProductUndesirableEffect",
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
        /** The medication for which this is an indication */
        subject: t.array(Reference),
        /** The symptom, condition or undesirable effect */
        symptomConditionEffect: CodeableConcept,
        /** Classification of the effect */
        classification: CodeableConcept,
        /** The frequency of occurrence of the effect */
        frequencyOfOccurrence: CodeableConcept,
        /** The population group to which this applies */
        population: t.array(Population)
      })
    ])
);
