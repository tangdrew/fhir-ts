#!/usr/bin/env node
const program = require("commander");
const config = require("../package.json");
const { run } = require("../dist");

program
  .name("fhir-ts-codegen")
  .option("-i, --input <dir>", "input pattern to StructureDefinitions")
  .option("-o, --output <dir>", "path to output directory")
  .version(config.version)
  .parse(process.argv);

if (program.input && program.output) {
  run(program.input, program.output);
} else {
  program.help()
}
