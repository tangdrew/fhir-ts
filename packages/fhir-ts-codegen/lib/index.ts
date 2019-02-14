/**
 * Code generation from FHIR StructureDefinitions
 */

import { readFileSync } from "fs";
import * as glob from "glob";
import { join } from "path";
import { format } from "prettier";

import { ElementDefinition, StructureDefinition } from "./conformance";
import {
  elementName,
  getBackboneElementDefinitions,
  getImports,
  typeDeclaration,
  writeFileAsync
} from "./helpers";

interface File {
  name: string;
  code: string;
}

export class Generator {
  public configuration = {
    fromDifferential: true,
    singleFile: false
  };

  constructor(private input: string, private outputPath: string) {}

  /**
   * Reads input StructureDefinitions, generates code,
   * and writes to output directory.
   */
  public async run() {
    const files = this.readInput(this.input);
    const structureDefinitions = files.map(this.parseDefinition);
    const code = this.generate(structureDefinitions);
    this.write(code);
  }

  /**
   * Read files from input glob pattern
   */
  private readInput = (input: string) => {
    return glob.sync(input).map(fileName => {
      return readFileSync(join(__dirname, "..", fileName)).toString();
    });
  };

  /**
   * Parse the input JSON string to StructureDefinition object
   */
  private parseDefinition = (file: string): StructureDefinition =>
    JSON.parse(file);

  /**
   * Generates code from StructureDefinitions based on configuration
   */
  private generate = (structureDefinitions: StructureDefinition[]): File[] => {
    return structureDefinitions.map(this.renderModule);
  };

  /**
   * Write generated code to output directory
   */
  private write = (files: File[]): Promise<void[]> =>
    Promise.all(
      files.map(({ name, code }) =>
        writeFileAsync(`${this.outputPath}/${name}.ts`, code)
      )
    );

  /**
   * Generates module code for a StructureDefinition
   */
  private renderModule = (structureDefinition: StructureDefinition): File => {
    const { name, snapshot, type } = structureDefinition;
    // TODO: Support from Differential
    const elementDefinitions = (snapshot!.element || []).filter(
      element => element.path !== type
    ); // Filter out root ElementDefinition

    const backboneElements = getBackboneElementDefinitions(
      name,
      elementDefinitions
    );

    const imports = this.configuration.singleFile
      ? ""
      : `${getImports(elementDefinitions)
          .map(i => `import {${i}} from "./${i}"`)
          .join("\n")}`;

    const typeDeclarations = Object.keys(backboneElements)
      .sort()
      .reverse()
      .map(elName => {
        const elements = backboneElements[elName];
        return this.generateType(elName, elements);
      })
      .join("\n\n");

    const code = format(
      `
      /**
       * Module Comment
       */
      import * as primitives from "@tangdrew/primitives";
      import * as t from "io-ts";

      ${imports}

      ${typeDeclarations}
      `,
      { parser: "typescript" }
    );

    return {
      code,
      name
    };
  };

  /**
   * Generates io-ts type code from list of ElementDefinitions
   */
  private generateType = (
    name: string,
    elementDefinitions: ElementDefinition[]
  ): string => {
    const [required, optional] = this.categorizeElementDefinitions(
      elementDefinitions
    );
    const requiredProperties = this.getProperties(required);
    const optionalProperties = this.getProperties(optional);
    return `export const ${name} = t.intersection([
        t.type({
          ${requiredProperties.join(",\n")}
        }),
        t.partial({
          ${optionalProperties.join(",\n")}
        })
      ], "${name}");
      export interface ${name} extends t.TypeOf<typeof ${name}> {}`;
  };

  /**
   * Categorizes element definitions into required and optional
   */
  private categorizeElementDefinitions = (
    elementDefinitions: ElementDefinition[]
  ): [ElementDefinition[], ElementDefinition[]] => {
    return elementDefinitions.reduce<
      [ElementDefinition[], ElementDefinition[]]
    >(
      (accum, curr) => {
        const [required, optional] = accum;
        const { min } = curr;
        const isRequired = min! > 0;
        if (isRequired) {
          return [[...required, curr], optional];
        }
        return [required, [...optional, curr]];
      },
      [[], []]
    );
  };

  /**
   * Parses StructureDefinition into sorted io-ts property definitions
   */
  private getProperties = (
    elementDefinitions: ElementDefinition[]
  ): string[] => {
    return elementDefinitions
      .sort((a, b) => (elementName(a) > elementName(b) ? 1 : -1))
      .map(element => {
        const { path, short } = element;
        const propertyName = elementName(element);
        const typeName = typeDeclaration(element);
        if (!typeName) {
          throw new Error(`Expected a type for element ${path}.`);
        }
        return `/** ${short} */
        ${propertyName}: ${typeName}`;
      });
  };
}
