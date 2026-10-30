function two_sum(nums, target) {
    let indexTo = new Map();
    for(let i = 0; i < nums.length; i++){
        let comp = target - nums[i]
        if(indexTo.has(comp)){
            return [indexTo.get(comp),i]
        }
        indexTo.set(nums[i],i)
    }
   return [] 
}

console.log(two_sum([2, 7, 11, 15], 9));