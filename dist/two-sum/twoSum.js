"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoSum(nums, target) {
    const numberIndexMap = new Map();
    // eslint-disable-next-line
    for (const i in nums) {
        const v = nums[i];
        if (numberIndexMap.has(target - v)) {
            return [numberIndexMap.get(target - v), Number(i)];
        }
        else {
            numberIndexMap.set(v, Number(i));
        }
    }
    return [-1, -1];
}
exports.twoSum = twoSum;
