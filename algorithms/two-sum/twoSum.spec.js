"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const twoSum_1 = require("./twoSum");
test('two sums', function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum_1.twoSum(nums, target)).toEqual([0, 1]);
});
