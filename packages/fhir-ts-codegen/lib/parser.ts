import { pipe } from "fp-ts/lib/pipeable";
import { dropRight, reduce, last, head, map, flatten } from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";

import {
  StructureDefinition,
  ElementDefinition,
  ChoiceElementDefinition,
  FHIRPrimitives,
  ContentReferenceElementDefinition
} from "./conformance";
import { stringsToCamelCase, stringsToPascalCase, renameKey } from "./helpers";
import * as NonEmptyArray from "fp-ts/lib/NonEmptyArray";

/**
 * Parses FHIR Structure Definition into intermediate representation
 */
export const parse = (structureDefinition: StructureDefinition) =>
  pipe(
    {
      elementDefinitions: structureDefinition.snapshot!.element,
      resourceType: structureDefinition.type,
      resourceName: structureDefinition.name
    },
    groupElementDefinitions,
    analyzeElementDefinitionGroups,
    groups => ({ name: structureDefinition.name, groups })
  );

export interface ElementGroup {
  name: string;
  comment?: string;
  elements: AnalyzedElement[];
}

export interface AnalyzedElement {
  array: boolean;
  backbone: boolean;
  choice: boolean;
  comment?: string;
  contentReference: boolean;
  iotsType: string;
  name: string;
  primitive: boolean;
  recursive: boolean;
  required: boolean;
  type: string;
}

interface ElementDefinitionGroup {
  root: ElementDefinition;
  elements: ElementDefinition[];
}

const analyzeElementDefinitionGroups = (groups: {
  [key: string]: ElementDefinitionGroup;
}) =>
  Object.keys(groups).reduce((accum: { [key: string]: ElementGroup }, key) => {
    const group = groups[key];
    const elements = pipe(
      group.elements,
      expandChoiceElements
    );
    const rootElement = group.root;
    const name = stringsToPascalCase(key.split("."));
    const value: ElementGroup = {
      name,
      comment: rootElement.short,
      elements: pipe(
        elements,
        map(elementDefinition =>
          analyzeElementDefinition({ elementDefinition, resourceType: name })
        ),
        expandPrimitiveElements
      )
    };
    return {
      ...accum,
      [key]: value
    };
  }, {});

const expandChoiceElements = (elementDefinitions: ElementDefinition[]) =>
  pipe(
    elementDefinitions,
    reduce([], (elements: ElementDefinition[], element) => {
      if (isChoiceElement(element)) {
        return [
          ...elements,
          ...element.type.map(type => ({ ...element, type: [type] }))
        ];
      }
      return [...elements, element];
    })
  );

/**
 * Add Element AnalyzedElements for each primitive
 */
const expandPrimitiveElements = (elements: AnalyzedElement[]) =>
  pipe(
    elements,
    map(element =>
      element.primitive
        ? [
            element,
            {
              ...element,
              name: `_${element.name}`,
              type: "Element",
              iotsType: "Element",
              comment: `Extension of ${element.name} element`,
              required: false
            }
          ]
        : [element]
    ),
    flatten
  );

const analyzeElementDefinition = ({
  elementDefinition,
  resourceType
}: {
  elementDefinition: ElementDefinition;
  resourceType: string;
}) => {
  const type = isContentReferenceElement(elementDefinition)
    ? contentReferenceElementType(elementDefinition)
    : elementType(elementDefinition);
  const primitive = isPrimitive(type);
  return {
    array: isArray(elementDefinition),
    backbone: isBackboneDefinition(elementDefinition),
    choice: isChoiceElement(elementDefinition),
    comment: elementDefinition.short,
    contentReference: isContentReferenceElement(elementDefinition),
    iotsType: primitive ? `primitives.R4.${type}` : type,
    name: elementName(elementDefinition),
    primitive,
    recursive: type === resourceType,
    required: isRequired(elementDefinition),
    type
  };
};

const groupElementDefinitions = ({
  elementDefinitions,
  resourceType,
  resourceName
}: {
  elementDefinitions: ElementDefinition[];
  resourceType: string;
  resourceName: string;
}) =>
  pipe(
    elementDefinitions.reduce<{
      [key: string]: ElementDefinitionGroup;
    }>((groups, elementDefinition) => {
      const upsertIntoGroups = upsertIntoElementsList(groups);
      const { path } = elementDefinition;
      // Skip the Root Resource definition element
      if (
        isResourceDefinition(resourceType, elementDefinition) ||
        isBackboneDefinition(elementDefinition)
      ) {
        return {
          ...groups,
          [path]: { root: elementDefinition, elements: [] }
        };
      }
      const key = getParentPath(path);
      return upsertIntoGroups(key, elementDefinition);
    }, {}),
    renameKey(resourceType, resourceName)
  );

const upsertIntoElementsList = (obj: {
  [key: string]: ElementDefinitionGroup;
}) => (key: string, element: ElementDefinition) => {
  const prev = obj[key] || { root: element, elements: [] };
  return { ...obj, [key]: { ...prev, elements: [...prev.elements, element] } };
};

const getParentPath = (path: string) =>
  pipe(
    path.split("."),
    dropRight(1),
    steps => steps.join(".")
  );

const isRequired = ({ min }: ElementDefinition) => min! > 0;

const isArray = ({ max }: ElementDefinition) =>
  !!(
    max &&
    (max === "*" || (!isNaN(parseInt(max, 10)) && parseInt(max, 10) > 1))
  );

/**
 * Whether an Element Definition is defining a Choice Type
 * https://www.hl7.org/fhir/formats.html#choice
 */
const isChoiceElement = (
  element: ElementDefinition
): element is ChoiceElementDefinition =>
  !!element.path && element.path.substr(-3) === "[x]";

const elementName = (elementDefinition: ElementDefinition) =>
  isChoiceElement(elementDefinition)
    ? getChoiceElementName(elementDefinition)
    : getLastPathStep(elementDefinition.path);

const getLastPathStep = (path: string) =>
  pipe(
    path.split("."),
    last,
    O.getOrElse(() => "")
  );

const getChoiceElementName = ({ path, type }: ChoiceElementDefinition) => {
  const lastPathStep = getLastPathStep(path);
  const name = lastPathStep.slice(0, -3);
  const typeName = NonEmptyArray.head(type).code;
  return stringsToCamelCase([name, typeName]);
};

const elementType = ({ id, type }: ElementDefinition) =>
  pipe(
    type,
    O.fromNullable,
    O.chain(head),
    // TODO: Why are Element.id and Extension.url types only extensions?
    O.map(({ code }) =>
      id === "Element.id" || id === "Extension.url" ? "string" : code
    ),
    O.getOrElse(() => "")
  );

const contentReferenceElementType = ({
  contentReference
}: ContentReferenceElementDefinition) =>
  pipe(
    contentReference.slice(1).split("."),
    stringsToPascalCase
  );

const isPrimitive = (type: string) =>
  Object.keys(FHIRPrimitives).includes(type);

const isContentReferenceElement = (
  element: ElementDefinition
): element is ContentReferenceElementDefinition => !!element.contentReference;

/**
 * Determines if ElementDefinition is root declaration of BackboneElement on a Resource
 */
const isBackboneDefinition = (e: ElementDefinition) =>
  (e.type || []).some(({ code }) => code === "BackboneElement");

/**
 * Determines if ElementDefinition is root declaration of Resource
 */
const isResourceDefinition = (resourceTypeName: string, e: ElementDefinition) =>
  e.path === resourceTypeName;
