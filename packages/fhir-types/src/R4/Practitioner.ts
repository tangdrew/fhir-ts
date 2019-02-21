/**
 * Practitioner Module
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
 * Certification, licenses, or training pertaining to the provision of care
 */
export interface PractitionerQualification {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface PractitionerQualificationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** An identifier for this qualification for the practitioner */
  identifier?: IdentifierOutputType[];
  /** Coded representation of the qualification */
  code: CodeableConceptOutputType;
  /** Period during which the qualification is valid */
  period?: PeriodOutputType;
  /** Organization that regulates and issues the qualification */
  issuer?: ReferenceOutputType;
}

export const PractitionerQualification: t.RecursiveType<
  t.Type<PractitionerQualification, PractitionerQualificationOutputType>,
  PractitionerQualification,
  PractitionerQualificationOutputType
> = t.recursion<PractitionerQualification, PractitionerQualificationOutputType>(
  "PractitionerQualification",
  () =>
    t.intersection(
      [
        t.type({
          /** Coded representation of the qualification */
          code: CodeableConcept
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** An identifier for this qualification for the practitioner */
          identifier: t.array(Identifier),
          /** Organization that regulates and issues the qualification */
          issuer: Reference,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Period during which the qualification is valid */
          period: Period
        })
      ],
      "PractitionerQualification"
    )
);

/**
 * A person with a  formal responsibility in the provisioning of healthcare or related services
 */
export interface Practitioner {
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
  /** An identifier for the person as this agent */
  identifier?: Identifier[];
  /** Whether this practitioner's record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** The name(s) associated with the practitioner */
  name?: HumanName[];
  /** A contact detail for the practitioner (that apply to all roles) */
  telecom?: ContactPoint[];
  /** Address(es) of the practitioner that are not role specific (typically home address) */
  address?: Address[];
  /** male | female | other | unknown */
  gender?: t.TypeOf<primitives.R4.CodeType>;
  /** The date  on which the practitioner was born */
  birthDate?: t.TypeOf<primitives.R4.DateType>;
  /** Image of the person */
  photo?: Attachment[];
  /** Certification, licenses, or training pertaining to the provision of care */
  qualification?: PractitionerQualification[];
  /** A language the practitioner can use in patient communication */
  communication?: CodeableConcept[];
}

export interface PractitionerOutputType {
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
  /** An identifier for the person as this agent */
  identifier?: IdentifierOutputType[];
  /** Whether this practitioner's record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** The name(s) associated with the practitioner */
  name?: HumanNameOutputType[];
  /** A contact detail for the practitioner (that apply to all roles) */
  telecom?: ContactPointOutputType[];
  /** Address(es) of the practitioner that are not role specific (typically home address) */
  address?: AddressOutputType[];
  /** male | female | other | unknown */
  gender?: t.OutputOf<primitives.R4.CodeType>;
  /** The date  on which the practitioner was born */
  birthDate?: t.OutputOf<primitives.R4.DateType>;
  /** Image of the person */
  photo?: AttachmentOutputType[];
  /** Certification, licenses, or training pertaining to the provision of care */
  qualification?: PractitionerQualificationOutputType[];
  /** A language the practitioner can use in patient communication */
  communication?: CodeableConceptOutputType[];
}

export const Practitioner: t.RecursiveType<
  t.Type<Practitioner, PractitionerOutputType>,
  Practitioner,
  PractitionerOutputType
> = t.recursion<Practitioner, PractitionerOutputType>("Practitioner", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Whether this practitioner's record is in active use */
        active: primitives.R4.boolean,
        /** Address(es) of the practitioner that are not role specific (typically home address) */
        address: t.array(Address),
        /** The date  on which the practitioner was born */
        birthDate: primitives.R4.date,
        /** A language the practitioner can use in patient communication */
        communication: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** male | female | other | unknown */
        gender: primitives.R4.code,
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** An identifier for the person as this agent */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** The name(s) associated with the practitioner */
        name: t.array(HumanName),
        /** Image of the person */
        photo: t.array(Attachment),
        /** Certification, licenses, or training pertaining to the provision of care */
        qualification: t.array(PractitionerQualification),
        /** A contact detail for the practitioner (that apply to all roles) */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Practitioner"
  )
);
