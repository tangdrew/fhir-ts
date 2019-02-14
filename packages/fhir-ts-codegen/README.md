# fhir-ts-codegen

Generate [io-ts](https://github.com/gcanti/io-ts) runtime types from FHIR StructureDefinitions.

## Disclaimer

This project is still in early stages of development and should not be considered "production-ready".

## Installation

```sh
npm install @tangdrew/fhir-ts-codegen -g
```

## Usage

```sh
Usage: fhir-ts-codegen [options]

Options:
  -i, --input <dir>   input pattern to StructureDefinitions
  -o, --output <dir>  path to output directory
  -V, --version       output the version number
  -h, --help          output usage information
```

Example:

```sh
fhir-ts-codegen "structure-definitions/**.profile.json" "types"
```

## License

[MIT licensed](./LICENSE).
