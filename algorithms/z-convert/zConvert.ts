export function zConvert(s: string, numRows: number): string {
  if(numRows === 1) return s;

  const rowMatrix: string[] = new Array(numRows).fill("");
  let currRow = 0;
  let goingDown = false;

  for (const char of s) {
    rowMatrix[currRow] += char;
    if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;

    currRow += goingDown? 1 : -1;
  }

  return rowMatrix.reduce((ret, str) => `${ret}${str}`, "");
}
