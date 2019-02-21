/**
 * MedicinalProductContraindication Module
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
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export interface MedicinalProductContraindicationOtherTherapy {
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

export interface MedicinalProductContraindicationOtherTherapyOutputType {
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

export const MedicinalProductContraindicationOtherTherapy: t.RecursiveType<
  t.Type<
    MedicinalProductContraindicationOtherTherapy,
    MedicinalProductContraindicationOtherTherapyOutputType
  >,
  MedicinalProductContraindicationOtherTherapy,
  MedicinalProductContraindicationOtherTherapyOutputType
> = t.recursion<
  MedicinalProductContraindicationOtherTherapy,
  MedicinalProductContraindicationOtherTherapyOutputType
>("MedicinalProductContraindicationOtherTherapy", () =>
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
    "MedicinalProductContraindicationOtherTherapy"
  )
);

/**
 * MedicinalProductContraindication
 */
export interface MedicinalProductContraindication {
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
  /** The disease, symptom or procedure for the contraindication */
  disease?: CodeableConcept;
  /** The status of the disease or symptom for the contraindication */
  diseaseStatus?: CodeableConcept;
  /** A comorbidity (concurrent condition) or coinfection */
  comorbidity?: CodeableConcept[];
  /** Information about the use of the medicinal product in relation to other therapies as part of the indication */
  therapeuticIndication?: Reference[];
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: MedicinalProductContraindicationOtherTherapy[];
  /** The population group to which this applies */
  population?: Population[];
}

export interface MedicinalProductContraindicationOutputType {
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
  /** The disease, symptom or procedure for the contraindication */
  disease?: CodeableConceptOutputType;
  /** The status of the disease or symptom for the contraindication */
  diseaseStatus?: CodeableConceptOutputType;
  /** A comorbidity (concurrent condition) or coinfection */
  comorbidity?: CodeableConceptOutputType[];
  /** Information about the use of the medicinal product in relation to other therapies as part of the indication */
  therapeuticIndication?: ReferenceOutputType[];
  /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
  otherTherapy?: MedicinalProductContraindicationOtherTherapyOutputType[];
  /** The population group to which this applies */
  population?: PopulationOutputType[];
}

export const MedicinalProductContraindication: t.RecursiveType<
  t.Type<
    MedicinalProductContraindication,
    MedicinalProductContraindicationOutputType
  >,
  MedicinalProductContraindication,
  MedicinalProductContraindicationOutputType
> = t.recursion<
  MedicinalProductContraindication,
  MedicinalProductContraindicationOutputType
>("MedicinalProductContraindication", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** A comorbidity (concurrent condition) or coinfection */
        comorbidity: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The disease, symptom or procedure for the contraindication */
        disease: CodeableConcept,
        /** The status of the disease or symptom for the contraindication */
        diseaseStatus: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
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
        /** Information about the use of the medicinal product in relation to other therapies described as part of the indication */
        otherTherapy: t.array(MedicinalProductContraindicationOtherTherapy),
        /** The population group to which this applies */
        population: t.array(Population),
        /** The medication for which this is an indication */
        subject: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Information about the use of the medicinal product in relation to other therapies as part of the indication */
        therapeuticIndication: t.array(Reference)
      })
    ],
    "MedicinalProductContraindication"
  )
);
