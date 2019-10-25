/**
 * Location Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Address } from "./Address";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Details and position information for a physical place
 */
export interface Location {
  /** The type of resource */
  resourceType?: "Location";
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
  /** Unique code or number identifying the location to its users */
  identifier?: Identifier[];
  /** active | suspended | inactive */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** The operational status of the location (typically only for a bed/room) */
  operationalStatus?: Coding;
  /** Name of the location as used by humans */
  name?: string;
  /** Extension of name element */
  _name?: Element;
  /** A list of alternate names that the location is known as, or was known as, in the past */
  alias?: string[];
  /** Extension of alias element */
  _alias?: Element[];
  /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
  description?: string;
  /** Extension of description element */
  _description?: Element;
  /** instance | kind */
  mode?: primitives.R4.code;
  /** Extension of mode element */
  _mode?: Element;
  /** Type of function performed */
  type?: CodeableConcept[];
  /** Contact details of the location */
  telecom?: ContactPoint[];
  /** Physical location */
  address?: Address;
  /** Physical form of the location */
  physicalType?: CodeableConcept;
  /** Organization responsible for provisioning and upkeep */
  managingOrganization?: Reference;
  /** Another Location this one is physically a part of */
  partOf?: Reference;
  /** Description of availability exceptions */
  availabilityExceptions?: string;
  /** Extension of availabilityExceptions element */
  _availabilityExceptions?: Element;
  /** Technical endpoints providing access to services operated for the location */
  endpoint?: Reference[];
}
/**
 * Details and position information for a physical place
 */
export const Location: t.Type<Location> = t.recursion<Location>(
  "Location",
  () =>
    t.intersection([
      t.type({}),
      t.partial({
        /** The type of resource */
        resourceType: t.literal("Location"),
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
        /** Unique code or number identifying the location to its users */
        identifier: t.array(Identifier),
        /** active | suspended | inactive */
        status: primitives.R4.code,
        /** Extension of status element */
        _status: Element,
        /** The operational status of the location (typically only for a bed/room) */
        operationalStatus: Coding,
        /** Name of the location as used by humans */
        name: primitives.R4.string,
        /** Extension of name element */
        _name: Element,
        /** A list of alternate names that the location is known as, or was known as, in the past */
        alias: t.array(primitives.R4.string),
        /** Extension of alias element */
        _alias: t.array(Element),
        /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
        description: primitives.R4.string,
        /** Extension of description element */
        _description: Element,
        /** instance | kind */
        mode: primitives.R4.code,
        /** Extension of mode element */
        _mode: Element,
        /** Type of function performed */
        type: t.array(CodeableConcept),
        /** Contact details of the location */
        telecom: t.array(ContactPoint),
        /** Physical location */
        address: Address,
        /** Physical form of the location */
        physicalType: CodeableConcept,
        /** Organization responsible for provisioning and upkeep */
        managingOrganization: Reference,
        /** Another Location this one is physically a part of */
        partOf: Reference,
        /** Description of availability exceptions */
        availabilityExceptions: primitives.R4.string,
        /** Extension of availabilityExceptions element */
        _availabilityExceptions: Element,
        /** Technical endpoints providing access to services operated for the location */
        endpoint: t.array(Reference)
      })
    ])
);

/**
 * The absolute geographic location
 */
export interface LocationPosition {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Longitude with WGS84 datum */
  longitude: primitives.R4.decimal;
  /** Extension of longitude element */
  _longitude?: Element;
  /** Latitude with WGS84 datum */
  latitude: primitives.R4.decimal;
  /** Extension of latitude element */
  _latitude?: Element;
  /** Altitude with WGS84 datum */
  altitude?: primitives.R4.decimal;
  /** Extension of altitude element */
  _altitude?: Element;
}
/**
 * The absolute geographic location
 */
export const LocationPosition: t.Type<LocationPosition> = t.recursion<
  LocationPosition
>("LocationPosition", () =>
  t.intersection([
    t.type({
      /** Longitude with WGS84 datum */
      longitude: primitives.R4.decimal,
      /** Latitude with WGS84 datum */
      latitude: primitives.R4.decimal
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
      /** Extension of longitude element */
      _longitude: Element,
      /** Extension of latitude element */
      _latitude: Element,
      /** Altitude with WGS84 datum */
      altitude: primitives.R4.decimal,
      /** Extension of altitude element */
      _altitude: Element
    })
  ])
);

/**
 * What days/times during a week is this location usually open
 */
export interface LocationHoursOfOperation {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** mon | tue | wed | thu | fri | sat | sun */
  daysOfWeek?: primitives.R4.code[];
  /** Extension of daysOfWeek element */
  _daysOfWeek?: Element[];
  /** The Location is open all day */
  allDay?: boolean;
  /** Extension of allDay element */
  _allDay?: Element;
  /** Time that the Location opens */
  openingTime?: primitives.R4.time;
  /** Extension of openingTime element */
  _openingTime?: Element;
  /** Time that the Location closes */
  closingTime?: primitives.R4.time;
  /** Extension of closingTime element */
  _closingTime?: Element;
}
/**
 * What days/times during a week is this location usually open
 */
export const LocationHoursOfOperation: t.Type<
  LocationHoursOfOperation
> = t.recursion<LocationHoursOfOperation>("LocationHoursOfOperation", () =>
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
      /** mon | tue | wed | thu | fri | sat | sun */
      daysOfWeek: t.array(primitives.R4.code),
      /** Extension of daysOfWeek element */
      _daysOfWeek: t.array(Element),
      /** The Location is open all day */
      allDay: primitives.R4.boolean,
      /** Extension of allDay element */
      _allDay: Element,
      /** Time that the Location opens */
      openingTime: primitives.R4.time,
      /** Extension of openingTime element */
      _openingTime: Element,
      /** Time that the Location closes */
      closingTime: primitives.R4.time,
      /** Extension of closingTime element */
      _closingTime: Element
    })
  ])
);
