class Solution:
    def singleNumber(self, nums: List[int]) -> List[int]:
        map = {}
        for num in nums:
            if num not in map:
                map[num] = 1 
                continue
            elif num in map:
                map.pop(num)
             
                
        return map
        