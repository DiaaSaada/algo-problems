class Solution {
    public String[] findRelativeRanks(int[] scores) {

        Integer[] sortedScores = Arrays.stream(scores).boxed().sorted((a, b) -> b - a).toArray(Integer[]::new);
        Map<Integer, Integer> placesMap = new HashMap<>();
        for (int i = 0; i < sortedScores.length; i++) {
            placesMap.put(sortedScores[i], i + 1);
        }
        Map<Integer, String> places = new HashMap<>();
        places.put(1, "Gold Medal");
        places.put(2, "Silver Medal");
        places.put(3, "Bronze Medal");

        String[] res = new String[scores.length];
        for (int i = 0; i < scores.length; i++) {
            int score = scores[i];
            int place = placesMap.get(score);
            res[i] = places.getOrDefault(place, Integer.toString(place));
        }
        return res;
    }
}