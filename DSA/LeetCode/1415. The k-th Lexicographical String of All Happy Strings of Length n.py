class Solution:
    def getHappyString(self, n: int, k: int) -> str:

        _set = ['a', 'b', 'c']
        lst = []
        def rec(str , l):
            if len(lst) == k:
                return
            if len(str) == n:
                lst.append(str)
                return
            rec(str + _set[l+1%3] , (l+1)%3)
            rec(str + _set[l+2%3] , (l+2)%3 )
            
            
            
        rec('a', 0)
        rec('b', 1)
        rec('c',2)
        return lst[-1] if len(lst) == k else ""