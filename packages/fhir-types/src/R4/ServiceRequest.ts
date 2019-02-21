/**
 * ServiceRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * A request for a service to be performed
 */
export interface ServiceRequest {
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
  /** Identifiers assigned to this order */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** What request fulfills */
  basedOn?: Reference[];
  /** What request replaces */
  replaces?: Reference[];
  /** Composite Request ID */
  requisition?: Identifier;
  /** draft | active | suspended | completed | entered-in-error | cancelled */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** proposal | plan | order + */
  intent: t.TypeOf<primitives.R4.CodeType>;
  /** Classification of service */
  category?: CodeableConcept[];
  /** routine | urgent | asap | stat */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** True if service/procedure should not be performed */
  doNotPerform?: t.TypeOf<primitives.R4.BooleanType>;
  /** What is being requested/ordered */
  code?: CodeableConcept;
  /** Additional order information */
  orderDetail?: CodeableConcept[];
  /** Service amount */
  quantity?: Quantity | Ratio | Range;
  /** Individual or Entity the service is ordered for */
  subject: Reference;
  /** Encounter in which the request was created */
  encounter?: Reference;
  /** When service should occur */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period | Timing;
  /** Preconditions for service */
  asneeded?: t.TypeOf<primitives.R4.BooleanType> | CodeableConcept;
  /** Date request signed */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who/what is requesting service */
  requester?: Reference;
  /** Performer role */
  performerType?: CodeableConcept;
  /** Requested performer */
  performer?: Reference[];
  /** Requested location */
  locationCode?: CodeableConcept[];
  /** Requested location */
  locationReference?: Reference[];
  /** Explanation/Justification for procedure or service */
  reasonCode?: CodeableConcept[];
  /** Explanation/Justification for service or service */
  reasonReference?: Reference[];
  /** Associated insurance coverage */
  insurance?: Reference[];
  /** Additional clinical information */
  supportingInfo?: Reference[];
  /** Procedure Samples */
  specimen?: Reference[];
  /** Location on Body */
  bodySite?: CodeableConcept[];
  /** Comments */
  note?: Annotation[];
  /** Patient or consumer-oriented instructions */
  patientInstruction?: t.TypeOf<primitives.R4.StringType>;
  /** Request provenance */
  relevantHistory?: Reference[];
}

export interface ServiceRequestOutputType {
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
  /** Identifiers assigned to this order */
  identifier?: IdentifierOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** What request fulfills */
  basedOn?: ReferenceOutputType[];
  /** What request replaces */
  replaces?: ReferenceOutputType[];
  /** Composite Request ID */
  requisition?: IdentifierOutputType;
  /** draft | active | suspended | completed | entered-in-error | cancelled */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** proposal | plan | order + */
  intent: t.OutputOf<primitives.R4.CodeType>;
  /** Classification of service */
  category?: CodeableConceptOutputType[];
  /** routine | urgent | asap | stat */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** True if service/procedure should not be performed */
  doNotPerform?: t.OutputOf<primitives.R4.BooleanType>;
  /** What is being requested/ordered */
  code?: CodeableConceptOutputType;
  /** Additional order information */
  orderDetail?: CodeableConceptOutputType[];
  /** Service amount */
  quantity?: QuantityOutputType | RatioOutputType | RangeOutputType;
  /** Individual or Entity the service is ordered for */
  subject: ReferenceOutputType;
  /** Encounter in which the request was created */
  encounter?: ReferenceOutputType;
  /** When service should occur */
  occurrence?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType;
  /** Preconditions for service */
  asneeded?: t.OutputOf<primitives.R4.BooleanType> | CodeableConceptOutputType;
  /** Date request signed */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who/what is requesting service */
  requester?: ReferenceOutputType;
  /** Performer role */
  performerType?: CodeableConceptOutputType;
  /** Requested performer */
  performer?: ReferenceOutputType[];
  /** Requested location */
  locationCode?: CodeableConceptOutputType[];
  /** Requested location */
  locationReference?: ReferenceOutputType[];
  /** Explanation/Justification for procedure or service */
  reasonCode?: CodeableConceptOutputType[];
  /** Explanation/Justification for service or service */
  reasonReference?: ReferenceOutputType[];
  /** Associated insurance coverage */
  insurance?: ReferenceOutputType[];
  /** Additional clinical information */
  supportingInfo?: ReferenceOutputType[];
  /** Procedure Samples */
  specimen?: ReferenceOutputType[];
  /** Location on Body */
  bodySite?: CodeableConceptOutputType[];
  /** Comments */
  note?: AnnotationOutputType[];
  /** Patient or consumer-oriented instructions */
  patientInstruction?: t.OutputOf<primitives.R4.StringType>;
  /** Request provenance */
  relevantHistory?: ReferenceOutputType[];
}

export const ServiceRequest: t.RecursiveType<
  t.Type<ServiceRequest, ServiceRequestOutputType>,
  ServiceRequest,
  ServiceRequestOutputType
> = t.recursion<ServiceRequest, ServiceRequestOutputType>(
  "ServiceRequest",
  () =>
    t.intersection(
      [
        t.type({
          /** proposal | plan | order + */
          intent: primitives.R4.code,
          /** draft | active | suspended | completed | entered-in-error | cancelled */
          status: primitives.R4.code,
          /** Individual or Entity the service is ordered for */
          subject: Reference
        }),
        t.partial({
          /** Preconditions for service */
          asneeded: t.union([primitives.R4.boolean, CodeableConcept]),
          /** Date request signed */
          authoredOn: primitives.R4.dateTime,
          /** What request fulfills */
          basedOn: t.array(Reference),
          /** Location on Body */
          bodySite: t.array(CodeableConcept),
          /** Classification of service */
          category: t.array(CodeableConcept),
          /** What is being requested/ordered */
          code: CodeableConcept,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** True if service/procedure should not be performed */
          doNotPerform: primitives.R4.boolean,
          /** Encounter in which the request was created */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Identifiers assigned to this order */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Instantiates FHIR protocol or definition */
          instantiatesCanonical: t.array(primitives.R4.canonical),
          /** Instantiates external protocol or definition */
          instantiatesUri: t.array(primitives.R4.uri),
          /** Associated insurance coverage */
          insurance: t.array(Reference),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** Requested location */
          locationCode: t.array(CodeableConcept),
          /** Requested location */
          locationReference: t.array(Reference),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Comments */
          note: t.array(Annotation),
          /** When service should occur */
          occurrence: t.union([primitives.R4.dateTime, Period, Timing]),
          /** Additional order information */
          orderDetail: t.array(CodeableConcept),
          /** Patient or consumer-oriented instructions */
          patientInstruction: primitives.R4.string,
          /** Requested performer */
          performer: t.array(Reference),
          /** Performer role */
          performerType: CodeableConcept,
          /** routine | urgent | asap | stat */
          priority: primitives.R4.code,
          /** Service amount */
          quantity: t.union([Quantity, Ratio, Range]),
          /** Explanation/Justification for procedure or service */
          reasonCode: t.array(CodeableConcept),
          /** Explanation/Justification for service or service */
          reasonReference: t.array(Reference),
          /** Request provenance */
          relevantHistory: t.array(Reference),
          /** What request replaces */
          replaces: t.array(Reference),
          /** Who/what is requesting service */
          requester: Reference,
          /** Composite Request ID */
          requisition: Identifier,
          /** Procedure Samples */
          specimen: t.array(Reference),
          /** Additional clinical information */
          supportingInfo: t.array(Reference),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "ServiceRequest"
    )
);
