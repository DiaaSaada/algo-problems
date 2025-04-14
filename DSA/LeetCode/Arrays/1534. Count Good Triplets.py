class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        
        L= len(arr)
        res = 0
        for i in range(0,L-2 ):
            for j in range(i+1, L-1):
                if abs(arr[i] - arr[j]) > a:
                    continue
                for k in range(j+1, L):
                    if abs(arr[j] - arr[k]) <= b and abs(arr[i] - arr[k]) <= c:
                        res +=1
        
        return res
                    