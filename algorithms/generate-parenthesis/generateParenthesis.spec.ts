import { generateParenthesis } from "./generateParenthesis";

describe("gen parenthesis", function() {
  test("n = 3", function() {
    expect(new Set(generateParenthesis(3))).toEqual(
      new Set(["((()))", "(()())", "(())()", "()(())", "()()()"])
    );
  });
});
