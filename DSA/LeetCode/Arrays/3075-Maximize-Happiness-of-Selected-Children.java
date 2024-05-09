import java.util.Arrays;
import java.util.Collections;

class Solution {
    public long maximumHappinessSum(int[] happiness, int k) {

        Arrays.sort(happiness);

        int decreaseby = 0;
        long sum = 0;
        for (int i = happiness.length - 1; i > happiness.length - 1 - k; i--) {
            int child = happiness[i];
            if (decreaseby >= child) {
                return sum;
            }
            sum += child - decreaseby;
            decreaseby++;
        }
        return sum;

    }
}