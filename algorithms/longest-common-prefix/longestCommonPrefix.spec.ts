import { longestCommonPrefix } from "./longestCommonPrefix";

describe("longest common prefix", function() {
  test("fl", function() {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  });

  test("not exist", function() {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  });
});
