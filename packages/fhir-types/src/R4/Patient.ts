/**
 * Patient Module
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
 * Link to another patient resource that concerns the same actual person
 */
export interface PatientLink {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The other patient or related person resource that the link refers to */
  other: Reference;
  /** replaced-by | replaces | refer | seealso */
  type: t.TypeOf<primitives.R4.CodeType>;
}

export interface PatientLinkOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The other patient or related person resource that the link refers to */
  other: ReferenceOutputType;
  /** replaced-by | replaces | refer | seealso */
  type: t.OutputOf<primitives.R4.CodeType>;
}

export const PatientLink: t.RecursiveType<
  t.Type<PatientLink, PatientLinkOutputType>,
  PatientLink,
  PatientLinkOutputType
> = t.recursion<PatientLink, PatientLinkOutputType>("PatientLink", () =>
  t.intersection(
    [
      t.type({
        /** The other patient or related person resource that the link refers to */
        other: Reference,
        /** replaced-by | replaces | refer | seealso */
        type: primitives.R4.code
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
    "PatientLink"
  )
);

/**
 * A contact party (e.g. guardian, partner, friend) for the patient
 */
export interface PatientContact {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The kind of relationship */
  relationship?: CodeableConcept[];
  /** A name associated with the contact person */
  name?: HumanName;
  /** A contact detail for the person */
  telecom?: ContactPoint[];
  /** Address for the contact person */
  address?: Address;
  /** male | female | other | unknown */
  gender?: t.TypeOf<primitives.R4.CodeType>;
  /** Organization that is associated with the contact */
  organization?: Reference;
  /** The period during which this contact person or organization is valid to be contacted relating to this patient */
  period?: Period;
}

export interface PatientContactOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The kind of relationship */
  relationship?: CodeableConceptOutputType[];
  /** A name associated with the contact person */
  name?: HumanNameOutputType;
  /** A contact detail for the person */
  telecom?: ContactPointOutputType[];
  /** Address for the contact person */
  address?: AddressOutputType;
  /** male | female | other | unknown */
  gender?: t.OutputOf<primitives.R4.CodeType>;
  /** Organization that is associated with the contact */
  organization?: ReferenceOutputType;
  /** The period during which this contact person or organization is valid to be contacted relating to this patient */
  period?: PeriodOutputType;
}

export const PatientContact: t.RecursiveType<
  t.Type<PatientContact, PatientContactOutputType>,
  PatientContact,
  PatientContactOutputType
> = t.recursion<PatientContact, PatientContactOutputType>(
  "PatientContact",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Address for the contact person */
          address: Address,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** male | female | other | unknown */
          gender: primitives.R4.code,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** A name associated with the contact person */
          name: HumanName,
          /** Organization that is associated with the contact */
          organization: Reference,
          /** The period during which this contact person or organization is valid to be contacted relating to this patient */
          period: Period,
          /** The kind of relationship */
          relationship: t.array(CodeableConcept),
          /** A contact detail for the person */
          telecom: t.array(ContactPoint)
        })
      ],
      "PatientContact"
    )
);

/**
 * A language which may be used to communicate with the patient about his or her health
 */
export interface PatientCommunication {
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

export interface PatientCommunicationOutputType {
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

export const PatientCommunication: t.RecursiveType<
  t.Type<PatientCommunication, PatientCommunicationOutputType>,
  PatientCommunication,
  PatientCommunicationOutputType
> = t.recursion<PatientCommunication, PatientCommunicationOutputType>(
  "PatientCommunication",
  () =>
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
      "PatientCommunication"
    )
);

/**
 * Information about an individual or animal receiving health care services
 */
export interface Patient {
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
  /** An identifier for this patient */
  identifier?: Identifier[];
  /** Whether this patient's record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** A name associated with the patient */
  name?: HumanName[];
  /** A contact detail for the individual */
  telecom?: ContactPoint[];
  /** male | female | other | unknown */
  gender?: t.TypeOf<primitives.R4.CodeType>;
  /** The date of birth for the individual */
  birthDate?: t.TypeOf<primitives.R4.DateType>;
  /** Indicates if the individual is deceased or not */
  deceased?:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.DateTimeType>;
  /** An address for the individual */
  address?: Address[];
  /** Marital (civil) status of a patient */
  maritalStatus?: CodeableConcept;
  /** Whether patient is part of a multiple birth */
  multiplebirth?:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.IntegerType>;
  /** Image of the patient */
  photo?: Attachment[];
  /** A contact party (e.g. guardian, partner, friend) for the patient */
  contact?: PatientContact[];
  /** A language which may be used to communicate with the patient about his or her health */
  communication?: PatientCommunication[];
  /** Patient's nominated primary care provider */
  generalPractitioner?: Reference[];
  /** Organization that is the custodian of the patient record */
  managingOrganization?: Reference;
  /** Link to another patient resource that concerns the same actual person */
  link?: PatientLink[];
}

export interface PatientOutputType {
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
  /** An identifier for this patient */
  identifier?: IdentifierOutputType[];
  /** Whether this patient's record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** A name associated with the patient */
  name?: HumanNameOutputType[];
  /** A contact detail for the individual */
  telecom?: ContactPointOutputType[];
  /** male | female | other | unknown */
  gender?: t.OutputOf<primitives.R4.CodeType>;
  /** The date of birth for the individual */
  birthDate?: t.OutputOf<primitives.R4.DateType>;
  /** Indicates if the individual is deceased or not */
  deceased?:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.DateTimeType>;
  /** An address for the individual */
  address?: AddressOutputType[];
  /** Marital (civil) status of a patient */
  maritalStatus?: CodeableConceptOutputType;
  /** Whether patient is part of a multiple birth */
  multiplebirth?:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.IntegerType>;
  /** Image of the patient */
  photo?: AttachmentOutputType[];
  /** A contact party (e.g. guardian, partner, friend) for the patient */
  contact?: PatientContactOutputType[];
  /** A language which may be used to communicate with the patient about his or her health */
  communication?: PatientCommunicationOutputType[];
  /** Patient's nominated primary care provider */
  generalPractitioner?: ReferenceOutputType[];
  /** Organization that is the custodian of the patient record */
  managingOrganization?: ReferenceOutputType;
  /** Link to another patient resource that concerns the same actual person */
  link?: PatientLinkOutputType[];
}

export const Patient: t.RecursiveType<
  t.Type<Patient, PatientOutputType>,
  Patient,
  PatientOutputType
> = t.recursion<Patient, PatientOutputType>("Patient", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Whether this patient's record is in active use */
        active: primitives.R4.boolean,
        /** An address for the individual */
        address: t.array(Address),
        /** The date of birth for the individual */
        birthDate: primitives.R4.date,
        /** A language which may be used to communicate with the patient about his or her health */
        communication: t.array(PatientCommunication),
        /** A contact party (e.g. guardian, partner, friend) for the patient */
        contact: t.array(PatientContact),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Indicates if the individual is deceased or not */
        deceased: t.union([primitives.R4.boolean, primitives.R4.dateTime]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Patient's nominated primary care provider */
        generalPractitioner: t.array(Reference),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** An identifier for this patient */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Link to another patient resource that concerns the same actual person */
        link: t.array(PatientLink),
        /** Organization that is the custodian of the patient record */
        managingOrganization: Reference,
        /** Marital (civil) status of a patient */
        maritalStatus: CodeableConcept,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Whether patient is part of a multiple birth */
        multiplebirth: t.union([primitives.R4.boolean, primitives.R4.integer]),
        /** A name associated with the patient */
        name: t.array(HumanName),
        /** Image of the patient */
        photo: t.array(Attachment),
        /** A contact detail for the individual */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Patient"
  )
);
