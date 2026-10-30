def two_sum(nums,target):
    """
    This function takes a list of numbers and a target number as input.
    It returns the indices of the two numbers in the list that add up to the target number.
    
    :param nums: List of integers
    :param target: Integer target sum
    :return: List containing the indices of the two numbers that add up to the target
    """
    num_to_index = {}
    
    for index, num in enumerate(nums):
        complement = target - num
        if complement in num_to_index:
            return [num_to_index[complement], index]
        num_to_index[num] = index
    
    return []  # Return an empty list if no solution is found


print(two_sum([2, 7, 11, 15], 9))