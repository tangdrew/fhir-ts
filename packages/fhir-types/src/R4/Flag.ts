/**
 * Flag Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Period, PeriodOutputType } from "./Period";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Key information to flag to healthcare providers
 */
export interface Flag {
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
  /** Business identifier */
  identifier?: Identifier[];
  /** active | inactive | entered-in-error */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** Clinical, administrative, etc. */
  category?: CodeableConcept[];
  /** Coded or textual message to display to user */
  code: CodeableConcept;
  /** Who/What is flag about? */
  subject: Reference;
  /** Time period when flag is active */
  period?: Period;
  /** Alert relevant during encounter */
  encounter?: Reference;
  /** Flag creator */
  author?: Reference;
}

export interface FlagOutputType {
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
  /** Business identifier */
  identifier?: IdentifierOutputType[];
  /** active | inactive | entered-in-error */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** Clinical, administrative, etc. */
  category?: CodeableConceptOutputType[];
  /** Coded or textual message to display to user */
  code: CodeableConceptOutputType;
  /** Who/What is flag about? */
  subject: ReferenceOutputType;
  /** Time period when flag is active */
  period?: PeriodOutputType;
  /** Alert relevant during encounter */
  encounter?: ReferenceOutputType;
  /** Flag creator */
  author?: ReferenceOutputType;
}

export const Flag: t.RecursiveType<
  t.Type<Flag, FlagOutputType>,
  Flag,
  FlagOutputType
> = t.recursion<Flag, FlagOutputType>("Flag", () =>
  t.intersection(
    [
      t.type({
        /** Coded or textual message to display to user */
        code: CodeableConcept,
        /** active | inactive | entered-in-error */
        status: primitives.R4.code,
        /** Who/What is flag about? */
        subject: Reference
      }),
      t.partial({
        /** Flag creator */
        author: Reference,
        /** Clinical, administrative, etc. */
        category: t.array(CodeableConcept),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Alert relevant during encounter */
        encounter: Reference,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Business identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Time period when flag is active */
        period: Period,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Flag"
  )
);
