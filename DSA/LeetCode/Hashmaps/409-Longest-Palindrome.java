import java.util.HashMap;

class Solution {
    public int longestPalindrome(String s) {

        HashMap<Character, Integer> map = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
               int rep = map.getOrDefault(c, 0);
            map.put(c, rep + 1);

        }
        int count = 0;

        int OddsCount = 0;
        for (int k : map.values()) {

            if (k % 2 == 0) {
                count += k;
            } else {
                count += k - 1;
                OddsCount++;
            }
        }

        if (OddsCount > 0)
            count += 1;
        return count;

    }
}