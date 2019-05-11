export function threeSum(
  nums: number[],
  target: number
): [number, number, number][] | null {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const result: [number, number, number][] = [];
  for (let i = 0; i < n - 2; i++) {
    const a = nums[i];
    let l = i + 1;
    let r = n - 1;
    while (l < r) {
      const b = nums[l];
      const c = nums[r];
      const sum = a + b + c;
      if (sum < target) {
        l++;
      } else if (sum > target) {
        r--;
      } else {
        result.push([a, b, c]);

        while (nums[l] === nums[l + 1]) l++;
        while (nums[r] === nums[r - 1]) r--;
        l++;
        r--;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }

  return result;
}
