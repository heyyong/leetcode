export function twoSum(nums: number[], target: number): [number, number] {
  const numberIndexMap = new Map<number, number>();
  // eslint-disable-next-line
  for (const i in nums) {
    const v = nums[i];
    if (numberIndexMap.has(target - v)) {
      return [numberIndexMap.get(target - v)!, Number(i)];
    } else {
      numberIndexMap.set(v, Number(i));
    }
  }

  return [-1, -1];
}
