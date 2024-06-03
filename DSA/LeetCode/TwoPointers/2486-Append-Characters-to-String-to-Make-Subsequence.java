class Solution {
    public int appendCharacters(String s, String t) {
        int sP = 0;
        int tP = 0;

        while (sP < s.length() && tP < t.length()) {
            if (s.charAt(sP) == t.charAt(tP)) {

                tP++;
            }
            sP++;

        }
        if (tP != t.length()) {
            return t.length() - tP;
        }
        return 0;
    }
}