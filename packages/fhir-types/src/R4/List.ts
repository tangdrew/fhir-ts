/**
 * List Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A list is a curated collection of resources
 */
export interface List {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** current | retired | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** working | snapshot | changes */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Descriptive name for the list */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** What the purpose of this list is */
  code?: CodeableConcept;
  /** If all resources have the same subject */
  subject?: Reference;
  /** Context in which list created */
  encounter?: Reference;
  /** When the list was prepared */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Who and/or what defined the list contents (aka Author) */
  source?: Reference;
  /** What order the list has */
  orderedBy?: CodeableConcept;
  /** Comments about the list */
  note?: Annotation[];
  /** Why list is empty */
  emptyReason?: CodeableConcept;
}
/**
 * A list is a curated collection of resources
 */
export const List: t.Type<List> = t.recursion<List>("List", () =>
  t.intersection([
    t.type({
      /** current | retired | entered-in-error */
      status: primitives.R4.code,
      /** working | snapshot | changes */
      mode: primitives.R4.code
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
      /** Business identifier */
      identifier: t.array(Identifier),
      /** Extension of status element */
      _status: Element,
      /** Extension of mode element */
      _mode: Element,
      /** Descriptive name for the list */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** What the purpose of this list is */
      code: CodeableConcept,
      /** If all resources have the same subject */
      subject: Reference,
      /** Context in which list created */
      encounter: Reference,
      /** When the list was prepared */
      date: primitives.R4.dateTime,
      /** Extension of date element */
      _date: Element,
      /** Who and/or what defined the list contents (aka Author) */
      source: Reference,
      /** What order the list has */
      orderedBy: CodeableConcept,
      /** Comments about the list */
      note: t.array(Annotation),
      /** Why list is empty */
      emptyReason: CodeableConcept
    })
  ])
);

/**
 * Entries in the list
 */
export interface ListEntry {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Status/Workflow information about this item */
  flag?: CodeableConcept;
  /** If this item is actually marked as deleted */
  deleted?: boolean;
  /** Extension of deleted element */
  _deleted?: Element;
  /** When item added to list */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Actual entry */
  item: Reference;
}
/**
 * Entries in the list
 */
export const ListEntry: t.Type<ListEntry> = t.recursion<ListEntry>(
  "ListEntry",
  () =>
    t.intersection([
      t.type({
        /** Actual entry */
        item: Reference
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
        /** Status/Workflow information about this item */
        flag: CodeableConcept,
        /** If this item is actually marked as deleted */
        deleted: primitives.R4.boolean,
        /** Extension of deleted element */
        _deleted: Element,
        /** When item added to list */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element
      })
    ])
);
