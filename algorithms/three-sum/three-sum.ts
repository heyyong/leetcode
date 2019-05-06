export function threeSum(nums: number[]): number[][] {
  const n = nums.length;
  const results: [number, number, number][] = [];

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    let j = i + 1;
    let k = n - 1;
    const a = nums[i];
    while (j < k) {
      const b = nums[j];
      const c = nums[k];
      const result = a + b + c;

      if (result < 0) {
        j++;
      } else if (result > 0) {
        k--;
      }

      if (result === 0) {
        results.push([a, b, c]);

        while (j < k && nums[j] === nums[j + 1]) j++;
        while (j < k && nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      }
    }
  }

  return results;
}


