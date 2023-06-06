// | PROBLEM 1 | //
// 1. Two Sum

const sumTarget = (nums, target) => {
  for (const [i, num] of nums.entries()) {
    if (
      num + nums[nums.lastIndexOf(target - num)] === target &&
      i !== nums.lastIndexOf(target - num)
    ) {
      return [i, nums.lastIndexOf(target - num)];
    }
  }
};

// console.log(sumTarget([3, 2, 4], 6));
// ************************************************** //

// | PROBLEM 2 | //
// 9. Palindrome Number

const isPalindrome = (num) => {
  return num.toString().split("").reverse().join("") === num.toString();
};

// console.log(isPalindrome(121));

// ************************************************** //

// | PROBLEM 3 | //
// 13. Roman to Integer

const romanToInt = function (s) {
  let res = 0;
  const data = new Map([
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ]);

  for (let i = 0; i < s.length; ) {
    if (data.has(s.substring(i, i + 2))) {
      res += data.get(s.substring(i, i + 2));
      i += 2;
    } else {
      res += data.get(s.substring(i, i + 1));
      i++;
    }
  }

  return res;
};

// console.log(romanToInt("LVIII"));

// ************************************************** //

// | PROBLEM 4 | //
// 14. Longest Common Prefix

const longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) {
    return "";
  }

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) {
        return "";
      }
    }
  }

  return prefix;
};

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// ************************************************** //

// | PROBLEM 5 | //
// 20. Valid Parentheses

const isValid = function (strs) {
  if (!strs || strs.length < 2 || strs.length % 2) return false;
  const data = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let stack = [];

  for (const char of strs) {
    if (data.has(char)) stack.push(char);
    if (!data.has(char)) {
      if (data.get(stack.pop()) !== char) return false;
    }
  }

  return stack.length === 0;
};

// console.log(isValid("[{(())}]"));
// ************************************************** //

// | PROBLEM 6 | //
// 21. Merge Two Sorted Lists

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// ************************************************** //
// | PROBLEM 6 | //
// 26. Remove Duplicates from Sorted Array
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length - 1; i++)
    if (nums[i] === nums[i + 1]) {
      console.log(nums[i]);
      nums.splice(i + 1, 1);
      i--;
    }
  return nums.length;
};
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// ************************************************** //
// | PROBLEM 7 | //
// 26. Remove Element
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++)
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  return nums.length;
};
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

// ************************************************** //

// | PROBLEM 8 | //
// 28. Find the Index of the First Occurrence in a String

const firstOccur = (string_1, string_2) => {
  return string_1.indexOf(string_2);
};

// console.log(firstOccur("sadbutsad", "sad"));

// ************************************************** //

// | PROBLEM 9 | //
// 35. Search Insert Position

const searchInsert = (nums, target) => {
  if (nums.includes(target)) return nums.indexOf(target);
  if (!nums.includes(target)) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] > target) return i;
    }
    return nums.length - 1;
  }
};

// console.log(searchInsert([3, 6, 7, 8, 10], 5));

// | PROBLEM 10 | //
// 58. Length of Last Word

const lengthOfLastWord = (string) => {
  const arrString = string.split(" ");
  return arrString.filter((el) => el !== "").pop().length;
};

// console.log(lengthOfLastWord("   fly me   to   the moon  "));

// | PROBLEM 11 | //
// 66. Plus One

const plusOne = (digits) => {
  const integers = digits.join("");
  const increament = BigInt(integers) + BigInt;
  return Array.from(String(increament), Number);
};

// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

// | PROBLEM 12 | //
// 67. Add Binary

const addBinary = (a, b) => {
  const decNum1 = BigInt(`0b${a}`);
  const decNum2 = BigInt(`0b${b}`);

  const sum = BigInt(decNum1 + decNum2);
  return sum.toString(2);
};

console.log(addBinary("11", "1"));
