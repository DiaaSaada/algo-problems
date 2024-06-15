class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: List[int], capital: List[int]
    ) -> int:
        # it was too hard for me @2024.06.15 copied the solution for NeetCodeIO
        # this solution is using minHeap & maxHeap pattern
        maxProfit = []
        minCapital = [(c, p) for c, p in zip(capital, profits)]
        heapq.heapify(minCapital)

        print(minCapital)

        for i in range(k):
            while minCapital and minCapital[0][0] <= w:
                c, p = heapq.heappop(minCapital)
                heapq.heappush(maxProfit, -1 * p)

            if not maxProfit:
                break
            w += -1*heapq.heappop(maxProfit)
        return w
