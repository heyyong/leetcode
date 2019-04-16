import {lengthOfLongestSubstring} from "./lengthOfLongestSubstring";

describe("length of longest substring", function() {
  test("abcabcbb", function() {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual("abc".length);
  });

  test("bbbb", function() {
    expect(lengthOfLongestSubstring("bbbb")).toEqual("b".length);
  });

  test("pwwkew", function() {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual("wke".length);
  });

  test("au", function() {
    expect(lengthOfLongestSubstring("au")).toEqual("au".length);
  });

  test("abba", function() {
    expect(lengthOfLongestSubstring("abba")).toEqual("ab".length);
  });
});
