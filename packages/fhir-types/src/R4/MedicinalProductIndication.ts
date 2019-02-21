/**
 * MedicinalProductIndication Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Population, PopulationOutputType } from "./Population";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export interface MedicinalProductIndicationOtherTherapy {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of relationship between the medicinal product indication or contraindication and another therapy */
  therapyRelationshipType: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
  medication: CodeableConcept | Reference;
}

export interface MedicinalProductIndicationOtherTherapyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of relationship between the medicinal product indication or contraindication and another therapy */
  therapyRelationshipType: CodeableConceptOutputType;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
  medication: CodeableConceptOutputType | ReferenceOutputType;
}

export const MedicinalProductIndicationOtherTherapy: t.RecursiveType<
  t.Type<
    MedicinalProductIndicationOtherTherapy,
    MedicinalProductIndicationOtherTherapyOutputType
  >,
  MedicinalProductIndicationOtherTherapy,
  MedicinalProductIndicationOtherTherapyOutputType
> = t.recursion<
  MedicinalProductIndicationOtherTherapy,
  MedicinalProductIndicationOtherTherapyOutputType
>("MedicinalProductIndicationOtherTherapy", () =>
  t.intersection(
    [
      t.type({
        /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
        medication: t.union([CodeableConcept, Reference]),
        /** The type of relationship between the medicinal product indication or contraindication and another therapy */
        therapyRelationshipType: CodeableConcept
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
    "MedicinalProductIndicationOtherTherapy"
  )
);

/**
 * MedicinalProductIndication
 */
export interface MedicinalProductIndication {
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
  /** The disease, symptom or procedure that is the indication for treatment */
  diseaseSymptomProcedure?: CodeableConcept;
  /** The status of the disease or symptom for which the indication applies */
  diseaseStatus?: CodeableConcept;
  /** Comorbidity (concurrent condition) or co-infection as part of the indication */
  comorbidity?: CodeableConcept[];
  /** The intended effect, aim or strategy to be achieved by the indication */
  intendedEffect?: CodeableConcept;
  /** Timing or duration information as part of the indication */
  duration?: Quantity;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: MedicinalProductIndicationOtherTherapy[];
  /** Describe the undesirable effects of the medicinal product */
  undesirableEffect?: Reference[];
  /** The population group to which this applies */
  population?: Population[];
}

export interface MedicinalProductIndicationOutputType {
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
  /** The disease, symptom or procedure that is the indication for treatment */
  diseaseSymptomProcedure?: CodeableConceptOutputType;
  /** The status of the disease or symptom for which the indication applies */
  diseaseStatus?: CodeableConceptOutputType;
  /** Comorbidity (concurrent condition) or co-infection as part of the indication */
  comorbidity?: CodeableConceptOutputType[];
  /** The intended effect, aim or strategy to be achieved by the indication */
  intendedEffect?: CodeableConceptOutputType;
  /** Timing or duration information as part of the indication */
  duration?: QuantityOutputType;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: MedicinalProductIndicationOtherTherapyOutputType[];
  /** Describe the undesirable effects of the medicinal product */
  undesirableEffect?: ReferenceOutputType[];
  /** The population group to which this applies */
  population?: PopulationOutputType[];
}

export const MedicinalProductIndication: t.RecursiveType<
  t.Type<MedicinalProductIndication, MedicinalProductIndicationOutputType>,
  MedicinalProductIndication,
  MedicinalProductIndicationOutputType
> = t.recursion<
  MedicinalProductIndication,
  MedicinalProductIndicationOutputType
>("MedicinalProductIndication", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Comorbidity (concurrent condition) or co-infection as part of the indication */
        comorbidity: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The status of the disease or symptom for which the indication applies */
        diseaseStatus: CodeableConcept,
        /** The disease, symptom or procedure that is the indication for treatment */
        diseaseSymptomProcedure: CodeableConcept,
        /** Timing or duration information as part of the indication */
        duration: Quantity,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** The intended effect, aim or strategy to be achieved by the indication */
        intendedEffect: CodeableConcept,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
        otherTherapy: t.array(MedicinalProductIndicationOtherTherapy),
        /** The population group to which this applies */
        population: t.array(Population),
        /** The medication for which this is an indication */
        subject: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Describe the undesirable effects of the medicinal product */
        undesirableEffect: t.array(Reference)
      })
    ],
    "MedicinalProductIndication"
  )
);
