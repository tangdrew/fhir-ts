/**
 * CommunicationRequest Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Message payload
 */
export interface CommunicationRequestPayload {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Message part content */
  content: t.TypeOf<primitives.R4.StringType> | Attachment | Reference;
}

export interface CommunicationRequestPayloadOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Message part content */
  content:
    | t.OutputOf<primitives.R4.StringType>
    | AttachmentOutputType
    | ReferenceOutputType;
}

export const CommunicationRequestPayload: t.RecursiveType<
  t.Type<CommunicationRequestPayload, CommunicationRequestPayloadOutputType>,
  CommunicationRequestPayload,
  CommunicationRequestPayloadOutputType
> = t.recursion<
  CommunicationRequestPayload,
  CommunicationRequestPayloadOutputType
>("CommunicationRequestPayload", () =>
  t.intersection(
    [
      t.type({
        /** Message part content */
        content: t.union([primitives.R4.string, Attachment, Reference])
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "CommunicationRequestPayload"
  )
);

/**
 * A request for information to be sent to a receiver
 */
export interface CommunicationRequest {
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
  /** Unique identifier */
  identifier?: Identifier[];
  /** Fulfills plan or proposal */
  basedOn?: Reference[];
  /** Request(s) replaced by this request */
  replaces?: Reference[];
  /** Composite request this is part of */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Message category */
  category?: CodeableConcept[];
  /** Message urgency */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** True if request is prohibiting action */
  doNotPerform?: t.TypeOf<primitives.R4.BooleanType>;
  /** A channel of communication */
  medium?: CodeableConcept[];
  /** Focus of message */
  subject?: Reference;
  /** Resources that pertain to this communication request */
  about?: Reference[];
  /** Encounter created as part of */
  encounter?: Reference;
  /** Message payload */
  payload?: CommunicationRequestPayload[];
  /** When scheduled */
  occurrence?: t.TypeOf<primitives.R4.DateTimeType> | Period;
  /** When request transitioned to being actionable */
  authoredOn?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who/what is requesting service */
  requester?: Reference;
  /** Message recipient */
  recipient?: Reference[];
  /** Message sender */
  sender?: Reference;
  /** Why is communication needed? */
  reasonCode?: CodeableConcept[];
  /** Why is communication needed? */
  reasonReference?: Reference[];
  /** Comments made about communication request */
  note?: Annotation[];
}

export interface CommunicationRequestOutputType {
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
  /** Unique identifier */
  identifier?: IdentifierOutputType[];
  /** Fulfills plan or proposal */
  basedOn?: ReferenceOutputType[];
  /** Request(s) replaced by this request */
  replaces?: ReferenceOutputType[];
  /** Composite request this is part of */
  groupIdentifier?: IdentifierOutputType;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** Message category */
  category?: CodeableConceptOutputType[];
  /** Message urgency */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** True if request is prohibiting action */
  doNotPerform?: t.OutputOf<primitives.R4.BooleanType>;
  /** A channel of communication */
  medium?: CodeableConceptOutputType[];
  /** Focus of message */
  subject?: ReferenceOutputType;
  /** Resources that pertain to this communication request */
  about?: ReferenceOutputType[];
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** Message payload */
  payload?: CommunicationRequestPayloadOutputType[];
  /** When scheduled */
  occurrence?: t.OutputOf<primitives.R4.DateTimeType> | PeriodOutputType;
  /** When request transitioned to being actionable */
  authoredOn?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who/what is requesting service */
  requester?: ReferenceOutputType;
  /** Message recipient */
  recipient?: ReferenceOutputType[];
  /** Message sender */
  sender?: ReferenceOutputType;
  /** Why is communication needed? */
  reasonCode?: CodeableConceptOutputType[];
  /** Why is communication needed? */
  reasonReference?: ReferenceOutputType[];
  /** Comments made about communication request */
  note?: AnnotationOutputType[];
}

export const CommunicationRequest: t.RecursiveType<
  t.Type<CommunicationRequest, CommunicationRequestOutputType>,
  CommunicationRequest,
  CommunicationRequestOutputType
> = t.recursion<CommunicationRequest, CommunicationRequestOutputType>(
  "CommunicationRequest",
  () =>
    t.intersection(
      [
        t.type({
          /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
          status: primitives.R4.code
        }),
        t.partial({
          /** Resources that pertain to this communication request */
          about: t.array(Reference),
          /** When request transitioned to being actionable */
          authoredOn: primitives.R4.dateTime,
          /** Fulfills plan or proposal */
          basedOn: t.array(Reference),
          /** Message category */
          category: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** True if request is prohibiting action */
          doNotPerform: primitives.R4.boolean,
          /** Encounter created as part of */
          encounter: Reference,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Composite request this is part of */
          groupIdentifier: Identifier,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Unique identifier */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** A channel of communication */
          medium: t.array(CodeableConcept),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Comments made about communication request */
          note: t.array(Annotation),
          /** When scheduled */
          occurrence: t.union([primitives.R4.dateTime, Period]),
          /** Message payload */
          payload: t.array(CommunicationRequestPayload),
          /** Message urgency */
          priority: primitives.R4.code,
          /** Why is communication needed? */
          reasonCode: t.array(CodeableConcept),
          /** Why is communication needed? */
          reasonReference: t.array(Reference),
          /** Message recipient */
          recipient: t.array(Reference),
          /** Request(s) replaced by this request */
          replaces: t.array(Reference),
          /** Who/what is requesting service */
          requester: Reference,
          /** Message sender */
          sender: Reference,
          /** Reason for current status */
          statusReason: CodeableConcept,
          /** Focus of message */
          subject: Reference,
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "CommunicationRequest"
    )
);
