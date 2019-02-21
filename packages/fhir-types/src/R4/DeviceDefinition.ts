/**
 * DeviceDefinition Module
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
import {
  ProdCharacteristic,
  ProdCharacteristicOutputType
} from "./ProdCharacteristic";
import {
  ProductShelfLife,
  ProductShelfLifeOutputType
} from "./ProductShelfLife";
import { Quantity, QuantityOutputType } from "./Quantity";
import { Reference, ReferenceOutputType } from "./Reference";
import { Resource, ResourceOutputType } from "./Resource";

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export interface DeviceDefinitionUdiDeviceIdentifier {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier */
  deviceIdentifier: t.TypeOf<primitives.R4.StringType>;
  /** The organization that assigns the identifier algorithm */
  issuer: t.TypeOf<primitives.R4.URIType>;
  /** The jurisdiction to which the deviceIdentifier applies */
  jurisdiction: t.TypeOf<primitives.R4.URIType>;
}

export interface DeviceDefinitionUdiDeviceIdentifierOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier */
  deviceIdentifier: t.OutputOf<primitives.R4.StringType>;
  /** The organization that assigns the identifier algorithm */
  issuer: t.OutputOf<primitives.R4.URIType>;
  /** The jurisdiction to which the deviceIdentifier applies */
  jurisdiction: t.OutputOf<primitives.R4.URIType>;
}

export const DeviceDefinitionUdiDeviceIdentifier: t.RecursiveType<
  t.Type<
    DeviceDefinitionUdiDeviceIdentifier,
    DeviceDefinitionUdiDeviceIdentifierOutputType
  >,
  DeviceDefinitionUdiDeviceIdentifier,
  DeviceDefinitionUdiDeviceIdentifierOutputType
> = t.recursion<
  DeviceDefinitionUdiDeviceIdentifier,
  DeviceDefinitionUdiDeviceIdentifierOutputType
>("DeviceDefinitionUdiDeviceIdentifier", () =>
  t.intersection(
    [
      t.type({
        /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier */
        deviceIdentifier: primitives.R4.string,
        /** The organization that assigns the identifier algorithm */
        issuer: primitives.R4.uri,
        /** The jurisdiction to which the deviceIdentifier applies */
        jurisdiction: primitives.R4.uri
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
    "DeviceDefinitionUdiDeviceIdentifier"
  )
);

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export interface DeviceDefinitionSpecialization {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The standard that is used to operate and communicate */
  systemType: t.TypeOf<primitives.R4.StringType>;
  /** The version of the standard that is used to operate and communicate */
  version?: t.TypeOf<primitives.R4.StringType>;
}

export interface DeviceDefinitionSpecializationOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The standard that is used to operate and communicate */
  systemType: t.OutputOf<primitives.R4.StringType>;
  /** The version of the standard that is used to operate and communicate */
  version?: t.OutputOf<primitives.R4.StringType>;
}

export const DeviceDefinitionSpecialization: t.RecursiveType<
  t.Type<
    DeviceDefinitionSpecialization,
    DeviceDefinitionSpecializationOutputType
  >,
  DeviceDefinitionSpecialization,
  DeviceDefinitionSpecializationOutputType
> = t.recursion<
  DeviceDefinitionSpecialization,
  DeviceDefinitionSpecializationOutputType
>("DeviceDefinitionSpecialization", () =>
  t.intersection(
    [
      t.type({
        /** The standard that is used to operate and communicate */
        systemType: primitives.R4.string
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
    "DeviceDefinitionSpecialization"
  )
);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export interface DeviceDefinitionProperty {
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

export interface DeviceDefinitionPropertyOutputType {
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

export const DeviceDefinitionProperty: t.RecursiveType<
  t.Type<DeviceDefinitionProperty, DeviceDefinitionPropertyOutputType>,
  DeviceDefinitionProperty,
  DeviceDefinitionPropertyOutputType
> = t.recursion<DeviceDefinitionProperty, DeviceDefinitionPropertyOutputType>(
  "DeviceDefinitionProperty",
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
      "DeviceDefinitionProperty"
    )
);

/**
 * A substance used to create the material(s) of which the device is made
 */
export interface DeviceDefinitionMaterial {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The substance */
  substance: CodeableConcept;
  /** Indicates an alternative material of the device */
  alternate?: t.TypeOf<primitives.R4.BooleanType>;
  /** Whether the substance is a known or suspected allergen */
  allergenicIndicator?: t.TypeOf<primitives.R4.BooleanType>;
}

export interface DeviceDefinitionMaterialOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** The substance */
  substance: CodeableConceptOutputType;
  /** Indicates an alternative material of the device */
  alternate?: t.OutputOf<primitives.R4.BooleanType>;
  /** Whether the substance is a known or suspected allergen */
  allergenicIndicator?: t.OutputOf<primitives.R4.BooleanType>;
}

export const DeviceDefinitionMaterial: t.RecursiveType<
  t.Type<DeviceDefinitionMaterial, DeviceDefinitionMaterialOutputType>,
  DeviceDefinitionMaterial,
  DeviceDefinitionMaterialOutputType
> = t.recursion<DeviceDefinitionMaterial, DeviceDefinitionMaterialOutputType>(
  "DeviceDefinitionMaterial",
  () =>
    t.intersection(
      [
        t.type({
          /** The substance */
          substance: CodeableConcept
        }),
        t.partial({
          /** Whether the substance is a known or suspected allergen */
          allergenicIndicator: primitives.R4.boolean,
          /** Indicates an alternative material of the device */
          alternate: primitives.R4.boolean,
          /** Additional content defined by implementations */
          extension: t.array(Extension),
          /** Unique id for inter-element referencing */
          id: primitives.R4.string,
          /** Extensions that cannot be ignored even if unrecognized */
          modifierExtension: t.array(Extension)
        })
      ],
      "DeviceDefinitionMaterial"
    )
);

/**
 * A name given to the device to identify it
 */
export interface DeviceDefinitionDeviceName {
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

export interface DeviceDefinitionDeviceNameOutputType {
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

export const DeviceDefinitionDeviceName: t.RecursiveType<
  t.Type<DeviceDefinitionDeviceName, DeviceDefinitionDeviceNameOutputType>,
  DeviceDefinitionDeviceName,
  DeviceDefinitionDeviceNameOutputType
> = t.recursion<
  DeviceDefinitionDeviceName,
  DeviceDefinitionDeviceNameOutputType
>("DeviceDefinitionDeviceName", () =>
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
    "DeviceDefinitionDeviceName"
  )
);

/**
 * Device capabilities
 */
export interface DeviceDefinitionCapability {
  /** Unique id for inter-element referencing */
  id?: t.TypeOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of capability */
  type: CodeableConcept;
  /** Description of capability */
  description?: CodeableConcept[];
}

export interface DeviceDefinitionCapabilityOutputType {
  /** Unique id for inter-element referencing */
  id?: t.OutputOf<primitives.R4.StringType>;
  /** Additional content defined by implementations */
  extension?: ExtensionOutputType[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: ExtensionOutputType[];
  /** Type of capability */
  type: CodeableConceptOutputType;
  /** Description of capability */
  description?: CodeableConceptOutputType[];
}

export const DeviceDefinitionCapability: t.RecursiveType<
  t.Type<DeviceDefinitionCapability, DeviceDefinitionCapabilityOutputType>,
  DeviceDefinitionCapability,
  DeviceDefinitionCapabilityOutputType
> = t.recursion<
  DeviceDefinitionCapability,
  DeviceDefinitionCapabilityOutputType
>("DeviceDefinitionCapability", () =>
  t.intersection(
    [
      t.type({
        /** Type of capability */
        type: CodeableConcept
      }),
      t.partial({
        /** Description of capability */
        description: t.array(CodeableConcept),
        /** Additional content defined by implementations */
        extension: t.array(Extension),
        /** Unique id for inter-element referencing */
        id: primitives.R4.string,
        /** Extensions that cannot be ignored even if unrecognized */
        modifierExtension: t.array(Extension)
      })
    ],
    "DeviceDefinitionCapability"
  )
);

/**
 * An instance of a medical-related component of a medical device
 */
export interface DeviceDefinition {
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
  /** Unique Device Identifier (UDI) Barcode string */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];
  /** Name of device manufacturer */
  manufacturer?: t.TypeOf<primitives.R4.StringType> | Reference;
  /** A name given to the device to identify it */
  deviceName?: DeviceDefinitionDeviceName[];
  /** The model number for the device */
  modelNumber?: t.TypeOf<primitives.R4.StringType>;
  /** What kind of device or device system this is */
  type?: CodeableConcept;
  /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
  specialization?: DeviceDefinitionSpecialization[];
  /** Available versions */
  version?: t.TypeOf<primitives.R4.StringType>[];
  /** Safety characteristics of the device */
  safety?: CodeableConcept[];
  /** Shelf Life and storage information */
  shelfLifeStorage?: ProductShelfLife[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristic;
  /** Language code for the human-readable text strings produced by the device (all supported) */
  languageCode?: CodeableConcept[];
  /** Device capabilities */
  capability?: DeviceDefinitionCapability[];
  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
  property?: DeviceDefinitionProperty[];
  /** Organization responsible for device */
  owner?: Reference;
  /** Details for human/organization for support */
  contact?: ContactPoint[];
  /** Network address to contact device */
  url?: t.TypeOf<primitives.R4.URIType>;
  /** Access to on-line information */
  onlineInformation?: t.TypeOf<primitives.R4.URIType>;
  /** Device notes and comments */
  note?: Annotation[];
  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
  quantity?: Quantity;
  /** The parent device it can be part of */
  parentDevice?: Reference;
  /** A substance used to create the material(s) of which the device is made */
  material?: DeviceDefinitionMaterial[];
}

export interface DeviceDefinitionOutputType {
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
  /** Unique Device Identifier (UDI) Barcode string */
  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifierOutputType[];
  /** Name of device manufacturer */
  manufacturer?: t.OutputOf<primitives.R4.StringType> | ReferenceOutputType;
  /** A name given to the device to identify it */
  deviceName?: DeviceDefinitionDeviceNameOutputType[];
  /** The model number for the device */
  modelNumber?: t.OutputOf<primitives.R4.StringType>;
  /** What kind of device or device system this is */
  type?: CodeableConceptOutputType;
  /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
  specialization?: DeviceDefinitionSpecializationOutputType[];
  /** Available versions */
  version?: t.OutputOf<primitives.R4.StringType>[];
  /** Safety characteristics of the device */
  safety?: CodeableConceptOutputType[];
  /** Shelf Life and storage information */
  shelfLifeStorage?: ProductShelfLifeOutputType[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristicOutputType;
  /** Language code for the human-readable text strings produced by the device (all supported) */
  languageCode?: CodeableConceptOutputType[];
  /** Device capabilities */
  capability?: DeviceDefinitionCapabilityOutputType[];
  /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
  property?: DeviceDefinitionPropertyOutputType[];
  /** Organization responsible for device */
  owner?: ReferenceOutputType;
  /** Details for human/organization for support */
  contact?: ContactPointOutputType[];
  /** Network address to contact device */
  url?: t.OutputOf<primitives.R4.URIType>;
  /** Access to on-line information */
  onlineInformation?: t.OutputOf<primitives.R4.URIType>;
  /** Device notes and comments */
  note?: AnnotationOutputType[];
  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
  quantity?: QuantityOutputType;
  /** The parent device it can be part of */
  parentDevice?: ReferenceOutputType;
  /** A substance used to create the material(s) of which the device is made */
  material?: DeviceDefinitionMaterialOutputType[];
}

export const DeviceDefinition: t.RecursiveType<
  t.Type<DeviceDefinition, DeviceDefinitionOutputType>,
  DeviceDefinition,
  DeviceDefinitionOutputType
> = t.recursion<DeviceDefinition, DeviceDefinitionOutputType>(
  "DeviceDefinition",
  () =>
    t.intersection(
      [
        t.type({}),
        t.partial({
          /** Device capabilities */
          capability: t.array(DeviceDefinitionCapability),
          /** Details for human/organization for support */
          contact: t.array(ContactPoint),
          /** Contained, inline Resources */
          contained: t.array(Resource),
          /** A name given to the device to identify it */
          deviceName: t.array(DeviceDefinitionDeviceName),
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
          /** Language code for the human-readable text strings produced by the device (all supported) */
          languageCode: t.array(CodeableConcept),
          /** Name of device manufacturer */
          manufacturer: t.union([primitives.R4.string, Reference]),
          /** A substance used to create the material(s) of which the device is made */
          material: t.array(DeviceDefinitionMaterial),
          /** Metadata about the resource */
          meta: Meta,
          /** The model number for the device */
          modelNumber: primitives.R4.string,
          /** Extensions that cannot be ignored */
          modifierExtension: t.array(Extension),
          /** Device notes and comments */
          note: t.array(Annotation),
          /** Access to on-line information */
          onlineInformation: primitives.R4.uri,
          /** Organization responsible for device */
          owner: Reference,
          /** The parent device it can be part of */
          parentDevice: Reference,
          /** Dimensions, color etc. */
          physicalCharacteristics: ProdCharacteristic,
          /** The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties */
          property: t.array(DeviceDefinitionProperty),
          /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
          quantity: Quantity,
          /** Safety characteristics of the device */
          safety: t.array(CodeableConcept),
          /** Shelf Life and storage information */
          shelfLifeStorage: t.array(ProductShelfLife),
          /** The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication */
          specialization: t.array(DeviceDefinitionSpecialization),
          /** Text summary of the resource, for human interpretation */
          text: Narrative,
          /** What kind of device or device system this is */
          type: CodeableConcept,
          /** Unique Device Identifier (UDI) Barcode string */
          udiDeviceIdentifier: t.array(DeviceDefinitionUdiDeviceIdentifier),
          /** Network address to contact device */
          url: primitives.R4.uri,
          /** Available versions */
          version: t.array(primitives.R4.string)
        })
      ],
      "DeviceDefinition"
    )
);
