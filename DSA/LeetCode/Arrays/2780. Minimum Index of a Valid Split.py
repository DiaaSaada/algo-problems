from collections import defaultdict, Counter
from typing import List


class Solution:
    def minimumIndex(self, nums: List[int]) -> int:

        n = len(nums)

        freq  =  Counter(nums)

        dom = max(freq, key=freq.get)  ## max(freq.keys(), key=lambda x: freq[x])
        dom_total = freq[dom]
        print(dom_total , )
        left_dom_count, right_dom_count = 0,0
        for i, num in enumerate(nums):
            if num == dom:
                left_dom_count += 1
                right_dom_count = dom_total - left_dom_count
                left_size, right_size = i + 1, n - (i + 1)

                # Check if dom is dominant in both halves
                if 2 * left_dom_count > left_size and 2 * right_dom_count > right_size:
                    return i

        return -1




