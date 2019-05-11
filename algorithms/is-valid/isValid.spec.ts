import { isValid } from "./isValid";

describe("is valid", function() {
  test("()", function() {
    expect(isValid("()")).toEqual(true);
  });

  test("()[]{}", function() {
    expect(isValid("()[]{}")).toEqual(true);
  });

  test("([)]", function() {
    expect(isValid("([)]")).toEqual(false);
  });

  test("{[]}", function() {
    expect(isValid("{[]}")).toEqual(true);
  });

  test("{", function() {
    expect(isValid("{")).toEqual(false);
  });
});
