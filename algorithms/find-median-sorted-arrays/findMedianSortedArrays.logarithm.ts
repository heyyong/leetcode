export function findMedianSortedArrays(A: number[] = [], B: number[] = []): number | null {
  if(A.length === 0 && B.length === 0) return null;

  let m = A.length;
  let n = B.length;
  // 确保 m <= n
  if (m > n) {
    [A, B] = [B, A];
    [m, n] = [n, m];
  }

  // 0 <= i < m
  let iMin = 0, iMax = m;
  let halfLen = Math.floor((m + n + 1) / 2)

  while(iMin <= iMax) {
    let i = Math.floor((iMin + iMax) / 2);
    let j = halfLen - i;
    if(i < iMax && B[j - 1] > A[i]) {
      iMin = i + 1; // 说明 i 小了
    } else if(i > iMin && A[i - 1] > B[j]) {
      iMax = i - 1; // 说明 i 大了
    } else { // 
      let maxLeft = 0;
      if (i === 0) { 
        maxLeft = B[j - 1] 
      } else if (j === 0) {
        maxLeft = A[i - 1];
      } else {
        maxLeft = Math.max(A[i - 1], B[j - 1]);
      }

      if ( (m + n) % 2 === 1) return maxLeft;

      let minRight = 0;
      if(i === m) {
        minRight = B[j];
      } else if(j === n) {
        minRight = A[i];
      } else {
        minRight = Math.min(B[j], A[i]);
      }

      return (maxLeft + minRight) / 2.0;
    }
  }

  return 0.0
}