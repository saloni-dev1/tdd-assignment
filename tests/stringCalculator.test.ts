import { add } from "../src/stringCalculator";

// Ist test case
describe("String Calculator", () => {
  it("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  //2nd test case
  it("returns number itself for single number", () => {
    expect(add("2")).toBe(2)
  })

  //3rd test case
  it("returns sum of two comma-seperated numbers", () => {
    expect(add("1,4")).toBe(5)
  })
  
  //4th test case
  it("throws an error if negative numbers are included", () => {
  expect(() => add("-1,4,-2")).toThrow("negative numbers not allowed -1,-2");
});

// 5th test case
it("handles newline as a delimiter along with comma", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  // 6th test case
  it("supports custom delimiter", () => {expect(add("//;\n1;2")).toBe(3);});

  // 7th test case
  it("ignores numbers greater than 1000", () => {expect(add("2,1001")).toBe(2);expect(add("1000,1")).toBe(1001);
  });

  // 8th test case
  it("supports delimiters of any length", () => {expect(add("//[***]\n1***2***3")).toBe(6);
  });
  
  

});
