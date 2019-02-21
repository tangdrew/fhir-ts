/**
 * VerificationResult Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Extension, ExtensionOutputType } from "./Extension";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";
import { Signature, SignatureOutputType } from "./Signature";
import { Timing, TimingOutputType } from "./Timing";

/**
 * Information about the entity validating information
 */
export interface VerificationResultValidator {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Reference to the organization validating information */
  organization: Reference;
  /** A digital identity certificate associated with the validator */
  identityCertificate?: t.TypeOf<primitives.R4.StringType>;
  /** Validator signature */
  attestationSignature?: Signature;
}

export interface VerificationResultValidatorOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to the organization validating information */
  organization: ReferenceOutputType;
  /** A digital identity certificate associated with the validator */
  identityCertificate?: t.OutputOf<primitives.R4.StringType>;
  /** Validator signature */
  attestationSignature?: SignatureOutputType;
}

export const VerificationResultValidator: t.RecursiveType<
  t.Type<VerificationResultValidator, VerificationResultValidatorOutputType>,
  VerificationResultValidator,
  VerificationResultValidatorOutputType
> = t.recursion<
  VerificationResultValidator,
  VerificationResultValidatorOutputType
>("VerificationResultValidator", () =>
  t.intersection(
    [
      t.type({
        /** Reference to the organization validating information */
        organization: Reference
      }),
      t.partial({
        /** Validator signature */
        attestationSignature: Signature,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** A digital identity certificate associated with the validator */
        identityCertificate: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "VerificationResultValidator"
  )
);

/**
 * Information about the primary source(s) involved in validation
 */
export interface VerificationResultPrimarySource {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  validationDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** yes | no | undetermined */
  canPushUpdates?: CodeableConcept;
  /** specific | any | source */
  pushTypeAvailable?: CodeableConcept[];
}

export interface VerificationResultPrimarySourceOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Reference to the primary source */
  who?: ReferenceOutputType;
  /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) */
  type?: CodeableConceptOutputType[];
  /** Method for exchanging information with the primary source */
  communicationMethod?: CodeableConceptOutputType[];
  /** successful | failed | unknown */
  validationStatus?: CodeableConceptOutputType;
  /** When the target was validated against the primary source */
  validationDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** yes | no | undetermined */
  canPushUpdates?: CodeableConceptOutputType;
  /** specific | any | source */
  pushTypeAvailable?: CodeableConceptOutputType[];
}

export const VerificationResultPrimarySource: t.RecursiveType<
  t.Type<
    VerificationResultPrimarySource,
    VerificationResultPrimarySourceOutputType
  >,
  VerificationResultPrimarySource,
  VerificationResultPrimarySourceOutputType
> = t.recursion<
  VerificationResultPrimarySource,
  VerificationResultPrimarySourceOutputType
>("VerificationResultPrimarySource", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** yes | no | undetermined */
        canPushUpdates: CodeableConcept,
        /** Method for exchanging information with the primary source */
        communicationMethod: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** specific | any | source */
        pushTypeAvailable: t.array(CodeableConcept),
        /** Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source) */
        type: t.array(CodeableConcept),
        /** When the target was validated against the primary source */
        validationDate: primitives.R4.dateTime,
        /** successful | failed | unknown */
        validationStatus: CodeableConcept,
        /** Reference to the primary source */
        who: Reference
      })
    ],
    "VerificationResultPrimarySource"
  )
);

/**
 * Information about the entity attesting to information
 */
export interface VerificationResultAttestation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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
  date?: t.TypeOf<primitives.R4.DateType>;
  /** A digital identity certificate associated with the attestation source */
  sourceIdentityCertificate?: t.TypeOf<primitives.R4.StringType>;
  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
  proxyIdentityCertificate?: t.TypeOf<primitives.R4.StringType>;
  /** Proxy signature */
  proxySignature?: Signature;
  /** Attester signature */
  sourceSignature?: Signature;
}

export interface VerificationResultAttestationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The individual or organization attesting to information */
  who?: ReferenceOutputType;
  /** When the who is asserting on behalf of another (organization or individual) */
  onBehalfOf?: ReferenceOutputType;
  /** The method by which attested information was submitted/retrieved */
  communicationMethod?: CodeableConceptOutputType;
  /** The date the information was attested to */
  date?: t.OutputOf<primitives.R4.DateType>;
  /** A digital identity certificate associated with the attestation source */
  sourceIdentityCertificate?: t.OutputOf<primitives.R4.StringType>;
  /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
  proxyIdentityCertificate?: t.OutputOf<primitives.R4.StringType>;
  /** Proxy signature */
  proxySignature?: SignatureOutputType;
  /** Attester signature */
  sourceSignature?: SignatureOutputType;
}

export const VerificationResultAttestation: t.RecursiveType<
  t.Type<
    VerificationResultAttestation,
    VerificationResultAttestationOutputType
  >,
  VerificationResultAttestation,
  VerificationResultAttestationOutputType
> = t.recursion<
  VerificationResultAttestation,
  VerificationResultAttestationOutputType
>("VerificationResultAttestation", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** The method by which attested information was submitted/retrieved */
        communicationMethod: CodeableConcept,
        /** The date the information was attested to */
        date: primitives.R4.date,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** When the who is asserting on behalf of another (organization or individual) */
        onBehalfOf: Reference,
        /** A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source */
        proxyIdentityCertificate: primitives.R4.string,
        /** Proxy signature */
        proxySignature: Signature,
        /** A digital identity certificate associated with the attestation source */
        sourceIdentityCertificate: primitives.R4.string,
        /** Attester signature */
        sourceSignature: Signature,
        /** The individual or organization attesting to information */
        who: Reference
      })
    ],
    "VerificationResultAttestation"
  )
);

/**
 * Describes validation requirements, source(s), status and dates for one or more elements
 */
export interface VerificationResult {
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
  /** A resource that was validated */
  target?: Reference[];
  /** The fhirpath location(s) within the resource that was validated */
  targetLocation?: t.TypeOf<primitives.R4.StringType>[];
  /** none | initial | periodic */
  need?: CodeableConcept;
  /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
  status: t.TypeOf<primitives.R4.CodeType>;
  /** When the validation status was updated */
  statusDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** nothing | primary | multiple */
  validationType?: CodeableConcept;
  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
  validationProcess?: CodeableConcept[];
  /** Frequency of revalidation */
  frequency?: Timing;
  /** The date/time validation was last completed (including failed validations) */
  lastPerformed?: t.TypeOf<primitives.R4.DateTimeType>;
  /** The date when target is next validated, if appropriate */
  nextScheduled?: t.TypeOf<primitives.R4.DateType>;
  /** fatal | warn | rec-only | none */
  failureAction?: CodeableConcept;
  /** Information about the primary source(s) involved in validation */
  primarySource?: VerificationResultPrimarySource[];
  /** Information about the entity attesting to information */
  attestation?: VerificationResultAttestation;
  /** Information about the entity validating information */
  validator?: VerificationResultValidator[];
}

export interface VerificationResultOutputType {
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
  /** A resource that was validated */
  target?: ReferenceOutputType[];
  /** The fhirpath location(s) within the resource that was validated */
  targetLocation?: t.OutputOf<primitives.R4.StringType>[];
  /** none | initial | periodic */
  need?: CodeableConceptOutputType;
  /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
  status: t.OutputOf<primitives.R4.CodeType>;
  /** When the validation status was updated */
  statusDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** nothing | primary | multiple */
  validationType?: CodeableConceptOutputType;
  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
  validationProcess?: CodeableConceptOutputType[];
  /** Frequency of revalidation */
  frequency?: TimingOutputType;
  /** The date/time validation was last completed (including failed validations) */
  lastPerformed?: t.OutputOf<primitives.R4.DateTimeType>;
  /** The date when target is next validated, if appropriate */
  nextScheduled?: t.OutputOf<primitives.R4.DateType>;
  /** fatal | warn | rec-only | none */
  failureAction?: CodeableConceptOutputType;
  /** Information about the primary source(s) involved in validation */
  primarySource?: VerificationResultPrimarySourceOutputType[];
  /** Information about the entity attesting to information */
  attestation?: VerificationResultAttestationOutputType;
  /** Information about the entity validating information */
  validator?: VerificationResultValidatorOutputType[];
}

export const VerificationResult: t.RecursiveType<
  t.Type<VerificationResult, VerificationResultOutputType>,
  VerificationResult,
  VerificationResultOutputType
> = t.recursion<VerificationResult, VerificationResultOutputType>(
  "VerificationResult",
  () =>
    t.intersection(
      [
        t.type({
          /** attested | validated | in-process | req-revalid | val-fail | reval-fail */
          status: primitives.R4.code
        }),
        t.partial({
          /** Information about the entity attesting to information */
          attestation: VerificationResultAttestation,
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** fatal | warn | rec-only | none */
          failureAction: CodeableConcept,
          /** Frequency of revalidation */
          frequency: Timing,
          /** Logical id of this artifact */
          id: primitives.R4.id,
          /** A set of rules under which this content was created */
          implicitRules: primitives.R4.uri,
          /** Language of the resource content */
          language: primitives.R4.code,
          /** The date/time validation was last completed (including failed validations) */
          lastPerformed: primitives.R4.dateTime,
          /** Metadata about the resource */
          meta: Meta,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** none | initial | periodic */
          need: CodeableConcept,
          /** The date when target is next validated, if appropriate */
          nextScheduled: primitives.R4.date,
          /** Information about the primary source(s) involved in validation */
          primarySource: t.array(VerificationResultPrimarySource),
          /** When the validation status was updated */
          statusDate: primitives.R4.dateTime,
          /** A resource that was validated */
          target: t.array(Reference),
          /** The fhirpath location(s) within the resource that was validated */
          targetLocation: t.array(primitives.R4.string),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context) */
          validationProcess: t.array(CodeableConcept),
          /** nothing | primary | multiple */
          validationType: CodeableConcept,
          /** Information about the entity validating information */
          validator: t.array(VerificationResultValidator)
        })
      ],
      "VerificationResult"
    )
);
