import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";

/**
 * FHIR Conformance Types
 */

export enum FHIRPrimitives {
  base64Binary = "base64Binary",
  boolean = "boolean",
  canonical = "canonical",
  code = "code",
  date = "date",
  dateTime = "dateTime",
  decimal = "decimal",
  id = "id",
  instant = "instant",
  integer = "integer",
  markdown = "markdown",
  oid = "oid",
  positiveInt = "positiveInt",
  string = "string",
  time = "time",
  unsignedInt = "unsignedInt",
  uri = "uri",
  url = "url",
  uuid = "uuid",
  xhtml = "xhtml"
}

export interface StructureDefinition {
  resourceType: string;
  url: string;
  version?: string;
  name: string;
  title?: string;
  status: string;
  experimental?: boolean;
  date?: string;
  description?: string;
  fhirVersion?: string;
  kind: string;
  abstract: boolean;
  contextType?: string;
  context?: string[];
  contextInvariant?: string[];
  type: string;
  baseDefinition?: string;
  derivation?: string;
  snapshot?: { element: ElementDefinition[] };
  differential?: { element: ElementDefinition[] };
}

export interface ElementDefinition {
  id?: string;
  path: string;
  min?: number;
  max?: string;
  type?: Array<{
    code: string;
  }>;
  short?: string;
  contentReference?: string;
}

export type ChoiceElementDefinition = ElementDefinition & {
  type: NonEmptyArray<{ code: string }>;
};

export type ContentReferenceElementDefinition = ElementDefinition & {
  contentReference: string;
  type: undefined;
};

/**
 * Logical grouping of element definitions, e.g. a BackboneElement and it's elements
 */
export interface ElementGroup {
  name: string;
  comment: string;
  definitions: ElementDefinition[];
}
