from typing import List


class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        sum_ = 0
        res, odd_count, even_count = 0, 0, 0
        MOD = 10 ** 9 + 7
        for i in range(0, len(arr)):
            sum_ = (sum_ + arr[i]) % 2
            if sum_ % 2:  #### ODD
                res = (res + 1 + even_count) % MOD
                odd_count += 1
            else:  ### EVEN
                res = (res + odd_count) % MOD
                even_count += 1

        return res


print([100, 100, 99, 99], 3, Solution().numOfSubarrays([100, 100, 99, 99]))
print("--------------------------------------------------------")
print([1, 3, 5], 4, Solution().numOfSubarrays([1, 3, 5]))
print("--------------------------------------------------------")
print([2, 4, 6], 0, Solution().numOfSubarrays([2, 4, 6]))
print("--------------------------------------------------------")
print([1, 2, 3, 4, 5, 6, 7], 16, Solution().numOfSubarrays([1, 2, 3, 4, 5, 6, 7]))
