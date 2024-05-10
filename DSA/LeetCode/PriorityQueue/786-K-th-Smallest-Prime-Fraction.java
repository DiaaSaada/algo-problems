class Solution {

    public int[] kthSmallestPrimeFraction(int[] arr, int k) {
        
       PriorityQueue<int[]> minHeap = new PriorityQueue<>(Comparator.comparingDouble(a -> (double) a[0] / a[1]));
        int N = arr.length;
        
        for (int i = 0; i < N; ++i) {
            for (int j = i + 1; j < N; ++j) {
                minHeap.offer(new int[]{arr[i], arr[j]});
            }
        }
        
        int[] result = null;
        for (int i = 0; i < k; ++i) {
            result = minHeap.poll();
        }
        
        return result; 
    }
}