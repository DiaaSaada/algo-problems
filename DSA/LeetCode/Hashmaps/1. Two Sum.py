class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map_  = {}

        for i in range(len(nums)):
            n = nums[i]
            if n in map_:
                return [i , map_[n]]
            map_[target-n] =  i
        