const INT_MIN = -2147483648;
const INT_MAX = 2147483647;

const ZERO = 48;

export function myAtoi(str: string): number {
  let ret: number = 0;
  let op: boolean = true;
  const strIter = str[Symbol.iterator]();
  let char: IteratorResult<string> = strIter.next();
  while(char.value === ' ' && !char.done) char = strIter.next();

  if (char.value === "-") {
    op = false;
    char = strIter.next();
  } else if (char.value === "+") {
    char = strIter.next();
  }

  while (!char.done) {
    const curBit = parseCharInt(char.value);

    if (isNaN(curBit)) {
      return op ? ret : -ret;
    } else if (INT_MAX - ret * 10 < curBit) {
      return op ? INT_MAX : INT_MIN;
    }

    ret = ret * 10 + curBit;

    char = strIter.next();
  }

  return op ? ret : -ret;
}

function parseCharInt(char: string): number {
  const unicode = char.charCodeAt(0);
  const ret = unicode - ZERO;
  return ret > 9 || ret < 0 ? NaN : ret;
}
