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

// console.log(isValid("()")); // true
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
// console.log(isValid(")(")); // false
// console.log(isValid("((")); // false
// console.log(isValid("{[()]}")); // true



// function findDuplicate(arr) {
//   let dup = [ ]
//   for (let j =0;j<arr.length;j++){
//     for(let i =j + 1;i<arr.length;i++){
      
//       if (arr[j] === arr[i]){
//         if(dup.indexOf(arr[i]) === -1){
//           dup.push(arr[i])

//         }
        
//       }
//     }
     
// }
// return dup
// }

// console.log(findDuplicate([2, 5, 5, 5, 9, 9]))

function firstNonRepeating(arr){
  const numbers = [4, 5, 2, 5, 4, 7, 2, 9];

const frequency = {};

for (let i = 0; i < numbers.length; i++) {
  const currentNumber = numbers[i];
  if(`${currentNumber}` in frequency){
    frequency[currentNumber] +=1 
  }else{
    frequency[currentNumber] = 1

  }

}

for(let i=0 ; i<arr.length;i++){
  if(frequency[arr[i]] === 1){
    return arr[i]
  }

}
return null
}

console.log(firstNonRepeating([4, 5, 2, 5, 4, 7, 2, 9]))