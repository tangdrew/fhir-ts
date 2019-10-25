/**
 * CareTeam Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
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
 * Planned participants in the coordination and delivery of care for a patient or group
 */
export interface CareTeam {
  /** The type of resource */
  resourceType?: "CareTeam";
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
  /** External Ids for this team */
  identifier?: Identifier[];
  /** proposed | active | suspended | inactive | entered-in-error */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Type of team */
  category?: CodeableConcept[];
  /** Name of the team, such as crisis assessment team */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Who care team is for */
  subject?: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Time period team covers */
  period?: Period;
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
/**
 * Planned participants in the coordination and delivery of care for a patient or group
 */
export const CareTeam: t.Type<CareTeam> = t.recursion<CareTeam>(
  "CareTeam",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("CareTeam"),
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
        /** External Ids for this team */
        identifier: t.array(Identifier),
        /** proposed | active | suspended | inactive | entered-in-error */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** Type of team */
        category: t.array(CodeableConcept),
        /** Name of the team, such as crisis assessment team */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Who care team is for */
        subject: Reference,
        /** Encounter created as part of */
        encounter: Reference,
        /** Time period team covers */
        period: Period,
        /** Why the care team exists */
        reasonCode: t.array(CodeableConcept),
        /** Why the care team exists */
        reasonReference: t.array(Reference),
        /** Organization responsible for the care team */
        managingOrganization: t.array(Reference),
        /** A contact detail for the care team (that applies to all members) */
        telecom: t.array(ContactPoint),
        /** Comments made about the CareTeam */
        note: t.array(Annotation)
      })
    ])
);

/**
 * Members of the team
 */
export interface CareTeamParticipant {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * Members of the team
 */
export const CareTeamParticipant: t.Type<CareTeamParticipant> = t.recursion<
  CareTeamParticipant
>("CareTeamParticipant", () =>
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
      /** Type of involvement */
      role: t.array(CodeableConcept),
      /** Who is involved */
      member: Reference,
      /** Organization of the practitioner */
      onBehalfOf: Reference,
      /** Time period of participant */
      period: Period
    })
  ])
);
