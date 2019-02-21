/**
 * ChargeItem Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Money, MoneyOutputType } from "./Money";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Who performed charged service
 */
export interface ChargeItemPerformer {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** What type of performance was done */
  function?: CodeableConcept;
  /** Individual who was performing */
  actor: Reference;
}

export interface ChargeItemPerformerOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** What type of performance was done */
  function?: CodeableConceptOutputType;
  /** Individual who was performing */
  actor: ReferenceOutputType;
}

export const ChargeItemPerformer: t.RecursiveType<
  t.Type<ChargeItemPerformer, ChargeItemPerformerOutputType>,
  ChargeItemPerformer,
  ChargeItemPerformerOutputType
> = t.recursion<ChargeItemPerformer, ChargeItemPerformerOutputType>(
  "ChargeItemPerformer",
  () =>
    t.intersection(
      [
        t.type({
          /** Individual who was performing */
          actor: Reference
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** What type of performance was done */
          function: CodeableConcept,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "ChargeItemPerformer"
    )
);

/**
 * Item containing charge code(s) associated with the provision of healthcare provider products
 */
export interface ChargeItem {
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
  /** Business Identifier for item */
  identifier?: Identifier[];
  /** Defining information about the code of this charge item */
  definitionUri?: t.TypeOf<primitives.R4.URIType>[];
  /** Resource defining the code of this ChargeItem */
  definitionCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Part of referenced ChargeItem */
  partOf?: Reference[];
  /** A code that identifies the charge, like a billing code */
  code: CodeableConcept;
  /** Individual service was done for/to */
  subject: Reference;
  /** Encounter / Episode associated with event */
  context?: Reference;
  /** When the charged service was applied */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period | Timing;
  /** Who performed charged service */
  performer?: ChargeItemPerformer[];
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
  factorOverride?: t.TypeOf<primitives.R4.DecimalType>;
  /** Price overriding the associated rules */
  priceOverride?: Money;
  /** Reason for overriding the list price/factor */
  overrideReason?: t.TypeOf<primitives.R4.StringType>;
  /** Individual who was entering */
  enterer?: Reference;
  /** Date the charge item was entered */
  enteredDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Why was the charged  service rendered? */
  reason?: CodeableConcept[];
  /** Which rendered service is being charged? */
  service?: Reference[];
  /** Product charged */
  product?: Reference | CodeableConcept;
  /** Account to place this charge */
  account?: Reference[];
  /** Comments made about the ChargeItem */
  note?: Annotation[];
  /** Further information supporting this charge */
  supportingInformation?: Reference[];
}

export interface ChargeItemOutputType {
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
  /** Business Identifier for item */
  identifier?: IdentifierOutputType[];
  /** Defining information about the code of this charge item */
  definitionUri?: t.OutputOf<primitives.R4.URIType>[];
  /** Resource defining the code of this ChargeItem */
  definitionCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Part of referenced ChargeItem */
  partOf?: ReferenceOutputType[];
  /** A code that identifies the charge, like a billing code */
  code: CodeableConceptOutputType;
  /** Individual service was done for/to */
  subject: ReferenceOutputType;
  /** Encounter / Episode associated with event */
  context?: ReferenceOutputType;
  /** When the charged service was applied */
  occurrence?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType;
  /** Who performed charged service */
  performer?: ChargeItemPerformerOutputType[];
  /** Organization providing the charged service */
  performingOrganization?: ReferenceOutputType;
  /** Organization requesting the charged service */
  requestingOrganization?: ReferenceOutputType;
  /** Organization that has ownership of the (potential, future) revenue */
  costCenter?: ReferenceOutputType;
  /** Quantity of which the charge item has been serviced */
  quantity?: QuantityOutputType;
  /** Anatomical location, if relevant */
  bodysite?: CodeableConceptOutputType[];
  /** Factor overriding the associated rules */
  factorOverride?: t.OutputOf<primitives.R4.DecimalType>;
  /** Price overriding the associated rules */
  priceOverride?: MoneyOutputType;
  /** Reason for overriding the list price/factor */
  overrideReason?: t.OutputOf<primitives.R4.StringType>;
  /** Individual who was entering */
  enterer?: ReferenceOutputType;
  /** Date the charge item was entered */
  enteredDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Why was the charged  service rendered? */
  reason?: CodeableConceptOutputType[];
  /** Which rendered service is being charged? */
  service?: ReferenceOutputType[];
  /** Product charged */
  product?: ReferenceOutputType | CodeableConceptOutputType;
  /** Account to place this charge */
  account?: ReferenceOutputType[];
  /** Comments made about the ChargeItem */
  note?: AnnotationOutputType[];
  /** Further information supporting this charge */
  supportingInformation?: ReferenceOutputType[];
}

export const ChargeItem: t.RecursiveType<
  t.Type<ChargeItem, ChargeItemOutputType>,
  ChargeItem,
  ChargeItemOutputType
> = t.recursion<ChargeItem, ChargeItemOutputType>("ChargeItem", () =>
  t.intersection(
    [
      t.type({
        /** A code that identifies the charge, like a billing code */
        code: CodeableConcept,
        /** planned | billable | not-billable | aborted | billed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Individual service was done for/to */
        subject: Reference
      }),
      t.partial({
        /** Account to place this charge */
        account: t.array(Reference),
        /** Anatomical location, if relevant */
        bodysite: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Encounter / Episode associated with event */
        context: Reference,
        /** Organization that has ownership of the (potential, future) revenue */
        costCenter: Reference,
        /** Resource defining the code of this ChargeItem */
        definitionCanonical: t.array(primitives.R4.canonical),
        /** Defining information about the code of this charge item */
        definitionUri: t.array(primitives.R4.uri),
        /** Date the charge item was entered */
        enteredDate: primitives.R4.dateTime,
        /** Individual who was entering */
        enterer: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Factor overriding the associated rules */
        factorOverride: primitives.R4.decimal,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business Identifier for item */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments made about the ChargeItem */
        note: t.array(Annotation),
        /** When the charged service was applied */
        occurrence: t.union([primitives.R4.dateTime, Period, Timing]),
        /** Reason for overriding the list price/factor */
        overrideReason: primitives.R4.string,
        /** Part of referenced ChargeItem */
        partOf: t.array(Reference),
        /** Who performed charged service */
        performer: t.array(ChargeItemPerformer),
        /** Organization providing the charged service */
        performingOrganization: Reference,
        /** Price overriding the associated rules */
        priceOverride: Money,
        /** Product charged */
        product: t.union([Reference, CodeableConcept]),
        /** Quantity of which the charge item has been serviced */
        quantity: Quantity,
        /** Why was the charged  service rendered? */
        reason: t.array(CodeableConcept),
        /** Organization requesting the charged service */
        requestingOrganization: Reference,
        /** Which rendered service is being charged? */
        service: t.array(Reference),
        /** Further information supporting this charge */
        supportingInformation: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "ChargeItem"
  )
);
