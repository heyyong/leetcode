const MAX_BOUNDARY = 214748364;

export function reverseInt(x: number): number {
  let ret: number = 0;
  let curBit: number = 0;
  let op: boolean = true;
  x < 0 && (op = false);
  x = Math.abs(x);

  while (x !== 0) {
    if (ret > MAX_BOUNDARY) return 0;
    curBit = x % 10;
    x = Math.floor(x / 10);

    ret = ret * 10 + curBit;
  }

  return op ? ret : -ret;
}
