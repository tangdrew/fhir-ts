/**
 * ImplementationGuide Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Resource in the implementation guide
 */
export interface ImplementationGuideManifestResource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location of the resource */
  reference: Reference;
  /** Is an example/What is this an example of? */
  example?:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.CanonicalType>;
  /** Relative path for page in IG */
  relativePath?: t.TypeOf<primitives.R4.URLType>;
}

export interface ImplementationGuideManifestResourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Location of the resource */
  reference: ReferenceOutputType;
  /** Is an example/What is this an example of? */
  example?:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.CanonicalType>;
  /** Relative path for page in IG */
  relativePath?: t.OutputOf<primitives.R4.URLType>;
}

export const ImplementationGuideManifestResource: t.RecursiveType<
  t.Type<
    ImplementationGuideManifestResource,
    ImplementationGuideManifestResourceOutputType
  >,
  ImplementationGuideManifestResource,
  ImplementationGuideManifestResourceOutputType
> = t.recursion<
  ImplementationGuideManifestResource,
  ImplementationGuideManifestResourceOutputType
>("ImplementationGuideManifestResource", () =>
  t.intersection(
    [
      t.type({
        /** Location of the resource */
        reference: Reference
      }),
      t.partial({
        /** Is an example/What is this an example of? */
        example: t.union([primitives.R4.boolean, primitives.R4.canonical]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Relative path for page in IG */
        relativePath: primitives.R4.url
      })
    ],
    "ImplementationGuideManifestResource"
  )
);

/**
 * HTML page within the parent IG
 */
export interface ImplementationGuideManifestPage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** HTML page name */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Title of the page, for references */
  title?: t.TypeOf<primitives.R4.StringType>;
  /** Anchor available on the page */
  anchor?: t.TypeOf<primitives.R4.StringType>[];
}

export interface ImplementationGuideManifestPageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** HTML page name */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Title of the page, for references */
  title?: t.OutputOf<primitives.R4.StringType>;
  /** Anchor available on the page */
  anchor?: t.OutputOf<primitives.R4.StringType>[];
}

export const ImplementationGuideManifestPage: t.RecursiveType<
  t.Type<
    ImplementationGuideManifestPage,
    ImplementationGuideManifestPageOutputType
  >,
  ImplementationGuideManifestPage,
  ImplementationGuideManifestPageOutputType
> = t.recursion<
  ImplementationGuideManifestPage,
  ImplementationGuideManifestPageOutputType
>("ImplementationGuideManifestPage", () =>
  t.intersection(
    [
      t.type({
        /** HTML page name */
        name: primitives.R4.string
      }),
      t.partial({
        /** Anchor available on the page */
        anchor: t.array(primitives.R4.string),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Title of the page, for references */
        title: primitives.R4.string
      })
    ],
    "ImplementationGuideManifestPage"
  )
);

/**
 * Information about an assembled IG
 */
export interface ImplementationGuideManifest {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location of rendered implementation guide */
  rendering?: t.TypeOf<primitives.R4.URLType>;
  /** Resource in the implementation guide */
  resource: ImplementationGuideManifestResource[];
  /** HTML page within the parent IG */
  page?: ImplementationGuideManifestPage[];
  /** Image within the IG */
  image?: t.TypeOf<primitives.R4.StringType>[];
  /** Additional linkable file in IG */
  other?: t.TypeOf<primitives.R4.StringType>[];
}

export interface ImplementationGuideManifestOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Location of rendered implementation guide */
  rendering?: t.OutputOf<primitives.R4.URLType>;
  /** Resource in the implementation guide */
  resource: ImplementationGuideManifestResourceOutputType[];
  /** HTML page within the parent IG */
  page?: ImplementationGuideManifestPageOutputType[];
  /** Image within the IG */
  image?: t.OutputOf<primitives.R4.StringType>[];
  /** Additional linkable file in IG */
  other?: t.OutputOf<primitives.R4.StringType>[];
}

export const ImplementationGuideManifest: t.RecursiveType<
  t.Type<ImplementationGuideManifest, ImplementationGuideManifestOutputType>,
  ImplementationGuideManifest,
  ImplementationGuideManifestOutputType
> = t.recursion<
  ImplementationGuideManifest,
  ImplementationGuideManifestOutputType
>("ImplementationGuideManifest", () =>
  t.intersection(
    [
      t.type({
        /** Resource in the implementation guide */
        resource: t.array(ImplementationGuideManifestResource)
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Image within the IG */
        image: t.array(primitives.R4.string),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Additional linkable file in IG */
        other: t.array(primitives.R4.string),
        /** HTML page within the parent IG */
        page: t.array(ImplementationGuideManifestPage),
        /** Location of rendered implementation guide */
        rendering: primitives.R4.url
      })
    ],
    "ImplementationGuideManifest"
  )
);

/**
 * Profiles that apply globally
 */
export interface ImplementationGuideGlobal {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type this profile applies to */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** Profile that all resources must conform to */
  profile: t.TypeOf<primitives.R4.CanonicalType>;
}

export interface ImplementationGuideGlobalOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type this profile applies to */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** Profile that all resources must conform to */
  profile: t.OutputOf<primitives.R4.CanonicalType>;
}

export const ImplementationGuideGlobal: t.RecursiveType<
  t.Type<ImplementationGuideGlobal, ImplementationGuideGlobalOutputType>,
  ImplementationGuideGlobal,
  ImplementationGuideGlobalOutputType
> = t.recursion<ImplementationGuideGlobal, ImplementationGuideGlobalOutputType>(
  "ImplementationGuideGlobal",
  () =>
    t.intersection(
      [
        t.type({
          /** Profile that all resources must conform to */
          profile: primitives.R4.canonical,
          /** Type this profile applies to */
          type: primitives.R4.code
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
      "ImplementationGuideGlobal"
    )
);

/**
 * Another Implementation guide this depends on
 */
export interface ImplementationGuideDependsOn {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Identity of the IG that this depends on */
  uri: t.TypeOf<primitives.R4.CanonicalType>;
  /** NPM Package name for IG this depends on */
  packageId?: t.TypeOf<primitives.R4.IDType>;
  /** Version of the IG */
  version?: t.TypeOf<primitives.R4.StringType>;
}

export interface ImplementationGuideDependsOnOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Identity of the IG that this depends on */
  uri: t.OutputOf<primitives.R4.CanonicalType>;
  /** NPM Package name for IG this depends on */
  packageId?: t.OutputOf<primitives.R4.IDType>;
  /** Version of the IG */
  version?: t.OutputOf<primitives.R4.StringType>;
}

export const ImplementationGuideDependsOn: t.RecursiveType<
  t.Type<ImplementationGuideDependsOn, ImplementationGuideDependsOnOutputType>,
  ImplementationGuideDependsOn,
  ImplementationGuideDependsOnOutputType
> = t.recursion<
  ImplementationGuideDependsOn,
  ImplementationGuideDependsOnOutputType
>("ImplementationGuideDependsOn", () =>
  t.intersection(
    [
      t.type({
        /** Identity of the IG that this depends on */
        uri: primitives.R4.canonical
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** NPM Package name for IG this depends on */
        packageId: primitives.R4.id,
        /** Version of the IG */
        version: primitives.R4.string
      })
    ],
    "ImplementationGuideDependsOn"
  )
);

/**
 * A template for building resources
 */
export interface ImplementationGuideDefinitionTemplate {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of template specified */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** The source location for the template */
  source: t.TypeOf<primitives.R4.StringType>;
  /** The scope in which the template applies */
  scope?: t.TypeOf<primitives.R4.StringType>;
}

export interface ImplementationGuideDefinitionTemplateOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of template specified */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** The source location for the template */
  source: t.OutputOf<primitives.R4.StringType>;
  /** The scope in which the template applies */
  scope?: t.OutputOf<primitives.R4.StringType>;
}

export const ImplementationGuideDefinitionTemplate: t.RecursiveType<
  t.Type<
    ImplementationGuideDefinitionTemplate,
    ImplementationGuideDefinitionTemplateOutputType
  >,
  ImplementationGuideDefinitionTemplate,
  ImplementationGuideDefinitionTemplateOutputType
> = t.recursion<
  ImplementationGuideDefinitionTemplate,
  ImplementationGuideDefinitionTemplateOutputType
>("ImplementationGuideDefinitionTemplate", () =>
  t.intersection(
    [
      t.type({
        /** Type of template specified */
        code: primitives.R4.code,
        /** The source location for the template */
        source: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The scope in which the template applies */
        scope: primitives.R4.string
      })
    ],
    "ImplementationGuideDefinitionTemplate"
  )
);

/**
 * Resource in the implementation guide
 */
export interface ImplementationGuideDefinitionResource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Location of the resource */
  reference: Reference;
  /** Versions this applies to (if different to IG) */
  fhirVersion?: t.TypeOf<primitives.R4.CodeType>[];
  /** Human Name for the resource */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** Reason why included in guide */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Is an example/What is this an example of? */
  example?:
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.CanonicalType>;
  /** Grouping this is part of */
  groupingId?: t.TypeOf<primitives.R4.IDType>;
}

export interface ImplementationGuideDefinitionResourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Location of the resource */
  reference: ReferenceOutputType;
  /** Versions this applies to (if different to IG) */
  fhirVersion?: t.OutputOf<primitives.R4.CodeType>[];
  /** Human Name for the resource */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** Reason why included in guide */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Is an example/What is this an example of? */
  example?:
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.CanonicalType>;
  /** Grouping this is part of */
  groupingId?: t.OutputOf<primitives.R4.IDType>;
}

export const ImplementationGuideDefinitionResource: t.RecursiveType<
  t.Type<
    ImplementationGuideDefinitionResource,
    ImplementationGuideDefinitionResourceOutputType
  >,
  ImplementationGuideDefinitionResource,
  ImplementationGuideDefinitionResourceOutputType
> = t.recursion<
  ImplementationGuideDefinitionResource,
  ImplementationGuideDefinitionResourceOutputType
>("ImplementationGuideDefinitionResource", () =>
  t.intersection(
    [
      t.type({
        /** Location of the resource */
        reference: Reference
      }),
      t.partial({
        /** Reason why included in guide */
        description: primitives.R4.string,
        /** Is an example/What is this an example of? */
        example: t.union([primitives.R4.boolean, primitives.R4.canonical]),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Versions this applies to (if different to IG) */
        fhirVersion: t.array(primitives.R4.code),
        /** Grouping this is part of */
        groupingId: primitives.R4.id,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Human Name for the resource */
        name: primitives.R4.string
      })
    ],
    "ImplementationGuideDefinitionResource"
  )
);

/**
 * Defines how IG is built by tools
 */
export interface ImplementationGuideDefinitionParameter {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
  code: t.TypeOf<primitives.R4.CodeType>;
  /** Value for named type */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface ImplementationGuideDefinitionParameterOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
  code: t.OutputOf<primitives.R4.CodeType>;
  /** Value for named type */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const ImplementationGuideDefinitionParameter: t.RecursiveType<
  t.Type<
    ImplementationGuideDefinitionParameter,
    ImplementationGuideDefinitionParameterOutputType
  >,
  ImplementationGuideDefinitionParameter,
  ImplementationGuideDefinitionParameterOutputType
> = t.recursion<
  ImplementationGuideDefinitionParameter,
  ImplementationGuideDefinitionParameterOutputType
>("ImplementationGuideDefinitionParameter", () =>
  t.intersection(
    [
      t.type({
        /** apply | path-resource | path-pages | path-tx-cache | expansion-parameter | rule-broken-links | generate-xml | generate-json | generate-turtle | html-template */
        code: primitives.R4.code,
        /** Value for named type */
        value: primitives.R4.string
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
    "ImplementationGuideDefinitionParameter"
  )
);

/**
 * Page/Section in the Guide
 */
export interface ImplementationGuideDefinitionPage {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Where to find that page */
  name: t.TypeOf<primitives.R4.URLType> | Reference;
  /** Short title shown for navigational assistance */
  title: t.TypeOf<primitives.R4.StringType>;
  /** html | markdown | xml | generated */
  generation: t.TypeOf<primitives.R4.CodeType>;
  /** Nested Pages / Sections */
  page?: ImplementationGuideDefinitionPage[];
}

export interface ImplementationGuideDefinitionPageOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Where to find that page */
  name: t.OutputOf<primitives.R4.URLType> | ReferenceOutputType;
  /** Short title shown for navigational assistance */
  title: t.OutputOf<primitives.R4.StringType>;
  /** html | markdown | xml | generated */
  generation: t.OutputOf<primitives.R4.CodeType>;
  /** Nested Pages / Sections */
  page?: ImplementationGuideDefinitionPageOutputType[];
}

export const ImplementationGuideDefinitionPage: t.RecursiveType<
  t.Type<
    ImplementationGuideDefinitionPage,
    ImplementationGuideDefinitionPageOutputType
  >,
  ImplementationGuideDefinitionPage,
  ImplementationGuideDefinitionPageOutputType
> = t.recursion<
  ImplementationGuideDefinitionPage,
  ImplementationGuideDefinitionPageOutputType
>("ImplementationGuideDefinitionPage", () =>
  t.intersection(
    [
      t.type({
        /** html | markdown | xml | generated */
        generation: primitives.R4.code,
        /** Where to find that page */
        name: t.union([primitives.R4.url, Reference]),
        /** Short title shown for navigational assistance */
        title: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Nested Pages / Sections */
        page: t.array(ImplementationGuideDefinitionPage)
      })
    ],
    "ImplementationGuideDefinitionPage"
  )
);

/**
 * Grouping used to present related resources in the IG
 */
export interface ImplementationGuideDefinitionGrouping {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Descriptive name for the package */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Human readable text describing the package */
  description?: t.TypeOf<primitives.R4.StringType>;
}

export interface ImplementationGuideDefinitionGroupingOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Descriptive name for the package */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Human readable text describing the package */
  description?: t.OutputOf<primitives.R4.StringType>;
}

export const ImplementationGuideDefinitionGrouping: t.RecursiveType<
  t.Type<
    ImplementationGuideDefinitionGrouping,
    ImplementationGuideDefinitionGroupingOutputType
  >,
  ImplementationGuideDefinitionGrouping,
  ImplementationGuideDefinitionGroupingOutputType
> = t.recursion<
  ImplementationGuideDefinitionGrouping,
  ImplementationGuideDefinitionGroupingOutputType
>("ImplementationGuideDefinitionGrouping", () =>
  t.intersection(
    [
      t.type({
        /** Descriptive name for the package */
        name: primitives.R4.string
      }),
      t.partial({
        /** Human readable text describing the package */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "ImplementationGuideDefinitionGrouping"
  )
);

/**
 * Information needed to build the IG
 */
export interface ImplementationGuideDefinition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Grouping used to present related resources in the IG */
  grouping?: ImplementationGuideDefinitionGrouping[];
  /** Resource in the implementation guide */
  resource: ImplementationGuideDefinitionResource[];
  /** Page/Section in the Guide */
  page?: ImplementationGuideDefinitionPage;
  /** Defines how IG is built by tools */
  parameter?: ImplementationGuideDefinitionParameter[];
  /** A template for building resources */
  template?: ImplementationGuideDefinitionTemplate[];
}

export interface ImplementationGuideDefinitionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Grouping used to present related resources in the IG */
  grouping?: ImplementationGuideDefinitionGroupingOutputType[];
  /** Resource in the implementation guide */
  resource: ImplementationGuideDefinitionResourceOutputType[];
  /** Page/Section in the Guide */
  page?: ImplementationGuideDefinitionPageOutputType;
  /** Defines how IG is built by tools */
  parameter?: ImplementationGuideDefinitionParameterOutputType[];
  /** A template for building resources */
  template?: ImplementationGuideDefinitionTemplateOutputType[];
}

export const ImplementationGuideDefinition: t.RecursiveType<
  t.Type<
    ImplementationGuideDefinition,
    ImplementationGuideDefinitionOutputType
  >,
  ImplementationGuideDefinition,
  ImplementationGuideDefinitionOutputType
> = t.recursion<
  ImplementationGuideDefinition,
  ImplementationGuideDefinitionOutputType
>("ImplementationGuideDefinition", () =>
  t.intersection(
    [
      t.type({
        /** Resource in the implementation guide */
        resource: t.array(ImplementationGuideDefinitionResource)
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Grouping used to present related resources in the IG */
        grouping: t.array(ImplementationGuideDefinitionGrouping),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Page/Section in the Guide */
        page: ImplementationGuideDefinitionPage,
        /** Defines how IG is built by tools */
        parameter: t.array(ImplementationGuideDefinitionParameter),
        /** A template for building resources */
        template: t.array(ImplementationGuideDefinitionTemplate)
      })
    ],
    "ImplementationGuideDefinition"
  )
);

/**
 * A set of rules about how FHIR is used
 */
export interface ImplementationGuide {
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
  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
  url: t.TypeOf<primitives.R4.URIType>;
  /** Business version of the implementation guide */
  version?: t.TypeOf<primitives.R4.StringType>;
  /** Name for this implementation guide (computer friendly) */
  name: t.TypeOf<primitives.R4.StringType>;
  /** Name for this implementation guide (human friendly) */
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
  /** Natural language description of the implementation guide */
  description?: t.TypeOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContext[];
  /** Intended jurisdiction for implementation guide (if applicable) */
  jurisdiction?: CodeableConcept[];
  /** Use and/or publishing restrictions */
  copyright?: t.TypeOf<primitives.R4.MarkdownType>;
  /** NPM Package name for IG */
  packageId: t.TypeOf<primitives.R4.IDType>;
  /** SPDX license code for this IG (or not-open-source) */
  license?: t.TypeOf<primitives.R4.CodeType>;
  /** FHIR Version(s) this Implementation Guide targets */
  fhirVersion: t.TypeOf<primitives.R4.CodeType>[];
  /** Another Implementation guide this depends on */
  dependsOn?: ImplementationGuideDependsOn[];
  /** Profiles that apply globally */
  global?: ImplementationGuideGlobal[];
  /** Information needed to build the IG */
  definition?: ImplementationGuideDefinition;
  /** Information about an assembled IG */
  manifest?: ImplementationGuideManifest;
}

export interface ImplementationGuideOutputType {
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
  /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
  url: t.OutputOf<primitives.R4.URIType>;
  /** Business version of the implementation guide */
  version?: t.OutputOf<primitives.R4.StringType>;
  /** Name for this implementation guide (computer friendly) */
  name: t.OutputOf<primitives.R4.StringType>;
  /** Name for this implementation guide (human friendly) */
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
  /** Natural language description of the implementation guide */
  description?: t.OutputOf<primitives.R4.MarkdownType>;
  /** The context that the content is intended to support */
  useContext?: UsageContextOutputType[];
  /** Intended jurisdiction for implementation guide (if applicable) */
  jurisdiction?: CodeableConceptOutputType[];
  /** Use and/or publishing restrictions */
  copyright?: t.OutputOf<primitives.R4.MarkdownType>;
  /** NPM Package name for IG */
  packageId: t.OutputOf<primitives.R4.IDType>;
  /** SPDX license code for this IG (or not-open-source) */
  license?: t.OutputOf<primitives.R4.CodeType>;
  /** FHIR Version(s) this Implementation Guide targets */
  fhirVersion: t.OutputOf<primitives.R4.CodeType>[];
  /** Another Implementation guide this depends on */
  dependsOn?: ImplementationGuideDependsOnOutputType[];
  /** Profiles that apply globally */
  global?: ImplementationGuideGlobalOutputType[];
  /** Information needed to build the IG */
  definition?: ImplementationGuideDefinitionOutputType;
  /** Information about an assembled IG */
  manifest?: ImplementationGuideManifestOutputType;
}

export const ImplementationGuide: t.RecursiveType<
  t.Type<ImplementationGuide, ImplementationGuideOutputType>,
  ImplementationGuide,
  ImplementationGuideOutputType
> = t.recursion<ImplementationGuide, ImplementationGuideOutputType>(
  "ImplementationGuide",
  () =>
    t.intersection(
      [
        t.type({
          /** FHIR Version(s) this Implementation Guide targets */
          fhirVersion: t.array(primitives.R4.code),
          /** Name for this implementation guide (computer friendly) */
          name: primitives.R4.string,
          /** NPM Package name for IG */
          packageId: primitives.R4.id,
          /** draft | active | retired | unknown */
          status: primitives.R4.code,
          /** Canonical identifier for this implementation guide, represented as a URI (globally unique) */
          url: primitives.R4.uri
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
          /** Information needed to build the IG */
          definition: ImplementationGuideDefinition,
          /** Another Implementation guide this depends on */
          dependsOn: t.array(ImplementationGuideDependsOn),
          /** Natural language description of the implementation guide */
          description: primitives.R4.markdown,
          /** For testing purposes, not real usage */
          experimental: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Profiles that apply globally */
          global: t.array(ImplementationGuideGlobal),
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Intended jurisdiction for implementation guide (if applicable) */
          jurisdiction: t.array(CodeableConcept),
          /** Language of the resource content */
          language: primitives.R4.code,
          /** SPDX license code for this IG (or not-open-source) */
          license: primitives.R4.code,
          /** Information about an assembled IG */
          manifest: ImplementationGuideManifest,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Name of the publisher (organization or individual) */
          publisher: primitives.R4.string,
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** Name for this implementation guide (human friendly) */
          title: primitives.R4.string,
          /** The context that the content is intended to support */
          useContext: t.array(UsageContext),
          /** Business version of the implementation guide */
          version: primitives.R4.string
        })
      ],
      "ImplementationGuide"
    )
);
