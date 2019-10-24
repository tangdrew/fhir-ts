/**
 * Composition Module
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
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * A set of resources composed into a single coherent clinical statement with clinical attestation
 */
export interface Composition {
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
  /** Version-independent identifier for the Composition */
  identifier?: Identifier;
  /** preliminary | final | amended | entered-in-error */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Kind of composition (LOINC if possible) */
  type: CodeableConcept;
  /** Categorization of Composition */
  category?: CodeableConcept[];
  /** Who and/or what the composition is about */
  subject?: Reference;
  /** Context of the Composition */
  encounter?: Reference;
  /** Composition editing time */
  date: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Who and/or what authored the composition */
  author: Reference[];
  /** Human Readable name/title */
  title: string;
  /** Extension of title element */
  _title?: Element;
  /** As defined by affinity domain */
  confidentiality?: primitives.R4.code;
  /** Extension of confidentiality element */
  _confidentiality?: Element;
  /** Organization which maintains the composition */
  custodian?: Reference;
}
/**
 * A set of resources composed into a single coherent clinical statement with clinical attestation
 */
export const Composition: t.Type<Composition> = t.recursion<Composition>(
  "Composition",
  () =>
    t.intersection([
      t.type({
        /** preliminary | final | amended | entered-in-error */
        status: primitives.R4.code,
        /** Kind of composition (LOINC if possible) */
        type: CodeableConcept,
        /** Composition editing time */
        date: primitives.R4.dateTime,
        /** Who and/or what authored the composition */
        author: t.array(Reference),
        /** Human Readable name/title */
        title: primitives.R4.string
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
        /** Version-independent identifier for the Composition */
        identifier: Identifier,
        /** Extension of status element */
        _status: Element,
        /** Categorization of Composition */
        category: t.array(CodeableConcept),
        /** Who and/or what the composition is about */
        subject: Reference,
        /** Context of the Composition */
        encounter: Reference,
        /** Extension of date element */
        _date: Element,
        /** Extension of title element */
        _title: Element,
        /** As defined by affinity domain */
        confidentiality: primitives.R4.code,
        /** Extension of confidentiality element */
        _confidentiality: Element,
        /** Organization which maintains the composition */
        custodian: Reference
      })
    ])
);

/**
 * Attests to accuracy of composition
 */
export interface CompositionAttester {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** personal | professional | legal | official */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** When the composition was attested */
  time?: primitives.R4.dateTime;
  /** Extension of time element */
  _time?: Element;
  /** Who attested the composition */
  party?: Reference;
}
/**
 * Attests to accuracy of composition
 */
export const CompositionAttester: t.Type<CompositionAttester> = t.recursion<
  CompositionAttester
>("CompositionAttester", () =>
  t.intersection([
    t.type({
      /** personal | professional | legal | official */
      mode: primitives.R4.code
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
      /** Extension of mode element */
      _mode: Element,
      /** When the composition was attested */
      time: primitives.R4.dateTime,
      /** Extension of time element */
      _time: Element,
      /** Who attested the composition */
      party: Reference
    })
  ])
);

/**
 * Relationships to other compositions/documents
 */
export interface CompositionRelatesTo {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** replaces | transforms | signs | appends */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Target of the relationship */
  targetIdentifier: Identifier;
  /** Target of the relationship */
  targetReference: Reference;
}
/**
 * Relationships to other compositions/documents
 */
export const CompositionRelatesTo: t.Type<CompositionRelatesTo> = t.recursion<
  CompositionRelatesTo
>("CompositionRelatesTo", () =>
  t.intersection([
    t.type({
      /** replaces | transforms | signs | appends */
      code: primitives.R4.code,
      /** Target of the relationship */
      targetIdentifier: Identifier,
      /** Target of the relationship */
      targetReference: Reference
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
      /** Extension of code element */
      _code: Element
    })
  ])
);

/**
 * The clinical service(s) being documented
 */
export interface CompositionEvent {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
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
/**
 * The clinical service(s) being documented
 */
export const CompositionEvent: t.Type<CompositionEvent> = t.recursion<
  CompositionEvent
>("CompositionEvent", () =>
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
      /** Code(s) that apply to the event being documented */
      code: t.array(CodeableConcept),
      /** The period covered by the documentation */
      period: Period,
      /** The event(s) being documented */
      detail: t.array(Reference)
    })
  ])
);

/**
 * Composition is broken into sections
 */
export interface CompositionSection {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Label for section (e.g. for ToC) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Classification of section (recommended) */
  code?: CodeableConcept;
  /** Who and/or what authored the section */
  author?: Reference[];
  /** Who/what the section is about, when it is not about the subject of composition */
  focus?: Reference;
  /** Text summary of the section, for human interpretation */
  text?: Narrative;
  /** working | snapshot | changes */
  mode?: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Order of section entries */
  orderedBy?: CodeableConcept;
  /** A reference to data that supports this section */
  entry?: Reference[];
  /** Why the section is empty */
  emptyReason?: CodeableConcept;
  /** Nested Section */
  section?: CompositionSection[];
}
/**
 * Composition is broken into sections
 */
export const CompositionSection: t.Type<CompositionSection> = t.recursion<
  CompositionSection
>("CompositionSection", () =>
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
      /** Label for section (e.g. for ToC) */
      title: primitives.R4.string,
      /** Extension of title element */
      _title: Element,
      /** Classification of section (recommended) */
      code: CodeableConcept,
      /** Who and/or what authored the section */
      author: t.array(Reference),
      /** Who/what the section is about, when it is not about the subject of composition */
      focus: Reference,
      /** Text summary of the section, for human interpretation */
      text: Narrative,
      /** working | snapshot | changes */
      mode: primitives.R4.code,
      /** Extension of mode element */
      _mode: Element,
      /** Order of section entries */
      orderedBy: CodeableConcept,
      /** A reference to data that supports this section */
      entry: t.array(Reference),
      /** Why the section is empty */
      emptyReason: CodeableConcept,
      /** Nested Section */
      section: t.array(CompositionSection)
    })
  ])
);
