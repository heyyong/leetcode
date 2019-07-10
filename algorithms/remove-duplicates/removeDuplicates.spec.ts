import { removeDuplicates } from "./removeDuplicates";

describe("removeDuplicates", function() {
  test("[1, 1, 2], return [1, 2]", function() {
    const arr = [1, 1, 2];
    expect(removeDuplicates(arr)).toEqual(2);
    expect(arr.slice(0, 2)).toEqual([1, 2]);
  });

  test("[0, 0, 1, 1, 1, 2,2,2 3, 3, 4]", function() {
    const arr = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    expect(removeDuplicates(arr)).toEqual(5);
    console.log(arr);
    expect(arr.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });
});
