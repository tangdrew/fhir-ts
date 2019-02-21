/**
 * ConceptMap Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * What to do when there is no mapping for the source concept
 */
export interface ConceptMapGroupUnmapped {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** provided | fixed | other-map */
  mode: t.TypeOf<primitives.R4.CodeType>;
  /** Fixed code when mode = fixed */
  code?: t.TypeOf<primitives.R4.CodeType>;
  /** Display for the code */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped */
  url?: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface ConceptMapGroupUnmappedOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** provided | fixed | other-map */
  mode: t.OutputOf<primitives.R4.CodeType>;
  /** Fixed code when mode = fixed */
  code?: t.OutputOf<primitives.R4.CodeType>;
  /** Display for the code */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped */
  url?: t.OutputOf<primitives.R4.CanonicalType>;
}

export const ConceptMapGroupUnmapped: t.RecursiveType<
  t.Type<ConceptMapGroupUnmapped, ConceptMapGroupUnmappedOutputType>,
  ConceptMapGroupUnmapped,
  ConceptMapGroupUnmappedOutputType
> = t.recursion<ConceptMapGroupUnmapped, ConceptMapGroupUnmappedOutputType>(
  "ConceptMapGroupUnmapped",
  () =>
    t.intersection(
      [
        t.type({
          /** provided | fixed | other-map */
          mode: primitives.R4.code
        }),
        t.partial({
          /** Fixed code when mode = fixed */
          code: primitives.R4.code,
          /** Display for the code */
          display: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** canonical reference to an additional ConceptMap to use for mapping if the source concept is unmapped */
          url: primitives.R4.canonical
        })
      ],
      "ConceptMapGroupUnmapped"
    )
);

/**
 * Other elements required for this mapping (from context)
 */
export interface ConceptMapGroupElementTargetDependsOn {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to property mapping depends on */
  property: t.TypeOf<primitives.R4.URIType>;
  /** Code System (if necessary) */
  system?: t.TypeOf<primitives.R4.CanonicalType>;
  /** Value of the referenced element */
  value: t.TypeOf<primitives.R4.StringType>;
  /** Display for the code (if value is a code) */
  display?: t.TypeOf<primitives.R4.StringType>;
}

export interface ConceptMapGroupElementTargetDependsOnOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to property mapping depends on */
  property: t.OutputOf<primitives.R4.URIType>;
  /** Code System (if necessary) */
  system?: t.OutputOf<primitives.R4.CanonicalType>;
  /** Value of the referenced element */
  value: t.OutputOf<primitives.R4.StringType>;
  /** Display for the code (if value is a code) */
  display?: t.OutputOf<primitives.R4.StringType>;
}

export const ConceptMapGroupElementTargetDependsOn: t.RecursiveType<
  t.Type<
    ConceptMapGroupElementTargetDependsOn,
    ConceptMapGroupElementTargetDependsOnOutputType
  >,
  ConceptMapGroupElementTargetDependsOn,
  ConceptMapGroupElementTargetDependsOnOutputType
> = t.recursion<
  ConceptMapGroupElementTargetDependsOn,
  ConceptMapGroupElementTargetDependsOnOutputType
>("ConceptMapGroupElementTargetDependsOn", () =>
  t.intersection(
    [
      t.type({
        /** Reference to property mapping depends on */
        property: primitives.R4.uri,
        /** Value of the referenced element */
        value: primitives.R4.string
      }),
      t.partial({
        /** Display for the code (if value is a code) */
        display: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Code System (if necessary) */
        system: primitives.R4.canonical
      })
    ],
    "ConceptMapGroupElementTargetDependsOn"
  )
);

/**
 * Concept in target system for element
 */
export interface ConceptMapGroupElementTarget {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that identifies the target element */
  code?: t.TypeOf<primitives.R4.CodeType>;
  /** Display for the code */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
  equivalence: t.TypeOf<primitives.R4.CodeType>;
  /** Description of status/issues in mapping */
  comment?: t.TypeOf<primitives.R4.StringType>;
  /** Other elements required for this mapping (from context) */
  dependsOn?: ConceptMapGroupElementTargetDependsOn[];
  /** Other concepts that this mapping also produces */
  product?: ConceptMapGroupElementTargetDependsOn[];
}

export interface ConceptMapGroupElementTargetOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code that identifies the target element */
  code?: t.OutputOf<primitives.R4.CodeType>;
  /** Display for the code */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
  equivalence: t.OutputOf<primitives.R4.CodeType>;
  /** Description of status/issues in mapping */
  comment?: t.OutputOf<primitives.R4.StringType>;
  /** Other elements required for this mapping (from context) */
  dependsOn?: ConceptMapGroupElementTargetDependsOnOutputType[];
  /** Other concepts that this mapping also produces */
  product?: ConceptMapGroupElementTargetDependsOnOutputType[];
}

export const ConceptMapGroupElementTarget: t.RecursiveType<
  t.Type<ConceptMapGroupElementTarget, ConceptMapGroupElementTargetOutputType>,
  ConceptMapGroupElementTarget,
  ConceptMapGroupElementTargetOutputType
> = t.recursion<
  ConceptMapGroupElementTarget,
  ConceptMapGroupElementTargetOutputType
>("ConceptMapGroupElementTarget", () =>
  t.intersection(
    [
      t.type({
        /** relatedto | equivalent | equal | wider | subsumes | narrower | specializes | inexact | unmatched | disjoint */
        equivalence: primitives.R4.code
      }),
      t.partial({
        /** Code that identifies the target element */
        code: primitives.R4.code,
        /** Description of status/issues in mapping */
        comment: primitives.R4.string,
        /** Other elements required for this mapping (from context) */
        dependsOn: t.array(ConceptMapGroupElementTargetDependsOn),
        /** Display for the code */
        display: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Other concepts that this mapping also produces */
        product: t.array(ConceptMapGroupElementTargetDependsOn)
      })
    ],
    "ConceptMapGroupElementTarget"
  )
);

/**
 * Mappings for a concept from the source set
 */
export interface ConceptMapGroupElement {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identifies element being mapped */
  code?: t.TypeOf<primitives.R4.CodeType>;
  /** Display for the code */
  display?: t.TypeOf<primitives.R4.StringType>;
  /** Concept in target system for element */
  target?: ConceptMapGroupElementTarget[];
}

export interface ConceptMapGroupElementOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identifies element being mapped */
  code?: t.OutputOf<primitives.R4.CodeType>;
  /** Display for the code */
  display?: t.OutputOf<primitives.R4.StringType>;
  /** Concept in target system for element */
  target?: ConceptMapGroupElementTargetOutputType[];
}

export const ConceptMapGroupElement: t.RecursiveType<
  t.Type<ConceptMapGroupElement, ConceptMapGroupElementOutputType>,
  ConceptMapGroupElement,
  ConceptMapGroupElementOutputType
> = t.recursion<ConceptMapGroupElement, ConceptMapGroupElementOutputType>(
  "ConceptMapGroupElement",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Identifies element being mapped */
          code: primitives.R4.code,
          /** Display for the code */
          display: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Concept in target system for element */
          target: t.array(ConceptMapGroupElementTarget)
        })
      ],
      "ConceptMapGroupElement"
    )
);

/**
 * Same source and target systems
 */
export interface ConceptMapGroup {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Source system where concepts to be mapped are defined */
  source?: t.TypeOf<primitives.R4.URIType>;
  /** Specific version of the  code system */
  sourceVersion?: t.TypeOf<primitives.R4.StringType>;
  /** Target system that the concepts are to be mapped to */
  target?: t.TypeOf<primitives.R4.URIType>;
  /** Specific version of the  code system */
  targetVersion?: t.TypeOf<primitives.R4.StringType>;
  /** Mappings for a concept from the source set */
  element: ConceptMapGroupElement[];
  /** What to do when there is no mapping for the source concept */
  unmapped?: ConceptMapGroupUnmapped;
}

export interface ConceptMapGroupOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Source system where concepts to be mapped are defined */
  source?: t.OutputOf<primitives.R4.URIType>;
  /** Specific version of the  code system */
  sourceVersion?: t.OutputOf<primitives.R4.StringType>;
  /** Target system that the concepts are to be mapped to */
  target?: t.OutputOf<primitives.R4.URIType>;
  /** Specific version of the  code system */
  targetVersion?: t.OutputOf<primitives.R4.StringType>;
  /** Mappings for a concept from the source set */
  element: ConceptMapGroupElementOutputType[];
  /** What to do when there is no mapping for the source concept */
  unmapped?: ConceptMapGroupUnmappedOutputType;
}

export const ConceptMapGroup: t.RecursiveType<
  t.Type<ConceptMapGroup, ConceptMapGroupOutputType>,
  ConceptMapGroup,
  ConceptMapGroupOutputType
> = t.recursion<ConceptMapGroup, ConceptMapGroupOutputType>(
  "ConceptMapGroup",
  () =>
    t.intersection(
      [
        t.type({
          /** Mappings for a concept from the source set */
          element: t.array(ConceptMapGroupElement)
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Source system where concepts to be mapped are defined */
          source: primitives.R4.uri,
          /** Specific version of the  code system */
          sourceVersion: primitives.R4.string,
          /** Target system that the concepts are to be mapped to */
          target: primitives.R4.uri,
          /** Specific version of the  code system */
          targetVersion: primitives.R4.string,
          /** What to do when there is no mapping for the source concept */
          unmapped: ConceptMapGroupUnmapped
        })
      ],
      "ConceptMapGroup"
    )
);

/**
 * A map from one set of concepts to one or more other concepts
 */
export interface ConceptMap {
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
  /** Canonical identifier for this concept map, represented as a URI (globally unique) */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Additional identifier for the concept map */
  identifier?: Identifier;
  /** Business version of the concept map */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this concept map (computer friendly) */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this concept map (human friendly) */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.TypeOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.TypeOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetail[];
  /** Natural language description of the concept map */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for concept map (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Why this concept map is defined */
  purpose?: t.TypeOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The source value set that contains the concepts that are being mapped */
  source?:
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.CanonicalType>;
  /** The target value set which provides context for the mappings */
  target?:
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.CanonicalType>;
  /** Same source and target systems */
  group?: ConceptMapGroup[];
}

export interface ConceptMapOutputType {
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
  /** Canonical identifier for this concept map, represented as a URI (globally unique) */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Additional identifier for the concept map */
  identifier?: IdentifierOutputType;
  /** Business version of the concept map */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this concept map (computer friendly) */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this concept map (human friendly) */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** draft | active | retired | unknown */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** For testing purposes, not real usage */
  experimental?: t.OutputOf<primitives.R4.BooleanType>;
  /** Date last changed */
  date?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Name of the publisher (organization or individual) */
  publisher?: t.OutputOf<primitives.R4.StringType>;
  /** Contact details for the publisher */
  contact?: ContactDetailOutputType[];
  /** Natural language description of the concept map */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for concept map (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Why this concept map is defined */
  purpose?: t.OutputOf<primitives.R4.MarkdownType>;
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The source value set that contains the concepts that are being mapped */
  source?:
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.CanonicalType>;
  /** The target value set which provides context for the mappings */
  target?:
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.CanonicalType>;
  /** Same source and target systems */
  group?: ConceptMapGroupOutputType[];
}

export const ConceptMap: t.RecursiveType<
  t.Type<ConceptMap, ConceptMapOutputType>,
  ConceptMap,
  ConceptMapOutputType
> = t.recursion<ConceptMap, ConceptMapOutputType>("ConceptMap", () =>
  t.intersection(
    [
      t.type({
        /** draft | active | retired | unknown */
        status: primitives.R4.code
      }),
      t.partial({
        /** Contact details for the publisher */
        contact: t.array(ContactDetail),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Use and/or publishing restrictions */
        copyright: primitives.R4.markdown,
        /** Date last changed */
        date: primitives.R4.dateTime,
        /** Natural language description of the concept map */
        description: primitives.R4.markdown,
        /** For testing purposes, not real usage */
        experimental: primitives.R4.boolean,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Same source and target systems */
        group: t.array(ConceptMapGroup),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Additional identifier for the concept map */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Intended jurisdiction for concept map (if applicable) */
        jurisdiction: t.array(CodeableConcept),
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name for this concept map (computer friendly) */
        name: primitives.R4.string,
        /** Name of the publisher (organization or individual) */
        publisher: primitives.R4.string,
        /** Why this concept map is defined */
        purpose: primitives.R4.markdown,
        /** The source value set that contains the concepts that are being mapped */
        source: t.union([primitives.R4.uri, primitives.R4.canonical]),
        /** The target value set which provides context for the mappings */
        target: t.union([primitives.R4.uri, primitives.R4.canonical]),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Name for this concept map (human friendly) */
        title: primitives.R4.string,
        /** Canonical identifier for this concept map, represented as a URI (globally unique) */
        url: primitives.R4.uri,
        /** The context that the content is intended to support */
        useContext: t.array(UsageContext),
        /** Business version of the concept map */
        version: primitives.R4.string
      })
    ],
    "ConceptMap"
  )
);
