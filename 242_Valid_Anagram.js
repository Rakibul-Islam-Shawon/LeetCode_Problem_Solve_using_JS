// 

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; // If lengths differ, not an anagram

    let countMap = {};

    // Count characters in `s`
    for (let char of s) {
        countMap[char] = (countMap[char] || 0) + 1;
    }

    // Subtract counts based on `t`
    for (let char of t) {
        if (!countMap[char]) {
            return false; // Character in `t` is not in `s` or is extra
        }
        countMap[char]--;
    }

    return true; // If all counts match, it's an anagram
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
