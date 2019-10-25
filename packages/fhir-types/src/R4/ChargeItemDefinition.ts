/**
 * ChargeItemDefinition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * Definition of properties and rules about how the price and the applicability of a ChargeItem can be determined
 */
export interface ChargeItemDefinition {
  /** The type of resource */
  resourceType?: "ChargeItemDefinition";
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
  /** Canonical identifier for this charge item definition, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the charge item definition */
  identifier?: Identifier[];
  /** Business version of the charge item definition */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this charge item definition (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Underlying externally-defined charge item definition */
  derivedFromUri?: primitives.R4.uri[];
  /** Extension of derivedFromUri element */
  _derivedFromUri?: Element[];
  /** A larger definition of which this particular definition is a component or step */
  partOf?: primitives.R4.canonical[];
  /** Extension of partOf element */
  _partOf?: Element[];
  /** Completed or terminated request(s) whose function is taken by this new request */
  replaces?: primitives.R4.canonical[];
  /** Extension of replaces element */
  _replaces?: Element[];
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Date last changed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the charge item definition */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for charge item definition (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** When the charge item definition was approved by publisher */
  approvalDate?: primitives.R4.date;
  /** Extension of approvalDate element */
  _approvalDate?: Element;
  /** When the charge item definition was last reviewed */
  lastReviewDate?: primitives.R4.date;
  /** Extension of lastReviewDate element */
  _lastReviewDate?: Element;
  /** When the charge item definition is expected to be used */
  effectivePeriod?: Period;
  /** Billing codes or product types this definition applies to */
  code?: CodeableConcept;
  /** Instances this definition applies to */
  instance?: Reference[];
}
/**
 * Definition of properties and rules about how the price and the applicability of a ChargeItem can be determined
 */
export const ChargeItemDefinition: t.Type<ChargeItemDefinition> = t.recursion<
  ChargeItemDefinition
>("ChargeItemDefinition", () =>
  t.intersection([
    t.type({
      /** Canonical identifier for this charge item definition, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** draft | active | retired | unknown */
      status: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ChargeItemDefinition"),
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
      /** Extension of url element */
      _url: Element,
      /** Additional identifier for the charge item definition */
      identifier: t.array(Identifier),
      /** Business version of the charge item definition */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Name for this charge item definition (human friendly) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Underlying externally-defined charge item definition */
      derivedFromUri: t.array(primitives.R4.uri),
      /** Extension of derivedFromUri element */
      _derivedFromUri: t.array(Element),
      /** A larger definition of which this particular definition is a component or step */
      partOf: t.array(primitives.R4.canonical),
      /** Extension of partOf element */
      _partOf: t.array(Element),
      /** Completed or terminated request(s) whose function is taken by this new request */
      replaces: t.array(primitives.R4.canonical),
      /** Extension of replaces element */
      _replaces: t.array(Element),
      /** Extension of status element */
      _status: Element,
      /** For testing purposes, not real usage */
      experimental: primitives.R4.boolean,
      /** Extension of experimental element */
      _experimental: Element,
      /** Date last changed */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Name of the publisher (organization or individual) */
      publisher: primitives.R4.string,
      /** Extension of publisher element */
      _publisher: Element,
      /** Contact details for the publisher */
      contact: t.array(ContactDetail),
      /** Natural language description of the charge item definition */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for charge item definition (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** When the charge item definition was approved by publisher */
      approvalDate: primitives.R4.date,
      /** Extension of approvalDate element */
      _approvalDate: Element,
      /** When the charge item definition was last reviewed */
      lastReviewDate: primitives.R4.date,
      /** Extension of lastReviewDate element */
      _lastReviewDate: Element,
      /** When the charge item definition is expected to be used */
      effectivePeriod: Period,
      /** Billing codes or product types this definition applies to */
      code: CodeableConcept,
      /** Instances this definition applies to */
      instance: t.array(Reference)
    })
  ])
);

/**
 * Whether or not the billing code is applicable
 */
export interface ChargeItemDefinitionApplicability {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Natural language description of the condition */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Language of the expression */
  language?: string;
  /** Extension of language element */
  _language?: Element;
  /** Boolean-valued expression */
  expression?: string;
  /** Extension of expression element */
  _expression?: Element;
}
/**
 * Whether or not the billing code is applicable
 */
export const ChargeItemDefinitionApplicability: t.Type<
  ChargeItemDefinitionApplicability
> = t.recursion<ChargeItemDefinitionApplicability>(
  "ChargeItemDefinitionApplicability",
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
        /** Natural language description of the condition */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Language of the expression */
        language: primitives.R4.string,
        /** Extension of language element */
        _language: Element,
        /** Boolean-valued expression */
        expression: primitives.R4.string,
        /** Extension of expression element */
        _expression: Element
      })
    ])
);

/**
 * Group of properties which are applicable under the same conditions
 */
export interface ChargeItemDefinitionPropertyGroup {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Conditions under which the priceComponent is applicable */
  applicability?: ChargeItemDefinitionApplicability[];
}
/**
 * Group of properties which are applicable under the same conditions
 */
export const ChargeItemDefinitionPropertyGroup: t.Type<
  ChargeItemDefinitionPropertyGroup
> = t.recursion<ChargeItemDefinitionPropertyGroup>(
  "ChargeItemDefinitionPropertyGroup",
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
        /** Conditions under which the priceComponent is applicable */
        applicability: t.array(ChargeItemDefinitionApplicability)
      })
    ])
);

/**
 * Components of total line item price
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** base | surcharge | deduction | discount | tax | informational */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Code identifying the specific component */
  code?: CodeableConcept;
  /** Factor used for calculating this component */
  factor?: primitives.R4.decimal;
  /** Extension of factor element */
  _factor?: Element;
  /** Monetary amount associated with this component */
  amount?: Money;
}
/**
 * Components of total line item price
 */
export const ChargeItemDefinitionPropertyGroupPriceComponent: t.Type<
  ChargeItemDefinitionPropertyGroupPriceComponent
> = t.recursion<ChargeItemDefinitionPropertyGroupPriceComponent>(
  "ChargeItemDefinitionPropertyGroupPriceComponent",
  () =>
    t.intersection([
      t.type({
        /** base | surcharge | deduction | discount | tax | informational */
        type: primitives.R4.code
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
        /** Extension of type element */
        _type: Element,
        /** Code identifying the specific component */
        code: CodeableConcept,
        /** Factor used for calculating this component */
        factor: primitives.R4.decimal,
        /** Extension of factor element */
        _factor: Element,
        /** Monetary amount associated with this component */
        amount: Money
      })
    ])
);
