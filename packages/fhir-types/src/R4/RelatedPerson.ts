/**
 * RelatedPerson Module
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
 * A person that is related to a patient, but who is not a direct target of care
 */
export interface RelatedPerson {
  /** The type of resource */
  resourceType?: "RelatedPerson";
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
  /** A human identifier for this person */
  identifier?: Identifier[];
  /** Whether this related person's record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** The patient this person is related to */
  patient: Reference;
  /** The nature of the relationship */
  relationship?: CodeableConcept[];
  /** A name associated with the person */
  name?: HumanName[];
  /** A contact detail for the person */
  telecom?: ContactPoint[];
  /** male | female | other | unknown */
  gender?: primitives.R4.code;
  /** Extension of gender element */
  _gender?: Element;
  /** The date on which the related person was born */
  birthDate?: primitives.R4.date;
  /** Extension of birthDate element */
  _birthDate?: Element;
  /** Address where the related person can be contacted or visited */
  address?: Address[];
  /** Image of the person */
  photo?: Attachment[];
  /** Period of time that this relationship is considered valid */
  period?: Period;
}
/**
 * A person that is related to a patient, but who is not a direct target of care
 */
export const RelatedPerson: t.Type<RelatedPerson> = t.recursion<RelatedPerson>(
  "RelatedPerson",
  () =>
    t.intersection([
      t.type({
        /** The patient this person is related to */
        patient: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("RelatedPerson"),
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
        /** A human identifier for this person */
        identifier: t.array(Identifier),
        /** Whether this related person's record is in active use */
        active: primitives.R4.boolean,
        /** Extension of active element */
        _active: Element,
        /** The nature of the relationship */
        relationship: t.array(CodeableConcept),
        /** A name associated with the person */
        name: t.array(HumanName),
        /** A contact detail for the person */
        telecom: t.array(ContactPoint),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Extension of gender element */
        _gender: Element,
        /** The date on which the related person was born */
        birthDate: primitives.R4.date,
        /** Extension of birthDate element */
        _birthDate: Element,
        /** Address where the related person can be contacted or visited */
        address: t.array(Address),
        /** Image of the person */
        photo: t.array(Attachment),
        /** Period of time that this relationship is considered valid */
        period: Period
      })
    ])
);

/**
 * A language which may be used to communicate with about the patient's health
 */
export interface RelatedPersonCommunication {
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
 * A language which may be used to communicate with about the patient's health
 */
export const RelatedPersonCommunication: t.Type<
  RelatedPersonCommunication
> = t.recursion<RelatedPersonCommunication>("RelatedPersonCommunication", () =>
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
