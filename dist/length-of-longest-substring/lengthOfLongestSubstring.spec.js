"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lengthOfLongestSubstring_1 = require("./lengthOfLongestSubstring");
describe("length of longest substring", function () {
    test("abcabcbb", function () {
        expect(lengthOfLongestSubstring_1.lengthOfLongestSubstring("abcabcbb")).toEqual("abc".length);
    });
    test("bbbb", function () {
        expect(lengthOfLongestSubstring_1.lengthOfLongestSubstring("bbbb")).toEqual("b".length);
    });
    test("pwwkew", function () {
        expect(lengthOfLongestSubstring_1.lengthOfLongestSubstring("pwwkew")).toEqual("wke".length);
    });
    test("au", function () {
        expect(lengthOfLongestSubstring_1.lengthOfLongestSubstring("au")).toEqual("au".length);
    });
    test("abba", function () {
        expect(lengthOfLongestSubstring_1.lengthOfLongestSubstring("abba")).toEqual("ab".length);
    });
});
