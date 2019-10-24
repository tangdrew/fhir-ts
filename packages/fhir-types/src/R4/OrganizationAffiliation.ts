/**
 * OrganizationAffiliation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship
 */
export interface OrganizationAffiliation {
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
  /** Business identifiers that are specific to this role */
  identifier?: Identifier[];
  /** Whether this organization affiliation record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** The period during which the participatingOrganization is affiliated with the primary organization */
  period?: Period;
  /** Organization where the role is available */
  organization?: Reference;
  /** Organization that provides/performs the role (e.g. providing services or is a member of) */
  participatingOrganization?: Reference;
  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) */
  network?: Reference[];
  /** Definition of the role the participatingOrganization plays */
  code?: CodeableConcept[];
  /** Specific specialty of the participatingOrganization in the context of the role */
  specialty?: CodeableConcept[];
  /** The location(s) at which the role occurs */
  location?: Reference[];
  /** Healthcare services provided through the role */
  healthcareService?: Reference[];
  /** Contact details at the participatingOrganization relevant to this Affiliation */
  telecom?: ContactPoint[];
  /** Technical endpoints providing access to services operated for this role */
  endpoint?: Reference[];
}
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship
 */
export const OrganizationAffiliation: t.Type<
  OrganizationAffiliation
> = t.recursion<OrganizationAffiliation>("OrganizationAffiliation", () =>
  t.intersection([
    t.type({}),
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
      /** Business identifiers that are specific to this role */
      identifier: t.array(Identifier),
      /** Whether this organization affiliation record is in active use */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element,
      /** The period during which the participatingOrganization is affiliated with the primary organization */
      period: Period,
      /** Organization where the role is available */
      organization: Reference,
      /** Organization that provides/performs the role (e.g. providing services or is a member of) */
      participatingOrganization: Reference,
      /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) */
      network: t.array(Reference),
      /** Definition of the role the participatingOrganization plays */
      code: t.array(CodeableConcept),
      /** Specific specialty of the participatingOrganization in the context of the role */
      specialty: t.array(CodeableConcept),
      /** The location(s) at which the role occurs */
      location: t.array(Reference),
      /** Healthcare services provided through the role */
      healthcareService: t.array(Reference),
      /** Contact details at the participatingOrganization relevant to this Affiliation */
      telecom: t.array(ContactPoint),
      /** Technical endpoints providing access to services operated for this role */
      endpoint: t.array(Reference)
    })
  ])
);
