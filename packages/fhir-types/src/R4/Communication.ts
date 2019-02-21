/**
 * Communication Module
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
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Message payload
 */
export interface CommunicationPayload {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Message part content */
  content: t.TypeOf<primitives.R4.StringType> | Attachment | Reference;
}

export interface CommunicationPayloadOutputType {
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

export const CommunicationPayload: t.RecursiveType<
  t.Type<CommunicationPayload, CommunicationPayloadOutputType>,
  CommunicationPayload,
  CommunicationPayloadOutputType
> = t.recursion<CommunicationPayload, CommunicationPayloadOutputType>(
  "CommunicationPayload",
  () =>
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
      "CommunicationPayload"
    )
);

/**
 * A record of information transmitted from a sender to a receiver
 */
export interface Communication {
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
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.TypeOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.TypeOf<primitives.R4.URIType>[];
  /** Request fulfilled by this communication */
  basedOn?: Reference[];
  /** Part of this action */
  partOf?: Reference[];
  /** Reply to */
  inResponseTo?: Reference[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Message category */
  category?: CodeableConcept[];
  /** Message urgency */
  priority?: t.TypeOf<primitives.R4.CodeType>;
  /** A channel of communication */
  medium?: CodeableConcept[];
  /** Focus of message */
  subject?: Reference;
  /** Description of the purpose/content */
  topic?: CodeableConcept;
  /** Resources that pertain to this communication */
  about?: Reference[];
  /** Encounter created as part of */
  encounter?: Reference;
  /** When sent */
  sent?: t.TypeOf<primitives.R4.DateTimeType>;
  /** When received */
  received?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Message recipient */
  recipient?: Reference[];
  /** Message sender */
  sender?: Reference;
  /** Indication for message */
  reasonCode?: CodeableConcept[];
  /** Why was communication done? */
  reasonReference?: Reference[];
  /** Message payload */
  payload?: CommunicationPayload[];
  /** Comments made about the communication */
  note?: Annotation[];
}

export interface CommunicationOutputType {
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
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: t.OutputOf<primitives.R4.CanonicalType>[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: t.OutputOf<primitives.R4.URIType>[];
  /** Request fulfilled by this communication */
  basedOn?: ReferenceOutputType[];
  /** Part of this action */
  partOf?: ReferenceOutputType[];
  /** Reply to */
  inResponseTo?: ReferenceOutputType[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Reason for current status */
  statusReason?: CodeableConceptOutputType;
  /** Message category */
  category?: CodeableConceptOutputType[];
  /** Message urgency */
  priority?: t.OutputOf<primitives.R4.CodeType>;
  /** A channel of communication */
  medium?: CodeableConceptOutputType[];
  /** Focus of message */
  subject?: ReferenceOutputType;
  /** Description of the purpose/content */
  topic?: CodeableConceptOutputType;
  /** Resources that pertain to this communication */
  about?: ReferenceOutputType[];
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** When sent */
  sent?: t.OutputOf<primitives.R4.DateTimeType>;
  /** When received */
  received?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Message recipient */
  recipient?: ReferenceOutputType[];
  /** Message sender */
  sender?: ReferenceOutputType;
  /** Indication for message */
  reasonCode?: CodeableConceptOutputType[];
  /** Why was communication done? */
  reasonReference?: ReferenceOutputType[];
  /** Message payload */
  payload?: CommunicationPayloadOutputType[];
  /** Comments made about the communication */
  note?: AnnotationOutputType[];
}

export const Communication: t.RecursiveType<
  t.Type<Communication, CommunicationOutputType>,
  Communication,
  CommunicationOutputType
> = t.recursion<Communication, CommunicationOutputType>("Communication", () =>
  t.intersection(
    [
      t.type({
        /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** Resources that pertain to this communication */
        about: t.array(Reference),
        /** Request fulfilled by this communication */
        basedOn: t.array(Reference),
        /** Message category */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Encounter created as part of */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Unique identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Reply to */
        inResponseTo: t.array(Reference),
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** A channel of communication */
        medium: t.array(CodeableConcept),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments made about the communication */
        note: t.array(Annotation),
        /** Part of this action */
        partOf: t.array(Reference),
        /** Message payload */
        payload: t.array(CommunicationPayload),
        /** Message urgency */
        priority: primitives.R4.code,
        /** Indication for message */
        reasonCode: t.array(CodeableConcept),
        /** Why was communication done? */
        reasonReference: t.array(Reference),
        /** When received */
        received: primitives.R4.dateTime,
        /** Message recipient */
        recipient: t.array(Reference),
        /** Message sender */
        sender: Reference,
        /** When sent */
        sent: primitives.R4.dateTime,
        /** Reason for current status */
        statusReason: CodeableConcept,
        /** Focus of message */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Description of the purpose/content */
        topic: CodeableConcept
      })
    ],
    "Communication"
  )
);
