def two_sum(nums,target):
    """
    This function takes a list of numbers and a target number as input.
    It returns the indices of the two numbers in the list that add up to the target number.
    
    :param nums: List of integers
    :param target: Integer target sum
    :return: List containing the indices of the two numbers that add up to the target
    """
    nums_dict = {}
    for i , val in enumerate(nums):
        next_val = target -val
        if next_val in nums_dict:
            return [nums_dict[next_val], i]
        nums_dict[val] = i
    print(nums_dict)
    return []    


print(two_sum([2, 7, 11, 15], 9))