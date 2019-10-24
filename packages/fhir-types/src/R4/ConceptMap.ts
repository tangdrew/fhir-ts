/**
 * ConceptMap Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A map from one set of concepts to one or more other concepts
 */
export interface ConceptMap {
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
  /** Canonical identifier for this concept map, represented as a URI (globally unique) */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Additional identifier for the concept map */
  identifier?: Identifier;
  /** Business version of the concept map */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this concept map (computer friendly) */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this concept map (human friendly) */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** draft | active | retired | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** For testing purposes, not real usage */
  experimental?: boolean;
  /** Extension of experimental element */
  _experimental?: Element;
  /** Date last changed */
  date?: primitives.R4.dateTime;
  /** Extension of date element */
  _date?: Element;
  /** Name of the publisher (organization or individual) */
  publisher?: string;
  /** Extension of publisher element */
  _publisher?: Element;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the concept map */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for concept map (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this concept map is defined */
  purpose?: primitives.R4.markdown;
  /** Extension of purpose element */
  _purpose?: Element;
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** The source value set that contains the concepts that are being mapped */
  sourceUri?: primitives.R4.uri;
  /** Extension of sourceUri element */
  _sourceUri?: Element;
  /** The source value set that contains the concepts that are being mapped */
  sourceCanonical?: primitives.R4.canonical;
  /** Extension of sourceCanonical element */
  _sourceCanonical?: Element;
  /** The target value set which provides context for the mappings */
  targetUri?: primitives.R4.uri;
  /** Extension of targetUri element */
  _targetUri?: Element;
  /** The target value set which provides context for the mappings */
  targetCanonical?: primitives.R4.canonical;
  /** Extension of targetCanonical element */
  _targetCanonical?: Element;
}
/**
 * A map from one set of concepts to one or more other concepts
 */
export const ConceptMap: t.Type<ConceptMap> = t.recursion<ConceptMap>(
  "ConceptMap",
  () =>
    t.intersection([
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code
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
        /** Canonical identifier for this concept map, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** Extension of url element */
        _url: Element,
        /** Additional identifier for the concept map */
        identifier: Identifier,
        /** Business version of the concept map */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element,
        /** Name for this concept map (computer friendly) */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Name for this concept map (human friendly) */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Extension of status element */
        _status: Element,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Extension of experimental element */
        _experimental: Element,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Extension of date element */
        _date: Element,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Extension of publisher element */
        _publisher: Element,
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Natural language description of the concept map */
        description: primitives.R4.markdown,
        /** Extension of description element */
        _description: Element,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Intended jurisdiction for concept map (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Why this concept map is defined */
        purpose: primitives.R4.markdown,
        /** Extension of purpose element */
        _purpose: Element,
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Extension of copyright element */
        _copyright: Element,
        /** The source value set that contains the concepts that are being mapped */
        sourceUri: primitives.R4.uri,
        /** Extension of sourceUri element */
        _sourceUri: Element,
        /** The source value set that contains the concepts that are being mapped */
        sourceCanonical: primitives.R4.canonical,
        /** Extension of sourceCanonical element */
        _sourceCanonical: Element,
        /** The target value set which provides context for the mappings */
        targetUri: primitives.R4.uri,
        /** Extension of targetUri element */
        _targetUri: Element,
        /** The target value set which provides context for the mappings */
        targetCanonical: primitives.R4.canonical,
        /** Extension of targetCanonical element */
        _targetCanonical: Element
      })
    ])
);

/**
 * Same source and target systems
 */
export interface ConceptMapGroup {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Source system where concepts to be mapped are defined */
  source?: primitives.R4.uri;
  /** Extension of source element */
  _source?: Element;
  /** Specific version of the  code system */
  sourceVersion?: string;
  /** Extension of sourceVersion element */
  _sourceVersion?: Element;
  /** Target system that the concepts are to be mapped to */
  target?: primitives.R4.uri;
  /** Extension of target element */
  _target?: Element;
  /** Specific version of the  code system */
  targetVersion?: string;
  /** Extension of targetVersion element */
  _targetVersion?: Element;
}
/**
 * Same source and target systems
 */
export const ConceptMapGroup: t.Type<ConceptMapGroup> = t.recursion<
  ConceptMapGroup
>("ConceptMapGroup", () =>
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
      /** Source system where concepts to be mapped are defined */
      source: primitives.R4.uri,
      /** Extension of source element */
      _source: Element,
      /** Specific version of the  code system */
      sourceVersion: primitives.R4.string,
      /** Extension of sourceVersion element */
      _sourceVersion: Element,
      /** Target system that the concepts are to be mapped to */
      target: primitives.R4.uri,
      /** Extension of target element */
      _target: Element,
      /** Specific version of the  code system */
      targetVersion: primitives.R4.string,
      /** Extension of targetVersion element */
      _targetVersion: Element
    })
  ])
);

/**
 * Mappings for a concept from the source set
 */
export interface ConceptMapGroupElement {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifies element being mapped */
  code?: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Display for the code */
  display?: string;
  /** Extension of display element */
  _display?: Element;
}
/**
 * Mappings for a concept from the source set
 */
export const ConceptMapGroupElement: t.Type<
  ConceptMapGroupElement
> = t.recursion<ConceptMapGroupElement>("ConceptMapGroupElement", () =>
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
      /** Identifies element being mapped */
      code: primitives.R4.code,
      /** Extension of code element */
      _code: Element,
      /** Display for the code */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element
    })
  ])
);

/**
 * Concept in target system for element
 */
export interface ConceptMapGroupElementTarget {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that identifies the target element */
  code?: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Display for the code */
  display?: string;
  /** Extension of display element */
  _display?: Element;
  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
  equivalence: primitives.R4.code;
  /** Extension of equivalence element */
  _equivalence?: Element;
  /** Description of status/issues in mapping */
  comment?: string;
  /** Extension of comment element */
  _comment?: Element;
  /** Other concepts that this mapping also produces */
  product?: ConceptMapGroupElementTargetDependsOn[];
}
/**
 * Concept in target system for element
 */
export const ConceptMapGroupElementTarget: t.Type<
  ConceptMapGroupElementTarget
> = t.recursion<ConceptMapGroupElementTarget>(
  "ConceptMapGroupElementTarget",
  () =>
    t.intersection([
      t.type({
        /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
        equivalence: primitives.R4.code
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
        /** Code that identifies the target element */
        code: primitives.R4.code,
        /** Extension of code element */
        _code: Element,
        /** Display for the code */
        display: primitives.R4.string,
        /** Extension of display element */
        _display: Element,
        /** Extension of equivalence element */
        _equivalence: Element,
        /** Description of status/issues in mapping */
        comment: primitives.R4.string,
        /** Extension of comment element */
        _comment: Element,
        /** Other concepts that this mapping also produces */
        product: t.array(ConceptMapGroupElementTargetDependsOn)
      })
    ])
);

/**
 * Other elements required for this mapping (from context)
 */
export interface ConceptMapGroupElementTargetDependsOn {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to property mapping depends on */
  property: primitives.R4.uri;
  /** Extension of property element */
  _property?: Element;
  /** Code System (if necessary) */
  system?: primitives.R4.canonical;
  /** Extension of system element */
  _system?: Element;
  /** Value of the referenced element */
  value: string;
  /** Extension of value element */
  _value?: Element;
  /** Display for the code (if value is a code) */
  display?: string;
  /** Extension of display element */
  _display?: Element;
}
/**
 * Other elements required for this mapping (from context)
 */
export const ConceptMapGroupElementTargetDependsOn: t.Type<
  ConceptMapGroupElementTargetDependsOn
> = t.recursion<ConceptMapGroupElementTargetDependsOn>(
  "ConceptMapGroupElementTargetDependsOn",
  () =>
    t.intersection([
      t.type({
        /** Reference to property mapping depends on */
        property: primitives.R4.uri,
        /** Value of the referenced element */
        value: primitives.R4.string
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
        /** Extension of property element */
        _property: Element,
        /** Code System (if necessary) */
        system: primitives.R4.canonical,
        /** Extension of system element */
        _system: Element,
        /** Extension of value element */
        _value: Element,
        /** Display for the code (if value is a code) */
        display: primitives.R4.string,
        /** Extension of display element */
        _display: Element
      })
    ])
);

/**
 * What to do when there is no mapping for the source concept
 */
export interface ConceptMapGroupUnmapped {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** provided | fixed | other-map */
  mode: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Fixed code when mode = fixed */
  code?: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Display for the code */
  display?: string;
  /** Extension of display element */
  _display?: Element;
  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped */
  url?: primitives.R4.canonical;
  /** Extension of url element */
  _url?: Element;
}
/**
 * What to do when there is no mapping for the source concept
 */
export const ConceptMapGroupUnmapped: t.Type<
  ConceptMapGroupUnmapped
> = t.recursion<ConceptMapGroupUnmapped>("ConceptMapGroupUnmapped", () =>
  t.intersection([
    t.type({
      /** provided | fixed | other-map */
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
      /** Fixed code when mode = fixed */
      code: primitives.R4.code,
      /** Extension of code element */
      _code: Element,
      /** Display for the code */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element,
      /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped */
      url: primitives.R4.canonical,
      /** Extension of url element */
      _url: Element
    })
  ])
);
