# `primitives`

Runtime Types for [FHIR primitive types](https://www.hl7.org/fhir/datatypes.html) built on top of [io-ts](https://github.com/gcanti/io-ts). `io-ts` introduces the concept of a runtime type which represents a runtime validator for a static TypeScript type. It can decode unknown typed input and validate against FHIR primitive type rules.

## Usage

```typescript
import { instant } from "@tangdrew/primitives";

// validation succeeded
instant.decode("2015-02-07T13:28:17.239+02:00"); // Right("2015-02-07T13:28:17.239+02:00")

// validation succeeded
instant.decode(12345); // Left([...])
```

These primitive type combinators can be combined to form complex FHIR types.

```typescript
import * as t from "io-ts";
import { uri, string, code, boolean } from "@tangdrew/primitives";

const Coding = t.partial({
  system: uri,
  version: string,
  code: code,
  display: string,
  userSelected: boolean
});

// validation succeeded
Coding.decode(
  JSON.parse(
    '{"system":"http://loinc.org","version":"2.62","code":"55423-8","display":"Number of steps in unspecified time Pedometer"}'
  )
); // => Right({{system:"http://loinc.org",version:"2.62",code:"55423-8",display:"Number of steps in unspecified time Pedometer"})

// validation failed
Coding.decode(JSON.parse('{"system":false}')); // => Left([...])
```

## License

[MIT licensed](./LICENSE).
