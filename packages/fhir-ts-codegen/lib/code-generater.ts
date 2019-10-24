import { pipe } from "fp-ts/lib/pipeable";
import { map, flatten, filter, uniq, sort, partition } from "fp-ts/lib/Array";
import { format } from "prettier";

import { ElementGroup, AnalyzedElement } from "./parser";
import { eqString } from "fp-ts/lib/Eq";
import { ordString } from "fp-ts/lib/Ord";

export const generateModule = ({
  name,
  groups
}: {
  name: string;
  groups: { [key: string]: ElementGroup };
}) =>
  pipe(
    Object.keys(groups),
    map(key => groups[key]),
    map(generateDeclarations),
    declarations =>
      combine({
        name,
        declarations,
        imports: generateImports({ name, groups })
      }),
    formatTypescript,
    code => ({ name, code })
  );

const combine = ({
  name,
  imports,
  declarations
}: {
  name: string;
  imports: string[];
  declarations: string[];
}) => `
  /**
   * ${name} Module
   */
  import * as primitives from "@tangdrew/primitives";
  import * as t from "io-ts";

  ${imports.join("\n")}

  ${declarations.join("\n\n")}
`;

/**
 * Generates TypeScript barrel code for the module
 */
export const generateBarrel = (modules: { name: string; code: string }[]) =>
  pipe(
    modules,
    map(({ name }) => `export { ${name} } from "./${name}";`),
    lines => lines.join("\n"),
    code => ({
      code,
      name: "index"
    })
  );

const formatTypescript = (code: string) =>
  format(code, { parser: "typescript" });

const generateDeclarations = (group: ElementGroup) =>
  [generateInterface(group), generateCodec(group)].join("\n");

const generateImports = ({
  name,
  groups
}: {
  name: string;
  groups: { [key: string]: ElementGroup };
}) =>
  pipe(
    Object.keys(groups).map(key => groups[key]),
    map(({ elements }) => elements),
    flatten,
    filter(
      ({ backbone, contentReference, primitive, recursive }) =>
        !primitive && !backbone && !contentReference && !recursive
    ),
    map(({ type }) => type),
    // Ensure Element is imported
    types => [...types, "Element"],
    filter(type => type !== name),
    uniq(eqString),
    sort(ordString),
    map(type => `import { ${type} } from "./${type}";`)
  );

const generateInterface = ({ name, comment, elements }: ElementGroup) =>
  pipe(
    elements,
    map(generateProperty),
    properties =>
      `/**
        * ${comment}
        */
       export interface ${name} {
         ${properties.join("\n")}
       }`
  );

const generateProperty = ({
  array,
  comment,
  iotsType,
  name,
  required,
  type
}: AnalyzedElement) =>
  pipe(
    ["boolean", "string"].includes(type) ? type : iotsType,
    typeName => `/** ${comment} */
  ${name}${required ? "" : "?"}: ${typeName}${array ? "[]" : ""};`
  );

const generateCodec = ({ name, comment, elements }: ElementGroup) =>
  pipe(
    elements,
    partition(element => element.required),
    ({ left, right }) => ({
      optional: left.map(generateIotsProperty),
      required: right.map(generateIotsProperty)
    }),
    ({ optional, required }) =>
      `/**
        * ${comment}
        */
       export const ${name}: t.Type<${name}> = t.recursion<${name}>(
         "${name}",
         () => t.intersection([
           t.type({
             ${required.join(",\n")}
           }),
           t.partial({
             ${optional.join(",\n")}
           }),
         ])
       )`
  );

const generateIotsProperty = ({
  array,
  comment,
  name,
  iotsType
}: AnalyzedElement) =>
  `/** ${comment} */
  ${name}: ${array ? `t.array(${iotsType})` : iotsType}`;
