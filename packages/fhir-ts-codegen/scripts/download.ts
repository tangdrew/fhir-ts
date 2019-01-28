/**
 * Script to download StructureDefinitions from http://hl7.org
 */

import { writeFile } from "fs";
import { default as fetch } from "node-fetch";
import { format } from "prettier";
import { promisify } from "util";

const writeFileAsync = promisify(writeFile);

const FHIR_BASE_URL = "http://hl7.org/fhir";

const download = async (version: string) => {
  const bundle = await fetch(
    `${FHIR_BASE_URL}/${version}/profiles-resources.json`
  ).then(res => res.json());
  const capabilityStatement = bundle.entry[0].resource;
  const resources = capabilityStatement.rest[0].resource.map(r =>
    r.type.toLowerCase()
  );
  return Promise.all(
    resources.map(async resource => {
      const filename = `${resource}.profile.canonical.json`;
      const structureDefinition = await fetch(
        `${FHIR_BASE_URL}/${filename}`
      ).then(res => res.json());
      console.log(`Writing ${resource}`);
      return writeFileAsync(
        `./structure-definitions/${version}/${filename}`,
        format(JSON.stringify(structureDefinition), { parser: "json" })
      );
    })
  );
};

download("R4");
