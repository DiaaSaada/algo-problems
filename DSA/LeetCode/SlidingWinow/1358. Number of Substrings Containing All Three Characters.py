class Solution:
    def numberOfSubstrings(self, s: str) -> int:
         
        left = 0
        char_count = {'a': 0, 'b': 0, 'c': 0}
        result = 0
        n = len(s)
        
        for right in range(n):
            char_count[s[right]] +=1
            
            while all( char_count.values()):
                res += n-right
                char_count[s[left]] -= 1
                left += 1
        return result