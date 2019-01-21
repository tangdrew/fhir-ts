# fhir-ts-codegen

FHIR TypeScript definitions generator.

## Disclaimer

This project is still in early stages of development and should not be considered "production-ready".

## Installation

```sh
npm install @tangdrew/fhir-ts-codegen -g
```

## Usage

```sh
fhir-ts-codegen <pattern> <output-directory>
```

Example:

```sh
fhir-ts-codegen "structure-defintions/**.profile.json" "types"
```

## Roadmap

- Resource Definitions
  - [x] Interface declaration from snapshot
  - [x] Property names
  - [x] Property type names
  - [x] Optional properties
  - [x] Array properties
  - [x] JSDoc comments
  - [x] Backbone Element properties
  - [ ] Interface declaration from differential
  - [ ] Default values
  - [x] Content reference
- Primitive types
  - [x] Type aliases
  - [x] Extensions
- CLI options

## License

[MIT licensed](./LICENSE).
