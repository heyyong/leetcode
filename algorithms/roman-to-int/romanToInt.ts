export function romanToInt(s: string): number {
  const n = s.length;
  let offset = 0;
  let num = 0;

  while (s[offset] !== undefined) {
    if (s[offset] === "M") {
      num += 1000;
    } else if (s[offset] === "D") {
      num += 500;
    } else if (s[offset] === "C") {
      // for 'CM' or 'CD'
      if (offset + 1 < n && s[offset + 1] === "M") {
        num += 900;
        offset++;
      } else if (offset + 1 < n && s[offset + 1] === "D") {
        num += 500;
        offset++;
      } else {
        num += 100;
      }
    } else if (s[offset] === "L") {
      num += 50;
    } else if (s[offset] === "X") {
      // for 'XC' or 'XL'
      if (offset + 1 < n && s[offset + 1] === "C") {
        num += 90;
        offset++;
      } else if (offset + 1 < n && s[offset + 1] === "L") {
        num += 40;
        offset++;
      } else {
        num += 10;
      }
    } else if (s[offset] === "V") {
      num += 5;
    } else if (s[offset] === "I") {
      // for 'IX' or 'IV'
      if (offset + 1 < n && s[offset + 1] === "X") {
        num += 9;
        offset++;
      } else if (offset + 1 < n && s[offset + 1] === "V") {
        num += 4;
        offset++;
      } else {
        num += 1;
      }
    } else {
      throw new Error(`un-supported roman char ${s[offset]}`);
    }
    offset++;
  }

  return num;
}
