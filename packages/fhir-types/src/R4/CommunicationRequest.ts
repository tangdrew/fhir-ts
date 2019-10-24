/**
 * CommunicationRequest Module
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
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A request for information to be sent to a receiver
 */
export interface CommunicationRequest {
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
  /** Fulfills plan or proposal */
  basedOn?: Reference[];
  /** Request(s) replaced by this request */
  replaces?: Reference[];
  /** Composite request this is part of */
  groupIdentifier?: Identifier;
  /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
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
  /** True if request is prohibiting action */
  doNotPerform?: boolean;
  /** Extension of doNotPerform element */
  _doNotPerform?: Element;
  /** A channel of communication */
  medium?: CodeableConcept[];
  /** Focus of message */
  subject?: Reference;
  /** Resources that pertain to this communication request */
  about?: Reference[];
  /** Encounter created as part of */
  encounter?: Reference;
  /** When scheduled */
  occurrenceDateTime?: primitives.R4.dateTime;
  /** Extension of occurrenceDateTime element */
  _occurrenceDateTime?: Element;
  /** When scheduled */
  occurrencePeriod?: Period;
  /** When request transitioned to being actionable */
  authoredOn?: primitives.R4.dateTime;
  /** Extension of authoredOn element */
  _authoredOn?: Element;
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
/**
 * A request for information to be sent to a receiver
 */
export const CommunicationRequest: t.Type<CommunicationRequest> = t.recursion<
  CommunicationRequest
>("CommunicationRequest", () =>
  t.intersection([
    t.type({
      /** draft | active | suspended | cancelled | completed | entered-in-error | unknown */
      status: primitives.R4.code
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
      /** Unique identifier */
      identifier: t.array(Identifier),
      /** Fulfills plan or proposal */
      basedOn: t.array(Reference),
      /** Request(s) replaced by this request */
      replaces: t.array(Reference),
      /** Composite request this is part of */
      groupIdentifier: Identifier,
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
      /** True if request is prohibiting action */
      doNotPerform: primitives.R4.boolean,
      /** Extension of doNotPerform element */
      _doNotPerform: Element,
      /** A channel of communication */
      medium: t.array(CodeableConcept),
      /** Focus of message */
      subject: Reference,
      /** Resources that pertain to this communication request */
      about: t.array(Reference),
      /** Encounter created as part of */
      encounter: Reference,
      /** When scheduled */
      occurrenceDateTime: primitives.R4.dateTime,
      /** Extension of occurrenceDateTime element */
      _occurrenceDateTime: Element,
      /** When scheduled */
      occurrencePeriod: Period,
      /** When request transitioned to being actionable */
      authoredOn: primitives.R4.dateTime,
      /** Extension of authoredOn element */
      _authoredOn: Element,
      /** Who/what is requesting service */
      requester: Reference,
      /** Message recipient */
      recipient: t.array(Reference),
      /** Message sender */
      sender: Reference,
      /** Why is communication needed? */
      reasonCode: t.array(CodeableConcept),
      /** Why is communication needed? */
      reasonReference: t.array(Reference),
      /** Comments made about communication request */
      note: t.array(Annotation)
    })
  ])
);

/**
 * Message payload
 */
export interface CommunicationRequestPayload {
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
export const CommunicationRequestPayload: t.Type<
  CommunicationRequestPayload
> = t.recursion<CommunicationRequestPayload>(
  "CommunicationRequestPayload",
  () =>
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
