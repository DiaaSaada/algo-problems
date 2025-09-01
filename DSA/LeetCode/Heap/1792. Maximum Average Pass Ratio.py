import heapq
from typing import List

class Solution:
    def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:
        
        def gain(p, t):
            return (p + 1) / (t + 1) - p / t

        # Build a max-heap using negative gain
        heap = [(-gain(p, t), p, t) for p, t in classes]
        heapq.heapify(heap)

        while extraStudents > 0:
            g, p, t = heapq.heappop(heap)
            # Add one student to the class
            p, t = p + 1, t + 1
            # Push back with updated gain
            heapq.heappush(heap, (-gain(p, t), p, t))
            extraStudents -= 1

        # Compute final average
        total = sum(p / t for _, p, t in heap)
        return total / len(classes)
