from typing import List


class Solution:
    def mergeArrays(self, nums1: List[List[int]], nums2: List[List[int]]) -> List[List[int]]:
        res= []
        l =  max( len(nums1), len(nums2))
        p1, p2 = 0 ,0
        while p1 < len(nums1) and p2 < len(nums2):
            id1, val1 = nums1[p1]
            id2, val2 = nums1[p2]
            if id1 == id2:
              res.append([id1, val1+val2])  
              p1 += 1
              p2 += 1
        return res