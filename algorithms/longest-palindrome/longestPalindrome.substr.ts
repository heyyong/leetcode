import { checkPalindrome } from './longestPalindrome.enumerate';

export function longestPalindrome(s: string = ''): string {
  let n = s.length;
  let substrMatrix: number[][] = (
    new Array(n)
      .fill(null)
      .map(
        () => new Array(n).fill(0)
      )
  );
  let maxPos = {
    length: 0,
    row: -1,
    column: -1
  };

  const reversePos = (index: number) => (n - index)

  substrMatrix.map(
    (rowValue, row) => rowValue.map(
      (columnValue, column) => {
        if (s[row] === s[reversePos(column) - 1]) {
          if (row === 0 || column === 0) {
            substrMatrix[row][column] = 1;
          } else {
            substrMatrix[row][column] = substrMatrix[row - 1][column - 1] + 1;
          }

          if (substrMatrix[row][column] > maxPos.length) {
            maxPos.row = row;
            maxPos.column = column;
            maxPos.length = substrMatrix[row][column];
          }
        }
      }
    )
  );

  if (maxPos.length === 0) return '';
  
  return s.slice(maxPos.row + 1 - substrMatrix[maxPos.row][maxPos.column], maxPos.row + 1);
}