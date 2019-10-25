/**
 * ImplementationGuide Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { ContactDetail } from "./ContactDetail";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { UsageContext } from "./UsageContext";

/**
 * A set of rules about how FHIR is used
 */
export interface ImplementationGuide {
  /** The type of resource */
  resourceType?: "ImplementationGuide";
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
  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Business version of the implementation guide */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Name for this implementation guide (computer friendly) */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Name for this implementation guide (human friendly) */
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
  /** Natural language description of the implementation guide */
  description?: primitives.R4.markdown;
  /** Extension of description element */
  _description?: Element;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for implementation guide (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: primitives.R4.markdown;
  /** Extension of copyright element */
  _copyright?: Element;
  /** NPM Package name for IG */
  packageId: primitives.R4.id;
  /** Extension of packageId element */
  _packageId?: Element;
  /** SPDX license code for this IG (or not-open-source) */
  license?: primitives.R4.code;
  /** Extension of license element */
  _license?: Element;
  /** FHIR Version(s) this Implementation Guide targets */
  fhirVersion: primitives.R4.code[];
  /** Extension of fhirVersion element */
  _fhirVersion?: Element[];
}
/**
 * A set of rules about how FHIR is used
 */
export const ImplementationGuide: t.Type<ImplementationGuide> = t.recursion<
  ImplementationGuide
>("ImplementationGuide", () =>
  t.intersection([
    t.type({
      /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
      url: primitives.R4.uri,
      /** Name for this implementation guide (computer friendly) */
      name: primitives.R4.string,
      /** draft | active | retired | unknown */
      status: primitives.R4.code,
      /** NPM Package name for IG */
      packageId: primitives.R4.id,
      /** FHIR Version(s) this Implementation Guide targets */
      fhirVersion: t.array(primitives.R4.code)
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("ImplementationGuide"),
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
      /** Extension of url element */
      _url: Element,
      /** Business version of the implementation guide */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Extension of name element */
      _name: Element,
      /** Name for this implementation guide (human friendly) */
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
      /** Natural language description of the implementation guide */
      description: primitives.R4.markdown,
      /** Extension of description element */
      _description: Element,
      /** The context that the content is intended to support */
      useContext: t.array(UsageContext),
      /** Intended jurisdiction for implementation guide (if applicable) */
      jurisdiction: t.array(CodeableConcept),
      /** Use and/or publishing restrictions */
      copyright: primitives.R4.markdown,
      /** Extension of copyright element */
      _copyright: Element,
      /** Extension of packageId element */
      _packageId: Element,
      /** SPDX license code for this IG (or not-open-source) */
      license: primitives.R4.code,
      /** Extension of license element */
      _license: Element,
      /** Extension of fhirVersion element */
      _fhirVersion: t.array(Element)
    })
  ])
);

/**
 * Another Implementation guide this depends on
 */
export interface ImplementationGuideDependsOn {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identity of the IG that this depends on */
  uri: primitives.R4.canonical;
  /** Extension of uri element */
  _uri?: Element;
  /** NPM Package name for IG this depends on */
  packageId?: primitives.R4.id;
  /** Extension of packageId element */
  _packageId?: Element;
  /** Version of the IG */
  version?: string;
  /** Extension of version element */
  _version?: Element;
}
/**
 * Another Implementation guide this depends on
 */
export const ImplementationGuideDependsOn: t.Type<
  ImplementationGuideDependsOn
> = t.recursion<ImplementationGuideDependsOn>(
  "ImplementationGuideDependsOn",
  () =>
    t.intersection([
      t.type({
        /** Identity of the IG that this depends on */
        uri: primitives.R4.canonical
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
        /** Extension of uri element */
        _uri: Element,
        /** NPM Package name for IG this depends on */
        packageId: primitives.R4.id,
        /** Extension of packageId element */
        _packageId: Element,
        /** Version of the IG */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element
      })
    ])
);

/**
 * Profiles that apply globally
 */
export interface ImplementationGuideGlobal {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type this profile applies to */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** Profile that all resources must conform to */
  profile: primitives.R4.canonical;
  /** Extension of profile element */
  _profile?: Element;
}
/**
 * Profiles that apply globally
 */
export const ImplementationGuideGlobal: t.Type<
  ImplementationGuideGlobal
> = t.recursion<ImplementationGuideGlobal>("ImplementationGuideGlobal", () =>
  t.intersection([
    t.type({
      /** Type this profile applies to */
      type: primitives.R4.code,
      /** Profile that all resources must conform to */
      profile: primitives.R4.canonical
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
      /** Extension of type element */
      _type: Element,
      /** Extension of profile element */
      _profile: Element
    })
  ])
);

/**
 * Information needed to build the IG
 */
export interface ImplementationGuideDefinition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
}
/**
 * Information needed to build the IG
 */
export const ImplementationGuideDefinition: t.Type<
  ImplementationGuideDefinition
> = t.recursion<ImplementationGuideDefinition>(
  "ImplementationGuideDefinition",
  () =>
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
        modifierExtension: t.array(Extension)
      })
    ])
);

/**
 * Grouping used to present related resources in the IG
 */
export interface ImplementationGuideDefinitionGrouping {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Descriptive name for the package */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Human readable text describing the package */
  description?: string;
  /** Extension of description element */
  _description?: Element;
}
/**
 * Grouping used to present related resources in the IG
 */
export const ImplementationGuideDefinitionGrouping: t.Type<
  ImplementationGuideDefinitionGrouping
> = t.recursion<ImplementationGuideDefinitionGrouping>(
  "ImplementationGuideDefinitionGrouping",
  () =>
    t.intersection([
      t.type({
        /** Descriptive name for the package */
        name: primitives.R4.string
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
        /** Extension of name element */
        _name: Element,
        /** Human readable text describing the package */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element
      })
    ])
);

/**
 * Resource in the implementation guide
 */
export interface ImplementationGuideDefinitionResource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location of the resource */
  reference: Reference;
  /** Versions this applies to (if different to IG) */
  fhirVersion?: primitives.R4.code[];
  /** Extension of fhirVersion element */
  _fhirVersion?: Element[];
  /** Human Name for the resource */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** Reason why included in guide */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Is an example/What is this an example of? */
  exampleBoolean?: boolean;
  /** Extension of exampleBoolean element */
  _exampleBoolean?: Element;
  /** Is an example/What is this an example of? */
  exampleCanonical?: primitives.R4.canonical;
  /** Extension of exampleCanonical element */
  _exampleCanonical?: Element;
  /** Grouping this is part of */
  groupingId?: primitives.R4.id;
  /** Extension of groupingId element */
  _groupingId?: Element;
}
/**
 * Resource in the implementation guide
 */
export const ImplementationGuideDefinitionResource: t.Type<
  ImplementationGuideDefinitionResource
> = t.recursion<ImplementationGuideDefinitionResource>(
  "ImplementationGuideDefinitionResource",
  () =>
    t.intersection([
      t.type({
        /** Location of the resource */
        reference: Reference
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
        /** Versions this applies to (if different to IG) */
        fhirVersion: t.array(primitives.R4.code),
        /** Extension of fhirVersion element */
        _fhirVersion: t.array(Element),
        /** Human Name for the resource */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** Reason why included in guide */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Is an example/What is this an example of? */
        exampleBoolean: primitives.R4.boolean,
        /** Extension of exampleBoolean element */
        _exampleBoolean: Element,
        /** Is an example/What is this an example of? */
        exampleCanonical: primitives.R4.canonical,
        /** Extension of exampleCanonical element */
        _exampleCanonical: Element,
        /** Grouping this is part of */
        groupingId: primitives.R4.id,
        /** Extension of groupingId element */
        _groupingId: Element
      })
    ])
);

/**
 * Page/Section in the Guide
 */
export interface ImplementationGuideDefinitionPage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Where to find that page */
  nameUrl: primitives.R4.url;
  /** Extension of nameUrl element */
  _nameUrl?: Element;
  /** Where to find that page */
  nameReference: Reference;
  /** Short title shown for navigational assistance */
  title: string;
  /** Extension of title element */
  _title?: Element;
  /** html | markdown | xml | generated */
  generation: primitives.R4.code;
  /** Extension of generation element */
  _generation?: Element;
  /** Nested Pages / Sections */
  page?: ImplementationGuideDefinitionPage[];
}
/**
 * Page/Section in the Guide
 */
export const ImplementationGuideDefinitionPage: t.Type<
  ImplementationGuideDefinitionPage
> = t.recursion<ImplementationGuideDefinitionPage>(
  "ImplementationGuideDefinitionPage",
  () =>
    t.intersection([
      t.type({
        /** Where to find that page */
        nameUrl: primitives.R4.url,
        /** Where to find that page */
        nameReference: Reference,
        /** Short title shown for navigational assistance */
        title: primitives.R4.string,
        /** html | markdown | xml | generated */
        generation: primitives.R4.code
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
        /** Extension of nameUrl element */
        _nameUrl: Element,
        /** Extension of title element */
        _title: Element,
        /** Extension of generation element */
        _generation: Element,
        /** Nested Pages / Sections */
        page: t.array(ImplementationGuideDefinitionPage)
      })
    ])
);

/**
 * Defines how IG is built by tools
 */
export interface ImplementationGuideDefinitionParameter {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Value for named type */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * Defines how IG is built by tools
 */
export const ImplementationGuideDefinitionParameter: t.Type<
  ImplementationGuideDefinitionParameter
> = t.recursion<ImplementationGuideDefinitionParameter>(
  "ImplementationGuideDefinitionParameter",
  () =>
    t.intersection([
      t.type({
        /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
        code: primitives.R4.code,
        /** Value for named type */
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
        /** Extension of code element */
        _code: Element,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * A template for building resources
 */
export interface ImplementationGuideDefinitionTemplate {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of template specified */
  code: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** The source location for the template */
  source: string;
  /** Extension of source element */
  _source?: Element;
  /** The scope in which the template applies */
  scope?: string;
  /** Extension of scope element */
  _scope?: Element;
}
/**
 * A template for building resources
 */
export const ImplementationGuideDefinitionTemplate: t.Type<
  ImplementationGuideDefinitionTemplate
> = t.recursion<ImplementationGuideDefinitionTemplate>(
  "ImplementationGuideDefinitionTemplate",
  () =>
    t.intersection([
      t.type({
        /** Type of template specified */
        code: primitives.R4.code,
        /** The source location for the template */
        source: primitives.R4.string
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
        _code: Element,
        /** Extension of source element */
        _source: Element,
        /** The scope in which the template applies */
        scope: primitives.R4.string,
        /** Extension of scope element */
        _scope: Element
      })
    ])
);

/**
 * Information about an assembled IG
 */
export interface ImplementationGuideManifest {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location of rendered implementation guide */
  rendering?: primitives.R4.url;
  /** Extension of rendering element */
  _rendering?: Element;
  /** Image within the IG */
  image?: string[];
  /** Extension of image element */
  _image?: Element[];
  /** Additional linkable file in IG */
  other?: string[];
  /** Extension of other element */
  _other?: Element[];
}
/**
 * Information about an assembled IG
 */
export const ImplementationGuideManifest: t.Type<
  ImplementationGuideManifest
> = t.recursion<ImplementationGuideManifest>(
  "ImplementationGuideManifest",
  () =>
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
        /** Location of rendered implementation guide */
        rendering: primitives.R4.url,
        /** Extension of rendering element */
        _rendering: Element,
        /** Image within the IG */
        image: t.array(primitives.R4.string),
        /** Extension of image element */
        _image: t.array(Element),
        /** Additional linkable file in IG */
        other: t.array(primitives.R4.string),
        /** Extension of other element */
        _other: t.array(Element)
      })
    ])
);

/**
 * Resource in the implementation guide
 */
export interface ImplementationGuideManifestResource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location of the resource */
  reference: Reference;
  /** Is an example/What is this an example of? */
  exampleBoolean?: boolean;
  /** Extension of exampleBoolean element */
  _exampleBoolean?: Element;
  /** Is an example/What is this an example of? */
  exampleCanonical?: primitives.R4.canonical;
  /** Extension of exampleCanonical element */
  _exampleCanonical?: Element;
  /** Relative path for page in IG */
  relativePath?: primitives.R4.url;
  /** Extension of relativePath element */
  _relativePath?: Element;
}
/**
 * Resource in the implementation guide
 */
export const ImplementationGuideManifestResource: t.Type<
  ImplementationGuideManifestResource
> = t.recursion<ImplementationGuideManifestResource>(
  "ImplementationGuideManifestResource",
  () =>
    t.intersection([
      t.type({
        /** Location of the resource */
        reference: Reference
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
        /** Is an example/What is this an example of? */
        exampleBoolean: primitives.R4.boolean,
        /** Extension of exampleBoolean element */
        _exampleBoolean: Element,
        /** Is an example/What is this an example of? */
        exampleCanonical: primitives.R4.canonical,
        /** Extension of exampleCanonical element */
        _exampleCanonical: Element,
        /** Relative path for page in IG */
        relativePath: primitives.R4.url,
        /** Extension of relativePath element */
        _relativePath: Element
      })
    ])
);

/**
 * HTML page within the parent IG
 */
export interface ImplementationGuideManifestPage {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** HTML page name */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** Title of the page, for references */
  title?: string;
  /** Extension of title element */
  _title?: Element;
  /** Anchor available on the page */
  anchor?: string[];
  /** Extension of anchor element */
  _anchor?: Element[];
}
/**
 * HTML page within the parent IG
 */
export const ImplementationGuideManifestPage: t.Type<
  ImplementationGuideManifestPage
> = t.recursion<ImplementationGuideManifestPage>(
  "ImplementationGuideManifestPage",
  () =>
    t.intersection([
      t.type({
        /** HTML page name */
        name: primitives.R4.string
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
        /** Extension of name element */
        _name: Element,
        /** Title of the page, for references */
        title: primitives.R4.string,
        /** Extension of title element */
        _title: Element,
        /** Anchor available on the page */
        anchor: t.array(primitives.R4.string),
        /** Extension of anchor element */
        _anchor: t.array(Element)
      })
    ])
);
