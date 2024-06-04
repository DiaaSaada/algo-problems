from collections import defaultdict 

class Solution(object):
    def longestPalindrome(self, s):

        map = defaultdict(int)
        for  i in range(len(s)):
                         
            map[s[i]] = map[s[i]] + 1
        
        count = 0

        OddsCount = 0
        for  k in map.values():
            if k % 2 == 0:
                count += k
            else:
                count += k - 1
                OddsCount +=1
            
        

        if OddsCount > 0:
            count += 1
        return count

