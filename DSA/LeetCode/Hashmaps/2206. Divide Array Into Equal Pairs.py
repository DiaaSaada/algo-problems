class Solution:
    def divideArray(self, nums: List[int]) -> bool:

        map_ = {}

        for n in nums:
            if n in map_:
                del map_[n]
            else:
                map_[n] =  True
        
        return False if len(map_)  else True

        