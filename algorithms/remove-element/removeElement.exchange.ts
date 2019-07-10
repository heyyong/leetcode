export function removeElement(nums: number[], val: number): number {
  let i = 0;
  let j = nums.length - 1;
  let temp;

  while (j >= i) {
    if (nums[j] === val) {
      j--;
      continue;
    }

    if (nums[i] === val) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    }
    i++;
  }

  return i;
}
