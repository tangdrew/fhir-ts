/**
 * Script to download StructureDefinitions from http://hl7.org
 */

import { StructureDefinition } from "../lib/conformance";

import { writeFile } from "fs";
import { default as fetch } from "node-fetch";
import { format } from "prettier";
import { promisify } from "util";

const writeFileAsync = promisify(writeFile);

const FHIR_BASE_URL = "http://hl7.org/fhir";

const downloadResources = async (version: string) => {
  const bundle = await fetch(
    `${FHIR_BASE_URL}/${version}/profiles-resources.json`
  ).then(res => res.json());
  const capabilityStatement = bundle.entry[0].resource;
  // Add Resource to list of StructureDefinitions to download
  const resources = [
    ...capabilityStatement.rest[0].resource.map(r => r.type.toLowerCase()),
    "resource"
  ];
  return Promise.all(
    resources.map(async resource => {
      const filename = `${resource}.profile.canonical.json`;
      const structureDefinition = await fetch(
        `${FHIR_BASE_URL}/${version}/${filename}`
      ).then(res => res.json());
      return writeFileAsync(
        `../structure-definitions/${version}/${filename}`,
        format(JSON.stringify(structureDefinition), { parser: "json" })
      ).then(() => {
        // tslint:disable-next-line:no-console
        console.log(`Downloaded ${resource}`);
      });
    })
  );
};

const downloadComplexTypes = async (version: string) => {
  const bundle = await fetch(
    `${FHIR_BASE_URL}/${version}/profiles-types.json`
  ).then(res => res.json());
  const complexTypeDefinitions: StructureDefinition[] = bundle.entry
    .filter(entry => entry.resource.kind === "complex-type")
    .map(entry => {
      return entry.resource;
    });
  return Promise.all(
    complexTypeDefinitions.map(async structureDefinition => {
      const filename = `${structureDefinition.name.toLowerCase()}.profile.canonical.json`;
      return writeFileAsync(
        `../structure-definitions/${version}/${filename}`,
        format(JSON.stringify(structureDefinition), { parser: "json" })
      ).then(() => {
        // tslint:disable-next-line:no-console
        console.log(`Downloaded ${structureDefinition.name}`);
      });
    })
  );
};

const download = async (version: string) => {
  // Change working directory to packages/fhir-ts-codegen/scripts
  process.chdir(__dirname);
  // tslint:disable-next-line:no-console
  console.log("Downloading...");
  downloadResources(version).then(() =>
    // tslint:disable-next-line:no-console
    console.log("Downloading Resources finished.")
  );
  downloadComplexTypes(version).then(() =>
    // tslint:disable-next-line:no-console
    console.log("Downloading ComplexTypes finished.")
  );
};

download("R4");
