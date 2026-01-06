class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        
        max_ = max( num1, num2 )
        min_ = min( num1, num2 )
        
        op = 0 
        while max_ >= min_ and min_ > 0:
            if min_ == 0:
                return 0
            op += max_ // min_
            max_ , min_ = min_, max_ % min_
        
        return op



        
        