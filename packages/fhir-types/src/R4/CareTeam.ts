/**
 * CareTeam Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
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
 * Members of the team
 */
export interface CareTeamParticipant {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of involvement */
  role?: CodeableConcept[];
  /** Who is involved */
  member?: Reference;
  /** Organization of the practitioner */
  onBehalfOf?: Reference;
  /** Time period of participant */
  period?: Period;
}

export interface CareTeamParticipantOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of involvement */
  role?: CodeableConceptOutputType[];
  /** Who is involved */
  member?: ReferenceOutputType;
  /** Organization of the practitioner */
  onBehalfOf?: ReferenceOutputType;
  /** Time period of participant */
  period?: PeriodOutputType;
}

export const CareTeamParticipant: t.RecursiveType<
  t.Type<CareTeamParticipant, CareTeamParticipantOutputType>,
  CareTeamParticipant,
  CareTeamParticipantOutputType
> = t.recursion<CareTeamParticipant, CareTeamParticipantOutputType>(
  "CareTeamParticipant",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Who is involved */
          member: Reference,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Organization of the practitioner */
          onBehalfOf: Reference,
          /** Time period of participant */
          period: Period,
          /** Type of involvement */
          role: t.array(CodeableConcept)
        })
      ],
      "CareTeamParticipant"
    )
);

/**
 * Planned participants in the coordination and delivery of care for a patient or group
 */
export interface CareTeam {
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
  /** External Ids for this team */
  identifier?: Identifier[];
  /** proposed | active | suspended | inactive | entered-in-error */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** Type of team */
  category?: CodeableConcept[];
  /** Name of the team, such as crisis assessment team */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Who care team is for */
  subject?: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Time period team covers */
  period?: Period;
  /** Members of the team */
  participant?: CareTeamParticipant[];
  /** Why the care team exists */
  reasonCode?: CodeableConcept[];
  /** Why the care team exists */
  reasonReference?: Reference[];
  /** Organization responsible for the care team */
  managingOrganization?: Reference[];
  /** A contact detail for the care team (that applies to all members) */
  telecom?: ContactPoint[];
  /** Comments made about the CareTeam */
  note?: Annotation[];
}

export interface CareTeamOutputType {
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
  /** External Ids for this team */
  identifier?: IdentifierOutputType[];
  /** proposed | active | suspended | inactive | entered-in-error */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** Type of team */
  category?: CodeableConceptOutputType[];
  /** Name of the team, such as crisis assessment team */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Who care team is for */
  subject?: ReferenceOutputType;
  /** Encounter created as part of */
  encounter?: ReferenceOutputType;
  /** Time period team covers */
  period?: PeriodOutputType;
  /** Members of the team */
  participant?: CareTeamParticipantOutputType[];
  /** Why the care team exists */
  reasonCode?: CodeableConceptOutputType[];
  /** Why the care team exists */
  reasonReference?: ReferenceOutputType[];
  /** Organization responsible for the care team */
  managingOrganization?: ReferenceOutputType[];
  /** A contact detail for the care team (that applies to all members) */
  telecom?: ContactPointOutputType[];
  /** Comments made about the CareTeam */
  note?: AnnotationOutputType[];
}

export const CareTeam: t.RecursiveType<
  t.Type<CareTeam, CareTeamOutputType>,
  CareTeam,
  CareTeamOutputType
> = t.recursion<CareTeam, CareTeamOutputType>("CareTeam", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Type of team */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Encounter created as part of */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** External Ids for this team */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Organization responsible for the care team */
        managingOrganization: t.array(Reference),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name of the team, such as crisis assessment team */
        name: primitives.R4.string,
        /** Comments made about the CareTeam */
        note: t.array(Annotation),
        /** Members of the team */
        participant: t.array(CareTeamParticipant),
        /** Time period team covers */
        period: Period,
        /** Why the care team exists */
        reasonCode: t.array(CodeableConcept),
        /** Why the care team exists */
        reasonReference: t.array(Reference),
        /** proposed | active | suspended | inactive | entered-in-error */
        status: primitives.R4.code,
        /** Who care team is for */
        subject: Reference,
        /** A contact detail for the care team (that applies to all members) */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "CareTeam"
  )
);
