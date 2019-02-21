/**
 * List Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Entries in the list
 */
export interface ListEntry {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Status/Workflow information about this item */
  flag?: CodeableConcept;
  /** If this item is actually marked as deleted */
  deleted?: t.TypeOf<primitives.R4.BooleanType>;
  /** When item added to list */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Actual entry */
  item: Reference;
}

export interface ListEntryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Status/Workflow information about this item */
  flag?: CodeableConceptOutputType;
  /** If this item is actually marked as deleted */
  deleted?: t.OutputOf<primitives.R4.BooleanType>;
  /** When item added to list */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Actual entry */
  item: ReferenceOutputType;
}

export const ListEntry: t.RecursiveType<
  t.Type<ListEntry, ListEntryOutputType>,
  ListEntry,
  ListEntryOutputType
> = t.recursion<ListEntry, ListEntryOutputType>("ListEntry", () =>
  t.intersection(
    [
      t.type({
        /** Actual entry */
        item: Reference
      }),
      t.partial({
        /** When item added to list */
        date: primitives.R4.dateTime,
        /** If this item is actually marked as deleted */
        deleted: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Status/Workflow information about this item */
        flag: CodeableConcept,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ListEntry"
  )
);

/**
 * A list is a curated collection of resources
 */
export interface List {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** current | retired | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** working | snapshot | changes */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** Descriptive name for the list */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** What the purpose of this list is */
  code?: CodeableConcept;
  /** If all resources have the same subject */
  subject?: Reference;
  /** Context in which list created */
  encounter?: Reference;
  /** When the list was prepared */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who and/or what defined the list contents (aka Author) */
  source?: Reference;
  /** What order the list has */
  orderedBy?: CodeableConcept;
  /** Comments about the list */
  note?: Annotation[];
  /** Entries in the list */
  entry?: ListEntry[];
  /** Why list is empty */
  emptyReason?: CodeableConcept;
}

export interface ListOutputType {
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
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** current | retired | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** working | snapshot | changes */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** Descriptive name for the list */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** What the purpose of this list is */
  code?: CodeableConceptOutputType;
  /** If all resources have the same subject */
  subject?: ReferenceOutputType;
  /** Context in which list created */
  encounter?: ReferenceOutputType;
  /** When the list was prepared */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who and/or what defined the list contents (aka Author) */
  source?: ReferenceOutputType;
  /** What order the list has */
  orderedBy?: CodeableConceptOutputType;
  /** Comments about the list */
  note?: AnnotationOutputType[];
  /** Entries in the list */
  entry?: ListEntryOutputType[];
  /** Why list is empty */
  emptyReason?: CodeableConceptOutputType;
}

export const List: t.RecursiveType<
  t.Type<List, ListOutputType>,
  List,
  ListOutputType
> = t.recursion<List, ListOutputType>("List", () =>
  t.intersection(
    [
      t.type({
        /** working | snapshot | changes */
        mode: primitives.R4.code,
        /** current | retired | entered-in-error */
        status: primitives.R4.code
      }),
      t.partial({
        /** What the purpose of this list is */
        code: CodeableConcept,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** When the list was prepared */
        date: primitives.R4.dateTime,
        /** Why list is empty */
        emptyReason: CodeableConcept,
        /** Context in which list created */
        encounter: Reference,
        /** Entries in the list */
        entry: t.array(ListEntry),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Comments about the list */
        note: t.array(Annotation),
        /** What order the list has */
        orderedBy: CodeableConcept,
        /** Who and/or what defined the list contents (aka Author) */
        source: Reference,
        /** If all resources have the same subject */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Descriptive name for the list */
        title: primitives.R4.string
      })
    ],
    "List"
  )
);
