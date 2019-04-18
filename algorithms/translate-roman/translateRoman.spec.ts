import { translateRoman } from "./translateRoman";

describe("translate roman", function() {
  test("4", function() {
    expect(translateRoman(4)).toEqual("IV");
  });

  test("9", function() {
    expect(translateRoman(9)).toEqual("IX");
  });

  test("58", function() {
    expect(translateRoman(58)).toEqual("LVIII");
  });

  test("1994", function() {
    expect(translateRoman(1994)).toEqual("MCMXCIV");
  });
});
