/**
 * DeviceRequest Module
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
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Timing } from "./Timing";

/**
 * Medical device request
 */
export interface DeviceRequest {
  /** The type of resource */
  resourceType?: "DeviceRequest";
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
  /** External Request identifier */
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
  priorRequest?: Reference[];
  /** Identifier of composite request */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | completed | entered-in-error | cancelled */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** proposal | plan | original-order | encoded | reflex-order */
  intent: primitives.R4.code;
  /** Extension of intent element */
  _intent?: Element;
  /** Indicates how quickly the {{title}} should be addressed with respect to other requests */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
  /** Device requested */
  codeReference: Reference;
  /** Device requested */
  codeCodeableConcept: CodeableConcept;
  /** Focus of request */
  subject: Reference;
  /** Encounter motivating request */
  encounter?: Reference;
  /** Desired time or schedule for use */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** Desired time or schedule for use */
  occurrencePeriod?: Period;
  /** Desired time or schedule for use */
  occurrenceTiming?: Timing;
  /** When recorded */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
  /** Who/what is requesting diagnostics */
  requester?: Reference;
  /** Filler role */
  performerType?: CodeableConcept;
  /** Requested Filler */
  performer?: Reference;
  /** Coded Reason for request */
  reasonCode?: CodeableConcept[];
  /** Linked Reason for request */
  reasonReference?: Reference[];
  /** Associated insurance coverage */
  insurance?: Reference[];
  /** Additional clinical information */
  supportingInfo?: Reference[];
  /** Notes or comments */
  note?: Annotation[];
  /** Request provenance */
  relevantHistory?: Reference[];
}
/**
 * Medical device request
 */
export const DeviceRequest: t.Type<DeviceRequest> = t.recursion<DeviceRequest>(
  "DeviceRequest",
  () =>
    t.intersection([
      t.type({
        /** proposal | plan | original-order | encoded | reflex-order */
        intent: primitives.R4.code,
        /** Device requested */
        codeReference: Reference,
        /** Device requested */
        codeCodeableConcept: CodeableConcept,
        /** Focus of request */
        subject: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("DeviceRequest"),
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
        /** External Request identifier */
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
        priorRequest: t.array(Reference),
        /** Identifier of composite request */
        groupIdentifier: Identifier,
        /** draft | active | suspended | completed | entered-in-error | cancelled */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** Extension of intent element */
        _intent: Element,
        /** Indicates how quickly the {{title}} should be addressed with respect to other requests */
        priority: primitives.R4.code,
        /** Extension of priority element */
        _priority: Element,
        /** Encounter motivating request */
        encounter: Reference,
        /** Desired time or schedule for use */
        occurrenceDateTime: primitives.R4.dateTime,
        /** Extension of occurrenceDateTime element */
        _occurrenceDateTime: Element,
        /** Desired time or schedule for use */
        occurrencePeriod: Period,
        /** Desired time or schedule for use */
        occurrenceTiming: Timing,
        /** When recorded */
        authoredOn: primitives.R4.dateTime,
        /** Extension of authoredOn element */
        _authoredOn: Element,
        /** Who/what is requesting diagnostics */
        requester: Reference,
        /** Filler role */
        performerType: CodeableConcept,
        /** Requested Filler */
        performer: Reference,
        /** Coded Reason for request */
        reasonCode: t.array(CodeableConcept),
        /** Linked Reason for request */
        reasonReference: t.array(Reference),
        /** Associated insurance coverage */
        insurance: t.array(Reference),
        /** Additional clinical information */
        supportingInfo: t.array(Reference),
        /** Notes or comments */
        note: t.array(Annotation),
        /** Request provenance */
        relevantHistory: t.array(Reference)
      })
    ])
);

/**
 * Device details
 */
export interface DeviceRequestParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Device detail */
  code?: CodeableConcept;
  /** Value of detail */
  valueCodeableConcept?: CodeableConcept;
  /** Value of detail */
  valueQuantity?: Quantity;
  /** Value of detail */
  valueRange?: Range;
  /** Value of detail */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
}
/**
 * Device details
 */
export const DeviceRequestParameter: t.Type<
  DeviceRequestParameter
> = t.recursion<DeviceRequestParameter>("DeviceRequestParameter", () =>
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
      /** Device detail */
      code: CodeableConcept,
      /** Value of detail */
      valueCodeableConcept: CodeableConcept,
      /** Value of detail */
      valueQuantity: Quantity,
      /** Value of detail */
      valueRange: Range,
      /** Value of detail */
      valueBoolean: primitives.R4.boolean,
      /** Extension of valueBoolean element */
      _valueBoolean: Element
    })
  ])
);
