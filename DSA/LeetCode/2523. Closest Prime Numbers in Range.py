from typing import List

"""
Input: left = 10, right = 19
Output: [11,13]"""
class Solution:
    def closestPrimes(self, left: int, right: int) -> List[int]:
        if right-left < 2:
            return [-1,-1]
        

        def isPrime2(n):
            if n==2 or n==3: return True
            if n%2==0 or n<2 or n%3==0 or  n%5==0 or  n%7==0:
                return False
            for i in range(3, int(n**0.5)+1, 2):   # only odd numbers
                if n%i==0:
                    return False    

            return True
        
        n = left  
        primes = []
        while n >= left and n <= right:
            if isPrime2(n):
                primes.append(n)
            n += 1
                
        if len(primes) < 2:
            return [-1,-1]   
         
        pairs = [-1,-1]   
        min_ = float('inf')
         
        
        for i in range(1, len(primes)):
            diff =   primes[i]- primes[i-1] 
            if diff < min_:
                pairs = [primes[i-1],primes[i]]
                min_ = diff
        return pairs
                 
         
      
print( Solution().closestPrimes(10,19) ) 
print( Solution().closestPrimes(850350,851803) ) 

            
        
        
            
                
         
                
        

        