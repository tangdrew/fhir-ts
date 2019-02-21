/**
 * ChargeItemDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Components of total line item price
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** base | surcharge | deduction | discount | tax | informational */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Code identifying the specific component */
  code?: CodeableConcept;
  /** Factor used for calculating this component */
  factor?: t.TypeOf<primitives.R4.DecimalType>;
  /** Monetary amount associated with this component */
  amount?: Money;
}

export interface ChargeItemDefinitionPropertyGroupPriceComponentOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** base | surcharge | deduction | discount | tax | informational */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Code identifying the specific component */
  code?: CodeableConceptOutputType;
  /** Factor used for calculating this component */
  factor?: t.OutputOf<primitives.R4.DecimalType>;
  /** Monetary amount associated with this component */
  amount?: MoneyOutputType;
}

export const ChargeItemDefinitionPropertyGroupPriceComponent: t.RecursiveType<
  t.Type<
    ChargeItemDefinitionPropertyGroupPriceComponent,
    ChargeItemDefinitionPropertyGroupPriceComponentOutputType
  >,
  ChargeItemDefinitionPropertyGroupPriceComponent,
  ChargeItemDefinitionPropertyGroupPriceComponentOutputType
> = t.recursion<
  ChargeItemDefinitionPropertyGroupPriceComponent,
  ChargeItemDefinitionPropertyGroupPriceComponentOutputType
>("ChargeItemDefinitionPropertyGroupPriceComponent", () =>
  t.intersection(
    [
      t.type({
        /** base | surcharge | deduction | discount | tax | informational */
        type: primitives.R4.code
      }),
      t.partial({
        /** Monetary amount associated with this component */
        amount: Money,
        /** Code identifying the specific component */
        code: CodeableConcept,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Factor used for calculating this component */
        factor: primitives.R4.decimal,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ChargeItemDefinitionPropertyGroupPriceComponent"
  )
);

/**
 * Group of properties which are applicable under the same conditions
 */
export interface ChargeItemDefinitionPropertyGroup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Conditions under which the priceComponent is applicable */
  applicability?: ChargeItemDefinitionApplicability[];
  /** Components of total line item price */
  priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponent[];
}

export interface ChargeItemDefinitionPropertyGroupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Conditions under which the priceComponent is applicable */
  applicability?: ChargeItemDefinitionApplicabilityOutputType[];
  /** Components of total line item price */
  priceComponent?: ChargeItemDefinitionPropertyGroupPriceComponentOutputType[];
}

export const ChargeItemDefinitionPropertyGroup: t.RecursiveType<
  t.Type<
    ChargeItemDefinitionPropertyGroup,
    ChargeItemDefinitionPropertyGroupOutputType
  >,
  ChargeItemDefinitionPropertyGroup,
  ChargeItemDefinitionPropertyGroupOutputType
> = t.recursion<
  ChargeItemDefinitionPropertyGroup,
  ChargeItemDefinitionPropertyGroupOutputType
>("ChargeItemDefinitionPropertyGroup", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Conditions under which the priceComponent is applicable */
        applicability: t.array(ChargeItemDefinitionApplicability),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Components of total line item price */
        priceComponent: t.array(ChargeItemDefinitionPropertyGroupPriceComponent)
      })
    ],
    "ChargeItemDefinitionPropertyGroup"
  )
);

/**
 * Whether or not the billing code is applicable
 */
export interface ChargeItemDefinitionApplicability {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Natural language description of the condition */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Language of the expression */
  language?: t.TypeOf<primitives.R4.StringType>;
  /** Boolean-valued expression */
  expression?: t.TypeOf<primitives.R4.StringType>;
}

export interface ChargeItemDefinitionApplicabilityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Natural language description of the condition */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Language of the expression */
  language?: t.OutputOf<primitives.R4.StringType>;
  /** Boolean-valued expression */
  expression?: t.OutputOf<primitives.R4.StringType>;
}

export const ChargeItemDefinitionApplicability: t.RecursiveType<
  t.Type<
    ChargeItemDefinitionApplicability,
    ChargeItemDefinitionApplicabilityOutputType
  >,
  ChargeItemDefinitionApplicability,
  ChargeItemDefinitionApplicabilityOutputType
> = t.recursion<
  ChargeItemDefinitionApplicability,
  ChargeItemDefinitionApplicabilityOutputType
>("ChargeItemDefinitionApplicability", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Natural language description of the condition */
        description: primitives.R4.string,
        /** Boolean-valued expression */
        expression: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Language of the expression */
        language: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ChargeItemDefinitionApplicability"
  )
);

/**
 * Definition of properties and rules about how the price and the applicability of a ChargeItem can be determined
 */
export interface ChargeItemDefinition {
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
  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the charge item definition */
  identifier?: Identifier[];
  /** Business version of the charge item definition */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this charge item definition (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Underlying externally-defined charge item definition */
  derivedFromUri?: t.TypeOf<primitives.R4.URIType>[];
  /** A larger definition of which this particular definition is a component or step */
  partOf?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Completed or terminated request(s) whose function is taken by this new request */
  replaces?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the charge item definition */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for charge item definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** When the charge item definition was approved by publisher */
  approvalDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the charge item definition was last reviewed */
  lastReviewDate?: t.TypeOf<primitives.R4.DateType>;
  /** When the charge item definition is expected to be used */
  effectivePeriod?: Period;
  /** Billing codes or product types this definition applies to */
  code?: CodeableConcept;
  /** Instances this definition applies to */
  instance?: Reference[];
  /** Whether or not the billing code is applicable */
  applicability?: ChargeItemDefinitionApplicability[];
  /** Group of properties which are applicable under the same conditions */
  propertyGroup?: ChargeItemDefinitionPropertyGroup[];
}

export interface ChargeItemDefinitionOutputType {
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
  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the charge item definition */
  identifier?: IdentifierOutputType[];
  /** Business version of the charge item definition */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this charge item definition (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Underlying externally-defined charge item definition */
  derivedFromUri?: t.OutputOf<primitives.R4.URIType>[];
  /** A larger definition of which this particular definition is a component or step */
  partOf?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Completed or terminated request(s) whose function is taken by this new request */
  replaces?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the charge item definition */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for charge item definition (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** When the charge item definition was approved by publisher */
  approvalDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the charge item definition was last reviewed */
  lastReviewDate?: t.OutputOf<primitives.R4.DateType>;
  /** When the charge item definition is expected to be used */
  effectivePeriod?: PeriodOutputType;
  /** Billing codes or product types this definition applies to */
  code?: CodeableConceptOutputType;
  /** Instances this definition applies to */
  instance?: ReferenceOutputType[];
  /** Whether or not the billing code is applicable */
  applicability?: ChargeItemDefinitionApplicabilityOutputType[];
  /** Group of properties which are applicable under the same conditions */
  propertyGroup?: ChargeItemDefinitionPropertyGroupOutputType[];
}

export const ChargeItemDefinition: t.RecursiveType<
  t.Type<ChargeItemDefinition, ChargeItemDefinitionOutputType>,
  ChargeItemDefinition,
  ChargeItemDefinitionOutputType
> = t.recursion<ChargeItemDefinition, ChargeItemDefinitionOutputType>(
  "ChargeItemDefinition",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** Canonical identifier for this charge item definition, represented as a URI (globally unique) */
          url: primitives.R4.uri
        }),
        t.partial({
          /** Whether or not the billing code is applicable */
          applicability: t.array(ChargeItemDefinitionApplicability),
          /** When the charge item definition was approved by publisher */
          approvalDate: primitives.R4.date,
          /** Billing codes or product types this definition applies to */
          code: CodeableConcept,
          /** Contact details for the publisher */
          contact: t.array(ContactDetail),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Use and/or publishing restrictions */
          copyright: primitives.R4.markdown,
          /** Date last changed */
          date: primitives.R4.dateTime,
          /** Underlying externally-defined charge item definition */
          derivedFromUri: t.array(primitives.R4.uri),
          /** Natural language description of the charge item definition */
          description: primitives.R4.markdown,
          /** When the charge item definition is expected to be used */
          effectivePeriod: Period,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Additional identifier for the charge item definition */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Instances this definition applies to */
          instance: t.array(Reference),
          /** Intended jurisdiction for charge item definition (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** When the charge item definition was last reviewed */
          lastReviewDate: primitives.R4.date,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** A larger definition of which this particular definition is a component or step */
          partOf: t.array(primitives.R4.canonical),
          /** Group of properties which are applicable under the same conditions */
          propertyGroup: t.array(ChargeItemDefinitionPropertyGroup),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Completed or terminated request(s) whose function is taken by this new request */
          replaces: t.array(primitives.R4.canonical),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this charge item definition (human friendly) */
          title: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the charge item definition */
          version: primitives.R4.string
        })
      ],
      "ChargeItemDefinition"
    )
);
