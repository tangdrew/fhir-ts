/**
 * Bundle Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Resource, ResourceOutputType } from "./Resource";
import { Signature, SignatureOutputType } from "./Signature";

/**
 * Links related to this Bundle
 */
export interface BundleLink {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 */
  relation: t.TypeOf<primitives.R4.StringType>;
  /** Reference details for the link */
  url: t.TypeOf<primitives.R4.URIType>;
}

export interface BundleLinkOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 */
  relation: t.OutputOf<primitives.R4.StringType>;
  /** Reference details for the link */
  url: t.OutputOf<primitives.R4.URIType>;
}

export const BundleLink: t.RecursiveType<
  t.Type<BundleLink, BundleLinkOutputType>,
  BundleLink,
  BundleLinkOutputType
> = t.recursion<BundleLink, BundleLinkOutputType>("BundleLink", () =>
  t.intersection(
    [
      t.type({
        /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 */
        relation: primitives.R4.string,
        /** Reference details for the link */
        url: primitives.R4.uri
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
    "BundleLink"
  )
);

/**
 * Search related information
 */
export interface BundleEntrySearch {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** match | include | outcome - why this is in the result set */
  mode?: t.TypeOf<primitives.R4.CodeType>;
  /** Search ranking (between 0 and 1) */
  score?: t.TypeOf<primitives.R4.DecimalType>;
}

export interface BundleEntrySearchOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** match | include | outcome - why this is in the result set */
  mode?: t.OutputOf<primitives.R4.CodeType>;
  /** Search ranking (between 0 and 1) */
  score?: t.OutputOf<primitives.R4.DecimalType>;
}

export const BundleEntrySearch: t.RecursiveType<
  t.Type<BundleEntrySearch, BundleEntrySearchOutputType>,
  BundleEntrySearch,
  BundleEntrySearchOutputType
> = t.recursion<BundleEntrySearch, BundleEntrySearchOutputType>(
  "BundleEntrySearch",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** match | include | outcome - why this is in the result set */
          mode: primitives.R4.code,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Search ranking (between 0 and 1) */
          score: primitives.R4.decimal
        })
      ],
      "BundleEntrySearch"
    )
);

/**
 * Results of execution (transaction/batch/history)
 */
export interface BundleEntryResponse {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Status response code (text optional) */
  status: t.TypeOf<primitives.R4.StringType>;
  /** The location (if the operation returns a location) */
  location?: t.TypeOf<primitives.R4.URIType>;
  /** The Etag for the resource (if relevant) */
  etag?: t.TypeOf<primitives.R4.StringType>;
  /** Server's date time modified */
  lastModified?: t.TypeOf<primitives.R4.InstantType>;
  /** OperationOutcome with hints and warnings (for batch/transaction) */
  outcome?: Resource;
}

export interface BundleEntryResponseOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Status response code (text optional) */
  status: t.OutputOf<primitives.R4.StringType>;
  /** The location (if the operation returns a location) */
  location?: t.OutputOf<primitives.R4.URIType>;
  /** The Etag for the resource (if relevant) */
  etag?: t.OutputOf<primitives.R4.StringType>;
  /** Server's date time modified */
  lastModified?: t.OutputOf<primitives.R4.InstantType>;
  /** OperationOutcome with hints and warnings (for batch/transaction) */
  outcome?: ResourceOutputType;
}

export const BundleEntryResponse: t.RecursiveType<
  t.Type<BundleEntryResponse, BundleEntryResponseOutputType>,
  BundleEntryResponse,
  BundleEntryResponseOutputType
> = t.recursion<BundleEntryResponse, BundleEntryResponseOutputType>(
  "BundleEntryResponse",
  () =>
    t.intersection(
      [
        t.type({
          /** Status response code (text optional) */
          status: primitives.R4.string
        }),
        t.partial({
          /** The Etag for the resource (if relevant) */
          etag: primitives.R4.string,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Server's date time modified */
          lastModified: primitives.R4.instant,
          /** The location (if the operation returns a location) */
          location: primitives.R4.uri,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** OperationOutcome with hints and warnings (for batch/transaction) */
          outcome: Resource
        })
      ],
      "BundleEntryResponse"
    )
);

/**
 * Additional execution information (transaction/batch/history)
 */
export interface BundleEntryRequest {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** GET | HEAD | POST | PUT | DELETE | PATCH */
  method: t.TypeOf<primitives.R4.CodeType>;
  /** URL for HTTP equivalent of this entry */
  url: t.TypeOf<primitives.R4.URIType>;
  /** For managing cache currency */
  ifNoneMatch?: t.TypeOf<primitives.R4.StringType>;
  /** For managing cache currency */
  ifModifiedSince?: t.TypeOf<primitives.R4.InstantType>;
  /** For managing update contention */
  ifMatch?: t.TypeOf<primitives.R4.StringType>;
  /** For conditional creates */
  ifNoneExist?: t.TypeOf<primitives.R4.StringType>;
}

export interface BundleEntryRequestOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** GET | HEAD | POST | PUT | DELETE | PATCH */
  method: t.OutputOf<primitives.R4.CodeType>;
  /** URL for HTTP equivalent of this entry */
  url: t.OutputOf<primitives.R4.URIType>;
  /** For managing cache currency */
  ifNoneMatch?: t.OutputOf<primitives.R4.StringType>;
  /** For managing cache currency */
  ifModifiedSince?: t.OutputOf<primitives.R4.InstantType>;
  /** For managing update contention */
  ifMatch?: t.OutputOf<primitives.R4.StringType>;
  /** For conditional creates */
  ifNoneExist?: t.OutputOf<primitives.R4.StringType>;
}

export const BundleEntryRequest: t.RecursiveType<
  t.Type<BundleEntryRequest, BundleEntryRequestOutputType>,
  BundleEntryRequest,
  BundleEntryRequestOutputType
> = t.recursion<BundleEntryRequest, BundleEntryRequestOutputType>(
  "BundleEntryRequest",
  () =>
    t.intersection(
      [
        t.type({
          /** GET | HEAD | POST | PUT | DELETE | PATCH */
          method: primitives.R4.code,
          /** URL for HTTP equivalent of this entry */
          url: primitives.R4.uri
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** For managing update contention */
          ifMatch: primitives.R4.string,
          /** For managing cache currency */
          ifModifiedSince: primitives.R4.instant,
          /** For conditional creates */
          ifNoneExist: primitives.R4.string,
          /** For managing cache currency */
          ifNoneMatch: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "BundleEntryRequest"
    )
);

/**
 * Entry in the bundle - will have a resource or information
 */
export interface BundleEntry {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Links related to this entry */
  link?: BundleLink[];
  /** URI for resource (Absolute URL server address or URI for UUID/OID) */
  fullUrl?: t.TypeOf<primitives.R4.URIType>;
  /** A resource in the bundle */
  resource?: Resource;
  /** Search related information */
  search?: BundleEntrySearch;
  /** Additional execution information (transaction/batch/history) */
  request?: BundleEntryRequest;
  /** Results of execution (transaction/batch/history) */
  response?: BundleEntryResponse;
}

export interface BundleEntryOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Links related to this entry */
  link?: BundleLinkOutputType[];
  /** URI for resource (Absolute URL server address or URI for UUID/OID) */
  fullUrl?: t.OutputOf<primitives.R4.URIType>;
  /** A resource in the bundle */
  resource?: ResourceOutputType;
  /** Search related information */
  search?: BundleEntrySearchOutputType;
  /** Additional execution information (transaction/batch/history) */
  request?: BundleEntryRequestOutputType;
  /** Results of execution (transaction/batch/history) */
  response?: BundleEntryResponseOutputType;
}

export const BundleEntry: t.RecursiveType<
  t.Type<BundleEntry, BundleEntryOutputType>,
  BundleEntry,
  BundleEntryOutputType
> = t.recursion<BundleEntry, BundleEntryOutputType>("BundleEntry", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** URI for resource (Absolute URL server address or URI for UUID/OID) */
        fullUrl: primitives.R4.uri,
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Links related to this entry */
        link: t.array(BundleLink),
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** Additional execution information (transaction/batch/history) */
        request: BundleEntryRequest,
        /** A resource in the bundle */
        resource: Resource,
        /** Results of execution (transaction/batch/history) */
        response: BundleEntryResponse,
        /** Search related information */
        search: BundleEntrySearch
      })
    ],
    "BundleEntry"
  )
);

/**
 * Contains a collection of resources
 */
export interface Bundle {
  /** Logical id of this artifact */
  id?: t.TypeOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: t.TypeOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.TypeOf<primitives.R4.CodeType>;
  /** Persistent identifier for the bundle */
  identifier?: Identifier;
  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection */
  type: t.TypeOf<primitives.R4.CodeType>;
  /** When the bundle was assembled */
  timestamp?: t.TypeOf<primitives.R4.InstantType>;
  /** If search, the total number of matches */
  total?: t.TypeOf<primitives.R4.UnsignedIntegerType>;
  /** Links related to this Bundle */
  link?: BundleLink[];
  /** Entry in the bundle - will have a resource or information */
  entry?: BundleEntry[];
  /** Digital Signature */
  signature?: Signature;
}

export interface BundleOutputType {
  /** Logical id of this artifact */
  id?: t.OutputOf<primitives.R4.IDType>;
  /** Metadata about the resource */
  meta?: MetaOutputType;
  /** A set of rules under which this content was created */
  implicitRules?: t.OutputOf<primitives.R4.URIType>;
  /** Language of the resource content */
  language?: t.OutputOf<primitives.R4.CodeType>;
  /** Persistent identifier for the bundle */
  identifier?: IdentifierOutputType;
  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection */
  type: t.OutputOf<primitives.R4.CodeType>;
  /** When the bundle was assembled */
  timestamp?: t.OutputOf<primitives.R4.InstantType>;
  /** If search, the total number of matches */
  total?: t.OutputOf<primitives.R4.UnsignedIntegerType>;
  /** Links related to this Bundle */
  link?: BundleLinkOutputType[];
  /** Entry in the bundle - will have a resource or information */
  entry?: BundleEntryOutputType[];
  /** Digital Signature */
  signature?: SignatureOutputType;
}

export const Bundle: t.RecursiveType<
  t.Type<Bundle, BundleOutputType>,
  Bundle,
  BundleOutputType
> = t.recursion<Bundle, BundleOutputType>("Bundle", () =>
  t.intersection(
    [
      t.type({
        /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection */
        type: primitives.R4.code
      }),
      t.partial({
        /** Entry in the bundle - will have a resource or information */
        entry: t.array(BundleEntry),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Persistent identifier for the bundle */
        identifier: Identifier,
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Links related to this Bundle */
        link: t.array(BundleLink),
        /** Metadata about the resource */
        meta: Meta,
        /** Digital Signature */
        signature: Signature,
        /** When the bundle was assembled */
        timestamp: primitives.R4.instant,
        /** If search, the total number of matches */
        total: primitives.R4.unsignedInt
      })
    ],
    "Bundle"
  )
);
