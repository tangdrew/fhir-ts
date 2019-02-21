/**
 * SpecimenDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Duration, DurationOutputType } from "./Duration";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Specimen handling before testing
 */
export interface SpecimenDefinitionTypeTestedHandling {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  instruction?: t.TypeOf<primitives.R4.StringType>;
}

export interface SpecimenDefinitionTypeTestedHandlingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Temperature qualifier */
  temperatureQualifier?: CodeableConceptOutputType;
  /** Temperature range */
  temperatureRange?: RangeOutputType;
  /** Maximum preservation time */
  maxDuration?: DurationOutputType;
  /** Preservation instruction */
  instruction?: t.OutputOf<primitives.R4.StringType>;
}

export const SpecimenDefinitionTypeTestedHandling: t.RecursiveType<
  t.Type<
    SpecimenDefinitionTypeTestedHandling,
    SpecimenDefinitionTypeTestedHandlingOutputType
  >,
  SpecimenDefinitionTypeTestedHandling,
  SpecimenDefinitionTypeTestedHandlingOutputType
> = t.recursion<
  SpecimenDefinitionTypeTestedHandling,
  SpecimenDefinitionTypeTestedHandlingOutputType
>("SpecimenDefinitionTypeTestedHandling", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Preservation instruction */
        instruction: primitives.R4.string,
        /** Maximum preservation time */
        maxDuration: Duration,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Temperature qualifier */
        temperatureQualifier: CodeableConcept,
        /** Temperature range */
        temperatureRange: Range
      })
    ],
    "SpecimenDefinitionTypeTestedHandling"
  )
);

/**
 * Additive associated with container
 */
export interface SpecimenDefinitionTypeTestedContainerAdditive {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Additive associated with container */
  additive: CodeableConcept | Reference;
}

export interface SpecimenDefinitionTypeTestedContainerAdditiveOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Additive associated with container */
  additive: CodeableConceptOutputType | ReferenceOutputType;
}

export const SpecimenDefinitionTypeTestedContainerAdditive: t.RecursiveType<
  t.Type<
    SpecimenDefinitionTypeTestedContainerAdditive,
    SpecimenDefinitionTypeTestedContainerAdditiveOutputType
  >,
  SpecimenDefinitionTypeTestedContainerAdditive,
  SpecimenDefinitionTypeTestedContainerAdditiveOutputType
> = t.recursion<
  SpecimenDefinitionTypeTestedContainerAdditive,
  SpecimenDefinitionTypeTestedContainerAdditiveOutputType
>("SpecimenDefinitionTypeTestedContainerAdditive", () =>
  t.intersection(
    [
      t.type({
        /** Additive associated with container */
        additive: t.union([CodeableConcept, Reference])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "SpecimenDefinitionTypeTestedContainerAdditive"
  )
);

/**
 * The specimen's container
 */
export interface SpecimenDefinitionTypeTestedContainer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Container capacity */
  capacity?: Quantity;
  /** Minimum volume */
  minimumvolume?: Quantity | t.TypeOf<primitives.R4.StringType>;
  /** Additive associated with container */
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[];
  /** Specimen container preparation */
  preparation?: t.TypeOf<primitives.R4.StringType>;
}

export interface SpecimenDefinitionTypeTestedContainerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Container material */
  material?: CodeableConceptOutputType;
  /** Kind of container associated with the kind of specimen */
  type?: CodeableConceptOutputType;
  /** Color of container cap */
  cap?: CodeableConceptOutputType;
  /** Container description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Container capacity */
  capacity?: QuantityOutputType;
  /** Minimum volume */
  minimumvolume?: QuantityOutputType | t.OutputOf<primitives.R4.StringType>;
  /** Additive associated with container */
  additive?: SpecimenDefinitionTypeTestedContainerAdditiveOutputType[];
  /** Specimen container preparation */
  preparation?: t.OutputOf<primitives.R4.StringType>;
}

export const SpecimenDefinitionTypeTestedContainer: t.RecursiveType<
  t.Type<
    SpecimenDefinitionTypeTestedContainer,
    SpecimenDefinitionTypeTestedContainerOutputType
  >,
  SpecimenDefinitionTypeTestedContainer,
  SpecimenDefinitionTypeTestedContainerOutputType
> = t.recursion<
  SpecimenDefinitionTypeTestedContainer,
  SpecimenDefinitionTypeTestedContainerOutputType
>("SpecimenDefinitionTypeTestedContainer", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additive associated with container */
        additive: t.array(SpecimenDefinitionTypeTestedContainerAdditive),
        /** Color of container cap */
        cap: CodeableConcept,
        /** Container capacity */
        capacity: Quantity,
        /** Container description */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Container material */
        material: CodeableConcept,
        /** Minimum volume */
        minimumvolume: t.union([Quantity, primitives.R4.string]),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Specimen container preparation */
        preparation: primitives.R4.string,
        /** Kind of container associated with the kind of specimen */
        type: CodeableConcept
      })
    ],
    "SpecimenDefinitionTypeTestedContainer"
  )
);

/**
 * Specimen in container intended for testing by lab
 */
export interface SpecimenDefinitionTypeTested {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Primary or secondary specimen */
  isDerived?: t.TypeOf<primitives.R4.BooleanType>;
  /** Type of intended specimen */
  type?: CodeableConcept;
  /** preferred | alternate */
  preference: t.TypeOf<primitives.R4.CodeType>;
  /** The specimen's container */
  container?: SpecimenDefinitionTypeTestedContainer;
  /** Specimen requirements */
  requirement?: t.TypeOf<primitives.R4.StringType>;
  /** Specimen retention time */
  retentionTime?: Duration;
  /** Rejection criterion */
  rejectionCriterion?: CodeableConcept[];
  /** Specimen handling before testing */
  handling?: SpecimenDefinitionTypeTestedHandling[];
}

export interface SpecimenDefinitionTypeTestedOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Primary or secondary specimen */
  isDerived?: t.OutputOf<primitives.R4.BooleanType>;
  /** Type of intended specimen */
  type?: CodeableConceptOutputType;
  /** preferred | alternate */
  preference: t.OutputOf<primitives.R4.CodeType>;
  /** The specimen's container */
  container?: SpecimenDefinitionTypeTestedContainerOutputType;
  /** Specimen requirements */
  requirement?: t.OutputOf<primitives.R4.StringType>;
  /** Specimen retention time */
  retentionTime?: DurationOutputType;
  /** Rejection criterion */
  rejectionCriterion?: CodeableConceptOutputType[];
  /** Specimen handling before testing */
  handling?: SpecimenDefinitionTypeTestedHandlingOutputType[];
}

export const SpecimenDefinitionTypeTested: t.RecursiveType<
  t.Type<SpecimenDefinitionTypeTested, SpecimenDefinitionTypeTestedOutputType>,
  SpecimenDefinitionTypeTested,
  SpecimenDefinitionTypeTestedOutputType
> = t.recursion<
  SpecimenDefinitionTypeTested,
  SpecimenDefinitionTypeTestedOutputType
>("SpecimenDefinitionTypeTested", () =>
  t.intersection(
    [
      t.type({
        /** preferred | alternate */
        preference: primitives.R4.code
      }),
      t.partial({
        /** The specimen's container */
        container: SpecimenDefinitionTypeTestedContainer,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Specimen handling before testing */
        handling: t.array(SpecimenDefinitionTypeTestedHandling),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Primary or secondary specimen */
        isDerived: primitives.R4.boolean,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Rejection criterion */
        rejectionCriterion: t.array(CodeableConcept),
        /** Specimen requirements */
        requirement: primitives.R4.string,
        /** Specimen retention time */
        retentionTime: Duration,
        /** Type of intended specimen */
        type: CodeableConcept
      })
    ],
    "SpecimenDefinitionTypeTested"
  )
);

/**
 * Kind of specimen
 */
export interface SpecimenDefinition {
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
  /** Business identifier of a kind of specimen */
  identifier?: Identifier;
  /** Kind of material to collect */
  typeCollected?: CodeableConcept;
  /** Patient preparation for collection */
  patientPreparation?: CodeableConcept[];
  /** Time aspect for collection */
  timeAspect?: t.TypeOf<primitives.R4.StringType>;
  /** Specimen collection procedure */
  collection?: CodeableConcept[];
  /** Specimen in container intended for testing by lab */
  typeTested?: SpecimenDefinitionTypeTested[];
}

export interface SpecimenDefinitionOutputType {
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
  /** Business identifier of a kind of specimen */
  identifier?: IdentifierOutputType;
  /** Kind of material to collect */
  typeCollected?: CodeableConceptOutputType;
  /** Patient preparation for collection */
  patientPreparation?: CodeableConceptOutputType[];
  /** Time aspect for collection */
  timeAspect?: t.OutputOf<primitives.R4.StringType>;
  /** Specimen collection procedure */
  collection?: CodeableConceptOutputType[];
  /** Specimen in container intended for testing by lab */
  typeTested?: SpecimenDefinitionTypeTestedOutputType[];
}

export const SpecimenDefinition: t.RecursiveType<
  t.Type<SpecimenDefinition, SpecimenDefinitionOutputType>,
  SpecimenDefinition,
  SpecimenDefinitionOutputType
> = t.recursion<SpecimenDefinition, SpecimenDefinitionOutputType>(
  "SpecimenDefinition",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Specimen collection procedure */
          collection: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifier of a kind of specimen */
          identifier: Identifier,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Patient preparation for collection */
          patientPreparation: t.array(CodeableConcept),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Time aspect for collection */
          timeAspect: primitives.R4.string,
          /** Kind of material to collect */
          typeCollected: CodeableConcept,
          /** Specimen in container intended for testing by lab */
          typeTested: t.array(SpecimenDefinitionTypeTested)
        })
      ],
      "SpecimenDefinition"
    )
);
