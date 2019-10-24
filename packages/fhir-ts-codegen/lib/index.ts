import { pipe } from "fp-ts/lib/pipeable";
import { map } from "fp-ts/lib/Array";
import { readFileSync } from "fs";
import * as glob from "glob";

import { generateModule, generateBarrel } from "./code-generater";
import { parse } from "./parser";
import { StructureDefinition } from "./conformance";
import { writeFileAsync } from "./helpers";

export const run = (input: string, outputPath: string) =>
  pipe(
    readInput(input),
    map(parseDefinition),
    map(parse),
    map(generateModule),
    modules => [...modules, generateBarrel(modules)],
    modules => writeOutput(outputPath, modules)
  );

const readInput = (input: string) =>
  pipe(
    process.cwd(),
    cwd => {
      return glob.sync(`${cwd}/${input}`).map(fileName => {
        return readFileSync(fileName).toString();
      });
    }
  );

const writeOutput = (
  outputPath: string,
  modules: { name: string; code: string }[]
) =>
  pipe(
    modules,
    map(({ name, code }) => writeFileAsync(`${outputPath}/${name}.ts`, code)),
    writes => Promise.all(writes)
  );

/**
 * Parse the input JSON string to StructureDefinition object
 */
const parseDefinition = (file: string): StructureDefinition => JSON.parse(file);
