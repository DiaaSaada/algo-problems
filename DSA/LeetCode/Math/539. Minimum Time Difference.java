class Solution {
    public int findMinDifference(List<String> timePoints) {
        final int MINUTES_IN_24_HOURS = 24 * 60;
        List<Integer> militaryTime = new ArrayList<>();

        // Convert time points into minutes since midnight
        for (String time : timePoints) {
            int hour = Integer.parseInt(time.substring(0, 2));
            int minute = Integer.parseInt(time.substring(3, 5));
            int totalMinutes = hour * 60 + minute;
            militaryTime.add(totalMinutes);
        }

        // Sort the times
        Collections.sort(militaryTime);

        int minDiff = MINUTES_IN_24_HOURS;

        // Calculate the minimum difference
        for (int i = 0; i < militaryTime.size(); i++) {
            int diff = militaryTime.get((i + 1) % militaryTime.size()) - militaryTime.get(i);

        if (diff == 0) {
               return 0;
            }
            // Handle negative difference (crossing midnight)
            if (diff < 0) {
                diff += MINUTES_IN_24_HOURS;
            }

            minDiff = Math.min(minDiff, diff);
        }

        return minDiff;
    }
}
