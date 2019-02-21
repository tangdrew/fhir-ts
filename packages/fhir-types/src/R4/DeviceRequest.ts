/**
 * DeviceRequest Module
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
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Device details
 */
export interface DeviceRequestParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Device detail */
  code?: CodeableConcept;
  /** Value of detail */
  value?:
    | CodeableConcept
    | Quantity
    | Range
    | t.TypeOf<primitives.R4.BooleanType>;
}

export interface DeviceRequestParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Device detail */
  code?: CodeableConceptOutputType;
  /** Value of detail */
  value?:
    | CodeableConceptOutputType
    | QuantityOutputType
    | RangeOutputType
    | t.OutputOf<primitives.R4.BooleanType>;
}

export const DeviceRequestParameter: t.RecursiveType<
  t.Type<DeviceRequestParameter, DeviceRequestParameterOutputType>,
  DeviceRequestParameter,
  DeviceRequestParameterOutputType
> = t.recursion<DeviceRequestParameter, DeviceRequestParameterOutputType>(
  "DeviceRequestParameter",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Device detail */
          code: CodeableConcept,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Value of detail */
          value: t.union([
            CodeableConcept,
            Quantity,
            Range,
            primitives.R4.boolean
          ])
        })
      ],
      "DeviceRequestParameter"
    )
);

/**
 * Medical device request
 */
export interface DeviceRequest {
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
  /** External Request identifier */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** What request fulfills */
  basedOn?: Reference[];
  /** What request replaces */
  priorRequest?: Reference[];
  /** Identifier of composite request */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | completed | entered-in-error | cancelled */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** proposal | plan | original-order | encoded | reflex-order */
  intent: t.TypeOf<primitives.R4.CodeType>;
  /** Indicates how quickly the {{title}} should be addressed with respect to other requests */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** Device requested */
  code: Reference | CodeableConcept;
  /** Device details */
  parameter?: DeviceRequestParameter[];
  /** Focus of request */
  subject: Reference;
  /** Encounter motivating request */
  encounter?: Reference;
  /** Desired time or schedule for use */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period | Timing;
  /** When recorded */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
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

export interface DeviceRequestOutputType {
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
  /** External Request identifier */
  identifier?: IdentifierOutputType[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** What request fulfills */
  basedOn?: ReferenceOutputType[];
  /** What request replaces */
  priorRequest?: ReferenceOutputType[];
  /** Identifier of composite request */
  groupIdentifier?: IdentifierOutputType;
  /** draft | active | suspended | completed | entered-in-error | cancelled */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** proposal | plan | original-order | encoded | reflex-order */
  intent: t.OutputOf<primitives.R4.CodeType>;
  /** Indicates how quickly the {{title}} should be addressed with respect to other requests */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** Device requested */
  code: ReferenceOutputType | CodeableConceptOutputType;
  /** Device details */
  parameter?: DeviceRequestParameterOutputType[];
  /** Focus of request */
  subject: ReferenceOutputType;
  /** Encounter motivating request */
  encounter?: ReferenceOutputType;
  /** Desired time or schedule for use */
  occurrence?:
    | t.OutputOf<primitives.R4.DateTimeType>
    | PeriodOutputType
    | TimingOutputType;
  /** When recorded */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who/what is requesting diagnostics */
  requester?: ReferenceOutputType;
  /** Filler role */
  performerType?: CodeableConceptOutputType;
  /** Requested Filler */
  performer?: ReferenceOutputType;
  /** Coded Reason for request */
  reasonCode?: CodeableConceptOutputType[];
  /** Linked Reason for request */
  reasonReference?: ReferenceOutputType[];
  /** Associated insurance coverage */
  insurance?: ReferenceOutputType[];
  /** Additional clinical information */
  supportingInfo?: ReferenceOutputType[];
  /** Notes or comments */
  note?: AnnotationOutputType[];
  /** Request provenance */
  relevantHistory?: ReferenceOutputType[];
}

export const DeviceRequest: t.RecursiveType<
  t.Type<DeviceRequest, DeviceRequestOutputType>,
  DeviceRequest,
  DeviceRequestOutputType
> = t.recursion<DeviceRequest, DeviceRequestOutputType>("DeviceRequest", () =>
  t.intersection(
    [
      t.type({
        /** Device requested */
        code: t.union([Reference, CodeableConcept]),
        /** proposal | plan | original-order | encoded | reflex-order */
        intent: primitives.R4.code,
        /** Focus of request */
        subject: Reference
      }),
      t.partial({
        /** When recorded */
        authoredOn: primitives.R4.dateTime,
        /** What request fulfills */
        basedOn: t.array(Reference),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Encounter motivating request */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Identifier of composite request */
        groupIdentifier: Identifier,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Request identifier */
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
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Notes or comments */
        note: t.array(Annotation),
        /** Desired time or schedule for use */
        occurrence: t.union([primitives.R4.dateTime, Period, Timing]),
        /** Device details */
        parameter: t.array(DeviceRequestParameter),
        /** Requested Filler */
        performer: Reference,
        /** Filler role */
        performerType: CodeableConcept,
        /** What request replaces */
        priorRequest: t.array(Reference),
        /** Indicates how quickly the {{title}} should be addressed with respect to other requests */
        priority: primitives.R4.code,
        /** Coded Reason for request */
        reasonCode: t.array(CodeableConcept),
        /** Linked Reason for request */
        reasonReference: t.array(Reference),
        /** Request provenance */
        relevantHistory: t.array(Reference),
        /** Who/what is requesting diagnostics */
        requester: Reference,
        /** draft | active | suspended | completed | entered-in-error | cancelled */
        status: primitives.R4.code,
        /** Additional clinical information */
        supportingInfo: t.array(Reference),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "DeviceRequest"
  )
);
