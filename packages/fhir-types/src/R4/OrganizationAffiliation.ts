/**
 * OrganizationAffiliation Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship
 */
export interface OrganizationAffiliation {
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
  /** Business identifiers that are specific to this role */
  identifier?: Identifier[];
  /** Whether this organization affiliation record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
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

export interface OrganizationAffiliationOutputType {
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
  /** Business identifiers that are specific to this role */
  identifier?: IdentifierOutputType[];
  /** Whether this organization affiliation record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** The period during which the participatingOrganization is affiliated with the primary organization */
  period?: PeriodOutputType;
  /** Organization where the role is available */
  organization?: ReferenceOutputType;
  /** Organization that provides/performs the role (e.g. providing services or is a member of) */
  participatingOrganization?: ReferenceOutputType;
  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) */
  network?: ReferenceOutputType[];
  /** Definition of the role the participatingOrganization plays */
  code?: CodeableConceptOutputType[];
  /** Specific specialty of the participatingOrganization in the context of the role */
  specialty?: CodeableConceptOutputType[];
  /** The location(s) at which the role occurs */
  location?: ReferenceOutputType[];
  /** Healthcare services provided through the role */
  healthcareService?: ReferenceOutputType[];
  /** Contact details at the participatingOrganization relevant to this Affiliation */
  telecom?: ContactPointOutputType[];
  /** Technical endpoints providing access to services operated for this role */
  endpoint?: ReferenceOutputType[];
}

export const OrganizationAffiliation: t.RecursiveType<
  t.Type<OrganizationAffiliation, OrganizationAffiliationOutputType>,
  OrganizationAffiliation,
  OrganizationAffiliationOutputType
> = t.recursion<OrganizationAffiliation, OrganizationAffiliationOutputType>(
  "OrganizationAffiliation",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Whether this organization affiliation record is in active use */
          active: primitives.R4.boolean,
          /** Definition of the role the participatingOrganization plays */
          code: t.array(CodeableConcept),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Technical endpoints providing access to services operated for this role */
          endpoint: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Healthcare services provided through the role */
          healthcareService: t.array(Reference),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** Business identifiers that are specific to this role */
          identifier: t.array(Identifier),
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** The location(s) at which the role occurs */
          location: t.array(Reference),
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined) */
          network: t.array(Reference),
          /** Organization where the role is available */
          organization: Reference,
          /** Organization that provides/performs the role (e.g. providing services or is a member of) */
          participatingOrganization: Reference,
          /** The period during which the participatingOrganization is affiliated with the primary organization */
          period: Period,
          /** Specific specialty of the participatingOrganization in the context of the role */
          specialty: t.array(CodeableConcept),
          /** Contact details at the participatingOrganization relevant to this Affiliation */
          telecom: t.array(ContactPoint),
          /** Text summary of the resource, for human interpretation */
          text: Narrative
        })
      ],
      "OrganizationAffiliation"
    )
);
