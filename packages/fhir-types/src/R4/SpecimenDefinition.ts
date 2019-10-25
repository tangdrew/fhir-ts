/**
 * SpecimenDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Kind of specimen
 */
export interface SpecimenDefinition {
  /** The type of resource */
  resourceType?: "SpecimenDefinition";
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
  /** Business identifier of a kind of specimen */
  identifier?: Identifier;
  /** Kind of material to collect */
  typeCollected?: CodeableConcept;
  /** Patient preparation for collection */
  patientPreparation?: CodeableConcept[];
  /** Time aspect for collection */
  timeAspect?: string;
  /** Extension of timeAspect element */
  _timeAspect?: Element;
  /** Specimen collection procedure */
  collection?: CodeableConcept[];
}
/**
 * Kind of specimen
 */
export const SpecimenDefinition: t.Type<SpecimenDefinition> = t.recursion<
  SpecimenDefinition
>("SpecimenDefinition", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("SpecimenDefinition"),
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
      /** Business identifier of a kind of specimen */
      identifier: Identifier,
      /** Kind of material to collect */
      typeCollected: CodeableConcept,
      /** Patient preparation for collection */
      patientPreparation: t.array(CodeableConcept),
      /** Time aspect for collection */
      timeAspect: primitives.R4.string,
      /** Extension of timeAspect element */
      _timeAspect: Element,
      /** Specimen collection procedure */
      collection: t.array(CodeableConcept)
    })
  ])
);

/**
 * Specimen in container intended for testing by lab
 */
export interface SpecimenDefinitionTypeTested {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Primary or secondary specimen */
  isDerived?: boolean;
  /** Extension of isDerived element */
  _isDerived?: Element;
  /** Type of intended specimen */
  type?: CodeableConcept;
  /** preferred | alternate */
  preference: primitives.R4.code;
  /** Extension of preference element */
  _preference?: Element;
  /** Specimen requirements */
  requirement?: string;
  /** Extension of requirement element */
  _requirement?: Element;
  /** Specimen retention time */
  retentionTime?: Duration;
  /** Rejection criterion */
  rejectionCriterion?: CodeableConcept[];
}
/**
 * Specimen in container intended for testing by lab
 */
export const SpecimenDefinitionTypeTested: t.Type<
  SpecimenDefinitionTypeTested
> = t.recursion<SpecimenDefinitionTypeTested>(
  "SpecimenDefinitionTypeTested",
  () =>
    t.intersection([
      t.type({
        /** preferred | alternate */
        preference: primitives.R4.code
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
        /** Primary or secondary specimen */
        isDerived: primitives.R4.boolean,
        /** Extension of isDerived element */
        _isDerived: Element,
        /** Type of intended specimen */
        type: CodeableConcept,
        /** Extension of preference element */
        _preference: Element,
        /** Specimen requirements */
        requirement: primitives.R4.string,
        /** Extension of requirement element */
        _requirement: Element,
        /** Specimen retention time */
        retentionTime: Duration,
        /** Rejection criterion */
        rejectionCriterion: t.array(CodeableConcept)
      })
    ])
);

/**
 * The specimen's container
 */
export interface SpecimenDefinitionTypeTestedContainer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Container material */
  material?: CodeableConcept;
  /** Kind of container associated with the kind of specimen */
  type?: CodeableConcept;
  /** Color of container cap */
  cap?: CodeableConcept;
  /** Container description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Container capacity */
  capacity?: Quantity;
  /** Minimum volume */
  minimumvolumeQuantity?: Quantity;
  /** Minimum volume */
  minimumvolumeString?: string;
  /** Extension of minimumvolumeString element */
  _minimumvolumeString?: Element;
  /** Specimen container preparation */
  preparation?: string;
  /** Extension of preparation element */
  _preparation?: Element;
}
/**
 * The specimen's container
 */
export const SpecimenDefinitionTypeTestedContainer: t.Type<
  SpecimenDefinitionTypeTestedContainer
> = t.recursion<SpecimenDefinitionTypeTestedContainer>(
  "SpecimenDefinitionTypeTestedContainer",
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
        /** Container material */
        material: CodeableConcept,
        /** Kind of container associated with the kind of specimen */
        type: CodeableConcept,
        /** Color of container cap */
        cap: CodeableConcept,
        /** Container description */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Container capacity */
        capacity: Quantity,
        /** Minimum volume */
        minimumvolumeQuantity: Quantity,
        /** Minimum volume */
        minimumvolumeString: primitives.R4.string,
        /** Extension of minimumvolumeString element */
        _minimumvolumeString: Element,
        /** Specimen container preparation */
        preparation: primitives.R4.string,
        /** Extension of preparation element */
        _preparation: Element
      })
    ])
);

/**
 * Additive associated with container
 */
export interface SpecimenDefinitionTypeTestedContainerAdditive {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Additive associated with container */
  additiveCodeableConcept: CodeableConcept;
  /** Additive associated with container */
  additiveReference: Reference;
}
/**
 * Additive associated with container
 */
export const SpecimenDefinitionTypeTestedContainerAdditive: t.Type<
  SpecimenDefinitionTypeTestedContainerAdditive
> = t.recursion<SpecimenDefinitionTypeTestedContainerAdditive>(
  "SpecimenDefinitionTypeTestedContainerAdditive",
  () =>
    t.intersection([
      t.type({
        /** Additive associated with container */
        additiveCodeableConcept: CodeableConcept,
        /** Additive associated with container */
        additiveReference: Reference
      }),
      t.partial({
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ])
);

/**
 * Specimen handling before testing
 */
export interface SpecimenDefinitionTypeTestedHandling {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Temperature qualifier */
  temperatureQualifier?: CodeableConcept;
  /** Temperature range */
  temperatureRange?: Range;
  /** Maximum preservation time */
  maxDuration?: Duration;
  /** Preservation instruction */
  instruction?: string;
  /** Extension of instruction element */
  _instruction?: Element;
}
/**
 * Specimen handling before testing
 */
export const SpecimenDefinitionTypeTestedHandling: t.Type<
  SpecimenDefinitionTypeTestedHandling
> = t.recursion<SpecimenDefinitionTypeTestedHandling>(
  "SpecimenDefinitionTypeTestedHandling",
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
        /** Temperature qualifier */
        temperatureQualifier: CodeableConcept,
        /** Temperature range */
        temperatureRange: Range,
        /** Maximum preservation time */
        maxDuration: Duration,
        /** Preservation instruction */
        instruction: primitives.R4.string,
        /** Extension of instruction element */
        _instruction: Element
      })
    ])
);
