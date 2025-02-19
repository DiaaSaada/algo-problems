"""You are given a 0-indexed string pattern of length n consisting of the characters 'I' meaning increasing and 'D' meaning decreasing.

A 0-indexed string num of length n + 1 is created using the following conditions:

num consists of the digits '1' to '9', where each digit is used at most once.
If pattern[i] == 'I', then num[i] < num[i + 1].
If pattern[i] == 'D', then num[i] > num[i + 1].
Return the lexicographically smallest possible string num that meets the conditions."""

"""Input: pattern = "IIIDIDDD"
Output: "123549876"""

class Solution:
    def smallestNumber(self, pattern: str) -> str:
        
        value = 1
        res = ["_"] * (len(pattern) + 1)
        index = 0 
        for c in pattern:
            if c== "I":
                res[index] = str(value)
                value +=1                
            index += 1
        value = len(pattern) + 1
        i = len(res)-1
        print ( res)
        while i >= 0:
            if res[i] == "_":
                
                res[i] = str(value)
                print ( { "index": i, "value" : value})
                value -= 1  
            i -=1             
             
        
        return "".join(res)