export function threeSumClosest(nums: number[], target: number):number | null {
  if (nums.length < 3) throw new Error('need array at least has three number')
  let n = nums.length;
  nums = nums.sort((a, b) => a - b);
  let closest: number = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i ++) {
    let a = nums[i];
    let start = i + 1, end = n -1;
    while(start < end) {
      let b = nums[start], c = nums[end];
      let sum = a + b + c;

      if(Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }

      if(sum > target) {
        end --;
      } else if (sum < target) {
        start ++;
      } else {
        return target;
      }
    }
  }

  return closest;
}