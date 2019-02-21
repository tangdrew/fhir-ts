/**
 * MedicinalProductPharmaceutical Module
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
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A species specific time during which consumption of animal product is not appropriate
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
  tissue: CodeableConcept;
  /** A value for the time */
  value: Quantity;
  /** Extra information about the withdrawal period */
  supportingInformation?: t.TypeOf<primitives.R4.StringType>;
}

export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
  tissue: CodeableConceptOutputType;
  /** A value for the time */
  value: QuantityOutputType;
  /** Extra information about the withdrawal period */
  supportingInformation?: t.OutputOf<primitives.R4.StringType>;
}

export const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod: t.RecursiveType<
  t.Type<
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodOutputType
  >,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodOutputType
> = t.recursion<
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodOutputType
>(
  "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod",
  () =>
    t.intersection(
      [
        t.type({
          /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
          tissue: CodeableConcept,
          /** A value for the time */
          value: Quantity
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Extra information about the withdrawal period */
          supportingInformation: primitives.R4.string
        })
      ],
      "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod"
    )
);

/**
 * A species for which this route applies
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Coded expression for the species */
  code: CodeableConcept;
  /** A species specific time during which consumption of animal product is not appropriate */
  withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];
}

export interface MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Coded expression for the species */
  code: CodeableConceptOutputType;
  /** A species specific time during which consumption of animal product is not appropriate */
  withdrawalPeriod?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriodOutputType[];
}

export const MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies: t.RecursiveType<
  t.Type<
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesOutputType
  >,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesOutputType
> = t.recursion<
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies,
  MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesOutputType
>("MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies", () =>
  t.intersection(
    [
      t.type({
        /** Coded expression for the species */
        code: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** A species specific time during which consumption of animal product is not appropriate */
        withdrawalPeriod: t.array(
          MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod
        )
      })
    ],
    "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies"
  )
);

/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body
 */
export interface MedicinalProductPharmaceuticalRouteOfAdministration {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  /** A species for which this route applies */
  targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies[];
}

export interface MedicinalProductPharmaceuticalRouteOfAdministrationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Coded expression for the route */
  code: CodeableConceptOutputType;
  /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement */
  firstDose?: QuantityOutputType;
  /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement */
  maxSingleDose?: QuantityOutputType;
  /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation */
  maxDosePerDay?: QuantityOutputType;
  /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation */
  maxDosePerTreatmentPeriod?: RatioOutputType;
  /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation */
  maxTreatmentPeriod?: DurationOutputType;
  /** A species for which this route applies */
  targetSpecies?: MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesOutputType[];
}

export const MedicinalProductPharmaceuticalRouteOfAdministration: t.RecursiveType<
  t.Type<
    MedicinalProductPharmaceuticalRouteOfAdministration,
    MedicinalProductPharmaceuticalRouteOfAdministrationOutputType
  >,
  MedicinalProductPharmaceuticalRouteOfAdministration,
  MedicinalProductPharmaceuticalRouteOfAdministrationOutputType
> = t.recursion<
  MedicinalProductPharmaceuticalRouteOfAdministration,
  MedicinalProductPharmaceuticalRouteOfAdministrationOutputType
>("MedicinalProductPharmaceuticalRouteOfAdministration", () =>
  t.intersection(
    [
      t.type({
        /** Coded expression for the route */
        code: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement */
        firstDose: Quantity,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation */
        maxDosePerDay: Quantity,
        /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation */
        maxDosePerTreatmentPeriod: Ratio,
        /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement */
        maxSingleDose: Quantity,
        /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation */
        maxTreatmentPeriod: Duration,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** A species for which this route applies */
        targetSpecies: t.array(
          MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies
        )
      })
    ],
    "MedicinalProductPharmaceuticalRouteOfAdministration"
  )
);

/**
 * Characteristics e.g. a products onset of action
 */
export interface MedicinalProductPharmaceuticalCharacteristics {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** A coded characteristic */
  code: CodeableConcept;
  /** The status of characteristic e.g. assigned or pending */
  status?: CodeableConcept;
}

export interface MedicinalProductPharmaceuticalCharacteristicsOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** A coded characteristic */
  code: CodeableConceptOutputType;
  /** The status of characteristic e.g. assigned or pending */
  status?: CodeableConceptOutputType;
}

export const MedicinalProductPharmaceuticalCharacteristics: t.RecursiveType<
  t.Type<
    MedicinalProductPharmaceuticalCharacteristics,
    MedicinalProductPharmaceuticalCharacteristicsOutputType
  >,
  MedicinalProductPharmaceuticalCharacteristics,
  MedicinalProductPharmaceuticalCharacteristicsOutputType
> = t.recursion<
  MedicinalProductPharmaceuticalCharacteristics,
  MedicinalProductPharmaceuticalCharacteristicsOutputType
>("MedicinalProductPharmaceuticalCharacteristics", () =>
  t.intersection(
    [
      t.type({
        /** A coded characteristic */
        code: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The status of characteristic e.g. assigned or pending */
        status: CodeableConcept
      })
    ],
    "MedicinalProductPharmaceuticalCharacteristics"
  )
);

/**
 * A pharmaceutical product described in terms of its composition and dose form
 */
export interface MedicinalProductPharmaceutical {
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
  /** Characteristics e.g. a products onset of action */
  characteristics?: MedicinalProductPharmaceuticalCharacteristics[];
  /** The path by which the pharmaceutical product is taken into or makes contact with the body */
  routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministration[];
}

export interface MedicinalProductPharmaceuticalOutputType {
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
  /** An identifier for the pharmaceutical medicinal product */
  identifier?: IdentifierOutputType[];
  /** The administrable dose form, after necessary reconstitution */
  administrableDoseForm: CodeableConceptOutputType;
  /** Todo */
  unitOfPresentation?: CodeableConceptOutputType;
  /** Ingredient */
  ingredient?: ReferenceOutputType[];
  /** Accompanying device */
  device?: ReferenceOutputType[];
  /** Characteristics e.g. a products onset of action */
  characteristics?: MedicinalProductPharmaceuticalCharacteristicsOutputType[];
  /** The path by which the pharmaceutical product is taken into or makes contact with the body */
  routeOfAdministration: MedicinalProductPharmaceuticalRouteOfAdministrationOutputType[];
}

export const MedicinalProductPharmaceutical: t.RecursiveType<
  t.Type<
    MedicinalProductPharmaceutical,
    MedicinalProductPharmaceuticalOutputType
  >,
  MedicinalProductPharmaceutical,
  MedicinalProductPharmaceuticalOutputType
> = t.recursion<
  MedicinalProductPharmaceutical,
  MedicinalProductPharmaceuticalOutputType
>("MedicinalProductPharmaceutical", () =>
  t.intersection(
    [
      t.type({
        /** The administrable dose form, after necessary reconstitution */
        administrableDoseForm: CodeableConcept,
        /** The path by which the pharmaceutical product is taken into or makes contact with the body */
        routeOfAdministration: t.array(
          MedicinalProductPharmaceuticalRouteOfAdministration
        )
      }),
      t.partial({
        /** Characteristics e.g. a products onset of action */
        characteristics: t.array(MedicinalProductPharmaceuticalCharacteristics),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Accompanying device */
        device: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** An identifier for the pharmaceutical medicinal product */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Ingredient */
        ingredient: t.array(Reference),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Todo */
        unitOfPresentation: CodeableConcept
      })
    ],
    "MedicinalProductPharmaceutical"
  )
);
