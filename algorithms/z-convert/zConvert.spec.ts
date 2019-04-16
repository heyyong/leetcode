import { zConvert } from "./zConvert";

describe("z convert", function() {
  test("LEETCODEISHIRING", function() {
    expect(zConvert("LEETCODEISHIRING", 3)).toEqual("LCIRETOESIIGEDHN");
  });

  test("LEETCODEISHIRING", function() {
    expect(zConvert("LEETCODEISHIRING", 4)).toEqual("LDREOEIIECIHNTSG");
  });

  test("asdf", function() {
    expect(zConvert("asdf", 1)).toEqual("asdf");
  });
});
