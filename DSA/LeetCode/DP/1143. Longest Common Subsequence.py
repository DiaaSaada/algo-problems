"""Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3."""

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        left1, left2 = 0
        
        if len(text1) < len(text2):
            small = text1
            large = text2
        else:
            small = text2
            large = text1
        len_ = min(small)   
        while left1 < len_:
            
        
        