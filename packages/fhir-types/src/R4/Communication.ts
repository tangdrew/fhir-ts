/**
 * Communication Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A record of information transmitted from a sender to a receiver
 */
export interface Communication {
  /** The type of resource */
  resourceType?: "Communication";
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
  /** Unique identifier */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** Request fulfilled by this communication */
  basedOn?: Reference[];
  /** Part of this action */
  partOf?: Reference[];
  /** Reply to */
  inResponseTo?: Reference[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Message category */
  category?: CodeableConcept[];
  /** Message urgency */
  priority?: primitives.R4.code;
  /** Extension of priority element */
  _priority?: Element;
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
  sent?: primitives.R4.dateTime;
  /** Extension of sent element */
  _sent?: Element;
  /** When received */
  received?: primitives.R4.dateTime;
  /** Extension of received element */
  _received?: Element;
  /** Message recipient */
  recipient?: Reference[];
  /** Message sender */
  sender?: Reference;
  /** Indication for message */
  reasonCode?: CodeableConcept[];
  /** Why was communication done? */
  reasonReference?: Reference[];
  /** Comments made about the communication */
  note?: Annotation[];
}
/**
 * A record of information transmitted from a sender to a receiver
 */
export const Communication: t.Type<Communication> = t.recursion<Communication>(
  "Communication",
  () =>
    t.intersection([
      t.type({
        /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Communication"),
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
        /** Unique identifier */
        identifier: t.array(Identifier),
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Extension of instantiatesCanonical element */
        _instantiatesCanonical: t.array(Element),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Extension of instantiatesUri element */
        _instantiatesUri: t.array(Element),
        /** Request fulfilled by this communication */
        basedOn: t.array(Reference),
        /** Part of this action */
        partOf: t.array(Reference),
        /** Reply to */
        inResponseTo: t.array(Reference),
        /** Extension of status element */
        _status: Element,
        /** Reason for current status */
        statusReason: CodeableConcept,
        /** Message category */
        category: t.array(CodeableConcept),
        /** Message urgency */
        priority: primitives.R4.code,
        /** Extension of priority element */
        _priority: Element,
        /** A channel of communication */
        medium: t.array(CodeableConcept),
        /** Focus of message */
        subject: Reference,
        /** Description of the purpose/content */
        topic: CodeableConcept,
        /** Resources that pertain to this communication */
        about: t.array(Reference),
        /** Encounter created as part of */
        encounter: Reference,
        /** When sent */
        sent: primitives.R4.dateTime,
        /** Extension of sent element */
        _sent: Element,
        /** When received */
        received: primitives.R4.dateTime,
        /** Extension of received element */
        _received: Element,
        /** Message recipient */
        recipient: t.array(Reference),
        /** Message sender */
        sender: Reference,
        /** Indication for message */
        reasonCode: t.array(CodeableConcept),
        /** Why was communication done? */
        reasonReference: t.array(Reference),
        /** Comments made about the communication */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Message payload
 */
export interface CommunicationPayload {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Message part content */
  contentString: string;
  /** Extension of contentString element */
  _contentString?: Element;
  /** Message part content */
  contentAttachment: Attachment;
  /** Message part content */
  contentReference: Reference;
}
/**
 * Message payload
 */
export const CommunicationPayload: t.Type<CommunicationPayload> = t.recursion<
  CommunicationPayload
>("CommunicationPayload", () =>
  t.intersection([
    t.type({
      /** Message part content */
      contentString: primitives.R4.string,
      /** Message part content */
      contentAttachment: Attachment,
      /** Message part content */
      contentReference: Reference
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
      /** Extension of contentString element */
      _contentString: Element
    })
  ])
);
