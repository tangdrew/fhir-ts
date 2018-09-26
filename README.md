# fhir-ts
FHIR Typescript definitions generator.

## Installation
```sh
npm install fhir-ts -g
```

## Usage
```sh
fhir-ts <pattern> <output-directory>
```

Example:
```sh
fhir-ts "structure-defintions/**.profile.json" "types"
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
    - [ ] Property enum types
    - [ ] Default values
    - [x] Content reference
 - Primitive types
    - [x] Type aliases
 - CLI options
