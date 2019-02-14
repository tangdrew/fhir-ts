#!/usr/bin/env node

const program = require("commander");
const config = require("../package.json");
const { Generator } = require("../dist");

program
  .name("fhir-ts-codegen")
  .option("-i, --input <dir>", "input pattern to StructureDefinitions")
  .option("-o, --output <dir>", "path to output directory")
  .version(config.version)
  .parse(process.argv);

if (program.input && program.output) {
  const generator = new Generator(program.input, program.output);
  generator.run();
} else {
  program.help()
}
