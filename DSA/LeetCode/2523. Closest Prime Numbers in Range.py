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
            if n%2==0 or n<2: return False
            for i in range(3, int(n**0.5)+1, 2):   # only odd numbers
                if n%i==0:
                    return False    

            return True
        
        n = left +1
        primes = []
        while n > left and n < right:
            if isPrime2(n):
                primes  .append(n)
                
        if len(primes) < 2:
            return [-1,-1]   
        
        pairs = [-1] * (len(primes)-1)
        
        
        for i in range(1, len(primes)):
            pairs[ primes[i]- primes[i-1]] = [primes[i] ,  primes[i-1]]
            
        
        
            
                
         
                
        

        