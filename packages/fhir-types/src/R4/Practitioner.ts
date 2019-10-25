/**
 * Practitioner Module
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
 * A person with a  formal responsibility in the provisioning of healthcare or related services
 */
export interface Practitioner {
  /** The type of resource */
  resourceType?: "Practitioner";
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
  /** An identifier for the person as this agent */
  identifier?: Identifier[];
  /** Whether this practitioner's record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** The name(s) associated with the practitioner */
  name?: HumanName[];
  /** A contact detail for the practitioner (that apply to all roles) */
  telecom?: ContactPoint[];
  /** Address(es) of the practitioner that are not role specific (typically home address) */
  address?: Address[];
  /** male | female | other | unknown */
  gender?: primitives.R4.code;
  /** Extension of gender element */
  _gender?: Element;
  /** The date  on which the practitioner was born */
  birthDate?: primitives.R4.date;
  /** Extension of birthDate element */
  _birthDate?: Element;
  /** Image of the person */
  photo?: Attachment[];
  /** A language the practitioner can use in patient communication */
  communication?: CodeableConcept[];
}
/**
 * A person with a  formal responsibility in the provisioning of healthcare or related services
 */
export const Practitioner: t.Type<Practitioner> = t.recursion<Practitioner>(
  "Practitioner",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Practitioner"),
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
        /** An identifier for the person as this agent */
        identifier: t.array(Identifier),
        /** Whether this practitioner's record is in active use */
        active: primitives.R4.boolean,
        /** Extension of active element */
        _active: Element,
        /** The name(s) associated with the practitioner */
        name: t.array(HumanName),
        /** A contact detail for the practitioner (that apply to all roles) */
        telecom: t.array(ContactPoint),
        /** Address(es) of the practitioner that are not role specific (typically home address) */
        address: t.array(Address),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Extension of gender element */
        _gender: Element,
        /** The date  on which the practitioner was born */
        birthDate: primitives.R4.date,
        /** Extension of birthDate element */
        _birthDate: Element,
        /** Image of the person */
        photo: t.array(Attachment),
        /** A language the practitioner can use in patient communication */
        communication: t.array(CodeableConcept)
      })
    ])
);

/**
 * Certification, licenses, or training pertaining to the provision of care
 */
export interface PractitionerQualification {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** An identifier for this qualification for the practitioner */
  identifier?: Identifier[];
  /** Coded representation of the qualification */
  code: CodeableConcept;
  /** Period during which the qualification is valid */
  period?: Period;
  /** Organization that regulates and issues the qualification */
  issuer?: Reference;
}
/**
 * Certification, licenses, or training pertaining to the provision of care
 */
export const PractitionerQualification: t.Type<
  PractitionerQualification
> = t.recursion<PractitionerQualification>("PractitionerQualification", () =>
  t.intersection([
    t.type({
      /** Coded representation of the qualification */
      code: CodeableConcept
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
      /** An identifier for this qualification for the practitioner */
      identifier: t.array(Identifier),
      /** Period during which the qualification is valid */
      period: Period,
      /** Organization that regulates and issues the qualification */
      issuer: Reference
    })
  ])
);
