/**
 * Group Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Who or what is in group
 */
export interface GroupMember {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the group member */
  entity: Reference;
  /** Period member belonged to the group */
  period?: Period;
  /** If member is no longer in group */
  inactive?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface GroupMemberOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to the group member */
  entity: ReferenceOutputType;
  /** Period member belonged to the group */
  period?: PeriodOutputType;
  /** If member is no longer in group */
  inactive?: t.OutputOf<primitives.R4.BooleanType>;
}

export const GroupMember: t.RecursiveType<
  t.Type<GroupMember, GroupMemberOutputType>,
  GroupMember,
  GroupMemberOutputType
> = t.recursion<GroupMember, GroupMemberOutputType>("GroupMember", () =>
  t.intersection(
    [
      t.type({
        /** Reference to the group member */
        entity: Reference
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** If member is no longer in group */
        inactive: primitives.R4.boolean,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Period member belonged to the group */
        period: Period
      })
    ],
    "GroupMember"
  )
);

/**
 * Include / Exclude group members by Trait
 */
export interface GroupCharacteristic {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Kind of characteristic */
  code: CodeableConcept;
  /** Value held by characteristic */
  value:
    | CodeableConcept
    | t.TypeOf<primitives.R4.BooleanType>
    | Quantity
    | Range
    | Reference;
  /** Group includes or excludes */
  exclude: t.TypeOf<primitives.R4.BooleanType>;
  /** Period over which characteristic is tested */
  period?: Period;
}

export interface GroupCharacteristicOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Kind of characteristic */
  code: CodeableConceptOutputType;
  /** Value held by characteristic */
  value:
    | CodeableConceptOutputType
    | t.OutputOf<primitives.R4.BooleanType>
    | QuantityOutputType
    | RangeOutputType
    | ReferenceOutputType;
  /** Group includes or excludes */
  exclude: t.OutputOf<primitives.R4.BooleanType>;
  /** Period over which characteristic is tested */
  period?: PeriodOutputType;
}

export const GroupCharacteristic: t.RecursiveType<
  t.Type<GroupCharacteristic, GroupCharacteristicOutputType>,
  GroupCharacteristic,
  GroupCharacteristicOutputType
> = t.recursion<GroupCharacteristic, GroupCharacteristicOutputType>(
  "GroupCharacteristic",
  () =>
    t.intersection(
      [
        t.type({
          /** Kind of characteristic */
          code: CodeableConcept,
          /** Group includes or excludes */
          exclude: primitives.R4.boolean,
          /** Value held by characteristic */
          value: t.union([
            CodeableConcept,
            primitives.R4.boolean,
            Quantity,
            Range,
            Reference
          ])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Period over which characteristic is tested */
          period: Period
        })
      ],
      "GroupCharacteristic"
    )
);

/**
 * Group of multiple entities
 */
export interface Group {
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
  /** Unique id */
  identifier?: Identifier[];
  /** Whether this group's record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** person | animal | practitioner | device | medication | substance */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Descriptive or actual */
  actual: t.TypeOf<primitives.R4.BooleanType>;
  /** Kind of Group members */
  code?: CodeableConcept;
  /** Label for Group */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Number of members */
  quantity?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Entity that is the custodian of the Group's definition */
  managingEntity?: Reference;
  /** Include / Exclude group members by Trait */
  characteristic?: GroupCharacteristic[];
  /** Who or what is in group */
  member?: GroupMember[];
}

export interface GroupOutputType {
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
  /** Unique id */
  identifier?: IdentifierOutputType[];
  /** Whether this group's record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** person | animal | practitioner | device | medication | substance */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Descriptive or actual */
  actual: t.OutputOf<primitives.R4.BooleanType>;
  /** Kind of Group members */
  code?: CodeableConceptOutputType;
  /** Label for Group */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Number of members */
  quantity?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Entity that is the custodian of the Group's definition */
  managingEntity?: ReferenceOutputType;
  /** Include / Exclude group members by Trait */
  characteristic?: GroupCharacteristicOutputType[];
  /** Who or what is in group */
  member?: GroupMemberOutputType[];
}

export const Group: t.RecursiveType<
  t.Type<Group, GroupOutputType>,
  Group,
  GroupOutputType
> = t.recursion<Group, GroupOutputType>("Group", () =>
  t.intersection(
    [
      t.type({
        /** Descriptive or actual */
        actual: primitives.R4.boolean,
        /** person | animal | practitioner | device | medication | substance */
        type: primitives.R4.code
      }),
      t.partial({
        /** Whether this group's record is in active use */
        active: primitives.R4.boolean,
        /** Include / Exclude group members by Trait */
        characteristic: t.array(GroupCharacteristic),
        /** Kind of Group members */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Unique id */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Entity that is the custodian of the Group's definition */
        managingEntity: Reference,
        /** Who or what is in group */
        member: t.array(GroupMember),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Label for Group */
        name: primitives.R4.string,
        /** Number of members */
        quantity: primitives.R4.unsignedInt,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Group"
  )
);
