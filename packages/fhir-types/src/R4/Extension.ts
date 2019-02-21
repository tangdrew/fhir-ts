/**
 * Extension Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { Age, AgeOutputType } from "./Age";
import { Annotation, AnnotationOutputType } from "./Annotation";
import { Attachment, AttachmentOutputType } from "./Attachment";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactDetail, ContactDetailOutputType } from "./ContactDetail";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Contributor, ContributorOutputType } from "./Contributor";
import { Count, CountOutputType } from "./Count";
import { DataRequirement, DataRequirementOutputType } from "./DataRequirement";
import { Distance, DistanceOutputType } from "./Distance";
import { Dosage, DosageOutputType } from "./Dosage";
import { Duration, DurationOutputType } from "./Duration";
import { Expression, ExpressionOutputType } from "./Expression";
import { HumanName, HumanNameOutputType } from "./HumanName";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Money, MoneyOutputType } from "./Money";
import {
  ParameterDefinition,
  ParameterDefinitionOutputType
} from "./ParameterDefinition";
import { Period, PeriodOutputType } from "./Period";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Range, RangeOutputType } from "./Range";
import { Ratio, RatioOutputType } from "./Ratio";
import { Reference, ReferenceOutputType } from "./Reference";
import { RelatedArtifact, RelatedArtifactOutputType } from "./RelatedArtifact";
import { SampledData, SampledDataOutputType } from "./SampledData";
import { Signature, SignatureOutputType } from "./Signature";
import { Timing, TimingOutputType } from "./Timing";
import {
  TriggerDefinition,
  TriggerDefinitionOutputType
} from "./TriggerDefinition";
import { UsageContext, UsageContextOutputType } from "./UsageContext";

/**
 * Optional Extensions Element
 */
export interface Extension {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** identifies the meaning of the extension */
  url: t.TypeOf<primitives.R4.StringType>;
  /** Value of extension */
  value?:
    | t.TypeOf<primitives.R4.Base64BinaryType>
    | t.TypeOf<primitives.R4.BooleanType>
    | t.TypeOf<primitives.R4.CanonicalType>
    | t.TypeOf<primitives.R4.CodeType>
    | t.TypeOf<primitives.R4.DateType>
    | t.TypeOf<primitives.R4.DateTimeType>
    | t.TypeOf<primitives.R4.DecimalType>
    | t.TypeOf<primitives.R4.IDType>
    | t.TypeOf<primitives.R4.InstantType>
    | t.TypeOf<primitives.R4.IntegerType>
    | t.TypeOf<primitives.R4.MarkdownType>
    | t.TypeOf<primitives.R4.OIDType>
    | t.TypeOf<primitives.R4.PositiveIntegerType>
    | t.TypeOf<primitives.R4.StringType>
    | t.TypeOf<primitives.R4.TimeType>
    | t.TypeOf<primitives.R4.UnsignedIntegerType>
    | t.TypeOf<primitives.R4.URIType>
    | t.TypeOf<primitives.R4.URLType>
    | t.TypeOf<primitives.R4.UUIDType>
    | Address
    | Age
    | Annotation
    | Attachment
    | CodeableConcept
    | Coding
    | ContactPoint
    | Count
    | Distance
    | Duration
    | HumanName
    | Identifier
    | Money
    | Period
    | Quantity
    | Range
    | Ratio
    | Reference
    | SampledData
    | Signature
    | Timing
    | ContactDetail
    | Contributor
    | DataRequirement
    | Expression
    | ParameterDefinition
    | RelatedArtifact
    | TriggerDefinition
    | UsageContext
    | Dosage;
}

export interface ExtensionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** identifies the meaning of the extension */
  url: t.OutputOf<primitives.R4.StringType>;
  /** Value of extension */
  value?:
    | t.OutputOf<primitives.R4.Base64BinaryType>
    | t.OutputOf<primitives.R4.BooleanType>
    | t.OutputOf<primitives.R4.CanonicalType>
    | t.OutputOf<primitives.R4.CodeType>
    | t.OutputOf<primitives.R4.DateType>
    | t.OutputOf<primitives.R4.DateTimeType>
    | t.OutputOf<primitives.R4.DecimalType>
    | t.OutputOf<primitives.R4.IDType>
    | t.OutputOf<primitives.R4.InstantType>
    | t.OutputOf<primitives.R4.IntegerType>
    | t.OutputOf<primitives.R4.MarkdownType>
    | t.OutputOf<primitives.R4.OIDType>
    | t.OutputOf<primitives.R4.PositiveIntegerType>
    | t.OutputOf<primitives.R4.StringType>
    | t.OutputOf<primitives.R4.TimeType>
    | t.OutputOf<primitives.R4.UnsignedIntegerType>
    | t.OutputOf<primitives.R4.URIType>
    | t.OutputOf<primitives.R4.URLType>
    | t.OutputOf<primitives.R4.UUIDType>
    | AddressOutputType
    | AgeOutputType
    | AnnotationOutputType
    | AttachmentOutputType
    | CodeableConceptOutputType
    | CodingOutputType
    | ContactPointOutputType
    | CountOutputType
    | DistanceOutputType
    | DurationOutputType
    | HumanNameOutputType
    | IdentifierOutputType
    | MoneyOutputType
    | PeriodOutputType
    | QuantityOutputType
    | RangeOutputType
    | RatioOutputType
    | ReferenceOutputType
    | SampledDataOutputType
    | SignatureOutputType
    | TimingOutputType
    | ContactDetailOutputType
    | ContributorOutputType
    | DataRequirementOutputType
    | ExpressionOutputType
    | ParameterDefinitionOutputType
    | RelatedArtifactOutputType
    | TriggerDefinitionOutputType
    | UsageContextOutputType
    | DosageOutputType;
}

export const Extension: t.RecursiveType<
  t.Type<Extension, ExtensionOutputType>,
  Extension,
  ExtensionOutputType
> = t.recursion<Extension, ExtensionOutputType>("Extension", () =>
  t.intersection(
    [
      t.type({
        /** identifies the meaning of the extension */
        url: primitives.R4.string
      }),
      t.partial({
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Value of extension */
        value: t.union([
          primitives.R4.base64Binary,
          primitives.R4.boolean,
          primitives.R4.canonical,
          primitives.R4.code,
          primitives.R4.date,
          primitives.R4.dateTime,
          primitives.R4.decimal,
          primitives.R4.id,
          primitives.R4.instant,
          primitives.R4.integer,
          primitives.R4.markdown,
          primitives.R4.oid,
          primitives.R4.positiveInt,
          primitives.R4.string,
          primitives.R4.time,
          primitives.R4.unsignedInt,
          primitives.R4.uri,
          primitives.R4.url,
          primitives.R4.uuid,
          Address,
          Age,
          Annotation,
          Attachment,
          CodeableConcept,
          Coding,
          ContactPoint,
          Count,
          Distance,
          Duration,
          HumanName,
          Identifier,
          Money,
          Period,
          Quantity,
          Range,
          Ratio,
          Reference,
          SampledData,
          Signature,
          Timing,
          ContactDetail,
          Contributor,
          DataRequirement,
          Expression,
          ParameterDefinition,
          RelatedArtifact,
          TriggerDefinition,
          UsageContext,
          Dosage
        ])
      })
    ],
    "Extension"
  )
);
