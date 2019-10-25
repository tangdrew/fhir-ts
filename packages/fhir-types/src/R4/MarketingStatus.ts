/**
 * MarketingStatus Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
 */
export interface MarketingStatus {
  /** The type of resource */
  resourceType?: "MarketingStatus";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements */
  country: CodeableConcept;
  /** Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified */
  jurisdiction?: CodeableConcept;
  /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples */
  status: CodeableConcept;
  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain */
  dateRange: Period;
  /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain */
  restoreDate?: primitives.R4.dateTime;
  /** Extension of restoreDate element */
  _restoreDate?: Element;
}
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available
 */
export const MarketingStatus: t.Type<MarketingStatus> = t.recursion<
  MarketingStatus
>("MarketingStatus", () =>
  t.intersection([
    t.type({
      /** The country in which the marketing authorisation has been granted shall be specified It should be specified using the ISO 3166 ‑ 1 alpha-2 code elements */
      country: CodeableConcept,
      /** This attribute provides information on the status of the marketing of the medicinal product See ISO/TS 20443 for more information and examples */
      status: CodeableConcept,
      /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain */
      dateRange: Period
    }),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("MarketingStatus"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Extensions that cannot be ignored even if unrecognized */
      modifierExtension: t.array(Extension),
      /** Where a Medicines Regulatory Agency has granted a marketing authorisation for which specific provisions within a jurisdiction apply, the jurisdiction can be specified using an appropriate controlled terminology The controlled term and the controlled term identifier shall be specified */
      jurisdiction: CodeableConcept,
      /** The date when the Medicinal Product is placed on the market by the Marketing Authorisation Holder (or where applicable, the manufacturer/distributor) in a country and/or jurisdiction shall be provided A complete date consisting of day, month and year shall be specified using the ISO 8601 date format NOTE “Placed on the market” refers to the release of the Medicinal Product into the distribution chain */
      restoreDate: primitives.R4.dateTime,
      /** Extension of restoreDate element */
      _restoreDate: Element
    })
  ])
);
