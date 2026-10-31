function two_sum(nums, target) {
  let indexTo = new Map();
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (indexTo.has(comp)) {
      return [indexTo.get(comp), i];
    }
    indexTo.set(nums[i], i);
  }
  return [];
}

console.log(two_sum([2, 7, 11, 15], 9));

// Given a string s containing only the characters (, ), {, }, [ and ], determine if the input string is valid.

// A string is valid if:

// Every opening bracket is closed by the same type of bracket.
// Brackets are closed in the correct order.
// Every closing bracket has a matching opening bracket.

function isValid(s) {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const pairs = { ")": "(", "}": "{", "]": "[" };

  for (const char of s) {
    if (char in pairs) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid(")(")); // false
console.log(isValid("((")); // false
console.log(isValid("{[()]}")); // true
