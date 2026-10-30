function two_sum(nums, target) {
    let numToIndex = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        numToIndex.set(nums[i], i);
    }
    
    return [];
}

console.log(two_sum([2, 7, 11, 15], 9));