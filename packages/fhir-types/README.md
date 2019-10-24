# `fhir-types`

Runtime Types for [FHIR](https://www.hl7.org/fhir/) built on top of [io-ts](https://github.com/gcanti/io-ts). `io-ts` introduces the concept of a runtime type which represents a runtime validator for a static TypeScript type. These types were generated using [fhir-ts-codegen](../fhir-ts-codegen/README.md) from the canonical FHIR StructureDefinitions.

## Disclaimer

This project is still in early stages of development and should not be considered "production-ready".

## Motivation

FHIR promises a future of interoperability and much easier exchange of healthcare data. There are a lot of great ideas in FHIR, but it doesn't matter if developers don't implement it. The specification is so large and verbose that it's nearly impossible to be confident that your data is even valid. The goal of this project is to leverage the conformance resources exposed by FHIR, code generation, static types, and runtime validation to build a library improves confidence when playing with FHIR.

## Installation

```sh
npm install @tangdrew/fhir-types
```

## Usage

```typescript
import { R4 } from "@tangdrew/fhir-types";

// validation succeeded
R4.Coding.decode(
  JSON.parse(
    '{"system":"http://loinc.org","version":"2.62","code":"55423-8","display":"Number of steps in unspecified time Pedometer"}'
  )
); // => Right({{system:"http://loinc.org",version:"2.62",code:"55423-8",display:"Number of steps in unspecified time Pedometer"})

// validation failed
R4.Coding.decode(JSON.parse('{"system":false}')); // => Left([...])
```

## License

[MIT licensed](./LICENSE).
