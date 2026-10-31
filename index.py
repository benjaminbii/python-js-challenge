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



# Given a string s containing only the characters (, ), {, }, [ and ], determine if the input string is valid.

# A string is valid if:

# Every opening bracket is closed by the same type of bracket.
# Brackets are closed in the correct order.
# Every closing bracket has a matching opening bracket.



def is_valid(s):
    stack = []
    brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    # Removed enumerate since index isn't used
    for val in s:
        if val in brackets:
            # Check if stack is empty before popping
            if not stack:
                return False
                
            last = stack.pop()
            if last != brackets[val]: # Used brackets[val] since we know the key exists
                return False
        else:
            stack.append(val)
            
    return len(stack) == 0        

print(is_valid("{[}"))  # Outputs: False
print(is_valid("()[]{}"))  # Outputs: True
print(is_valid("(["))  # Outputs: False
print(is_valid("]"))  # Outputs: False (No longer crashes!) 