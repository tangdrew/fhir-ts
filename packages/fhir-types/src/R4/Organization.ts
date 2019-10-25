/**
 * Organization Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { CodeableConcept } from "./CodeableConcept";
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
 * A grouping of people or organizations with a common purpose
 */
export interface Organization {
  /** The type of resource */
  resourceType?: "Organization";
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
  /** Identifies this organization  across multiple systems */
  identifier?: Identifier[];
  /** Whether the organization's record is still in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** Kind of organization */
  type?: CodeableConcept[];
  /** Name used for the organization */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** A list of alternate names that the organization is known as, or was known as in the past */
  alias?: string[];
  /** Extension of alias element */
  _alias?: Element[];
  /** A contact detail for the organization */
  telecom?: ContactPoint[];
  /** An address for the organization */
  address?: Address[];
  /** The organization of which this organization forms a part */
  partOf?: Reference;
  /** Technical endpoints providing access to services operated for the organization */
  endpoint?: Reference[];
}
/**
 * A grouping of people or organizations with a common purpose
 */
export const Organization: t.Type<Organization> = t.recursion<Organization>(
  "Organization",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Organization"),
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
        /** Identifies this organization  across multiple systems */
        identifier: t.array(Identifier),
        /** Whether the organization's record is still in active use */
        active: primitives.R4.boolean,
        /** Extension of active element */
        _active: Element,
        /** Kind of organization */
        type: t.array(CodeableConcept),
        /** Name used for the organization */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** A list of alternate names that the organization is known as, or was known as in the past */
        alias: t.array(primitives.R4.string),
        /** Extension of alias element */
        _alias: t.array(Element),
        /** A contact detail for the organization */
        telecom: t.array(ContactPoint),
        /** An address for the organization */
        address: t.array(Address),
        /** The organization of which this organization forms a part */
        partOf: Reference,
        /** Technical endpoints providing access to services operated for the organization */
        endpoint: t.array(Reference)
      })
    ])
);

/**
 * Contact for the organization for a certain purpose
 */
export interface OrganizationContact {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of contact */
  purpose?: CodeableConcept;
  /** A name associated with the contact */
  name?: HumanName;
  /** Contact details (telephone, email, etc.)  for a contact */
  telecom?: ContactPoint[];
  /** Visiting or postal addresses for the contact */
  address?: Address;
}
/**
 * Contact for the organization for a certain purpose
 */
export const OrganizationContact: t.Type<OrganizationContact> = t.recursion<
  OrganizationContact
>("OrganizationContact", () =>
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
      /** The type of contact */
      purpose: CodeableConcept,
      /** A name associated with the contact */
      name: HumanName,
      /** Contact details (telephone, email, etc.)  for a contact */
      telecom: t.array(ContactPoint),
      /** Visiting or postal addresses for the contact */
      address: Address
    })
  ])
);
