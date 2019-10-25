/**
 * Bundle Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Resource } from "./Resource";
import { Signature } from "./Signature";

/**
 * Contains a collection of resources
 */
export interface Bundle {
  /** The type of resource */
  resourceType?: "Bundle";
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
  /** Persistent identifier for the bundle */
  identifier?: Identifier;
  /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
  /** When the bundle was assembled */
  timestamp?: primitives.R4.instant;
  /** Extension of timestamp element */
  _timestamp?: Element;
  /** If search, the total number of matches */
  total?: primitives.R4.unsignedInt;
  /** Extension of total element */
  _total?: Element;
  /** Digital Signature */
  signature?: Signature;
}
/**
 * Contains a collection of resources
 */
export const Bundle: t.Type<Bundle> = t.recursion<Bundle>("Bundle", () =>
  t.intersection([
    t.type({
      /** document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection */
      type: primitives.R4.code
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Bundle"),
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
      /** Persistent identifier for the bundle */
      identifier: Identifier,
      /** Extension of type element */
      _type: Element,
      /** When the bundle was assembled */
      timestamp: primitives.R4.instant,
      /** Extension of timestamp element */
      _timestamp: Element,
      /** If search, the total number of matches */
      total: primitives.R4.unsignedInt,
      /** Extension of total element */
      _total: Element,
      /** Digital Signature */
      signature: Signature
    })
  ])
);

/**
 * Links related to this Bundle
 */
export interface BundleLink {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 */
  relation: string;
  /** Extension of relation element */
  _relation?: Element;
  /** Reference details for the link */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
}
/**
 * Links related to this Bundle
 */
export const BundleLink: t.Type<BundleLink> = t.recursion<BundleLink>(
  "BundleLink",
  () =>
    t.intersection([
      t.type({
        /** See http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1 */
        relation: primitives.R4.string,
        /** Reference details for the link */
        url: primitives.R4.uri
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
        /** Extension of relation element */
        _relation: Element,
        /** Extension of url element */
        _url: Element
      })
    ])
);

/**
 * Entry in the bundle - will have a resource or information
 */
export interface BundleEntry {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Links related to this entry */
  link?: BundleLink[];
  /** URI for resource (Absolute URL server address or URI for UUID/OID) */
  fullUrl?: primitives.R4.uri;
  /** Extension of fullUrl element */
  _fullUrl?: Element;
  /** A resource in the bundle */
  resource?: Resource;
}
/**
 * Entry in the bundle - will have a resource or information
 */
export const BundleEntry: t.Type<BundleEntry> = t.recursion<BundleEntry>(
  "BundleEntry",
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
        /** Links related to this entry */
        link: t.array(BundleLink),
        /** URI for resource (Absolute URL server address or URI for UUID/OID) */
        fullUrl: primitives.R4.uri,
        /** Extension of fullUrl element */
        _fullUrl: Element,
        /** A resource in the bundle */
        resource: Resource
      })
    ])
);

/**
 * Search related information
 */
export interface BundleEntrySearch {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** match | include | outcome - why this is in the result set */
  mode?: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Search ranking (between 0 and 1) */
  score?: primitives.R4.decimal;
  /** Extension of score element */
  _score?: Element;
}
/**
 * Search related information
 */
export const BundleEntrySearch: t.Type<BundleEntrySearch> = t.recursion<
  BundleEntrySearch
>("BundleEntrySearch", () =>
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
      /** match | include | outcome - why this is in the result set */
      mode: primitives.R4.code,
      /** Extension of mode element */
      _mode: Element,
      /** Search ranking (between 0 and 1) */
      score: primitives.R4.decimal,
      /** Extension of score element */
      _score: Element
    })
  ])
);

/**
 * Additional execution information (transaction/batch/history)
 */
export interface BundleEntryRequest {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** GET | HEAD | POST | PUT | DELETE | PATCH */
  method: primitives.R4.code;
  /** Extension of method element */
  _method?: Element;
  /** URL for HTTP equivalent of this entry */
  url: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** For managing cache currency */
  ifNoneMatch?: string;
  /** Extension of ifNoneMatch element */
  _ifNoneMatch?: Element;
  /** For managing cache currency */
  ifModifiedSince?: primitives.R4.instant;
  /** Extension of ifModifiedSince element */
  _ifModifiedSince?: Element;
  /** For managing update contention */
  ifMatch?: string;
  /** Extension of ifMatch element */
  _ifMatch?: Element;
  /** For conditional creates */
  ifNoneExist?: string;
  /** Extension of ifNoneExist element */
  _ifNoneExist?: Element;
}
/**
 * Additional execution information (transaction/batch/history)
 */
export const BundleEntryRequest: t.Type<BundleEntryRequest> = t.recursion<
  BundleEntryRequest
>("BundleEntryRequest", () =>
  t.intersection([
    t.type({
      /** GET | HEAD | POST | PUT | DELETE | PATCH */
      method: primitives.R4.code,
      /** URL for HTTP equivalent of this entry */
      url: primitives.R4.uri
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
      /** Extension of method element */
      _method: Element,
      /** Extension of url element */
      _url: Element,
      /** For managing cache currency */
      ifNoneMatch: primitives.R4.string,
      /** Extension of ifNoneMatch element */
      _ifNoneMatch: Element,
      /** For managing cache currency */
      ifModifiedSince: primitives.R4.instant,
      /** Extension of ifModifiedSince element */
      _ifModifiedSince: Element,
      /** For managing update contention */
      ifMatch: primitives.R4.string,
      /** Extension of ifMatch element */
      _ifMatch: Element,
      /** For conditional creates */
      ifNoneExist: primitives.R4.string,
      /** Extension of ifNoneExist element */
      _ifNoneExist: Element
    })
  ])
);

/**
 * Results of execution (transaction/batch/history)
 */
export interface BundleEntryResponse {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Status response code (text optional) */
  status: string;
  /** Extension of status element */
  _status?: Element;
  /** The location (if the operation returns a location) */
  location?: primitives.R4.uri;
  /** Extension of location element */
  _location?: Element;
  /** The Etag for the resource (if relevant) */
  etag?: string;
  /** Extension of etag element */
  _etag?: Element;
  /** Server's date time modified */
  lastModified?: primitives.R4.instant;
  /** Extension of lastModified element */
  _lastModified?: Element;
  /** OperationOutcome with hints and warnings (for batch/transaction) */
  outcome?: Resource;
}
/**
 * Results of execution (transaction/batch/history)
 */
export const BundleEntryResponse: t.Type<BundleEntryResponse> = t.recursion<
  BundleEntryResponse
>("BundleEntryResponse", () =>
  t.intersection([
    t.type({
      /** Status response code (text optional) */
      status: primitives.R4.string
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
      /** Extension of status element */
      _status: Element,
      /** The location (if the operation returns a location) */
      location: primitives.R4.uri,
      /** Extension of location element */
      _location: Element,
      /** The Etag for the resource (if relevant) */
      etag: primitives.R4.string,
      /** Extension of etag element */
      _etag: Element,
      /** Server's date time modified */
      lastModified: primitives.R4.instant,
      /** Extension of lastModified element */
      _lastModified: Element,
      /** OperationOutcome with hints and warnings (for batch/transaction) */
      outcome: Resource
    })
  ])
);
