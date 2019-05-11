export function fourSum(
  nums: number[],
  target: number
): [number, number, number, number][] {
  nums = nums.sort((a, b) => a - b);
  const n = nums.length;
  const ret: [number, number, number, number][] = [];

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      let l = j + 1;
      let r = n - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum > target) {
          r--;
        } else if (sum < target) {
          l++;
        } else {
          ret.push([nums[i], nums[j], nums[l], nums[r]]);
          while (nums[l] === nums[l + 1]) l++;
          while (nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        }
      }
      while (nums[j] === nums[j + 1]) j++;
    }
  }

  return ret;
}
