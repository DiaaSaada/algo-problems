class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:

        map_ = defaultdict(int)
        freq = 0
        max_ = 0 
        for n in nums:
            map_[n] += 1
            if map_[n] > max_:
                freq = 1
                max_ =   map_[n]
            elif map_[n] == max_:
                freq +=1
            max_ =  max( max_, map_[n])

        return freq*max_

        
        