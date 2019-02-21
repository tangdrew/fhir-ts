/**
 * Basic Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Resource for non-supported content
 */
export interface Basic {
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
  /** Kind of Resource */
  code: CodeableConcept;
  /** Identifies the focus of this resource */
  subject?: Reference;
  /** When created */
  created?: t.TypeOf<primitives.R4.DateType>;
  /** Who created */
  author?: Reference;
}

export interface BasicOutputType {
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
  /** Kind of Resource */
  code: CodeableConceptOutputType;
  /** Identifies the focus of this resource */
  subject?: ReferenceOutputType;
  /** When created */
  created?: t.OutputOf<primitives.R4.DateType>;
  /** Who created */
  author?: ReferenceOutputType;
}

export const Basic: t.RecursiveType<
  t.Type<Basic, BasicOutputType>,
  Basic,
  BasicOutputType
> = t.recursion<Basic, BasicOutputType>("Basic", () =>
  t.intersection(
    [
      t.type({
        /** Kind of Resource */
        code: CodeableConcept
      }),
      t.partial({
        /** Who created */
        author: Reference,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** When created */
        created: primitives.R4.date,
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
        /** Identifies the focus of this resource */
        subject: Reference,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "Basic"
  )
);
