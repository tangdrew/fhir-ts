/**
 * FHIR Conformance Types
 */

export enum FHIRPrimitives {
  base64binary = "base64binary",
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
  uuid = "uuid"
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
