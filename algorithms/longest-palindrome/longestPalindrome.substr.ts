import {checkPalindrome} from "./longestPalindrome.enumerate";

export function longestPalindrome(s: string = ""): string {
  const n = s.length;
  const substrMatrix: number[][] = (
    new Array(n)
      .fill(null)
      .map(
        () => new Array(n).fill(0)
      )
  );
  const maxPos = {
    length: 0,
    row: -1,
    column: -1,
  };

  const reversePos = (index: number) => (n - index);
  const getSlicePos = (row: number, column: number, length: number): [number, number] => [row + 1 - length, row + 1];

  substrMatrix.map(
    (rowValue, row) => rowValue.map(
      (columnValue, column) => {
        if (s[row] === s[reversePos(column) - 1]) {
          if (row === 0 || column === 0) {
            substrMatrix[row][column] = 1;
          } else {
            substrMatrix[row][column] = substrMatrix[row - 1][column - 1] + 1;
          }

          if (
            substrMatrix[row][column] > maxPos.length &&
            checkPalindrome(s, ...getSlicePos(row, column, substrMatrix[row][column]))
          ) {
            maxPos.row = row;
            maxPos.column = column;
            maxPos.length = substrMatrix[row][column];
          }
        }
      }
    )
  );

  if (maxPos.length === 0) return "";
  return s.slice(...getSlicePos(maxPos.row, maxPos.column, substrMatrix[maxPos.row][maxPos.column]));
}
