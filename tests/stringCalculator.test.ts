import { add } from "../src/stringCalculator";

// First test case
describe("String Calculator", () => {
  it("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  // second test case
  it("returns number itself for single number", () => {
    expect(add("2")).toBe(2)
  })

});
