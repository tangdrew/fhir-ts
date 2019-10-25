/**
 * Procedure Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Period } from "./Period";
import { Range } from "./Range";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * An action that is being or was performed on a patient
 */
export interface Procedure {
  /** The type of resource */
  resourceType?: "Procedure";
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
  /** External Identifiers for this procedure */
  identifier?: Identifier[];
  /** Instantiates FHIR protocol or definition */
  instantiatesCanonical?: primitives.R4.canonical[];
  /** Extension of instantiatesCanonical element */
  _instantiatesCanonical?: Element[];
  /** Instantiates external protocol or definition */
  instantiatesUri?: primitives.R4.uri[];
  /** Extension of instantiatesUri element */
  _instantiatesUri?: Element[];
  /** A request for this procedure */
  basedOn?: Reference[];
  /** Part of referenced event */
  partOf?: Reference[];
  /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** Reason for current status */
  statusReason?: CodeableConcept;
  /** Classification of the procedure */
  category?: CodeableConcept;
  /** Identification of the procedure */
  code?: CodeableConcept;
  /** Who the procedure was performed on */
  subject: Reference;
  /** Encounter created as part of */
  encounter?: Reference;
  /** When the procedure was performed */
  performedDateTime?: primitives.R4.dateTime;
  /** Extension of performedDateTime element */
  _performedDateTime?: Element;
  /** When the procedure was performed */
  performedPeriod?: Period;
  /** When the procedure was performed */
  performedString?: string;
  /** Extension of performedString element */
  _performedString?: Element;
  /** When the procedure was performed */
  performedAge?: Age;
  /** When the procedure was performed */
  performedRange?: Range;
  /** Who recorded the procedure */
  recorder?: Reference;
  /** Person who asserts this procedure */
  asserter?: Reference;
  /** Where the procedure happened */
  location?: Reference;
  /** Coded reason procedure performed */
  reasonCode?: CodeableConcept[];
  /** The justification that the procedure was performed */
  reasonReference?: Reference[];
  /** Target body sites */
  bodySite?: CodeableConcept[];
  /** The result of procedure */
  outcome?: CodeableConcept;
  /** Any report resulting from the procedure */
  report?: Reference[];
  /** Complication following the procedure */
  complication?: CodeableConcept[];
  /** A condition that is a result of the procedure */
  complicationDetail?: Reference[];
  /** Instructions for follow up */
  followUp?: CodeableConcept[];
  /** Additional information about the procedure */
  note?: Annotation[];
  /** Items used during procedure */
  usedReference?: Reference[];
  /** Coded items used during the procedure */
  usedCode?: CodeableConcept[];
}
/**
 * An action that is being or was performed on a patient
 */
export const Procedure: t.Type<Procedure> = t.recursion<Procedure>(
  "Procedure",
  () =>
    t.intersection([
      t.type({
        /** preparation | in-progress | not-done | suspended | aborted | completed | entered-in-error | unknown */
        status: primitives.R4.code,
        /** Who the procedure was performed on */
        subject: Reference
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Procedure"),
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
        /** External Identifiers for this procedure */
        identifier: t.array(Identifier),
        /** Instantiates FHIR protocol or definition */
        instantiatesCanonical: t.array(primitives.R4.canonical),
        /** Extension of instantiatesCanonical element */
        _instantiatesCanonical: t.array(Element),
        /** Instantiates external protocol or definition */
        instantiatesUri: t.array(primitives.R4.uri),
        /** Extension of instantiatesUri element */
        _instantiatesUri: t.array(Element),
        /** A request for this procedure */
        basedOn: t.array(Reference),
        /** Part of referenced event */
        partOf: t.array(Reference),
        /** Extension of status element */
        _status: Element,
        /** Reason for current status */
        statusReason: CodeableConcept,
        /** Classification of the procedure */
        category: CodeableConcept,
        /** Identification of the procedure */
        code: CodeableConcept,
        /** Encounter created as part of */
        encounter: Reference,
        /** When the procedure was performed */
        performedDateTime: primitives.R4.dateTime,
        /** Extension of performedDateTime element */
        _performedDateTime: Element,
        /** When the procedure was performed */
        performedPeriod: Period,
        /** When the procedure was performed */
        performedString: primitives.R4.string,
        /** Extension of performedString element */
        _performedString: Element,
        /** When the procedure was performed */
        performedAge: Age,
        /** When the procedure was performed */
        performedRange: Range,
        /** Who recorded the procedure */
        recorder: Reference,
        /** Person who asserts this procedure */
        asserter: Reference,
        /** Where the procedure happened */
        location: Reference,
        /** Coded reason procedure performed */
        reasonCode: t.array(CodeableConcept),
        /** The justification that the procedure was performed */
        reasonReference: t.array(Reference),
        /** Target body sites */
        bodySite: t.array(CodeableConcept),
        /** The result of procedure */
        outcome: CodeableConcept,
        /** Any report resulting from the procedure */
        report: t.array(Reference),
        /** Complication following the procedure */
        complication: t.array(CodeableConcept),
        /** A condition that is a result of the procedure */
        complicationDetail: t.array(Reference),
        /** Instructions for follow up */
        followUp: t.array(CodeableConcept),
        /** Additional information about the procedure */
        note: t.array(Annotation),
        /** Items used during procedure */
        usedReference: t.array(Reference),
        /** Coded items used during the procedure */
        usedCode: t.array(CodeableConcept)
      })
    ])
);

/**
 * The people who performed the procedure
 */
export interface ProcedurePerformer {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of performance */
  function?: CodeableConcept;
  /** The reference to the practitioner */
  actor: Reference;
  /** Organization the device or practitioner was acting for */
  onBehalfOf?: Reference;
}
/**
 * The people who performed the procedure
 */
export const ProcedurePerformer: t.Type<ProcedurePerformer> = t.recursion<
  ProcedurePerformer
>("ProcedurePerformer", () =>
  t.intersection([
    t.type({
      /** The reference to the practitioner */
      actor: Reference
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
      /** Type of performance */
      function: CodeableConcept,
      /** Organization the device or practitioner was acting for */
      onBehalfOf: Reference
    })
  ])
);

/**
 * Manipulated, implanted, or removed device
 */
export interface ProcedureFocalDevice {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Kind of change to device */
  action?: CodeableConcept;
  /** Device that was changed */
  manipulated: Reference;
}
/**
 * Manipulated, implanted, or removed device
 */
export const ProcedureFocalDevice: t.Type<ProcedureFocalDevice> = t.recursion<
  ProcedureFocalDevice
>("ProcedureFocalDevice", () =>
  t.intersection([
    t.type({
      /** Device that was changed */
      manipulated: Reference
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
      /** Kind of change to device */
      action: CodeableConcept
    })
  ])
);
