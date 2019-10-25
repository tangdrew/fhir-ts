/**
 * Coding Module
 */
import * as primitives from "@tangdrew/primitives";
import * as t from "io-ts";

import { Element } from "./Element";
import { Extension } from "./Extension";

/**
 * A reference to a code defined by a terminology system
 */
export interface Coding {
  /** The type of resource */
  resourceType?: "Coding";
  /** Unique id for inter-element referencing */
  id?: string;
  /** Extension of id element */
  _id?: Element;
  /** Additional content defined by implementations */
  extension?: Extension[];
  /** Identity of the terminology system */
  system?: primitives.R4.uri;
  /** Extension of system element */
  _system?: Element;
  /** Version of the system - if relevant */
  version?: string;
  /** Extension of version element */
  _version?: Element;
  /** Symbol in syntax defined by the system */
  code?: primitives.R4.code;
  /** Extension of code element */
  _code?: Element;
  /** Representation defined by the system */
  display?: string;
  /** Extension of display element */
  _display?: Element;
  /** If this coding was chosen directly by the user */
  userSelected?: boolean;
  /** Extension of userSelected element */
  _userSelected?: Element;
}
/**
 * A reference to a code defined by a terminology system
 */
export const Coding: t.Type<Coding> = t.recursion<Coding>("Coding", () =>
  t.intersection([
    t.type({}),
    t.partial({
      /** The type of resource */
      resourceType: t.literal("Coding"),
      /** Unique id for inter-element referencing */
      id: primitives.R4.string,
      /** Extension of id element */
      _id: Element,
      /** Additional content defined by implementations */
      extension: t.array(Extension),
      /** Identity of the terminology system */
      system: primitives.R4.uri,
      /** Extension of system element */
      _system: Element,
      /** Version of the system - if relevant */
      version: primitives.R4.string,
      /** Extension of version element */
      _version: Element,
      /** Symbol in syntax defined by the system */
      code: primitives.R4.code,
      /** Extension of code element */
      _code: Element,
      /** Representation defined by the system */
      display: primitives.R4.string,
      /** Extension of display element */
      _display: Element,
      /** If this coding was chosen directly by the user */
      userSelected: primitives.R4.boolean,
      /** Extension of userSelected element */
      _userSelected: Element
    })
  ])
);
