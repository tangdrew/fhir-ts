/**
 * MedicinalProductUndesirableEffect Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Population, PopulationOutputType } from "./Population";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * MedicinalProductUndesirableEffect
 */
export interface MedicinalProductUndesirableEffect {
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

export interface MedicinalProductUndesirableEffectOutputType {
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
  /** The medication for which this is an indication */
  subject?: ReferenceOutputType[];
  /** The symptom, condition or undesirable effect */
  symptomConditionEffect?: CodeableConceptOutputType;
  /** Classification of the effect */
  classification?: CodeableConceptOutputType;
  /** The frequency of occurrence of the effect */
  frequencyOfOccurrence?: CodeableConceptOutputType;
  /** The population group to which this applies */
  population?: PopulationOutputType[];
}

export const MedicinalProductUndesirableEffect: t.RecursiveType<
  t.Type<
    MedicinalProductUndesirableEffect,
    MedicinalProductUndesirableEffectOutputType
  >,
  MedicinalProductUndesirableEffect,
  MedicinalProductUndesirableEffectOutputType
> = t.recursion<
  MedicinalProductUndesirableEffect,
  MedicinalProductUndesirableEffectOutputType
>("MedicinalProductUndesirableEffect", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Classification of the effect */
        classification: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The frequency of occurrence of the effect */
        frequencyOfOccurrence: CodeableConcept,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** The population group to which this applies */
        population: t.array(Population),
        /** The medication for which this is an indication */
        subject: t.array(Reference),
        /** The symptom, condition or undesirable effect */
        symptomConditionEffect: CodeableConcept,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "MedicinalProductUndesirableEffect"
  )
);
