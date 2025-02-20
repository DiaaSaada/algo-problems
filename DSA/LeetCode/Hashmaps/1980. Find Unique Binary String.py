class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        map_ = {}
        for num in nums:
            map_[num] = True

        l = len(nums)
        for i in range(2**l):

            bin_ = "{0:b}".format(i).zfill(l)

            if bin_ not in map_:
                return bin_
        return ""
