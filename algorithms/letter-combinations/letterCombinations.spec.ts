import { letterCombinations } from "./letterCombinations";

describe("letter combinations", function() {
  test("23", function() {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf"
    ]);
  });
});
