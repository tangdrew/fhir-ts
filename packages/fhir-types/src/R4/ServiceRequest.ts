/**
 * ServiceRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * A request for a service to be performed
 */
export interface ServiceRequest {
  /** The type of resource */
  resourceType?: "ServiceRequest";
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
  /** Identifiers assigned to this order */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** What request fulfills */
  basedOn?: Reference[];
  /** What request replaces */
  replaces?: Reference[];
  /** Composite Request ID */
  requisition?: Identifier;
  /** draft | active | suspended | completed | entered-in-error | cancelled */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** proposal | plan | order + */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** Classification of service */
  category?: CodeableConcept[];
  /** routine | urgent | asap | stat */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** True if service/procedure should not be performed */
  doNotPerform?: boolean;
  /** Extension of doNotPerform element */
  _doNotPerform?: Element;
  /** What is being requested/ordered */
  code?: CodeableConcept;
  /** Additional order information */
  orderDetail?: CodeableConcept[];
  /** Service amount */
  quantityQuantity?: Quantity;
  /** Service amount */
  quantityRatio?: Ratio;
  /** Service amount */
  quantityRange?: Range;
  /** Individual or Entity the service is ordered for */
  subject: Reference;
  /** Encounter in which the request was created */
  encounter?: Reference;
  /** When service should occur */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When service should occur */
  occurrencePeriod?: Period;
  /** When service should occur */
  occurrenceTiming?: Timing;
  /** Preconditions for service */
  asneededBoolean?: boolean;
  /** Extension of asneededBoolean element */
  _asneededBoolean?: Element;
  /** Preconditions for service */
  asneededCodeableConcept?: CodeableConcept;
  /** Date request signed */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
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
  patientInstruction?: string;
  /** Extension of patientInstruction element */
  _patientInstruction?: Element;
  /** Request provenance */
  relevantHistory?: Reference[];
}
/**
 * A request for a service to be performed
 */
export const ServiceRequest: t.Type<ServiceRequest> = t.recursion<
  ServiceRequest
>("ServiceRequest", () =>
  t.intersection([
    t.type({
      /** draft | active | suspended | completed | entered-in-error | cancelled */
      status: primitives.R4.code,
      /** proposal | plan | order + */
      intent: primitives.R4.code,
      /** Individual or Entity the service is ordered for */
      subject: Reference
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ServiceRequest"),
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
      /** Identifiers assigned to this order */
      identifier: t.array(Identifier),
      /** Instantiates FHIR protocol or definition */
      instantiatesCanonical: t.array(primitives.R4.canonical),
      /** Extension of instantiatesCanonical element */
      _instantiatesCanonical: t.array(Element),
      /** Instantiates external protocol or definition */
      instantiatesUri: t.array(primitives.R4.uri),
      /** Extension of instantiatesUri element */
      _instantiatesUri: t.array(Element),
      /** What request fulfills */
      basedOn: t.array(Reference),
      /** What request replaces */
      replaces: t.array(Reference),
      /** Composite Request ID */
      requisition: Identifier,
      /** Extension of status element */
      _status: Element,
      /** Extension of intent element */
      _intent: Element,
      /** Classification of service */
      category: t.array(CodeableConcept),
      /** routine | urgent | asap | stat */
      priority: primitives.R4.code,
      /** Extension of priority element */
      _priority: Element,
      /** True if service/procedure should not be performed */
      doNotPerform: primitives.R4.boolean,
      /** Extension of doNotPerform element */
      _doNotPerform: Element,
      /** What is being requested/ordered */
      code: CodeableConcept,
      /** Additional order information */
      orderDetail: t.array(CodeableConcept),
      /** Service amount */
      quantityQuantity: Quantity,
      /** Service amount */
      quantityRatio: Ratio,
      /** Service amount */
      quantityRange: Range,
      /** Encounter in which the request was created */
      encounter: Reference,
      /** When service should occur */
      occurrenceDateTime: primitives.R4.dateTime,
      /** Extension of occurrenceDateTime element */
      _occurrenceDateTime: Element,
      /** When service should occur */
      occurrencePeriod: Period,
      /** When service should occur */
      occurrenceTiming: Timing,
      /** Preconditions for service */
      asneededBoolean: primitives.R4.boolean,
      /** Extension of asneededBoolean element */
      _asneededBoolean: Element,
      /** Preconditions for service */
      asneededCodeableConcept: CodeableConcept,
      /** Date request signed */
      authoredOn: primitives.R4.dateTime,
      /** Extension of authoredOn element */
      _authoredOn: Element,
      /** Who/what is requesting service */
      requester: Reference,
      /** Performer role */
      performerType: CodeableConcept,
      /** Requested performer */
      performer: t.array(Reference),
      /** Requested location */
      locationCode: t.array(CodeableConcept),
      /** Requested location */
      locationReference: t.array(Reference),
      /** Explanation/Justification for procedure or service */
      reasonCode: t.array(CodeableConcept),
      /** Explanation/Justification for service or service */
      reasonReference: t.array(Reference),
      /** Associated insurance coverage */
      insurance: t.array(Reference),
      /** Additional clinical information */
      supportingInfo: t.array(Reference),
      /** Procedure Samples */
      specimen: t.array(Reference),
      /** Location on Body */
      bodySite: t.array(CodeableConcept),
      /** Comments */
      note: t.array(Annotation),
      /** Patient or consumer-oriented instructions */
      patientInstruction: primitives.R4.string,
      /** Extension of patientInstruction element */
      _patientInstruction: Element,
      /** Request provenance */
      relevantHistory: t.array(Reference)
    })
  ])
);
