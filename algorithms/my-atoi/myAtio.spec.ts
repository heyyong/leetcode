import { myAtoi } from "./myAtoi";

describe("my atio", function() {
  test("   -42", function() {
    expect(myAtoi("   -42")).toEqual(-42);
  });

  test("4193 with words", function() {
    expect(myAtoi("4193 with words")).toEqual(4193);
  });

  test("words and 987", function() {
    expect(myAtoi("words and 987")).toEqual(0);
  });

  test("nagative overflow", function() {
    expect(myAtoi("-91283472332")).toEqual(-2147483648);
  });

  test("positive overflow", function() {
    expect(myAtoi("2147483648")).toEqual(2147483647);
  });
});
