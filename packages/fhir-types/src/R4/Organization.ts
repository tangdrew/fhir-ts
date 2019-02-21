/**
 * Organization Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { HumanName, HumanNameOutputType } from "./HumanName";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Contact for the organization for a certain purpose
 */
export interface OrganizationContact {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface OrganizationContactOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of contact */
  purpose?: CodeableConceptOutputType;
  /** A name associated with the contact */
  name?: HumanNameOutputType;
  /** Contact details (telephone, email, etc.)  for a contact */
  telecom?: ContactPointOutputType[];
  /** Visiting or postal addresses for the contact */
  address?: AddressOutputType;
}

export const OrganizationContact: t.RecursiveType<
  t.Type<OrganizationContact, OrganizationContactOutputType>,
  OrganizationContact,
  OrganizationContactOutputType
> = t.recursion<OrganizationContact, OrganizationContactOutputType>(
  "OrganizationContact",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Visiting or postal addresses for the contact */
          address: Address,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** A name associated with the contact */
          name: HumanName,
          /** The type of contact */
          purpose: CodeableConcept,
          /** Contact details (telephone, email, etc.)  for a contact */
          telecom: t.array(ContactPoint)
        })
      ],
      "OrganizationContact"
    )
);

/**
 * A grouping of people or organizations with a common purpose
 */
export interface Organization {
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
  /** Identifies this organization  across multiple systems */
  identifier?: Identifier[];
  /** Whether the organization's record is still in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** Kind of organization */
  type?: CodeableConcept[];
  /** Name used for the organization */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** A list of alternate names that the organization is known as, or was known as in the past */
  alias?: t.TypeOf<primitives.R4.StringType>[];
  /** A contact detail for the organization */
  telecom?: ContactPoint[];
  /** An address for the organization */
  address?: Address[];
  /** The organization of which this organization forms a part */
  partOf?: Reference;
  /** Contact for the organization for a certain purpose */
  contact?: OrganizationContact[];
  /** Technical endpoints providing access to services operated for the organization */
  endpoint?: Reference[];
}

export interface OrganizationOutputType {
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
  /** Identifies this organization  across multiple systems */
  identifier?: IdentifierOutputType[];
  /** Whether the organization's record is still in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** Kind of organization */
  type?: CodeableConceptOutputType[];
  /** Name used for the organization */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** A list of alternate names that the organization is known as, or was known as in the past */
  alias?: t.OutputOf<primitives.R4.StringType>[];
  /** A contact detail for the organization */
  telecom?: ContactPointOutputType[];
  /** An address for the organization */
  address?: AddressOutputType[];
  /** The organization of which this organization forms a part */
  partOf?: ReferenceOutputType;
  /** Contact for the organization for a certain purpose */
  contact?: OrganizationContactOutputType[];
  /** Technical endpoints providing access to services operated for the organization */
  endpoint?: ReferenceOutputType[];
}

export const Organization: t.RecursiveType<
  t.Type<Organization, OrganizationOutputType>,
  Organization,
  OrganizationOutputType
> = t.recursion<Organization, OrganizationOutputType>("Organization", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Whether the organization's record is still in active use */
        active: primitives.R4.boolean,
        /** An address for the organization */
        address: t.array(Address),
        /** A list of alternate names that the organization is known as, or was known as in the past */
        alias: t.array(primitives.R4.string),
        /** Contact for the organization for a certain purpose */
        contact: t.array(OrganizationContact),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Technical endpoints providing access to services operated for the organization */
        endpoint: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Identifies this organization  across multiple systems */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name used for the organization */
        name: primitives.R4.string,
        /** The organization of which this organization forms a part */
        partOf: Reference,
        /** A contact detail for the organization */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Kind of organization */
        type: t.array(CodeableConcept)
      })
    ],
    "Organization"
  )
);
