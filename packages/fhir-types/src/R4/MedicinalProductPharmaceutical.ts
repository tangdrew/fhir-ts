/**
 * MedicinalProductPharmaceutical Module
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
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A pharmaceutical product described in terms of its composition and dose form
 */
export interface MedicinalProductPharmaceutical {
  /** The type of resource */
  resourceType?: "MedicinalProductPharmaceutical";
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
  /** An identifier for the pharmaceutical medicinal product */
  identifier?: Identifier[];
  /** The administrable dose form, after necessary reconstitution */
  administrableDoseForm: CodeableConcept;
  /** Todo */
  unitOfPresentation?: CodeableConcept;
  /** Ingredient */
  ingredient?: Reference[];
  /** Accompanying device */
  device?: Reference[];
}
/**
 * A pharmaceutical product described in terms of its composition and dose form
 */
export const MedicinalProductPharmaceutical: t.Type<
  MedicinalProductPharmaceutical
> = t.recursion<MedicinalProductPharmaceutical>(
  "MedicinalProductPharmaceutical",
  () =>
    t.intersection([
      t.type({
        /** The administrable dose form, after necessary reconstitution */
        administrableDoseForm: CodeableConcept
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("MedicinalProductPharmaceutical"),
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
        /** An identifier for the pharmaceutical medicinal product */
        identifier: t.array(Identifier),
        /** Todo */
        unitOfPresentation: CodeableConcept,
        /** Ingredient */
        ingredient: t.array(Reference),
        /** Accompanying device */
        device: t.array(Reference)
      })
    ])
);

/**
 * Characteristics e.g. a products onset of action
 */
export interface MedicinalProductPharmaceuticalCharacteristics {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A coded characteristic */
  code: CodeableConcept;
  /** The status of characteristic e.g. assigned or pending */
  status?: CodeableConcept;
}
/**
 * Characteristics e.g. a products onset of action
 */
export const MedicinalProductPharmaceuticalCharacteristics: t.Type<
  MedicinalProductPharmaceuticalCharacteristics
> = t.recursion<MedicinalProductPharmaceuticalCharacteristics>(
  "MedicinalProductPharmaceuticalCharacteristics",
  () =>
    t.intersection([
      t.type({
        /** A coded characteristic */
        code: CodeableConcept
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
        /** The status of characteristic e.g. assigned or pending */
        status: CodeableConcept
      })
    ])
);

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministration {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded expression for the route */
  code: CodeableConcept;
  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement */
  firstDose?: Quantity;
  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement */
  maxSingleDose?: Quantity;
  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation */
  maxDosePerDay?: Quantity;
  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation */
  maxDosePerTreatmentPeriod?: Ratio;
  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation */
  maxTreatmentPeriod?: Duration;
}
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body
 */
export const MedicinalProductPharmaceuticalRouteOfAdministration: t.Type<
  MedicinalProductPharmaceuticalRouteOfAdministration
> = t.recursion<MedicinalProductPharmaceuticalRouteOfAdministration>(
  "MedicinalProductPharmaceuticalRouteOfAdministration",
  () =>
    t.intersection([
      t.type({
        /** Coded expression for the route */
        code: CodeableConcept
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
        /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement */
        firstDose: Quantity,
        /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement */
        maxSingleDose: Quantity,
        /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation */
        maxDosePerDay: Quantity,
        /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation */
        maxDosePerTreatmentPeriod: Ratio,
        /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation */
        maxTreatmentPeriod: Duration
      })
    ])
);

/**
 * A species for which this route applies
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded expression for the species */
  code: CodeableConcept;
}
/**
 * A species for which this route applies
 */
export const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies: t.Type<
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
> = t.recursion<
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
>("MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies", () =>
  t.intersection([
    t.type({
      /** Coded expression for the species */
      code: CodeableConcept
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
 * A species specific time during which consumption of animal product is not appropriate
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
  tissue: CodeableConcept;
  /** A value for the time */
  value: Quantity;
  /** Extra information about the withdrawal period */
  supportingInformation?: string;
  /** Extension of supportingInformation element */
  _supportingInformation?: Element;
}
/**
 * A species specific time during which consumption of animal product is not appropriate
 */
export const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod: t.Type<
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
> = t.recursion<
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
>(
  "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod",
  () =>
    t.intersection([
      t.type({
        /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
        tissue: CodeableConcept,
        /** A value for the time */
        value: Quantity
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
        /** Extra information about the withdrawal period */
        supportingInformation: primitives.R4.string,
        /** Extension of supportingInformation element */
        _supportingInformation: Element
      })
    ])
);
