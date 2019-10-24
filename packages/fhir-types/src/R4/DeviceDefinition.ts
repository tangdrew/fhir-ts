/**
 * DeviceDefinition Module
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
import { ProdCharacteristic } from "./ProdCharacteristic";
import { ProductShelfLife } from "./ProductShelfLife";
import { Quantity } from "./Quantity";
import { Reference } from "./Reference";
import { Resource } from "./Resource";

/**
 * An instance of a medical-related component of a medical device
 */
export interface DeviceDefinition {
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
  /** Name of device manufacturer */
  manufacturerString?: string;
  /** Extension of manufacturerString element */
  _manufacturerString?: Element;
  /** Name of device manufacturer */
  manufacturerReference?: Reference;
  /** The model number for the device */
  modelNumber?: string;
  /** Extension of modelNumber element */
  _modelNumber?: Element;
  /** What kind of device or device system this is */
  type?: CodeableConcept;
  /** Available versions */
  version?: string[];
  /** Extension of version element */
  _version?: Element[];
  /** Safety characteristics of the device */
  safety?: CodeableConcept[];
  /** Shelf Life and storage information */
  shelfLifeStorage?: ProductShelfLife[];
  /** Dimensions, color etc. */
  physicalCharacteristics?: ProdCharacteristic;
  /** Language code for the human-readable text strings produced by the device (all supported) */
  languageCode?: CodeableConcept[];
  /** Organization responsible for device */
  owner?: Reference;
  /** Details for human/organization for support */
  contact?: ContactPoint[];
  /** Network address to contact device */
  url?: primitives.R4.uri;
  /** Extension of url element */
  _url?: Element;
  /** Access to on-line information */
  onlineInformation?: primitives.R4.uri;
  /** Extension of onlineInformation element */
  _onlineInformation?: Element;
  /** Device notes and comments */
  note?: Annotation[];
  /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
  quantity?: Quantity;
  /** The parent device it can be part of */
  parentDevice?: Reference;
}
/**
 * An instance of a medical-related component of a medical device
 */
export const DeviceDefinition: t.Type<DeviceDefinition> = t.recursion<
  DeviceDefinition
>("DeviceDefinition", () =>
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
      /** Name of device manufacturer */
      manufacturerString: primitives.R4.string,
      /** Extension of manufacturerString element */
      _manufacturerString: Element,
      /** Name of device manufacturer */
      manufacturerReference: Reference,
      /** The model number for the device */
      modelNumber: primitives.R4.string,
      /** Extension of modelNumber element */
      _modelNumber: Element,
      /** What kind of device or device system this is */
      type: CodeableConcept,
      /** Available versions */
      version: t.array(primitives.R4.string),
      /** Extension of version element */
      _version: t.array(Element),
      /** Safety characteristics of the device */
      safety: t.array(CodeableConcept),
      /** Shelf Life and storage information */
      shelfLifeStorage: t.array(ProductShelfLife),
      /** Dimensions, color etc. */
      physicalCharacteristics: ProdCharacteristic,
      /** Language code for the human-readable text strings produced by the device (all supported) */
      languageCode: t.array(CodeableConcept),
      /** Organization responsible for device */
      owner: Reference,
      /** Details for human/organization for support */
      contact: t.array(ContactPoint),
      /** Network address to contact device */
      url: primitives.R4.uri,
      /** Extension of url element */
      _url: Element,
      /** Access to on-line information */
      onlineInformation: primitives.R4.uri,
      /** Extension of onlineInformation element */
      _onlineInformation: Element,
      /** Device notes and comments */
      note: t.array(Annotation),
      /** The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product) */
      quantity: Quantity,
      /** The parent device it can be part of */
      parentDevice: Reference
    })
  ])
);

/**
 * Unique Device Identifier (UDI) Barcode string
 */
export interface DeviceDefinitionUdiDeviceIdentifier {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier */
  deviceIdentifier: string;
  /** Extension of deviceIdentifier element */
  _deviceIdentifier?: Element;
  /** The organization that assigns the identifier algorithm */
  issuer: primitives.R4.uri;
  /** Extension of issuer element */
  _issuer?: Element;
  /** The jurisdiction to which the deviceIdentifier applies */
  jurisdiction: primitives.R4.uri;
  /** Extension of jurisdiction element */
  _jurisdiction?: Element;
}
/**
 * Unique Device Identifier (UDI) Barcode string
 */
export const DeviceDefinitionUdiDeviceIdentifier: t.Type<
  DeviceDefinitionUdiDeviceIdentifier
> = t.recursion<DeviceDefinitionUdiDeviceIdentifier>(
  "DeviceDefinitionUdiDeviceIdentifier",
  () =>
    t.intersection([
      t.type({
        /** The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier */
        deviceIdentifier: primitives.R4.string,
        /** The organization that assigns the identifier algorithm */
        issuer: primitives.R4.uri,
        /** The jurisdiction to which the deviceIdentifier applies */
        jurisdiction: primitives.R4.uri
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
        /** Extension of deviceIdentifier element */
        _deviceIdentifier: Element,
        /** Extension of issuer element */
        _issuer: Element,
        /** Extension of jurisdiction element */
        _jurisdiction: Element
      })
    ])
);

/**
 * A name given to the device to identify it
 */
export interface DeviceDefinitionDeviceName {
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
 * A name given to the device to identify it
 */
export const DeviceDefinitionDeviceName: t.Type<
  DeviceDefinitionDeviceName
> = t.recursion<DeviceDefinitionDeviceName>("DeviceDefinitionDeviceName", () =>
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
export interface DeviceDefinitionSpecialization {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The standard that is used to operate and communicate */
  systemType: string;
  /** Extension of systemType element */
  _systemType?: Element;
  /** The version of the standard that is used to operate and communicate */
  version?: string;
  /** Extension of version element */
  _version?: Element;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication
 */
export const DeviceDefinitionSpecialization: t.Type<
  DeviceDefinitionSpecialization
> = t.recursion<DeviceDefinitionSpecialization>(
  "DeviceDefinitionSpecialization",
  () =>
    t.intersection([
      t.type({
        /** The standard that is used to operate and communicate */
        systemType: primitives.R4.string
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
        /** Extension of systemType element */
        _systemType: Element,
        /** The version of the standard that is used to operate and communicate */
        version: primitives.R4.string,
        /** Extension of version element */
        _version: Element
      })
    ])
);

/**
 * Device capabilities
 */
export interface DeviceDefinitionCapability {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** Type of capability */
  type: CodeableConcept;
  /** Description of capability */
  description?: CodeableConcept[];
}
/**
 * Device capabilities
 */
export const DeviceDefinitionCapability: t.Type<
  DeviceDefinitionCapability
> = t.recursion<DeviceDefinitionCapability>("DeviceDefinitionCapability", () =>
  t.intersection([
    t.type({
      /** Type of capability */
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
      /** Description of capability */
      description: t.array(CodeableConcept)
    })
  ])
);

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties
 */
export interface DeviceDefinitionProperty {
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
export const DeviceDefinitionProperty: t.Type<
  DeviceDefinitionProperty
> = t.recursion<DeviceDefinitionProperty>("DeviceDefinitionProperty", () =>
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

/**
 * A substance used to create the material(s) of which the device is made
 */
export interface DeviceDefinitionMaterial {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored even if unrecognized */
  modifierExtension?: Extension[];
  /** The substance */
  substance: CodeableConcept;
  /** Indicates an alternative material of the device */
  alternate?: boolean;
  /** Extension of alternate element */
  _alternate?: Element;
  /** Whether the substance is a known or suspected allergen */
  allergenicIndicator?: boolean;
  /** Extension of allergenicIndicator element */
  _allergenicIndicator?: Element;
}
/**
 * A substance used to create the material(s) of which the device is made
 */
export const DeviceDefinitionMaterial: t.Type<
  DeviceDefinitionMaterial
> = t.recursion<DeviceDefinitionMaterial>("DeviceDefinitionMaterial", () =>
  t.intersection([
    t.type({
      /** The substance */
      substance: CodeableConcept
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
      /** Indicates an alternative material of the device */
      alternate: primitives.R4.boolean,
      /** Extension of alternate element */
      _alternate: Element,
      /** Whether the substance is a known or suspected allergen */
      allergenicIndicator: primitives.R4.boolean,
      /** Extension of allergenicIndicator element */
      _allergenicIndicator: Element
    })
  ])
);
