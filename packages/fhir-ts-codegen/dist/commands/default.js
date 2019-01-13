"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const clime_1 = require("clime");
const generateDefinition_1 = require("../generateDefinition");
let default_1 = class default_1 extends clime_1.Command {
    execute(inputPath, outputPath) {
        generateDefinition_1.generateDefinitions(inputPath, outputPath);
    }
};
__decorate([
    __param(0, clime_1.param({
        description: "Path to structure definitions",
        required: true
    })),
    __param(1, clime_1.param({
        description: "Output path for Typescript declarations",
        required: true
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "execute", null);
default_1 = __decorate([
    clime_1.command({
        description: "This is a command for generating Typescript declarations for FHIR from structure definitions"
    })
], default_1);
exports.default = default_1;
//# sourceMappingURL=default.js.map