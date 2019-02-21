/**
 * Person Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { HumanName, HumanNameOutputType } from "./HumanName";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Link to a resource that concerns the same actual person
 */
export interface PersonLink {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The resource to which this actual person is associated */
  target: Reference;
  /** level1 | level2 | level3 | level4 */
  assurance?: t.TypeOf<primitives.R4.CodeType>;
}

export interface PersonLinkOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The resource to which this actual person is associated */
  target: ReferenceOutputType;
  /** level1 | level2 | level3 | level4 */
  assurance?: t.OutputOf<primitives.R4.CodeType>;
}

export const PersonLink: t.RecursiveType<
  t.Type<PersonLink, PersonLinkOutputType>,
  PersonLink,
  PersonLinkOutputType
> = t.recursion<PersonLink, PersonLinkOutputType>("PersonLink", () =>
  t.intersection(
    [
      t.type({
        /** The resource to which this actual person is associated */
        target: Reference
      }),
      t.partial({
        /** level1 | level2 | level3 | level4 */
        assurance: primitives.R4.code,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "PersonLink"
  )
);

/**
 * A generic person record
 */
export interface Person {
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
  /** A name associated with the person */
  name?: HumanName[];
  /** A contact detail for the person */
  telecom?: ContactPoint[];
  /** male | female | other | unknown */
  gender?: t.TypeOf<primitives.R4.CodeType>;
  /** The date on which the person was born */
  birthDate?: t.TypeOf<primitives.R4.DateType>;
  /** One or more addresses for the person */
  address?: Address[];
  /** Image of the person */
  photo?: Attachment;
  /** The organization that is the custodian of the person record */
  managingOrganization?: Reference;
  /** This person's record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** Link to a resource that concerns the same actual person */
  link?: PersonLink[];
}

export interface PersonOutputType {
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
  /** A name associated with the person */
  name?: HumanNameOutputType[];
  /** A contact detail for the person */
  telecom?: ContactPointOutputType[];
  /** male | female | other | unknown */
  gender?: t.OutputOf<primitives.R4.CodeType>;
  /** The date on which the person was born */
  birthDate?: t.OutputOf<primitives.R4.DateType>;
  /** One or more addresses for the person */
  address?: AddressOutputType[];
  /** Image of the person */
  photo?: AttachmentOutputType;
  /** The organization that is the custodian of the person record */
  managingOrganization?: ReferenceOutputType;
  /** This person's record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** Link to a resource that concerns the same actual person */
  link?: PersonLinkOutputType[];
}

export const Person: t.RecursiveType<
  t.Type<Person, PersonOutputType>,
  Person,
  PersonOutputType
> = t.recursion<Person, PersonOutputType>("Person", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** This person's record is in active use */
        active: primitives.R4.boolean,
        /** One or more addresses for the person */
        address: t.array(Address),
        /** The date on which the person was born */
        birthDate: primitives.R4.date,
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
        /** Link to a resource that concerns the same actual person */
        link: t.array(PersonLink),
        /** The organization that is the custodian of the person record */
        managingOrganization: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** A name associated with the person */
        name: t.array(HumanName),
        /** Image of the person */
        photo: Attachment,
        /** A contact detail for the person */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Person"
  )
);
