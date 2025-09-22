class Solution:
    def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:

        map1 = {}
        map2 = {}

        for i in range(len(list2)):
            map2[list2[i]] = i

        minm = 2001
        res= []
        for i in range(len(list1)):
            key = list1[i]
            if key in map2 and i + map2[key] <= minm:
                if i + map2[key] < minm:
                    res= [key]
                else:
                    res.append( key )
                minm = i + map2[key]
        return res

