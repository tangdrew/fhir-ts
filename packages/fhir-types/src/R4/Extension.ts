/**
 * Extension Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { Age } from "./Age";
import { Annotation } from "./Annotation";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactDetail } from "./ContactDetail";
import { ContactPoint } from "./ContactPoint";
import { Contributor } from "./Contributor";
import { Count } from "./Count";
import { DataRequirement } from "./DataRequirement";
import { Distance } from "./Distance";
import { Dosage } from "./Dosage";
import { Duration } from "./Duration";
import { Element } from "./Element";
import { Expression } from "./Expression";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Money } from "./Money";
import { ParameterDefinition } from "./ParameterDefinition";
import { Period } from "./Period";
import { Quantity } from "./Quantity";
import { Range } from "./Range";
import { Ratio } from "./Ratio";
import { Reference } from "./Reference";
import { RelatedArtifact } from "./RelatedArtifact";
import { SampledData } from "./SampledData";
import { Signature } from "./Signature";
import { Timing } from "./Timing";
import { TriggerDefinition } from "./TriggerDefinition";
import { UsageContext } from "./UsageContext";

/**
 * Optional Extensions Element
 */
export interface Extension {
  /** The type of resource */
  resourceType?: "Extension";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** identifies the meaning of the extension */
  url: string;
  /** Extension of url element */
  _url?: Element;
  /** Value of extension */
  valueBase64Binary?: primitives.R4.base64Binary;
  /** Extension of valueBase64Binary element */
  _valueBase64Binary?: Element;
  /** Value of extension */
  valueBoolean?: boolean;
  /** Extension of valueBoolean element */
  _valueBoolean?: Element;
  /** Value of extension */
  valueCanonical?: primitives.R4.canonical;
  /** Extension of valueCanonical element */
  _valueCanonical?: Element;
  /** Value of extension */
  valueCode?: primitives.R4.code;
  /** Extension of valueCode element */
  _valueCode?: Element;
  /** Value of extension */
  valueDate?: primitives.R4.date;
  /** Extension of valueDate element */
  _valueDate?: Element;
  /** Value of extension */
  valueDateTime?: primitives.R4.dateTime;
  /** Extension of valueDateTime element */
  _valueDateTime?: Element;
  /** Value of extension */
  valueDecimal?: primitives.R4.decimal;
  /** Extension of valueDecimal element */
  _valueDecimal?: Element;
  /** Value of extension */
  valueId?: primitives.R4.id;
  /** Extension of valueId element */
  _valueId?: Element;
  /** Value of extension */
  valueInstant?: primitives.R4.instant;
  /** Extension of valueInstant element */
  _valueInstant?: Element;
  /** Value of extension */
  valueInteger?: primitives.R4.integer;
  /** Extension of valueInteger element */
  _valueInteger?: Element;
  /** Value of extension */
  valueMarkdown?: primitives.R4.markdown;
  /** Extension of valueMarkdown element */
  _valueMarkdown?: Element;
  /** Value of extension */
  valueOid?: primitives.R4.oid;
  /** Extension of valueOid element */
  _valueOid?: Element;
  /** Value of extension */
  valuePositiveInt?: primitives.R4.positiveInt;
  /** Extension of valuePositiveInt element */
  _valuePositiveInt?: Element;
  /** Value of extension */
  valueString?: string;
  /** Extension of valueString element */
  _valueString?: Element;
  /** Value of extension */
  valueTime?: primitives.R4.time;
  /** Extension of valueTime element */
  _valueTime?: Element;
  /** Value of extension */
  valueUnsignedInt?: primitives.R4.unsignedInt;
  /** Extension of valueUnsignedInt element */
  _valueUnsignedInt?: Element;
  /** Value of extension */
  valueUri?: primitives.R4.uri;
  /** Extension of valueUri element */
  _valueUri?: Element;
  /** Value of extension */
  valueUrl?: primitives.R4.url;
  /** Extension of valueUrl element */
  _valueUrl?: Element;
  /** Value of extension */
  valueUuid?: primitives.R4.uuid;
  /** Extension of valueUuid element */
  _valueUuid?: Element;
  /** Value of extension */
  valueAddress?: Address;
  /** Value of extension */
  valueAge?: Age;
  /** Value of extension */
  valueAnnotation?: Annotation;
  /** Value of extension */
  valueAttachment?: Attachment;
  /** Value of extension */
  valueCodeableConcept?: CodeableConcept;
  /** Value of extension */
  valueCoding?: Coding;
  /** Value of extension */
  valueContactPoint?: ContactPoint;
  /** Value of extension */
  valueCount?: Count;
  /** Value of extension */
  valueDistance?: Distance;
  /** Value of extension */
  valueDuration?: Duration;
  /** Value of extension */
  valueHumanName?: HumanName;
  /** Value of extension */
  valueIdentifier?: Identifier;
  /** Value of extension */
  valueMoney?: Money;
  /** Value of extension */
  valuePeriod?: Period;
  /** Value of extension */
  valueQuantity?: Quantity;
  /** Value of extension */
  valueRange?: Range;
  /** Value of extension */
  valueRatio?: Ratio;
  /** Value of extension */
  valueReference?: Reference;
  /** Value of extension */
  valueSampledData?: SampledData;
  /** Value of extension */
  valueSignature?: Signature;
  /** Value of extension */
  valueTiming?: Timing;
  /** Value of extension */
  valueContactDetail?: ContactDetail;
  /** Value of extension */
  valueContributor?: Contributor;
  /** Value of extension */
  valueDataRequirement?: DataRequirement;
  /** Value of extension */
  valueExpression?: Expression;
  /** Value of extension */
  valueParameterDefinition?: ParameterDefinition;
  /** Value of extension */
  valueRelatedArtifact?: RelatedArtifact;
  /** Value of extension */
  valueTriggerDefinition?: TriggerDefinition;
  /** Value of extension */
  valueUsageContext?: UsageContext;
  /** Value of extension */
  valueDosage?: Dosage;
}
/**
 * Optional Extensions Element
 */
export const Extension: t.Type<Extension> = t.recursion<Extension>(
  "Extension",
  () =>
    t.intersection([
      t.type({
        /** identifies the meaning of the extension */
        url: primitives.R4.string
      }),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Extension"),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extension of id element */
        _id: Element,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Extension of url element */
        _url: Element,
        /** Value of extension */
        valueBase64Binary: primitives.R4.base64Binary,
        /** Extension of valueBase64Binary element */
        _valueBase64Binary: Element,
        /** Value of extension */
        valueBoolean: primitives.R4.boolean,
        /** Extension of valueBoolean element */
        _valueBoolean: Element,
        /** Value of extension */
        valueCanonical: primitives.R4.canonical,
        /** Extension of valueCanonical element */
        _valueCanonical: Element,
        /** Value of extension */
        valueCode: primitives.R4.code,
        /** Extension of valueCode element */
        _valueCode: Element,
        /** Value of extension */
        valueDate: primitives.R4.date,
        /** Extension of valueDate element */
        _valueDate: Element,
        /** Value of extension */
        valueDateTime: primitives.R4.dateTime,
        /** Extension of valueDateTime element */
        _valueDateTime: Element,
        /** Value of extension */
        valueDecimal: primitives.R4.decimal,
        /** Extension of valueDecimal element */
        _valueDecimal: Element,
        /** Value of extension */
        valueId: primitives.R4.id,
        /** Extension of valueId element */
        _valueId: Element,
        /** Value of extension */
        valueInstant: primitives.R4.instant,
        /** Extension of valueInstant element */
        _valueInstant: Element,
        /** Value of extension */
        valueInteger: primitives.R4.integer,
        /** Extension of valueInteger element */
        _valueInteger: Element,
        /** Value of extension */
        valueMarkdown: primitives.R4.markdown,
        /** Extension of valueMarkdown element */
        _valueMarkdown: Element,
        /** Value of extension */
        valueOid: primitives.R4.oid,
        /** Extension of valueOid element */
        _valueOid: Element,
        /** Value of extension */
        valuePositiveInt: primitives.R4.positiveInt,
        /** Extension of valuePositiveInt element */
        _valuePositiveInt: Element,
        /** Value of extension */
        valueString: primitives.R4.string,
        /** Extension of valueString element */
        _valueString: Element,
        /** Value of extension */
        valueTime: primitives.R4.time,
        /** Extension of valueTime element */
        _valueTime: Element,
        /** Value of extension */
        valueUnsignedInt: primitives.R4.unsignedInt,
        /** Extension of valueUnsignedInt element */
        _valueUnsignedInt: Element,
        /** Value of extension */
        valueUri: primitives.R4.uri,
        /** Extension of valueUri element */
        _valueUri: Element,
        /** Value of extension */
        valueUrl: primitives.R4.url,
        /** Extension of valueUrl element */
        _valueUrl: Element,
        /** Value of extension */
        valueUuid: primitives.R4.uuid,
        /** Extension of valueUuid element */
        _valueUuid: Element,
        /** Value of extension */
        valueAddress: Address,
        /** Value of extension */
        valueAge: Age,
        /** Value of extension */
        valueAnnotation: Annotation,
        /** Value of extension */
        valueAttachment: Attachment,
        /** Value of extension */
        valueCodeableConcept: CodeableConcept,
        /** Value of extension */
        valueCoding: Coding,
        /** Value of extension */
        valueContactPoint: ContactPoint,
        /** Value of extension */
        valueCount: Count,
        /** Value of extension */
        valueDistance: Distance,
        /** Value of extension */
        valueDuration: Duration,
        /** Value of extension */
        valueHumanName: HumanName,
        /** Value of extension */
        valueIdentifier: Identifier,
        /** Value of extension */
        valueMoney: Money,
        /** Value of extension */
        valuePeriod: Period,
        /** Value of extension */
        valueQuantity: Quantity,
        /** Value of extension */
        valueRange: Range,
        /** Value of extension */
        valueRatio: Ratio,
        /** Value of extension */
        valueReference: Reference,
        /** Value of extension */
        valueSampledData: SampledData,
        /** Value of extension */
        valueSignature: Signature,
        /** Value of extension */
        valueTiming: Timing,
        /** Value of extension */
        valueContactDetail: ContactDetail,
        /** Value of extension */
        valueContributor: Contributor,
        /** Value of extension */
        valueDataRequirement: DataRequirement,
        /** Value of extension */
        valueExpression: Expression,
        /** Value of extension */
        valueParameterDefinition: ParameterDefinition,
        /** Value of extension */
        valueRelatedArtifact: RelatedArtifact,
        /** Value of extension */
        valueTriggerDefinition: TriggerDefinition,
        /** Value of extension */
        valueUsageContext: UsageContext,
        /** Value of extension */
        valueDosage: Dosage
      })
    ])
);
