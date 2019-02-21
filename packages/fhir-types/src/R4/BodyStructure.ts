/**
 * BodyStructure Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Specific and identified anatomical structure
 */
export interface BodyStructure {
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
  /** Bodystructure identifier */
  identifier?: Identifier[];
  /** Whether this record is in active use */
  active?: t.TypeOf<primitives.R4.BooleanType>;
  /** Kind of Structure */
  morphology?: CodeableConcept;
  /** Body site */
  location?: CodeableConcept;
  /** Body site modifier */
  locationQualifier?: CodeableConcept[];
  /** Text description */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** Attached images */
  image?: Attachment[];
  /** Who this is about */
  patient: Reference;
}

export interface BodyStructureOutputType {
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
  /** Bodystructure identifier */
  identifier?: IdentifierOutputType[];
  /** Whether this record is in active use */
  active?: t.OutputOf<primitives.R4.BooleanType>;
  /** Kind of Structure */
  morphology?: CodeableConceptOutputType;
  /** Body site */
  location?: CodeableConceptOutputType;
  /** Body site modifier */
  locationQualifier?: CodeableConceptOutputType[];
  /** Text description */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** Attached images */
  image?: AttachmentOutputType[];
  /** Who this is about */
  patient: ReferenceOutputType;
}

export const BodyStructure: t.RecursiveType<
  t.Type<BodyStructure, BodyStructureOutputType>,
  BodyStructure,
  BodyStructureOutputType
> = t.recursion<BodyStructure, BodyStructureOutputType>("BodyStructure", () =>
  t.intersection(
    [
      t.type({
        /** Who this is about */
        patient: Reference
      }),
      t.partial({
        /** Whether this record is in active use */
        active: primitives.R4.boolean,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Text description */
        description: primitives.R4.string,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Bodystructure identifier */
        identifier: t.array(Identifier),
        /** Attached images */
        image: t.array(Attachment),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Body site */
        location: CodeableConcept,
        /** Body site modifier */
        locationQualifier: t.array(CodeableConcept),
        /** Metadata about the resource */
        meta: Meta,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Kind of Structure */
        morphology: CodeableConcept,
        /** Text summary of the resource, for human interpretation */
        text: Narrative
      })
    ],
    "BodyStructure"
  )
);
