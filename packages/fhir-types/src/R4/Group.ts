/**
 * Group Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Group of multiple entities
 */
export interface Group {
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
  /** Unique id */
  identifier?: Identifier[];
  /** Whether this group's record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** person | animal | practitioner | device | medication | substance */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Descriptive or actual */
  actual: boolean;
  /** Extension of actual element */
  _actual?: Element;
  /** Kind of Group members */
  code?: CodeableConcept;
  /** Label for Group */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Number of members */
  quantity?: primitives.R4.unsignedInt;
  /** Extension of quantity element */
  _quantity?: Element;
  /** Entity that is the custodian of the Group's definition */
  managingEntity?: Reference;
}
/**
 * Group of multiple entities
 */
export const Group: t.Type<Group> = t.recursion<Group>("Group", () =>
  t.intersection([
    t.type({
      /** person | animal | practitioner | device | medication | substance */
      type: primitives.R4.code,
      /** Descriptive or actual */
      actual: primitives.R4.boolean
    }),
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
      /** Unique id */
      identifier: t.array(Identifier),
      /** Whether this group's record is in active use */
      active: primitives.R4.boolean,
      /** Extension of active element */
      _active: Element,
      /** Extension of type element */
      _type: Element,
      /** Extension of actual element */
      _actual: Element,
      /** Kind of Group members */
      code: CodeableConcept,
      /** Label for Group */
      name: primitives.R4.string,
      /** Extension of name element */
      _name: Element,
      /** Number of members */
      quantity: primitives.R4.unsignedInt,
      /** Extension of quantity element */
      _quantity: Element,
      /** Entity that is the custodian of the Group's definition */
      managingEntity: Reference
    })
  ])
);

/**
 * Include / Exclude group members by Trait
 */
export interface GroupCharacteristic {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Kind of characteristic */
  code: CodeableConcept;
  /** Value held by characteristic */
  valueCodeableConcept: CodeableConcept;
  /** Value held by characteristic */
  valueBoolean: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Value held by characteristic */
  valueQuantity: Quantity;
  /** Value held by characteristic */
  valueRange: Range;
  /** Value held by characteristic */
  valueReference: Reference;
  /** Group includes or excludes */
  exclude: boolean;
  /** Extension of exclude element */
  _exclude?: Element;
  /** Period over which characteristic is tested */
  period?: Period;
}
/**
 * Include / Exclude group members by Trait
 */
export const GroupCharacteristic: t.Type<GroupCharacteristic> = t.recursion<
  GroupCharacteristic
>("GroupCharacteristic", () =>
  t.intersection([
    t.type({
      /** Kind of characteristic */
      code: CodeableConcept,
      /** Value held by characteristic */
      valueCodeableConcept: CodeableConcept,
      /** Value held by characteristic */
      valueBoolean: primitives.R4.boolean,
      /** Value held by characteristic */
      valueQuantity: Quantity,
      /** Value held by characteristic */
      valueRange: Range,
      /** Value held by characteristic */
      valueReference: Reference,
      /** Group includes or excludes */
      exclude: primitives.R4.boolean
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
      /** Extension of valueBoolean element */
      _valueBoolean: Element,
      /** Extension of exclude element */
      _exclude: Element,
      /** Period over which characteristic is tested */
      period: Period
    })
  ])
);

/**
 * Who or what is in group
 */
export interface GroupMember {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the group member */
  entity: Reference;
  /** Period member belonged to the group */
  period?: Period;
  /** If member is no longer in group */
  inactive?: boolean;
  /** Extension of inactive element */
  _inactive?: Element;
}
/**
 * Who or what is in group
 */
export const GroupMember: t.Type<GroupMember> = t.recursion<GroupMember>(
  "GroupMember",
  () =>
    t.intersection([
      t.type({
        /** Reference to the group member */
        entity: Reference
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
        /** Period member belonged to the group */
        period: Period,
        /** If member is no longer in group */
        inactive: primitives.R4.boolean,
        /** Extension of inactive element */
        _inactive: Element
      })
    ])
);
