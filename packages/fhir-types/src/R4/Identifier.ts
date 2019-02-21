/**
 * Identifier Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";

/**
 * An identifier intended for computation
 */
export interface Identifier {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** usual | official | temp | secondary | old (If known) */
  use?: t.TypeOf<primitives.R4.CodeType>;
  /** Description of identifier */
  type?: CodeableConcept;
  /** The namespace for the identifier value */
  system?: t.TypeOf<primitives.R4.URIType>;
  /** The value that is unique */
  value?: t.TypeOf<primitives.R4.StringType>;
  /** Time period when id is/was valid for use */
  period?: Period;
  /** Organization that issued id (may be just text) */
  assigner?: Reference;
}

export interface IdentifierOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** usual | official | temp | secondary | old (If known) */
  use?: t.OutputOf<primitives.R4.CodeType>;
  /** Description of identifier */
  type?: CodeableConceptOutputType;
  /** The namespace for the identifier value */
  system?: t.OutputOf<primitives.R4.URIType>;
  /** The value that is unique */
  value?: t.OutputOf<primitives.R4.StringType>;
  /** Time period when id is/was valid for use */
  period?: PeriodOutputType;
  /** Organization that issued id (may be just text) */
  assigner?: ReferenceOutputType;
}

export const Identifier: t.RecursiveType<
  t.Type<Identifier, IdentifierOutputType>,
  Identifier,
  IdentifierOutputType
> = t.recursion<Identifier, IdentifierOutputType>("Identifier", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Organization that issued id (may be just text) */
        assigner: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Time period when id is/was valid for use */
        period: Period,
        /** The namespace for the identifier value */
        system: primitives.R4.uri,
        /** Description of identifier */
        type: CodeableConcept,
        /** usual | official | temp | secondary | old (If known) */
        use: primitives.R4.code,
        /** The value that is unique */
        value: primitives.R4.string
      })
    ],
    "Identifier"
  )
);
