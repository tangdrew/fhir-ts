/**
 * BodyStructure Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Specific and identified anatomical structure
 */
export interface BodyStructure {
  /** The type of resource */
  resourceType?: "BodyStructure";
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
  /** Bodystructure identifier */
  identifier?: Identifier[];
  /** Whether this record is in active use */
  active?: boolean;
  /** Extension of active element */
  _active?: Element;
  /** Kind of Structure */
  morphology?: CodeableConcept;
  /** Body site */
  location?: CodeableConcept;
  /** Body site modifier */
  locationQualifier?: CodeableConcept[];
  /** Text description */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** Attached images */
  image?: Attachment[];
  /** Who this is about */
  patient: Reference;
}
/**
 * Specific and identified anatomical structure
 */
export const BodyStructure: t.Type<BodyStructure> = t.recursion<BodyStructure>(
  "BodyStructure",
  () =>
    t.intersection([
      t.type({
        /** Who this is about */
        patient: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("BodyStructure"),
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
        /** Bodystructure identifier */
        identifier: t.array(Identifier),
        /** Whether this record is in active use */
        active: primitives.R4.boolean,
        /** Extension of active element */
        _active: Element,
        /** Kind of Structure */
        morphology: CodeableConcept,
        /** Body site */
        location: CodeableConcept,
        /** Body site modifier */
        locationQualifier: t.array(CodeableConcept),
        /** Text description */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** Attached images */
        image: t.array(Attachment)
      })
    ])
);
