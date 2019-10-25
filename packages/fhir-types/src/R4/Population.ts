/**
 * Population Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Range } from "./Range";

/**
 * A definition of a set of people that apply to some clinically related context, for example people contraindicated for a certain medication
 */
export interface Population {
  /** The type of resource */
  resourceType?: "Population";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The age of the specific population */
  ageRange?: Range;
  /** The age of the specific population */
  ageCodeableConcept?: CodeableConcept;
  /** The gender of the specific population */
  gender?: CodeableConcept;
  /** Race of the specific population */
  race?: CodeableConcept;
  /** The existing physiological conditions of the specific population to which this applies */
  physiologicalCondition?: CodeableConcept;
}
/**
 * A definition of a set of people that apply to some clinically related context, for example people contraindicated for a certain medication
 */
export const Population: t.Type<Population> = t.recursion<Population>(
  "Population",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Population"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The age of the specific population */
        ageRange: Range,
        /** The age of the specific population */
        ageCodeableConcept: CodeableConcept,
        /** The gender of the specific population */
        gender: CodeableConcept,
        /** Race of the specific population */
        race: CodeableConcept,
        /** The existing physiological conditions of the specific population to which this applies */
        physiologicalCondition: CodeableConcept
      })
    ])
);
