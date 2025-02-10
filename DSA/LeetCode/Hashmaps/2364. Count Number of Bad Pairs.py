## Solution 1 (will timeout on huge set)
from ast import List
from collections import defaultdict


class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        badPairs = 0
        map = {}
        for i in range(len(nums) - 1):
            map[i] = nums[i] - i
            for j in range(i + 1, len(nums)):

                if map[i] != nums[j] - j:
                    badPairs += 1
        return badPairs
    

## Solution 2

class Solution:
    def countBadPairs(self, nums: List[int]) -> int:
        gPairs = 0
        L = len(nums)
        pairs = int ( (L * (L - 1)) / 2 )
        map = defaultdict(int)
        for i in range(L):

            gPairs += map[nums[i] - i]
            map[nums[i] - i] += 1

        return  pairs - gPairs 

