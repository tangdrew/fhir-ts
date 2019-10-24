/**
 * ChargeItem Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Money } from "./Money";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Item containing charge code(s) associated with the provision of healthcare provider products
 */
export interface ChargeItem {
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
  /** Business Identifier for item */
  identifier?: Identifier[];
  /** Defining information about the code of this charge item */
  definitionUri?: primitives.R4.uri[];
  /** Extension of definitionUri element */
  _definitionUri?: Element[];
  /** Resource defining the code of this ChargeItem */
  definitionCanonical?: primitives.R4.canonical[];
  /** Extension of definitionCanonical element */
  _definitionCanonical?: Element[];
  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Part of referenced ChargeItem */
  partOf?: Reference[];
  /** A code that identifies the charge, like a billing code */
  code: CodeableConcept;
  /** Individual service was done for/to */
  subject: Reference;
  /** Encounter / Episode associated with event */
  context?: Reference;
  /** When the charged service was applied */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When the charged service was applied */
  occurrencePeriod?: Period;
  /** When the charged service was applied */
  occurrenceTiming?: Timing;
  /** Organization providing the charged service */
  performingOrganization?: Reference;
  /** Organization requesting the charged service */
  requestingOrganization?: Reference;
  /** Organization that has ownership of the (potential, future) revenue */
  costCenter?: Reference;
  /** Quantity of which the charge item has been serviced */
  quantity?: Quantity;
  /** Anatomical location, if relevant */
  bodysite?: CodeableConcept[];
  /** Factor overriding the associated rules */
  factorOverride?: primitives.R4.decimal;
  /** Extension of factorOverride element */
  _factorOverride?: Element;
  /** Price overriding the associated rules */
  priceOverride?: Money;
  /** Reason for overriding the list price/factor */
  overrideReason?: string;
  /** Extension of overrideReason element */
  _overrideReason?: Element;
  /** Individual who was entering */
  enterer?: Reference;
  /** Date the charge item was entered */
  enteredDate?: primitives.R4.dateTime;
  /** Extension of enteredDate element */
  _enteredDate?: Element;
  /** Why was the charged  service rendered? */
  reason?: CodeableConcept[];
  /** Which rendered service is being charged? */
  service?: Reference[];
  /** Product charged */
  productReference?: Reference;
  /** Product charged */
  productCodeableConcept?: CodeableConcept;
  /** Account to place this charge */
  account?: Reference[];
  /** Comments made about the ChargeItem */
  note?: Annotation[];
  /** Further information supporting this charge */
  supportingInformation?: Reference[];
}
/**
 * Item containing charge code(s) associated with the provision of healthcare provider products
 */
export const ChargeItem: t.Type<ChargeItem> = t.recursion<ChargeItem>(
  "ChargeItem",
  () =>
    t.intersection([
      t.type({
        /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** A code that identifies the charge, like a billing code */
        code: CodeableConcept,
        /** Individual service was done for/to */
        subject: Reference
      }),
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
        /** Business Identifier for item */
        identifier: t.array(Identifier),
        /** Defining information about the code of this charge item */
        definitionUri: t.array(primitives.R4.uri),
        /** Extension of definitionUri element */
        _definitionUri: t.array(Element),
        /** Resource defining the code of this ChargeItem */
        definitionCanonical: t.array(primitives.R4.canonical),
        /** Extension of definitionCanonical element */
        _definitionCanonical: t.array(Element),
        /** Extension of status element */
        _status: Element,
        /** Part of referenced ChargeItem */
        partOf: t.array(Reference),
        /** Encounter / Episode associated with event */
        context: Reference,
        /** When the charged service was applied */
        occurrenceDateTime: primitives.R4.dateTime,
        /** Extension of occurrenceDateTime element */
        _occurrenceDateTime: Element,
        /** When the charged service was applied */
        occurrencePeriod: Period,
        /** When the charged service was applied */
        occurrenceTiming: Timing,
        /** Organization providing the charged service */
        performingOrganization: Reference,
        /** Organization requesting the charged service */
        requestingOrganization: Reference,
        /** Organization that has ownership of the (potential, future) revenue */
        costCenter: Reference,
        /** Quantity of which the charge item has been serviced */
        quantity: Quantity,
        /** Anatomical location, if relevant */
        bodysite: t.array(CodeableConcept),
        /** Factor overriding the associated rules */
        factorOverride: primitives.R4.decimal,
        /** Extension of factorOverride element */
        _factorOverride: Element,
        /** Price overriding the associated rules */
        priceOverride: Money,
        /** Reason for overriding the list price/factor */
        overrideReason: primitives.R4.string,
        /** Extension of overrideReason element */
        _overrideReason: Element,
        /** Individual who was entering */
        enterer: Reference,
        /** Date the charge item was entered */
        enteredDate: primitives.R4.dateTime,
        /** Extension of enteredDate element */
        _enteredDate: Element,
        /** Why was the charged  service rendered? */
        reason: t.array(CodeableConcept),
        /** Which rendered service is being charged? */
        service: t.array(Reference),
        /** Product charged */
        productReference: Reference,
        /** Product charged */
        productCodeableConcept: CodeableConcept,
        /** Account to place this charge */
        account: t.array(Reference),
        /** Comments made about the ChargeItem */
        note: t.array(Annotation),
        /** Further information supporting this charge */
        supportingInformation: t.array(Reference)
      })
    ])
);

/**
 * Who performed charged service
 */
export interface ChargeItemPerformer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What type of performance was done */
  function?: CodeableConcept;
  /** Individual who was performing */
  actor: Reference;
}
/**
 * Who performed charged service
 */
export const ChargeItemPerformer: t.Type<ChargeItemPerformer> = t.recursion<
  ChargeItemPerformer
>("ChargeItemPerformer", () =>
  t.intersection([
    t.type({
      /** Individual who was performing */
      actor: Reference
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
      /** What type of performance was done */
      function: CodeableConcept
    })
  ])
);
