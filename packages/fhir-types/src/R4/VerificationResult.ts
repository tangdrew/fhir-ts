/**
 * VerificationResult Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";
import { Signature } from "./Signature";
import { Timing } from "./Timing";

/**
 * Describes validation requirements, source(s), status and dates for one or more elements
 */
export interface VerificationResult {
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
  /** A resource that was validated */
  target?: Reference[];
  /** The fhirpath location(s) within the resource that was validated */
  targetLocation?: string[];
  /** Extension of targetLocation element */
  _targetLocation?: Element[];
  /** none | initial | periodic */
  need?: CodeableConcept;
  /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
  status: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** When the validation status was updated */
  statusDate?: primitives.R4.dateTime;
  /** Extension of statusDate element */
  _statusDate?: Element;
  /** nothing | primary | multiple */
  validationType?: CodeableConcept;
  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
  validationProcess?: CodeableConcept[];
  /** Frequency of revalidation */
  frequency?: Timing;
  /** The date/time validation was last completed (including failed validations) */
  lastPerformed?: primitives.R4.dateTime;
  /** Extension of lastPerformed element */
  _lastPerformed?: Element;
  /** The date when target is next validated, if appropriate */
  nextScheduled?: primitives.R4.date;
  /** Extension of nextScheduled element */
  _nextScheduled?: Element;
  /** fatal | warn | rec-only | none */
  failureAction?: CodeableConcept;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements
 */
export const VerificationResult: t.Type<VerificationResult> = t.recursion<
  VerificationResult
>("VerificationResult", () =>
  t.intersection([
    t.type({
      /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
      status: primitives.R4.code
    }),
    t.partial({
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
      /** A resource that was validated */
      target: t.array(Reference),
      /** The fhirpath location(s) within the resource that was validated */
      targetLocation: t.array(primitives.R4.string),
      /** Extension of targetLocation element */
      _targetLocation: t.array(Element),
      /** none | initial | periodic */
      need: CodeableConcept,
      /** Extension of status element */
      _status: Element,
      /** When the validation status was updated */
      statusDate: primitives.R4.dateTime,
      /** Extension of statusDate element */
      _statusDate: Element,
      /** nothing | primary | multiple */
      validationType: CodeableConcept,
      /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
      validationProcess: t.array(CodeableConcept),
      /** Frequency of revalidation */
      frequency: Timing,
      /** The date/time validation was last completed (including failed validations) */
      lastPerformed: primitives.R4.dateTime,
      /** Extension of lastPerformed element */
      _lastPerformed: Element,
      /** The date when target is next validated, if appropriate */
      nextScheduled: primitives.R4.date,
      /** Extension of nextScheduled element */
      _nextScheduled: Element,
      /** fatal | warn | rec-only | none */
      failureAction: CodeableConcept
    })
  ])
);

/**
 * Information about the primary source(s) involved in validation
 */
export interface VerificationResultPrimarySource {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the primary source */
  who?: Reference;
  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) */
  type?: CodeableConcept[];
  /** Method for exchanging information with the primary source */
  communicationMethod?: CodeableConcept[];
  /** successful | failed | unknown */
  validationStatus?: CodeableConcept;
  /** When the target was validated against the primary source */
  validationDate?: primitives.R4.dateTime;
  /** Extension of validationDate element */
  _validationDate?: Element;
  /** yes | no | undetermined */
  canPushUpdates?: CodeableConcept;
  /** specific | any | source */
  pushTypeAvailable?: CodeableConcept[];
}
/**
 * Information about the primary source(s) involved in validation
 */
export const VerificationResultPrimarySource: t.Type<
  VerificationResultPrimarySource
> = t.recursion<VerificationResultPrimarySource>(
  "VerificationResultPrimarySource",
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
        /** Reference to the primary source */
        who: Reference,
        /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) */
        type: t.array(CodeableConcept),
        /** Method for exchanging information with the primary source */
        communicationMethod: t.array(CodeableConcept),
        /** successful | failed | unknown */
        validationStatus: CodeableConcept,
        /** When the target was validated against the primary source */
        validationDate: primitives.R4.dateTime,
        /** Extension of validationDate element */
        _validationDate: Element,
        /** yes | no | undetermined */
        canPushUpdates: CodeableConcept,
        /** specific | any | source */
        pushTypeAvailable: t.array(CodeableConcept)
      })
    ])
);

/**
 * Information about the entity attesting to information
 */
export interface VerificationResultAttestation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The individual or organization attesting to information */
  who?: Reference;
  /** When the who is asserting on behalf of another (organization or individual) */
  onBehalfOf?: Reference;
  /** The method by which attested information was submitted/retrieved */
  communicationMethod?: CodeableConcept;
  /** The date the information was attested to */
  date?: primitives.R4.date;
  /** Extension of date element */
  _date?: Element;
  /** A digital identity certificate associated with the attestation source */
  sourceIdentityCertificate?: string;
  /** Extension of sourceIdentityCertificate element */
  _sourceIdentityCertificate?: Element;
  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
  proxyIdentityCertificate?: string;
  /** Extension of proxyIdentityCertificate element */
  _proxyIdentityCertificate?: Element;
  /** Proxy signature */
  proxySignature?: Signature;
  /** Attester signature */
  sourceSignature?: Signature;
}
/**
 * Information about the entity attesting to information
 */
export const VerificationResultAttestation: t.Type<
  VerificationResultAttestation
> = t.recursion<VerificationResultAttestation>(
  "VerificationResultAttestation",
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
        /** The individual or organization attesting to information */
        who: Reference,
        /** When the who is asserting on behalf of another (organization or individual) */
        onBehalfOf: Reference,
        /** The method by which attested information was submitted/retrieved */
        communicationMethod: CodeableConcept,
        /** The date the information was attested to */
        date: primitives.R4.date,
        /** Extension of date element */
        _date: Element,
        /** A digital identity certificate associated with the attestation source */
        sourceIdentityCertificate: primitives.R4.string,
        /** Extension of sourceIdentityCertificate element */
        _sourceIdentityCertificate: Element,
        /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
        proxyIdentityCertificate: primitives.R4.string,
        /** Extension of proxyIdentityCertificate element */
        _proxyIdentityCertificate: Element,
        /** Proxy signature */
        proxySignature: Signature,
        /** Attester signature */
        sourceSignature: Signature
      })
    ])
);

/**
 * Information about the entity validating information
 */
export interface VerificationResultValidator {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the organization validating information */
  organization: Reference;
  /** A digital identity certificate associated with the validator */
  identityCertificate?: string;
  /** Extension of identityCertificate element */
  _identityCertificate?: Element;
  /** Validator signature */
  attestationSignature?: Signature;
}
/**
 * Information about the entity validating information
 */
export const VerificationResultValidator: t.Type<
  VerificationResultValidator
> = t.recursion<VerificationResultValidator>(
  "VerificationResultValidator",
  () =>
    t.intersection([
      t.type({
        /** Reference to the organization validating information */
        organization: Reference
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
        /** A digital identity certificate associated with the validator */
        identityCertificate: primitives.R4.string,
        /** Extension of identityCertificate element */
        _identityCertificate: Element,
        /** Validator signature */
        attestationSignature: Signature
      })
    ])
);
