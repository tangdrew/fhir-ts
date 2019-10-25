/**
 * Person Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A generic person record
 */
export interface Person {
  /** The type of resource */
  resourceType?: "Person";
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
  /** A name associated with the person */
  name?: HumanName[];
  /** A contact detail for the person */
  telecom?: ContactPoint[];
  /** male | female | other | unknown */
  gender?: primitives.R4.code;
  /** Extension of gender element */
  _gender?: Element;
  /** The date on which the person was born */
  birthDate?: primitives.R4.date;
  /** Extension of birthDate element */
  _birthDate?: Element;
  /** One or more addresses for the person */
  address?: Address[];
  /** Image of the person */
  photo?: Attachment;
  /** The organization that is the custodian of the person record */
  managingOrganization?: Reference;
  /** This person's record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
}
/**
 * A generic person record
 */
export const Person: t.Type<Person> = t.recursion<Person>("Person", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Person"),
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
      /** A name associated with the person */
      name: t.array(HumanName),
      /** A contact detail for the person */
      telecom: t.array(ContactPoint),
      /** male | female | other | unknown */
      gender: primitives.R4.code,
      /** Extension of gender element */
      _gender: Element,
      /** The date on which the person was born */
      birthDate: primitives.R4.date,
      /** Extension of birthDate element */
      _birthDate: Element,
      /** One or more addresses for the person */
      address: t.array(Address),
      /** Image of the person */
      photo: Attachment,
      /** The organization that is the custodian of the person record */
      managingOrganization: Reference,
      /** This person's record is in active use */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element
    })
  ])
);

/**
 * Link to a resource that concerns the same actual person
 */
export interface PersonLink {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The resource to which this actual person is associated */
  target: Reference;
  /** level1 | level2 | level3 | level4 */
  assurance?: primitives.R4.code;
  /** Extension of assurance element */
  _assurance?: Element;
}
/**
 * Link to a resource that concerns the same actual person
 */
export const PersonLink: t.Type<PersonLink> = t.recursion<PersonLink>(
  "PersonLink",
  () =>
    t.intersection([
      t.type({
        /** The resource to which this actual person is associated */
        target: Reference
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
        /** level1 | level2 | level3 | level4 */
        assurance: primitives.R4.code,
        /** Extension of assurance element */
        _assurance: Element
      })
    ])
);
