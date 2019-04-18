export function maxArea(height: number[]): number {
  let start = 0;
  let end = height.length - 1;
  let maxArea: number = 0;

  while (end > start) {
    maxArea = Math.max(
      maxArea,
      (end - start) * Math.min(height[start], height[end])
    );

    if (height[start] >= height[end]) {
      end--;
    } else {
      start++;
    }
  }

  return maxArea;
}
