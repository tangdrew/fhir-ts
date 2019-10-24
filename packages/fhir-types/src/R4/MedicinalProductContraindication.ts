/**
 * MedicinalProductContraindication Module
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
 * MedicinalProductContraindication
 */
export interface MedicinalProductContraindication {
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
  /** The disease, symptom or procedure for the contraindication */
  disease?: CodeableConcept;
  /** The status of the disease or symptom for the contraindication */
  diseaseStatus?: CodeableConcept;
  /** A comorbidity (concurrent condition) or coinfection */
  comorbidity?: CodeableConcept[];
  /** Information about the use of the medicinal product in relation to other therapies as part of the indication */
  therapeuticIndication?: Reference[];
  /** The population group to which this applies */
  population?: Population[];
}
/**
 * MedicinalProductContraindication
 */
export const MedicinalProductContraindication: t.Type<
  MedicinalProductContraindication
> = t.recursion<MedicinalProductContraindication>(
  "MedicinalProductContraindication",
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
        /** The disease, symptom or procedure for the contraindication */
        disease: CodeableConcept,
        /** The status of the disease or symptom for the contraindication */
        diseaseStatus: CodeableConcept,
        /** A comorbidity (concurrent condition) or coinfection */
        comorbidity: t.array(CodeableConcept),
        /** Information about the use of the medicinal product in relation to other therapies as part of the indication */
        therapeuticIndication: t.array(Reference),
        /** The population group to which this applies */
        population: t.array(Population)
      })
    ])
);

/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export interface MedicinalProductContraindicationOtherTherapy {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of relationship between the medicinal product indication or contraindication and another therapy */
  therapyRelationshipType: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
  medicationCodeableConcept: CodeableConcept;
  /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
  medicationReference: Reference;
}
/**
 * Information about the use of the medicinal product in relation to other therapies described as part of the indication
 */
export const MedicinalProductContraindicationOtherTherapy: t.Type<
  MedicinalProductContraindicationOtherTherapy
> = t.recursion<MedicinalProductContraindicationOtherTherapy>(
  "MedicinalProductContraindicationOtherTherapy",
  () =>
    t.intersection([
      t.type({
        /** The type of relationship between the medicinal product indication or contraindication and another therapy */
        therapyRelationshipType: CodeableConcept,
        /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
        medicationCodeableConcept: CodeableConcept,
        /** Reference to a specific medication (active substance, medicinal product or class of products) as part of an indication or contraindication */
        medicationReference: Reference
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
