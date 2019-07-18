import { strStr } from "./strStr.bf";
import { strStr as kmpStr } from "./strStr.kmp";

const methods = [strStr, kmpStr];

describe("strStr", function() {
  methods.forEach(strStr => {
    test("hello, ll", function() {
      const result = strStr("hello", "ll");
      expect(result).toEqual(2);
    });

    test("aaaaaa, bba", function() {
      expect(strStr("aaaaa", "bba")).toEqual(-1);
    });

    test("both empty should return 0", function() {
      expect(strStr("", "")).toEqual(0);
    });

    test("input mississippi and mississippi should return 0", function() {
      expect(strStr("mississippi", "mississippi")).toEqual(0);
    });

    test("mississippi and issip should return 4", function() {
      expect(strStr("mississippi", "issip")).toEqual(4);
    });

    test("aabaaabaaac and aabaaac should return 4", function() {
      expect(strStr("aabaaabaaac", "aabaaac")).toEqual(4);
    });

    test("input mississippi and pi should return 9", function() {
      expect(strStr("mississippi", "pi")).toEqual(9);
    });

    test("mississippi and sipp should return 6", function() {
      expect(strStr("mississippi", "sipp")).toEqual(6);
    });

    test("ababababababababababab and abababab should return 0", function() {
      expect(strStr("ababababababababababab", "abababab")).toEqual(0);
    });
  });
});
