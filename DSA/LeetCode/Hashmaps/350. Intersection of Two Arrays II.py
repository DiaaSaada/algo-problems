class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:

        map1 = defaultdict(int)
        map2 = defaultdict(int)
        for a in nums1:
            map1[a] +=1
        

        for a in nums2:
            map2[a] +=1
        

        res = []
        for k, v in map1.items():
            min_val = min(map1.get(k, 0), map2.get(k, 0))
            res.extend([k] * min_val)

        return res
        