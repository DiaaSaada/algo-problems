from typing import List


class Solution:
    def repairCars(self, ranks: List[int], cars: int) -> int:
        ranks.sort(reverse = True)
        min_rank = ranks[-1]
        max_rank = ranks[0]
         
        #workingCapacity =  min( len(ranks) , cars)
        #workingCapacity = workingCapacity * workingCapacity
        #min_ = math.ceil( min_rank * cars * cars / workingCapacity)
        carsPerWorker = math.ceil( cars / len(ranks) )
        
        min_ = carsPerWorker * carsPerWorker * min_rank 
        max_ = carsPerWorker * carsPerWorker * max_rank

        print(min_rank,max_rank,min_, max_  )
        if min_ == max_:
            return min_
        res = max_
        """Input: ranks = [4,2,3,1], cars = 10""" 
        """ 6 - 25 """
        while min_ <= max_:
            mid = (min_ + max_) // 2
            fixed= 0 
            for rank in ranks:
                # rank * fixed * fixed = mid.
                fixed += int( (mid  /  rank) ** 0.5 )
                print( f" time: {mid} &  rank {rank} => fixed {fixed}")
                if fixed > cars:
                    break
                
            if fixed < cars:
                min_ = mid +1
            else: 
                res =  min( res , mid )
                 
                max_ = mid -1 
        return int(res        )