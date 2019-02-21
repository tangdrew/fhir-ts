/**
 * Location Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address, AddressOutputType } from "./Address";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { Coding, CodingOutputType } from "./Coding";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The absolute geographic location
 */
export interface LocationPosition {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Longitude with WGS84 datum */
  longitude: t.TypeOf<primitives.R4.DecimalType>;
  /** Latitude with WGS84 datum */
  latitude: t.TypeOf<primitives.R4.DecimalType>;
  /** Altitude with WGS84 datum */
  altitude?: t.TypeOf<primitives.R4.DecimalType>;
}

export interface LocationPositionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Longitude with WGS84 datum */
  longitude: t.OutputOf<primitives.R4.DecimalType>;
  /** Latitude with WGS84 datum */
  latitude: t.OutputOf<primitives.R4.DecimalType>;
  /** Altitude with WGS84 datum */
  altitude?: t.OutputOf<primitives.R4.DecimalType>;
}

export const LocationPosition: t.RecursiveType<
  t.Type<LocationPosition, LocationPositionOutputType>,
  LocationPosition,
  LocationPositionOutputType
> = t.recursion<LocationPosition, LocationPositionOutputType>(
  "LocationPosition",
  () =>
    t.intersection(
      [
        t.type({
          /** Latitude with WGS84 datum */
          latitude: primitives.R4.decimal,
          /** Longitude with WGS84 datum */
          longitude: primitives.R4.decimal
        }),
        t.partial({
          /** Altitude with WGS84 datum */
          altitude: primitives.R4.decimal,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "LocationPosition"
    )
);

/**
 * What days/times during a week is this location usually open
 */
export interface LocationHoursOfOperation {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: t.TypeOf<primitives.R4.CodeType>[];
  /** The Location is open all day */
  allDay?: t.TypeOf<primitives.R4.BooleanType>;
  /** Time that the Location opens */
  openingTime?: t.TypeOf<primitives.R4.TimeType>;
  /** Time that the Location closes */
  closingTime?: t.TypeOf<primitives.R4.TimeType>;
}

export interface LocationHoursOfOperationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: t.OutputOf<primitives.R4.CodeType>[];
  /** The Location is open all day */
  allDay?: t.OutputOf<primitives.R4.BooleanType>;
  /** Time that the Location opens */
  openingTime?: t.OutputOf<primitives.R4.TimeType>;
  /** Time that the Location closes */
  closingTime?: t.OutputOf<primitives.R4.TimeType>;
}

export const LocationHoursOfOperation: t.RecursiveType<
  t.Type<LocationHoursOfOperation, LocationHoursOfOperationOutputType>,
  LocationHoursOfOperation,
  LocationHoursOfOperationOutputType
> = t.recursion<LocationHoursOfOperation, LocationHoursOfOperationOutputType>(
  "LocationHoursOfOperation",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** The Location is open all day */
          allDay: primitives.R4.boolean,
          /** Time that the Location closes */
          closingTime: primitives.R4.time,
          /** mon | tue | wed | thu | fri | sat | sun */
          daysOfWeek: t.array(primitives.R4.code),
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Time that the Location opens */
          openingTime: primitives.R4.time
        })
      ],
      "LocationHoursOfOperation"
    )
);

/**
 * Details and position information for a physical place
 */
export interface Location {
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
  /** Unique code or number identifying the location to its users */
  identifier?: Identifier[];
  /** active | suspended | inactive */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** The operational status of the location (typically only for a bed/room) */
  operationalStatus?: Coding;
  /** Name of the location as used by humans */
  name?: t.TypeOf<primitives.R4.StringType>;
  /** A list of alternate names that the location is known as, or was known as, in the past */
  alias?: t.TypeOf<primitives.R4.StringType>[];
  /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
  description?: t.TypeOf<primitives.R4.StringType>;
  /** instance | kind */
  mode?: t.TypeOf<primitives.R4.CodeType>;
  /** Type of function performed */
  type?: CodeableConcept[];
  /** Contact details of the location */
  telecom?: ContactPoint[];
  /** Physical location */
  address?: Address;
  /** Physical form of the location */
  physicalType?: CodeableConcept;
  /** The absolute geographic location */
  position?: LocationPosition;
  /** Organization responsible for provisioning and upkeep */
  managingOrganization?: Reference;
  /** Another Location this one is physically a part of */
  partOf?: Reference;
  /** What days/times during a week is this location usually open */
  hoursOfOperation?: LocationHoursOfOperation[];
  /** Description of availability exceptions */
  availabilityExceptions?: t.TypeOf<primitives.R4.StringType>;
  /** Technical endpoints providing access to services operated for the location */
  endpoint?: Reference[];
}

export interface LocationOutputType {
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
  /** Unique code or number identifying the location to its users */
  identifier?: IdentifierOutputType[];
  /** active | suspended | inactive */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** The operational status of the location (typically only for a bed/room) */
  operationalStatus?: CodingOutputType;
  /** Name of the location as used by humans */
  name?: t.OutputOf<primitives.R4.StringType>;
  /** A list of alternate names that the location is known as, or was known as, in the past */
  alias?: t.OutputOf<primitives.R4.StringType>[];
  /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
  description?: t.OutputOf<primitives.R4.StringType>;
  /** instance | kind */
  mode?: t.OutputOf<primitives.R4.CodeType>;
  /** Type of function performed */
  type?: CodeableConceptOutputType[];
  /** Contact details of the location */
  telecom?: ContactPointOutputType[];
  /** Physical location */
  address?: AddressOutputType;
  /** Physical form of the location */
  physicalType?: CodeableConceptOutputType;
  /** The absolute geographic location */
  position?: LocationPositionOutputType;
  /** Organization responsible for provisioning and upkeep */
  managingOrganization?: ReferenceOutputType;
  /** Another Location this one is physically a part of */
  partOf?: ReferenceOutputType;
  /** What days/times during a week is this location usually open */
  hoursOfOperation?: LocationHoursOfOperationOutputType[];
  /** Description of availability exceptions */
  availabilityExceptions?: t.OutputOf<primitives.R4.StringType>;
  /** Technical endpoints providing access to services operated for the location */
  endpoint?: ReferenceOutputType[];
}

export const Location: t.RecursiveType<
  t.Type<Location, LocationOutputType>,
  Location,
  LocationOutputType
> = t.recursion<Location, LocationOutputType>("Location", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Physical location */
        address: Address,
        /** A list of alternate names that the location is known as, or was known as, in the past */
        alias: t.array(primitives.R4.string),
        /** Description of availability exceptions */
        availabilityExceptions: primitives.R4.string,
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
        description: primitives.R4.string,
        /** Technical endpoints providing access to services operated for the location */
        endpoint: t.array(Reference),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** What days/times during a week is this location usually open */
        hoursOfOperation: t.array(LocationHoursOfOperation),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Unique code or number identifying the location to its users */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Organization responsible for provisioning and upkeep */
        managingOrganization: Reference,
        /** Metadata about the resource */
        meta: Meta,
        /** instance | kind */
        mode: primitives.R4.code,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Name of the location as used by humans */
        name: primitives.R4.string,
        /** The operational status of the location (typically only for a bed/room) */
        operationalStatus: Coding,
        /** Another Location this one is physically a part of */
        partOf: Reference,
        /** Physical form of the location */
        physicalType: CodeableConcept,
        /** The absolute geographic location */
        position: LocationPosition,
        /** active | suspended | inactive */
        status: primitives.R4.code,
        /** Contact details of the location */
        telecom: t.array(ContactPoint),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** Type of function performed */
        type: t.array(CodeableConcept)
      })
    ],
    "Location"
  )
);
