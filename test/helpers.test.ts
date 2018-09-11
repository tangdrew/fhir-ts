import {
  elementName,
  isBackboneElement,
  isChoiceType,
  parentName
} from "../lib/helpers";

/**
 * Helper tests
 */

describe("parentName", () => {
  it("should return the Resource name for a Resource element", () => {
    const elementDefinition = { path: "Patient.id" };
    expect(parentName(elementDefinition)).toBe("Patient");
  });

  it("should return the BackboneElement name for a BackboneElement element", () => {
    const elementDefinition = { path: "Patient.contact.id" };
    expect(parentName(elementDefinition)).toBe("PatientContact");
  });

  it("should return an empty string for a base Resource", () => {
    const elementDefinition = { path: "Patient" };
    expect(parentName(elementDefinition)).toBe("");
  });
});

describe("elementName", () => {
  it("should return the element name for a Resource element", () => {
    const elementDefinition = { path: "Patient.id" };
    const type = { code: "id" };
    expect(elementName(elementDefinition, type)).toBe("id");
  });

  it("should return the element name for a BackboneElement element", () => {
    const elementDefinition = { path: "Patient.contact.id" };
    const type = { code: "id" };
    expect(elementName(elementDefinition, type)).toBe("id");
  });

  it("should return an empty string for a base Resource", () => {
    const elementDefinition = { path: "Patient" };
    expect(elementName(elementDefinition, undefined)).toBe("");
  });

  it("should return the element name based on type for a choice type element", () => {
    const elementDefinition = {
      path: "Patient.deceased[x]",
      type: [{ code: "boolean" }]
    };
    const type = { code: "boolean" };
    expect(elementName(elementDefinition, type)).toBe("deceasedBoolean");
  });
});

describe("isBackboneElement", () => {
  it("should return false if ElementDefinition has no type", () => {
    const elementDefinition = {};
    expect(isBackboneElement(elementDefinition)).toBe(false);
  });

  it("should return false if ElementDefinition has is not BackboneElement type", () => {
    const elementDefinition = { type: [{ code: "string" }] };
    expect(isBackboneElement(elementDefinition)).toBe(false);
  });

  it("should return true if ElementDefinition has is BackboneElement type", () => {
    const elementDefinition = { type: [{ code: "BackboneElement" }] };
    expect(isBackboneElement(elementDefinition)).toBe(true);
  });
});

describe("isChoiceType", () => {
  it("should return false if path does not end with '[x]'", () => {
    const elementDefinition = { path: "Patient.id" };
    expect(isChoiceType(elementDefinition)).toBe(false);
  });

  it("should return true if path ends with '[x]'", () => {
    const elementDefinition = { path: "Patient.deceased[x]" };
    expect(isChoiceType(elementDefinition)).toBe(true);
  });
});
