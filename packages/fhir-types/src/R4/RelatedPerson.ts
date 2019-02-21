/**
 * RelatedPerson Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { HumanName, HumanNameOutputType } from "./HumanName";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * A language which may be used to communicate with about the patient's health
 */
export interface RelatedPersonCommunication {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The language which can be used to communicate with the patient about his or her health */
  language: CodeableConcept;
  /** Language preference indicator */
  preferred?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface RelatedPersonCommunicationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The language which can be used to communicate with the patient about his or her health */
  language: CodeableConceptOutputType;
  /** Language preference indicator */
  preferred?: t.OutputOf<primitives.R4.BooleanType>;
}

export const RelatedPersonCommunication: t.RecursiveType<
  t.Type<RelatedPersonCommunication, RelatedPersonCommunicationOutputType>,
  RelatedPersonCommunication,
  RelatedPersonCommunicationOutputType
> = t.recursion<
  RelatedPersonCommunication,
  RelatedPersonCommunicationOutputType
>("RelatedPersonCommunication", () =>
  t.intersection(
    [
      t.type({
        /** The language which can be used to communicate with the patient about his or her health */
        language: CodeableConcept
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Language preference indicator */
        preferred: primitives.R4.boolean
      })
    ],
    "RelatedPersonCommunication"
  )
);

/**
 * A person that is related to a patient, but who is not a direct target of care
 */
export interface RelatedPerson {
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
  /** A human identifier for this person */
  identifier?: Identifier[];
  /** Whether this related person's record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** The patient this person is related to */
  patient: Reference;
  /** The nature of the relationship */
  relationship?: CodeableConcept[];
  /** A name associated with the person */
  name?: HumanName[];
  /** A contact detail for the person */
  telecom?: ContactPoint[];
  /** male | female | other | unknown */
  gender?: t.TypeOf<primitives.R4.CodeType>;
  /** The date on which the related person was born */
  birthDate?: t.TypeOf<primitives.R4.DateType>;
  /** Address where the related person can be contacted or visited */
  address?: Address[];
  /** Image of the person */
  photo?: Attachment[];
  /** Period of time that this relationship is considered valid */
  period?: Period;
  /** A language which may be used to communicate with about the patient's health */
  communication?: RelatedPersonCommunication[];
}

export interface RelatedPersonOutputType {
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
  /** A human identifier for this person */
  identifier?: IdentifierOutputType[];
  /** Whether this related person's record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** The patient this person is related to */
  patient: ReferenceOutputType;
  /** The nature of the relationship */
  relationship?: CodeableConceptOutputType[];
  /** A name associated with the person */
  name?: HumanNameOutputType[];
  /** A contact detail for the person */
  telecom?: ContactPointOutputType[];
  /** male | female | other | unknown */
  gender?: t.OutputOf<primitives.R4.CodeType>;
  /** The date on which the related person was born */
  birthDate?: t.OutputOf<primitives.R4.DateType>;
  /** Address where the related person can be contacted or visited */
  address?: AddressOutputType[];
  /** Image of the person */
  photo?: AttachmentOutputType[];
  /** Period of time that this relationship is considered valid */
  period?: PeriodOutputType;
  /** A language which may be used to communicate with about the patient's health */
  communication?: RelatedPersonCommunicationOutputType[];
}

export const RelatedPerson: t.RecursiveType<
  t.Type<RelatedPerson, RelatedPersonOutputType>,
  RelatedPerson,
  RelatedPersonOutputType
> = t.recursion<RelatedPerson, RelatedPersonOutputType>("RelatedPerson", () =>
  t.intersection(
    [
      t.type({
        /** The patient this person is related to */
        patient: Reference
      }),
      t.partial({
        /** Whether this related person's record is in active use */
        active: primitives.R4.boolean,
        /** Address where the related person can be contacted or visited */
        address: t.array(Address),
        /** The date on which the related person was born */
        birthDate: primitives.R4.date,
        /** A language which may be used to communicate with about the patient's health */
        communication: t.array(RelatedPersonCommunication),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** A human identifier for this person */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** A name associated with the person */
        name: t.array(HumanName),
        /** Period of time that this relationship is considered valid */
        period: Period,
        /** Image of the person */
        photo: t.array(Attachment),
        /** The nature of the relationship */
        relationship: t.array(CodeableConcept),
        /** A contact detail for the person */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "RelatedPerson"
  )
);
