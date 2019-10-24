/**
 * Device Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation } from "./Annotation";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";
import { Meta } from "./Meta";
import { Narrative } from "./Narrative";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * Item used in healthcare
 */
export interface Device {
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
  /** Instance identifier */
  identifier?: Identifier[];
  /** The reference to the definition for the device */
  definition?: Reference;
  /** active | inactive | entered-in-error | unknown */
  status?: primitives.R4.code;
  /** Extension of status element */
  _status?: Element;
  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off */
  statusReason?: CodeableConcept[];
  /** The distinct identification string */
  distinctIdentifier?: string;
  /** Extension of distinctIdentifier element */
  _distinctIdentifier?: Element;
  /** Name of device manufacturer */
  manufacturer?: string;
  /** Extension of manufacturer element */
  _manufacturer?: Element;
  /** Date when the device was made */
  manufactureDate?: primitives.R4.dateTime;
  /** Extension of manufactureDate element */
  _manufactureDate?: Element;
  /** Date and time of expiry of this device (if applicable) */
  expirationDate?: primitives.R4.dateTime;
  /** Extension of expirationDate element */
  _expirationDate?: Element;
  /** Lot number of manufacture */
  lotNumber?: string;
  /** Extension of lotNumber element */
  _lotNumber?: Element;
  /** Serial number assigned by the manufacturer */
  serialNumber?: string;
  /** Extension of serialNumber element */
  _serialNumber?: Element;
  /** The model number for the device */
  modelNumber?: string;
  /** Extension of modelNumber element */
  _modelNumber?: Element;
  /** The part number of the device */
  partNumber?: string;
  /** Extension of partNumber element */
  _partNumber?: Element;
  /** The kind or type of device */
  type?: CodeableConcept;
  /** Patient to whom Device is affixed */
  patient?: Reference;
  /** Organization responsible for device */
  owner?: Reference;
  /** Details for human/organization for support */
  contact?: ContactPoint[];
  /** Where the device is found */
  location?: Reference;
  /** Network address to contact device */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Device notes and comments */
  note?: Annotation[];
  /** Safety Characteristics of Device */
  safety?: CodeableConcept[];
  /** The parent device */
  parent?: Reference;
}
/**
 * Item used in healthcare
 */
export const Device: t.Type<Device> = t.recursion<Device>("Device", () =>
  t.intersection([
    t.type({}),
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
      /** Instance identifier */
      identifier: t.array(Identifier),
      /** The reference to the definition for the device */
      definition: Reference,
      /** active | inactive | entered-in-error | unknown */
      status: primitives.R4.code,
      /** Extension of status element */
      _status: Element,
      /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off */
      statusReason: t.array(CodeableConcept),
      /** The distinct identification string */
      distinctIdentifier: primitives.R4.string,
      /** Extension of distinctIdentifier element */
      _distinctIdentifier: Element,
      /** Name of device manufacturer */
      manufacturer: primitives.R4.string,
      /** Extension of manufacturer element */
      _manufacturer: Element,
      /** Date when the device was made */
      manufactureDate: primitives.R4.dateTime,
      /** Extension of manufactureDate element */
      _manufactureDate: Element,
      /** Date and time of expiry of this device (if applicable) */
      expirationDate: primitives.R4.dateTime,
      /** Extension of expirationDate element */
      _expirationDate: Element,
      /** Lot number of manufacture */
      lotNumber: primitives.R4.string,
      /** Extension of lotNumber element */
      _lotNumber: Element,
      /** Serial number assigned by the manufacturer */
      serialNumber: primitives.R4.string,
      /** Extension of serialNumber element */
      _serialNumber: Element,
      /** The model number for the device */
      modelNumber: primitives.R4.string,
      /** Extension of modelNumber element */
      _modelNumber: Element,
      /** The part number of the device */
      partNumber: primitives.R4.string,
      /** Extension of partNumber element */
      _partNumber: Element,
      /** The kind or type of device */
      type: CodeableConcept,
      /** Patient to whom Device is affixed */
      patient: Reference,
      /** Organization responsible for device */
      owner: Reference,
      /** Details for human/organization for support */
      contact: t.array(ContactPoint),
      /** Where the device is found */
      location: Reference,
      /** Network address to contact device */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Device notes and comments */
      note: t.array(Annotation),
      /** Safety Characteristics of Device */
      safety: t.array(CodeableConcept),
      /** The parent device */
      parent: Reference
    })
  ])
);

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export interface DeviceUdiCarrier {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Mandatory fixed portion of UDI */
  deviceIdentifier?: string;
  /** Extension of deviceIdentifier element */
  _deviceIdentifier?: Element;
  /** UDI Issuing Organization */
  issuer?: primitives.R4.uri;
  /** Extension of issuer element */
  _issuer?: Element;
  /** Regional UDI authority */
  jurisdiction?: primitives.R4.uri;
  /** Extension of jurisdiction element */
  _jurisdiction?: Element;
  /** UDI Machine Readable Barcode String */
  carrierAIDC?: primitives.R4.base64Binary;
  /** Extension of carrierAIDC element */
  _carrierAIDC?: Element;
  /** UDI Human Readable Barcode String */
  carrierHRF?: string;
  /** Extension of carrierHRF element */
  _carrierHRF?: Element;
  /** barcode | rfid | manual + */
  entryType?: primitives.R4.code;
  /** Extension of entryType element */
  _entryType?: Element;
}
/**
 * Unique Device Identifier (UDI) Barcode string
 */
export const DeviceUdiCarrier: t.Type<DeviceUdiCarrier> = t.recursion<
  DeviceUdiCarrier
>("DeviceUdiCarrier", () =>
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
      /** Mandatory fixed portion of UDI */
      deviceIdentifier: primitives.R4.string,
      /** Extension of deviceIdentifier element */
      _deviceIdentifier: Element,
      /** UDI Issuing Organization */
      issuer: primitives.R4.uri,
      /** Extension of issuer element */
      _issuer: Element,
      /** Regional UDI authority */
      jurisdiction: primitives.R4.uri,
      /** Extension of jurisdiction element */
      _jurisdiction: Element,
      /** UDI Machine Readable Barcode String */
      carrierAIDC: primitives.R4.base64Binary,
      /** Extension of carrierAIDC element */
      _carrierAIDC: Element,
      /** UDI Human Readable Barcode String */
      carrierHRF: primitives.R4.string,
      /** Extension of carrierHRF element */
      _carrierHRF: Element,
      /** barcode | rfid | manual + */
      entryType: primitives.R4.code,
      /** Extension of entryType element */
      _entryType: Element
    })
  ])
);

/**
 * The name of the device as given by the manufacturer
 */
export interface DeviceDeviceName {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The name of the device */
  name: string;
  /** Extension of name element */
  _name?: Element;
  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
  type: primitives.R4.code;
  /** Extension of type element */
  _type?: Element;
}
/**
 * The name of the device as given by the manufacturer
 */
export const DeviceDeviceName: t.Type<DeviceDeviceName> = t.recursion<
  DeviceDeviceName
>("DeviceDeviceName", () =>
  t.intersection([
    t.type({
      /** The name of the device */
      name: primitives.R4.string,
      /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
      type: primitives.R4.code
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
      /** Extension of name element */
      _name: Element,
      /** Extension of type element */
      _type: Element
    })
  ])
);

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export interface DeviceSpecialization {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The standard that is used to operate and communicate */
  systemType: CodeableConcept;
  /** The version of the standard that is used to operate and communicate */
  version?: string;
  /** Extension of version element */
  _version?: Element;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export const DeviceSpecialization: t.Type<DeviceSpecialization> = t.recursion<
  DeviceSpecialization
>("DeviceSpecialization", () =>
  t.intersection([
    t.type({
      /** The standard that is used to operate and communicate */
      systemType: CodeableConcept
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
      /** The version of the standard that is used to operate and communicate */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element
    })
  ])
);

/**
 * The actual design of the device or software version running on the device
 */
export interface DeviceVersion {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of the device version */
  type?: CodeableConcept;
  /** A single component of the device version */
  component?: Identifier;
  /** The version text */
  value: string;
  /** Extension of value element */
  _value?: Element;
}
/**
 * The actual design of the device or software version running on the device
 */
export const DeviceVersion: t.Type<DeviceVersion> = t.recursion<DeviceVersion>(
  "DeviceVersion",
  () =>
    t.intersection([
      t.type({
        /** The version text */
        value: primitives.R4.string
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
        /** The type of the device version */
        type: CodeableConcept,
        /** A single component of the device version */
        component: Identifier,
        /** Extension of value element */
        _value: Element
      })
    ])
);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export interface DeviceProperty {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) */
  type: CodeableConcept;
  /** Property value as a quantity */
  valueQuantity?: Quantity[];
  /** Property value as a code, e.g., NTP4 (synced to NTP) */
  valueCode?: CodeableConcept[];
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export const DeviceProperty: t.Type<DeviceProperty> = t.recursion<
  DeviceProperty
>("DeviceProperty", () =>
  t.intersection([
    t.type({
      /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) */
      type: CodeableConcept
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
      /** Property value as a quantity */
      valueQuantity: t.array(Quantity),
      /** Property value as a code, e.g., NTP4 (synced to NTP) */
      valueCode: t.array(CodeableConcept)
    })
  ])
);
