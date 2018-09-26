#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clime_1 = require("clime");
const Path = require("path");
const cli = new clime_1.CLI("fhir-ts", Path.join(__dirname, "commands"));
const shim = new clime_1.Shim(cli);
shim.execute(process.argv);
//# sourceMappingURL=index.js.map