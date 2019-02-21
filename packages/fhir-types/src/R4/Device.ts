/**
 * Device Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Annotation, AnnotationOutputType } from "./Annotation";
import { CodeableConcept, CodeableConceptOutputType } from "./CodeableConcept";
import { ContactPoint, ContactPointOutputType } from "./ContactPoint";
import { Extension, ExtensionOutputType } from "./Extension";
import { Identifier, IdentifierOutputType } from "./Identifier";
import { Meta, MetaOutputType } from "./Meta";
import { Narrative, NarrativeOutputType } from "./Narrative";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * The actual design of the device or software version running on the device
 */
export interface DeviceVersion {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The type of the device version */
  type?: CodeableConcept;
  /** A single component of the device version */
  component?: Identifier;
  /** The version text */
  value: t.TypeOf<primitives.R4.StringType>;
}

export interface DeviceVersionOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The type of the device version */
  type?: CodeableConceptOutputType;
  /** A single component of the device version */
  component?: IdentifierOutputType;
  /** The version text */
  value: t.OutputOf<primitives.R4.StringType>;
}

export const DeviceVersion: t.RecursiveType<
  t.Type<DeviceVersion, DeviceVersionOutputType>,
  DeviceVersion,
  DeviceVersionOutputType
> = t.recursion<DeviceVersion, DeviceVersionOutputType>("DeviceVersion", () =>
  t.intersection(
    [
      t.type({
        /** The version text */
        value: primitives.R4.string
      }),
      t.partial({
        /** A single component of the device version */
        component: Identifier,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension),
        /** The type of the device version */
        type: CodeableConcept
      })
    ],
    "DeviceVersion"
  )
);

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export interface DeviceUdiCarrier {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Mandatory fixed portion of UDI */
  deviceIdentifier?: t.TypeOf<primitives.R4.StringType>;
  /** UDI Issuing Organization */
  issuer?: t.TypeOf<primitives.R4.URIType>;
  /** Regional UDI authority */
  jurisdiction?: t.TypeOf<primitives.R4.URIType>;
  /** UDI Machine Readable Barcode String */
  carrierAIDC?: t.TypeOf<primitives.R4.Base64BinaryType>;
  /** UDI Human Readable Barcode String */
  carrierHRF?: t.TypeOf<primitives.R4.StringType>;
  /** barcode | rfid | manual + */
  entryType?: t.TypeOf<primitives.R4.CodeType>;
}

export interface DeviceUdiCarrierOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Mandatory fixed portion of UDI */
  deviceIdentifier?: t.OutputOf<primitives.R4.StringType>;
  /** UDI Issuing Organization */
  issuer?: t.OutputOf<primitives.R4.URIType>;
  /** Regional UDI authority */
  jurisdiction?: t.OutputOf<primitives.R4.URIType>;
  /** UDI Machine Readable Barcode String */
  carrierAIDC?: t.OutputOf<primitives.R4.Base64BinaryType>;
  /** UDI Human Readable Barcode String */
  carrierHRF?: t.OutputOf<primitives.R4.StringType>;
  /** barcode | rfid | manual + */
  entryType?: t.OutputOf<primitives.R4.CodeType>;
}

export const DeviceUdiCarrier: t.RecursiveType<
  t.Type<DeviceUdiCarrier, DeviceUdiCarrierOutputType>,
  DeviceUdiCarrier,
  DeviceUdiCarrierOutputType
> = t.recursion<DeviceUdiCarrier, DeviceUdiCarrierOutputType>(
  "DeviceUdiCarrier",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** UDI Machine Readable Barcode String */
          carrierAIDC: primitives.R4.base64Binary,
          /** UDI Human Readable Barcode String */
          carrierHRF: primitives.R4.string,
          /** Mandatory fixed portion of UDI */
          deviceIdentifier: primitives.R4.string,
          /** barcode | rfid | manual + */
          entryType: primitives.R4.code,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** UDI Issuing Organization */
          issuer: primitives.R4.uri,
          /** Regional UDI authority */
          jurisdiction: primitives.R4.uri,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DeviceUdiCarrier"
    )
);

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export interface DeviceSpecialization {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The standard that is used to operate and communicate */
  systemType: CodeableConcept;
  /** The version of the standard that is used to operate and communicate */
  version?: t.TypeOf<primitives.R4.StringType>;
}

export interface DeviceSpecializationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The standard that is used to operate and communicate */
  systemType: CodeableConceptOutputType;
  /** The version of the standard that is used to operate and communicate */
  version?: t.OutputOf<primitives.R4.StringType>;
}

export const DeviceSpecialization: t.RecursiveType<
  t.Type<DeviceSpecialization, DeviceSpecializationOutputType>,
  DeviceSpecialization,
  DeviceSpecializationOutputType
> = t.recursion<DeviceSpecialization, DeviceSpecializationOutputType>(
  "DeviceSpecialization",
  () =>
    t.intersection(
      [
        t.type({
          /** The standard that is used to operate and communicate */
          systemType: CodeableConcept
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** The version of the standard that is used to operate and communicate */
          version: primitives.R4.string
        })
      ],
      "DeviceSpecialization"
    )
);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export interface DeviceProperty {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
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

export interface DevicePropertyOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) */
  type: CodeableConceptOutputType;
  /** Property value as a quantity */
  valueQuantity?: QuantityOutputType[];
  /** Property value as a code, e.g., NTP4 (synced to NTP) */
  valueCode?: CodeableConceptOutputType[];
}

export const DeviceProperty: t.RecursiveType<
  t.Type<DeviceProperty, DevicePropertyOutputType>,
  DeviceProperty,
  DevicePropertyOutputType
> = t.recursion<DeviceProperty, DevicePropertyOutputType>(
  "DeviceProperty",
  () =>
    t.intersection(
      [
        t.type({
          /** Code that specifies the property DeviceDefinitionPropetyCode (Extensible) */
          type: CodeableConcept
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension),
          /** Property value as a code, e.g., NTP4 (synced to NTP) */
          valueCode: t.array(CodeableConcept),
          /** Property value as a quantity */
          valueQuantity: t.array(Quantity)
        })
      ],
      "DeviceProperty"
    )
);

/**
 * The name of the device as given by the manufacturer
 */
export interface DeviceDeviceName {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The name of the device */
  name: t.TypeOf<primitives.R4.StringType>;
  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
  type: t.TypeOf<primitives.R4.CodeType>;
}

export interface DeviceDeviceNameOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The name of the device */
  name: t.OutputOf<primitives.R4.StringType>;
  /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
  type: t.OutputOf<primitives.R4.CodeType>;
}

export const DeviceDeviceName: t.RecursiveType<
  t.Type<DeviceDeviceName, DeviceDeviceNameOutputType>,
  DeviceDeviceName,
  DeviceDeviceNameOutputType
> = t.recursion<DeviceDeviceName, DeviceDeviceNameOutputType>(
  "DeviceDeviceName",
  () =>
    t.intersection(
      [
        t.type({
          /** The name of the device */
          name: primitives.R4.string,
          /** udi-label-name | user-friendly-name | patient-reported-name | manufacturer-name | model-name | other */
          type: primitives.R4.code
        }),
        t.partial({
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DeviceDeviceName"
    )
);

/**
 * Item used in healthcare
 */
export interface Device {
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
  /** Instance identifier */
  identifier?: Identifier[];
  /** The reference to the definition for the device */
  definition?: Reference;
  /** Unique Device Identifier (UDI) Barcode string */
  udiCarrier?: DeviceUdiCarrier[];
  /** active | inactive | entered-in-error | unknown */
  status?: t.TypeOf<primitives.R4.CodeType>;
  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off */
  statusReason?: CodeableConcept[];
  /** The distinct identification string */
  distinctIdentifier?: t.TypeOf<primitives.R4.StringType>;
  /** Name of device manufacturer */
  manufacturer?: t.TypeOf<primitives.R4.StringType>;
  /** Date when the device was made */
  manufactureDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Date and time of expiry of this device (if applicable) */
  expirationDate?: t.TypeOf<primitives.R4.DateTimeType>;
  /** Lot number of manufacture */
  lotNumber?: t.TypeOf<primitives.R4.StringType>;
  /** Serial number assigned by the manufacturer */
  serialNumber?: t.TypeOf<primitives.R4.StringType>;
  /** The name of the device as given by the manufacturer */
  deviceName?: DeviceDeviceName[];
  /** The model number for the device */
  modelNumber?: t.TypeOf<primitives.R4.StringType>;
  /** The part number of the device */
  partNumber?: t.TypeOf<primitives.R4.StringType>;
  /** The kind or type of device */
  type?: CodeableConcept;
  /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
  specialization?: DeviceSpecialization[];
  /** The actual design of the device or software version running on the device */
  version?: DeviceVersion[];
  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
  property?: DeviceProperty[];
  /** Patient to whom Device is affixed */
  patient?: Reference;
  /** Organization responsible for device */
  owner?: Reference;
  /** Details for human/organization for support */
  contact?: ContactPoint[];
  /** Where the device is found */
  location?: Reference;
  /** Network address to contact device */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Device notes and comments */
  note?: Annotation[];
  /** Safety Characteristics of Device */
  safety?: CodeableConcept[];
  /** The parent device */
  parent?: Reference;
}

export interface DeviceOutputType {
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
  /** Instance identifier */
  identifier?: IdentifierOutputType[];
  /** The reference to the definition for the device */
  definition?: ReferenceOutputType;
  /** Unique Device Identifier (UDI) Barcode string */
  udiCarrier?: DeviceUdiCarrierOutputType[];
  /** active | inactive | entered-in-error | unknown */
  status?: t.OutputOf<primitives.R4.CodeType>;
  /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off */
  statusReason?: CodeableConceptOutputType[];
  /** The distinct identification string */
  distinctIdentifier?: t.OutputOf<primitives.R4.StringType>;
  /** Name of device manufacturer */
  manufacturer?: t.OutputOf<primitives.R4.StringType>;
  /** Date when the device was made */
  manufactureDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Date and time of expiry of this device (if applicable) */
  expirationDate?: t.OutputOf<primitives.R4.DateTimeType>;
  /** Lot number of manufacture */
  lotNumber?: t.OutputOf<primitives.R4.StringType>;
  /** Serial number assigned by the manufacturer */
  serialNumber?: t.OutputOf<primitives.R4.StringType>;
  /** The name of the device as given by the manufacturer */
  deviceName?: DeviceDeviceNameOutputType[];
  /** The model number for the device */
  modelNumber?: t.OutputOf<primitives.R4.StringType>;
  /** The part number of the device */
  partNumber?: t.OutputOf<primitives.R4.StringType>;
  /** The kind or type of device */
  type?: CodeableConceptOutputType;
  /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
  specialization?: DeviceSpecializationOutputType[];
  /** The actual design of the device or software version running on the device */
  version?: DeviceVersionOutputType[];
  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
  property?: DevicePropertyOutputType[];
  /** Patient to whom Device is affixed */
  patient?: ReferenceOutputType;
  /** Organization responsible for device */
  owner?: ReferenceOutputType;
  /** Details for human/organization for support */
  contact?: ContactPointOutputType[];
  /** Where the device is found */
  location?: ReferenceOutputType;
  /** Network address to contact device */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Device notes and comments */
  note?: AnnotationOutputType[];
  /** Safety Characteristics of Device */
  safety?: CodeableConceptOutputType[];
  /** The parent device */
  parent?: ReferenceOutputType;
}

export const Device: t.RecursiveType<
  t.Type<Device, DeviceOutputType>,
  Device,
  DeviceOutputType
> = t.recursion<Device, DeviceOutputType>("Device", () =>
  t.intersection(
    [
      t.type({}),
      t.partial({
        /** Details for human/organization for support */
        contact: t.array(ContactPoint),
        /** Contained, inline Resources */
        contained: t.array(Resource),
        /** The reference to the definition for the device */
        definition: Reference,
        /** The name of the device as given by the manufacturer */
        deviceName: t.array(DeviceDeviceName),
        /** The distinct identification string */
        distinctIdentifier: primitives.R4.string,
        /** Date and time of expiry of this device (if applicable) */
        expirationDate: primitives.R4.dateTime,
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Logical id of this artifact */
        id: primitives.R4.id,
        /** Instance identifier */
        identifier: t.array(Identifier),
        /** A set of rules under which this content was created */
        implicitRules: primitives.R4.uri,
        /** Language of the resource content */
        language: primitives.R4.code,
        /** Where the device is found */
        location: Reference,
        /** Lot number of manufacture */
        lotNumber: primitives.R4.string,
        /** Date when the device was made */
        manufactureDate: primitives.R4.dateTime,
        /** Name of device manufacturer */
        manufacturer: primitives.R4.string,
        /** Metadata about the resource */
        meta: Meta,
        /** The model number for the device */
        modelNumber: primitives.R4.string,
        /** Extensions that cannot be ignored */
        modifierExtension: t.array(Extension),
        /** Device notes and comments */
        note: t.array(Annotation),
        /** Organization responsible for device */
        owner: Reference,
        /** The parent device */
        parent: Reference,
        /** The part number of the device */
        partNumber: primitives.R4.string,
        /** Patient to whom Device is affixed */
        patient: Reference,
        /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
        property: t.array(DeviceProperty),
        /** Safety Characteristics of Device */
        safety: t.array(CodeableConcept),
        /** Serial number assigned by the manufacturer */
        serialNumber: primitives.R4.string,
        /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
        specialization: t.array(DeviceSpecialization),
        /** active | inactive | entered-in-error | unknown */
        status: primitives.R4.code,
        /** online | paused | standby | offline | not-ready | transduc-discon | hw-discon | off */
        statusReason: t.array(CodeableConcept),
        /** Text summary of the resource, for human interpretation */
        text: Narrative,
        /** The kind or type of device */
        type: CodeableConcept,
        /** Unique Device Identifier (UDI) Barcode string */
        udiCarrier: t.array(DeviceUdiCarrier),
        /** Network address to contact device */
        url: primitives.R4.uri,
        /** The actual design of the device or software version running on the device */
        version: t.array(DeviceVersion)
      })
    ],
    "Device"
  )
);
