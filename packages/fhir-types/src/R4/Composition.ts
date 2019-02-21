/**
 * Composition Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Composition is broken into sections
 */
export interface CompositionSection {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for section (e.g. for ToC) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Classification of section (recommended) */
  code?: CodeableConcept;
  /** Who and/or what authored the section */
  author?: Reference[];
  /** Who/what the section is about, when it is not about the subject of composition */
  focus?: Reference;
  /** Text summary of the section, for human interpretation */
  text?: Narrative;
  /** working | snapshot | changes */
  mode?: t.TypeOf<primitives.R4.CodeType>;
  /** Order of section entries */
  orderedBy?: CodeableConcept;
  /** A reference to data that supports this section */
  entry?: Reference[];
  /** Why the section is empty */
  emptyReason?: CodeableConcept;
  /** Nested Section */
  section?: CompositionSection[];
}

export interface CompositionSectionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Label for section (e.g. for ToC) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Classification of section (recommended) */
  code?: CodeableConceptOutputType;
  /** Who and/or what authored the section */
  author?: ReferenceOutputType[];
  /** Who/what the section is about, when it is not about the subject of composition */
  focus?: ReferenceOutputType;
  /** Text summary of the section, for human interpretation */
  text?: NarrativeOutputType;
  /** working | snapshot | changes */
  mode?: t.OutputOf<primitives.R4.CodeType>;
  /** Order of section entries */
  orderedBy?: CodeableConceptOutputType;
  /** A reference to data that supports this section */
  entry?: ReferenceOutputType[];
  /** Why the section is empty */
  emptyReason?: CodeableConceptOutputType;
  /** Nested Section */
  section?: CompositionSectionOutputType[];
}

export const CompositionSection: t.RecursiveType<
  t.Type<CompositionSection, CompositionSectionOutputType>,
  CompositionSection,
  CompositionSectionOutputType
> = t.recursion<CompositionSection, CompositionSectionOutputType>(
  "CompositionSection",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Who and/or what authored the section */
          author: t.array(Reference),
          /** Classification of section (recommended) */
          code: CodeableConcept,
          /** Why the section is empty */
          emptyReason: CodeableConcept,
          /** A reference to data that supports this section */
          entry: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Who/what the section is about, when it is not about the subject of composition */
          focus: Reference,
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** working | snapshot | changes */
          mode: primitives.R4.code,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Order of section entries */
          orderedBy: CodeableConcept,
          /** Nested Section */
          section: t.array(CompositionSection),
          /** Text summary of the section, for human interpretation */
          text: Narrative,
          /** Label for section (e.g. for ToC) */
          title: primitives.R4.string
        })
      ],
      "CompositionSection"
    )
);

/**
 * Relationships to other compositions/documents
 */
export interface CompositionRelatesTo {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** replaces | transforms | signs | appends */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Target of the relationship */
  target: Identifier | Reference;
}

export interface CompositionRelatesToOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** replaces | transforms | signs | appends */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Target of the relationship */
  target: IdentifierOutputType | ReferenceOutputType;
}

export const CompositionRelatesTo: t.RecursiveType<
  t.Type<CompositionRelatesTo, CompositionRelatesToOutputType>,
  CompositionRelatesTo,
  CompositionRelatesToOutputType
> = t.recursion<CompositionRelatesTo, CompositionRelatesToOutputType>(
  "CompositionRelatesTo",
  () =>
    t.intersection(
      [
        t.type({
          /** replaces | transforms | signs | appends */
          code: primitives.R4.code,
          /** Target of the relationship */
          target: t.union([Identifier, Reference])
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "CompositionRelatesTo"
    )
);

/**
 * The clinical service(s) being documented
 */
export interface CompositionEvent {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code(s) that apply to the event being documented */
  code?: CodeableConcept[];
  /** The period covered by the documentation */
  period?: Period;
  /** The event(s) being documented */
  detail?: Reference[];
}

export interface CompositionEventOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code(s) that apply to the event being documented */
  code?: CodeableConceptOutputType[];
  /** The period covered by the documentation */
  period?: PeriodOutputType;
  /** The event(s) being documented */
  detail?: ReferenceOutputType[];
}

export const CompositionEvent: t.RecursiveType<
  t.Type<CompositionEvent, CompositionEventOutputType>,
  CompositionEvent,
  CompositionEventOutputType
> = t.recursion<CompositionEvent, CompositionEventOutputType>(
  "CompositionEvent",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Code(s) that apply to the event being documented */
          code: t.array(CodeableConcept),
          /** The event(s) being documented */
          detail: t.array(Reference),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The period covered by the documentation */
          period: Period
        })
      ],
      "CompositionEvent"
    )
);

/**
 * Attests to accuracy of composition
 */
export interface CompositionAttester {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** personal | professional | legal | official */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** When the composition was attested */
  time?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who attested the composition */
  party?: Reference;
}

export interface CompositionAttesterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** personal | professional | legal | official */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** When the composition was attested */
  time?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who attested the composition */
  party?: ReferenceOutputType;
}

export const CompositionAttester: t.RecursiveType<
  t.Type<CompositionAttester, CompositionAttesterOutputType>,
  CompositionAttester,
  CompositionAttesterOutputType
> = t.recursion<CompositionAttester, CompositionAttesterOutputType>(
  "CompositionAttester",
  () =>
    t.intersection(
      [
        t.type({
          /** personal | professional | legal | official */
          mode: primitives.R4.code
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Who attested the composition */
          party: Reference,
          /** When the composition was attested */
          time: primitives.R4.dateTime
        })
      ],
      "CompositionAttester"
    )
);

/**
 * A set of resources composed into a single coherent clinical statement with clinical attestation
 */
export interface Composition {
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
  /** Version-independent identifier for the Composition */
  identifier?: Identifier;
  /** preliminary | final | amended | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Kind of composition (LOINC if possible) */
  type: CodeableConcept;
  /** Categorization of Composition */
  category?: CodeableConcept[];
  /** Who and/or what the composition is about */
  subject?: Reference;
  /** Context of the Composition */
  encounter?: Reference;
  /** Composition editing time */
  date: t.TypeOf<primitives.R4.DateTimeType>;
  /** Who and/or what authored the composition */
  author: Reference[];
  /** Human Readable name/title */
  title: t.TypeOf<primitives.R4.StringType>;
  /** As defined by affinity domain */
  confidentiality?: t.TypeOf<primitives.R4.CodeType>;
  /** Attests to accuracy of composition */
  attester?: CompositionAttester[];
  /** Organization which maintains the composition */
  custodian?: Reference;
  /** Relationships to other compositions/documents */
  relatesTo?: CompositionRelatesTo[];
  /** The clinical service(s) being documented */
  event?: CompositionEvent[];
  /** Composition is broken into sections */
  section?: CompositionSection[];
}

export interface CompositionOutputType {
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
  /** Version-independent identifier for the Composition */
  identifier?: IdentifierOutputType;
  /** preliminary | final | amended | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Kind of composition (LOINC if possible) */
  type: CodeableConceptOutputType;
  /** Categorization of Composition */
  category?: CodeableConceptOutputType[];
  /** Who and/or what the composition is about */
  subject?: ReferenceOutputType;
  /** Context of the Composition */
  encounter?: ReferenceOutputType;
  /** Composition editing time */
  date: t.OutputOf<primitives.R4.DateTimeType>;
  /** Who and/or what authored the composition */
  author: ReferenceOutputType[];
  /** Human Readable name/title */
  title: t.OutputOf<primitives.R4.StringType>;
  /** As defined by affinity domain */
  confidentiality?: t.OutputOf<primitives.R4.CodeType>;
  /** Attests to accuracy of composition */
  attester?: CompositionAttesterOutputType[];
  /** Organization which maintains the composition */
  custodian?: ReferenceOutputType;
  /** Relationships to other compositions/documents */
  relatesTo?: CompositionRelatesToOutputType[];
  /** The clinical service(s) being documented */
  event?: CompositionEventOutputType[];
  /** Composition is broken into sections */
  section?: CompositionSectionOutputType[];
}

export const Composition: t.RecursiveType<
  t.Type<Composition, CompositionOutputType>,
  Composition,
  CompositionOutputType
> = t.recursion<Composition, CompositionOutputType>("Composition", () =>
  t.intersection(
    [
      t.type({
        /** Who and/or what authored the composition */
        author: t.array(Reference),
        /** Composition editing time */
        date: primitives.R4.dateTime,
        /** preliminary | final | amended | entered-in-error */
        status: primitives.R4.code,
        /** Human Readable name/title */
        title: primitives.R4.string,
        /** Kind of composition (LOINC if possible) */
        type: CodeableConcept
      }),
      t.partial({
        /** Attests to accuracy of composition */
        attester: t.array(CompositionAttester),
        /** Categorization of Composition */
        category: t.array(CodeableConcept),
        /** As defined by affinity domain */
        confidentiality: primitives.R4.code,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Organization which maintains the composition */
        custodian: Reference,
        /** Context of the Composition */
        encounter: Reference,
        /** The clinical service(s) being documented */
        event: t.array(CompositionEvent),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Version-independent identifier for the Composition */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Relationships to other compositions/documents */
        relatesTo: t.array(CompositionRelatesTo),
        /** Composition is broken into sections */
        section: t.array(CompositionSection),
        /** Who and/or what the composition is about */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Composition"
  )
);
