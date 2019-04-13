"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lengthOfLongestSubstring(s) {
    const n = s.length;
    let ans = 0;
    const runeMap = new Map();
    for (let j = 0, i = 0; j < n; j++) {
        i = Math.max(i, runeMap.get(s[j]) || 0);
        ans = Math.max(ans, j - i + 1);
        runeMap.set(s[j], j + 1);
    }
    return ans;
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
