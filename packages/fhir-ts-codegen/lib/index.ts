#!/usr/bin/env node

import { CLI, Shim } from "clime";
import * as Path from "path";

const cli = new CLI("fhir-ts-codegen", Path.join(__dirname, "commands"));

const shim = new Shim(cli);
shim.execute(process.argv);
