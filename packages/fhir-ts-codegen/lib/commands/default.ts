import { Command, command, param } from "clime";
import { generateDefinitions } from "../generateDefinition";

@command({
  description:
    "This is a command for generating Typescript declarations for FHIR from structure definitions"
})
export default class extends Command {
  public execute(
    @param({
      description: "Path to structure definitions",
      required: true
    })
    inputPath: string,
    @param({
      description: "Output path for Typescript declarations",
      required: true
    })
    outputPath: string
  ) {
    generateDefinitions(inputPath, outputPath);
  }
}
