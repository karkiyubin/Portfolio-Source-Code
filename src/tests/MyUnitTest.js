/* import { CustomAdd } from "../utilities/CustomAdd";
import { expect, describe, it } from "jest";

describe("custom add function", () => {
  it("should add two numbers correctly", () => {
    const result = CustomAdd(2, 3);
    expect(result).toBe(5);
  });

  it("should handle zero input correctly", () => {
    const result = CustomAdd(0, 0);
    expect(result).toBe(0);
  });

  it("should handle negative numbers", () => {
    const result = CustomAdd(-1, 4);
    expect(result).toBe(3);
  });
}); */

// import { CustomAdd } from "../utilities/CustomAdd";

const CustomAdd = (a, b) => {
  return a + b;
};

// Test cases
const testCases = [
  { input: [2, 3], expectedOutput: 5 },
  { input: [0, 0], expectedOutput: 0 },
  { input: [-1, 4], expectedOutput: 3 },
];

// Run tests
testCases.forEach((testCase) => {
  const result = CustomAdd(testCase.input[0], testCase.input[1]);

  if (result === testCase.expectedOutput) {
    console.log(`Test passed: ${testCase.input} added correctly`);
  } else {
    console.error(
      `Test failed: Expected ${testCase.expectedOutput}, got ${result}`
    );
  }
});
