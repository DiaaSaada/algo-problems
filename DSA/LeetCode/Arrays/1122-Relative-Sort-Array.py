from collections import defaultdict
class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        

        map = defaultdict(int)
        for n in arr1:
            map[n] += 1
        
        res = []
        for n in arr2:
            repeat = map.get(n, 0)
            res.extend([n] * repeat)
            map.pop(n)
        
        temp = []
        for num, repeat in map.items():  
            temp.extend([num] * repeat)

        temp.sort()
        res.extend( temp)

        return res
 