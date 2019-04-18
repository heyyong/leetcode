import { romanToInt } from "./romanToInt";

describe("roman to int", function() {
  test("III", function() {
    expect(romanToInt("III")).toEqual(3);
  });

  test("IV", function() {
    expect(romanToInt("IV")).toEqual(4);
  });

  test("IX", function() {
    expect(romanToInt("IX")).toEqual(9);
  });

  test("LVIII", function() {
    expect(romanToInt("LVIII")).toEqual(58);
  });
});
