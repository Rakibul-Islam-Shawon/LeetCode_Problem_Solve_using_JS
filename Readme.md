# 🚀 LeetCode Solutions in JavaScript

Welcome to my **LeetCode Solutions Repository**! This repository documents my journey of solving LeetCode problems daily using **JavaScript**. The primary goal is to enhance my problem-solving skills, master JavaScript, and prepare for technical interviews.

---

## 📋 Purpose

- **Daily Practice**: Solve at least one problem daily to stay consistent and disciplined.
- **Learning Algorithms**: Implement various algorithms like sorting, searching, dynamic programming, and graph traversal.
- **Mastering JavaScript**: Gain a deeper understanding of JavaScript concepts while solving real-world coding challenges.
- **Interview Preparation**: Sharpen my problem-solving skills for technical interviews.
- **Sharing Knowledge**: Provide clean and well-documented solutions for others to learn from or reference.

---

## 🗂️ Repository Structure

The repository is organized into file based on problem number and name:

## 📅 Daily Progress

Each commit in this repository includes:
- The problem name and a link to the problem on LeetCode.
- A well-documented JavaScript solution.
- Comments explaining the logic, approach, and any edge cases considered.
- Examples and test cases used for verification.

---

## 📖 Example Solution Format

Each solution follows a consistent structure for clarity:

```javascript
/**
 * Problem: Two Sum
 * Link: https://leetcode.com/problems/two-sum/
 * 
 * Approach:
 * - Use a hash map to store the complement of each number.
 * - Check if the complement exists in the map as we iterate through the array.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

// Example Usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]