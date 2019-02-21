/**
 * Population Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Range, RangeOutputType } from "./Range";

/**
 * A definition of a set of people that apply to some clinically related context, for example people contraindicated for a certain medication
 */
export interface Population {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The age of the specific population */
  age?: Range | CodeableConcept;
  /** The gender of the specific population */
  gender?: CodeableConcept;
  /** Race of the specific population */
  race?: CodeableConcept;
  /** The existing physiological conditions of the specific population to which this applies */
  physiologicalCondition?: CodeableConcept;
}

export interface PopulationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The age of the specific population */
  age?: RangeOutputType | CodeableConceptOutputType;
  /** The gender of the specific population */
  gender?: CodeableConceptOutputType;
  /** Race of the specific population */
  race?: CodeableConceptOutputType;
  /** The existing physiological conditions of the specific population to which this applies */
  physiologicalCondition?: CodeableConceptOutputType;
}

export const Population: t.RecursiveType<
  t.Type<Population, PopulationOutputType>,
  Population,
  PopulationOutputType
> = t.recursion<Population, PopulationOutputType>("Population", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** The age of the specific population */
        age: t.union([Range, CodeableConcept]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The gender of the specific population */
        gender: CodeableConcept,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The existing physiological conditions of the specific population to which this applies */
        physiologicalCondition: CodeableConcept,
        /** Race of the specific population */
        race: CodeableConcept
      })
    ],
    "Population"
  )
);
