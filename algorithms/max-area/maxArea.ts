export function maxArea(height: number[] = []): number {
  let maxArea = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      maxArea = Math.max(maxArea, (j - i) * Math.min(height[i], height[j]));
    }
  }

  return maxArea;
}
