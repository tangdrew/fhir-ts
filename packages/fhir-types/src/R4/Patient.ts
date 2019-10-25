/**
 * Patient Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Information about an individual or animal receiving health care services
 */
export interface Patient {
  /** The type of resource */
  resourceType?: "Patient";
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
  /** An identifier for this patient */
  identifier?: Identifier[];
  /** Whether this patient's record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** A name associated with the patient */
  name?: HumanName[];
  /** A contact detail for the individual */
  telecom?: ContactPoint[];
  /** male | female | other | unknown */
  gender?: primitives.R4.code;
  /** Extension of gender element */
  _gender?: Element;
  /** The date of birth for the individual */
  birthDate?: primitives.R4.date;
  /** Extension of birthDate element */
  _birthDate?: Element;
  /** Indicates if the individual is deceased or not */
  deceasedBoolean?: boolean;
  /** Extension of deceasedBoolean element */
  _deceasedBoolean?: Element;
  /** Indicates if the individual is deceased or not */
  deceasedDateTime?: primitives.R4.dateTime;
  /** Extension of deceasedDateTime element */
  _deceasedDateTime?: Element;
  /** An address for the individual */
  address?: Address[];
  /** Marital (civil) status of a patient */
  maritalStatus?: CodeableConcept;
  /** Whether patient is part of a multiple birth */
  multiplebirthBoolean?: boolean;
  /** Extension of multiplebirthBoolean element */
  _multiplebirthBoolean?: Element;
  /** Whether patient is part of a multiple birth */
  multiplebirthInteger?: primitives.R4.integer;
  /** Extension of multiplebirthInteger element */
  _multiplebirthInteger?: Element;
  /** Image of the patient */
  photo?: Attachment[];
  /** Patient's nominated primary care provider */
  generalPractitioner?: Reference[];
  /** Organization that is the custodian of the patient record */
  managingOrganization?: Reference;
}
/**
 * Information about an individual or animal receiving health care services
 */
export const Patient: t.Type<Patient> = t.recursion<Patient>("Patient", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Patient"),
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
      /** An identifier for this patient */
      identifier: t.array(Identifier),
      /** Whether this patient's record is in active use */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element,
      /** A name associated with the patient */
      name: t.array(HumanName),
      /** A contact detail for the individual */
      telecom: t.array(ContactPoint),
      /** male | female | other | unknown */
      gender: primitives.R4.code,
      /** Extension of gender element */
      _gender: Element,
      /** The date of birth for the individual */
      birthDate: primitives.R4.date,
      /** Extension of birthDate element */
      _birthDate: Element,
      /** Indicates if the individual is deceased or not */
      deceasedBoolean: primitives.R4.boolean,
      /** Extension of deceasedBoolean element */
      _deceasedBoolean: Element,
      /** Indicates if the individual is deceased or not */
      deceasedDateTime: primitives.R4.dateTime,
      /** Extension of deceasedDateTime element */
      _deceasedDateTime: Element,
      /** An address for the individual */
      address: t.array(Address),
      /** Marital (civil) status of a patient */
      maritalStatus: CodeableConcept,
      /** Whether patient is part of a multiple birth */
      multiplebirthBoolean: primitives.R4.boolean,
      /** Extension of multiplebirthBoolean element */
      _multiplebirthBoolean: Element,
      /** Whether patient is part of a multiple birth */
      multiplebirthInteger: primitives.R4.integer,
      /** Extension of multiplebirthInteger element */
      _multiplebirthInteger: Element,
      /** Image of the patient */
      photo: t.array(Attachment),
      /** Patient's nominated primary care provider */
      generalPractitioner: t.array(Reference),
      /** Organization that is the custodian of the patient record */
      managingOrganization: Reference
    })
  ])
);

/**
 * A contact party (e.g. guardian, partner, friend) for the patient
 */
export interface PatientContact {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
  gender?: primitives.R4.code;
  /** Extension of gender element */
  _gender?: Element;
  /** Organization that is associated with the contact */
  organization?: Reference;
  /** The period during which this contact person or organization is valid to be contacted relating to this patient */
  period?: Period;
}
/**
 * A contact party (e.g. guardian, partner, friend) for the patient
 */
export const PatientContact: t.Type<PatientContact> = t.recursion<
  PatientContact
>("PatientContact", () =>
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
      /** The kind of relationship */
      relationship: t.array(CodeableConcept),
      /** A name associated with the contact person */
      name: HumanName,
      /** A contact detail for the person */
      telecom: t.array(ContactPoint),
      /** Address for the contact person */
      address: Address,
      /** male | female | other | unknown */
      gender: primitives.R4.code,
      /** Extension of gender element */
      _gender: Element,
      /** Organization that is associated with the contact */
      organization: Reference,
      /** The period during which this contact person or organization is valid to be contacted relating to this patient */
      period: Period
    })
  ])
);

/**
 * A language which may be used to communicate with the patient about his or her health
 */
export interface PatientCommunication {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The language which can be used to communicate with the patient about his or her health */
  language: CodeableConcept;
  /** Language preference indicator */
  preferred?: boolean;
  /** Extension of preferred element */
  _preferred?: Element;
}
/**
 * A language which may be used to communicate with the patient about his or her health
 */
export const PatientCommunication: t.Type<PatientCommunication> = t.recursion<
  PatientCommunication
>("PatientCommunication", () =>
  t.intersection([
    t.type({
      /** The language which can be used to communicate with the patient about his or her health */
      language: CodeableConcept
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
      /** Language preference indicator */
      preferred: primitives.R4.boolean,
      /** Extension of preferred element */
      _preferred: Element
    })
  ])
);

/**
 * Link to another patient resource that concerns the same actual person
 */
export interface PatientLink {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The other patient or related person resource that the link refers to */
  other: Reference;
  /** replaced-by | replaces | refer | seealso */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
}
/**
 * Link to another patient resource that concerns the same actual person
 */
export const PatientLink: t.Type<PatientLink> = t.recursion<PatientLink>(
  "PatientLink",
  () =>
    t.intersection([
      t.type({
        /** The other patient or related person resource that the link refers to */
        other: Reference,
        /** replaced-by | replaces | refer | seealso */
        type: primitives.R4.code
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
        /** Extension of type element */
        _type: Element
      })
    ])
);
